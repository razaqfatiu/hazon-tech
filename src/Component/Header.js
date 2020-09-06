/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Styles/index.css'
import phoneIcon from "../images/Vector.png";
import menu from "../images/Menu.png";
import Rectangle from "../images/Rectangle.png";
import SeeMore from "../images/Icon.png";
import RightArrow from "../images/Right Arrow.png";

export default function Header() {
  return (
    <div className="header">

      <div className="bg-header">
        <img className="header-bg-img" src={Rectangle} alt="header-im" />
        <div className="bg-header1"></div>
        <div className="bg-header2"></div>
      </div>

      <h2>
        <a href="#" className="logo">Lopper</a>
      </h2>

      <ul className="nav">
        <li className="">Home</li>
        <li className="">Services</li>
        <li className="">Work</li>
        <li className="">About</li>
        <li className=""><img className="vec" src={phoneIcon} alt="phon-ico" />
          {/* <span></span>
          <span className="numb">	</span> */}
        </li>
        <li>&#40;01&#41; 666 &#45; 693 &#45; 456 </li>
        <li className=""><img src={menu} alt="menu-icon" /></li>
      </ul>

      <div className="headline">
        <p className="headline-intro">WHAT WE DO&#63;</p>
        {/* <h2 className="headline-content">We grow great business</h2> */}
        <h1 className="headline-content">We grow </h1>
        <h1 className="headline-content2">great business</h1>
      </div>

      <div className="scroll-div">
        <p className="scroll-text">Scroll to see more</p>
        <a href="#" className="scroll-img"><img src={SeeMore} alt="see-more" /></a>
      </div>

      <div className="subheader">
        <a className="subheader-icon" href="#"><img src={RightArrow} alt="right-arrow" /></a>
        <p className="subheader-text">Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius</p>
      </div>

    </div>
  )
}
