(this.webpackJsonprealworldreact=this.webpackJsonprealworldreact||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),o=a(2),s=a(7),i=a(11),m=a.n(i),u=a(1),d="https://static.productionready.io/images/smiley-cyrus.jpg",p=Object(n.createContext)(),E=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),r=a[0],c=a[1],o=function e(t,a,n){var l,o,s;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return(l=r.token||localStorage.getItem("token"))&&(a.headers||(a.headers={}),a.headers.Authorization="Token ".concat(l)),i.next=4,m.a.awrap(fetch("".concat("https://conduit.productionready.io/api","/").concat(t),a));case 4:if((o=i.sent).ok){i.next=14;break}if(401!==o.status||!r.token){i.next=13;break}return localStorage.removeItem("token"),c({}),i.next=11,m.a.awrap(e(t,a,n));case 11:return s=i.sent,i.abrupt("return",s);case 13:console.error(o);case 14:o.json().then(n).catch((function(e){console.error(e),n({})}));case 15:case"end":return i.stop()}}))},s=localStorage.getItem("token");return!r.id&&s&&s.length>16&&o("user",{},(function(e){e.user?c(e.user):localStorage.removeItem("token")})),l.a.createElement(p.Provider,{value:[r,c,o]},e.children)},b=function(){var e=Object(n.useContext)(p),t=e[0],a=e[1],r=l.a.createElement("span",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/signin"},"Sign in")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/signup"},"Sign up"))),c=l.a.createElement("span",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/profile"},t.username)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/",onClick:function(){a({}),localStorage.removeItem("token")}},"Logout")));return l.a.createElement("nav",{className:"border split-nav",style:{zIndex:1}},l.a.createElement("div",{className:"nav-brand",style:{display:"flex"}},l.a.createElement(o.b,{to:"/",style:{border:"none"}},l.a.createElement("img",{src:"logo.png",style:{maxHeight:"40px",marginRight:"8px"},alt:"logo"})),l.a.createElement("h4",null,l.a.createElement(o.b,{to:"/"},"Paper Conduit"))),l.a.createElement("div",{className:"collapsible"},l.a.createElement("input",{id:"collapsible1",type:"checkbox",name:"collapsible1"}),l.a.createElement("button",null,l.a.createElement("label",{htmlFor:"collapsible1"},l.a.createElement("div",{className:"bar1"}),l.a.createElement("div",{className:"bar2"}),l.a.createElement("div",{className:"bar3"}))),l.a.createElement("div",{className:"collapsible-body"},l.a.createElement("ul",{className:"inline"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about"},"About")),t.id?c:r))))},f=a(10),g=a(22),h=function(e){return l.a.createElement(o.b,{to:"/user/".concat(e.user.username),className:"paper-btn user-link"},l.a.createElement("img",{className:"small-avatar",alt:" ",src:e.user.image?e.user.image:d}),l.a.createElement("span",null,e.user.username))},v=function(e){var t=Object(n.useContext)(p),a=t[0],r=t[2],c=e.article,o=Object(n.useState)(c.favorited),s=Object(u.a)(o,2),i=s[0],m=s[1],d=Object(n.useState)(c.favoritesCount),E=Object(u.a)(d,2),b=E[0],f=E[1];return l.a.createElement("button",{className:i?"btn-primary":"",onClick:function(e){r("articles/".concat(c.slug,"/favorite"),{method:i?"DELETE":"POST"},(function(e){e.article&&(m(e.article.favorited),f(e.article.favoritesCount))}))},disabled:!a.id},"\u2665 (",b,")")},y=function(e){var t,a=e.article,r=Object(n.useContext)(p)[0];a.tagList.length>0&&(t=a.tagList.reduce((function(e,t){return"".concat(e," #").concat(t)}),""));var c=l.a.createElement(o.b,{to:"/editor/".concat(a.slug),className:"paper-btn",style:{float:"right"}},"\u270e Edit");return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},a.title),l.a.createElement("h6",{className:"card-text"},new Date(a.createdAt).toLocaleDateString()),l.a.createElement("p",{className:"card-text"},a.description),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",null,t)),l.a.createElement("div",{className:"row flex-spaces"},l.a.createElement(o.b,{to:"/article/".concat(a.slug),className:"paper-btn"},"Read me!"),l.a.createElement(v,{article:a}),l.a.createElement(h,{user:a.author}),r.username===a.author.username?c:null)))},N=Object(n.createContext)(),j=function(e){var t=Object(n.useContext)(p)[2],a=Object(n.useState)([]),r=Object(u.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(0),i=Object(u.a)(s,2),m=i[0],d=i[1],E=Object(n.useState)(O(e.queryParams)),b=Object(u.a)(E,2),f=b[0],g=b[1];return Object(n.useEffect)((function(){var e=x(O(f));t("articles".concat(e),{},(function(e){o(e.articles),d(e.articlesCount)}))}),[f,t]),l.a.createElement(N.Provider,{value:[f,g,c,m]},e.children)},O=function(e){var t=e||{};return t.offset=t.offset?t.offset:0,t.limit=t.limit?t.limit:10,t.author=t.author?t.author:"",t.tag=t.tag?t.tag:"",t.favorited=t.favorited?t.favorited:"",t.feed=!!t.feed,t},x=function(e){var t="?"+Object.entries(e).map((function(e){return e.join("=")})).join("&");return e.feed?"/feed".concat(t):t},k=function(e,t,a){return 0===t?"No articles to show":1===t?"Showing article ".concat(e+1," of ").concat(a):"Showing articles ".concat(e+1," to ").concat(e+1+t-1," of ").concat(a)},w=function(e){var t=Object(n.useContext)(N),a=Object(u.a)(t,4),r=a[0],c=a[1],o=a[2],s=a[3],i=function(e){var t=Object(f.a)({},r);t.offset=e,c(t)},m=function(e){var t=Object(f.a)({},r);t.offset+=e,c(t)},d=k(r.offset,o.length,s);return l.a.createElement("div",null,l.a.createElement("h6",{style:{textAlign:"center",margin:"0px"}}," ",d," "),o.map((function(e){return l.a.createElement(y,{article:e,key:e.slug})})),function(){if(0===s)return null;var e=Math.ceil(s/10),t=Math.floor(r.offset/10)+1,a=l.a.createElement("button",{className:"margin-small",onClick:function(){return i(0)},disabled:t<=1},"<<"),n=l.a.createElement("button",{className:"margin-small",onClick:function(){return m(-10)},disabled:t<=1},"<"),c=10*Math.ceil(s/10)-10,o=l.a.createElement("button",{className:"margin-small",onClick:function(){return m(10)},disabled:t>=e},">"),u=l.a.createElement("button",{className:"margin-small",onClick:function(){return i(c)},disabled:t>=e},">>"),d=l.a.createElement("div",{style:{display:"flex"}},Array.apply(void 0,Object(g.a)(Array(e+1))).map((function(e,a){return 0===a?null:a>=t-3&&a<=t+3?l.a.createElement("button",{key:a,className:"margin-small btn-small ".concat(a===t?"btn-primary":""),onClick:function(){return i(10*(a-1))}},a):null})));return l.a.createElement("div",{className:"squished-buttons"},l.a.createElement("div",{style:{float:"left"}},a,n),d,l.a.createElement("div",{style:{float:"right"}},o,u))}())},C=function(){var e=Object(n.useContext)(p)[2],t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useContext)(N),s=o[0],i=o[1];Object(n.useEffect)((function(){e("tags",{},(function(e){c(e.tags)}))}),[c,e]);var m=function(){document.getElementById("tag-modal").checked=!1},d=function(e){var t=Object(f.a)({},s);t.tag=e,i(t)},E=s.tag?"#".concat(s.tag):"Filter by Tag";return l.a.createElement("div",null,l.a.createElement("div",{className:"row flex-spaces child-borders"},l.a.createElement("label",{className:"paper-btn margin",htmlFor:"tag-modal",disabled:s.feed},E)),l.a.createElement("input",{className:"modal-state",id:"tag-modal",type:"checkbox",disabled:s.feed}),l.a.createElement("div",{className:"modal",style:{zIndex:2}},l.a.createElement("label",{className:"modal-bg",htmlFor:"tag-modal"}),l.a.createElement("div",{className:"modal-body"},l.a.createElement("label",{className:"btn-close",htmlFor:"tag-modal"},"X"),l.a.createElement("h4",{className:"modal-title"},"Tags"),l.a.createElement("h5",{className:"modal-text"},"Click on a tag to filter the posts."),r.map((function(e){return l.a.createElement("button",{key:e,className:"btn-small margin-small",onClick:function(){d(e),m()}},"#".concat(e))})),l.a.createElement("button",{className:"btn-small btn-primary margin-small",onClick:function(){d(""),m()}},"Clear"))))},S=function(){var e=Object(n.useContext)(p)[0],t=Object(n.useContext)(N),a=t[0],r=t[1];return e.id?l.a.createElement("button",{onClick:function(){r({feed:!a.feed})},className:a.feed?"btn-primary":""},"Feed"):null},I=function(){return l.a.createElement("div",null,l.a.createElement(j,null,l.a.createElement("div",{className:"squished-buttons"},l.a.createElement(S,null),l.a.createElement(C,null)),l.a.createElement(w,null)))},T=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,e.title),e.children)},A=function(){var e=l.a.createElement("div",null,l.a.createElement("p",null,"React (or any another popular Front-end framework) was sorely missing from my list of skills. So this project is an attempt to remedy that."),l.a.createElement("p",null,"I had often seen the RealWorld repo pop up on GitHub and thought it would be a good project to get going on. However, in an effort to reduce the temptation of looking at their already complete React implementation I decided to use an entirely new UI design."),l.a.createElement("p",null,"As the backend being used is open to everyone for development purposes don't expect to find great content."));return l.a.createElement("div",null,l.a.createElement(T,{title:"About"},e))},P=function(e){var t=e.article,a=e.comment,r=Object(n.useContext)(p),c=r[0],s=r[2],i=l.a.createElement("button",{className:"btn-small",style:{float:"right"},onClick:function(){s("articles/".concat(t.slug,"/comments/").concat(a.id),{method:"DELETE"},(function(e){e&&window.location.reload()}))}},"Delete");return l.a.createElement("div",{className:"padding margin"},a.author.username===c.username?i:null,l.a.createElement("div",null,a.body),l.a.createElement("span",{className:"article-meta"},"Written by ",l.a.createElement(o.b,{to:"/user/".concat(a.author.username)},a.author.username," "),"on ",new Date(a.createdAt).toLocaleDateString()))},B=function(e){var t=Object(n.useContext)(p),a=t[0],r=t[2],c=e.article;return l.a.createElement("div",{className:"row flex-edges"},a.id?l.a.createElement("textarea",{id:"comment-in",className:"form-group col sm-8",placeholder:"My cordial thoughts..."}):null,l.a.createElement("button",{className:"col sm-3",onClick:function(e){var t=JSON.stringify({comment:{body:document.getElementById("comment-in").value}});r("articles/".concat(c.slug,"/comments"),{method:"POST",body:t,headers:{"content-type":"application/json;charset=UTF-8"}},(function(e){e.comment&&window.location.reload()}))},disabled:!a.id},"Comment"))},L=function(e){var t=e.comments;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",{className:"margin-small"},"Comments (",t.length,")")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"child-borders"},t.reverse().map((function(t){return l.a.createElement(P,{key:t.id,comment:t,article:e.article})}))),l.a.createElement(B,{article:e.article})))},D=a(20),F=function(e){var t=Object(n.useContext)(p)[0],a=Object(n.useContext)(p)[2],r=Object(n.useState)({}),c=Object(u.a)(r,2),s=c[0],i=c[1],m=Object(n.useState)([]),d=Object(u.a)(m,2),E=d[0],b=d[1];if(Object(n.useEffect)((function(){var t=e.match.params.slug;a("articles/".concat(t),{},(function(e){e.article&&i(e.article)})),a("articles/".concat(t,"/comments"),{},(function(e){e.comments&&b(e.comments)}))}),[e.match.params.slug,a]),void 0===s.title)return l.a.createElement("div",null);var f,g=s.author.username;s.tagList.length>0&&(f=s.tagList.reduce((function(e,t){return"".concat(e," #").concat(t)}),""));var y=l.a.createElement(o.b,{to:"/editor/".concat(s.slug),className:"paper-btn",style:{float:"right"}},"\u270e Edit");return l.a.createElement("article",{className:"article"},t.username===g?y:null,l.a.createElement("h1",{className:"article-title"},s.title),l.a.createElement("p",{className:"text-lead"},s.description),l.a.createElement("p",{className:"article-meta"},"Written by ",l.a.createElement(o.b,{to:"/user/".concat(g)},g," "),"on ",new Date(s.createdAt).toLocaleDateString()),l.a.createElement(D.a,null,s.body),l.a.createElement("p",{className:"article-meta"}," ",f," "),l.a.createElement("div",{className:"squished-buttons margin-bottom-large"},l.a.createElement(v,{article:s}),l.a.createElement(h,{user:s.author})),l.a.createElement(L,{comments:E,article:s}))},U=function(e){var t=Object(n.useContext)(p),a=t[0],r=t[2],c=e.profile,o=Object(n.useState)(c.following),s=Object(u.a)(o,2),i=s[0],m=s[1];return l.a.createElement("button",{className:i?"btn-primary":"",onClick:function(){r("profiles/".concat(c.username,"/follow"),{method:i?"DELETE":"POST"},(function(e){e.profile&&m(e.profile.following)}))},disabled:!a.id},i?"Following \u2714":"Follow ?")},M=function(e){var t=Object(n.useContext)(p)[0],a=Object(n.useContext)(p)[2],r=Object(n.useState)({}),c=Object(u.a)(r,2),o=c[0],i=c[1];if(Object(n.useEffect)((function(){var t=e.match.params.user;a("profiles/".concat(t),{},(function(e){i(e.profile)}))}),[e.match.params.user,a]),!o||void 0===o.username)return l.a.createElement("div",null);if(o.username===t.username)return l.a.createElement(s.a,{to:"/profile"});var m=o.bio?o.bio:"".concat(o.username," wishes to remain mysterious."),E={author:o.username,limit:10,offset:0};return l.a.createElement("div",null,l.a.createElement("div",{className:"card",style:{maxWidth:"20rem"}},l.a.createElement("img",{src:o.image||d,className:"avatar",alt:"User Avatar"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},o.username),l.a.createElement("h5",{className:"card-subtitle"},m),l.a.createElement("div",{className:"row flex-center"},l.a.createElement(U,{profile:o})))),l.a.createElement(j,{queryParams:E},l.a.createElement(w,null)))},R=(a(34),function(e){var t=Object(n.useContext)(p),a=Object(u.a)(t,3),r=a[0],c=a[1],o=a[2],s=Object(n.useState)(r.id?1:0),i=Object(u.a)(s,2),m=i[0],d=i[1],E=Object(n.useState)([]),b=Object(u.a)(E,2),f=b[0],g=b[1],h="/signup"===e.match.path,v=function(e){if(e.user)d(1),c(e.user),localStorage.setItem("token",e.user.token);else if(e.ok)console.error(e);else{var t=e.errors,a=Object.keys(t).map((function(e){return"".concat(e,": ").concat(t[e].join(", "))}));g(a),d(2)}},y=function(){var e={user:{email:document.getElementById("email").value,password:document.getElementById("password").value}};h&&(e.user.username=document.getElementById("username").value),o(h?"users":"users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},v)},N=l.a.createElement("div",{className:"alert alert-danger",id:"errorMsg"},l.a.createElement("p",null,h?"Error registering":"Error logging in"),l.a.createElement("ul",null,f.map((function(e){return l.a.createElement("li",{key:e},e)})))),j=l.a.createElement("div",null,l.a.createElement("form",{className:"form-group"},l.a.createElement("input",{className:"input-block",type:"text",placeholder:"Email",id:"email",autoComplete:"email"}),l.a.createElement("br",null),l.a.createElement("input",{className:"input-block",type:"password",placeholder:"Password",id:"password",autoComplete:"current-password"})),l.a.createElement("button",{onClick:y},"Submit")),O=l.a.createElement("div",null,l.a.createElement("form",{className:"form-group"},l.a.createElement("input",{className:"input-block",type:"text",placeholder:"Email",id:"email",autoComplete:"email"}),l.a.createElement("br",null),l.a.createElement("input",{className:"input-block",type:"text",placeholder:"Username",id:"username",autoComplete:"username"}),l.a.createElement("br",null),l.a.createElement("input",{className:"input-block",type:"password",placeholder:"Password",id:"password",autoComplete:"new-password"})),l.a.createElement("button",{onClick:y},"Submit")),x=l.a.createElement("div",{className:"alert alert-success"},"Hi ",r.username,"! You are logged in."),k=h?O:j,w=l.a.createElement("div",null,2===m?N:null,1!==m?k:x);return l.a.createElement("div",null,l.a.createElement(T,{title:h?"Sign up":"Sign in"},w))}),W=function(){var e=Object(n.useContext)(p)[0];if(!e.id)return l.a.createElement("div",{className:"alert alert-danger margin-top-large"},"You must be logged in to see this page.");var t=e.bio?e.bio:"".concat(e.username," wishes to remain mysterious."),a={author:e.username,limit:10,offset:0};return l.a.createElement("div",null,l.a.createElement("div",{className:"card",style:{maxWidth:"20rem"}},l.a.createElement("img",{src:e.image||d,className:"avatar",alt:"User Avatar"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},e.username),l.a.createElement("h5",{className:"card-subtitle"},t),l.a.createElement("div",{className:"row flex-edges margin-top"},l.a.createElement(o.b,{to:"/editor",className:"paper-btn"},"\u270e Create Article"),l.a.createElement(o.b,{to:"/profile/settings",className:"paper-btn"},"\u2699 Settings")))),l.a.createElement(T,{title:"My Articles"},l.a.createElement(j,{queryParams:a},l.a.createElement(w,null))))},q=function(){var e=Object(n.useContext)(p),t=Object(u.a)(e,3),a=t[0],r=t[1],c=t[2],o=Object(n.useState)(0),s=Object(u.a)(o,2),i=s[0],m=s[1],d=Object(n.useState)([]),E=Object(u.a)(d,2),b=E[0],f=E[1];if(!a.id)return l.a.createElement("div",{className:"alert alert-danger margin-top-large"},"You must be logged in to see this page.");var g=function(e){if(e.user)r(e.user),m(1);else if(e.ok)console.error(e);else{var t=e.errors,a=Object.keys(t).map((function(e){return"".concat(e,": ").concat(t[e].join(", "))}));f(a),m(2)}},h=l.a.createElement("div",{className:"alert alert-success"},"You have updated your profile!"),v=l.a.createElement("div",{className:"alert alert-danger",id:"errorMsg"},l.a.createElement("p",null,"Error updating profile"),l.a.createElement("ul",null,b.map((function(e){return l.a.createElement("li",{key:e},e)})))),y=l.a.createElement("div",null,l.a.createElement("form",{className:"form-group"},l.a.createElement("input",{className:"input-block",type:"text",placeholder:a.email,id:"email",autoComplete:"email"}),l.a.createElement("br",null),l.a.createElement("input",{className:"input-block",type:"text",placeholder:a.username,id:"username",autoComplete:"username"}),l.a.createElement("br",null),l.a.createElement("input",{className:"input-block",type:"password",placeholder:"New Password",id:"password",autoComplete:"new-password"}),l.a.createElement("br",null),l.a.createElement("input",{className:"input-block",type:"text",placeholder:"Something about me...",id:"bio"}),l.a.createElement("br",null),l.a.createElement("input",{className:"input-block",type:"text",placeholder:"Image URL",id:"image"})),l.a.createElement("button",{onClick:function(){var e={user:{}};["email","username","password","image","bio"].forEach((function(t){var a=document.getElementById(t).value;""!==a&&(e.user[t]=a)})),0!==Object.entries(e.user).length&&c("user",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},g)}},"Submit"));return l.a.createElement(T,{title:"Settings"},2===i?v:null,1!==i?y:h)},J=function(e){var t=Object(n.useContext)(p)[0],a=Object(n.useContext)(p)[2],r=Object(n.useState)(0),c=Object(u.a)(r,2),s=c[0],i=c[1],m=Object(n.useState)([]),d=Object(u.a)(m,2),E=d[0],b=d[1],f=e.match.params.slug;Object(n.useEffect)((function(){f?a("articles/".concat(f),{},(function(e){if(e.article){var a=e.article;a.author.username!==t.username?i(3):(i(0),document.getElementById("title").value=a.title,document.getElementById("description").value=a.description,document.getElementById("body").value=a.body,document.getElementById("tags").value=a.tagList.join(", "))}})):t.id?i(0):i(3)}),[f,a,t.username,t.id]);var g=function(e){if(e.article)f=e.article.slug,i(1);else if(e.ok)console.error(e);else{var t=e.errors,a=Object.keys(t).map((function(e){return"".concat(e,": ").concat(t[e].join(", "))}));b(a),i(2)}},h=l.a.createElement("div",null,l.a.createElement("div",{className:"alert alert-success"},"Article ",f?"updated":"submitted","!"),l.a.createElement(o.b,{className:"paper-btn",to:"/article/".concat(f)},"Read it!")),v=l.a.createElement("div",{className:"alert alert-danger margin-top-large"},"Authorization error. Are you logged in?"),y=l.a.createElement("div",{className:"alert alert-danger",id:"errorMsg"},l.a.createElement("p",null,"Error ",f?"updating":"submitting"," article"),l.a.createElement("ul",null,E.map((function(e){return l.a.createElement("li",{key:e},e)})))),N=l.a.createElement("div",{style:{float:"right"}},l.a.createElement("label",{className:"paper-btn btn-danger margin-top",htmlFor:"delete-modal"},"\ud83c\udd87 Delete"),l.a.createElement("input",{className:"modal-state",id:"delete-modal",type:"checkbox"}),l.a.createElement("div",{className:"modal",style:{zIndex:2}},l.a.createElement("label",{className:"modal-bg",htmlFor:"delete-modal"}),l.a.createElement("div",{className:"modal-body"},l.a.createElement("label",{className:"btn-close",htmlFor:"delete-modal"},"X"),l.a.createElement("h4",{className:"modal-title"},"Are you sure?"),l.a.createElement("h5",{className:"modal-text"},"Click the button below to delete this article."),l.a.createElement("button",{className:"btn-danger",style:{margin:"auto",display:"block"},onClick:function(){a("articles/".concat(f),{method:"DELETE"},(function(t){e.history.push("/profile")}))}},"\ud83c\udd87 Delete")))),j=l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Title",id:"title",style:{width:"60%"}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Description",id:"description",style:{width:"80%"}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{placeholder:"Article Body",className:"padding",id:"body",style:{width:"100%",minHeight:"10rem"}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"tags"},"Tags"),l.a.createElement("input",{type:"text",placeholder:"code, monkeys, pi",id:"tags",style:{width:"50%"}})),l.a.createElement("div",null,l.a.createElement("button",{className:"margin-top",onClick:function(){var e={article:{}},t=e.article;["title","description","body"].forEach((function(e){t[e]=document.getElementById(e).value}));var n=document.getElementById("tags").value;n.length>0&&(t.tagList=n.split(", "));var l=f?"articles/".concat(f):"articles";a(l,{method:f?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},g)}},f?"Update":"Post"),f?N:null));return 3===s?l.a.createElement(T,{title:"Editor"},v):l.a.createElement(T,{title:"Editor"},2===s?y:null,1!==s?j:h)};var z=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"paper container"},l.a.createElement(E,null,l.a.createElement(b,null),l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/",exact:!0,component:I}),l.a.createElement(s.b,{path:"/about",exact:!0,component:A}),l.a.createElement(s.b,{path:"/profile",exact:!0,component:W}),l.a.createElement(s.b,{path:"/profile/settings",exact:!0,component:q}),l.a.createElement(s.b,{path:"/article/:slug",exact:!0,component:F}),l.a.createElement(s.b,{path:"/user/:user",exact:!0,component:M}),l.a.createElement(s.b,{path:"/signin",exact:!0,component:R}),l.a.createElement(s.b,{path:"/signup",exact:!0,component:R}),l.a.createElement(s.b,{path:"/editor",exact:!0,component:J}),l.a.createElement(s.b,{path:"/editor/:slug",exact:!0,component:J})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.796673ac.chunk.js.map