package com.bookmanage.project1.service;

import com.bookmanage.project1.domain.Books;
import com.bookmanage.project1.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BooksServicelmpl implements BooksService {

    private final BooksRepository booksRepository;

    @Autowired
    public BooksServicelmpl(BooksRepository booksRepository) {
        this.booksRepository = booksRepository;
    }

    @Override
    public List<Books> getAllBooks() {
        return booksRepository.findAll();
    }

    @Override
    public Books getBookById(Long id) {
        return booksRepository.findById(id).orElse(null);
    }

    @Override
    public Books addBook(Books book) {
        return booksRepository.save(book);
    }

    @Override
    public Books updateBook(Long id, Books updatedBook) {
        return booksRepository.findById(id).map(book -> {
            book.setTitle(updatedBook.getTitle());
            book.setGenre(updatedBook.getGenre());
            book.setContent(updatedBook.getContent());
            book.setAuthor(updatedBook.getAuthor());
            book.setCoverImageUrl(updatedBook.getCoverImageUrl());
            return booksRepository.save(book);
        }).orElse(null);
    }

    @Override
    public void deleteBook(Long id) {
        booksRepository.deleteById(id);
    }

    @Override
    public List<Books> searchByTitle(String title) {
        return booksRepository.findByTitleContaining(title);
    }

    @Override
    public List<Books> searchByGenre(String genre) {
        return booksRepository.findByGenreContaining(genre);
    }
}