import React from "react";
import BBImg from "../Assets/BBImg.jpeg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img className="home_img" src={BBImg} alt="" />
      <a href="https://www.payumoney.com/paybypayumoney/#/B67E1A757BEF86041891377AC98E40DE">
        <button className="button">Pay now</button>
      </a>
    </div>
  );
}

export default Home;
