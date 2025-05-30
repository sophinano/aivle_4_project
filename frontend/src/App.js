import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import BookForm from './BookForm';

// 기본 페이지 컴포넌트
function HomePage() {
  const navigate = useNavigate();

  const handleNewClick = () => {
    navigate('/form');
  };

  return (
    <div style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',  //세로
          alignItems: 'center'       //가로
    }}>
      <h1>BOOK LIST</h1>
      <button onClick={handleNewClick} style={{ padding: '10px 20px', fontSize: '16px' }}> 등록 </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />        {/*기본*/}
        <Route path="/form" element={<BookForm />} />    {/*BookFrame*/}
      </Routes>
    </Router>
  );
}

export default App;
