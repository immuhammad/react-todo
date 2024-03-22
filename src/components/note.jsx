import React, { Component } from 'react';
import {MdDeleteForever} from 'react-icons/md';

const Note = ({id,text,date ,handledeletenote}) => {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever  onClick={()=>handledeletenote(id)} className="delete-icon" size="1.3em"/>
            </div>
           
        </div>
      );
}

export default Note;