import React from 'react';
import { Link } from "react-router-dom";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import InitialFocus from './Modal';
import { Wrape } from './Wrape';

export const NavbarSecond = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
    <Wrape>
 
  <nav>
    <div class="wrapper">
    <li>  <Link class="desktop-item" to="/"><span class="logo">Blue Heaven Cosmetics Private</span></Link></li>

      {/* <input type="radio" name="slider" id="menu-btn"/> */}
      {/* <input type="radio" name="slider" id="close-btn"/> */}
      <ul class="nav-links">
      <li>  <Link class="desktop-item" to="/">Home</Link></li>
      <li>  <Link class="desktop-item" to="/product">Products & services</Link> 
          <label for="showMega" class="mobile-item"></label>
          <div class="mega-box">
            <div class="content">
            
              <div class="row">
                <header>Makeup</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/foundation">Foundation</Link></li>
                  <li><Link class="desktop-item" to="/pan-cake">Pan Cake Beauty</Link></li>
                  <li><Link class="desktop-item" to="/compact-powder">Compact Powder</Link></li>
                  <li><Link class="desktop-item" to="pan-stick">Pan Stick Beauty </Link></li>
                  <li><Link class="desktop-item" to="/more">More</Link></li>
                </ul>
              </div>
              <div class="row">
                <header>For Eyes</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/mascra">Mascara</Link></li>
                  <li><Link class="desktop-item" to="/eye-shadow">Eye Shadow</Link></li>
                  <li><Link class="desktop-item" to="/eye-liner">Eye Liner</Link></li>
                  <li><Link class="desktop-item" to="/eye-liner">Eye Cleaner</Link></li>
                  <li><Link class="desktop-item" to="/more">More</Link></li>

                </ul>
              </div>
              <div class="row">
                <header>Traditional Items</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/sindoor">Sindoor</Link></li>
                  <li><Link class="desktop-item" to="/kajal">Kajal Eye Cosmetic</Link></li>
                   <li><Link class="desktop-item" to="/kajal">Kajal </Link></li>
                   <li><Link class="desktop-item" to="/sindoor">Sindoor</Link></li>
                  <li><Link class="desktop-item" to="/more">More</Link></li>

                </ul>
              </div>
              <div class="row">
                <header>Lips</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/lipStick">Lip Stick</Link></li>
                  <li><Link class="desktop-item" to="/lip-liner">Lip Liner</Link></li>
                  <li><Link class="desktop-item" to="/lip-gloss">Lip Gloss</Link></li>
                  <li><Link class="desktop-item" to="/lipStick">Lip Brush</Link></li>
                  <li><Link class="desktop-item" to="/more">More</Link></li>

                </ul>
              </div>
              <div class="row">
                <header>LipCare</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/lip-balm">Lip Balm</Link></li>
                  <li><Link class="desktop-item" to="/lip-gaurd">Lip Gaurd</Link></li>
                  <li><Link class="desktop-item" to="/lip-liner">Lip Liner</Link></li>
                  <li><Link class="desktop-item" to="/lip-gloss">Lip Gloss</Link></li>
                  <li><Link class="desktop-item" to="/more">More</Link></li>

                </ul>
              </div>
            </div>
          
          </div>
        </li>

        <li>  <Link class="desktop-item" to="/about">About Us</Link> </li>
        <li>  <Link class="desktop-item" to="/contact">Contact Us</Link> </li>
 
            <li class="mail_button"><LocalPhoneOutlinedIcon/>9876543210</li>
            <li class="mail_button"><InitialFocus/> </li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
  </nav>
    </Wrape>
    </>
)
  }


export default NavbarSecond