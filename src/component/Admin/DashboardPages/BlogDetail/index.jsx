import React from 'react'
import "./style.scss"
import { CKEditor } from '@ckeditor/ckeditor5-react';       
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import DragDropfiles from '../common/DragDropfiles';

export default function BlogDetail() {
  return (
    <div>
    <div className="addblog">
      <label>Description</label>
      <div className="addblog-field">
      {/* <span>Question</span> */}
      <CKEditor
        className="CKEditorBox"
        onReady={(editor) => {
          // Insert the toolbar before the editable area.
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );

          // this.editor = editor;
        }}
        // onChange={this.handleChange.bind(this, 'question')}
        editor={DecoupledEditor}
        // data={this.state.faq.question}
        config={{
          toolbar: [
            'bold',
            'underline',
            'italic',
            'strikethrough',
            'alignment',
            'numberedList',
            'bulletedList',
            'link',
            'blockQuote',
            'insertTable',
            'uploadImage',
            'indent',
            'outdent',
            'redo',
            'undo'
          ]
        }}
      />
    </div>
     <h4>Features</h4>
    <div className="addblog-field1">
      {/* <span>Question</span> */}
      <CKEditor
        className="CKEditorBox"
        onReady={(editor) => {
          // Insert the toolbar before the editable area.
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );

          // this.editor = editor;
        }}
        // onChange={this.handleChange.bind(this, 'question')}
        editor={DecoupledEditor}
        // data={this.state.faq.question}
        config={{
          toolbar: [
            'bold',
            'underline',
            'italic',
            'strikethrough',
            'alignment',
            'numberedList',
            'bulletedList',
            'link',
            'blockQuote',
            'insertTable',
            'uploadImage',
            'indent',
            'outdent',
            'redo',
            'undo'
          ]
        }}
      />
    </div>
    <DragDropfiles/>
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
  )
}
