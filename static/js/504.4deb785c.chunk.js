"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[504],{854:function(e,r,t){var n=t(154),s=t(184);r.Z=function(){return(0,s.jsx)("div",{style:{width:"100vw",height:"100vh",position:"fixed",top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.6)"},children:(0,s.jsx)(n.g4,{visible:!0,height:"100",width:"100",color:"#3F51B5",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})}},155:function(e,r,t){t.d(r,{Z:function(){return m}});var n="MoviesList_moviesList__P6SP5",s="MoviesList_movieItem__p4FQU",i="MoviesList_movieLink__QlD4H",a="MoviesList_movieListImg__4Luk2",o="MoviesList_movieTitle__CxO8p",c=t(689),l=t(87),u=t(585),v=t(184);var m=function(e){var r=e.movies,t=e.moviesListRef,m=(0,c.TH)();return(0,v.jsx)("ul",{className:n,ref:t,children:r.map((function(e){var r=e.id,t=e.title,n=e.poster_path,c=e.name,h=void 0===c?"movie":c;return(0,v.jsx)("li",{className:s,children:(0,v.jsxs)(l.OL,{state:{from:m},to:"/movies/".concat(r,"/"),className:i,children:[(0,v.jsx)("img",{src:n?u.Sb+n:"".concat(u.Mm),alt:null!==t&&void 0!==t?t:h,width:200,className:a}),(0,v.jsxs)("p",{className:o,children:[" ",null!==t&&void 0!==t?t:h]})]})},r)}))})}},504:function(e,r,t){t.r(r),t.d(r,{default:function(){return g}});var n=t(861),s=t(439),i=t(757),a=t.n(i),o=t(87),c=t(791),l=t(526),u=t(585),v=t(505),m="MoviesSearchForm_moviesSearchForm__s5MRN",h="MoviesSearchForm_moviesSearchInput__7sPwo",f="MoviesSearchForm_moviesSearchBtn__fMkh1",d=t(184);var p=function(){var e=(0,o.lr)(),r=(0,s.Z)(e,2),t=r[0],n=r[1],i=t.get("query"),a=(0,c.useState)((function(){return null!==i&&void 0!==i?i:""})),l=(0,s.Z)(a,2),u=l[0],v=l[1];return(0,d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),u===i)return alert("We have already found movies for you");n({query:u})},className:m,children:[(0,d.jsx)("input",{type:"text",placeholder:"Search movie...",name:"name",onChange:function(e){v(e.target.value)},value:u,autoFocus:!0,required:!0,"aria-label":"Movie title",className:h}),(0,d.jsx)("button",{className:f,children:"Search"})]})},_=t(854),x=t(155);var g=function(){var e=(0,o.lr)(),r=(0,s.Z)(e,1)[0].get("query"),t=(0,c.useState)(u.n$.idle),i=(0,s.Z)(t,2),m=i[0],h=i[1],f=(0,c.useState)([]),g=(0,s.Z)(f,2),j=g[0],S=g[1],w=(0,c.useState)(null),y=(0,s.Z)(w,2),b=y[0],k=y[1];return(0,c.useEffect)((function(){if(r){var e=function(){var e=(0,n.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(u.n$.pending),e.next=4,(0,l.Wf)(r);case 4:t=e.sent,n=t.results,h(u.n$.success),S(n),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),h(u.n$.error),k(e.t0),console.log("Oops");case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[r]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{}),m===u.n$.success&&0===j.length&&(0,d.jsxs)("p",{style:{marginTop:40,textAlign:"center"},children:["No results found for your search. ",(0,d.jsx)("br",{})," Search again"]}),j.length>0&&(0,d.jsx)(x.Z,{movies:j}),m===u.n$.error&&(0,d.jsx)(v.Z,{error:b}),m===u.n$.pending&&(0,d.jsx)(_.Z,{className:"loadingBox"})]})}}}]);
//# sourceMappingURL=504.4deb785c.chunk.js.map