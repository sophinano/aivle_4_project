import React from 'react';
import defaultImage from './default.png';
import { Link } from 'react-router-dom';
import './BookList.css';

export default function BookList() {
  const books = [
    { id: 0, imageUrl: '', title: "제목" },
    { id: 1, imageUrl: '', title: "제목" },
    { id: 2, imageUrl: '', title: "제목" },
  ];

  return (
    <div style={{ overflowX: 'auto' }}>
      <div className="scroll-container">
        {books.map((book, index) => (
          <div key={index} className="book">
            <Link to={`/books/${book.id}`}>
              <img
                src={book.imageUrl && book.imageUrl.trim() !== '' ? book.imageUrl : defaultImage}
                alt={book.title}
                className="book-list-image"
              />
              <div className="book-title">{book.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
