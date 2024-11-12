import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { fetchBooks } from './services/api';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import Shelf from './components/Shelf';

function App() {
  const [books, setBooks] = useState([]);
  const [shelves, setShelves] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: [],
  });

  // Carregar livros e distribuí-los nas prateleiras
  useEffect(() => {
    
    const loadBooks = async () => {
      const allBooks = await fetchBooks();
      setBooks(allBooks);
      console.log(allBooks); // Verifique se há dados retornados da API
      
      const updatedShelves = {
        currentlyReading: allBooks.filter((book) => book.shelf === 'currentlyReading'),
        wantToRead: allBooks.filter((book) => book.shelf === 'wantToRead'),
        read: allBooks.filter((book) => book.shelf === 'read'),
      };
      setShelves(updatedShelves);
    };

    loadBooks();
  }, []);

  // Armazenar prateleiras no LocalStorage a cada atualização
  useEffect(() => {
    localStorage.setItem('shelves', JSON.stringify(shelves));
  }, [shelves]);

  // Mover livro entre prateleiras
  const moveBook = (bookId, shelfName) => {
    setShelves((prevShelves) => {
      const updatedShelves = { ...prevShelves };
      const bookToMove = books.find((book) => book.id === bookId);
      if (!bookToMove) return prevShelves;

      // Remover o livro de outras prateleiras
      Object.keys(updatedShelves).forEach((shelf) => {
        updatedShelves[shelf] = updatedShelves[shelf].filter((book) => book.id !== bookId);
      });

      // Adicionar o livro na nova prateleira
      updatedShelves[shelfName].push({ ...bookToMove, shelf: shelfName });
      return updatedShelves;
    });
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage onMoveBook={moveBook} />} />
          <Route
            path="/shelf"
            element={
              <div>
                <Shelf title="Currently Reading" books={shelves.currentlyReading} onMoveBook={moveBook} />
                <Shelf title="Want to Read" books={shelves.wantToRead} onMoveBook={moveBook} />
                <Shelf title="Read" books={shelves.read} onMoveBook={moveBook} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
