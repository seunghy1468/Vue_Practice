import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

// vue 내에서 vue-router를 사용하겠다
Vue.use(VueRouter);

// 여게서 vue router를 정의한다
// routes: 페이지를 어디로 넘길지, 8080/ 이면 home으로 가고 8080/about이면 about으로 간다
const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: Home},
        {path:"/about", component: About}
    ]
});