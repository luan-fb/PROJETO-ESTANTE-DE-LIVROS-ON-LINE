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

  useEffect(() => {
    const loadBooks = async () => {
      const allBooks = await fetchBooks();
      if (Array.isArray(allBooks)) {
        const updatedShelves = {
          currentlyReading: allBooks.filter((book) => book.shelf === 'currentlyReading'),
          wantToRead: allBooks.filter((book) => book.shelf === 'wantToRead'),
          read: allBooks.filter((book) => book.shelf === 'read'),
        };
        setShelves(updatedShelves);
        setBooks(allBooks);
      }
    };

    loadBooks();
  }, []);

  const moveBook = (bookId, shelfName) => {
    setShelves((prevShelves) => {
      const updatedShelves = { ...prevShelves };
      const bookToMove = books.find((book) => book.id === bookId);
      if (!bookToMove) return prevShelves;

      Object.keys(updatedShelves).forEach((shelf) => {
        updatedShelves[shelf] = updatedShelves[shelf].filter((book) => book.id !== bookId);
      });
      updatedShelves[shelfName].push({ ...bookToMove, shelf: shelfName });
      return updatedShelves;
    });
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Estante de Livros</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Início</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">Pesquisa</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shelf">Prateleira</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage onMoveBook={moveBook} />} />
          <Route
            path="/shelf"
            element={
              <div>
                <Shelf title="Lendo atualmente" books={shelves.currentlyReading} onMoveBook={moveBook} />
                <Shelf title="Quero ler" books={shelves.wantToRead} onMoveBook={moveBook} />
                <Shelf title="Já lidos" books={shelves.read} onMoveBook={moveBook} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
