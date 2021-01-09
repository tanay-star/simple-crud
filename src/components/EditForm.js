import React, { useState } from 'react'
//connecting to store
import { connect } from 'react-redux'
import { updateNote } from '../redux/note/note-actions'

const EditForm = (props) => {
  const [note, setNote] = useState(props.noteToEdit)

  const handleChange = (e) => {
    setNote({
      ...note,
      text: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.updateNote(note)
  }

  return (
    <form>
      <input value={note.text} onChange={handleChange} />
      <button onClick={handleSubmit}>UPDATE</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    noteToEdit: state.notes.noteToEdit,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNote: (note) => dispatch(updateNote(note)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)
