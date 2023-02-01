import React from 'react';
import { MarkdownEditor } from './components/MarkdownEditor';
import { MarkdownPreviewer } from './components/MarkdownPreviewer';
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
