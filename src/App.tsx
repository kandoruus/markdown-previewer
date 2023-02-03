import React from 'react';
import { MarkdownEditor } from './components/MarkdownEditor';
import { MarkdownPreviewer } from './components/MarkdownPreviewer';
import './App.css';
import { Provider} from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <MarkdownEditor />
      <MarkdownPreviewer />
     </div>
    </Provider>
  );
}

export default App;
