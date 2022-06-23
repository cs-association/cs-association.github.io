import React, { Component } from "react";
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import casino_room from '../../images/casino_room.jpeg';
import cascade_coding from '../../images/cascade_coding.jpeg'
import white from '../../images/white.png'
// import arrow_left from "../../icons/arrow_left.svg";
// import arrow_right from "../../icons/arrow_right.svg";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 3500,
      autoplaySpeed: 800,
      cssEase: "linear",
      pauseOnHover: true,
       responsive: [
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            pauseOnHover: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
      ]
    };
    const Card = (props) => (
      <div className="poster-card">
        <img src={props.imgUrl}
          alt={props.alt || 'Image'} />
      </div>
    );

    const CardContainer = (props) => (
      <div className="poster-cards-container">
        {
          props.cards.map((card) => (
            <Card title={card.title}
              imgUrl={card.imgUrl} />
          ))
        }
      </div>
    );

    const cardsData = [
      { id: 1, title: 'CARD 1', imgUrl: 'https://wallpaperset.com/w/full/0/6/0/471702.jpg' },
      { id: 2, title: 'CARD 2', imgUrl: 'https://wallpaperset.com/w/full/0/6/0/471702.jpg' },
      { id: 3, title: 'CARD 3', imgUrl: 'https://wallpaperset.com/w/full/0/6/0/471702.jpg' },
      { id: 4, title: 'CARD 4', imgUrl: 'https://wallpaperset.com/w/full/0/6/0/471702.jpg' },
      { id: 5, title: 'CARD 5', imgUrl: 'https://wallpaperset.com/w/full/0/6/0/471702.jpg' },
      { id: 6, title: 'CARD 6', imgUrl: 'https://wallpaperset.com/w/full/0/6/0/471702.jpg' },
      { id: 7, title: 'CARD 7', imgUrl: 'https://wallpaperset.com/w/full/0/6/0/471702.jpg' },
      { id: 8, title: 'CARD 8', imgUrl: 'https://wallpaperset.com/w/full/0/6/0/471702.jpg' },
      { id: 9, title: 'CARD 9', imgUrl: 'https://wallpaperset.com/w/full/0/6/0/471702.jpg' },
      { id: 10, title: 'CARD 10', imgUrl: 'https://wallpaperset.com/w/full/0/6/0/471702.jpg' },
    ]
    return (
      <div className="poster-container">
        <Slider {...settings}>
          <div>
            <Card imgUrl={casino_room}/>
            </div>
          <div>
            <Card imgUrl={cascade_coding}/>
            </div>
          <div>
            <Card imgUrl={white}/>
            </div>
          <div>
            <Card imgUrl={white}/>
            </div>
          <div>
            <Card imgUrl={white}/>
          </div>
          <div>
            <Card imgUrl={white}/>
          </div>
          <div>
            <Card imgUrl={white}/>
          </div>
          <div>
            <Card imgUrl={white}/>
          </div>
          {/* <div className="arrow-container">
            <div className="arrow-set">
              <div className="arrow-left">
                <img src={arrow_left} alt="arrow_left" />
              </div>
              <div className="arrow-right">
                <img src={arrow_right} alt="arrow_right" />
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    );
  }
}
