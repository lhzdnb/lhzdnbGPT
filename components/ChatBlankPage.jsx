import React from "react";
import { RiOpenaiLine } from "react-icons/ri";

function ChatBlankPage(props) {
  return (
    <div className="flex flex-col min-h-full min-w-full justify-center items-center">
      <RiOpenaiLine className="w-12 h-12 text-primary mb-4" />
      <div>
        <p className="text-2xl text-primary font-bold">
          How can I help you today?
        </p>
      </div>
    </div>
  );
}

export default ChatBlankPage;
