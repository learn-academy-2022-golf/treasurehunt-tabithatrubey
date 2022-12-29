import React from 'react'
import "./Button.css"

const Button = (props) => {
    const handleClick = () => {
        props.reset()
    }
    return (
        <>
        <button className="button" onClick={handleClick}>Reset the Hunt</button>
        </>
  )
}

export default Button