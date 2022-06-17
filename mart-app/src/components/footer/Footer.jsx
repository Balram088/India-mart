import React from "react";
import { Link } from "react-router-dom";
import { Footerwrraper } from "./FooterWrraper";

 

const Footer = () => {
  return (
    <>
    <Footerwrraper>
      <div>
        <div class="footer_headig">
           <div><h2>We are here to help you!</h2></div>
           <div>
            <div> Go Mobile:</div>
             <div> 
             <a href="https://itunes.apple.com/us/app/indiamart-buy-sell-products/id668561641?mt=8"><img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-antivirus-software-policy-library-and-information-34.png" alt="" /></a>
            </div>
             <div>
              <a href="https://play.google.com/store/apps/details?id=com.indiamart.m"><img src="https://static.cdnlogo.com/logos/a/36/android.svg" alt="" /></a>
             </div>
             <div>  <p>Follow us on</p> </div>
             <div><a href="https://www.facebook.com/IndiaMART"><img src="https://www.freepnglogos.com/uploads/facebook-logo-png-3.png" alt="" /></a> </div>
             <div> <a href="https://twitter.com/IndiaMART"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-simple-rounded-social-icon-png-logo-30.png" alt="" /></a></div>
             <div><a href="https://www.linkedin.com/company/indiamart-intermesh-limited/"><img src="https://www.freepnglogos.com/uploads/linkedin-shiny-icon-logo-5.png" alt="" /></a> </div>
           </div>
        </div>
      <div class="mega-box">
            <div class="content">
            
              <div class="row">
                <header>About</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/">Join Sales </Link></li>
                  <li><Link class="desktop-item" to="/">Success Stories </Link></li>
                  <li><Link class="desktop-item" to="/"> Press Section</Link></li>
                  <li><Link class="desktop-item" to="/">Advertise with Us </Link></li>
                  <li><Link class="desktop-item" to="/"> Investor Section</Link></li>

                </ul>
              </div>
              <div class="row">
                <header>Help</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/">About us </Link></li>
                  <li><Link class="desktop-item" to="/"> Feedback</Link></li>
                  <li><Link class="desktop-item" to="/">Complaints</Link></li>
                  <li><Link class="desktop-item" to="/">Customer Care </Link></li>
                  <li><Link class="desktop-item" to="/"> Jobs & Careers</Link></li>

                </ul>
              </div>
              <div class="row">
                <header>Suppliers Tool Kit</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/">Latest BuyLead</Link></li>
                  <li><Link class="desktop-item" to="/">Learning Centre</Link></li>
                   <li><Link class="desktop-item" to="/"> Pay With IndiaMART</Link></li>
                   <li><Link class="desktop-item" to="/">Learning Centre</Link></li>
                  

                </ul>
              </div>
              <div class="row">
                <header>Buyers Tool Kit</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/">Post Your Requirement</Link></li>
                  <li><Link class="desktop-item" to="/">Search Products & Suppliers</Link></li>
                  <li><Link class="desktop-item" to="/">Pay With IndiaMART</Link></li>
                  <li><Link class="desktop-item" to="/">stay With IndiaMART</Link></li>

                </ul>
              </div>
              <div class="row">
                <header>Events</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/">Trade Shows</Link></li>
                  <li><Link class="desktop-item" to="/">Conferences</Link></li>
                  <li><Link class="desktop-item" to="/">Events by Country</Link></li>
                  <li><Link class="desktop-item" to="/">Invester meet</Link></li>
                  <li><Link class="desktop-item" to="/">World Event</Link></li>

                </ul>
              </div>
            </div>
          
             <p class="l_m">Copyright © 1996-2022 IndiaMART InterMESH Ltd(clone) By Balram Patidar. All rights reserved.</p>
          </div>
          </div>
    </Footerwrraper>
    </>
  );
};

export default Footer;
