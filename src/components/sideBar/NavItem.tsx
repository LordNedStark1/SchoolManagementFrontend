import { setButtonName } from '@/ReduxStore/slice/CreateCohortFormSlice';
import React from 'react'
import { useDispatch } from 'react-redux'

function NavItem({index, value, handleToggleView}) {
  // const dispatch = useDispatch();
  return (
    <div key={index} className="mb-5 flex"
    onClick={()=>{
      handleToggleView(value.name)
      // dispatch(setButtonName(value.name))
    }}
    >
    <img src={value.imagePath} alt="" />
    <span className="ml-6">{value.name}</span>
  </div>
  )
}

export default NavItem
