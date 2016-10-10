import v_app from "../compoment/index/app.vue";
import VueRouter from "vue-router";
import Vue from "vue";
import {requireCss} from "../common/_require";
import v_articleList from "../compoment/articles/articleList/articleList.vue";

Vue.use(VueRouter);
var App = Vue.extend(v_app);

const routes = [
    {
        path: "/",
        redirect: to=> {
            return "/articles/list";
        }
    },
    {
        path: "/userinfo",
        component: (resolve) => {
            requireCss("/compoment/userinfo/index.css");
            require(["../compoment/userinfo/index.vue"], resolve);
        }
    },
    {
        path: "/testpage",
        component: (resolve) => {
            require(["../compoment/testpage/p1.vue"], resolve);
        }
    },
    {
        path: "/articles/list",
        component: v_articleList
    }];

const router = new VueRouter({
    // mode: "history",
    routes // （缩写） 相当于 routes: routes
});

new Vue({
    render: h => h(App),
    router
}).$mount("#app");