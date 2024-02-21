import React from 'react'
import SideBarItems from './SideBarItems'
import SelectDropDown from '../reuseables/SelectDropDown'

function SideBar() {
  const items = [
    {
      name: 'Cohorts',
      imagePath: '/users.png'
    },
    {
      name: 'Programs',
      imagePath: '/book-open.png'
    },
    {
      name: 'Instructors',
      imagePath: '/briefcase.png'
    },
    {
      name: 'Learners',
      imagePath: '/user.png'
    },
  ]
  return (
    <>
    <div className=' hidden md:visible md:mt-12 ml-12 mr-9'>
      <SideBarItems values={items} />
    </div>
    <div className='grid justify-center place-items-center mt-6 md:hidden'>
      <span className='ml-4 '>Switch between tabs</span><br/>
      <SelectDropDown values={items}/>
    </div>
    </>

  )
}

export default SideBar
