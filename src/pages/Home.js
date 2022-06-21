import React from "react";
import "./home.css";
import Body from "../components/body/Body";
import Slider from "../components/slider/Slider";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Body />
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
