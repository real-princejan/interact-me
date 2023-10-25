import React, { useState, useEffect } from "react";
import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";

const ChatEngine = (props) => {
  const [showChat, setShowChat] = useState(false);
  const projectKey = "78002842-9d09-4842-9776-ec664f1c4d39";

  useEffect(() => {
    if (props.visible) {
      setTimeout(() => {
        setShowChat(true);
      }, 500);
    }
  });

  return (
    <div
      className="transition-5"
      style={{
        height: props.visible ? "100%" : "0%",
        zIndex: props.visible ? "100" : "0",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {showChat && (
        <ChatEngineWrapper>
          <Socket
            projectID={projectKey}
            userName={props.user.email}
            userSecret={props.user.email}
          />

          <ChatFeed activeChat={props.chat.id} />
        </ChatEngineWrapper>
      )}
    </div>
  );
};

export default ChatEngine;
