import React from 'react';
import '../App.css';
import { Toolbar } from './Toolbar';
import { marked } from 'marked';
import parse from 'html-react-parser';

type Props = {
  input: string[]
}

marked.setOptions({
  gfm: true, 
  breaks: true
});

export const MarkdownPreviewer: React.FC<Props> = ({ input }) => {
  return (
    <div id="preview-area">
      <Toolbar id="preview" text="Previewer"/>
      <div id="preview">{parse(marked(input.join("\n")))}</div>
    </div>
  );
}