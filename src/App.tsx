import React from 'react';
import { MarkdownEditor } from './MarkdownEditor';
import { MarkdownPreviewer } from './MarkdownPreviewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <MarkdownEditor />
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
