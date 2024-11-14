import React from 'react';

const ShelfSelector = ({ currentShelf, onMoveBook, bookId }) => {
  const shelfCategories = [
    { label: 'Lendo atualmente', value: 'currentlyReading' },
    { label: 'Quero ler', value: 'wantToRead' },
    { label: 'Já lidos', value: 'read' },
  ];

  return (
    <div>
      {shelfCategories.map((shelf) => (
        <button
          key={shelf.value}
          className={`btn ${shelf.value === currentShelf ? 'btn-primary' : 'btn-secondary'} mr-2`}
          onClick={() => onMoveBook(bookId, shelf.value)}
        >
          {`Mover para ${shelf.label}`}
        </button>
      ))}
    </div>
  );
};

export default ShelfSelector;
