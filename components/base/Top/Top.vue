<template>
  <BackTop
    :height="150"
    :bottom="50"
    :duration="780"
    class="mdui-fab mdui-icon"
    data-ripple="ripple"
  >
  <Icon type="md-arrow-round-up" />
</BackTop>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style lang="less" scoped>
.mdui-fab {
  border-radius: 50%;
  background-color: var(--bg-top);
  width: 56px;
  height: 56px;
  line-height: 52px;
  -webkit-box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%);
}

.ivu-back-top i {
  width: auto;
  height: auto;
  padding: 0;
  font-size: 30px;
}

[data-ripple="ripple"] {
  position: fixed;
}

.top{
  padding: 10px;
  background: rgba(0, 153, 229, .7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
</style>
