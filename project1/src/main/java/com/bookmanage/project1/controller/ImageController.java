package com.bookmanage.project1.controller;

import com.bookmanage.project1.service.OpenAIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController // 이 클래스가 REST API 컨트롤러임을 나타냄
@RequestMapping("/api") // 이 컨트롤러의 모든 엔드포인트는 /api 로 시작
@CrossOrigin(origins = "http://localhost:3000") // 프론트엔드 URL로부터의 CORS 요청 허용 (개발 시)
// 실제 배포 시에는 반드시 프론트엔드 도메인으로 변경해야 합니다!
public class ImageController {
    private final OpenAIService openAIService; // OpenAI 서비스 주입

    @Autowired // 생성자 주입 방식으로 OpenAIService를 주입받음
    public ImageController(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    /**
     * 도서 표지 이미지를 생성하는 API 엔드포인트.
     * 프론트엔드에서 POST 요청으로 JSON 형태의 prompt를 받습니다.
     * @param payload 요청 본문 (예: {"prompt": "책 내용 요약"})
     * @return 생성된 이미지 URL을 포함하는 JSON 응답
     */
    @PostMapping("/generate-cover-image") // POST 요청을 /api/generate-cover-image 경로로 매핑
    public ResponseEntity<Map<String, String>> generateCoverImage(@RequestBody Map<String, String> payload) {
        String prompt = payload.get("prompt"); // 요청 본문에서 'prompt' 값 추출

        // 프롬프트 유효성 검사
        if (prompt == null || prompt.trim().isEmpty()) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "프롬프트가 필요합니다.");
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }

        try {
            // OpenAI 서비스 호출하여 이미지 생성
            String imageUrl = openAIService.generateImage(prompt);

            // 성공 응답 생성 (이미지 URL 포함)
            Map<String, String> successResponse = new HashMap<>();
            successResponse.put("imageUrl", imageUrl);
            return new ResponseEntity<>(successResponse, HttpStatus.OK);
        } catch (IOException e) {
            // 이미지 생성 중 오류 발생 시
            System.err.println("이미지 생성 중 오류 발생: " + e.getMessage());
            e.printStackTrace(); // 개발 중에는 스택 트레이스 출력하여 디버깅 용이

            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "이미지 생성 중 서버 오류가 발생했습니다.");
            // 내부 서버 오류 (500) 응답
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
