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

  },

  methods: {
  },

  watch: {
    $route(to,from){
      console.log([to, from]);
    }
  },

  components: { Toolbar, Drawer, Top, Foot, MaskLayer, }
}
</script>

<style lang="less">
</style>
