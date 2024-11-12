import React from 'react';
import Book from './Book';

const Shelf = ({ title, books, onMoveBook }) => (
  <div className="container mt-5">
    <h2>{title}</h2>
    <div className="row">
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => onMoveBook(book.id, 'currentlyReading')}
                >
                  Mover para Lendo atualmente
                </button>
                <button
                  className="btn btn-secondary ml-2"
                  onClick={() => onMoveBook(book.id, 'wantToRead')}
                >
                  Mover para Quero ler
                </button>
                <button
                  className="btn btn-success ml-2"
                  onClick={() => onMoveBook(book.id, 'read')}
                >
                  Mover para Já lidos
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Não há livros nesta prateleira</p>
      )}
    </div>
  </div>
);

export default Shelf;
