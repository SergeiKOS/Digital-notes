import React from 'react'
import {AddNoteBtn} from './AddNoteBtn'

const AddNote = ({onAddNote}) => {
  return (
    <AddNoteBtn onClick={onAddNote}>+</AddNoteBtn>
  )
}

export default AddNote
