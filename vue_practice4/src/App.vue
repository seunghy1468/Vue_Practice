<template>
  <div id="app"> 
    <Header />
    <!-- 한줄로 보이지만, export default의 Header를 참조해서 import Header를 찾아서 
    실제 Header.vue를 가져온다 -->
    <div id="content" class="content">
      <router-view></router-view>
    </div>
    <!-- header 밑에 자주 바뀌는 contents 영역이 들어가므로, 전체 페이지는 가만히 있지만 
    router-view를 이용해서 해당 부분 componet만 로딩하는 방식
    -->
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import "./assets/style.css";

export default {
  name: "App",
  components: {
    // import를 했다면 component안에 넣어줘야함
    Header,
  },
};
</script>