import React from 'react'
import "assets/scss/layouts/Loginlayout.scss"
import WallanticsLogo1 from "../assets/scss/Images/WallanticsLogo1.svg"
export default function LoginLayout(props) {
  return (
    <div className={props.class}>
    <div className="Layout_Login">
        <img src={WallanticsLogo1}></img>
       <span>{props.name}</span>
       <label>{props.content}</label>
    </div>
    </div>
  )
}

