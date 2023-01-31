import React from 'react';
import './App.css';
import { Toolbar } from './Toolbar';

export function MarkdownEditor() {
  return (
    <div id="editorArea">
      <Toolbar id="editor" text="Editor"/>
      <textarea id="editor"></textarea>
    </div>
  );
}