import React, { useEffect, useState } from 'react';
import defaultImage from './default.png';
import { Link } from 'react-router-dom';
import './BookList.css';
import { getBooks, getSearchBook } from './api';

export default function BookList(props) {
  const [books, setBooks] = useState([]);    

  useEffect(() => {
    if(!props.searchVal){
      getBooks().then(
        data => {
          setBooks(data)
        }
      )
    }
    else{
      getSearchBook(props.searchKey, props.searchVal).then(
        data => {
          setBooks(data)
        }
      )
    }
  }, [props])

  if(books.length == 0) return<h3> 도서가 존재하지 않습니다. </h3>

  return (
    <div style={{ overflowX: 'auto' }}>
      <div className="scroll-container" 
      onWheel={e => {
        if (e.deltaY !== 0) {
          e.currentTarget.scrollLeft += e.deltaY;
          e.preventDefault();
        }
      }}>
        {books.map((book, index) => (
          <div key={index} className="book">
            <Link to={`/books/${book.bookId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
