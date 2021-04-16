<template>
  <div class="mdui-appbar mdui-appbar-fixed">
    <div class="mdui-toolbar mdui-color-indigo">
      <Button />
        <router-link
          :to="{ name: 'index' }"
          class="mdui-typo-headline"
        >千叶麻衣 Blog</router-link>
      <Nav />
      <Theme />
      <Seach />
    </div>
  </div>
</template>

<script>
import Theme from '~/components/base/Theme/Theme'
import Button from '../Button/Button'
import Nav from '../Nav/Nav.vue'
import Seach from '../Seach/Seach.vue'

export default {
  components: { Button, Seach, Nav, Theme },
  name: 'Toolbae'
}
</script>

<style scoped lang="less">
.mdui-appbar {
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  -webkit-box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
}

.mdui-appbar-fixed {
  position: fixed;
  top: 0;
  right: 0;
  // bottom: 0;
  left: 0;
  z-index: @appbar-z-index;

  .mdui-toolbar {
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    a {
      margin: 0 10px;
      color: white;
    }
  }

  .mdui-toolbar > * {
    margin: 0 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all @appba-transition;
  }

  .mdui-color-indigo {
    background-color: @background-color;
  }
}
</style>
