import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookForm.css';

function BookForm() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');  //페이지 이동
  };

  return (
    <div className="container">
      <div className="top-section">
        <div className="left-section">
          <div className="cover-preview" />
          <button className="btn">표지 생성</button>
        </div>

        <div className="right-section">
          <div className="btn-group top-buttons">
            <button type="submit" className="btn">등록</button>
            <button type="button" className="btn cancel" onClick={handleCancel}>취소</button>
          </div>

          <div className="form-group">
            <label>1. 작품 제목을 입력하세요. *</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>2. 저자를 입력하세요. *</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>3. 카테고리</label>
            <select>
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
          <textarea rows="5" required></textarea>
        </div>
      </div>
    </div>
  );
}

export default BookForm;
