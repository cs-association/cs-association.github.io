import React from "react";
import 'react-multi-carousel/lib/styles.css';
import "./slider.css";

const Card = (props) => (
  <div className="card">
    <img src={ props.imgUrl } 
      alt={ props.alt || 'Image' } />
    <div className="card-content">
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {
      props.cards.map((card) => (
        <Card title={ card.title }
          imgUrl={ card.imgUrl } />
      ))
    }
  </div>
);

const cardsData = [
  {id: 1, title: 'CARD 1',imgUrl: 'https://rb.gy/lhg0ay'},
  {id: 2, title: 'CARD 2',imgUrl: 'https://rb.gy/ucks3o'},
  {id: 3, title: 'CARD 3', imgUrl: 'https://rb.gy/sj6lxm'},
  {id: 4, title: 'CARD 4', imgUrl: 'https://rb.gy/apacdc'},
  {id: 5, title: 'CARD 5', imgUrl: 'https://rb.gy/y2vgum'},
  {id: 6, title: 'CARD 6', imgUrl: 'https://rb.gy/xrceqy'},
  {id: 7, title: 'CARD 7', imgUrl: 'https://rb.gy/jontot'},
  {id: 8, title: 'CARD 8', imgUrl: 'https://rb.gy/exo8kl'},
  {id: 9, title: 'CARD 9', imgUrl: 'https://rb.gy/vvfclq'},
  {id: 10, title: 'CARD 10', imgUrl: 'https://rb.gy/jrkh3d'},
]

const Slider = () => {
  return (
    <div className="container">
        {/* <h1 style={{ 'text-align': 'center' }}>
          Posters
        </h1> */}
        
        <CardContainer cards={ cardsData } />
      </div>
      );
};

export default Slider;
