import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BookForm.css';
import { postBook, getBook, putBook } from './api';
import { generateCoverImage } from './api'; 
import CircularProgress from '@mui/material/CircularProgress';
import defaultImage from './default.png';

function BookForm() {
  const navigate = useNavigate();
  const { id } = useParams();

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

  // 로딩 상태를 위한 state 추가
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  useEffect(() => {
    if(id){
      getBook(id).then(data =>{
        setFormData(data)
      })
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // !!! 이미지 생성 버튼 클릭 핸들러 !!!
  const handleGenerateImage = async (e) => {
    e.preventDefault(); // 버튼이 폼 내부에 있어도 폼 제출 방지

    if (!formData.content.trim()) {
      alert("이미지 생성을 위해 '내용'을 먼저 입력해주세요.");
      return;
    }

    setIsGeneratingImage(true); // 이미지 생성 시작 시 로딩 상태 true

    try {
      // formData.content (textarea 내용)를 프롬프트로 백엔드에 요청
      const imageUrl = await generateCoverImage(formData.content); 
      setFormData(prev => ({
        ...prev,
        coverImageUrl: imageUrl, // 생성된 이미지 URL을 상태에 저장
      }));
      // alert("이미지 생성 성공!"); // 성공 알림은 선택 사항
    } catch (error) {
      // 오류는 이미 generateCoverImage 함수에서 처리하고 alert를 띄웁니다.
      // 여기서는 추가적인 UI 처리만 필요할 수 있습니다.
    } finally {
      setIsGeneratingImage(false); // 이미지 생성 완료 시 로딩 상태 false
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.title.trim() ||
      !formData.author.trim() ||
      !formData.genre.trim() ||
      formData.genre === "선택" ||
      !formData.content.trim()
    ) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    if(id){
      putBook(id, formData)
    }
    else{
      postBook(formData);
    }
    handleCancel();
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="top-section">
          
          <div className="left-section">
            <div className="cover-preview">
              {isGeneratingImage ? (
                <div style={{ marginTop: '130px', textAlign: 'center' }}>
                  <CircularProgress />
                </div>
              ) : formData.coverImageUrl ? ( // 이미지가 있으면 표시
                <img src={formData.coverImageUrl && formData.coverImageUrl.trim() !== '' ? formData.coverImageUrl : defaultImage} 
                alt="도서 표지" 
                style={{
                   width: '200px', height: '300px', border: '1px solid #ddd', borderRadius: '10px' , objectFit: "cover"
                  }} />
              ) : ( // 이미지가 없으면 플레이스홀더
                <p>표지 이미지가 여기에 표시됩니다.</p>
              )}
            </div>
            <button className="btn" 
              type="button"
              onClick={handleGenerateImage}
              disabled={isGeneratingImage} // 이미지 생성 중일 때는 버튼 비활성화
            >
              {isGeneratingImage ? '생성 중...' : '표지 생성'}
            </button>
          </div>

          <div className="right-section">
            
            <div className="btn-group top-buttons">
              <button type="submit" className="btn">등록</button>
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
