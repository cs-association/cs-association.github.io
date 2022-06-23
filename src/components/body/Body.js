import React, { useEffect, useRef, useState } from "react";
import "./body.css";
import drishti from "../../images/drishti-logo.svg";
import cs from "../../images/cs.svg";
import Card from "../card/Card";
import axios from "axios";

const Body = () => {
  const [data, setData] = useState({ score: [] });
  const loadRef = useRef();

  useEffect(() => {
    const getdata = async () => {
      try {
        loadRef.current.style.visibility = "visible";
        loadRef.current.style.opacity = 1;

        const res = await axios.get(
          `${process.env.REACT_APP_API_URI}/scoreboard`
        );
        setData({ ...res.data });

        loadRef.current.style.opacity = 0;
        loadRef.current.style.visibility = "hidden";
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  }, []);

  return (
    <div className="body">
      {/* =========== LOADING =========== */}
      <div className="loading" ref={loadRef}>
        <div class="multi-spinner-container">
          <div class="multi-spinner">
            <div class="multi-spinner">
              <div class="multi-spinner">
                <div class="multi-spinner">
                  <div class="multi-spinner">
                    <div class="multi-spinner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <img src={drishti} className="img img-drishti" alt="" />
        <img src={cs} className="img img-cs" alt="" />
      </div>

      {/* =========== CARDS =========== */}
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
