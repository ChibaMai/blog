<template>
  <div class="mdui-color-theme mdui-text-center">
    <div class="mdui-typo">
      <span>©</span>
      <span>2021</span>
      <a href="/">千叶麻衣 Blog.</a>
    </div>
    <div class="mdui-typo">
      <span>由</span>
      <a href="">Typecho</a>
      <span>强力驱动 . Theme By </span>
      <a href="/">Chiba Mai Blog.</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style lang="less" scoped>
.mdui-color-theme {
  background-color: @footer-background-color;
  color: white;
  padding-top: @footer-padding;
  padding-bottom: @footer-padding;
  margin-top: @footer-padding;

  .mdui-typo {
    line-height: 1.8;
    word-wrap: break-word;
  }

  a {
    color: #ff4081;
  }
}
</style>
