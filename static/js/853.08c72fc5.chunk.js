"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[853],{853:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(757),u=n.n(c),o=n(791),i=n(689),s=n(14),p=n(184);e.default=function(){var t=(0,o.useState)(!1),e=(0,a.Z)(t,2)[1],n=(0,o.useState)(!1),c=(0,a.Z)(n,2)[1],f=(0,o.useState)([]),v=(0,a.Z)(f,2),h=v[0],d=v[1];console.log(h);var l=(0,i.UO)().movieId;return(0,o.useEffect)((function(){var t=new AbortController;function n(){return(n=(0,r.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e(!0),c(!1),n.next=5,(0,s.oO)(l,{signal:t.signal});case 5:r=n.sent,d(r.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&c(!0);case 12:return n.prev=12,e(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){t.abort()}}),[l]),(0,p.jsx)("div",{children:h.length>0?(0,p.jsx)("ul",{children:h.map((function(t){var e=t.content,n=t.author;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h2",{children:n}),(0,p.jsx)("p",{children:e})]},n)}))}):(0,p.jsx)("p",{children:"There are no reviews for this movie"})})}},14:function(t,e,n){n.d(e,{BG:function(){return s},DC:function(){return i},LI:function(){return p},oO:function(){return f},y:function(){return v}});var r=n(861),a=n(757),c=n.n(a),u=n(243),o="3dcf7f9df138daa52451d10b15111f4e";u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={key:o};var i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t.next=3,u.Z.get("/trending/movie/day?api_key=".concat(o),e);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=3,u.Z.get("/movie/".concat(e,"?api_key=").concat(o),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=3,u.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(o),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=3,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=3,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=853.08c72fc5.chunk.js.map