import React from "react";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import style from "styled-components";

 const Footerwrraper = style.div`
 .mega-box{
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0 0px;
  top: 85px;
  opacity: 0;
 
  margin-top:-20px;
}
.mega-box .content{
  background: white;
  padding: 25px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 6px 10px rgba(0,0,0,0.15);
}
.mega-box .content .row{
  width: calc(25% - 30px);
  line-height: 45px;
}

.content .row header{
  color: Blue;
  margin-top:-15px;
  font-size: 14px;
  font-weight: 600;

}
.content .row .mega-links{
 border-left: 1px solid rgba(255,255,255,0.09);
}
.row .mega-links li{
  padding: 0 20px;
}
.row .mega-links li a{
   margin-top:-15px;
  padding: 0 10px;
  color: black;
  font-size: 12px;
  display: block;
}
.row .mega-links li a:hover{
  color: blue;
  background-color:white;
  text-decoration: underline;
}
.wrapper .btn{
  color: #fff;
  font-size: 20px;
  cursor: pointer;
 
}
.wrapper .btn.close-btn{
  position: absolute;
  right: 30px;
  top: 10px;
}

 `

const Footer = () => {
  return (
    <>
    <Footerwrraper>
      <div>
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
          </div>
    </Footerwrraper>
    </>
  );
};

export default Footer;
