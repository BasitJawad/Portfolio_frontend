import React,{createContext, useState} from 'react'

export const LoginContext = createContext();

const LoginContextProvider = ({children}) => {
  const [isAuthenticated, setAuth] = useState(true)    
  return (
  <LoginContext.Provider value={isAuthenticated} >
    {children}
  </LoginContext.Provider> 
)     
}
export default LoginContextProvider
