import React from "react";
import "./Cancel.css";

function Cancel() {
  return (
    <div className="cancel">
      <div className="cancle-box">
        <div className="face2">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth2 sad2"></div>
        </div>
        <div className="shadow move"></div>
        <p className="message">Canceled!</p>
        <a href="https://www.payumoney.com/paybypayumoney/#/B67E1A757BEF86041891377AC98E40DE">
          <button className="button-box3">try again</button>
        </a>
      </div>
    </div>
  );
}

export default Cancel;
