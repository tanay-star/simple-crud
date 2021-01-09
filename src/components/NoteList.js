import React from 'react'
//importing components
import Note from './Note'
//connecting to redux store
import { connect } from 'react-redux'

const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.map((note, index) => {
        return <Note key={index} text={note.text} id={note.id} />
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes,
  }
}

export default connect(mapStateToProps, null)(NoteList)
