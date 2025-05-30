const Base_URL = 'http://localhost:8080';

 async function getBooks() {
    const response = await fetch(`${Base_URL}/api/books`);
    return  response.json();
}

 async function getBook(id){
    const response = await fetch(`${Base_URL}/api/books/${id}`);
    return  response.json();
}

 async function postBook(postData){
    const response = await fetch(`${Base_URL}/api/books`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postData),
    })
}

 async function putBook(){
    const response = await fetch(`${Base_URL}/api/books`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postData),
    })
}

 async function deleteBook(){
    const response = await fetch(`${Base_URL}/api/books`, {
        method: 'DELETE',
    })
}
