import React, { useState } from "react";

function NavBar() {
  const [isActive, setActive] = useState(false);
  const [currentValue, setCurrentValue] = useState("");

  const handleClick = (value) => {
    if (value !== currentValue) {

      setCurrentValue(value);
      setActive(true);

    } else if (value === currentValue) {
      setActive(!isActive);
    }else{
    setCurrentValue(value);
    setActive(true);

    }
  };
  
  let homeIsActive = isActive && currentValue === "home" ;
  let workSpaceIsActive = isActive && currentValue === "workSpace" 
  let resourceLibraryIsActive = isActive && currentValue === "resourceLibrary"

  return (
    <div className="flex flex-rows ml-12 ">
      <div className="relative mr-9">
        <button
          style={{backgroundColor: homeIsActive ? '#F6FCFF': 'white'}}
          type="button"
          className=" focus:bg-[#F6FCFF] rounded-md w-16 h-6  "
          onClick={() => handleClick("home")}
        >
          Home{" "}
        </button>
        {homeIsActive && (
          <div className="absolute top-11 bg-indigo-600 h-1.5 w-16 rounded-t-2xl "></div>
        )}
      </div>
      <div className="relative mr-9">
        <button
          style={{backgroundColor: workSpaceIsActive ? '#F6FCFF': 'white'}}
          type="button"
          className="  rounded-md h-6  "
          onClick={() => handleClick("workSpace")}
        >
          Work Space{" "}
        </button>
        {workSpaceIsActive && (
          <div className="absolute top-11 bg-indigo-600 h-1.5 w-20  rounded-t-2xl "></div>
        )}
      </div>
      <div className="relative mr-9">
        <button
          style={{backgroundColor: resourceLibraryIsActive ? '#F6FCFF': 'white'}}
          type="button"
          className=" focus:bg-[#F6FCFF] rounded-md  h-6  "
          onClick={() => handleClick("resourceLibrary")}
        >
          Resource Library{" "}
        </button>
        {resourceLibraryIsActive && (
          <div className="absolute top-11 bg-indigo-600 h-1.5 w-20  rounded-t-2xl "></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
