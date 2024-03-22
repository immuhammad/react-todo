import React, {  useState } from "react";



function AddNote({ handleAddNote }) {
  const maxlimit=200;
  const [notetext,setnotetext]=useState('');
  const handlechange=(event)=>
  {
    if(maxlimit-event.target.value.length >= 0)
    {
      setnotetext(event.target.value);
    }
     
  };

  const handlechangesave  = () =>{
    if(notetext.trim().length > 0)
    {
      handleAddNote(notetext);
      setnotetext('');
    }
  };

  
  return (
    <div className="note new">
      <textarea
        rows= '8'
        cols= '20'
        placeholder= 'type to add new  note.......'
        value={notetext}
        onChange={handlechange}
      ></textarea>

      <div className="note-footer">
        <small> {maxlimit - notetext.length} remaining</small>
        <button className="save" onClick={handlechangesave}>Save</button>
      </div>
    </div>
  );
}

export default AddNote;
