(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-490c7ef6"],{"73b5":function(t,e,i){"use strict";var n=i("b3f6"),s=i.n(n);s.a},"9c83":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("HeaderBar",{attrs:{action:""}}),i("div",{staticClass:"main"},[i("CommonTitle",{attrs:{text:"Marketing Videos"}}),i("div",{staticClass:"list"},[i("List",{attrs:{"immediate-check":!1,offset:20,finished:t.finished,"finished-text":t.$t("END"),"loading-text":t.$t("loading")},on:{load:t.loadList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("div",{staticClass:"grid"},[i("Grid",{attrs:{"column-num":"2"}},t._l(t.list,(function(e,n){return i("gridItem",{key:n},[i("div",{staticClass:"container"},[i("div",{staticClass:"video_container"},[i("div",{staticClass:"play"},[i("i",{staticClass:"iconfont iconbofang",on:{click:function(e){return t.playVideo(n)}}})]),i("video",{attrs:{id:"video"+n,src:e.document,poster:e.image}}),i("div",{staticClass:"icons"},[i("i",{class:"iconfont iconfenxiang3 copy"+n,on:{click:function(i){return t.copy(e,n)}}}),i("a",{staticStyle:{color:"black"},attrs:{href:e.document}},[i("i",{staticClass:"iconfont iconxiazai"})]),e.favorite?i("i",{staticClass:"iconfont iconshoucang1",on:{click:function(i){return t.unfavourites(e.id)}}}):i("i",{staticClass:"iconfont iconshoucang",on:{click:function(i){return t.favourites(e.id)}}})])]),i("div",{staticClass:"text"},[i("h2",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.publishtime))])])])])})),1)],1)])],1)],1),i("BottomNavbar"),i("Dialog",{attrs:{title:"长按保存图片"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("div",{staticClass:"thumb"},[i("img",{attrs:{src:t.currentUrl,alt:""}})])])],1)},s=[],a=(i("99af"),i("96cf"),i("1da1")),o=(i("2994"),i("2bdd")),r=(i("e7e5"),i("d399")),c=(i("e17f"),i("2241")),l=(i("0ec5"),i("21ab")),u=(i("3df5"),i("2830")),d=(i("e346"),i("ce0e")),f=i("95eb"),h=i("c5b0"),v=i("b311"),m=i.n(v),p={components:{HeaderBar:d["a"],BottomNavbar:f["a"],Grid:u["a"],gridItem:l["a"],CommonTitle:h["a"],Dialog:c["a"].Component,Toast:r["a"],List:o["a"]},data:function(){return{loading:!1,finished:!1,page:-1,show:!1,video:{},list:[],currentUrl:""}},mounted:function(){this.loadList(!0)},methods:{toggleDialog:function(t){this.currentUrl=t.url,this.show=!this.show},loadList:function(){var t=arguments,e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var n,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=t.length>0&&void 0!==t[0]&&t[0],n&&(e.loading=!0,e.list=[],e.page=-1,e.finished=!1),e.page+=1,i.next=5,e.$api.post("category/sub",{title:"MarketingVideos",page:e.page});case 5:if(s=i.sent,e.loading=!1,s.list.length){i.next=10;break}return e.finished=!0,i.abrupt("return");case 10:e.list=n?s.list:e.list.concat(s.list),console.log(e.list);case 12:case"end":return i.stop()}}),i)})))()},favourites:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$api.post("member/favourites",{content_id:t});case 2:e.loadList(!0);case 3:case"end":return i.stop()}}),i)})))()},unfavourites:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$api.post("member/unfavourites",{content_id:t});case 2:e.loadList(!0);case 3:case"end":return i.stop()}}),i)})))()},copy:function(t,e){new m.a(".copy"+e,{text:function(e){return r["a"].success("复制成功"),t.url}})},playVideo:function(t){this.video=document.getElementById("video"+t),console.log(222,this.video.paused),this.video.paused?(this.video.play(),this.fullScreen()):this.video.pause()},fullScreen:function(){this.video.requestFullScreen?this.video.requestFullScreen():this.video.webkitRequestFullScreen?this.video.webkitRequestFullScreen():this.video.mozRequestFullScreen?this.video.mozRequestFullScreen():this.video.msRequestFullScreen&&this.video.msRequestFullScreen()}}},g=p,b=(i("73b5"),i("2877")),w=Object(b["a"])(g,n,s,!1,null,"02907a0f",null);e["default"]=w.exports},b3f6:function(t,e,i){}}]);