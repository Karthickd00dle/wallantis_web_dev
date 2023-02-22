import { Home } from "component/Home/Home";
import React, { useMemo, useState, Suspense } from "react";
import { connect } from "react-redux";

// Redux Connection

export function HomePageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadHome = async () => {
    const loadHomeComp = await import("component/Home/Home");
    setComponent(() => loadHomeComp.default);
  };

  useMemo(() => LoadHome(), []);
  return (
    <Suspense fallback={<h1>Loading..Please Wait</h1>}>
      {Component ? <Component /> : <></>}
    </Suspense>
  );
}

export const HomePage = connect(null, null)(HomePageFunction);
