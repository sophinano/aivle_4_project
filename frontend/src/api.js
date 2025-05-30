const Base_URL = 'http://localhost:8080';

export async function getBooks() {
    const response = await fetch(`${BASE_URL}/api/books`);
    return  response.json();
}

export async function getBook(id){
    const response = await fetch(`${BASE_URL}/api/books/${id}`);
    return  response.json();
}

export async function postBook(postData){
    const response = await fetch(`${BASE_URL}/api/books`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postData),
    })
}

export async function putBook(){
    const response = await fetch(`${BASE_URL}/api/books`, { 
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postData),
    })
}

export async function deleteBook(){
    const response = await fetch(`${BASE_URL}/api/books`, {
        method: 'DELETE',
    })
}
