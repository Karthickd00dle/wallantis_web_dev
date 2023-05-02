import React, { useRef, useState } from "react";
import "./style.scss";
import { CustomButton } from "../CustomButton";

export default function DragDropfiles() {
  const [files, setFiles] = useState(null);
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };
  const inputRef = useRef();

  if (files)
    return (
      <div className="image-uploads">
        <ul>
          {Array.from(files).map((file, i) => (
            <li key={i}>{file.name}</li>
          ))}
        </ul>
      </div>
    );

  return (
    <div className="image-upload-container">
      {!files && (
        <div
          className="image-dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <label>Drag an image here</label>
          <label>Or</label>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          />
          <div className="d-flex justify-content-center">
            <CustomButton
              variant="contained"
              className="choose-file-button mt-2"
              onClick={() => inputRef.current.click()}
            >
              Choose File
            </CustomButton>
          </div>
        </div>
      )}
    </div>
  );
}
