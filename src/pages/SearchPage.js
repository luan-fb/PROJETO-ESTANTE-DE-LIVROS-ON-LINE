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
    <div className="container mt-5">
      <h1>Pesquisar Livros</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={handleSearch}
          placeholder="Pesquise por livros..."
        />
      </div>

      <div className="row">
        {results.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => onMoveBook(book.id, 'currentlyReading')}
                >
                  Mover para Lendo atualmente
                </button>
                <button
                  className="btn btn-secondary ml-2"
                  onClick={() => onMoveBook(book.id, 'wantToRead')}
                >
                  Mover para Quero ler
                </button>
                <button
                  className="btn btn-success ml-2"
                  onClick={() => onMoveBook(book.id, 'read')}
                >
                  Mover para Já lidos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
