"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[536],{9463:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>d,contentTitle:()=>i,metadata:()=>l,toc:()=>h,default:()=>c});var n=r(7896),a=r(1461),o=(r(2784),r(876)),s=["components"],d={sidebar_position:3},i="shorthands",l={unversionedId:"react/api/shorthands",id:"react/api/shorthands",title:"shorthands",description:"Check limitations to understand why these helpers are needed.",source:"@site/docs/react/api/shorthands.md",sourceDirName:"react/api",slug:"/react/api/shorthands",permalink:"/react/api/shorthands",editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/api/shorthands.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"reactSidebar",previous:{title:"mergeClasses",permalink:"/react/api/merge-classes"},next:{title:"makeStaticStyles",permalink:"/react/api/make-static-styles"}},h=[{value:"<code>shorthands.border</code>",id:"shorthandsborder",children:[],level:3},{value:"<code>shorthands.borderBottom</code>",id:"shorthandsborderbottom",children:[],level:3},{value:"<code>shorthands.borderColor</code>",id:"shorthandsbordercolor",children:[],level:3},{value:"<code>shorthands.borderStyle</code>",id:"shorthandsborderstyle",children:[],level:3},{value:"<code>shorthands.borderWidth</code>",id:"shorthandsborderwidth",children:[],level:3},{value:"<code>shorthands.gap</code>",id:"shorthandsgap",children:[],level:3},{value:"<code>shorthands.margin</code>",id:"shorthandsmargin",children:[],level:3},{value:"<code>shorthands.overflow</code>",id:"shorthandsoverflow",children:[],level:3},{value:"<code>shorthands.padding</code>",id:"shorthandspadding",children:[],level:3}],p={toc:h};function c(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shorthands"},"shorthands"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check ",(0,o.kt)("a",{parentName:"p",href:"/react/guides/limitations"},"limitations")," to understand why these helpers are needed."))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"shorthands")," provides a set of functions to mimic ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties"},"CSS shorthands")," and improve developer experience as ",(0,o.kt)("a",{parentName:"p",href:"/react/guides/limitations#css-shorthands-are-not-supported"},"CSS shorthands are not supported")," by Griffel. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    // \u274c This is not supported, TypeScript compiler will throw, styles will not be inserted to DOM\n    padding: '2px 4px 8px 16px',\n    // \u2705 Use shorthand functions to avoid writting CSS longhands\n    ...shorthands.padding('2px', '4px', '8px', '16px'),\n  },\n});\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The most of the functions follow syntax in matching CSS properties, but each value should a separate argument:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u274c Will produce wrong results\nshorthands.padding('2px 4px');\n// \u2705 Correct output\nshorthands.padding('2px', '4px');\n")))),(0,o.kt)("p",null,"Function in a ",(0,o.kt)("inlineCode",{parentName:"p"},"shorthand")," set are pure, you can simply use ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," to better understand produced rules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(padding('12px', '24px', '36px', '48px'));\n// \u2b07\ufe0f\u2b07\ufe0f\u2b07\ufe0f\n// {\n//  paddingBottom: '36px',\n//  paddingLeft: '48px',\n//  paddingRight: '24px',\n//  paddingTop: '12px',\n// }\n")),(0,o.kt)("h3",{id:"shorthandsborder"},(0,o.kt)("inlineCode",{parentName:"h3"},"shorthands.border")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.border('2px'),\n    ...shorthands.border('2px', 'solid'),\n    ...shorthands.border('2px', 'solid', 'red'),\n  },\n});\n")),(0,o.kt)("h3",{id:"shorthandsborderbottom"},(0,o.kt)("inlineCode",{parentName:"h3"},"shorthands.borderBottom")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    // The same is true for \"borderTop\", \"borderLeft\" & \"borderRight\"\n    ...shorthands.borderBottom('2px'),\n    ...shorthands.borderBottom('2px', 'solid'),\n    ...shorthands.borderBottom('2px', 'solid', 'red'),\n  },\n});\n")),(0,o.kt)("h3",{id:"shorthandsbordercolor"},(0,o.kt)("inlineCode",{parentName:"h3"},"shorthands.borderColor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.borderColor('red'),\n    ...shorthands.borderColor('red', 'blue'),\n    ...shorthands.borderColor('red', 'blue', 'green'),\n    ...shorthands.borderColor('red', 'blue', 'green', 'yellow'),\n  },\n});\n")),(0,o.kt)("h3",{id:"shorthandsborderstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"shorthands.borderStyle")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.borderStyle('solid'),\n    ...shorthands.borderStyle('solid', 'dashed'),\n    ...shorthands.borderStyle('solid', 'dashed', 'dotted'),\n    ...shorthands.borderStyle('solid', 'dashed', 'dotted', 'double'),\n  },\n});\n")),(0,o.kt)("h3",{id:"shorthandsborderwidth"},(0,o.kt)("inlineCode",{parentName:"h3"},"shorthands.borderWidth")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.borderWidth('12px'),\n    ...shorthands.borderWidth('12px', '24px'),\n    ...shorthands.borderWidth('12px', '24px', '36px'),\n    ...shorthands.borderWidth('12px', '24px', '36px', '48px'),\n  },\n});\n")),(0,o.kt)("h3",{id:"shorthandsgap"},(0,o.kt)("inlineCode",{parentName:"h3"},"shorthands.gap")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.gap('12px'),\n    ...shorthands.gap('12px', '24px'),\n  },\n});\n")),(0,o.kt)("h3",{id:"shorthandsmargin"},(0,o.kt)("inlineCode",{parentName:"h3"},"shorthands.margin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.margin('12px'),\n    ...shorthands.margin('12px', '24px'),\n    ...shorthands.margin('12px', '24px', '36px'),\n    ...shorthands.margin('12px', '24px', '36px', '48px'),\n  },\n});\n")),(0,o.kt)("h3",{id:"shorthandsoverflow"},(0,o.kt)("inlineCode",{parentName:"h3"},"shorthands.overflow")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.overflow('visible'),\n    ...shorthands.overflow('visible', 'hidden'),\n  },\n});\n")),(0,o.kt)("h3",{id:"shorthandspadding"},(0,o.kt)("inlineCode",{parentName:"h3"},"shorthands.padding")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.padding('12px'),\n    ...shorthands.padding('12px', '24px'),\n    ...shorthands.padding('12px', '24px', '36px'),\n    ...shorthands.padding('12px', '24px', '36px', '48px'),\n  },\n});\n")))}c.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,h=d(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,u=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(u,s(s({ref:t},h),{},{components:r})):n.createElement(u,s({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,s[1]=d;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);