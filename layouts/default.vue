<template>
  <div class="app-container">
    <Toolbar />
    <Drawer />
    <Nuxt />
    <Foot />
    <Top />
  </div>
</template>

<script>
import Toolbar from '~/components/appbar/Toolbar/Toolbar';
import Foot from '~/components/base/Foot/Foot';
import Top from '~/components/base/Top/Top';
import Drawer from '~/components/drawer/Drawer';

export default {

  mounted() {
    new Ripple({
      // 水波纹透明度
      opacity: 0.6,
      // 水波纹扩散速度
      speed: "100ms",
      // 水波纹颜色
      bgColor: "rgba(0,0,0,.3)",
      // 是否显示手型指针
      cursor: true
    });

    $('[data-fancybox="preview"]').fancybox({
      thumbs: {
        autoStart : true,
      }
    });
  },

  components: { Toolbar, Drawer, Top, Foot }
}
</script>

<style lang="less">
</style>
