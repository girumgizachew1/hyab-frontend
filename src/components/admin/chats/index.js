import React, {
  Fragment,
  useEffect,
  createContext,
  useReducer,
  useState,
} from "react";
import AdminLayout from "../layout";
// import "./style.css";
import io from "socket.io-client";
import Chats from "../../shop/chat/Chats";
import axios from "axios";
import AllChats from "./AllChats";
const apiURL = process.env.REACT_APP_API_URL;
const socket = io.connect(apiURL);

// import axios from "axios";
const ChatComponent = (params) => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <AllChats />
    </div>
  );
};

const ChatIndex = (props) => {
  // const [data, dispatch] = useReducer(customerReducer, customerState);
  return (
    <Fragment>
      {/* <CustomerContext.Provider value={{ data, dispatch }}> */}
      <AdminLayout children={<ChatComponent />} />
      {/* </CustomerContext.Provider> */}
    </Fragment>
  );
};

export default ChatIndex;
