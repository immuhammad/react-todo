import React, { Component } from "react";
import Note from "./note";
import AddNote from "./addnote";
const Notelist = ({ notes, handleAddNote ,handledeletenote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
            <Note  id= {note.id} text= {note.text} date= {note.date} handledeletenote={handledeletenote} />
      ))}
    <AddNote handleAddNote= {handleAddNote} />
    </div>
  );
};

export default Notelist;
