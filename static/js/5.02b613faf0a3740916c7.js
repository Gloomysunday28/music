webpackJsonp([5],{"+fcL":function(e,t){},"1y+C":function(e,t){},s4LC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"MusicPicker",props:{showPicker:{type:Boolean,default:!1,required:!1}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide-up-all"}},[e.showPicker?n("div",{staticClass:"m-music__picker"},[n("div",{staticClass:"m-picker__contain"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"m-mask",on:{click:function(t){return e.$emit("update:showPicker",!1)}}})]):e._e()])},staticRenderFns:[]};var i={name:"MusicPersonInfo",components:{"music-picker":n("C7Lr")(s,a,!1,function(e){n("1y+C")},"data-v-07d6b326",null).exports},filters:{parseGender:function(e){return{0:"保密",1:"男",2:"女"}[e]}},data:function(){return{showPicker:!1,avatar:"",nickname:"",gender:0,signature:"",gendors:[{name:"保密",value:0,checked:!1},{name:"男",value:1,checked:!1},{name:"女",value:2,checked:!1}]}},mounted:function(){this.getUserInfo()},methods:{filterGender:function(){var e=this;this.gendors.forEach(function(t){t.checked=t.value===e.gender})},selectGenger:function(e){this.gender=e.value,this.showPicker=!1,this.filterGender()},getUserInfo:function(){var e=this;this.$http.get(this.$api.userInfo,{params:{uid:this.personal.userId}}).then(function(t){var n=t.data.profile;e.avatar=n.avatarUrl,e.nickname=n.nickname,e.gender=n.gender,e.signature=n.signature})},editPerson:function(){var e=this;this.$http.get(this.$api.userUpdate,{params:{nickname:this.nickname,gender:this.gender,signature:this.signature}}).then(function(t){200===t.data.code?(e.$toast("保存成功"),e.$router.back()):e.$toast(t.data.msg||"保存失败")})}},watch:{showPicker:function(e){e&&this.filterGender()}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"g-layout"},[n("div",{staticClass:"c-person__avatar"},[n("img",{staticClass:"c-person__avatar__img",attrs:{src:e.avatar,alt:""}})]),e._v(" "),n("div",{staticClass:"c-person__info"},[n("div",{staticClass:"c-person__detail"},[n("p",{staticClass:"c-person__label"},[e._v("昵称")]),e._v(" "),n("music-input",{model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}})],1),e._v(" "),n("div",{staticClass:"c-person__detail",on:{click:function(t){e.showPicker=!0}}},[n("p",{staticClass:"c-person__label"},[e._v("性别")]),e._v(" "),n("music-input",{attrs:{defaultValue:e._f("parseGender")(e.gender),disabled:!0}})],1),e._v(" "),n("div",{staticClass:"c-person__detail"},[n("p",{staticClass:"c-person__label"},[e._v("个性签名")]),e._v(" "),n("music-text-area",{model:{value:e.signature,callback:function(t){e.signature=t},expression:"signature"}})],1)]),e._v(" "),n("div",{staticClass:"c-add__song"},[n("button",{staticClass:"c-add__btn",on:{click:e.editPerson}},[e._v("保存")])]),e._v(" "),n("music-picker",{attrs:{"show-picker":e.showPicker},on:{"update:showPicker":function(t){e.showPicker=t},"update:show-picker":function(t){e.showPicker=t}}},[n("div",{staticClass:"c-gendor"},e._l(e.gendors,function(t){return n("div",{key:t.name,class:["c-gendor__item",{"c-gendor__item--active":t.checked}],on:{click:function(n){return e.selectGenger(t)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])}),0)])],1)},staticRenderFns:[]};var r=n("C7Lr")(i,c,!1,function(e){n("+fcL")},"data-v-317fe2fc",null);t.default=r.exports}});