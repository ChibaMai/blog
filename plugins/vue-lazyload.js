import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fe.kaoyan365.cn%2F404%2Fimages%2FGIF.gif&refer=http%3A%2F%2Fe.kaoyan365.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg',
  loading: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01baa65902b3d9a801214550a7205f.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg',
  lazyComponent: true,
  throttleWait: 300
});

{/* <img v-lazy="https://www.w3school.com.cn/i/eg_tulip.jpg" > */}
