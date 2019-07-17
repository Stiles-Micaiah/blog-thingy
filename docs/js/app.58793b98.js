(function(t){function e(e){for(var s,n,i=e[0],l=e[1],u=e[2],c=0,p=[];c<i.length;c++)n=i[c],r[n]&&p.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},o=[];function n(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"061df209"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=r[t]=[e,s]});e.push(a[2]=s);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=n(t),o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,n=new Error("Loading chunk "+t+" failed.\n("+s+": "+o+")");n.type=s,n.request=o,a[1](n)}r[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/blog-thingy/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2457:function(t,e,a){"use strict";var s=a("cae4"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"nav"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"https://stiles-micaiah.github.io/"}},[t._v("M&J")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[t._m(1),t._m(2),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/post"}},[t._v("Create Post")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)]),a("form",{staticClass:"form-inline my-2 my-lg-0",on:{submit:function(e){return e.preventDefault(),t.searchPosts(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("button",{staticClass:"btn btn-primary my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])])],1),a("router-view")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"https://github.com/Stiles-Micaiah"}},[t._v("GitHub Repos "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"https://github.com/jessiempaxton"}},[t._v("Jessie's GitHub Repos!!")])])}],n={name:"Navbar",data(){return{query:""}},methods:{searchPosts(){router.push({name:"search",params:{keyword:this.query}})}}},i=n,l=(a("5c1d"),a("b0a0"),a("2877")),u=Object(l["a"])(i,r,o,!1,null,"6db6b18a",null),c=u.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid"},[a("div",{staticClass:"row d-flex justify-content-center"},[a("Post")],1)])},m=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.posts?a("div",{staticClass:"Post col-6"},t._l(t.posts,function(e){return a("div",{key:e.id,staticClass:"card card-803 ",staticStyle:{height:"auto",margin:"25px"}},[a("h3",{staticClass:"title-color card-header"},[t._v(t._s(e.title))]),a("h6",{staticClass:"mix-a-lot"},[t._v("Post By:"+t._s(e.user))]),a("img",{staticStyle:{height:"auto",width:"100%",display:"block"},attrs:{src:e.img,alt:"Card image"}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:" body-color card-text"},[t._v(t._s(e.body))])]),a("div",{staticClass:"card-body"},[a("button",{staticClass:"btn btn-info rounded-pill "},[t._v("You like this")]),a("button",{staticClass:"btn btn-danger rounded-pill ",on:{click:function(a){return t.deletePost(e._id)}}},[t._v("You like this, but in Red")])]),a("div",{staticClass:"card-footer text-muted",staticStyle:{"-webkit-text-fill-color":"blueviolet"}},[t._v("\n      "+t._s(e.user)+" but in Purple\n    ")])])}),0):t._e()},b=[],h={name:"Post",data(){return{}},mounted(){this.$store.dispatch("getPosts")},computed:{posts(){return this.$store.state.posts.data}},methods:{deletePost(t){this.$store.dispatch("deletePost",t)}}},f=h,y=(a("2457"),Object(l["a"])(f,v,b,!1,null,"b668075a",null)),g=y.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"CreateForm"}},[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-md btn-primary dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Create Post")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.title,expression:"query.title"}],staticClass:"dropdown-item",attrs:{type:"text",placeholder:"title"},domProps:{value:t.query.title},on:{input:function(e){e.target.composing||t.$set(t.query,"title",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.img,expression:"query.img"}],staticClass:"dropdown-item",attrs:{type:"text",placeholder:"Image URL"},domProps:{value:t.query.img},on:{input:function(e){e.target.composing||t.$set(t.query,"img",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.body,expression:"query.body"}],staticClass:"dropdown-item",attrs:{type:"text",placeholder:"What's on your mind?"},domProps:{value:t.query.body},on:{input:function(e){e.target.composing||t.$set(t.query,"body",e.target.value)}}}),a("button",{staticClass:"btn btn-success btn-md",staticStyle:{width:"100%"},attrs:{type:"submit"}},[t._v("Post")])])])])])])},P=[],_={name:"CreateForm",data(){return{query:{title:"",author:"",img:"",date:(new Date).toLocaleTimeString(),body:""}}},methods:{addPost(t){this.$store.dispatch("addPost",this.query)}}},w=_,x=Object(l["a"])(w,C,P,!1,null,"2856184c",null),q=x.exports,k={name:"Home",data(){return{}},components:{Post:g,CreateForm:q},computed:{posts(){this.$store.state.posts.data}}},$=k,S=Object(l["a"])($,p,m,!1,null,"66264b00",null),j=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"CreatePostPage"}},[a("div",{staticClass:"row"},[a("form",{staticClass:"col-6",on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[a("div",{staticClass:"card card-803 ",staticStyle:{height:"40vh",width:"20vw",margin:"15px"}},[a("h3",{staticClass:"card-header"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.title,expression:"query.title"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.query.title},on:{input:function(e){e.target.composing||t.$set(t.query,"title",e.target.value)}}})]),a("h4",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.img,expression:"query.img"}],attrs:{type:"text",placeholder:"Image URL...I dont have a data server"},domProps:{value:t.query.img},on:{input:function(e){e.target.composing||t.$set(t.query,"img",e.target.value)}}})]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.body,expression:"query.body"}],attrs:{type:"text",placeholder:"Body"},domProps:{value:t.query.body},on:{input:function(e){e.target.composing||t.$set(t.query,"body",e.target.value)}}})])]),a("div",{staticClass:"card-body"},[a("button",{staticClass:"btn btn-success btn-sm rounded-pill ",attrs:{type:"submit"}},[t._v("Post!")]),a("button",{staticClass:"btn btn-warning btn-sm rounded-pill",attrs:{type:"reset"}},[t._v("Reset!")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[a("button",{staticClass:"btn btn-primary btn-sm rounded-pill "},[t._v("Cancel?")])])],1),a("div",{staticClass:"card-footer text-muted",staticStyle:{"-webkit-text-fill-color":"blueviolet"}},[t._v("\n          [Your Name] but in Purple\n        ")])])])])])},E=[],N={name:"CreatePostPage",data(){return{query:{title:"",author:"",img:"",date:(new Date).toLocaleTimeString(),body:""}}},methods:{addPost(t){this.$store.dispatch("addPost",this.query)}}},T=N,D=Object(l["a"])(T,O,E,!1,null,"37715f7e",null),M=D.exports,R=a("7ab5"),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Search"}})},J=[],B={name:"Search"},G=B,F=Object(l["a"])(G,L,J,!1,null,"7ceea2d2",null);F.exports;s["a"].use(d["a"]);var H=new d["a"]({routes:[{path:"/",name:"home",component:j},{path:"/post",name:"post",component:M},{path:"/search=:keyword",name:"search",component:R["a"].vue},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),I=a("2f62"),U=a("bc3a"),Y=a.n(U);var A=Y.a.create({baseURL:"https://bcw-sandbox.herokuapp.com/api/MJ/blog"});s["a"].use(I["a"]);var W=new I["a"].Store({state:{posts:[],post:{}},mutations:{setPosts(t,e=[]){t.posts=e}},actions:{async getPosts({commit:t}){let e=await A.get("");t("setPosts",e.data),console.log(e)},async getPost({commit:t},e){let a=await A.get(e);t("setPosts",a.data)},addPost({commit:t,dispatch:e},a){A.post("",a).then(t=>{e("getPosts")}).catch(t=>{console.error(t)})},deletePost({commit:t,dispatch:e},a){A.delete(a).then(t=>{e("getPosts")}).catch(t=>{console.error(t)})},searchByName({commit:t,dispatch:e},a){A.get(a).then(e=>{e?t("setPosts",e.data):t("stePosts","")}).catch(e=>{console.error(e),t("setPosts","")})}}});s["a"].config.productionTip=!1,new s["a"]({router:H,store:W,render:function(t){return t(c)}}).$mount("#app")},"5c1d":function(t,e,a){"use strict";var s=a("686e"),r=a.n(s);r.a},"686e":function(t,e,a){},b0a0:function(t,e,a){"use strict";var s=a("b980"),r=a.n(s);r.a},b980:function(t,e,a){},cae4:function(t,e,a){}});
//# sourceMappingURL=app.58793b98.js.map