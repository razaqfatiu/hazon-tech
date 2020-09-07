import React from 'react'
import './Styles/index.css'
import webdesign from '../images/Icon (6).png'
import webdev from '../images/Icon (1).png'
import webdesign2 from '../images/Icon (4).png'
import webdev2 from '../images/Icon (5).png'
import marketing from '../images/Icon (2).png'
import marketing2 from '../images/Icon (3).png'

export default function Services() {
  const state = [
    {
      title: 'Webdesign',
      img: webdesign,
      color: '#00F0B5',
      content: 'Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.',
    },
    {
      title: 'Webdev',
      img: webdev,
      color: '#F61067',
      content: 'Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ',
    },
    {
      title: 'Marketing',
      img: marketing,
      color: '#F67110',
      content: 'Eu augue ut lectus arcu bibendum at. Pellentesque nec nam aliquam sem et tortor consequat.',
    },
    {
      title: 'Marketing',
      img: marketing2,
      color: '#F67110',
      content: 'Id venenatis a condimentum vitae. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Tortor dignissim convallis aenean et.',
    },
    {
      title: 'Webdesign',
      img: webdesign2,
      color: '#00F0B5',
      content: 'Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Malesuada fames ac turpis egestas sed.',
    },
    {
      title: 'Webdev',
      img: webdev2,
      color: '#F61067',
      content: 'Integer quis auctor elit sed vulputate mi. Semper auctor neque vitae tempus. Vulputate odio ut enim blandit volutpat maecenas volutpat.',
    },
  ]
  return (
    <div className="services-div">
      <p className="services-p-head">WE ARE AMAZING</p>
      <h1>Our services</h1>
      <h4>Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Quam elementum pulvinar etiam non. Eu consequat.
      </h4>

      <div className="services-cards">
        {
          state && state.map((item, ind) => (
            <div className="services-card" key={ind + 1} >
              <img className="services-img" src={item.img} alt={item.title} />
              <h4 className="services-title" style={{ color: item.color }} >{item.title}</h4>
              <p className="services-content" >{item.content}</p>
            </div>
          ))}
      </div>

      <button className="services-learn">LEARN MORE</button>

    </div>
  )
}
