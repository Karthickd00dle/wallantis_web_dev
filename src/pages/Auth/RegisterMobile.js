import { RegisterMobile } from 'component/RegisterMobile'
import React from 'react'
import { connect } from 'react-redux'

export  function RegisterMobilePage() {
  return (
   <RegisterMobile/>
  )
}
 export const RegisterMobilePass = connect(null,null)(RegisterMobilePage)