import React from 'react';
import { Link } from "react-router-dom";
import { Search2Icon } from '@chakra-ui/icons'
import { Wrap } from './Wrap';
import  LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import Login from './Login';



export const NavbarTop= () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
    <Wrap>

  <nav>
    <div class="wrapper">
    <div class="logo">
    <Link  to="/home"><img src="https://image.pitchbook.com/60E3UZ8tZwClLtS11gSFs5NuIvH1613653472766_200x200" alt="logo"  /></Link>
    </div>
    
    <div>
       <span class="location">All India  </span> <input type="text"  placeholder='What are you looking for?' />
          <label class="search_icon">    <Search2Icon/></label>
    </div>

      {/* <input type="radio" name="slider" id="menu-btn"/> */}
      {/* <input type="radio" name="slider" id="close-btn"/> */}
      <ul class="nav-links">
          
          <li><Link class="desktop-item" to="/shopping">Shopping<LocalOfferOutlinedIcon/></Link></li>
          



        <li>  <Link class="desktop-item" to="/men">Covid Supplies <DeviceThermostatOutlinedIcon/></Link> 
        
          <div class="mega-box">
            <div class="content">
            
              <div class="row">
                
                <ul class="mega-links">
                <header>Medical Equipments</header>
                  <li><Link class="desktop-item" to="/Supplies">Oxygen Supplies</Link></li>
                  <li><Link class="desktop-item" to="/Supplies">Medicines</Link></li>
                  <li><Link class="desktop-item" to="/Supplies">Safety Essentials</Link></li>
                  <li><Link class="desktop-item" to="/Suppliesr">Medical Supplies and Equipments</Link></li>
                  <li><Link class="desktop-item" to="/Supplies">View All</Link></li>

                </ul>
              </div>
              
            </div>
          </div>
        </li>
       

        <li>  <Link class="desktop-item" to="/sell">Sell<StoreMallDirectoryOutlinedIcon/> </Link> 
         
         </li>
             
        <li>  <Link class="desktop-item" to="/product">Login <Login/> </Link></li>
       
          
            
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
  </nav>
    </Wrap>
    </>
)
  }


export default NavbarTop