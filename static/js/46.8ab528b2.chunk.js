"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[46],{7335:function(n,e,t){t.d(e,{Z:function(){return x}});var r,o,a,i=t(7689),s=t(1087),u=t(168),c=t(5867),p=c.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 15px;\n"]))),l=c.ZP.p(o||(o=(0,u.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  padding: 16px;\n  width: 100%;\n  box-sizing: border-box;\n\n  font-size: 20px;\n  color: white;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  background-color: rgba(0, 0, 0, 0.4);\n\n  transition: all 250ms ease;\n"]))),d=c.ZP.li(a||(a=(0,u.Z)(["\n  position: relative;\n  border-radius: 4px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);\n\n  object-fit: cover;\n  overflow: hidden;\n\n  transition: all 250ms ease;\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);\n    transform: scale(1.03);\n\n    & "," {\n      bottom: -100%;\n    }\n  }\n"])),l),f=t(184),x=function(n){var e=n.movies,t=(0,i.TH)();return(0,f.jsx)("section",{children:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(p,{children:e.map((function(n){var e=n.id,r=n.title,o=n.poster_path;return(0,f.jsx)(d,{children:(0,f.jsxs)(s.rU,{to:"/movies/".concat(e),state:{from:t},children:[(0,f.jsx)("img",{src:o?"".concat("https://image.tmdb.org/t/p/w500").concat(o):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r,width:"200",loading:"lazy"}),(0,f.jsx)(l,{children:r})]})},e)}))})})})}},1046:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,o,a,i,s,u=t(1413),c=t(3433),p=t(5861),l=t(9439),d=t(7757),f=t.n(d),x=t(1087),h=t(2791),g=t(8174),m=(t(5462),t(14)),v=t(5752),b=t(168),Z=t(5867),w=Z.ZP.input(r||(r=(0,b.Z)(["\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  width: 600px;\n  overflow: hidden;\n  border: none;\n  height: 40px;\n  font-size: 20px;\n  outline: none;\n  padding: 5px 8px;\n  margin-bottom: 40px;\n"]))),y=Z.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),j=Z.ZP.label(a||(a=(0,b.Z)(["\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  font-size: 22px;\n  font-weight: 500;\n  color: white;\n  gap: 10px;\n"]))),k=Z.ZP.div(i||(i=(0,b.Z)(["\n  display: flex;\n  align-items: flex-end;\n"]))),S=Z.ZP.button(s||(s=(0,b.Z)(["\n  border: none;\n  height: 50px;\n  width: 50px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  cursor: pointer;\n  margin-bottom: 40px;\n"]))),C=t(184),_=function(n){var e=n.onSubmit,t=(0,h.useState)(""),r=(0,l.Z)(t,2),o=r[0],a=r[1];return(0,C.jsxs)(y,{children:[(0,C.jsx)("form",{onSubmit:function(n){n.preventDefault();var t=o.toLowerCase();e(t),t.trim()||g.Am.error("Please enter something!")},children:(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:["Search by name",(0,C.jsx)(w,{type:"text",name:"query",value:o,autoFocus:!0,onChange:function(n){return a(n.target.value)},placeholder:"Enter movie name"})]}),(0,C.jsx)(S,{type:"submit",children:(0,C.jsx)(v.XSL,{style:{width:"35px",height:"35px",opacity:.5}})})]})}),(0,C.jsx)(g.Ix,{autoClose:4e3,theme:"colored"})]})},P=t(7335),L=t(7635),z=function(){var n,e=(0,h.useState)(!1),t=(0,l.Z)(e,2),r=t[0],o=t[1],a=(0,h.useState)(!1),i=(0,l.Z)(a,2),s=i[0],d=i[1],v=(0,h.useState)([]),b=(0,l.Z)(v,2),Z=b[0],w=b[1],y=(0,x.lr)(),j=(0,l.Z)(y,2),k=j[0],S=j[1],z=(0,h.useState)(!1),A=(0,l.Z)(z,2),E=A[0],q=A[1],R=(0,h.useState)(!1),I=(0,l.Z)(R,2),D=I[0],T=I[1],U=(0,h.useState)(1),F=(0,l.Z)(U,2),M=F[0],N=F[1],W=(0,h.useState)(!1),B=(0,l.Z)(W,2),G=B[0],H=B[1],O=null!==(n=k.get("query"))&&void 0!==n?n:"";(0,h.useEffect)((function(){var n=new AbortController;if(O)return function(){e.apply(this,arguments)}(),function(){n.abort()};function e(){return(e=(0,p.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),d(!1),q(!1),e.next=6,(0,m.LI)(O,M,{signal:n.signal});case 6:t=e.sent,q((function(){if(0===t.results.length)return!0})),w((function(n){return[].concat((0,c.Z)(n),(0,c.Z)(t.results))})),T(M<t.total_pages),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&d(!0);case 15:return e.prev=15,o(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})))).apply(this,arguments)}}),[O,M]);return(0,C.jsxs)("main",{children:[s&&g.Am.error("Whoops, something went wrong. Try reloading the page"),(0,C.jsx)(_,{onSubmit:function(n){if(O===n)return g.Am.info("Please search something else");S(""!==n?{query:n}:{}),N(1),w([]),T(!1)}}),Z.length>0&&(0,C.jsx)(P.Z,{movies:Z}),E&&(0,C.jsx)("p",{style:{fontSize:"30px"},children:"No results"}),(0,C.jsx)(g.Ix,{autoClose:4e3,theme:"colored"}),r&&(0,C.jsx)(L.Z,{}),D&&(0,C.jsx)("button",{style:(0,u.Z)((0,u.Z)({},{display:"block",marginLeft:"auto",marginRight:"auto",borderRadius:"4px",backgroundColor:"orange",padding:"15px 20px",color:"black",fontWeight:"500",fontSize:"24px",transition:"all 250ms ease",cursor:"pointer",marginTop:"20px",border:"none"}),{},{backgroundColor:G?"transparent":"orange",color:G?"orange":"white",border:G?"1px solid white":"none"}),onClick:function(){N((function(n){return n+1})),T(!0)},onMouseEnter:function(){return H(!0)},onMouseLeave:function(){return H(!1)},children:"Load more"})]})}},14:function(n,e,t){t.d(e,{BG:function(){return c},DC:function(){return u},LI:function(){return p},oO:function(){return l},y:function(){return d}});var r=t(5861),o=t(7757),a=t.n(o),i=t(1243),s="3dcf7f9df138daa52451d10b15111f4e";i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={key:s};var u=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,i.Z.get("/trending/movie/day?page=".concat(e,"&api_key=").concat(s),t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,i.Z.get("/movie/".concat(e,"?api_key=").concat(s),t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r,o,u=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=u.length>2&&void 0!==u[2]?u[2]:{},n.next=3,i.Z.get("/search/movie?query=".concat(e,"&page=").concat(t,"&api_key=").concat(s),r);case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s),t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s),t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=46.8ab528b2.chunk.js.map