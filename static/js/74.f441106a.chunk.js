"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[74],{587:function(n,t,e){e.d(t,{Z:function(){return v}});var r,o,a,i,c=e(689),s=e(87),u=e(168),l=e(867),p=l.ZP.div(r||(r=(0,u.Z)(["\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 32px 16px;\n"]))),d=l.ZP.ul(o||(o=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 15px;\n"]))),f=l.ZP.p(a||(a=(0,u.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  padding: 16px;\n  width: 100%;\n  box-sizing: border-box;\n\n  font-size: 20px;\n  color: white;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  background-color: rgba(0, 0, 0, 0.4);\n\n  transition: all 250ms ease;\n"]))),h=l.ZP.li(i||(i=(0,u.Z)(["\n  position: relative;\n  border-radius: 4px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);\n\n  object-fit: cover;\n  overflow: hidden;\n\n  transition: all 250ms ease;\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);\n    transform: scale(1.03);\n\n    & "," {\n      bottom: -100%;\n    }\n  }\n"])),f),x=e(184),v=function(n){var t=n.movies,e=(0,c.TH)();return(0,x.jsx)("section",{children:(0,x.jsx)(p,{children:(0,x.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.title,o=n.poster_path;return(0,x.jsx)(h,{children:(0,x.jsxs)(s.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,x.jsx)("img",{src:o?"".concat("https://image.tmdb.org/t/p/w500").concat(o):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r,width:"200",loading:"lazy"}),(0,x.jsx)(f,{children:r})]})},t)}))})})})}},74:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r=e(861),o=e(439),a=e(757),i=e.n(a),c=e(87),s=e(791),u=e(596),l=e(14),p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d=s.createContext&&s.createContext(p),f=function(){return f=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},f.apply(this,arguments)},h=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e};function x(n){return n&&n.map((function(n,t){return s.createElement(n.tag,f({key:t},n.attr),x(n.child))}))}function v(n){return function(t){return s.createElement(m,f({attr:f({},n.attr)},t),x(n.child))}}function m(n){var t=function(t){var e,r=n.attr,o=n.size,a=n.title,i=h(n,["attr","size","title"]),c=o||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),s.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:e,style:f(f({color:n.color||t.color},t.style),n.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&s.createElement("title",null,a),n.children)};return void 0!==d?s.createElement(d.Consumer,null,(function(n){return t(n)})):t(p)}function g(n){return v({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M6.5 9a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9 5a4 4 0 102.248 7.309l1.472 1.471a.75.75 0 101.06-1.06l-1.471-1.472A4 4 0 009 5z",clipRule:"evenodd"}}]})(n)}var w,b,y,Z,j,k=e(168),C=e(867),P=C.ZP.input(w||(w=(0,k.Z)(["\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  width: 600px;\n  overflow: hidden;\n  border: none;\n  height: 40px;\n  font-size: 20px;\n  outline: none;\n  padding: 5px 8px;\n"]))),O=C.ZP.div(b||(b=(0,k.Z)(["\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 32px 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),z=C.ZP.label(y||(y=(0,k.Z)(["\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  font-size: 22px;\n  font-weight: 500;\n  color: white;\n  gap: 10px;\n"]))),E=C.ZP.div(Z||(Z=(0,k.Z)(["\n  display: flex;\n  align-items: flex-end;\n"]))),_=C.ZP.button(j||(j=(0,k.Z)(["\n  border: none;\n  height: 50px;\n  width: 50px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  cursor: pointer;\n"]))),N=e(184),S=function(n){var t=n.value,e=n.onChange,r=(0,c.lr)(),a=(0,o.Z)(r,2)[1];return(0,N.jsxs)(O,{children:[(0,N.jsx)("form",{onSubmit:function(n){n.preventDefault(),t.trim()?a(""!==t?{query:t}:{}):u.Am.error("Please enter something!")},children:(0,N.jsxs)(E,{children:[(0,N.jsxs)(z,{children:["Search by name",(0,N.jsx)(P,{type:"text",value:t,autoFocus:!0,onChange:function(n){return e(n.target.value)},placeholder:"Enter movie name"})]}),(0,N.jsxs)(_,{type:"submit",children:[" ",(0,N.jsx)(g,{style:{width:"35px",height:"35px",opacity:.5}})]})]})}),(0,N.jsx)(u.Ix,{autoClose:4e3,theme:"colored"})]})},A=e(587),q=e(163),I=function(){var n,t=(0,s.useState)(!1),e=(0,o.Z)(t,2),a=e[0],p=e[1],d=(0,s.useState)(!1),f=(0,o.Z)(d,2),h=f[0],x=f[1],v=(0,s.useState)([]),m=(0,o.Z)(v,2),g=m[0],w=m[1],b=(0,c.lr)(),y=(0,o.Z)(b,2),Z=y[0],j=y[1],k=null!==(n=Z.get("query"))&&void 0!==n?n:"";(0,s.useEffect)((function(){var n=new AbortController;function t(){return(t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,p(!0),x(!1),t.next=5,(0,l.LI)(k,{signal:n.signal});case 5:e=t.sent,w(e.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&x(!0);case 12:return t.prev=12,p(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){n.abort()}}),[k]);return(0,N.jsxs)("main",{children:[a&&(0,N.jsx)(q.Z,{}),h&&u.Am.error("Whoops, something went wrong. Try reloading the page"),(0,N.jsx)(S,{value:k,onChange:function(n){j(""!==n?{query:n}:{})}}),(0,N.jsx)(A.Z,{movies:g}),(0,N.jsx)(u.Ix,{autoClose:4e3,theme:"colored"})]})}},14:function(n,t,e){e.d(t,{BG:function(){return u},DC:function(){return s},LI:function(){return l},oO:function(){return p},y:function(){return d}});var r=e(861),o=e(757),a=e.n(o),i=e(243),c="3dcf7f9df138daa52451d10b15111f4e";i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={key:c};var s=function(){var n=(0,r.Z)(a().mark((function n(){var t,e,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n.next=3,i.Z.get("/trending/movie/day?api_key=".concat(c),t);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,i.Z.get("/movie/".concat(t,"?api_key=").concat(c),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,i.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(c),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(c),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(c),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=74.f441106a.chunk.js.map