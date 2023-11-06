import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
  return (
    <>
    <Navbar></Navbar>
    <div className="content">
      <h1>{children}</h1>
    </div>
    <Footer>
      
    </Footer>
    </>
  )
}

export default Layout