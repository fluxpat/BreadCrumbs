(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){},28:function(e,t,a){e.exports=a(60)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),s=a.n(c),l=a(9),o=(a(33),a(3)),u=a(1),i=(a(34),a(35),a(8)),m=a.n(i),p=(a(24),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),p=i[0],d=i[1],h=Object(n.useState)(""),b=Object(o.a)(h,2),g=b[0],E=b[1];return r.a.createElement("div",{className:"Auth easeIn"},r.a.createElement("h1",null,"Signup"),r.a.createElement("p",null,"Already have an account?"),r.a.createElement(l.b,{className:"link",to:"/"},"Click here to login"),r.a.createElement("form",{className:"auth-form",autoComplete:"off",onSubmit:function(t){t.preventDefault(),function(e,t){return m.a.post("".concat("https://breadcrumb.herokuapp.com","/api/auth/signup"),{username:e,password:t},{withCredentials:!0}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(c,p).then((function(t){s(""),d(""),e.setUser(t),t.message?E(t.message):e.history.push("/")})).catch((function(e){return console.log(e)}))}},r.a.createElement("div",{className:"credentials"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",name:"username",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"credentials"},r.a.createElement("label",null,"Password: "),r.a.createElement("input",{type:"password",name:"password",value:p,onChange:function(e){return d(e.target.value)}})),r.a.createElement("input",{className:"button",type:"submit",value:"Signup"})),g?r.a.createElement("p",{className:"error"},g):r.a.createElement(r.a.Fragment,null))}),d=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),p=i[0],d=i[1],h=Object(n.useState)(""),b=Object(o.a)(h,2),g=b[0],E=b[1];return r.a.createElement("div",{className:"Auth easeIn"},r.a.createElement("h1",null,"Login"),r.a.createElement("p",null,"Don't have an account?"),r.a.createElement(l.b,{to:"/signup"},"Click here to signup"),r.a.createElement("form",{className:"auth-form",autoComplete:"off",onSubmit:function(t){t.preventDefault(),function(e,t){return m.a.post("".concat("https://breadcrumb.herokuapp.com","/api/auth/login"),{username:e,password:t},{withCredentials:!0}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(c,p).then((function(t){s(""),d(""),e.setUser(t),t.message&&E(t.message)})).catch((function(e){console.log(e)}))}},r.a.createElement("div",{className:"credentials"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",name:"username",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"credentials"},r.a.createElement("label",null,"Password: "),r.a.createElement("input",{type:"password",name:"password",value:p,onChange:function(e){return d(e.target.value)}})),r.a.createElement("input",{className:"button",type:"submit",value:"Login"})),g?r.a.createElement("p",{className:"error"},g):r.a.createElement(r.a.Fragment,null))},h=function(e){var t=e.setUser;return r.a.createElement("div",{className:"Homepage"},r.a.createElement("div",{className:"home-intro fadeIn"},r.a.createElement("h1",{className:"logo easeIn"},"BreadCrumbs"),r.a.createElement("p",{className:"home-intro-text easeIn"},"Self-reflection is a key part of personal development. Documenting and reflecting on our progress helps us continuously improve with direction and purpose. BreadCrumbs provides a simple system for logging your thoughts and state of mind allowing you to look back and reflect as you change and grow over time."),r.a.createElement("img",{className:"brioche breadJiggle",src:"/Brioche.png",alt:"Brioche bun"})),r.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(d,Object.assign({},e,{setUser:t}))}}),r.a.createElement(u.a,{exact:!0,path:"/signup",render:function(e){return r.a.createElement(p,Object.assign({},e,{setUser:t}))}}))},b=(a(58),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),i=u[0],p=u[1],d=Object(n.useState)(!0),h=Object(o.a)(d,2),b=h[0],g=h[1];return r.a.createElement("div",{className:"User-page"},r.a.createElement("div",{className:"feed"},r.a.createElement("form",{className:"quick-post",autoComplete:"off",onSubmit:function(t){t.preventDefault(),c?(m.a.post("".concat("https://breadcrumb.herokuapp.com","/api/crumb/").concat(e.user._id,"/newpost"),{title:i,text:c},{withCredentials:!0}).then((function(t){e.setUser(t.data)})),s(""),p(""),g(!0)):(g(!1),m.a.get("".concat("https://breadcrumb.herokuapp.com","/api/auth/loggedin"),{withCredentials:!0}).then((function(t){e.setUser(t.data)})))}},r.a.createElement("div",{className:"quick-post-header"},r.a.createElement("h3",null,"Make a quick-post"),b?r.a.createElement("h4",null," "):r.a.createElement("h4",null,"Cannot submit an empty post")),r.a.createElement("input",{type:"text",name:"title",value:i,placeholder:"Title",onChange:function(e){return p(e.target.value)}}),r.a.createElement("textarea",{type:"text",name:"text",value:c,placeholder:"Write your thoughts here...",onChange:function(e){return s(e.target.value)},id:"txtInput"}),r.a.createElement("button",{type:"submit"},"submit")),e.user.crumbs.map((function(t){return r.a.createElement("div",{className:"post",key:t._id},r.a.createElement("div",{className:"post-header"},r.a.createElement("h4",null,t.created_at.slice(0,10)),r.a.createElement("div",{className:"rubbish-div"},r.a.createElement("img",{src:"./rubbish.png",alt:"delete post",className:"rubbish-icon",title:"Delete Post",onClick:function(){return a=t._id,void m.a.post("".concat("https://breadcrumb.herokuapp.com","/api/crumb/deletePost"),{postId:a},{withCredentials:!0}).then((function(t){e.setUser(t.data)}));var a}}))),r.a.createElement("h3",null,t.title),r.a.createElement("p",null,t.text))}))),r.a.createElement("div",{className:"sidebar"}))}),g=(a(59),function(e){var t=function(){window.scrollTo({top:0,behavior:"smooth"})};return r.a.createElement("div",{className:"Navbar easeInTop"},r.a.createElement("div",{className:"nav-content"},r.a.createElement("h2",{className:"nav-logo",title:"Home",onClick:t},"BreadCrumbs"),r.a.createElement("div",{className:"nav-buttons"},r.a.createElement("div",{className:"nav-button-div",onClick:t},r.a.createElement("img",{src:"./home.png",alt:"home",title:"Scroll home",className:"home-icon"})),r.a.createElement("div",{className:"nav-button-div",onClick:function(){m.a.delete("".concat("https://breadcrumb.herokuapp.com","/api/auth/logout"),{withCredentials:!0}),e.setUser({message:"Not currently logged in"})}},r.a.createElement("img",{src:"./logout.png",alt:"logout",className:"logout-icon",title:"Logout"})),r.a.createElement("div",{className:"nav-button-div"},r.a.createElement("img",{src:"./donut.png",alt:"new post",className:"new-crumb",title:"New Post"})))))});var E=function(e){var t=Object(n.useState)(e.user),a=Object(o.a)(t,2),c=a[0],s=a[1];return r.a.createElement("div",{className:"App"},c.message?r.a.createElement(u.a,{path:"/",render:function(e){return r.a.createElement(h,Object.assign({},e,{setUser:s}))}}):r.a.createElement("div",{className:"user-app"},r.a.createElement(u.a,{path:"/",render:function(e){return r.a.createElement(g,Object.assign({},e,{user:c,setUser:s}))}}),r.a.createElement(u.a,{path:"/",render:function(e){return r.a.createElement(b,Object.assign({},e,{user:c,setUser:s}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.get("".concat("https://breadcrumb.herokuapp.com","/api/auth/loggedin"),{withCredentials:!0}).then((function(e){var t=e.data;s.a.render(r.a.createElement(l.a,null,r.a.createElement(E,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.3c9cef75.chunk.js.map