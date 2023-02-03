import React from 'react';
import '../App.css';
import { Toolbar } from './Toolbar';

type Props = {
  updatePreview: (text: string[]) => void
  input: string[]
}

export const MarkdownEditor: React.FC<Props> = ({ updatePreview, input }) => {
  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updatePreview(event.target.value.split('\n'));
  }
  return (
    <div id="editorArea">
      <Toolbar id="editor" text="Editor"/>
      <textarea id="editor" onChange={handleText} value={input.join("\n")}></textarea>
    </div>
  );
}