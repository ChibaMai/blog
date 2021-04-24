export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '千叶 Blog - 分享互联网的宝藏',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { name: 'keywords', content: '千叶麻衣,千叶,麻衣,语心,技术博客,免费软件分享,aftersoil,aftersoil-blog,wiki,' },
      { hid: 'description', name: 'description', content: '本站是一个牛皮的技术博客。记录生活中遇到的问题，以及经验总结和分享！' },
      { name: 'google-site-verification', content: 'aAQV8IgxP5WQiAuShum5fEQxY5S98Q8JSZoJe3kmwyY' },
      { name: 'baidu-site-verification', content: 'code-SVyZBBxyAv' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/normalize.min.css@8.0.1/normalize.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/pace-js@1.2.4/pace-theme-default.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css' },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js' },
      // { src: 'https://cdn.jsdelivr.net/npm/pace-js@1.2.4/pace.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/aftersoil_rippler@1.3.0/rippler.js' },
      // fontawesome
      // { src: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/js/brands.min.js' },
      // { src: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/js/solid.min.js' },
      // { src: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/js/fontawesome.min.js' },
      // fancybox
      { src: 'https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js' },
      // { src: 'https://cdn.jsdelivr.net/npm/jquery-lazyload@1.9.7/jquery.lazyload.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/valine@1.4.14/dist/Valine.min.js' },
      { src: 'https://www.jq22.com/demo/jsloading-141022114841/js/echo.min.js' },
    ]
  },

  loading: {
    color: "#ff4081",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/less/index.less'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/iview', ssr: true },
    { src: '~/plugins/vue-lazyload', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'zh'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    vendor: ['vue-lazyload']
  },

  styleResources:{
    less:[
      './assets/less/variable.less',
    ]
  },

  // pwa
  manifest: {
    name: "千叶 Blog - 分享互联网的宝藏",
    short_name: "千叶 Blog",
    description: "本站是一个牛皮的技术博客。记录生活中遇到的问题，以及经验总结和分享！",
    background_color: "#c2185b",
    theme_color: "#c2185b",
    lang: "zh",
    start_url: "/",
  },

  render: {
    resourceHints: false
  },

  server: {
    // host: '0.0.0.0'
    host: '0.0.0.0',
    port: 443
  }
}
