!function(){"use strict";var e,t={5970:function(){const e="__INIT__",t="MOVE_NEXT_STEP";function r(t){return{type:e,payload:t}}function n(e){return{type:t,payload:e}}const s={initialState:{step:0,isInit:!1},selectors:{marker:"#marker",form:"#form",quizList:"#quiz-list",button:"button",input:"input",result:"#result"},classes:{markerActiveClass:"marker_active",resultActiveClass:"result_active",answerFieldAlertClass:"result__answer_alert"},steps:{first:1,second:2,third:3},resultDefaultAnswer:"You didn`t answer."},{classes:i,resultDefaultAnswer:u}=s;function a(e){return[...e].map((e=>{let{value:t}=e;return t}))}const{initialState:c,selectors:o,steps:l,classes:d}=s,p=function(e,t){let n=e(t,r());const s=[];return{dispatch:t=>{n=e(n,t),s.forEach((e=>e()))},subscribe:e=>s.push(e),getState:()=>n}}((function(r,n){switch(n.type){case e:return{...r,slideSize:n.payload,isInit:!0};case t:return{...r,step:n.payload.step,answers:{...r.answers,[n.payload.step]:n.payload.answers},isInit:!1};default:return r}}),c),f=document.querySelector(o.marker),v=document.querySelector(o.form),h=document.querySelector(o.quizList),y=document.querySelector(o.result),m=h.children,w=m[0].querySelector(o.button),S=m[1].querySelector(o.button),b=m[2].querySelector(o.button),q=m[0].querySelectorAll(o.input),k=m[1].querySelectorAll(o.input),A=m[2].querySelectorAll(o.input);p.subscribe((()=>{const e=p.getState(),{step:t,slideSize:r,isInit:n,answers:s}=e;(function(e,t){if(t&&e>=0){const r=e+1;t.innerHTML=r.toString(),t.classList.add(i.markerActiveClass)}})(t,f),function(e,t){let{step:r,slideSize:n}=e;t.style.transform=`translateY(${n*-r}px)`}(e,h),t&&function(e,t){[...e.children].slice(1).map(((e,r)=>{const n=t[r];n?e.innerHTML=`Answer ${r+1}: ${n}`:(e.innerHTML=`Answer ${r+1}: ${u}`,e.classList.add(i.answerFieldAlertClass))}))}(y.children[t-1],s[t]),n&&(y.classList.add(d.resultActiveClass),function(e,t){e&&t.length&&[...t].map((t=>t.style.minHeight=`${e}px`))}(r,m))})),p.dispatch(r(v.offsetHeight)),w.addEventListener("click",(()=>{const e=a(q);p.dispatch(n({step:l.first,answers:e}))})),S.addEventListener("click",(()=>{const e=a(k);p.dispatch(n({step:l.second,answers:e}))})),b.addEventListener("click",(()=>{const e=a(A);p.dispatch(n({step:l.third,answers:e}))}))}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,s,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],s=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var o=s();void 0!==o&&(t=o)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,s,i]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,u=r[0],a=r[1],c=r[2],o=0;if(u.some((function(t){return 0!==e[t]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(c)var l=c(n)}for(t&&t(r);o<u.length;o++)i=u[o],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self.webpackChunkquiz=self.webpackChunkquiz||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),n.O(void 0,[981],(function(){return n(6981)}));var s=n.O(void 0,[981],(function(){return n(5970)}));s=n.O(s)}();