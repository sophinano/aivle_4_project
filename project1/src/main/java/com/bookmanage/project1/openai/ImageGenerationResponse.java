package com.bookmanage.project1.openai;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public class ImageGenerationResponse {
    private Long created; // 이미지 생성 시간 (타임스탬프)
    private List<ImageData> data; // 생성된 이미지 데이터 리스트

    // 필수: Jackson이 JSON을 객체로 변환할 때 사용할 기본 생성자
    public ImageGenerationResponse() {}

    // Getter와 Setter
    public Long getCreated() { return created; }
    public void setCreated(Long created) { this.created = created; }
    public List<ImageData> getData() { return data; }
    public void setData(List<ImageData> data) { this.data = data; }

    // 내부 클래스: 실제 이미지 URL을 담는 부분
    public static class ImageData {
        private String url; // 생성된 이미지의 공개 URL
        @JsonProperty("b64_json") // JSON 필드 이름과 자바 변수 이름이 다를 때 사용
        private String b64Json; // Base64 인코딩된 이미지 데이터 (URL 대신 받을 경우)

        // 필수: Jackson이 JSON을 객체로 변환할 때 사용할 기본 생성자
        public ImageData() {}

        // Getter와 Setter
        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
        public String getB64Json() { return b64Json; }
        public void setB64Json(String b64Json) { this.b64Json = b64Json; }
    }
}
