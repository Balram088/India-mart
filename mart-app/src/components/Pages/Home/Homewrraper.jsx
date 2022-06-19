
import styled from "styled-components";
export const Homewrraper = styled.div`
.main{
    margin:0px 60px 100px 60px;
}
.main div span{
  
   font-weight:700;
   font-size:28px;
   font-family: arial;
   letter-spacing: -.2px;
   color:black;
}
.heading p{
    margin-top:100px;
    color:grey;
    font-size:12px;
}
.pro_imgs{
    margin:10px;
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
    margin-left:596px;
}
.about p{
    margin:10px 110px 10px 110px ;
    text-align:center;
}
.featers_image{
    height:25%;
    width:100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top:20px;
}
.pro_box{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.pro_box:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

`