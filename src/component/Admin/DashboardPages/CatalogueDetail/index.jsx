import React from "react";
import DragDropfiles from "component/Admin/common/DragDropfiles";
import { CKEditorInput } from "component/Admin/common/CommonInput";

export default function CatalogueDetail() {
  return (
    <div>
      <div className="AddCatalogue">
        <div className="" style={{ zIndex: 0 }}>
          <div className="catalogue-field">
            <CKEditorInput />
          </div>
        </div>
        <DragDropfiles />
        <button className="add-cancelbtn">Cancel</button>
        <button className="add-publishbtn">Save & Publish</button>
      </div>
    </div>
  );
}
