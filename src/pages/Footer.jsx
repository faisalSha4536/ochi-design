import React from 'react'

const Footer = () => {
  return (
    <div data-scroll data-scroll-speed = '.1' id='footer'>
        <div className="left">
            <div className="upper">
                <h1>EYE-</h1> <br />
                <h1>OPENING</h1>
            </div>

            <div className="bottom">
                <h1>ochi</h1>
            </div>
        </div>
        <div className="right">
            <div className="title">

                <h1>PRESENTATIONS</h1>
            </div>
            <div className="main">

                <div className="inner">
                    <div className="left">
                        <div className="s">
                            <p>S:</p> <br />
                            <p>instagram</p>
                            <p>linkedin</p>
                            <p>behance</p>
                            <p>facbook</p>
                        </div>
                        <div className="l">
                        <p>L:</p> <br />
                            <p>202-1965 W 4th Ave</p>
                            <p>Vancouver, Canada</p> <br />
                            <p>30 Chukarina St</p>
                            <p>Lviv, Ukraine</p>
                        </div>
                        <div className="e">
                        <p>E:</p> <br />
                            <p>hello@ochi.design</p>
                            
                        </div>
                    </div>
                    <div className="right">
                    <div className="m">
                            <p>M:</p> <br />
                            <p>home</p>
                            <p>services</p>
                            <p>our work</p>
                            <p>about us</p>
                            <p>insights</p>
                            <p>contact us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer