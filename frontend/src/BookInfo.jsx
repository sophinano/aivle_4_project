import './BookInfo.css'
import { useNavigate, useParams  } from 'react-router-dom';
import { getBook } from './api';
import { useEffect, useState } from 'react'
import { deleteBook } from './api';

const BookInfo = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [book, setBook] = useState()

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
                        <h2>생성 이미지</h2>
                        {/* <div style={{
                            border: "1px solid #ccc",
                            width: "120px",
                            height: "180px",
                        }}></div> */}
                        <img src={book.coverImageUrl} style={{
                            height: "300px",
                            width: "200px",
                            border: "1px solid #ccc",
                        }} />
                    </div>
                    <div className='book-info'>
                        <h2> {book.title} </h2>
                        <p> {book.author} </p>
                        <p> {book.createdAt} </p>
                        <p> {book.genre} </p>
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