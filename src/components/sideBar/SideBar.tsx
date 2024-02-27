// "use client"
import React, { useState } from 'react'
import SideBarItems from './SideBarItems'
import SelectDropDown from '../reuseables/SelectDropDown'
import { sideNavSelection } from './SideNavSelection'
// import { useDispatch, useSelector } from 'react-redux'
// import { logIn, logOut } from '@/ReduxStore/slice/AuthSlice'
// import { AppDispatch } from '@/ReduxStore/Store'

function SideBar() {
  const[selectedItem , setSelectedItem] =useState<string>("")
  // const dispatch = useDispatch<AppDispatch>()
  const [userValue , setUserValue] = useState('')
  // const selectButton = useSelector((state) => state.CreateCohortFormSlice.createCohortForm)
  // console.log(selectButton);
  // console.log(userValue);
  
  const handleToggleView = (item: string) => { 
    console.log(item);
    
      setSelectedItem(item)
  }
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
    <div className=' hidden md:block md:mt-12 ml-10 mr-9'>
      <SideBarItems values={items} />
    </div>
    <div className='grid justify-center place-items-center  mt-6 md:hidden'>
      <span className='ml-4 '>Switch between tabs</span><br/>
      <SelectDropDown values={items}/>
    </div>
    </>

  )

  // const onLogin = () => {
  //     // dispatch(logIn(userValue))
  // }
  // const onLogout = () => {
  //     // dispatch(logOut())
  // }
  // return (
  //   <>
  //     <input 
  //     className='w-72 h-8 bg-zinc-300 text-white '
  //     title='userValue' type='text' onChange={(e)  => setUserValue(e.target.value)}/>
  //     <button 
  //       onClick={onLogin}
  //     >Login</button>
  //     <button
  //     onClick={onLogout}
  //     >Logout</button>
  //   </>
  // )
}

export default SideBar
