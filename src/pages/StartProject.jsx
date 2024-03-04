import React, { useEffect, useState } from 'react'
import Button from '../components/Button'

const StartProject = () => {

    const [rotate, setRotate] = useState(0)
    const [cursor, setCursor] = useState({h: 0, w: 0})
    

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let X = e.clientX
            let Y = e.clientY

            let deltaX = X - window.innerWidth / 2
            let deltaY = Y - window.innerHeight / 2

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180)
        })

    }, [])

  return (
    <div className='startProject'>

    <div id='startProject'>
        <div data-scroll data-scroll-speed = '1.5' className="eyes">
        <div className="left">
                <div className="outer">
                    <div className="in">
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line">

                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="outer">
                    <div className="in">
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line">

                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="title">
            <h1>READY</h1>
            <h1>TO START</h1>
            <h1>THE PROJECT?</h1>
        </div>

        <div className="btns">
            <Button className = 'projectBtn' data = 'START THE PROJECT'/> <br />
            <p>OR</p> <br />
            <Button className = 'contactBtn' data = 'HELLO@OCHI.DESIGN'/> 

        </div>

    </div>
    </div>
  )
}

export default StartProject