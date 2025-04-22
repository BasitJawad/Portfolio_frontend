import React from 'react'
import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom"
import MainLayout from './Layout/MainLayout.jsx'
import Blogs from "./Pages/Blogs.jsx"
import Projects from "./Pages/Projects.jsx"
import HomePage from "./Pages/HomePage.jsx"
import Login from './Pages/Login.jsx'
import NoPage from './Pages/NoPage.jsx'
import ProjectDetails from "./Pages/ProjectDetails.jsx"
import AdminPage from './Pages/AdminPage.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
import SignUp from './Pages/SignUp.jsx'


const App = () => {
  const Routes = createBrowserRouter([
    {
     path: "/",
     element : <MainLayout/>,
     children : [
      {
        path: "/",
        element:<HomePage />
      },
      // {
      //   path: "Blogs",
      //   element: <Blogs />
      // },
      {
        path: "Projects",
        element: <Projects/>
      },
      {
        path:"Projects/:id",
        element: <ProjectDetails/>
          },
      {
        path: "Login",
        element: <Login />
      },
      // {
      //   path: "SignUp",
      //   element:<SignUp />
      // }
      
      {
        path:"AdminPage",
       element: <ProtectedRoute><AdminPage /></ProtectedRoute> 
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
