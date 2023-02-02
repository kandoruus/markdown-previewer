import * as actionTypes from "./action-types"
import { initEditor } from "../assets/constants"
const initialState: EditorInputState = {input: initEditor};

export const reducer = (
  state: EditorInputState = initialState,
  action: EditorInputAction
): EditorInputState => {
  switch (action.type) {
    case actionTypes.UPDATEPREVIEW:
      return {input: action.input};
    default:
      return state;
  }
}