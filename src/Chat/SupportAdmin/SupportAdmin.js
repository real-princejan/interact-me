import React from "react";
import { ChatEngine } from "react-chat-engine";

const SupportAdmin = () => {
  const projectKey = "78002842-9d09-4842-9776-ec664f1c4d39";

  return (
    <ChatEngine
      projectID={projectKey}
      userName="Admin Support"
      userSecret="123"
      height="calc(100vh - 20px)"
    />
  );
};

export default SupportAdmin;
