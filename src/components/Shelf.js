import React from 'react';
import Book from './Book';

const Shelf = ({ title, books, onMoveBook }) => (
  <div>
    <h2>{title}</h2>
    <div>
      {books.length > 0 ? (
        books.map((book) => (
          <Book key={book.id} book={book} onMoveBook={onMoveBook} />
        ))
      ) : (
        <p>No books in this shelf</p>
      )}
    </div>
  </div>
);

export default Shelf;
