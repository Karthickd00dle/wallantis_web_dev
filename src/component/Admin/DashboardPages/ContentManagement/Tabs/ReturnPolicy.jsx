import React from "react";

export default function ReturnPolicy({ content, setContent, createContent }) {
  return (
    <div className="content-tab">
      <textArea
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <button className="purple-filled" onClick={createContent}>
        Save
      </button>
    </div>
  );
}
