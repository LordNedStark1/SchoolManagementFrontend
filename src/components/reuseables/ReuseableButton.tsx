import React from 'react'

function ReuseableButton({title, buttonStyle, onClickFunction}) {
  return (
    <button 
    className={buttonStyle}
    onClick={onClickFunction}
    >
        {title}
    </button>
  )
}

export default ReuseableButton
