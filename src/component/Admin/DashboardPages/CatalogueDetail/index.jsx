import React from 'react'
import "./style.scss"
import { CKEditor } from '@ckeditor/ckeditor5-react';       
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import DragDropfiles from 'component/Admin/common/DragDropfiles';

export default function CatalogueDetail() {
  return (
    <div>
    <div className="AddCatalogue">
    <div className="" style={{ zIndex: 0 }}>
    <div className="catalogue-field">
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
  </div>
  <DragDropfiles/>
  <button className="add-cancelbtn">Cancel</button>
  <button className="add-publishbtn">Save & Publish</button>
    </div>
</div>
  )
}
