(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-705a21d8"],{"1a04":function(t,e,n){},"1f2f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my_account"},[n("CommonTitle",{attrs:{text:"My Account"}}),n("div",{staticClass:"container"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"collapse"},[n("Collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("CollapseItem",{attrs:{title:"My Personal Detail",name:1}},[n("div",{staticClass:"list"},[n("div",{staticClass:"list_item"},[t._v("Full name: "+t._s(t.user.full_name))]),n("div",{staticClass:"list_item"},[t._v("Email address: "+t._s(t.user.email))]),n("div",{staticClass:"list_item"},[t._v("Country: "+t._s(t.user.country))]),n("div",{staticClass:"list_item"},[t._v("Company: "+t._s(t.user.company_name))])]),n("div",{staticClass:"btns"},[n("Button",{attrs:{type:"primary",block:""},on:{click:function(e){return t.go("/resetPassword")}}},[t._v("Change password")])],1)])],1)],1)]),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"actions"},[n("div",{staticClass:"action_item",on:{click:function(e){return t.go("/myDownloads")}}},[n("i",{staticClass:"iconfont iconxiazai"}),n("p",[t._v("My downloads")])]),n("div",{staticClass:"action_item",on:{click:function(e){return t.go("/favourite")}}},[n("i",{staticClass:"iconfont iconshoucang"}),n("p",[t._v("My favourite")])])])])],1)],1)],1)},a=[],s=(n("ac1f"),n("5319"),n("96cf"),n("1da1")),r=n("5530"),o=(n("68ef"),n("9d70"),n("3743"),n("1a04"),n("bff0"),n("c31d")),c=n("d282"),l=n("a142"),u=n("4598"),d=n("9884"),f=n("7744"),b=n("dfaf"),v=Object(c["a"])("collapse-item"),h=v[0],p=v[1],m=["title","icon","right-icon"],g=h({mixins:[Object(d["a"])("vanCollapse")],props:Object(o["a"])(Object(o["a"])({},b["a"]),{},{name:[Number,String],disabled:Boolean,isLink:{type:Boolean,default:!0}}),data:function(){return{show:null,inited:null}},computed:{currentName:function(){return Object(l["b"])(this.name)?this.name:this.index},expanded:function(){var t=this;if(!this.parent)return null;var e=this.parent,n=e.value,i=e.accordion;return i?n===this.currentName:n.some((function(e){return e===t.currentName}))}},created:function(){this.show=this.expanded,this.inited=this.expanded},watch:{expanded:function(t,e){var n=this;if(null!==e){t&&(this.show=!0,this.inited=!0);var i=t?this.$nextTick:u["b"];i((function(){var e=n.$refs,i=e.content,a=e.wrapper;if(i&&a){var s=i.offsetHeight;if(s){var r=s+"px";a.style.height=t?0:r,Object(u["a"])((function(){a.style.height=t?r:0}))}else n.onTransitionEnd()}}))}}},methods:{onClick:function(){if(!this.disabled){var t=this.parent,e=this.currentName,n=t.accordion&&e===t.value,i=n?"":e;t.switch(i,!this.expanded)}},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height="":this.show=!1},genTitle:function(){var t=this,e=this.$createElement,n=this.disabled,i=this.expanded,a=m.reduce((function(e,n){return t.slots(n)&&(e[n]=function(){return t.slots(n)}),e}),{});return this.slots("value")&&(a.default=function(){return t.slots("value")}),e(f["a"],{attrs:{role:"button",tabindex:n?-1:0,"aria-expanded":String(i)},class:p("title",{disabled:n,expanded:i}),on:{click:this.onClick},scopedSlots:a,props:Object(o["a"])({},this.$props)})},genContent:function(){var t=this.$createElement;if(this.inited)return t("div",{directives:[{name:"show",value:this.show}],ref:"wrapper",class:p("wrapper"),on:{transitionend:this.onTransitionEnd}},[t("div",{ref:"content",class:p("content")},[this.slots()])])}},render:function(){var t=arguments[0];return t("div",{class:[p({border:this.index})]},[this.genTitle(),this.genContent()])}}),C=n("b1d2"),_=Object(c["a"])("collapse"),w=_[0],x=_[1],y=w({mixins:[Object(d["b"])("vanCollapse")],props:{accordion:Boolean,value:[String,Number,Array],border:{type:Boolean,default:!0}},methods:{switch:function(t,e){this.accordion||(t=e?this.value.concat(t):this.value.filter((function(e){return e!==t}))),this.$emit("change",t),this.$emit("input",t)}},render:function(){var t,e=arguments[0];return e("div",{class:[x(),(t={},t[C["e"]]=this.border,t)]},[this.slots()])}}),j=(n("66b9"),n("b650")),O=n("ce0e"),k=n("95eb"),$=n("c5b0"),S=n("2f62"),N={components:{HeaderBar:O["a"],BottomNavbar:k["a"],Button:j["a"],Collapse:y,CollapseItem:g,CommonTitle:$["a"]},data:function(){return{activeNames:[1],list:[]}},computed:Object(r["a"])({},Object(S["c"])(["user"])),mounted:function(){console.log(1111,this.list)},methods:Object(r["a"])(Object(r["a"])({},Object(S["b"])(["logout"])),{},{go:function(t){this.$router.push(t)},userLogout:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.logout();case 2:n=e.sent,console.log(77777,n),t.$router.replace("/login");case 5:case"end":return e.stop()}}),e)})))()}})},B=N,T=(n("2e57"),n("81f2"),n("2877")),E=Object(T["a"])(B,i,a,!1,null,"fd770d36",null);e["default"]=E.exports},"2e57":function(t,e,n){"use strict";var i=n("aa0d"),a=n.n(i);a.a},"3d00":function(t,e,n){},"66b9":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("e3b3"),n("bc1b")},"73d4":function(t,e,n){"use strict";var i=n("3d00"),a=n.n(i);a.a},7744:function(t,e,n){"use strict";var i=n("c31d"),a=n("2638"),s=n.n(a),r=n("d282"),o=n("a142"),c=n("ba31"),l=n("48f4"),u=n("dfaf"),d=n("ad06"),f=Object(r["a"])("cell"),b=f[0],v=f[1];function h(t,e,n,i){var a=e.icon,r=e.size,u=e.title,f=e.label,b=e.value,h=e.isLink,p=n.title||Object(o["b"])(u);function m(){var i=n.label||Object(o["b"])(f);if(i)return t("div",{class:[v("label"),e.labelClass]},[n.label?n.label():f])}function g(){if(p)return t("div",{class:[v("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():t("span",[u]),m()])}function C(){var i=n.default||Object(o["b"])(b);if(i)return t("div",{class:[v("value",{alone:!p}),e.valueClass]},[n.default?n.default():t("span",[b])])}function _(){return n.icon?n.icon():a?t(d["a"],{class:v("left-icon"),attrs:{name:a,classPrefix:e.iconPrefix}}):void 0}function w(){var i=n["right-icon"];if(i)return i();if(h){var a=e.arrowDirection;return t(d["a"],{class:v("right-icon"),attrs:{name:a?"arrow-"+a:"arrow"}})}}function x(t){Object(c["a"])(i,"click",t),Object(l["a"])(i)}var y=h||e.clickable,j={clickable:y,center:e.center,required:e.required,borderless:!e.border};return r&&(j[r]=r),t("div",s()([{class:v(j),attrs:{role:y?"button":null,tabindex:y?0:null},on:{click:x}},Object(c["b"])(i)]),[_(),g(),C(),w(),null==n.extra?void 0:n.extra()])}h.props=Object(i["a"])(Object(i["a"])({},u["a"]),l["c"]),e["a"]=b(h)},"81f2":function(t,e,n){"use strict";var i=n("aa26"),a=n.n(i);a.a},"834c":function(t,e,n){},"95eb":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottomNavbar"},[n("router-link",{staticClass:"navbarItem",attrs:{to:"/myAccount"}},[n("i",{staticClass:"iconfont iconuser "}),n("p",[t._v("My Account")])]),n("router-link",{staticClass:"navbarItem",attrs:{to:"/upcoming"}},[n("i",{staticClass:"iconfont iconrili"}),n("p",[t._v("Upcoming Events")])]),n("router-link",{staticClass:"navbarItem",attrs:{to:"/entryRequirements"}},[n("i",{staticClass:"iconfont iconbianji1"}),n("p",[t._v("Entry Requirements")])]),n("router-link",{staticClass:"navbarItem",attrs:{to:"/howToApply"}},[n("i",{staticClass:"iconfont iconmenu1"}),n("p",[t._v("How to Apply")])])],1)},a=[],s={},r=s,o=(n("73d4"),n("2877")),c=Object(o["a"])(r,i,a,!1,null,"a45c8ac0",null);e["a"]=c.exports},aa0d:function(t,e,n){},aa26:function(t,e,n){},bff0:function(t,e,n){},c5b0:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common_title",style:{background:t.bg}},[n("h1",[t._v(t._s(t.$t(t.title)))]),n("h2",[t._v(t._s(t.$t(t.text)))])])},a=[],s=(n("e346"),n("ce0e"),n("95eb"),{name:"commonTitle",props:{title:{type:String,default:"Digital Agent Hub"},text:{type:String,default:"Text"},bg:{type:String,default:"#FFDC00"}}}),r=s,o=(n("f524"),n("2877")),c=Object(o["a"])(r,i,a,!1,null,"3bdd57bf",null);e["a"]=c.exports},dfaf:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},e346:function(t,e,n){"use strict";var i=n("5530"),a=n("2f62"),s={computed:Object(i["a"])({},Object(a["d"])(["language"])),methods:{ToggleLanguage:function(){"zh"===this.language?(this.$i18n.locale="en",this.$store.commit("setLanguage","en")):(this.$i18n.locale="zh",this.$store.commit("setLanguage","zh"))}}};e["a"]=s},f524:function(t,e,n){"use strict";var i=n("834c"),a=n.n(i);a.a}}]);