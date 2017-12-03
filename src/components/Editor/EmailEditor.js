import EmailEditor from 'react-email-editor';
import React, {Component} from "react";
 export default class EmailEditorClass extends Component {
     render () {
         return(
             <div>
                 <button onClick={this.saveDesign}>Save Design</button>
                 <button onClick={this.exportHtml}>Export HTML</button>
                 <EmailEditor
                     ref={editor => this.editor = editor}
                 />
             </div>

         )
     }
     saveDesign = () => {
         this.editor.saveDesign(design => {
             console.log('saveDesign', design)
         })
     };
     exportHtml = () => {
         this.editor.exportHtml(data => {
             const {design, html} = data;
             console.log('exportHtml', html)
         })
     }
 }