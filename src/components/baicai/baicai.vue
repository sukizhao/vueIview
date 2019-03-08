<template>
  <div>
    <p class="dabaicai">{{title}}</p>
    <!-- <ul class="text-center spacing" style="padding: 0">
      <li v-for="item in links">
        <a @click="$goRoute(item.route)">{{item.text}}</a>
      </li>
    </ul>-->
    <button @click="search()">点击查询</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "page01",
  data() {
    return {
      title: "这里是第一个页面"
      // links: [
      //   {
      //     text: "圆白菜",
      //     route: "/page01/page01-a"
      //   },
      //   {
      //     text: "长白菜",
      //     route: "/page01/page01-b"
      //   }
      // ]
    };
  },
  methods: {
    search() {
      this.$http.get("/api/user").then(res => {
        console.log(res);
      });
      this.$http.post("/api/car").then(res => {
        console.log(res);
      });
    }
  },
  created() {}
};
</script>
<style>
@import "./baicai.css";
</style>

