import React, { Fragment, useContext } from "react";
import { CustomerContext } from "./index";

const CustomerMenu = (props) => {
  const { dispatch } = useContext(CustomerContext);

  return (
    <Fragment>
      <div className="col-span-1 flex items-center">
      </div>
    </Fragment>
  );
};

export default CustomerMenu;
