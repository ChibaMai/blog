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

    <div class="anchor-link">
      <ul>
        <li
          v-for="link of article.toc"
          :key="link.id"
          :class="{ 'font-semibold' : link.depth === 2
        }">
        <nuxtLink
          :to="`#${link.id}`"
          class="hover:underline"
          :class="{ 'py-2' : link.depth === 2, 'ml-2 pb-2' : link.depth === 3
          }">{{ link.text }}</nuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Valine from '~/components/base/Valine/Valine';
import FloatingMenu from '~/components/floatingMenu/FloatingMenu';
import Moment from 'moment';

export default {
  data() {
    return {
      title: this.$route.params.slug,
    }
  },

  head() {
    return {
      title: `千叶麻衣 Blog | ${this.title}`
    }
  },

  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })));

    // console.table(article);
    // console.table(tags);

    return {
      article,
      tags
    }
  },

  mounted() {
    // console.log(this.title);
  },

  methods: {
    formatDate(date) {
      return Moment(date).format('YYYY-MM-DD HH:mm:ss')
    },

    success (nodesc) {
      // console.table(nodesc);
      this.$Notice.success({
        title: nodesc,
        // desc: nodesc ? '' : 'Here is the notification description. Here is the notification description.',
        duration: 1.8
      });
    },

  },

  components: { Valine, FloatingMenu },
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

.anchor-link {
  display: none;
  opacity: 1 !important;
  position: fixed;
  right: 0;
}
</style>
