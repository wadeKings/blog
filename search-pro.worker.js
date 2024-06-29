const V=Object.entries,et=Object.fromEntries,st="ENTRIES",L="KEYS",T="VALUES",_="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case T:return this.value();case L:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],nt=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const v=g!==t[F],z=o[p+F]+ +v,A=o[p+F+1]+1,w=o[m+F]+1,j=o[m+F+1]=Math.min(z,A,w);j<l&&(l=j)}if(l>s)continue t}R(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,st)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return nt(this._tree,t,s)}get(t){const s=k(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=k(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new D(this,L)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,I(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},k=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return k(e.get(s),t.slice(s.length))},I=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;q(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&q(e.slice(0,-1),n,o)}},q=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],ut=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,M="or",$="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},N=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[M]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),N(n.terms,u)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);N(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},at=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},gt={k:1.2,b:.7,d:.5},mt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:M,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:gt},pt={combineWith:$,prefix:(e,t,s)=>t===s.length-1},Ft={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},_t={...Ft,...U},K=Symbol("*"),yt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},X=(e,t=M)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=ht[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},S=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){ft(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],v=dt(y,m,e._documentCount,F,p,r),z=n*a*f*v,A=d.get(l);if(A){A.score+=z,ct(A.terms,t);const w=G(A.match,s);w?w.push(c):A.match[s]=[c]}else d.set(l,{score:z,terms:[t],match:{[s]:[c]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:G(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...J.weights,...i},h=e._index.get(t.term),g=S(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);S(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);S(e,t.term,l,F,f,o,u,d,g)}return g},Y=(e,t,s={})=>{if(t===K)return yt(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Y(e,g,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(at(i)).map(a=>At(e,a,i));return X(c,i.combineWith)},Q=(e,t,s={})=>{const n=Y(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===K&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(P),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(P),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?_t:t.autoVacuum;this._options={...mt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...pt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},B=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},wt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),xt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),Z=(e,t,s={})=>{const n={};return Q(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>B(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>B(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>B(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?wt(o,u):xt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=ut(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},tt=(e,t,s={})=>{const n=Ct(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},bt=et(V(JSON.parse("{\"/\":{\"documentCount\":124,\"nextId\":124,\"documentIds\":{\"0\":\"2\",\"1\":\"2#标题-2\",\"2\":\"2#标题-3\",\"3\":\"2@0\",\"4\":\"2@1\",\"5\":\"3\",\"6\":\"3#标题-2\",\"7\":\"3#标题-3\",\"8\":\"3@0\",\"9\":\"3@1\",\"10\":\"4\",\"11\":\"4@0\",\"12\":\"4@1\",\"13\":\"5\",\"14\":\"5#安装sql-server\",\"15\":\"5#安装buildmaster\",\"16\":\"5#配置buildmaster\",\"17\":\"5@0\",\"18\":\"5@1\",\"19\":\"6\",\"20\":\"6#标题-2\",\"21\":\"6#标题-3\",\"22\":\"6@0\",\"23\":\"6@1\",\"24\":\"7\",\"25\":\"7#标题-2\",\"26\":\"7#标题-3\",\"27\":\"8\",\"28\":\"8@0\",\"29\":\"9\",\"30\":\"9@0\",\"31\":\"9@1\",\"32\":\"10\",\"33\":\"10@0\",\"34\":\"10@1\",\"35\":\"11\",\"36\":\"11#markdown-介绍\",\"37\":\"11#markdown-配置\",\"38\":\"11#markdown-扩展\",\"39\":\"11#vuepress-扩展\",\"40\":\"11#主题扩展\",\"41\":\"11#提示容器\",\"42\":\"11#代码块\",\"43\":\"11#上下角标\",\"44\":\"11#自定义对齐\",\"45\":\"11#attrs\",\"46\":\"11#脚注\",\"47\":\"11#标记\",\"48\":\"11#任务列表\",\"49\":\"11#图片增强\",\"50\":\"11#组件\",\"51\":\"11@0\",\"52\":\"11@1\",\"53\":\"12\",\"54\":\"12#页面标题\",\"55\":\"12#页面信息\",\"56\":\"12#页面内容\",\"57\":\"12#组件\",\"58\":\"12@0\",\"59\":\"12@1\",\"60\":\"13\",\"61\":\"13#标题-2\",\"62\":\"13#标题-3\",\"63\":\"13@0\",\"64\":\"13@1\",\"65\":\"14\",\"66\":\"14#标题-2\",\"67\":\"14#标题-3\",\"68\":\"14@0\",\"69\":\"14@1\",\"70\":\"15\",\"71\":\"15#标题-2\",\"72\":\"15#标题-3\",\"73\":\"15@0\",\"74\":\"15@1\",\"75\":\"16\",\"76\":\"16#标题-2\",\"77\":\"16#标题-3\",\"78\":\"16@0\",\"79\":\"16@1\",\"80\":\"17\",\"81\":\"17#标题-2\",\"82\":\"17#标题-3\",\"83\":\"17@0\",\"84\":\"17@1\",\"85\":\"18\",\"86\":\"18#标题-2\",\"87\":\"18#标题-3\",\"88\":\"18@0\",\"89\":\"18@1\",\"90\":\"19\",\"91\":\"19#标题-2\",\"92\":\"19#标题-3\",\"93\":\"19@0\",\"94\":\"19@1\",\"95\":\"20\",\"96\":\"20#标题-2\",\"97\":\"20#标题-3\",\"98\":\"20@0\",\"99\":\"20@1\",\"100\":\"21\",\"101\":\"21#标题-2\",\"102\":\"21#标题-3\",\"103\":\"21@0\",\"104\":\"21@1\",\"105\":\"22\",\"106\":\"22#标题-2\",\"107\":\"22#标题-3\",\"108\":\"22@0\",\"109\":\"22@1\",\"110\":\"23\",\"111\":\"23#标题-2\",\"112\":\"23#标题-3\",\"113\":\"23@0\",\"114\":\"23@1\",\"115\":\"24\",\"116\":\"24#标题-2\",\"117\":\"24#标题-3\",\"118\":\"24@0\",\"119\":\"24@1\",\"120\":\"25\",\"121\":\"26\",\"122\":\"27\",\"123\":\"28\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[2,2],\"2\":[2,2],\"3\":[null,null,1],\"4\":[null,null,2],\"5\":[1],\"6\":[2,2],\"7\":[2,2],\"8\":[null,null,1],\"9\":[null,null,2],\"10\":[1,17],\"11\":[null,null,2],\"12\":[null,null,2],\"13\":[2],\"14\":[2,30],\"15\":[1,19],\"16\":[1,84],\"17\":[null,null,2],\"18\":[null,null,2],\"19\":[1],\"20\":[2,2],\"21\":[2,2],\"22\":[null,null,1],\"23\":[null,null,2],\"24\":[1],\"25\":[2,2],\"26\":[2,2],\"27\":[1],\"28\":[null,null,1],\"29\":[1,18],\"30\":[null,null,1],\"31\":[null,null,1],\"32\":[1,20],\"33\":[null,null,1],\"34\":[null,null,1],\"35\":[2,11],\"36\":[2,8],\"37\":[2,13],\"38\":[2,11],\"39\":[2,10],\"40\":[1,10],\"41\":[1,19],\"42\":[1,1],\"43\":[1,3],\"44\":[1,3],\"45\":[1,5],\"46\":[1,3],\"47\":[1,3],\"48\":[1,5],\"49\":[1,2],\"50\":[1],\"51\":[null,null,1],\"52\":[null,null,1],\"53\":[1,3],\"54\":[1,19],\"55\":[1,20],\"56\":[1,12],\"57\":[1,13],\"58\":[null,null,1],\"59\":[null,null,2],\"60\":[1],\"61\":[2,2],\"62\":[2,2],\"63\":[null,null,1],\"64\":[null,null,3],\"65\":[1],\"66\":[2,2],\"67\":[2,2],\"68\":[null,null,2],\"69\":[null,null,2],\"70\":[1],\"71\":[2,2],\"72\":[2,2],\"73\":[null,null,2],\"74\":[null,null,2],\"75\":[1],\"76\":[2,2],\"77\":[2,2],\"78\":[null,null,1],\"79\":[null,null,2],\"80\":[2],\"81\":[2,2],\"82\":[2,2],\"83\":[null,null,1],\"84\":[null,null,3],\"85\":[2,2],\"86\":[2,2],\"87\":[2,2],\"88\":[null,null,1],\"89\":[null,null,3],\"90\":[2],\"91\":[2,2],\"92\":[2,2],\"93\":[null,null,2],\"94\":[null,null,3],\"95\":[2],\"96\":[2,2],\"97\":[2,2],\"98\":[null,null,2],\"99\":[null,null,3],\"100\":[2],\"101\":[2,2],\"102\":[2,2],\"103\":[null,null,2],\"104\":[null,null,3],\"105\":[2,4],\"106\":[2,2],\"107\":[2,2],\"108\":[null,null,2],\"109\":[null,null,3],\"110\":[2],\"111\":[2,2],\"112\":[2,2],\"113\":[null,null,1],\"114\":[null,null,3],\"115\":[2],\"116\":[2,2],\"117\":[2,2],\"118\":[null,null,1],\"119\":[null,null,3],\"120\":[1,3],\"121\":[1],\"122\":[1],\"123\":[1]},\"averageFieldLength\":[1.5652559907299601,7.328880380295132,1.344638327152798],\"storedFields\":{\"0\":{\"h\":\"番茄\"},\"1\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"2\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"3\":{\"c\":[\"蔬菜\"]},\"4\":{\"c\":[\"红\",\"圆\"]},\"5\":{\"h\":\"番茄\"},\"6\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"7\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"8\":{\"c\":[\"蔬菜\"]},\"9\":{\"c\":[\"红\",\"圆\"]},\"10\":{\"h\":\"BuildMaster的使用\",\"t\":[\"观看新手入门视频: https://docs.inedo.com/docs/buildmaster-overview\",\"获取Github access token: https://blog.csdn.net/u014303349/article/details/133833184\"]},\"11\":{\"c\":[\"CI/CD\"]},\"12\":{\"c\":[\"红\",\"圆\"]},\"13\":{\"h\":\"CI/CD工具BuildMaster的安装\"},\"14\":{\"h\":\"安装SQL-SERVER\",\"t\":[\"参考文章: https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&preserve-view=true&tabs=cli&pivots=cs1-bash\",\"前题条件: 安装docker\",\"安装下载: sudo docker pull mcr.microsoft.com/mssql/server:2022-latest\"]},\"15\":{\"h\":\"安装BuildMaster\",\"t\":[\"安装下载: docker pull proget.inedo.com/productimages/inedo/buildmaster:23.0.17-ci.4\",\"镜像仓库: https://proget.inedo.com/containers/repositories/ProductImages/inedo/buildmaster/overview\"]},\"16\":{\"h\":\"配置BuildMaster\",\"t\":[\"创建网络: docker network create inedo\",\"启动容器: 把YourStrong@Passw0rd换成自己的密码--->执行下列命令以启动SQL-SERVER\",\"docker run --name inedo-sql \\\\ -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=<YourStrong@Passw0rd>' \\\\ -e 'MSSQL_PID=Express' --net=inedo --restart=unless-stopped \\\\ -d mcr.microsoft.com/mssql/server:2022-latest \",\"创建数据库: 执行下列命令以创建名为BuildMaster的SQL-SERVER数据库\",\"docker exec -it inedo-sql /opt/mssql-tools/bin/sqlcmd \\\\ -S localhost -U SA -P '<YourStrong@Passw0rd>' \\\\ -Q 'CREATE DATABASE [BuildMaster] COLLATE SQL_Latin1_General_CP1_CI_AS' \",\"启动容器: 把YourStrong@Passw0rd换成自己的密码--->执行下列命令以启动BuildMaster\",\"docker run -d --name=buildmaster --restart=unless-stopped \\\\ -v buildmaster-artifacts:/var/buildmaster/artifacts \\\\ -p 81:80 --net=inedo \\\\ -e BUILDMASTER_SQL_CONNECTION_STRING='Data Source=inedo-sql; Initial Catalog=BuildMaster; User ID=sa; Password=<YourStrong@Passw0rd>' \\\\ proget.inedo.com/productimages/inedo/buildmaster:latest \",\"访问地址: http://localhost:81/\",\"补充: 如果是本地部署,则使用localhost,否则换成自己的IP地址\"]},\"17\":{\"c\":[\"CI/CD\"]},\"18\":{\"c\":[\"红\",\"圆\"]},\"19\":{\"h\":\"番茄\"},\"20\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"21\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"22\":{\"c\":[\"蔬菜\"]},\"23\":{\"c\":[\"红\",\"圆\"]},\"24\":{\"h\":\"番茄\"},\"25\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"26\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"27\":{\"h\":\"主要功能与配置演示\"},\"28\":{\"c\":[\"使用指南\"]},\"29\":{\"h\":\"布局与功能禁用\",\"t\":[\"你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。\",\"本页面就是一个示例，禁用了如下功能:\",\"导航栏\",\"侧边栏\",\"路径导航\",\"页面信息\",\"贡献者\",\"编辑此页链接\",\"更新时间\",\"上一篇/下一篇 链接\",\"评论\",\"页脚\",\"返回顶部按钮\"]},\"30\":{\"c\":[\"使用指南\"]},\"31\":{\"c\":[\"禁用\"]},\"32\":{\"h\":\"布局\",\"t\":[\"布局包括:\",\"导航栏\",\"侧边栏\",\"页脚\",\"同时每个页面包含:\",\"路径导航\",\"标题和页面信息\",\"TOC (文章标题列表)\",\"贡献者、更新时间等页面元信息\",\"评论\",\"主题也带有以下元素:\",\"夜间模式按钮\",\"返回顶部按钮\",\"打印按钮\",\"你可以在主题选项和页面的 frontmatter 中自定义它们。\"]},\"33\":{\"c\":[\"指南\"]},\"34\":{\"c\":[\"布局\"]},\"35\":{\"h\":\"Markdown 展示\",\"t\":[\"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。\",\"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。\"]},\"36\":{\"h\":\"Markdown 介绍\",\"t\":[\"如果你是一个新手，还不会编写 Markdown，请先阅读 Markdown 介绍 和 Markdown 演示。\"]},\"37\":{\"h\":\"Markdown 配置\",\"t\":[\"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。\",\"相关信息\",\"Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 Frontmatter 介绍。\"]},\"38\":{\"h\":\"Markdown 扩展\",\"t\":[\"VuePress 会使用 markdown-it 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 语法扩展 。\"]},\"39\":{\"h\":\"VuePress 扩展\",\"t\":[\"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。\",\"关于这些扩展，请阅读 VuePress 中的 Markdown 扩展。\"]},\"40\":{\"h\":\"主题扩展\",\"t\":[\"通过 vuepress-plugin-md-enhance，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。\"]},\"41\":{\"h\":\"提示容器\",\"t\":[\"安全的在 Markdown 中使用 {{ variable }}。\",\"自定义标题\",\"信息容器，包含 代码 与 链接。\",\"const a = 1; \",\"自定义标题\",\"提示容器\",\"自定义标题\",\"警告容器\",\"自定义标题\",\"危险容器\",\"自定义标题\",\"详情容器\",\"查看详情\"]},\"42\":{\"h\":\"代码块\",\"t\":[\"查看详情\"]},\"43\":{\"h\":\"上下角标\",\"t\":[\"19th H2O\",\"查看详情\"]},\"44\":{\"h\":\"自定义对齐\",\"t\":[\"我是居中的\",\"我在右对齐\",\"查看详情\"]},\"45\":{\"h\":\"Attrs\",\"t\":[\"一个拥有 ID 的 单词。\",\"查看详情\"]},\"46\":{\"h\":\"脚注\",\"t\":[\"此文字有脚注[1].\",\"查看详情\"]},\"47\":{\"h\":\"标记\",\"t\":[\"你可以标记 重要的内容 。\",\"查看详情\"]},\"48\":{\"h\":\"任务列表\",\"t\":[\" 计划 1\",\" 计划 2\",\"查看详情\"]},\"49\":{\"h\":\"图片增强\",\"t\":[\"支持为图片设置颜色模式和大小\",\"查看详情\"]},\"50\":{\"h\":\"组件\"},\"51\":{\"c\":[\"使用指南\"]},\"52\":{\"c\":[\"Markdown\"]},\"53\":{\"h\":\"页面配置\",\"t\":[\"more 注释之前的内容被视为文章摘要。\"]},\"54\":{\"h\":\"页面标题\",\"t\":[\"The first H1 title in Markdown will be regarded as page title.\",\"Markdown 中的第一个 H1 标题会被视为页面标题。\",\"你可以在 Markdown 的 Frontmatter 中设置页面标题。\",\"--- title: 页面标题 --- \"]},\"55\":{\"h\":\"页面信息\",\"t\":[\"你可以在 Markdown 的 Frontmatter 中设置页面信息。\",\"作者设置为 Ms.Hope。\",\"写作日期为 2020 年 1 月 1 日\",\"分类为 “使用指南”\",\"标签为 “页面配置” 和 “使用指南”\"]},\"56\":{\"h\":\"页面内容\",\"t\":[\"你可以自由在这里书写你的 Markdown。\",\"图片引入\",\"你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。\",\"对于 .vuepress/public 文件夹的图片，请使用绝对链接 / 进行引用。\"]},\"57\":{\"h\":\"组件\",\"t\":[\"每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：\",\"{{ 1 + 1 }}\",\"{{ i }}\",\"你也可以创建并引入你自己的组件。\"]},\"58\":{\"c\":[\"使用指南\"]},\"59\":{\"c\":[\"页面配置\",\"使用指南\"]},\"60\":{\"h\":\"樱桃\"},\"61\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"62\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"63\":{\"c\":[\"樱桃\"]},\"64\":{\"c\":[\"红\",\"小\",\"圆\"]},\"65\":{\"h\":\"火龙果\"},\"66\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"67\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"68\":{\"c\":[\"火龙果\",\"水果\"]},\"69\":{\"c\":[\"红\",\"大\"]},\"70\":{\"h\":\"草莓\"},\"71\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"72\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"73\":{\"c\":[\"水果\",\"草莓\"]},\"74\":{\"c\":[\"红\",\"小\"]},\"75\":{\"h\":\"番茄\"},\"76\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"77\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"78\":{\"c\":[\"蔬菜\"]},\"79\":{\"c\":[\"红\",\"圆\"]},\"80\":{\"h\":\"苹果 1\"},\"81\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"82\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"83\":{\"c\":[\"苹果\"]},\"84\":{\"c\":[\"红\",\"大\",\"圆\"]},\"85\":{\"h\":\"苹果 2\",\"t\":[\"一个被星标了的苹果文章。\"]},\"86\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"87\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"88\":{\"c\":[\"苹果\"]},\"89\":{\"c\":[\"红\",\"大\",\"圆\"]},\"90\":{\"h\":\"苹果 3\"},\"91\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"92\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"93\":{\"c\":[\"苹果\",\"水果\"]},\"94\":{\"c\":[\"红\",\"大\",\"圆\"]},\"95\":{\"h\":\"苹果 4\"},\"96\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"97\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"98\":{\"c\":[\"苹果\",\"水果\"]},\"99\":{\"c\":[\"红\",\"大\",\"圆\"]},\"100\":{\"h\":\"香蕉 1\"},\"101\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"102\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"103\":{\"c\":[\"香蕉\",\"水果\"]},\"104\":{\"c\":[\"黄\",\"弯曲的\",\"长\"]},\"105\":{\"h\":\"香蕉 2\",\"t\":[\"一个被数字 10 星标了的香蕉文章。\"]},\"106\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"107\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"108\":{\"c\":[\"香蕉\",\"水果\"]},\"109\":{\"c\":[\"黄\",\"弯曲的\",\"长\"]},\"110\":{\"h\":\"香蕉 3\"},\"111\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"112\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"113\":{\"c\":[\"香蕉\"]},\"114\":{\"c\":[\"黄\",\"弯曲的\",\"长\"]},\"115\":{\"h\":\"香蕉 4\"},\"116\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"117\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"118\":{\"c\":[\"香蕉\"]},\"119\":{\"c\":[\"黄\",\"弯曲的\",\"长\"]},\"120\":{\"h\":\"\",\"t\":[\"404 Not Found\"]},\"121\":{\"h\":\"Posts\"},\"122\":{\"h\":\"Apple\"},\"123\":{\"h\":\"Banana\"}},\"dirtCount\":0,\"index\":[[\"星标了的香蕉文章\",{\"1\":{\"105\":1}}],[\"长\",{\"2\":{\"104\":1,\"109\":1,\"114\":1,\"119\":1}}],[\"弯曲的\",{\"2\":{\"104\":1,\"109\":1,\"114\":1,\"119\":1}}],[\"黄\",{\"2\":{\"104\":1,\"109\":1,\"114\":1,\"119\":1}}],[\"香蕉\",{\"0\":{\"100\":1,\"105\":1,\"110\":1,\"115\":1},\"2\":{\"103\":1,\"108\":1,\"113\":1,\"118\":1}}],[\"一个被数字\",{\"1\":{\"105\":1}}],[\"一个被星标了的苹果文章\",{\"1\":{\"85\":1}}],[\"一个拥有\",{\"1\":{\"45\":1}}],[\"苹果\",{\"0\":{\"80\":1,\"85\":1,\"90\":1,\"95\":1},\"2\":{\"83\":1,\"88\":1,\"93\":1,\"98\":1}}],[\"草莓\",{\"0\":{\"70\":1},\"2\":{\"73\":1}}],[\"大\",{\"2\":{\"69\":1,\"84\":1,\"89\":1,\"94\":1,\"99\":1}}],[\"水果\",{\"2\":{\"68\":1,\"73\":1,\"93\":1,\"98\":1,\"103\":1,\"108\":1}}],[\"火龙果\",{\"0\":{\"65\":1},\"2\":{\"68\":1}}],[\"小\",{\"2\":{\"64\":1,\"74\":1}}],[\"樱桃\",{\"0\":{\"60\":1},\"2\":{\"63\":1}}],[\"+\",{\"1\":{\"57\":1}}],[\"这意味着你可以在\",{\"1\":{\"57\":1}}],[\"这里是内容\",{\"1\":{\"1\":1,\"2\":1,\"6\":1,\"7\":1,\"20\":1,\"21\":1,\"25\":1,\"26\":1,\"61\":1,\"62\":1,\"66\":1,\"67\":1,\"71\":1,\"72\":1,\"76\":1,\"77\":1,\"81\":1,\"82\":1,\"86\":1,\"87\":1,\"91\":1,\"92\":1,\"96\":1,\"97\":1,\"101\":1,\"102\":1,\"106\":1,\"107\":1,\"111\":1,\"112\":1,\"116\":1,\"117\":1}}],[\"每个\",{\"1\":{\"57\":1}}],[\"进行引用\",{\"1\":{\"56\":1}}],[\"图片引入\",{\"1\":{\"56\":1}}],[\"图片增强\",{\"0\":{\"49\":1}}],[\"分类为\",{\"1\":{\"55\":1}}],[\"日\",{\"1\":{\"55\":1}}],[\"月\",{\"1\":{\"55\":1}}],[\"年\",{\"1\":{\"55\":1}}],[\"写作日期为\",{\"1\":{\"55\":1}}],[\"作者设置为\",{\"1\":{\"55\":1}}],[\"will\",{\"1\":{\"54\":1}}],[\"found\",{\"1\":{\"120\":1}}],[\"first\",{\"1\":{\"54\":1}}],[\"frontmatter\",{\"1\":{\"29\":1,\"32\":1,\"37\":3,\"54\":1,\"55\":1}}],[\"注释之前的内容被视为文章摘要\",{\"1\":{\"53\":1}}],[\"组件\",{\"0\":{\"50\":1,\"57\":1},\"1\":{\"57\":1}}],[\"支持为图片设置颜色模式和大小\",{\"1\":{\"49\":1}}],[\"计划\",{\"1\":{\"48\":2}}],[\"任务列表\",{\"0\":{\"48\":1}}],[\"重要的内容\",{\"1\":{\"47\":1}}],[\"标签为\",{\"1\":{\"55\":1}}],[\"标记\",{\"0\":{\"47\":1}}],[\"标题会被视为页面标题\",{\"1\":{\"54\":1}}],[\"标题和页面信息\",{\"1\":{\"32\":1}}],[\"标题\",{\"0\":{\"1\":1,\"2\":1,\"6\":1,\"7\":1,\"20\":1,\"21\":1,\"25\":1,\"26\":1,\"61\":1,\"62\":1,\"66\":1,\"67\":1,\"71\":1,\"72\":1,\"76\":1,\"77\":1,\"81\":1,\"82\":1,\"86\":1,\"87\":1,\"91\":1,\"92\":1,\"96\":1,\"97\":1,\"101\":1,\"102\":1,\"106\":1,\"107\":1,\"111\":1,\"112\":1,\"116\":1,\"117\":1}}],[\"此文字有脚注\",{\"1\":{\"46\":1}}],[\"脚注\",{\"0\":{\"46\":1}}],[\"单词\",{\"1\":{\"45\":1}}],[\"的\",{\"1\":{\"45\":1,\"54\":1,\"55\":1}}],[\"我在右对齐\",{\"1\":{\"44\":1}}],[\"我是居中的\",{\"1\":{\"44\":1}}],[\"自定义对齐\",{\"0\":{\"44\":1}}],[\"自定义标题\",{\"1\":{\"41\":5}}],[\"hope\",{\"1\":{\"55\":1}}],[\"h1\",{\"1\":{\"54\":2}}],[\"h2o\",{\"1\":{\"43\":1}}],[\"http\",{\"1\":{\"16\":1}}],[\"https\",{\"1\":{\"10\":2,\"14\":1,\"15\":1}}],[\"上下角标\",{\"0\":{\"43\":1}}],[\"上一篇\",{\"1\":{\"29\":1}}],[\"查看详情\",{\"1\":{\"41\":1,\"42\":1,\"43\":1,\"44\":1,\"45\":1,\"46\":1,\"47\":1,\"48\":1,\"49\":1}}],[\"详情容器\",{\"1\":{\"41\":1}}],[\"危险容器\",{\"1\":{\"41\":1}}],[\"警告容器\",{\"1\":{\"41\":1}}],[\"=\",{\"1\":{\"41\":1}}],[\"与\",{\"1\":{\"41\":1}}],[\"代码块\",{\"0\":{\"42\":1}}],[\"代码\",{\"1\":{\"41\":1}}],[\"包含\",{\"1\":{\"41\":1}}],[\"信息容器\",{\"1\":{\"41\":1}}],[\"安全的在\",{\"1\":{\"41\":1}}],[\"安装buildmaster\",{\"0\":{\"15\":1}}],[\"安装下载\",{\"1\":{\"14\":1,\"15\":1}}],[\"安装docker\",{\"1\":{\"14\":1}}],[\"安装sql\",{\"0\":{\"14\":1}}],[\"提示容器\",{\"0\":{\"41\":1},\"1\":{\"41\":1}}],[\"提供更加丰富的写作功能\",{\"1\":{\"40\":1}}],[\"请使用绝对链接\",{\"1\":{\"56\":1}}],[\"请阅读\",{\"1\":{\"39\":1}}],[\"请先阅读\",{\"1\":{\"36\":1}}],[\"关于这些扩展\",{\"1\":{\"39\":1}}],[\"语法\",{\"1\":{\"40\":1,\"57\":1}}],[\"语法进行了扩展\",{\"1\":{\"39\":1}}],[\"语法扩展\",{\"1\":{\"38\":1}}],[\"对于\",{\"1\":{\"56\":1}}],[\"对\",{\"1\":{\"39\":1}}],[\"为了丰富文档写作\",{\"1\":{\"39\":1}}],[\"为每个\",{\"1\":{\"37\":1}}],[\"插件来实现\",{\"1\":{\"38\":1}}],[\"内容\",{\"1\":{\"38\":1}}],[\"来解析\",{\"1\":{\"38\":1}}],[\"会使用\",{\"1\":{\"38\":1}}],[\"扩展\",{\"0\":{\"38\":1,\"39\":1},\"1\":{\"39\":1}}],[\"中设置页面信息\",{\"1\":{\"55\":1}}],[\"中设置页面标题\",{\"1\":{\"54\":1}}],[\"中使用\",{\"1\":{\"41\":1,\"57\":1}}],[\"中的第一个\",{\"1\":{\"54\":1}}],[\"中的\",{\"1\":{\"39\":1}}],[\"中很重要的一个概念\",{\"1\":{\"37\":1}}],[\"中自定义它们\",{\"1\":{\"32\":1}}],[\"是\",{\"1\":{\"37\":1}}],[\"相关信息\",{\"1\":{\"37\":1}}],[\"通过\",{\"1\":{\"37\":1,\"40\":1}}],[\"配置\",{\"0\":{\"37\":1}}],[\"配置buildmaster\",{\"0\":{\"16\":1}}],[\"演示\",{\"1\":{\"36\":1}}],[\"和\",{\"1\":{\"36\":1,\"55\":1}}],[\"还不会编写\",{\"1\":{\"36\":1}}],[\"如果你不了解它\",{\"1\":{\"37\":1}}],[\"如果你是一个新手\",{\"1\":{\"36\":1}}],[\"如果是本地部署\",{\"1\":{\"16\":1}}],[\"介绍\",{\"0\":{\"36\":1},\"1\":{\"36\":1,\"37\":1}}],[\"可以根据文件结构将它们转换为不同的页面\",{\"1\":{\"35\":1}}],[\"以便\",{\"1\":{\"35\":1}}],[\"你也可以创建并引入你自己的组件\",{\"1\":{\"57\":1}}],[\"你需要阅读\",{\"1\":{\"37\":1}}],[\"你应该创建和编写\",{\"1\":{\"35\":1}}],[\"你可以将图片和\",{\"1\":{\"56\":1}}],[\"你可以自由在这里书写你的\",{\"1\":{\"56\":1}}],[\"你可以在\",{\"1\":{\"54\":1,\"55\":1}}],[\"你可以在主题选项和页面的\",{\"1\":{\"32\":1}}],[\"你可以标记\",{\"1\":{\"47\":1}}],[\"你可以使用它轻松生成文档或博客站点\",{\"1\":{\"35\":1}}],[\"你可以通过设置页面的\",{\"1\":{\"29\":1}}],[\"因此可以借助于\",{\"1\":{\"38\":1}}],[\"因此\",{\"1\":{\"35\":1}}],[\"文件夹的图片\",{\"1\":{\"56\":1}}],[\"文件放置在一起使用相对路径进行引用\",{\"1\":{\"56\":1}}],[\"文件\",{\"1\":{\"35\":1}}],[\"文件生成页面\",{\"1\":{\"35\":1}}],[\"文章标题列表\",{\"1\":{\"32\":1}}],[\"展示\",{\"0\":{\"35\":1}}],[\"指南\",{\"2\":{\"33\":1}}],[\"打印按钮\",{\"1\":{\"32\":1}}],[\"夜间模式按钮\",{\"1\":{\"32\":1}}],[\"主题扩展了更多\",{\"1\":{\"40\":1}}],[\"主题扩展\",{\"0\":{\"40\":1}}],[\"主题也带有以下元素\",{\"1\":{\"32\":1}}],[\"主要从\",{\"1\":{\"35\":1}}],[\"主要功能与配置演示\",{\"0\":{\"27\":1}}],[\"同时每个页面包含\",{\"1\":{\"32\":1}}],[\"布局包括\",{\"1\":{\"32\":1}}],[\"布局\",{\"0\":{\"32\":1},\"2\":{\"34\":1}}],[\"布局与功能禁用\",{\"0\":{\"29\":1}}],[\"禁用\",{\"2\":{\"31\":1}}],[\"禁用了如下功能\",{\"1\":{\"29\":1}}],[\"返回顶部按钮\",{\"1\":{\"29\":1,\"32\":1}}],[\"页面都会被转换为一个\",{\"1\":{\"57\":1}}],[\"页面内容\",{\"0\":{\"56\":1}}],[\"页面标题\",{\"0\":{\"54\":1},\"1\":{\"54\":1}}],[\"页面配置\",{\"0\":{\"53\":1},\"1\":{\"55\":1},\"2\":{\"59\":1}}],[\"页面引入配置\",{\"1\":{\"37\":1}}],[\"页面信息\",{\"0\":{\"55\":1},\"1\":{\"29\":1}}],[\"页脚\",{\"1\":{\"29\":1,\"32\":1}}],[\"评论\",{\"1\":{\"29\":1,\"32\":1}}],[\"链接\",{\"1\":{\"29\":1,\"41\":1}}],[\"下一篇\",{\"1\":{\"29\":1}}],[\"更新时间等页面元信息\",{\"1\":{\"32\":1}}],[\"更新时间\",{\"1\":{\"29\":1}}],[\"编辑此页链接\",{\"1\":{\"29\":1}}],[\"贡献者\",{\"1\":{\"29\":1,\"32\":1}}],[\"路径导航\",{\"1\":{\"29\":1,\"32\":1}}],[\"侧边栏\",{\"1\":{\"29\":1,\"32\":1}}],[\"导航栏\",{\"1\":{\"29\":1,\"32\":1}}],[\"本页面就是一个示例\",{\"1\":{\"29\":1}}],[\"在页面禁用功能与布局\",{\"1\":{\"29\":1}}],[\"使用指南\",{\"1\":{\"55\":2},\"2\":{\"28\":1,\"30\":1,\"51\":1,\"58\":1,\"59\":1}}],[\"否则换成自己的ip地址\",{\"1\":{\"16\":1}}],[\"则使用localhost\",{\"1\":{\"16\":1}}],[\"补充\",{\"1\":{\"16\":1}}],[\"访问地址\",{\"1\":{\"16\":1}}],[\"80\",{\"1\":{\"16\":1}}],[\"81\",{\"1\":{\"16\":2}}],[\">执行下列命令以启动buildmaster\",{\"1\":{\"16\":1}}],[\">执行下列命令以启动sql\",{\"1\":{\"16\":1}}],[\"general\",{\"1\":{\"16\":1}}],[\"q\",{\"1\":{\"16\":1}}],[\"quickstart\",{\"1\":{\"14\":1}}],[\"<yourstrong\",{\"1\":{\"16\":1}}],[\"opt\",{\"1\":{\"16\":1}}],[\"overview\",{\"1\":{\"10\":1,\"15\":1}}],[\"i\",{\"1\":{\"57\":1}}],[\"id\",{\"1\":{\"45\":1}}],[\"id=sa\",{\"1\":{\"16\":1}}],[\"it\",{\"1\":{\"16\":1,\"38\":2}}],[\"in\",{\"1\":{\"54\":1}}],[\"initial\",{\"1\":{\"16\":1}}],[\"install\",{\"1\":{\"14\":1}}],[\"inedo\",{\"1\":{\"10\":1,\"15\":4,\"16\":5}}],[\"执行下列命令以创建名为buildmaster的sql\",{\"1\":{\"16\":1}}],[\"创建数据库\",{\"1\":{\"16\":1}}],[\"创建网络\",{\"1\":{\"16\":1}}],[\"exec\",{\"1\":{\"16\":1}}],[\"eula=y\",{\"1\":{\"16\":1}}],[\"e\",{\"1\":{\"16\":4}}],[\"enhance\",{\"1\":{\"40\":1}}],[\"en\",{\"1\":{\"14\":1}}],[\"not\",{\"1\":{\"120\":1}}],[\"name=buildmaster\",{\"1\":{\"16\":1}}],[\"name\",{\"1\":{\"16\":1}}],[\"net=inedo\",{\"1\":{\"16\":2}}],[\"network\",{\"1\":{\"16\":1}}],[\"net\",{\"1\":{\"10\":1}}],[\"regarded\",{\"1\":{\"54\":1}}],[\"restart=unless\",{\"1\":{\"16\":2}}],[\"repositories\",{\"1\":{\"15\":1}}],[\"run\",{\"1\":{\"16\":2}}],[\"把yourstrong\",{\"1\":{\"16\":2}}],[\"启动容器\",{\"1\":{\"16\":2}}],[\"镜像仓库\",{\"1\":{\"15\":1}}],[\"404\",{\"1\":{\"120\":1}}],[\"4\",{\"0\":{\"95\":1,\"115\":1},\"1\":{\"15\":1}}],[\"10\",{\"1\":{\"105\":1}}],[\"19th\",{\"1\":{\"43\":1}}],[\"1\",{\"0\":{\"80\":1,\"100\":1},\"1\":{\"41\":1,\"46\":1,\"48\":1,\"55\":2,\"57\":2}}],[\"17\",{\"1\":{\"15\":1}}],[\"133833184\",{\"1\":{\"10\":1}}],[\"0\",{\"1\":{\"15\":1}}],[\"ms\",{\"1\":{\"55\":1}}],[\"mssql\",{\"1\":{\"14\":1,\"16\":4}}],[\"more\",{\"1\":{\"53\":1}}],[\"md\",{\"1\":{\"40\":1}}],[\"markdown\",{\"0\":{\"35\":1,\"36\":1,\"37\":1,\"38\":1},\"1\":{\"35\":2,\"36\":3,\"37\":1,\"38\":3,\"39\":2,\"40\":1,\"41\":1,\"54\":3,\"55\":1,\"56\":2,\"57\":2},\"2\":{\"52\":1}}],[\"mcr\",{\"1\":{\"14\":1,\"16\":1}}],[\"microsoft\",{\"1\":{\"14\":2,\"16\":1}}],[\"前题条件\",{\"1\":{\"14\":1}}],[\"posts\",{\"0\":{\"121\":1}}],[\"public\",{\"1\":{\"56\":1}}],[\"pull\",{\"1\":{\"14\":1,\"15\":1}}],[\"page\",{\"1\":{\"54\":1}}],[\"passw0rd>\",{\"1\":{\"16\":3}}],[\"passw0rd换成自己的密码\",{\"1\":{\"16\":2}}],[\"password=<yourstrong\",{\"1\":{\"16\":2}}],[\"plugin\",{\"1\":{\"40\":1}}],[\"p\",{\"1\":{\"16\":2}}],[\"pid=express\",{\"1\":{\"16\":1}}],[\"pivots=cs1\",{\"1\":{\"14\":1}}],[\"productimages\",{\"1\":{\"15\":2,\"16\":1}}],[\"proget\",{\"1\":{\"15\":2,\"16\":1}}],[\"preserve\",{\"1\":{\"14\":1}}],[\"title\",{\"1\":{\"54\":3}}],[\"the\",{\"1\":{\"54\":1}}],[\"toc\",{\"1\":{\"32\":1}}],[\"tools\",{\"1\":{\"16\":1}}],[\"token\",{\"1\":{\"10\":1}}],[\"tabs=cli\",{\"1\":{\"14\":1}}],[\"vue\",{\"1\":{\"57\":2}}],[\"vuepress\",{\"0\":{\"39\":1},\"1\":{\"35\":2,\"37\":2,\"38\":1,\"39\":2,\"40\":1,\"56\":1}}],[\"variable\",{\"1\":{\"41\":1}}],[\"var\",{\"1\":{\"16\":1}}],[\"v\",{\"1\":{\"16\":1}}],[\"view=true\",{\"1\":{\"14\":1}}],[\"view=sql\",{\"1\":{\"14\":1}}],[\"ver16\",{\"1\":{\"14\":1}}],[\"latin1\",{\"1\":{\"16\":1}}],[\"latest\",{\"1\":{\"14\":1,\"16\":2}}],[\"localhost\",{\"1\":{\"16\":2}}],[\"linux\",{\"1\":{\"14\":1}}],[\"learn\",{\"1\":{\"14\":1}}],[\"source=inedo\",{\"1\":{\"16\":1}}],[\"string=\",{\"1\":{\"16\":1}}],[\"stopped\",{\"1\":{\"16\":2}}],[\"s\",{\"1\":{\"16\":1}}],[\"sa\",{\"1\":{\"16\":2}}],[\"sudo\",{\"1\":{\"14\":1}}],[\"sqlcmd\",{\"1\":{\"16\":1}}],[\"sql\",{\"1\":{\"14\":1,\"16\":5}}],[\"server数据库\",{\"1\":{\"16\":1}}],[\"server\",{\"0\":{\"14\":1},\"1\":{\"14\":2,\"16\":2}}],[\"u\",{\"1\":{\"16\":1}}],[\"user\",{\"1\":{\"16\":1}}],[\"us\",{\"1\":{\"14\":1}}],[\"u014303349\",{\"1\":{\"10\":1}}],[\"参考文章\",{\"1\":{\"14\":1}}],[\"data\",{\"1\":{\"16\":1}}],[\"database\",{\"1\":{\"16\":1}}],[\"d\",{\"1\":{\"16\":2}}],[\"docker\",{\"1\":{\"14\":2,\"15\":1,\"16\":4}}],[\"docs\",{\"1\":{\"10\":2}}],[\"details\",{\"1\":{\"10\":1}}],[\"apple\",{\"0\":{\"122\":1}}],[\"attrs\",{\"0\":{\"45\":1}}],[\"a\",{\"1\":{\"41\":1}}],[\"artifacts\",{\"1\":{\"16\":2}}],[\"article\",{\"1\":{\"10\":1}}],[\"as\",{\"1\":{\"16\":1,\"54\":1}}],[\"accept\",{\"1\":{\"16\":1}}],[\"access\",{\"1\":{\"10\":1}}],[\"catalog=buildmaster\",{\"1\":{\"16\":1}}],[\"cp1\",{\"1\":{\"16\":1}}],[\"create\",{\"1\":{\"16\":2}}],[\"collate\",{\"1\":{\"16\":1}}],[\"const\",{\"1\":{\"41\":1}}],[\"containers\",{\"1\":{\"15\":1}}],[\"connection\",{\"1\":{\"16\":1}}],[\"connect\",{\"1\":{\"14\":1}}],[\"com\",{\"1\":{\"10\":1,\"14\":2,\"15\":2,\"16\":2}}],[\"cd工具buildmaster的安装\",{\"0\":{\"13\":1}}],[\"cd\",{\"2\":{\"11\":1,\"17\":1}}],[\"ci\",{\"0\":{\"13\":1},\"1\":{\"15\":1,\"16\":1},\"2\":{\"11\":1,\"17\":1}}],[\"csdn\",{\"1\":{\"10\":1}}],[\"banana\",{\"0\":{\"123\":1}}],[\"bash\",{\"1\":{\"14\":1}}],[\"be\",{\"1\":{\"54\":1}}],[\"bin\",{\"1\":{\"16\":1}}],[\"blog\",{\"1\":{\"10\":1}}],[\"buildmaster\",{\"1\":{\"10\":1,\"15\":2,\"16\":5}}],[\"buildmaster的使用\",{\"0\":{\"10\":1}}],[\"获取github\",{\"1\":{\"10\":1}}],[\"观看新手入门视频\",{\"1\":{\"10\":1}}],[\"圆\",{\"2\":{\"4\":1,\"9\":1,\"12\":1,\"18\":1,\"23\":1,\"64\":1,\"79\":1,\"84\":1,\"89\":1,\"94\":1,\"99\":1}}],[\"红\",{\"2\":{\"4\":1,\"9\":1,\"12\":1,\"18\":1,\"23\":1,\"64\":1,\"69\":1,\"74\":1,\"79\":1,\"84\":1,\"89\":1,\"94\":1,\"99\":1}}],[\"蔬菜\",{\"2\":{\"3\":1,\"8\":1,\"22\":1,\"78\":1}}],[\"3\",{\"0\":{\"2\":1,\"7\":1,\"21\":1,\"26\":1,\"62\":1,\"67\":1,\"72\":1,\"77\":1,\"82\":1,\"87\":1,\"90\":1,\"92\":1,\"97\":1,\"102\":1,\"107\":1,\"110\":1,\"112\":1,\"117\":1}}],[\"2020\",{\"1\":{\"55\":1}}],[\"2022\",{\"1\":{\"14\":1,\"16\":1}}],[\"23\",{\"1\":{\"15\":1}}],[\"2\",{\"0\":{\"1\":1,\"6\":1,\"20\":1,\"25\":1,\"61\":1,\"66\":1,\"71\":1,\"76\":1,\"81\":1,\"85\":1,\"86\":1,\"91\":1,\"96\":1,\"101\":1,\"105\":1,\"106\":1,\"111\":1,\"116\":1},\"1\":{\"48\":1}}],[\"番茄\",{\"0\":{\"0\":1,\"5\":1,\"19\":1,\"24\":1,\"75\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const u=bt[s];e==="suggest"?self.postMessage([e,o,tt(t,u,n)]):e==="search"?self.postMessage([e,o,Z(t,u,n)]):self.postMessage({suggestions:[e,o,tt(t,u,n)],results:[e,o,Z(t,u,n)]})};
//# sourceMappingURL=index.js.map
