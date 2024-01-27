"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[504],{854:function(e,r,t){var n=t(154),s=t(184);r.Z=function(){return(0,s.jsx)("div",{style:{width:"100vw",height:"100vh",position:"fixed",top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.6)"},children:(0,s.jsx)(n.g4,{visible:!0,height:"100",width:"100",color:"#3F51B5",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})}},155:function(e,r,t){t.d(r,{Z:function(){return m}});var n="MoviesList_moviesList__P6SP5",s="MoviesList_movieItem__p4FQU",a="MoviesList_movieLink__QlD4H",i="MoviesList_movieListImg__4Luk2",o="MoviesList_movieTitle__CxO8p",c=t(689),u=t(87),l=t(585),v=t(184);var m=function(e){var r=e.movies,t=e.moviesListRef,m=(0,c.TH)();return(0,v.jsx)("ul",{className:n,ref:t,children:null===r||void 0===r?void 0:r.map((function(e){var r=e.id,t=e.title,n=e.poster_path,c=e.name,f=void 0===c?"movie":c;return(0,v.jsx)("li",{className:s,children:(0,v.jsxs)(u.OL,{state:{from:m},to:"/movies/".concat(r,"/"),className:a,children:[(0,v.jsx)("img",{src:n?l.Sb+n:"".concat(l.Mm),alt:null!==t&&void 0!==t?t:f,width:200,className:i}),(0,v.jsxs)("p",{className:o,children:[" ",null!==t&&void 0!==t?t:f]})]})},r)}))})}},504:function(e,r,t){t.r(r),t.d(r,{default:function(){return g}});var n=t(861),s=t(439),a=t(757),i=t.n(a),o=t(87),c=t(791),u=t(526),l=t(585),v=t(505),m="MoviesSearchForm_moviesSearchForm__s5MRN",f="MoviesSearchForm_moviesSearchInput__7sPwo",h="MoviesSearchForm_moviesSearchBtn__fMkh1",p=t(184);var d=function(e){var r=e.onSubmit,t=e.onChange,n=e.query;return(0,p.jsxs)("form",{onSubmit:r,className:m,children:[(0,p.jsx)("input",{type:"text",placeholder:"Search movie...",name:"name",onChange:t,value:n,autoFocus:!0,required:!0,"aria-label":"Movie title",className:f}),(0,p.jsx)("button",{className:h,children:"Search"})]})},x=t(854),_=t(155);var g=function(){var e=(0,o.lr)(),r=(0,s.Z)(e,2),t=r[0],a=r[1],m=(0,c.useState)((function(){var e;return null!==(e=t.get("query"))&&void 0!==e?e:""})),f=(0,s.Z)(m,2),h=f[0],g=f[1],S=(0,c.useState)(l.n$.idle),j=(0,s.Z)(S,2),y=j[0],b=j[1],w=(0,c.useState)([]),k=(0,s.Z)(w,2),L=k[0],M=k[1],Z=(0,c.useState)(null),N=(0,s.Z)(Z,2),$=N[0],C=N[1];return(0,c.useEffect)((function(){if(h){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(l.n$.pending),e.next=4,(0,u.Wf)(h);case 4:r=e.sent,t=r.results,b(l.n$.success),M(t),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),b(l.n$.error),C(e.t0),console.log("Oops");case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[h]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{onSubmit:function(e){if(e.preventDefault(),h===t.get("query"))return alert("Wa have already found movies for you");if(""===h.trim())return g(""),void alert("Please enter a movie tittle ");var r=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({query:r}),e.prev=1,b(l.n$.pending),e.next=5,(0,u.Wf)(h);case 5:t=e.sent,n=t.results,b(l.n$.success),M(n),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),b(l.n$.error),C(e.t0),console.log("Oops");case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(r){return e.apply(this,arguments)}}();r(h)},onChange:function(e){var r=e.currentTarget.value;g(r)},query:h}),y===l.n$.success&&0===L.length&&(0,p.jsxs)("p",{style:{marginTop:40,textAlign:"center"},children:["No results found for your search. ",(0,p.jsx)("br",{})," Search again"]}),L.length>0&&(0,p.jsx)(_.Z,{movies:L}),y===l.n$.error&&(0,p.jsx)(v.Z,{error:$}),y===l.n$.pending&&(0,p.jsx)(x.Z,{className:"loadingBox"})]})}}}]);
//# sourceMappingURL=504.c91121a9.chunk.js.map