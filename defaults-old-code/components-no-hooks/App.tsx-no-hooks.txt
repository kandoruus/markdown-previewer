import React from 'react';
import { MarkdownEditor } from './components/MarkdownEditor';
import { MarkdownPreviewer } from './components/MarkdownPreviewer';
import { updatePreview } from './store/actionCreators';
import './App.css';
import { Provider, connect } from 'react-redux';
import { store } from './store/store';

const mapStateToProps = (state: EditorInputState) => {
  return {input: state.input};
}

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    updatePreview: (text:string[]) => {
      dispatch(updatePreview(text))
    }
  };
}

const MarkdownEditorContainer = connect(mapStateToProps, mapDispatchToProps)(MarkdownEditor);
const MarkdownPreviewerContainer = connect(mapStateToProps, null)(MarkdownPreviewer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <MarkdownEditorContainer />
      <MarkdownPreviewerContainer />
     </div>
    </Provider>
  );
}

export default App;
