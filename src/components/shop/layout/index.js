import React, { Fragment, createContext } from "react";
import { Navber, Footer, Footer1, CartModal } from "../partials";
//import LoginSignup from "../auth/LoginSignup";
import LoginSignup from "../auth/LoginSignup";
export const LayoutContext = createContext();

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex-grow">
        <div className="absolute h-16 md:16 w-full z-20 ">
          <Navber />
        </div>
        <LoginSignup />
        <CartModal />
        {/* All Children pass from here */}
        {children}
      </div>
      <div className="rounded-lg">
        <Footer1 />
      </div>
      <div className="rounded-lg">
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
