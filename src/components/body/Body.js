import React, { useEffect, useState } from "react";
import "./body.css";
import drishti from "../../images/drishti-logo.svg";
import cs from "../../images/cs.svg";
import Card from "../card/Card";
import axios from "axios";

const Body = () => {
  const [data, setData] = useState({ score: [] });

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URI}/scoreboard`
        );
        setData({ ...res.data });
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  }, []);

  return (
    <div className="body">
      <div className="header">
        <img src={drishti} className="img img-drishti" alt="" />
        <img src={cs} className="img img-cs" alt="" />
      </div>

      <div className="cards">
        <span className="games-title">GAMES</span>
        {data.score.map((item) => {
          console.log(item);
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
