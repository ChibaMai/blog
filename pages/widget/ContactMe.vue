<template>
  <div id="body" class="mdui-container-fluid">

    <div class="article-method">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" />
    </div>

    <FloatingMenu />
  </div>
</template>

<script>
export default {
  name: 'ContactMe',

  async asyncData ({ $content, params }) {
    const article = await $content('widget/ContactMe', params.slug).fetch();

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
