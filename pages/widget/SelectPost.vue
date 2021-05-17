<template>
  <div class="main">
    <Breadcrumb>
      <BreadcrumbItem to="/widget/CreatePost">新建数据</BreadcrumbItem>
      <BreadcrumbItem to="/widget/UpdatePost">更新数据</BreadcrumbItem>
      <BreadcrumbItem to="/widget/SelectPost">查询数据</BreadcrumbItem>
    </Breadcrumb>
    <table>
      <thead>
        <tr>
          <td style="width: 75px">文章 ID</td>
          <td>文章标题</td>
          <td>作者</td>
          <td>标签(Tags)</td>
          <td class="main-content">文章描述</td>
          <td style="width: 60px" class="main-content">查看文章</td>
          <td style="width: 60px;">修改文章</td>
          <td style="width: 60px;">删除文章</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in data"
          :key="index"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.tags.join(" / ") }}</td>
          <td class="main-content">{{ item.description }}</td>
          <td class="main-content"><router-link to="/">查看</router-link></td>
          <td><router-link :to="{ name: 'widget-UpdatePost', params: { id: item.id }}">修改</router-link></td>
          <td><a href="javascript:void(0);" @click="deleteData(item.id)">删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Dexie from 'dexie'

export default {
  data() {
    return {
      data: []
    }
  },

  mounted() {
    this.load()
  },

  methods: {
    deleteData(id) {
      let blog = new Dexie('MyDatabase');

      blog.version(1).stores({
        friends: "++id, href, title, tags"
      });

      blog.friends.delete(id);

      blog.close;

      this.$Notice.success({
        title: `位置${id}删除成功`,
        duration: 1.5
      });

      this.load()
    },

    // 初始化
    load() {
      let blog = new Dexie('MyDatabase');

      blog.version(1).stores({
        friends: "++id, href, title, tags"
      });

      blog.friends.toArray().then(result => {
        this.data = result
        // console.log(result);
      })

      blog.close;
    }
  },


}
</script>

<style lang="less" scoped>
.main {
  padding: 50px 20px 20px;

  table {
    width: 100%;
    border-collapse: collapse;

    thead tr {
      background-color: var(--bg-top);
      color: white;
    }

    tr:nth-child(2n) {
        background-color: #dedede;
    }

    tr {
      cursor: pointer;
      transition: all 300ms;
    }

    tbody tr:hover {
      background-color: rgba(0, 0, 0, .15);
    }

    td {
      padding: 15px 10px;
      border: 1px solid #000;
    }

    a {
      color: #ff4081;
    }
  }

}

@media (max-width: 780px) {
  .main-content {
    display: none;
  }
}

.dark-mode {
  .main {
    color: white;
  }
}
</style>
