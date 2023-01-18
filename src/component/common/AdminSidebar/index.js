import React from "react";
import { sidebarItems } from "./SidebarItems";
import { history } from "service/helpers";
import "./index.scss";

export default function AdminSidebar() {
  return (
    <div>
      <div className="sidebar-main">
        <div className="logo">
          <p>Logo</p>
        </div>

        <div className="menu-items">
          {sidebarItems?.map((item) => {
            return (
              <div className={`flex`}>
                {history.location.pathname === item.route
                  ? item.icon.active
                  : item.icon.normal}
                <p
                  className={` ${
                    history.location.pathname === item.route ? "active" : ""
                  }`}
                  onClick={() => history.push(item.route)}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
