import './BookInfo.css'
import { useNavigate, useParams  } from 'react-router-dom';
import { getBook } from './api';
import { useEffect, useState } from 'react'

const BookInfo = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [book, setBook] = useState()

    useEffect(() => {
        getBook(id).then(
            data => {
                setBook(data)
            }
        )
    }, [id])
    if (!book) {
        return <div>로딩 중...</div>;  // 데이터 없으면 로딩 표시
    } 

    return (
        <div style={{
            marginTop: "1em"
        }}>
            {/* 북 상세페이지 */}
            <div className="book-header">
                <button className="book-main-button" onClick={() => navigate('/')}>메인</button>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <div className='book-info-box'>
                    <div className='book-image'>
                        <h2>생성 이미지</h2>
                        <div style={{
                            border: "1px solid #ccc",
                            width: "120px",
                            height: "180px",
                        }}></div>
                    </div>
                    <div className='book-info'>
                        <h2> {book.title} </h2>
                        <p> {book.author} </p>
                        <p> {book.createdAt} </p>
                    </div>
                    <div className='book-edit'>
                        <button className="book-button">수정</button>
                        <button className="book-button" style={{backgroundColor: "#FFCCCC"}}>삭제</button>
                    </div>
                </div>
                <div className='book-content-box'>
                    <h2 style={{
                        textAlign: "left"
                    }}>내용</h2>   
                    <div className='book-content'>
                        {book.content}
                    </div>                   
                </div>
                

            </div>
            
        </div>
    )
}

export default BookInfo;