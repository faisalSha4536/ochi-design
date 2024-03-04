import React, { useEffect } from 'react'
import Button from '../components/Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

    const projects = [
        {
            title: 'FYDE',
            img: "./images/4.png"
        },
        {
            title: 'VISE',
            img: "./images/5.jpg"
        },

    ]

    return (
        <div data-scroll data-scroll-section data-scroll-speed = '.1' id='project'>
            <div className="title">
                <p>Featured projects</p>
            </div>
            <hr />
            <div className="cards">
            <div className="card">
                <div className="heading">
                    <div className="circle"></div>
                    <h3>FYDE</h3>
                </div>
                <div className="img">
                    <div className="head"><h1>FYDE</h1></div>
                    <img src="./images/4.png" alt="" />
                </div>
            </div>
            <div className="card">
                <div className="heading">
                    <div className="circle"></div>
                    <h3>VISE</h3>
                </div>
                <div className="img">
                    <div className="head-2"><h1>VISE</h1></div>
                    <img src="./images/5.jpg" alt="" />
                </div>
            </div>
            </div>
          
            <div className="bottom">

                <Button data='VIEW ALL CASE STUDIES' />
            </div>
        </div>
    )
}

export default Projects