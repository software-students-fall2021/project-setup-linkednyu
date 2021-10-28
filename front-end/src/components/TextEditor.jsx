import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import parse from "html-react-parser"
import React, { useState } from "react"
import "./texteditor.css"

export default function TextEd() {
    const [text, setText] = useState("")

    return (
        <div className="textEditor">
            <div className="editor">
                <CKEditor
                editor={ClassicEditor}
                data={text}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setText(data)
                }}
                />
            </div>
        </div>
    )
}

// export default TextEd