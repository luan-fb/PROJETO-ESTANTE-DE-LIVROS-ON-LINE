import React from 'react';

const Book = ({ book, onMoveBook }) => (
  <div>
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <button onClick={() => onMoveBook(book.id, 'currentlyReading')}>Move to Currently Reading</button>
    <button onClick={() => onMoveBook(book.id, 'wantToRead')}>Move to Want to Read</button>
    <button onClick={() => onMoveBook(book.id, 'read')}>Move to Read</button>
  </div>
);

export default Book;
