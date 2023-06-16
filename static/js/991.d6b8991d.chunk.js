"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[991],{9471:function(n,e,t){t.d(e,{j:function(){return f}});var r,a,i=t(1578),o=t(168),c=t(558),s=t(6444),u=s.ZP.div(r||(r=(0,o.Z)(["\nposition: fixed;\ntop: 50%;\nleft: 50%;\nbackground-color: rgba(0, 0, 0, 0.2);\ntransform: translate(-50%, -50%);\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100%;\nz-index: 99;\ngap: 10px;\n& svg {\n    width: 70px;\n    height: 70px;\n    fill: ",";\n    color: ",";\n}\n"])),(function(n){return n.theme.darkRed}),(function(n){return n.theme.red})),p=s.ZP.p(a||(a=(0,o.Z)(["\n    font-size: 22px;\n    color: ",";\n    font-weight: 700;\n    font-family: 'Prompt', sans-serif;\n    @media screen and (",") {\n        font-size: 30px;\n    }\n"])),(function(n){return n.theme.red}),c.Hb.tablet),d=t(184),f=function(){return(0,d.jsxs)(u,{children:[(0,d.jsx)(i.hlP,{}),(0,d.jsx)(p,{children:"Something went wrong"})]})}},1525:function(n,e,t){t.d(e,{DK:function(){return l},Dx:function(){return h},Wf:function(){return g},Zb:function(){return f},j8:function(){return x}});var r,a,i,o,c,s=t(168),u=t(6444),p=t(558),d=t(6303),f=(0,u.ZP)(d.E.li)(r||(r=(0,s.Z)(["\n    width: calc((100% - 5px * 4) / 2);\n    margin: 5px;\n    background-color: ",";\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1); \n    @media screen and (","){\n        width: calc((100% - 5px * 8) / 3);\n    }\n    @media screen and (",") {\n        width: calc((100% - 8px * 10) / 4);\n        margin: 8px;\n    }\n    &:hover, &:focus {\n        transform: scale(1.04);\n    }\n"])),(function(n){return n.theme.decorativeLight}),p.Hb.tablet,p.Hb.desktop),l=u.ZP.div(a||(a=(0,s.Z)(["\n    height: 232px;\n    width: 100%;\n    position: relative;\n    @media screen and (",") {\n        height: 370px;\n    } \n    @media screen and (",") {\n        height: 426px;\n    } \n"])),p.Hb.tablet,p.Hb.desktop),g=(0,u.ZP)(d.E.img)(i||(i=(0,s.Z)(["\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n"]))),h=u.ZP.p(o||(o=(0,s.Z)(["\n    font-size: 20px;\n    text-align: center;\n    margin-top: 8px;\n"]))),x=u.ZP.span(c||(c=(0,s.Z)(["\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    color: ",";\n    padding: 4px;\n    border-radius: 8px;\n    ","\n"])),(function(n){return n.theme.decorativeLight}),(function(n){switch(n.rateType){case"good":default:return"background-color: #295f48;";case"bad":return"background-color: #440700"}}))},8354:function(n,e,t){t.d(e,{e:function(){return l}});var r,a=t(1087),i=t(1525),o=t(558),c=t(184),s={initial:{opacity:0},isOn:{opacity:1,transition:{type:"spring"}}},u=function(n){var e=n.id,t=n.poster,r=n.title,u=n.rate,p=n.path;return(0,c.jsx)(i.Zb,{initial:"initial",animate:"isOn",variants:s,children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(e),state:p,children:[(0,c.jsxs)(i.DK,{children:[(0,c.jsx)(i.Wf,{src:t?"".concat(o.hp.default).concat(t):o.hp.sample,alt:r,loading:"lazy"}),(0,c.jsx)(i.j8,{rateType:u>6?"good":"bad",children:u.toFixed(1)})]}),(0,c.jsx)(i.Dx,{children:r})]})})},p=t(168),d=t(6444).ZP.ul(r||(r=(0,p.Z)(["\n    padding-bottom: 40px;\n    padding-top: 20px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: -5px;\n    @media screen and (",") {\n        margin: -8px;\n    }\n"])),o.Hb.desktop),f=t(7689),l=function(n){var e=n.movies,t=(0,f.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d,{children:e.map((function(n){var e=n.title,r=n.poster_path,a=n.vote_average,i=n.id;return(0,c.jsx)(u,{title:e,poster:r,rate:a,id:i,path:{from:t}},i)}))})})}},7534:function(n,e,t){t.d(e,{o:function(){return i}});var r=t(1715),a=t(184),i=function(n){var e=n.typing;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.e,{sequence:e,wrapper:"h1",style:{color:"#440700",fontSize:"26px"}})})}},6436:function(n,e,t){t.d(e,{Df:function(){return f},HI:function(){return g},MS:function(){return m},pn:function(){return v},tx:function(){return h},z1:function(){return l},zv:function(){return x}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243),c="a5ff046cd300d2bbc6befba4bd859295",s="https://api.themoviedb.org/3",u="/trending/movie/day",p="/search/movie",d="/movie/",f=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=new URLSearchParams({api_key:c,page:e}),n.next=4,o.Z.get("".concat(s).concat(u,"?").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a,u=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,r=new URLSearchParams({api_key:c,query:e,page:t}),n.next=4,o.Z.get("".concat(s).concat(p,"?").concat(r));case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:c}),n.next=3,o.Z.get("".concat(s).concat(d).concat(e,"?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:c}),n.next=3,o.Z.get("".concat(s).concat(d).concat(e,"/reviews?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:c}),n.next=3,o.Z.get("".concat(s).concat(d).concat(e,"/credits?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:c}),n.next=3,o.Z.get("".concat(s).concat(d).concat(e,"/videos?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:c}),n.next=3,o.Z.get("".concat(s).concat(d).concat(e,"/similar?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2991:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,i,o=t(5861),c=t(9439),s=t(7757),u=t.n(s),p=t(2791),d=t(168),f=t(558),l=t(6444),g=l.ZP.form(r||(r=(0,d.Z)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 5px;\n    margin-bottom: 20px;\n"]))),h=l.ZP.input(a||(a=(0,d.Z)(["\n    padding: 10px;\n    width: 200px;\n    border-radius: 8px;\n    background-color: transparent;\n    border: 2px solid ",";\n    outline: none;\n    font-size: 20px;\n    font-family: 'Anonymous Pro', monospace;\n    @media screen and (",") {\n        width: 300px;\n        padding-top: 15px;\n        padding-bottom: 15px;\n    }\n"])),(function(n){return n.theme.red}),f.Hb.tablet),x=l.ZP.button(i||(i=(0,d.Z)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    border-radius: 8px;\n    font-family: 'Prompt', sans-serif;\n    background-color: ",";\n    border: none;\n    padding: 8px;\n    font-size: 16px;\n    cursor: pointer;\n    color: ",";\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    & svg {\n        width: 30px;\n        height: 30px;\n    }\n    @media screen and (",") {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n    &:hover, &:focus {\n        background-color: ",";\n        color: ",";\n    }\n"])),(function(n){return n.theme.darkRed}),(function(n){return n.theme.beige}),f.Hb.tablet,(function(n){return n.theme.beige}),(function(n){return n.theme.darkRed})),m=t(6856),v=t(184),b=function(n){var e=n.searchFunc,t=(0,p.useState)(""),r=(0,c.Z)(t,2),a=r[0],i=r[1];return(0,v.jsxs)(g,{onSubmit:function(n){n.preventDefault(),e(a),i("")},children:[(0,v.jsx)(h,{type:"text",onChange:function(n){var e=n.target.value;i(e)},value:a}),(0,v.jsxs)(x,{children:["Search ",(0,v.jsx)(m._9Q,{})]})]})},_=t(9649),w=t(8354),Z=t(6048),y=t.n(Z),j=t(6049),k=t(6436),P=t(1087),S=t(7534),R=t(9471),L=function(){var n=(0,p.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(f.Q_.IDLE),i=(0,c.Z)(a,2),s=i[0],d=i[1],l=(0,p.useState)(0),g=(0,c.Z)(l,2),h=g[0],x=g[1],m=(0,P.lr)(),Z=(0,c.Z)(m,2),L=Z[0],E=Z[1],D=(0,p.useState)(0),z=(0,c.Z)(D,2),C=z[0],N=z[1],H=L.get("query"),Q=Number(L.get("page")),F=(0,p.useRef)(H);(0,p.useEffect)((function(){function n(){return(n=(0,o.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.z1)(H,Q);case 3:(e=n.sent).results.length>0?(d(f.Q_.RESOLVED),r(e.results),x(e.total_pages)):(d("nothing"),r([]),x(0)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),d(f.Q_.REJECTED);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}H&&(H!==F.current&&(F.current=H),N(Q-1),d(f.Q_.PENDING),function(){n.apply(this,arguments)}())}),[Q,H]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b,{searchFunc:function(n){E({query:n,page:1}),N(0)}}),s===f.Q_.IDLE&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(S.o,{typing:["Search movies"]})}),s===f.Q_.PENDING&&(0,v.jsx)(_.a,{}),s===f.Q_.RESOLVED&&t.length&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(S.o,{typing:["Results:",800,"Results: ".concat(H)]}),(0,v.jsx)(w.e,{movies:t}),(0,v.jsx)(y(),{containerClassName:j.Z.pagination__container,pageClassName:j.Z.pagination__page,activeClassName:j.Z.selected,previousClassName:j.Z.pagination__arrow,nextClassName:j.Z.pagination__arrow,disabledClassName:j.Z.disabled,breakLabel:"...",nextLabel:">>",onPageChange:function(n){E({query:F.current,page:n.selected+1})},pageRangeDisplayed:1,pageCount:h,previousLabel:"<<",forcePage:C})]}),"nothing"===s&&(0,v.jsx)(S.o,{typing:["No results"]}),s===f.Q_.REJECTED&&(0,v.jsx)(R.j,{})]})}},6049:function(n,e){e.Z={pagination__container:"Pagination_pagination__container__lLLsM",pagination__page:"Pagination_pagination__page__TofTv",pagination__arrow:"Pagination_pagination__arrow__OhTwl",selected:"Pagination_selected__DOumc",disabled:"Pagination_disabled__jd-Re"}}}]);
//# sourceMappingURL=991.d6b8991d.chunk.js.map