<template>
  <div class="appbar-nav">
    <!-- <lunr-search>
      <template v-slot:default="{ result,  maxScore, meta }">
        <nuxt-link :to="meta.href">
          {{ meta.title }}
          <span>score: {{ Math.round(100 * result.score / maxScore) }}%</span>
        </nuxt-link>
      </template>
    </lunr-search> -->
  </div>
</template>

<script>
export default {
  name: 'Nav',

  mounted() {
  },

  components: {
    // Note: 'lunr-module' below is a custom webpack alias and
    // does NOT refer to the folder in node_modules
    LunrSearch: () => import('lunr-module/search')
  }
}
</script>

<style lang="less" scoped>
.appbar-nav {
  flex-grow: 1;
}
</style>
