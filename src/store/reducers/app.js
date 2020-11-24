import {
  CHANGE_THEME,
  LOADING,
  ERROR,
  TOGGLE_AUTH,
  ADDING_NOTE,
  UPDATING_NOTE,
  DELETING_NOTE,
  UPLOADING_FILE,
  DOWNLOADING_FILE,
  DELETING_FILE,
} from '../actions/actionTypes'

const initialState = {
  loading: true,
  showAuth: false,
  addingNote: false,
  updatingNoteID: null,
  deletingNoteID: null,
  uploadingFile: false,
  downloadingFileID: null,
  deletingFileID: null,
  errorMessage: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: action.theme }
    case LOADING:
      return { ...state, loading: action.loading }
    case ERROR:
      return { ...state, errorMessage: action.errorMessage }
    case TOGGLE_AUTH:
      return { ...state, showAuth: !state.showAuth }
    case ADDING_NOTE:
      return { ...state, addingNote: action.status }
    case UPDATING_NOTE:
      return { ...state, updatingNoteID: action.noteID }
    case DELETING_NOTE:
      return { ...state, deletingNoteID: action.noteID }
    case UPLOADING_FILE:
      return { ...state, uploadingFile: action.bool }
    case DOWNLOADING_FILE:
      return { ...state, downloadingFileID: action.fileID }
    case DELETING_FILE:
      return { ...state, deletingFileID: action.fileID }
    default:
      return state
  }
}

export default appReducer
