import{S as j,i as G,s as I,k as w,a as v,e as D,T as J,l as E,h as _,c as B,p as g,F as P,b as h,g as S,d as A,r as k,m as q,u as b,n as C,z as H,A as M,B as O,v as F,C as T}from"../chunks/index.e1a9a6df.mjs";import{a as L,P as K}from"../chunks/Pagination.7e3e0f80.mjs";import{p as z,b as N}from"../chunks/config.03746969.mjs";function Q(r){let o,l,m,n,i,u,a,$;return{c(){o=w("h1"),l=k("Oops!"),m=v(),n=w("p"),i=k("Sorry, no posts to show here."),u=v(),a=w("a"),$=k("Back to blog"),this.h()},l(e){o=E(e,"H1",{});var c=q(o);l=b(c,"Oops!"),c.forEach(_),m=B(e),n=E(e,"P",{});var s=q(n);i=b(s,"Sorry, no posts to show here."),s.forEach(_),u=B(e),a=E(e,"A",{href:!0});var f=q(a);$=b(f,"Back to blog"),f.forEach(_),this.h()},h(){g(a,"href","/")},m(e,c){h(e,o,c),P(o,l),h(e,m,c),h(e,n,c),P(n,i),h(e,u,c),h(e,a,c),P(a,$)},p:C,i:C,o:C,d(e){e&&_(o),e&&_(m),e&&_(n),e&&_(u),e&&_(a)}}}function R(r){let o,l,m,n,i,u,a,$,e,c,s,f,d,y;return e=new L({props:{currentPage:r[2],totalPosts:r[3]}}),s=new K({props:{posts:r[4]}}),d=new L({props:{currentPage:r[2],totalPosts:r[3]}}),{c(){o=w("h1"),l=k("Posts "),m=k(r[1]),n=k("–"),i=k(r[0]),u=k(" of "),a=k(r[3]),$=v(),H(e.$$.fragment),c=v(),H(s.$$.fragment),f=v(),H(d.$$.fragment)},l(t){o=E(t,"H1",{});var p=q(o);l=b(p,"Posts "),m=b(p,r[1]),n=b(p,"–"),i=b(p,r[0]),u=b(p," of "),a=b(p,r[3]),p.forEach(_),$=B(t),M(e.$$.fragment,t),c=B(t),M(s.$$.fragment,t),f=B(t),M(d.$$.fragment,t)},m(t,p){h(t,o,p),P(o,l),P(o,m),P(o,n),P(o,i),P(o,u),P(o,a),h(t,$,p),O(e,t,p),h(t,c,p),O(s,t,p),h(t,f,p),O(d,t,p),y=!0},p(t,p){(!y||p&2)&&F(m,t[1]),(!y||p&1)&&F(i,t[0])},i(t){y||(S(e.$$.fragment,t),S(s.$$.fragment,t),S(d.$$.fragment,t),y=!0)},o(t){A(e.$$.fragment,t),A(s.$$.fragment,t),A(d.$$.fragment,t),y=!1},d(t){t&&_(o),t&&_($),T(e,t),t&&_(c),T(s,t),t&&_(f),T(d,t)}}}function U(r){let o,l,m,n,i,u,a;document.title=o="Blog - page "+r[2];const $=[R,Q],e=[];function c(s,f){return s[4].length?0:1}return n=c(r),i=e[n]=$[n](r),{c(){l=w("meta"),m=v(),i.c(),u=D(),this.h()},l(s){const f=J("svelte-19tq2vo",document.head);l=E(f,"META",{"data-key":!0,name:!0,content:!0}),f.forEach(_),m=B(s),i.l(s),u=D(),this.h()},h(){g(l,"data-key","description"),g(l,"name","description"),g(l,"content",N)},m(s,f){P(document.head,l),h(s,m,f),e[n].m(s,f),h(s,u,f),a=!0},p(s,[f]){(!a||f&4)&&o!==(o="Blog - page "+s[2])&&(document.title=o),i.p(s,f)},i(s){a||(S(i),a=!0)},o(s){A(i),a=!1},d(s){_(l),s&&_(m),e[n].d(s),s&&_(u)}}}function V(r,o,l){let m,n,{data:i}=o;const{page:u,totalPosts:a,posts:$}=i;return r.$$set=e=>{"data"in e&&l(5,i=e.data)},l(1,m=u*z-(z-1)||1),l(0,n=Math.min(u*z,a)),[n,m,u,a,$,i]}class Z extends j{constructor(o){super(),G(this,o,V,U,I,{data:5})}}export{Z as default};