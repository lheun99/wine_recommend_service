## Wine Cellar

### **`Wine Cellar`**

##### 1. 프로젝트 주제 
- 와인에 대한 다양한 사용자의 고님을 해결해 주고 와인을 즐기는 데에 도움을 주는 서비스

##### 2. 엔드유저에게 보이는 웹 서비스 타이틀 및 한 줄 소개
- 사용자의 취향에 맞는 맞춤 와인을 추천해드립니다.
- 다양한 와인에 대한 정보와 리뷰 데이터를 제공하여 와인에 대한 고민을 해결해드립니다.

##### 3. 팀 구성원의 전체 이름과 역할

| 이름 | 역할 |
| ------ | ------ |
| 장정민 | 팀장 / 백엔드 / 데이터 분석 |
| 김재연 | 백엔드 / 데이터 분석 |
| 이하은 | 백엔드 / 데이터 분석 |
| 김별희 | 프론트엔드 / 데이터 분석 |
| 이영우 | 프론트엔드 / 데이터 분석 |
| 조인철 | 프론트엔드 / 데이터 분석 |


### **`서비스 설명`**

##### 1. 기획 의도
- 미국을 보면 와인 소비량은 해마다 꾸준히 증가하고 있고 
  https://wineinstitute.org/our-industry/statistics/us-wine-consumption/
- 우리나라의 와인 소비 역시 2020년에만 전년도 대비 20% 증가하였다    
  https://www.wineintelligence.com/why-is-the-south-korean-wine-market-becoming-more-attractive-to-wine-businesses/ 
- 따라서 와인 시장의 성장에 따른 주류 소비 트렌트 변화를 근거로 와인 정보를 공유하고 자신에게 맞는 와인을 추천받을 수 있는 서비스를 제공하고자 한다.

##### 2. 사용된 인공지능 알고리즘 및 모델과 기술스택
- 사용 데이터 셋 : [Kaggle 와인 관련 데이터 셋](https://www.kaggle.com/datasets/dev7halo/wine-information)
- 기술 스택
   - 프론트엔드
     1. React
     2. react-helmet
     3. styled-component
     4. antd
     5. recoil
     6. Chart Js
   - 백엔드
     1. Express.js
     2. MongoDB
     3. passport
     4. OAuth client
   - 데이터 분석
     1. Python
     2. numpy
     3. pandas

##### 3. 웹 서비스의 최종적인 메인 기능과 서브 기능 설명
- 메인 기능
   1. Wine Recommend
      - 사용자 맞춤 와인 리스트 제공
   2. Search Wine
      - 와인 이름 검색 
   3. Bookmark, Review
      - 와인 북마크, 리뷰 입력 및 모아보기
   4. User
      - 로그인, 회원 정보 관리
- 서브 기능
   1. Community
      - 카테고리 별 게시물, 댓글 작성 페이지
   2. Statistic
      - 사용 데이터 관련 그래프, 와인 평균 별점 정보 제공
   3. Social Login
      - 구글 소셜 로그인
