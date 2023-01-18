import React from "react";
import { sidebarItems } from "./SidebarItems";
import { history } from "service/helpers";
import "./index.scss";

export default function AdminSidebar() {
  const redirect = (route) => {
    localStorage.setItem("active", route);
    history.push(route);
  };
  return (
    <div>
      <div className="sidebar-main">
        <div className="logo">
          <p>Logo</p>
        </div>

        <div className="menu-items">
          {sidebarItems?.map((item) => {
            return (
              <div className={`menu-item-list`}>
                {history.location.pathname === item.route
                  ? item.icon.active
                  : item.icon.normal}
                <p
                  className={` ${
                    history.location.pathname === item.route ? "active" : ""
                  }`}
                  onClick={() => redirect(item.route)}
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
