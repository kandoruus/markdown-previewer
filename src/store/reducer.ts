import * as actionTypes from "./action-types"

const initialState: EditorInputState = {input: ""};

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