<template>
  <div id="body" class="mdui-container-fluid">

    <div class="article-method">
      <div class="">
        <div
          class="mdui-card mdui-hoverable vcomments"
          v-for="article of articles"
          :key="article.slug"
        >
          <!-- 卡片的标题和副标题 -->
          <div class="mdui-card-primary">
            <div class="mdui-card-primary-title">
              <!-- :to="{ name: 'blog-slug', params: { slug: article.slug } }" -->
              <!-- :to="article.path" -->
              <router-link
                :to="{ name: 'post-slug', params: { slug: article.slug } }"
              >{{ article.title }}</router-link>
              <!-- <a :href="article.path">{{ article.title }}</a> -->
            </div>
            <div class="mdui-card-primary-subtitle">
              <span>{{ article.author }}</span>
              <span>更新于: {{ formatDate(article.updatedAt) }}</span>
              <!-- <span>创建于: {{ formatDate(article.createdAt) }}</span> -->
            </div>
          </div>
          <!-- 卡片的内容 -->
          <div class="mdui-card-content">{{ article.description }}</div>
          <!-- 卡片的按钮 -->
          <div class="mdui-card-actions">
            <span class="tags">
              <a
                v-for="(item, index) in article.tags"
                :key="index"
                data-ripple="ripple"
              >{{ item }}</a>
            </span>
            <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-btn-icon" @click="success(article.title)" data-ripple="ripple">
              <!-- <router-link
                :to="{ name: 'post-slug', params: { slug: article.slug } }"
              ><Icon type="ios-arrow-down" /></router-link> -->
              <Icon type="ios-arrow-down" />
            </button>
          </div>
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
import FloatingMenu from '~/components/floatingMenu/FloatingMenu';
import Moment from 'moment'

export default {
  data() {
    return{
    }
  },

  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only([ 'title', 'author', 'path', 'slug', 'tags', 'description', 'createdAt', 'updatedAt' ])
      .sortBy('updatedAt', 'desc',)
      .fetch();

    console.log(articles);

    return {
      articles,
    }
  },

  mounted() {
  },

  methods: {
    formatDate(date) {
      return Moment(date).format('YYYY-MM-DD HH:mm:ss')
    },

    success (nodesc) {
      console.log(nodesc);
      this.$Notice.success({
        title: nodesc,
        // desc: nodesc ? '' : 'Here is the notification description. Here is the notification description.'，
        duration: 1.8
      });
    },
  },

  watch: {
  },

  components: { FloatingMenu, Valine, },
}
</script>

<style lang="less" scoped>
// 卡片的标题和副标题
.mdui-card-primary {

  .mdui-card-primary-title {
    display: block;
    font-size: 24px;
    line-height: 36px;
    opacity: .87;
  }

  .mdui-card-primary-subtitle {
    display: block;
    font-size: 12px;
    line-height: 24px;
    opacity: .54;
  }

  span {
    margin-right: 6px;
  }

  span:last-child {
    margin-right: 0;
  }
}

// 卡片的内容
.mdui-card-content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 14px;
}

// 卡片的按钮
.mdui-card-actions {
  position: relative;
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .mdui-btn-icon {
    width: 36px;
    min-width: 36px;
    height: 36px;
    line-height: 36px;
    border: none;
    background-color: transparent;

    i {
      color: #1f1f1f !important;
    }
  }
}

.mdui-btn-raised {
  -webkit-box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
}
</style>
