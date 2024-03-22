import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';


function Search({handlesearchtext}) {
    return ( 
        <div className="search">
            <MdSearch  className="search-icon" size="1em"  />
            <input type="text" onClick={(event)=> handlesearchtext(event.target.value)}  placeholder=" type to search..."></input>

        </div>
     );
}

export default Search;