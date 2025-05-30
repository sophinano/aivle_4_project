import './Home.css';
import BookList from "./BookList";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <h1 className="title">도서 관리 시스템</h1>
        <button className="write-button" onClick={() => navigate('/books/new')}>
          작성
        </button>
      </div>

      <div className="search-box">
        <input className="search-input" placeholder="책 제목 입력" />
        <button className="search-button">검색</button>
      </div>

      <BookList />
    </div>
  );
};

export default Home;
