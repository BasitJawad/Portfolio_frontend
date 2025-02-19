import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {Outlet} from "react-router-dom"
const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className="div md:min-h-screen min-h-screen">
      <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout
