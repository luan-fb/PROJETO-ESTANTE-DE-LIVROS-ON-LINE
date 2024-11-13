import React from 'react';
import Book from './Book';

const Shelf = ({ title, books, onMoveBook }) => (
  <div className="container mt-5">
    <h2>{title}</h2>
    <div className="row">
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            {/* Utilizando o componente Book para exibir o livro com imagem */}
            <Book book={book} onMoveBook={onMoveBook} />
          </div>
        ))
      ) : (
        <p>Não há livros nesta prateleira</p>
      )}
    </div>
  </div>
);

export default Shelf;
