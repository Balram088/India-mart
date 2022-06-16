import React from 'react'
import styled from "styled-components";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const Homewrraper = styled.div`
.main{
    margin:100px;
    border:solid 4px pink ;
}
.main h1{
   font-weight:700;
   font-size:28px;
   font-family: arial;
   letter-spacing: -.2px;
   line-height: 1.11;
}
.main p{
    color:grey;
    font-size:12px;
}
`
const Home = () => {
  return (
    <>
        <Homewrraper>
         <div class="main">
         <h1>Blue Heaven Cosmetics Private Limited </h1>
         <p> <FmdGoodOutlinedIcon/> New Delhi  |  <CheckCircleRoundedIcon/> GST
        07AACCB1155C1ZB</p>
       

         </div>
        </Homewrraper>
    </>
  )
}

export default Home
