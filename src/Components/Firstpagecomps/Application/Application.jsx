import React from "react";
import { Container } from "react-bootstrap";
import "./appstylce.css";
import dodge from "../img/dog.png";
import phone from "../img/phone.png";
import googleSore from "../img/google.png";
import AppStore from "../img/appstore.png";

const Application = () => {
  return (
    <div className="main-app-con">
      <Container>
        <div className="main_app_con">
          <div className="main_app_text">
            <div className="soon">
              <p style={{ color: "white", fontSize: "20px", fontWeight: 400 }}>
                скоро
              </p>
            </div>
            <div>
              <h1 className="app-label">
                Удобное приложение для питомцев и <br />
                их хозяев
              </h1>
            </div>
            <div className="app-soft">
              <div>
                <img src={googleSore} width={189} height={73} />
              </div>
              <div>
                <img src={AppStore} width={165} height={47} />
              </div>
            </div>
          </div>

          <div className="phone-image">
            <img src={phone} width={425} height={760} className="phone" />
            <img src={dodge} width={379} height={428} className="dog-image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Application;
