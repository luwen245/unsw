(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf2d7138"],{"0990":function(t,e,i){},"0ec5":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("e15d")},"21ab":function(t,e,i){"use strict";var n=i("c31d"),r=i("d282"),a=i("ea8e"),s=i("a142"),o=i("b1d2"),c=i("48f4"),u=i("9884"),d=i("6f2f"),l=i("ad06"),g=Object(r["a"])("grid-item"),m=g[0],h=g[1];e["a"]=m({mixins:[Object(u["a"])("vanGrid")],props:Object(n["a"])(Object(n["a"])({},c["c"]),{},{dot:Boolean,text:String,icon:String,iconPrefix:String,info:[Number,String],badge:[Number,String]}),computed:{style:function(){var t=this.parent,e=t.square,i=t.gutter,n=t.columnNum,r=100/n+"%",s={flexBasis:r};if(e)s.paddingTop=r;else if(i){var o=Object(a["a"])(i);s.paddingRight=o,this.index>=n&&(s.marginTop=o)}return s},contentStyle:function(){var t=this.parent,e=t.square,i=t.gutter;if(e&&i){var n=Object(a["a"])(i);return{right:n,bottom:n,height:"auto"}}}},methods:{onClick:function(t){this.$emit("click",t),Object(c["b"])(this.$router,this)},genIcon:function(){var t=this.$createElement,e=this.slots("icon"),i=Object(s["b"])(this.badge)?this.badge:this.info;return e?t("div",{class:h("icon-wrapper")},[e,t(d["a"],{attrs:{dot:this.dot,info:i}})]):this.icon?t(l["a"],{attrs:{name:this.icon,dot:this.dot,info:i,size:this.parent.iconSize,classPrefix:this.iconPrefix},class:h("icon")}):void 0},getText:function(){var t=this.$createElement,e=this.slots("text");return e||(this.text?t("span",{class:h("text")},[this.text]):void 0)},genContent:function(){var t=this.slots();return t||[this.genIcon(),this.getText()]}},render:function(){var t,e=arguments[0],i=this.parent,n=i.center,r=i.border,a=i.square,s=i.gutter,c=i.direction,u=i.clickable;return e("div",{class:[h({square:a})],style:this.style},[e("div",{style:this.contentStyle,attrs:{role:u?"button":null,tabindex:u?0:null},class:[h("content",[c,{center:n,square:a,clickable:u,surround:r&&s}]),(t={},t[o["a"]]=r,t)],on:{click:this.onClick}},[this.genContent()])])}})},2830:function(t,e,i){"use strict";var n=i("d282"),r=i("ea8e"),a=i("b1d2"),s=i("9884"),o=Object(n["a"])("grid"),c=o[0],u=o[1];e["a"]=c({mixins:[Object(s["b"])("vanGrid")],props:{square:Boolean,gutter:[Number,String],iconSize:[Number,String],direction:String,clickable:Boolean,columnNum:{type:[Number,String],default:4},center:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},computed:{style:function(){var t=this.gutter;if(t)return{paddingLeft:Object(r["a"])(t)}}},render:function(){var t,e=arguments[0];return e("div",{style:this.style,class:[u(),(t={},t[a["d"]]=this.border&&!this.gutter,t)]},[this.slots()])}})},3494:function(t,e,i){"use strict";var n=i("0990"),r=i.n(n);r.a},"3df5":function(t,e,i){"use strict";i("68ef"),i("75ad")},"75ad":function(t,e,i){},a411:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("HeaderBar",{attrs:{action:""}}),i("div",{staticClass:"content"},[t._m(0),i("div",{staticClass:"desc"},[t._v(" These resources are available for your use on the condition that you do not alter them in any way and that they are used in cohesion with our Brand Guidelines. ")]),i("Grid",{attrs:{square:"","column-num":5,gutter:25}},[i("gridItem",{attrs:{to:"/studentGuides"}},[i("p",[t._v("2021")]),i("p",[t._v("Students Guides")])]),i("gridItem",{attrs:{to:"/programFlyers"}},[i("p",[t._v("Program Flyers")])]),i("gridItem",{attrs:{to:"/pullUpBanners"}},[i("p",[t._v("Pull Up Banners")])]),i("gridItem",{attrs:{to:"/templates"}},[i("p",[t._v("Templates")])]),i("gridItem",{attrs:{to:"/brandGuidelines"}},[i("p",[t._v("Brand Guidelines")])]),i("gridItem",{attrs:{to:"/systemUserGuide"}},[i("p",[t._v("System User")]),i("p",[t._v("Guides")])]),i("gridItem",{attrs:{to:"/videoLibrary"}},[i("p",[t._v("Video and Webinar")]),i("p",[t._v("Library")])]),i("gridItem",{attrs:{to:"/imageLibrary"}},[i("p",[t._v("Image Library")])]),i("gridItem",{attrs:{to:"/faqs"}},[i("p",[t._v("FAQs")])])],1)],1),i("BottomNavbar")],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h2",[t._v("Digital Agent Hub")]),i("p",[t._v("Resources")])])}],a=(i("0ec5"),i("21ab")),s=(i("3df5"),i("2830")),o=(i("be7f"),i("565f")),c=(i("38d5"),i("772a")),u=(i("66b9"),i("b650")),d=i("e346"),l=i("ce0e"),g=i("95eb"),m={name:"Home",components:{Button:u["a"],HeaderBar:l["a"],Form:c["a"],Field:o["a"],Grid:s["a"],gridItem:a["a"],BottomNavbar:g["a"]},mixins:[d["a"]],mounted:function(){console.log(navigator.language)},data:function(){return{username:""}},methods:{toggleLang:function(){this.ToggleLanguage()}}},h=m,f=(i("3494"),i("2877")),b=Object(f["a"])(h,n,r,!1,null,"2e5b3702",null);e["default"]=b.exports},e15d:function(t,e,i){}}]);