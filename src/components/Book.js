import React from 'react';
import ShelfSelector from './ShelfSelector';

const Book = ({ book, onMoveBook }) => (
  <div>
    <img src={book.imageLinks?.thumbnail} alt={book.title} style={{ width: '100px', height: '150px' }} />
    <h3>{book.title}</h3>
    <p>{book.authors?.join(', ')}</p>
    <ShelfSelector currentShelf={book.shelf} onMoveBook={onMoveBook} bookId={book.id} />
  </div>
);

export default Book;
