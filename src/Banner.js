import React from "react";
import { BiSearch } from 'react-icons/bi';

const Banner = () => {
  return (
    <div className="Banner">
      <div className="circle_gradiant"></div>
      <div className="Heading_And_Button">
        <div className="Heading_container">
          <h1 className="Heading_title"> Get your Dream Job Today</h1>
          <p className="p__subtitle">
            Explore all the most exciting job roles based on your interest and
            study major
          </p>
        </div>
        <div className="card">
          <div className="card_location">
            <label className="Loaction_label">Loaction</label>
            <input type="text" placeholder="Enter location" />
          </div>
          <div className="card_type">
            <label className="type_label">Type</label>
            <input type="text" placeholder="Enter type of job" />
          </div>
          <div className="card_button">
            <button className="sr-button"> <BiSearch className="sr-icons" />search</button>
          </div>
        </div>
        <h1 className="Category">Popular Category</h1>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="Img_container">
        <div className="card_UI">
          <div className="card_UI_logo">
            <div className="bottom_circle"></div>
            <div className="top_circle"></div>
          </div>
          <div className="UI_Text">
            <p className="UI_Text1"> UI/UX Designer</p>
            <p className="UI_Text2">Orizon</p>
          </div>
          <div className="UI_apply">
            <p>Apply</p>
          </div>
        </div>
        <div className="image">
          <div className="random"></div>
          <img className="image_cube" src="../pngegg1.png" />
        </div>
        <div className="Hire_card">
          <p className="Hired_Text1">50K+</p>
          <div className="slider">
            <div className="slider1"></div>
            <div className="slider2"></div>
            <div className="slider3"></div>
            <div className="slider4"></div>
            <div className="slider5"></div>
            <div className="slider6"></div>
            <div className="slider7"></div>
          </div>
          <p className="Hired_Text2"> People got hired</p>
        </div>
        <div className="egg"></div>
      </div>
    </div>
  );
};

export default Banner;
