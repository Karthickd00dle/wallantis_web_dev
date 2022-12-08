import React from "react";
import { TabContent, Nav, NavItem, NavLink } from "reactstrap";
import "./style.scss";

export const CustomTabs = ({
  tabList = [
    { id: 1, label: "Added Members" },
    { id: 2, label: "New Request" },
  ],
  componentList = [],
  onChangeTab,
  activeTab = "1",
  children,
}) => {
  return (
    <div className="custom_tabs">
      <Nav tabs>
        {tabList.map((val, index) => {
          return (
            <NavItem key={index} className={`${index + 1}` === activeTab && "active"}>
              <NavLink onClick={() => onChangeTab(`${index + 1}`)}>
                {val.label}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>

      <TabContent activeTab={activeTab}>{children}</TabContent>
    </div>
  );
};
