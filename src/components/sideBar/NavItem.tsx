import React from 'react'

function NavItem({index, value}) {
  return (
    <div key={index} className="mb-5 flex">
    <img src={value.imagePath} alt="" />
    <span className="ml-6">{value.name}</span>
  </div>
  )
}

export default NavItem
