package com.bookmanage.project1.service;

import com.fasterxml.jackson.databind.ObjectMapper; // JSON <-> Java 객체 변환
import com.bookmanage.project1.openai.ImageGenerationRequest;
import com.bookmanage.project1.openai.ImageGenerationResponse;
import okhttp3.*; // HTTP 통신
import org.springframework.beans.factory.annotation.Value; // application.yml 값 주입
import org.springframework.stereotype.Service;

import java.io.IOException;
import okhttp3.OkHttpClient;
import java.time.Duration;

@Service
public class OpenAIService {
    // application.yml에서 OpenAI API 키 값을 주입받음
    @Value("${openai.api.key}")
    private String openaiApiKey;

    // final로 선언된 httpClient는 생성자에서 초기화하는 것이 일반적입니다.
    private final OkHttpClient httpClient;
    private final ObjectMapper objectMapper = new ObjectMapper();

    // OpenAIService 생성자에서 OkHttpClient를 초기화합니다.
    public OpenAIService() {
        this.httpClient = new OkHttpClient.Builder()
                .connectTimeout(Duration.ofSeconds(30))  // 연결 타임아웃 30초 (기본 10초)
                .readTimeout(Duration.ofSeconds(60))     // 읽기 타임아웃 60초 (기본 10초)
                .writeTimeout(Duration.ofSeconds(30))    // 쓰기 타임아웃 30초 (기본 10초)
                .build();
    }

    public String generateImage(String prompt) throws IOException {
        // OpenAI 이미지 생성 API 엔드포인트
        String url = "https://api.openai.com/v1/images/generations";

        // 요청 본문 DTO 생성 (DALL-E 3, 1개, 1024x1024 해상도)
        ImageGenerationRequest requestBody = new ImageGenerationRequest(
                "dall-e-2", // 사용할 모델 (dall-e-2도 가능)
                prompt,     // 프론트에서 받은 사용자 프롬프트
                1,          // 생성할 이미지 개수
                "1024x1024" // 이미지 크기
        );

        // 자바 객체를 JSON 문자열로 변환하여 요청 본문 생성
        RequestBody body = RequestBody.create(
                objectMapper.writeValueAsString(requestBody), // DTO -> JSON String
                MediaType.get("application/json; charset=utf-8") // Content-Type 지정
        );

        // HTTP 요청 객체 생성
        Request request = new Request.Builder()
                .url(url) // 요청 URL
                .header("Authorization", "Bearer " + openaiApiKey) // API 키를 Authorization 헤더에 추가
                .post(body) // POST 메서드와 요청 본문 설정
                .build();

        // HTTP 요청 실행 및 응답 처리
        try (Response response = httpClient.newCall(request).execute()) {
            if (!response.isSuccessful()) { // 응답이 성공(2xx)이 아닐 경우
                String errorBody = response.body() != null ? response.body().string() : "No error body";
                System.err.println("OpenAI API 응답 실패: HTTP " + response.code() + " - " + errorBody);
                throw new IOException("Failed to generate image from OpenAI: " + errorBody);
            }

            // 응답 본문을 JSON 문자열로 읽어와 자바 객체로 변환
            String responseBody = response.body().string();
            ImageGenerationResponse imageResponse = objectMapper.readValue(responseBody, ImageGenerationResponse.class);

            // 이미지 URL이 있는지 확인하고 반환
            if (imageResponse != null && imageResponse.getData() != null && !imageResponse.getData().isEmpty()) {
                return imageResponse.getData().get(0).getUrl(); // 첫 번째 이미지의 URL 반환
            } else {
                throw new IOException("No image URL found in OpenAI response. Response: " + responseBody);
            }
        }
    }
}
