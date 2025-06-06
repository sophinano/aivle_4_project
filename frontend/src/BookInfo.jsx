import './BookInfo.css'
import { useNavigate, useParams  } from 'react-router-dom';
import { getBook } from './api';
import { useEffect, useState } from 'react'
import { deleteBook } from './api';

const BookInfo = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [book, setBook] = useState()

    const fommatTime = (iso) => {
        const date = new Date(iso);
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    }

    const handleDelete = () => {
        if (window.confirm('정말 삭제하시겠습니까?')){
            deleteBook(id)
            navigate('/'); 
        }
    };      

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
                        <h2>도서 표지</h2>
                        <img src={book.coverImageUrl} style={{
                            height: "300px",
                            width: "200px",
                            border: "1px solid #ccc",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }} />
                    </div>
                    <div className='book-info'>
                        <h2 style={{ marginBottom: "0.5em", fontWeight: "bold", fontSize: "2em" }}>{book.title}</h2>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.7em",
                            fontSize: "1.1em",
                            textAlign: "left"
                        }}>
                            <div>
                                <span style={{ fontWeight: "bold", color: "#555" }}>저자</span>
                                <span style={{ marginLeft: "0.5em" }}>{book.author}</span>
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold", color: "#555" }}>장르</span>
                                <span style={{ marginLeft: "0.5em" }}>{book.genre}</span>
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold", color: "#555" }}>등록일</span>
                                <span style={{ marginLeft: "0.5em" }}>{fommatTime(book.createdAt)}</span>
                            </div>

                        </div>
                        </div>
                    <div className='book-edit'>
                        <button className="book-button" onClick={() => {
                            navigate(`/books/edit/${id}`)
                        }}>수정</button>
                        <button className="book-button" 
                        style={{backgroundColor: "#FFCCCC"}}
                        onClick = {() => {handleDelete()}}
                    >삭제</button>
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