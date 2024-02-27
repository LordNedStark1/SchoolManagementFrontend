import React from "react";
import SchoolHeader from "@/components/topBar/SchoolHeader";
import SchoolImage from "@/components/topBar/SchoolImage";
import SideBar from "@/components/sideBar/SideBar";
import BodyDisplay from "@/components/body/BodyDisplay";

function Index() {
  return (
    <>
      <SchoolHeader />
      
      <SchoolImage />

      <div className = ' md:flex flex-row'>
        <SideBar/>
        <BodyDisplay/>
      </div>
      
    </>
  );
}

export default Index;
