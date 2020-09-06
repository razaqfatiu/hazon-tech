import React from 'react'
import './Styles/index.css'
import IntroImg from '../images/Photo.png'

export default function Intro() {
  return (
    <div className="intro">

      <div className="intro-left">
        <p className="intro-head">INTRO</p>
        <h1>Our future</h1>
        <h5>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle</h5>
        <p className="intro-foot">
          By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
        </p>
        <button className="intro-btn">LEARN MORE</button>
      </div>

      <div className="intro-right">
        <div className="intro-bg"></div>
        <div className="intro-img"></div>
        <div className="intro-quote">
          <p className="q-up">&ldquo;</p>
          <blockquote >
            Commodo sed egestas
            egestas fringilla
            phasellus faucibus.
          </blockquote>
          <p className='q-down'>&rdquo;</p>
        </div>

      </div>
    </div>
  )
}
