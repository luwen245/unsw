(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08e61dc8"],{1276:function(t,e,i){"use strict";var n=i("d784"),r=i("44e7"),s=i("825a"),a=i("1d80"),o=i("4840"),c=i("8aa5"),l=i("50c4"),u=i("14c3"),d=i("9263"),h=i("d039"),f=[].push,g=Math.min,p=4294967295,v=!h((function(){return!RegExp(p,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(a(this)),s=void 0===i?p:i>>>0;if(0===s)return[];if(void 0===t)return[n];if(!r(t))return e.call(n,t,s);var o,c,l,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,h+"g");while(o=d.call(v,n)){if(c=v.lastIndex,c>g&&(u.push(n.slice(g,o.index)),o.length>1&&o.index<n.length&&f.apply(u,o.slice(1)),l=o[0].length,g=c,u.length>=s))break;v.lastIndex===o.index&&v.lastIndex++}return g===n.length?!l&&v.test("")||u.push(""):u.push(n.slice(g)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var r=a(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,r,i):n.call(String(r),e,i)},function(t,r){var a=i(n,t,this,r,n!==e);if(a.done)return a.value;var d=s(t),h=String(this),f=o(d,RegExp),m=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),x=new f(v?d:"^(?:"+d.source+")",b),k=void 0===r?p:r>>>0;if(0===k)return[];if(0===h.length)return null===u(x,h)?[h]:[];var w=0,y=0,C=[];while(y<h.length){x.lastIndex=v?y:0;var T,$=u(x,v?h:h.slice(y));if(null===$||(T=g(l(x.lastIndex+(v?0:y)),h.length))===w)y=c(h,y,m);else{if(C.push(h.slice(w,y)),C.length===k)return C;for(var _=1;_<=$.length-1;_++)if(C.push($[_]),C.length===k)return C;y=w=T}}return C.push(h.slice(w)),C}]}),!v)},"23c5":function(t,e,i){"use strict";var n=i("458c"),r=i.n(n);r.a},"27de":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("HeaderBar",{attrs:{action:""}}),i("div",{staticClass:"main"},[i("CommonTitle",{attrs:{text:"Entry Requirements"}}),t._m(0),i("div",{staticClass:"list"},[i("List",{attrs:{"immediate-check":!1,offset:20,finished:t.finished,"finished-text":t.$t("end"),"loading-text":t.$t("loading")},on:{load:t.loadList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"list_item"},[i("h2",{staticClass:"header"},[t._v(t._s(e.title))]),i("div",{staticClass:"content"},[i("div",{staticClass:"left"},[i("p",[t._v(t._s(e.publishtime))])]),i("div",{staticClass:"right"},[i("div",{staticClass:"icons"},[i("i",{staticClass:"iconfont iconyanjing",on:{click:function(i){return t.showImg(e.images)}}}),i("a",{staticStyle:{color:"black"},attrs:{href:e.document}},[i("i",{staticClass:"iconfont iconxiazai"})]),e.favorite?i("i",{staticClass:"iconfont iconshoucang1",on:{click:function(i){return t.unfavourites(e.id)}}}):i("i",{staticClass:"iconfont iconshoucang",on:{click:function(i){return t.favourites(e.id)}}})])])])])})),0)],1)],1),i("BottomNavbar")],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("img",{attrs:{src:i("eb22"),alt:""}})])}],s=(i("99af"),i("ac1f"),i("1276"),i("96cf"),i("1da1")),a=(i("4662"),i("28a2")),o=(i("2994"),i("2bdd")),c=i("ce0e"),l=i("95eb"),u=i("c5b0"),d={components:{HeaderBar:c["a"],BottomNavbar:l["a"],CommonTitle:u["a"],List:o["a"]},data:function(){return{loading:!1,finished:!1,show:!1,imgList:[],list:[],page:-1}},methods:{showImg:function(t){Object(a["a"])(t.split(","))},loadList:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=t.length>0&&void 0!==t[0]&&t[0],console.log(0x6bf037ae325f1c00,"load"),n&&(e.loading=!0,e.list=[],e.page=-1,e.finished=!1),e.page+=1,i.next=6,e.$api.post("category/detail",{name:"FAQs",page:e.page});case 6:if(r=i.sent,e.loading=!1,r.list["UNSW Sydney FAQs"].length){i.next=11;break}return e.finished=!0,i.abrupt("return");case 11:e.list=n?r.list["UNSW Sydney FAQs"]:e.list.concat(r.list["UNSW Sydney FAQs"]),console.log(e.list);case 13:case"end":return i.stop()}}),i)})))()},favourites:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$api.post("member/favourites",{content_id:t});case 2:e.loadList(!0);case 3:case"end":return i.stop()}}),i)})))()},unfavourites:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$api.post("member/unfavourites",{content_id:t});case 2:e.loadList(!0);case 3:case"end":return i.stop()}}),i)})))()}},created:function(){this.loadList(!0)}},h=d,f=(i("23c5"),i("2877")),g=Object(f["a"])(h,n,r,!1,null,"0edc47f7",null);e["default"]=g.exports},2994:function(t,e,i){"use strict";i("68ef"),i("e3b3"),i("c0c2")},"2bdd":function(t,e,i){"use strict";var n=i("d282"),r=i("02de"),s=i("a8c1"),a=i("5fbe"),o=i("543e"),c=Object(n["a"])("list"),l=c[0],u=c[1],d=c[2];e["a"]=l({mixins:[Object(a["a"])((function(t){this.scroller||(this.scroller=Object(s["b"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,s=t.offset,a=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var o=e.bottom-e.top;if(!o||Object(r["a"])(i))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===a?e.top-l.top<=s:l.bottom-e.bottom<=s,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:u("loading"),key:"loading"},[this.slots("loading")||t(o["a"],{attrs:{size:"16"}},[this.loadingText||d("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:u("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:u("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:u("placeholder")});return t("div",{class:u(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},"44e7":function(t,e,i){var n=i("861d"),r=i("c6b6"),s=i("b622"),a=s("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},"458c":function(t,e,i){},"99af":function(t,e,i){"use strict";var n=i("23e7"),r=i("d039"),s=i("e8b5"),a=i("861d"),o=i("7b0b"),c=i("50c4"),l=i("8418"),u=i("65f0"),d=i("1dde"),h=i("b622"),f=i("2d00"),g=h("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",m=f>=51||!r((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=d("concat"),x=function(t){if(!a(t))return!1;var e=t[g];return void 0!==e?!!e:s(t)},k=!m||!b;n({target:"Array",proto:!0,forced:k},{concat:function(t){var e,i,n,r,s,a=o(this),d=u(a,0),h=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?a:arguments[e],x(s)){if(r=c(s.length),h+r>p)throw TypeError(v);for(i=0;i<r;i++,h++)i in s&&l(d,h,s[i])}else{if(h>=p)throw TypeError(v);l(d,h++,s)}return d.length=h,d}})},b7b1:function(t,e,i){"use strict";var n=i("f2ea"),r=i.n(n);r.a},c0c2:function(t,e,i){},c5b0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"common_title"},[i("h1",[t._v("Digital Agent Hub")]),i("h2",[t._v(t._s(t.$t(t.text)))])])},r=[],s=(i("e346"),i("ce0e"),i("95eb"),{name:"commonTitle",props:{text:{type:String,default:"Text"}}}),a=s,o=(i("b7b1"),i("2877")),c=Object(o["a"])(a,n,r,!1,null,"4a19bbbf",null);e["a"]=c.exports},eb22:function(t,e,i){t.exports=i.p+"resource/img/Path85.png"},f2ea:function(t,e,i){}}]);