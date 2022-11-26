import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

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
    // joinRoom();
  }, [socket]);

  useEffect(() => {
    fetchChat();
  }, [room]);

  const fetchChat = async () => {
    if (room !== "") {
      const chat = await axios.post(
        "http://localhost:8000/api/chat/single-room",
        {
          room: room,
        }
      );
      setChats(chat.data);
      console.log(chat.data);
    }
  };

  return (
    <div className="">
      {/* <div className="chat-header">
        <p>Live Chat</p>
      </div> */}
      <div className="chat-middle">
        {chats.length > 0
          ? chats.map((messageContent) => {
              return (
                <div
                  className={
                    "hunda" === messageContent.author
                      ? "flex flex-row justify-left mb-2"
                      : "flex flex-row justify-right mb-2"
                  }
                  id={"hunda" === messageContent.author ? "you" : "other"}
                >
                  <div
                    className={
                      "hunda" === messageContent.author
                        ? "flex flex-row text-left"
                        : "flex flex-row text-right"
                    }
                  >
                    {/* <div className="p-2 border-sm bg-green">
                  <p id="author">{messageContent.author}</p>
                </div> */}
                    <div className="flex flex-col space-x-5">
                      <p className="p-2 bg-green-100 rounded-md">
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
      <div className="sticky bottom-0 flex flex-row border-4">
        <input
          type="text"
          className="w-full p-2"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button className="p-3 bg-blue-400" onClick={sendMessage}>
          &#9658;
        </button>
      </div>
    </div>
  );
}
