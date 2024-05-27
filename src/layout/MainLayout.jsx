import React from 'react'
import UseNavbar from './UseNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function MainLayout() {
  return (
    <div>
        <UseNavbar/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default MainLayout
