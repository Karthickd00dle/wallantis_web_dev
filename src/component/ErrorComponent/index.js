import React from "react";
/**
 * Error-Message : The Common Re-usable Error-Message across website.
 * @return {JSX.Element} The JSX Code for Error-Message
 */
const ErrorComponent = ({ message }) => (
  <div className="text-left error">
    <span className="fs-14 text-danger custome-dropdown-text">{message}</span>
  </div>
);

export default ErrorComponent;
