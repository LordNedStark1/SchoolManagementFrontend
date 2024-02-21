import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import SchoolLogo from "../reuseables/SchoolLogo";
import { MdOutlineNotificationsNone } from "react-icons/md";
import NavBar from "./NavBar";
import SelectItems from "../reuseables/SelectItems";
import MenuDropDown from '../Hamburger/MenuDropDown'
import DehazeIcon from '@mui/icons-material/Dehaze';


const values = ["Mathew", 'Judith', 'Honest', 'Cent']
const menuValues = ['home','work force','Resource Library' ]

function SchoolHeader() {
  return (
    <>
    <div className=" md:hidden flex ">
    <SchoolLogo url="" logoName={''}/>
    <DehazeIcon/>
    <MenuDropDown menuValues={menuValues}/>
    </div>
    <div className="hidden md:flex flex-rows border p-4  justify-evenly shadow-md shadow-gray-500">
      <SchoolLogo url="" logoName={'enum'}/>
        <NavBar/>
      <div className="flex flex-rows">
        <a className="mr-4" rel="" href="" target="_blank">
          <MdOutlineNotificationsNone  size={25} />
        </a>
        <div className="flex flex-rows ml-4">
          <RxAvatar size={30} color="#008EEF"/>
          <SelectItems values={values}/>
        </div>
        <BsFillGrid3X3GapFill size={30} color="#008EEF"/>
      </div>
    </div>
    </>
  );
}

export default SchoolHeader;
