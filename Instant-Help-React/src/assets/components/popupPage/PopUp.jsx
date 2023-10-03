import React from "react";
import "./popup.css";
const PopUp = () => {
  const popShow = () => {
    document.getElementById("PopUp").classList.add("open-popup");
  };
  const popRemove = () => {
    document.getElementById("PopUp").classList.remove("open-popup");
  };
  return (
    <div>
      <div className="container">
        <button className="btn btn-success" onClick={popShow}>
          Submit{" "}
        </button>

        <div className="PopUp" id="PopUp">
          <img src="./images/tick.png" alt="" srcset="" />

          <h1> Thank You </h1>
          <p>Your Registration is completed Successfully </p>
          <button className="btn" onClick={popRemove}>
            {" "}
            OK{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
