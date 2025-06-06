import React, { useEffect, useState } from 'react';
import defaultImage from './default.png';
import { Link } from 'react-router-dom';
import './BookList.css';
import { getBooks, getSearchBook } from './api';
import CircularProgress from '@mui/material/CircularProgress';

export default function BookList(props) {
  const [books, setBooks] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    setLoding(true)
    if(!props.searchVal){
      getBooks().then(
        data => {
          setBooks(data)
          setLoding(false)
        }
      )
    }
    else{
      getSearchBook(props.searchKey, props.searchVal).then(
        data => {
          setBooks(data)
          setLoding(false)
        }
      )
    }
  }, [props])

  if(loding) {
    return <CircularProgress style={{ color: "grey" }}/>
  }
  if(!loding && books.length === 0) return <h3> 도서가 존재하지 않습니다. </h3>

  return (
    <div className="book-list-grid">
      {books.map((book, index) => (
        <div key={index} className="book">
          <Link to={`/books/${book.bookId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src={book.coverImageUrl && book.coverImageUrl.trim() !== '' ? book.coverImageUrl : defaultImage}
              alt={book.title}
              className="book-list-image"
            />
            <div className="book-title">{book.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
