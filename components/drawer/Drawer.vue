<template>
  <div class="mdui-drawer">
    <Info />
    <List />
    <div class="mdui-divider"></div>
    <Hitokoto />
  </div>
</template>

<script>
import Hitokoto from './Hitokoto/Hitokoto.vue';
import Info from './Info/Info';
import List from './List/List.vue';

export default {
  data() {
    return {
      list: 100
    }
  },
  name: "Drawer",

  components: { Info, Hitokoto, List }
}
</script>

<style lang="less" scoped>
.mdui-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 240px;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;
  will-change: transform;
  color: var(--font-color);
  transition: all @drawer-transition;
  background-color: var(--bg-content);
}

.mdui-divider {
  margin-top: 8px;
  margin-bottom: 8px;
  height: 1px;
  margin: -1px 0 0 0;
  border: none;
  background-color: rgba(0,0,0,.12);
}
</style>
