import React from 'react';
import './App.css';
import { Toolbar } from './Toolbar';

export function MarkdownPreviewer() {
  return (
    <div id="preview-area">
      <Toolbar id="preview" text="Previewer"/>
      <div id="preview"></div>
    </div>
  );
}