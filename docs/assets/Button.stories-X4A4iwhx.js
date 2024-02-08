import{j as t,r as n}from"./index-OuSI24kA.js";const f={primary:"bg-primary text-primary-text hover:bg-primary-dark",secondary:"bg-secondary text-secondary-text hover:bg-secondary-dark ring-1 ring-inset ring-light dark:bg-secondary-text/80 dark:text-secondary-dark dark:hover:bg-secondary-text dark:ring-dark",tertiary:"bg-tertiary-dark text-white hover:bg-tertiary dark:bg-tertiary-text dark:text-tertiary dark:ring-2 dark:ring-tertiary dark:hover:text-tertiary-dark dark:hover:ring-tertiary",dark:"bg-dark text-white hover:bg-dark/70 dark:hover:bg-white/20",success:"bg-success text-success-text hover:bg-[#DCFCE7]"},p={round:"rounded-md",sharp:"rounded-none",full:"rounded-full"},x={responsive:"flex-1 flex-shrink-0",normal:"min-w-24",wide:"min-w-80",full:"w-full min-w-full"},C={"three-quarter":'inline-block after:content-[" "] after:block after:size-6 after:border-white after:border-b-transparent after:border-[4px] after:rounded-[50%] after:border-solid after:animate-spin',"three-quarter-dark":'inline-block after:content-[" "] after:block after:size-6 after:border-dark dark:after:border-white after:border-b-transparent dark:after:border-b-transparent after:border-[4px] after:rounded-[50%] after:border-solid after:animate-spin'},w=({icons:e,loading:r,loadingClass:o})=>t.jsx("span",{className:"flex px-2 py-1.5 bg-[rgba(0,0,0,0.15)]",children:r?t.jsx(g,{loadingClass:o}):e.map(a=>t.jsx("div",{className:"size-8 m-auto",children:a.element},a.name))}),g=({loadingClass:e="three-quarter"})=>t.jsx("span",{className:`${C[e]} m-auto px-1`}),j=e=>{const{type:r,disabled:o,id:a,role:s,ref:l,onClick:i,loading:d=!1,loadingClass:c,colorClass:u="primary",radiusClass:m="round",sizeClass:h="normal"}=e,b={id:a,role:s,ref:l,onClick:i,type:r,disabled:o};return t.jsx("button",{...b,className:`${f[u]} ${p[m]} ${x[h]} py-2.5 px-5 max-h-11 shadow-sm font-semibold text-center cursor-pointer disabled:cursor-not-allowed transition-all`,children:d?t.jsx(g,{loadingClass:c}):e.children})},v=e=>{const{type:r,disabled:o,id:a,role:s,ref:l,onClick:i,loading:d=!1,loadingClass:c,colorClass:u="primary",radiusClass:m="full",sizeClass:h="wide"}=e,b={id:a,role:s,ref:l,onClick:i,type:r,disabled:o};return t.jsx("button",{...b,className:`${f[u]} ${p[m]} ${x[h]} py-2.5 px-5 max-h-11 shadow-sm font-semibold text-center cursor-pointer disabled:cursor-not-allowed transition-all`,children:d?t.jsx(g,{loadingClass:c}):e.children})},$=e=>{const{type:r="button",disabled:o,id:a,role:s,ref:l,onClick:i,colorClass:d="primary",radiusClass:c="round",sizeClass:u="normal"}=e,m={id:a,role:s,ref:l,onClick:i,type:r,disabled:o};return t.jsx("button",{...m,className:`flex ${f[d]} ${p[c]} ${x[u]} max-h-11 min-h-11 shadow-sm font-semibold overflow-hidden cursor-pointer disabled:cursor-not-allowed transition-all`,children:e.children})},B=e=>{const{type:r="button",disabled:o,id:a,role:s,ref:l,onClick:i,colorClass:d="primary",radiusClass:c="full"}=e,u={id:a,role:s,ref:l,onClick:i,type:r,disabled:o};return t.jsx("button",{...u,className:`flex ${f[d]} ${p[c]} size-12 shadow-lg font-semibold overflow-hidden cursor-pointer disabled:cursor-not-allowed transition-all`,children:e.children})},z=({children:e})=>t.jsx("span",{className:"flex px-4 py-2.5 m-auto",children:e});function E({title:e,titleId:r,...o},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},o),e?n.createElement("title",{id:r},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const N=n.forwardRef(E),L=N;function P({title:e,titleId:r,...o},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},o),e?n.createElement("title",{id:r},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))}const R=n.forwardRef(P),q=R,O={args:{children:"Default",disabled:!1,loading:!1},argTypes:{type:{defaultValue:"button",options:["button","submit","reset"],control:{type:"inline-radio"}},onClick:{action:"clicked"},colorClass:{defaultValue:"primary",options:["primary","secondary","tertiary","success","dark"],control:{type:"radio"}},radiusClass:{defaultValue:"round",options:["round","sharp","full"],control:{type:"radio"}},sizeClass:{defaultValue:"normal",options:["responsive","normal","wide","full"],control:{type:"radio"}},loadingClass:{defaultValue:"three-quarter",options:["three-quarter","three-quarter-dark"],control:{type:"radio"}}}},V=({children:e,...r})=>t.jsx(j,{...r,children:e}),k=({children:e,...r})=>t.jsx(v,{...r,children:e});k.args={children:"Pill Button",sizeClass:"wide",radiusClass:"full"};k.storyName="Pill Button";const D=({children:e,loading:r,loadingClass:o,...a})=>t.jsxs($,{...a,children:[t.jsx(w,{loading:r,loadingClass:o,icons:[{name:"ChevronRightIcon",element:t.jsx(q,{})}]}),t.jsx(z,{children:e})]});D.storyName="Leading Button";const y=({loading:e,loadingClass:r,...o})=>t.jsx(B,{...o,children:t.jsx(w,{loading:e,loadingClass:r,icons:[{name:"ArrowUpCircleIcon",element:t.jsx(L,{})}]})});y.args={radiusClass:"full"};y.argTypes={sizeClass:{defaultValue:"",options:[],control:{type:"radio"}}};y.storyName="Shape Button";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{V as Default,D as LeadingButtonDefault,k as PillButtonDefault,y as ShapeButtonDefault,O as default};
