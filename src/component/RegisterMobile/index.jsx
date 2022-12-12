import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'
import LoginLayout from 'layout/LoginLayout'

export function RegisterMobile() {
  return (
    <div>
       <div className="row">
      <div className="col-md-4">
       <LoginLayout name="Create a Account" content="Register with your Mobile number to get started"/>
      </div>
      <div className="col-md-8  RegisterMobile_entries">
        <form>
        <div className="RegisterMobile_number">
          <input type="email" id="email" placeholder="Enter Email/Mobile number "/>
          </div>
          <div className="RegisterMobile_policy">
          By continuing, you agree to Paperwall Terms of use and Privacy policy  
          </div>
          <button className="Login_continue_button">Continue</button>
          <NavLink to ="/Auth/RegisterAgain">
          <button className="Existing_button">Existing User? Log in </button></NavLink>
          </form>
          </div>
          </div>
    </div>
  )
}

