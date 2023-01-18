import React from "react";
import Dashboard from "component/Admin/DashboardPages/Dashboard/Dashboard";
import SettingsComponent from "component/Admin/DashboardPages/Settings";
import { history } from "service/helpers";

export default function AdminComponent() {
  const Routing = () => {
    if (history.location.pathname.includes("dashboard")) {
      return <Dashboard />;
    } else if (history.location.pathname.includes("settings")) {
      return <SettingsComponent />;
    }
  };
  return (
    <div>
      <Routing />
    </div>
  );
}
