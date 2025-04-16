# Onebite Cinema

## Ver. 1.9.0 (2025.04.16)

-영화 상세페이지를 Parallel, Intercepting Route을 사용하여 모달창으로 구현

## Ver. 1.8.0 (2025.04.15)

- serverAction을 통해 영화 리뷰 Delete 적용
- serverAction에 revalidateTag 적용
- useActionState를 사용하여 상태 관리
- toast 라이브러리 적용

## Ver. 1.7.0 (2025.04.14)

- 영화 상세페이지의 error.tsx 적용
- serverAction을 통해 영화 리뷰의 Create 적용
- 영화 리뷰의 데이터 불러오기
- 영화 리뷰 UI 생성

- main Page Suspense 적용
- main, search Page의 스켈레톤 UI 적용 (react-loading-skeleton 라이브러리 사용)

## Ver. 1.6.0 (2025.04.11)

- main Page Suspense 적용
- main, search Page의 스켈레톤 UI 적용 (react-loading-skeleton 라이브러리 사용)

## Ver. 1.5.0 (2025.04.10)

- Dynamic Page인 search Page의 Suspense 설정

## Ver. 1.4.0 (2025.04.09)

- main Page: Static Page로 설정
- search Page: Dynamic Page로 설정
- movie Page: generateStaticParams, dynamicParams 사용하여 Static Page로 설정

## Ver. 1.3.0 (2025.04.08)

- main, search, movie 배포 서버 연결
- main, search, movie 데이터 캐시 설정

## Ver. 1.2.0 (2025.04.07)

- main, search, movie UI 구성

## Ver. 1.1.0 (2025.04.03)

- SearchBar layout 컴포넌트의 자식 컴포넌트로 SearchBar UI 적용
- 검색어 입력 후 버튼 클릭 및 Enter 키 클릭 시 해당 검색 페이지로 이동
- SearchBar 컴포넌트의 input 태그에 초기 값을 query string으로 적용

## Ver. 1.0.0 (2025.04.03)

- next app 구성
- main, search, movie 라우팅 설정
- 페이지별 레이아웃 설정
- search 페이지(/search?q=value)
  - Query String 형식으로 설정
- movie 페이지(/movie/[id])
  - id 형식으로 설정
