<template>
  <div class="app-container">
    <Toolbar />
    <Drawer />
    <Nuxt />
    <Foot />
    <Top />
    <MaskLayer />
  </div>
</template>

<script>
import Toolbar from '~/components/appbar/Toolbar/Toolbar';
import Foot from '~/components/base/Foot/Foot';
import MaskLayer from '~/components/base/MaskLayer/MaskLayer';
import Top from '~/components/base/Top/Top';
import Drawer from '~/components/drawer/Drawer';

export default {
  data() {
    return {
    }
  },

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

  methods: {
  },

  components: { Toolbar, Drawer, Top, Foot, MaskLayer, }
}
</script>

<style lang="less">
</style>
