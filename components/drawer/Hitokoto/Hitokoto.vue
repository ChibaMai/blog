<!-- mdui-ripple hitokoto -->
<template>
  <div class="mdui-ripple hitokoto" data-ripple="ripple">
    <Icon type="md-notifications-outline" class="mdui-icon mdui-text-color-cyan" />
    <span class="hitokoto-content"
      :data-data="hitokotoContent.data"
      v-if="hitokotoContent === undefined"
    >{{ hitokotoContent.data }}</span>
    <span class="hitokoto-content"
      :data-hitokoto="hitokoto.hitokoto"
      :data-creator="hitokoto.creator"
      :data-from="hitokoto.from"
      :data-created_at="hitokoto.created_at"
      :title="hitokoto.hitokoto"
      v-else
    >{{ hitokoto.hitokoto }}</span>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Hitokoto",

  data() {
    return {
      hitokotoContent: {},
      hitokoto: {}
    }
  },

  mounted() {
    // https://v1.hitokoto.cn/?encode=text
    // https://v1.hitokoto.cn/
    axios.get("https://v1.hitokoto.cn/").then(result => {
      console.log(result);
      this.hitokoto = result.data
    })
  }

}
</script>

<style lang="less" scoped>
.hitokoto {
  padding: 16px;

  .hitokoto-content {
    word-wrap: break-word;
    white-space: normal;
    word-break: break-all;
  }

  .mdui-text-color-cyan {
    color: #00bcd4!important;
  }
}
</style>
