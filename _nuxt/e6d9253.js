(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{468:function(t,e,n){"use strict";n.r(e);var r=n(4),c=(n(31),{components:{Valine:n(141).default},name:"AboutMe",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("widget/AboutMe",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{ArticleMethodDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdui-container-fluid",attrs:{id:"body"}},[n("div",{staticClass:"article-method"},[n("div",{staticClass:"mdui-card mdui-hoverable"},[n("h1",[t._v(t._s(t.article.title))]),t._v(" "),n("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),n("div",{staticClass:"mdui-card mdui-hoverable vcomments"},[n("Valine")],1)]),t._v(" "),n("FloatingMenu")],1)}),[],!1,null,"10a4c4e0",null);e.default=component.exports;installComponents(component,{FloatingMenu:n(140).default})}}]);