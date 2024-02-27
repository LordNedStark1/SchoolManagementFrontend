import React, { useState } from 'react'

function Date({title , dateStyle, id, name, min, max, onChange }) {
  
  return (
    <div>
        <label>{title}</label>
      <input
      className={dateStyle}
      title='date'
      type='date'
      id = {id}
      name = {name}
      min={min}
      max= {max}
      // value ={date}
      onChange={onChange}
      />
    </div>
  )
}

export default Date
