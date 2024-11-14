import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { FaHome, FaSearch, FaBook } from 'react-icons/fa'; 
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
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
      setBooks(storedBooks);
      updateShelves(storedBooks); 
    } else {
      loadBooks();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
    updateShelves(books); 
  }, [books]);

  const loadBooks = async () => {
    const allBooks = await fetchBooks();
    if (Array.isArray(allBooks)) {
      setBooks(allBooks);
      updateShelves(allBooks);
    }
  };

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

    
    toast.success(`Livro movido para ${shelfName === 'currentlyReading' ? 'Estou lendo' : shelfName === 'wantToRead' ? 'Quero ler' : 'Já lido'}`);
  };

  return (
    <Router>
      <div>
        <ToastContainer position="top-right" autoClose={3000} /> 

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Estante de Livros</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FaHome style={{ marginRight: '5px' }} /> Início
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  <FaSearch style={{ marginRight: '5px' }} /> Pesquisa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shelf">
                  <FaBook style={{ marginRight: '5px' }} /> Prateleira
                </Link>
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