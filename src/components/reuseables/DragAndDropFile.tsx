import { ImageFile } from "@/ReduxStore/slice/CreateCohortFormSlice";
import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";

function DragAndDropFile({ dropHandler, dragOverHandler }) {
  const [file, setFile] = useState<ImageFile>();
  const inputRef = useRef();  

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const firstFile = event.target.files[0];
      // Assuming you want to use a default mimeType like 'image/jpeg'
      const imageFile: ImageFile = {
        file: firstFile,
        mimeType: 'image/jpeg',
      };
      setFile(imageFile);
    }
  };
  return (
    <>
      {!file && (
        <div
          id="drop_zone"
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          className="border border-[#008EEF] border-dashed mb-2 h-44 w-80 grid place-items-center bg-[#F6FCFF] p-1 pt-4 rounded-lg "
        >
          <FiUpload className="ml-2 mb-2" />
          <span>            Drag and drop or 
            <button className="text-[#008EEF]"
            onClick={() => inputRef.current.click()}
          >choose file</button>{" "}

            drop zone.
          </span>
          <input
          title="file"
          type="file"
          multiple
          onChange={handleFileChange }
          hidden
          ref={inputRef}
          />
          <span>240x240 px Recommended, max size 1MB </span>
        </div>
      )}
    </>
  );
}

export default DragAndDropFile;
