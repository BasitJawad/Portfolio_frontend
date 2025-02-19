import React,{useState} from 'react'
import "../Styles/Navbar.css"
import {Link} from "react-router-dom"


const Navbar = () => {
  
  const DesktopStyling ="md:active:text-purple-700 md:transition-all active:text-purple-700 transition-all"

  return (
    <div className='Navbar md:text-white text-white '>

     <nav className='Main-navlist md:grid md:grid-cols-1 md:place-items-center md:relative md:top-3  relative top-3 '>
      
      <div className='navlist md:flex  md:gap-20 md:uppercase md:font-bold flex gap-5 justify-center uppercase font-bold ' >
        <div className='HomePageLink'><Link to="/" className={DesktopStyling}>HomePage</Link></div>
        <div className='ProjectsLink'><Link to="Projects" className={DesktopStyling}>Projects</Link></div>
        <div className='BlogsLink'><Link to="Blogs" className={DesktopStyling}>Blogs</Link></div>
      </div>
     </nav>
    </div>
  )
}

export default Navbar
