import "./style.css";
import React from "react";
import { Container } from "react-bootstrap";

// Images
import dogandcat from "../img/dogandcat.png";
import glass from "../img/glass.png";
import doru from "../img/doru.png";
import handle from "../img/handle.png";
import home from "../img/home.png";
import microscop from "../img/microscop.png";
import scisor from "../img/scisor.png";
import twenty4 from "../img/twenty4.png";
import { Grid } from "@mui/material";

const Whyus = () => {
  const thedata = [
    {
      name: "Работаем круглосуточно",
      img: twenty4,
      label:
        "Мы готовы в любое время суток принять домашних питомцев и их хозяев",
    },
    {
      name: "Широкий спектр услуг",
      img: dogandcat,
      label:
        "Кроме широкопрофильных докторов  в клинике развиты узкие направления в ветеринарии – офтальмология, стоматология, дерматология, травматология, ортопедия и онкология",
    },
    {
      name: "Большой опыт",
      img: handle,
      label:
        "30 высококвалифицированных врачей нашей клиники предоставляют ветеринарную помощь уже на протяжении 18 лет!",
    },
    {
      name: "Собственная лаборатория",
      img: glass,
      label:
        "Оборудованная профессиональным оснащением производства компании IDEXX International Inc.(США), которое позволяет получить результаты исследования прямо на приеме",
    },
    {
      name: "Оснащенные стационары",
      img: home,
      label:
        "Обычный и инфекционный стационар с индивидуальным подогревом каждой клетки. Для питомцев в критическом состоянии предусмотрены кислородные камеры",
    },
    {
      name: "Новейшее оборудование",
      img: microscop,
      label:
        "Помимо лабораторного оборудования и цифрового рентгена в клинике используется современный эндоскоп KARL STORZ",
    },
    {
      name: "Запись на прием онлайн",
      img: null,
      label:
        "Запись на приём позволяет избежать ожиданий в очереди, но если вы не можете приехать - мы выезжаем на дом!",
    },
    {
      name: "Аптека и зоомагазин",
      img: doru,
      label:
        "Для удобства в клинике предусмотрен аптечный пункт, а также бутик с одеждой и косметическими средствами для ухода за домашними любимцами",
    },
    {
      name: "Груминг-салон",
      img: scisor,
      label:
        "Отдельный кабинет для проведения гигиенческих и косметических процедур, таких как мытьё и сушка, стрижка или тримминг, уход за ушами, глазами и когтями и многое другое",
    },
  ];

  const whyuselements = thedata.map((data, i) => (
    <Grid key={i} item xs={12} md={4} className="p-4">
      <div className="element_container">
        <div className="element-text-container">
          <h1 style={{ fontSize: "25px" }}>{data.name}</h1>
        </div>
        <div className="con_img_label">
          <div className="img_element">
            <img src={data.img} />
          </div>
          <div className="txt-element">
            <p className="txt-element-style">{data.label}</p>
          </div>
        </div>
      </div>
    </Grid>
  ));

  return (
    <Container style={{ paddingBottom: "200px" }}>
      <div className="whyus_main">
        <div className="whyus_header">
          <h1 className="whyus_header-text">Почему хозяева выбирают нас?</h1>
        </div>
        <div className="all_data_container">
          <Grid container>{whyuselements}</Grid>
        </div>
      </div>
    </Container>
  );
};

export default Whyus;
