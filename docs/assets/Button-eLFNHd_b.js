import{u as w,j as B}from"./index-MF9NQlz3.js";import{m as e,t as R,l as t,a as S}from"./mapObjectToString-IQ2lNw05.js";const E=({color:a,radius:n,size:i,variant:r,className:l,children:c,...o})=>{const{button:u,themeColor:p}=w(),{defaultOptions:s,styles:m}=u,{initial:d,radii:v,sizes:C,variants:b}=m,j=a||p||s.color,x=n||s.radius,z=i||s.size,f=r||s.variant,y=e(d),O=R(t(v,x,s.radius),t(C,z,s.size)),h=e(t(b,f,s.variant)[j]),k=S(...y,O,...h,l);return B.jsx("button",{...o,type:o.type||"button",className:k,children:c})};export{E as B};
