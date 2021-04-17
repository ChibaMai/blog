<template>
  <div class="theme-modle">
    <Icon type="ios-color-palette theme" @click="theme" />

    <div class="theme-item">
      <span @click="$colorMode.preference = 'light'">light</span>
      <span @click="$colorMode.preference = 'dark'">dark</span>
      <span @click="$colorMode.preference = 'syblue'">Sky blue</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Theme',
  colorMode: 'light',

  data() {
    return {
    }
  },

  mounted () {
  },

  methods: {
    theme() {
      $(".theme-modle .theme-item").stop().fadeToggle(300);
    },
  },

}
</script>

<style lang="less" scoped>
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

.theme-modle {
  margin: 0 !important;

  .theme {
    font-size: 25px;
    cursor: pointer;
    color: white;
  }

  .theme-item {
    display: none;
    position: absolute;
    z-index: 29;
    bottom: -110px;
    right: 30px;
    background-color: var(--bg-content);
    color: var(--font-color);
    border-radius: 3px;
    box-shadow: rgb(136 153 166 / 52%) 0 0px 15px 0px, rgb(136 153 166 / 42%) 0px 0px 3px 1px;
    user-select: none;
  }

  span {
    display: block;
    line-height: 25px;
    cursor: pointer;
    margin: 2px 0;
    padding: 5px 18px;
    transition: all 260ms;

    &:hover {
      background-color: #9c989838
    }
  }
}

</style>
