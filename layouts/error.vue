<template>
  <div class="article-method mdui-card mdui-hoverable vcomments error">
    <h2>404 - 页面没找到</h2>
    <p>你想查看的页面已被转移或删除了, 要不要返回首页看看:)</p>
    <div class="select">
      <router-link
        class="mdui-card mdui-hoverable"
        data-ripple="ripple"
        v-for="(item, index) in list"
        :key="index"
        :to="item.href"
      >{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
import error from './../api/error';

export default {
  name:"Error",

  props: ['error'],

  data() {
    return {
      list: []
    }
  },

  mounted() {
    this.list = error.list;
    console.log(this.list);
  }
}
</script>

<style lang="less" scoped>
.error {
  text-align: center;

  h2 {
    position: relative;
    margin: 20px 0;
    padding-bottom: 15px;
    font-weight: normal;
    border-bottom: 1px dashed #ddd;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      display: block;
      width: 2rem;
      height: 0.15rem;
      background: linear-gradient(#807fe2 30%, #5755d9 70%);
      box-shadow: 0 3px 3px rgb(128 127 226 / 40%);
      border-radius: 4px;
      transition: 0.25s;
      z-index: 1;
    }
  }

  p {
    font-size: 13px;
  }

  .select {
    margin-top: 35px;
    margin-bottom: 5px;

    a {
      display: inline-block;
      background-color: @markdown-font-color;
      color: white;
      padding: 10px 20px;
    }
  }
}
</style>
