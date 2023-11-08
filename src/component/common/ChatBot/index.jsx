import React, { Component } from "react";
import chatIcon from "assets/images/chatIcon.png";
import "./style.scss";

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      messages: [],
      currentMessage: "",
    };
  }

  toggleChatbox = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleInputChange = (event) => {
    this.setState({ currentMessage: event.target.value });
  };

  handleSendMessage = () => {
    const { currentMessage, messages } = this.state;

    if (currentMessage.trim() === "") {
      return;
    }

    const newMessage = { name: "User", message: currentMessage };
    const updatedMessages = [...messages, newMessage];

    // Simulate API call (replace with actual fetch)
    setTimeout(() => {
      const responseMessage = { name: "Sam", message: "Response from Sam" };
      updatedMessages.push(responseMessage);
      this.setState({ messages: updatedMessages, currentMessage: "" });
    }, 1000);
  };

  render() {
    const { isOpen, messages, currentMessage } = this.state;

    return (
      <div className={`chatbox ${isOpen ? "chatbox--active" : ""}`}>
        {/* Chatbox button */}
        <img
          className="chatbox__button"
          onClick={this.toggleChatbox}
          src={chatIcon}
          alt="Chat"
        />

        <div className="chatbox__support">
          {/* Header */}
          <div class="chatbox__header">
            <div class="chatbox__image--header">
              <img
                src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                alt="image"
              />
            </div>
            <div class="chatbox__content--header">
              <h4 class="chatbox__heading--header">Chat support</h4>
              <p class="chatbox__description--header">
                Hi. My name is Sam. How can I help you?
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbox__messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`messages__item ${
                  message.name === "User"
                    ? "messages__item--visitor"
                    : "messages__item--operator"
                }`}
              >
                {message.message}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="chatbox__footer">
            <input
              type="text"
              placeholder="Write a message..."
              value={currentMessage}
              onChange={this.handleInputChange}
              onKeyPress={(event) =>
                event.key === "Enter" && this.handleSendMessage()
              }
            />
            <button
              className="chatbox__send--footer send__button"
              onClick={this.handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { Chatbot };
