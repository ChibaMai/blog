(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{301:function(t,e,n){},302:function(t,e,n){"use strict";n(301)},320:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(34),n(138)),o={data:function(){return{}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).only(["title","author","path","slug","tags","body"]).sortBy("createdAt","desc").fetch();case 3:return c=e.sent,console.log(c),e.abrupt("return",{articles:c});case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{},watch:{},components:{FloatingMenu:n(137).default,Valine:c.default}},d=(n(302),n(2)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdui-container-fluid",attrs:{id:"body"}},[n("div",{staticClass:"article-method"},[n("div",{},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"mdui-card mdui-hoverable vcomments"},[n("div",{staticClass:"mdui-card-primary"},[n("div",{staticClass:"mdui-card-primary-title"},[n("router-link",{attrs:{to:article.path}},[t._v(t._s(article.title))])],1),t._v(" "),n("div",{staticClass:"mdui-card-primary-subtitle"},[t._v(t._s(article.author))])]),t._v(" "),n("div",{staticClass:"mdui-card-content"},[n("nuxt-content",{attrs:{document:article}})],1),t._v(" "),n("div",{staticClass:"mdui-card-actions"},[n("span",{staticClass:"tags"},t._l(article.tags,(function(e,r){return n("a",{key:r,attrs:{"data-ripple":"ripple"}},[t._v(t._s(e))])})),0),t._v(" "),n("button",{staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-btn-icon ",attrs:{"data-ripple":"ripple"}},[n("Icon",{attrs:{type:"ios-arrow-down"}})],1)])])})),0),t._v(" "),n("div",{staticClass:"mdui-card mdui-hoverable vcomments"},[n("Valine")],1)]),t._v(" "),n("FloatingMenu")],1)}),[],!1,null,"8f4b0b12",null);e.default=component.exports;installComponents(component,{FloatingMenu:n(137).default})}}]);