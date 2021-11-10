(this["webpackJsonprate-mi-professors"]=this["webpackJsonprate-mi-professors"]||[]).push([[0],{15:function(e,t,r){e.exports={login:"LoginPage_login__l71u_",content:"LoginPage_content__2i7Wj"}},41:function(e,t,r){},42:function(e,t,r){},71:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),c=r(27),i=r.n(c),a=(r(41),r(42),r(28)),o=r(29),l=r(36),j=r(35),u=r(15),d=r.n(u),b=r(0),h=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(b.jsx)("div",{class:d.a.login,children:Object(b.jsxs)("div",{class:d.a.content,children:[Object(b.jsx)("h1",{children:"RateMIProfessors"}),Object(b.jsx)("p",{children:"Click here to log in!"})]})})}}]),r}(n.Component),O=h,f=r(7),x=r(3);r(8);var p=function(){return Object(b.jsxs)("body",{children:[Object(b.jsxs)("header",{className:"flex",children:[Object(b.jsx)("span",{class:"title_text",children:"RateM"}),Object(b.jsx)("img",{class:"title_image",src:"http://ansatuiuc.web.engr.illinois.edu/images/Illinois_Block_I.png",alt:"Block I",height:"110",width:"110"}),Object(b.jsx)("span",{class:"title_text",children:"Professor"})]}),Object(b.jsx)("section",{class:"body",children:Object(b.jsx)("div",{children:'FindMyProfessor is a website designed for UIUC students to find and post reviews for specific professors and the classes that they teach. If you want to search for a professor and see their reviews, you can use the "Search" tab above. If you want to use the two advanced queries written for the site, click on Advanced Query 1/2. Finally, to see reviews, go to "Reviews".'})})]})},g=r(16),v=r.n(g),m=r(30),E=r(2),R=r(31),w=r(32),y=r.n(w);var N=function(e){return y.a.get("https://us-central1-cs411-project-328717.cloudfunctions.net/forward?query=".concat(e)).then((function(e){return e.data.results}))};function S(e){var t=[];console.log(e.results);var r,n=Object(R.a)(e.results);try{for(n.s();!(r=n.n()).done;){var s=r.value;t.push(Object(b.jsxs)("div",{class:"p-4 flex space-x-4",children:[Object(b.jsx)("p",{className:"w-100px",children:s[3]}),Object(b.jsx)("p",{children:s[4]})]}))}}catch(c){n.e(c)}finally{n.f()}return Object(b.jsx)("div",{class:"flex justify-center px-10 pt-10 pb-10 w-screen",children:Object(b.jsx)("div",{class:"w-11/12 border-2 border-gray-400 rounded-lg divide-y divide-gray-100",children:t})})}var I=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),r=t[0],s=(t[1],Object(n.useState)("")),c=Object(E.a)(s,2),i=c[0],a=c[1],o=Object(n.useState)([]),l=Object(E.a)(o,2),j=l[0],u=l[1],d=function(){var e=Object(m.a)(v.a.mark((function e(t){var n,s,c,a,o,l,d;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"==t.key){e.next=2;break}return e.abrupt("return");case 2:if(console.log("Enter Pressed: ".concat(i)),i!=r){e.next=5;break}return e.abrupt("return");case 5:return console.log("Running search"),n=i.trim(),s=/\d+$/,(c=n.match(s))&&(a=c[0],n=n.replace(s,"").trim()),o=["id","name","college","title"],console.log(o),l="\n            SELECT college, id, name, courseNumber, title\n            FROM Departments JOIN Courses ON id=departmentId\n            ",(a||n)&&(l+=" WHERE "),n&&(l+=" ( ",l+=o.map((function(e){return" ".concat(e," LIKE '%").concat(n,"%' ")})).join(" OR "),l+=" ) ",a&&(l+=" AND ")),a&&(l+=" ( ",l+=" courseNumber LIKE '%_".concat(a,"%' "),l+=" ) "),console.log(l),e.next=19,N(l);case 19:if(d=(d=e.sent).slice(0,50),console.log(d),d!=j){e.next=24;break}return e.abrupt("return");case 24:u(d);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("body",{children:[Object(b.jsxs)("header",{className:"flex",children:[Object(b.jsx)("span",{class:"header_text",children:"RateM"}),Object(b.jsx)("img",{class:"header_image",src:"http://ansatuiuc.web.engr.illinois.edu/images/Illinois_Block_I.png",alt:"Block I",height:"110",width:"110"}),Object(b.jsx)("span",{class:"header_text",children:"Professor"})]}),Object(b.jsx)("section",{class:"body",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:" Enter your query here "}),Object(b.jsx)("div",{class:"flex justify-center pt-10 pb-10",children:Object(b.jsx)("input",{className:"border-2 border-gray-400 h-12 px-2 rounded-lg w-7/12",type:"text",placeholder:"Search",value:i,onChange:function(e){return a(e.target.value)},onKeyDown:d})}),Object(b.jsx)("div",{class:"flex justify-center",children:Object(b.jsx)(S,{results:j})})]})})]})};var C=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)([]),i=Object(E.a)(c,2),a=i[0],o=i[1];return Object(n.useEffect)((function(){N("SELECT professor, AVG(rating) AS avgRating \n        FROM OfferingsToProfessorRelations opr JOIN Reviews r ON opr.id = r.offeringToProfessorRelation \n        GROUP BY professor HAVING COUNT(rating) > 0 \n        ORDER BY avgRating DESC LIMIT 15;").then((function(e){var t=e.map((function(e){return Object(b.jsxs)("div",{class:"p-4 flex space-x-4",children:[Object(b.jsx)("p",{className:"w-100px",children:e[0]}),Object(b.jsx)("p",{children:e[1]})]})}));o(t),console.log(t)}))}),[]),Object(b.jsxs)("body",{children:[Object(b.jsxs)("header",{className:"flex",children:[Object(b.jsx)("span",{class:"header_text",children:"RateM"}),Object(b.jsx)("img",{class:"header_image",src:"http://ansatuiuc.web.engr.illinois.edu/images/Illinois_Block_I.png",alt:"Block I",height:"110",width:"110"}),Object(b.jsx)("span",{class:"header_text",children:"Professor"})]}),Object(b.jsxs)("section",{class:"body",children:[Object(b.jsx)("div",{children:"This is the page for the first advanced query, which returns top 15 best rated professors."}),r?Object(b.jsxs)("div",{children:["Here are the fifteen professors with the highest reviews:",a]}):Object(b.jsx)("div",{children:"Click the button to view the top rated professors!"}),Object(b.jsx)("div",{children:!r&&Object(b.jsx)("button",{onClick:function(){return s(!0)},children:"EXECUTE QUERY HERE"})})]})]})};var _=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)([]),i=Object(E.a)(c,2),a=i[0],o=i[1];return Object(n.useEffect)((function(){N("SELECT courseNumber, COUNT(rating) as ratingCount\n                FROM Offerings o\n                JOIN OfferingsToProfessorRelations opr ON o.id = opr.offering\n                JOIN Reviews r ON r.offeringToProfessorRelation = opr.id\n                GROUP BY courseNumber ORDER BY ratingCount DESC LIMIT 15;").then((function(e){var t=e.map((function(e){return Object(b.jsxs)("div",{class:"p-4 flex space-x-4",children:[Object(b.jsx)("p",{className:"w-100px",children:e[0]}),Object(b.jsx)("p",{children:e[1]})]})}));o(t),console.log(t)}))}),[]),Object(b.jsxs)("body",{children:[Object(b.jsxs)("header",{className:"flex",children:[Object(b.jsx)("span",{class:"header_text",children:"RateM"}),Object(b.jsx)("img",{class:"header_image",src:"http://ansatuiuc.web.engr.illinois.edu/images/Illinois_Block_I.png",alt:"Block I",height:"110",width:"110"}),Object(b.jsx)("span",{class:"header_text",children:"Professor"})]}),Object(b.jsxs)("section",{class:"body",children:[Object(b.jsx)("div",{children:"This is the page for the second advanced query, which returns the 15 most reviewed courses."}),r?Object(b.jsxs)("div",{children:["Here are the fifteen courses with the most reviews:",a]}):Object(b.jsx)("div",{children:"Click the button to view the most reviewed courses!"}),Object(b.jsx)("div",{children:!r&&Object(b.jsx)("button",{onClick:function(){return s(!0)},children:"EXECUTE QUERY HERE"})})]})]})};var T=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)([]),i=Object(E.a)(c,2),a=i[0],o=i[1],l=Object(n.useState)(""),j=Object(E.a)(l,2),u=j[0],d=j[1],h=Object(n.useState)([]),O=Object(E.a)(h,2),f=O[0],x=O[1],p=Object(n.useState)(""),g=Object(E.a)(p,2),v=g[0],m=g[1],R=Object(n.useState)([]),w=Object(E.a)(R,2),y=w[0],S=w[1],I=Object(n.useState)(""),C=Object(E.a)(I,2),_=C[0],T=C[1],k=Object(n.useState)([]),P=Object(E.a)(k,2),M=P[0],B=P[1],D=Object(n.useState)(""),L=Object(E.a)(D,2),U=L[0],H=L[1],Y=Object(n.useState)(null),F=Object(E.a)(Y,2),A=F[0],W=F[1],q=Object(n.useState)(""),J=Object(E.a)(q,2),Q=J[0],G=J[1],K=Object(n.useState)(5),V=Object(E.a)(K,2),X=V[0],$=V[1];return Object(n.useEffect)((function(){N("SELECT id, name FROM Departments ORDER BY id;").then((function(e){var t=e.map((function(e){return{id:e[0],name:e[1]}}));o(t)}))}),[]),Object(n.useEffect)((function(){d(""),x([]),r&&N('SELECT courseNumber, title FROM Courses WHERE departmentId = "'+r+'" ORDER BY courseNumber;').then((function(e){var t=e.map((function(e){return{number:e[0],title:e[1]}}));x(t)}))}),[r]),Object(n.useEffect)((function(){m(""),S([]),u&&N('SELECT id, CRN, semester FROM Offerings WHERE courseNumber = "'+u+'" ORDER BY semester, CRN;').then((function(e){var t=e.map((function(e){return{id:e[0],CRN:e[1],semester:e[2]}}));S(t)}))}),[u]),Object(n.useEffect)((function(){T(""),B([]),v&&N('SELECT id, name FROM OfferingsToProfessorRelations JOIN Professors ON professor=netid WHERE offering="'+v+'" ORDER BY name;').then((function(e){var t=e.map((function(e){return{relationId:e[0],name:e[1]}}));B(t)}))}),[v]),Object(n.useEffect)((function(){W(null),G(""),$(5),_&&U&&N('SELECT id, rating, review FROM Reviews WHERE student = "'+U+'" AND offeringToProfessorRelation = "'+_+'"').then((function(e){e.length&&(W({id:e[0][0],rating:e[0][1],review:e[0][2]}),G(e[0][2]),$(e[0][1]))}))}),[_,U]),Object(b.jsxs)("body",{children:[Object(b.jsxs)("header",{className:"flex",children:[Object(b.jsx)("span",{className:"header_text",children:"RateM"}),Object(b.jsx)("img",{className:"header_image",src:"http://ansatuiuc.web.engr.illinois.edu/images/Illinois_Block_I.png",alt:"Block I"}),Object(b.jsx)("span",{className:"header_text",children:"Professor"})]}),Object(b.jsx)("section",{className:"body",children:Object(b.jsxs)("div",{children:["Write a review:",Object(b.jsx)("br",{}),Object(b.jsxs)("select",{value:null!==r&&void 0!==r?r:"Select a department",onChange:function(e){return s(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"Select a department"}),a.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.id+" - "+e.name})}))]}),r&&Object(b.jsx)("br",{}),r&&Object(b.jsxs)("select",{value:null!==u&&void 0!==u?u:"Select a course",onChange:function(e){return d(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"Select a course"}),f.map((function(e){return Object(b.jsx)("option",{value:e.number,children:e.title})}))]}),u&&Object(b.jsx)("br",{}),u&&Object(b.jsxs)("select",{value:null!==v&&void 0!==v?v:"Select an offering",onChange:function(e){return m(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"Select an offering"}),y.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.semester+" - "+e.CRN})}))]}),v&&Object(b.jsx)("br",{}),v&&Object(b.jsxs)("select",{value:null!==_&&void 0!==_?_:"Select a professor",onChange:function(e){return T(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"Select a professor"}),M.map((function(e){return Object(b.jsx)("option",{value:e.relationId,children:e.name})}))]}),Object(b.jsx)("br",{}),"Your NetID: ",Object(b.jsx)("input",{type:"text",value:U,onChange:function(e){return H(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),_&&U&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[A?"Update ":"Write ","Your Review:"]}),Object(b.jsx)("input",{type:"text",style:{width:"70%"},value:Q,onChange:function(e){return G(e.target.value)}}),Object(b.jsx)("br",{}),"Rating:",Object(b.jsx)("input",{type:"number",value:X,onChange:function(e){return $(e.target.value)}}),"/5",Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"border-2 border-gray-400 h-8 px-2 rounded-lg",onClick:function(){A?N('UPDATE Reviews SET review="'+Q+'", rating='+X+' WHERE id = "'+A.id+'";').then((function(){W((function(e){return{id:e.id,rating:X,review:Q}}))})):function(){var e="review-"+U+"-"+_;N('INSERT INTO Reviews VALUES ("'+e+'", '+X+', "'+Q+'", "'+U+'", "'+_+'");').then((function(){W({id:e,rating:X,review:Q})}))}()},children:A?"Update":"Post"}),A&&Object(b.jsx)("button",{className:"border-2 border-gray-400 h-8 px-2 rounded-lg",onClick:function(){N('DELETE FROM Reviews WHERE id="'+A.id+'"').then((function(){W(null),G(""),$(5)}))},children:"Remove"})]})]})})]})};var k=function(){return Object(b.jsxs)(f.a,{basename:"/RateMIProfessors",children:[Object(b.jsxs)("div",{id:"navbar",children:[Object(b.jsx)(f.b,{className:"border-2 border-gray-400 h-8 px-2 rounded-lg",to:"/",children:"Home"}),Object(b.jsx)(f.b,{className:"border-2 border-gray-400 h-8 px-2 rounded-lg",to:"/search",children:"Search"}),Object(b.jsx)(f.b,{className:"border-2 border-gray-400 h-8 px-2 rounded-lg",to:"/queryOne",children:"Advanced Query 1"}),Object(b.jsx)(f.b,{className:"border-2 border-gray-400 h-8 px-2 rounded-lg",to:"/queryTwo",children:"Advanced Query 2"}),Object(b.jsx)(f.b,{className:"border-2 border-gray-400 h-8 px-2 rounded-lg",to:"/reviews",children:"Reviews"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{path:"/login",children:Object(b.jsx)(O,{})}),Object(b.jsx)(x.a,{path:"/queryOne",children:Object(b.jsx)(C,{})}),Object(b.jsx)(x.a,{path:"/queryTwo",children:Object(b.jsx)(_,{})}),Object(b.jsx)(x.a,{path:"/search",children:Object(b.jsx)(I,{})}),Object(b.jsx)(x.a,{path:"/reviews",children:Object(b.jsx)(T,{})}),Object(b.jsx)(x.a,{path:"/",children:Object(b.jsx)(p,{})})]})]})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))},8:function(e,t,r){}},[[71,1,2]]]);
//# sourceMappingURL=main.f36d74ca.chunk.js.map