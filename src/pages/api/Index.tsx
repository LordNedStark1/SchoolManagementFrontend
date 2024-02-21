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

      {/* <div className = 'sm:grid md:flex flex-row'> */}
        <SideBar/>
        <CreateCohortBody/>
      {/* </div> */}
      
    </>
  );
}

export default Index;
