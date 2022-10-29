import React, { Fragment, useState, useContext } from "react";
import { forgePasswordReq } from "./fetchApi";
import { LayoutContext } from "../index";

const EmailSent = (props) => {
  const alert = (msg) => <div className="text-xs text-red-500">{msg}</div>;
  const message = (msg) => <div className="text-xs text-green-500">{msg}</div>;

  return (
    <Fragment>
      <div className="text-center text-2xl my-6">Email Sent</div>
      <form className="space-y-4">
        <div className="flex flex-col justify-center">
          <label htmlFor="name text-center">
            A link is sent to your email address. check your email and follow
            the link
          </label>
        </div>
      </form>
    </Fragment>
  );
};

export default EmailSent;
