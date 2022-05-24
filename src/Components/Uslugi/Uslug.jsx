import { Container, Paper, Grid, Typography } from "@mui/material";
import React from "react";
import "./ulug.css";
// Images
import tero from "../img/terapeya.png";
import xirurg from "../img/xirurg.png";
import neuro from "../img/neuro.png";
import ortopedia from "../img/ortopedia.png";
import lapa from "../img/lapa.png";
import oftarmolog from "../img/oftarmolog.png";
import kardiolog from "../img/kardiolog.png";
import stomotology from "../img/stomotology.png";
import reproduct from "../img/reproduct.png";
import visualny from "../img/visualny.png";
import laboratory from "../img/laboratory.png";
import onkology from "../img/onkology.png";
import endocr from "../img/endocr.png";
import ekzoenimal from "../img/ekzoenimal.png";
import tabletok from "../img/tabletok.png";
import grooming from "../img/grooming.png";
// End of Images

const Uslug = () => {
  const data = [
    { name: "Терапея", img: tero, services: "26 услуг" },
    { name: "Хирургия", img: xirurg, services: "26 услуг" },
    { name: "Неврология", img: neuro, services: "26 услуг" },
    { name: "Ортопедия", img: ortopedia, services: "26 услуг" },
    { name: "Дерматология", img: lapa, services: "26 услуг" },
    { name: "Офтальмология", img: oftarmolog, services: "26 услуг" },
    { name: "Кардиология", img: kardiolog, services: "26 услуг" },
    { name: "Стоматология", img: stomotology, services: "26 услуг" },
    { name: "Репродуктология", img: reproduct, services: "26 услуг" },
    { name: "Визуальная диагностика", img: visualny, services: "26 услуг" },
    { name: "Лаборатория", img: laboratory, services: "26 услуг" },
    { name: "Онкология", img: onkology, services: "26 услуг" },
    { name: "Эндокринология", img: endocr, services: "26 услуг" },
    { name: "Экзотические животные", img: ekzoenimal, services: "26 услуг" },
    { name: "Аптека", img: tabletok, services: "26 услуг" },
    { name: "Груминг", img: grooming, services: "26 услуг" },
  ];

  const service = data.map((ser, key) => (
    <Grid
      key={key}
      className="p-2"
      item
      xs={12}
      md={3}
      style={{
        width: "320px",
        height: "220px",
      }}
    >
      <Paper elevation={3} className="paper-style">
        <div style={{ width: "100%", height: "100%" }}>
          <div className="text-container">
            <Typography variant="p" className="text-style">
              {ser.name}
            </Typography>
          </div>
          <div style={{ display: "flex", height: "70%" }}>
            <div className="con-footer-text">
              <p style={{ paddingLeft: "20px" }}>{ser.services}</p>
            </div>
            <div className="image-container">
              <img src={ser.img} width="100" height="100" />
            </div>
          </div>
        </div>
      </Paper>
    </Grid>
  ));

  return (
    <>
      <Container
        style={{
          paddingBottom: "100px",
        }}
      >
        <Grid container>{service}</Grid>
      </Container>
    </>
  );
};

export default Uslug;
