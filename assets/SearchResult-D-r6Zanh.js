import{l as $,i as te,m as ae,p as _,q as se,P as le,s as re,v as ie,j as B,x as H,y as ue,z as U,k as a,A as oe,R as O,B as ne,C as ce,D as ve,E as he,G as de,H as ye,I as pe,J as me,K as ge,L as Ee,M as xe,N as j,O as I,Q as Se,S as D,T as fe}from"./app-ozuC1_0s.js";const ke=["/","/intro.html","/Desktop/","/FrontEnd/","/Java/IDEA.html","/Java/","/Java/validation.html","/LinuxService/BuildMaster.html","/LinuxService/Clash.html","/LinuxService/Docker-compose.html","/LinuxService/Docker.html","/LinuxService/Elasticserch.html","/LinuxService/JDK.html","/LinuxService/Maven.html","/LinuxService/Metricbeat.html","/LinuxService/Mysql.html","/LinuxService/Nacos.html","/LinuxService/Nginx.html","/LinuxService/","/LinuxService/RabbitMQ.html","/LinuxService/Redis.html","/LinuxService/Tool.html","/Python/","/WindowsSoftWare/JDK.html","/WindowsSoftWare/","/demo/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/404.html","/category/","/category/%E8%94%AC%E8%8F%9C/","/category/cicd/","/category/validation/","/category/clash/","/category/docker-compose/","/category/docker/","/category/elasticsearch/","/category/jdk/","/category/maven/","/category/metricbeat/","/category/redis/","/category/nacos/","/category/nginx/","/category/rabbitmq/","/category/tool/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/category/%E6%8C%87%E5%8D%97/","/tag/","/tag/%E7%BA%A2/","/tag/%E5%9C%86/","/tag/%E7%A6%81%E7%94%A8/","/tag/%E5%8A%A0%E5%AF%86/","/tag/%E5%B8%83%E5%B1%80/","/tag/markdown/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/article/","/star/","/timeline/"],Le="SEARCH_PRO_QUERY_HISTORY",g=$(Le,[]),He=()=>{const{queryHistoryCount:s}=D,l=s>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,s-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=s=>ke[s.id]+("anchor"in s?`#${s.anchor}`:""),De="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:J}=D,E=$(De,[]),Re=()=>{const s=J>0;return{enabled:s,resultHistory:E,addResultHistory:l=>{if(s){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),E.value=[r,...E.value.slice(0,J-1)]}},removeResultHistory:l=>{E.value=[...E.value.slice(0,l),...E.value.slice(l+1)]}}},Ae=s=>{const l=he(),r=_(),R=de(),u=B(0),f=H(()=>u.value>0),y=ye([]);return pe(()=>{const{search:p,terminate:A}=me(),x=Se(c=>{const S=c.join(" "),{searchFilter:w=d=>d,splitWord:C,suggestionsFilter:M,...m}=l.value;S?(u.value+=1,p(c.join(" "),r.value,m).then(d=>w(d,S,r.value,R.value)).then(d=>{u.value-=1,y.value=d}).catch(d=>{console.warn(d),u.value-=1,u.value||(y.value=[])})):y.value=[]},D.searchDelay-D.suggestDelay);U([s,r],([c])=>x(c),{immediate:!0}),ge(()=>{A()})}),{isSearching:f,results:y}};var Ce=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ae(),R=_(),u=se(le),{enabled:f,addQueryHistory:y,queryHistory:p,removeQueryHistory:A}=He(),{enabled:x,resultHistory:c,addResultHistory:S,removeResultHistory:w}=Re(),C=f||x,M=re(s,"queries"),{results:m,isSearching:d}=Ae(M),i=ie({isQuery:!0,index:0}),v=B(0),h=B(0),P=H(()=>C&&(p.value.length>0||c.value.length>0)),Q=H(()=>m.value.length>0),q=H(()=>m.value[v.value]||null),W=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:p.value.length-1):i.index=t-1},K=()=>{const{isQuery:e,index:t}=i;t===(e?p.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},N=()=>{v.value=v.value>0?v.value-1:m.value.length-1,h.value=q.value.contents.length-1},Y=()=>{v.value=v.value<m.value.length-1?v.value+1:0,h.value=0},z=()=>{h.value<q.value.contents.length-1?h.value+=1:Y()},G=()=>{h.value>0?h.value-=1:N()},b=e=>e.map(t=>fe(t)?t:a(t[0],t[1])),V=e=>{if(e.type==="customField"){const t=Ee[e.index]||"$content",[o,L=""]=xe(t)?t[R.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",b([o,...n,L])))}return e.display.map(t=>a("div",b(t)))},k=()=>{v.value=0,h.value=0,l("updateQuery",""),l("close")},X=()=>f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.queryHistory),p.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{l("updateQuery",e)}},[a(j,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),A(t)}})]))])):null,Z=()=>x?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>a(O,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{k()}},()=>[a(j,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>b(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),w(t)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(Q.value){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const t=q.value.contents[h.value];y(s.queries.join(" ")),S(t),r.push(F(t)),k()}}else if(x){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(l("updateQuery",p.value[t]),e.preventDefault()):(r.push(c.value[t].link),k())}}}}),U([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!Q.value:!P.value}],id:"search-pro-results"},s.queries.length?d.value?a(oe,{hint:u.value.searching}):Q.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},o)=>{const L=v.value===o;return a("li",{class:["search-pro-result-list-item",{active:L}]},[a("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((n,ee)=>{const T=L&&h.value===ee;return a(O,{to:F(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{y(s.queries.join(" ")),S(n),k()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",V(n))])])})])})):u.value.emptyResult:C?P.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{Ce as default};
