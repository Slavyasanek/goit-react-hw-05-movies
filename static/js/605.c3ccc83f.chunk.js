(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[605],{6048:function(e,t,r){var n;e.exports=(n=r(2791),function(){var e={703:function(e,t,r){"use strict";var n=r(414);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,o){if(o!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},697:function(e,t,r){e.exports=r(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=n}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){"use strict";r.r(a),r.d(a,{default:function(){return k}});var e=r(98),t=r.n(e),n=r(697),i=r.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var s=function(e){var r=e.pageClassName,n=e.pageLinkClassName,a=e.page,i=e.selected,s=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,f=e.extraAriaContext,d=e.pageLabelBuilder,g=e.rel,v=e.ariaLabel||"Page "+a+(f?" "+f:""),b=null;return i&&(b="page",v=e.ariaLabel||"Page "+a+" is your current page",r=void 0!==r?r+" "+s:s,void 0!==n?void 0!==l&&(n=n+" "+l):n=l),t().createElement("li",{className:r},t().createElement("a",o({rel:g,role:p?void 0:"button",className:n,href:p,tabIndex:i?"-1":"0","aria-label":v,"aria-current":b,onKeyPress:u},c(u)),d(a)))};s.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var l=s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}var u=function(e){var r=e.breakLabel,n=e.breakAriaLabel,a=e.breakClassName,i=e.breakLinkClassName,o=e.breakHandler,s=e.getEventListener,l=a||"break";return t().createElement("li",{className:l},t().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":n,onKeyPress:o},s(o)),r))};u.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var p=u;function f(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function h(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(s,e);var r,n,a,i,o=(a=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(a);if(i){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function s(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),C(y(r=o.call(this,e)),"handlePreviousPage",(function(e){var t=r.state.selected;r.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),C(y(r),"handleNextPage",(function(e){var t=r.state.selected,n=r.props.pageCount;r.handleClick(e,null,t<n-1?t+1:void 0,{isNext:!0})})),C(y(r),"handlePageSelected",(function(e,t){if(r.state.selected===e)return r.callActiveCallback(e),void r.handleClick(t,null,void 0,{isActive:!0});r.handleClick(t,null,e)})),C(y(r),"handlePageChange",(function(e){r.state.selected!==e&&(r.setState({selected:e}),r.callCallback(e))})),C(y(r),"getEventListener",(function(e){return C({},r.props.eventListener,e)})),C(y(r),"handleClick",(function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=a.isPrevious,o=void 0!==i&&i,s=a.isNext,l=void 0!==s&&s,c=a.isBreak,u=void 0!==c&&c,p=a.isActive,f=void 0!==p&&p;e.preventDefault?e.preventDefault():e.returnValue=!1;var d=r.state.selected,g=r.props.onClick,v=n;if(g){var b=g({index:t,selected:d,nextSelectedPage:n,event:e,isPrevious:o,isNext:l,isBreak:u,isActive:f});if(!1===b)return;Number.isInteger(b)&&(v=b)}void 0!==v&&r.handlePageChange(v)})),C(y(r),"handleBreakClick",(function(e,t){var n=r.state.selected;r.handleClick(t,e,n<e?r.getForwardJump():r.getBackwardJump(),{isBreak:!0})})),C(y(r),"callCallback",(function(e){void 0!==r.props.onPageChange&&"function"==typeof r.props.onPageChange&&r.props.onPageChange({selected:e})})),C(y(r),"callActiveCallback",(function(e){void 0!==r.props.onPageActive&&"function"==typeof r.props.onPageActive&&r.props.onPageActive({selected:e})})),C(y(r),"getElementPageRel",(function(e){var t=r.state.selected,n=r.props,a=n.nextPageRel,i=n.prevPageRel,o=n.selectedPageRel;return t-1===e?i:t===e?o:t+1===e?a:void 0})),C(y(r),"pagination",(function(){var e=[],n=r.props,a=n.pageRangeDisplayed,i=n.pageCount,o=n.marginPagesDisplayed,s=n.breakLabel,l=n.breakClassName,c=n.breakLinkClassName,u=n.breakAriaLabels,f=r.state.selected;if(i<=a)for(var d=0;d<i;d++)e.push(r.getPageElement(d));else{var g=a/2,v=a-g;f>i-a/2?g=a-(v=i-f):f<a/2&&(v=a-(g=f));var b,h,y=function(e){return r.getPageElement(e)},m=[];for(b=0;b<i;b++){var C=b+1;if(C<=o)m.push({type:"page",index:b,display:y(b)});else if(C>i-o)m.push({type:"page",index:b,display:y(b)});else if(b>=f-g&&b<=f+(0===f&&a>1?v-1:v))m.push({type:"page",index:b,display:y(b)});else if(s&&m.length>0&&m[m.length-1].display!==h&&(a>0||o>0)){var P=b<f?u.backward:u.forward;h=t().createElement(p,{key:b,breakAriaLabel:P,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:r.handleBreakClick.bind(null,b),getEventListener:r.getEventListener}),m.push({type:"break",index:b,display:h})}}m.forEach((function(t,r){var n=t;"break"===t.type&&m[r-1]&&"page"===m[r-1].type&&m[r+1]&&"page"===m[r+1].type&&m[r+1].index-m[r-1].index<=2&&(n={type:"page",index:t.index,display:y(t.index)}),e.push(n.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,r.state={selected:n},r}return r=s,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,r=e.disableInitialCallback,n=e.extraAriaContext,a=e.pageCount,i=e.forcePage;void 0===t||r||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(a)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(a,"). Did you forget a Math.ceil()?")),void 0!==t&&t>a-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(a-1,").")),void 0!==i&&i>a-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(a-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,r=t.pageCount,n=e+t.pageRangeDisplayed;return n>=r?r-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,r=t.hrefBuilder,n=t.pageCount,a=t.hrefAllControls;if(r)return a||e>=0&&e<n?r(e+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var r=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(r=r+" "+this.props.extraAriaContext),r}}},{key:"getPageElement",value:function(e){var r=this.state.selected,n=this.props,a=n.pageClassName,i=n.pageLinkClassName,o=n.activeClassName,s=n.activeLinkClassName,c=n.extraAriaContext,u=n.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:r===e,rel:this.getElementPageRel(e),pageClassName:a,pageLinkClassName:i,activeClassName:o,activeLinkClassName:s,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var r=this.props,n=r.disabledClassName,a=r.disabledLinkClassName,i=r.pageCount,o=r.className,s=r.containerClassName,l=r.previousLabel,c=r.previousClassName,u=r.previousLinkClassName,p=r.previousAriaLabel,d=r.prevRel,v=r.nextLabel,b=r.nextClassName,h=r.nextLinkClassName,y=r.nextAriaLabel,m=r.nextRel,C=this.state.selected,P=0===C,k=C===i-1,x="".concat(f(c)).concat(P?" ".concat(f(n)):""),N="".concat(f(b)).concat(k?" ".concat(f(n)):""),w="".concat(f(u)).concat(P?" ".concat(f(a)):""),L="".concat(f(h)).concat(k?" ".concat(f(a)):""),E=P?"true":"false",O=k?"true":"false";return t().createElement("ul",{className:o||s,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:x},t().createElement("a",g({className:w,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":E,"aria-label":p,rel:d},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:N},t().createElement("a",g({className:L,href:this.getElementHref(C+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":O,"aria-label":y,rel:m},this.getEventListener(this.handleNextPage)),v)))}}])&&v(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),s}(e.Component);C(P,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),C(P,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});var k=P}(),a}())},1715:function(e,t,r){"use strict";r.d(t,{e:function(){return v}});var n=r(2791);function a(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}l((n=n.apply(e,t||[])).next())}))}function i(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function o(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o}function l(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}function c(e,t,r,n){for(var c=[],f=4;f<arguments.length;f++)c[f-4]=arguments[f];return a(this,void 0,void 0,(function(){var a,f,d,g,v,b;return i(this,(function(i){switch(i.label){case 0:i.trys.push([0,12,13,14]),a=o(c),f=a.next(),i.label=1;case 1:if(f.done)return[3,11];switch(typeof(d=f.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,u(e,d,t,r,n)];case 3:return i.sent(),[3,10];case 4:return[4,p(d)];case 5:return i.sent(),[3,10];case 6:return[4,d.apply(void 0,l([e,t,r,n],s(c),!1))];case 7:return i.sent(),[3,10];case 8:return[4,d];case 9:i.sent(),i.label=10;case 10:return f=a.next(),[3,1];case 11:return[3,14];case 12:return g=i.sent(),v={error:g},[3,14];case 13:try{f&&!f.done&&(b=a.return)&&b.call(a)}finally{if(v)throw v.error}return[7];case 14:return[2]}}))}))}function u(e,t,r,n,o){return a(this,void 0,void 0,(function(){var a;return i(this,(function(i){switch(i.label){case 0:return a=function(e,t){var r=s(t).slice(0);return l(l([],s(e),!1),[NaN],!1).findIndex((function(e,t){return r[t]!==e}))}(e.textContent,t),[4,f(e,l(l([],s(g(e.textContent,a)),!1),s(d(t,a)),!1),r,n,o)];case 1:return i.sent(),[2]}}))}))}function p(e){return a(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function f(e,t,r,n,l){return a(this,void 0,void 0,(function(){var a,c,u,f,d,g,v,b,h,y,m,C,P;return i(this,(function(k){switch(k.label){case 0:if(a=t,l){for(c=0,u=1;u<t.length;u++)if(f=s([t[u-1],t[u]],2),d=f[0],(g=f[1]).length>d.length||""===g){c=u;break}a=t.slice(c,t.length)}k.label=1;case 1:k.trys.push([1,6,7,8]),v=o(function(e){var t,r,n,a,s,l,c;return i(this,(function(u){switch(u.label){case 0:t=function(e){return i(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){return""===e||t.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}}))},u.label=1;case 1:u.trys.push([1,6,7,8]),r=o(e),n=r.next(),u.label=2;case 2:return n.done?[3,5]:(a=n.value,[5,t(a)]);case 3:u.sent(),u.label=4;case 4:return n=r.next(),[3,2];case 5:return[3,8];case 6:return s=u.sent(),l={error:s},[3,8];case 7:try{n&&!n.done&&(c=r.return)&&c.call(r)}finally{if(l)throw l.error}return[7];case 8:return[2]}}))}(a)),b=v.next(),k.label=2;case 2:return b.done?[3,5]:(h=b.value,y="WRITING"===h.opCode(e)?r+r*(Math.random()-.5):n+n*(Math.random()-.5),h.op(e),[4,p(y)]);case 3:k.sent(),k.label=4;case 4:return b=v.next(),[3,2];case 5:return[3,8];case 6:return m=k.sent(),C={error:m},[3,8];case 7:try{b&&!b.done&&(P=v.return)&&P.call(v)}finally{if(C)throw C.error}return[7];case 8:return[2]}}))}))}function d(e,t,r){var n=s(e).slice(0);return void 0===t&&(t=0),void 0===r&&(r=n.length),i(this,(function(e){switch(e.label){case 0:return t<r?[4,n.slice(0,++t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}function g(e,t,r){var n=s(e).slice(0);return void 0===t&&(t=0),void 0===r&&(r=n.length),i(this,(function(e){switch(e.label){case 0:return r>t?[4,n.slice(0,--r).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var v=(0,n.memo)((0,n.forwardRef)((function(e,t){var r=e.sequence,a=e.repeat,i=e.className,o=e.speed,u=void 0===o?40:o,p=e.deletionSpeed,f=e.omitDeletionAnimation,d=void 0!==f&&f,g=e.preRenderFirstString,v=void 0!==g&&g,b=e.wrapper,h=void 0===b?"span":b,y=e.cursor,m=void 0===y||y,C=e.style,P=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","cursor","style"]),k=P["aria-label"],x=P["aria-hidden"];p||(p=u);var N=new Array(2).fill(40);[u,p].forEach((function(e,t){switch(typeof e){case"number":N[t]=Math.abs(e-100);break;case"object":var r=e,n=r.type,a=r.value;if("number"!=typeof a)break;"keyStrokeDelayInMs"===n&&(N[t]=a)}}));var w,L,E,O,R,A,S=N[0],_=N[1],j=function(e,t){void 0===t&&(t=null);var r=(0,n.useRef)(t);return(0,n.useEffect)((function(){e&&("function"==typeof e?e(r.current):e.current=r.current)}),[e]),r}(t),T="index-module_type__E-SaG";w=i?"".concat(m?T+" ":"").concat(i):m?T:"",L=(0,n.useRef)((function(){var e,t=r;return a===1/0?e=c:"number"==typeof a&&(t=Array(1+a).fill(r).flat()),c.apply(void 0,l(l([j.current,S,_,d],s(t),!1),[e],!1)),function(){j.current}})),E=(0,n.useRef)(),O=(0,n.useRef)(!1),R=(0,n.useRef)(!1),A=s((0,n.useState)(0),2)[1],O.current&&(R.current=!0),(0,n.useEffect)((function(){return O.current||(E.current=L.current(),O.current=!0),A((function(e){return e+1})),function(){R.current&&E.current&&E.current()}}),[]);var B=h,D=v?r.find((function(e){return"string"==typeof e}))||"":null;return n.createElement(B,{"aria-hidden":x,"aria-label":k,style:C,className:w,children:k?n.createElement("span",{"aria-hidden":"true",ref:j,children:D}):D,ref:k?void 0:j})})),(function(e,t){return!0}))}}]);
//# sourceMappingURL=605.c3ccc83f.chunk.js.map