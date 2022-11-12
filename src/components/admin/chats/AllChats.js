import React, { Fragment, useContext, useState, useEffect } from "react";

import io from "socket.io-client";
import Chats from "../../shop/chat/Chats";
import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;
const socket = io.connect(apiURL);

const AllChats = () => {
  const [username, setUsername] = useState("dagi");
  const [room, setRoom] = useState(
    // JSON.parse(localStorage.getItem("jwt")).user._id
    ""
  );

  useEffect(() => {
    // console.log("join room");
    if (room !== "") {
      joinRoom();
    }
  }, [room, socket]);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      // setShowChat(true);
    }
  };

  return (
    <div>
      <Fragment>
        <div className="flex flex-row justify-between bg-white">
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto sticky top-0">
            <ListOfChats room={setRoom} />
          </div>
          <div className="w-full px-1 flex flex-col justify-between">
            <div>
              <div className="p-4 text-white text-base bg-green-600 font-semibold">
                Chat
              </div>
            </div>
            <div className="m-1 flex-col">
              <Chats socket={socket} username={username} room={room} />
            </div>
          </div>
        </div>
        {/* Black Overlay */}
      </Fragment>
    </div>
  );
};

const ListOfChats = ({ room }) => {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    fetchChatList();
  }, [room]);

  const fetchChatList = async () => {
    const chat = await axios.post("http://localhost:8000/api/chat/list-room");
    setChatList(chat.data);
    console.log(chat.data);
  };

  return (
    <div className="sticky top-0">
      {chatList.length > 0
        ? chatList.map((list, index) => {
            const chatlist = list._id;
            return (
              <div
                className="flex flex-row py-4 px-2 items-center border-b-2"
                onClick={() => room(chatlist._id)}
              >
                <div class="w-1/4">
                  <img
                    // src="https://source.unsplash.com/otT2199XwI8/600x600"
                    src={chatlist.userImage}
                    class="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div class="w-full">
                  <div class="text-lg font-semibold">{chatlist.name}</div>
                  <span class="text-gray-500">{chatlist.email}</span>
                </div>
              </div>
            );
          })
        : "no chat"}
    </div>
  );
};

export default AllChats;
