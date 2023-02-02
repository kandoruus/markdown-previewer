import React from 'react';
import '../App.css';
import { Toolbar } from './Toolbar';
import { marked } from 'marked';

type Props = {
  input: string[]
}

export const MarkdownPreviewer: React.FC<Props> = ({ input }) => {
  return (
    <div id="preview-area">
      <Toolbar id="preview" text="Previewer"/>
      <div id="preview">{input.map(lineInput => <div>{lineInput}</div>)}</div>
    </div>
  );
}