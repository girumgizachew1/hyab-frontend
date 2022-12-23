import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

const apiURL = process.env.REACT_APP_API_URL;

export default function Chats({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [chats, setChats] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes() +
          ":" +
          new Date(Date.now()).getSeconds(),
      };

      await socket.emit("send_message", messageData);
      console.log("setting state sent");
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
    fetchChat();
  };

  const joinRoom = () => {
    const jwtromm = localStorage.getItem("jwt")
      ? JSON.parse(localStorage.getItem("jwt")).user._id
      : "";
    if (username !== "" && room !== "") {
      socket.emit("join_room", jwtromm);
      // setShowChat(true);
    } else {
      console.log("no room found");
    }
  };

  useEffect(() => {
    // console.log("messageList");
    if (!socket) return;
    socket.on("receive_message", (data) => {
      console.log("messageList on receive measage");
      // console.log(data);
      // setMessageList((list) => [...list, data]);
      fetchChat();
    });
    joinRoom();
  }, [socket]);

  useEffect(() => {
    fetchChat();
  }, [room]);

  const fetchChat = async () => {
    if (room !== "") {
      const chat = await axios.post(apiURL + "/api/chat/single-room", {
        room: room,
      });
      setChats(chat.data);
      console.log(chat.data);
    }
  };

  return (
    <div className="">
      {/* <div className="chat-header">
        <p>Live Chat</p>
      </div> */}
      <div className="chat-middle overflow-y-scroll h-[58vh]">
        {chats.length > 0
          ? chats.map((messageContent) => {
              return (
                <div
                  className={
                    "hunda" === messageContent.author
                      ? "flex flex-row justify-left mb-2 "
                      : "flex flex-row justify-right mb-2 "
                  }
                  id={"hunda" === messageContent.author ? "you" : "other"}
                >
                  <div
                    className={
                      "hunda" === messageContent.author
                        ? "flex flex-row text-left "
                        : "flex flex-row text-right "
                    }
                  >
                    {/* <div className="p-2 border-sm bg-green">
                  <p id="author">{messageContent.author}</p>
                </div> */}
                    <div className="flex flex-col space-x-5">
                      <p className={"hunda" === messageContent.author
                        ?"p-2 bg-gray-200 rounded-md"
                        :"p-2 bg-yellow-600 rounded-md text-white"}>
                        {messageContent.message}
                      </p>
                      <p className="text-sm m-0">{messageContent.time}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <br />
      <div className="sticky bottom-0 flex flex-row">
      <div className="bg-gray-200 rounded-lg p-2 flex items-center w-full">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Type a message..."
        value={currentMessage}
        onChange={(event) => {
          setCurrentMessage(event.target.value);
        }}
        onKeyPress={(event) => {
          event.key === "Enter" && sendMessage();
        }}
      />
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
   
      </div>
    </div>
  );
}
