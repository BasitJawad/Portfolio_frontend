import React from 'react'

const Footer = () => {
  const FooterStyle = "md:text-white md:flex md:relative md:top-auto md:bottom-auto md:justify-center text-white flex  justify-center"
  
  return (
    <div className={FooterStyle}> 
      <h1 className='text-2xl select-none'>Developed by <span className='tracking-wider text-purple-400'>Basit</span> <span className='tracking-wide text-blue-400'>Jawad</span></h1>
    </div>
  )
}

export default Footer
