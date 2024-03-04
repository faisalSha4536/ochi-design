import React from 'react'

const Button = (props) => {
  return (
    <div className='btns'>
        <button className={props.className}>{props.data}</button>
    </div>
  )
}

export default Button