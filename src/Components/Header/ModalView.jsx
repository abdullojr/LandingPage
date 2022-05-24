import React from "react";
import "./modal.scss";

const ModalView = ({ closeF }) => {
  return (
    <div className="full_modal_view">
      <div className="md_con">
        <div className="exit_icon">
          <a onClick={closeF}>
            <p>X</p>
          </a>
        </div>
        <div className="md_text_con">
          <h1>Ваш город</h1>
          <a>
            <p>Волгоград</p>
          </a>
          <a>
            <p>Грозный</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
