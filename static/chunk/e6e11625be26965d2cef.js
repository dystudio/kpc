webpackJsonp([2],{"./site/src/imgs/page1.png":function(e,t){e.exports="/kpc/fonts/page1.png"},"./site/src/imgs/page2.png":function(e,t){e.exports="/kpc/fonts/page2.png"},"./site/src/pages/index/index.js":function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.default=void 0;var o,i,a,c,r,s=n("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js"),u=l(s),d=n("./node_modules/babel-runtime/helpers/extends.js"),p=l(d),h=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),f=l(h),g=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=l(g),v=n("./node_modules/babel-runtime/helpers/inherits.js"),b=l(v),x=n("./node_modules/intact-vue/dist/index.js"),y=l(x),w=n("./site/src/pages/index/index.vdt"),_=l(w),j=n("./site/src/pages/layout.js"),M=l(j);n("./site/src/pages/index/index.styl");var k=(o=y.default.template(),r=c=function(e){function t(){return(0,f.default)(this,t),(0,m.default)(this,e.apply(this,arguments))}return(0,b.default)(t,e),t.prototype.defaults=function(){return(0,p.default)({},e.prototype.defaults.call(this),{current:"one"})},t.prototype._page1=function(){this.set("current","one")},t.prototype._page2=function(){this.set("current","two")},t.prototype._mountAA=function(){var e=this,t=void 0,n=void 0,l=void 0,o=void 0,i=void 0,a=void 0;window.onmousewheel=function(t){var n=t.wheelDelta||0;console.log(n),n>0?e.set("current","one"):n<0&&e.set("current","two")},window.ontouchstart=function(e){e.preventDefault(),l=e.changedTouches[0].pageX,o=e.changedTouches[0].pageY},window.ontouchmove=function(c){c.preventDefault(),i=c.changedTouches[0].pageX,a=c.changedTouches[0].pageY,t=i-l,n=a-o,Math.abs(t)>Math.abs(n)&&t>0?console.log("left 2 right"):Math.abs(t)>Math.abs(n)&&t<0?console.log("right 2 left"):Math.abs(n)>Math.abs(t)&&n>0?(e.set("current","one"),console.log("top 2 bottom")):Math.abs(n)>Math.abs(t)&&n<0?(e.set("current","two"),console.log("bottom 2 top")):console.log("just touch")};var c=document.getElementById("page");!function(e,t,n){t=t.split(" "),t.forEach(function(t){e.addEventListener(t,function(e){console.log(t,n?e:e.type)})})}(c,"tap click touchstart touchmove touchend touchcancel swipe swipeLeft swipeRight swipeUp swipeDown longTap singleTap doubleTap mousewheel",!0)},t.prototype._destroy=function(){window.onmousewheel=null},t}(M.default),c.template=_.default,i=r,function(e,t,n,l,o){var i={};return Object.keys(l).forEach(function(e){i[e]=l[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,l){return l(e,t,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}(i,"template",[o],(a=(0,u.default)(i,"template"),a=a?a.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return a}}),i),i);t.default=k,e.exports=t.default},"./site/src/pages/index/index.styl":function(e,t,n){},"./site/src/pages/index/index.vdt":function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.default=function(e,t,n,l){t||(t=Vdt),e||(e={}),n||(n={});var c=t.miss.h,s=(t.miss.hc,t.miss.hu,this&&this.widgets,t.utils),d=s.extend,p=s.error,h=(s.className,s.slice),f=(s.noop,s.map,s.Options),g=(f.getModel,f.setModel,s.setCheckboxModel,s.detectCheckboxChecked,s.setSelectModel,this.data),m=this,v=(g&&g.Animate,(l||{})._super);return function(){var e={className:"index-page",pageIndex:"index"};return v.call(m,e,t,function(e){var t={},n=d({},e);return(t.header=function(e){return[function(){try{return e()}catch(e){p(e)}}.call(m),c("div",null,null,"circle-bg right")]})&&(n.header=function(n){var l=arguments;return e.header?e.header.apply(m,[function(){return t.header.apply(m,l)}].concat(h.call(l,1))):t.header.apply(m,l)})&&(t.content=function(e){return[c("div",null,[c(a.Row,{className:"first-page",align:"stretch",justify:"center",children:[c(a.Col,{className:"first-page-left",lg:"11",children:c("div",null,[c("h1",null,"KPC"),c("h2",null,"King design Public Components"),c("p",null,"支持多框架的前端高质量组件库"),c("div",null,[c(o.Button,{tagName:function(){try{return i.Link}catch(e){p(e)}}.call(m),type:"primary",tagProps:function(){try{return{href:"/kpc/docs/getting-started/"}}catch(e){p(e)}}.call(m),className:"button",children:"开始使用",_context:m}),c(o.Button,{href:"https://github.com/ksc-fe/kpc",className:"button",target:"_blank",children:"GitHub",_context:m})],"actions")],"wrapper"),_context:m}),c(a.Col,{className:"first-page-right",lg:"11",children:c("img",{src:function(){try{return r.default}catch(e){p(e)}}.call(m)}),_context:m})],_context:m}),c(a.Row,{align:"stretch",justify:"center",children:[c(a.Col,{className:"second-page-left",lg:"11",children:c("img",{src:function(){try{return u.default}catch(e){p(e)}}.call(m)}),_context:m}),c(a.Col,{className:"second-page-right",lg:"11",children:c("div",null,[c("div",null,[c("h2",null,"支持多框架"),c("div",null,"\n                                同时支持Intact和Vue框架\n                            ")],"feature"),c("div",null,[c("h2",null,"忠于原生，增强原生"),c("div",null,"\n                                在保持浏览器原生特性的基础上，增强交互能力\n                            ")],"feature"),c("div",null,[c("h2",null,"便捷开发"),c("div",null,"\n                                支持按需加载，主题定制，国际化等特性\n                            "),c("div",null,"\n                                并且提供了配套的脚手架方便快速初始化项目\n                            ")],"feature")],"info"),_context:m})],_context:m})],"pages"),c("div",null,null,"circle-bg left")]})&&(n.content=function(n){var l=arguments;return e.content?e.content.apply(m,[function(){return t.content.apply(m,l)}].concat(h.call(l,1))):t.content.apply(m,l)}),n}.call(m,n),v)}.call(m)};var o=n("./components/button/index.js"),i=n("./components/link/index.js"),a=n("./components/grid/index.js"),c=n("./site/src/imgs/page1.png"),r=l(c),s=n("./site/src/imgs/page2.png"),u=l(s);e.exports=t.default}});