(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e40f288"],{"116e":function(t,e,n){t.exports=n.p+"webResource/img/applybg.png"},3640:function(t,e,n){"use strict";var a=n("cba8"),i=n.n(a);i.a},"3d00":function(t,e,n){},"73d4":function(t,e,n){"use strict";var a=n("3d00"),i=n.n(a);i.a},"834c":function(t,e,n){},"94c8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("CommonTitle",{attrs:{text:"Quick Links"}}),n("div",{staticClass:"container"},[n("div",{domProps:{innerHTML:t._s(t.detail)}}),t._m(0)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("img",{attrs:{src:n("116e"),alt:""}})])}],s=(n("96cf"),n("1da1")),c=(n("e346"),n("ce0e")),r=n("95eb"),o=n("c5b0"),u={components:{HeaderBar:c["a"],BottomNavbar:r["a"],CommonTitle:o["a"]},data:function(){return{detail:""}},methods:{getDetail:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.post("category/detail",{name:"Quick Links"});case 2:n=e.sent,t.detail=n.content;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.getDetail()}},l=u,m=(n("3640"),n("2877")),f=Object(m["a"])(l,a,i,!1,null,"13fe5c24",null);e["default"]=f.exports},"95eb":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottomNavbar"},[n("router-link",{staticClass:"navbarItem",attrs:{to:"/myAccount"}},[n("i",{staticClass:"iconfont iconuser "}),n("p",[t._v("My Account")])]),n("router-link",{staticClass:"navbarItem",attrs:{to:"/upcoming"}},[n("i",{staticClass:"iconfont iconrili"}),n("p",[t._v("Upcoming Events")])]),n("router-link",{staticClass:"navbarItem",attrs:{to:"/entryRequirements"}},[n("i",{staticClass:"iconfont iconbianji1"}),n("p",[t._v("Entry Requirements")])]),n("router-link",{staticClass:"navbarItem",attrs:{to:"/howToApply"}},[n("i",{staticClass:"iconfont iconmenu1"}),n("p",[t._v("How to Apply")])])],1)},i=[],s={},c=s,r=(n("73d4"),n("2877")),o=Object(r["a"])(c,a,i,!1,null,"a45c8ac0",null);e["a"]=o.exports},c5b0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common_title",style:{background:t.bg}},[n("h1",[t._v(t._s(t.$t(t.title)))]),n("h2",[t._v(t._s(t.$t(t.text)))])])},i=[],s=(n("e346"),n("ce0e"),n("95eb"),{name:"commonTitle",props:{title:{type:String,default:"Digital Agent Hub"},text:{type:String,default:"Text"},bg:{type:String,default:"#FFDC00"}}}),c=s,r=(n("f524"),n("2877")),o=Object(r["a"])(c,a,i,!1,null,"3bdd57bf",null);e["a"]=o.exports},cba8:function(t,e,n){},e346:function(t,e,n){"use strict";var a=n("5530"),i=n("2f62"),s={computed:Object(a["a"])({},Object(i["d"])(["language"])),methods:{ToggleLanguage:function(){"zh"===this.language?(this.$i18n.locale="en",this.$store.commit("setLanguage","en")):(this.$i18n.locale="zh",this.$store.commit("setLanguage","zh"))}}};e["a"]=s},f524:function(t,e,n){"use strict";var a=n("834c"),i=n.n(a);i.a}}]);