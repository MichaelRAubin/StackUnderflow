(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},"144a":function(t,e,s){"use strict";var a=s("84b8"),i=s.n(a);i.a},"3fdb":function(t,e,s){"use strict";var a=s("45db"),i=s.n(a);i.a},"45db":function(t,e,s){},"4b71":function(t,e,s){"use strict";var a=s("c33b"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),s("div",{staticClass:"home container-fluid",staticStyle:{"min-height":"calc(98vh - 60px)"}},[s("router-view")],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-light border-bottom bg-white"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[a("img",{attrs:{alt:"StackUnderflow",width:"180",src:s("cf05")}})]),a("div",{staticClass:"nav-right"},[t.user.id?a("div",{staticClass:"text-muted d-flex align-items-center"},[a("span",{staticClass:"pr-2 border-right"},[t._v(t._s(t.user.username))]),a("i",{staticClass:"ml-2 fa fa-fw fa-th-large action",attrs:{"data-toggle":"dropdown"}}),a("div",{staticClass:"dropdown-menu dropdown-menu-right square no-select",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("router-link",{staticClass:"dropdown-item action",attrs:{to:{name:"tests"}}},[t._v("Tests")]),a("div",{staticClass:"dropdown-divider"}),a("span",{staticClass:"dropdown-item action",on:{click:t.logout}},[t._v("logout")])],1)]):a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)],1)},o=[],c=s("bc3a"),u=s.n(c),l=s("3d20"),d=s.n(l);let h="5001"!=location.port?"https://localhost:5001":"",m=u.a.create({baseURL:h+"/api",timeout:8e3,withCredentials:!0}),p=u.a.create({baseURL:h+"/account",timeout:8e3,withCredentials:!0});const g=function({title:t,text:e="",type:s="success",timer:a=5500}){return d.a.fire({title:t,text:e,type:s,timer:a,showConfirmButton:!1,position:"top-right",toast:!0})},f=function(t){if(!t)return g({title:"An uknown error occured",type:"error"});let e=t.message||"An error occured";if(!t.isAxiosError||!t.response)return g({title:e,type:"error"});w(t)};function w(t){let e=t.response.data;var s="";if("string"==typeof e&&(s=e),!s&&e.errors)for(let i in e.errors)s+=`${i}: ${e.errors[i][0]}`;s||(s=e.message?e.message:t.message);let a=`${t.code||""} Request Error`;g({title:a,text:s,type:"error",timer:15e3})}class y{subscribe(t,e){try{this.events[t]=this.events[t]||{};let s=this._generateId(),a={id:s,fn:e};return this.events[t][s]=a,s}catch(s){console.error(s)}}notify(t){Object.keys(this.events[t]||{}).forEach(e=>{try{this.events[t][e].fn(...arguments)}catch(s){console.error(s,"removing subscriber"),this.remove(t,e)}})}remove(t,e){try{delete this.events[t][e]}catch(s){}}_generateId(){return`${8*Math.floor(Math.random())}-${8*Math.floor(Math.random())}`}constructor(){this.events={}}}class v extends y{setUser(t={}){this.user=t,this.notify(C)}async register(t){let e=await p.post("register",t);this.setUser(e.data)}async login(t){let e=await p.post("login",t);this.setUser(e.data)}async logout(){await p.delete("logout");location.reload()}async authenticate(){let t=await p.get("authenticate");this.setUser(t.data)}}const b=new v,C="SETUSER";var q={name:"Navbar",computed:{user(){return this.$store.state.user}},methods:{async logout(){await b.logout()}}},_=q,T=s("2877"),E=Object(T["a"])(_,r,o,!1,null,null,null),x=E.exports,A={name:"app",components:{Navbar:x}},S=A,I=(s("034f"),Object(T["a"])(S,i,n,!1,null,null,null)),O=I.exports,k=s("8c4f"),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{height:"100vh"}},[a("div",{staticClass:"d-flex h-100 w-100 flex-column align-items-center justify-content-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"text-center mt-5 mb-2"},[a("router-link",{attrs:{to:{name:"home"}}},[a("img",{staticClass:"mb-3",attrs:{alt:"StackUnderflow",src:s("cf05")}})]),t._m(0)],1)]),a("div",{staticClass:"card p-2 w-100"},[a("router-view"),a("hr"),a("div",{staticClass:"text-right p-2"},[a("router-link",{attrs:{to:t.to}},[t._v(t._s(t.to.display))])],1)],1)])])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("em",{staticClass:"pt-1",staticStyle:{color:"orange","border-top":"1px solid black"}},[t._v("Good Questions, Great Answers")])])}],j={name:"Auth",computed:{to(){return"auth.login"==this.$route.name?{name:"auth.register",display:"Create an Account"}:{name:"auth.login",display:"Already Registered? Login."}}}},M=j,N=(s("3fdb"),Object(T["a"])(M,R,U,!1,null,"5711aa34",null)),W=N.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"text-left",on:{submit:function(e){return e.preventDefault(),t.login()}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("Email:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],staticClass:"form-control",attrs:{required:"",type:"email",autocomplete:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"Password"}},[t._v("Password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"form-control",attrs:{required:"",autocomplete:"current-password",type:"password",placeholder:"password",minlength:"6"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}})]),s("button",{staticClass:"btn btn-info my-2",attrs:{type:"submit"}},[t._v("Login")])])},G=[],D={name:"Login",data(){return{newUser:{email:"",password:""}}},methods:{async login(){try{await b.login(this.newUser);this.$router.push("/")}catch(t){f(t)}}}},L=D,J=Object(T["a"])(L,Q,G,!1,null,null,null),P=J.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"text-left",on:{submit:function(e){return e.preventDefault(),t.register()}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("Username:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.username,expression:"newUser.username"}],staticClass:"form-control",attrs:{autocomplete:"username",type:"text",placeholder:"name"},domProps:{value:t.newUser.username},on:{input:function(e){e.target.composing||t.$set(t.newUser,"username",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("Email:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],staticClass:"form-control",attrs:{required:"",type:"email",autocomplete:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"Password"}},[t._v("Password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"form-control",attrs:{required:"",autocomplete:"current-password",type:"password",placeholder:"password",minlength:"6"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}})]),s("button",{staticClass:"btn btn-info my-2",attrs:{type:"submit"}},[t._v("Register")])])},Y=[],B={name:"Register",data(){return{newUser:{email:"",password:"",username:""}}},methods:{register(){this.$store.dispatch("register",this.newUser)}}},H=B,X=Object(T["a"])(H,Z,Y,!1,null,null,null),z=X.exports,V={path:"/auth",component:W,children:[{path:"/login",name:"auth.login",component:P},{path:"/register",name:"auth.register",component:z}]},F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"main-content"},[s("questions")],1)])},$=[],K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"questions"},[s("categories",{on:{selected:function(e){return t.query=e}}}),s("div",{staticClass:"searchbar"},[s("div",{staticClass:"m-3"},[s("hr"),s("div",{staticClass:"d-flex align-items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control square",attrs:{type:"text",placeholder:"search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),s("i",{staticClass:"fa fa-fw fa-search"})]),t.user.id?s("div",{staticClass:"text-right p-1 mb-3"},[s("button",{staticClass:"btn btn-outline-warning",on:{click:t.addQuestion}},[t._v("Ask a Question")])]):t._e()])]),s("div",{staticClass:"m-3"},[t.questions.length?t._e():s("div",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{"min-height":"60vh"}},[t._m(0)]),t._l(t.filtered,(function(e){return s("div",{key:e.id,staticClass:"card p-2 mb-3",class:e.answerId?"border border-success":""},[s("router-link",{staticClass:"d-flex align-items-center flex-wrap justify-content-between",attrs:{to:{name:"question",params:{id:e.id}}}},[s("h5",{staticClass:"m-0"},[e.answerId?s("i",{staticClass:"fa fa-fw fa-check text-success mr-2"}):t._e(),s("span",[t._v(t._s(e.title))])]),s("div",[e.tags.length?s("small",t._l(e.tags,(function(e){return s("span",{key:e.id,staticClass:"mr-1 p-1 border"},[t._v(t._s(e.name))])})),0):t._e()])])],1)}))],2)],1)},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{opacity:".5"}},[s("img",{staticClass:"mb-3 img-fluid",attrs:{src:"quiet.png",alt:""}}),s("p",{staticClass:"text-center"},[t._v("It is pretty quiet around here... You should ask a question")])])}],et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"categories"},[s("div",{staticClass:"m-3 d-flex align-items-center flex-wrap"},[s("div",{staticClass:"border bg-white rounded p-1 mr-1"},[s("small",{staticClass:"mr-1"},[t._v("Categories:")]),s("small",{staticClass:"action text-muted",on:{click:function(e){return t.select({name:""})}}},[s("i",{staticClass:"fa fa-fw fa-times ml-1"})])]),t._l(t.categories,(function(e){return s("div",{key:e.id,staticClass:"border rounded action p-1 mr-1",on:{click:function(s){return t.select(e)}}},[s("small",{staticClass:"mr-1"},[t._v(t._s(e.name))])])})),s("div",{staticClass:"border rounded action p-1",on:{click:t.addCategory}},[t._m(0)])],2)])},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("small",{staticClass:"mr-1"},[s("i",{staticClass:"fa fa-plus-square action mr-1"}),s("span",[t._v("New")])])}],at={async mounted(){try{let t=await m.get("categories");this.$store.commit("setResource",{resource:"categories",data:t.data})}catch(t){}},computed:{user(){return this.$store.state.user},categories(){return this.$store.state.categories}},methods:{async addCategory(){d.a.mixin({input:"text",confirmButtonText:"Next &rarr;",showCancelButton:!0,progressSteps:["1"]}).queue(["Create a new Category"]).then(async t=>{if(t.value){let e=await m.post("categories",{name:t.value[0]});this.$store.commit("setResource",{resource:"categories",data:[...this.categories,e.data]})}})},select(t){this.$emit("selected",t.name)}}},it=at,nt=Object(T["a"])(it,et,st,!1,null,null,null),rt=nt.exports,ot={async mounted(){try{let t=await m.get("questions");this.$store.commit("setResource",{resource:"questions",data:t.data})}catch(t){}},data(){return{question:{},query:""}},computed:{user(){return this.$store.state.user},filtered(){if(!this.query.length)return this.questions;this.query.toLowerCase();return this.questions.filter(t=>{try{return t.tags.find(e=>e.name.toLowerCase().includes(t))}catch(e){return!1}})},questions(){return this.$store.state.questions}},methods:{async addQuestion(){d.a.mixin({input:"text",confirmButtonText:"Next &rarr;",showCancelButton:!0,progressSteps:["1","2"]}).queue([{title:"Question Title",text:"What do you want to know?"},"Describe the Question"]).then(async t=>{if(t.value){let e=await m.post("questions",{title:t.value[0],body:t.value[1]});this.$router.push({name:"question",params:{id:e.data.id}})}})}},components:{Categories:rt}},ct=ot,ut=(s("144a"),Object(T["a"])(ct,K,tt,!1,null,null,null)),lt=ut.exports,dt={name:"home",components:{Questions:lt}},ht=dt,mt=Object(T["a"])(ht,F,$,!1,null,null,null),pt=mt.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.question.id?s("div",{staticClass:"m-3"},[s("div",{staticClass:"card p-2"},[s("h3",{staticClass:"bg-warning text-light p-1 text-center rounded"},[t._v(t._s(t.question.title))]),s("p",[t._v(t._s(t.question.body))]),s("hr"),s("div",{staticClass:"d-flex align-items-center flex-wrap justify-content-between"},[s("div",[t._l(t.question.tags,(function(e){return s("small",{key:e.id,staticClass:"mr-1 p-1 border"},[s("span",[t._v(t._s(e.name))]),t.user.id==t.question.authorId?s("i",{staticClass:"fa fa-fw fa-times ml-1",on:{click:function(s){return t.removeCat(e)}}}):t._e()])})),t.user.id==t.question.authorId?s("select",{directives:[{name:"model",rawName:"v-model",value:t.newCat,expression:"newCat"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.newCat=e.target.multiple?s:s[0]},t.addCat]}},t._l(t.categories,(function(e){return s("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e.name))])})),0):t._e()],2),t.question.authorId==t.user.id?s("div",{staticClass:"border border-danger p-1 action text-danger",on:{click:function(e){return t.deleteQuestion()}}},[s("i",{staticClass:"fa fa-fw fa-trash"})]):t._e()])]),t._l(t.responses,(function(e){return s("div",{key:e.id,staticClass:"card mt-3 p-2"},[s("div",{staticClass:"d-flex align-items-center"},[t.question.answerId||t.question.authorId!=t.user.id?t._e():s("h5",[s("i",{staticClass:"fa fa-fw fa-check text-muted fa-lg mr-3 action muted",on:{click:function(s){return t.markAnswer(e)}}})]),e.id==t.question.answerId?s("h5",[s("i",{staticClass:"fa fa-fw fa-check text-success fa-lg mr-3"})]):t._e(),s("p",[t._v(t._s(e.body))])]),s("hr"),s("div",{staticClass:"d-flex align-items-center justify-content-between p-2"},[e.author?s("p",[t._v(t._s(e.author.username))]):t._e()])])})),t.user.id?s("div",{staticClass:"text-right p-1 mb-3"},[s("button",{staticClass:"btn btn-outline-warning",on:{click:t.addReply}},[t._v("Reply")])]):t._e()],2):s("div",{staticClass:"d-flex align-items-center justify-content-center text-muted",staticStyle:{"min-height":"80vh"}},[s("div",[s("h4",{staticClass:"typewriter"},[t._v(t._s(t.message))])])])},ft=[],wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6 mx-auto"},[s("div",{staticClass:"card p-3"},[t.user.email?s("div",{staticClass:"d-flex"},[s("h3",{staticClass:"mr-2"},[t._v("Welcome, "+t._s(t.user.username))]),s("button",{staticClass:"btn text-info",on:{click:t.logout}},[t._v("Logout")])]):t._e()])])])},yt=[],vt={name:"AuthForm",data(){return{newAccount:!1}}},bt=vt,Ct=Object(T["a"])(bt,wt,yt,!1,null,null,null),qt=Ct.exports,_t={async mounted(){try{if(await this.getQuestion(),!this.$store.state.categories.length){let t=await m.get("categories");this.$store.commit("setResource",{resource:"categories",data:t.data})}}catch(t){this.message="Question not found",f(t)}},name:"Question",data(){return{newCat:{},message:"Fetching Question...."}},computed:{user(){return this.$store.state.user},categories(){return this.$store.state.categories},question(){return this.$store.state.question},responses(){return this.$store.state.responses}},methods:{async markAnswer(t){try{this.question.answerId=t.id;let e=await m.put("questions/"+this.question.id,this.question);this.question=e.data}catch(e){f(e)}},async addCat(){try{let t=this.question.tags.find(t=>t.id==this.newCat.id);if(t)throw this.newCat={},new Error("Question is already in this category");await m.put("questions/"+this.question.id+"/categories",{categoryId:this.newCat.id,action:"add"}),this.question.tags.push(this.newCat),this.newCat={}}catch(t){f(t)}},async removeCat(t,e){try{await m.put("questions/"+this.question.id+"/categories",{categoryId:t.id,action:"remove"}),this.question.tags.splice(e,1)}catch(s){f(s)}},async addReply(){d.a.mixin({input:"text",confirmButtonText:"Next &rarr;",showCancelButton:!0,progressSteps:["1"]}).queue(["Reply to Question"]).then(async t=>{if(t.value){let e=await m.post("responses",{questionId:this.question.id,body:t.value[0]});this.responses.push(e.data)}})},async getQuestion(){this.clearState();let t=await m.get("questions/"+this.$route.params.id);this.$store.commit("setResource",{resource:"question",data:t.data});let e=await m.get("questions/"+this.$route.params.id+"/responses");this.$store.commit("setResource",{resource:"responses",data:e.data})},clearState(){this.$store.commit("setResource",{resource:"question",data:{}}),this.$store.commit("setResource",{resource:"responses",data:[]})},async deleteQuestion(){try{await m.delete("questions/"+this.question.id),this.$router.push("/")}catch(t){f(t)}}},components:{Auth:qt}},Tt=_t,Et=(s("4b71"),Object(T["a"])(Tt,gt,ft,!1,null,null,null)),xt=Et.exports,At=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mb-3 text-center"},[t._m(0),s("div",{staticClass:"card border-info"},[s("div",{staticClass:"card-body readMeSection text-left"},[s("h3",{staticClass:"d-flex align-items-center justify-content-between"},[s("span",[t._v("Welcome")]),s("button",{staticClass:"btn btn-secondary",on:{click:t.runAll}},[s("span",[t._v("Run All Suites")])])]),s("div",[s("em",{staticClass:"action text-info",on:{click:t.toggleReadme}},[t._v(t._s(t.readMe?"close":"view")+" readme")])]),t.readMe?s("div",{staticClass:"instructions"},[t._m(1),s("p",[t._v("Each test will tell you what route it is testing, what data (if any) should be sent to the API, and what the response should be.")]),s("p",[t._v("Once the test passes, it will turn green, and the next test will be called. Each suite of tests will correspond to a controller in your backend. The suites have been designed to test one controller at a time")]),s("p",[t._v("Be sure to read your error messages in the console if a test does not pass.")])]):t._e()])])])]),t._m(2),t._l(t.suites,(function(t){return s("div",{key:t.name,staticClass:"row"},[s("div",{staticClass:"col-12"},[s("suite",{attrs:{suite:t}}),s("hr")],1)])}))],2)},St=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column align-items-center mb-3 mt-3"},[s("img",{attrs:{src:"logo.png"}}),s("em",{staticClass:"pt-1",staticStyle:{color:"orange","border-top":"1px solid black"}},[t._v("Good Questions, Great Answers")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n              This tool is designed to test very specific routes in your application's backend.\n              "),s("strong",[t._v("If your routes are different or they return the wrong type of data these tests will not work.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("hr")])])}],It=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card p-3",class:t.suite.success?"border-success":"border-danger"},[s("div",[s("small",{staticClass:"mr-3"},[t._v("status: "+t._s(t.passing.length)+"/"+t._s(t.suite.tests.length))]),s("em",{staticClass:"action text-info",on:{click:t.toggleSuite}},[t._v(t._s(t.showTests?"close":"view")+" suite")])]),s("h3",{staticClass:"d-flex align-items-center justify-content-between"},[s("span",{staticClass:"mr-4"},[t._v(t._s(t.suite.name))]),s("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.suite.runTests.call(t.suite)}}},[s("span",[t._v("Run Tests")]),t.suite.running?s("i",{staticClass:"fa fa-fw fa-spin fa-spinner ml-2"}):s("i",{staticClass:"fa fa-fw ml-2 text-light",class:t.suite.success?"fa-check-circle":"fa-times-circle"})])]),s("p",[t._v("These tests use the following base URL: api/"+t._s(t.suite.path))]),t.showTests?s("tests",{attrs:{tests:t.suite.tests}}):t._e()],1)},Ot=[],kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.tests,(function(e){return s("div",{key:e.name,staticClass:"card mb-1",class:e.success?"border-success":"border-danger"},[s("div",{staticClass:"card-header text-light",class:e.success?"bg-success":"bg-danger"},[s("h4",[t._v(t._s(e.name))])]),s("div",{staticClass:"card-body text-left"},[e.message?s("p",{staticClass:"alert",class:e.success?"alert-success":"alert-danger"},[s("b",{staticClass:"mr-2"},[t._v("Message:")]),t._v("\n        "+t._s(e.message)+"\n      ")]):t._e(),t._l(e.routeInfo,(function(e,a){return s("p",{key:a},[s("b",{staticClass:"mr-2"},[t._v(t._s(a)+":")]),s("span",[t._v(t._s(e))])])})),e.payload?s("p",[s("b",{staticClass:"mr-2"},[t._v("Payload:")]),s("span",[t._v(t._s(e.payload))])]):t._e()],2),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-secondary",attrs:{disabled:e.running},on:{click:function(t){return e.execute()}}},[s("span",[t._v("Run")]),e.running?s("i",{staticClass:"fa fa-fw fa-spin fa-spinner ml-2"}):t._e()])])])})),0)},Rt=[],Ut={name:"keepTests",props:["tests"],data(){return{}},computed:{},methods:{},components:{}},jt=Ut,Mt=Object(T["a"])(jt,kt,Rt,!1,null,null,null),Nt=Mt.exports,Wt={props:["suite"],data(){return{showTests:!0}},computed:{passing(){return this.suite.tests.filter(t=>t.success)}},mounted(){this.showTests=JSON.parse(window.localStorage.getItem(`suite::${this.suite.name}`))},methods:{toggleSuite(){this.showTests=!this.showTests,window.localStorage.setItem(`suite::${this.suite.name}`,this.showTests)}},components:{Tests:Nt}},Qt=Wt,Gt=Object(T["a"])(Qt,It,Ot,!1,null,null,null),Dt=Gt.exports,Lt={mounted(){this.readMe=JSON.parse(window.localStorage.getItem(this.title))},name:"tests",data(){return{title:"StackUnderflow",readMe:!1}},computed:{user(){return this.$store.state.auth.user},suites(){return this.$store.state.suites}},methods:{toggleReadme(){this.readMe=!this.readMe,window.localStorage.setItem(this.title,this.readMe)},runAll(){try{Promise.all(this.suites.map(t=>t.runTests.call(t)))}catch(t){console.error(t)}}},components:{Auth:qt,Suite:Dt}},Jt=Lt,Pt=Object(T["a"])(Jt,At,St,!1,null,null,null),Zt=Pt.exports;a["a"].use(k["a"]);var Yt=new k["a"]({routes:[{path:"/",name:"home",component:pt},V,{path:"/question/:id",name:"question",component:xt},{path:"/tests",name:"tests",component:Zt},{redirect:"*",path:"/"}]}),Bt=s("2f62");a["a"].use(Bt["a"]);var Ht=new Bt["a"].Store({state:{user:{},suites:[],categories:[],questions:[],question:{},responses:[]},mutations:{reloadSuites(t){t.suites=[]},addSuite(t,e){t.suites.push(e)},SETUSER(t,e){t.user=e},setResource(t,{resource:e="",data:s}){s&&e&&t[e]&&(t[e]=s)}},actions:{init({commit:t,dispatch:e}){b.subscribe(C,()=>{t(C,b.user)}),b.authenticate()}}});class Xt{constructor(t,e,s,a="",i="",n=""){if("function"!=typeof s)throw new Error("Invalid Test Registration");this.success=!1,this.running=!1,this.message="",this.name=t,this.path=e,this.routeInfo={path:e,expected:i,description:a},this.payload=n,this.runTest=s}async execute(){try{this.message="",this.success=!1,this.running=!0;let t=await this.runTest();this.success=t.status,this.message=t.message}catch(t){console.error(t),this.message=t.message,t.response&&t.response.data&&(this.message+=" :: "+t.response.data)}finally{this.running=!1}}}class zt{constructor(t,e){this.status=t,this.message=e}}class Vt{constructor(t,e,s){this.name=t,this.running=!1,this.success=!1,this.description=e,this.tests=[],this.path=s,Ht.commit("addSuite",this)}addTests(){this.tests.length=0,this.tests.push(...arguments)}async runTests(){this.running=!0;try{for(let t=0;t<this.tests.length;t++){const e=this.tests[t];await e.execute.call(e)}}catch(t){console.error(t)}finally{this.running=!1,this.success=!this.tests.find(t=>!t.success)}}async get(){let t=await m.get(this.path);return t.data}async create(t){let e=await m.post(this.path,t);return e.data}async getById(t){let e=await m.get(`${this.path}/`+t);return e.data}async update(t){let e=await m.put(`${this.path}/`+t.id||t._id,t);return e.data}async delete(t){let e=await m.delete(`${this.path}/`+t.id||t._id);return e.data}}const Ft="questions";let $t={title:"TEST__Question",body:"WHAT__EVEN__IS__A__JAVASCRIPT"};class Kt extends Vt{constructor(){super("QuestionsController","",Ft),this.addTests(new Xt("Can Get questions",Ft,async()=>{if(this.questions=await this.get(),!Array.isArray(this.questions))throw new Error("Invalid data recieved when requesting "+Ft);return new zt(!0,"Able to get questions: "+this.questions.length)},"GET request. This should get a list of questions.","Question[]"),new Xt("Can Create a question",Ft,async()=>{if(!Ht.state.user)throw new Error("You are not logged in");if(this.question=await this.create($t),this.question.title!==$t.title||!this.question.id)throw new Error("Whoops something failed, unable to create question successfully");return new zt(!0,"Successfully created question "+JSON.stringify(this.question))},"POST request. This should create a new question in your database.","Question","question object { id, title, body }"),new Xt("Can Get question by question Id",Ft+"/:id",async()=>{let t=await this.getById(this.question.id);if(t.id!==this.question.id)throw new Error("Failed to get the correct question when requesting by id");return new zt(!0,"Successfully retrieved question "+JSON.stringify(this.question))},"GET request. This should get one question by its id.","Question"),new Xt("Can Edit question by question Id",Ft+"/:id",async()=>{this.question.title="EDITED";let t=await this.update(this.question);if(t.title!=this.question.title)throw new Error("Unable to edit question: "+JSON.stringify(t));return new zt(!0,"Woot able to edit question successfully "+JSON.stringify(this.question))},"PUT request. This should update one question by its id.","Question"),new Xt("Can delete question by question Id",Ft+"/:id",async()=>{await this.delete(this.question);try{await this.getById(this.question.id)}catch(t){console.warn("THIS MIGHT OF BEEN EXPECTED",t)}return new zt(!0,"Woot able to delete question successfully")},"DELETE request. This should delete one question by its id.","string"))}}const te="responses";let ee={body:"THAT WAS A NEAT QUESTION"};class se extends Vt{constructor(){super("ResponsesController","",te),this.addTests(new Xt("Can Create a response",te,async()=>{let t=await m.post("questions",{title:"SOMEONE__WILL__RESPOND",body:"TEST__QUESTION__RESPONSE"});if(this.question=t.data,ee.questionId=t.data.id,this.response=await this.create(ee),this.response.body!==ee.body||!this.response.id)throw new Error("Whoops something failed, unable to create response successfully");return new zt(!0,"Successfully created response "+JSON.stringify(this.response))},"POST request. This should create a new response in your database.","Response","response object { id, body, questionId }"),new Xt("Can Edit response by response Id",te+"/:id",async()=>{this.response.body="EDITED";let t=await this.update(this.response);if(t.body!=this.response.body)throw new Error("Unable to edit response");return new zt(!0,"Woot able to edit response successfully "+JSON.stringify(this.response))},"PUT request. This should update one response by its id.","Response"),new Xt("Get Responses for Question","questions/:id/responses",async()=>{let t=await m.get("questions/"+this.question.id+"/responses"),e=t.data;if(!Array.isArray(e))throw new Error("Unable to get question responses");return new zt(e.length>0,JSON.stringify(e))},"Take note of the path this is calling to the QuestionsController","response[]"))}}const ae="categories";let ie={name:"MY__COOL__THINGS"};class ne extends Vt{constructor(){super("CategoriesController","",ae),this.addTests(new Xt("Can Create a category",ae,async()=>{if(this.category=await this.create(ie),this.category.name!==ie.name||!this.category.id)throw new Error("Whoops something failed, unable to create category successfully");return new zt(!0,"Successfully created category "+JSON.stringify(this.category))},"POST request. This should create a new category in your database.","Category","category object {id: string, name: string}"),new Xt("Can Edit category by category Id",ae+"/:id",async()=>{this.category.name="EDITED";let t=await this.update(this.category);if(t.name!=this.category.name)throw new Error("Unable to edit category correctly");return new zt(!0,"Woot able to edit category successfully "+JSON.stringify(this.category))},"PUT request. This should update one category by its id.","Category","{id: string, name: string}"),new Xt("Add Category to Question","Questions/:id/categories",async()=>{let t=await m.post("questions",{title:"a new question",description:"some question goes here"});this.question=t.data;let e=await m.put("questions/"+this.question.id+"/categories",{categoryId:this.category.id,action:"add"});return e.data?new zt(!0,JSON.stringify(this.category)):new zt(!1,JSON.stringify(this.category))},"PUT Request: should add a category to a question","bool","{ categoryId: string, action: add | remove }"),new Xt("Can't Edit category once added to a question",ae+"/:id",async()=>{this.category.name="THIS SHOULD HAVE FAILED";try{await this.update(this.category)}catch(t){if(!t.response)throw t;return new zt(!0,"Categories can't be edited after added to a question")}throw new Error("category edited after attached to question")},"PUT request. This update should fail.","Error"),new Xt("Can't Delete category once added to a question",ae+"/:id",async()=>{this.category.name="THIS SHOULD HAVE FAILED";try{await this.delete(this.category)}catch(t){if(!t.response)throw t;return new zt(!0,"Categories can't be deleted after added to a question")}throw new Error("category edited after attached to question")},"PUT request. This update should fail.","Error"))}}let re={username:"JIMMY___TESTER",email:"JIMMY@TESTER.COM",password:"1_RANDOMSTRINGOFCHARACTERs"};class oe extends Vt{constructor(){super("AuthCheck","",""),this.addTests(new Xt("Only the author of a question can edit/delete the question","questions/:id",async()=>{let t=await m.post("questions",{title:"An uneditable Question",body:"TEST__QUESTION__AUTHOR"});this.question=t.data;try{let t=await p.post("register",re);this.newUser=t.data}catch(e){let t=await p.post("login",re);this.newUser=t.data}finally{try{this.response=await this.update(this.question)}catch(e){return new zt(!0,"Unable to edit question with bad user")}}},"This request should fail","Error"))}}function ce(){Ht.commit("reloadSuites"),new Kt,new se,new ne,new oe}ce(),Ht.dispatch("init"),new a["a"]({router:Yt,store:Ht,render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,e,s){},"84b8":function(t,e,s){},c33b:function(t,e,s){},cf05:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAAAcCAYAAAD7uYq4AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTEwLTEwVDEwOjQxOjMwLTA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMC0xMFQxMzowMzoyOC0wNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0xMC0xMFQxMzowMzoyOC0wNjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmOTdjZWEyYi05MGFh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"}});
//# sourceMappingURL=app.29b43d67.js.map