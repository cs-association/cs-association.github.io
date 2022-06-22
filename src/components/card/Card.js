import React, { useRef, useState } from "react";
import "./card.css";
import bg from "../../images/bg.svg";

const Card = (props) => {
  const showRef = useRef();
  const { game, description, person } = props.item;
  const [sortperson, setPerson] = useState([]);

  const show = () => {
    setPerson(
      person
        .sort((a, b) => {
          return a.score - b.score;
        })
        .reverse()
    );

    console.log(game, description, sortperson);
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
          <div className="title">{game}</div>
          <div className="desc">{description}</div>
          <button onClick={show}>LEADERBOARD</button>
        </div>
      </div>

      <div className="leaderboard" ref={showRef}>
        <div className="title">{game}</div>
        <div className="details">
          <div className="title det-title">LEADERBOARD</div>
          <table>
            <tr>
              <th colSpan={2}>Name</th>
              <th>Points</th>
            </tr>
            {sortperson[0] && (
              <tr>
                <td>1</td>
                <td>{sortperson[0].name} </td>
                <td>{sortperson[0].score}</td>
              </tr>
            )}
            {sortperson[1] && (
              <tr>
                <td>2</td>
                <td>{sortperson[1].name}</td>
                <td>{sortperson[1].score}</td>
              </tr>
            )}
            {sortperson[2] && (
              <tr>
                <td>3</td>
                <td>{sortperson[2].name}</td>
                <td>{sortperson[2].score}</td>
              </tr>
            )}
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
