import React, { Fragment, useEffect, useState } from "react";
import "./style.css";
import io from "socket.io-client";
import Chats from "./Chats";
import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;
const socket = io.connect(apiURL);

// import axios from "axios";
export default function Index(params) {
  const [username, setUsername] = useState("hunda");
  const [room, setRoom] = useState(
    localStorage.getItem("jwt")
      ? JSON.parse(localStorage.getItem("jwt")).user._id
      : ""
  );
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    localStorage.getItem("jwt") ? setShow(true) : setShow(false);
    // console.log(id.user._id);
  }, [room]);

  // const username = "hunda";
  // const room = "12356";
  const joinRoom = () => {
    const jwtromm = localStorage.getItem("jwt")
      ? JSON.parse(localStorage.getItem("jwt")).user._id
      : "";
    if (username !== "" && room !== "") {
      socket.emit("join_room", jwtromm);
      // setShowChat(true);
    }
  };

  const data = {
    cartModal: false,
  };

  const chatModalClose = () => {
    setVisible(false);
    console.log("close modal");
  };

  const chatModalOpen = () => {
    joinRoom();
    const id = localStorage.getItem("jwt")
      ? JSON.parse(localStorage.getItem("jwt"))
      : false;
    console.log(id.user._id);
    setVisible(true);
    console.log("open modal");
  };

  return (
    <div>
      {localStorage.getItem("jwt") ? (
        <div>
          {visible ? (
            <Fragment>
              {/* Black Overlay */}
              <div
                className={`
            fixed top-0 z-30 w-full h-full bg-black opacity-50`}
              />
              {/* Cart Modal Start */}
              <section
                className={`fixed z-40 inset-0 flex items-start justify-end`}
              >
                <div
                  style={{ background: "#fff" }}
                  className="w-full md:w-5/12 lg:w-4/12 h-full flex flex-col justify-between"
                >
                  <div className="overflow-y-auto">
                    <div className="sticky top-0 w-full border-b bg-green-600 border-gray-700 flex justify-between shadow-lg">
                      <div className="p-4 text-white text-base bg-green-600 font-semibold">
                        Chat
                      </div>
                      {/* Cart Modal Close Button */}
                      <div className="bg-green-600 p-4 text-white">
                        <svg
                          onClick={(e) => chatModalClose()}
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
                    <div className="m-1 flex-col">
                      <Chats socket={socket} username={username} room={room} />
                    </div>
                  </div>
                  {/* <div className="mt-1 space-y-4"></div> */}
                </div>
              </section>
              {/* Cart Modal End */}
            </Fragment>
          ) : (
            <div
              className="fixed bottom-5 right-5 z-500"
              onClick={chatModalOpen}
            >
              <div className="p-5 rounded-full bg-blue-600">chat</div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
