import{l as I,i as ae,m as te,p as _,q as se,P as le,s as re,v as ie,j as B,x as R,y as ue,z as U,k as t,A as oe,R as P,B as ne,C as ce,D as ve,E as de,G as he,H as ye,I as pe,J as me,K as ge,L as Ee,M as xe,N as T,O as j,Q as ke,S as D,T as fe}from"./app-BXzOxQcB.js";const Se=["/","/intro.html","/FrontEnd/","/FrontEndWeb/","/Java/BuildMaster.html","/Java/","/Java/validation.html","/JavaDesktop/","/JavaWeb/","/LinuxService/Docker-compose.html","/LinuxService/Docker.html","/LinuxService/Elasticserch.html","/LinuxService/JDK.html","/LinuxService/Maven.html","/LinuxService/Metricbeat.html","/LinuxService/Nacos.html","/LinuxService/Nginx.html","/LinuxService/","/LinuxService/RabbitMQ.html","/LinuxService/Redis.html","/WindowsSoftWare/","/demo/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/404.html","/category/","/category/%E8%94%AC%E8%8F%9C/","/category/cicd/","/category/validation/","/category/docker-compose/","/category/docker/","/category/elasticsearch/","/category/jdk/","/category/maven/","/category/metricbeat/","/category/nacos/","/category/nginx/","/category/rabbitmq/","/category/redis/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/category/%E6%8C%87%E5%8D%97/","/tag/","/tag/%E7%BA%A2/","/tag/%E5%9C%86/","/tag/%E7%A6%81%E7%94%A8/","/tag/%E5%8A%A0%E5%AF%86/","/tag/%E5%B8%83%E5%B1%80/","/tag/markdown/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/article/","/star/","/timeline/"],He="SEARCH_PRO_QUERY_HISTORY",g=I(He,[]),Re=()=>{const{queryHistoryCount:s}=D,l=s>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,s-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=s=>Se[s.id]+("anchor"in s?`#${s.anchor}`:""),De="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:$}=D,E=I(De,[]),Le=()=>{const s=$>0;return{enabled:s,resultHistory:E,addResultHistory:l=>{if(s){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),E.value=[r,...E.value.slice(0,$-1)]}},removeResultHistory:l=>{E.value=[...E.value.slice(0,l),...E.value.slice(l+1)]}}},Ae=s=>{const l=de(),r=_(),L=he(),u=B(0),f=R(()=>u.value>0),y=ye([]);return pe(()=>{const{search:p,terminate:A}=me(),x=ke(c=>{const k=c.join(" "),{searchFilter:w=h=>h,splitWord:C,suggestionsFilter:J,...m}=l.value;k?(u.value+=1,p(c.join(" "),r.value,m).then(h=>w(h,k,r.value,L.value)).then(h=>{u.value-=1,y.value=h}).catch(h=>{console.warn(h),u.value-=1,u.value||(y.value=[])})):y.value=[]},D.searchDelay-D.suggestDelay);U([s,r],([c])=>x(c),{immediate:!0}),ge(()=>{A()})}),{isSearching:f,results:y}};var Ce=ae({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=te(),L=_(),u=se(le),{enabled:f,addQueryHistory:y,queryHistory:p,removeQueryHistory:A}=Re(),{enabled:x,resultHistory:c,addResultHistory:k,removeResultHistory:w}=Le(),C=f||x,J=re(s,"queries"),{results:m,isSearching:h}=Ae(J),i=ie({isQuery:!0,index:0}),v=B(0),d=B(0),M=R(()=>C&&(p.value.length>0||c.value.length>0)),Q=R(()=>m.value.length>0),b=R(()=>m.value[v.value]||null),W=()=>{const{isQuery:e,index:a}=i;a===0?(i.isQuery=!e,i.index=e?c.value.length-1:p.value.length-1):i.index=a-1},N=()=>{const{isQuery:e,index:a}=i;a===(e?p.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=a+1},Y=()=>{v.value=v.value>0?v.value-1:m.value.length-1,d.value=b.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,d.value=0},z=()=>{d.value<b.value.contents.length-1?d.value+=1:K()},G=()=>{d.value>0?d.value-=1:Y()},q=e=>e.map(a=>fe(a)?a:t(a[0],a[1])),V=e=>{if(e.type==="customField"){const a=Ee[e.index]||"$content",[o,H=""]=xe(a)?a[L.value].split("$content"):a.split("$content");return e.display.map(n=>t("div",q([o,...n,H])))}return e.display.map(a=>t("div",q(a)))},S=()=>{v.value=0,d.value=0,l("updateQuery",""),l("close")},X=()=>f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.queryHistory),p.value.map((e,a)=>t("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===a}],onClick:()=>{l("updateQuery",e)}},[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),A(a)}})]))])):null,Z=()=>x?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,a)=>t(P,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===a}],onClick:()=>{S()}},()=>[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>q(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),w(a)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(Q.value){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const a=b.value.contents[d.value];y(s.queries.join(" ")),k(a),r.push(F(a)),S()}}else if(x){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const{index:a}=i;i.isQuery?(l("updateQuery",p.value[a]),e.preventDefault()):(r.push(c.value[a].link),S())}}}}),U([v,d],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!Q.value:!M.value}],id:"search-pro-results"},s.queries.length?h.value?t(oe,{hint:u.value.searching}):Q.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:a},o)=>{const H=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:H}]},[t("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),a.map((n,ee)=>{const O=H&&d.value===ee;return t(P,{to:F(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{y(s.queries.join(" ")),k(n),S()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",V(n))])])})])})):u.value.emptyResult:C?M.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{Ce as default};
