import './Home.css';
import BookList from "./BookList";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const [searchKey, setSearchKey] = useState('title');
  const [searchVal, setSearchVal] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const key = form.elements.key.value;
    const val = form.elements.val.value;
    setSearchKey(key);
    setSearchVal(val);
  };

  return (
    <div>
      <div className="header">
        <h1 className="title">도서 관리 시스템</h1>
        <button className="write-button" onClick={() => navigate('/books/new')}>
          작성
        </button>
      </div>

      <form className="search-box" onSubmit={handleSubmit}>
        <select className='search-category' name="key" defaultValue="title">
          <option value="title">제목</option>
          <option value="author">저자</option>
          <option value="genre">장르</option>
        </select>
        <input className="search-input" name="val" placeholder="책 제목 입력" />
        <button className="search-button" type="submit">검색</button>
      </form>

      <BookList searchKey={searchKey} searchVal={searchVal}/>
    </div>
  );
};

export default Home;
