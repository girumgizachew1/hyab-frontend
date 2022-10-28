import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout";
// import CategoryMenu from "./CategoryMenu";
import AllCustomers from "./AllCustomers";
import { customerState, customerReducer } from "./CustomerContext";

/* This context manage all of the caregories component's data */
export const CustomerContext = createContext();

const CustomerComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      {/* <CategoryMenu /> */}
      <AllCustomers />
    </div>
  );
};

const Customers = (props) => {
  const [data, dispatch] = useReducer(customerReducer, customerState);
  return (
    <Fragment>
      <CustomerContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<CustomerComponent />} />
      </CustomerContext.Provider>
    </Fragment>
  );
};

export default Customers;
