import React, { useState } from 'react';
import { searchBooks } from '../services/api';
import Book from '../components/Book';

const SearchPage = ({ onMoveBook }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    const newQuery = event.target.value.toLowerCase();
    setQuery(newQuery);
  
    if (newQuery) {
      const foundBooks = await searchBooks(newQuery);
  
      // Filtragem manual no frontend, caso a API não filtre corretamente
      const filteredBooks = foundBooks.filter(book => 
        book.title.toLowerCase().includes(newQuery) ||
        book.authors?.some(author => author.toLowerCase().includes(newQuery))
      );
  
      setResults(filteredBooks);
    } else {
      setResults([]);
    }
  };
  

  return (
    <div className="container mt-5">
      <h1>Buscar Livros</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={handleSearch}
          placeholder="Buscar"
        />
      </div>

      <div className="row">
        {results.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            {/* Utilizando o componente Book para exibir o livro com imagem */}
            <Book book={book} onMoveBook={onMoveBook} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
