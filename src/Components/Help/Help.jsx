import React from "react";
import { Container } from "react-bootstrap";
import bird from "../img/birdimage.png";
import "./helpstyle.css";

const Help = () => {
  return (
    <Container>
      <div className="boaxing">
        <div className="containing">
          <h1 className="contain-texting">1 150 000</h1>
        </div>
        <div className="text-containering">
          <h1 className="other-texting">
            питомцам мы помогли за 18 лет работы
          </h1>
        </div>
        <div className="image-containering">
          <img src={bird} width={288} height={223} />
        </div>
      </div>
    </Container>
  );
};

export default Help;
