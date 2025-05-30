import './BookInfo.css'

const BookInfo = () => {
    return (
        <div style={{
            marginTop: "1em"
        }}>
            {/* 북 상세페이지 */}
            <div className="book-header">
                <button className="book-main-button">메인</button>
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
                        <h2> 도서 1</h2>
                        <p>저자 A</p>
                        <p>등록 2025년 05월 29일</p>
                        <p>수정 2025년 05월 29일</p>
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
                        도서 내용
                    </div>                   
                </div>
                

            </div>
            
        </div>
    )
}

export default BookInfo;