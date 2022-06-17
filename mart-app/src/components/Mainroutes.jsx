import React  from 'react'
import { Route, Routes } from 'react-router-dom'
import BackToTop from './BackToTop/BackToTop'
import Footer from './Footer/Footer'
import NavbarSecond from './Navbar/NavbarSecound'
import NavbarTop from './Navbar/NavbarTop'
import { About } from './Pages/About/About'
import { Contact } from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import { Products } from './Pages/Product/Products'

const Mainroutes = () => {
  
  return (
    <div>
        <NavbarTop/>
        <NavbarSecond/>
        <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/product" element={<Products/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/about" element={<About/>}/>
         </Routes>
     
         <BackToTop/>
         <Footer/>
         
         

   </div>
  )
}

export default Mainroutes
