import React from "react";
import "./home.css";
import Body from "../components/body/Body";
import SimpleSlider from "../components/slider/Slider";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Body />
      <SimpleSlider />
      <Footer />
    </div>
  );
};

export default Home;
