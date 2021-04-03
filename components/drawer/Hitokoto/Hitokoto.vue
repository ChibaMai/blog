<!-- mdui-ripple hitokoto -->
<template>
  <div class="mdui-ripple hitokoto" data-ripple="ripple">
    <Icon type="md-notifications-outline" class="mdui-icon mdui-text-color-cyan" />
    <span class="hitokoto-content"
      :data-data="hitokotoContent.data"
    >{{ hitokotoContent.data }}</span>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Hitokoto",

  data() {
    return {
      hitokotoContent: {}
    }
  },

  mounted() {
    axios.get("https://v1.hitokoto.cn/?encode=text").then(result => {
      console.log(result);
      this.hitokotoContent = result
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
    color: #727272;
  }

  .mdui-text-color-cyan {
    color: #00bcd4!important;
  }
}
</style>
