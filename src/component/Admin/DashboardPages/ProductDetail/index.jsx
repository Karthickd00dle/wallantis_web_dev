import React from "react";
import "./style.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import DragDropfiles from "component/Admin/common/DragDropfiles";

export default function ProductDetail() {
  return (
    <div>
      <div className="addnewproduct">
        <div className="d-flex">
          <div className="add-category">
            <label>Category</label>
            <br />
            <input type="text" placeholder="Wallpaper" />
          </div>
          <div className="add-subcategory">
            <label>Sub Category</label>
            <br />
            <input type="text" placeholder="Sticker Wallpaper" />
          </div>
        </div>

        <div className="d-flex">
          <div className="add-title">
            <label>Title</label>
            <br />
            <input type="text" placeholder="Yellow Wallpaper" />
          </div>
          <div className="add-price">
            <label>Price</label>
            <br />
            <input type="text" placeholder="₹3500" />
          </div>
        </div>

        <div className="d-flex">
          <div className="add-color">
            <label>Color</label>
            <br />
            <input type="text" placeholder="Add tags" />
          </div>
          <div className="add-quantity">
            <label>Quantity</label>
            <br />
            <input type="text" placeholder="5" />
          </div>
        </div>

        <div className="add-date">
          <label>Date</label>
          <br />
          <input type="text" placeholder="31.08.2022" />
        </div>
        <div className="d-flex">
          <div className="" style={{ zIndex: 0 }}>
            <div className="content-field">
              {/* <span>Question</span> */}
              <CKEditor
                className="CKEditorBox"
                editor={DecoupledEditor}
                // data={this.state.faq.question}
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
            </div>
          </div>

          <div className="" style={{ zIndex: 0 }}>
            <div className="content-field1">
              {/* <span>Question</span> */}
              <CKEditor
                className="CKEditorBox"
                editor={DecoupledEditor}
                // data={this.state.faq.question}
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
            </div>
          </div>
        </div>
        <DragDropfiles />

        <button className="add-cancelbtn">Cancel</button>
        <button className="add-publishbtn">Save & Publish</button>
      </div>
    </div>
  );
}
