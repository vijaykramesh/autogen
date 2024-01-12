"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1032],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var c=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,c,a=function(e,t){if(null==e)return{};var r,c,a={},n=Object.keys(e);for(c=0;c<n.length;c++)r=n[c],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)r=n[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=c.createContext({}),l=function(e){var t=c.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return c.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},f=c.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||n;return r?c.createElement(h,o(o({ref:t},p),{},{components:r})):c.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<n;l++)o[l]=r[l];return c.createElement.apply(null,o)}return c.createElement.apply(null,r)}f.displayName="MDXCreateElement"},318:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var c=r(3117),a=(r(7294),r(3905));const n={sidebar_label:"cache_factory",title:"cache.cache_factory"},o=void 0,i={unversionedId:"reference/cache/cache_factory",id:"reference/cache/cache_factory",isDocsHomePage:!1,title:"cache.cache_factory",description:"cache\\_factory",source:"@site/docs/reference/cache/cache_factory.md",sourceDirName:"reference/cache",slug:"/reference/cache/cache_factory",permalink:"/autogen/docs/reference/cache/cache_factory",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/cache/cache_factory.md",tags:[],version:"current",frontMatter:{sidebar_label:"cache_factory",title:"cache.cache_factory"},sidebar:"referenceSideBar",previous:{title:"abstract_cache_base",permalink:"/autogen/docs/reference/cache/abstract_cache_base"},next:{title:"disk_cache",permalink:"/autogen/docs/reference/cache/disk_cache"}},s=[{value:"cache_factory",id:"cache_factory",children:[],level:4}],l={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,c.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"cache_factory"},"cache","_","factory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def cache_factory(seed, redis_url)\n")),(0,a.kt)("p",null,"Factory function for creating cache instances."),(0,a.kt)("p",null,"Based on the provided redis_url, this function decides whether to create a RedisCache\nor DiskCache instance. If RedisCache is available and redis_url is provided,\na RedisCache instance is created. Otherwise, a DiskCache instance is used."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"seed")," ",(0,a.kt)("em",{parentName:"li"},"str")," - A string used as a seed or namespace for the cache.\nThis could be useful for creating distinct cache instances\nor for namespacing keys in the cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"redis_url")," ",(0,a.kt)("em",{parentName:"li"},"str or None")," - The URL for the Redis server. If this is None\nor if RedisCache is not available, a DiskCache instance is created.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  An instance of either RedisCache or DiskCache, depending on the availability of RedisCache\nand the provided redis_url."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("p",null,"  Creating a Redis cache"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'redis_cache = cache_factory("myseed", "redis://localhost:6379/0")')),(0,a.kt)("p",null,"  Creating a Disk cache"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'disk_cache = cache_factory("myseed", None)')))}p.isMDXComponent=!0}}]);