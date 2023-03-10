import React from 'react';
import '../App.css';
import { Toolbar } from './Toolbar';
import { marked } from 'marked';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

marked.setOptions({
  gfm: true, 
  breaks: true
});

export const MarkdownPreviewer: React.FC = () => {
  const input: string[] = useSelector((state: EditorInputState) => state.input);
  return (
    <div id="preview-area">
      <Toolbar id="preview" text="Previewer"/>
      <div id="preview">{parse(marked(input.join("\n")))}</div>
    </div>
  );
}