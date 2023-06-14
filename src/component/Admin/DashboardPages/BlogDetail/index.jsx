import React from "react";
import "./style.scss";

import { CKEditorInput } from "component/Admin/common/CommonInput";
import DragDropfiles from "component/Admin/common/DragDropfiles";

export default function BlogDetail() {
  return (
    <div>
      <div className="addblog">
        <label>Description</label>
        <div className="addblog-field">
          <CKEditorInput />
        </div>
        <h4>Features</h4>
        <div className="addblog-field1">
          <CKEditorInput />
        </div>
        <DragDropfiles />
        <div className="addblog-status">
          <label>Status</label>
          <div className="addblog-in">
            <div class="flex">
              <input type="radio" name="radio" id="Active" />
              <label for="radio2">Active</label>
            </div>
            <div class="flex">
              <input type="radio" name="radio" id="Inactive" />
              <label for="radio3">Inactive</label>
            </div>
          </div>
        </div>

        <button className="add-blogcancelbtn">Cancel</button>
        <button className="add-blogpublishbtn">Save</button>
      </div>
    </div>
  );
}
