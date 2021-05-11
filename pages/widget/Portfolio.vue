<template>
  <div id="body" class="mdui-container-fluid">

    <div class="article-method">
      <div class="mdui-card mdui-hoverable">
        <h1>作品集</h1>
        <!-- <nuxt-content :document="article" /> -->
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
export default {
  components: { Valine },
  name: 'Portfolio',

  // async asyncData ({ $content, params }) {
  //   const article = await $content('widget/Portfolio', params.slug).fetch();
  //   return { article }
  // },

  head() {
    return {
      title: `千叶麻衣 Blog | 作品集`
    }
  },

  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
