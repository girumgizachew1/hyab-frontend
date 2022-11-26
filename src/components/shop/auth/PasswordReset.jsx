import React, { Fragment, useEffect, useState, useContext } from "react";
import { changePasswordReq } from "./fetchApi";
import { LayoutContext } from "../index";
import { useParams } from "react-router-dom";
import axios from "axios";

import { CircularProgress } from "@mui/material";

import Navbar from "../partials/Navber";
import Footer from "../partials/Footer";

const PasswordReset = () => {
  const { data: layoutData, dispatch: layoutDispatch } =
    useContext(LayoutContext);

  const [load, setLoad] = useState(false);
  const [wait, setWait] = useState(false);
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const param = useParams();
  const url_F = `https://cute-cyan-tuna-slip.cyclic.app/api/password/${param.id}/${param.token}`;
  const url = `http://localhost:8000/api/password/${param.id}/${param.token}`;

  const [data, setData] = useState({
    password: "",
    error: false,
    loading: true,
  });

  useEffect(() => {
    console.log(url);
    setWait(true);
    const verifyUrl = async () => {
      try {
        await axios.get(url);
        setValidUrl(true);
        setWait(false);
      } catch (error) {
        setValidUrl(false);
        setWait(false);
      }
    };
    verifyUrl();
  }, [url]);

  const alert = (msg) => <div className="text-xs text-red-500">{msg}</div>;
  const message = (msg) => <div className="text-xs text-green-500">{msg}</div>;

  const formSubmit = async () => {
    setLoad(true);
    setData({ ...data, loading: true });
    const pass = data.password;
    try {
      const { data } = await axios.post(url, { password: pass });
      setMsg(data.message);
      setLoad(false);
      setError("");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
      setLoad(false);
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div>
        <Navbar />
        <div className="mt-40">
          {!wait ? (
            <>
              {validUrl ? (
                <>
                  <div className="relative top-20 h-60 flex flex-col space-y-5">
                    <div className="text-center text-2xl mb-3">
                      Change Passwords
                    </div>

                    <form className="space-y-4 w-1/2 pb-6 m-auto">
                      {error && <div>{alert(error)}</div>}
                      {msg && <div>{message(msg)}</div>}
                      <div className="flex flex-col">
                        <label htmlFor="name">
                          Password
                          <span className="text-sm text-gray-600 ml-1">*</span>
                        </label>
                        <input
                          onChange={(e) => {
                            setData({
                              ...data,
                              password: e.target.value,
                              error: false,
                            });
                            layoutDispatch({
                              type: "loginSignupError",
                              payload: false,
                            });
                          }}
                          value={data.password}
                          type="text"
                          id="name"
                          className={`${
                            !data.error ? "" : "border-red-500"
                          } px-4 py-2 focus:outline-none border`}
                        />
                        {!data.error ? "" : alert(data.error)}
                      </div>

                      <div
                        onClick={(e) => formSubmit()}
                        style={{ background: "#303031" }}
                        className="font-medium px-4 py-2 text-white text-center cursor-pointer"
                      >
                        Change Password
                      </div>
                      {load ? (
                        <div className="flex flex-row justify-center">
                          <CircularProgress />
                        </div>
                      ) : (
                        ""
                      )}
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex flex-row justify-center">
                  <h1>404 Not Found</h1>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-row justify-center">
              <CircularProgress />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default PasswordReset;
