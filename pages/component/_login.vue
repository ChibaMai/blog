<template>
  <div class="mdui-container-fluid vcomments input">
    <h1>登入账户</h1>
    <Input type="text" v-model="name" placeholder="please enter user name" size="large" autofocus @blur.prevent="UserQuery" />
    <Input type="password" v-model="password" placeholder="Please enter the password" size="large" @blur.prevent="PwaQuery" />
    <Button type="success" long size="large" @click="submit()">Log In</Button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      password: "",
    }
  },

  loaded() {
  },

  mounted() {
  },

  methods: {
    submit() {
      if(this.name && this.password) {
        axios.post('/user/UserQuery', {
          name: this.name,
          password: this.password,
          status: 1,
        }).then(result => {
          let status = result.data.status;

          if(result.data.code === 200) {
            this.$Notice.success({
              title: '登录成功',
              duration: 1.5
            });

            Cookies.remove('login');
            Cookies.set('id', result.data.id, {
              expires: 365,
              path: '/',
            });

            this.$router.push({
              path: "/"
            });

            setTimeout(function () {
              Cookies.set('login', status, {
                expires: 365,
                path: '/',
              });

              location.reload();
            }, 1000);

          } else if (result.data.code === 400) {
            this.$Notice.error({
              title: '用户名或者密码错误',
              duration: 1.5
            });
          }
        }).catch(err => {
          console.log(err);
        });
      } else {
        this.$Notice.error({
          title: '用户名或密码不能为空',
          duration: 1.5
        });
      }
    },

    // 查询用户名方法
    UserQuery() {
      alert(1)
    },

    // 查询密码方法
    PwaQuery() {
      console.log("2");
    },
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
