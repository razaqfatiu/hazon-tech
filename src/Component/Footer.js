import React from 'react'
import './Styles/index.css'
import msg from '../images/Vector (6).png';
import phone from '../images/Vector.png';
import twitter from '../images/Vector (1).png';
import facebook from '../images/Vector (2).png';
import youtube from '../images/Vector (3).png';
import medium from '../images/Vector (4).png';
import instagram from '../images/Vector (5).png';


export default function Footer() {
  return (
    <div className="footer">
      <div className="section1">
        <h2>Lopper</h2>
        <h5>Eu augue ut lectus arcu bibendum at.</h5>
      </div>
      <div className="section2">

        <ul className="submenu1">
          <li><a href="#">MENU</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <ul className="submenu2">
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Ipsum</a></li>
          <li><a href="#">Dolor</a></li>
          <li><a href="#">Sit Amet</a></li>
        </ul>

        <ul className="submenu3">
          <li><a href="#">CONTACT US</a></li>
          <li><span><img className="sub3-icon" src={msg} alt="msg" /></span><a href="#"> contact@lop.com</a></li>
          <li><span><img className="sub3-icon" src={phone} alt="phn" style={{ height: "15px" }} /></span><a href="#"> 856 &#45; 693 &#45; 456</a></li>
        </ul>

        <ul className="submenu4">
          <li><a href="#">FOLLOW US </a></li>
          <ul>
            <li><img className="sub4-icon" src={twitter} alt="phn" style={{ height: "15px" }} /></li>
            <li><img className="sub4-icon" src={facebook} alt="phn" style={{ height: "15px" }} /></li>
            <li><img className="sub4-icon" src={instagram} alt="phn" style={{ height: "15px" }} /></li>
            <li><img className="sub4-icon" src={youtube} alt="phn" style={{ height: "15px" }} /></li>
            <li><img className="sub4-icon" src={medium} alt="phn" style={{ height: "15px" }} /></li>
          </ul>
        </ul>

        <p className="foot-note">&copy; 2019 Lopper by mariuszdaniel. All right reserved.</p>

      </div>
    </div>
  )
}
