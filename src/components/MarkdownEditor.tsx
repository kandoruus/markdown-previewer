import React from 'react';
import '../App.css';
import { Toolbar } from './Toolbar';
import { updatePreview } from '../store/actionCreators';
import { useDispatch, useSelector } from 'react-redux';

export const MarkdownEditor: React.FC = () => {
  const input: string[] = useSelector((state: EditorInputState) => state.input);
  const dispatch: DispatchType = useDispatch();

  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updatePreview(event.target.value.split('\n')));
  }
  return (
    <div id="editorArea">
      <Toolbar id="editor" text="Editor"/>
      <textarea id="editor" onChange={handleText} value={input.join("\n")}></textarea>
    </div>
  );
}