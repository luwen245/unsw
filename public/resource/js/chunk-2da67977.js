(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2da67977"],{1276:function(t,e,n){"use strict";var i=n("d784"),s=n("44e7"),a=n("825a"),r=n("1d80"),c=n("4840"),o=n("8aa5"),l=n("50c4"),u=n("14c3"),f=n("9263"),v=n("d039"),d=[].push,h=Math.min,p=4294967295,g=!v((function(){return!RegExp(p,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(r(this)),a=void 0===n?p:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!s(t))return e.call(i,t,a);var c,o,l,u=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,v+"g");while(c=f.call(g,i)){if(o=g.lastIndex,o>h&&(u.push(i.slice(h,c.index)),c.length>1&&c.index<i.length&&d.apply(u,c.slice(1)),l=c[0].length,h=o,u.length>=a))break;g.lastIndex===c.index&&g.lastIndex++}return h===i.length?!l&&g.test("")||u.push(""):u.push(i.slice(h)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var s=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,s,n):i.call(String(s),e,n)},function(t,s){var r=n(i,t,this,s,i!==e);if(r.done)return r.value;var f=a(t),v=String(this),d=c(f,RegExp),b=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),C=new d(g?f:"^(?:"+f.source+")",m),_=void 0===s?p:s>>>0;if(0===_)return[];if(0===v.length)return null===u(C,v)?[v]:[];var x=0,y=0,w=[];while(y<v.length){C.lastIndex=g?y:0;var k,S=u(C,g?v:v.slice(y));if(null===S||(k=h(l(C.lastIndex+(g?0:y)),v.length))===x)y=o(v,y,b);else{if(w.push(v.slice(x,y)),w.length===_)return w;for(var A=1;A<=S.length-1;A++)if(w.push(S[A]),w.length===_)return w;y=x=k}}return w.push(v.slice(x)),w}]}),!g)},"164d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("HeaderBar",{attrs:{action:""}}),n("div",{staticClass:"main"},[n("CommonTitle",{attrs:{text:"FAQs"}}),n("div",{staticClass:"list"},[n("div",{staticClass:"tile"},[t._v("UNSW Sydney FAQs")]),t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"list_item"},[n("div",{staticClass:"content"},[n("div",{staticClass:"left"},[n("h2",[t._v("Pull up banner "+t._s(i+1))]),n("p",[t._v("15 05 2020")])]),n("div",{staticClass:"right"},[n("div",{staticClass:"icons"},[e.favorite?n("i",{staticClass:"iconfont iconshoucang1",on:{click:function(n){return t.unfavourites(e.id)}}}):n("i",{staticClass:"iconfont iconshoucang",on:{click:function(n){return t.favourites(e.id)}}})])])])])})),n("div",{staticClass:"more",on:{click:function(e){return t.go("/sydneyFaqs")}}},[t._m(0)])],2),n("div",{staticClass:"list"},[n("div",{staticClass:"tile"},[t._v("UNSW Global FAQs")]),t._l(t.globalList,(function(e,i){return n("div",{key:i,staticClass:"list_item"},[n("div",{staticClass:"content"},[n("div",{staticClass:"left"},[n("h2",[t._v("Pull up banner "+t._s(i+1))]),n("p",[t._v("15 05 2020")])]),n("div",{staticClass:"right"},[n("div",{staticClass:"icons"},[e.favorite?n("i",{staticClass:"iconfont iconshoucang1",on:{click:function(n){return t.unfavourites(e.id)}}}):n("i",{staticClass:"iconfont iconshoucang",on:{click:function(n){return t.favourites(e.id)}}})])])])])})),n("div",{staticClass:"more",on:{click:function(e){return t.go("/globalFaqs")}}},[t._m(1)])],2)],1),n("BottomNavbar")],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn"},[t._v("More "),n("i",{staticClass:"iconfont iconyoujiantou"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn"},[t._v("More "),n("i",{staticClass:"iconfont iconyoujiantou"})])}],a=(n("fb6a"),n("ac1f"),n("1276"),n("4662"),n("28a2")),r=(n("96cf"),n("1da1")),c=(n("e346"),n("ce0e")),o=n("95eb"),l=n("c5b0"),u={components:{HeaderBar:c["a"],BottomNavbar:o["a"],CommonTitle:l["a"]},data:function(){return{list:[],globalList:[]}},mounted:function(){this.fetchData(),console.log(1111,this.list)},methods:{fetchData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.post("category/detail",{name:"FAQs"});case 2:n=e.sent,t.list=n.list["UNSW Sydney FAQs"]&&n.list["UNSW Sydney FAQs"].slice(0,5),t.globalList=n.list["UNSW Global FAQs"]&&n.list["UNSW Global FAQs"].slice(0,5);case 5:case"end":return e.stop()}}),e)})))()},showImg:function(t){Object(a["a"])(t.split(","))},favourites:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.post("member/favourites",{content_id:t});case 2:e.fetchData();case 3:case"end":return n.stop()}}),n)})))()},unfavourites:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.post("member/unfavourites",{content_id:t});case 2:e.fetchData();case 3:case"end":return n.stop()}}),n)})))()},go:function(t){this.$router.push(t)}}},f=u,v=(n("63c6"),n("2877")),d=Object(v["a"])(f,i,s,!1,null,"75a12d98",null);e["default"]=d.exports},"44e7":function(t,e,n){var i=n("861d"),s=n("c6b6"),a=n("b622"),r=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},"63c6":function(t,e,n){"use strict";var i=n("9651"),s=n.n(i);s.a},9651:function(t,e,n){},b7b1:function(t,e,n){"use strict";var i=n("f2ea"),s=n.n(i);s.a},c5b0:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common_title"},[n("h1",[t._v("Digital Agent Hub")]),n("h2",[t._v(t._s(t.$t(t.text)))])])},s=[],a=(n("e346"),n("ce0e"),n("95eb"),{name:"commonTitle",props:{text:{type:String,default:"Text"}}}),r=a,c=(n("b7b1"),n("2877")),o=Object(c["a"])(r,i,s,!1,null,"4a19bbbf",null);e["a"]=o.exports},f2ea:function(t,e,n){},fb6a:function(t,e,n){"use strict";var i=n("23e7"),s=n("861d"),a=n("e8b5"),r=n("23cb"),c=n("50c4"),o=n("fc6a"),l=n("8418"),u=n("b622"),f=n("1dde"),v=n("ae40"),d=f("slice"),h=v("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),g=[].slice,b=Math.max;i({target:"Array",proto:!0,forced:!d||!h},{slice:function(t,e){var n,i,u,f=o(this),v=c(f.length),d=r(t,v),h=r(void 0===e?v:e,v);if(a(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?s(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(f,d,h);for(i=new(void 0===n?Array:n)(b(h-d,0)),u=0;d<h;d++,u++)d in f&&l(i,u,f[d]);return i.length=u,i}})}}]);