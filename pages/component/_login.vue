<template>
  <div class="mdui-container-fluid vcomments input">
    <h1>登入账户</h1>
    <Input type="text" v-model="name" placeholder="please enter user name" size="large" autofocus />
    <Input type="password" v-model="password" placeholder="Please enter the password" size="large" />
    <Button type="success" long size="large" @click="submit()">Log In</Button>
  </div>
</template>

<script>
import cookie from 'js-cookie';

export default {
  data() {
    return {
      name: "",
      password: "",
      status: false,
    }
  },

  loaded() {
  },

  mounted() {
  },

  methods: {
    submit() {
    }
  },

}
</script>

<style lang="less" scoped>
.input {
  width: 50%;
  flex-wrap: wrap;
  color: #ff4081;

  div {
    margin: 10px 0;
  }

  button {
    margin-top: 10px;
  }
}
</style>
