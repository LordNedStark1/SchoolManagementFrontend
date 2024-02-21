import React from "react";
import NavItem from "./NavItem";


interface SideBarItemsProps {
    values: Array<{ imagePath: string; name: string }>;
  }
  
function SideBarItems({ values }: SideBarItemsProps) {
    
  return (
    <div className="ml-2">
        {values.map((value, index) => (
          
          <NavItem index={index} value={value}/>
      ))}
    </div>
  );
}

export default SideBarItems;
