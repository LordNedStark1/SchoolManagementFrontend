import React, { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import SchoolLogo from "../reuseables/SchoolLogo";
import { MdOutlineNotificationsNone } from "react-icons/md";
import NavBar from "./NavBar";
import SelectItems from "../reuseables/SelectItems";
import MenuDropDown from '../Hamburger/MenuDropDown'
import DehazeIcon from '@mui/icons-material/Dehaze';
// import { useSelector } from "react-redux";
import { useAppSelector } from "@/ReduxStore/Store";


const values = ["Mathew", 'Judith', 'Honest', 'Cent']
const menuValues = [
  {
    name: 'Home'
  },
  {
    name: 'Work Force'   
  },
  {
    name: 'Resource Library'
  },
]

function SchoolHeader() {
  const [menuDropDown , setMenuDropDown] = useState(false)
  // const cohort = useAppSelector(state => state.createCohortReducer.value)
  const handleMenuDropDown = () =>{
    setMenuDropDown(prev => !prev)
     
  }
  
  // console.log(cohort);
  
  return (
    <>
    <div className="md:hidden fixed top-0 bg-white md:mb-0 mb-12 w-full   flex justify-between px-4 md:px-12 h-1 pt-2 pl-6">

    <SchoolLogo url="" logoName={''}/>

    <div className="mr-3.5 ">
    {menuDropDown ?
      <MenuDropDown menuValues={menuValues} close={handleMenuDropDown}/>
       :
     <RxAvatar size={33} color="#008EEF" onClick={handleMenuDropDown}/>
     
    }
   </div>

    </div>


    
    <div className="md:hidden h-1  "></div>
    <div className="hidden fixed w-full bg-white top-0  md:flex flex-rows border p-4  justify-evenly shadow-md shadow-gray-500">
      <SchoolLogo url="" logoName={'enum'}/>
        <NavBar/> 
        {/* <li className="text-black">cohort name is = {cohort.cohortName}</li> */}
      <div className="flex flex-rows">
        <a className="mr-4" rel="" href="" target="_blank">
          <MdOutlineNotificationsNone  size={25} />
        </a>
        <div className="flex flex-rows ml-4">
          <RxAvatar size={30} color="#008EEF"/>
          <SelectItems values={values} selectStyle={"mr-5 ml-3 rounded-md bg-white"}/>
        </div>
        <BsFillGrid3X3GapFill size={30} color="#008EEF"/>       
      </div>
    </div>

    </>
  );
}

export default SchoolHeader;
