import React, { useState } from "react";
import "./style.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import App from "@mui/material/AppBar";
import { Grid, Modal } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import ModalView from "./ModalView";

const Appoint = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <App className="appoint-header">
        <Header />
      </App>
      {/*       
      <div className="app-main-element">
        <div className="wrapper">
          <div className="back">
            <ArrowBackIosIcon className="back-arrow-icon" />
            <Link to="/">
              <h5 className="go_back">НАЗАД</h5>
            </Link>
          </div>
          <div className="app_second_con">
            <div className="app_priom">
              <h1 className="app_priom_text">
                Запись <br />
                на прием
              </h1>
            </div>
            <div className="app_component">
              <div className="com_paper" onClick={() => setOpen(!open)}>
                <p>
                  <span className="com_paper_name">Онлайн-консультация</span>
                  <span className="com_paper_name">2000 ₽</span>
                </p>
              </div>
              <div className="com_paper">
                <p>
                  <span className="com_paper_name">Прием в клинике</span>
                  <span className="com_paper_name">Бесплатно</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="app-main-element">
        <div className="wrapper">
          <div className="back">
            <ArrowBackIosIcon className="back-arrow-icon" />
            <Link to="/">
              <h5 className="go_back">НАЗАД</h5>
            </Link>
          </div>
          <div className="app_second_con">
            <div className="app_priom">
              <h1 className="app_priom_text">
                Оформление <br />
                заказа
              </h1>
            </div>

            <div className="app_component">
              <Grid container>
                <Grid item xs={12} md={12}>
                  <div className="com_paper_field">
                    <input
                      type={"text"}
                      className="com__paper__input"
                      placeholder="ФИО"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ paddingRight: "20.5px" }}>
                  <div className="com_paper_field">
                    <input
                      type={"text"}
                      className="com__paper__input"
                      placeholder="+7 (999) 999 99 99"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ paddingLeft: "20.5px" }}>
                  <div className="com_paper_field">
                    <input
                      type={"text"}
                      className="com__paper__input"
                      placeholder="Желаемая дата и время приема"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={12} style={{ marginBottom: "24px" }}>
                  <div className="com_paper_field_large">
                    <textarea
                      className="com__paper__input"
                      placeholder="Кратко опишите проблему"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className="oplata_container">
                    <div className="all__container">
                      <Grid container>
                        <Grid item xs={12} md={6}>
                          <div className="simple_con">
                            <h4>Оплата банковской картой</h4>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="modal_box_container">
          <ModalView closeF={handleClose} />
        </div>
      </Modal>
      <div className="appoint-footer">
        <Footer />
      </div>
    </>
  );
};

export default Appoint;
