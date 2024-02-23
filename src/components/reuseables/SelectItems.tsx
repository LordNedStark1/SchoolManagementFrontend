import React from 'react'

function SelectItems({values, selectStyle}) {
  return (
    <>
      <select
            
            name={values[0]}
            id={values[0]}
            className={selectStyle}
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
