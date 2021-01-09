import React from 'react'
//connecting to redux store
import { connect } from 'react-redux'
//importing actions
import { editNote } from '../redux/note/note-actions'

const Note = ({ text, id, editNote }) => {
  return (
    <div>
      <h3>{text}</h3>
      <button>DELETE</button>
      <button onClick={() => editNote(id, text)}>EDIT</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    editNote: (id, text) => dispatch(editNote(id, text)),
  }
}

export default connect(null, mapDispatchToProps)(Note)
