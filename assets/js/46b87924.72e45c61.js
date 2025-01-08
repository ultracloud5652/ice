"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[7669],{4852:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(9231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2201:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(5675),o=(t(9231),t(4852));const i={title:"\u4f7f\u7528\u539f\u5b50\u5316 CSS \u80fd\u529b",order:449},a=void 0,s={unversionedId:"guide/advanced/unocss",id:"guide/advanced/unocss",title:"\u4f7f\u7528\u539f\u5b50\u5316 CSS \u80fd\u529b",description:"\u539f\u5b50\u5316 CSS \u662f\u4e00\u79cd CSS \u5199\u6cd5\uff0c\u5b83\u5c06 CSS \u6837\u5f0f\u62c6\u5206\u6210\u4e00\u4e2a\u4e2a\u72ec\u7acb\u7684\u6837\u5f0f\uff0c\u6bcf\u4e2a\u6837\u5f0f\u53ea\u5305\u542b\u4e00\u4e2a\u5c5e\u6027\uff0c\u6bd4\u5982\uff1a",source:"@site/docs/guide/advanced/unocss.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/unocss",permalink:"/docs/guide/advanced/unocss",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/advanced/unocss.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u539f\u5b50\u5316 CSS \u80fd\u529b",order:449},sidebar:"docs",previous:{title:"\u4f7f\u7528 Ant Design \u7ec4\u4ef6",permalink:"/docs/guide/advanced/antd"},next:{title:"\u4ece Rax App \u8fc1\u79fb",permalink:"/docs/guide/advanced/integrate-from-rax"}},c={},p=[{value:"\u5f00\u542f\u63d2\u4ef6",id:"\u5f00\u542f\u63d2\u4ef6",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u539f\u5b50\u5316 CSS \u662f\u4e00\u79cd CSS \u5199\u6cd5\uff0c\u5b83\u5c06 CSS \u6837\u5f0f\u62c6\u5206\u6210\u4e00\u4e2a\u4e2a\u72ec\u7acb\u7684\u6837\u5f0f\uff0c\u6bcf\u4e2a\u6837\u5f0f\u53ea\u5305\u542b\u4e00\u4e2a\u5c5e\u6027\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* \u539f\u5b50\u5316 CSS */\n.mt-10 {\n  margin-top: 10px;\n}\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u539f\u5b50\u5316 CSS \u80fd\u529b\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u652f\u6301\u54cd\u5e94\u5f0f\u5e03\u5c40\uff0c\u4ee5\u53ca\u51cf\u5c11 CSS \u6587\u4ef6\u4f53\u79ef\u3002"),(0,o.kt)("p",null,"ice.js \u5b98\u65b9\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"@ice/plugin-unocss")," \u63d2\u4ef6\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5f00\u53d1\u8fd9\u4e00\u952e\u5f00\u542f\u539f\u5b50\u5316 CSS \u80fd\u529b\u3002"),(0,o.kt)("h2",{id:"\u5f00\u542f\u63d2\u4ef6"},"\u5f00\u542f\u63d2\u4ef6"),(0,o.kt)("p",null,"\u5b89\u88c5\u63d2\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i -D @ice/plugin-unocss\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport Unocss from '@ice/plugin-unocss';\n\nexport default defineConfig(() => ({\n  plugins: [\n    Unocss(),\n  ]\n}));\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005\u4fbf\u6377\u4f7f\u7528\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"@ice/plugin-unocss")," \u5185\u7f6e\u4e86\u9ed8\u8ba4\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://unocss.dev/presets/uno"},"preset"),"\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u989d\u5916\u914d\u7f6e\uff0c\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u914d\u7f6e\u9879\u5bf9\u5185\u7f6e\u914d\u7f6e\u8fdb\u884c\u8986\u76d6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport Unocss from '@ice/plugin-unocss';\nimport {\n  defineConfig,\n  presetAttributify,\n  presetIcons,\n  presetTypography,\n  presetUno,\n  presetWebFonts,\n  transformerDirectives,\n  transformerVariantGroup\n} from 'unocss';\n\nexport default defineConfig(() => ({\n  plugins: [\n    Unocss({\n      shortcuts: [\n        // ...\n      ],\n      theme: {\n        colors: {\n          // ...\n        }\n      },\n      presets: [\n        presetUno(),\n        presetAttributify(),\n        presetIcons(),\n        presetTypography(),\n        presetWebFonts({\n          fonts: {\n            // ...\n          },\n        }),\n      ],\n      transformers: [\n        transformerDirectives(),\n        transformerVariantGroup(),\n      ],\n    }),\n  ],\n}));\n\n")),(0,o.kt)("p",null,"\u63d2\u4ef6\u914d\u7f6e\u80fd\u529b\uff0c\u540c UnoCSS \u914d\u7f6e\u80fd\u529b\u4fdd\u6301\u4e00\u81f4\uff0c\u66f4\u591a\u914d\u7f6e\u80fd\u529b\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://unocss.dev/guide/config-file"},"UnoCSS \u914d\u7f6e\u6587\u6863"),"\u3002"))}u.isMDXComponent=!0}}]);