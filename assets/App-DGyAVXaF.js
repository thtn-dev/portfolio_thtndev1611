import{r as v,j as d,g as ro,R as An}from"./index-BqmUUqRP.js";import{A as En,l as Xe,s as R,q as P,u as ao,n as _,p as qe,S as io,z as Ke,v as Pe,B as ir,_ as qt,D as oo,i as so,E as Me,w as na,y as co,F as lo,H as uo,x as fo,I as On,f as mo,J}from"./chunk-37N6GCLA-BXqlNz7n.js";function vo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var po=vo();function ra(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function go(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function Kt(...e){return t=>{e.forEach(n=>{go(n,t)})}}function ho(...e){return v.useMemo(()=>Kt(...e),e)}var Zt={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},Te={scale:{enter:{scale:1},exit:{scale:.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function Qt(e){var t;switch((t=e==null?void 0:e.direction)!=null?t:"right"){case"right":return Te.slideRight;case"left":return Te.slideLeft;case"bottom":return Te.slideDown;case"top":return Te.slideUp;default:return Te.slideRight}}var or={enter:{duration:.2,ease:Zt.easeOut},exit:{duration:.1,ease:Zt.easeIn}},xt={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.exit})},bo={enter:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:1,transition:(r=e==null?void 0:e.enter)!=null?r:xt.enter(or.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:0,transition:(r=e==null?void 0:e.exit)!=null?r:xt.exit(or.exit,n),transitionEnd:t==null?void 0:t.exit}}},aa={initial:"exit",animate:"enter",exit:"exit",variants:bo},yo=v.forwardRef(function(t,n){const{unmountOnExit:r,in:a,className:i,transition:o,transitionEnd:s,delay:c,...l}=t,u=a||r?"enter":"exit",f=r?a&&r:!0,m={transition:o,transitionEnd:s,delay:c};return d.jsx(En,{custom:m,children:f&&d.jsx(Xe.div,{ref:n,className:R("chakra-fade",i),custom:m,...aa,animate:u,...l})})});yo.displayName="Fade";var sr={exit:{duration:.15,ease:Zt.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},xo={exit:({direction:e,transition:t,transitionEnd:n,delay:r})=>{var a;const{exit:i}=Qt({direction:e});return{...i,transition:(a=t==null?void 0:t.exit)!=null?a:xt.exit(sr.exit,r),transitionEnd:n==null?void 0:n.exit}},enter:({direction:e,transitionEnd:t,transition:n,delay:r})=>{var a;const{enter:i}=Qt({direction:e});return{...i,transition:(a=n==null?void 0:n.enter)!=null?a:xt.enter(sr.enter,r),transitionEnd:t==null?void 0:t.enter}}},ia=v.forwardRef(function(t,n){const{direction:r="right",style:a,unmountOnExit:i,in:o,className:s,transition:c,transitionEnd:l,delay:u,motionProps:f,...m}=t,g=Qt({direction:r}),h=Object.assign({position:"fixed"},g.position,a),p=i?o&&i:!0,b=o||i?"enter":"exit",w={transitionEnd:l,transition:c,direction:r,delay:u};return d.jsx(En,{custom:w,children:p&&d.jsx(Xe.div,{...m,ref:n,initial:"exit",className:R("chakra-slide",s),animate:b,exit:"exit",custom:w,variants:xo,style:h,...f})})});ia.displayName="Slide";var Jt=P(function(t,n){const{htmlWidth:r,htmlHeight:a,alt:i,...o}=t;return d.jsx("img",{width:r,height:a,ref:n,alt:i,...o})});Jt.displayName="NativeImage";function wo(e){const{loading:t,src:n,srcSet:r,onLoad:a,onError:i,crossOrigin:o,sizes:s,ignoreFallback:c}=e,[l,u]=v.useState("pending");v.useEffect(()=>{u(n?"loading":"pending")},[n]);const f=v.useRef(),m=v.useCallback(()=>{if(!n)return;g();const h=new Image;h.src=n,o&&(h.crossOrigin=o),r&&(h.srcset=r),s&&(h.sizes=s),t&&(h.loading=t),h.onload=p=>{g(),u("loaded"),a==null||a(p)},h.onerror=p=>{g(),u("failed"),i==null||i(p)},f.current=h},[n,o,r,s,a,i,t]),g=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return ao(()=>{if(!c)return l==="loading"&&m(),()=>{g()}},[l,m,c]),c?"loaded":l}var ko=(e,t)=>e!=="loaded"&&t==="beforeLoadOrError"||e==="failed"&&t==="onError";function So(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}var wt=P(function(t,n){const{fallbackSrc:r,fallback:a,src:i,srcSet:o,align:s,fit:c,loading:l,ignoreFallback:u,crossOrigin:f,fallbackStrategy:m="beforeLoadOrError",referrerPolicy:g,...h}=t,p=r!==void 0||a!==void 0,b=l!=null||u||!p,w=wo({...t,crossOrigin:f,ignoreFallback:b}),k=ko(w,m),S={ref:n,objectFit:c,objectPosition:s,...b?h:So(h,["onError","onLoad"])};return k?a||d.jsx(_.img,{as:Jt,className:"chakra-image__placeholder",src:r,...S}):d.jsx(_.img,{as:Jt,src:i,srcSet:o,crossOrigin:f,loading:l,referrerPolicy:g,className:"chakra-image",...S})});wt.displayName="Image";function Co(e){return v.Children.toArray(e).filter(t=>v.isValidElement(t))}var[Cf,Ao]=qe({strict:!1,name:"ButtonGroupContext"});function Eo(e){const[t,n]=v.useState(!e);return{ref:v.useCallback(i=>{i&&n(i.tagName==="BUTTON")},[]),type:t?"button":void 0}}function en(e){const{children:t,className:n,...r}=e,a=v.isValidElement(t)?v.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=R("chakra-button__icon",n);return d.jsx(_.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:i,children:a})}en.displayName="ButtonIcon";function tn(e){const{label:t,placement:n,spacing:r="0.5rem",children:a=d.jsx(io,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:o,...s}=e,c=R("chakra-button__spinner",i),l=n==="start"?"marginEnd":"marginStart",u=v.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[l]:t?r:0,fontSize:"1em",lineHeight:"normal",...o}),[o,t,l,r]);return d.jsx(_.div,{className:c,...s,__css:u,children:a})}tn.displayName="ButtonSpinner";var oa=P((e,t)=>{const n=Ao(),r=Ke("Button",{...n,...e}),{isDisabled:a=n==null?void 0:n.isDisabled,isLoading:i,isActive:o,children:s,leftIcon:c,rightIcon:l,loadingText:u,iconSpacing:f="0.5rem",type:m,spinner:g,spinnerPlacement:h="start",className:p,as:b,...w}=Pe(e),k=v.useMemo(()=>{const T={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:T}}},[r,n]),{ref:S,type:A}=Eo(b),C={rightIcon:l,leftIcon:c,iconSpacing:f,children:s};return d.jsxs(_.button,{ref:ho(t,S),as:b,type:m??A,"data-active":ir(o),"data-loading":ir(i),__css:k,className:R("chakra-button",p),...w,disabled:a||i,children:[i&&h==="start"&&d.jsx(tn,{className:"chakra-button__spinner--start",label:u,placement:"start",spacing:f,children:g}),i?u||d.jsx(_.span,{opacity:0,children:d.jsx(cr,{...C})}):d.jsx(cr,{...C}),i&&h==="end"&&d.jsx(tn,{className:"chakra-button__spinner--end",label:u,placement:"end",spacing:f,children:g})]})});oa.displayName="Button";function cr(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return d.jsxs(d.Fragment,{children:[t&&d.jsx(en,{marginEnd:a,children:t}),r,n&&d.jsx(en,{marginStart:a,children:n})]})}var vt=P((e,t)=>{const{icon:n,children:r,isRound:a,"aria-label":i,...o}=e,s=n||r,c=v.isValidElement(s)?v.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return d.jsx(oa,{padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":i,...o,children:c})});vt.displayName="IconButton";function Oo(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var sa={exports:{}},Po="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",No=Po,Io=No;function ca(){}function la(){}la.resetWarningCache=ca;var _o=function(){function e(r,a,i,o,s,c){if(c!==Io){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:la,resetWarningCache:ca};return n.PropTypes=n,n};sa.exports=_o();var To=sa.exports;const E=ro(To);var nn="data-focus-lock",ua="data-focus-lock-disabled",jo="data-no-focus-lock",Mo="data-autofocus-inside",Fo="data-no-autofocus";function Rt(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ro(e,t){var n=v.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var Lo=typeof window<"u"?v.useLayoutEffect:v.useEffect,lr=new WeakMap;function fa(e,t){var n=Ro(null,function(r){return e.forEach(function(a){return Rt(a,r)})});return Lo(function(){var r=lr.get(n);if(r){var a=new Set(r),i=new Set(e),o=n.current;a.forEach(function(s){i.has(s)||Rt(s,null)}),i.forEach(function(s){a.has(s)||Rt(s,o)})}lr.set(n,e)},[e]),n}var Lt={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},H=function(){return H=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},H.apply(this,arguments)};function da(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function Do(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function ma(e){return e}function va(e,t){t===void 0&&(t=ma);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var o=t(i,r);return n.push(o),function(){n=n.filter(function(s){return s!==o})}},assignSyncMedium:function(i){for(r=!0;n.length;){var o=n;n=[],o.forEach(i)}n={push:function(s){return i(s)},filter:function(){return n}}},assignMedium:function(i){r=!0;var o=[];if(n.length){var s=n;n=[],s.forEach(i),o=n}var c=function(){var u=o;o=[],u.forEach(i)},l=function(){return Promise.resolve().then(c)};l(),n={push:function(u){o.push(u),l()},filter:function(u){return o=o.filter(u),n}}}};return a}function Pn(e,t){return t===void 0&&(t=ma),va(e,t)}function pa(e){e===void 0&&(e={});var t=va(null);return t.options=H({async:!0,ssr:!1},e),t}var ga=function(e){var t=e.sideCar,n=da(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return v.createElement(r,H({},n))};ga.isSideCarExport=!0;function zo(e,t){return e.useMedium(t),ga}var ha=Pn({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),ba=Pn(),Wo=Pn(),Bo=pa({async:!0,ssr:typeof document<"u"}),$o=v.createContext(void 0),Ho=[],Nn=v.forwardRef(function(t,n){var r,a=v.useState(),i=a[0],o=a[1],s=v.useRef(),c=v.useRef(!1),l=v.useRef(null),u=v.useState({}),f=u[1],m=t.children,g=t.disabled,h=g===void 0?!1:g,p=t.noFocusGuards,b=p===void 0?!1:p,w=t.persistentFocus,k=w===void 0?!1:w,S=t.crossFrame,A=S===void 0?!0:S,C=t.autoFocus,T=C===void 0?!0:C;t.allowTextSelection;var M=t.group,L=t.className,O=t.whiteList,G=t.hasPositiveIndices,fe=t.shards,jt=fe===void 0?Ho:fe,er=t.as,Bi=er===void 0?"div":er,tr=t.lockProps,$i=tr===void 0?{}:tr,Hi=t.sideCar,nr=t.returnFocus,et=nr===void 0?!1:nr,Ui=t.focusOptions,Mt=t.onActivation,Ft=t.onDeactivation,Yi=v.useState({}),Gi=Yi[0],Vi=v.useCallback(function(V){var de=V.captureFocusRestore;if(!l.current){var me,re=(me=document)==null?void 0:me.activeElement;l.current=re,re!==document.body&&(l.current=de(re))}s.current&&Mt&&Mt(s.current),c.current=!0,f()},[Mt]),Xi=v.useCallback(function(){c.current=!1,Ft&&Ft(s.current),f()},[Ft]),qi=v.useCallback(function(V){var de=l.current;if(de){var me=(typeof de=="function"?de():de)||document.body,re=typeof et=="function"?et(me):et;if(re){var ar=typeof re=="object"?re:void 0;l.current=null,V?Promise.resolve().then(function(){return me.focus(ar)}):me.focus(ar)}}},[et]),Ki=v.useCallback(function(V){c.current&&ha.useMedium(V)},[]),Zi=ba.useMedium,Qi=v.useCallback(function(V){s.current!==V&&(s.current=V,o(V))},[]),Ji=qt((r={},r[ua]=h&&"disabled",r[nn]=M,r),$i),rr=b!==!0,eo=rr&&b!=="tail",to=fa([n,Qi]),no=v.useMemo(function(){return{observed:s,shards:jt,enabled:!h,active:c.current}},[h,c.current,jt,i]);return v.createElement(v.Fragment,null,rr&&[v.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:h?-1:0,style:Lt}),G?v.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:h?-1:1,style:Lt}):null],!h&&v.createElement(Hi,{id:Gi,sideCar:Bo,observed:i,disabled:h,persistentFocus:k,crossFrame:A,autoFocus:T,whiteList:O,shards:jt,onActivation:Vi,onDeactivation:Xi,returnFocus:qi,focusOptions:Ui}),v.createElement(Bi,qt({ref:to},Ji,{className:L,onBlur:Zi,onFocus:Ki}),v.createElement($o.Provider,{value:no},m)),eo&&v.createElement("div",{"data-focus-guard":!0,tabIndex:h?-1:0,style:Lt}))});Nn.propTypes={};function rn(e,t){return rn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},rn(e,t)}function Uo(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,rn(e,t)}function De(e){"@babel/helpers - typeof";return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},De(e)}function Yo(e,t){if(De(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(De(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Go(e){var t=Yo(e,"string");return De(t)=="symbol"?t:t+""}function Vo(e,t,n){return(t=Go(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xo(e,t){function n(r){return r.displayName||r.name||"Component"}return function(a){var i=[],o;function s(){o=e(i.map(function(l){return l.props})),t(o)}var c=function(l){Uo(u,l);function u(){return l.apply(this,arguments)||this}u.peek=function(){return o};var f=u.prototype;return f.componentDidMount=function(){i.push(this),s()},f.componentDidUpdate=function(){s()},f.componentWillUnmount=function(){var g=i.indexOf(this);i.splice(g,1),s()},f.render=function(){return An.createElement(a,this.props)},u}(v.PureComponent);return Vo(c,"displayName","SideEffect("+n(a)+")"),c}}var Y=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},ce=function(e){return Array.isArray(e)?e:[e]},ya=function(e){return Array.isArray(e)?e[0]:e},qo=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},xa=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},wa=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Ko=function(e){return e.hasAttribute("inert")},Zo=function(e,t){return!e||wa(e)||!qo(e)&&!Ko(e)&&t(xa(e))},ka=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Zo(t,ka.bind(void 0,e));return e.set(t,r),r},Qo=function(e,t){return e&&!wa(e)?ts(e)?t(xa(e)):!1:!0},Sa=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Qo(t,Sa.bind(void 0,e));return e.set(t,r),r},Ca=function(e){return e.dataset},Jo=function(e){return e.tagName==="BUTTON"},Aa=function(e){return e.tagName==="INPUT"},Ea=function(e){return Aa(e)&&e.type==="radio"},es=function(e){return!((Aa(e)||Jo(e))&&(e.type==="hidden"||e.disabled))},ts=function(e){var t=e.getAttribute(Fo);return![!0,"true",""].includes(t)},In=function(e){var t;return!!(e&&(!((t=Ca(e))===null||t===void 0)&&t.focusGuard))},an=function(e){return!In(e)},ns=function(e){return!!e},rs=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),a=n-r,i=e.index-t.index;if(a){if(!n)return 1;if(!r)return-1}return a||i},as=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},_n=function(e,t,n){return Y(e).map(function(r,a){var i=as(r);return{node:r,index:a,tabIndex:n&&i===-1?(r.dataset||{}).focusGuard?0:-1:i}}).filter(function(r){return!t||r.tabIndex>=0}).sort(rs)},is=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Tn=is.join(","),os="".concat(Tn,", [data-focus-guard]"),Oa=function(e,t){return Y((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?os:Tn)?[r]:[],Oa(r))},[])},ss=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?Ee([e.contentDocument.body],t):[e]},Ee=function(e,t){return e.reduce(function(n,r){var a,i=Oa(r,t),o=(a=[]).concat.apply(a,i.map(function(s){return ss(s,t)}));return n.concat(o,r.parentNode?Y(r.parentNode.querySelectorAll(Tn)).filter(function(s){return s===r}):[])},[])},cs=function(e){var t=e.querySelectorAll("[".concat(Mo,"]"));return Y(t).map(function(n){return Ee([n])}).reduce(function(n,r){return n.concat(r)},[])},jn=function(e,t){return Y(e).filter(function(n){return ka(t,n)}).filter(function(n){return es(n)})},ur=function(e,t){return t===void 0&&(t=new Map),Y(e).filter(function(n){return Sa(t,n)})},Mn=function(e,t,n){return _n(jn(Ee(e,n),t),!0,n)},kt=function(e,t){return _n(jn(Ee(e),t),!1)},ls=function(e,t){return jn(cs(e),t)},se=function(e,t){return e.shadowRoot?se(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:Y(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var a=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return a?se(a,t):!1}return se(n,t)})},us=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var a=r+1;a<n;a+=1){var i=e[r].compareDocumentPosition(e[a]);(i&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(a),(i&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(o,s){return!t.has(s)})},Pa=function(e){return e.parentNode?Pa(e.parentNode):e},Fn=function(e){var t=ce(e);return t.filter(Boolean).reduce(function(n,r){var a=r.getAttribute(nn);return n.push.apply(n,a?us(Y(Pa(r).querySelectorAll("[".concat(nn,'="').concat(a,'"]:not([').concat(ua,'="disabled"])')))):[r]),n},[])},fs=function(e){try{return e()}catch{return}},ze=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?ze(t.shadowRoot):t instanceof HTMLIFrameElement&&fs(function(){return t.contentWindow.document})?ze(t.contentWindow.document):t}},ds=function(e,t){return e===t},ms=function(e,t){return!!Y(e.querySelectorAll("iframe")).some(function(n){return ds(n,t)})},Na=function(e,t){return t===void 0&&(t=ze(ya(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Fn(e).some(function(n){return se(n,t)||ms(n,t)})},vs=function(e){e===void 0&&(e=document);var t=ze(e);return t?Y(e.querySelectorAll("[".concat(jo,"]"))).some(function(n){return se(n,t)}):!1},ps=function(e,t){return t.filter(Ea).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},Rn=function(e,t){return Ea(e)&&e.name?ps(e,t):e},gs=function(e){var t=new Set;return e.forEach(function(n){return t.add(Rn(n,e))}),e.filter(function(n){return t.has(n)})},fr=function(e){return e[0]&&e.length>1?Rn(e[0],e):e[0]},dr=function(e,t){return e.indexOf(Rn(t,e))},on="NEW_FOCUS",hs=function(e,t,n,r,a){var i=e.length,o=e[0],s=e[i-1],c=In(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,u=a?n.indexOf(a):l,f=a?e.indexOf(a):-1;if(l===-1)return f!==-1?f:on;if(f===-1)return on;var m=l-u,g=n.indexOf(o),h=n.indexOf(s),p=gs(n),b=r!==void 0?p.indexOf(r):-1,w=b-(a?p.indexOf(a):l);if(!m&&f>=0||t.length===0)return f;var k=dr(e,t[0]),S=dr(e,t[t.length-1]);if(l<=g&&c&&Math.abs(m)>1)return S;if(l>=h&&c&&Math.abs(m)>1)return k;if(m&&Math.abs(w)>1)return f;if(l<=g)return S;if(l>h)return k;if(m)return Math.abs(m)>1?f:(i+f+m)%i}},bs=function(e){return function(t){var n,r=(n=Ca(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},mr=function(e,t,n){var r=e.map(function(i){var o=i.node;return o}),a=ur(r.filter(bs(n)));return a&&a.length?fr(a):fr(ur(t))},sn=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&sn(e.parentNode.host||e.parentNode,t),t},Dt=function(e,t){for(var n=sn(e),r=sn(t),a=0;a<n.length;a+=1){var i=n[a];if(r.indexOf(i)>=0)return i}return!1},Ia=function(e,t,n){var r=ce(e),a=ce(t),i=r[0],o=!1;return a.filter(Boolean).forEach(function(s){o=Dt(o||s,s)||o,n.filter(Boolean).forEach(function(c){var l=Dt(i,c);l&&(!o||se(l,o)?o=l:o=Dt(l,o))})}),o},vr=function(e,t){return e.reduce(function(n,r){return n.concat(ls(r,t))},[])},ys=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(ns)},xs=function(e,t){var n=ze(ce(e).length>0?document:ya(e).ownerDocument),r=Fn(e).filter(an),a=Ia(n||e,e,r),i=new Map,o=kt(r,i),s=o.filter(function(h){var p=h.node;return an(p)});if(s[0]){var c=kt([a],i).map(function(h){var p=h.node;return p}),l=ys(c,s),u=l.map(function(h){var p=h.node;return p}),f=l.filter(function(h){var p=h.tabIndex;return p>=0}).map(function(h){var p=h.node;return p}),m=hs(u,f,c,n,t);if(m===on){var g=mr(o,f,vr(r,i))||mr(o,u,vr(r,i));if(g)return{node:g};console.warn("focus-lock: cannot find any node to move focus into");return}return m===void 0?m:l[m]}},ws=function(e){var t=Fn(e).filter(an),n=Ia(e,e,t),r=_n(Ee([n],!0),!0,!0),a=Ee(t,!1);return r.map(function(i){var o=i.node,s=i.index;return{node:o,index:s,lockItem:a.indexOf(o)>=0,guard:In(o)}})},Ln=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},zt=0,Wt=!1,_a=function(e,t,n){n===void 0&&(n={});var r=xs(e,t);if(!Wt&&r){if(zt>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),Wt=!0,setTimeout(function(){Wt=!1},1);return}zt++,Ln(r.node,n.focusOptions),zt--}};function je(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var ks=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:je(n),parent:je(n.parentElement),left:je(n.previousElementSibling),right:je(n.nextElementSibling)}),n=n.parentElement;return{element:je(e),stack:t,ownerDocument:e.ownerDocument}},Ss=function(e){var t,n,r,a,i;if(e)for(var o=e.stack,s=e.ownerDocument,c=new Map,l=0,u=o;l<u.length;l++){var f=u[l],m=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(m&&s.contains(m)){for(var g=(n=f.left)===null||n===void 0?void 0:n.call(f),h=f.current(),p=m.contains(h)?h:void 0,b=(r=f.right)===null||r===void 0?void 0:r.call(f),w=Mn([m],c),k=(i=(a=p??(g==null?void 0:g.nextElementSibling))!==null&&a!==void 0?a:b)!==null&&i!==void 0?i:g;k;){for(var S=0,A=w;S<A.length;S++){var C=A[S];if(k!=null&&k.contains(C.node))return C.node}k=k.nextElementSibling}if(w.length)return w[0].node}}},Cs=function(e){var t=ks(e);return function(){return Ss(t)}},As=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=ce(t);if(r.every(function(o){return!se(o,e)}))return console.error("Active element is not contained in the scope"),{};var a=n?Mn(r,new Map):kt(r,new Map),i=a.findIndex(function(o){var s=o.node;return s===e});if(i!==-1)return{prev:a[i-1],next:a[i+1],first:a[0],last:a[a.length-1]}},Es=function(e,t){var n=t?Mn(ce(e),new Map):kt(ce(e),new Map);return{first:n[0],last:n[n.length-1]}},Os=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},Ta=function(e,t,n){t===void 0&&(t={});var r=Os(t),a=As(e,r.scope,r.onlyTabbable);if(a){var i=n(a,r.cycle);i&&Ln(i.node,r.focusOptions)}},Ps=function(e,t){t===void 0&&(t={}),Ta(e,t,function(n,r){var a=n.next,i=n.first;return a||r&&i})},Ns=function(e,t){t===void 0&&(t={}),Ta(e,t,function(n,r){var a=n.prev,i=n.last;return a||r&&i})},ja=function(e,t,n){var r,a=Es(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),i=a[n];i&&Ln(i.node,t.focusOptions)},Is=function(e,t){t===void 0&&(t={}),ja(e,t,"first")},_s=function(e,t){t===void 0&&(t={}),ja(e,t,"last")};function Dn(e){setTimeout(e,1)}var Ts=function(t){return t&&"current"in t?t.current:t},js=function(){return document&&document.activeElement===document.body},Ms=function(){return js()||vs()},we=null,he=null,ke=null,We=!1,Fs=function(){return!0},Rs=function(t){return(we.whiteList||Fs)(t)},Ls=function(t,n){ke={observerNode:t,portaledElement:n}},Ds=function(t){return ke&&ke.portaledElement===t};function pr(e,t,n,r){var a=null,i=e;do{var o=r[i];if(o.guard)o.node.dataset.focusAutoGuard&&(a=o);else if(o.lockItem){if(i!==e)return;a=null}else break}while((i+=n)!==t);a&&(a.node.tabIndex=0)}var zs=function(t){return t?!!We:We==="meanwhile"},Ws=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Bs=function(t,n){return n.some(function(r){return Ws(t,r,r)})},St=function(){var t=!1;if(we){var n=we,r=n.observed,a=n.persistentFocus,i=n.autoFocus,o=n.shards,s=n.crossFrame,c=n.focusOptions,l=r||ke&&ke.portaledElement,u=document&&document.activeElement;if(l){var f=[l].concat(o.map(Ts).filter(Boolean));if((!u||Rs(u))&&(a||zs(s)||!Ms()||!he&&i)&&(l&&!(Na(f)||u&&Bs(u,f)||Ds(u))&&(document&&!he&&u&&!i?(u.blur&&u.blur(),document.body.focus()):(t=_a(f,he,{focusOptions:c}),ke={})),We=!1,he=document&&document.activeElement),document&&u!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var m=document&&document.activeElement,g=ws(f),h=g.map(function(p){var b=p.node;return b}).indexOf(m);h>-1&&(g.filter(function(p){var b=p.guard,w=p.node;return b&&w.dataset.focusAutoGuard}).forEach(function(p){var b=p.node;return b.removeAttribute("tabIndex")}),pr(h,g.length,1,g),pr(h,-1,-1,g))}}}return t},Ma=function(t){St()&&t&&(t.stopPropagation(),t.preventDefault())},zn=function(){return Dn(St)},$s=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Ls(r,n)},Hs=function(){return null},Fa=function(){We="just",Dn(function(){We="meanwhile"})},Us=function(){document.addEventListener("focusin",Ma),document.addEventListener("focusout",zn),window.addEventListener("blur",Fa)},Ys=function(){document.removeEventListener("focusin",Ma),document.removeEventListener("focusout",zn),window.removeEventListener("blur",Fa)};function Gs(e){return e.filter(function(t){var n=t.disabled;return!n})}var Ra={moveFocusInside:_a,focusInside:Na,focusNextElement:Ps,focusPrevElement:Ns,focusFirstElement:Is,focusLastElement:_s,captureFocusRestore:Cs};function Vs(e){var t=e.slice(-1)[0];t&&!we&&Us();var n=we,r=n&&t&&t.id===n.id;we=t,n&&!r&&(n.onDeactivation(),e.filter(function(a){var i=a.id;return i===n.id}).length||n.returnFocus(!t)),t?(he=null,(!r||n.observed!==t.observed)&&t.onActivation(Ra),St(),Dn(St)):(Ys(),he=null)}ha.assignSyncMedium($s);ba.assignMedium(zn);Wo.assignMedium(function(e){return e(Ra)});const Xs=Xo(Gs,Vs)(Hs);var cn=v.forwardRef(function(t,n){return v.createElement(Nn,qt({sideCar:Xs,ref:n},t))}),La=Nn.propTypes||{};La.sideCar;Oo(La,["sideCar"]);cn.propTypes={};function qs(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function Ks(e){var t;if(!qs(e))return!1;const n=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof n.HTMLElement}var Zs=e=>e.hasAttribute("tabindex");function Qs(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function Da(e){return e.parentElement&&Da(e.parentElement)?!0:e.hidden}function Js(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function ec(e){if(!Ks(e)||Da(e)||Qs(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in r?r[t]():Js(e)?!0:Zs(e)}var tc=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],nc=tc.join(),rc=e=>e.offsetWidth>0&&e.offsetHeight>0;function ac(e){const t=Array.from(e.querySelectorAll(nc));return t.unshift(e),t.filter(n=>ec(n)&&rc(n))}var gr,ic=(gr=cn.default)!=null?gr:cn,za=e=>{const{initialFocusRef:t,finalFocusRef:n,contentRef:r,restoreFocus:a,children:i,isDisabled:o,autoFocus:s,persistentFocus:c,lockFocusAcrossFrames:l}=e,u=v.useCallback(()=>{t!=null&&t.current?t.current.focus():r!=null&&r.current&&ac(r.current).length===0&&requestAnimationFrame(()=>{var h;(h=r.current)==null||h.focus()})},[t,r]),f=v.useCallback(()=>{var g;(g=n==null?void 0:n.current)==null||g.focus()},[n]),m=a&&!n;return d.jsx(ic,{crossFrame:l,persistentFocus:c,autoFocus:s,disabled:o,onActivation:u,onDeactivation:f,returnFocus:m,children:i})};za.displayName="FocusLock";var oc=po?v.useLayoutEffect:v.useEffect;function hr(e,t=[]){const n=v.useRef(e);return oc(()=>{n.current=e}),v.useCallback((...r)=>{var a;return(a=n.current)==null?void 0:a.call(n,...r)},t)}function sc(e,t){const n=v.useId();return v.useMemo(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}function cc(e,t){const n=e!==void 0;return[n,n&&typeof e<"u"?e:t]}function lc(e={}){const{onClose:t,onOpen:n,isOpen:r,id:a}=e,i=hr(n),o=hr(t),[s,c]=v.useState(e.defaultIsOpen||!1),[l,u]=cc(r,s),f=sc(a,"disclosure"),m=v.useCallback(()=>{l||c(!1),o==null||o()},[l,o]),g=v.useCallback(()=>{l||c(!0),i==null||i()},[l,i]),h=v.useCallback(()=>{(u?m:g)()},[u,g,m]);return{isOpen:!!u,onOpen:g,onClose:m,onToggle:h,isControlled:l,getButtonProps:(p={})=>({...p,"aria-expanded":u,"aria-controls":f,onClick:oo(p.onClick,h)}),getDisclosureProps:(p={})=>({...p,hidden:!u,id:f})}}var Wa=P(function(t,n){const r=Ke("Link",t),{className:a,isExternal:i,...o}=Pe(t);return d.jsx(_.a,{target:i?"_blank":void 0,rel:i?"noopener":void 0,ref:n,className:R("chakra-link",a),...o,__css:r})});Wa.displayName="Link";var Wn=P(function(t,n){const{templateAreas:r,gap:a,rowGap:i,columnGap:o,column:s,row:c,autoFlow:l,autoRows:u,templateRows:f,autoColumns:m,templateColumns:g,...h}=t,p={display:"grid",gridTemplateAreas:r,gridGap:a,gridRowGap:i,gridColumnGap:o,gridAutoColumns:m,gridColumn:s,gridRow:c,gridAutoFlow:l,gridAutoRows:u,gridTemplateRows:f,gridTemplateColumns:g};return d.jsx(_.div,{ref:n,__css:p,...h})});Wn.displayName="Grid";function Ba(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):so(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}var ae=P(function(t,n){const r=Ke("Text",t),{className:a,align:i,decoration:o,casing:s,...c}=Pe(t),l=ra({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return d.jsx(_.p,{ref:n,className:R("chakra-text",t.className),...l,...c,__css:r})});ae.displayName="Text";var $a=e=>d.jsx(_.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});$a.displayName="StackItem";function uc(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Ba(n,a=>r[a])}}var Be=P((e,t)=>{const{isInline:n,direction:r,align:a,justify:i,spacing:o="0.5rem",wrap:s,children:c,divider:l,className:u,shouldWrapChildren:f,...m}=e,g=n?"row":r??"column",h=v.useMemo(()=>uc({spacing:o,direction:g}),[o,g]),p=!!l,b=!f&&!p,w=v.useMemo(()=>{const S=Co(c);return b?S:S.map((A,C)=>{const T=typeof A.key<"u"?A.key:C,M=C+1===S.length,O=f?d.jsx($a,{children:A},T):A;if(!p)return O;const G=v.cloneElement(l,{__css:h}),fe=M?null:G;return d.jsxs(v.Fragment,{children:[O,fe]},T)})},[l,h,p,b,f,c]),k=R("chakra-stack",u);return d.jsx(_.div,{ref:t,display:"flex",alignItems:a,justifyContent:i,flexDirection:g,flexWrap:s,gap:p?void 0:o,className:k,...m,children:w})});Be.displayName="Stack";var Ha=P((e,t)=>d.jsx(Be,{align:"center",...e,direction:"column",ref:t}));Ha.displayName="VStack";var Ua=P((e,t)=>d.jsx(Be,{align:"center",...e,direction:"row",ref:t}));Ua.displayName="HStack";function br(e){return Ba(e,t=>t==="auto"?"auto":`span ${t}/span ${t}`)}var Se=P(function(t,n){const{area:r,colSpan:a,colStart:i,colEnd:o,rowEnd:s,rowSpan:c,rowStart:l,...u}=t,f=ra({gridArea:r,gridColumn:br(a),gridRow:br(c),gridColumnStart:i,gridColumnEnd:o,gridRowStart:l,gridRowEnd:s});return d.jsx(_.div,{ref:n,__css:f,...u})});Se.displayName="GridItem";var D=_("div");D.displayName="Box";var Ya=P(function(t,n){const{size:r,centerContent:a=!0,...i}=t,o=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return d.jsx(D,{ref:n,boxSize:r,__css:{...o,flexShrink:0,flexGrow:0},...i})});Ya.displayName="Square";var fc=P(function(t,n){const{size:r,...a}=t;return d.jsx(Ya,{size:r,ref:n,borderRadius:"9999px",...a})});fc.displayName="Circle";var Ga=P(function(t,n){const{className:r,centerContent:a,...i}=Pe(t),o=Ke("Container",t);return d.jsx(_.div,{ref:n,className:R("chakra-container",r),...i,__css:{...o,...a&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});Ga.displayName="Container";var Va=P(function(t,n){const{borderLeftWidth:r,borderBottomWidth:a,borderTopWidth:i,borderRightWidth:o,borderWidth:s,borderStyle:c,borderColor:l,...u}=Ke("Divider",t),{className:f,orientation:m="horizontal",__css:g,...h}=Pe(t),p={vertical:{borderLeftWidth:r||o||s||"1px",height:"100%"},horizontal:{borderBottomWidth:a||i||s||"1px",width:"100%"}};return d.jsx(_.hr,{ref:n,"aria-orientation":m,...h,__css:{...u,border:"0",borderColor:l,borderStyle:c,...p[m],...g},className:R("chakra-divider",f)})});Va.displayName="Divider";var $e=P(function(t,n){const{direction:r,align:a,justify:i,wrap:o,basis:s,grow:c,shrink:l,...u}=t,f={display:"flex",flexDirection:r,alignItems:a,justifyContent:i,flexWrap:o,flexBasis:s,flexGrow:c,flexShrink:l};return d.jsx(_.div,{ref:n,__css:f,...u})});$e.displayName="Flex";var dc=Object.defineProperty,mc=(e,t,n)=>t in e?dc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vc=(e,t,n)=>(mc(e,t+"",n),n),pc=class{constructor(){vc(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},ln=new pc;function Xa(e,t){const[n,r]=v.useState(0);return v.useEffect(()=>{const a=e.current;if(a){if(t){const i=ln.add(a);r(i)}return()=>{ln.remove(a),r(0)}}},[t,e]),n}var gc=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},ve=new WeakMap,tt=new WeakMap,nt={},Bt=0,qa=function(e){return e&&(e.host||qa(e.parentNode))},hc=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=qa(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},bc=function(e,t,n,r){var a=hc(t,Array.isArray(e)?e:[e]);nt[n]||(nt[n]=new WeakMap);var i=nt[n],o=[],s=new Set,c=new Set(a),l=function(f){!f||s.has(f)||(s.add(f),l(f.parentNode))};a.forEach(l);var u=function(f){!f||c.has(f)||Array.prototype.forEach.call(f.children,function(m){if(s.has(m))u(m);else try{var g=m.getAttribute(r),h=g!==null&&g!=="false",p=(ve.get(m)||0)+1,b=(i.get(m)||0)+1;ve.set(m,p),i.set(m,b),o.push(m),p===1&&h&&tt.set(m,!0),b===1&&m.setAttribute(n,"true"),h||m.setAttribute(r,"true")}catch(w){console.error("aria-hidden: cannot operate on ",m,w)}})};return u(t),s.clear(),Bt++,function(){o.forEach(function(f){var m=ve.get(f)-1,g=i.get(f)-1;ve.set(f,m),i.set(f,g),m||(tt.has(f)||f.removeAttribute(r),tt.delete(f)),g||f.removeAttribute(n)}),Bt--,Bt||(ve=new WeakMap,ve=new WeakMap,tt=new WeakMap,nt={})}},yc=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=gc(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),bc(r,a,n,"aria-hidden")):function(){return null}};function xc(e){const{isOpen:t,onClose:n,id:r,closeOnOverlayClick:a=!0,closeOnEsc:i=!0,useInert:o=!0,onOverlayClick:s,onEsc:c}=e,l=v.useRef(null),u=v.useRef(null),[f,m,g]=kc(r,"chakra-modal","chakra-modal--header","chakra-modal--body");wc(l,t&&o);const h=Xa(l,t),p=v.useRef(null),b=v.useCallback(O=>{p.current=O.target},[]),w=v.useCallback(O=>{O.key==="Escape"&&(O.stopPropagation(),i&&(n==null||n()),c==null||c())},[i,n,c]),[k,S]=v.useState(!1),[A,C]=v.useState(!1),T=v.useCallback((O={},G=null)=>({role:"dialog",...O,ref:Kt(G,l),id:f,tabIndex:-1,"aria-modal":!0,"aria-labelledby":k?m:void 0,"aria-describedby":A?g:void 0,onClick:Me(O.onClick,fe=>fe.stopPropagation())}),[g,A,f,m,k]),M=v.useCallback(O=>{O.stopPropagation(),p.current===O.target&&ln.isTopModal(l.current)&&(a&&(n==null||n()),s==null||s())},[n,a,s]),L=v.useCallback((O={},G=null)=>({...O,ref:Kt(G,u),onClick:Me(O.onClick,M),onKeyDown:Me(O.onKeyDown,w),onMouseDown:Me(O.onMouseDown,b)}),[w,b,M]);return{isOpen:t,onClose:n,headerId:m,bodyId:g,setBodyMounted:C,setHeaderMounted:S,dialogRef:l,overlayRef:u,getDialogProps:T,getDialogContainerProps:L,index:h}}function wc(e,t){const n=e.current;v.useEffect(()=>{if(!(!e.current||!t))return yc(e.current)},[t,e,n])}function kc(e,...t){const n=v.useId(),r=e||n;return v.useMemo(()=>t.map(a=>`${a}-${r}`),[r,t])}var[Sc,Ne]=qe({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[Cc,Ie]=qe({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Ka=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:n,children:r,autoFocus:a,trapFocus:i,initialFocusRef:o,finalFocusRef:s,returnFocusOnClose:c,blockScrollOnMount:l,allowPinchZoom:u,preserveScrollBarGap:f,motionPreset:m,lockFocusAcrossFrames:g,onCloseComplete:h}=t,p=na("Modal",t),w={...xc(t),autoFocus:a,trapFocus:i,initialFocusRef:o,finalFocusRef:s,returnFocusOnClose:c,blockScrollOnMount:l,allowPinchZoom:u,preserveScrollBarGap:f,motionPreset:m,lockFocusAcrossFrames:g};return d.jsx(Cc,{value:w,children:d.jsx(Sc,{value:p,children:d.jsx(En,{onExitComplete:h,children:w.isOpen&&d.jsx(co,{...n,children:r})})})})};Ka.displayName="Modal";var pt="right-scroll-bar-position",gt="width-before-scroll-bar",Ac="with-scroll-bars-hidden",Ec="--removed-body-scroll-bar-size",Za=pa(),$t=function(){},Pt=v.forwardRef(function(e,t){var n=v.useRef(null),r=v.useState({onScrollCapture:$t,onWheelCapture:$t,onTouchMoveCapture:$t}),a=r[0],i=r[1],o=e.forwardProps,s=e.children,c=e.className,l=e.removeScrollBar,u=e.enabled,f=e.shards,m=e.sideCar,g=e.noIsolation,h=e.inert,p=e.allowPinchZoom,b=e.as,w=b===void 0?"div":b,k=e.gapMode,S=da(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),A=m,C=fa([n,t]),T=H(H({},S),a);return v.createElement(v.Fragment,null,u&&v.createElement(A,{sideCar:Za,removeScrollBar:l,shards:f,noIsolation:g,inert:h,setCallbacks:i,allowPinchZoom:!!p,lockRef:n,gapMode:k}),o?v.cloneElement(v.Children.only(s),H(H({},T),{ref:C})):v.createElement(w,H({},T,{className:c,ref:C}),s))});Pt.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Pt.classNames={fullWidth:gt,zeroRight:pt};var Oc=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Pc(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Oc();return t&&e.setAttribute("nonce",t),e}function Nc(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Ic(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var _c=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Pc())&&(Nc(t,n),Ic(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Tc=function(){var e=_c();return function(t,n){v.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Qa=function(){var e=Tc(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},jc={left:0,top:0,right:0,gap:0},Ht=function(e){return parseInt(e||"",10)||0},Mc=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[Ht(n),Ht(r),Ht(a)]},Fc=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return jc;var t=Mc(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Rc=Qa(),Ce="data-scroll-locked",Lc=function(e,t,n,r){var a=e.left,i=e.top,o=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Ac,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(Ce,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(o,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(pt,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(gt,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(pt," .").concat(pt,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(gt," .").concat(gt,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Ce,`] {
    `).concat(Ec,": ").concat(s,`px;
  }
`)},yr=function(){var e=parseInt(document.body.getAttribute(Ce)||"0",10);return isFinite(e)?e:0},Dc=function(){v.useEffect(function(){return document.body.setAttribute(Ce,(yr()+1).toString()),function(){var e=yr()-1;e<=0?document.body.removeAttribute(Ce):document.body.setAttribute(Ce,e.toString())}},[])},zc=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;Dc();var i=v.useMemo(function(){return Fc(a)},[a]);return v.createElement(Rc,{styles:Lc(i,!t,a,n?"":"!important")})},un=!1;if(typeof window<"u")try{var rt=Object.defineProperty({},"passive",{get:function(){return un=!0,!0}});window.addEventListener("test",rt,rt),window.removeEventListener("test",rt,rt)}catch{un=!1}var pe=un?{passive:!1}:!1,Wc=function(e){return e.tagName==="TEXTAREA"},Ja=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Wc(e)&&n[t]==="visible")},Bc=function(e){return Ja(e,"overflowY")},$c=function(e){return Ja(e,"overflowX")},xr=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=ei(e,r);if(a){var i=ti(e,r),o=i[1],s=i[2];if(o>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Hc=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Uc=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},ei=function(e,t){return e==="v"?Bc(t):$c(t)},ti=function(e,t){return e==="v"?Hc(t):Uc(t)},Yc=function(e,t){return e==="h"&&t==="rtl"?-1:1},Gc=function(e,t,n,r,a){var i=Yc(e,window.getComputedStyle(t).direction),o=i*r,s=n.target,c=t.contains(s),l=!1,u=o>0,f=0,m=0;do{var g=ti(e,s),h=g[0],p=g[1],b=g[2],w=p-b-i*h;(h||w)&&ei(e,s)&&(f+=w,m+=h),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!c&&s!==document.body||c&&(t.contains(s)||t===s));return(u&&(Math.abs(f)<1||!a)||!u&&(Math.abs(m)<1||!a))&&(l=!0),l},at=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},wr=function(e){return[e.deltaX,e.deltaY]},kr=function(e){return e&&"current"in e?e.current:e},Vc=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Xc=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},qc=0,ge=[];function Kc(e){var t=v.useRef([]),n=v.useRef([0,0]),r=v.useRef(),a=v.useState(qc++)[0],i=v.useState(Qa)[0],o=v.useRef(e);v.useEffect(function(){o.current=e},[e]),v.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var p=Do([e.lockRef.current],(e.shards||[]).map(kr),!0).filter(Boolean);return p.forEach(function(b){return b.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),p.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var s=v.useCallback(function(p,b){if("touches"in p&&p.touches.length===2)return!o.current.allowPinchZoom;var w=at(p),k=n.current,S="deltaX"in p?p.deltaX:k[0]-w[0],A="deltaY"in p?p.deltaY:k[1]-w[1],C,T=p.target,M=Math.abs(S)>Math.abs(A)?"h":"v";if("touches"in p&&M==="h"&&T.type==="range")return!1;var L=xr(M,T);if(!L)return!0;if(L?C=M:(C=M==="v"?"h":"v",L=xr(M,T)),!L)return!1;if(!r.current&&"changedTouches"in p&&(S||A)&&(r.current=C),!C)return!0;var O=r.current||C;return Gc(O,b,p,O==="h"?S:A,!0)},[]),c=v.useCallback(function(p){var b=p;if(!(!ge.length||ge[ge.length-1]!==i)){var w="deltaY"in b?wr(b):at(b),k=t.current.filter(function(C){return C.name===b.type&&(C.target===b.target||b.target===C.shadowParent)&&Vc(C.delta,w)})[0];if(k&&k.should){b.cancelable&&b.preventDefault();return}if(!k){var S=(o.current.shards||[]).map(kr).filter(Boolean).filter(function(C){return C.contains(b.target)}),A=S.length>0?s(b,S[0]):!o.current.noIsolation;A&&b.cancelable&&b.preventDefault()}}},[]),l=v.useCallback(function(p,b,w,k){var S={name:p,delta:b,target:w,should:k,shadowParent:Zc(w)};t.current.push(S),setTimeout(function(){t.current=t.current.filter(function(A){return A!==S})},1)},[]),u=v.useCallback(function(p){n.current=at(p),r.current=void 0},[]),f=v.useCallback(function(p){l(p.type,wr(p),p.target,s(p,e.lockRef.current))},[]),m=v.useCallback(function(p){l(p.type,at(p),p.target,s(p,e.lockRef.current))},[]);v.useEffect(function(){return ge.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:m}),document.addEventListener("wheel",c,pe),document.addEventListener("touchmove",c,pe),document.addEventListener("touchstart",u,pe),function(){ge=ge.filter(function(p){return p!==i}),document.removeEventListener("wheel",c,pe),document.removeEventListener("touchmove",c,pe),document.removeEventListener("touchstart",u,pe)}},[]);var g=e.removeScrollBar,h=e.inert;return v.createElement(v.Fragment,null,h?v.createElement(i,{styles:Xc(a)}):null,g?v.createElement(zc,{gapMode:e.gapMode}):null)}function Zc(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Qc=zo(Za,Kc);var ni=v.forwardRef(function(e,t){return v.createElement(Pt,H({},e,{ref:t,sideCar:Qc}))});ni.classNames=Pt.classNames;function Jc(e){const{autoFocus:t,trapFocus:n,dialogRef:r,initialFocusRef:a,blockScrollOnMount:i,allowPinchZoom:o,finalFocusRef:s,returnFocusOnClose:c,preserveScrollBarGap:l,lockFocusAcrossFrames:u,isOpen:f}=Ie(),[m,g]=lo();v.useEffect(()=>{!m&&g&&setTimeout(g)},[m,g]);const h=Xa(r,f);return d.jsx(za,{autoFocus:t,isDisabled:!n,initialFocusRef:a,finalFocusRef:s,restoreFocus:c,contentRef:r,lockFocusAcrossFrames:u,children:d.jsx(ni,{removeScrollBar:!l,allowPinchZoom:o,enabled:h===1&&i,forwardProps:!0,children:e.children})})}var[el,tl]=qe(),nl={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function rl(e,t){var n,r;if(e)return(r=(n=nl[e])==null?void 0:n[t])!=null?r:e}function al(e){var t;const{isOpen:n,onClose:r,placement:a="right",children:i,...o}=e,s=uo(),c=(t=s.components)==null?void 0:t.Drawer,l=rl(a,s.direction);return d.jsx(el,{value:{placement:l},children:d.jsx(Ka,{isOpen:n,onClose:r,styleConfig:c,...o,children:i})})}var il=_(ia),ri=P((e,t)=>{const{className:n,children:r,motionProps:a,containerProps:i,...o}=e,{getDialogProps:s,getDialogContainerProps:c,isOpen:l}=Ie(),u=s(o,t),f=c(i),m=R("chakra-modal__content",n),g=Ne(),h={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...g.dialog},p={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...g.dialogContainer},{placement:b}=tl();return d.jsx(Jc,{children:d.jsx(_.div,{...f,className:"chakra-modal__content-container",__css:p,children:d.jsx(il,{motionProps:a,direction:b,in:l,className:m,...u,__css:h,children:r})})})});ri.displayName="DrawerContent";var ai=P((e,t)=>{const{className:n,...r}=e,a=R("chakra-modal__footer",n),o={display:"flex",alignItems:"center",justifyContent:"flex-end",...Ne().footer};return d.jsx(_.footer,{ref:t,...r,__css:o,className:a})});ai.displayName="ModalFooter";var ii=P((e,t)=>{const{className:n,...r}=e,{headerId:a,setHeaderMounted:i}=Ie();v.useEffect(()=>(i(!0),()=>i(!1)),[i]);const o=R("chakra-modal__header",n),c={flex:0,...Ne().header};return d.jsx(_.header,{ref:t,className:o,id:a,...r,__css:c})});ii.displayName="ModalHeader";var ol=_(Xe.div),oi=P((e,t)=>{const{className:n,transition:r,motionProps:a,...i}=e,o=R("chakra-modal__overlay",n),c={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...Ne().overlay},{motionPreset:l}=Ie(),f=a||(l==="none"?{}:aa);return d.jsx(ol,{...f,__css:c,ref:t,className:o,...i})});oi.displayName="ModalOverlay";var si=P((e,t)=>{const{className:n,...r}=e,{bodyId:a,setBodyMounted:i}=Ie();v.useEffect(()=>(i(!0),()=>i(!1)),[i]);const o=R("chakra-modal__body",n),s=Ne();return d.jsx(_.div,{ref:t,className:o,id:a,...r,__css:s.body})});si.displayName="ModalBody";var ci=P((e,t)=>{const{onClick:n,className:r,...a}=e,{onClose:i}=Ie(),o=R("chakra-modal__close-btn",r),s=Ne();return d.jsx(fo,{ref:t,__css:s.closeButton,className:o,onClick:Me(n,c=>{c.stopPropagation(),i()}),...a})});ci.displayName="ModalCloseButton";var[sl,li]=qe({name:"TagStylesContext",errorMessage:`useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `}),ht=P((e,t)=>{const n=na("Tag",e),r=Pe(e),a={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...n.container};return d.jsx(sl,{value:n,children:d.jsx(_.span,{ref:t,...r,__css:a})})});ht.displayName="Tag";var cl=P((e,t)=>{const n=li();return d.jsx(_.span,{ref:t,noOfLines:1,...e,__css:n.label})});cl.displayName="TagLabel";var ll=P((e,t)=>d.jsx(On,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e}));ll.displayName="TagLeftIcon";var ul=P((e,t)=>d.jsx(On,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e}));ul.displayName="TagRightIcon";var ui=e=>d.jsx(On,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:d.jsx("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});ui.displayName="TagCloseIcon";var fl=P((e,t)=>{const{isDisabled:n,children:r,...a}=e,o={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...li().closeButton};return d.jsx(_.button,{ref:t,"aria-label":"close",...a,type:"button",disabled:n,__css:o,children:r||d.jsx(ui,{})})});fl.displayName="TagCloseButton";const Sr="/assets/logo-dark-CgFk4jlR.svg",Cr="/assets/logo-light-DyBc02vJ.svg";function Ar(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ar(Object(n),!0).forEach(function(r){F(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ar(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ct(e){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ct(e)}function dl(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ml(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vl(e,t,n){return t&&ml(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bn(e,t){return gl(e)||bl(e,t)||fi(e,t)||xl()}function Ze(e){return pl(e)||hl(e)||fi(e)||yl()}function pl(e){if(Array.isArray(e))return fn(e)}function gl(e){if(Array.isArray(e))return e}function hl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bl(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(c){i=!0,s=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function fi(e,t){if(e){if(typeof e=="string")return fn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fn(e,t)}}function fn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Er=function(){},$n={},di={},mi=null,vi={mark:Er,measure:Er};try{typeof window<"u"&&($n=window),typeof document<"u"&&(di=document),typeof MutationObserver<"u"&&(mi=MutationObserver),typeof performance<"u"&&(vi=performance)}catch{}var wl=$n.navigator||{},Or=wl.userAgent,Pr=Or===void 0?"":Or,ee=$n,I=di,Nr=mi,it=vi;ee.document;var Z=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",pi=~Pr.indexOf("MSIE")||~Pr.indexOf("Trident/"),ot,st,ct,lt,ut,X="___FONT_AWESOME___",dn=16,gi="fa",hi="svg-inline--fa",le="data-fa-i2svg",mn="data-fa-pseudo-element",kl="data-fa-pseudo-element-pending",Hn="data-prefix",Un="data-icon",Ir="fontawesome-i2svg",Sl="async",Cl=["HTML","HEAD","STYLE","SCRIPT"],bi=function(){try{return!0}catch{return!1}}(),N="classic",j="sharp",Yn=[N,j];function Qe(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[N]}})}var He=Qe((ot={},F(ot,N,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),F(ot,j,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ot)),Ue=Qe((st={},F(st,N,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),F(st,j,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),st)),Ye=Qe((ct={},F(ct,N,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),F(ct,j,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ct)),Al=Qe((lt={},F(lt,N,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),F(lt,j,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),lt)),El=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,yi="fa-layers-text",Ol=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Pl=Qe((ut={},F(ut,N,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),F(ut,j,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ut)),xi=[1,2,3,4,5,6,7,8,9,10],Nl=xi.concat([11,12,13,14,15,16,17,18,19,20]),Il=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ge=new Set;Object.keys(Ue[N]).map(Ge.add.bind(Ge));Object.keys(Ue[j]).map(Ge.add.bind(Ge));var _l=[].concat(Yn,Ze(Ge),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(xi.map(function(e){return"".concat(e,"x")})).concat(Nl.map(function(e){return"w-".concat(e)})),Re=ee.FontAwesomeConfig||{};function Tl(e){var t=I.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function jl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(I&&typeof I.querySelector=="function"){var Ml=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ml.forEach(function(e){var t=Bn(e,2),n=t[0],r=t[1],a=jl(Tl(n));a!=null&&(Re[r]=a)})}var wi={styleDefault:"solid",familyDefault:"classic",cssPrefix:gi,replacementClass:hi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Re.familyPrefix&&(Re.cssPrefix=Re.familyPrefix);var Oe=y(y({},wi),Re);Oe.autoReplaceSvg||(Oe.observeMutations=!1);var x={};Object.keys(wi).forEach(function(e){Object.defineProperty(x,e,{enumerable:!0,set:function(n){Oe[e]=n,Le.forEach(function(r){return r(x)})},get:function(){return Oe[e]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(t){Oe.cssPrefix=t,Le.forEach(function(n){return n(x)})},get:function(){return Oe.cssPrefix}});ee.FontAwesomeConfig=x;var Le=[];function Fl(e){return Le.push(e),function(){Le.splice(Le.indexOf(e),1)}}var Q=dn,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rl(e){if(!(!e||!Z)){var t=I.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=I.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return I.head.insertBefore(t,r),e}}var Ll="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ve(){for(var e=12,t="";e-- >0;)t+=Ll[Math.random()*62|0];return t}function _e(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Gn(e){return e.classList?_e(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ki(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ki(e[n]),'" ')},"").trim()}function Nt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Vn(e){return e.size!==U.size||e.x!==U.x||e.y!==U.y||e.rotate!==U.rotate||e.flipX||e.flipY}function zl(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Wl(e){var t=e.transform,n=e.width,r=n===void 0?dn:n,a=e.height,i=a===void 0?dn:a,o=e.startCentered,s=o===void 0?!1:o,c="";return s&&pi?c+="translate(".concat(t.x/Q-r/2,"em, ").concat(t.y/Q-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/Q,"em), calc(-50% + ").concat(t.y/Q,"em)) "):c+="translate(".concat(t.x/Q,"em, ").concat(t.y/Q,"em) "),c+="scale(".concat(t.size/Q*(t.flipX?-1:1),", ").concat(t.size/Q*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Bl=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Si(){var e=gi,t=hi,n=x.cssPrefix,r=x.replacementClass,a=Bl;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var _r=!1;function Ut(){x.autoAddCss&&!_r&&(Rl(Si()),_r=!0)}var $l={mixout:function(){return{dom:{css:Si,insertCss:Ut}}},hooks:function(){return{beforeDOMElementCreation:function(){Ut()},beforeI2svg:function(){Ut()}}}},q=ee||{};q[X]||(q[X]={});q[X].styles||(q[X].styles={});q[X].hooks||(q[X].hooks={});q[X].shims||(q[X].shims=[]);var B=q[X],Ci=[],Hl=function e(){I.removeEventListener("DOMContentLoaded",e),At=1,Ci.map(function(t){return t()})},At=!1;Z&&(At=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),At||I.addEventListener("DOMContentLoaded",Hl));function Ul(e){Z&&(At?setTimeout(e,0):Ci.push(e))}function Je(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ki(e):"<".concat(t," ").concat(Dl(r),">").concat(i.map(Je).join(""),"</").concat(t,">")}function Tr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Yt=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,c,l,u;for(r===void 0?(c=1,u=t[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=s(u,t[l],l,t);return u};function Yl(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function vn(e){var t=Yl(e);return t.length===1?t[0].toString(16):null}function Gl(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function jr(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function pn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=jr(t);typeof B.hooks.addPack=="function"&&!a?B.hooks.addPack(e,jr(t)):B.styles[e]=y(y({},B.styles[e]||{}),i),e==="fas"&&pn("fa",t)}var ft,dt,mt,be=B.styles,Vl=B.shims,Xl=(ft={},F(ft,N,Object.values(Ye[N])),F(ft,j,Object.values(Ye[j])),ft),Xn=null,Ai={},Ei={},Oi={},Pi={},Ni={},ql=(dt={},F(dt,N,Object.keys(He[N])),F(dt,j,Object.keys(He[j])),dt);function Kl(e){return~_l.indexOf(e)}function Zl(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Kl(a)?a:null}var Ii=function(){var t=function(i){return Yt(be,function(o,s,c){return o[c]=Yt(s,i,{}),o},{})};Ai=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){a[c.toString(16)]=o})}return a}),Ei=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){a[c]=o})}return a}),Ni=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(c){a[c]=o}),a});var n="far"in be||x.autoFetchSvg,r=Yt(Vl,function(a,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});Oi=r.names,Pi=r.unicodes,Xn=It(x.styleDefault,{family:x.familyDefault})};Fl(function(e){Xn=It(e.styleDefault,{family:x.familyDefault})});Ii();function qn(e,t){return(Ai[e]||{})[t]}function Ql(e,t){return(Ei[e]||{})[t]}function oe(e,t){return(Ni[e]||{})[t]}function _i(e){return Oi[e]||{prefix:null,iconName:null}}function Jl(e){var t=Pi[e],n=qn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function te(){return Xn}var Kn=function(){return{prefix:null,iconName:null,rest:[]}};function It(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?N:n,a=He[r][e],i=Ue[r][e]||Ue[r][a],o=e in B.styles?e:null;return i||o||null}var Mr=(mt={},F(mt,N,Object.keys(Ye[N])),F(mt,j,Object.keys(Ye[j])),mt);function _t(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},F(t,N,"".concat(x.cssPrefix,"-").concat(N)),F(t,j,"".concat(x.cssPrefix,"-").concat(j)),t),o=null,s=N;(e.includes(i[N])||e.some(function(l){return Mr[N].includes(l)}))&&(s=N),(e.includes(i[j])||e.some(function(l){return Mr[j].includes(l)}))&&(s=j);var c=e.reduce(function(l,u){var f=Zl(x.cssPrefix,u);if(be[u]?(u=Xl[s].includes(u)?Al[s][u]:u,o=u,l.prefix=u):ql[s].indexOf(u)>-1?(o=u,l.prefix=It(u,{family:s})):f?l.iconName=f:u!==x.replacementClass&&u!==i[N]&&u!==i[j]&&l.rest.push(u),!a&&l.prefix&&l.iconName){var m=o==="fa"?_i(l.iconName):{},g=oe(l.prefix,l.iconName);m.prefix&&(o=null),l.iconName=m.iconName||g||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!be.far&&be.fas&&!x.autoFetchSvg&&(l.prefix="fas")}return l},Kn());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===j&&(be.fass||x.autoFetchSvg)&&(c.prefix="fass",c.iconName=oe(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=te()||"fas"),c}var eu=function(){function e(){dl(this,e),this.definitions={}}return vl(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=y(y({},n.definitions[s]||{}),o[s]),pn(s,o[s]);var c=Ye[N][s];c&&pn(c,o[s]),Ii()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=l)}),n[s][c]=l}),n}}]),e}(),Fr=[],ye={},Ae={},tu=Object.keys(Ae);function nu(e,t){var n=t.mixoutsTo;return Fr=e,ye={},Object.keys(Ae).forEach(function(r){tu.indexOf(r)===-1&&delete Ae[r]}),Fr.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ct(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ye[o]||(ye[o]=[]),ye[o].push(i[o])})}r.provides&&r.provides(Ae)}),n}function gn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ye[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ue(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ye[e]||[];a.forEach(function(i){i.apply(null,n)})}function K(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ae[e]?Ae[e].apply(null,t):void 0}function hn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||te();if(t)return t=oe(n,t)||t,Tr(Ti.definitions,n,t)||Tr(B.styles,n,t)}var Ti=new eu,ru=function(){x.autoReplaceSvg=!1,x.observeMutations=!1,ue("noAuto")},au={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(ue("beforeI2svg",t),K("pseudoElements2svg",t),K("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,Ul(function(){ou({autoReplaceSvgRoot:n}),ue("watch",t)})}},iu={icon:function(t){if(t===null)return null;if(Ct(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:oe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=It(t[0]);return{prefix:r,iconName:oe(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(x.cssPrefix,"-"))>-1||t.match(El))){var a=_t(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||te(),iconName:oe(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=te();return{prefix:i,iconName:oe(i,t)||t}}}},z={noAuto:ru,config:x,dom:au,parse:iu,library:Ti,findIconDefinition:hn,toHtml:Je},ou=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?I:n;(Object.keys(B.styles).length>0||x.autoFetchSvg)&&Z&&x.autoReplaceSvg&&z.dom.i2svg({node:r})};function Tt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Je(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Z){var r=I.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function su(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Vn(o)&&n.found&&!r.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};a.style=Nt(y(y({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function cu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(x.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:y(y({},a),{},{id:o}),children:r}]}]}function Zn(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,m=e.watchable,g=m===void 0?!1:m,h=r.found?r:n,p=h.width,b=h.height,w=a==="fak",k=[x.replacementClass,i?"".concat(x.cssPrefix,"-").concat(i):""].filter(function(O){return f.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(f.classes).join(" "),S={children:[],attributes:y(y({},f.attributes),{},{"data-prefix":a,"data-icon":i,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(b)})},A=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/b*16*.0625,"em")}:{};g&&(S.attributes[le]=""),c&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||Ve())},children:[c]}),delete S.attributes.title);var C=y(y({},S),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:y(y({},A),f.styles)}),T=r.found&&n.found?K("generateAbstractMask",C)||{children:[],attributes:{}}:K("generateAbstractIcon",C)||{children:[],attributes:{}},M=T.children,L=T.attributes;return C.children=M,C.attributes=L,s?cu(C):su(C)}function Rr(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,c=s===void 0?!1:s,l=y(y(y({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[le]="");var u=y({},o.styles);Vn(a)&&(u.transform=Wl({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=Nt(u);f.length>0&&(l.style=f);var m=[];return m.push({tag:"span",attributes:l,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function lu(e){var t=e.content,n=e.title,r=e.extra,a=y(y(y({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Nt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gt=B.styles;function bn(e){var t=e[0],n=e[1],r=e.slice(4),a=Bn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(ie.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(ie.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(ie.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var uu={found:!1,width:512,height:512};function fu(e,t){!bi&&!x.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function yn(e,t){var n=t;return t==="fa"&&x.styleDefault!==null&&(t=te()),new Promise(function(r,a){if(K("missingIconAbstract"),n==="fa"){var i=_i(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Gt[t]&&Gt[t][e]){var o=Gt[t][e];return r(bn(o))}fu(e,t),r(y(y({},uu),{},{icon:x.showMissingIcons&&e?K("missingIconAbstract")||{}:{}}))})}var Lr=function(){},xn=x.measurePerformance&&it&&it.mark&&it.measure?it:{mark:Lr,measure:Lr},Fe='FA "6.5.2"',du=function(t){return xn.mark("".concat(Fe," ").concat(t," begins")),function(){return ji(t)}},ji=function(t){xn.mark("".concat(Fe," ").concat(t," ends")),xn.measure("".concat(Fe," ").concat(t),"".concat(Fe," ").concat(t," begins"),"".concat(Fe," ").concat(t," ends"))},Qn={begin:du,end:ji},bt=function(){};function Dr(e){var t=e.getAttribute?e.getAttribute(le):null;return typeof t=="string"}function mu(e){var t=e.getAttribute?e.getAttribute(Hn):null,n=e.getAttribute?e.getAttribute(Un):null;return t&&n}function vu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(x.replacementClass)}function pu(){if(x.autoReplaceSvg===!0)return yt.replace;var e=yt[x.autoReplaceSvg];return e||yt.replace}function gu(e){return I.createElementNS("http://www.w3.org/2000/svg",e)}function hu(e){return I.createElement(e)}function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?gu:hu:n;if(typeof e=="string")return I.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Mi(o,{ceFn:r}))}),a}function bu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var yt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Mi(a),n)}),n.getAttribute(le)===null&&x.keepOriginalSource){var r=I.createComment(bu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Gn(n).indexOf(x.replacementClass))return yt.replace(t);var a=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,c){return c===x.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Je(s)}).join(`
`);n.setAttribute(le,""),n.innerHTML=o}};function zr(e){e()}function Fi(e,t){var n=typeof t=="function"?t:bt;if(e.length===0)n();else{var r=zr;x.mutateApproach===Sl&&(r=ee.requestAnimationFrame||zr),r(function(){var a=pu(),i=Qn.begin("mutate");e.map(a),i(),n()})}}var Jn=!1;function Ri(){Jn=!0}function wn(){Jn=!1}var Et=null;function Wr(e){if(Nr&&x.observeMutations){var t=e.treeCallback,n=t===void 0?bt:t,r=e.nodeCallback,a=r===void 0?bt:r,i=e.pseudoElementsCallback,o=i===void 0?bt:i,s=e.observeMutationsRoot,c=s===void 0?I:s;Et=new Nr(function(l){if(!Jn){var u=te();_e(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Dr(f.addedNodes[0])&&(x.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&x.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Dr(f.target)&&~Il.indexOf(f.attributeName))if(f.attributeName==="class"&&mu(f.target)){var m=_t(Gn(f.target)),g=m.prefix,h=m.iconName;f.target.setAttribute(Hn,g||u),h&&f.target.setAttribute(Un,h)}else vu(f.target)&&a(f.target)})}}),Z&&Et.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yu(){Et&&Et.disconnect()}function xu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function wu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=_t(Gn(e));return a.prefix||(a.prefix=te()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ql(a.prefix,e.innerText)||qn(a.prefix,vn(e.innerText))),!a.iconName&&x.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ku(e){var t=_e(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return x.autoA11y&&(n?t["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(r||Ve()):(t["aria-hidden"]="true",t.focusable="false")),t}function Su(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Br(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wu(e),r=n.iconName,a=n.prefix,i=n.rest,o=ku(e),s=gn("parseNodeAttributes",{},e),c=t.styleParser?xu(e):[];return y({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var Cu=B.styles;function Li(e){var t=x.autoReplaceSvg==="nest"?Br(e,{styleParser:!1}):Br(e);return~t.extra.classes.indexOf(yi)?K("generateLayersText",e,t):K("generateSvgReplacementMutation",e,t)}var ne=new Set;Yn.map(function(e){ne.add("fa-".concat(e))});Object.keys(He[N]).map(ne.add.bind(ne));Object.keys(He[j]).map(ne.add.bind(ne));ne=Ze(ne);function $r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var n=I.documentElement.classList,r=function(f){return n.add("".concat(Ir,"-").concat(f))},a=function(f){return n.remove("".concat(Ir,"-").concat(f))},i=x.autoFetchSvg?ne:Yn.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Cu));i.includes("fa")||i.push("fa");var o=[".".concat(yi,":not([").concat(le,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(le,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=_e(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var c=Qn.begin("onTree"),l=s.reduce(function(u,f){try{var m=Li(f);m&&u.push(m)}catch(g){bi||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(m){Fi(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(m){c(),f(m)})})}function Au(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Li(e).then(function(n){n&&Fi([n],t)})}function Eu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:hn(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:hn(a||{})),e(r,y(y({},n),{},{mask:a}))}}var Ou=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?U:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,l=n.maskId,u=l===void 0?null:l,f=n.title,m=f===void 0?null:f,g=n.titleId,h=g===void 0?null:g,p=n.classes,b=p===void 0?[]:p,w=n.attributes,k=w===void 0?{}:w,S=n.styles,A=S===void 0?{}:S;if(t){var C=t.prefix,T=t.iconName,M=t.icon;return Tt(y({type:"icon"},t),function(){return ue("beforeDOMElementCreation",{iconDefinition:t,params:n}),x.autoA11y&&(m?k["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(h||Ve()):(k["aria-hidden"]="true",k.focusable="false")),Zn({icons:{main:bn(M),mask:c?bn(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:T,transform:y(y({},U),a),symbol:o,title:m,maskId:u,titleId:h,extra:{attributes:k,styles:A,classes:b}})})}},Pu={mixout:function(){return{icon:Eu(Ou)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$r,n.nodeCallback=Au,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?I:r,i=n.callback,o=i===void 0?function(){}:i;return $r(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,m=r.extra;return new Promise(function(g,h){Promise.all([yn(a,s),u.iconName?yn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var b=Bn(p,2),w=b[0],k=b[1];g([n,Zn({icons:{main:w,mask:k},prefix:s,iconName:a,transform:c,symbol:l,maskId:f,title:i,titleId:o,extra:m,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,c=Nt(s);c.length>0&&(a.style=c);var l;return Vn(o)&&(l=K("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:a}}}},Nu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Tt({type:"layer"},function(){ue("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers")].concat(Ze(i)).join(" ")},children:o}]})}}}},Iu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return Tt({type:"counter",content:n},function(){return ue("beforeDOMElementCreation",{content:n,params:r}),lu({content:n.toString(),title:i,extra:{attributes:l,styles:f,classes:["".concat(x.cssPrefix,"-layers-counter")].concat(Ze(s))}})})}}}},_u={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?U:a,o=r.title,s=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,m=r.styles,g=m===void 0?{}:m;return Tt({type:"text",content:n},function(){return ue("beforeDOMElementCreation",{content:n,params:r}),Rr({content:n,transform:y(y({},U),i),title:s,extra:{attributes:f,styles:g,classes:["".concat(x.cssPrefix,"-layers-text")].concat(Ze(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,c=null;if(pi){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/l,c=u.height/l}return x.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Rr({content:n.innerHTML,width:s,height:c,transform:i,title:a,extra:o,watchable:!0})])}}},Tu=new RegExp('"',"ug"),Hr=[1105920,1112319];function ju(e){var t=e.replace(Tu,""),n=Gl(t,0),r=n>=Hr[0]&&n<=Hr[1],a=t.length===2?t[0]===t[1]:!1;return{value:vn(a?t[0]:t),isSecondary:r||a}}function Ur(e,t){var n="".concat(kl).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=_e(e.children),o=i.filter(function(M){return M.getAttribute(mn)===t})[0],s=ee.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(Ol),l=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),m=~["Sharp"].indexOf(c[2])?j:N,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ue[m][c[2].toLowerCase()]:Pl[m][l],h=ju(f),p=h.value,b=h.isSecondary,w=c[0].startsWith("FontAwesome"),k=qn(g,p),S=k;if(w){var A=Jl(p);A.iconName&&A.prefix&&(k=A.iconName,g=A.prefix)}if(k&&!b&&(!o||o.getAttribute(Hn)!==g||o.getAttribute(Un)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var C=Su(),T=C.extra;T.attributes[mn]=t,yn(k,g).then(function(M){var L=Zn(y(y({},C),{},{icons:{main:M,mask:Kn()},prefix:g,iconName:S,extra:T,watchable:!0})),O=I.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(O,e.firstChild):e.appendChild(O),O.outerHTML=L.map(function(G){return Je(G)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Mu(e){return Promise.all([Ur(e,"::before"),Ur(e,"::after")])}function Fu(e){return e.parentNode!==document.head&&!~Cl.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(mn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yr(e){if(Z)return new Promise(function(t,n){var r=_e(e.querySelectorAll("*")).filter(Fu).map(Mu),a=Qn.begin("searchPseudoElements");Ri(),Promise.all(r).then(function(){a(),wn(),t()}).catch(function(){a(),wn(),n()})})}var Ru={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Yr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?I:r;x.searchPseudoElements&&Yr(a)}}},Gr=!1,Lu={mixout:function(){return{dom:{unwatch:function(){Ri(),Gr=!0}}}},hooks:function(){return{bootstrap:function(){Wr(gn("mutationObserverCallbacks",{}))},noAuto:function(){yu()},watch:function(n){var r=n.observeMutationsRoot;Gr?wn():Wr(gn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Vr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Du={mixout:function(){return{parse:{transform:function(n){return Vr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Vr(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:f,path:m};return{tag:"g",attributes:y({},g.outer),children:[{tag:"g",attributes:y({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:y(y({},r.icon.attributes),g.path)}]}]}}}},Vt={x:0,y:0,width:"100%",height:"100%"};function Xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function zu(e){return e.tag==="g"?e.children:[e]}var Wu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?_t(a.split(" ").map(function(o){return o.trim()})):Kn();return i.prefix||(i.prefix=te()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,l=i.width,u=i.icon,f=o.width,m=o.icon,g=zl({transform:c,containerWidth:f,iconWidth:l}),h={tag:"rect",attributes:y(y({},Vt),{},{fill:"white"})},p=u.children?{children:u.children.map(Xr)}:{},b={tag:"g",attributes:y({},g.inner),children:[Xr(y({tag:u.tag,attributes:y(y({},u.attributes),g.path)},p))]},w={tag:"g",attributes:y({},g.outer),children:[b]},k="mask-".concat(s||Ve()),S="clip-".concat(s||Ve()),A={tag:"mask",attributes:y(y({},Vt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,w]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:zu(m)},A]};return r.push(C,{tag:"rect",attributes:y({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(k,")")},Vt)}),{children:r,attributes:a}}}},Bu={provides:function(t){var n=!1;ee.matchMedia&&(n=ee.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:y(y({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=y(y({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:y(y({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:y(y({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:y(y({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:y(y({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:y(y({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:y(y({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:y(y({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Hu=[$l,Pu,Nu,Iu,_u,Ru,Lu,Du,Wu,Bu,$u];nu(Hu,{mixoutsTo:z});z.noAuto;z.config;z.library;z.dom;var kn=z.parse;z.findIconDefinition;z.toHtml;var Uu=z.icon;z.layer;z.text;z.counter;function qr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qr(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ot(e){"@babel/helpers - typeof";return Ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ot(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Gu(e,t){if(e==null)return{};var n=Yu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Sn(e){return Vu(e)||Xu(e)||qu(e)||Ku()}function Vu(e){if(Array.isArray(e))return Cn(e)}function Xu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qu(e,t){if(e){if(typeof e=="string")return Cn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cn(e,t)}}function Cn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ku(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zu(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,c=e.spin,l=e.spinPulse,u=e.spinReverse,f=e.pulse,m=e.fixedWidth,g=e.inverse,h=e.border,p=e.listItem,b=e.flip,w=e.size,k=e.rotation,S=e.pull,A=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":f,"fa-fw":m,"fa-inverse":g,"fa-border":h,"fa-li":p,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},xe(t,"fa-".concat(w),typeof w<"u"&&w!==null),xe(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),xe(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),xe(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(A).map(function(C){return A[C]?C:null}).filter(function(C){return C})}function Qu(e){return e=e-0,e===e}function Di(e){return Qu(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ju=["style"];function ef(e){return e.charAt(0).toUpperCase()+e.slice(1)}function tf(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Di(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[ef(a)]=i:t[a]=i,t},{})}function zi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return zi(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.attrs.className=u,delete t.attributes.class;break;case"style":c.attrs.style=tf(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=u:c.attrs[Di(l)]=u}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Gu(n,Ju);return a.attrs.style=$($({},a.attrs.style),o),e.apply(void 0,[t.tag,$($({},a.attrs),s)].concat(Sn(r)))}var Wi=!1;try{Wi=!0}catch{}function nf(){if(!Wi&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Kr(e){if(e&&Ot(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(kn.icon)return kn.icon(e);if(e===null)return null;if(e&&Ot(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Xt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}var Zr={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},W=An.forwardRef(function(e,t){var n=$($({},Zr),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,c=n.titleId,l=n.maskId,u=Kr(r),f=Xt("classes",[].concat(Sn(Zu(n)),Sn((o||"").split(" ")))),m=Xt("transform",typeof n.transform=="string"?kn.transform(n.transform):n.transform),g=Xt("mask",Kr(a)),h=Uu(u,$($($($({},f),m),g),{},{symbol:i,title:s,titleId:c,maskId:l}));if(!h)return nf("Could not find icon",u),null;var p=h.abstract,b={ref:t};return Object.keys(n).forEach(function(w){Zr.hasOwnProperty(w)||(b[w]=n[w])}),rf(p[0],b)});W.displayName="FontAwesomeIcon";W.propTypes={beat:E.bool,border:E.bool,beatFade:E.bool,bounce:E.bool,className:E.string,fade:E.bool,flash:E.bool,mask:E.oneOfType([E.object,E.array,E.string]),maskId:E.string,fixedWidth:E.bool,inverse:E.bool,flip:E.oneOf([!0,!1,"horizontal","vertical","both"]),icon:E.oneOfType([E.object,E.array,E.string]),listItem:E.bool,pull:E.oneOf(["right","left"]),pulse:E.bool,rotation:E.oneOf([0,90,180,270]),shake:E.bool,size:E.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:E.bool,spinPulse:E.bool,spinReverse:E.bool,symbol:E.oneOfType([E.bool,E.string]),title:E.string,titleId:E.string,transform:E.oneOfType([E.string,E.object]),swapOpacity:E.bool};var rf=zi.bind(null,An.createElement),af={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},of={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},Qr={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},sf={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},cf={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Jr={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};const ea=["About","Skills","Projects","Experience","Contact"],ta=({children:e})=>d.jsx(Wa,{px:2,py:1,fontSize:"md",fontWeight:400,rounded:"md",_hover:{textDecoration:"none",color:J("gray.600","gray.300")},href:"#about",children:e}),lf=()=>{const{isOpen:e,onOpen:t,onClose:n}=lc(),{colorMode:r,toggleColorMode:a}=mo();return d.jsxs(D,{zIndex:999,bg:J("white","gray.800"),px:2,boxShadow:J("rgba(50, 50, 93, 0.125) 0px 1px 2px -1px, rgba(0, 0, 0, 0.125) 0px 1px 2px -1px","none"),position:"sticky",top:0,left:0,as:"header",display:"flex",justifyContent:"center",borderBottom:J("none","1px solid #F6E05E"),children:[d.jsxs(Wn,{templateColumns:{base:"1fr 0fr auto",md:"auto 2fr 0fr"},alignItems:"center",gap:2,h:16,w:{base:"100%",md:"calc(100% - 14rem)",lg:"calc(100% - 20rem)"},children:[d.jsx(Se,{children:d.jsx(D,{textAlign:"center",alignItems:"center",justifyContent:"center",display:"flex",children:d.jsx(wt,{minW:32,src:J(Cr,Sr),alt:"App Logo",h:{base:10,md:10}})})}),d.jsx(Se,{display:{base:"none",md:"block"},children:d.jsxs($e,{justifyContent:"flex-end",alignContent:"center",alignItems:"center",children:[ea.map(i=>d.jsx(ta,{children:i},i)),d.jsx(vt,{variant:"ghost",size:"md",icon:d.jsx(W,{size:"lg",icon:r==="light"?Jr:Qr}),onClick:a})]})}),d.jsx(Se,{textAlign:"right",display:{base:"block",md:"none"},children:d.jsx(vt,{variant:"ghost",size:"md",icon:d.jsx(W,{size:"xl",icon:af}),"aria-label":"Toggle Menu",fontSize:"md",onClick:t,color:"blue.700",px:4})})]}),d.jsxs(al,{placement:"right",size:["xs"],onClose:n,isOpen:e,children:[d.jsx(oi,{sx:{backdropFilter:"blur(0.125rem)"}}),d.jsxs(ri,{children:[d.jsxs(ii,{py:2,boxShadow:"0 0 3px rgba(0, 0, 0, 0.1)",children:[d.jsx(wt,{src:J(Cr,Sr),alt:"App Logo",h:12}),d.jsx(ci,{})]}),d.jsx(si,{children:d.jsxs(Ha,{align:"start",children:[ea.map(i=>d.jsx(ta,{onClick:n,children:i},i)),d.jsx(vt,{variant:"ghost",size:"md",icon:d.jsx(W,{size:"lg",icon:r==="light"?Jr:Qr}),onClick:a})]})}),d.jsx(ai,{})]})]})]})};function uf({className:e,children:t,ref:n,...r}){return d.jsx(D,{as:"section",ref:n,className:e,...r,children:t})}function ff(){const e=new Date().getFullYear();var t=J("gray.300","gray.700");return d.jsx(D,{as:"footer",bg:t,p:2,children:d.jsxs($e,{wrap:"wrap",fontSize:"sm",justifyContent:"center",alignItems:"center",h:16,children:[d.jsxs(ae,{children:["© ",e]})," ",d.jsx(Va,{orientation:"vertical",h:4})," ",d.jsx(ae,{textAlign:"center",children:"Designed and coded with ❤️️ by Tang Ho Trung Nam"})]})})}function df(e){const[t,n]=v.useState(!1),r=v.useCallback(()=>{const a=window.scrollY>e;n(a)},[e]);return v.useEffect(()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}),[r]),t}function mf(){var e=df(100);const t=()=>{window.scrollTo({top:0,behavior:"smooth"})},n=Xe(D);return d.jsx(n,{h:10,w:10,pos:"fixed",right:6,bottom:10,display:e?"flex":"none",bg:"blue.900",borderRadius:"md",onClick:t,cursor:"pointer",backdropFilter:"blur(10px)",justifyContent:"center",alignItems:"center",color:"white",_hover:{bg:"blue.800"},initial:{opacity:0,y:20},animate:{opacity:e?.8:0,y:e?0:20},transition:{duration:.3},children:d.jsx(W,{icon:cf,size:"xl"})})}function vf({children:e}){return d.jsxs(d.Fragment,{children:[d.jsx(lf,{}),d.jsx(uf,{children:e}),d.jsx(mf,{}),d.jsx(ff,{})]})}var pf={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},gf={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},hf={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const bf={rotate:[0,23,-20,23,-20,0],transition:{duration:2.3,repeat:1/0,repeatDelay:1}};function yf(){return d.jsx(Xe.span,{animate:bf,style:{display:"inline-block"},children:"👋"})}function xf(){return d.jsx(Ga,{centerContent:!0,maxW:{base:"100%",lg:"calc(100% - 20rem)"},children:d.jsxs(Wn,{templateColumns:"repeat(12, 1fr)",gap:2,my:12,children:[d.jsx(Se,{order:{base:2,md:1},colSpan:{base:12,md:7},children:d.jsxs(Be,{spacing:12,children:[d.jsxs(D,{children:[d.jsxs(ae,{as:"h1",fontSize:{base:"1.75rem",md:"2.75rem"},fontWeight:"600",children:["Hi, I'm Tang Ho Trung Nam"," ",d.jsx(yf,{})]}),d.jsx(ae,{as:"p",fontSize:{base:"1rem",md:"1.125rem"},mt:2,children:"I'm a software engineer based in Ho Chi Minh City, Vietnam. I have a passion for software development and love to create things that make people's lives easier."})]}),d.jsxs(Be,{children:[d.jsxs(D,{children:[d.jsx(D,{display:"inline-flex",justifyContent:"center",color:"green.500",w:4,children:d.jsx(W,{size:"sm",icon:of,beatFade:!0})}),d.jsx(ae,{as:"span",fontSize:"sm",fontWeight:"400",ml:2,children:"I'm currently looking for new opportunities."})]}),d.jsxs(D,{children:[d.jsx(D,{display:"inline-flex",justifyContent:"center",w:4,children:d.jsx(W,{icon:sf,size:"sm"})}),d.jsx(ae,{as:"span",fontSize:"sm",fontWeight:"400",ml:2,children:"Ho Chi Minh City, Vietnam"})]})]}),d.jsxs(Ua,{children:[d.jsx(ht,{size:"lg",py:2,_hover:{cursor:"pointer"},children:d.jsx(W,{size:"lg",icon:hf})}),d.jsx(ht,{size:"lg",py:2,_hover:{cursor:"pointer"},children:d.jsx(W,{size:"lg",icon:gf})}),d.jsx(ht,{size:"lg",py:2,_hover:{cursor:"pointer"},children:d.jsx(W,{size:"lg",icon:pf})})]})]})}),d.jsx(Se,{mb:{base:4},order:{base:1,md:2},colSpan:{base:12,md:5},color:"white",children:d.jsx($e,{justifyContent:{base:"center",md:"flex-end"},alignItems:"center",alignContent:"center",h:"100%",children:d.jsxs($e,{pos:"relative",w:80,h:80,children:[d.jsx(wt,{src:"https://avatars.githubusercontent.com/u/149599451?v=4",alt:"Tang Ho Trung Nam",zIndex:1,borderWidth:6,borderColor:J("white","gray.800"),borderStyle:"solid"}),d.jsx(D,{pos:"absolute",w:"100%",h:"100%",bg:"gray.600",left:3,top:3})]})})})]})})}function wf(){return d.jsx(v.Fragment,{children:d.jsx(xf,{})})}function Af(){return d.jsx(vf,{children:d.jsx(wf,{})})}export{Af as default};
