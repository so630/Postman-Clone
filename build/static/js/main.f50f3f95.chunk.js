(this["webpackJsonppostman-clone"]=this["webpackJsonppostman-clone"]||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(18),c=n.n(i),l=n(2),o=(n(24),n(3)),s=(n(25),n(0));function d(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"key"+t.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:t.handleChange})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"value"+t.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:t.handleChange})})]})}var u=function(t){var e=r.a.useState([{}]),n=Object(l.a)(e,2),a=n[0],i=n[1];function c(e){var n="key"==e.target.name.substring(0,3)?e.target.name.substring(0,3):e.target.name.substring(0,5),r=e.target.value,c="key"==e.target.name.substring(0,3)?e.target.name.substring(3):e.target.name.substring(5),l=[];i((function(e){e[c][n]=r,l=Object(o.a)(e),console.log(l);var i="?";return l.map((function(t,n){if(!t.value||!t.key)return Object(o.a)(e);n==a.length-1?i+=t.key+"="+t.value:i+=t.key+"="+t.value+"&"})),"?"==i||(console.log(i),t.submit(i)),Object(o.a)(e)}))}function u(t){var e=t.target.name;"add"==e?i((function(t){return[].concat(Object(o.a)(t),[{}])})):"delete"==e&&i((function(t){if(1==t.length)return Object(o.a)(t);var e=t;return e.pop(),Object(o.a)(e)}))}return Object(s.jsxs)("div",{style:{textAlign:"center",marginLeft:"5%",marginRight:"5%"},children:[Object(s.jsxs)("table",{border:"1",width:"100%",ID:"Table2",style:{marginTop:"20px",fontFamily:"Montserrat"},children:[Object(s.jsx)("th",{className:"fifty",children:"Keys"}),Object(s.jsx)("th",{children:"Values"}),a.map((function(t,e){return Object(s.jsx)(d,{id:e,handleChange:c})}))]}),Object(s.jsxs)("div",{style:{textAlign:"right",marginTop:"10px"},children:[Object(s.jsx)("button",{name:"delete",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right",marginRight:"5px"},onClick:u,children:"Delete Key"}),Object(s.jsx)("button",{name:"add",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right"},onClick:u,children:"Add Key"})]})]})};n(27);function b(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"key"+t.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:t.handleChange})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"value"+t.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:t.handleChange})})]})}var j=function(t){var e=r.a.useState({}),n=Object(l.a)(e,2),a=n[0],i=n[1],c=r.a.useState([1]),d=Object(l.a)(c,2),u=d[0],j=d[1];function h(){var e=document.querySelectorAll("#Table2 tr");(e=Array(e)).map((function(e){console.log(e.length);var n={};e.forEach((function(t){var e=t.childNodes[0].childNodes[0].value,a=t.childNodes[1].childNodes[0].value;""!=e&&""!=a&&(n[e]=a)})),i(n),t.submit(n)}))}function p(t){var e=t.target.name;j("add"==e?function(t){return[].concat(Object(o.a)(t),[t[t.length-1]+1])}:function(t){var e=t;return e.pop(),Object(o.a)(e)})}return Object(s.jsxs)("div",{style:{marginLeft:"5%",marginRight:"5%"},children:[Object(s.jsxs)("table",{border:"1",width:"100%",ID:"Table2",style:{marginTop:"20px",fontFamily:"Montserrat"},children:[Object(s.jsx)("th",{className:"fifty",children:"Data key"}),Object(s.jsx)("th",{children:"Values"}),u.map((function(t,e){return console.log(t),Object(s.jsx)(b,{id:e,handleChange:h})})),console.log(a)]}),Object(s.jsxs)("div",{style:{textAlign:"right",marginTop:"10px"},children:[Object(s.jsx)("button",{name:"delete",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right",marginRight:"5px"},onClick:p,children:"Delete Data"}),Object(s.jsx)("button",{name:"add",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right"},onClick:p,children:"Add Data"})]})]})};n(28),n(47);function h(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"key"+t.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:t.handlechange})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"value"+t.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:t.handlechange})})]})}var p=function(t){var e=r.a.useState({}),n=Object(l.a)(e,2),a=(n[0],n[1]),i=r.a.useState([1]),c=Object(l.a)(i,2),d=c[0],u=c[1];function b(){var e,n=document.querySelectorAll("#table3 tr");(n=Array(n)).map((function(t){console.log(t.length),e={},t.forEach((function(t){var n=t.childNodes[0].childNodes[0].value,a=t.childNodes[1].childNodes[0].value;""!=n&&""!=a&&(e[n]=a)})),a(e)})),t.submit(e)}function j(t){var e=t.target.name;u("add"==e?function(t){return[].concat(Object(o.a)(t),[t[t.length-1]+1])}:function(t){var e=t;return e.pop(),Object(o.a)(e)})}return Object(s.jsxs)("div",{style:{marginLeft:"5%",marginRight:"5%"},children:[Object(s.jsxs)("table",{border:"1",width:"100%",ID:"table3",style:{marginTop:"20px",fontFamily:"Montserrat"},children:[Object(s.jsx)("th",{className:"fifty",children:"Header"}),Object(s.jsx)("th",{children:"Values"}),d.map((function(t,e){return Object(s.jsx)(h,{id:e,handlechange:b})}))]}),Object(s.jsxs)("div",{style:{textAlign:"right",marginTop:"10px"},children:[Object(s.jsx)("button",{name:"delete",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right",marginRight:"5px"},onClick:j,children:"Delete Header"}),Object(s.jsx)("button",{name:"add",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right"},onClick:j,children:"Add Header"})]})]})},x=n(19),g=n.n(x);var m=function(){var t=r.a.useState(!1),e=Object(l.a)(t,2),n=e[0],a=e[1],i=r.a.useState(!1),c=Object(l.a)(i,2),o=c[0],d=c[1],b=r.a.useState(!1),h=Object(l.a)(b,2),x=h[0],m=h[1],O=r.a.useState({}),y=Object(l.a)(O,2),f=y[0],v=y[1],C=r.a.useState({}),k=Object(l.a)(C,2),S=k[0],A=k[1],T=r.a.useState({}),N=Object(l.a)(T,2),w=N[0],R=N[1];function D(){n?a(!1):(a(!0),d(!1),m(!1))}function q(){o?d(!1):(d(!0),a(!1),m(!1))}function E(){x?m(!1):(m(!0),d(!1),a(!1))}return Object(s.jsxs)("div",{style:{textAlign:"center"},children:[Object(s.jsxs)("div",{class:"api",children:[Object(s.jsxs)("select",{className:"requests",children:[Object(s.jsx)("option",{value:"get",children:"GET"}),Object(s.jsx)("option",{value:"post",children:"POST"}),Object(s.jsx)("option",{value:"put",children:"PUT"}),Object(s.jsx)("option",{value:"delete",children:"DELETE"}),Object(s.jsx)("option",{value:"patch",children:"PATCH"})]}),Object(s.jsx)("input",{id:"url",type:"url",className:"form-control",style:{height:"32px",width:"45%",display:"inline",borderRadius:"0"}}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary",style:{marginLeft:"47px",padding:"2px 10px",position:"relative",bottom:"2.5px",borderRadius:"3px"},onClick:function(){var t=document.getElementById("url").value,e={method:document.querySelector("select").value,url:t,data:S,headers:w};console.log(JSON.stringify(e)),fetch("/req",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){t.json().then((function(t){return v(JSON.parse(t).data)}))}))},children:"Send"})]}),Object(s.jsxs)("div",{style:{textAlign:"center"},children:[Object(s.jsx)("button",{onClick:D,type:"button",className:"btn btn-primary",style:{padding:"2px 10px",borderRadius:"3px",marginTop:"30px",marginRight:"2.5%"},children:"Show Keys"}),Object(s.jsx)("button",{onClick:q,type:"button",className:"btn btn-primary",style:{padding:"2px 10px",borderRadius:"3px",marginTop:"30px",marginRight:"2.5%"},children:"Show Data"}),Object(s.jsx)("button",{onClick:E,type:"button",className:"btn btn-primary",style:{padding:"2px 10px",borderRadius:"3px",marginTop:"30px",marginRight:"2.5%"},children:"Show headers"})]}),Object(s.jsxs)("div",{style:{textAlign:"center",width:"55%",marginRight:"20%",marginLeft:"20%"},children:[n?Object(s.jsx)(u,{submit:function(t){var e=document.querySelector("input.form-control").value.indexOf("?");-1==e?document.querySelector("input.form-control").value+=t:document.querySelector("input.form-control").value=document.querySelector("input.form-control").value.substring(0,e)+t},set:D}):null,o?Object(s.jsx)(j,{submit:function(t){t!={}&&A(t)},set:q}):null,x?Object(s.jsx)(p,{set:E,submit:function(t){t!={}&&R(t)}}):null]}),Object(s.jsxs)("div",{style:{textAlign:"left",marginTop:"60px"},children:[Object(s.jsx)("h5",{style:{color:"gray"},children:"Response"}),Object(s.jsx)("div",{style:{height:"300px",overflow:"scroll",borderTop:"1px solid #343a40"},children:Object(s.jsx)(g.a,{src:f})})]})]})};var O=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(m,{})})};c.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.f50f3f95.chunk.js.map