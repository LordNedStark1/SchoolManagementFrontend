import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import SchoolLogo from "./SchoolLogo";
import { MdOutlineNotificationsNone } from "react-icons/md";
import NavBar from "./NavBar";
import SelectItems from "./SelectItems";

const values = ["Mathew", 'Judith', 'Honest', 'Cent']

function SchoolHeader() {
  return (
    <>
    
    <div className=" flex flex-rows border p-4  justify-evenly shadow-md shadow-gray-500">
      <SchoolLogo url=""/>
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
