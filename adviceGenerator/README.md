# 📝 명언 출력기
https://advice-generator-api-en.netlify.app/

## ⏰ 개발 기간
- 23.11.01 ~ 23.11.02
  
## 🖥️ 프로젝트 소개
- 외부 API(Advice Slip API)를 사용해 명언을 출력합니다.

## 📌 주요 기능
명언 출력
- JavaScript의 Fetch 함수를 통해 외부 API(Advice Slip API)에서 명언 데이터 가져오기.
- 버튼을 클릭할 때마다 새로운 명언 데이터를 출력. (연속 출력 시, 최소 2초의 딜레이 발생)

반응형 웹
- CSS 미디어 쿼리를 통해 화면 너비가 560px에서 320px 사이인 경우, 부모 요소 너비에서 10%를 뺀 만큼의 너비 적용.
- 화면 너비가 320px 미만일 경우, 출력되는 명언의 문구 확인이 용이한 선을 기준으로 레이아웃 최소 너비 설정.
