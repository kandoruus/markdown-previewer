import React from 'react';
import '../App.css';
import { Toolbar } from './Toolbar';
import { marked } from 'marked';
import parse from 'html-react-parser';

type Props = {
  input: string[]
}

export const MarkdownPreviewer: React.FC<Props> = ({ input }) => {
  console.log(marked.parse(input.join("\n")));
  return (
    <div id="preview-area">
      <Toolbar id="preview" text="Previewer"/>
      <div id="preview">{parse(marked.parse(input.join("\n")))}</div>
    </div>
  );
}