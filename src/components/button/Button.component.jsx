import React from 'react'

function Button({handleClick,child}) {
  return (
    <button onClick={handleClick}>{child}</button>

  )
}

export default Button