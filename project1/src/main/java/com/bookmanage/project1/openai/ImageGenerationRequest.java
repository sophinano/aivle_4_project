package com.bookmanage.project1.openai;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImageGenerationRequest {
    private String model;
    private String prompt;
    private Integer n; // n: 생성할 이미지 수
    private String size; // size: 이미지 해상도

    // 필수: Jackson이 JSON을 객체로 변환할 때 사용할 기본 생성자 (public 또는 protected)
    public ImageGenerationRequest() {}

    // 편의를 위한 생성자
    public ImageGenerationRequest(String model, String prompt, Integer n, String size) {
        this.model = model;
        this.prompt = prompt;
        this.n = n;
        this.size = size;
    }

    // Getter와 Setter (Jackson이 JSON 필드와 매핑하기 위해 사용)
    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }
    public String getPrompt() { return prompt; }
    public void setPrompt(String prompt) { this.prompt = prompt; }
    public Integer getN() { return n; }
    public void setN(Integer n) { this.n = n; }
    public String getSize() { return size; }
    public void setSize(String size) { this.size = size; }
}
