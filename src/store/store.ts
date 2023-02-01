import { configureStore, Store } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import thunk from "redux-thunk";

export const store: Store<EditorInputState, EditorInputAction> & {
  dispatch: DispatchType
} = configureStore({reducer,  middleware: [thunk]});