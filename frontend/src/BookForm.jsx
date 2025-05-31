import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookForm.css';
import { postBook } from './api';

function BookForm() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');  //페이지 이동
  };

  function getLocalDateTimeString() {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');

    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  }

  const [formData, setFormData] = useState({
    "title": " ",
    "genre": " ",
    "content": " ",
    "createdAt": getLocalDateTimeString,
    "author": " ",
    "coverImageUrl": " "
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData))
    postBook(formData);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="top-section">
          
          <div className="left-section">
            <div className="cover-preview" />
            <button className="btn">표지 생성</button>
          </div>

          <div className="right-section">
            
            <div className="btn-group top-buttons">
              <button type="submit" className="btn" onClick={handleCancel}>등록</button>
              <button type="button" className="btn cancel" onClick={handleCancel}>취소</button>
            </div>
            <div className="form-group">
              <label>1. 작품 제목을 입력하세요. *</label>
              <input type="text" 
                name="title"
                value={formData.title}
                onChange={handleChange}
                required/>    
            </div>

            <div className="form-group">
              <label>2. 저자를 입력하세요. *</label>
              <input type="text" 
                name="author" 
                value={formData.author}
                onChange={handleChange}
                required />
            </div>

            <div className="form-group">
              <label>3. 카테고리</label>
              <select name="genre" value={formData.genre} onChange={handleChange} required>
                <option>선택</option>
                <option>소설</option>
                <option>에세이</option>
                <option>과학</option>
                <option>기타</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <div className="form-group">
            <label>4. 내용 *</label>
            <textarea rows="5" 
              name="content" 
              value={formData.content}
              onChange={handleChange}
              required></textarea>  
          </div>
        </div>
      </div>
    </form>
  );
}

export default BookForm;
