import React from "react";
import chatIcon from "assets/images/chatIcon.png";
import "./style.scss";

export function ChatBot() {
  return (
    <div>
      <div className="chatbot-btn">
        <img className="chatbot-image" src={chatIcon} alt="chatIcon" />
      </div>
    </div>
  );
}
