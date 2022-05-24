import React from "react";
import "./style.scss";
import "./icon.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import App from "@mui/material/AppBar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Appoint = () => {
  return (
    <>
      <App className="appoint-header">
        <Header />
      </App>
      <div className="app-main-element">
        <div className="back">
          <ArrowBackIosIcon className="back-arrow-icon" />
          <a href="/">
            <h5 className="go_back">НАЗАД</h5>
          </a>
        </div>

        <div>
          <div>
            <h1>Записьна прием</h1>
          </div>
          <div>Component</div>
        </div>
      </div>

      <div className="appoint-footer">
        <Footer />
      </div>
    </>
  );
};

export default Appoint;
