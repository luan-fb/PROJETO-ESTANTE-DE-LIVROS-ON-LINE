import React, { useState, useCallback } from 'react';
import { searchBooks } from '../services/api';
import Book from '../components/Book';
import { debounce } from '../utils/utils.js';


const SearchPage = ({ onMoveBook }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); 

  const handleSearch = useCallback(
    debounce(async (newQuery) => {
      if (newQuery) {
        setLoading(true); 
        try {
          const foundBooks = await searchBooks(newQuery);

          const filteredBooks = foundBooks.filter((book) =>
            book.title.toLowerCase().includes(newQuery.toLowerCase()) ||
            book.authors?.some((author) => author.toLowerCase().includes(newQuery.toLowerCase()))
          );

          setResults(filteredBooks);
        } catch (error) {
          console.error('Erro ao buscar livros:', error);
          setResults([]);
        } finally {
          setLoading(false); 
        }
      } else {
        setResults([]);
      }
    }, 500),
    [] 
  );

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    handleSearch(newQuery); 
  };

  return (
    <div className="container mt-5">
      <h1>Buscar Livros</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={handleChange}
          placeholder="Buscar"
        />
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Carregando...</span>
          </div>
        </div>
      ) : (
        <>
          
          {!loading && results.length === 0 && query && (
            <div className="alert alert-warning" role="alert">
              Nenhum livro encontrado para "{query}". Tente outra busca.
            </div>
          )}

          <div className="row">
            {results.map((book) => (
              <div key={book.id} className="col-md-4 mb-4">
                <Book book={book} onMoveBook={onMoveBook} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
