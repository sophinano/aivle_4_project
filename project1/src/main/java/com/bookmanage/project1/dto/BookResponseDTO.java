package com.bookmanage.project1.dto;

import java.time.LocalDateTime;

public class BookResponseDTO {
    private Long bookId;
    private String author;
    private String title;
    private String genre;
    private String content;
    private String coverImageUrl;
    private LocalDateTime createdAt;


    public BookResponseDTO(Long bookId, String title, String author, String genre, String content, String coverImageUrl, LocalDateTime createdAt) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.content = content;
        this.coverImageUrl = coverImageUrl;
        this.createdAt = createdAt;
    }

    // Getter & Setter
    public Long getBookId() { return bookId; }
    public void setBookId(Long bookId) { this.bookId = bookId; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getGenre() { return genre; }
    public void setGenre(String genre) { this.genre = genre; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getCoverImageUrl() { return coverImageUrl; }
    public void setCoverImageUrl(String coverImageUrl) { this.coverImageUrl = coverImageUrl; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}