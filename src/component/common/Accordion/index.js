import React from "react";

export const Accordion = ({ label, active, onClick }) => {
  return (
    <div className={active ? "tile is-active" : "tile"} onClick={onClick}>
      <div className="left m-0 d-flex align-items-center cursor_pointer_arrow">
        <span className="m-0">{label}</span>
        <i className="icon-arrow-down ml-3  fs-22" />
      </div>
    </div>
  );
};
