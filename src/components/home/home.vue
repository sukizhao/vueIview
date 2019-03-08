<template>
  <div>
    <div class="home text-center" v-bind="$attrs">{{home}}</div>
    <div :class="`${prefix}llo`">
      <a href>我是一个a标签hello,这里使用`${}`占位符传值</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      home: "别看了这里啥也没有",
      prefix: "he"
    };
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "./home.less";
// .home {
//   margin-top: 10%;
//   font-size: 2.4em;
//   font-weight: bold;
// }
// .hello {
//   a {
//     color: red;
//   }
// }
</style>
