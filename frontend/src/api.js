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
