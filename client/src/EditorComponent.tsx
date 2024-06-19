import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditorComponent = () => {
  const [content, setContent] = useState('');

  const handleSave = async () => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
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

  return (
    <div>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default EditorComponent;
