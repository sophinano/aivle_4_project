package com.bookmanage.project1.controller;

import com.bookmanage.project1.domain.Books;
import com.bookmanage.project1.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BooksController {

    private final BooksService booksService;

    @Autowired
    public BooksController(BooksService booksService) {
        this.booksService = booksService;
    }

    // 전체 책 목록 조회
    @GetMapping
    public List<Books> getAllBooks() {
        return booksService.getAllBooks();
    }

    // 제목으로 책 검색
    @GetMapping("/search")
    public List<Books> searchByTitle(@RequestParam String title) {
        return booksService.searchByTitle(title);
    }

    // 책 등록
    @PostMapping
    public Books addBook(@RequestBody Books book) {
        return booksService.addBook(book);
    }

    // ID로 책 조회
    @GetMapping("/{id}")
    public Books getBook(@PathVariable Long id) {
        return booksService.getBookById(id);
    }

    @PutMapping("/{id}")
    public Books updateBook(@PathVariable Long id, @RequestBody Books updatedBook) {
        return booksService.updateBook(id, updatedBook);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        booksService.deleteBook(id);
    }

    @GetMapping("/genre")
    public List<Books> searchByGenre(@RequestParam String genre) {
        return booksService.searchByGenre(genre);
    }

}