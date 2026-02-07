import React from 'react'
import Back from '../common/Back'
import img from '../images/about.png'
import Heading from "../common/Heading"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container about-grid mtop">
          <div className="left row">
            <Heading title="Our Firm" subtitle='Check out our company story and work process' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src="./images/rec.png" alt="" />
          </div>
        </div>
      </section>
    </>
    )
}

export default About
