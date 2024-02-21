import React from "react";


interface SideBarItemsProps {
    values: Array<{ imagePath: string; name: string }>;
  }
  
function SideBarItems({ values }: SideBarItemsProps) {
    
  return (
    <div>
        {values.map((value, index) => (
        <div key={index} className="mb-5 flex">
          <img src={value.imagePath} alt="" />
          <span className="ml-6">{value.name}</span>
        </div>
      ))}
    </div>
  );
}

export default SideBarItems;
