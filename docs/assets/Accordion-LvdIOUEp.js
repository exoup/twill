import{u as M,j as s,r as m}from"./index-MF9NQlz3.js";import{m as w,t as R,l as f,a as $}from"./mapObjectToString-IQ2lNw05.js";function Q({onChange:d=null,initialExpanded:u=[],accordionMode:h=!0,flush:g=!1,typography:p,color:o,radius:j,variant:C,className:x,children:y,...k}){const b=i=>{const[r,L]=m.useState(i);return[r,(l,G)=>{L(G?c=>c.includes(l)?[]:[l]:c=>c.includes(l)?c.filter(H=>H!==l):[...c,l])}]},[D,O]=b(u),{accordion:t,typography:a,themeColor:N}=M(),{defaultOptions:e,styles:E}=t,{initial:T,radii:V,variants:v}=E,n=o||N||e.color,B=j||e.radius,A=C||e.variant,J=p||n||a.defaultOptions.variant,W=w(T),q=R(f(V,B,e.radius)),z=w(f(a.styles.variants,J,a.defaultOptions.variant),f(v,A,e.variant)[n],g&&v.reset),F=$(...W,q,...z,x);return s.jsx("div",{...k,className:F,children:m.Children.map(y,(i,r)=>m.isValidElement(i)?m.cloneElement(i,{ariaId:`id-${r}`,ariaControls:`controls-${r}`,onChange:d,expanded:D.includes(r),onClick:()=>O(r,h),color:n,variant:A}):i)})}const S=({ariaId:d,ariaControls:u,title:h,onClick:g=()=>{},onChange:p,expanded:o=!1,icon:j=!0,color:C,variant:x,className:y,children:k})=>{const b=()=>{p&&p(!o),g()},{accordion:D,themeColor:O}=M(),{defaultOptions:t,styles:a}=D.drawer,{initial:N,variants:e}=a,E=C||O||t.color,T=x||t.variant,V=w(N),v=w(f(e,T,t.variant)[E]),n=$(...V,v,y);return s.jsxs("div",{children:[s.jsxs("button",{"aria-expanded":o,"aria-controls":u,id:d,role:"button",onClick:b,className:"flex w-full items-center justify-between p-4 group/expandable",children:[s.jsx("h3",{role:"heading",children:h}),j&&s.jsx("svg",{className:"w-3 h-3 rotate-180 shrink-0 group-aria-expanded/expandable:rotate-0 motion-safe:transition-all","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:s.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5 5 1 1 5"})})]}),s.jsx("div",{"aria-labelledby":d,id:u,className:R("grid motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-in-out",o?"grid-rows-[1fr]":"grid-rows-[0fr] invisible"),children:s.jsx("div",{className:"overflow-hidden",children:s.jsx("div",{"data-open":o,className:n,children:k})})})]})};export{Q as A,S as D};
