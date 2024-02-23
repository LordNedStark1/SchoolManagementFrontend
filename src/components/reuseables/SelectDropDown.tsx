import React from "react";
import SelectItems from "./SelectItems";

function SelectDropDown({ values }) {
  return (
    <>
      <select
        name={values[0].name}
        id={values[0].name}
        className="mr-5 ml-3 w-32 sm:w-64 pl-3 mt-1 h-10 border  rounded bg-white"
      >
        {values.map((value) => (
        <option 
        key={value.name}
        value={value.name
     }
     >{value.name}</option>
    ))}
    
      </select>
    </>
  );
}

export default SelectDropDown;
