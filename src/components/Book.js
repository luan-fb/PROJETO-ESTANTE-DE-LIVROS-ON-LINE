import React from 'react';
import { FaBook, FaBookmark, FaCheck } from 'react-icons/fa'; 
import ShelfSelector from './ShelfSelector';

const Book = ({ book, onMoveBook }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
    <img 
      src={book.imageLinks?.thumbnail || 'URL_DA_IMAGEM_PADRAO'}
      alt={book.title}
      style={{ width: '100px', height: '150px' }}
    />
    <h3>{book.title}</h3>
    <p>{book.authors?.join(', ')}</p>
    <ShelfSelector currentShelf={book.shelf} onMoveBook={onMoveBook} bookId={book.id} />
    
    
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <FaBook 
        title="Mover para Estou lendo" 
        style={{ marginRight: '10px', cursor: 'pointer', color: '#007bff' }} 
        onClick={() => onMoveBook(book.id, 'currentlyReading')}
      />
      <FaBookmark 
        title="Mover para Quero ler" 
        style={{ marginRight: '10px', cursor: 'pointer', color: '#ffc107' }} 
        onClick={() => onMoveBook(book.id, 'wantToRead')}
      />
      <FaCheck 
        title="Mover para Já lido" 
        style={{ cursor: 'pointer', color: '#28a745' }} 
        onClick={() => onMoveBook(book.id, 'read')}
      />
    </div>
  </div>
);

export default Book;
