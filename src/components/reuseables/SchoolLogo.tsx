import React from "react";

import SchoolIcon from "../../assets/Icons/SchoolIcon";
// interface SchoolLogoUrl {
//     url: string;
//   }

function SchoolLogo({ url, logoName }){
  return (
    <>
    {!url ? (
      <div className="flex flex-rows ">
        <SchoolIcon />{" "}
        <span className="text-[#008EEF] font-extrabold text-lg">{logoName}</span>
      </div>
    ) : (
      <img src={url} className="" alt="school logo" height={65} width={65}/>
    )}
  </>
  );
}

export default SchoolLogo;
