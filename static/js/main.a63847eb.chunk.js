(this["webpackJsonptodo-mvc"]=this["webpackJsonptodo-mvc"]||[]).push([[0],{23:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(5),o=c.n(a),s=c(3),i="ADD_TODO",l="TOGGLE_TODO",j="FILTER_TODO",d="ALL_TOGGLE_TODO",u="CLEAR_COMPLETED",b="DEL_TODO",O=2,h=function(){return{type:d}},m=c(0);var f=function(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.todos.items})).filter((function(e){return!e.done})).length,c=function(t){return e(function(e){return{type:j,payload:e}}(t))};return Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsxs)("span",{className:"todo-count",children:[Object(m.jsx)("strong",{children:t}),"item left"]}),Object(m.jsxs)("ul",{className:"filters",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#/all",onClick:function(){return c("all")},children:"All"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#/active",onClick:function(){return c("active")},children:"Active"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#/completed",onClick:function(){return c("completed")},children:"Completed"})})]}),Object(m.jsx)("button",{className:"clear-completed",onClick:function(){return e({type:u})},children:"Clear completed"})]})},p=c(12);var x=function(){var e=Object(s.c)(),t=Object(n.useState)(""),c=Object(p.a)(t,2),r=c[0],a=c[1];return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{children:"todos"}),Object(m.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:function(e){a(e.target.value)},onKeyDown:function(t){var c;"Enter"===t.key&&(""!==r.trim()&&(e((c=r.trim(),{type:i,payload:{id:O++,text:c,done:!1}})),a("")))},value:r})]})},v=function(e){return e.todos.items.filter((function(t){switch(e.todos.filterType){case"all":return!0;case"active":return!t.done;case"completed":return t.done;default:return!0}}))};var y=function(e){var t=e.id,c=e.text,n=e.done,r=Object(s.c)();return Object(m.jsxs)("li",{className:n?"completed":"",children:[Object(m.jsxs)("div",{className:"view",children:[Object(m.jsx)("input",{className:"toggle",type:"checkbox",checked:n,onChange:function(){r(function(e){return{type:l,payload:e}}(t))}}),Object(m.jsx)("label",{children:c}),Object(m.jsx)("button",{className:"destroy",onClick:function(){return r(function(e){return{type:b,payload:e}}(t))}})]}),Object(m.jsx)("input",{className:"edit",defaultValue:"Create a TodoMVC template"})]})};var g=function(){var e=Object(s.c)(),t=Object(s.d)(v),c=Object(s.d)(h).payload,n=t.map((function(e){return Object(m.jsx)(y,{id:e.id,text:e.text,done:e.done},e.id)}));return Object(m.jsxs)("section",{className:"main",children:[Object(m.jsx)("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",checked:c,onChange:function(){return e(h())}}),Object(m.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(m.jsx)("ul",{className:"todo-list",children:n})]})};var C=function(){return Object(m.jsxs)("section",{className:"todoapp",children:[Object(m.jsx)(x,{}),Object(m.jsx)(g,{}),Object(m.jsx)(f,{})]})};var N=Object(s.b)()((function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(C,{}),Object(m.jsxs)("footer",{className:"info",children:[Object(m.jsx)("p",{children:"Double-click to edit a todo"}),Object(m.jsxs)("p",{children:["Template by ",Object(m.jsx)("a",{href:"http://sindresorhus.com",children:"Sindre Sorhus"})]}),Object(m.jsxs)("p",{children:["Created by ",Object(m.jsx)("a",{href:"http://todomvc.com",children:"you"})]}),Object(m.jsxs)("p",{children:["Part of ",Object(m.jsx)("a",{href:"http://todomvc.com",children:"TodoMVC"})]})]})]})})),T=c(10),k=c(11),D=c(2),E={filterType:"all",items:[{id:1,text:"React",done:!1}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var c=Object(D.a)({},t.payload);return Object(D.a)(Object(D.a)({},e),{},{items:[].concat(Object(k.a)(e.items),[c])});case l:var n=t.payload,r=e.items.map((function(e){return e.id!==n?e:Object(D.a)(Object(D.a)({},e),{},{done:!e.done})}));return Object(D.a)(Object(D.a)({},e),{},{items:r});case j:var a=t.payload;return Object(D.a)(Object(D.a)({},e),{},{filterType:a});case d:var o=e.items.find((function(e){return!1===e.done})),s=e.items.map((function(e){return o?Object(D.a)(Object(D.a)({},e),{},{done:!0}):Object(D.a)(Object(D.a)({},e),{},{done:!1})}));return Object(D.a)(Object(D.a)({},e),{},{items:s});case u:var O=e.items.filter((function(e){return!e.done}));return Object(D.a)(Object(D.a)({},e),{},{items:O});case b:var h=e.items.filter((function(e){return e.id!==t.payload}));return Object(D.a)(Object(D.a)({},e),{},{items:h});default:return e}},w=Object(T.b)(Object(T.a)({todos:L}));c(22);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(s.a,{store:w,children:Object(m.jsx)(N,{})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a63847eb.chunk.js.map