import React from "react";
import { ImBullhorn } from 'react-icons/im';
import { BsPencilSquare } from 'react-icons/bs';

import { FaPenNib } from 'react-icons/fa';
import { BiHeadphone} from 'react-icons/bi';
import { FiCamera } from 'react-icons/fi';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';




const Buttons = () => {
  return (
    <div className="Buttons">
      <div className="market">
        <ImBullhorn  className="icons"/>
        <p className="market_text1">Marketer</p>
        <p className="market_text2">123 Job Offers</p>
      </div>
      <div className="copy">
      <BsPencilSquare  className="icons"/>
      <p className="market_text1">Copywriter</p>
        <p className="market_text2">46 Job Offers</p>
      </div>
      <div className="design">
      <FaPenNib  className="icons"/>
      <p className="market_text1">Designer</p>
        <p className="market_text2">349 Job Offers</p>
      </div>
      <div className="anchor">
      <BiHeadphone  className="icons"/>
      <p className="market_text1">Anchor</p>
        <p className="market_text2">46 Job Offers</p>
      </div>
      <div className="photo">
      <FiCamera  className="icons"/>
      <p className="market_text1">Photographer</p>
        <p className="market_text2">181 Job Offers</p>
      </div>
      <div className="explore">
      <BsFillArrowUpRightCircleFill  className="ex-icons"/>
      <p className="market_text1">EXPLORE ALL</p>
      </div>
      
    </div>
  );
};

export default Buttons;
