import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const CircleIcon = (props) => {
  return (
    <div className='btns'>
        <button><FaArrowRight className={props.className} style={{backgroundColor: 'blue'}}/></button>
    </div>
  )
}

export default CircleIcon