import gsap from 'gsap';
import React, { useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Brand from './Brand';


const Hero = () => {

  useEffect(()=>{
    const tl = gsap.timeline()

    tl.to('.center-animation h1',{
      left: '15%',
      duration: 1,
      delay: 2
    })

    tl.to('.scroll p',{
      marginTop: '0',
      delay: 2,
      duration: 1,
      repeat: -1,
      repeatDelay: 1
    })

  },[])

  return (
    <div data-scroll data-scroll-section data-scroll-speed = '-.7' id='hero'>
    <div className="left">
      <h1>WE CREATE</h1>
      <div className="center-animation"><img src="./images/9.jpg" alt="" /><h1>EYE-OPENING</h1></div>
      <h1>PRESENTATIONS</h1>
    </div>
    <hr />
    <div className="bottom">
      <p>For public and private companies</p>
      <p>From the first pitch to IPO</p>
      <div className="btns">
      <button>Start the project</button>
      <button className='sec-btn'><p><FaArrowRight className='icon'/></p></button>
      </div>
    </div>
    <div className="scroll"><p>Scroll Down</p></div>

  </div>
  )
}

export default Hero