"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[29],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(5675),a=(n(9231),n(4852));const i={title:"\u8def\u7531",order:3},o=void 0,p={unversionedId:"guide/miniapp/router",id:"guide/miniapp/router",title:"\u8def\u7531",description:"\u5c0f\u7a0b\u5e8f\u7aef\u8def\u7531\u76f8\u5173\u6982\u5ff5\u57fa\u672c\u4e0e\u6307\u5357-\u8def\u7531\u7ae0\u8282\u4fdd\u6301\u4e00\u81f4\uff08\u4e0d\u652f\u6301\u5e03\u5c40\u7ec4\u4ef6\u3001\u52a8\u6001\u8def\u7531\uff09\uff0c\u4ee5\u4e0b\u4ec5\u5217\u51fa\u5c0f\u7a0b\u5e8f\u7aef\u8def\u7531\u7684\u6ce8\u610f\u70b9\u3002",source:"@site/docs/guide/miniapp/router.md",sourceDirName:"guide/miniapp",slug:"/guide/miniapp/router",permalink:"/docs/guide/miniapp/router",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/miniapp/router.md",tags:[],version:"current",frontMatter:{title:"\u8def\u7531",order:3}},l={},u=[{value:"\u8def\u7531\u89c4\u5219",id:"\u8def\u7531\u89c4\u5219",level:2},{value:"\u8def\u7531\u8df3\u8f6c",id:"\u8def\u7531\u8df3\u8f6c",level:2},{value:"Link \u7ec4\u4ef6",id:"link-\u7ec4\u4ef6",level:3},{value:"API \u5f62\u5f0f",id:"api-\u5f62\u5f0f",level:3},{value:"\u8def\u7531\u53c2\u6570\u83b7\u53d6",id:"\u8def\u7531\u53c2\u6570\u83b7\u53d6",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u7aef\u8def\u7531\u76f8\u5173\u6982\u5ff5\u57fa\u672c\u4e0e",(0,a.kt)("a",{parentName:"p",href:"../basic/router"},"\u6307\u5357-\u8def\u7531"),"\u7ae0\u8282\u4fdd\u6301\u4e00\u81f4\uff08\u4e0d\u652f\u6301",(0,a.kt)("a",{parentName:"p",href:"../basic/router#%E5%B8%83%E5%B1%80%E7%BB%84%E4%BB%B6"},"\u5e03\u5c40\u7ec4\u4ef6"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"../basic/router#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1"},"\u52a8\u6001\u8def\u7531"),"\uff09\uff0c\u4ee5\u4e0b\u4ec5\u5217\u51fa\u5c0f\u7a0b\u5e8f\u7aef\u8def\u7531\u7684\u6ce8\u610f\u70b9\u3002"),(0,a.kt)("h2",{id:"\u8def\u7531\u89c4\u5219"},"\u8def\u7531\u89c4\u5219"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../basic/router"},"\u6307\u5357-\u8def\u7531"),"\u7ae0\u8282\u63d0\u5230\uff0cice.js \u91c7\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u3002\u4f46\u662f\u5bf9\u4e8e\u5c0f\u7a0b\u5e8f\u6765\u8bf4\uff0c\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u4f1a\u5e26\u6765\u65e0\u6cd5\u786e\u5b9a\u9996\u9875\u7684\u95ee\u9898\uff08\u5728\u539f\u751f\u5c0f\u7a0b\u5e8f\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"app.json")," \u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," \u6570\u7ec4\u7684\u7b2c\u4e00\u9879\u5373\u88ab\u6307\u5b9a\u4e3a\u9996\u9875\uff09\u3002\u56e0\u6b64 ice.js \u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\uff0c\u7528\u6237\u9700\u8981\u5728 src/app.tsx \u4e2d\u901a\u8fc7\u5bfc\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"miniappManifest")," \u8fdb\u884c\u8def\u7531\u7684\u6307\u5b9a\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export const miniappManifest = {\n  routes: [\n    'index',\n    'about',\n    'repo/index',\n    'repo/preview',\n  ],\n};\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," \u4e2d\u7684\u6bcf\u4e00\u9879\u5e94\u8be5\u4e0e\u6587\u4ef6\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," \u76ee\u5f55\u4e0b\u7684\u5b9e\u9645\u8def\u5f84\u4fdd\u6301\u4e00\u81f4\uff0c\u4e14\u5176\u7b2c\u4e00\u9879\u5c06\u4f5c\u4e3a\u5c0f\u7a0b\u5e8f\u7684\u9996\u9875\u88ab\u52a0\u8f7d\u3002"),(0,a.kt)("h2",{id:"\u8def\u7531\u8df3\u8f6c"},"\u8def\u7531\u8df3\u8f6c"),(0,a.kt)("h3",{id:"link-\u7ec4\u4ef6"},"Link \u7ec4\u4ef6"),(0,a.kt)("p",null,"ice.js \u5c0f\u7a0b\u5e8f\u901a\u8fc7 Link \u7ec4\u4ef6\uff08\u5e95\u5c42\u5373\u5c0f\u7a0b\u5e8f\u539f\u751f navigator \u7ec4\u4ef6\uff09\uff0c\u6765\u63d0\u4f9b\u8def\u7531\u95f4\u7684\u8df3\u8f6c\u80fd\u529b\u3002\u5176\u63a5\u53d7\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," \u53c2\u6570\u4e0e Web \u7aef\u7ea6\u5b9a\u5f0f\u8def\u7531\u4ea7\u751f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u4fdd\u6301\u4e00\u81f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},"import { Link } from 'ice';\n\nexport default function Home() {\n  return (\n    <>\n      <div>Hello ICE</div>\n      <Link to=\"/about\">about ice</Link>\n    </>\n  );\n}\n")),(0,a.kt)("h3",{id:"api-\u5f62\u5f0f"},"API \u5f62\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ice.js \u63d0\u4f9b\u7684 ",(0,a.kt)("a",{parentName:"li",href:"../basic/api"},"history")," \u80fd\u529b\uff0c\u4f60\u53ef\u4ee5\u5b9e\u73b0\u5c0f\u7a0b\u5e8f\u7aef\u7684\u8def\u7531\u8df3\u8f6c\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { history } from 'ice';\n\nexport function historyPush (link: string) {\n  history.push(link);\n}\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u5e94\u7528\u5165\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u5bfc\u5165\u4f7f\u7528\u65f6\uff0c\u7531\u4e8e history \u8fd8\u672a\u5b8c\u6210\u521d\u59cb\u5316\u521b\u5efa\uff0c\u4e0d\u80fd\u4ee5\u7acb\u5373\u6267\u884c\u7684\u65b9\u5f0f\u4f7f\u7528\u3002\u63a8\u8350\u4ee5\u4e0a\u8ff0\u65b9\u5f0f\u5c01\u88c5\u540e\u5728\u5fc5\u8981\u7684\u65f6\u5019\u8fdb\u884c\u8c03\u7528\u3002")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5c0f\u7a0b\u5e8f\u539f\u751f\u7684\u8def\u7531\u76f8\u5173 API \u4e5f\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u3002\u4ee5\u963f\u91cc\u5c0f\u7a0b\u5e8f\u4e3a\u4f8b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"my.navigateTo({ url: '/pages/repo/index' });\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u53c2\u6570\u5fc5\u987b\u4e0e\u9875\u9762\u5b9e\u9645\u8def\u5f84\u4fdd\u6301\u4e00\u81f4\u3002"),(0,a.kt)("h2",{id:"\u8def\u7531\u53c2\u6570\u83b7\u53d6"},"\u8def\u7531\u53c2\u6570\u83b7\u53d6"),(0,a.kt)("p",null,"\u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u539f\u751f\u9875\u9762 ",(0,a.kt)("inlineCode",{parentName:"p"},"onLoad")," \u65b9\u6cd5\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useSearchParams")," \u83b7\u53d6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useParams } from 'ice';\n\n// \u8def\u7531\u89c4\u5219  /home?uid=1234\nexport default function Home() {\n  const [searchParams] = useSearchParams();\n  // searchParams \u8f93\u51fa\u5185\u5bb9\u4e3a { uid: '1234'}\n  \n  return (\n    <>\n      <h2>Home Page</h2>\n    </>\n  );\n}\n")))}s.isMDXComponent=!0}}]);