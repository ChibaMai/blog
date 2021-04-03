<template>
  <div id="body" class="mdui-container-fluid">

    <div  class="article-method mdui-card mdui-hoverable">
      <ul class="mdui-list">
        <li
          v-for="article of articles"
          :key="article.slug"
        > <pre>{{ article }}</pre> </li>
      </ul>
    </div>

    <FloatingMenu />
  </div>
</template>

<script>
import FloatingMenu from '~/components/floatingMenu/FloatingMenu';

export default {
  components: { FloatingMenu, },

  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch();

    return {
      articles,
    }
  }

}
</script>

<style lang="less" scoped>

</style>
