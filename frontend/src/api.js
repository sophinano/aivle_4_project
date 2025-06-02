const Base_URL = 'http://localhost:8080';

export async function getBooks(){
    const response = await fetch(`${Base_URL}/books`)
    return await response.json();
}

export async function getBook(id){
    const response = await fetch(`${Base_URL}/books/${id}`);
    return await response.json();
}

const mapping = {
    'title' : 'search',
    'genre' : 'genre',
    'author' : 'author'
}

export async function getSearchBook(key, val) {
    const response = await fetch(`${Base_URL}/books/${key}?${key}=${val}`);
    return await response.json();
}

export async function postBook(postData){
    const response = await fetch(`${Base_URL}/books`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postData),
    })
}

export async function putBook(id, putData){
    const response = await fetch(`${Base_URL}/books/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(putData),
    })
}

export async function deleteBook(id){
    const response = await fetch(`${Base_URL}/books/${id}`, {
        method: 'DELETE',
    })
}

/**
 * 백엔드 서버를 통해 OpenAI 이미지 생성 API를 호출합니다.
 * @param {string} prompt 이미지 생성을 위한 텍스트 프롬프트
 * @returns {Promise<string>} 생성된 이미지의 URL
 */
export async function generateCoverImage(prompt) { // <-- 여기에 'export' 키워드가 있는지 확인!
  try {
    // 백엔드 서버의 이미지 생성 엔드포인트 URL
    // Spring Boot의 기본 포트는 8080입니다. 당신의 백엔드 포트에 맞게 변경하세요.
    const backendUrl = "http://localhost:8080/api/generate-cover-image"; 

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt+"\n 이 내용을 바탕으로 도서 이미지를 하나만 생성해줘", // 백엔드로 보낼 프롬프트 데이터
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`이미지 생성 실패: ${response.status} - ${errorData.message || '알 수 없는 오류'}`);
    }

    const data = await response.json();
    return data.imageUrl; // 백엔드에서 받은 imageUrl 반환
  } catch (error) {
    console.error("프론트엔드에서 이미지 생성 요청 실패:", error);
    alert("이미지 생성 중 오류가 발생했습니다: " + error.message);
    throw error;
  }
}
