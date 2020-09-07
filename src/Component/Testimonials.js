import React from 'react'
import './Styles/index.css'
import mainFace from '../images/Ellipse copy.png'
import ellipse from '../images/Ellipse.png'
import ellipse1 from '../images/Ellipse-1.png'
import ellipse2 from '../images/Ellipse-2.png'
import ellipse3 from '../images/Ellipse-3.png'
import ellipse4 from '../images/Ellipse-4.png'
import ellipse5 from '../images/Ellipse-5.png'
import ellipse6 from '../images/Ellipse-6.png'
import leftArrow from '../images/Left Arrow.png'
import rightArrow from '../images/Right Arrow.png'

export default function Testimonials() {
  return (
    <div className="testimonials-div">
      <img className="test-face" src={mainFace} alt="main-face" />

      <div className="faces">
        <img className="ellipse" src={ellipse} alt="ellipse" />
        <img className="ellipse1" src={ellipse1} alt="ellipse1" />
        <img className="ellipse2" src={ellipse2} alt="ellipse2" />
        <img className="ellipse3" src={ellipse3} alt="ellipse3" />
        <img className="ellipse4" src={ellipse4} alt="ellipse4" />
        <img className="ellipse5" src={ellipse5} alt="ellipse5" />
        <img className="ellipse6" src={ellipse6} alt="ellipse6" />
        <p className="test-quote">&ldquo;</p>
      </div>

      <div className="test-submenu">
        <h4 className="test-first-line">
          Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique.
        </h4>
        <p className="test-second-line"><span >Kerry Johnes</span> <span style={{color: "gray",  }}> - Some Company</span></p>
        <img className="left" src={leftArrow} alt="arrowLeft" />
        <img className="right" src={rightArrow} alt="arrowRight" />
      </div>

    </div>
  )
}
