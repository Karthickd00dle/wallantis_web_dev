import React, { useRef } from 'react'
import { useState } from 'react'
import "./style.scss"

export default function DragDropfiles() {
    const [files,setFiles] = useState(null);
    const handleDragOver =(event) =>{
        event.preventDefault();
    };
    const handleDrop =(event)=>{
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    };
    const inputRef = useRef();

  if (files) return (
    <div className="uploads">
      <ul>
        {Array.from(files).map((file,idx)=><li key={idx}>{file.name}</li>)}
      </ul>
    </div>
  )

  return (
    <div className="Image-upload">
        <h1>Image Upload</h1>
      {!files && (
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h1>Drag an image here</h1>
        <label>Or</label>
        <input 
        type="file"
        multiple
        onChange={(event)=>setFiles(event.target.files)}
        hidden
        ref={inputRef}
        />
        <button onClick={()=>inputRef.current.click()}>Choose File</button>
      </div>
      )}
    </div>
  )
}
