
import { RegisterAgain } from 'component/RegisterAgian'
import React from 'react'
import { connect } from 'react-redux'

export  function RegisterAgainPage() {
  return (
     <RegisterAgain/>
  )
}
 export const RegisterAgainPass = connect(null,null)(RegisterAgainPage)