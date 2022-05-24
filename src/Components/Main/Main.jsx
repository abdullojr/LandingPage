import React, { useState } from "react";
import "./style.scss";
import { Progress } from "antd";
import { SocialIcon } from "react-social-icons";
import "antd/dist/antd.css";
import { Container } from "react-bootstrap";

// Images
import dog from "../img/cata.png";
import cat from "../img/cat.png";
import doganddoctor from "../img/doganddoctor.png";
import doglook from "../img/doglook.png";
import dogs from "../img/dogs.png";
import rabbit from "../img/rabbit.png";

const Main = () => {
  const [progress, setProgress] = React.useState(0);
  const [text, setText] = useState(
    <h1>
      Айболит <br /> круглосуточная <br />
      ветклиника
    </h1>
  );
  const [image, setImage] = useState(dog);
  const [Prev, setPrev] = useState(0);

  const handle = () => {
    if (progress === 100) {
      setPrev((prev) => (prev >= 5 ? 0 : prev + 1));

      switch (Prev) {
        case 0:
          setText(
            <h1>
              Комфортные
              <br /> оборудованные
              <br /> стационары
            </h1>
          );
          setImage(doganddoctor);
          break;
        case 1:
          setText(
            <h1>
              Новейшее
              <br /> европейское
              <br /> оборудование
            </h1>
          );
          setImage(doglook);
          break;
        case 2:
          setText(
            <h1>
              Собственная
              <br /> современная
              <br /> лаборатория
            </h1>
          );
          setImage(rabbit);
          break;
        case 3:
          setText(
            <h1>
              Аптека и зоомагазин
              <br />
              по доступным
              <br />
              ценам
              <br />
            </h1>
          );
          setImage(cat);
          break;
        case 4:
          setText(
            <h1>
              Груминг салон
              <br />
              и косметические
              <br />
              товары
            </h1>
          );
          setImage(dogs);
          break;
        default:
          setText(
            <h1>
              Айболит <br /> круглосуточная <br />
              ветклиника
            </h1>
          );
          setImage(dog);
      }
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return async () => {
      await clearInterval(timer);
      handle();
    };
  }, [handle]);

  const ProgressStyle = {
    type: "circle",
    percent: progress,
  };

  const icon = {
    width: "40px",
    height: "40px",
  };

  const iconColor = {
    bgColor: "#C3B9B5",
    fgColor: "white",
  };

  return (
    <Container className="main-con" fluid>
      <div className="div-inside">
        <div className="changer">
          <div className="num_s">
            <ul>
              <li className="first_num">
                <div>
                  {Prev === 0 ? (
                    <Progress {...ProgressStyle} format={() => "1"} />
                  ) : (
                    1
                  )}
                </div>
              </li>
              <li>
                <div>
                  {Prev === 1 ? (
                    <Progress {...ProgressStyle} format={() => "2"} />
                  ) : (
                    2
                  )}
                </div>
              </li>
              <li>
                <div>
                  {Prev === 2 ? (
                    <Progress {...ProgressStyle} format={() => "3"} />
                  ) : (
                    3
                  )}
                </div>
              </li>
              <li>
                <div>
                  {Prev === 3 ? (
                    <Progress {...ProgressStyle} format={() => "4"} />
                  ) : (
                    4
                  )}
                </div>
              </li>
              <li>
                <div>
                  {Prev === 4 ? (
                    <Progress {...ProgressStyle} format={() => "5"} />
                  ) : (
                    5
                  )}
                </div>
              </li>
              <li>
                <div>
                  {Prev === 5 ? (
                    <Progress {...ProgressStyle} format={() => "6"} />
                  ) : (
                    6
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="first-part">
          <div className="text-container">
            {text}
            <div className="appoint-btn">
              <button className="btn btn-pro">ЗАПИСАТЬСЯ</button>
            </div>
          </div>
          <div className="icons_container">
            <div className="iistyle">
              <SocialIcon
                {...iconColor}
                style={icon}
                className="icon_style"
                url="https://instagram.com"
              />
            </div>
            <div className="iistyle">
              <SocialIcon
                {...iconColor}
                style={icon}
                className="icon_style"
                url="https://facebook.com"
              />
            </div>
            <div className="iistyle">
              <SocialIcon
                {...iconColor}
                style={icon}
                className="icon_style"
                url="https://youtube.com"
              />
            </div>
            <div className="iistyle">
              <SocialIcon
                {...iconColor}
                style={icon}
                className="icon_style"
                url="https://vk.com"
              />
            </div>
          </div>
        </div>

        <div className="parent-con">
          <div className="div-inside-5">
            <div>
              <img src={image} width="700" height="653" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
