<template>
  <div id="body" class="mdui-container-fluid">

    <div class="article-method">
      <div class="mdui-card mdui-hoverable">
        <h1>博客主题</h1>
        <h2>Material color palette 颜色主题</h2>
        <p>《默认为 light》点击色块可更换主题的主色</p>
        <div class="color-button">
          <button
            v-for="(item, index) in theme.global"
            :key="index"
            :data-md-color-primary="item.name"
            @click="$colorMode.preference = item.name"
            :style="{
              'background-color': item.color
            }"
          >{{ item.name }}</button>
        </div>
        <h2>Accent colors 辅助色</h2>
        <p>点击色块更换主题的辅助色</p>
        <div class="color-button">
          <button
            v-for="(item, index) in theme.single"
            :key="index"
            :data-md-color-primary="item.name"
            @click="$colorMode.preference = item.name"
            :style="{
              'background-color': item.color
            }"
          >{{ item.name }}</button>
        </div>
      </div>

      <div class="mdui-card mdui-hoverable vcomments">
        <Valine />
      </div>
    </div>

    <FloatingMenu />
  </div>
</template>

<script>
import Valine from '~/components/base/Valine/Valine.vue';
import theme from '~/api/theme';

export default {
  components: { Valine },
  name: 'Theme',

  data() {
    return {
      theme: theme,
    }
  },

  head() {
    return {
      title: `千叶麻衣 Blog | 博客主题`
    }
  },

  methods: {
  }
}
</script>

<style lang="less" scoped>
.color-button {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  button {
    margin: 0;
    padding: 0;
    border: 0;
    outline-style: none;
    background: transparent;
    font-size: inherit;
    margin: 8px 0;
  }

  button[data-md-color-accent], button[data-md-color-primary] {
    width: 130px;
    // margin-bottom: 43px;
    padding: 20px 5px 5px 8px;
    transition: background-color 0.25s, opacity 0.25s;
    border-radius: 3px;
    color: #fff;
    font-size: 13.5px;
    text-align: left;
    cursor: pointer;
    // background-color: red;
  }
}
</style>
