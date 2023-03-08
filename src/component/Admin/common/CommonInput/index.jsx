import React from "react";
import "./index.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

export function CommonInput({ label, placeholder, name, value, onChange }) {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="common-input"
      />
    </div>
  );
}

export function CKEditorInput() {
  return (
    <CKEditor
      className="CKEditorBox"
      onReady={(editor) => {
        editor.ui
          .getEditableElement()
          .parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
          );
      }}
      editor={DecoupledEditor}
      config={{
        toolbar: [
          "bold",
          "underline",
          "italic",
          "strikethrough",
          "alignment",
          "numberedList",
          "bulletedList",
          "link",
          "blockQuote",
          "insertTable",
          "uploadImage",
          "indent",
          "outdent",
          "redo",
          "undo",
        ],
      }}
    />
  );
}
