// import React, { Component } from "react";

// import { connect } from "react-redux";
// import { ForgotPassword } from "component";
// export class ForgotClass extends Component {
//   render() {
//     return (<div>hii</div>);
//   }
// }
// export const ForgotPass = connect(null, null)(ForgotClass);
import { ForgotPassword } from 'component'
import React from 'react'
import { connect } from 'react-redux'

export  function ForgotPasswordPage() {
  return (
   <ForgotPassword/>
  )
}
 export const ForgotPass = connect(null,null)(ForgotPasswordPage)