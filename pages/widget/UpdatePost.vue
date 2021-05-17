<template>
  <div class="main">
    <Breadcrumb>
      <BreadcrumbItem to="/widget/CreatePost">新建数据</BreadcrumbItem>
      <BreadcrumbItem to="/widget/UpdatePost">更新数据</BreadcrumbItem>
      <BreadcrumbItem to="/widget/SelectPost">查询数据</BreadcrumbItem>
    </Breadcrumb>
    <input type="text" name="" id="post" placeholder="请输入您要修改的文章ID" v-model="post" @blur="postFun()">
    <input type="text" name="" id="title" placeholder="请修改标题" v-model="title" :disabled="disabled">
    <input type="text" name="" id="href" placeholder="跳转地址" v-model="href" :disabled="disabled">
    <input type="text" name="" id="description" placeholder="请修改描述" v-model="description" :disabled="disabled">
    <input type="text" name="" id="author" value="千叶麻衣" placeholder="请修改作者" v-model="author" :disabled="disabled">
    <input type="text" name="" id="tags" placeholder="请修改标签(请以 , 方式进行分隔开来)" v-model="tags" :disabled="disabled">
    <no-ssr>
      <mavon-editor :toolbars="markdownOption" ref="md" @keyup.native="inputRendering($event)" v-model="handbook" :disabled="disabled" />
    </no-ssr>

    <button data-ripple="ripple" @click="update()">更新文章</button>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import Dexie from 'dexie'

export default {
  data() {
    return {
      markdownOption: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        fullscreen: true,
        readmodel: true,
        htmlcode: true,
        help: true,
        undo: true,
        redo: true,
        trash: true,
        save: true,
        navigation: true,
        alignleft: true,
        aligncenter: true,
        alignright: true,
        subfield: true,
        preview: true,
      },
      handbook: "",
      title: "",
      author: "千叶麻衣",
      tags: "",
      href: "",
      description: "",
      post: "",
      postID: "",
      render: {},
      tagsData: [],
      disabled: true,
      creation_Time: 0
    };
  },

  mounted() {
    this.postID = this.$route.params.id;
    this.post = this.postID;

    this.postFun();
  },

  methods: {
    // 更新文章
    update() {
      let num = Number(this.post);
      let blog = new Dexie('MyDatabase');

      let Intitle = this.title;
      let Inauthor = this.author;
      let Intags = this.tags;
      let Inrender = this.render;
      let Indescription = this.description;
      let Inhref = this.href;
      let date = new Date().getTime();

      blog.version(1).stores({
        friends: "++id, href, title, tags"
      });

      blog.friends.put({
        id: num,
        title: Intitle,
        author: Inauthor,
        tags: Intags.split(" "),
        html: Inrender.html,
        md: Inrender.md,
        description: Indescription,
        href: Inhref,
        updateTime: date,
        creationTime: this.creation_Time,
      })

      this.$Notice.success({
        title: '数据修改成功',
        duration: 1.5
      });

    },

    // 检查是否为空
    isEmpty(string) {
      return string === "" ? false : true
    },

    // 查询获取修改的数据
    postFun() {
      let num = Number(this.post);

      if (!num) {
        this.isWrite = true;

        this.$Notice.success({
          title: '请输入数字',
          duration: 1.5
        });

        this.handbook = "";
        this.title = "";
        this.tags = "";
        this.description = "";
        this.href = "";

        this.post = "";
      } else {
        this.disabled = false

        this.$Notice.success({
          title: '正在查询中',
          duration: 1.5
        });

        let blog = new Dexie('MyDatabase');

        blog.version(1).stores({
          friends: "++id, href, title, tags"
        });

        blog.friends.get(num).then(result => {
          console.table(result);

          if (!result) {
            this.disabled = true;

            this.$Notice.success({
              title: '未找到改文章，请从新输入',
              duration: 1.5
            });

            this.post = "";

            return
          } else {
            this.handbook = result.md;
            this.title = result.title;
            this.tags = result.tags.join(" ");
            this.description = result.description;
            this.href = result.href;
            this.creation_Time = result.creationTime
          }
        })
      }

    },

    // 获取输入的 Markdown 和输出的 html 数据
    inputRendering(e) {
      let obj = {
        html: this.$refs.md.d_render,
        md: this.$refs.md.d_value,
      }
      this.render = obj
    }
  },

  watch: {
  }

}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
  padding-top: 50px;
}

.main input,
.main button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  resize: none;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  color: #757575;
  outline: none;
}

.main button {
  border: none;
  outline: none;
  background-color: var(--bg-top);
  color: white;
  font-size: 16px;
  cursor: pointer;
}
</style>
