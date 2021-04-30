<template>
  <div class="search">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon" data-ripple="ripple" @click="searchOpen">
      <Icon type="md-search" />
    </a>

    <!-- Search -->
    <div class="search-content">
      <div class="search-mask" @click="searchClose" title="关闭搜索"></div>
      <Icon type="md-close" class="searchClose" @click="searchClose" />
      <div class="search-bar">
        <input
          v-model="searchQuery"
          type="search"
          autocomplete="off"
          placeholder="请输入您要搜索的字段"
          name="search"
          id="search"
        >
        <ul class="search-list" v-if="articles.length">
          <li v-for="article of articles" :key="article.slug">

            <!-- <p> -->
              <router-link
                :to="{
                  name: 'post-slug',
                  params: {
                    slug: article.slug
                  }
                }"
              >{{ article.title }}</router-link>
            <!-- </p> -->
            <!-- <NuxtLink
              :to="{
                name: 'post-slug',
                params: {
                  slug: article.slug
                }
              }"
            >{{ article.title }}</NuxtLink> -->
            <!-- <p>
              <nuxt-content :document="article" />
            </p> -->
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Seach',

  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },

  mounted() {
  },

  methods: {
    searchOpen() {
      // this.$Notice.success({
      //   title: '打开搜索',
      //   duration: 1.5
      // });
      $("body").css("overflow", "hidden");
      $(".search > .search-content").fadeIn(300);
      $(".mdui-drawer").css("z-index", "-9");
    },

    searchClose() {
      // this.$Notice.success({
      //   title: '关闭搜索',
      //   duration: 1.5
      // });
      $("body").attr("style", "");
      $(".search > .search-content").fadeOut(300);
      $(".mdui-drawer").attr("style", "");

      // 清除搜索框搜索的内容
      this.searchQuery = '';
    }
  },

  watch: {
    async searchQuery(searchQuery) {
      if(!searchQuery) {
        this.articles = [];
        return
      }

      // console.table(searchQuery);
      console.table(this.articles);

      this.articles = await this.$content('articles')
      .limit(999)
      .search(searchQuery)
      .fetch()
    },

    '$route' (res) {
      console.table(res);
      console.log('关闭搜索');
      this.searchClose();
    }
  },
}
</script>

<style lang="less" scoped>
.search {
  display: flex;

  i {
    color: var(--color);
  }

  .search-content {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 19;
    display: none;
    background-color: rgba(21, 28, 35, 0.87059);
  }

  .search-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 20;
    cursor: pointer;
  }

  .searchClose {
    position: absolute;
    z-index: 22;
    right: 25px;
    top: 15px;
    font-size: 30px;
    cursor: pointer;
  }

  .search-bar {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    z-index: 22;
    margin: 0 auto;
    padding-top: 50px;
  }

  input {
    width: 100%;
    height: 42px;
    background: transparent;
    border: 0px;
    outline: none;
    border-bottom: 2px solid var(--bg-secondary);
    font-size: 20px;
    color: var(--bg-secondary);
  }

  .search-list {

    li {
      border-bottom: 1px dashed var(--bg-secondary);
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
    }

    a {
      display: block;
      font-size: 23px;
      color: var(--bg-secondary);
      // overflow: hidden;
      // white-space: nowrap;
      // word-wrap: break-word;
    }
  }
}

.dark-mode,
.light-mode {
  #search {
    color: #fff;
    border-block-color: #fff;
  }

  .search-list li {
    border-color: #fff;
  }

  .search-list a  {
    color: #fff;
  }
}
</style>
