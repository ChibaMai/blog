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
  name: 'FriendsChain',

  async asyncData ({ $content, params }) {
    const article = await $content('widget/FriendsChain', params.slug).fetch();

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

</style>
