import React, { Component } from "react";
// import Carousel from "react-multi-carousel";
// import 'react-multi-carousel/lib/styles.css';
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import arrow_left from "../../icons/arrow_left.svg";
// import arrow_right from "../../icons/arrow_right.svg";

// const Card = (props) => (
//   <div className="poster-card">
//     <img src={props.imgUrl}
//       alt={props.alt || 'Image'} />
//   </div>
// );

// const CardContainer = (props) => (
//   <div className="poster-cards-container">
//     {
//       props.cards.map((card) => (
//         <Card title={card.title}
//           imgUrl={card.imgUrl} />
//       ))
//     }
//   </div>
// );

// const cardsData = [
//   { id: 1, title: 'CARD 1', imgUrl: 'https://rb.gy/lhg0ay' },
//   { id: 2, title: 'CARD 2', imgUrl: 'https://rb.gy/ucks3o' },
//   { id: 3, title: 'CARD 3', imgUrl: 'https://rb.gy/sj6lxm' },
//   { id: 4, title: 'CARD 4', imgUrl: 'https://rb.gy/apacdc' },
//   { id: 5, title: 'CARD 5', imgUrl: 'https://rb.gy/y2vgum' },
//   { id: 6, title: 'CARD 6', imgUrl: 'https://rb.gy/xrceqy' },
//   { id: 7, title: 'CARD 7', imgUrl: 'https://rb.gy/jontot' },
//   { id: 8, title: 'CARD 8', imgUrl: 'https://rb.gy/exo8kl' },
//   { id: 9, title: 'CARD 9', imgUrl: 'https://rb.gy/vvfclq' },
//   { id: 10, title: 'CARD 10', imgUrl: 'https://rb.gy/jrkh3d' },
// ]

// const SimpleSlider = () => {
//   return (
//     <div className="poster-container">

//       <CardContainer cards={cardsData} />
//       <div className="arrow-container">
//         <div className="arrow-set">
//           <div className="arrow-left">
//             <img src={arrow_left} alt="arrow_left" />
//           </div>
//           <div className="arrow-right">
//             <img src={arrow_right} alt="arrow_right" />
//           </div>
//         </div>
//       </div>     
//     </div>
//   );
// };

// export default SimpleSlider;


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
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
            <Card imgUrl='https://wallpaperset.com/w/full/0/6/0/471702.jpg'/>
            </div>
          <div>
            <Card imgUrl='https://wallpaperset.com/w/full/0/6/0/471702.jpg'/>
            </div>
          <div>
            <Card imgUrl='https://wallpaperset.com/w/full/0/6/0/471702.jpg'/>
            </div>
          <div>
            <Card imgUrl='https://wallpaperset.com/w/full/0/6/0/471702.jpg'/>
            </div>
          <div>
            <Card imgUrl='https://wallpaperset.com/w/full/0/6/0/471702.jpg'/>
          </div>
          <div>
            <Card imgUrl='https://wallpaperset.com/w/full/0/6/0/471702.jpg'/>
          </div>
          <div>
            <Card imgUrl='https://wallpaperset.com/w/full/0/6/0/471702.jpg'/>
          </div>
          <div>
            <Card imgUrl='https://wallpaperset.com/w/full/0/6/0/471702.jpg'/>
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


// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };