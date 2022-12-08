import React from "react";
import "./style.scss";
import { NormalInput } from "../NormalInput";

export const NormalNavigate = (props) => {
  const { title, children, isAdminPrivilage, searchValue, setSearchValue } =
    props;
  return (
    <div>
      <div className="navigation-container">
        <div className="navigate_back_container">
          <label className="m-0 navigation-title">{title}</label>
        </div>
        {children}
      </div>
      {isAdminPrivilage && (
        <div className="d-lg-none mt-3">
          <NormalInput
            placeholder="Search"
            type="text"
            className="normal-input inputview"
            isSearchBox={true}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};
