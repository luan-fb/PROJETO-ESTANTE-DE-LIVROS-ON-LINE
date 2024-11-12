import React, { useState } from 'react';
import { searchBooks } from '../services/api';
import Book from '../components/Book';

const SearchPage = ({ onMoveBook }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (newQuery) {
      const foundBooks = await searchBooks(newQuery);
      setResults(foundBooks);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <h1>Search for Books</h1>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search books..." />
      <div>
        {results.map((book) => (
          <Book key={book.id} book={book} onMoveBook={onMoveBook} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
