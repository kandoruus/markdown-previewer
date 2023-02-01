import * as actionTypes from "./action-types"

export function updatePreview(editorInput: string): EditorInputAction {
  return {
    type: actionTypes.UPDATEPREVIEW,
    input: editorInput
  };
}