
import styled from "styled-components";
 export const Wrap = styled.div`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.logo{
  
  background-position: 0 1px;
  text-indent: -99999px;
  width: 200px;
  background-size: 235%;
  
 }
nav{
  position: fixed;
  z-index: 99;
  width: 100%;
  background: #2e3192;
  margin:auto;
 
}
nav .wrapper{
  position: relative;
  padding: 0px 20px;
  height: 70px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.wrapper .nav-links{
  display: inline-flex;
}
.nav-links li{
  list-style: none;
}
.nav-links li a{
  color:White;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.nav-links li a:hover{
  background: white;
  color:gray;
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
  width: 10%;
  display: block;
  padding: 0 0 0 0px;
  font-weight: 400;
  border-radius: 0px;
}
.mega-box{
  position: absolute;
  width: 100%;
  padding: 0 0px;
  margin-right:auto;
  top: 85px;
  opacity: 10;
  visibility: hidden;
}
.mega-box .content{
  background: white;
  padding: 25px 20px;
 
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 6px 10px rgba(0,0,0,0.15);
}
.mega-box .content .row{
  width: calc(25% - 30px);
  line-height: 45px;
}
.content .row img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content .row header{
  color: Black;
  font-size: 16px;
  font-weight: 600;
}
.content .row .mega-links{
  margin-left: -40px;
  border-left: 1px solid rgba(255,255,255,0.09);
}
.row .mega-links li{
  padding: 0 20px;
}
.row .mega-links li a{
  padding: 0px;
  padding: 0 20px;
  color: black;
  font-size: 17px;
  display: block;
}
.row .mega-links li a:hover{
  color: blue;
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
   
  }
  .nav-links li a{
  
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
    color: #f2f2f2;
    font-size: 16px;
    font-weight: 500;
    padding: 0px;
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
    font-size: 1px;
  }
  .mega-box{
    position: relative;
    display:flex;
    top: 65px;
    opacity: 1;
    visibility: visible;
    padding: 0 0px;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .mega-box .content{
    box-shadow: none;
    flex-direction: column;
     padding: 0px 0px 0 0px;
  }
  .mega-box .content .row{
    width: 10%;
    display:flex;
    margin-bottom: 15px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .mega-box .content .row:nth-child(1),
  .mega-box .content .row:nth-child(2){
    border-top: 0px;
  }
  .content .row .mega-links{
    border-left: 0px;
    padding: 5px;
  }
  .row .mega-links li{
    margin: 0;
  }
  .content .row header{
    font-size: 20px;
  }
}
input{
 height:30px;
 width:270px;
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
.location{
  color:white;
  margin-left:-100px;
}
.icons{
  color:white;
  margin-left:-20px;
  margin-top:30px;
  
}

.search_icon{
  color:white; 
  margin-right: 170px;

}


`
