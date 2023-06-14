"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{3231:function(n,e,t){t.d(e,{DK:function(){return f},Q2:function(){return l},Wf:function(){return h},_w:function(){return m},lG:function(){return g},ne:function(){return x}});var r,i,c,a,o,u,s=t(168),d=t(558),p=t(6444),l=p.ZP.div(r||(r=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nmargin-bottom: 20px;\n@media screen and (","){\n    flex-direction: row;\n    gap: 30px;\n}\n@media screen and (",") {\n    gap: 50px;        \n}\n"])),d.Hb.tablet,d.Hb.desktop),f=p.ZP.div(i||(i=(0,s.Z)(["\n    border: 2px solid ",";\n    @media screen and (",") {\n        height: 100%;\n        width: 40%;\n        flex-shrink: 0;\n    }\n    @media screen and (",") {\n        width: 30%;\n    }\n"])),(function(n){return n.theme.red}),d.Hb.tablet,d.Hb.desktop),x=p.ZP.li(c||(c=(0,s.Z)(["\n    font-style: italic;\n    font-size: 16px;\n    @media screen and (",") {\n        font-size: 14px;\n    }\n"])),d.Hb.tablet),h=p.ZP.img(a||(a=(0,s.Z)(["\n    object-fit: cover;\n    width: 100%;\n    height: auto;\n"]))),m=p.ZP.ul(o||(o=(0,s.Z)(["\n   display: flex;\n   flex-direction: column;\n   gap: 8px;\n   font-size: 16px;\n   @media screen and (",") {\n     font-size: 20px;\n     gap: 12px;\n     line-height: 1.2;\n    }\n"])),d.Hb.desktop),g=p.ZP.span(u||(u=(0,s.Z)(["\n    background-color: ",";\n    color: ",";\n    padding: 2px 3px;\n    border-radius: 8px;\n"])),(function(n){return n.theme.red}),(function(n){return n.theme.beige}))},7534:function(n,e,t){t.d(e,{o:function(){return c}});var r=t(1715),i=t(184),c=function(n){var e=n.typing;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.e,{sequence:e,wrapper:"h1",style:{marginBottom:"10px",color:"#440700",fontSize:"26px"}})})}},6436:function(n,e,t){t.d(e,{Df:function(){return l},HI:function(){return x},tx:function(){return h},z1:function(){return f},zv:function(){return m}});var r=t(5861),i=t(7757),c=t.n(i),a=t(1243),o="a5ff046cd300d2bbc6befba4bd859295",u="https://api.themoviedb.org/3",s="/trending/movie/day",d="/search/movie",p="/movie/",l=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,t=new URLSearchParams({api_key:o,page:e}),n.next=4,a.Z.get("".concat(u).concat(s,"?").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,i,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,r=new URLSearchParams({api_key:o,query:e,page:t}),n.next=4,a.Z.get("".concat(u).concat(d,"?").concat(r));case 4:return i=n.sent,n.abrupt("return",i.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o}),n.next=3,a.Z.get("".concat(u).concat(p).concat(e,"?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o}),n.next=3,a.Z.get("".concat(u).concat(p).concat(e,"/reviews?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o}),n.next=3,a.Z.get("".concat(u).concat(p).concat(e,"/credits?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9961:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,i,c,a,o,u=t(5861),s=t(9439),d=t(7757),p=t.n(d),l=t(168),f=t(6444),x=t(1087),h=(0,f.ZP)(x.rU)(r||(r=(0,l.Z)(["\n    background-color: ",";\n    color: ",";\n    padding: 5px 15px;\n    border-radius: 16px;\n    margin-bottom: 20px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: max-content;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    & svg {\n        fill: ",";\n        width: 30px;\n        height: 30px;\n    }\n    &:hover, &:focus, &.active {\n        background-color: ",";\n        color: ",";\n    }\n"])),(function(n){return n.theme.darkRed}),(function(n){return n.theme.decorativeLight}),(function(n){return n.theme.decorativeLight}),(function(n){return n.theme.beige}),(function(n){return n.theme.darkRed})),m=t(71),g=t(184),v=function(n){var e=n.to;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(h,{to:e,children:[" ",(0,g.jsx)(m.diL,{})," Back"]})})},b=t(9649),j=t(7534),w=t(3231),Z=t(558),k=function(n){var e=n.film,t=e.poster_path,r=e.genres,i=e.overview,c=e.title,a=e.original_title,o=e.production_companies,u=e.release_date,s=e.tagline,d=new Date(u),p="".concat(d.getDate(),".").concat(d.getMonth(),".").concat(d.getFullYear());return(0,g.jsxs)(w.Q2,{children:[(0,g.jsx)(w.DK,{children:(0,g.jsx)(w.Wf,{src:t?"".concat(Z.hp.default).concat(t):Z.hp.sample})}),(0,g.jsxs)(w._w,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(j.o,{typing:[1e3,"".concat(c)]})},"title"),(0,g.jsx)(w.ne,{children:s},"tag"),(0,g.jsxs)("li",{children:[(0,g.jsx)(w.lG,{children:"Original Title:"})," ",a]},a),(0,g.jsxs)("li",{children:[(0,g.jsx)(w.lG,{children:"Genres:"})," ",r.map((function(n){return n.name})).join(", ")]},"genres"),(0,g.jsxs)("li",{children:[(0,g.jsx)(w.lG,{children:"Year:"})," ",p]},u),(0,g.jsxs)("li",{children:[(0,g.jsx)(w.lG,{children:"Production:"})," ",o.map((function(n){return n.name})).join(", ")]},"production"),(0,g.jsxs)("li",{children:[(0,g.jsx)(w.lG,{children:"Description:"})," ",i]},"description")]})]})},y=f.ZP.div(i||(i=(0,l.Z)(["\nmargin-bottom: 20px;"]))),_=f.ZP.p(c||(c=(0,l.Z)(["\n    font-size: 20px;\n    color: ",";\n    margin-bottom: 10px;\n    font-weight: 700;\n"])),(function(n){return n.theme.darkRed})),P=f.ZP.ul(a||(a=(0,l.Z)(["\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n"]))),R=(0,f.ZP)(x.OL)(o||(o=(0,l.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background-color: ",";\n    color: ",";\n    border-radius: 8px;\n    padding: 5px 10px;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    & svg {\n        height: 30px;\n        width: 30px;\n    }\n    &.active {\n        background-color: ",";\n        color: ",";\n        box-shadow: 0px 10px 34px -11px rgba(0,0,0,0.75);\n    }\n"])),(function(n){return n.theme.beige}),(function(n){return n.theme.darkRed}),(function(n){return n.theme.darkRed}),(function(n){return n.theme.beige})),z=t(7692),H=t(4651),L=function(){return(0,g.jsxs)(y,{children:[(0,g.jsx)(_,{children:"View additional information"}),(0,g.jsxs)(P,{children:[(0,g.jsxs)(R,{to:"cast",children:[(0,g.jsx)(H.Nhi,{})," Cast"]}),(0,g.jsxs)(R,{to:"reviews",children:[(0,g.jsx)(z.XYE,{})," Reviews"]})]})]})},S=t(6436),G=t(2791),U=t(7689),D=function(){var n,e,t=(0,G.useState)(null),r=(0,s.Z)(t,2),i=r[0],c=r[1],a=(0,U.UO)().movieId,o=null!==(n=null===(e=(0,U.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,G.useEffect)((function(){function n(){return(n=(0,u.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,S.HI)(a);case 3:e=n.sent,c(e),n.next=10;break;case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),(0,g.jsxs)(g.Fragment,{children:[i&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{to:o}),(0,g.jsx)(k,{film:i}),(0,g.jsx)(L,{})]}),(0,g.jsx)(G.Suspense,{fallback:(0,g.jsx)(b.a,{}),children:(0,g.jsx)(U.j3,{})})]})}}}]);
//# sourceMappingURL=961.1a4f22b1.chunk.js.map