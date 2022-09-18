import React from 'react'
import './Videostyles.css';
import { Link } from 'react-router-dom';
import spaceVideo from '../assets/space.mp4';
const Video = () => {

  return (
    <div className="hero">
      <video autoPlay muted loop id='video'>
        <source src={spaceVideo} type='video/mp4' />
      </video>
      <div className="content">
        <h1>Galaxy. Travel. </h1>
        <p>World's first civillian space travel</p>


        <div>
          <Link to='/training' className="btn">Training</Link>
          <Link to='/launch' className="btn">Launch</Link>
        </div>
      </div>
    </div>
  )
}

export default Video;