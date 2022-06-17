import React from 'react'
import BackToTop from './BackToTop/BackToTop'
import Footer from './Footer/Footer'
import NavbarSecond from './Navbar/NavbarSecound'
import NavbarTop from './Navbar/NavbarTop'
import Home from './Pages/Home'
const Mainroutes = () => {
  return (
    <div>
        <NavbarTop/>
        <NavbarSecond/> 
        <br/>
         <Home/>
         <BackToTop/>
         <Footer/>
     

   </div>
  )
}

export default Mainroutes
