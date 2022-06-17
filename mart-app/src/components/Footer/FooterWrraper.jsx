import React from "react";
import styled from "styled-components"

export const Footerwrraper = styled.div`
.footer_headig{
  display:flex;
  justify-content: space-around;
  background-color:#eaeaf4;
  margin-bottom:20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  

}
.footer_headig div h2{
  font-size:25px;
  color:#2e3192;
  font-weight:600; 
  
  
}
.footer_headig div{
  display:flex;
}
.footer_headig div div img{
  height:30px;
  width:30px;
  margin:0px 0px 0px 10px;  
}
.footer_headig div div p{
  margin-left:20px;
}

li{
  list-style:none;
}
.mega-box .content{
  background: white;
  display: flex;
  margin:0px 60px 0px 60px;
  justify-content: space-around;
  
}
.mega-box .content .row{
  
  line-height: 40px;
}

.content .row header{
  color: Black;
  margin-top:-15px;
  font-size: 16px;
  font-weight: 600;



}

.row .mega-links li{
  padding: 0 8px;
}
.row .mega-links li a{
   margin-top:-15px;
  padding: 0px;
  color: black;
  font-size: 12px;
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
 
}
.l_m{
  border-top:2px solid black;
  margin:0px 60px 20px 60px;;
  font-size:10px;
  
}

 `