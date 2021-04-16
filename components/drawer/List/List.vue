<template>
  <div class="mdui-list mdui-collapse-item mdui-ripple">
    <Menu accordion>

      <Submenu name="1">
        <template slot="title" class="title"><Icon type="md-paper-plane" class="mdui-icon mdui-text-color-blue" />分类</template>
          <MenuItem
            v-for="(item, index) in collapseData.classification" :key="index"
            :name="'1-' + index"
            :to="item.href"
            data-ripple="ripple"
          >{{ item.title }}</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title" class="title"><Icon type="md-pricetag" class="mdui-icddon mdui-text-color-orange" />页面</template>
          <MenuItem
            v-for="(item, index) in collapseData.page" :key="index"
            :name="'2-' + index"
            :to="item.href"
            data-ripple="ripple"
          >{{ item.title }}</MenuItem>
      </Submenu>

      <Submenu name="3">
        <template slot="title"><Icon type="md-ionic" class="mdui-icon mdui-text-color-green" />友情链接</template>
          <MenuItem
            v-for="(item, index) in collapseData.links" :key="index"
            :name="'3-' + index"
            :to="item.href"
            target="_blank"
            data-ripple="ripple"
          >{{ item.title }}</MenuItem>
      </Submenu>

    </Menu>
  </div>
</template>

<script>
import collapse from '../../../api/collapse';

export default {
  name: 'List',

  data() {
    return {
      collapseData: {}
    }
  },

  mounted() {
    this.collapseData = collapse
    console.log(this.collapseData);
  }

}
</script>

<style lang="less" scoped>
.mdui-list {
  padding: 8px 0;
  margin: 0;
  background-color: transparent;

  .mdui-text-color-blue {
    color: #2196f3!important;
  }

  .mdui-text-color-orange {
    color: #ff5722!important
  }

  .mdui-text-color-green {
    color: #4caf50!important
  }

  .ivu-menu-submenu-title:hover,
  .ivu-menu-item:hover {
    background-color: rgba(0,0,0,.08) !important;
  }

  .ivu-menu-vertical.ivu-menu-light:after {
    background-color: transparent;
  }

  .ivu-menu-submenu {
    background-color: var(--bg-content);
    transition: all @appba-transition;
    color: var(--color-primary);

    a {
      color: var(--color-primary);
    }
  }

}
</style>
