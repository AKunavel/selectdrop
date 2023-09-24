import React, { useState } from "react";
import './App.css';

const items = [
  "vadalore",
  "cuddalore",
  "Chidambaram",
  "bhuvanagiri",
  
];

function SearchableList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredResults = items.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Searchable List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchableList;
