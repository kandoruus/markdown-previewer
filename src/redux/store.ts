import { configureStore, ThunkAction , Action, PayloadAction } from '@reduxjs/toolkit';
import { UPDATETEXT } from '../constants/action-types';

const textReducer = (state: string = "", action: Action<string>) => {
  switch(action.type) {
    case UPDATETEXT:
      return action.payload;
    default:
      return state;
  }
} 

export const store = configureStore({
  reducer: {
    text: textReducer,
  }
});