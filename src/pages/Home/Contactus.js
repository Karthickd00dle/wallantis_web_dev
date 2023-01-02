import { Contactus } from "component/Contactus";
import React from "react";
import { connect } from "react-redux";

export function ContactusPage() {
    return <Contactus />;
  }
  export const Contactuseg = connect(null, null)(ContactusPage);