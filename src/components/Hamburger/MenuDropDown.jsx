import React from "react";
import MenuItem from "../reuseables/MenuItem";
function MenuDropDown({ menuValues, close }) {
  return (
    <div className="  fixed justify-center left-o right-0 top-0 min-h-45 min-h-full min-w-full bg-gray-200 space-y-4 p-4 transform translate-x-0">
      <button onClick={close} className=" w-96  bg-blue-200 hover:bg-slate-200 pt-3 border shadow-md rounded pl-6 ml-32 mt-4 shadow-gray-500 ">
        {" "}
        Close
      </button>
      <ul className=" border rounded-xl w-46 pr-5 pl-3 ">
        {menuValues.map((value) => (
          <MenuItem value={value} />
        ))}
      </ul>
    </div>
  );
}

export default MenuDropDown;
