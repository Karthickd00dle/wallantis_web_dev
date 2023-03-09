import React from "react";

export default function PrivacyPolicy({ content, setContent }) {
  return (
    <div className="content-tab">
      <textArea
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <button className="purple-filled">Save </button>
    </div>
  );
}
