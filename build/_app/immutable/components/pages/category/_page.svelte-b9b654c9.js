import{S as L,i as S,s as j,a as A,k as v,q as m,R as D,h as f,c as C,l as p,m as E,r as g,n as k,b as q,E as u,B as x,M as H}from"../../../chunks/index-c5ec60eb.js";function B(c,l,a){const n=c.slice();return n[2]=l[a],n}function I(c){let l,a,n=c[2].title+"",h,i,d=c[2].count+"",r,s;return{c(){l=v("li"),a=v("a"),h=m(n),i=m(`
				(`),r=m(d),s=m(`)
			`),this.h()},l(t){l=p(t,"LI",{});var o=E(l);a=p(o,"A",{href:!0});var e=E(a);h=g(e,n),e.forEach(f),i=g(o,`
				(`),r=g(o,d),s=g(o,`)
			`),o.forEach(f),this.h()},h(){k(a,"href","/category/"+c[2].title)},m(t,o){q(t,l,o),u(l,a),u(a,h),u(l,i),u(l,r),u(l,s)},p:x,d(t){t&&f(l)}}}function M(c){let l,a,n,h,i,d,r=c[0],s=[];for(let t=0;t<r.length;t+=1)s[t]=I(B(c,r,t));return{c(){l=A(),a=v("div"),n=v("h1"),h=m("All blog categories"),i=A(),d=v("ul");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){D("svelte-si9hjk",document.head).forEach(f),l=C(t),a=p(t,"DIV",{class:!0});var e=E(a);n=p(e,"H1",{class:!0});var _=E(n);h=g(_,"All blog categories"),_.forEach(f),i=C(e),d=p(e,"UL",{});var y=E(d);for(let b=0;b<s.length;b+=1)s[b].l(y);y.forEach(f),e.forEach(f),this.h()},h(){document.title="Blog | Categories",k(n,"class","h2"),k(a,"class","compressed-content")},m(t,o){q(t,l,o),q(t,a,o),u(a,n),u(n,h),u(a,i),u(a,d);for(let e=0;e<s.length;e+=1)s[e].m(d,null)},p(t,[o]){if(o&1){r=t[0];let e;for(e=0;e<r.length;e+=1){const _=B(t,r,e);s[e]?s[e].p(_,o):(s[e]=I(_),s[e].c(),s[e].m(d,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=r.length}},i:x,o:x,d(t){t&&f(l),t&&f(a),H(s,t)}}}function P(c,l,a){let{data:n}=l;const{uniqueCategories:h}=n;return c.$$set=i=>{"data"in i&&a(1,n=i.data)},[h,n]}class U extends L{constructor(l){super(),S(this,l,P,M,j,{data:1})}}export{U as default};
