import React from "react";
import "./Failure.css";

function Failure() {
  return (
    <div className="failure">
      <div className="error-box">
        <div className="face2">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth sad"></div>
        </div>
        <div className="shadow move"></div>
        <p className="message">Error!</p>
        <a href="https://www.payumoney.com/paybypayumoney/#/B67E1A757BEF86041891377AC98E40DE">
          <button className="button-box2">try again</button>
        </a>
      </div>
    </div>
  );
}

export default Failure;
