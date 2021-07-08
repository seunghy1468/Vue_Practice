# todos-client

> Todo 리스트 예제 앱

## 빌드 하기

``` bash
# 의존성 설치
npm install

# localhost:8080 에 실시간 변경하는 페이지 제공
npm run dev

# 배포 프로그램 만들기
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## contents
### assets
외부에서 가지고 온 이미지, 파일, css, js 등을 넣는 폴더

### components
vue.js에서 사용하는 확장자명 vue파일 생성 및 구현하는 곳

### router/index.js
서버에서 제공하는 라우팅을 사용하지 않아도 라우팅 할 수 있음
즉, 페이지를 서버에 요청하지 않아도 새로운 페이지로 이동 가능

### App.vue
프로젝트가 다루는 component가 표시되는 root component

### main.js
프로젝트의 Base 파일
전역 설정 시, main.js 수정해야함