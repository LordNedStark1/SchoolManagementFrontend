import React, { useState } from 'react'

function Date({title , dateStyle, id, name, min, max }) {
  const[date, setDate] =useState('')
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
      value ={date}
      onChange={(event)=>setDate(event?.target.value)}
      />
    </div>
  )
}

export default Date
