(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5c6d26c"],{"0e9f":function(t,e,n){"use strict";var a=n("a2cc"),i=n.n(a);i.a},"3d00":function(t,e,n){},"73d4":function(t,e,n){"use strict";var a=n("3d00"),i=n.n(a);i.a},"95eb":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottomNavbar"},[n("router-link",{staticClass:"navbarItem",attrs:{to:"/myAccount"}},[n("i",{staticClass:"iconfont iconuser "}),n("p",[t._v("My Account")])]),n("router-link",{staticClass:"navbarItem",attrs:{to:"/upcoming"}},[n("i",{staticClass:"iconfont iconrili"}),n("p",[t._v("Upcoming Events")])]),n("router-link",{staticClass:"navbarItem",attrs:{to:"/entryRequirements"}},[n("i",{staticClass:"iconfont iconbianji1"}),n("p",[t._v("Entry Requirements")])]),n("router-link",{staticClass:"navbarItem",attrs:{to:"/howToApply"}},[n("i",{staticClass:"iconfont iconmenu1"}),n("p",[t._v("How to Apply")])])],1)},i=[],s={},c=s,o=(n("73d4"),n("2877")),r=Object(o["a"])(c,a,i,!1,null,"a45c8ac0",null);e["a"]=r.exports},a2cc:function(t,e,n){},c5b0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common_title",style:{backgroundColor:t.bg}},[n("h1",[t._v(t._s(t.$t(t.title)))]),n("h2",[t._v(t._s(t.$t(t.text)))])])},i=[],s=(n("e346"),n("ce0e"),n("95eb"),{name:"commonTitle",props:{title:{type:String,default:"Digital Agent Hub"},text:{type:String,default:"Text"},bg:{type:String,default:"#FFDC00"}}}),c=s,o=(n("0e9f"),n("2877")),r=Object(o["a"])(c,a,i,!1,null,"915e850e",null);e["a"]=r.exports},e346:function(t,e,n){"use strict";var a=n("5530"),i=n("2f62"),s={computed:Object(a["a"])({},Object(i["d"])(["language"])),methods:{ToggleLanguage:function(){"zh"===this.language?(this.$i18n.locale="en",this.$store.commit("setLanguage","en")):(this.$i18n.locale="zh",this.$store.commit("setLanguage","zh"))}}};e["a"]=s},e716:function(t,e,n){"use strict";var a=n("fa76"),i=n.n(a);i.a},fa76:function(t,e,n){},ffc5:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("div",{staticClass:"main"},[n("CommonTitle",{attrs:{text:"About UNSW Sydney's and  UNSW Global"}}),n("div",{staticClass:"container"},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}})])],1)])},i=[],s=(n("96cf"),n("1da1")),c=(n("e346"),n("c5b0")),o={components:{CommonTitle:c["a"]},data:function(){return{content:""}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.post("category/detail",{name:"About Us"});case 2:n=e.sent,t.content=n.content;case 4:case"end":return e.stop()}}),e)})))()}}},r=o,u=(n("e716"),n("2877")),l=Object(u["a"])(r,a,i,!1,null,"a52a84f4",null);e["default"]=l.exports}}]);