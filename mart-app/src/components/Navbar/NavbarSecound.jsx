import React from 'react';
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import InitialFocus from './Modal';




import styled from "styled-components";

const Wrape = styled.div`

*{
    
 
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;

}
nav{
    position:fixed;
   z-index: 99;
   width: 100%;
   margin-top:5%;
   margin-bottom:50px;
   

  
}
nav .wrapper{
  position: fixed;
  width:100%;
  padding: 0 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 50px;
  line-height: 70px;
   margin:auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eaeaf4;

}

.wrapper .logo{
  color: black;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  margin-right:100px;
  
}
.wrapper .nav-links{
  display: inline-flex;
  
}
.nav-links li{
  list-style: none;
}
li{
    list-style:none;
}
.nav-links li a{
  color:black;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 20px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.nav-links li a:hover{
  background:#2e3192;
  color:white;

}
.nav-links .mobile-item{
  display: none;
}
.nav-links .drop-menu{
  position: absolute;
  background: white;
  width: 100%;
  line-height: 45px;
  top: 85px;
  display:inline-block;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 6px 10px rgba(0,0,0,0.15);
}
.nav-links li:hover .drop-menu,
.nav-links li:hover .mega-box{
  transition: all 0.3s ease;
  top: 70px;
  opacity: 1;
  visibility: visible;
}
.drop-menu li a{
  width: 100%;
  display: block;
  padding: 0 0 0 0px;
  font-weight: 400;
  border-radius: 0px;
}
.mega-box{
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0 0px;
  top: 85px;
  opacity: 0;
  visibility: hidden;
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
  display: none;
}
.wrapper .btn.close-btn{
  position: absolute;
  right: 30px;
  top: 10px;
}

@media screen and (max-width: 0px) {
  .wrapper .btn{
    display: block;
  }
  .wrapper .nav-links{
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    left: -100%;
    background: #242526;
    display: block;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 15px 15px rgba(0,0,0,0.18);
    transition: all 0.3s ease;
  }
  /* custom scroll bar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #242526;
  }
  ::-webkit-scrollbar-thumb {
    background: #3A3B3C;
  }
  #menu-btn:checked ~ .nav-links{
    left: 0%;
  }
  #menu-btn:checked ~ .btn.menu-btn{
    display: none;
  }
  #close-btn:checked ~ .btn.menu-btn{
    display: block;
  }
  .nav-links li{
    margin: 15px 10px;
  }
  .nav-links li a{
    padding: 0 20px;
    display: block;
    font-size: 20px;
  }
  .nav-links .drop-menu{
    position: static;
    opacity: 1;
    top: 65px;
    visibility: visible;
    padding-left: 20px;
    width: 100%;
    max-height: 0px;
    overflow: hidden;
    box-shadow: none;
    transition: all 0.3s ease;
  }
  #showDrop:checked ~ .drop-menu,
  #showMega:checked ~ .mega-box{
    max-height: 100%;
  }
  .nav-links .desktop-item{
    display: none;
  }
  .nav-links .mobile-item{
    display: block;
    color: black;
    font-size: 20px;
    font-weight: 500;
    padding-left: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  .nav-links .mobile-item:hover{
    background: #3A3B3C;
  }
  .drop-menu li{
    margin: 0;
  }
  .drop-menu li a{
    border-radius: 5px;
    font-size: 18px;
  }
  .mega-box{
    position: static;
    top: 65px;
    opacity: 1;
    visibility: visible;
    padding: 0 20px;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .mega-box .content{
    box-shadow: none;
    flex-direction: column;
     padding: 20px 20px 0 20px;
  }
  .mega-box .content .row{
    width: 100%;
    margin-bottom: 15px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .mega-box .content .row:nth-child(1),
  .mega-box .content .row:nth-child(2){
    border-top: 0px;
  }
  .content .row .mega-links{
    border-left: 0px;
    padding-left: 15px;
  }
  .row .mega-links li{
    margin: 0;
  }
  .content .row header{
    font-size: 19px;
  }
}
input{
 height:35px;
 width:250px;
 margin-right:150px;
}
textarea:focus, input:focus{
    outline: none;
}


.body-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  padding: 0 30px;
}
.body-text div{
  font-size: 45px;
  font-weight: 600;
}
.mail_button{
    color:#2e3192;
    font-size:12px;
    cursor:pointer;
    margin-left:10px;
}



`



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
      <li>  <Link class="desktop-item" to="/men">Home</Link></li>
      <li>  <Link class="desktop-item" to="/girls">Products & services</Link> 
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

        <li>  <Link class="desktop-item" to="/about-us">About Us</Link> </li>
        <li>  <Link class="desktop-item" to="/contact-us">Contact Us</Link> </li>
 
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