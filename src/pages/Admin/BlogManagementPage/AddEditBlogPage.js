import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function AddEditBlogPageFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/BlogManagement/AddEditBlog"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const AddEditBlogPage = connect(null, null)(AddEditBlogPageFC);
