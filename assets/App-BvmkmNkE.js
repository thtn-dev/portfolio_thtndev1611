import{r as v,j as d,g as ro,R as En}from"./index-DW4CC0ZR.js";import{A as On,l as _e,s as R,q as P,u as ao,n as I,p as Ke,S as io,z as Qe,v as Ie,B as or,_ as Zt,D as oo,i as so,E as Re,w as ra,y as co,F as lo,H as uo,x as fo,I as Pn,f as mo,J as X}from"./chunk-37N6GCLA-DXFulaoD.js";function vo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var po=vo();function aa(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function go(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function Kt(...e){return t=>{e.forEach(n=>{go(n,t)})}}function ho(...e){return v.useMemo(()=>Kt(...e),e)}var Qt={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},Le={scale:{enter:{scale:1},exit:{scale:.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function Jt(e){var t;switch((t=e==null?void 0:e.direction)!=null?t:"right"){case"right":return Le.slideRight;case"left":return Le.slideLeft;case"bottom":return Le.slideDown;case"top":return Le.slideUp;default:return Le.slideRight}}var sr={enter:{duration:.2,ease:Qt.easeOut},exit:{duration:.1,ease:Qt.easeIn}},wt={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.exit})},bo={enter:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:1,transition:(r=e==null?void 0:e.enter)!=null?r:wt.enter(sr.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:0,transition:(r=e==null?void 0:e.exit)!=null?r:wt.exit(sr.exit,n),transitionEnd:t==null?void 0:t.exit}}},ia={initial:"exit",animate:"enter",exit:"exit",variants:bo},yo=v.forwardRef(function(t,n){const{unmountOnExit:r,in:a,className:i,transition:o,transitionEnd:s,delay:c,...l}=t,u=a||r?"enter":"exit",f=r?a&&r:!0,m={transition:o,transitionEnd:s,delay:c};return d.jsx(On,{custom:m,children:f&&d.jsx(_e.div,{ref:n,className:R("chakra-fade",i),custom:m,...ia,animate:u,...l})})});yo.displayName="Fade";var cr={exit:{duration:.15,ease:Qt.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},xo={exit:({direction:e,transition:t,transitionEnd:n,delay:r})=>{var a;const{exit:i}=Jt({direction:e});return{...i,transition:(a=t==null?void 0:t.exit)!=null?a:wt.exit(cr.exit,r),transitionEnd:n==null?void 0:n.exit}},enter:({direction:e,transitionEnd:t,transition:n,delay:r})=>{var a;const{enter:i}=Jt({direction:e});return{...i,transition:(a=n==null?void 0:n.enter)!=null?a:wt.enter(cr.enter,r),transitionEnd:t==null?void 0:t.enter}}},oa=v.forwardRef(function(t,n){const{direction:r="right",style:a,unmountOnExit:i,in:o,className:s,transition:c,transitionEnd:l,delay:u,motionProps:f,...m}=t,g=Jt({direction:r}),h=Object.assign({position:"fixed"},g.position,a),p=i?o&&i:!0,b=o||i?"enter":"exit",w={transitionEnd:l,transition:c,direction:r,delay:u};return d.jsx(On,{custom:w,children:p&&d.jsx(_e.div,{...m,ref:n,initial:"exit",className:R("chakra-slide",s),animate:b,exit:"exit",custom:w,variants:xo,style:h,...f})})});oa.displayName="Slide";var en=P(function(t,n){const{htmlWidth:r,htmlHeight:a,alt:i,...o}=t;return d.jsx("img",{width:r,height:a,ref:n,alt:i,...o})});en.displayName="NativeImage";function wo(e){const{loading:t,src:n,srcSet:r,onLoad:a,onError:i,crossOrigin:o,sizes:s,ignoreFallback:c}=e,[l,u]=v.useState("pending");v.useEffect(()=>{u(n?"loading":"pending")},[n]);const f=v.useRef(),m=v.useCallback(()=>{if(!n)return;g();const h=new Image;h.src=n,o&&(h.crossOrigin=o),r&&(h.srcset=r),s&&(h.sizes=s),t&&(h.loading=t),h.onload=p=>{g(),u("loaded"),a==null||a(p)},h.onerror=p=>{g(),u("failed"),i==null||i(p)},f.current=h},[n,o,r,s,a,i,t]),g=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return ao(()=>{if(!c)return l==="loading"&&m(),()=>{g()}},[l,m,c]),c?"loaded":l}var ko=(e,t)=>e!=="loaded"&&t==="beforeLoadOrError"||e==="failed"&&t==="onError";function Co(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}var Ve=P(function(t,n){const{fallbackSrc:r,fallback:a,src:i,srcSet:o,align:s,fit:c,loading:l,ignoreFallback:u,crossOrigin:f,fallbackStrategy:m="beforeLoadOrError",referrerPolicy:g,...h}=t,p=r!==void 0||a!==void 0,b=l!=null||u||!p,w=wo({...t,crossOrigin:f,ignoreFallback:b}),k=ko(w,m),C={ref:n,objectFit:c,objectPosition:s,...b?h:Co(h,["onError","onLoad"])};return k?a||d.jsx(I.img,{as:en,className:"chakra-image__placeholder",src:r,...C}):d.jsx(I.img,{as:en,src:i,srcSet:o,crossOrigin:f,loading:l,referrerPolicy:g,className:"chakra-image",...C})});Ve.displayName="Image";function So(e){return v.Children.toArray(e).filter(t=>v.isValidElement(t))}var[Lf,Ao]=Ke({strict:!1,name:"ButtonGroupContext"});function Eo(e){const[t,n]=v.useState(!e);return{ref:v.useCallback(i=>{i&&n(i.tagName==="BUTTON")},[]),type:t?"button":void 0}}function tn(e){const{children:t,className:n,...r}=e,a=v.isValidElement(t)?v.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=R("chakra-button__icon",n);return d.jsx(I.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:i,children:a})}tn.displayName="ButtonIcon";function nn(e){const{label:t,placement:n,spacing:r="0.5rem",children:a=d.jsx(io,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:o,...s}=e,c=R("chakra-button__spinner",i),l=n==="start"?"marginEnd":"marginStart",u=v.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[l]:t?r:0,fontSize:"1em",lineHeight:"normal",...o}),[o,t,l,r]);return d.jsx(I.div,{className:c,...s,__css:u,children:a})}nn.displayName="ButtonSpinner";var sa=P((e,t)=>{const n=Ao(),r=Qe("Button",{...n,...e}),{isDisabled:a=n==null?void 0:n.isDisabled,isLoading:i,isActive:o,children:s,leftIcon:c,rightIcon:l,loadingText:u,iconSpacing:f="0.5rem",type:m,spinner:g,spinnerPlacement:h="start",className:p,as:b,...w}=Ie(e),k=v.useMemo(()=>{const T={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:T}}},[r,n]),{ref:C,type:A}=Eo(b),S={rightIcon:l,leftIcon:c,iconSpacing:f,children:s};return d.jsxs(I.button,{ref:ho(t,C),as:b,type:m??A,"data-active":or(o),"data-loading":or(i),__css:k,className:R("chakra-button",p),...w,disabled:a||i,children:[i&&h==="start"&&d.jsx(nn,{className:"chakra-button__spinner--start",label:u,placement:"start",spacing:f,children:g}),i?u||d.jsx(I.span,{opacity:0,children:d.jsx(lr,{...S})}):d.jsx(lr,{...S}),i&&h==="end"&&d.jsx(nn,{className:"chakra-button__spinner--end",label:u,placement:"end",spacing:f,children:g})]})});sa.displayName="Button";function lr(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return d.jsxs(d.Fragment,{children:[t&&d.jsx(tn,{marginEnd:a,children:t}),r,n&&d.jsx(tn,{marginStart:a,children:n})]})}var gt=P((e,t)=>{const{icon:n,children:r,isRound:a,"aria-label":i,...o}=e,s=n||r,c=v.isValidElement(s)?v.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return d.jsx(sa,{padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":i,...o,children:c})});gt.displayName="IconButton";function Oo(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var ca={exports:{}},Po="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",No=Po,_o=No;function la(){}function ua(){}ua.resetWarningCache=la;var Io=function(){function e(r,a,i,o,s,c){if(c!==_o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ua,resetWarningCache:la};return n.PropTypes=n,n};ca.exports=Io();var To=ca.exports;const E=ro(To);var rn="data-focus-lock",fa="data-focus-lock-disabled",jo="data-no-focus-lock",Mo="data-autofocus-inside",Lo="data-no-autofocus";function Rt(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Fo(e,t){var n=v.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var Ro=typeof window<"u"?v.useLayoutEffect:v.useEffect,ur=new WeakMap;function da(e,t){var n=Fo(null,function(r){return e.forEach(function(a){return Rt(a,r)})});return Ro(function(){var r=ur.get(n);if(r){var a=new Set(r),i=new Set(e),o=n.current;a.forEach(function(s){i.has(s)||Rt(s,null)}),i.forEach(function(s){a.has(s)||Rt(s,o)})}ur.set(n,e)},[e]),n}var Dt={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},H=function(){return H=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},H.apply(this,arguments)};function ma(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function Do(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function va(e){return e}function pa(e,t){t===void 0&&(t=va);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var o=t(i,r);return n.push(o),function(){n=n.filter(function(s){return s!==o})}},assignSyncMedium:function(i){for(r=!0;n.length;){var o=n;n=[],o.forEach(i)}n={push:function(s){return i(s)},filter:function(){return n}}},assignMedium:function(i){r=!0;var o=[];if(n.length){var s=n;n=[],s.forEach(i),o=n}var c=function(){var u=o;o=[],u.forEach(i)},l=function(){return Promise.resolve().then(c)};l(),n={push:function(u){o.push(u),l()},filter:function(u){return o=o.filter(u),n}}}};return a}function Nn(e,t){return t===void 0&&(t=va),pa(e,t)}function ga(e){e===void 0&&(e={});var t=pa(null);return t.options=H({async:!0,ssr:!1},e),t}var ha=function(e){var t=e.sideCar,n=ma(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return v.createElement(r,H({},n))};ha.isSideCarExport=!0;function zo(e,t){return e.useMedium(t),ha}var ba=Nn({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),ya=Nn(),Wo=Nn(),Bo=ga({async:!0,ssr:typeof document<"u"}),Vo=v.createContext(void 0),Ho=[],_n=v.forwardRef(function(t,n){var r,a=v.useState(),i=a[0],o=a[1],s=v.useRef(),c=v.useRef(!1),l=v.useRef(null),u=v.useState({}),f=u[1],m=t.children,g=t.disabled,h=g===void 0?!1:g,p=t.noFocusGuards,b=p===void 0?!1:p,w=t.persistentFocus,k=w===void 0?!1:w,C=t.crossFrame,A=C===void 0?!0:C,S=t.autoFocus,T=S===void 0?!0:S;t.allowTextSelection;var M=t.group,D=t.className,O=t.whiteList,U=t.hasPositiveIndices,de=t.shards,Mt=de===void 0?Ho:de,tr=t.as,Bi=tr===void 0?"div":tr,nr=t.lockProps,Vi=nr===void 0?{}:nr,Hi=t.sideCar,rr=t.returnFocus,nt=rr===void 0?!1:rr,Gi=t.focusOptions,Lt=t.onActivation,Ft=t.onDeactivation,$i=v.useState({}),Ui=$i[0],Yi=v.useCallback(function(Y){var me=Y.captureFocusRestore;if(!l.current){var ve,ae=(ve=document)==null?void 0:ve.activeElement;l.current=ae,ae!==document.body&&(l.current=me(ae))}s.current&&Lt&&Lt(s.current),c.current=!0,f()},[Lt]),Xi=v.useCallback(function(){c.current=!1,Ft&&Ft(s.current),f()},[Ft]),qi=v.useCallback(function(Y){var me=l.current;if(me){var ve=(typeof me=="function"?me():me)||document.body,ae=typeof nt=="function"?nt(ve):nt;if(ae){var ir=typeof ae=="object"?ae:void 0;l.current=null,Y?Promise.resolve().then(function(){return ve.focus(ir)}):ve.focus(ir)}}},[nt]),Zi=v.useCallback(function(Y){c.current&&ba.useMedium(Y)},[]),Ki=ya.useMedium,Qi=v.useCallback(function(Y){s.current!==Y&&(s.current=Y,o(Y))},[]),Ji=Zt((r={},r[fa]=h&&"disabled",r[rn]=M,r),Vi),ar=b!==!0,eo=ar&&b!=="tail",to=da([n,Qi]),no=v.useMemo(function(){return{observed:s,shards:Mt,enabled:!h,active:c.current}},[h,c.current,Mt,i]);return v.createElement(v.Fragment,null,ar&&[v.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:h?-1:0,style:Dt}),U?v.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:h?-1:1,style:Dt}):null],!h&&v.createElement(Hi,{id:Ui,sideCar:Bo,observed:i,disabled:h,persistentFocus:k,crossFrame:A,autoFocus:T,whiteList:O,shards:Mt,onActivation:Yi,onDeactivation:Xi,returnFocus:qi,focusOptions:Gi}),v.createElement(Bi,Zt({ref:to},Ji,{className:D,onBlur:Ki,onFocus:Zi}),v.createElement(Vo.Provider,{value:no},m)),eo&&v.createElement("div",{"data-focus-guard":!0,tabIndex:h?-1:0,style:Dt}))});_n.propTypes={};function an(e,t){return an=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},an(e,t)}function Go(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,an(e,t)}function He(e){"@babel/helpers - typeof";return He=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},He(e)}function $o(e,t){if(He(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(He(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Uo(e){var t=$o(e,"string");return He(t)=="symbol"?t:t+""}function Yo(e,t,n){return(t=Uo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xo(e,t){function n(r){return r.displayName||r.name||"Component"}return function(a){var i=[],o;function s(){o=e(i.map(function(l){return l.props})),t(o)}var c=function(l){Go(u,l);function u(){return l.apply(this,arguments)||this}u.peek=function(){return o};var f=u.prototype;return f.componentDidMount=function(){i.push(this),s()},f.componentDidUpdate=function(){s()},f.componentWillUnmount=function(){var g=i.indexOf(this);i.splice(g,1),s()},f.render=function(){return En.createElement(a,this.props)},u}(v.PureComponent);return Yo(c,"displayName","SideEffect("+n(a)+")"),c}}var $=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},le=function(e){return Array.isArray(e)?e:[e]},xa=function(e){return Array.isArray(e)?e[0]:e},qo=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},wa=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},ka=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Zo=function(e){return e.hasAttribute("inert")},Ko=function(e,t){return!e||ka(e)||!qo(e)&&!Zo(e)&&t(wa(e))},Ca=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Ko(t,Ca.bind(void 0,e));return e.set(t,r),r},Qo=function(e,t){return e&&!ka(e)?ts(e)?t(wa(e)):!1:!0},Sa=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Qo(t,Sa.bind(void 0,e));return e.set(t,r),r},Aa=function(e){return e.dataset},Jo=function(e){return e.tagName==="BUTTON"},Ea=function(e){return e.tagName==="INPUT"},Oa=function(e){return Ea(e)&&e.type==="radio"},es=function(e){return!((Ea(e)||Jo(e))&&(e.type==="hidden"||e.disabled))},ts=function(e){var t=e.getAttribute(Lo);return![!0,"true",""].includes(t)},In=function(e){var t;return!!(e&&(!((t=Aa(e))===null||t===void 0)&&t.focusGuard))},on=function(e){return!In(e)},ns=function(e){return!!e},rs=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),a=n-r,i=e.index-t.index;if(a){if(!n)return 1;if(!r)return-1}return a||i},as=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},Tn=function(e,t,n){return $(e).map(function(r,a){var i=as(r);return{node:r,index:a,tabIndex:n&&i===-1?(r.dataset||{}).focusGuard?0:-1:i}}).filter(function(r){return!t||r.tabIndex>=0}).sort(rs)},is=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],jn=is.join(","),os="".concat(jn,", [data-focus-guard]"),Pa=function(e,t){return $((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?os:jn)?[r]:[],Pa(r))},[])},ss=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?Ee([e.contentDocument.body],t):[e]},Ee=function(e,t){return e.reduce(function(n,r){var a,i=Pa(r,t),o=(a=[]).concat.apply(a,i.map(function(s){return ss(s,t)}));return n.concat(o,r.parentNode?$(r.parentNode.querySelectorAll(jn)).filter(function(s){return s===r}):[])},[])},cs=function(e){var t=e.querySelectorAll("[".concat(Mo,"]"));return $(t).map(function(n){return Ee([n])}).reduce(function(n,r){return n.concat(r)},[])},Mn=function(e,t){return $(e).filter(function(n){return Ca(t,n)}).filter(function(n){return es(n)})},fr=function(e,t){return t===void 0&&(t=new Map),$(e).filter(function(n){return Sa(t,n)})},Ln=function(e,t,n){return Tn(Mn(Ee(e,n),t),!0,n)},kt=function(e,t){return Tn(Mn(Ee(e),t),!1)},ls=function(e,t){return Mn(cs(e),t)},se=function(e,t){return e.shadowRoot?se(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:$(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var a=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return a?se(a,t):!1}return se(n,t)})},us=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var a=r+1;a<n;a+=1){var i=e[r].compareDocumentPosition(e[a]);(i&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(a),(i&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(o,s){return!t.has(s)})},Na=function(e){return e.parentNode?Na(e.parentNode):e},Fn=function(e){var t=le(e);return t.filter(Boolean).reduce(function(n,r){var a=r.getAttribute(rn);return n.push.apply(n,a?us($(Na(r).querySelectorAll("[".concat(rn,'="').concat(a,'"]:not([').concat(fa,'="disabled"])')))):[r]),n},[])},fs=function(e){try{return e()}catch{return}},Ge=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?Ge(t.shadowRoot):t instanceof HTMLIFrameElement&&fs(function(){return t.contentWindow.document})?Ge(t.contentWindow.document):t}},ds=function(e,t){return e===t},ms=function(e,t){return!!$(e.querySelectorAll("iframe")).some(function(n){return ds(n,t)})},_a=function(e,t){return t===void 0&&(t=Ge(xa(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Fn(e).some(function(n){return se(n,t)||ms(n,t)})},vs=function(e){e===void 0&&(e=document);var t=Ge(e);return t?$(e.querySelectorAll("[".concat(jo,"]"))).some(function(n){return se(n,t)}):!1},ps=function(e,t){return t.filter(Oa).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},Rn=function(e,t){return Oa(e)&&e.name?ps(e,t):e},gs=function(e){var t=new Set;return e.forEach(function(n){return t.add(Rn(n,e))}),e.filter(function(n){return t.has(n)})},dr=function(e){return e[0]&&e.length>1?Rn(e[0],e):e[0]},mr=function(e,t){return e.indexOf(Rn(t,e))},sn="NEW_FOCUS",hs=function(e,t,n,r,a){var i=e.length,o=e[0],s=e[i-1],c=In(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,u=a?n.indexOf(a):l,f=a?e.indexOf(a):-1;if(l===-1)return f!==-1?f:sn;if(f===-1)return sn;var m=l-u,g=n.indexOf(o),h=n.indexOf(s),p=gs(n),b=r!==void 0?p.indexOf(r):-1,w=b-(a?p.indexOf(a):l);if(!m&&f>=0||t.length===0)return f;var k=mr(e,t[0]),C=mr(e,t[t.length-1]);if(l<=g&&c&&Math.abs(m)>1)return C;if(l>=h&&c&&Math.abs(m)>1)return k;if(m&&Math.abs(w)>1)return f;if(l<=g)return C;if(l>h)return k;if(m)return Math.abs(m)>1?f:(i+f+m)%i}},bs=function(e){return function(t){var n,r=(n=Aa(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},vr=function(e,t,n){var r=e.map(function(i){var o=i.node;return o}),a=fr(r.filter(bs(n)));return a&&a.length?dr(a):dr(fr(t))},cn=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&cn(e.parentNode.host||e.parentNode,t),t},zt=function(e,t){for(var n=cn(e),r=cn(t),a=0;a<n.length;a+=1){var i=n[a];if(r.indexOf(i)>=0)return i}return!1},Ia=function(e,t,n){var r=le(e),a=le(t),i=r[0],o=!1;return a.filter(Boolean).forEach(function(s){o=zt(o||s,s)||o,n.filter(Boolean).forEach(function(c){var l=zt(i,c);l&&(!o||se(l,o)?o=l:o=zt(l,o))})}),o},pr=function(e,t){return e.reduce(function(n,r){return n.concat(ls(r,t))},[])},ys=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(ns)},xs=function(e,t){var n=Ge(le(e).length>0?document:xa(e).ownerDocument),r=Fn(e).filter(on),a=Ia(n||e,e,r),i=new Map,o=kt(r,i),s=o.filter(function(h){var p=h.node;return on(p)});if(s[0]){var c=kt([a],i).map(function(h){var p=h.node;return p}),l=ys(c,s),u=l.map(function(h){var p=h.node;return p}),f=l.filter(function(h){var p=h.tabIndex;return p>=0}).map(function(h){var p=h.node;return p}),m=hs(u,f,c,n,t);if(m===sn){var g=vr(o,f,pr(r,i))||vr(o,u,pr(r,i));if(g)return{node:g};console.warn("focus-lock: cannot find any node to move focus into");return}return m===void 0?m:l[m]}},ws=function(e){var t=Fn(e).filter(on),n=Ia(e,e,t),r=Tn(Ee([n],!0),!0,!0),a=Ee(t,!1);return r.map(function(i){var o=i.node,s=i.index;return{node:o,index:s,lockItem:a.indexOf(o)>=0,guard:In(o)}})},Dn=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},Wt=0,Bt=!1,Ta=function(e,t,n){n===void 0&&(n={});var r=xs(e,t);if(!Bt&&r){if(Wt>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),Bt=!0,setTimeout(function(){Bt=!1},1);return}Wt++,Dn(r.node,n.focusOptions),Wt--}};function Fe(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var ks=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:Fe(n),parent:Fe(n.parentElement),left:Fe(n.previousElementSibling),right:Fe(n.nextElementSibling)}),n=n.parentElement;return{element:Fe(e),stack:t,ownerDocument:e.ownerDocument}},Cs=function(e){var t,n,r,a,i;if(e)for(var o=e.stack,s=e.ownerDocument,c=new Map,l=0,u=o;l<u.length;l++){var f=u[l],m=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(m&&s.contains(m)){for(var g=(n=f.left)===null||n===void 0?void 0:n.call(f),h=f.current(),p=m.contains(h)?h:void 0,b=(r=f.right)===null||r===void 0?void 0:r.call(f),w=Ln([m],c),k=(i=(a=p??(g==null?void 0:g.nextElementSibling))!==null&&a!==void 0?a:b)!==null&&i!==void 0?i:g;k;){for(var C=0,A=w;C<A.length;C++){var S=A[C];if(k!=null&&k.contains(S.node))return S.node}k=k.nextElementSibling}if(w.length)return w[0].node}}},Ss=function(e){var t=ks(e);return function(){return Cs(t)}},As=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=le(t);if(r.every(function(o){return!se(o,e)}))return console.error("Active element is not contained in the scope"),{};var a=n?Ln(r,new Map):kt(r,new Map),i=a.findIndex(function(o){var s=o.node;return s===e});if(i!==-1)return{prev:a[i-1],next:a[i+1],first:a[0],last:a[a.length-1]}},Es=function(e,t){var n=t?Ln(le(e),new Map):kt(le(e),new Map);return{first:n[0],last:n[n.length-1]}},Os=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},ja=function(e,t,n){t===void 0&&(t={});var r=Os(t),a=As(e,r.scope,r.onlyTabbable);if(a){var i=n(a,r.cycle);i&&Dn(i.node,r.focusOptions)}},Ps=function(e,t){t===void 0&&(t={}),ja(e,t,function(n,r){var a=n.next,i=n.first;return a||r&&i})},Ns=function(e,t){t===void 0&&(t={}),ja(e,t,function(n,r){var a=n.prev,i=n.last;return a||r&&i})},Ma=function(e,t,n){var r,a=Es(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),i=a[n];i&&Dn(i.node,t.focusOptions)},_s=function(e,t){t===void 0&&(t={}),Ma(e,t,"first")},Is=function(e,t){t===void 0&&(t={}),Ma(e,t,"last")};function zn(e){setTimeout(e,1)}var Ts=function(t){return t&&"current"in t?t.current:t},js=function(){return document&&document.activeElement===document.body},Ms=function(){return js()||vs()},ke=null,be=null,Ce=null,$e=!1,Ls=function(){return!0},Fs=function(t){return(ke.whiteList||Ls)(t)},Rs=function(t,n){Ce={observerNode:t,portaledElement:n}},Ds=function(t){return Ce&&Ce.portaledElement===t};function gr(e,t,n,r){var a=null,i=e;do{var o=r[i];if(o.guard)o.node.dataset.focusAutoGuard&&(a=o);else if(o.lockItem){if(i!==e)return;a=null}else break}while((i+=n)!==t);a&&(a.node.tabIndex=0)}var zs=function(t){return t?!!$e:$e==="meanwhile"},Ws=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Bs=function(t,n){return n.some(function(r){return Ws(t,r,r)})},Ct=function(){var t=!1;if(ke){var n=ke,r=n.observed,a=n.persistentFocus,i=n.autoFocus,o=n.shards,s=n.crossFrame,c=n.focusOptions,l=r||Ce&&Ce.portaledElement,u=document&&document.activeElement;if(l){var f=[l].concat(o.map(Ts).filter(Boolean));if((!u||Fs(u))&&(a||zs(s)||!Ms()||!be&&i)&&(l&&!(_a(f)||u&&Bs(u,f)||Ds(u))&&(document&&!be&&u&&!i?(u.blur&&u.blur(),document.body.focus()):(t=Ta(f,be,{focusOptions:c}),Ce={})),$e=!1,be=document&&document.activeElement),document&&u!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var m=document&&document.activeElement,g=ws(f),h=g.map(function(p){var b=p.node;return b}).indexOf(m);h>-1&&(g.filter(function(p){var b=p.guard,w=p.node;return b&&w.dataset.focusAutoGuard}).forEach(function(p){var b=p.node;return b.removeAttribute("tabIndex")}),gr(h,g.length,1,g),gr(h,-1,-1,g))}}}return t},La=function(t){Ct()&&t&&(t.stopPropagation(),t.preventDefault())},Wn=function(){return zn(Ct)},Vs=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Rs(r,n)},Hs=function(){return null},Fa=function(){$e="just",zn(function(){$e="meanwhile"})},Gs=function(){document.addEventListener("focusin",La),document.addEventListener("focusout",Wn),window.addEventListener("blur",Fa)},$s=function(){document.removeEventListener("focusin",La),document.removeEventListener("focusout",Wn),window.removeEventListener("blur",Fa)};function Us(e){return e.filter(function(t){var n=t.disabled;return!n})}var Ra={moveFocusInside:Ta,focusInside:_a,focusNextElement:Ps,focusPrevElement:Ns,focusFirstElement:_s,focusLastElement:Is,captureFocusRestore:Ss};function Ys(e){var t=e.slice(-1)[0];t&&!ke&&Gs();var n=ke,r=n&&t&&t.id===n.id;ke=t,n&&!r&&(n.onDeactivation(),e.filter(function(a){var i=a.id;return i===n.id}).length||n.returnFocus(!t)),t?(be=null,(!r||n.observed!==t.observed)&&t.onActivation(Ra),Ct(),zn(Ct)):($s(),be=null)}ba.assignSyncMedium(Vs);ya.assignMedium(Wn);Wo.assignMedium(function(e){return e(Ra)});const Xs=Xo(Us,Ys)(Hs);var ln=v.forwardRef(function(t,n){return v.createElement(_n,Zt({sideCar:Xs,ref:n},t))}),Da=_n.propTypes||{};Da.sideCar;Oo(Da,["sideCar"]);ln.propTypes={};function qs(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function Zs(e){var t;if(!qs(e))return!1;const n=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof n.HTMLElement}var Ks=e=>e.hasAttribute("tabindex");function Qs(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function za(e){return e.parentElement&&za(e.parentElement)?!0:e.hidden}function Js(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function ec(e){if(!Zs(e)||za(e)||Qs(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in r?r[t]():Js(e)?!0:Ks(e)}var tc=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],nc=tc.join(),rc=e=>e.offsetWidth>0&&e.offsetHeight>0;function ac(e){const t=Array.from(e.querySelectorAll(nc));return t.unshift(e),t.filter(n=>ec(n)&&rc(n))}var hr,ic=(hr=ln.default)!=null?hr:ln,Wa=e=>{const{initialFocusRef:t,finalFocusRef:n,contentRef:r,restoreFocus:a,children:i,isDisabled:o,autoFocus:s,persistentFocus:c,lockFocusAcrossFrames:l}=e,u=v.useCallback(()=>{t!=null&&t.current?t.current.focus():r!=null&&r.current&&ac(r.current).length===0&&requestAnimationFrame(()=>{var h;(h=r.current)==null||h.focus()})},[t,r]),f=v.useCallback(()=>{var g;(g=n==null?void 0:n.current)==null||g.focus()},[n]),m=a&&!n;return d.jsx(ic,{crossFrame:l,persistentFocus:c,autoFocus:s,disabled:o,onActivation:u,onDeactivation:f,returnFocus:m,children:i})};Wa.displayName="FocusLock";var oc=po?v.useLayoutEffect:v.useEffect;function br(e,t=[]){const n=v.useRef(e);return oc(()=>{n.current=e}),v.useCallback((...r)=>{var a;return(a=n.current)==null?void 0:a.call(n,...r)},t)}function sc(e,t){const n=v.useId();return v.useMemo(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}function cc(e,t){const n=e!==void 0;return[n,n&&typeof e<"u"?e:t]}function lc(e={}){const{onClose:t,onOpen:n,isOpen:r,id:a}=e,i=br(n),o=br(t),[s,c]=v.useState(e.defaultIsOpen||!1),[l,u]=cc(r,s),f=sc(a,"disclosure"),m=v.useCallback(()=>{l||c(!1),o==null||o()},[l,o]),g=v.useCallback(()=>{l||c(!0),i==null||i()},[l,i]),h=v.useCallback(()=>{(u?m:g)()},[u,g,m]);return{isOpen:!!u,onOpen:g,onClose:m,onToggle:h,isControlled:l,getButtonProps:(p={})=>({...p,"aria-expanded":u,"aria-controls":f,onClick:oo(p.onClick,h)}),getDisclosureProps:(p={})=>({...p,hidden:!u,id:f})}}var Ba=P(function(t,n){const r=Qe("Link",t),{className:a,isExternal:i,...o}=Ie(t);return d.jsx(I.a,{target:i?"_blank":void 0,rel:i?"noopener":void 0,ref:n,className:R("chakra-link",a),...o,__css:r})});Ba.displayName="Link";var Pt=P(function(t,n){const{templateAreas:r,gap:a,rowGap:i,columnGap:o,column:s,row:c,autoFlow:l,autoRows:u,templateRows:f,autoColumns:m,templateColumns:g,...h}=t,p={display:"grid",gridTemplateAreas:r,gridGap:a,gridRowGap:i,gridColumnGap:o,gridAutoColumns:m,gridColumn:s,gridRow:c,gridAutoFlow:l,gridAutoRows:u,gridTemplateRows:f,gridTemplateColumns:g};return d.jsx(I.div,{ref:n,__css:p,...h})});Pt.displayName="Grid";function Va(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):so(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}var q=P(function(t,n){const r=Qe("Text",t),{className:a,align:i,decoration:o,casing:s,...c}=Ie(t),l=aa({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return d.jsx(I.p,{ref:n,className:R("chakra-text",t.className),...l,...c,__css:r})});q.displayName="Text";var Ha=e=>d.jsx(I.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});Ha.displayName="StackItem";function uc(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Va(n,a=>r[a])}}var Oe=P((e,t)=>{const{isInline:n,direction:r,align:a,justify:i,spacing:o="0.5rem",wrap:s,children:c,divider:l,className:u,shouldWrapChildren:f,...m}=e,g=n?"row":r??"column",h=v.useMemo(()=>uc({spacing:o,direction:g}),[o,g]),p=!!l,b=!f&&!p,w=v.useMemo(()=>{const C=So(c);return b?C:C.map((A,S)=>{const T=typeof A.key<"u"?A.key:S,M=S+1===C.length,O=f?d.jsx(Ha,{children:A},T):A;if(!p)return O;const U=v.cloneElement(l,{__css:h}),de=M?null:U;return d.jsxs(v.Fragment,{children:[O,de]},T)})},[l,h,p,b,f,c]),k=R("chakra-stack",u);return d.jsx(I.div,{ref:t,display:"flex",alignItems:a,justifyContent:i,flexDirection:g,flexWrap:s,gap:p?void 0:o,className:k,...m,children:w})});Oe.displayName="Stack";var Ga=P((e,t)=>d.jsx(Oe,{align:"center",...e,direction:"column",ref:t}));Ga.displayName="VStack";var $a=P((e,t)=>d.jsx(Oe,{align:"center",...e,direction:"row",ref:t}));$a.displayName="HStack";function yr(e){return Va(e,t=>t==="auto"?"auto":`span ${t}/span ${t}`)}var ce=P(function(t,n){const{area:r,colSpan:a,colStart:i,colEnd:o,rowEnd:s,rowSpan:c,rowStart:l,...u}=t,f=aa({gridArea:r,gridColumn:yr(a),gridRow:yr(c),gridColumnStart:i,gridColumnEnd:o,gridRowStart:l,gridRowEnd:s});return d.jsx(I.div,{ref:n,__css:f,...u})});ce.displayName="GridItem";var F=I("div");F.displayName="Box";var Ua=P(function(t,n){const{size:r,centerContent:a=!0,...i}=t,o=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return d.jsx(F,{ref:n,boxSize:r,__css:{...o,flexShrink:0,flexGrow:0},...i})});Ua.displayName="Square";var fc=P(function(t,n){const{size:r,...a}=t;return d.jsx(Ua,{size:r,ref:n,borderRadius:"9999px",...a})});fc.displayName="Circle";var Bn=P(function(t,n){const{className:r,centerContent:a,...i}=Ie(t),o=Qe("Container",t);return d.jsx(I.div,{ref:n,className:R("chakra-container",r),...i,__css:{...o,...a&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});Bn.displayName="Container";var Ya=P(function(t,n){const{borderLeftWidth:r,borderBottomWidth:a,borderTopWidth:i,borderRightWidth:o,borderWidth:s,borderStyle:c,borderColor:l,...u}=Qe("Divider",t),{className:f,orientation:m="horizontal",__css:g,...h}=Ie(t),p={vertical:{borderLeftWidth:r||o||s||"1px",height:"100%"},horizontal:{borderBottomWidth:a||i||s||"1px",width:"100%"}};return d.jsx(I.hr,{ref:n,"aria-orientation":m,...h,__css:{...u,border:"0",borderColor:l,borderStyle:c,...p[m],...g},className:R("chakra-divider",f)})});Ya.displayName="Divider";var Pe=P(function(t,n){const{direction:r,align:a,justify:i,wrap:o,basis:s,grow:c,shrink:l,...u}=t,f={display:"flex",flexDirection:r,alignItems:a,justifyContent:i,flexWrap:o,flexBasis:s,flexGrow:c,flexShrink:l};return d.jsx(I.div,{ref:n,__css:f,...u})});Pe.displayName="Flex";var dc=Object.defineProperty,mc=(e,t,n)=>t in e?dc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vc=(e,t,n)=>(mc(e,t+"",n),n),pc=class{constructor(){vc(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},un=new pc;function Xa(e,t){const[n,r]=v.useState(0);return v.useEffect(()=>{const a=e.current;if(a){if(t){const i=un.add(a);r(i)}return()=>{un.remove(a),r(0)}}},[t,e]),n}var gc=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},pe=new WeakMap,rt=new WeakMap,at={},Vt=0,qa=function(e){return e&&(e.host||qa(e.parentNode))},hc=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=qa(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},bc=function(e,t,n,r){var a=hc(t,Array.isArray(e)?e:[e]);at[n]||(at[n]=new WeakMap);var i=at[n],o=[],s=new Set,c=new Set(a),l=function(f){!f||s.has(f)||(s.add(f),l(f.parentNode))};a.forEach(l);var u=function(f){!f||c.has(f)||Array.prototype.forEach.call(f.children,function(m){if(s.has(m))u(m);else try{var g=m.getAttribute(r),h=g!==null&&g!=="false",p=(pe.get(m)||0)+1,b=(i.get(m)||0)+1;pe.set(m,p),i.set(m,b),o.push(m),p===1&&h&&rt.set(m,!0),b===1&&m.setAttribute(n,"true"),h||m.setAttribute(r,"true")}catch(w){console.error("aria-hidden: cannot operate on ",m,w)}})};return u(t),s.clear(),Vt++,function(){o.forEach(function(f){var m=pe.get(f)-1,g=i.get(f)-1;pe.set(f,m),i.set(f,g),m||(rt.has(f)||f.removeAttribute(r),rt.delete(f)),g||f.removeAttribute(n)}),Vt--,Vt||(pe=new WeakMap,pe=new WeakMap,rt=new WeakMap,at={})}},yc=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=gc(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),bc(r,a,n,"aria-hidden")):function(){return null}};function xc(e){const{isOpen:t,onClose:n,id:r,closeOnOverlayClick:a=!0,closeOnEsc:i=!0,useInert:o=!0,onOverlayClick:s,onEsc:c}=e,l=v.useRef(null),u=v.useRef(null),[f,m,g]=kc(r,"chakra-modal","chakra-modal--header","chakra-modal--body");wc(l,t&&o);const h=Xa(l,t),p=v.useRef(null),b=v.useCallback(O=>{p.current=O.target},[]),w=v.useCallback(O=>{O.key==="Escape"&&(O.stopPropagation(),i&&(n==null||n()),c==null||c())},[i,n,c]),[k,C]=v.useState(!1),[A,S]=v.useState(!1),T=v.useCallback((O={},U=null)=>({role:"dialog",...O,ref:Kt(U,l),id:f,tabIndex:-1,"aria-modal":!0,"aria-labelledby":k?m:void 0,"aria-describedby":A?g:void 0,onClick:Re(O.onClick,de=>de.stopPropagation())}),[g,A,f,m,k]),M=v.useCallback(O=>{O.stopPropagation(),p.current===O.target&&un.isTopModal(l.current)&&(a&&(n==null||n()),s==null||s())},[n,a,s]),D=v.useCallback((O={},U=null)=>({...O,ref:Kt(U,u),onClick:Re(O.onClick,M),onKeyDown:Re(O.onKeyDown,w),onMouseDown:Re(O.onMouseDown,b)}),[w,b,M]);return{isOpen:t,onClose:n,headerId:m,bodyId:g,setBodyMounted:S,setHeaderMounted:C,dialogRef:l,overlayRef:u,getDialogProps:T,getDialogContainerProps:D,index:h}}function wc(e,t){const n=e.current;v.useEffect(()=>{if(!(!e.current||!t))return yc(e.current)},[t,e,n])}function kc(e,...t){const n=v.useId(),r=e||n;return v.useMemo(()=>t.map(a=>`${a}-${r}`),[r,t])}var[Cc,Te]=Ke({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[Sc,je]=Ke({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Za=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:n,children:r,autoFocus:a,trapFocus:i,initialFocusRef:o,finalFocusRef:s,returnFocusOnClose:c,blockScrollOnMount:l,allowPinchZoom:u,preserveScrollBarGap:f,motionPreset:m,lockFocusAcrossFrames:g,onCloseComplete:h}=t,p=ra("Modal",t),w={...xc(t),autoFocus:a,trapFocus:i,initialFocusRef:o,finalFocusRef:s,returnFocusOnClose:c,blockScrollOnMount:l,allowPinchZoom:u,preserveScrollBarGap:f,motionPreset:m,lockFocusAcrossFrames:g};return d.jsx(Sc,{value:w,children:d.jsx(Cc,{value:p,children:d.jsx(On,{onExitComplete:h,children:w.isOpen&&d.jsx(co,{...n,children:r})})})})};Za.displayName="Modal";var ht="right-scroll-bar-position",bt="width-before-scroll-bar",Ac="with-scroll-bars-hidden",Ec="--removed-body-scroll-bar-size",Ka=ga(),Ht=function(){},Nt=v.forwardRef(function(e,t){var n=v.useRef(null),r=v.useState({onScrollCapture:Ht,onWheelCapture:Ht,onTouchMoveCapture:Ht}),a=r[0],i=r[1],o=e.forwardProps,s=e.children,c=e.className,l=e.removeScrollBar,u=e.enabled,f=e.shards,m=e.sideCar,g=e.noIsolation,h=e.inert,p=e.allowPinchZoom,b=e.as,w=b===void 0?"div":b,k=e.gapMode,C=ma(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),A=m,S=da([n,t]),T=H(H({},C),a);return v.createElement(v.Fragment,null,u&&v.createElement(A,{sideCar:Ka,removeScrollBar:l,shards:f,noIsolation:g,inert:h,setCallbacks:i,allowPinchZoom:!!p,lockRef:n,gapMode:k}),o?v.cloneElement(v.Children.only(s),H(H({},T),{ref:S})):v.createElement(w,H({},T,{className:c,ref:S}),s))});Nt.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Nt.classNames={fullWidth:bt,zeroRight:ht};var Oc=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Pc(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Oc();return t&&e.setAttribute("nonce",t),e}function Nc(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function _c(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Ic=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Pc())&&(Nc(t,n),_c(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Tc=function(){var e=Ic();return function(t,n){v.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Qa=function(){var e=Tc(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},jc={left:0,top:0,right:0,gap:0},Gt=function(e){return parseInt(e||"",10)||0},Mc=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[Gt(n),Gt(r),Gt(a)]},Lc=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return jc;var t=Mc(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Fc=Qa(),Se="data-scroll-locked",Rc=function(e,t,n,r){var a=e.left,i=e.top,o=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Ac,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(Se,`] {
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
  
  .`).concat(ht,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(bt,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(ht," .").concat(ht,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(bt," .").concat(bt,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Se,`] {
    `).concat(Ec,": ").concat(s,`px;
  }
`)},xr=function(){var e=parseInt(document.body.getAttribute(Se)||"0",10);return isFinite(e)?e:0},Dc=function(){v.useEffect(function(){return document.body.setAttribute(Se,(xr()+1).toString()),function(){var e=xr()-1;e<=0?document.body.removeAttribute(Se):document.body.setAttribute(Se,e.toString())}},[])},zc=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;Dc();var i=v.useMemo(function(){return Lc(a)},[a]);return v.createElement(Fc,{styles:Rc(i,!t,a,n?"":"!important")})},fn=!1;if(typeof window<"u")try{var it=Object.defineProperty({},"passive",{get:function(){return fn=!0,!0}});window.addEventListener("test",it,it),window.removeEventListener("test",it,it)}catch{fn=!1}var ge=fn?{passive:!1}:!1,Wc=function(e){return e.tagName==="TEXTAREA"},Ja=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Wc(e)&&n[t]==="visible")},Bc=function(e){return Ja(e,"overflowY")},Vc=function(e){return Ja(e,"overflowX")},wr=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=ei(e,r);if(a){var i=ti(e,r),o=i[1],s=i[2];if(o>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Hc=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Gc=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},ei=function(e,t){return e==="v"?Bc(t):Vc(t)},ti=function(e,t){return e==="v"?Hc(t):Gc(t)},$c=function(e,t){return e==="h"&&t==="rtl"?-1:1},Uc=function(e,t,n,r,a){var i=$c(e,window.getComputedStyle(t).direction),o=i*r,s=n.target,c=t.contains(s),l=!1,u=o>0,f=0,m=0;do{var g=ti(e,s),h=g[0],p=g[1],b=g[2],w=p-b-i*h;(h||w)&&ei(e,s)&&(f+=w,m+=h),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!c&&s!==document.body||c&&(t.contains(s)||t===s));return(u&&(Math.abs(f)<1||!a)||!u&&(Math.abs(m)<1||!a))&&(l=!0),l},ot=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},kr=function(e){return[e.deltaX,e.deltaY]},Cr=function(e){return e&&"current"in e?e.current:e},Yc=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Xc=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},qc=0,he=[];function Zc(e){var t=v.useRef([]),n=v.useRef([0,0]),r=v.useRef(),a=v.useState(qc++)[0],i=v.useState(Qa)[0],o=v.useRef(e);v.useEffect(function(){o.current=e},[e]),v.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var p=Do([e.lockRef.current],(e.shards||[]).map(Cr),!0).filter(Boolean);return p.forEach(function(b){return b.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),p.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var s=v.useCallback(function(p,b){if("touches"in p&&p.touches.length===2)return!o.current.allowPinchZoom;var w=ot(p),k=n.current,C="deltaX"in p?p.deltaX:k[0]-w[0],A="deltaY"in p?p.deltaY:k[1]-w[1],S,T=p.target,M=Math.abs(C)>Math.abs(A)?"h":"v";if("touches"in p&&M==="h"&&T.type==="range")return!1;var D=wr(M,T);if(!D)return!0;if(D?S=M:(S=M==="v"?"h":"v",D=wr(M,T)),!D)return!1;if(!r.current&&"changedTouches"in p&&(C||A)&&(r.current=S),!S)return!0;var O=r.current||S;return Uc(O,b,p,O==="h"?C:A,!0)},[]),c=v.useCallback(function(p){var b=p;if(!(!he.length||he[he.length-1]!==i)){var w="deltaY"in b?kr(b):ot(b),k=t.current.filter(function(S){return S.name===b.type&&(S.target===b.target||b.target===S.shadowParent)&&Yc(S.delta,w)})[0];if(k&&k.should){b.cancelable&&b.preventDefault();return}if(!k){var C=(o.current.shards||[]).map(Cr).filter(Boolean).filter(function(S){return S.contains(b.target)}),A=C.length>0?s(b,C[0]):!o.current.noIsolation;A&&b.cancelable&&b.preventDefault()}}},[]),l=v.useCallback(function(p,b,w,k){var C={name:p,delta:b,target:w,should:k,shadowParent:Kc(w)};t.current.push(C),setTimeout(function(){t.current=t.current.filter(function(A){return A!==C})},1)},[]),u=v.useCallback(function(p){n.current=ot(p),r.current=void 0},[]),f=v.useCallback(function(p){l(p.type,kr(p),p.target,s(p,e.lockRef.current))},[]),m=v.useCallback(function(p){l(p.type,ot(p),p.target,s(p,e.lockRef.current))},[]);v.useEffect(function(){return he.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:m}),document.addEventListener("wheel",c,ge),document.addEventListener("touchmove",c,ge),document.addEventListener("touchstart",u,ge),function(){he=he.filter(function(p){return p!==i}),document.removeEventListener("wheel",c,ge),document.removeEventListener("touchmove",c,ge),document.removeEventListener("touchstart",u,ge)}},[]);var g=e.removeScrollBar,h=e.inert;return v.createElement(v.Fragment,null,h?v.createElement(i,{styles:Xc(a)}):null,g?v.createElement(zc,{gapMode:e.gapMode}):null)}function Kc(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Qc=zo(Ka,Zc);var ni=v.forwardRef(function(e,t){return v.createElement(Nt,H({},e,{ref:t,sideCar:Qc}))});ni.classNames=Nt.classNames;function Jc(e){const{autoFocus:t,trapFocus:n,dialogRef:r,initialFocusRef:a,blockScrollOnMount:i,allowPinchZoom:o,finalFocusRef:s,returnFocusOnClose:c,preserveScrollBarGap:l,lockFocusAcrossFrames:u,isOpen:f}=je(),[m,g]=lo();v.useEffect(()=>{!m&&g&&setTimeout(g)},[m,g]);const h=Xa(r,f);return d.jsx(Wa,{autoFocus:t,isDisabled:!n,initialFocusRef:a,finalFocusRef:s,restoreFocus:c,contentRef:r,lockFocusAcrossFrames:u,children:d.jsx(ni,{removeScrollBar:!l,allowPinchZoom:o,enabled:h===1&&i,forwardProps:!0,children:e.children})})}var[el,tl]=Ke(),nl={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function rl(e,t){var n,r;if(e)return(r=(n=nl[e])==null?void 0:n[t])!=null?r:e}function al(e){var t;const{isOpen:n,onClose:r,placement:a="right",children:i,...o}=e,s=uo(),c=(t=s.components)==null?void 0:t.Drawer,l=rl(a,s.direction);return d.jsx(el,{value:{placement:l},children:d.jsx(Za,{isOpen:n,onClose:r,styleConfig:c,...o,children:i})})}var il=I(oa),ri=P((e,t)=>{const{className:n,children:r,motionProps:a,containerProps:i,...o}=e,{getDialogProps:s,getDialogContainerProps:c,isOpen:l}=je(),u=s(o,t),f=c(i),m=R("chakra-modal__content",n),g=Te(),h={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...g.dialog},p={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...g.dialogContainer},{placement:b}=tl();return d.jsx(Jc,{children:d.jsx(I.div,{...f,className:"chakra-modal__content-container",__css:p,children:d.jsx(il,{motionProps:a,direction:b,in:l,className:m,...u,__css:h,children:r})})})});ri.displayName="DrawerContent";var ai=P((e,t)=>{const{className:n,...r}=e,a=R("chakra-modal__footer",n),o={display:"flex",alignItems:"center",justifyContent:"flex-end",...Te().footer};return d.jsx(I.footer,{ref:t,...r,__css:o,className:a})});ai.displayName="ModalFooter";var ii=P((e,t)=>{const{className:n,...r}=e,{headerId:a,setHeaderMounted:i}=je();v.useEffect(()=>(i(!0),()=>i(!1)),[i]);const o=R("chakra-modal__header",n),c={flex:0,...Te().header};return d.jsx(I.header,{ref:t,className:o,id:a,...r,__css:c})});ii.displayName="ModalHeader";var ol=I(_e.div),oi=P((e,t)=>{const{className:n,transition:r,motionProps:a,...i}=e,o=R("chakra-modal__overlay",n),c={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...Te().overlay},{motionPreset:l}=je(),f=a||(l==="none"?{}:ia);return d.jsx(ol,{...f,__css:c,ref:t,className:o,...i})});oi.displayName="ModalOverlay";var si=P((e,t)=>{const{className:n,...r}=e,{bodyId:a,setBodyMounted:i}=je();v.useEffect(()=>(i(!0),()=>i(!1)),[i]);const o=R("chakra-modal__body",n),s=Te();return d.jsx(I.div,{ref:t,className:o,id:a,...r,__css:s.body})});si.displayName="ModalBody";var ci=P((e,t)=>{const{onClick:n,className:r,...a}=e,{onClose:i}=je(),o=R("chakra-modal__close-btn",r),s=Te();return d.jsx(fo,{ref:t,__css:s.closeButton,className:o,onClick:Re(n,c=>{c.stopPropagation(),i()}),...a})});ci.displayName="ModalCloseButton";var[sl,li]=Ke({name:"TagStylesContext",errorMessage:`useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `}),ze=P((e,t)=>{const n=ra("Tag",e),r=Ie(e),a={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...n.container};return d.jsx(sl,{value:n,children:d.jsx(I.span,{ref:t,...r,__css:a})})});ze.displayName="Tag";var cl=P((e,t)=>{const n=li();return d.jsx(I.span,{ref:t,noOfLines:1,...e,__css:n.label})});cl.displayName="TagLabel";var ll=P((e,t)=>d.jsx(Pn,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e}));ll.displayName="TagLeftIcon";var ul=P((e,t)=>d.jsx(Pn,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e}));ul.displayName="TagRightIcon";var ui=e=>d.jsx(Pn,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:d.jsx("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});ui.displayName="TagCloseIcon";var fl=P((e,t)=>{const{isDisabled:n,children:r,...a}=e,o={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...li().closeButton};return d.jsx(I.button,{ref:t,"aria-label":"close",...a,type:"button",disabled:n,__css:o,children:r||d.jsx(ui,{})})});fl.displayName="TagCloseButton";const Sr="/assets/logo-dark-CgFk4jlR.svg",Ar="/assets/logo-light-DyBc02vJ.svg";function Er(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Er(Object(n),!0).forEach(function(r){L(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Er(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function St(e){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},St(e)}function dl(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ml(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vl(e,t,n){return t&&ml(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vn(e,t){return gl(e)||bl(e,t)||fi(e,t)||xl()}function Je(e){return pl(e)||hl(e)||fi(e)||yl()}function pl(e){if(Array.isArray(e))return dn(e)}function gl(e){if(Array.isArray(e))return e}function hl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bl(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(c){i=!0,s=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function fi(e,t){if(e){if(typeof e=="string")return dn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dn(e,t)}}function dn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Or=function(){},Hn={},di={},mi=null,vi={mark:Or,measure:Or};try{typeof window<"u"&&(Hn=window),typeof document<"u"&&(di=document),typeof MutationObserver<"u"&&(mi=MutationObserver),typeof performance<"u"&&(vi=performance)}catch{}var wl=Hn.navigator||{},Pr=wl.userAgent,Nr=Pr===void 0?"":Pr,te=Hn,_=di,_r=mi,st=vi;te.document;var J=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",pi=~Nr.indexOf("MSIE")||~Nr.indexOf("Trident/"),ct,lt,ut,ft,dt,Z="___FONT_AWESOME___",mn=16,gi="fa",hi="svg-inline--fa",ue="data-fa-i2svg",vn="data-fa-pseudo-element",kl="data-fa-pseudo-element-pending",Gn="data-prefix",$n="data-icon",Ir="fontawesome-i2svg",Cl="async",Sl=["HTML","HEAD","STYLE","SCRIPT"],bi=function(){try{return!0}catch{return!1}}(),N="classic",j="sharp",Un=[N,j];function et(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[N]}})}var Ue=et((ct={},L(ct,N,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),L(ct,j,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ct)),Ye=et((lt={},L(lt,N,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),L(lt,j,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),lt)),Xe=et((ut={},L(ut,N,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),L(ut,j,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ut)),Al=et((ft={},L(ft,N,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),L(ft,j,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ft)),El=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,yi="fa-layers-text",Ol=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Pl=et((dt={},L(dt,N,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),L(dt,j,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),dt)),xi=[1,2,3,4,5,6,7,8,9,10],Nl=xi.concat([11,12,13,14,15,16,17,18,19,20]),_l=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qe=new Set;Object.keys(Ye[N]).map(qe.add.bind(qe));Object.keys(Ye[j]).map(qe.add.bind(qe));var Il=[].concat(Un,Je(qe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(xi.map(function(e){return"".concat(e,"x")})).concat(Nl.map(function(e){return"w-".concat(e)})),We=te.FontAwesomeConfig||{};function Tl(e){var t=_.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function jl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(_&&typeof _.querySelector=="function"){var Ml=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ml.forEach(function(e){var t=Vn(e,2),n=t[0],r=t[1],a=jl(Tl(n));a!=null&&(We[r]=a)})}var wi={styleDefault:"solid",familyDefault:"classic",cssPrefix:gi,replacementClass:hi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};We.familyPrefix&&(We.cssPrefix=We.familyPrefix);var Ne=y(y({},wi),We);Ne.autoReplaceSvg||(Ne.observeMutations=!1);var x={};Object.keys(wi).forEach(function(e){Object.defineProperty(x,e,{enumerable:!0,set:function(n){Ne[e]=n,Be.forEach(function(r){return r(x)})},get:function(){return Ne[e]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(t){Ne.cssPrefix=t,Be.forEach(function(n){return n(x)})},get:function(){return Ne.cssPrefix}});te.FontAwesomeConfig=x;var Be=[];function Ll(e){return Be.push(e),function(){Be.splice(Be.indexOf(e),1)}}var ee=mn,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fl(e){if(!(!e||!J)){var t=_.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=_.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return _.head.insertBefore(t,r),e}}var Rl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ze(){for(var e=12,t="";e-- >0;)t+=Rl[Math.random()*62|0];return t}function Me(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Yn(e){return e.classList?Me(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ki(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ki(e[n]),'" ')},"").trim()}function _t(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Xn(e){return e.size!==G.size||e.x!==G.x||e.y!==G.y||e.rotate!==G.rotate||e.flipX||e.flipY}function zl(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Wl(e){var t=e.transform,n=e.width,r=n===void 0?mn:n,a=e.height,i=a===void 0?mn:a,o=e.startCentered,s=o===void 0?!1:o,c="";return s&&pi?c+="translate(".concat(t.x/ee-r/2,"em, ").concat(t.y/ee-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/ee,"em), calc(-50% + ").concat(t.y/ee,"em)) "):c+="translate(".concat(t.x/ee,"em, ").concat(t.y/ee,"em) "),c+="scale(".concat(t.size/ee*(t.flipX?-1:1),", ").concat(t.size/ee*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Bl=`:root, :host {
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
}`;function Ci(){var e=gi,t=hi,n=x.cssPrefix,r=x.replacementClass,a=Bl;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Tr=!1;function $t(){x.autoAddCss&&!Tr&&(Fl(Ci()),Tr=!0)}var Vl={mixout:function(){return{dom:{css:Ci,insertCss:$t}}},hooks:function(){return{beforeDOMElementCreation:function(){$t()},beforeI2svg:function(){$t()}}}},K=te||{};K[Z]||(K[Z]={});K[Z].styles||(K[Z].styles={});K[Z].hooks||(K[Z].hooks={});K[Z].shims||(K[Z].shims=[]);var B=K[Z],Si=[],Hl=function e(){_.removeEventListener("DOMContentLoaded",e),At=1,Si.map(function(t){return t()})},At=!1;J&&(At=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),At||_.addEventListener("DOMContentLoaded",Hl));function Gl(e){J&&(At?setTimeout(e,0):Si.push(e))}function tt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ki(e):"<".concat(t," ").concat(Dl(r),">").concat(i.map(tt).join(""),"</").concat(t,">")}function jr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ut=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,c,l,u;for(r===void 0?(c=1,u=t[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=s(u,t[l],l,t);return u};function $l(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function pn(e){var t=$l(e);return t.length===1?t[0].toString(16):null}function Ul(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Mr(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function gn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Mr(t);typeof B.hooks.addPack=="function"&&!a?B.hooks.addPack(e,Mr(t)):B.styles[e]=y(y({},B.styles[e]||{}),i),e==="fas"&&gn("fa",t)}var mt,vt,pt,ye=B.styles,Yl=B.shims,Xl=(mt={},L(mt,N,Object.values(Xe[N])),L(mt,j,Object.values(Xe[j])),mt),qn=null,Ai={},Ei={},Oi={},Pi={},Ni={},ql=(vt={},L(vt,N,Object.keys(Ue[N])),L(vt,j,Object.keys(Ue[j])),vt);function Zl(e){return~Il.indexOf(e)}function Kl(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Zl(a)?a:null}var _i=function(){var t=function(i){return Ut(ye,function(o,s,c){return o[c]=Ut(s,i,{}),o},{})};Ai=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){a[c.toString(16)]=o})}return a}),Ei=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){a[c]=o})}return a}),Ni=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(c){a[c]=o}),a});var n="far"in ye||x.autoFetchSvg,r=Ut(Yl,function(a,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});Oi=r.names,Pi=r.unicodes,qn=It(x.styleDefault,{family:x.familyDefault})};Ll(function(e){qn=It(e.styleDefault,{family:x.familyDefault})});_i();function Zn(e,t){return(Ai[e]||{})[t]}function Ql(e,t){return(Ei[e]||{})[t]}function oe(e,t){return(Ni[e]||{})[t]}function Ii(e){return Oi[e]||{prefix:null,iconName:null}}function Jl(e){var t=Pi[e],n=Zn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ne(){return qn}var Kn=function(){return{prefix:null,iconName:null,rest:[]}};function It(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?N:n,a=Ue[r][e],i=Ye[r][e]||Ye[r][a],o=e in B.styles?e:null;return i||o||null}var Lr=(pt={},L(pt,N,Object.keys(Xe[N])),L(pt,j,Object.keys(Xe[j])),pt);function Tt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},L(t,N,"".concat(x.cssPrefix,"-").concat(N)),L(t,j,"".concat(x.cssPrefix,"-").concat(j)),t),o=null,s=N;(e.includes(i[N])||e.some(function(l){return Lr[N].includes(l)}))&&(s=N),(e.includes(i[j])||e.some(function(l){return Lr[j].includes(l)}))&&(s=j);var c=e.reduce(function(l,u){var f=Kl(x.cssPrefix,u);if(ye[u]?(u=Xl[s].includes(u)?Al[s][u]:u,o=u,l.prefix=u):ql[s].indexOf(u)>-1?(o=u,l.prefix=It(u,{family:s})):f?l.iconName=f:u!==x.replacementClass&&u!==i[N]&&u!==i[j]&&l.rest.push(u),!a&&l.prefix&&l.iconName){var m=o==="fa"?Ii(l.iconName):{},g=oe(l.prefix,l.iconName);m.prefix&&(o=null),l.iconName=m.iconName||g||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!ye.far&&ye.fas&&!x.autoFetchSvg&&(l.prefix="fas")}return l},Kn());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===j&&(ye.fass||x.autoFetchSvg)&&(c.prefix="fass",c.iconName=oe(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=ne()||"fas"),c}var eu=function(){function e(){dl(this,e),this.definitions={}}return vl(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=y(y({},n.definitions[s]||{}),o[s]),gn(s,o[s]);var c=Xe[N][s];c&&gn(c,o[s]),_i()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=l)}),n[s][c]=l}),n}}]),e}(),Fr=[],xe={},Ae={},tu=Object.keys(Ae);function nu(e,t){var n=t.mixoutsTo;return Fr=e,xe={},Object.keys(Ae).forEach(function(r){tu.indexOf(r)===-1&&delete Ae[r]}),Fr.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),St(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xe[o]||(xe[o]=[]),xe[o].push(i[o])})}r.provides&&r.provides(Ae)}),n}function hn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xe[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function fe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xe[e]||[];a.forEach(function(i){i.apply(null,n)})}function Q(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ae[e]?Ae[e].apply(null,t):void 0}function bn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ne();if(t)return t=oe(n,t)||t,jr(Ti.definitions,n,t)||jr(B.styles,n,t)}var Ti=new eu,ru=function(){x.autoReplaceSvg=!1,x.observeMutations=!1,fe("noAuto")},au={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return J?(fe("beforeI2svg",t),Q("pseudoElements2svg",t),Q("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,Gl(function(){ou({autoReplaceSvgRoot:n}),fe("watch",t)})}},iu={icon:function(t){if(t===null)return null;if(St(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:oe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=It(t[0]);return{prefix:r,iconName:oe(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(x.cssPrefix,"-"))>-1||t.match(El))){var a=Tt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ne(),iconName:oe(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ne();return{prefix:i,iconName:oe(i,t)||t}}}},z={noAuto:ru,config:x,dom:au,parse:iu,library:Ti,findIconDefinition:bn,toHtml:tt},ou=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?_:n;(Object.keys(B.styles).length>0||x.autoFetchSvg)&&J&&x.autoReplaceSvg&&z.dom.i2svg({node:r})};function jt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return tt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(J){var r=_.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function su(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Xn(o)&&n.found&&!r.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};a.style=_t(y(y({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function cu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(x.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:y(y({},a),{},{id:o}),children:r}]}]}function Qn(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,m=e.watchable,g=m===void 0?!1:m,h=r.found?r:n,p=h.width,b=h.height,w=a==="fak",k=[x.replacementClass,i?"".concat(x.cssPrefix,"-").concat(i):""].filter(function(O){return f.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(f.classes).join(" "),C={children:[],attributes:y(y({},f.attributes),{},{"data-prefix":a,"data-icon":i,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(b)})},A=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/b*16*.0625,"em")}:{};g&&(C.attributes[ue]=""),c&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(u||Ze())},children:[c]}),delete C.attributes.title);var S=y(y({},C),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:y(y({},A),f.styles)}),T=r.found&&n.found?Q("generateAbstractMask",S)||{children:[],attributes:{}}:Q("generateAbstractIcon",S)||{children:[],attributes:{}},M=T.children,D=T.attributes;return S.children=M,S.attributes=D,s?cu(S):su(S)}function Rr(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,c=s===void 0?!1:s,l=y(y(y({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[ue]="");var u=y({},o.styles);Xn(a)&&(u.transform=Wl({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=_t(u);f.length>0&&(l.style=f);var m=[];return m.push({tag:"span",attributes:l,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function lu(e){var t=e.content,n=e.title,r=e.extra,a=y(y(y({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=_t(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yt=B.styles;function yn(e){var t=e[0],n=e[1],r=e.slice(4),a=Vn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(ie.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(ie.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(ie.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var uu={found:!1,width:512,height:512};function fu(e,t){!bi&&!x.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xn(e,t){var n=t;return t==="fa"&&x.styleDefault!==null&&(t=ne()),new Promise(function(r,a){if(Q("missingIconAbstract"),n==="fa"){var i=Ii(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Yt[t]&&Yt[t][e]){var o=Yt[t][e];return r(yn(o))}fu(e,t),r(y(y({},uu),{},{icon:x.showMissingIcons&&e?Q("missingIconAbstract")||{}:{}}))})}var Dr=function(){},wn=x.measurePerformance&&st&&st.mark&&st.measure?st:{mark:Dr,measure:Dr},De='FA "6.5.2"',du=function(t){return wn.mark("".concat(De," ").concat(t," begins")),function(){return ji(t)}},ji=function(t){wn.mark("".concat(De," ").concat(t," ends")),wn.measure("".concat(De," ").concat(t),"".concat(De," ").concat(t," begins"),"".concat(De," ").concat(t," ends"))},Jn={begin:du,end:ji},yt=function(){};function zr(e){var t=e.getAttribute?e.getAttribute(ue):null;return typeof t=="string"}function mu(e){var t=e.getAttribute?e.getAttribute(Gn):null,n=e.getAttribute?e.getAttribute($n):null;return t&&n}function vu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(x.replacementClass)}function pu(){if(x.autoReplaceSvg===!0)return xt.replace;var e=xt[x.autoReplaceSvg];return e||xt.replace}function gu(e){return _.createElementNS("http://www.w3.org/2000/svg",e)}function hu(e){return _.createElement(e)}function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?gu:hu:n;if(typeof e=="string")return _.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Mi(o,{ceFn:r}))}),a}function bu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Mi(a),n)}),n.getAttribute(ue)===null&&x.keepOriginalSource){var r=_.createComment(bu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Yn(n).indexOf(x.replacementClass))return xt.replace(t);var a=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,c){return c===x.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return tt(s)}).join(`
`);n.setAttribute(ue,""),n.innerHTML=o}};function Wr(e){e()}function Li(e,t){var n=typeof t=="function"?t:yt;if(e.length===0)n();else{var r=Wr;x.mutateApproach===Cl&&(r=te.requestAnimationFrame||Wr),r(function(){var a=pu(),i=Jn.begin("mutate");e.map(a),i(),n()})}}var er=!1;function Fi(){er=!0}function kn(){er=!1}var Et=null;function Br(e){if(_r&&x.observeMutations){var t=e.treeCallback,n=t===void 0?yt:t,r=e.nodeCallback,a=r===void 0?yt:r,i=e.pseudoElementsCallback,o=i===void 0?yt:i,s=e.observeMutationsRoot,c=s===void 0?_:s;Et=new _r(function(l){if(!er){var u=ne();Me(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!zr(f.addedNodes[0])&&(x.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&x.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&zr(f.target)&&~_l.indexOf(f.attributeName))if(f.attributeName==="class"&&mu(f.target)){var m=Tt(Yn(f.target)),g=m.prefix,h=m.iconName;f.target.setAttribute(Gn,g||u),h&&f.target.setAttribute($n,h)}else vu(f.target)&&a(f.target)})}}),J&&Et.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yu(){Et&&Et.disconnect()}function xu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function wu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Tt(Yn(e));return a.prefix||(a.prefix=ne()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ql(a.prefix,e.innerText)||Zn(a.prefix,pn(e.innerText))),!a.iconName&&x.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ku(e){var t=Me(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return x.autoA11y&&(n?t["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(r||Ze()):(t["aria-hidden"]="true",t.focusable="false")),t}function Cu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wu(e),r=n.iconName,a=n.prefix,i=n.rest,o=ku(e),s=hn("parseNodeAttributes",{},e),c=t.styleParser?xu(e):[];return y({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var Su=B.styles;function Ri(e){var t=x.autoReplaceSvg==="nest"?Vr(e,{styleParser:!1}):Vr(e);return~t.extra.classes.indexOf(yi)?Q("generateLayersText",e,t):Q("generateSvgReplacementMutation",e,t)}var re=new Set;Un.map(function(e){re.add("fa-".concat(e))});Object.keys(Ue[N]).map(re.add.bind(re));Object.keys(Ue[j]).map(re.add.bind(re));re=Je(re);function Hr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!J)return Promise.resolve();var n=_.documentElement.classList,r=function(f){return n.add("".concat(Ir,"-").concat(f))},a=function(f){return n.remove("".concat(Ir,"-").concat(f))},i=x.autoFetchSvg?re:Un.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Su));i.includes("fa")||i.push("fa");var o=[".".concat(yi,":not([").concat(ue,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(ue,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Me(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var c=Jn.begin("onTree"),l=s.reduce(function(u,f){try{var m=Ri(f);m&&u.push(m)}catch(g){bi||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(m){Li(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(m){c(),f(m)})})}function Au(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ri(e).then(function(n){n&&Li([n],t)})}function Eu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:bn(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:bn(a||{})),e(r,y(y({},n),{},{mask:a}))}}var Ou=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?G:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,l=n.maskId,u=l===void 0?null:l,f=n.title,m=f===void 0?null:f,g=n.titleId,h=g===void 0?null:g,p=n.classes,b=p===void 0?[]:p,w=n.attributes,k=w===void 0?{}:w,C=n.styles,A=C===void 0?{}:C;if(t){var S=t.prefix,T=t.iconName,M=t.icon;return jt(y({type:"icon"},t),function(){return fe("beforeDOMElementCreation",{iconDefinition:t,params:n}),x.autoA11y&&(m?k["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(h||Ze()):(k["aria-hidden"]="true",k.focusable="false")),Qn({icons:{main:yn(M),mask:c?yn(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:T,transform:y(y({},G),a),symbol:o,title:m,maskId:u,titleId:h,extra:{attributes:k,styles:A,classes:b}})})}},Pu={mixout:function(){return{icon:Eu(Ou)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hr,n.nodeCallback=Au,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?_:r,i=n.callback,o=i===void 0?function(){}:i;return Hr(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,m=r.extra;return new Promise(function(g,h){Promise.all([xn(a,s),u.iconName?xn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var b=Vn(p,2),w=b[0],k=b[1];g([n,Qn({icons:{main:w,mask:k},prefix:s,iconName:a,transform:c,symbol:l,maskId:f,title:i,titleId:o,extra:m,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,c=_t(s);c.length>0&&(a.style=c);var l;return Xn(o)&&(l=Q("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:a}}}},Nu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return jt({type:"layer"},function(){fe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers")].concat(Je(i)).join(" ")},children:o}]})}}}},_u={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return jt({type:"counter",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:r}),lu({content:n.toString(),title:i,extra:{attributes:l,styles:f,classes:["".concat(x.cssPrefix,"-layers-counter")].concat(Je(s))}})})}}}},Iu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?G:a,o=r.title,s=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,m=r.styles,g=m===void 0?{}:m;return jt({type:"text",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:r}),Rr({content:n,transform:y(y({},G),i),title:s,extra:{attributes:f,styles:g,classes:["".concat(x.cssPrefix,"-layers-text")].concat(Je(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,c=null;if(pi){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/l,c=u.height/l}return x.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Rr({content:n.innerHTML,width:s,height:c,transform:i,title:a,extra:o,watchable:!0})])}}},Tu=new RegExp('"',"ug"),Gr=[1105920,1112319];function ju(e){var t=e.replace(Tu,""),n=Ul(t,0),r=n>=Gr[0]&&n<=Gr[1],a=t.length===2?t[0]===t[1]:!1;return{value:pn(a?t[0]:t),isSecondary:r||a}}function $r(e,t){var n="".concat(kl).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Me(e.children),o=i.filter(function(M){return M.getAttribute(vn)===t})[0],s=te.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(Ol),l=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),m=~["Sharp"].indexOf(c[2])?j:N,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ye[m][c[2].toLowerCase()]:Pl[m][l],h=ju(f),p=h.value,b=h.isSecondary,w=c[0].startsWith("FontAwesome"),k=Zn(g,p),C=k;if(w){var A=Jl(p);A.iconName&&A.prefix&&(k=A.iconName,g=A.prefix)}if(k&&!b&&(!o||o.getAttribute(Gn)!==g||o.getAttribute($n)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var S=Cu(),T=S.extra;T.attributes[vn]=t,xn(k,g).then(function(M){var D=Qn(y(y({},S),{},{icons:{main:M,mask:Kn()},prefix:g,iconName:C,extra:T,watchable:!0})),O=_.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(O,e.firstChild):e.appendChild(O),O.outerHTML=D.map(function(U){return tt(U)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Mu(e){return Promise.all([$r(e,"::before"),$r(e,"::after")])}function Lu(e){return e.parentNode!==document.head&&!~Sl.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(vn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ur(e){if(J)return new Promise(function(t,n){var r=Me(e.querySelectorAll("*")).filter(Lu).map(Mu),a=Jn.begin("searchPseudoElements");Fi(),Promise.all(r).then(function(){a(),kn(),t()}).catch(function(){a(),kn(),n()})})}var Fu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ur,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?_:r;x.searchPseudoElements&&Ur(a)}}},Yr=!1,Ru={mixout:function(){return{dom:{unwatch:function(){Fi(),Yr=!0}}}},hooks:function(){return{bootstrap:function(){Br(hn("mutationObserverCallbacks",{}))},noAuto:function(){yu()},watch:function(n){var r=n.observeMutationsRoot;Yr?kn():Br(hn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Xr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Du={mixout:function(){return{parse:{transform:function(n){return Xr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Xr(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:f,path:m};return{tag:"g",attributes:y({},g.outer),children:[{tag:"g",attributes:y({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:y(y({},r.icon.attributes),g.path)}]}]}}}},Xt={x:0,y:0,width:"100%",height:"100%"};function qr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function zu(e){return e.tag==="g"?e.children:[e]}var Wu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Tt(a.split(" ").map(function(o){return o.trim()})):Kn();return i.prefix||(i.prefix=ne()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,l=i.width,u=i.icon,f=o.width,m=o.icon,g=zl({transform:c,containerWidth:f,iconWidth:l}),h={tag:"rect",attributes:y(y({},Xt),{},{fill:"white"})},p=u.children?{children:u.children.map(qr)}:{},b={tag:"g",attributes:y({},g.inner),children:[qr(y({tag:u.tag,attributes:y(y({},u.attributes),g.path)},p))]},w={tag:"g",attributes:y({},g.outer),children:[b]},k="mask-".concat(s||Ze()),C="clip-".concat(s||Ze()),A={tag:"mask",attributes:y(y({},Xt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,w]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:zu(m)},A]};return r.push(S,{tag:"rect",attributes:y({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(k,")")},Xt)}),{children:r,attributes:a}}}},Bu={provides:function(t){var n=!1;te.matchMedia&&(n=te.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:y(y({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=y(y({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:y(y({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:y(y({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:y(y({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:y(y({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:y(y({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:y(y({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:y(y({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Vu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Hu=[Vl,Pu,Nu,_u,Iu,Fu,Ru,Du,Wu,Bu,Vu];nu(Hu,{mixoutsTo:z});z.noAuto;z.config;z.library;z.dom;var Cn=z.parse;z.findIconDefinition;z.toHtml;var Gu=z.icon;z.layer;z.text;z.counter;function Zr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zr(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ot(e){"@babel/helpers - typeof";return Ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ot(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $u(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Uu(e,t){if(e==null)return{};var n=$u(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Sn(e){return Yu(e)||Xu(e)||qu(e)||Zu()}function Yu(e){if(Array.isArray(e))return An(e)}function Xu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qu(e,t){if(e){if(typeof e=="string")return An(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return An(e,t)}}function An(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ku(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,c=e.spin,l=e.spinPulse,u=e.spinReverse,f=e.pulse,m=e.fixedWidth,g=e.inverse,h=e.border,p=e.listItem,b=e.flip,w=e.size,k=e.rotation,C=e.pull,A=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":f,"fa-fw":m,"fa-inverse":g,"fa-border":h,"fa-li":p,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},we(t,"fa-".concat(w),typeof w<"u"&&w!==null),we(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),we(t,"fa-pull-".concat(C),typeof C<"u"&&C!==null),we(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(A).map(function(S){return A[S]?S:null}).filter(function(S){return S})}function Qu(e){return e=e-0,e===e}function Di(e){return Qu(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ju=["style"];function ef(e){return e.charAt(0).toUpperCase()+e.slice(1)}function tf(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Di(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[ef(a)]=i:t[a]=i,t},{})}function zi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return zi(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.attrs.className=u,delete t.attributes.class;break;case"style":c.attrs.style=tf(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=u:c.attrs[Di(l)]=u}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Uu(n,Ju);return a.attrs.style=V(V({},a.attrs.style),o),e.apply(void 0,[t.tag,V(V({},a.attrs),s)].concat(Sn(r)))}var Wi=!1;try{Wi=!0}catch{}function nf(){if(!Wi&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Kr(e){if(e&&Ot(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Cn.icon)return Cn.icon(e);if(e===null)return null;if(e&&Ot(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function qt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}var Qr={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},W=En.forwardRef(function(e,t){var n=V(V({},Qr),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,c=n.titleId,l=n.maskId,u=Kr(r),f=qt("classes",[].concat(Sn(Ku(n)),Sn((o||"").split(" ")))),m=qt("transform",typeof n.transform=="string"?Cn.transform(n.transform):n.transform),g=qt("mask",Kr(a)),h=Gu(u,V(V(V(V({},f),m),g),{},{symbol:i,title:s,titleId:c,maskId:l}));if(!h)return nf("Could not find icon",u),null;var p=h.abstract,b={ref:t};return Object.keys(n).forEach(function(w){Qr.hasOwnProperty(w)||(b[w]=n[w])}),rf(p[0],b)});W.displayName="FontAwesomeIcon";W.propTypes={beat:E.bool,border:E.bool,beatFade:E.bool,bounce:E.bool,className:E.string,fade:E.bool,flash:E.bool,mask:E.oneOfType([E.object,E.array,E.string]),maskId:E.string,fixedWidth:E.bool,inverse:E.bool,flip:E.oneOf([!0,!1,"horizontal","vertical","both"]),icon:E.oneOfType([E.object,E.array,E.string]),listItem:E.bool,pull:E.oneOf(["right","left"]),pulse:E.bool,rotation:E.oneOf([0,90,180,270]),shake:E.bool,size:E.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:E.bool,spinPulse:E.bool,spinReverse:E.bool,symbol:E.oneOfType([E.bool,E.string]),title:E.string,titleId:E.string,transform:E.oneOfType([E.string,E.object]),swapOpacity:E.bool};var rf=zi.bind(null,En.createElement),af={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},of={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},Jr={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},sf={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},cf={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},ea={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};const ta=["About","Skills","Projects","Experience","Contact"],na=({children:e})=>d.jsx(Ba,{px:2,py:1,fontSize:"md",fontWeight:400,rounded:"md",_hover:{textDecoration:"none",color:X("gray.600","gray.300")},href:"#about",children:e}),lf=()=>{const{isOpen:e,onOpen:t,onClose:n}=lc(),{colorMode:r,toggleColorMode:a}=mo();return d.jsxs(F,{zIndex:999,bg:X("white","gray.800"),px:2,boxShadow:X("rgba(50, 50, 93, 0.125) 0px 1px 2px -1px, rgba(0, 0, 0, 0.125) 0px 1px 2px -1px","none"),position:"sticky",top:0,left:0,as:"header",display:"flex",justifyContent:"center",borderBottom:X("none","1px solid #F6E05E"),children:[d.jsxs(Pt,{templateColumns:{base:"1fr 0fr auto",md:"auto 2fr 0fr"},alignItems:"center",gap:2,h:16,w:{base:"100%",md:"calc(100% - 14rem)",lg:"calc(100% - 20rem)"},children:[d.jsx(ce,{children:d.jsx(F,{textAlign:"center",alignItems:"center",justifyContent:"center",display:"flex",children:d.jsx(Ve,{minW:32,src:X(Ar,Sr),alt:"App Logo",h:{base:10,md:10}})})}),d.jsx(ce,{display:{base:"none",md:"block"},children:d.jsxs(Pe,{justifyContent:"flex-end",alignContent:"center",alignItems:"center",children:[ta.map(i=>d.jsx(na,{children:i},i)),d.jsx(gt,{variant:"ghost",size:"md",icon:d.jsx(W,{size:"lg",icon:r==="light"?ea:Jr}),onClick:a})]})}),d.jsx(ce,{textAlign:"right",display:{base:"block",md:"none"},children:d.jsx(gt,{variant:"ghost",size:"md",icon:d.jsx(W,{size:"xl",icon:af}),"aria-label":"Toggle Menu",fontSize:"md",onClick:t,color:"blue.700",px:4})})]}),d.jsxs(al,{placement:"right",size:["xs"],onClose:n,isOpen:e,children:[d.jsx(oi,{sx:{backdropFilter:"blur(0.125rem)"}}),d.jsxs(ri,{children:[d.jsxs(ii,{py:2,boxShadow:"0 0 3px rgba(0, 0, 0, 0.1)",children:[d.jsx(Ve,{src:X(Ar,Sr),alt:"App Logo",h:12}),d.jsx(ci,{})]}),d.jsx(si,{children:d.jsxs(Ga,{align:"start",children:[ta.map(i=>d.jsx(na,{onClick:n,children:i},i)),d.jsx(gt,{variant:"ghost",size:"md",icon:d.jsx(W,{size:"lg",icon:r==="light"?ea:Jr}),onClick:a})]})}),d.jsx(ai,{})]})]})]})};function uf({className:e,children:t,ref:n,...r}){return d.jsx(F,{as:"section",ref:n,className:e,...r,children:t})}function ff(){const e=new Date().getFullYear();var t=X("gray.300","gray.700");return d.jsx(F,{as:"footer",bg:t,p:2,children:d.jsxs(Pe,{wrap:"wrap",fontSize:"sm",justifyContent:"center",alignItems:"center",h:16,children:[d.jsxs(q,{children:["© ",e]})," ",d.jsx(Ya,{orientation:"vertical",h:4})," ",d.jsx(q,{textAlign:"center",children:"Designed and coded with ❤️️ by Tang Ho Trung Nam"})]})})}function df(e){const[t,n]=v.useState(!1),r=v.useCallback(()=>{const a=window.scrollY>e;n(a)},[e]);return v.useEffect(()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}),[r]),t}function mf(){var e=df(100);const t=()=>{window.scrollTo({top:0,behavior:"smooth"})},n=_e(F);return d.jsx(n,{h:10,w:10,pos:"fixed",right:6,bottom:10,display:e?"flex":"none",bg:"blue.900",borderRadius:"md",onClick:t,cursor:"pointer",backdropFilter:"blur(10px)",justifyContent:"center",alignItems:"center",color:"white",_hover:{bg:"blue.800"},initial:{opacity:0,y:20},animate:{opacity:e?.8:0,y:e?0:20},transition:{duration:.3},children:d.jsx(W,{icon:cf,size:"xl"})})}function vf({children:e}){return d.jsxs(d.Fragment,{children:[d.jsx(lf,{}),d.jsx(uf,{children:e}),d.jsx(mf,{}),d.jsx(ff,{})]})}var pf={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},gf={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},hf={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const bf={rotate:[0,23,-20,23,-20,0],transition:{duration:2.3,repeat:1/0,repeatDelay:1}};function yf(){return d.jsx(_e.span,{animate:bf,style:{display:"inline-block"},children:"👋"})}function xf(){return d.jsx(Bn,{centerContent:!0,maxW:{base:"100%",lg:"calc(100% - 20rem)"},children:d.jsxs(Pt,{templateColumns:"repeat(12, 1fr)",gap:2,my:12,children:[d.jsx(ce,{order:{base:2,md:1},colSpan:{base:12,md:7},children:d.jsxs(Oe,{spacing:12,children:[d.jsxs(F,{children:[d.jsxs(q,{as:"h1",fontSize:{base:"1.75rem",md:"2.75rem"},fontWeight:"600",children:["Hi, I'm Tang Ho Trung Nam"," ",d.jsx(yf,{})]}),d.jsx(q,{as:"p",fontSize:{base:"1rem",md:"1.125rem"},mt:2,children:"I'm a software engineer based in Ho Chi Minh City, Vietnam. I have a passion for software development and love to create things that make people's lives easier."})]}),d.jsxs(Oe,{children:[d.jsxs(F,{children:[d.jsx(F,{display:"inline-flex",justifyContent:"center",color:"green.500",w:4,children:d.jsx(W,{size:"sm",icon:of,beatFade:!0})}),d.jsx(q,{as:"span",fontSize:"sm",fontWeight:"400",ml:2,children:"I'm currently looking for new opportunities."})]}),d.jsxs(F,{children:[d.jsx(F,{display:"inline-flex",justifyContent:"center",w:4,children:d.jsx(W,{icon:sf,size:"sm"})}),d.jsx(q,{as:"span",fontSize:"sm",fontWeight:"400",ml:2,children:"Ho Chi Minh City, Vietnam"})]})]}),d.jsxs($a,{children:[d.jsx(ze,{size:"lg",py:2,_hover:{cursor:"pointer"},children:d.jsx(W,{size:"lg",icon:hf})}),d.jsx(ze,{size:"lg",py:2,_hover:{cursor:"pointer"},children:d.jsx(W,{size:"lg",icon:gf})}),d.jsx(ze,{size:"lg",py:2,_hover:{cursor:"pointer"},children:d.jsx(W,{size:"lg",icon:pf})})]})]})}),d.jsx(ce,{mb:{base:4},order:{base:1,md:2},colSpan:{base:12,md:5},color:"white",children:d.jsx(Pe,{justifyContent:{base:"center",md:"flex-end"},alignItems:"center",alignContent:"center",h:"100%",children:d.jsxs(Pe,{pos:"relative",w:80,h:80,children:[d.jsx(Ve,{src:"https://avatars.githubusercontent.com/u/149599451?v=4",alt:"Tang Ho Trung Nam",zIndex:1,borderWidth:6,borderColor:X("white","gray.800"),borderStyle:"solid"}),d.jsx(F,{pos:"absolute",w:"100%",h:"100%",bg:"gray.600",left:3,top:3})]})})})]})})}const wf="/assets/react-svgrepo-com-J_OEq3I3.svg",kf="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%20256%20256'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M0,0%20L256,0%20L256,256%20L0,256%20L0,0%20Z'%20fill='%23F7DF1E'%3e%3c/path%3e%3cpath%20d='M67.311746,213.932292%20L86.902654,202.076241%20C90.6821079,208.777346%2094.1202286,214.447137%20102.367086,214.447137%20C110.272203,214.447137%20115.256076,211.354819%20115.256076,199.326883%20L115.256076,117.528787%20L139.313575,117.528787%20L139.313575,199.666997%20C139.313575,224.58433%20124.707759,235.925943%20103.3984,235.925943%20C84.1532952,235.925943%2072.9819429,225.958603%2067.3113397,213.93026'%20fill='%23000000'%3e%3c/path%3e%3cpath%20d='M152.380952,211.354413%20L171.969422,200.0128%20C177.125994,208.433981%20183.827911,214.619835%20195.684368,214.619835%20C205.652521,214.619835%20212.009041,209.635962%20212.009041,202.762159%20C212.009041,194.513676%20205.479416,191.592025%20194.481168,186.78207%20L188.468419,184.202565%20C171.111213,176.81473%20159.597308,167.53534%20159.597308,147.944838%20C159.597308,129.901308%20173.344508,116.153295%20194.825752,116.153295%20C210.119924,116.153295%20221.117765,121.48094%20229.021663,135.400432%20L210.29059,147.428775%20C206.166146,140.040127%20201.699556,137.119289%20194.826159,137.119289%20C187.78047,137.119289%20183.312254,141.587098%20183.312254,147.428775%20C183.312254,154.646349%20187.78047,157.568406%20198.089956,162.036622%20L204.103924,164.614095%20C224.553448,173.378641%20236.067352,182.313448%20236.067352,202.418387%20C236.067352,224.071924%20219.055137,235.927975%20196.200432,235.927975%20C173.860978,235.927975%20159.425829,225.274311%20152.381359,211.354413'%20fill='%23000000'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Cf="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.064'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M27.6947%2022.9999C27.883%2022.6617%2028%2022.2807%2028%2021.9385V10.0613C28%209.71913%2027.8831%209.33818%2027.6947%209L16%2016L27.6947%2022.9999Z'%20fill='%237F3A86'/%3e%3cpath%20d='M17.0395%2029.7433L26.9611%2023.8047C27.2469%2023.6336%2027.5067%2023.3382%2027.695%2023L16.0003%2016L4.30566%2023C4.49398%2023.3382%204.75382%2023.6337%205.03955%2023.8047L14.9611%2029.7433C15.5326%2030.0855%2016.468%2030.0855%2017.0395%2029.7433Z'%20fill='%23662579'/%3e%3cpath%20d='M27.6947%208.99996C27.5064%208.6617%2027.2465%208.36629%2026.9608%208.19521L17.0392%202.25662C16.4677%201.91446%2015.5323%201.91446%2014.9608%202.25662L5.03922%208.19521C4.46761%208.53729%204%209.37709%204%2010.0613V21.9386C4%2022.2807%204.11694%2022.6618%204.30533%2023L16%2016L27.6947%208.99996Z'%20fill='%239A5196'/%3e%3cpath%20d='M16.0385%2024C11.6061%2024%208%2020.4112%208%2016C8%2011.5888%2011.6061%208%2016.0385%208C18.8458%208%2021.4674%209.47569%2022.919%2011.8618L19.4765%2013.9265C18.7492%2012.736%2017.4399%2012%2016.0385%2012C13.8222%2012%2012.0193%2013.7944%2012.0193%2016C12.0193%2018.2056%2013.8222%2020%2016.0385%2020C17.4362%2020%2018.7421%2019.2681%2019.4707%2018.0832L22.9205%2020.1359C21.4692%2022.5234%2018.8467%2024%2016.0385%2024Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.0001%2013V13.9974H22.9999V13H22.0001V13.9974H21V15H22.0001V16.9948H21V18H22.0001V19H22.9999L23%2018H25.0001V19H25.9999V18H27V17H25.9999V15H27V13.9974H25.9999V13H25.0001ZM25.0001%2017V15H22.9999V16.9948L25.0001%2017Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",Sf="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%20256%20256'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpolygon%20fill='%23007ACC'%20transform='translate(128.000000,%20128.000000)%20scale(1,%20-1)%20translate(-128.000000,%20-128.000000)%20'%20points='0%20128%200%200%20128%200%20256%200%20256%20128%20256%20256%20128%20256%200%20256'%3e%3c/polygon%3e%3cpath%20d='M146.658132,223.436863%20L146.739401,212.953054%20L130.079084,212.953054%20L113.418767,212.953054%20L113.418767,165.613371%20L113.418767,118.273689%20L101.63464,118.273689%20L89.8505126,118.273689%20L89.8505126,165.613371%20L89.8505126,212.953054%20L73.1901951,212.953054%20L56.5298776,212.953054%20L56.5298776,223.233689%20C56.5298776,228.922577%2056.6517824,233.676863%2056.8143221,233.798768%20C56.9362269,233.961308%2077.2130522,234.042577%20101.797179,234.001943%20L146.536227,233.880038%20L146.658132,223.436863%20Z'%20fill='%23FFFFFF'%20transform='translate(101.634640,%20176.142993)%20rotate(-180.000000)%20translate(-101.634640,%20-176.142993)%20'%3e%3c/path%3e%3cpath%20d='M206.566631,234.272145%20C213.068219,232.646748%20218.025679,229.761668%20222.57679,225.048018%20C224.933616,222.528653%20228.428219,217.936907%20228.712663,216.839764%20C228.793933,216.514684%20217.659965,209.037859%20210.914568,204.852462%20C210.670758,204.689922%20209.69552,205.74643%20208.598377,207.371827%20C205.306949,212.166748%20201.852981,214.239129%20196.570441,214.604843%20C188.809171,215.133097%20183.811076,211.069605%20183.851711,204.283573%20C183.851711,202.292462%20184.136155,201.114049%20184.948854,199.488653%20C186.65552,195.953414%20189.825044,193.840399%20199.7806,189.533097%20C218.106949,181.649922%20225.949489,176.448653%20230.825679,169.053097%20C236.270758,160.804208%20237.489806,147.638494%20233.792028,137.845478%20C229.728536,127.199129%20219.651076,119.966113%20205.469489,117.568653%20C201.080917,116.796589%20190.678377,116.918494%20185.964727,117.771827%20C175.684092,119.600399%20165.931711,124.679764%20159.917743,131.343891%20C157.560917,133.944526%20152.969171,140.730557%20153.253616,141.218176%20C153.37552,141.380716%20154.432028,142.030875%20155.610441,142.721668%20C156.748219,143.371827%20161.05552,145.850557%20165.119012,148.207383%20L172.473933,152.474049%20L174.01806,150.198494%20C176.171711,146.907065%20180.885362,142.396589%20183.729806,140.893097%20C191.897425,136.585795%20203.112663,137.195319%20208.639012,142.15278%20C210.995838,144.30643%20211.971076,146.541351%20211.971076,149.83278%20C211.971076,152.799129%20211.605362,154.099446%20210.061235,156.334367%20C208.070123,159.178811%20204.006631,161.576272%20192.466314,166.574367%20C179.259965,172.263256%20173.571076,175.798494%20168.369806,181.406113%20C165.362822,184.656907%20162.518377,189.858176%20161.339965,194.206113%20C160.364727,197.822621%20160.120917,206.884208%20160.892981,210.541351%20C163.61552,223.300716%20173.245996,232.199764%20187.143139,234.841034%20C191.653616,235.694367%20202.137425,235.369287%20206.566631,234.272145%20Z'%20fill='%23FFFFFF'%20transform='translate(194.578507,%20176.190240)%20scale(1,%20-1)%20translate(-194.578507,%20-176.190240)%20'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Af="/assets/postgresql-svgrepo-com-D2QD0s4t.svg",Ef="data:image/svg+xml,%3csvg%20width='456'%20height='456'%20viewBox='0%200%20456%20456'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='456'%20height='456'%20fill='%23512BD4'/%3e%3cpath%20d='M81.2738%20291.333C78.0496%20291.333%2075.309%20290.259%2073.052%20288.11C70.795%20285.906%2069.6665%20283.289%2069.6665%20280.259C69.6665%20277.173%2070.795%20274.529%2073.052%20272.325C75.309%20270.121%2078.0496%20269.019%2081.2738%20269.019C84.5518%20269.019%2087.3193%20270.121%2089.5763%20272.325C91.887%20274.529%2093.0424%20277.173%2093.0424%20280.259C93.0424%20283.289%2091.887%20285.906%2089.5763%20288.11C87.3193%20290.259%2084.5518%20291.333%2081.2738%20291.333Z'%20fill='white'/%3e%3cpath%20d='M210.167%20289.515H189.209L133.994%20202.406C132.597%20200.202%20131.441%20197.915%20130.528%20195.546H130.044C130.474%20198.081%20130.689%20203.508%20130.689%20211.827V289.515H112.149V171H134.477L187.839%20256.043C190.096%20259.57%20191.547%20261.994%20192.192%20263.316H192.514C191.977%20260.176%20191.708%20254.859%20191.708%20247.365V171H210.167V289.515Z'%20fill='white'/%3e%3cpath%20d='M300.449%20289.515H235.561V171H297.87V187.695H254.746V221.249H294.485V237.861H254.746V272.903H300.449V289.515Z'%20fill='white'/%3e%3cpath%20d='M392.667%20187.695H359.457V289.515H340.272V187.695H307.143V171H392.667V187.695Z'%20fill='white'/%3e%3c/svg%3e",Of="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%201024%201024'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ccircle%20cx='512'%20cy='512'%20r='512'%20style='fill:%2313aa52'/%3e%3cpath%20d='M648.86%20449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93%2012.65-1.41%2017.53-13.37%2030.29-18.52%2014.48-113.54%2094.21-121.27%20256.37-7.21%20151.24%20109.25%20241.36%20125%20252.85l1.79%201.27v-.11c.1.76%205%2036%208.44%2073.34H526a726.68%20726.68%200%200%201%2013-78.53l1-.65a204.48%20204.48%200%200%200%2020.11-16.45l.72-.65c33.48-30.93%2093.67-102.47%2093.08-216.53a347.07%20347.07%200%200%200-5.05-56.76zM512.35%20659.12s0-212.12%207-212.08c5.46%200%2012.53%20273.61%2012.53%20273.61-9.72-1.17-19.53-45.03-19.53-61.53z'%20style='fill:%23fff'/%3e%3c/g%3e%3c/svg%3e",Pf="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='256px'%20height='256px'%20viewBox='-0.5%200%20257%20257'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M245.733754,102.437432%20L163.822615,102.437432%20C161.095475,102.454639%20158.475045,101.378893%20156.546627,99.4504749%20C154.618208,97.5220567%20153.542463,94.901627%20153.559669,92.174486%20L153.559669,10.2633479%20C153.559723,7.54730691%20152.476409,4.94343327%20150.549867,3.02893217%20C148.623325,1.11443107%20146.012711,0.0474632135%20143.296723,0.0645452326%20L112.636172,0.0645452326%20C109.920185,0.0474632135%20107.30957,1.11443107%20105.383029,3.02893217%20C103.456487,4.94343327%20102.373172,7.54730691%20102.373226,10.2633479%20L102.373226,92.174486%20C102.390432,94.901627%20101.314687,97.5220567%2099.3862689,99.4504749%20C97.4578506,101.378893%2094.8374209,102.454639%2092.11028,102.437432%20L61.4497286,102.437432%20C58.7225877,102.454639%2056.102158,101.378893%2054.1737397,99.4504749%20C52.2453215,97.5220567%2051.1695761,94.901627%2051.1867826,92.174486%20L51.1867826,10.2633479%20C51.203989,7.5362069%2050.1282437,4.91577722%2048.1998255,2.98735896%20C46.2714072,1.05894071%2043.6509775,-0.0168046317%2040.9238365,0.000198540275%20L10.1991418,0.000198540275%20C7.48310085,0.000198540275%204.87922722,1.08366231%202.96472611,3.0102043%20C1.05022501,4.93674629%20-0.0167428433,7.54736062%200.000135896304,10.2633479%20L0.000135896304,245.79796%20C-0.0168672756,248.525101%201.05887807,251.14553%202.98729632,253.073949%20C4.91571457,255.002367%207.53614426,256.078112%2010.2632852,256.061109%20L245.733754,256.061109%20C248.460895,256.078112%20251.081324,255.002367%20253.009743,253.073949%20C254.938161,251.14553%20256.013906,248.525101%20255.9967,245.79796%20L255.9967,112.892808%20C256.066222,110.132577%20255.01362,107.462105%20253.07944,105.491659%20C251.14526,103.521213%20248.4948,102.419191%20245.733754,102.437432%20Z%20M204.553817,189.4159%20C204.570741,193.492844%20202.963126,197.408658%20200.08629,200.297531%20C197.209455,203.186403%20193.300387,204.810319%20189.223407,204.810319%20L168.697515,204.810319%20C164.620535,204.810319%20160.711467,203.186403%20157.834632,200.297531%20C154.957796,197.408658%20153.350181,193.492844%20153.367105,189.4159%20L153.367105,168.954151%20C153.350181,164.877207%20154.957796,160.961393%20157.834632,158.07252%20C160.711467,155.183648%20164.620535,153.559732%20168.697515,153.559732%20L189.223407,153.559732%20C193.300387,153.559732%20197.209455,155.183648%20200.08629,158.07252%20C202.963126,160.961393%20204.570741,164.877207%20204.553817,168.954151%20L204.553817,189.4159%20L204.553817,189.4159%20Z'%20fill='%23FF6600'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Nf=[{name:"C#",logo:Cf},{name:"Javascript",logo:kf},{name:"Typescript",logo:Sf},{name:"React",logo:wf},{name:"Postgres",logo:Af},{name:".Net",logo:Ef},{name:"MongoDB",logo:Of},{name:"RabbitMQ",logo:Pf}];function _f({logo:e,name:t}){const n={hover:{scale:1.1,transition:{duration:.3}}};return d.jsxs(F,{width:"6.25rem",cursor:"pointer",children:[d.jsx(F,{px:4,children:d.jsx(_e.div,{whileHover:"hover",variants:n,children:d.jsx(Ve,{src:e,alt:t,objectFit:"cover",mb:2})})}),d.jsx(q,{as:"h2",fontSize:"md",textAlign:"center",children:t})]})}function If(){return d.jsx(F,{bg:X("gray.50","gray.900"),children:d.jsxs(Bn,{centerContent:!0,maxW:{base:"100%",lg:"calc(100% - 20rem)"},pt:12,pb:10,children:[d.jsxs(Oe,{pb:4,children:[d.jsx(Pe,{justifyContent:"center",children:d.jsx(ze,{px:6,borderRadius:"xl",children:"Skills"})}),d.jsx(q,{as:"h1",fontSize:"xl",textAlign:"center",children:"Skills, tools and technologies I used:"})]}),d.jsx(Pt,{templateColumns:{base:"repeat(3, 1fr)",sm:"repeat(4, 1fr)",md:"repeat(6, 1fr)",lg:"repeat(8, 1fr)"},gap:4,p:4,children:Nf.map((e,t)=>d.jsx(ce,{display:"flex",justifyContent:"center",children:d.jsx(_f,{...e})},t))})]})})}function Tf(){return d.jsxs(v.Fragment,{children:[d.jsx(xf,{}),d.jsx(If,{})]})}function Ff(){return d.jsx(vf,{children:d.jsx(Tf,{})})}export{Ff as default};
