import React, { useState } from 'react'
//importing actions
import { addNote } from '../redux/note/note-actions'
//connecting to the redux store
import { connect } from 'react-redux'

const TextArea = (props) => {
  const [note, setNote] = useState({
    id: 0,
    text: '',
  })

  const handleChange = (e) => {
    console.log(e)
    setNote({
      ...note,
      id: new Date().getTime(),
      text: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNote(note)
    setNote({
      ...note,
      id: 0,
      text: '',
    })
  }

  return (
    <form>
      <input onChange={handleChange} value={note.text} />
      <button onClick={handleSubmit}>ADD</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    editing: state.notes.editing,
    noteToEdit: state.notes.noteToEdit,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextArea)
