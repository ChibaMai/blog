<template>
  <div id="body" class="mdui-container-fluid">

    <div class="article-method">
      <div class="mdui-card mdui-hoverable">
        <h1>{{ article.title }}</h1>
        <nuxt-content :document="article" />
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
  name: 'TimeMachine',

  head() {
    return {
      title: `千叶麻衣 Blog | 时光机`,
    }
  },

  async asyncData ({ $content, params }) {
    const article = await $content('widget/TimeMachine', params.slug).fetch();

    return { article }
  },

  methods: {
    ArticleMethodDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style lang="less" scoped>

.time-line{
  list-style-type: none !important;
}
</style>
