<template>
  <div class="login">
    <router-link to="/component/login" v-if="active">Log in</router-link>
    <Button type="success" size="large" v-else @click="out()">Sign out</Button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      active: false
    }
  },

  mounted() {
    // get login cookie
    let off = Number(Cookies.get('login'));
    // console.log(off);
    this.active = !Boolean(off);
  },

  methods: {
    out() {
      axios.get('/user/out', {
        params: {
          id: Cookies.get('login'),
          status: 0,
        }
      }).then(res => {
        if(res.data.code === 200) {
          this.$Notice.success({
            title: '登出成功',
            duration: 1.5
          });

          Cookies.set('login', res.data.status, {
            expires: 365,
            path: '/',
          });

          setTimeout(() => {
            location.reload()
          }, 1000);
        } else if (res.data.code === 400) {
          this.$Notice.error({
            title: '登出失败，请检查网络环境',
            duration: 1.5
          });
        }
      }).catch(err => {

      });
    }
  },
}
</script>

<style lang="less" scoped>
.login {

  a {
    color: var(--color);
  }
}
</style>
