import{S as Q,i as U,s as V,k as w,a as P,e as J,T as W,l as S,h as p,c as d,p as I,F as h,b as g,g as O,d as T,r as y,m as C,u as b,n as z,z as D,A as F,B as R,v as K,C as j}from"../chunks/index.e1a9a6df.mjs";import{a as N,P as X}from"../chunks/Pagination.7e3e0f80.mjs";import{p as G,b as Y}from"../chunks/config.03746969.mjs";function Z(r){let a,n,c,l,f,m,o,$;return{c(){a=w("h1"),n=y("Oops!"),c=P(),l=w("p"),f=y("Sorry, no posts to show here."),m=P(),o=w("a"),$=y("Back to blog"),this.h()},l(e){a=S(e,"H1",{});var u=C(a);n=b(u,"Oops!"),u.forEach(p),c=d(e),l=S(e,"P",{});var s=C(l);f=b(s,"Sorry, no posts to show here."),s.forEach(p),m=d(e),o=S(e,"A",{href:!0});var _=C(o);$=b(_,"Back to blog"),_.forEach(p),this.h()},h(){I(o,"href","/")},m(e,u){g(e,a,u),h(a,n),g(e,c,u),g(e,l,u),h(l,f),g(e,m,u),g(e,o,u),h(o,$)},p:z,i:z,o:z,d(e){e&&p(a),e&&p(c),e&&p(l),e&&p(m),e&&p(o)}}}function x(r){let a,n,c,l,f,m,o,$,e,u,s,_,q,L,k,M,B,H,v,A;return k=new N({props:{currentPage:r[2],totalPosts:r[4],path:"/category/"+r[3]+"/page"}}),B=new X({props:{posts:r[5]}}),v=new N({props:{currentPage:r[2],totalPosts:r[4],path:"/category/"+r[3]+"/page"}}),{c(){a=w("h1"),n=y("Category: "),c=y(r[3]),l=P(),f=w("br"),m=P(),o=w("small"),$=y("Posts "),e=y(r[1]),u=y("–"),s=y(r[0]),_=y(" of "),q=y(r[4]),L=P(),D(k.$$.fragment),M=P(),D(B.$$.fragment),H=P(),D(v.$$.fragment)},l(t){a=S(t,"H1",{});var i=C(a);n=b(i,"Category: "),c=b(i,r[3]),l=d(i),f=S(i,"BR",{}),m=d(i),o=S(i,"SMALL",{});var E=C(o);$=b(E,"Posts "),e=b(E,r[1]),u=b(E,"–"),s=b(E,r[0]),_=b(E," of "),q=b(E,r[4]),E.forEach(p),i.forEach(p),L=d(t),F(k.$$.fragment,t),M=d(t),F(B.$$.fragment,t),H=d(t),F(v.$$.fragment,t)},m(t,i){g(t,a,i),h(a,n),h(a,c),h(a,l),h(a,f),h(a,m),h(a,o),h(o,$),h(o,e),h(o,u),h(o,s),h(o,_),h(o,q),g(t,L,i),R(k,t,i),g(t,M,i),R(B,t,i),g(t,H,i),R(v,t,i),A=!0},p(t,i){(!A||i&2)&&K(e,t[1]),(!A||i&1)&&K(s,t[0])},i(t){A||(O(k.$$.fragment,t),O(B.$$.fragment,t),O(v.$$.fragment,t),A=!0)},o(t){T(k.$$.fragment,t),T(B.$$.fragment,t),T(v.$$.fragment,t),A=!1},d(t){t&&p(a),t&&p(L),j(k,t),t&&p(M),j(B,t),t&&p(H),j(v,t)}}}function tt(r){let a,n,c,l,f,m,o;document.title=a="Blog category "+r[3]+" - page "+r[2];const $=[x,Z],e=[];function u(s,_){return s[5]&&s[5].length?0:1}return l=u(r),f=e[l]=$[l](r),{c(){n=w("meta"),c=P(),f.c(),m=J(),this.h()},l(s){const _=W("svelte-hdac8e",document.head);n=S(_,"META",{"data-key":!0,name:!0}),_.forEach(p),c=d(s),f.l(s),m=J(),this.h()},h(){I(n,"data-key","description"),I(n,"name",Y)},m(s,_){h(document.head,n),g(s,c,_),e[l].m(s,_),g(s,m,_),o=!0},p(s,[_]){(!o||_&12)&&a!==(a="Blog category "+s[3]+" - page "+s[2])&&(document.title=a),f.p(s,_)},i(s){o||(O(f),o=!0)},o(s){T(f),o=!1},d(s){p(n),s&&p(c),e[l].d(s),s&&p(m)}}}function et(r,a,n){let c,l,{data:f}=a;const{page:m,category:o,totalPosts:$,posts:e}=f;return r.$$set=u=>{"data"in u&&n(6,f=u.data)},n(1,c=m*G-(G-1)||1),n(0,l=Math.min(m*G,$)),[l,c,m,o,$,e,f]}class rt extends Q{constructor(a){super(),U(this,a,et,tt,V,{data:6})}}export{rt as default};
