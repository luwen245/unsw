(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32207137"],{"0fef":function(e,t,i){"use strict";var n=i("7303"),s=i.n(n);s.a},2381:function(e,t,i){},"38d5":function(e,t,i){"use strict";i("68ef")},"3c32":function(e,t,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("2381")},"417e":function(e,t,i){"use strict";var n=i("d282"),s=i("ad06"),a={inject:{vanField:{default:null}},watch:{value:function(){var e=this.vanField;e&&(e.resetValidation(),e.validateWithTrigger("onChange"))}},created:function(){var e=this.vanField;e&&!e.children&&(e.children=this)}},r=i("9884"),o=i("ea8e"),l=function(e){var t=e.parent,i=e.bem,n=e.role;return{mixins:[Object(r["a"])(t),a],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var e=this.checkedColor||this.parent&&this.parent.checkedColor;if(e&&this.checked&&!this.isDisabled)return{borderColor:e,backgroundColor:e}},tabindex:function(){return this.isDisabled||"radio"===n&&!this.checked?-1:0}},methods:{onClick:function(e){var t=this,i=e.target,n=this.$refs.icon,s=n===i||n.contains(i);this.isDisabled||!s&&this.labelDisabled?this.$emit("click",e):(this.toggle(),setTimeout((function(){t.$emit("click",e)})))},genIcon:function(){var e=this.$createElement,t=this.checked,n=this.iconSize||this.parent&&this.parent.iconSize;return e("div",{ref:"icon",class:i("icon",[this.shape,{disabled:this.isDisabled,checked:t}]),style:{fontSize:Object(o["a"])(n)}},[this.slots("icon",{checked:t})||e(s["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var e=this.$createElement,t=this.slots();if(t)return e("span",{class:i("label",[this.labelPosition,{disabled:this.isDisabled}])},[t])}},render:function(){var e=arguments[0],t=[this.genIcon()];return"left"===this.labelPosition?t.unshift(this.genLabel()):t.push(this.genLabel()),e("div",{attrs:{role:n,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:i([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[t])}}},c=Object(n["a"])("checkbox"),u=c[0],d=c[1];t["a"]=u({mixins:[l({bem:d,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(e){this.parent?this.setParentValue(e):this.$emit("input",e)}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggle:function(e){var t=this;void 0===e&&(e=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){t.checked=e}))},setParentValue:function(e){var t=this.parent,i=t.value.slice();if(e){if(t.max&&i.length>=t.max)return;-1===i.indexOf(this.name)&&(i.push(this.name),t.$emit("input",i))}else{var n=i.indexOf(this.name);-1!==n&&(i.splice(n,1),t.$emit("input",i))}}}})},"4edd":function(e,t,i){"use strict";var n=i("568b"),s=i.n(n);s.a},"568b":function(e,t,i){},"66b9":function(e,t,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("e3b3"),i("bc1b")},7303:function(e,t,i){},"772a":function(e,t,i){"use strict";var n=i("d282"),s=i("db85"),a=Object(n["a"])("form"),r=a[0],o=a[1];t["a"]=r({props:{colon:Boolean,labelWidth:[Number,String],labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,errorMessageAlign:String,submitOnEnter:{type:Boolean,default:!0},validateTrigger:{type:String,default:"onBlur"},showError:{type:Boolean,default:!0},showErrorMessage:{type:Boolean,default:!0}},provide:function(){return{vanForm:this}},data:function(){return{fields:[]}},methods:{validateSeq:function(){var e=this;return new Promise((function(t,i){var n=[];e.fields.reduce((function(e,t){return e.then((function(){if(!n.length)return t.validate().then((function(e){e&&n.push(e)}))}))}),Promise.resolve()).then((function(){n.length?i(n):t()}))}))},validateAll:function(){var e=this;return new Promise((function(t,i){Promise.all(e.fields.map((function(e){return e.validate()}))).then((function(e){e=e.filter((function(e){return e})),e.length?i(e):t()}))}))},validate:function(e){return e?this.validateField(e):this.validateFirst?this.validateSeq():this.validateAll()},validateField:function(e){var t=this.fields.filter((function(t){return t.name===e}));return t.length?new Promise((function(e,i){t[0].validate().then((function(t){t?i(t):e()}))})):Promise.reject()},resetValidation:function(e){this.fields.forEach((function(t){e&&t.name!==e||t.resetValidation()}))},scrollToField:function(e,t){this.fields.forEach((function(i){i.name===e&&i.$el.scrollIntoView(t)}))},addField:function(e){this.fields.push(e),Object(s["a"])(this.fields,this)},removeField:function(e){this.fields=this.fields.filter((function(t){return t!==e}))},getValues:function(){return this.fields.reduce((function(e,t){return e[t.name]=t.formValue,e}),{})},onSubmit:function(e){e.preventDefault(),this.submit()},submit:function(){var e=this,t=this.getValues();this.validate().then((function(){e.$emit("submit",t)})).catch((function(i){e.$emit("failed",{values:t,errors:i}),e.scrollToError&&e.scrollToField(i[0].name)}))}},render:function(){var e=arguments[0];return e("form",{class:o(),on:{submit:this.onSubmit}},[this.slots()])}})},"77b9":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"myCheckbox",on:{click:e.toggle}},[i("div",{directives:[{name:"show",rawName:"v-show",value:"left"==e.labelPosition,expression:"labelPosition=='left'"}],staticClass:"label left"},[e._t("default")],2),i("div",{staticClass:"content"},[i("p",{staticClass:"circle"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"point"})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"right"==e.labelPosition,expression:"labelPosition=='right'"}],staticClass:"label right"},[e._t("default")],2)])},s=[],a=(i("3c32"),i("417e")),r={components:{Checkbox:a["a"]},data:function(){return{}},props:{value:{type:Boolean,default:!1},labelPosition:{type:String,default:"right"}},methods:{toggle:function(){console.log(999999,!this.value),this.$emit("input",!this.value)}}},o=r,l=(i("0fef"),i("2877")),c=Object(l["a"])(o,n,s,!1,null,"c70b3930",null);t["a"]=c.exports},b7b1:function(e,t,i){"use strict";var n=i("f2ea"),s=i.n(n);s.a},be7f:function(e,t,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04"),i("1146")},c5b0:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"common_title"},[i("h1",[e._v("Digital Agent Hub")]),i("h2",[e._v(e._s(e.$t(e.text)))])])},s=[],a=(i("e346"),i("ce0e"),i("95eb"),{name:"commonTitle",props:{text:{type:String,default:"Text"}}}),r=a,o=(i("b7b1"),i("2877")),l=Object(o["a"])(r,n,s,!1,null,"4a19bbbf",null);t["a"]=l.exports},f2ea:function(e,t,i){},ffad:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login"},[i("HeaderBar"),i("div",{staticClass:"content"},[i("CommonTitle",{attrs:{text:"Reset password"}}),i("Form",{ref:"form",staticClass:"form"},[i("Field",{directives:[{name:"show",rawName:"v-show",value:!e.showLoginBtn,expression:"!showLoginBtn"}],attrs:{type:"password",placeholder:e.$t("New password"),rules:[{required:!0,message:e.$t("Please enter password")}]},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),i("Field",{directives:[{name:"show",rawName:"v-show",value:!e.showLoginBtn,expression:"!showLoginBtn"}],attrs:{type:"password",placeholder:e.$t("Confirm password"),rules:[{required:!0,message:e.$t("Please enter confirmed password")}]},model:{value:e.form.password_confirm,callback:function(t){e.$set(e.form,"password_confirm",t)},expression:"form.password_confirm"}}),i("div",{staticClass:"submit",on:{click:e.submit}},[e._v(" "+e._s(e.showLoginBtn?"Login":"Submit")+" "),i("span",{staticClass:"right"},[i("i",{staticClass:"iconfont iconyoujiantou"})])])],1)],1)],1)},s=[],a=(i("ac1f"),i("5319"),i("96cf"),i("1da1")),r=i("5530"),o=(i("3c32"),i("417e")),l=(i("be7f"),i("565f")),c=(i("38d5"),i("772a")),u=(i("66b9"),i("b650")),d=i("ce0e"),h=i("77b9"),f=i("c5b0"),m=i("2f62"),b={components:{HeaderBar:d["a"],Button:u["a"],Form:c["a"],Field:l["a"],Checkbox:o["a"],MyCheckbox:h["a"],CommonTitle:f["a"]},data:function(){return{showLoginBtn:!1,form:{password:"",password_confirm:""}}},methods:Object(r["a"])(Object(r["a"])({},Object(m["b"])(["login"])),{},{submit:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.showLoginBtn){t.next=3;break}return e.$router.replace("/login"),t.abrupt("return");case 3:e.$refs.form.validateAll().then(Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.post("member/resetpwd",{language:e.language,password:e.form.password,password_confirm:e.form.password_confirm},{headers:{token:e.token}});case 2:e.showLoginBtn=!0;case 3:case"end":return t.stop()}}),t)}))));case 4:case"end":return t.stop()}}),t)})))()}}),mounted:function(){var e=this.$route.query,t=e.token,i=e.language;this.token=t,this.language=i}},p=b,v=(i("4edd"),i("2877")),g=Object(v["a"])(p,n,s,!1,null,"92c59974",null);t["default"]=g.exports}}]);