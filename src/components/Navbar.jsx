import React from 'react'

const Navbar = () => {
  return (
    <div id='navbar'>
    <div className="logo_side">
        <h1><a href="#">ochi</a></h1>
    </div>
    <div className="mid_menu">
        <a href="#">Work</a>
        <a href="#">About</a>
        <a href="#">Services</a>
    </div>
    <div className="last">
    <a href="#">Contact</a>
    </div>
    </div>
  )
}

export default Navbar