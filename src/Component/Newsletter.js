import React from 'react'
import './Styles/index.css'
import leftArrow from '../images/Left Arrow.png'

export default function Newsletter() {
  return (
    <div className="newsletter-div">
      <h4>Subscribe to our newsletter</h4>
      <h6 className="subtitle">Cras pulvinar mattis nunc sed blandit</h6>
      <p>
        <span className="email">ENTER EMAIL</span>
        <span className="sub">SUBSCRIBE</span> <img className="right" src={leftArrow} alt="arrowRight" />

      </p>
    </div>
  )
}
