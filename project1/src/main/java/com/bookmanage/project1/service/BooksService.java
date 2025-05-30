package com.bookmanage.project1.service;

import com.bookmanage.project1.domain.Books;
import java.util.List;

public interface BooksService {
    List<Books> getAllBooks();
    List<Books> searchByTitle(String title);
    Books addBook(Books book);
    Books getBookById(Long id);
    Books updateBook(Long id, Books updatedBook);
    void deleteBook(Long id);
    List<Books> searchByGenre(String genre);
}
