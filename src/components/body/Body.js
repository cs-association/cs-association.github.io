import React from "react";
import "./body.css";
import drishti from "../../images/drishti-logo.svg";
import cs from "../../images/cs.svg";
import Card from "../card/Card";

const Body = () => {
  return (
    <div className="body">
      <div className="header">
        <img src={drishti} className="img img-drishti" alt="" />
        <img src={cs} className="img img-cs" alt="" />
      </div>

      <div className="cards">
        <span>GAMES</span>
        <Card />
      </div>
    </div>
  );
};

export default Body;
