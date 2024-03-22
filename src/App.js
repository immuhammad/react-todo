import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import Notelist from "./components/notelist";
import Search from "./components/search";
import Header from "./components/header";

function App() {
  const [notes, setnotes] = useState([
    {
      id: nanoid(),
      text: "This is first note !",
      date: "1/2/2021",
    },
    {
      id: nanoid(),
      text: "This is second note !",
      date: "25/2/2021",
    },
    {
      id: nanoid(),
      text: "This is third note !",
      date: "31/2/2021",
    },
    {
      id: nanoid(),
      text: "This is fourth note !",
      date: "21/5/2021",
    },
  ]);

  const [searchtext, setsearchtext] = useState("");

  const [dark, setdark] = useState(false);

  useEffect(() =>
  {
    const savednotes=JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    if(savednotes){
      setnotes(savednotes);
    }
  }, []);

  
  useEffect(() =>
  {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);




  const addnote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setnotes(newNotes);
  };

  const deletenote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setnotes(newNotes);
  };

  return (
    <div className={`${dark && 'dark-mode'}`}>
      <div className="container">
     
        <Header handletoggledark={setdark} />
        <Search handlesearchtext={setsearchtext} />
        <Notelist
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchtext)
          )}
          handleAddNote={addnote}
          handledeletenote={deletenote}
        />
      </div>
    </div>
  );
}

export default App;
