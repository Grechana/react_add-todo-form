(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),o=a(1),l=(a(13),a(0)),u=function(e){var t=e.user,a=t.email,n=t.name;return Object(l.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},d=function(e){var t=e.todo,a=t.user&&Object(l.jsx)(u,{user:t.user}),n="TodoInfo ".concat(t.completed?"TodoInfo--completed":"");return Object(l.jsxs)("article",{className:n,children:[Object(l.jsx)("h2",{className:"TodoInfo__title",children:t.title}),a]})},m=function(e){var t=e.todos;return Object(l.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(l.jsx)(d,{todo:e},e.id)}))})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function b(e){return j.find((function(t){return t.id===e}))||null}var h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:b(e.userId)})})),O=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),c=Object(s.a)(i,2),u=c[0],d=c[1],O=Object(o.useState)(h),p=Object(s.a)(O,2),f=p[0],x=p[1],v=Object(o.useState)(!1),S=Object(s.a)(v,2),y=S[0],I=S[1],N=Object(o.useState)(!1),g=Object(s.a)(N,2),C=g[0],_=g[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),u||_(!0),a.trim()||I(!0);var t=Math.max.apply(Math,Object(r.a)(f.map((function(e){return e.id}))));if(u&&a){var i={id:t+1,title:a,completed:!1,userId:u,user:b(u)};x([].concat(Object(r.a)(f),[i])),n(""),d(0)}},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{htmlFor:"titleInput",children:"Title: \xa0"}),Object(l.jsx)("input",{type:"text",id:"titleInput","data-cy":"titleInput",value:a,placeholder:"Enter a title",onChange:function(e){n(e.target.value),I(!1)}}),y&&Object(l.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{htmlFor:"userSelect",children:"User: \xa0"}),Object(l.jsxs)("select",{"data-cy":"userSelect",id:"userSelect",name:"user",value:u||"0",onChange:function(e){d(+e.target.value),_(!1)},children:[Object(l.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),j.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),C&&Object(l.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(l.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(l.jsx)(m,{todos:f})]})};i.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.95862f34.chunk.js.map