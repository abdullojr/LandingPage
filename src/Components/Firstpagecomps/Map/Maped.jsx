import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./Map.css";
import Googlemap from "./GoogleMap/Googlemap";

const Maped = () => {
  return (
    <Container className="map-page">
      <div className="map-container">
        <div className="page_header_text">
          <h1 className="page-label">Контакты</h1>
        </div>

        <div className="rest-container">
          <div className="map_first_part">
            <div className="f_section_one">
              <div className="fso_text">
                <h1 style={{ fontSize: "30px", fontWeight: 400 }}>
                  {" "}
                  Айболит на Краснополянской
                </h1>
              </div>
              <div className="fso-parts">
                <div className="icon_part">
                  <div className="in_icon">
                    <LocationOnIcon
                      fontSize={"large"}
                      className="inicon_style"
                    />
                  </div>
                  <div className="in_text">
                    <p className="intext_style">
                      Дзержинский район, ул.
                      <br /> Краснополянская, 30
                    </p>
                  </div>
                </div>
                <div className="icon_part">
                  <div className="in_icon">
                    <PhoneIcon fontSize={"large"} className="inicon_style" />
                  </div>
                  <div className="in_text">
                    <p className="intext_style">96 22 92</p>
                  </div>
                </div>
                <div className="icon_part">
                  <div className="in_icon">
                    <AccessTimeIcon
                      fontSize={"large"}
                      className="inicon_style"
                    />
                  </div>
                  <div className="in_text">
                    <p className="intext_style">Круглосуточно</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="f_section-two">
              <div className="fso_text">
                <h1 style={{ fontSize: "30px", fontWeight: 400 }}>
                  {" "}
                  Айболит на Тулака
                </h1>
              </div>
              <div className="fso-parts">
                <div className="icon_part">
                  <div className="in_icon">
                    <LocationOnIcon
                      fontSize={"large"}
                      className="inicon_style"
                    />
                  </div>
                  <div className="in_text">
                    <p className="intext_style">
                      Советский район,
                      <br /> ул. Карла Маркса, 7
                    </p>
                  </div>
                </div>
                <div className="icon_part">
                  <div className="in_icon">
                    <PhoneIcon fontSize={"large"} className="inicon_style" />
                  </div>
                  <div className="in_text">
                    <p className="intext_style">96 22 92</p>
                  </div>
                </div>
                <div className="icon_part">
                  <div className="in_icon">
                    <AccessTimeIcon
                      fontSize={"large"}
                      className="inicon_style"
                    />
                  </div>
                  <div className="in_text">
                    <p className="intext_style">Круглосуточно</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="map_second_part">
            <Googlemap />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Maped;
