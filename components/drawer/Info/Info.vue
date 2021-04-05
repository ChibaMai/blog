<template>
  <div class="my-info mdui-text-center">
    <img src="~static/Avatar.jpg" alt="" class="mdui-img-circle mdui-img-fluid avatar">
    <span>千叶麻衣 Blog<i class="fa fa-angle-down mdui-icon"></i></span>
  </div>
</template>

<script>
export default {
  name: 'Info',
}
</script>

<style lang="less" scoped>
.my-info {
  margin: @drawer-margin 0;
  cursor: pointer;

  .mdui-img-circle {
    margin: @drawer-margin - 10 auto;
    max-height: @drawer-width-img;
    max-width: @drawer-width-img;
    border-radius: @drawer-border-radius;
  }
}
</style>
