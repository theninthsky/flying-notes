import * as actionTypes from '../actions/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NOTES:
      return action.notes || []
    case actionTypes.ADD_NOTE:
      return [...state, action.newNote]
    case actionTypes.UPDATE_NOTE:
      return state.map(note =>
        note._id === action.updatedNote._id ? action.updatedNote : note,
      )
    case actionTypes.DELETE_NOTE:
      return state.filter(note => (note._id || note.date) !== action.noteID)
    case actionTypes.POPULATE_FILE:
      return state.map(note =>
        note._id === action.note._id ? action.note : note,
      )
    default:
      return state
  }
}