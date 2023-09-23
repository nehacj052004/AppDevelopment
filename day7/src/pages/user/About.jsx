import React from "react";
import AboutBackground from "../../assets/resources/about-background.png";
import AboutBackgroundImage from "../../assets/resources/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Ensuring your child an innovative way of learning....
        </h1>
        <p className="primary-text">
          Our School has got the world class facilities for your child with individual attention and care.
        </p>
        <p className="primary-text">
          Your child's future is our responsibility...and  we make sure we keep it.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
