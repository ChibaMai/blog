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
import { ripple } from '~/module/tools';

export default {
  data() {
    return {
    }
  },

  mounted() {
    ripple();

    $('[data-fancybox="preview"]').fancybox({
      thumbs: {
        autoStart : true,
      }
    });

    // 设置登录 cookie
    // Cookies.set('login', 0, {
    //   expires: 365,
    //   path: '/'
    // });

  },

  methods: {
  },

  watch: {
    $route(to,from){
      // console.table([to, from]);
    }
  },

  components: { Toolbar, Drawer, Top, Foot, MaskLayer, }
}
</script>

<style lang="less">
</style>
