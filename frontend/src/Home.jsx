import BookList from "./BookList";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div style={headerStyle}>
                <h1 style={titleStyle}>도서 관리 시스템</h1>
                <button style={buttonStyle}
                onClick={() => {
                    navigate('/books/new');
                }}>작성</button>
            </div>
            <div style={searchBoxStyle}>
                <input style={inputStyle} placeholder="책 제목 입력" />
                <button style={{
                    margin : "10px"
                }}>검색</button>
            </div>
            
            <BookList />
        </div>
    )
}

const searchBoxStyle = { 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: '10px', 
    margin: '20px 0' 
}

const inputStyle = { 
    padding: '8px', 
    fontSize: '16px', 
    width: '300px', 
    borderRadius: '4px', 
    border: '1px solid #ccc' 
}

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '16px',

};

const titleStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    margin: 0,
};

const buttonStyle = {
    position: 'absolute',
    right: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
};

export default Home;