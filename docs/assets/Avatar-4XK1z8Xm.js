import{r as x,u as f,j as d}from"./index-9ikmvCms.js";import{m as c,t as M,l as g,a as C}from"./mapObjectToString-IQ2lNw05.js";const V=s=>{const t=s.split(" ");let a="";return t.forEach(e=>{a+=e.charAt(0).toUpperCase()}),a},B=({name:s,src:t,alt:a,flush:e=!1,color:r,radius:n,size:i,variant:l,className:p,...h})=>{const[v,m]=x.useState(!1),o=x.useRef(null);x.useEffect(()=>(m(!1),o.current&&typeof t=="string"&&(o.current.src=t,o.current.onload=()=>{m(!0)},o.current.onerror=()=>{m(!1)}),()=>{o.current&&(o.current.onload=null,o.current.onerror=null)}),[t]);const{avatar:j,themeColor:N}=f(),{defaultOptions:u,styles:O}=j,{initial:T,image:z,radii:S,sizes:b,variants:y}=O,A=r||N||u.color,E=n||u.radius,R=i||u.size,w=l||u.variant,I=c(T),k=c(z),L=M(g(S,E,u.radius),g(b,R,u.size)),U=c(g(y,w,u.variant)[A],e&&y.reset),J=C(...I,L,...U,v&&"!bg-transparent",p);return d.jsxs("div",{...h,className:J,children:[d.jsx("img",{ref:o,hidden:!v,className:"size-full",alt:a||s}),!v&&d.jsx("div",{className:k,children:s?V(s):"U"})]})},D=({className:s,children:t,onClick:a=()=>{},...e})=>{const{avatar:r}=f(),{styles:n}=r.withtext,{initial:i}=n,l=c(i),p=C(...l,s);return d.jsx("div",{...e,onClick:a,className:p,children:t})},F=({typography:s,className:t,children:a,...e})=>{const{avatar:r,typography:n,themeColor:i}=f(),{styles:l}=r.content,{initial:p}=l,h=s||i||n.defaultOptions.variant,v=c(p),m=c(g(n.styles.variants,h,n.defaultOptions.variant)),o=C(...v,m,t);return d.jsx("div",{...e,className:o,children:a})},G=({className:s,children:t,...a})=>{const{avatar:e}=f(),{styles:r}=e.title,{initial:n}=r,i=c(n),l=C(...i,s);return d.jsx("h4",{...a,className:l,children:t})},H=({className:s,children:t,...a})=>{const{avatar:e}=f(),{styles:r}=e.subtitle,{initial:n}=r,i=c(n),l=C(...i,s);return d.jsx("p",{...a,className:l,children:t})};export{B as A,F as C,H as S,G as T,D as a};