import React, { useEffect } from "react";
import chatIcon from "assets/images/chatIcon.png";
import "./style.scss";

class Chatbox {
  constructor() {
    this.state = false;
    this.messages = [];
  }

  display() {
    const openButton = document.querySelector(".chatbox__button");
    const chatBox = document.querySelector(".chatbox__support");
    const sendButton = document.querySelector(".send__button");

    openButton.addEventListener("click", () => this.toggleState(chatBox));

    sendButton.addEventListener("click", () => this.onSendButton(chatBox));

    const node = chatBox.querySelector("input");
    node.addEventListener("keyup", ({ key }) => {
      if (key === "Enter") {
        this.onSendButton(chatBox);
      }
    });
  }

  toggleState(chatbox) {
    this.state = !this.state;

    if (this.state) {
      chatbox.classList.add("chatbox--active");
    } else {
      chatbox.classList.remove("chatbox--active");
    }
  }

  onSendButton(chatbox) {
    var textField = chatbox.querySelector("input");
    let text1 = textField.value;
    if (text1 === "") {
      return;
    }

    let msg1 = { name: "User", message: text1 };
    this.messages.push(msg1);

    // Mock fetch since we can't actually perform a server request in this environment
    // Replace this with your actual fetch code
    Promise.resolve({ answer: "Mocked response" })
      .then((r) => {
        let msg2 = { name: "Sam", message: r.answer };
        this.messages.push(msg2);
        this.updateChatText(chatbox);
        textField.value = "";
      })
      .catch((error) => {
        console.error("Error:", error);
        this.updateChatText(chatbox);
        textField.value = "";
      });
  }

  updateChatText(chatbox) {
    var html = "";
    this.messages
      .slice()
      .reverse()
      .forEach(function (item) {
        if (item.name === "Sam") {
          html +=
            '<div className="messages__item messages__item--visitor">' +
            item.message +
            "</div>";
        } else {
          html +=
            '<div className="messages__item messages__item--operator">' +
            item.message +
            "</div>";
        }
      });

    const chatmessage = chatbox.querySelector(".chatbox__messages");
    chatmessage.innerHTML = html;
  }
}

export function Chatbot() {
  useEffect(() => {
    const chatbox = new Chatbox();
    chatbox.display();

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div className="container">
      <div className="chatbox">
        <div className="chatbox__support">
          <div className="chatbox__header">
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Ask Our Experts</h4>
              <label>Welcome to Wallantics</label>
              <p className="chatbox__description--header">
                We are here to help you with our service related queries.
              </p>
            </div>
          </div>
          <div className="chatbox__messages" />
          <div className="chatbox__footer">
            <input type="text" placeholder="Write a message..." />
            <button className="chatbox__send--footer send__button">Send</button>
          </div>
        </div>
        <div className="chatbox__button">
          <button>
            <img src={chatIcon} alt="Chat Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
