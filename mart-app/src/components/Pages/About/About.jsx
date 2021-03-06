import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { Link } from "react-router-dom";
import proPic from "../About/m.png";
import com from "../About/c.png";
import { Grid } from "@chakra-ui/react";
import { Homewrraper } from "../Home/Homewrraper";

export const About = () => {
  return (
    <>
      <Homewrraper>
        <div>
          <div class="main">
            <div class="heading">
              <h6>. </h6>
              <p>
                <span>Blue Heaven Cosmetics Private Limited</span> <br />{" "}
                <FmdGoodOutlinedIcon /> New Delhi | <CheckCircleRoundedIcon />{" "}
                GST 07AACCB1155C1ZB
              </p>
            </div>
            <br />
            <br />

            <div class="about">
              <h1>About</h1>
              <hr />
              <p>
                To meet the ever increasing market requirements, we have made a
                continuous improvement in the supply of various genuine trusted
                products.
                <br />
                <Link to="">+Read More...</Link>
              </p>

              <div>
                <img class="featers_image" src={proPic} alt="" />
              </div>
              <div>
                <a href="https://my.indiamart.com/?back=1">
                  {" "}
                  <img class="featers_image" src={com} alt="" />
                </a>
              </div>
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <img
                  src="https://3.imimg.com/data3/MW/GA/MY-3904945/lipstick-250x250.jpg"
                  alt="Natural"
                />
                <img
                  src="https://3.imimg.com/data3/QD/KT/MY-3904945/lip-balm-250x250.jpg"
                  alt="pro_img"
                />
                <img
                  src="https://3.imimg.com/data3/TD/OG/MY-3904945/rose-water-250x250.jpg"
                  alt="pro_img"
                />
                <img
                  src="https://3.imimg.com/data3/QF/CO/MY-3904945/mascara-250x250.jpg"
                  alt="pro_img"
                />
                <img
                  src="https://3.imimg.com/data3/TP/WM/MY-3904945/sindoor-250x250.jpg"
                  alt="pro_img"
                />
                <img
                  src="https://3.imimg.com/data3/MV/NT/MY-3904945/mix-fruit-scrub-250x250.jpg"
                  alt="pro_img"
                />
                <img
                  src="https://3.imimg.com/data3/TD/OG/MY-3904945/rose-water-250x250.jpg"
                  alt="pro_img"
                />
                <img
                  src="https://3.imimg.com/data3/IR/ID/MY-3904945/massage-cream-250x250.jpg"
                  alt="pro_img"
                />
                <img
                  src="https://4.imimg.com/data4/CE/VE/GLADMIN-184994/forever-aloe-vera-gel-250x250.jpg"
                  alt="pro_img"
                />
              </Grid>
            </div>
          </div>
        </div>
      </Homewrraper>
    </>
  );
};
