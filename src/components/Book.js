import React from 'react';

const Book = ({ book, onMoveBook }) => (
  <div>
    <img src={book.imageLinks?.thumbnail} alt={book.title} style={{ width: '100px', height: '150px' }} />
    <h3>{book.title}</h3>
    <p>{book.authors?.join(', ')}</p>
    <button onClick={() => onMoveBook(book.id, 'currentlyReading')}>Mover para Lendo atualmente</button>
    <button onClick={() => onMoveBook(book.id, 'wantToRead')}>Mover para Quero ler</button>
    <button onClick={() => onMoveBook(book.id, 'read')}>Mover para Já lidos</button>
  </div>
);


export default Book;
