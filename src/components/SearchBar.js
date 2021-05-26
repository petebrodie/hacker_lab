import {useState, useEffect} from 'react';

const SearchBar = ({handleSearchTermChange, searchTerm}) => {

    return (
        <input type="text" onChange={handleSearchTermChange} value={searchTerm}/>
    );
}

export default SearchBar;




// <input
//      style={BarStyling}
//      key="random1"
//      value={keyword}
//      placeholder={"search country"}
//      onChange={(e) => setKeyword(e.target.value)}
//     />