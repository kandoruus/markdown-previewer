type EditorInputState = {
  input: string
}

type EditorInputAction = {
  type: string
  input: string
}

type DispatchType = (args: EditorInputAction) => EditorInputAction