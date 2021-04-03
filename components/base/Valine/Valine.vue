<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',

  mounted() {
    new Valine({
      el: '#vcomments',
      appId: '8IMPYyNzBYRBO1g0YdcGSpY1-gzGzoHsz',
      appKey: '46Muux5wLkFQlXEARYCOLUs9'
    })
  },

}
</script>

<style lang="less" scoped>

</style>
