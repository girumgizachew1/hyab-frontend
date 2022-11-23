import React, { Fragment, createContext } from "react";
import { Navber, Footer, Footer1, CartModal } from "../partials";
//import LoginSignup from "../auth/LoginSignup";
import LoginSignup from "../auth/LoginSignup";
import Chat from "../chat";
export const LayoutContext = createContext();

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex-grow">
        <div className="absolute h-16 md:h-16 w-full z-20 " ><Navber /></div> 
        <CartModal />
        {/* All Children pass from here */}
        {children}
      </div>
       <div className="rounded-lg" ><Footer /></div>
    </Fragment>
  );
};

export default Layout;
