(function(e){function t(t){for(var r,o,a=t[0],u=t[1],i=t[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==s[a]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},s={app:0},c=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-4671f6ee":"87385e2c","chunk-4a7bccd7":"ae784000","chunk-516634da":"88c148fd","chunk-2d2306d4":"c2c67592","chunk-cd4d5036":"c971a48f","chunk-6796b5db":"92791119","chunk-02e5446e":"f349d9a1","chunk-4d4bf426":"5a33af30","chunk-54e91198":"4e0cbd52"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-4671f6ee":1,"chunk-4a7bccd7":1,"chunk-516634da":1,"chunk-cd4d5036":1,"chunk-6796b5db":1,"chunk-02e5446e":1,"chunk-4d4bf426":1,"chunk-54e91198":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4671f6ee":"1a31b591","chunk-4a7bccd7":"85347b63","chunk-516634da":"aeb29336","chunk-2d2306d4":"31d6cfe0","chunk-cd4d5036":"a9f104a5","chunk-6796b5db":"eb585f89","chunk-02e5446e":"c88e1c92","chunk-4d4bf426":"1b690160","chunk-54e91198":"7d4c9bbc"}[e]+".css",s=u.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var i=c[a],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===s))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){i=f[a],d=i.getAttribute("data-href");if(d===r||d===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],h.parentNode.removeChild(h),n(c)},h.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){o[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=a(e);var f=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}s[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/okenit-test/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var h=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("6838"),s=n.n(o),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},a=[],u={name:"App"},i=u,d=n("2877"),f=n("6544"),h=n.n(f),m=n("7496"),l=n("f6c4"),p=Object(d["a"])(i,c,a,!1,null,null,null),b=p.exports;h()(p,{VApp:m["a"],VMain:l["a"]});n("d3b7"),n("3ca3"),n("ddb0");var v=n("8c4f"),g=n("b441");r["a"].use(v["a"]);var k=[{path:g["a"].Home,name:"Home",component:function(){return Promise.all([n.e("chunk-516634da"),n.e("chunk-cd4d5036"),n.e("chunk-4671f6ee"),n.e("chunk-6796b5db"),n.e("chunk-4d4bf426")]).then(n.bind(null,"bb51"))},children:[{path:g["a"].Home,component:function(){return Promise.all([n.e("chunk-516634da"),n.e("chunk-2d2306d4")]).then(n.bind(null,"ebde"))}},{path:g["a"].Posts,component:function(){return Promise.all([n.e("chunk-516634da"),n.e("chunk-cd4d5036"),n.e("chunk-54e91198")]).then(n.bind(null,"89fc"))}}]},{path:g["a"].Comments,name:"Comments",component:function(){return Promise.all([n.e("chunk-516634da"),n.e("chunk-cd4d5036"),n.e("chunk-4671f6ee"),n.e("chunk-6796b5db"),n.e("chunk-02e5446e")]).then(n.bind(null,"0bef"))}},{path:"/:pathMatch(.*)*",name:"NotFound",component:function(){return Promise.all([n.e("chunk-4671f6ee"),n.e("chunk-4a7bccd7")]).then(n.bind(null,"b80c"))}}],w=new v["a"]({mode:"hash",base:"/okenit-test/",routes:k}),P=w,C=n("2f62"),y=n("1da1"),x=(n("96cf"),n("d9e2"),n("7db0"),{state:{users:[],usersLoading:!0},mutations:{setUsers:function(e,t){e.users=t},setUsersLoading:function(e,t){e.usersLoading=t}},actions:{fetchUsers:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("setUsersLoading",!0),t.prev=2,t.next=5,fetch(g["c"].Users);case 5:if(o=t.sent,o.ok){t.next=8;break}throw new Error(g["d"].FetchUsers);case 8:return t.next=10,o.json();case 10:s=t.sent,n("setUsers",s),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](2),r["a"].$vToastify.error(t.t0.message);case 17:return t.prev=17,n("setUsersLoading",!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])})))()}},getters:{getUserById:function(e){return function(t){var n=e.users.find((function(e){return e.id===t}));return null!==n&&void 0!==n?n:{name:"инкогнито"}}}}}),j=(n("99af"),{state:{posts:[],postsLoading:!0},mutations:{setPosts:function(e,t){e.posts=t},setPostsLoading:function(e,t){e.postsLoading=t}},actions:{fetchPosts:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var o,s,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,o("setPostsLoading",!0),s="all"===t?g["c"].Posts:"".concat(g["c"].Posts,"?userId=").concat(t),n.prev=3,n.next=6,fetch(s);case 6:if(c=n.sent,c.ok){n.next=9;break}throw new Error(g["d"].FetchPosts);case 9:return n.next=11,c.json();case 11:a=n.sent,o("setPosts",a),n.next=18;break;case 15:n.prev=15,n.t0=n["catch"](3),r["a"].$vToastify.error(n.t0.message);case 18:return n.prev=18,o("setPostsLoading",!1),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[3,15,18,21]])})))()}}}),L=n("5530"),U=(n("e9c4"),{state:{currentUser:null,currentPost:null,comments:[],currentUserLoading:!1,currentPostLoading:!1,commentsLoading:!1,notFound:!1},mutations:{setCurrentUser:function(e,t){e.currentUser=t},setCurrentUserLoading:function(e,t){e.currentUserLoading=t},setCurrentPost:function(e,t){e.currentPost=t},setCurrentPostLoading:function(e,t){e.currentPostLoading=t},setComments:function(e,t){e.comments=t},setCommentsLoading:function(e,t){e.commentsLoading=t},addNewComment:function(e,t){var n=Object(L["a"])(Object(L["a"])({},t),{},{name:t.title});delete n.title,e.comments.unshift(n)},setNotFound:function(e,t){e.notFound=t}},actions:{fetchCurrentUser:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var o,s,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,o("setCurrentUserLoading",!0),n.prev=2,n.next=5,fetch("".concat(g["c"].Users,"/").concat(t));case 5:if(s=n.sent,s.ok){n.next=8;break}throw new Error(g["d"].FetchCurrentUser);case 8:return n.next=10,s.json();case 10:c=n.sent,o("setCurrentUser",c),n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](2),r["a"].$vToastify.error(n.t0.message);case 17:return n.prev=17,o("setCurrentUserLoading",!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[2,14,17,20]])})))()},fetchCurrentPost:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var o,s,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,s=e.dispatch,o("setCurrentPostLoading",!0),o("setNotFound",!1),n.prev=3,n.next=6,fetch("".concat(g["c"].Posts,"/").concat(t));case 6:if(c=n.sent,c.ok){n.next=10;break}throw 404===c.status&&o("setNotFound",!0),new Error(g["d"].FetchCurrentPost);case 10:return n.next=12,c.json();case 12:a=n.sent,o("setCurrentPost",a),s("fetchCurrentUser",a.userId),s("fetchComments",t),n.next=21;break;case 18:n.prev=18,n.t0=n["catch"](3),r["a"].$vToastify.error(n.t0.message);case 21:return n.prev=21,o("setCurrentPostLoading",!1),n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[3,18,21,24]])})))()},fetchComments:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var o,s,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,o("setCommentsLoading",!0),n.prev=2,n.next=5,fetch("".concat(g["c"].Comments,"?postId=").concat(t));case 5:if(s=n.sent,s.ok){n.next=8;break}throw new Error(g["d"].FetchComments);case 8:return n.next=10,s.json();case 10:c=n.sent,o("setComments",c),n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](2),r["a"].$vToastify.error(n.t0.message);case 17:return n.prev=17,o("setCommentsLoading",!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[2,14,17,20]])})))()},postComment:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var r,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,fetch("".concat(g["c"].Posts),{method:"POST",body:JSON.stringify(Object(L["a"])(Object(L["a"])({},t),{},{userId:1})),headers:{"Content-type":"application/json; charset=UTF-8"}});case 4:if(o=n.sent,o.ok){n.next=7;break}throw new Error(g["d"].PostComment);case 7:return n.next=9,o.json();case 9:s=n.sent,r("addNewComment",s),n.next=16;break;case 13:throw n.prev=13,n.t0=n["catch"](1),new Error(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))()}}});r["a"].use(C["a"]);var O=new C["a"].Store({state:{},mutations:{},actions:{},modules:{users:x,posts:j,comments:U}}),F=n("f309");r["a"].use(F["a"]);var E=new F["a"]({});r["a"].use(s.a,{position:"top-right"}),r["a"].config.productionTip=!1,new r["a"]({router:P,store:O,vuetify:E,render:function(e){return e(b)}}).$mount("#app")},b441:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c}));var r={Users:"https://jsonplaceholder.typicode.com/users",Posts:"https://jsonplaceholder.typicode.com/posts",Comments:"https://jsonplaceholder.typicode.com/comments"},o={Home:"/",Posts:"/user/:id",PostsId:"/user/",AllPosts:"/user/all",Comments:"/comments/:id",CommentsId:"/comments/"},s={FetchCurrentUser:"Не удалось загрузить данные пользователя",FetchCurrentPost:"Не удалось загрузить пост",FetchComments:"Не удалось загрузить комментарии",PostComment:"Не удалось отправить комментарий",FetchPosts:"Не удалось загрузить посты",FetchUsers:"Не удалось загрузить пользователей"},c={Start:"Добро пожаловать. Для получения постов выберите пользователя",Posts:"Пользователь пока не написал ни одного поста",Comments:"Не удалось загрузить пост"}}});
//# sourceMappingURL=app.30c70f3b.js.map