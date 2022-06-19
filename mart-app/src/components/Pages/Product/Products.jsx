import { Grid } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const Pt = styled.button`

margin:130px;
.heading{
  
  font-weight:700;
  font-size:28px;
  font-family: arial;
  letter-spacing: -.2px;
  color:black;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}

.pro_imges{
  margin-top:30px;
}
.pro_imges img{
  width:300px;
  height:300px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  margin-bottom:2px;
}
.pro_imges img:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.pro_imges p{
  font-weight:800;
  
}
.pro_imges button{
  margin-top:4px;
  background-color:#2e3192;
  color:white;
  padding:10px;
  border-radius:5px;
  font-weight:700;
}
.pro_imges button:hover{
  background-color:white;
  color:#2e3192;
  border:1px solid #2e3192; 
  margin:-2px;

}
`

export const Products = () => {
  return (
    <div>  
        <Pt>
        <span class="heading" >Blue Heaven Cosmetics Private Limited</span> <br />{" "}
                <FmdGoodOutlinedIcon /> New Delhi | <CheckCircleRoundedIcon />{" "}
                GST 07AACCB1155C1ZB
        <div>
      
                
        
       <Grid templateColumns='repeat(4, 1fr)' gap={9}>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/MW/GA/MY-3904945/lipstick-250x250.jpg"                   alt="Natural" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div> 
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/QD/KT/MY-3904945/lip-balm-250x250.jpg"                   alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/TD/OG/MY-3904945/rose-water-250x250.jpg"                 alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/QF/CO/MY-3904945/mascara-250x250.jpg"                    alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/TP/WM/MY-3904945/sindoor-250x250.jpg"                    alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/MV/NT/MY-3904945/mix-fruit-scrub-250x250.jpg"            alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/TD/OG/MY-3904945/rose-water-250x250.jpg"                 alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/IR/ID/MY-3904945/massage-cream-250x250.jpg"              alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://4.imimg.com/data4/CE/VE/GLADMIN-184994/forever-aloe-vera-gel-250x250.jpg"  alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/MW/GA/MY-3904945/lipstick-250x250.jpg"                   alt="Natural" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/QD/KT/MY-3904945/lip-balm-250x250.jpg"                   alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/TD/OG/MY-3904945/rose-water-250x250.jpg"                 alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/QF/CO/MY-3904945/mascara-250x250.jpg"                    alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/TP/WM/MY-3904945/sindoor-250x250.jpg"                    alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button> </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/MV/NT/MY-3904945/mix-fruit-scrub-250x250.jpg"            alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/TD/OG/MY-3904945/rose-water-250x250.jpg"                 alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/IR/ID/MY-3904945/massage-cream-250x250.jpg"              alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       <div class="pro_imges"> <img   src="https://4.imimg.com/data4/CE/VE/GLADMIN-184994/forever-aloe-vera-gel-250x250.jpg"  alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>    
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/MW/GA/MY-3904945/lipstick-250x250.jpg"                   alt="Natural" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/QD/KT/MY-3904945/lip-balm-250x250.jpg"                   alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/TD/OG/MY-3904945/rose-water-250x250.jpg"                 alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/QF/CO/MY-3904945/mascara-250x250.jpg"                    alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/TP/WM/MY-3904945/sindoor-250x250.jpg"                    alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/MV/NT/MY-3904945/mix-fruit-scrub-250x250.jpg"            alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/TD/OG/MY-3904945/rose-water-250x250.jpg"                 alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       <div class="pro_imges"> <img   src="https://3.imimg.com/data3/IR/ID/MY-3904945/massage-cream-250x250.jpg"              alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       <div class="pro_imges"> <img   src="https://4.imimg.com/data4/CE/VE/GLADMIN-184994/forever-aloe-vera-gel-250x250.jpg"  alt="pro_img" /> <p>Foundation</p>  <p>Price  <del> 1999₹  </del>  999₹ </p> <button>Add to Cart</button>  </div>
       </Grid>
       </div>
       
       </Pt>
       </div>
  )
}
