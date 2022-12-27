import { OrderSummary } from "component";
import { NormalNavigate } from "component/common";

import React from "react";
import { connect } from "react-redux";

export const AboutUsComponentMain = () => {
  return (
    <>
      <OrderSummary />
    </>
  );
};

export const AboutUs = connect(null, null)(AboutUsComponentMain);
