import React from "react";

import SelectItems from "../reuseables/SelectItems";
import Date from "../reuseables/Date";
import { FiUpload } from "react-icons/fi";
import ReuseableButton from "../reuseables/ReuseableButton";

const values = ["Java", "Pyhon", "JavaScript", "Go Lang"];
function CreateCohortForm({ open }) {
  const dragOverHandler: React.DragEventHandler<HTMLDivElement> = (event) => {
    // Your drag over handler logic here
  };
  function dropHandler(ev) {
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }

  return (
    <div >
      <div className=" flex  justify-between w-80 items-center px-2  bg-white">
        <h4 className=" font-extrabold">Create a Cohort</h4>
        <button onClick={open}>X</button>
      </div>

      <div className=" max-h-[70vh] overflow-y-auto transition ease-in-out delay-150 p-4 mt-12"  >
        <label>Cohort Name</label>
        <input
          className="border border-teal-[#D0DCE4] mb-5 h-14 w-80 bg-gray-50 rounded "
          title="Cohort"
          id=""
          name=""
        />

        <label>Description</label>
        <textarea
          className="border border-teal-[#D0DCE4]  h-20 rounded mb-5 w-80  bg-gray-50 "
          title="Cohort Name"
          id=""
          name=""
        ></textarea>

        <label>Program</label>
        <br />

        <SelectItems
          values={values}
          selectStyle={
            "mr-5 ml-3 rounded-md w-80 h-12 border border-teal-[#D0DCE4] rounded bg-gray-50"
          }
        />
        <div className="flex mt-4 mb-6">
          <Date
            title={"Start Date"}
            dateStyle={"mt-2 border border-teal-[#D0DCE4] pl-1 pr-1 pt-1 pb-1"}
            id="start"
            name="trip-start"
            min="2024-03-01"
            max="2025-12-31"
          />
          <Date
            title={"End Date"}
            dateStyle={"mt-2 border border-teal-[#D0DCE4] pl-1 pr-1 pt-1 pb-1"}
            id="end"
            name="trip-end"
            min="2024-01-01"
            max="2026-12-31"
          />
        </div>
        <label>Add a cohort Avatar</label>
        <br />
        <div
          id="drop_zone"
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          className="border border-teal-[#D0DCE4] mb-5 h-44 w-80 bg-stone-200  grid place-items-center rounded-lg "
        >
          <FiUpload />
          <h5>
            Drag and drop or <span className="">choose file</span>{" "}
            <i>drop zone</i>.
          </h5>
          <span>240x240 px Recommended, max size 1MB </span>
        </div>
        <span>You can do this later.</span>

        <div>
          <ReuseableButton
            title={"Cancel"}
            buttonStyle={"border border-[#008EEF]"}
            onClickFunction={() => {}}
          />
          <ReuseableButton
            buttonStyle={"bg-[#008EEF] text-white"}
            title={"Create Cohort"}
            onClickFunction={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateCohortForm;
