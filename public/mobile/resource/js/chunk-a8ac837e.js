(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8ac837e"],{2994:function(t,e,i){"use strict";i("68ef"),i("e3b3"),i("c0c2")},"2bdd":function(t,e,i){"use strict";var n=i("d282"),r=i("02de"),s=i("a8c1"),a=i("5fbe"),o=i("543e"),c=Object(n["a"])("list"),l=c[0],d=c[1],u=c[2];e["a"]=l({mixins:[Object(a["a"])((function(t){this.scroller||(this.scroller=Object(s["b"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,s=t.offset,a=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var o=e.bottom-e.top;if(!o||Object(r["a"])(i))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===a?e.top-l.top<=s:l.bottom-e.bottom<=s,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:d("loading"),key:"loading"},[this.slots("loading")||t(o["a"],{attrs:{size:"16"}},[this.loadingText||u("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:d("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:d("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:d("placeholder")});return t("div",{class:d(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},8053:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("HeaderBar",{attrs:{action:""}}),i("div",{staticClass:"main"},[t._m(0),i("div",{staticClass:"list"},[i("List",{attrs:{"immediate-check":!1,offset:20,finished:t.finished,"finished-text":t.$t("end"),"loading-text":t.$t("loading")},on:{load:t.loadList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"list_item",on:{click:function(i){return t.goDetail(e)}}},[i("h2",{staticClass:"header"},[t._v(t._s(e.address))]),i("div",{staticClass:"content"},[i("div",{staticClass:"left"},[i("div",{staticClass:"date"},[i("p",{staticClass:"small"},[t._v(t._s(e.week.slice(0,3)))]),i("h1",[t._v(t._s(e.day))]),i("h2",[t._v(t._s(e.month))])])]),i("div",{staticClass:"right"},[i("h1",[t._v(t._s(e.title.split(" ")[0]))]),i("h1",[t._v(t._s(e.title.split(" ")[1]))]),i("p",[t._v("Find Out more "),i("span",{staticClass:"icon"},[i("i",{staticClass:"iconfont iconyoujiantou"})])])])])])})),0)],1)]),i("BottomNavbar")],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h1",[t._v("Digital Agent Hub")]),i("h2",[t._v("Upcoming Events")])])}],s=(i("99af"),i("96cf"),i("1da1")),a=(i("2994"),i("2bdd")),o=(i("e346"),i("ce0e")),c=i("95eb"),l=(i("365c"),{components:{HeaderBar:o["a"],BottomNavbar:c["a"],List:a["a"]},data:function(){return{loading:!1,finished:!1,show:!1,list:[]}},mounted:function(){console.log(1111,this.list),this.loadList(!0)},methods:{loadList:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=t.length>0&&void 0!==t[0]&&t[0],console.log(0x6bf037ae325f1c00,"load"),n&&(e.loading=!0,e.list=[],e.page=-1,e.finished=!1),e.page+=1,i.next=6,e.$api.post("category/detail",{name:"Upcoming Events",page:e.page});case 6:if(r=i.sent,e.loading=!1,r.list.length){i.next=11;break}return e.finished=!0,i.abrupt("return");case 11:e.list=n?r.list:e.list.concat(r.list),console.log(e.list);case 13:case"end":return i.stop()}}),i)})))()},favourites:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$api.post("member/favourites",{content_id:t});case 2:e.loadList(!0);case 3:case"end":return i.stop()}}),i)})))()},unfavourites:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$api.post("member/unfavourites",{content_id:t});case 2:e.loadList(!0);case 3:case"end":return i.stop()}}),i)})))()},goDetail:function(t){sessionStorage.setItem("upcomingDetail",t.content),this.$router.push("/upcomingDetail")}}}),d=l,u=(i("e9e8"),i("2877")),h=Object(u["a"])(d,n,r,!1,null,"685ee271",null);e["default"]=h.exports},"99af":function(t,e,i){"use strict";var n=i("23e7"),r=i("d039"),s=i("e8b5"),a=i("861d"),o=i("7b0b"),c=i("50c4"),l=i("8418"),d=i("65f0"),u=i("1dde"),h=i("b622"),f=i("2d00"),g=h("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",m=f>=51||!r((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=u("concat"),x=function(t){if(!a(t))return!1;var e=t[g];return void 0!==e?!!e:s(t)},k=!m||!b;n({target:"Array",proto:!0,forced:k},{concat:function(t){var e,i,n,r,s,a=o(this),u=d(a,0),h=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?a:arguments[e],x(s)){if(r=c(s.length),h+r>p)throw TypeError(v);for(i=0;i<r;i++,h++)i in s&&l(u,h,s[i])}else{if(h>=p)throw TypeError(v);l(u,h++,s)}return u.length=h,u}})},c0c2:function(t,e,i){},e9e8:function(t,e,i){"use strict";var n=i("ed35"),r=i.n(n);r.a},ed35:function(t,e,i){}}]);