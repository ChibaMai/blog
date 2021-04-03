<template>
  <div class="my-info mdui-text-center">
    <img src="https://lh3.googleusercontent.com/-MBSofX2yYAo/YGKcsuKk_rI/AAAAAAAAAWI/aQPKFtwc-lMzJtHU4Q7wr3OrO3cDecNRQCEwYBhgLKtQDAL1Ocqz9-qq46jyqMs-xjChFnHVX1odYptJzVh1-mhw8qm1ABTRoQWtukrUELbIQzxl9OZGyVChEyHk1vxmeJNXCM6Lbdjl7vAzIoMHx1q2aY8ahgQE5p8GCg__jO6mcT5hNBgVoReN-kICFb3qYgBKybEBZgWbA4fecSYRf63N94t0zNMVg6sXeN8h6h-SESDLjMaOENdJJpskCwMwmUtrIAnhEjncDbaE7X8pVrfvQflCD4Lq1JdgxgLKy0CHf4cEr414anKmNLUrSbqhS05e3i_-jmWkwtuoQuTIacUGFjCF4Uabu6aq9Q4-dZUN90Zx3mddiwhTGNaysRldUrxV4etpzEVUxzeiGUPAmKRbU0jotAw6s1Mhhc6R5XICdjWHK5Innb1bx3ohNksdArkkjRCpPPs54jbGGx_fcvUb8IEPupf0RUuDnWGyJfs9O3dQ9zodz-GM4_dd_dg7pwZUZsW0qcaddah9SyT838Hf3attyorvh9_B_WIMz4lcwsy0rSRC_9G2SW1mXfSbfhmH-jWtDBaA2mpTthkuBDobUveYklKwYobwS3RivJVv-vJMS8DuRIsu6dxA4LDl-MMf_CMgSJJQjFHnsnsH0DZW5yXhqMJmJn4MG/w140-h140-p/QQ%25E5%259B%25BE%25E7%2589%258720210330111938.jpg" alt="" class="mdui-img-circle mdui-img-fluid avatar">
    <span>千叶麻衣 Blog<i class="fa fa-angle-down mdui-icon"></i></span>
  </div>
</template>

<script>
export default {
  name: 'Info',
}
</script>

<style lang="less" scoped>
.my-info {
  margin: @drawer-margin 0;
  cursor: pointer;

  .mdui-img-circle {
    margin: @drawer-margin - 10 auto;
    max-height: @drawer-width-img;
    max-width: @drawer-width-img;
    border-radius: @drawer-border-radius;
  }
}
</style>
