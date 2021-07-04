import React from "react";
import "./Success.css";

function Success() {
  return (
    <div className="success">
      <div className="success-box">
        <div className="face">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth happy"></div>
        </div>
        <div className="shadow scale"></div>
        <p className="message">Success!</p>
        <button className="button-box">continue</button>
      </div>
    </div>
  );
}

export default Success;
