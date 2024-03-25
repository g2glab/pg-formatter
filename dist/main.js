(()=>{var t={161:(t,r)=>{let e;function n(t){return`:${u(t)}`}function o({key:t,values:r}){return r.map((r=>`${u(t)}:${u(r)}`)).join(" ")}function u(t){return t.quote?t.quote+t.literal+t.quote:t.literal}r.format=function({lines:t,comments:r},i,c){e=[];let a={},f={};return t.forEach((t=>{t.node?(a[t.node.id.literal]=!0,function({id:t,labels:r,properties:i},c){e.push([u(t),...r.map(n),...i.map(o)].join(c))}(t.node,i)):t.edge&&(f[t.edge.from.literal]=!0,f[t.edge.to.literal]=!0,function({from:t,to:r,direction:i,labels:c,properties:a},f){e.push([`${u(t)} ${i} ${u(r)}`,...c.map(n),...a.map(o)].join(f))}(t.edge,i))})),Object.keys(f).forEach((t=>{a[t]||e.push(`${t}`)})),e.join(c+"\n")}},98:(t,r)=>{function e(t={},r){for(let[e,n]of r)if(e in t)for(let r of n)t[e].add(r);else t[e]=new Set(n);for(let r in t)t[r]=[...t[r].values()];return proper}function n(t){const r=Object.fromEntries(t.properties.map((({key:t,values:r})=>[u(t),r.map(u)])));return{id:u(t.id),labels:t.labels.map(u),properties:r}}function o(t){const r=Object.fromEntries(t.properties.map((({key:t,values:r})=>[u(t),r.map(u)])));return{from:u(t.from),to:u(t.to),undirected:"--"===t.direction,labels:t.labels.map(u),properties:r}}function u(t){return t.literal}r.formatJSONL=function(t){let r;return t.node?r={type:"node",...n(t.node)}:t.edge&&(r={type:"edge",...o(t.edge)}),JSON.stringify(r,null,2).replace(/{\n */g,"{").replace(/\n *}/g,"}").replace(/\[\n */g,"[").replace(/\n *\]/g,"]").replace(/\n */g," ")},r.buildGraph=function(t){const r={},u=[];for(let i of t)if(i.node){const t=n(i.node);if(t.id in r){const n=[...r[id].labels,...t.labels];r[id].labels=Array.from(new Set(n)),e(r[id].properties,t.properties)}else r[t.id]=t}else i.edge&&u.push(o(i.edge));return{nodes:Object.keys(r).sort().map((t=>r[t])),edges:u}}},602:(t,r)=>{let e,n;function o(t){return`:${i(t)}`}function u({key:t,values:r}){return`${i(t)}:${function(t){return t.map(i).join(",")}(r)}`}function i(t){return t.quote?t.quote+t.literal+t.quote:t.literal}r.format=function({lines:t,comments:r},c,a){for(e=[],n=Object.entries(r).map((([t,r])=>({pos:parseInt(t),text:r}))),t.forEach((t=>{t.node?function({id:t,labels:r,properties:c},a,f){for(;n.length&&n[0].pos<a.start;)e.push(n.shift().text);for(e.push([i(t),...r.map(o),...c.map(u)].join(f));n.length&&n[0].pos<a.end;)e[e.length-1]+=n.shift().text}(t.node,t.pos,c):t.edge&&function({from:t,to:r,direction:c,labels:a,properties:f},s,l){for(;n.length&&n[0].pos<s.start;)e.push(n.shift().text);for(e.push([`${i(t)} ${c} ${i(r)}`,...a.map(o),...f.map(u)].join(l));n.length&&n[0].pos<s.end;)e[e.length-1]+=n.shift().text}(t.edge,t.pos,c)}));n.length;)e.push(n.shift().text);return e.join(a+"\n")}},417:t=>{"use strict";function r(t,e,n,o){var u=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(u,r.prototype),u.expected=e,u.found=n,u.location=o,u.name="SyntaxError",u}function e(t,r,e){return e=e||" ",t.length>r?t:(r-=t.length,t+(e+=e.repeat(r)).slice(0,r))}!function(t,r){function e(){this.constructor=t}e.prototype=r.prototype,t.prototype=new e}(r,Error),r.prototype.format=function(t){var r="Error: "+this.message;if(this.location){var n,o=null;for(n=0;n<t.length;n++)if(t[n].source===this.location.source){o=t[n].text.split(/\r\n|\n|\r/g);break}var u=this.location.start,i=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(u):u,c=this.location.source+":"+i.line+":"+i.column;if(o){var a=this.location.end,f=e("",i.line.toString().length," "),s=o[u.line-1],l=(u.line===a.line?a.column:s.length+1)-u.column||1;r+="\n --\x3e "+c+"\n"+f+" |\n"+i.line+" | "+s+"\n"+f+" | "+e("",u.column-1," ")+e("",l,"^")}else r+="\n at "+c}return r},r.buildMessage=function(t,r){var e={literal:function(t){return'"'+o(t.text)+'"'},class:function(t){var r=t.parts.map((function(t){return Array.isArray(t)?u(t[0])+"-"+u(t[1]):u(t)}));return"["+(t.inverted?"^":"")+r.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function o(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function u(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function i(t){return e[t.type](t)}return"Expected "+function(t){var r,e,n=t.map(i);if(n.sort(),n.length>0){for(r=1,e=1;r<n.length;r++)n[r-1]!==n[r]&&(n[e]=n[r],e++);n.length=e}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+function(t){return t?'"'+o(t)+'"':"end of input"}(r)+" found."},t.exports={SyntaxError:r,parse:function(t,e){var n,o={},u=(e=void 0!==e?e:{}).grammarSource,i={PG:ar},c=ar,a=":",f="null",s=",",l="--",p="->",h="-",d=".",A="0",g="true",v="false",m="#",C='"',b="'",x="`",y="\\",j="b",E="f",$="n",O="r",F="t",S="v",q=/^[0-9]/,k=/^[1-9]/,w=/^[eE]/,N=/^[+\-]/,R=/^[^\r\n]/,J=/^[\n]/,P=/^[\r]/,G=/^[ \t]/,L=/^[: \t\r\n'"(),]/,M=/^[^ \t\r\n'"(),]/,z=/^[^: \t\r\n'"(),]/,B=nr(":",!1),I=nr("null",!1),U=nr(",",!1),D=nr("--",!1),H=nr("->",!1),K=nr("-",!1),Q=nr(".",!1),T=or([["0","9"]],!1,!1),V=nr("0",!1),W=or([["1","9"]],!1,!1),X=or(["e","E"],!1,!1),Y=or(["+","-"],!1,!1),Z=nr("true",!1),_=nr("false",!1),tt=nr("#",!1),rt=nr('"',!1),et=nr("'",!1),nt=nr("`",!1),ot=nr("\\",!1),ut={type:"any"},it=nr("b",!1),ct=nr("f",!1),at=nr("n",!1),ft=nr("r",!1),st=nr("t",!1),lt=nr("v",!1),pt=or(["\r","\n"],!0,!1),ht=or(["\n"],!1,!1),dt=or(["\r"],!1,!1),At=or([" ","\t"],!1,!1),gt=or([":"," ","\t","\r","\n","'",'"',"(",")",","],!1,!1),vt=or([" ","\t","\r","\n","'",'"',"(",")",","],!0,!1),mt=or([":"," ","\t","\r","\n","'",'"',"(",")",","],!0,!1),Ct=function(t){return{lines:t,comments:qr}},bt=function(t){return t.pos.end=er().end.offset,t},xt=function(t,r,e){return{node:{id:t,labels:r,properties:e},pos:{start:er().start.offset}}},yt=function(t,r,e,n,o){return{edge:{from:t,to:e,direction:r,labels:n,properties:o},pos:{start:er().start.offset}}},jt=function(t){return t},Et=function(t,r){return{key:t,values:r}},$t=function(){return{literal:Number(rr())}},Ot=function(){return{literal:null}},Ft=function(t,r){return[t,...r]},St=function(){return{literal:!0}},qt=function(){return{literal:!1}},kt=function(){const t=er().start.offset;return qr[t]=rr(),""},wt=function(){return qr[er().start.offset]=rr().replace(/\n$/,""),""},Nt=function(t){return{literal:t.join("")}},Rt=function(t){return{literal:t.join("")}},Jt=function(t){return{quote:'"',literal:t.join("")}},Pt=function(t){return{quote:"'",literal:t.join("")}},Gt=function(t){return{quote:"`",literal:t.join("")}},Lt=function(t){return t},Mt=function(t){return t},zt=function(t){return t},Bt=function(t){return t},It=function(t){return t},Ut=function(t){return t},Dt=function(){return"\b"},Ht=function(){return"\f"},Kt=function(){return"\n"},Qt=function(){return"\r"},Tt=function(){return"\t"},Vt=function(){return"\v"},Wt=0,Xt=0,Yt=[{line:1,column:1}],Zt=0,_t=[],tr=0;if("startRule"in e){if(!(e.startRule in i))throw new Error("Can't start parsing from rule \""+e.startRule+'".');c=i[e.startRule]}function rr(){return t.substring(Xt,Wt)}function er(){return ir(Xt,Wt)}function nr(t,r){return{type:"literal",text:t,ignoreCase:r}}function or(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function ur(r){var e,n=Yt[r];if(n)return n;for(e=r-1;!Yt[e];)e--;for(n={line:(n=Yt[e]).line,column:n.column};e<r;)10===t.charCodeAt(e)?(n.line++,n.column=1):n.column++,e++;return Yt[r]=n,n}function ir(t,r,e){var n=ur(t),o=ur(r),i={source:u,start:{offset:t,line:n.line,column:n.column},end:{offset:r,line:o.line,column:o.column}};return e&&u&&"function"==typeof u.offset&&(i.start=u.offset(i.start),i.end=u.offset(i.end)),i}function cr(t){Wt<Zt||(Wt>Zt&&(Zt=Wt,_t=[]),_t.push(t))}function ar(){var t,r,e,n,u;for(t=Wt,r=[],e=Wt,n=[],u=Ar();u!==o;)n.push(u),u=Ar();for((u=fr())!==o?e=u:(Wt=e,e=o);e!==o;){for(r.push(e),e=Wt,n=[],u=Ar();u!==o;)n.push(u),u=Ar();(u=fr())!==o?e=u:(Wt=e,e=o)}for(e=[],n=Ar();n!==o;)e.push(n),n=Ar();return Xt=t,Ct(r)}function fr(){var r,e;return r=Wt,e=function(){var r,e,n,u,i,c,a,f,s;if(r=Wt,(e=vr())!==o)if(hr()!==o)if(n=function(){var r;return t.substr(Wt,2)===l?(r=l,Wt+=2):(r=o,0===tr&&cr(D)),r===o&&(t.substr(Wt,2)===p?(r=p,Wt+=2):(r=o,0===tr&&cr(H))),r}(),n!==o)if(hr()!==o)if((u=vr())!==o){for(i=[],c=Wt,(a=hr())!==o&&(f=sr())!==o?c=f:(Wt=c,c=o);c!==o;)i.push(c),c=Wt,(a=hr())!==o&&(f=sr())!==o?c=f:(Wt=c,c=o);for(c=[],a=Wt,(f=hr())!==o&&(s=lr())!==o?a=s:(Wt=a,a=o);a!==o;)c.push(a),a=Wt,(f=hr())!==o&&(s=lr())!==o?a=s:(Wt=a,a=o);Xt=r,r=yt(e,n,u,i,c)}else Wt=r,r=o;else Wt=r,r=o;else Wt=r,r=o;else Wt=r,r=o;else Wt=r,r=o;return r}(),e===o&&(e=function(){var t,r,e,n,u,i,c;if(t=Wt,(r=vr())!==o){for(e=[],n=Wt,(u=hr())!==o&&(i=sr())!==o?n=i:(Wt=n,n=o);n!==o;)e.push(n),n=Wt,(u=hr())!==o&&(i=sr())!==o?n=i:(Wt=n,n=o);for(n=[],u=Wt,(i=hr())!==o&&(c=lr())!==o?u=c:(Wt=u,u=o);u!==o;)n.push(u),u=Wt,(i=hr())!==o&&(c=lr())!==o?u=c:(Wt=u,u=o);Xt=t,t=xt(r,e,n)}else Wt=t,t=o;return t}()),e!==o?(dr(),Sr()!==o?(Xt=r,r=bt(e)):(Wt=r,r=o)):(Wt=r,r=o),r}function sr(){var r,e,n,u;if(r=Wt,58===t.charCodeAt(Wt)?(e=a,Wt++):(e=o,0===tr&&cr(B)),e!==o){for(n=[],u=$r();u!==o;)n.push(u),u=$r();(u=vr())!==o?(Xt=r,r=jt(u)):(Wt=r,r=o)}else Wt=r,r=o;return r}function lr(){var r,e,n,u,i;if(r=Wt,e=function(){var t,r,e;if((t=mr())===o){if(t=Wt,r=[],(e=Fr())!==o)for(;e!==o;)r.push(e),e=Fr();else r=o;r!==o&&(Xt=t,r=Rt(r)),t=r}return t}(),e!==o){for(n=[],u=$r();u!==o;)n.push(u),u=$r();58===t.charCodeAt(Wt)?(u=a,Wt++):(u=o,0===tr&&cr(B)),u!==o?(hr(),i=function(){var r,e,n,u,i,c;if(r=Wt,(e=pr())!==o){for(n=[],u=Wt,hr(),44===t.charCodeAt(Wt)?(i=s,Wt++):(i=o,0===tr&&cr(U)),i!==o?(hr(),(c=pr())!==o?u=c:(Wt=u,u=o)):(Wt=u,u=o);u!==o;)n.push(u),u=Wt,hr(),44===t.charCodeAt(Wt)?(i=s,Wt++):(i=o,0===tr&&cr(U)),i!==o?(hr(),(c=pr())!==o?u=c:(Wt=u,u=o)):(Wt=u,u=o);Xt=r,r=Ft(e,n)}else Wt=r,r=o;return r}(),i!==o?(Xt=r,r=Et(e,i)):(Wt=r,r=o)):(Wt=r,r=o)}else Wt=r,r=o;return r}function pr(){var r,e,n,u;return r=Wt,e=function(){var r,e,n,u,i,c,a;if(r=Wt,45===t.charCodeAt(Wt)?(e=h,Wt++):(e=o,0===tr&&cr(K)),e===o&&(e=null),n=function(){var r,e,n,u;if(48===t.charCodeAt(Wt)?(r=A,Wt++):(r=o,0===tr&&cr(V)),r===o)if(r=Wt,k.test(t.charAt(Wt))?(e=t.charAt(Wt),Wt++):(e=o,0===tr&&cr(W)),e!==o){for(n=[],q.test(t.charAt(Wt))?(u=t.charAt(Wt),Wt++):(u=o,0===tr&&cr(T));u!==o;)n.push(u),q.test(t.charAt(Wt))?(u=t.charAt(Wt),Wt++):(u=o,0===tr&&cr(T));r=e=[e,n]}else Wt=r,r=o;return r}(),n!==o){if(u=Wt,46===t.charCodeAt(Wt)?(i=d,Wt++):(i=o,0===tr&&cr(Q)),i!==o){if(c=[],q.test(t.charAt(Wt))?(a=t.charAt(Wt),Wt++):(a=o,0===tr&&cr(T)),a!==o)for(;a!==o;)c.push(a),q.test(t.charAt(Wt))?(a=t.charAt(Wt),Wt++):(a=o,0===tr&&cr(T));else c=o;c!==o?u=i=[i,c]:(Wt=u,u=o)}else Wt=u,u=o;u===o&&(u=null),i=function(){var r,e,n,u,i;if(r=Wt,w.test(t.charAt(Wt))?(e=t.charAt(Wt),Wt++):(e=o,0===tr&&cr(X)),e!==o){if(N.test(t.charAt(Wt))?(n=t.charAt(Wt),Wt++):(n=o,0===tr&&cr(Y)),n===o&&(n=null),u=[],q.test(t.charAt(Wt))?(i=t.charAt(Wt),Wt++):(i=o,0===tr&&cr(T)),i!==o)for(;i!==o;)u.push(i),q.test(t.charAt(Wt))?(i=t.charAt(Wt),Wt++):(i=o,0===tr&&cr(T));else u=o;u!==o?r=e=[e,n,u]:(Wt=r,r=o)}else Wt=r,r=o;return r}(),i===o&&(i=null),r=e=[e,n,u,i]}else Wt=r,r=o;return r}(),e!==o?(n=Wt,tr++,u=function(){var r;return L.test(t.charAt(Wt))?(r=t.charAt(Wt),Wt++):(r=o,0===tr&&cr(gt)),r}(),tr--,u!==o?(Wt=n,n=void 0):n=o,n!==o?(Xt=r,r=$t()):(Wt=r,r=o)):(Wt=r,r=o),r===o&&(r=function(){var r,e;return r=Wt,t.substr(Wt,4)===g?(e=g,Wt+=4):(e=o,0===tr&&cr(Z)),e!==o&&(Xt=r,e=St()),(r=e)===o&&(r=Wt,t.substr(Wt,5)===v?(e=v,Wt+=5):(e=o,0===tr&&cr(_)),e!==o&&(Xt=r,e=qt()),r=e),r}(),r===o&&(r=Wt,t.substr(Wt,4)===f?(e=f,Wt+=4):(e=o,0===tr&&cr(I)),e!==o&&(Xt=r,e=Ot()),(r=e)===o&&(r=vr()))),r}function hr(){var t,r,e,n,u;for(t=Wt,r=[],e=Wt,(n=dr())===o&&(n=null),(u=Er())!==o?e=n=[n,u]:(Wt=e,e=o);e!==o;)r.push(e),e=Wt,(n=dr())===o&&(n=null),(u=Er())!==o?e=n=[n,u]:(Wt=e,e=o);if(e=[],(n=$r())!==o)for(;n!==o;)e.push(n),n=$r();else e=o;return e!==o?t=r=[r,e]:(Wt=t,t=o),t}function dr(){var t,r,e;if(t=Wt,r=[],(e=$r())!==o)for(;e!==o;)r.push(e),e=$r();else r=o;if(r!==o&&(e=gr())!==o?(Xt=t,t=kt()):(Wt=t,t=o),t===o)if(t=[],(r=$r())!==o)for(;r!==o;)t.push(r),r=$r();else t=o;return t}function Ar(){var t,r,e,n,u;for(t=Wt,r=[],e=$r();e!==o;)r.push(e),e=$r();return e=Wt,(n=gr())!==o&&(u=Sr())!==o?e=n=[n,u]:(Wt=e,e=o),e===o&&(e=Er()),e!==o?(Xt=t,t=wt()):(Wt=t,t=o),t}function gr(){var r,e,n,u;if(r=Wt,35===t.charCodeAt(Wt)?(e=m,Wt++):(e=o,0===tr&&cr(tt)),e!==o){for(n=[],u=jr();u!==o;)n.push(u),u=jr();r=e=[e,n]}else Wt=r,r=o;return r}function vr(){var t,r,e;if((t=mr())===o){if(t=Wt,r=[],(e=Or())!==o)for(;e!==o;)r.push(e),e=Or();else r=o;r!==o&&(Xt=t,r=Nt(r)),t=r}return t}function mr(){var r,e,n,u;if(r=Wt,34===t.charCodeAt(Wt)?(e=C,Wt++):(e=o,0===tr&&cr(rt)),e!==o){for(n=[],u=br();u!==o;)n.push(u),u=br();34===t.charCodeAt(Wt)?(u=C,Wt++):(u=o,0===tr&&cr(rt)),u!==o?(Xt=r,r=Jt(n)):(Wt=r,r=o)}else Wt=r,r=o;if(r===o){if(r=Wt,39===t.charCodeAt(Wt)?(e=b,Wt++):(e=o,0===tr&&cr(et)),e!==o){for(n=[],u=Cr();u!==o;)n.push(u),u=Cr();39===t.charCodeAt(Wt)?(u=b,Wt++):(u=o,0===tr&&cr(et)),u!==o?(Xt=r,r=Pt(n)):(Wt=r,r=o)}else Wt=r,r=o;if(r===o)if(r=Wt,96===t.charCodeAt(Wt)?(e=x,Wt++):(e=o,0===tr&&cr(nt)),e!==o){for(n=[],u=xr();u!==o;)n.push(u),u=xr();96===t.charCodeAt(Wt)?(u=x,Wt++):(u=o,0===tr&&cr(nt)),u!==o?(Xt=r,r=Gt(n)):(Wt=r,r=o)}else Wt=r,r=o}return r}function Cr(){var r,e,n;return r=Wt,e=Wt,tr++,39===t.charCodeAt(Wt)?(n=b,Wt++):(n=o,0===tr&&cr(et)),n===o&&(92===t.charCodeAt(Wt)?(n=y,Wt++):(n=o,0===tr&&cr(ot))),tr--,n===o?e=void 0:(Wt=e,e=o),e!==o?(t.length>Wt?(n=t.charAt(Wt),Wt++):(n=o,0===tr&&cr(ut)),n!==o?(Xt=r,r=Lt(n)):(Wt=r,r=o)):(Wt=r,r=o),r===o&&(r=Wt,92===t.charCodeAt(Wt)?(e=y,Wt++):(e=o,0===tr&&cr(ot)),e!==o&&(n=yr())!==o?(Xt=r,r=Mt(n)):(Wt=r,r=o)),r}function br(){var r,e,n;return r=Wt,e=Wt,tr++,34===t.charCodeAt(Wt)?(n=C,Wt++):(n=o,0===tr&&cr(rt)),n===o&&(92===t.charCodeAt(Wt)?(n=y,Wt++):(n=o,0===tr&&cr(ot))),tr--,n===o?e=void 0:(Wt=e,e=o),e!==o?(t.length>Wt?(n=t.charAt(Wt),Wt++):(n=o,0===tr&&cr(ut)),n!==o?(Xt=r,r=zt(n)):(Wt=r,r=o)):(Wt=r,r=o),r===o&&(r=Wt,92===t.charCodeAt(Wt)?(e=y,Wt++):(e=o,0===tr&&cr(ot)),e!==o&&(n=yr())!==o?(Xt=r,r=Bt(n)):(Wt=r,r=o)),r}function xr(){var r,e,n;return r=Wt,e=Wt,tr++,96===t.charCodeAt(Wt)?(n=x,Wt++):(n=o,0===tr&&cr(nt)),n===o&&(92===t.charCodeAt(Wt)?(n=y,Wt++):(n=o,0===tr&&cr(ot))),tr--,n===o?e=void 0:(Wt=e,e=o),e!==o?(t.length>Wt?(n=t.charAt(Wt),Wt++):(n=o,0===tr&&cr(ut)),n!==o?(Xt=r,r=It(n)):(Wt=r,r=o)):(Wt=r,r=o),r===o&&(r=Wt,92===t.charCodeAt(Wt)?(e=y,Wt++):(e=o,0===tr&&cr(ot)),e!==o&&(n=yr())!==o?(Xt=r,r=Ut(n)):(Wt=r,r=o)),r}function yr(){var r,e;return 39===t.charCodeAt(Wt)?(r=b,Wt++):(r=o,0===tr&&cr(et)),r===o&&(34===t.charCodeAt(Wt)?(r=C,Wt++):(r=o,0===tr&&cr(rt)),r===o&&(92===t.charCodeAt(Wt)?(r=y,Wt++):(r=o,0===tr&&cr(ot)),r===o&&(r=Wt,98===t.charCodeAt(Wt)?(e=j,Wt++):(e=o,0===tr&&cr(it)),e!==o&&(Xt=r,e=Dt()),(r=e)===o&&(r=Wt,102===t.charCodeAt(Wt)?(e=E,Wt++):(e=o,0===tr&&cr(ct)),e!==o&&(Xt=r,e=Ht()),(r=e)===o&&(r=Wt,110===t.charCodeAt(Wt)?(e=$,Wt++):(e=o,0===tr&&cr(at)),e!==o&&(Xt=r,e=Kt()),(r=e)===o&&(r=Wt,114===t.charCodeAt(Wt)?(e=O,Wt++):(e=o,0===tr&&cr(ft)),e!==o&&(Xt=r,e=Qt()),(r=e)===o&&(r=Wt,116===t.charCodeAt(Wt)?(e=F,Wt++):(e=o,0===tr&&cr(st)),e!==o&&(Xt=r,e=Tt()),(r=e)===o&&(r=Wt,118===t.charCodeAt(Wt)?(e=S,Wt++):(e=o,0===tr&&cr(lt)),e!==o&&(Xt=r,e=Vt()),r=e)))))))),r}function jr(){var r;return R.test(t.charAt(Wt))?(r=t.charAt(Wt),Wt++):(r=o,0===tr&&cr(pt)),r}function Er(){var r,e,n;return J.test(t.charAt(Wt))?(r=t.charAt(Wt),Wt++):(r=o,0===tr&&cr(ht)),r===o&&(r=Wt,P.test(t.charAt(Wt))?(e=t.charAt(Wt),Wt++):(e=o,0===tr&&cr(dt)),e!==o?(J.test(t.charAt(Wt))?(n=t.charAt(Wt),Wt++):(n=o,0===tr&&cr(ht)),n!==o?r=e=[e,n]:(Wt=r,r=o)):(Wt=r,r=o),r===o&&(P.test(t.charAt(Wt))?(r=t.charAt(Wt),Wt++):(r=o,0===tr&&cr(dt)))),r}function $r(){var r;return G.test(t.charAt(Wt))?(r=t.charAt(Wt),Wt++):(r=o,0===tr&&cr(At)),r}function Or(){var r;return M.test(t.charAt(Wt))?(r=t.charAt(Wt),Wt++):(r=o,0===tr&&cr(vt)),r}function Fr(){var r;return z.test(t.charAt(Wt))?(r=t.charAt(Wt),Wt++):(r=o,0===tr&&cr(mt)),r}function Sr(){var r;return(r=function(){var r,e;return r=Wt,tr++,t.length>Wt?(e=t.charAt(Wt),Wt++):(e=o,0===tr&&cr(ut)),tr--,e===o?r=void 0:(Wt=r,r=o),r}())===o&&(r=Er()),r}let qr={};if((n=c())!==o&&Wt===t.length)return n;throw n!==o&&Wt<t.length&&cr({type:"end"}),function(t,e,n){return new r(r.buildMessage(t,e),t,e,n)}(_t,Zt<t.length?t.charAt(Zt):null,Zt<t.length?ir(Zt,Zt+1):ir(Zt,Zt))}}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var u=r[n]={exports:{}};return t[n](u,u.exports,e),u.exports}(()=>{const t=e(417),r=e(602),n=e(161),o=e(98);pgFormat=(e,n,u)=>n?r.format(t.parse(e),n,u):t.parse(e).lines.map(o.formatJSONL).join("\n"),pgForBlitz=(r,e=" ",o="")=>n.format(t.parse(r),e,o)})()})();