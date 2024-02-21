import React from 'react'
import SideBarItems from './SideBarItems'

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
    <div className='mt-12 ml-12 mr-9'>
      <SideBarItems values={items}/>
      {/* <div className='mb-5 flex '>
      <img src={"/users.png"} alt=''/>
        <span className='ml-6'>Cohorts</span>
      sS</div>

      <div className='mb-5  flex'>
      <img src={"/book-open.png"} alt=''/>
        <span className='ml-6'>Programs</span>
      </div>

      <div className='mb-5 flex'>
        <img src={"/briefcase.png"} alt=''/>
        <span className='ml-6'>Instructors</span>
      </div>

      <div className='mb-5 flex'>
      <img src={"/user.png"} alt=''/>
        <span className='ml-6'>Learners</span>
      </div> */}
      
    </div>
  )
}

export default SideBar
