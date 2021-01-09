import noteActionTypes from './note-types'

const initial_state = {
  notes: [],
  noteToEdit: {},
  editing: false,
}

const noteReducer = (state = initial_state, action) => {
  switch (action.type) {
    case noteActionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      }
    case noteActionTypes.EDIT_NOTE:
      let noteToEdit = state.notes.find((note) => note.id === action.payload.id)

      return {
        ...state,

        noteToEdit: noteToEdit,
        editing: true,
      }

    case noteActionTypes.UPDATE_NOTE:
      let newNotes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note,
      )
      return {
        ...state,
        notes: newNotes,
        editing: false,
      }

    default:
      return state
  }
}

export default noteReducer
