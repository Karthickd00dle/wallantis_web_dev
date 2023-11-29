import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function AddEditCareerPageFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/CareerManagement/AddEditCareer"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const AddEditCareerPage = connect(null, null)(AddEditCareerPageFC);
