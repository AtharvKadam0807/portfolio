import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://ak.picdn.net/shutterstock/videos/1010270171/thumb/10.jpg" 
          alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hello, My name is Atharv Kadam. I am currently persuing my bachlors
          degree in Computer Science.I am a curious person who is eager to learn
          new things and also have good grasping power. 
        </p>
        <p className="a-description">
          As of now I am familiar with C progrmming, Java, Python, React and so on. 
          Along with these technical skills I have good communication skills, and 
          have a good command over English, Marathi and Hindi. My hobbies include 
          Football, Cricket, Billiards, watching movies, Exlporing new places and so forth.
        </p>
      </div>
    </div>
  )
}

export default About