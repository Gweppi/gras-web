import{s as W,n as q}from"../chunks/scheduler.e108d1fd.js";import{S as F,i as G,g as u,m as J,h as c,j as D,n as K,f as d,k as f,a as T,x as r,o as Q,s as j,r as M,y as I,c as y,u as k,v as z,d as P,t as S,w as B}from"../chunks/index.a21d6cee.js";function R(g){let e,t,s,i;return{c(){e=u("button"),t=u("div"),s=u("p"),i=J(g[0]),this.h()},l(l){e=c(l,"BUTTON",{});var n=D(e);t=c(n,"DIV",{class:!0});var o=D(t);s=c(o,"P",{class:!0});var $=D(s);i=K($,g[0]),$.forEach(d),o.forEach(d),n.forEach(d),this.h()},h(){f(s,"class","font-semibold uppercase text-green-400 group-hover:text-white text-center"),f(t,"class","flex items-center justify-center w-40 h-16 border-2 border-green-400 rounded-full hover:bg-green-400 group transition-colors")},m(l,n){T(l,e,n),r(e,t),r(t,s),r(s,i)},p(l,[n]){n&1&&Q(i,l[0])},i:q,o:q,d(l){l&&d(e)}}}function X(g,e,t){let{text:s}=e;return g.$$set=i=>{"text"in i&&t(0,s=i.text)},[s]}class O extends F{constructor(e){super(),G(this,e,X,R,W,{text:0})}}function Y(g){let e,t,s,i=`<p class="text-sm text-gray-400">Vraag 1</p> <h1 class="text-3xl font-bold">Als ik een vraag vraag,
                antwoord dan de vraag?</h1> <h2 class="font-light">Dit is zeer belangrijke informatie,
                als we deze informatie niet hadden,
                zouden we gaan huilen in een hoekje.
                Of erger, schreeuwen van de geestelijke pijn.</h2>`,l,n,o,$,h,E,x,H,p,A='<div class="z-1 bg-gray-200 h-2 w-[100%] rounded-full"></div> <div class="absolute inset-0 z-2 bg-green-400 h-2 w-[20%] rounded-full"></div>',L,_,N='<img class="max-h-screen" src="grass.png" alt="gras"/>',V,m,U="PWS 2023",C;return o=new O({props:{text:"ja"}}),h=new O({props:{text:"nee"}}),x=new O({props:{text:"boeie ruurt"}}),{c(){e=u("div"),t=u("div"),s=u("div"),s.innerHTML=i,l=j(),n=u("div"),M(o.$$.fragment),$=j(),M(h.$$.fragment),E=j(),M(x.$$.fragment),H=j(),p=u("div"),p.innerHTML=A,L=j(),_=u("div"),_.innerHTML=N,V=j(),m=u("div"),m.textContent=U,this.h()},l(a){e=c(a,"DIV",{class:!0});var v=D(e);t=c(v,"DIV",{class:!0});var b=D(t);s=c(b,"DIV",{class:!0,"data-svelte-h":!0}),I(s)!=="svelte-auxig9"&&(s.innerHTML=i),l=y(b),n=c(b,"DIV",{class:!0});var w=D(n);k(o.$$.fragment,w),$=y(w),k(h.$$.fragment,w),E=y(w),k(x.$$.fragment,w),w.forEach(d),H=y(b),p=c(b,"DIV",{class:!0,"data-svelte-h":!0}),I(p)!=="svelte-1jfvsp5"&&(p.innerHTML=A),b.forEach(d),L=y(v),_=c(v,"DIV",{class:!0,"data-svelte-h":!0}),I(_)!=="svelte-li3a5c"&&(_.innerHTML=N),v.forEach(d),V=y(a),m=c(a,"DIV",{class:!0,"data-svelte-h":!0}),I(m)!=="svelte-l29nw0"&&(m.textContent=U),this.h()},h(){f(s,"class","flex flex-col gap-10"),f(n,"class","flex flex-row gap-7"),f(p,"class","flex w-full relative mt-auto mb-24"),f(t,"class","flex flex-col gap-20 ml-20 mt-20"),f(_,"class","flex items-end justify-end w-full pointer-events-none"),f(e,"class","flex h-full"),f(m,"class","absolute bottom-1 left-[50%] text-gray-300 text-xs")},m(a,v){T(a,e,v),r(e,t),r(t,s),r(t,l),r(t,n),z(o,n,null),r(n,$),z(h,n,null),r(n,E),z(x,n,null),r(t,H),r(t,p),r(e,L),r(e,_),T(a,V,v),T(a,m,v),C=!0},p:q,i(a){C||(P(o.$$.fragment,a),P(h.$$.fragment,a),P(x.$$.fragment,a),C=!0)},o(a){S(o.$$.fragment,a),S(h.$$.fragment,a),S(x.$$.fragment,a),C=!1},d(a){a&&(d(e),d(V),d(m)),B(o),B(h),B(x)}}}class te extends F{constructor(e){super(),G(this,e,null,Y,W,{})}}export{te as component};
