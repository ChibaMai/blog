<template>
  <div class="floatingMenu mdui-hidden-sm-down">
    <Tab />
    <Archive />
    <Tags />
  </div>
</template>

<script>
import Archive from './Archive/Archive.vue'
import Tab from './Tab/Tab.vue'
import Tags from './Tags/Tags.vue'
export default {
  components: { Tab, Archive, Tags },
  name: 'FloatingMenu',
}
</script>

<style lang="less" scoped>

</style>
