import React, { Fragment, useState, useContext } from "react";
import Login from "./Login";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import EmailSent from "./EmailSent";
import { LayoutContext } from "../index";

const LoginSignup = (props) => {
  const { data, dispatch } = useContext(LayoutContext);

  const [login, setLogin] = useState("login");
  const [loginValue, setLoginValue] = useState("Create an account");

  const loginSignupModalToggle = () =>
    data.loginSignupModal
      ? dispatch({ type: "loginSignupModalToggle", payload: false })
      : dispatch({ type: "loginSignupModalToggle", payload: true });

  const changeLoginSignup = () => {
    if (login === "login") {
      setLogin("signup");
      setLoginValue("Login");
    } else if (login === "signup") {
      setLogin("login");
      setLoginValue("Create an account");
    } else if (login === "forget") {
      setLogin("login");
      setLoginValue("Create an account");
    } else if (login === "email") {
      setLogin("login");
      setLoginValue("Create an account");
    }
  };

  const handleForget = () => {
    setLogin("forget");
    setLoginValue("Login");
  };

  return (
    <Fragment>
      {/* Black Overlay  */}
      <div
        onClick={(e) => loginSignupModalToggle()}
        className={` ${
          data.loginSignupModal ? "" : "hidden"
        } fixed top-0 z-40 w-full h-screen bg-black opacity-50 cursor-pointer`}
      ></div>
      {/* Signup Login Component Render */}
      <section
        className={` ${
          data.loginSignupModal ? "" : "hidden"
        } fixed z-40 inset-0 my-8 md:my-20 flex items-start justify-center overflow-auto`}
      >
        <div className="w-11/12 md:w-3/5 lg:w-2/4 relative space-y-4 bg-white p-6 md:px-12 md:py-6">
          {login === "login" ? (
            <Login changePage={setLogin} />
          ) : login === "signup" ? (
            <Signup changePage={setLogin} />
          ) : login === "forget" ? (
            <ForgetPassword changePage={setLogin} />
          ) : login === "email" ? (
            <EmailSent />
          ) : (
            ""
          )}
          {login === "forget" ? (
            ""
          ) : (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
              <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="px-4 py-2 focus:outline-none border mr-1"
                />
                <label htmlFor="rememberMe">
                  Remember me<span className="text-sm text-gray-600">*</span>
                </label>
              </div>
              <div
                className="block text-gray-600 cursor-pointer"
                onClick={handleForget}
              >
                Lost your password?
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <span className="border-b border-gray-500 w-full" />
            <span className="font-medium">or</span>
            <span className="border-b border-gray-500 w-full" />
          </div>
          <div
            onClick={(e) => changeLoginSignup()}
            style={{ color: "#303031", border: "1px solid #303031" }}
            className="px-4 py-2 font-medium text-center cursor-pointer"
          >
            {loginValue}
          </div>
          {/*  Modal Close Button */}
          <div className="absolute top-0 right-0 mx-4">
            <svg
              onClick={(e) => {
                loginSignupModalToggle();
                dispatch({ type: "loginSignupError", payload: false });
              }}
              className="w-6 h-6 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginSignup;
