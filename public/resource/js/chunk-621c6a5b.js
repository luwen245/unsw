(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-621c6a5b"],{1276:function(t,e,i){"use strict";var n=i("d784"),r=i("44e7"),a=i("825a"),s=i("1d80"),o=i("4840"),c=i("8aa5"),l=i("50c4"),u=i("14c3"),d=i("9263"),h=i("d039"),f=[].push,g=Math.min,m=4294967295,p=!h((function(){return!RegExp(m,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(s(this)),a=void 0===i?m:i>>>0;if(0===a)return[];if(void 0===t)return[n];if(!r(t))return e.call(n,t,a);var o,c,l,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,p=new RegExp(t.source,h+"g");while(o=d.call(p,n)){if(c=p.lastIndex,c>g&&(u.push(n.slice(g,o.index)),o.length>1&&o.index<n.length&&f.apply(u,o.slice(1)),l=o[0].length,g=c,u.length>=a))break;p.lastIndex===o.index&&p.lastIndex++}return g===n.length?!l&&p.test("")||u.push(""):u.push(n.slice(g)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var r=s(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,i):n.call(String(r),e,i)},function(t,r){var s=i(n,t,this,r,n!==e);if(s.done)return s.value;var d=a(t),h=String(this),f=o(d,RegExp),v=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"y":"g"),x=new f(p?d:"^(?:"+d.source+")",b),k=void 0===r?m:r>>>0;if(0===k)return[];if(0===h.length)return null===u(x,h)?[h]:[];var w=0,C=0,_=[];while(C<h.length){x.lastIndex=p?C:0;var T,$=u(x,p?h:h.slice(C));if(null===$||(T=g(l(x.lastIndex+(p?0:C)),h.length))===w)C=c(h,C,v);else{if(_.push(h.slice(w,C)),_.length===k)return _;for(var y=1;y<=$.length-1;y++)if(_.push($[y]),_.length===k)return _;C=w=T}}return _.push(h.slice(w)),_}]}),!p)},"1da8":function(t,e,i){"use strict";var n=i("7a6c"),r=i.n(n);r.a},2994:function(t,e,i){"use strict";i("68ef"),i("e3b3"),i("c0c2")},"2bdd":function(t,e,i){"use strict";var n=i("d282"),r=i("02de"),a=i("a8c1"),s=i("5fbe"),o=i("543e"),c=Object(n["a"])("list"),l=c[0],u=c[1],d=c[2];e["a"]=l({mixins:[Object(s["a"])((function(t){this.scroller||(this.scroller=Object(a["b"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,a=t.offset,s=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var o=e.bottom-e.top;if(!o||Object(r["a"])(i))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===s?e.top-l.top<=a:l.bottom-e.bottom<=a,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:u("loading"),key:"loading"},[this.slots("loading")||t(o["a"],{attrs:{size:"16"}},[this.loadingText||d("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:u("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:u("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:u("placeholder")});return t("div",{class:u(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},"44e7":function(t,e,i){var n=i("861d"),r=i("c6b6"),a=i("b622"),s=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},"7a6c":function(t,e,i){},"99af":function(t,e,i){"use strict";var n=i("23e7"),r=i("d039"),a=i("e8b5"),s=i("861d"),o=i("7b0b"),c=i("50c4"),l=i("8418"),u=i("65f0"),d=i("1dde"),h=i("b622"),f=i("2d00"),g=h("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",v=f>=51||!r((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=d("concat"),x=function(t){if(!s(t))return!1;var e=t[g];return void 0!==e?!!e:a(t)},k=!v||!b;n({target:"Array",proto:!0,forced:k},{concat:function(t){var e,i,n,r,a,s=o(this),d=u(s,0),h=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?s:arguments[e],x(a)){if(r=c(a.length),h+r>m)throw TypeError(p);for(i=0;i<r;i++,h++)i in a&&l(d,h,a[i])}else{if(h>=m)throw TypeError(p);l(d,h++,a)}return d.length=h,d}})},b7b1:function(t,e,i){"use strict";var n=i("f2ea"),r=i.n(n);r.a},c0c2:function(t,e,i){},c5b0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"common_title"},[i("h1",[t._v("Digital Agent Hub")]),i("h2",[t._v(t._s(t.$t(t.text)))])])},r=[],a=(i("e346"),i("ce0e"),i("95eb"),{name:"commonTitle",props:{text:{type:String,default:"Text"}}}),s=a,o=(i("b7b1"),i("2877")),c=Object(o["a"])(s,n,r,!1,null,"4a19bbbf",null);e["a"]=c.exports},f2ea:function(t,e,i){},f74f:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("HeaderBar",{attrs:{action:""}}),i("div",{staticClass:"main"},[i("CommonTitle",{attrs:{text:"Scholarships"}}),t._m(0),i("div",{staticClass:"list"},[i("h2",{staticClass:"list_title"},[t._v("Available Scholarships")]),i("List",{attrs:{"immediate-check":!1,offset:20,finished:t.finished,"finished-text":t.$t("END"),"loading-text":t.$t("loading")},on:{load:t.loadList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"list_item"},[i("div",{staticClass:"content"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:e.image,alt:""}})]),i("div",{staticClass:"center"},[i("h2",[t._v(t._s(e.title))]),i("h3",[t._v(t._s(e.publishtime))]),i("p",[t._v(t._s(e.content))])]),i("div",{staticClass:"right"},[i("div",{staticClass:"icons"},[i("i",{staticClass:"iconfont iconyanjing",on:{click:function(i){return t.showImg(e.images)}}}),i("a",{staticStyle:{color:"black"},attrs:{href:e.document}},[i("i",{staticClass:"iconfont iconxiazai"})]),e.favorite?i("i",{staticClass:"iconfont iconshoucang1",on:{click:function(i){return t.unfavourites(e.id)}}}):i("i",{staticClass:"iconfont iconshoucang",on:{click:function(i){return t.favourites(e.id)}}})])])])])})),0)],1)],1),i("BottomNavbar")],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"desc"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris no lo so tiquelo nisi ut aliquip ex ea commodo consequat.")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris no lo so tiquelo nisi ut aliquip ex ea commodo consequat.")])])}],a=(i("99af"),i("ac1f"),i("1276"),i("4662"),i("28a2")),s=(i("96cf"),i("1da1")),o=(i("2994"),i("2bdd")),c=(i("e346"),i("ce0e")),l=i("95eb"),u=i("c5b0"),d={components:{HeaderBar:c["a"],BottomNavbar:l["a"],CommonTitle:u["a"],List:o["a"]},data:function(){return{loading:!1,finished:!1,page:-1,list:[]}},mounted:function(){console.log(1111,this.list),this.loadList(!0)},methods:{loadList:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=t.length>0&&void 0!==t[0]&&t[0],n&&(e.loading=!0,e.list=[],e.page=-1,e.finished=!1),e.page+=1,i.next=5,e.$api.post("category/detail",{name:"Scholarships",page:e.page});case 5:if(r=i.sent,e.loading=!1,r.list.length){i.next=10;break}return e.finished=!0,i.abrupt("return");case 10:e.list=n?r.list:e.list.concat(r.list),console.log(e.list);case 12:case"end":return i.stop()}}),i)})))()},showImg:function(t){Object(a["a"])(t.split(","))},favourites:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$api.post("member/favourites",{content_id:t});case 2:e.loadList(!0);case 3:case"end":return i.stop()}}),i)})))()},unfavourites:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$api.post("member/unfavourites",{content_id:t});case 2:e.loadList(!0);case 3:case"end":return i.stop()}}),i)})))()}}},h=d,f=(i("1da8"),i("2877")),g=Object(f["a"])(h,n,r,!1,null,"7ce2dc06",null);e["default"]=g.exports}}]);