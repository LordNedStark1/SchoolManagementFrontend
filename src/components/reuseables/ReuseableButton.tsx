import React from 'react'

function ReuseableButton({title, disabled ,buttonStyle, onClickFunction}) {
  return (
    <button 
    disabled={disabled}
    className={buttonStyle}
    onClick={onClickFunction}
    >
        {title}
    </button>
  )
}

export default ReuseableButton
