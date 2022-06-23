"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[478],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),i=n(6010),a=n(8425),o=n(9960),c=n(3919),l=n(5999),s="cardContainer_fWXF",u="cardTitle_rnsV",f="cardDescription_PWke";function d(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function p(e){var t=e.href,n=e.icon,a=e.title,o=e.description;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",f),title:o},o))}function m(e){var t=e.item,n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,n=e.item,i=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:i,title:n.label,description:null==o?void 0:o.description})}function g(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,a.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{key:t,item:e}))})))}},7934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(2991),c=n(8425),l=["components"],s={sidebar_position:10,id:"index",title:"Cl\xe3s",pagination_next:"glossario/index"},u=void 0,f={unversionedId:"clas/index",id:"clas/index",title:"Cl\xe3s",description:"Pagina destinada a informa\xe7\xf5es detalhadas sobre os cl\xe3s.asfasfasfd",source:"@site/docs/clas/index.md",sourceDirName:"clas",slug:"/clas/",permalink:"/clas/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,id:"index",title:"Cl\xe3s",pagination_next:"glossario/index"},sidebar:"tutorialSidebar",previous:{title:"Cap\xedtulo 2",permalink:"/1/2"},next:{title:"Gloss\xe1rio",permalink:"/glossario/"}},d={},p=[],m={toc:p};function y(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pagina destinada a informa\xe7\xf5es detalhadas sobre os cl\xe3s.asfasfasfd"),(0,a.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);