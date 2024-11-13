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

  // Carregar livros do localStorage ou da API
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
      setBooks(storedBooks);
      updateShelves(storedBooks); // Atualizar as estantes com os livros armazenados
    } else {
      loadBooks();
    }
  }, []);

  // Salvar livros no localStorage quando `books` muda
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
    updateShelves(books); // Atualizar as estantes sempre que `books` muda
  }, [books]);

  const loadBooks = async () => {
    const allBooks = await fetchBooks();
    if (Array.isArray(allBooks)) {
      setBooks(allBooks);
      updateShelves(allBooks);
    }
  };

  // Função para atualizar as estantes com base no estado atual de `books`
  const updateShelves = (books) => {
    setShelves({
      currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
      wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
      read: books.filter((book) => book.shelf === 'read'),
    });
  };

  const moveBook = (bookId, shelfName) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, shelf: shelfName } : book
      )
    );
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
