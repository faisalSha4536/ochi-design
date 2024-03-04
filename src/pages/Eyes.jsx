import gsap from 'gsap';
import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [backgroundColor, setBackgroundColor] = useState(true);
    const [rotate, setRotate] = useState(0)
    const [cursor, setCursor] = useState({ h: 0, w: 0 })


    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let X = e.clientX
            let Y = e.clientY

            let deltaX = X - window.innerWidth / 2
            let deltaY = Y - window.innerHeight / 2

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180)
        })

        window.addEventListener('mousemove', (e) => {
            setCursor({
                h: e.clientY,
                w: e.clientX
            })
        })

    }, [])

    const toggleBackgroundColor = () => {
        setBackgroundColor(!backgroundColor);
        console.log(backgroundColor)
    };


    return (


        <div id='eyes'>
            <div data-scroll data-scroll-speed = '-.8' className="eyes">

                <div  className="inner">
                  <div className="eye">
                    <div className="black">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line">
                            <div className="circle"></div>
                        </div>
                    </div>
                  </div>
                  <div className="eye">
                    <div className="black">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line">
                            <div className="circle"></div>
                        </div>
                    </div>
                  </div>
                  
                </div>



            </div>
        </div>

    )
}

export default Eyes