import React from 'react'

function SelectItems({values}) {
  return (
    <>
      <select
            
            name={values[0]}
            id={values[0]}
            className="mr-5 ml-3 rounded-md bg-white"
          >
        
          {values.map((value) => (
           <option 
           key={value}
           value={value
        }>{value}</option>
        
      ))}
      </select>
    </>
  )
}

export default SelectItems
