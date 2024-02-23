import React from 'react'

function MenuItem({value}) {
  return (
    <li className='bg-blue-200 hover:bg-slate-200  b pt-3 border shadow-md rounded pl-6 mt-4 shadow-gray-500 '>
      {value.name}
    </li>
  )
}

export default MenuItem
