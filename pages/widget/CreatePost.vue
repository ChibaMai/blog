<template>
  <div class="main">
    <Breadcrumb>
      <BreadcrumbItem to="/widget/CreatePost">新建数据</BreadcrumbItem>
      <BreadcrumbItem to="/widget/UpdatePost">更新数据</BreadcrumbItem>
      <BreadcrumbItem to="/widget/SelectPost">查询数据</BreadcrumbItem>
    </Breadcrumb>
    <input type="text" name="" id="title" placeholder="请输入标题" v-model="title" @blur="caption()">
    <input type="text" name="" id="href" placeholder="跳转地址" v-model="href" @blur="hrefFun()">
    <input type="text" name="" id="description" placeholder="描述" v-model="description" @blur="descriptionFun()">
    <input type="text" name="" id="author" value="千叶麻衣" placeholder="作者" v-model="author" @blur="authorFun()">
    <input type="text" name="" id="tags" placeholder="标签(请以 , 方式进行分隔开来)" v-model="tags" @blur="tag()">
    <no-ssr>
      <mavon-editor :toolbars="markdownOption" ref="md" @keyup.native="inputRendering($event)" v-model="handbook"/>
    </no-ssr>
    <button data-ripple="ripple" @click="submit()">新建文章</button>
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
      render: {},
      tagsData: [],
    };
  },

  mounted() {
  },

  methods: {
    submit() {
      let is = this.isEmpty(this.title) && this.isEmpty(this.author) && this.isEmpty(this.href) && this.isEmpty(this.tags) && this.isEmpty(this.handbook);

      if(is) {
        let Intitle = this.title;
        let Inauthor = this.author;
        let Intags = this.tagsData;
        let Inrender = this.render;
        let Indescription = this.description;
        let Inhref = this.href;
        let date = new Date().getTime();
        let blog = new Dexie('MyDatabase');

        let data = {
          title: Intitle,
          author: Inauthor,
          tags: Intags,
          html: Inrender.html,
          md: Inrender.md,
          description: Indescription,
          href: Inhref,
          creationTime: date,
          updateTime: date
        };

        blog.version(1).stores({
          friends: "++id, href, title, tags"
        });

        blog.friends.add(data);

        this.$Notice.success({
          title: '数据提交成功',
          duration: 1.5
        });

        // 清除文本框内容
        this.handbook = ""
        this.title = ""
        this.tags = ""
        this.description = ""
        this.href = ""

        blog.close

      } else {
          this.$Notice.success({
          title: '数据不能为空',
          duration: 1.5
        })
      }
    },

    // 标题
    caption() {
      return this.title.trim()
    },

    // 跳转
    hrefFun() {
      return this.title.trim()
    },

    // 描述 descriptionFun
    descriptionFun() {
      return this.title.trim()
    },

    // 作者
    authorFun() {
      return this.author.trim()
    },

    // 标签
    tag() {
      let data = this.tags;
      let arr = data.split(" ");

      return this.tagsData = arr
    },

    // 检查是否为空
    isEmpty(string) {
      return string === "" ? false : true
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
