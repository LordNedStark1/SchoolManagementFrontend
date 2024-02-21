import React from "react";
import SchoolHeader from "@/components/topBar/SchoolHeader";
import SchoolImage from "@/components/topBar/SchoolImage";
import SideBar from "@/components/sideBar/SideBar";
import CreateCohortBody from "@/components/body/CreateCohortBody";

function Index() {
  return (
    <>
      <SchoolHeader />
      <SchoolImage />
      <div className = 'flex flex-row'>
        <div className = 'mr-20 '><SideBar/></div>
        <><CreateCohortBody/></>
      </div>
      
    </>
  );
}

export default Index;
