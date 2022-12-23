import React from "react";
import Layout from "./index";
import { useHistory, useLocation } from "react-router-dom";

const PageNotFoundComponent = (props) => {
  const history = useHistory();

  return (
    <div className="flex flex-col items-center justify-center my-32">
      <img src="/assets/404.png" alt="404" ></img>
      <button  onClick={(e) => history.push("/")} >
            home
      </button>
    </div>
  );
};

const PageNotFound = (props) => {
  return <Layout children={<PageNotFoundComponent />} />;
};

export default PageNotFound;
