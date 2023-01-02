import React, { Component } from "react";
import "./index.scss";

export class NormalButton extends Component {
  render() {
    const {
      className = "",
      label = "",
      onClick,
      id,
      disabled = false,
      normal = false,
      saveBtn = false,
      isPrimay = false,
      sortButton = false,
      primary2 = false,
      outlineBtn = false,
      brandBtn = false,
      viewBtn = false,
      rightIcon = "",
      whiteBtn = false,
      outlineBtnRadius = false,
      leftIcon = "",
      addBtn = false,
      removeBtn = false,
      fullWidth,
    } = this.props;

    return (
      <>
        <button
          id={id}
          className={`btn cursor_pointer_arrow px-2
          ${fullWidth ? "fullWidth" : ""}
          ${normal ? "normal-btn" : ""}
          ${saveBtn ? "save-btn" : ""}
          ${whiteBtn ? "white-btn" : ""}
          ${primary2 ? "primary2-btn" : ""}
          ${isPrimay ? "primary-btn" : ""}
          ${sortButton ? "sortButton" : ""}
          ${outlineBtn ? "outlineBtn" : ""}
          ${brandBtn ? "brandBtn" : ""}
          ${viewBtn ? "viewBtn" : ""}
          ${outlineBtnRadius ? "outlineBtnRadius" : ""}
          ${addBtn ? "addBtn" : ""}
          ${removeBtn ? "removeBtn" : ""}
          ${className}`}
          onClick={onClick}
          disabled={disabled}
        >
          {leftIcon !== "" ? (
            <i className={`btn-right-icon ${leftIcon} mr-2`} />
          ) : null}
          {label}
          {rightIcon !== "" ? (
            <i className={`btn-right-icon ml-2 ${rightIcon}`} />
          ) : null}
          {sortButton ? <span className="ml-3"></span> : null}
        </button>
      </>
    );
  }
}
