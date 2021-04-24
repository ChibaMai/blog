<template>
  <a class="mdui-btn mdui-btn-icon" href="javascript:;" data-ripple="ripple" id="toolbar" @click="rippleWidth <= 980 ? mobile() : toolbar()">
    <i class="fa fa-bars"></i>
  </a>
</template>

<script>
export default {
  name: 'Buttom',
  data() {
    return {
      rippleWidth: 0,
    }
  },

  mounted() {
    window.onresize = this.adjust;
    this.adjust();

  },

  methods: {
    adjust(obj) {
      let bodyWidth = document.getElementsByTagName("body")[0].offsetWidth;

      this.rippleWidth = bodyWidth

      return { bodyWidth }
    },

    toolbar() {
      let body = $("body");
      let attr = body.attr("data-hidden");

      if(attr === 'true') {
        this.success("关闭菜单")
        $(body).attr("data-hidden", "false");
        $(body).removeClass("mdui-drawer-body-left");
        $(".mdui-drawer").css('transform', 'translate(-330px, 48px)');
      } else if (attr === 'false') {
        this.success("打开菜单")
        $(body).attr("data-hidden", "true");
        $(body).addClass("mdui-drawer-body-left");
        $(".mdui-drawer").css('transform', '');
      }

      return;
    },

    mobile() {
      let body = $("body");
      let attr = body.attr("data-hidden");

      if(attr === 'false') {
        this.mobileSuccess("打开菜单")
        $(body).attr("data-hidden", "true").addClass("mdui-drawer-body-left-active").css({
          "overflow": "hidden",
        });
        $(".mask-layer").stop().fadeIn(300);
        $(".mdui-drawer").css('transform', '');
      } else if (attr === 'true') {
        this.mobileSuccess("关闭菜单")
        $(body).attr("data-hidden", "false").removeClass("mdui-drawer-body-left-active").attr("style", "");
        $(".mask-layer").stop().fadeOut(300);
      }

      return;
    },

    success(string) {
      this.$Notice.success({
        title: string,
        // desc: nodesc ? '' : 'Here is the notification description. Here is the notification description.'，
        duration: 1.8,
      })
    },

    mobileSuccess(string) {
      this.$Message.success(string)
    }
  },

  watch: {
    rippleWidth(val, oldVal) {
      $("body").attr("data-width", this.rippleWidth);
      // $(".nuxt-content").attr("data-width", this.rippleWidth).css("width", this.rippleWidth - (240 + 275.875));

      if (this.rippleWidth <= 980) {
        $("body").attr("data-hidden", "false");
      } else {
        $("body").attr("data-hidden", "true");
      }
    }

  }
}
</script>

<style lang="less" scoped>
.mdui-btn {
  color: white !important;
}
</style>
