(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63204ab9"],{"0e9f":function(e,t,i){"use strict";var n=i("a2cc"),a=i.n(n);a.a},"170d":function(e,t,i){},2381:function(e,t,i){},"3c32":function(e,t,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("2381")},"417e":function(e,t,i){"use strict";var n=i("d282"),a=i("ad06"),s={inject:{vanField:{default:null}},watch:{value:function(){var e=this.vanField;e&&(e.resetValidation(),e.validateWithTrigger("onChange"))}},created:function(){var e=this.vanField;e&&!e.children&&(e.children=this)}},r=i("9884"),c=i("ea8e"),o=function(e){var t=e.parent,i=e.bem,n=e.role;return{mixins:[Object(r["a"])(t),s],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var e=this.checkedColor||this.parent&&this.parent.checkedColor;if(e&&this.checked&&!this.isDisabled)return{borderColor:e,backgroundColor:e}},tabindex:function(){return this.isDisabled||"radio"===n&&!this.checked?-1:0}},methods:{onClick:function(e){var t=this,i=e.target,n=this.$refs.icon,a=n===i||n.contains(i);this.isDisabled||!a&&this.labelDisabled?this.$emit("click",e):(this.toggle(),setTimeout((function(){t.$emit("click",e)})))},genIcon:function(){var e=this.$createElement,t=this.checked,n=this.iconSize||this.parent&&this.parent.iconSize;return e("div",{ref:"icon",class:i("icon",[this.shape,{disabled:this.isDisabled,checked:t}]),style:{fontSize:Object(c["a"])(n)}},[this.slots("icon",{checked:t})||e(a["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var e=this.$createElement,t=this.slots();if(t)return e("span",{class:i("label",[this.labelPosition,{disabled:this.isDisabled}])},[t])}},render:function(){var e=arguments[0],t=[this.genIcon()];return"left"===this.labelPosition?t.unshift(this.genLabel()):t.push(this.genLabel()),e("div",{attrs:{role:n,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:i([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[t])}}},l=Object(n["a"])("checkbox"),u=l[0],h=l[1];t["a"]=u({mixins:[o({bem:h,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(e){this.parent?this.setParentValue(e):this.$emit("input",e)}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggle:function(e){var t=this;void 0===e&&(e=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){t.checked=e}))},setParentValue:function(e){var t=this.parent,i=t.value.slice();if(e){if(t.max&&i.length>=t.max)return;-1===i.indexOf(this.name)&&(i.push(this.name),t.$emit("input",i))}else{var n=i.indexOf(this.name);-1!==n&&(i.splice(n,1),t.$emit("input",i))}}}})},"567f":function(e,t,i){"use strict";var n=i("170d"),a=i.n(n);a.a},"77b9":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"myCheckbox",on:{click:e.toggle}},[i("div",{directives:[{name:"show",rawName:"v-show",value:"left"==e.labelPosition,expression:"labelPosition=='left'"}],staticClass:"label left"},[e._t("default")],2),i("div",{staticClass:"content"},[i("p",{staticClass:"circle"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"point"})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"right"==e.labelPosition,expression:"labelPosition=='right'"}],staticClass:"label right"},[e._t("default")],2)])},a=[],s=(i("3c32"),i("417e")),r={components:{Checkbox:s["a"]},data:function(){return{}},props:{value:{type:Boolean,default:!1},labelPosition:{type:String,default:"right"}},methods:{toggle:function(){console.log(999999,!this.value),this.$emit("input",!this.value)}}},c=r,o=(i("9044"),i("2877")),l=Object(o["a"])(c,n,a,!1,null,"51705f49",null);t["a"]=l.exports},"86dd":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login"},[i("HeaderBar"),i("div",{staticClass:"content"},[i("CommonTitle",{attrs:{text:""}}),i("p",{staticClass:"tip"},[e._v("Email is on checking")]),i("Form",{ref:"form",staticClass:"form"},[i("div",{staticClass:"submit",on:{click:e.submit}},[e._v(" Login "),i("span",{staticClass:"right"},[i("i",{staticClass:"iconfont iconyoujiantou"})])])])],1),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg"},[n("img",{attrs:{src:i("a932"),alt:""}})])}],s=(i("e7e5"),i("d399")),r=(i("3c32"),i("417e")),c=(i("be7f"),i("565f")),o=(i("38d5"),i("772a")),l=(i("66b9"),i("b650")),u=i("ce0e"),h=i("77b9"),d=i("c5b0"),f=i("b596"),b={components:{HeaderBar:u["a"],Button:l["a"],Form:o["a"],Field:c["a"],Checkbox:r["a"],MyCheckbox:h["a"],CommonTitle:d["a"],Toast:s["a"]},mixins:[f["a"]],data:function(){return{}},methods:{submit:function(){this.$router.push("/login")}}},m=b,p=(i("567f"),i("2877")),v=Object(p["a"])(m,n,a,!1,null,"0ad805d8",null);t["default"]=v.exports},9044:function(e,t,i){"use strict";var n=i("e29d"),a=i.n(n);a.a},a2cc:function(e,t,i){},a932:function(e,t,i){e.exports=i.p+"webResource/img/shape21.png"},b596:function(e,t,i){"use strict";i("ac1f"),i("5319"),i("96cf");var n=i("1da1"),a=i("5530"),s=(i("e7e5"),i("d399")),r=i("2f62"),c={components:{Toast:s["a"]},methods:Object(a["a"])(Object(a["a"])({},Object(r["b"])(["login","logout"])),{},{userLogout:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.logout();case 2:e.$router.replace("/login"),s["a"].success("success");case 4:case"end":return t.stop()}}),t)})))()},userLogin:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.form.validateAll().then(Object(n["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.login({email:e.form.email,password:e.form.password});case 2:console.log("++++++++++登陆成功——————————"),i=e.$route.query.redirect,e.$router.replace(i||"/");case 5:case"end":return t.stop()}}),t)}))));case 1:case"end":return t.stop()}}),t)})))()}})};t["a"]=c},c5b0:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"common_title",style:{backgroundColor:e.bg}},[i("h1",[e._v(e._s(e.$t(e.title)))]),i("h2",[e._v(e._s(e.$t(e.text)))])])},a=[],s=(i("e346"),i("ce0e"),i("95eb"),{name:"commonTitle",props:{title:{type:String,default:"Digital Agent Hub"},text:{type:String,default:"Text"},bg:{type:String,default:"#FFDC00"}}}),r=s,c=(i("0e9f"),i("2877")),o=Object(c["a"])(r,n,a,!1,null,"915e850e",null);t["a"]=o.exports},e29d:function(e,t,i){}}]);