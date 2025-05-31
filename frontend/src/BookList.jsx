import React, { useEffect, useState } from 'react';
import defaultImage from './default.png';
import { Link } from 'react-router-dom';
import './BookList.css';
import { getBooks } from './api';

export default function BookList() {
  const [books, setBooks] = useState([]);    

  useEffect(() => {
    getBooks().then(
      data => {
        setBooks(data)
      }
    )
  }, [])


  return (
    <div style={{ overflowX: 'auto' }}>
      <div className="scroll-container">
        {books.map((book, index) => (
          <div key={index} className="book">
            <Link to={`/books/${book.bookId}`}>
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
