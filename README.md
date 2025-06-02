# aivle_4_project

### 프론트엔드  
도서를 등록, 조회, 목록화하여 관리할 수 있는 React 기반 웹 애플리케이션입니다.  

프로젝트 구조  
```
src/
  api.js              # 백엔드와 통신하는 API 함수 정의

  App.js              # 전체 React 애플리케이션의 루트 컴포넌트
  App.css             # 앱 전반에 적용되는 스타일

  index.js            # React 애플리케이션의 진입점
  index.css           # 전체 스타일 초기화 (reset CSS 등)

  router.js           # 라우터 설정 파일 (페이지 간 이동 설정)

  BookForm.jsx        # 도서 등록/수정 폼 컴포넌트
  BookForm.css        # BookForm 전용 스타일

  BookInfo.jsx        # 개별 도서 상세 정보 표시 컴포넌트
  BookInfo.css        # BookInfo 전용 스타일

  BookList.jsx        # 도서 목록을 보여주는 컴포넌트
  BookList.css        # BookList 전용 스타일

  Home.jsx            # 홈 화면(메인 페이지) 컴포넌트
  Home.css            # 홈 화면 전용 스타일
```

주요 기능
- 도서 등록 / 수정 / 삭제
- 도서 목록 보기
- 도서 상세 보기
- 기본 이미지 처리
- React Router를 통한 페이지 이동

### 백엔드
Spring Boot 기반의 도서 관리 백엔드 애플리케이션입니다.  
도서 등록, 조회 기능과 함께 OpenAI를 이용한 표지 이미지 생성 기능을 포함하고 있습니다.

프로젝트 구조
```
src/
  main/
    java/
      com/
        bookmanage/
          project1/
            Project1Application.java       # 스프링 부트 애플리케이션 시작점
            HelloController.java           # 테스트용 기본 컨트롤러
            WebConfig.java                 # CORS 등의 전역 설정 클래스

            controller/                    # REST API 컨트롤러 모음
              BooksController.java         # 도서 등록/조회/수정/삭제 API
              ImageController.java         # OpenAI를 통한 이미지 생성 API

            domain/                        # JPA 엔티티 정의
              Books.java                   # 도서 엔티티 클래스

            dto/                           # 요청/응답용 DTO 클래스
              BookRequestDTO.java          # 도서 등록/수정 요청 DTO
              BookResponseDTO.java         # 도서 응답 DTO

            openai/                        # OpenAI 연동 관련 모델
              ImageGenerationRequest.java  # OpenAI 이미지 생성 요청 모델
              ImageGenerationResponse.java # OpenAI 이미지 생성 응답 모델

            repository/                    # 데이터베이스 접근 계층
              BooksRepository.java         # 도서 엔티티용 JPA 리포지토리

            service/                       # 비즈니스 로직 계층
              BookService.java             # 인터페이스
              BooksService.java            # 추가 서비스 계층
              BooksServicelmpl.java        # 도서 서비스 구현체
              OpenAIService.java           # OpenAI 이미지 생성 비즈니스 로직

    resources/
      application.yml                      # 애플리케이션 설정 파일 (DB, API 키 등)
```