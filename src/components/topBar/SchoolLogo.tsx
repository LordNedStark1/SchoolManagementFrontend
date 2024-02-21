import React from "react";

import SchoolIcon from "../../assets/Icons/SchoolIcon";
// interface SchoolLogoUrl {
//     url: string;
//   }

function SchoolLogo({ url }){
  return (
    <>
    {!url ? (
      <div className="flex flex-rows ">
        <SchoolIcon />{" "}
        <span className="text-[#008EEF] font-extrabold text-lg">enum</span>
      </div>
    ) : (
      <img src={url} alt="school logo" height={65} width={65}/>
    )}
  </>
  );
}

export default SchoolLogo;
