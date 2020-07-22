(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4c9cd58"],{2381:function(e,t,i){},"2d41":function(e,t,i){"use strict";var s=i("b336"),n=i.n(s);n.a},"3c32":function(e,t,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("2381")},"417e":function(e,t,i){"use strict";var s=i("d282"),n=i("ad06"),a={inject:{vanField:{default:null}},watch:{value:function(){var e=this.vanField;e&&(e.resetValidation(),e.validateWithTrigger("onChange"))}},created:function(){var e=this.vanField;e&&!e.children&&(e.children=this)}},r=i("9884"),o=i("ea8e"),c=function(e){var t=e.parent,i=e.bem,s=e.role;return{mixins:[Object(r["a"])(t),a],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var e=this.checkedColor||this.parent&&this.parent.checkedColor;if(e&&this.checked&&!this.isDisabled)return{borderColor:e,backgroundColor:e}},tabindex:function(){return this.isDisabled||"radio"===s&&!this.checked?-1:0}},methods:{onClick:function(e){var t=this,i=e.target,s=this.$refs.icon,n=s===i||s.contains(i);this.isDisabled||!n&&this.labelDisabled?this.$emit("click",e):(this.toggle(),setTimeout((function(){t.$emit("click",e)})))},genIcon:function(){var e=this.$createElement,t=this.checked,s=this.iconSize||this.parent&&this.parent.iconSize;return e("div",{ref:"icon",class:i("icon",[this.shape,{disabled:this.isDisabled,checked:t}]),style:{fontSize:Object(o["a"])(s)}},[this.slots("icon",{checked:t})||e(n["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var e=this.$createElement,t=this.slots();if(t)return e("span",{class:i("label",[this.labelPosition,{disabled:this.isDisabled}])},[t])}},render:function(){var e=arguments[0],t=[this.genIcon()];return"left"===this.labelPosition?t.unshift(this.genLabel()):t.push(this.genLabel()),e("div",{attrs:{role:s,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:i([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[t])}}},l=Object(s["a"])("checkbox"),u=l[0],d=l[1];t["a"]=u({mixins:[c({bem:d,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(e){this.parent?this.setParentValue(e):this.$emit("input",e)}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggle:function(e){var t=this;void 0===e&&(e=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){t.checked=e}))},setParentValue:function(e){var t=this.parent,i=t.value.slice();if(e){if(t.max&&i.length>=t.max)return;-1===i.indexOf(this.name)&&(i.push(this.name),t.$emit("input",i))}else{var s=i.indexOf(this.name);-1!==s&&(i.splice(s,1),t.$emit("input",i))}}}})},"77b9":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"myCheckbox",on:{click:e.toggle}},[i("div",{directives:[{name:"show",rawName:"v-show",value:"left"==e.labelPosition,expression:"labelPosition=='left'"}],staticClass:"label left"},[e._t("default")],2),i("div",{staticClass:"content"},[i("p",{staticClass:"circle"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"point"})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"right"==e.labelPosition,expression:"labelPosition=='right'"}],staticClass:"label right"},[e._t("default")],2)])},n=[],a=(i("3c32"),i("417e")),r={components:{Checkbox:a["a"]},data:function(){return{}},props:{value:{type:Boolean,default:!1},labelPosition:{type:String,default:"right"}},methods:{toggle:function(){console.log(999999,!this.value),this.$emit("input",!this.value)}}},o=r,c=(i("9044"),i("2877")),l=Object(c["a"])(o,s,n,!1,null,"51705f49",null);t["a"]=l.exports},"834c":function(e,t,i){},9044:function(e,t,i){"use strict";var s=i("e29d"),n=i.n(s);n.a},b336:function(e,t,i){},c5b0:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"common_title",style:{background:e.bg}},[i("h1",[e._v(e._s(e.$t(e.title)))]),i("h2",[e._v(e._s(e.$t(e.text)))])])},n=[],a=(i("e346"),i("ce0e"),i("95eb"),{name:"commonTitle",props:{title:{type:String,default:"Digital Agent Hub"},text:{type:String,default:"Text"},bg:{type:String,default:"#FFDC00"}}}),r=a,o=(i("f524"),i("2877")),c=Object(o["a"])(r,s,n,!1,null,"3bdd57bf",null);t["a"]=c.exports},ddda:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login"},[i("HeaderBar"),i("div",{staticClass:"content"},[i("CommonTitle",{attrs:{text:"Change my Password"}}),i("Form",{staticClass:"form"},[i("Field",{attrs:{placeholder:"Current password",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}}),i("Field",{attrs:{type:"password",placeholder:"New password",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),i("Field",{attrs:{type:"password",placeholder:"Confirm password",rules:[{required:!0,message:"请确认密码"}]},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),i("div",{staticClass:"submit",on:{click:e.userLogin}},[e._v(" Submit "),i("span",{staticClass:"right"},[i("i",{staticClass:"iconfont iconyoujiantou"})])])],1)],1)],1)},n=[],a=(i("ac1f"),i("5319"),i("96cf"),i("1da1")),r=i("5530"),o=(i("3c32"),i("417e")),c=(i("be7f"),i("565f")),l=(i("38d5"),i("772a")),u=(i("66b9"),i("b650")),d=i("ce0e"),h=i("77b9"),f=i("c5b0"),b=i("2f62"),p={components:{HeaderBar:d["a"],Button:u["a"],Form:l["a"],Field:c["a"],Checkbox:o["a"],MyCheckbox:h["a"],CommonTitle:f["a"]},data:function(){return{checked:!0,activeIcon:"https://img.yzcdn.cn/vant/user-active.png",inactiveIcon:"https://img.yzcdn.cn/vant/user-inactive.png",form:{checked:!0,isRemember:!0,userName:"",password:""}}},methods:Object(r["a"])(Object(r["a"])({},Object(b["b"])(["login"])),{},{userLogin:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.login();case 2:i=e.$route.query.redirect,e.$router.replace(i||"/");case 4:case"end":return t.stop()}}),t)})))()},goCreate:function(){this.$router.push("/createAccount")}})},m=p,v=(i("2d41"),i("2877")),g=Object(v["a"])(m,s,n,!1,null,"5fce47e8",null);t["default"]=g.exports},e29d:function(e,t,i){},f524:function(e,t,i){"use strict";var s=i("834c"),n=i.n(s);n.a}}]);