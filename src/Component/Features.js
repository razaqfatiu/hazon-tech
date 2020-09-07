import React from 'react'
import './Styles/index.css'
import featureBg from '../images/Bg.png'
import sideImg from '../images/Img.png'
import leftArrow from '../images/Left Arrow.png'
import rightArrow from '../images/Right Arrow.png'

export default function Features() {
  return (
    <div className="features-main">
      <div className="features-left">
        <div className="features-bg"></div>
        <img className="features-bg-img" src={featureBg} alt="ft-img" />
        <p className="features-head">BENEFITS</p>
        <h2 className="features-content-head">Shaping the future</h2>
        <h4 className="features-content-main">Eget nunc scelerisque viverra mauris in aliquam. Dignissim sodales ut eu sem integer vitae. Libero nunc consequat interdum varius.
        </h4>
        <p className="features-content-submain">Magna sit amet purus gravida. Sit amet porttitor eget dolor morbi non.
        <br />
        Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
        <br />
        Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Dui faucibus in ornare quam viverra. <br />
        Posuere ac ut consequat semper viverra.
        </p>
        <button className="ft-btn">Learn more</button>
      </div>

      <div className="features-right">
        <img className="features-rt-img" src={sideImg} alt="sideImg" />
        <p className="features-rt-text">MOBILE APPS</p>
        <div className="features-slides">
          <p> 1 / 3</p>
          <img className="lA" src={leftArrow} alt="leftArrow" />
          <img className="rA" src={rightArrow} alt="rightArrow" />
        </div>
      </div>
    </div>
  )
}
