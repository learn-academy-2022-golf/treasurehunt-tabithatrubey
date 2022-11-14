import React from "react"

const Square = (props) => {
  // console.log(props.index)
  const handleClick = () => {
    // alert(props.index)
    props.handleGamePlay(props.index)
  }

  return (
    <>
      <div className="square" onClick={handleClick}>{props.value}</div>
    </>
  )
}
export default Square
