import React, { Component } from "react";
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import casino_room from '../../images/casino_room.jpeg';
import cascade_coding from '../../images/cascade_coding.jpeg'
import white from '../../images/white.png'
import arrow_left from "../../icons/arrow_left.svg";
import arrow_right from "../../icons/arrow_right.svg";


export default class SimpleSlider extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      // speed: 3500,
      // autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
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

          {/* <img
      src={props.imgUrl}
          onClick={this.handleShowDialog}
          alt={props.alt || 'Image'}
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={props.imgUrl}
              onClick={this.handleShowDialog}
              alt="err"
            />
          </dialog>)} */}
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
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <Card imgUrl={casino_room}/>
            </div>
          <div key={2}>
            <Card imgUrl={cascade_coding}/>
            </div>
          <div key={3}>
            <Card imgUrl={white}/>
            </div>
          <div key={4}>
            <Card imgUrl={white}/>
            </div>
          <div key={5}>
            <Card imgUrl={white}/>
          </div>
          <div key={6}>
            <Card imgUrl={white}/>
          </div>
          <div key={7}>
            <Card imgUrl={white}/>
          </div>
          <div key={8}>
            <Card imgUrl={white}/>
          </div>
          
        </Slider>
        <div className="arrow-container">
            <div className="arrow-set">
              <div className="button" onClick={this.previous}>
                <img src={arrow_left} alt="arrow_left" className="button" onClick={this.previous}/>
              </div>
              <div className="button" onClick={this.next}>
                <img src={arrow_right} alt="arrow_right" className="button" onClick={this.next}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
