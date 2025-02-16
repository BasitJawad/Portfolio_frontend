import React,{useState, useContext} from 'react'
import { LoginContext } from '../Context/LoginContextProvider' 
const Login = () => {

    const isAuthenticated = useContext(LoginContext)
    
    console.log("before toggling")
    console.log(isAuthenticated)
    console.log("After toggling")
    console.log(isAuthenticated)
  return (
    <div>
      Login
    </div>
  )
}

export default Login
