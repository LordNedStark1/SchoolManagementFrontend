
import { setButtonDisplay } from '@/ReduxStore/slice/SideNavSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function NavItem({index, value, handleToggleView}) {

  const selectedButton = useSelector(state=> state.sideNavButton.buttonDisplay)
  const dispatch = useDispatch();
  const navStyle = selectedButton === value.name ?"mb-5 w-32  flex rounded-lg bg-[#008EEF] pl-2 text-white" : "  mb-5 flex"
  return (
    <div key={index} className={navStyle}
    onClick={()=>{
      // handleToggleView(value.name)
      dispatch(setButtonDisplay(value.name))
    }}
    >
    <img src={value.imagePath} alt="" />
    <span className="ml-7">{value.name}</span>
  </div>
  )
}

export default NavItem
