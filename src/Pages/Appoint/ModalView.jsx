import React from "react";
import "./modal.scss";

const ModalView = ({ closeF }) => {
  return (
    <div className="modal__con">
      <div>
        <div className="x_con">
          <span onClick={closeF}>X</span>
        </div>
        <div className="head__con">
          <h5>
            Вход или
            <br /> регистрация
          </h5>
          <input
            type={"tel"}
            className="input__field"
            placeholder="+7 (999) 999 99 99"
          />
          <button className="btn-next">ДАЛЕЕ</button>
          <a className="head_con_label">ПРОДОЛЖИТЬ БЕЗ РЕГИСТРАЦИИ</a>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
