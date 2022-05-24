import React from "react";
import "./Footer.scss";
import icon from "../Firstpagecomps/img/icon.png";
import GoogleStore from "../Firstpagecomps/img/google.png";
import AppStore from "../Firstpagecomps/img/appstore.png";
import { SocialIcon } from "react-social-icons";
import { Grid } from "@mui/material";

const Footer = () => {
  const instagram = "";
  const facebook = "";
  const youtube = "";
  const vk = "";

  const iconStyle = {
    bgColor: "white",
    fgColor: "#59443F",
  };

  const Style = {
    icon: {
      width: "40px",
      height: "40px",
    },
  };
  return (
    <div className="footer">
      <div className="padding">
        {/* Start of the first div */}
        <div className="ftsp">
          <div className="footer-icon-label">
            <div>
              <img src={icon} className="footer-icon" />
            </div>
            <div className="aybolit">
              <div>
                <h1 className="fontSize">Айболит</h1>
              </div>
              <div>
                <p className="aybolit-label">ветеринарная клиника</p>
              </div>
            </div>
          </div>

          <div className="rest-icon">
            <div style={{ paddingRight: "14px" }}>
              <img src={AppStore} />
            </div>
            <div>
              <img src={GoogleStore} />
            </div>
          </div>
        </div>
        <div className="newRest">
          <div className="icons">
            <div className="all_icon">
              <div className="icon_style">
                <SocialIcon
                  style={Style.icon}
                  {...iconStyle}
                  url={`https://instagram.com/${instagram}`}
                  color="primary"
                />
              </div>
              <div className="icon_style">
                <SocialIcon
                  style={Style.icon}
                  {...iconStyle}
                  url={`https://facebook.com/${facebook}`}
                  color="primary"
                />
              </div>
              <div className="icon_style">
                <SocialIcon
                  style={Style.icon}
                  {...iconStyle}
                  url={`https://vk.com/${vk}`}
                  color="primary"
                />
              </div>
              <div className="icon_style_end">
                <SocialIcon
                  style={Style.icon}
                  {...iconStyle}
                  url={`https://youtube.com/${youtube}`}
                  color="primary"
                />
              </div>
            </div>
          </div>
        </div>
        <Grid container>
          <Grid item xs={12} md={12}></Grid>
        </Grid>
        <div className="links">
          <div className="politics">
            <ul>
              <li>
                <a href="#politics">
                  Политика
                  <br />
                  конфиденциальности в <br />
                  отношении обработки <br /> персональных данных
                </a>
              </li>
            </ul>
          </div>

          <div className="links_con">
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">Услуги и цены</a>
              </li>
              <li>
                <a href="#">История компании</a>
              </li>
              <li>
                <a href="#">Наши специалисты</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
              <li>
                <a href="#"> Реквизиты</a>
              </li>
              <li>
                <a href="#"> Онлайн-оплата</a>
              </li>
            </ul>
          </div>
          <div className="links_con_2">
            <ul>
              <li>
                <a href="#">Отзывы</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">Груминг-салон</a>
              </li>
              <li>
                <a href="#"> Косметика</a>
              </li>
              <li>
                <a href="#">Новости и акции</a>
              </li>
              <li>
                <a href="#"> Блог</a>
              </li>
            </ul>
          </div>
          <div className="links_con_3">
            <ul>
              <li> aibolit34.ru</li>
              <li>aibolit34@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="madeWithlove">
          <div className="last_element">
            <h1>Made with 🖤 from UnitBean</h1>
          </div>
        </div>
        {/* End of the first div */}
      </div>
    </div>
  );
};

export default Footer;
