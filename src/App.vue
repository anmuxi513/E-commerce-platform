<template>
  <div>
    <!-- 使用组件 -->
    <Header></Header>
    <!-- 路由组件的出口位置 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入组件
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "",
  // 注册组件
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>


