import React from 'react'
import AddPostModalContext from "./AddPostContext"
export default function AddPostModalState() {
  return (
    <>
       <NoteContext.Provider
        value={{ Notes, DeleteNote, AddNote, UpdateNote, AllNotes }}
      >
        {props.children}
      </NoteContext.Provider>
    </>
  )
}
