import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function SchoolImage() {
  return (
    <div
      className="school-image-main mt-12 sm:mt-[10.5vh]"
      style={{  width: "100%" }}
    >
      <div className="ml-14 md:ml-36">
        <div className="flex flex-row text-white mb-5  ">
          <div className="bg-[#8F47F4] h-7 w-7 border-2 border-white grid place-items-center mt-7 mr-4">
            S
          </div>
          <span className="font-bold mt-7">Semicolon Africa</span>
        </div>
        <button className="flex flex-row bg-white  place-item-center  w-32 h-10  pt-2 justify-center rounded ">
          <span className="mr-2 ">View Profile</span> <FaArrowRight className="mt-1"/>
        </button>
      </div>
    </div>
  );
}

export default SchoolImage;
