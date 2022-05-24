import React, { Component } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Paper } from "@mui/material";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import operation from "../img/operation.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./history.css";

const ImagesSlider = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Container>
      <Slider
        dots={false}
        infinite={true}
        speed={2000}
        slidesToShow={6}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
      >
        {count.map((e, i) => (
          <div key={i}>
            <img
              src={operation}
              width="178"
              height="178"
              style={{
                borderRadius: "50%",
                padding: "15px",
              }}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ImagesSlider;
