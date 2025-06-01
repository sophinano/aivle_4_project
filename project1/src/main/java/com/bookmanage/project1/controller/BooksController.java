package com.bookmanage.project1.controller;

import com.bookmanage.project1.dto.BookRequestDTO;
import com.bookmanage.project1.service.BooksService;
import com.bookmanage.project1.dto.BookResponseDTO;


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

    //  전체 책 목록 조회
    @GetMapping
    public List<BookResponseDTO> getAllBooks() {
        return booksService.getAllBooks();
    }

    //  제목으로 책 검색
    @GetMapping("/title")
    public List<BookResponseDTO> searchByTitle(@RequestParam String title) {
        return booksService.searchByTitle(title);
    }

    //  책 등록
    @PostMapping
    public BookResponseDTO addBook(@RequestBody BookRequestDTO requestDTO) {
        return booksService.addBook(requestDTO);
    }

    //  ID로 책 조회
    @GetMapping("/{id}")
    public BookResponseDTO getBook(@PathVariable Long id) {
        return booksService.getBookById(id);
    }

    //  책 수정
    @PutMapping("/{id}")
    public BookResponseDTO updateBook(@PathVariable Long id, @RequestBody BookRequestDTO updatedDTO) {
        return booksService.updateBook(id, updatedDTO);
    }

    //  책 삭제
    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        booksService.deleteBook(id);
    }

    //  장르로 책 검색
    @GetMapping("/genre")
    public List<BookResponseDTO> searchByGenre(@RequestParam String genre) {
        return booksService.searchByGenre(genre);
    }
    // 저자로 책 검색
    @GetMapping("/author")
    public List<BookResponseDTO> searchByAuthor(@RequestParam String author) {
        return booksService.searchByAuthor(author);
    }

}