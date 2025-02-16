import React,{useContext} from 'react'
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"
import MainLayout from './Layout/MainLayout.jsx'
import Blogs from "./Pages/Blogs.jsx"
import Projects from "./Pages/Projects.jsx"
import HomePage from "./Pages/HomePage.jsx"
import Login from './Pages/Login.jsx'
import NoPage from './Pages/NoPage.jsx'
import AdminPage from './Pages/AdminPage.jsx'
import { LoginContext } from './Context/LoginContextProvider.jsx'
const App = () => {

  const isAuthenticated = useContext(LoginContext)

  const Routes = createBrowserRouter([
    {
     path: "/",
     element : <MainLayout/>,
     children : [
      {
        path: "/",
        element:<HomePage />
      },
      {
        path: "Blogs",
        element: <Blogs />
      },
      {
        path: "Projects",
        element: <Projects/>
      },
      {
        path: "BasitLoginAccess",
        element:<Login  />
      },
      {
        path:"AdminPage",
        element: isAuthenticated ? <AdminPage/> : <Login /> 
      },
      {
        path:"*",
        element: <NoPage />
      }

     ]

    }
  ])


  return (<RouterProvider router={Routes}/>)
}

export default App
