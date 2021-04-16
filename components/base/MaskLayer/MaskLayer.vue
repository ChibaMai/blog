<template>
  <div class="mask-layer" @click="maskLayer"></div>
</template>

<script>
export default {
  name: 'MaskLayer',

  methods: {
    maskLayer () {
      $("body").attr("data-hidden", "false").removeClass("mdui-drawer-body-left-active").attr("style", "");
      $(".mask-layer").fadeOut(300);
    }
  }
}
</script>

<style lang="less" scoped>
.mask-layer {
  width: 100%;
  height: 100%;
  background-color: rgba(21,28,35,0.87059);
  position: fixed;
  top: 0;
  z-index: 8;
  display: none;
}
</style>
