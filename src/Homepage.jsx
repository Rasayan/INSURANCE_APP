import { useState } from 'react'
import './Homepage.css'

function Homepage() {

  return (
    <>
    <div className="homeContent">
        <div className="homeHead">
            <h2 className='headingPage'>Humanising your insurance</h2>

            <p className='paraPage'>Get your life insurance coverage easier and faster. We blen our expertise and technology 
              to help you find the plan that's right for you. Ensure you and your loved ones are 
              protected.</p>

            <button className="buttonPage">VIEW PLANS</button>

            <img src="images/bg-pattern-intro-right-desktop.svg" alt="" className="homeRightPattern"></img>
            <img src="images\bg-pattern-intro-left-desktop.svg" alt="" className='homeLeftPattern'/>
        </div>
    </div>
    </>
  )
}

export default Homepage