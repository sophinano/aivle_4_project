package com.bookmanage.project1.repository;

import com.bookmanage.project1.domain.Books;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BooksRepository extends JpaRepository<Books, Long> {

    // 제목으로 책을 조회 (동일한 제목의 책이 여러 개 있을 수 있어서 List로 반환)
    List<Books> findByTitle(String title);

    // 장르로 책 조회
    List<Books> findByGenre(String genre);

    // 작성자로 조회
    List<Books> findByAuthor(String author);

    // 제목에 특정 키워드가 포함된 책 조회 (부분 검색)
    List<Books> findByTitleContaining(String keyword);
}