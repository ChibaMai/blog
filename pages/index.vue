<template>
  <div id="body" class="mdui-container-fluid">


    <div class="article-method">
      <div class="">
        <div class="mdui-card mdui-hoverable vcomments"> l </div>
        <div class="mdui-card mdui-hoverable vcomments"> l </div>
        <div class="mdui-card mdui-hoverable vcomments"> l </div>
        <div class="mdui-card mdui-hoverable vcomments"> l </div>
      </div>

<!--
<ul class="mdui-list">
  <li
    v-for="article of articles"
    :key="article.slug"
  > <pre>{{ article }}</pre></li>
</ul>
-->

      <div class="mdui-card mdui-hoverable vcomments">
        <Valine />
      </div>
    </div>

    <FloatingMenu />
  </div>
</template>

<script>
import Valine from '~/components/base/Valine/Valine.vue';
import FloatingMenu from '~/components/floatingMenu/FloatingMenu';

export default {
  components: { FloatingMenu, Valine, },

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
