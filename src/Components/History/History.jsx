import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "react-bootstrap";
import "./history.css";

import operation from "../img/operation.webp";
import ImagesSlider from "./ImagesSlider";

const History = () => {
  const count = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ height: "800px", background: "#FBF8F8" }}>
      <Container className="main-parent">
        <div style={{ height: "50%" }}>
          <div className="history-comp-con">
            <h1 style={{ fontSize: "40px" }}>История компании</h1>
          </div>
          <div className="paragraph-con">
            <p style={{ color: "#59443F", maxWidth: "479px" }}>
              История компании начинается 14 января 1999 года, когда было
              образовано ООО «Чижи». Идея пришла, т.к. у основателя компании
              Прозор Жанны Георгиевны была собака боксёр по кличке Бард…
            </p>

            <div className="readmore">
              <p className="readmore-text" style={{ color: "#FFC59E" }}>
                ЧИТАТЬ ДАЛЕЕ <ArrowForwardIosIcon fontSize="12" />
              </p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <div className="history-comp-con">
            <h1 style={{ fontSize: "40px" }}>Наши специалисты</h1>
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "40px",
            }}
          >
            <ImagesSlider />
          </div>
          <div className="readmore">
            <p
              className="readmore-text"
              style={{ color: "#FFC59E", padding: "20px" }}
            >
              ПОСМОТРЕТЬ ВСЕХ <ArrowForwardIosIcon fontSize="12" />
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default History;
