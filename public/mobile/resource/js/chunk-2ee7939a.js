(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ee7939a"],{8689:function(e,t,i){},"9c83":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"index"},[i("HeaderBar",{attrs:{action:""}}),i("div",{staticClass:"main"},[i("CommonTitle",{attrs:{text:"Marketing Videos"}}),i("div",{staticClass:"list"},[i("div",{staticClass:"grid"},[i("Grid",{attrs:{"column-num":"2"}},e._l(e.list,(function(t,n){return i("gridItem",{key:n},[i("div",{staticClass:"container"},[i("div",{staticClass:"video_container"},[i("div",{staticClass:"play"},[i("i",{staticClass:"iconfont iconbofang",on:{click:function(t){return e.playVideo(n)}}})]),i("video",{attrs:{id:"video"+n,src:t.document,poster:t.image}}),i("div",{staticClass:"icons"},[i("i",{class:"iconfont iconfenxiang3 copy"+n,on:{click:function(i){return e.copy(t,n)}}}),i("a",{staticStyle:{color:"black"},attrs:{href:t.document}},[i("i",{staticClass:"iconfont iconxiazai"})]),t.favorite?i("i",{staticClass:"iconfont iconshoucang1",on:{click:function(i){return e.unfavourites(t.id)}}}):i("i",{staticClass:"iconfont iconshoucang",on:{click:function(i){return e.favourites(t.id)}}})])]),i("div",{staticClass:"text"},[i("h2",[e._v(e._s(t.title))]),i("p",[e._v(e._s(t.publishtime))])])])])})),1)],1)])],1),i("BottomNavbar"),i("Dialog",{attrs:{title:"长按保存图片"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[i("div",{staticClass:"thumb"},[i("img",{attrs:{src:e.currentUrl,alt:""}})])])],1)},s=[],a=(i("99af"),i("96cf"),i("1da1")),o=(i("2994"),i("2bdd")),r=(i("e7e5"),i("d399")),c=(i("e17f"),i("2241")),u=(i("0ec5"),i("21ab")),l=(i("3df5"),i("2830")),d=(i("e346"),i("ce0e")),f=i("95eb"),v=i("c5b0"),h=i("b311"),p=i.n(h),m={components:{HeaderBar:d["a"],BottomNavbar:f["a"],Grid:l["a"],gridItem:u["a"],CommonTitle:v["a"],Dialog:c["a"].Component,Toast:r["a"],List:o["a"]},data:function(){return{loading:!1,finished:!1,page:-1,show:!1,video:{},list:[],currentUrl:""}},mounted:function(){this.loadList(!0)},methods:{toggleDialog:function(e){this.currentUrl=e.url,this.show=!this.show},loadList:function(){var e=arguments,t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var n,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=e.length>0&&void 0!==e[0]&&e[0],n&&(t.loading=!0,t.list=[],t.page=-1,t.finished=!1),t.page+=1,i.next=5,t.$api.post("category/detail",{name:"Video and Webinar Library",page:t.page,pagesize:10});case 5:if(s=i.sent,t.loading=!1,s.list["Marketing Video"].length){i.next=10;break}return t.finished=!0,i.abrupt("return");case 10:t.list=n?s.list["Marketing Video"]:t.list.concat(s.list["Marketing Video"]),console.log(t.list);case 12:case"end":return i.stop()}}),i)})))()},favourites:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$api.post("member/favourites",{content_id:e});case 2:t.loadList(!0);case 3:case"end":return i.stop()}}),i)})))()},unfavourites:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$api.post("member/unfavourites",{content_id:e});case 2:t.loadList(!0);case 3:case"end":return i.stop()}}),i)})))()},copy:function(e,t){new p.a(".copy"+t,{text:function(t){return r["a"].success("复制成功"),e.url}})},playVideo:function(e){this.video=document.getElementById("video"+e),console.log(222,this.video.paused),this.video.paused?(this.video.play(),this.fullScreen()):this.video.pause()},fullScreen:function(){this.video.requestFullScreen?this.video.requestFullScreen():this.video.webkitRequestFullScreen?this.video.webkitRequestFullScreen():this.video.mozRequestFullScreen?this.video.mozRequestFullScreen():this.video.msRequestFullScreen&&this.video.msRequestFullScreen()}}},g=m,b=(i("cdd3"),i("2877")),w=Object(b["a"])(g,n,s,!1,null,"077e7d77",null);t["default"]=w.exports},cdd3:function(e,t,i){"use strict";var n=i("8689"),s=i.n(n);s.a}}]);