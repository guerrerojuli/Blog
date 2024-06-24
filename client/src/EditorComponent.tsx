import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditorComponent = () => {
  const [editorHtml, setEditorHtml] = useState('');
  const reactQuillRef = useRef(null);

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:3000/save-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ editorHtml })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file);

      // Replace 'http://localhost:5000/upload' with your server endpoint
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      setEditorHtml(editorHtml + `<img src=${data.imageUrl}>`);
      /*
      // Insert the image into the editor at the cursor position
      const quill = reactQuillRef.current.getEditor();
      const range = quill.getSelection();
      quill.insertEmbed(range.index, 'image', data.imageUrl);
      */
    };
    input.click();
  };

  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: {
        'image': imageHandler
      }
    },
  };

  const formats = [
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image', 'video'
  ];


  const handleChange = (html: string) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <ReactQuill
        ref={reactQuillRef}
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default EditorComponent;
