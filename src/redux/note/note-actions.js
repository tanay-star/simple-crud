import noteActionTypes from './note-types'

export const addNote = (note) => {
  return {
    type: noteActionTypes.ADD_NOTE,
    payload: note,
  }
}

export const editNote = (id, text) => {
  return {
    type: noteActionTypes.EDIT_NOTE,
    payload: { id, text },
  }
}

export const updateNote = (newNote) => {
  return {
    type: noteActionTypes.UPDATE_NOTE,
    payload: newNote,
  }
}
