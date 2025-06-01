package com.bookmanage.project1.service;

import com.bookmanage.project1.domain.Books;
import com.bookmanage.project1.dto.BookRequestDTO;
import com.bookmanage.project1.dto.BookResponseDTO;
import com.bookmanage.project1.repository.BooksRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BooksServicelmpl implements BooksService {

    private final BooksRepository booksRepository;

    @Autowired
    public BooksServicelmpl(BooksRepository booksRepository) {
        this.booksRepository = booksRepository;
    }

    // 모든 책 목록
    @Override
    public List<BookResponseDTO> getAllBooks() {
        return booksRepository.findAll().stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }

    // ID로 조회
    @Override
    public BookResponseDTO getBookById(Long id) {
        return booksRepository.findById(id)
                .map(this::toResponseDTO)
                .orElse(null);
    }

    // 책 추가
    @Override
    public BookResponseDTO addBook(BookRequestDTO bookDTO) {
        Books book = toEntity(bookDTO);
        Books saved = booksRepository.save(book);
        return toResponseDTO(saved);
    }

    // 책 수정
    @Override
    public BookResponseDTO updateBook(Long id, BookRequestDTO updatedDTO) {
        return booksRepository.findById(id).map(book -> {
            book.setTitle(updatedDTO.getTitle());
            book.setGenre(updatedDTO.getGenre());
            book.setContent(updatedDTO.getContent());
            book.setAuthor(updatedDTO.getAuthor());
            book.setCoverImageUrl(updatedDTO.getCoverImageUrl());
            Books updated = booksRepository.save(book);
            return toResponseDTO(updated);
        }).orElse(null);
    }

    // 책 삭제
    @Override
    public void deleteBook(Long id) {
        booksRepository.deleteById(id);
    }

    // 제목 검색
    @Override
    public List<BookResponseDTO> searchByTitle(String title) {
        return booksRepository.findByTitleContaining(title).stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }

    // 장르 검색
    @Override
    public List<BookResponseDTO> searchByGenre(String genre) {
        return booksRepository.findByGenreContaining(genre).stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookResponseDTO> searchByAuthor(String author) {
        return booksRepository.findByAuthorContaining(author).stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }

    // ------------------------------
    // Entity ↔ DTO 변환 메서드들
    // ------------------------------

    private BookResponseDTO toResponseDTO(Books book) {
        return new BookResponseDTO(
                book.getBookId(),
                book.getTitle(),
                book.getAuthor(),
                book.getGenre(),
                book.getContent(),
                book.getCoverImageUrl(),
                book.getCreatedAt()
        );
    }

    private Books toEntity(BookRequestDTO dto) {
        Books book = new Books();
        book.setTitle(dto.getTitle());
        book.setAuthor(dto.getAuthor());
        book.setGenre(dto.getGenre());
        book.setContent(dto.getContent());
        book.setCoverImageUrl(dto.getCoverImageUrl());
        return book;
    }
}