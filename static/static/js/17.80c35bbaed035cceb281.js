webpackJsonp([17],{FDTH:function(t,e){},wUP8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("mt-header",{staticStyle:{background:"#FFF",color:"#ff9d00","border-bottom":"1px solid #999",margin:"1px 5px"},attrs:{title:"报名"}},[a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.go},slot:"left"}),t._v(" "),a("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"xian"}),t._v(" "),a("div",{staticClass:"mod-contact"},[t._m(1),t._v(" "),a("ul",{staticClass:"db"},[a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qq,expression:"qq"}],attrs:{type:"text",placeholder:"QQ"},domProps:{value:t.qq},on:{input:function(e){e.target.composing||(t.qq=e.target.value)}}})]),t._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"xian"}),t._v(" "),a("div",{staticClass:"mod-body"},[a("h2",[t._v("备注")]),t._v(" "),a("div",{staticClass:"bd"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"说点什么"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"btn-group"},[a("mt-button",{attrs:{type:"default",size:"large"},on:{click:t.sure}},[t._v("确定")])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mod-danger"},[e("span",{staticClass:"label"},[this._v("性别")]),this._v(" "),e("span",{staticClass:"item_gander"},[e("i",{staticClass:"man"}),this._v("男生\n    ")]),this._v(" "),e("span",{staticClass:"item_gander"},[e("i",{staticClass:"nv"}),this._v("女生\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v("\n      请输入个人信息\n      "),e("span",[this._v("以下方式请至少添一项（仅对报名的人可见）")])])}]};var i=a("VU/8")({data:function(){return{list:[],text:"",phone:"",qq:""}},methods:{go:function(){this.$router.go(-1)},sure:function(){var t=this,e=this.$route.query.fid;this.axios.get("user/chab",{params:{fid:e}}).then(function(a){1!=a.data.code?0==a.data.code&&t.axios.get("user/user").then(function(a){var s=a.data.result[0].uid,i={text:t.text,ph:t.phone,qq:t.qq,fid:e,uid:s};t.axios.post("user/sign",i).then(function(e){1==e.data.code?t.$toast("报名成功"):t.$toast("报名失败")}),t.$router.go(-1)}):t.$toast("您已报名")})}}},s,!1,function(t){a("FDTH")},"data-v-442547f2",null);e.default=i.exports}});
//# sourceMappingURL=17.80c35bbaed035cceb281.js.map