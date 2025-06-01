package com.bookmanage.project1.dto;

public class BookRequestDTO {
    private String title;
    private String author;
    private String genre;
    private String content;
    private String coverImageUrl;

    public BookRequestDTO() {}

    public BookRequestDTO(String title, String author, String genre, int price, String content, String coverImageUrl) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.content = content;
        this.coverImageUrl = coverImageUrl;
    }

    // Getter & Setter
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getGenre() { return genre; }
    public void setGenre(String genre) { this.genre = genre; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getCoverImageUrl() { return coverImageUrl; }
    public void setCoverImageUrl(String coverImageUrl) { this.coverImageUrl = coverImageUrl; }
}