(this["webpackJsonppostman-clone"]=this["webpackJsonppostman-clone"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(18),c=n.n(r),l=n(4),o=(n(24),n(2)),s=(n(25),n(0));function d(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"key"+e.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:e.handleChange})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"value"+e.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:e.handleChange})})]})}var u=function(e){var t=i.a.useState([{}]),n=Object(l.a)(t,2),a=n[0],r=n[1];function c(t){var n="key"==t.target.name.substring(0,3)?t.target.name.substring(0,3):t.target.name.substring(0,5),i=t.target.value,c="key"==t.target.name.substring(0,3)?t.target.name.substring(3):t.target.name.substring(5),l=[];r((function(t){t[c][n]=i,l=Object(o.a)(t),console.log(l);var r="?";return l.map((function(e,n){if(!e.value||!e.key)return Object(o.a)(t);n==a.length-1?r+=e.key+"="+e.value:r+=e.key+"="+e.value+"&"})),"?"==r||(console.log(r),e.submit(r)),Object(o.a)(t)}))}function u(e){var t=e.target.name;"add"==t?r((function(e){return[].concat(Object(o.a)(e),[{}])})):"delete"==t&&r((function(e){if(1==e.length)return Object(o.a)(e);var t=e;return t.pop(),Object(o.a)(t)}))}return Object(s.jsxs)("div",{style:{textAlign:"center",marginLeft:"5%",marginRight:"5%"},children:[Object(s.jsxs)("table",{border:"1",width:"100%",ID:"Table2",style:{marginTop:"20px",fontFamily:"Montserrat"},children:[Object(s.jsx)("th",{className:"fifty",children:"Keys"}),Object(s.jsx)("th",{children:"Values"}),a.map((function(e,t){return Object(s.jsx)(d,{id:t,handleChange:c})}))]}),Object(s.jsxs)("div",{style:{textAlign:"right",marginTop:"10px"},children:[Object(s.jsx)("button",{name:"delete",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right",marginRight:"5px"},onClick:u,children:"Delete Key"}),Object(s.jsx)("button",{name:"add",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right"},onClick:u,children:"Add Key"})]})]})};n(27);function b(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"key"+e.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:e.handleChange})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"value"+e.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:e.handleChange})})]})}var j=function(e){var t=i.a.useState({}),n=Object(l.a)(t,2),a=n[0],r=n[1],c=i.a.useState([1]),d=Object(l.a)(c,2),u=d[0],j=d[1];function h(){var t=document.querySelectorAll("#Table2 tr");(t=Array(t)).map((function(t){console.log(t.length);var n={};t.forEach((function(e){var t=e.childNodes[0].childNodes[0].value,a=e.childNodes[1].childNodes[0].value;""!=t&&""!=a&&(n[t]=a)})),r(n),e.submit(n)}))}function p(e){var t=e.target.name;j("add"==t?function(e){return[].concat(Object(o.a)(e),[e[e.length-1]+1])}:function(e){var t=e;return t.pop(),Object(o.a)(t)})}return Object(s.jsxs)("div",{style:{marginLeft:"5%",marginRight:"5%"},children:[Object(s.jsxs)("table",{border:"1",width:"100%",ID:"Table2",style:{marginTop:"20px",fontFamily:"Montserrat"},children:[Object(s.jsx)("th",{className:"fifty",children:"Data key"}),Object(s.jsx)("th",{children:"Values"}),u.map((function(e,t){return console.log(e),Object(s.jsx)(b,{id:t,handleChange:h})})),console.log(a)]}),Object(s.jsxs)("div",{style:{textAlign:"right",marginTop:"10px"},children:[Object(s.jsx)("button",{name:"delete",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right",marginRight:"5px"},onClick:p,children:"Delete Data"}),Object(s.jsx)("button",{name:"add",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right"},onClick:p,children:"Add Data"})]})]})};n(28),n(47);function h(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"key"+e.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:e.handlechange})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"value"+e.id,type:"text",style:{border:"none",width:"100%"},autoComplete:"off",onChange:e.handlechange})})]})}var p=function(e){var t=i.a.useState({}),n=Object(l.a)(t,2),a=(n[0],n[1]),r=i.a.useState([1]),c=Object(l.a)(r,2),d=c[0],u=c[1];function b(){var t,n=document.querySelectorAll("#table3 tr");(n=Array(n)).map((function(e){console.log(e.length),t={},e.forEach((function(e){var n=e.childNodes[0].childNodes[0].value,a=e.childNodes[1].childNodes[0].value;""!=n&&""!=a&&(t[n]=a)})),a(t)})),e.submit(t)}function j(e){var t=e.target.name;u("add"==t?function(e){return[].concat(Object(o.a)(e),[e[e.length-1]+1])}:function(e){var t=e;return t.pop(),Object(o.a)(t)})}return Object(s.jsxs)("div",{style:{marginLeft:"5%",marginRight:"5%"},children:[Object(s.jsxs)("table",{border:"1",width:"100%",ID:"table3",style:{marginTop:"20px",fontFamily:"Montserrat"},children:[Object(s.jsx)("th",{className:"fifty",children:"Header"}),Object(s.jsx)("th",{children:"Values"}),d.map((function(e,t){return Object(s.jsx)(h,{id:t,handlechange:b})}))]}),Object(s.jsxs)("div",{style:{textAlign:"right",marginTop:"10px"},children:[Object(s.jsx)("button",{name:"delete",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right",marginRight:"5px"},onClick:j,children:"Delete Header"}),Object(s.jsx)("button",{name:"add",type:"button",class:"btn btn-dark",style:{padding:"2px 8px",textAlign:"right"},onClick:j,children:"Add Header"})]})]})},x=n(19),g=n.n(x);var m=function(){var e=i.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],r=i.a.useState(!1),c=Object(l.a)(r,2),o=c[0],d=c[1],b=i.a.useState(!1),h=Object(l.a)(b,2),x=h[0],m=h[1],y=i.a.useState({}),O=Object(l.a)(y,2),f=O[0],v=O[1],k={},C={};function S(){n?a(!1):(a(!0),d(!1),m(!1))}function A(){o?d(!1):(d(!0),a(!1),m(!1))}function T(){x?m(!1):(m(!0),d(!1),a(!1))}return Object(s.jsxs)("div",{style:{textAlign:"center"},children:[Object(s.jsxs)("div",{class:"api",children:[Object(s.jsxs)("select",{className:"requests",children:[Object(s.jsx)("option",{value:"get",children:"GET"}),Object(s.jsx)("option",{value:"post",children:"POST"}),Object(s.jsx)("option",{value:"put",children:"PUT"}),Object(s.jsx)("option",{value:"delete",children:"DELETE"}),Object(s.jsx)("option",{value:"patch",children:"PATCH"})]}),Object(s.jsx)("input",{id:"url",type:"url",className:"form-control",style:{height:"32px",width:"45%",display:"inline",borderRadius:"0"}}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary",style:{marginLeft:"47px",padding:"2px 10px",position:"relative",bottom:"2.5px",borderRadius:"3px"},onClick:function(){var e=document.getElementById("url").value,t={method:document.querySelector("select").value,url:e,data:k,headers:C};console.log(JSON.stringify(t)),fetch("/req",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.json().then((function(e){return v(JSON.parse(e).data)}))}))},children:"Send"})]}),Object(s.jsx)("div",{style:{textAlign:"center",display:"inline-block",width:"20%",marginLeft:"-5%"},children:Object(s.jsx)("button",{onClick:S,type:"button",className:"btn btn-primary",style:{padding:"2px 10px",borderRadius:"3px",marginTop:"30px"},children:"Show Keys"})}),Object(s.jsx)("div",{style:{textAlign:"center",display:"inline-block",width:"20%",marginLeft:"-10%"},children:Object(s.jsx)("button",{onClick:A,type:"button",className:"btn btn-primary",style:{padding:"2px 10px",borderRadius:"3px",marginTop:"30px"},children:"Show Data"})}),Object(s.jsx)("div",{style:{textAlign:"center",display:"inline-block",width:"20%",marginLeft:"-10%"},children:Object(s.jsx)("button",{onClick:T,type:"button",className:"btn btn-primary",style:{padding:"2px 10px",borderRadius:"3px",marginTop:"30px"},children:"Show headers"})}),Object(s.jsxs)("div",{style:{textAlign:"center",width:"55%",marginRight:"20%",marginLeft:"20%"},children:[n?Object(s.jsx)(u,{submit:function(e){var t=document.querySelector("input.form-control").value.indexOf("?");-1==t?document.querySelector("input.form-control").value+=e:document.querySelector("input.form-control").value=document.querySelector("input.form-control").value.substring(0,t)+e},set:S}):null,o?Object(s.jsx)(j,{submit:function(e){k=e},set:A}):null,x?Object(s.jsx)(p,{set:T,submit:function(e){C=e}}):null]}),Object(s.jsxs)("div",{style:{textAlign:"left",marginTop:"60px"},children:[Object(s.jsx)("h5",{style:{color:"gray"},children:"Response"}),Object(s.jsx)("div",{style:{height:"300px",overflow:"scroll",borderTop:"1px solid #343a40"},children:Object(s.jsx)(g.a,{src:f})})]})]})};var y=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(m,{})})};c.a.render(Object(s.jsx)(y,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.129a20d9.chunk.js.map