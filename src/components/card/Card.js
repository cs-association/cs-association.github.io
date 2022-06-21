import React, { useRef } from "react";
import "./card.css";
import bg from "../../images/bg.svg";

const Card = (props) => {
  const showRef = useRef();

  const show = () => {
    showRef.current.style.opacity = 1;
    showRef.current.style.visibility = "visible";
  };

  const hide = () => {
    showRef.current.style.opacity = 0;
    showRef.current.style.visibility = "hidden";
  };

  return (
    <div className="card">
      <div className="card-details">
        <div className="top">
          <img src={bg} alt="" />
        </div>
        <div className="bottom">
          <div className="title">Event Title</div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi nunc
            adipiscing proin congue vivamus augue. Imperdiet tempor tellus
            nullam quis. Leo nisl ullamcorper ac proin. Neque ut.
          </div>
          <button onClick={show}>LEADERBOARD</button>
        </div>
      </div>

      <div className="leaderboard" ref={showRef}>
        <div className="title">Event Title</div>
        <div className="details">
          <div className="title det-title">LEADERBOARD</div>
          <table>
            <tr>
              <th colSpan={2}>Name</th>
              <th>Points</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Candidate Name</td>
              <td>999</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Candidate Name</td>
              <td>999</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Candidate Name</td>
              <td>999</td>
            </tr>
          </table>
        </div>
        <div className="close" onClick={hide}>
          &#x2715;
        </div>
      </div>
    </div>
  );
};

export default Card;
