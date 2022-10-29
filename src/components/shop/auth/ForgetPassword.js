import React, { Fragment, useState, useContext } from "react";
import { forgePasswordReq } from "./fetchApi";
import { LayoutContext } from "../index";

import { CircularProgress } from "@mui/material";

const Login = ({ changePage }) => {
  const { data: layoutData, dispatch: layoutDispatch } =
    useContext(LayoutContext);
  const [load, setLoad] = useState(false);

  const [data, setData] = useState({
    email: "",
    error: false,
    success: false,
    loading: true,
  });

  const alert = (msg) => <div className="text-xs text-red-500">{msg}</div>;
  const message = (msg) => <div className="text-xs text-green-500">{msg}</div>;

  const formSubmit = async () => {
    setLoad(true);
    setData({ ...data, loading: true });
    try {
      let responseData = await forgePasswordReq({
        email: data.email,
      });
      if (responseData.error) {
        console.log(responseData.error);
        setLoad(false);
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
        });
      } else if (responseData.message) {
        setLoad(false);
        setData({
          email: "",
          password: "",
          loading: false,
          error: false,
          success: responseData.message,
        });
        changePage("email");
        // window.location.href = "/";
      }
    } catch (error) {
      setLoad(false);
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="text-center text-2xl mb-6">Forget Password</div>
      {!data.success ? "" : message(data.success)}
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name">
            email address
            <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) => {
              setData({ ...data, email: e.target.value, error: false });
              layoutDispatch({ type: "loginSignupError", payload: false });
            }}
            value={data.email}
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
          Send email
        </div>
        {load ? (
          <div className="flex flex:row justify-center">
            <CircularProgress />
          </div>
        ) : (
          ""
        )}
      </form>
    </Fragment>
  );
};

export default Login;
