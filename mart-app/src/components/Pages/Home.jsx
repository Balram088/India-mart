import React from 'react'
import styled from "styled-components";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import proPic from  './About/m.png';
import { Grid, GridItem } from '@chakra-ui/react'
import { TodoApp } from './Product/TodoApp';


const Homewrraper = styled.div`
.main{
    margin:100px;
}
.main h1{
   font-weight:700;
   font-size:28px;
   font-family: arial;
   letter-spacing: -.2px;
   line-height: 1.11;
}
.heading p{
    color:grey;
    font-size:12px;
}
.pro_imgs{
    display:flex;
    height:220px;
    width:220px;
    border-right:solid 1px #eaeaea;
    cursor:pointer;
}
.pro_name{
    color:white;
    width:220px;
    height:60px;
    padding:10px;
    background-color:#505050 ;
    text-align:center;
    font-weight:600;
    border-right:solid 1px #eaeaea;
    font-size:22px;
    cursor:pointer;
}
.pro_name:hover{
    background-color:white;
    color:#2e3192;
}
.about h1{
    text-align:center;
    margin-top:40px;
  
}
.about hr{
    height:3px;
    width:35px;
    color:black;
    margin-left:560px;
}
.about p{
    margin:10px 110px 10px 110px ;
    text-align:center;
}
.about div img{
    height:250px;
    width:100%;
}
.pro_box{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.pro_box:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

`
const Home = () => {
  return (
    <>
        <Homewrraper>
         <div class="main">
            <div class="heading">
         <h1>Blue Heaven Cosmetics Private Limited </h1>
         <p > <FmdGoodOutlinedIcon/> New Delhi  |  <CheckCircleRoundedIcon/> GST
        07AACCB1155C1ZB</p>
        </div>
        <br/>
        <br/>
        <Marquee
            gradient={false}
            speed={80}
            // pauseOnHover={true}
            // pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >

          <img class="pro_imgs" src="https://3.imimg.com/data3/MW/GA/MY-3904945/lipstick-250x250.jpg" alt="Natural" />
          <img class="pro_imgs" src="https://3.imimg.com/data3/QD/KT/MY-3904945/lip-balm-250x250.jpg"  alt="pro_img" />
          <img class="pro_imgs" src="https://3.imimg.com/data3/TD/OG/MY-3904945/rose-water-250x250.jpg"  alt="pro_img" />
          <img class="pro_imgs" src="https://3.imimg.com/data3/QF/CO/MY-3904945/mascara-250x250.jpg"  alt="pro_img" />
          <img class="pro_imgs" src="https://3.imimg.com/data3/TP/WM/MY-3904945/sindoor-250x250.jpg"  alt="pro_img" />
          <img class="pro_imgs" src="https://3.imimg.com/data3/MV/NT/MY-3904945/mix-fruit-scrub-250x250.jpg"  alt="pro_img" />
          <img class="pro_imgs" src="https://3.imimg.com/data3/TD/OG/MY-3904945/rose-water-250x250.jpg"  alt="pro_img" />
          <img class="pro_imgs" src="https://3.imimg.com/data3/IR/ID/MY-3904945/massage-cream-250x250.jpg"  alt="pro_img" />
          <img class="pro_imgs" src="https://4.imimg.com/data4/CE/VE/GLADMIN-184994/forever-aloe-vera-gel-250x250.jpg"  alt="pro_img" />

       </Marquee>
       
        <Marquee
            gradient={false}
            speed={80}
            // pauseOnHover={true}
            // pauseOnClick={true}
            delay={10}
            play={true}
            direction="left"
          >
          <p class="pro_name">Lipstick</p>
          <p class="pro_name">Scrubs </p>
          <p class="pro_name">Mackup</p>
          <p class="pro_name">Rose Water</p>
          <p class="pro_name">Mascra</p>
          <p class="pro_name">Sindoore</p>
          <p class="pro_name">Mix Fruit Mix</p>
          <p class="pro_name">Foundation</p>
          <p class="pro_name">NPR Beuty</p>
       </Marquee>
     <div class="about">
        <h1>About</h1>
         <hr />
         <p>
         To meet the ever increasing market requirements, we have made a continuous improvement in the supply of various genuine 
          trusted products.
          <br />
          <Link to="" >+Read More...</Link>
         </p>
        
            <div>
                <img src={proPic} alt="" />
             </div>
             <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                 <div> <img src="https://4.imimg.com/data4/CE/VE/GLADMIN-184994/forever-aloe-vera-gel-250x250.jpg" alt="" /> </div>
                 <div> <img src="https://4.imimg.com/data4/CE/VE/GLADMIN-184994/forever-aloe-vera-gel-250x250.jpg" alt="" /> </div>
                 <div> <img src="https://4.imimg.com/data4/CE/VE/GLADMIN-184994/forever-aloe-vera-gel-250x250.jpg" alt="" /> </div>
               
        
             </Grid>
  
            
          <TodoApp/>
         
     </div>  
   

         </div>
        </Homewrraper>
    </>
  )
}

export default Home
