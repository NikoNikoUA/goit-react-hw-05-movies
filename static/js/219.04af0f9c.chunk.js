"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{4219:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,o,i=e(5861),u=e(9439),s=e(7757),p=e.n(s),f=e(2791),l=e(7689),d=e(14),h=e(8174),x=(e(5462),e(168)),v=e(5867),g=v.ZP.ul(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: 1000px;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  border: 1px solid white;\n  border-radius: 8px;\n  padding: 40px 15px;\n"]))),m=v.ZP.li(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  box-shadow: 0px 0px 4px black;\n  padding: 15px;\n  width: 150px;\n  height: 265px;\n"]))),w=v.ZP.h3(c||(c=(0,x.Z)(["\n  color: white;\n  text-align: center;\n"]))),Z=v.ZP.p(o||(o=(0,x.Z)(["\n  color: orange;\n  text-align: center;\n"]))),y=e(7635),b=e(184),k=function(){var n=(0,f.useState)(!1),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(!1),c=(0,u.Z)(a,2),o=c[0],s=c[1],x=(0,f.useState)([]),v=(0,u.Z)(x,2),k=v[0],j=v[1],_=(0,l.UO)().movieId;return(0,f.useEffect)((function(){var n=new AbortController;function t(){return(t=(0,i.Z)(p().mark((function t(){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),s(!1),t.next=5,(0,d.y)(_,{signal:n.signal});case 5:e=t.sent,j(e.cast),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&s(!0);case 12:return t.prev=12,r(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){n.abort()}}),[_]),(0,b.jsxs)("div",{children:[e&&(0,b.jsx)(y.Z,{}),o&&h.Am.error("Whoops, something went wrong. Try reloading the page"),k.length>0?(0,b.jsx)(g,{children:k.map((function(n){var t=n.name,e=n.character,r=n.profile_path;return(0,b.jsxs)(m,{children:[(0,b.jsx)("img",{src:r?"".concat("https://image.tmdb.org/t/p/w500").concat(r):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:t,width:"100",loading:"lazy"}),(0,b.jsx)(w,{children:t}),(0,b.jsxs)(Z,{children:["Character: ",e]})]},t)}))}):(0,b.jsx)("p",{children:"There is not information on cast for this movie"}),(0,b.jsx)(h.Ix,{autoClose:4e3,theme:"colored"})]})}},14:function(n,t,e){e.d(t,{BG:function(){return s},DC:function(){return u},LI:function(){return p},oO:function(){return f},y:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),o=e(1243),i="3dcf7f9df138daa52451d10b15111f4e";o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={key:i};var u=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:{},n.next=3,o.Z.get("/trending/movie/day?page=".concat(t,"&api_key=").concat(i),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:{},n.next=3,o.Z.get("/movie/".concat(t,"?api_key=").concat(i),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a,u=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=u.length>2&&void 0!==u[2]?u[2]:{},n.next=3,o.Z.get("/search/movie?query=".concat(t,"&page=").concat(e,"&api_key=").concat(i),r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:{},n.next=3,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:{},n.next=3,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5462:function(){}}]);
//# sourceMappingURL=219.04af0f9c.chunk.js.map