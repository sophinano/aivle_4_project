package com.bookmanage.project1.repository;

import com.bookmanage.project1.domain.Books;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BooksRepository extends JpaRepository<Books, Long> {

    // 제목에 특정 키워드가 포함된 책 조회 (부분 검색)
    List<Books> findByTitleContaining(String keyword);

    // 장르로 책 검색
    List<Books> findByGenreContaining(String genre);

    // 저자로 책 검색
    List<Books> findByAuthorContaining(String author);
}