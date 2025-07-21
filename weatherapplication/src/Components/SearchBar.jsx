import React, { useState } from 'react';


function SearchBar() {
  const [input, setInput] = useState('');


  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
    </div>
  );
}

export default SearchBar;