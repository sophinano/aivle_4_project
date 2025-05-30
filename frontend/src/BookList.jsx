import React, { useEffect, useState } from 'react';
import defaultImage from './default.png';
import getBooks from './api'
import { Link } from 'react-router-dom';

export default function BookList() {
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     const data = getBooks();
    //     setBooks(data)
    // }, []);

    const books = [
    {
        id: 0,
        imageUrl: '',
        title: "제목"
    },
    { 
        id: 1,
        imageUrl: '',
        title: "제목"
    },
      {
        id: 2,
        imageUrl: '',
        title: "제목"
    },

]

    const scrollContainerStyle = {
        display: 'flex',
        overflowX: 'auto',
        gap: '20px',
        padding: '20px',
        whiteSpace: 'nowrap',
        margin: '50px 200px',
    };

    const bookStyle = {
        flex: '0 0 auto', // 중요: 줄바꿈 없이 고정 크기로 유지
        width: '150px',
        textAlign: 'center',
    };

    const imageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
    };

    const titleStyle = {
        marginTop: '10px',
        fontSize: '16px',
        fontWeight: '500',
    };

    return (
        <div style={{ overflowX: 'auto' }}>
            <div style={scrollContainerStyle}>
                {books.map((book, index) => (
                    <div key={index} style={bookStyle}>
                        <Link to={`/books/${book.id}`}>
                            <img 
                            src={book.imageUrl && book.imageUrl.trim() !== '' ? book.imageUrl : defaultImage} 
                            alt={book.title} style={imageStyle} />
                            <div style={titleStyle}>{book.title}</div>
                        </Link>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
