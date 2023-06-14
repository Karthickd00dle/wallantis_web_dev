import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export default function AddNewAddressFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Profile/AddNewAddress");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}

export const AddNewAddressPage = connect(null, null)(AddNewAddressFC);
