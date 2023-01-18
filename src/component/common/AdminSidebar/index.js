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
                <img className="sidebar-icon" src={item.icon} />
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
