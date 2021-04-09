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
</style>
