import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Button from '../components/Button'
import CircleIcon from '../components/CircleIcon'
import { FaArrowRight } from 'react-icons/fa6'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Review = () => {
    
    const reviewRef = useRef(null)



    return (
        <div className="review">

        <div ref={reviewRef} id='review'>

            <div className="title">
                <p>Clients’ reviews</p>
            </div>
            <hr />
            <div className="center">
                <div className="left">
                    <p>Karman Ventures</p>
                </div>
                <div className="mid">
                    <p>
                    Services: <br /> <br />
                    <div className="firstBtn">
                    <Button className = 'btn'  data = 'INVESTOR DECK'  style={{ backgroundColor: 'blue', color: 'white' }} />
                    <button className='icon'><FaArrowRight className='icon' style={{backgroundColor: 'transparent'}}/></button>
                    </div>
                    <br />
                    <div className="firstBtn">
                    <Button className = 'btn'  data = 'SALES DECK'  style={{ backgroundColor: 'blue', color: 'white' }} />
                    <button className='icon'><FaArrowRight className='icon' style={{backgroundColor: 'transparent'}}/></button>
                    </div>
                    
                    </p>
                </div>
                <div className="end">
                    <p>
                    William Barnes <br />
                    <img src="./images/8.png" alt="" />
                        <p>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                        
                    </p>
                </div>
            </div>
            <hr />
        </div>
        </div>
    )
}

export default Review