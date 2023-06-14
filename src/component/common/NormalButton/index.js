import React, { Component } from "react";
import { ternaryCondition } from "service/helperFunctions";

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
          
          ${ternaryCondition(fullWidth, "fullWidth", "")}
          ${ternaryCondition(normal, "normal-btn", "")}
          ${ternaryCondition(saveBtn, "save-btn", "")}
          ${ternaryCondition(whiteBtn, "white-btn", "")}
          ${ternaryCondition(primary2, "primary2-btn", "")}
          ${ternaryCondition(isPrimay, "primary-btn", "")}
          ${ternaryCondition(sortButton, "sortButton", "")}
          ${ternaryCondition(outlineBtn, "outlineBtn", "")}
          ${ternaryCondition(brandBtn, "brandBtn", "")}
          ${ternaryCondition(viewBtn, "viewBtn", "")}
          ${ternaryCondition(outlineBtnRadius, "outlineBtnRadius", "")}
          ${ternaryCondition(addBtn, "addBtn", "")}
          ${ternaryCondition(removeBtn, "removeBtn", "")}
          ${className}`}
          onClick={onClick}
          disabled={disabled}
        >
          {ternaryCondition(
            leftIcon !== "",
            <i className={`btn-right-icon ${leftIcon} mr-2`} />,
            null
          )}
          {label}
          {ternaryCondition(
            rightIcon !== "",
            <i className={`btn-right-icon ml-2 ${rightIcon}`} />,
            null
          )}
          {ternaryCondition(sortButton, <span className="ml-3" />, null)}
        </button>
      </>
    );
  }
}
