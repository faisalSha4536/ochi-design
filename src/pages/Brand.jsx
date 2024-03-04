import React from 'react'
import Button from '../components/Button'


const Brand = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = '.1'>
    <div  className="brand">
    <h1>we are ochi</h1>
    <h1>we are ochi</h1>
    <h1>we are ochi</h1>
  </div>
  <div  id='about'>
            <div className="upperHeading">
                <p>
                    Ochi is a strategic partner for fast-grow­ing tech <br />businesses that need to raise funds, sell prod­ucts,<br /> ex­plain com­plex ideas, and hire great peo­ple.
                </p>
            </div>
            <hr />
            <div className="center">
                <div className="left">
                    <p>What you can expect:</p>
                </div>
                <div className="mid">
                    <p>

                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people. <br /> <br />

                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </p>
                </div>
                <div className="end">
                    <p>
                        S: <br />
                        <p>Instagram</p>
                        <p>Linkedin</p>
                        <p>Facebook</p>
                        <p>Behance</p>
                    </p>
                </div>
            </div>
            <hr />

            <div className="bottom">
                <div className="left">
                    <p>Our approch</p>
                    <Button className = 'ourAproch' data = 'Read more'/>
                </div>
                <div className="right">
                    <img src="./images/2.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brand