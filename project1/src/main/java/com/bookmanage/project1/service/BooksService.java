package com.bookmanage.project1.service;

import com.bookmanage.project1.dto.BookRequestDTO;
import com.bookmanage.project1.dto.BookResponseDTO;
import java.util.List;

public interface BooksService {
    List<BookResponseDTO> getAllBooks();
    BookResponseDTO getBookById(Long id);
    BookResponseDTO addBook(BookRequestDTO bookDTO);
    BookResponseDTO updateBook(Long id, BookRequestDTO updatedDTO);
    void deleteBook(Long id);
    List<BookResponseDTO> searchByTitle(String title);
    List<BookResponseDTO> searchByGenre(String genre);
    List<BookResponseDTO> searchByAuthor(String author);
}
