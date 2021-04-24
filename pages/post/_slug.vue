<template>
  <div id="body" class="mdui-container-fluid vcomments">

    <div class="article-method">
      <div class="mdui-card mdui-hoverable mdui-typo">
          <div class="mdui-card-primary">
            <h1 class="mdui-card-primary-title">{{ article.title }}</h1>
            <div class="mdui-card-primary-subtitle">
              <span>作者: {{ article.author }}</span>
              <span>创建于: {{ formatDate(article.createdAt) }}</span>
              <span>更新于: {{ formatDate(article.updatedAt) }}</span>
            </div>
          </div>
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
import FloatingMenu from '~/components/floatingMenu/FloatingMenu';
import Moment from 'moment'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    return {
      article,
      tags
    }
  },

  methods: {
    formatDate(date) {
      return Moment(date).format('YYYY-MM-DD HH:mm:ss')
    },

    success (nodesc) {
      console.log(nodesc);
      this.$Notice.success({
        title: nodesc,
        // desc: nodesc ? '' : 'Here is the notification description. Here is the notification description.',
        duration: 1.8
      });
    },
  },

  components: { FloatingMenu, Valine, },
}
</script>

<style lang="less" scoped>
.mdui-typo {
  padding: 24px;
  font-size: 13px;

  .mdui-card-primary {
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 0 !important;
  }

  .mdui-card-primary-subtitle {
    color: #a7a7a7;
    font-size: 12px;

    span {
    margin-right: 6px;
    }

    span:last-child {
      margin-right: 0;
    }
  }
}
</style>
