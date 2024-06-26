import{r as v,j as b,g as Ki,R as wn}from"./index-BDHaTx9v.js";import{A as kn,l as Sn,s as R,q as F,u as Zi,n as T,p as yt,S as Qi,z as xt,v as wt,B as tr,_ as Ut,D as Ji,i as eo,E as Ie,w as to,y as no,F as ro,H as ao,x as io,f as oo,J as te}from"./chunk-37N6GCLA-Bb30uaTH.js";function so(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var co=so();function Qr(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function lo(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function Ht(...e){return t=>{e.forEach(n=>{lo(n,t)})}}function uo(...e){return v.useMemo(()=>Ht(...e),e)}var Yt={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},Pe={scale:{enter:{scale:1},exit:{scale:.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function Gt(e){var t;switch((t=e==null?void 0:e.direction)!=null?t:"right"){case"right":return Pe.slideRight;case"left":return Pe.slideLeft;case"bottom":return Pe.slideDown;case"top":return Pe.slideUp;default:return Pe.slideRight}}var nr={enter:{duration:.2,ease:Yt.easeOut},exit:{duration:.1,ease:Yt.easeIn}},dt={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.exit})},fo={enter:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:1,transition:(r=e==null?void 0:e.enter)!=null?r:dt.enter(nr.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:0,transition:(r=e==null?void 0:e.exit)!=null?r:dt.exit(nr.exit,n),transitionEnd:t==null?void 0:t.exit}}},Jr={initial:"exit",animate:"enter",exit:"exit",variants:fo},mo=v.forwardRef(function(t,n){const{unmountOnExit:r,in:a,className:i,transition:o,transitionEnd:s,delay:c,...l}=t,u=a||r?"enter":"exit",f=r?a&&r:!0,d={transition:o,transitionEnd:s,delay:c};return b.jsx(kn,{custom:d,children:f&&b.jsx(Sn.div,{ref:n,className:R("chakra-fade",i),custom:d,...Jr,animate:u,...l})})});mo.displayName="Fade";var rr={exit:{duration:.15,ease:Yt.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},vo={exit:({direction:e,transition:t,transitionEnd:n,delay:r})=>{var a;const{exit:i}=Gt({direction:e});return{...i,transition:(a=t==null?void 0:t.exit)!=null?a:dt.exit(rr.exit,r),transitionEnd:n==null?void 0:n.exit}},enter:({direction:e,transitionEnd:t,transition:n,delay:r})=>{var a;const{enter:i}=Gt({direction:e});return{...i,transition:(a=n==null?void 0:n.enter)!=null?a:dt.enter(rr.enter,r),transitionEnd:t==null?void 0:t.enter}}},ea=v.forwardRef(function(t,n){const{direction:r="right",style:a,unmountOnExit:i,in:o,className:s,transition:c,transitionEnd:l,delay:u,motionProps:f,...d}=t,p=Gt({direction:r}),g=Object.assign({position:"fixed"},p.position,a),m=i?o&&i:!0,h=o||i?"enter":"exit",w={transitionEnd:l,transition:c,direction:r,delay:u};return b.jsx(kn,{custom:w,children:m&&b.jsx(Sn.div,{...d,ref:n,initial:"exit",className:R("chakra-slide",s),animate:h,exit:"exit",custom:w,variants:vo,style:g,...f})})});ea.displayName="Slide";var Vt=F(function(t,n){const{htmlWidth:r,htmlHeight:a,alt:i,...o}=t;return b.jsx("img",{width:r,height:a,ref:n,alt:i,...o})});Vt.displayName="NativeImage";function po(e){const{loading:t,src:n,srcSet:r,onLoad:a,onError:i,crossOrigin:o,sizes:s,ignoreFallback:c}=e,[l,u]=v.useState("pending");v.useEffect(()=>{u(n?"loading":"pending")},[n]);const f=v.useRef(),d=v.useCallback(()=>{if(!n)return;p();const g=new Image;g.src=n,o&&(g.crossOrigin=o),r&&(g.srcset=r),s&&(g.sizes=s),t&&(g.loading=t),g.onload=m=>{p(),u("loaded"),a==null||a(m)},g.onerror=m=>{p(),u("failed"),i==null||i(m)},f.current=g},[n,o,r,s,a,i,t]),p=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return Zi(()=>{if(!c)return l==="loading"&&d(),()=>{p()}},[l,d,c]),c?"loaded":l}var go=(e,t)=>e!=="loaded"&&t==="beforeLoadOrError"||e==="failed"&&t==="onError";function bo(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}var Xt=F(function(t,n){const{fallbackSrc:r,fallback:a,src:i,srcSet:o,align:s,fit:c,loading:l,ignoreFallback:u,crossOrigin:f,fallbackStrategy:d="beforeLoadOrError",referrerPolicy:p,...g}=t,m=r!==void 0||a!==void 0,h=l!=null||u||!m,w=po({...t,crossOrigin:f,ignoreFallback:h}),k=go(w,d),S={ref:n,objectFit:c,objectPosition:s,...h?g:bo(g,["onError","onLoad"])};return k?a||b.jsx(T.img,{as:Vt,className:"chakra-image__placeholder",src:r,...S}):b.jsx(T.img,{as:Vt,src:i,srcSet:o,crossOrigin:f,loading:l,referrerPolicy:p,className:"chakra-image",...S})});Xt.displayName="Image";function ho(e){return v.Children.toArray(e).filter(t=>v.isValidElement(t))}var[nf,yo]=yt({strict:!1,name:"ButtonGroupContext"});function xo(e){const[t,n]=v.useState(!e);return{ref:v.useCallback(i=>{i&&n(i.tagName==="BUTTON")},[]),type:t?"button":void 0}}function qt(e){const{children:t,className:n,...r}=e,a=v.isValidElement(t)?v.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=R("chakra-button__icon",n);return b.jsx(T.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:i,children:a})}qt.displayName="ButtonIcon";function Kt(e){const{label:t,placement:n,spacing:r="0.5rem",children:a=b.jsx(Qi,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:o,...s}=e,c=R("chakra-button__spinner",i),l=n==="start"?"marginEnd":"marginStart",u=v.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[l]:t?r:0,fontSize:"1em",lineHeight:"normal",...o}),[o,t,l,r]);return b.jsx(T.div,{className:c,...s,__css:u,children:a})}Kt.displayName="ButtonSpinner";var ta=F((e,t)=>{const n=yo(),r=xt("Button",{...n,...e}),{isDisabled:a=n==null?void 0:n.isDisabled,isLoading:i,isActive:o,children:s,leftIcon:c,rightIcon:l,loadingText:u,iconSpacing:f="0.5rem",type:d,spinner:p,spinnerPlacement:g="start",className:m,as:h,...w}=wt(e),k=v.useMemo(()=>{const I={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:I}}},[r,n]),{ref:S,type:A}=xo(h),C={rightIcon:l,leftIcon:c,iconSpacing:f,children:s};return b.jsxs(T.button,{ref:uo(t,S),as:h,type:d??A,"data-active":tr(o),"data-loading":tr(i),__css:k,className:R("chakra-button",m),...w,disabled:a||i,children:[i&&g==="start"&&b.jsx(Kt,{className:"chakra-button__spinner--start",label:u,placement:"start",spacing:f,children:p}),i?u||b.jsx(T.span,{opacity:0,children:b.jsx(ar,{...C})}):b.jsx(ar,{...C}),i&&g==="end"&&b.jsx(Kt,{className:"chakra-button__spinner--end",label:u,placement:"end",spacing:f,children:p})]})});ta.displayName="Button";function ar(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return b.jsxs(b.Fragment,{children:[t&&b.jsx(qt,{marginEnd:a,children:t}),r,n&&b.jsx(qt,{marginStart:a,children:n})]})}var ot=F((e,t)=>{const{icon:n,children:r,isRound:a,"aria-label":i,...o}=e,s=n||r,c=v.isValidElement(s)?v.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return b.jsx(ta,{padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":i,...o,children:c})});ot.displayName="IconButton";function wo(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var na={exports:{}},ko="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",So=ko,Co=So;function ra(){}function aa(){}aa.resetWarningCache=ra;var Ao=function(){function e(r,a,i,o,s,c){if(c!==Co){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:aa,resetWarningCache:ra};return n.PropTypes=n,n};na.exports=Ao();var Oo=na.exports;const O=Ki(Oo);var Zt="data-focus-lock",ia="data-focus-lock-disabled",Eo="data-no-focus-lock",Po="data-autofocus-inside",No="data-no-autofocus";function It(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Io(e,t){var n=v.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var _o=typeof window<"u"?v.useLayoutEffect:v.useEffect,ir=new WeakMap;function oa(e,t){var n=Io(null,function(r){return e.forEach(function(a){return It(a,r)})});return _o(function(){var r=ir.get(n);if(r){var a=new Set(r),i=new Set(e),o=n.current;a.forEach(function(s){i.has(s)||It(s,null)}),i.forEach(function(s){a.has(s)||It(s,o)})}ir.set(n,e)},[e]),n}var _t={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},B=function(){return B=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},B.apply(this,arguments)};function sa(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function To(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function ca(e){return e}function la(e,t){t===void 0&&(t=ca);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var o=t(i,r);return n.push(o),function(){n=n.filter(function(s){return s!==o})}},assignSyncMedium:function(i){for(r=!0;n.length;){var o=n;n=[],o.forEach(i)}n={push:function(s){return i(s)},filter:function(){return n}}},assignMedium:function(i){r=!0;var o=[];if(n.length){var s=n;n=[],s.forEach(i),o=n}var c=function(){var u=o;o=[],u.forEach(i)},l=function(){return Promise.resolve().then(c)};l(),n={push:function(u){o.push(u),l()},filter:function(u){return o=o.filter(u),n}}}};return a}function Cn(e,t){return t===void 0&&(t=ca),la(e,t)}function ua(e){e===void 0&&(e={});var t=la(null);return t.options=B({async:!0,ssr:!1},e),t}var fa=function(e){var t=e.sideCar,n=sa(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return v.createElement(r,B({},n))};fa.isSideCarExport=!0;function Mo(e,t){return e.useMedium(t),fa}var da=Cn({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),ma=Cn(),Fo=Cn(),jo=ua({async:!0,ssr:typeof document<"u"}),Ro=v.createContext(void 0),Lo=[],An=v.forwardRef(function(t,n){var r,a=v.useState(),i=a[0],o=a[1],s=v.useRef(),c=v.useRef(!1),l=v.useRef(null),u=v.useState({}),f=u[1],d=t.children,p=t.disabled,g=p===void 0?!1:p,m=t.noFocusGuards,h=m===void 0?!1:m,w=t.persistentFocus,k=w===void 0?!1:w,S=t.crossFrame,A=S===void 0?!0:S,C=t.autoFocus,I=C===void 0?!0:C;t.allowTextSelection;var M=t.group,L=t.className,E=t.whiteList,H=t.hasPositiveIndices,le=t.shards,Et=le===void 0?Lo:le,Kn=t.as,Fi=Kn===void 0?"div":Kn,Zn=t.lockProps,ji=Zn===void 0?{}:Zn,Ri=t.sideCar,Qn=t.returnFocus,Ge=Qn===void 0?!1:Qn,Li=t.focusOptions,Pt=t.onActivation,Nt=t.onDeactivation,Di=v.useState({}),zi=Di[0],Wi=v.useCallback(function(Y){var ue=Y.captureFocusRestore;if(!l.current){var fe,ee=(fe=document)==null?void 0:fe.activeElement;l.current=ee,ee!==document.body&&(l.current=ue(ee))}s.current&&Pt&&Pt(s.current),c.current=!0,f()},[Pt]),Bi=v.useCallback(function(){c.current=!1,Nt&&Nt(s.current),f()},[Nt]),$i=v.useCallback(function(Y){var ue=l.current;if(ue){var fe=(typeof ue=="function"?ue():ue)||document.body,ee=typeof Ge=="function"?Ge(fe):Ge;if(ee){var er=typeof ee=="object"?ee:void 0;l.current=null,Y?Promise.resolve().then(function(){return fe.focus(er)}):fe.focus(er)}}},[Ge]),Ui=v.useCallback(function(Y){c.current&&da.useMedium(Y)},[]),Hi=ma.useMedium,Yi=v.useCallback(function(Y){s.current!==Y&&(s.current=Y,o(Y))},[]),Gi=Ut((r={},r[ia]=g&&"disabled",r[Zt]=M,r),ji),Jn=h!==!0,Vi=Jn&&h!=="tail",Xi=oa([n,Yi]),qi=v.useMemo(function(){return{observed:s,shards:Et,enabled:!g,active:c.current}},[g,c.current,Et,i]);return v.createElement(v.Fragment,null,Jn&&[v.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:g?-1:0,style:_t}),H?v.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:g?-1:1,style:_t}):null],!g&&v.createElement(Ri,{id:zi,sideCar:jo,observed:i,disabled:g,persistentFocus:k,crossFrame:A,autoFocus:I,whiteList:E,shards:Et,onActivation:Wi,onDeactivation:Bi,returnFocus:$i,focusOptions:Li}),v.createElement(Fi,Ut({ref:Xi},Gi,{className:L,onBlur:Hi,onFocus:Ui}),v.createElement(Ro.Provider,{value:qi},d)),Vi&&v.createElement("div",{"data-focus-guard":!0,tabIndex:g?-1:0,style:_t}))});An.propTypes={};function Qt(e,t){return Qt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Qt(e,t)}function Do(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Qt(e,t)}function je(e){"@babel/helpers - typeof";return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},je(e)}function zo(e,t){if(je(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(je(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wo(e){var t=zo(e,"string");return je(t)=="symbol"?t:t+""}function Bo(e,t,n){return(t=Wo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $o(e,t){function n(r){return r.displayName||r.name||"Component"}return function(a){var i=[],o;function s(){o=e(i.map(function(l){return l.props})),t(o)}var c=function(l){Do(u,l);function u(){return l.apply(this,arguments)||this}u.peek=function(){return o};var f=u.prototype;return f.componentDidMount=function(){i.push(this),s()},f.componentDidUpdate=function(){s()},f.componentWillUnmount=function(){var p=i.indexOf(this);i.splice(p,1),s()},f.render=function(){return wn.createElement(a,this.props)},u}(v.PureComponent);return Bo(c,"displayName","SideEffect("+n(a)+")"),c}}var U=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},ie=function(e){return Array.isArray(e)?e:[e]},va=function(e){return Array.isArray(e)?e[0]:e},Uo=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},pa=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},ga=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Ho=function(e){return e.hasAttribute("inert")},Yo=function(e,t){return!e||ga(e)||!Uo(e)&&!Ho(e)&&t(pa(e))},ba=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Yo(t,ba.bind(void 0,e));return e.set(t,r),r},Go=function(e,t){return e&&!ga(e)?qo(e)?t(pa(e)):!1:!0},ha=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Go(t,ha.bind(void 0,e));return e.set(t,r),r},ya=function(e){return e.dataset},Vo=function(e){return e.tagName==="BUTTON"},xa=function(e){return e.tagName==="INPUT"},wa=function(e){return xa(e)&&e.type==="radio"},Xo=function(e){return!((xa(e)||Vo(e))&&(e.type==="hidden"||e.disabled))},qo=function(e){var t=e.getAttribute(No);return![!0,"true",""].includes(t)},On=function(e){var t;return!!(e&&(!((t=ya(e))===null||t===void 0)&&t.focusGuard))},Jt=function(e){return!On(e)},Ko=function(e){return!!e},Zo=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),a=n-r,i=e.index-t.index;if(a){if(!n)return 1;if(!r)return-1}return a||i},Qo=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},En=function(e,t,n){return U(e).map(function(r,a){var i=Qo(r);return{node:r,index:a,tabIndex:n&&i===-1?(r.dataset||{}).focusGuard?0:-1:i}}).filter(function(r){return!t||r.tabIndex>=0}).sort(Zo)},Jo=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Pn=Jo.join(","),es="".concat(Pn,", [data-focus-guard]"),ka=function(e,t){return U((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?es:Pn)?[r]:[],ka(r))},[])},ts=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?Se([e.contentDocument.body],t):[e]},Se=function(e,t){return e.reduce(function(n,r){var a,i=ka(r,t),o=(a=[]).concat.apply(a,i.map(function(s){return ts(s,t)}));return n.concat(o,r.parentNode?U(r.parentNode.querySelectorAll(Pn)).filter(function(s){return s===r}):[])},[])},ns=function(e){var t=e.querySelectorAll("[".concat(Po,"]"));return U(t).map(function(n){return Se([n])}).reduce(function(n,r){return n.concat(r)},[])},Nn=function(e,t){return U(e).filter(function(n){return ba(t,n)}).filter(function(n){return Xo(n)})},or=function(e,t){return t===void 0&&(t=new Map),U(e).filter(function(n){return ha(t,n)})},In=function(e,t,n){return En(Nn(Se(e,n),t),!0,n)},mt=function(e,t){return En(Nn(Se(e),t),!1)},rs=function(e,t){return Nn(ns(e),t)},ae=function(e,t){return e.shadowRoot?ae(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:U(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var a=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return a?ae(a,t):!1}return ae(n,t)})},as=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var a=r+1;a<n;a+=1){var i=e[r].compareDocumentPosition(e[a]);(i&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(a),(i&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(o,s){return!t.has(s)})},Sa=function(e){return e.parentNode?Sa(e.parentNode):e},_n=function(e){var t=ie(e);return t.filter(Boolean).reduce(function(n,r){var a=r.getAttribute(Zt);return n.push.apply(n,a?as(U(Sa(r).querySelectorAll("[".concat(Zt,'="').concat(a,'"]:not([').concat(ia,'="disabled"])')))):[r]),n},[])},is=function(e){try{return e()}catch{return}},Re=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?Re(t.shadowRoot):t instanceof HTMLIFrameElement&&is(function(){return t.contentWindow.document})?Re(t.contentWindow.document):t}},os=function(e,t){return e===t},ss=function(e,t){return!!U(e.querySelectorAll("iframe")).some(function(n){return os(n,t)})},Ca=function(e,t){return t===void 0&&(t=Re(va(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:_n(e).some(function(n){return ae(n,t)||ss(n,t)})},cs=function(e){e===void 0&&(e=document);var t=Re(e);return t?U(e.querySelectorAll("[".concat(Eo,"]"))).some(function(n){return ae(n,t)}):!1},ls=function(e,t){return t.filter(wa).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},Tn=function(e,t){return wa(e)&&e.name?ls(e,t):e},us=function(e){var t=new Set;return e.forEach(function(n){return t.add(Tn(n,e))}),e.filter(function(n){return t.has(n)})},sr=function(e){return e[0]&&e.length>1?Tn(e[0],e):e[0]},cr=function(e,t){return e.indexOf(Tn(t,e))},en="NEW_FOCUS",fs=function(e,t,n,r,a){var i=e.length,o=e[0],s=e[i-1],c=On(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,u=a?n.indexOf(a):l,f=a?e.indexOf(a):-1;if(l===-1)return f!==-1?f:en;if(f===-1)return en;var d=l-u,p=n.indexOf(o),g=n.indexOf(s),m=us(n),h=r!==void 0?m.indexOf(r):-1,w=h-(a?m.indexOf(a):l);if(!d&&f>=0||t.length===0)return f;var k=cr(e,t[0]),S=cr(e,t[t.length-1]);if(l<=p&&c&&Math.abs(d)>1)return S;if(l>=g&&c&&Math.abs(d)>1)return k;if(d&&Math.abs(w)>1)return f;if(l<=p)return S;if(l>g)return k;if(d)return Math.abs(d)>1?f:(i+f+d)%i}},ds=function(e){return function(t){var n,r=(n=ya(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},lr=function(e,t,n){var r=e.map(function(i){var o=i.node;return o}),a=or(r.filter(ds(n)));return a&&a.length?sr(a):sr(or(t))},tn=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&tn(e.parentNode.host||e.parentNode,t),t},Tt=function(e,t){for(var n=tn(e),r=tn(t),a=0;a<n.length;a+=1){var i=n[a];if(r.indexOf(i)>=0)return i}return!1},Aa=function(e,t,n){var r=ie(e),a=ie(t),i=r[0],o=!1;return a.filter(Boolean).forEach(function(s){o=Tt(o||s,s)||o,n.filter(Boolean).forEach(function(c){var l=Tt(i,c);l&&(!o||ae(l,o)?o=l:o=Tt(l,o))})}),o},ur=function(e,t){return e.reduce(function(n,r){return n.concat(rs(r,t))},[])},ms=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(Ko)},vs=function(e,t){var n=Re(ie(e).length>0?document:va(e).ownerDocument),r=_n(e).filter(Jt),a=Aa(n||e,e,r),i=new Map,o=mt(r,i),s=o.filter(function(g){var m=g.node;return Jt(m)});if(s[0]){var c=mt([a],i).map(function(g){var m=g.node;return m}),l=ms(c,s),u=l.map(function(g){var m=g.node;return m}),f=l.filter(function(g){var m=g.tabIndex;return m>=0}).map(function(g){var m=g.node;return m}),d=fs(u,f,c,n,t);if(d===en){var p=lr(o,f,ur(r,i))||lr(o,u,ur(r,i));if(p)return{node:p};console.warn("focus-lock: cannot find any node to move focus into");return}return d===void 0?d:l[d]}},ps=function(e){var t=_n(e).filter(Jt),n=Aa(e,e,t),r=En(Se([n],!0),!0,!0),a=Se(t,!1);return r.map(function(i){var o=i.node,s=i.index;return{node:o,index:s,lockItem:a.indexOf(o)>=0,guard:On(o)}})},Mn=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},Mt=0,Ft=!1,Oa=function(e,t,n){n===void 0&&(n={});var r=vs(e,t);if(!Ft&&r){if(Mt>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),Ft=!0,setTimeout(function(){Ft=!1},1);return}Mt++,Mn(r.node,n.focusOptions),Mt--}};function Ne(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var gs=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:Ne(n),parent:Ne(n.parentElement),left:Ne(n.previousElementSibling),right:Ne(n.nextElementSibling)}),n=n.parentElement;return{element:Ne(e),stack:t,ownerDocument:e.ownerDocument}},bs=function(e){var t,n,r,a,i;if(e)for(var o=e.stack,s=e.ownerDocument,c=new Map,l=0,u=o;l<u.length;l++){var f=u[l],d=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(d&&s.contains(d)){for(var p=(n=f.left)===null||n===void 0?void 0:n.call(f),g=f.current(),m=d.contains(g)?g:void 0,h=(r=f.right)===null||r===void 0?void 0:r.call(f),w=In([d],c),k=(i=(a=m??(p==null?void 0:p.nextElementSibling))!==null&&a!==void 0?a:h)!==null&&i!==void 0?i:p;k;){for(var S=0,A=w;S<A.length;S++){var C=A[S];if(k!=null&&k.contains(C.node))return C.node}k=k.nextElementSibling}if(w.length)return w[0].node}}},hs=function(e){var t=gs(e);return function(){return bs(t)}},ys=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=ie(t);if(r.every(function(o){return!ae(o,e)}))return console.error("Active element is not contained in the scope"),{};var a=n?In(r,new Map):mt(r,new Map),i=a.findIndex(function(o){var s=o.node;return s===e});if(i!==-1)return{prev:a[i-1],next:a[i+1],first:a[0],last:a[a.length-1]}},xs=function(e,t){var n=t?In(ie(e),new Map):mt(ie(e),new Map);return{first:n[0],last:n[n.length-1]}},ws=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},Ea=function(e,t,n){t===void 0&&(t={});var r=ws(t),a=ys(e,r.scope,r.onlyTabbable);if(a){var i=n(a,r.cycle);i&&Mn(i.node,r.focusOptions)}},ks=function(e,t){t===void 0&&(t={}),Ea(e,t,function(n,r){var a=n.next,i=n.first;return a||r&&i})},Ss=function(e,t){t===void 0&&(t={}),Ea(e,t,function(n,r){var a=n.prev,i=n.last;return a||r&&i})},Pa=function(e,t,n){var r,a=xs(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),i=a[n];i&&Mn(i.node,t.focusOptions)},Cs=function(e,t){t===void 0&&(t={}),Pa(e,t,"first")},As=function(e,t){t===void 0&&(t={}),Pa(e,t,"last")};function Fn(e){setTimeout(e,1)}var Os=function(t){return t&&"current"in t?t.current:t},Es=function(){return document&&document.activeElement===document.body},Ps=function(){return Es()||cs()},ye=null,pe=null,xe=null,Le=!1,Ns=function(){return!0},Is=function(t){return(ye.whiteList||Ns)(t)},_s=function(t,n){xe={observerNode:t,portaledElement:n}},Ts=function(t){return xe&&xe.portaledElement===t};function fr(e,t,n,r){var a=null,i=e;do{var o=r[i];if(o.guard)o.node.dataset.focusAutoGuard&&(a=o);else if(o.lockItem){if(i!==e)return;a=null}else break}while((i+=n)!==t);a&&(a.node.tabIndex=0)}var Ms=function(t){return t?!!Le:Le==="meanwhile"},Fs=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},js=function(t,n){return n.some(function(r){return Fs(t,r,r)})},vt=function(){var t=!1;if(ye){var n=ye,r=n.observed,a=n.persistentFocus,i=n.autoFocus,o=n.shards,s=n.crossFrame,c=n.focusOptions,l=r||xe&&xe.portaledElement,u=document&&document.activeElement;if(l){var f=[l].concat(o.map(Os).filter(Boolean));if((!u||Is(u))&&(a||Ms(s)||!Ps()||!pe&&i)&&(l&&!(Ca(f)||u&&js(u,f)||Ts(u))&&(document&&!pe&&u&&!i?(u.blur&&u.blur(),document.body.focus()):(t=Oa(f,pe,{focusOptions:c}),xe={})),Le=!1,pe=document&&document.activeElement),document&&u!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var d=document&&document.activeElement,p=ps(f),g=p.map(function(m){var h=m.node;return h}).indexOf(d);g>-1&&(p.filter(function(m){var h=m.guard,w=m.node;return h&&w.dataset.focusAutoGuard}).forEach(function(m){var h=m.node;return h.removeAttribute("tabIndex")}),fr(g,p.length,1,p),fr(g,-1,-1,p))}}}return t},Na=function(t){vt()&&t&&(t.stopPropagation(),t.preventDefault())},jn=function(){return Fn(vt)},Rs=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||_s(r,n)},Ls=function(){return null},Ia=function(){Le="just",Fn(function(){Le="meanwhile"})},Ds=function(){document.addEventListener("focusin",Na),document.addEventListener("focusout",jn),window.addEventListener("blur",Ia)},zs=function(){document.removeEventListener("focusin",Na),document.removeEventListener("focusout",jn),window.removeEventListener("blur",Ia)};function Ws(e){return e.filter(function(t){var n=t.disabled;return!n})}var _a={moveFocusInside:Oa,focusInside:Ca,focusNextElement:ks,focusPrevElement:Ss,focusFirstElement:Cs,focusLastElement:As,captureFocusRestore:hs};function Bs(e){var t=e.slice(-1)[0];t&&!ye&&Ds();var n=ye,r=n&&t&&t.id===n.id;ye=t,n&&!r&&(n.onDeactivation(),e.filter(function(a){var i=a.id;return i===n.id}).length||n.returnFocus(!t)),t?(pe=null,(!r||n.observed!==t.observed)&&t.onActivation(_a),vt(),Fn(vt)):(zs(),pe=null)}da.assignSyncMedium(Rs);ma.assignMedium(jn);Fo.assignMedium(function(e){return e(_a)});const $s=$o(Ws,Bs)(Ls);var nn=v.forwardRef(function(t,n){return v.createElement(An,Ut({sideCar:$s,ref:n},t))}),Ta=An.propTypes||{};Ta.sideCar;wo(Ta,["sideCar"]);nn.propTypes={};function Us(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function Hs(e){var t;if(!Us(e))return!1;const n=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof n.HTMLElement}var Ys=e=>e.hasAttribute("tabindex");function Gs(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function Ma(e){return e.parentElement&&Ma(e.parentElement)?!0:e.hidden}function Vs(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function Xs(e){if(!Hs(e)||Ma(e)||Gs(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in r?r[t]():Vs(e)?!0:Ys(e)}var qs=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],Ks=qs.join(),Zs=e=>e.offsetWidth>0&&e.offsetHeight>0;function Qs(e){const t=Array.from(e.querySelectorAll(Ks));return t.unshift(e),t.filter(n=>Xs(n)&&Zs(n))}var dr,Js=(dr=nn.default)!=null?dr:nn,Fa=e=>{const{initialFocusRef:t,finalFocusRef:n,contentRef:r,restoreFocus:a,children:i,isDisabled:o,autoFocus:s,persistentFocus:c,lockFocusAcrossFrames:l}=e,u=v.useCallback(()=>{t!=null&&t.current?t.current.focus():r!=null&&r.current&&Qs(r.current).length===0&&requestAnimationFrame(()=>{var g;(g=r.current)==null||g.focus()})},[t,r]),f=v.useCallback(()=>{var p;(p=n==null?void 0:n.current)==null||p.focus()},[n]),d=a&&!n;return b.jsx(Js,{crossFrame:l,persistentFocus:c,autoFocus:s,disabled:o,onActivation:u,onDeactivation:f,returnFocus:d,children:i})};Fa.displayName="FocusLock";var ec=co?v.useLayoutEffect:v.useEffect;function mr(e,t=[]){const n=v.useRef(e);return ec(()=>{n.current=e}),v.useCallback((...r)=>{var a;return(a=n.current)==null?void 0:a.call(n,...r)},t)}function tc(e,t){const n=v.useId();return v.useMemo(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}function nc(e,t){const n=e!==void 0;return[n,n&&typeof e<"u"?e:t]}function rc(e={}){const{onClose:t,onOpen:n,isOpen:r,id:a}=e,i=mr(n),o=mr(t),[s,c]=v.useState(e.defaultIsOpen||!1),[l,u]=nc(r,s),f=tc(a,"disclosure"),d=v.useCallback(()=>{l||c(!1),o==null||o()},[l,o]),p=v.useCallback(()=>{l||c(!0),i==null||i()},[l,i]),g=v.useCallback(()=>{(u?d:p)()},[u,p,d]);return{isOpen:!!u,onOpen:p,onClose:d,onToggle:g,isControlled:l,getButtonProps:(m={})=>({...m,"aria-expanded":u,"aria-controls":f,onClick:Ji(m.onClick,g)}),getDisclosureProps:(m={})=>({...m,hidden:!u,id:f})}}var ja=F(function(t,n){const r=xt("Link",t),{className:a,isExternal:i,...o}=wt(t);return b.jsx(T.a,{target:i?"_blank":void 0,rel:i?"noopener":void 0,ref:n,className:R("chakra-link",a),...o,__css:r})});ja.displayName="Link";var Ra=F(function(t,n){const{templateAreas:r,gap:a,rowGap:i,columnGap:o,column:s,row:c,autoFlow:l,autoRows:u,templateRows:f,autoColumns:d,templateColumns:p,...g}=t,m={display:"grid",gridTemplateAreas:r,gridGap:a,gridRowGap:i,gridColumnGap:o,gridAutoColumns:d,gridColumn:s,gridRow:c,gridAutoFlow:l,gridAutoRows:u,gridTemplateRows:f,gridTemplateColumns:p};return b.jsx(T.div,{ref:n,__css:m,...g})});Ra.displayName="Grid";function La(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):eo(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}var rn=F(function(t,n){const r=xt("Text",t),{className:a,align:i,decoration:o,casing:s,...c}=wt(t),l=Qr({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return b.jsx(T.p,{ref:n,className:R("chakra-text",t.className),...l,...c,__css:r})});rn.displayName="Text";var Da=e=>b.jsx(T.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});Da.displayName="StackItem";function ac(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":La(n,a=>r[a])}}var za=F((e,t)=>{const{isInline:n,direction:r,align:a,justify:i,spacing:o="0.5rem",wrap:s,children:c,divider:l,className:u,shouldWrapChildren:f,...d}=e,p=n?"row":r??"column",g=v.useMemo(()=>ac({spacing:o,direction:p}),[o,p]),m=!!l,h=!f&&!m,w=v.useMemo(()=>{const S=ho(c);return h?S:S.map((A,C)=>{const I=typeof A.key<"u"?A.key:C,M=C+1===S.length,E=f?b.jsx(Da,{children:A},I):A;if(!m)return E;const H=v.cloneElement(l,{__css:g}),le=M?null:H;return b.jsxs(v.Fragment,{children:[E,le]},I)})},[l,g,m,h,f,c]),k=R("chakra-stack",u);return b.jsx(T.div,{ref:t,display:"flex",alignItems:a,justifyContent:i,flexDirection:p,flexWrap:s,gap:m?void 0:o,className:k,...d,children:w})});za.displayName="Stack";var Wa=F((e,t)=>b.jsx(za,{align:"center",...e,direction:"column",ref:t}));Wa.displayName="VStack";function vr(e){return La(e,t=>t==="auto"?"auto":`span ${t}/span ${t}`)}var st=F(function(t,n){const{area:r,colSpan:a,colStart:i,colEnd:o,rowEnd:s,rowSpan:c,rowStart:l,...u}=t,f=Qr({gridArea:r,gridColumn:vr(a),gridRow:vr(c),gridColumnStart:i,gridColumnEnd:o,gridRowStart:l,gridRowEnd:s});return b.jsx(T.div,{ref:n,__css:f,...u})});st.displayName="GridItem";var oe=T("div");oe.displayName="Box";var Ba=F(function(t,n){const{size:r,centerContent:a=!0,...i}=t,o=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return b.jsx(oe,{ref:n,boxSize:r,__css:{...o,flexShrink:0,flexGrow:0},...i})});Ba.displayName="Square";var ic=F(function(t,n){const{size:r,...a}=t;return b.jsx(Ba,{size:r,ref:n,borderRadius:"9999px",...a})});ic.displayName="Circle";var $a=F(function(t,n){const{borderLeftWidth:r,borderBottomWidth:a,borderTopWidth:i,borderRightWidth:o,borderWidth:s,borderStyle:c,borderColor:l,...u}=xt("Divider",t),{className:f,orientation:d="horizontal",__css:p,...g}=wt(t),m={vertical:{borderLeftWidth:r||o||s||"1px",height:"100%"},horizontal:{borderBottomWidth:a||i||s||"1px",width:"100%"}};return b.jsx(T.hr,{ref:n,"aria-orientation":d,...g,__css:{...u,border:"0",borderColor:l,borderStyle:c,...m[d],...p},className:R("chakra-divider",f)})});$a.displayName="Divider";var Rn=F(function(t,n){const{direction:r,align:a,justify:i,wrap:o,basis:s,grow:c,shrink:l,...u}=t,f={display:"flex",flexDirection:r,alignItems:a,justifyContent:i,flexWrap:o,flexBasis:s,flexGrow:c,flexShrink:l};return b.jsx(T.div,{ref:n,__css:f,...u})});Rn.displayName="Flex";var oc=Object.defineProperty,sc=(e,t,n)=>t in e?oc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cc=(e,t,n)=>(sc(e,t+"",n),n),lc=class{constructor(){cc(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},an=new lc;function Ua(e,t){const[n,r]=v.useState(0);return v.useEffect(()=>{const a=e.current;if(a){if(t){const i=an.add(a);r(i)}return()=>{an.remove(a),r(0)}}},[t,e]),n}var uc=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},de=new WeakMap,Ve=new WeakMap,Xe={},jt=0,Ha=function(e){return e&&(e.host||Ha(e.parentNode))},fc=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ha(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},dc=function(e,t,n,r){var a=fc(t,Array.isArray(e)?e:[e]);Xe[n]||(Xe[n]=new WeakMap);var i=Xe[n],o=[],s=new Set,c=new Set(a),l=function(f){!f||s.has(f)||(s.add(f),l(f.parentNode))};a.forEach(l);var u=function(f){!f||c.has(f)||Array.prototype.forEach.call(f.children,function(d){if(s.has(d))u(d);else try{var p=d.getAttribute(r),g=p!==null&&p!=="false",m=(de.get(d)||0)+1,h=(i.get(d)||0)+1;de.set(d,m),i.set(d,h),o.push(d),m===1&&g&&Ve.set(d,!0),h===1&&d.setAttribute(n,"true"),g||d.setAttribute(r,"true")}catch(w){console.error("aria-hidden: cannot operate on ",d,w)}})};return u(t),s.clear(),jt++,function(){o.forEach(function(f){var d=de.get(f)-1,p=i.get(f)-1;de.set(f,d),i.set(f,p),d||(Ve.has(f)||f.removeAttribute(r),Ve.delete(f)),p||f.removeAttribute(n)}),jt--,jt||(de=new WeakMap,de=new WeakMap,Ve=new WeakMap,Xe={})}},mc=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=uc(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),dc(r,a,n,"aria-hidden")):function(){return null}};function vc(e){const{isOpen:t,onClose:n,id:r,closeOnOverlayClick:a=!0,closeOnEsc:i=!0,useInert:o=!0,onOverlayClick:s,onEsc:c}=e,l=v.useRef(null),u=v.useRef(null),[f,d,p]=gc(r,"chakra-modal","chakra-modal--header","chakra-modal--body");pc(l,t&&o);const g=Ua(l,t),m=v.useRef(null),h=v.useCallback(E=>{m.current=E.target},[]),w=v.useCallback(E=>{E.key==="Escape"&&(E.stopPropagation(),i&&(n==null||n()),c==null||c())},[i,n,c]),[k,S]=v.useState(!1),[A,C]=v.useState(!1),I=v.useCallback((E={},H=null)=>({role:"dialog",...E,ref:Ht(H,l),id:f,tabIndex:-1,"aria-modal":!0,"aria-labelledby":k?d:void 0,"aria-describedby":A?p:void 0,onClick:Ie(E.onClick,le=>le.stopPropagation())}),[p,A,f,d,k]),M=v.useCallback(E=>{E.stopPropagation(),m.current===E.target&&an.isTopModal(l.current)&&(a&&(n==null||n()),s==null||s())},[n,a,s]),L=v.useCallback((E={},H=null)=>({...E,ref:Ht(H,u),onClick:Ie(E.onClick,M),onKeyDown:Ie(E.onKeyDown,w),onMouseDown:Ie(E.onMouseDown,h)}),[w,h,M]);return{isOpen:t,onClose:n,headerId:d,bodyId:p,setBodyMounted:C,setHeaderMounted:S,dialogRef:l,overlayRef:u,getDialogProps:I,getDialogContainerProps:L,index:g}}function pc(e,t){const n=e.current;v.useEffect(()=>{if(!(!e.current||!t))return mc(e.current)},[t,e,n])}function gc(e,...t){const n=v.useId(),r=e||n;return v.useMemo(()=>t.map(a=>`${a}-${r}`),[r,t])}var[bc,Ae]=yt({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[hc,Oe]=yt({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Ya=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:n,children:r,autoFocus:a,trapFocus:i,initialFocusRef:o,finalFocusRef:s,returnFocusOnClose:c,blockScrollOnMount:l,allowPinchZoom:u,preserveScrollBarGap:f,motionPreset:d,lockFocusAcrossFrames:p,onCloseComplete:g}=t,m=to("Modal",t),w={...vc(t),autoFocus:a,trapFocus:i,initialFocusRef:o,finalFocusRef:s,returnFocusOnClose:c,blockScrollOnMount:l,allowPinchZoom:u,preserveScrollBarGap:f,motionPreset:d,lockFocusAcrossFrames:p};return b.jsx(hc,{value:w,children:b.jsx(bc,{value:m,children:b.jsx(kn,{onExitComplete:g,children:w.isOpen&&b.jsx(no,{...n,children:r})})})})};Ya.displayName="Modal";var ct="right-scroll-bar-position",lt="width-before-scroll-bar",yc="with-scroll-bars-hidden",xc="--removed-body-scroll-bar-size",Ga=ua(),Rt=function(){},kt=v.forwardRef(function(e,t){var n=v.useRef(null),r=v.useState({onScrollCapture:Rt,onWheelCapture:Rt,onTouchMoveCapture:Rt}),a=r[0],i=r[1],o=e.forwardProps,s=e.children,c=e.className,l=e.removeScrollBar,u=e.enabled,f=e.shards,d=e.sideCar,p=e.noIsolation,g=e.inert,m=e.allowPinchZoom,h=e.as,w=h===void 0?"div":h,k=e.gapMode,S=sa(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),A=d,C=oa([n,t]),I=B(B({},S),a);return v.createElement(v.Fragment,null,u&&v.createElement(A,{sideCar:Ga,removeScrollBar:l,shards:f,noIsolation:p,inert:g,setCallbacks:i,allowPinchZoom:!!m,lockRef:n,gapMode:k}),o?v.cloneElement(v.Children.only(s),B(B({},I),{ref:C})):v.createElement(w,B({},I,{className:c,ref:C}),s))});kt.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};kt.classNames={fullWidth:lt,zeroRight:ct};var wc=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function kc(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=wc();return t&&e.setAttribute("nonce",t),e}function Sc(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Cc(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Ac=function(){var e=0,t=null;return{add:function(n){e==0&&(t=kc())&&(Sc(t,n),Cc(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Oc=function(){var e=Ac();return function(t,n){v.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Va=function(){var e=Oc(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},Ec={left:0,top:0,right:0,gap:0},Lt=function(e){return parseInt(e||"",10)||0},Pc=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[Lt(n),Lt(r),Lt(a)]},Nc=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Ec;var t=Pc(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Ic=Va(),we="data-scroll-locked",_c=function(e,t,n,r){var a=e.left,i=e.top,o=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(yc,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(we,`] {
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
  
  .`).concat(ct,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(lt,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(ct," .").concat(ct,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(lt," .").concat(lt,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(we,`] {
    `).concat(xc,": ").concat(s,`px;
  }
`)},pr=function(){var e=parseInt(document.body.getAttribute(we)||"0",10);return isFinite(e)?e:0},Tc=function(){v.useEffect(function(){return document.body.setAttribute(we,(pr()+1).toString()),function(){var e=pr()-1;e<=0?document.body.removeAttribute(we):document.body.setAttribute(we,e.toString())}},[])},Mc=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;Tc();var i=v.useMemo(function(){return Nc(a)},[a]);return v.createElement(Ic,{styles:_c(i,!t,a,n?"":"!important")})},on=!1;if(typeof window<"u")try{var qe=Object.defineProperty({},"passive",{get:function(){return on=!0,!0}});window.addEventListener("test",qe,qe),window.removeEventListener("test",qe,qe)}catch{on=!1}var me=on?{passive:!1}:!1,Fc=function(e){return e.tagName==="TEXTAREA"},Xa=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Fc(e)&&n[t]==="visible")},jc=function(e){return Xa(e,"overflowY")},Rc=function(e){return Xa(e,"overflowX")},gr=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=qa(e,r);if(a){var i=Ka(e,r),o=i[1],s=i[2];if(o>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Lc=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Dc=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},qa=function(e,t){return e==="v"?jc(t):Rc(t)},Ka=function(e,t){return e==="v"?Lc(t):Dc(t)},zc=function(e,t){return e==="h"&&t==="rtl"?-1:1},Wc=function(e,t,n,r,a){var i=zc(e,window.getComputedStyle(t).direction),o=i*r,s=n.target,c=t.contains(s),l=!1,u=o>0,f=0,d=0;do{var p=Ka(e,s),g=p[0],m=p[1],h=p[2],w=m-h-i*g;(g||w)&&qa(e,s)&&(f+=w,d+=g),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!c&&s!==document.body||c&&(t.contains(s)||t===s));return(u&&(Math.abs(f)<1||!a)||!u&&(Math.abs(d)<1||!a))&&(l=!0),l},Ke=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},br=function(e){return[e.deltaX,e.deltaY]},hr=function(e){return e&&"current"in e?e.current:e},Bc=function(e,t){return e[0]===t[0]&&e[1]===t[1]},$c=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Uc=0,ve=[];function Hc(e){var t=v.useRef([]),n=v.useRef([0,0]),r=v.useRef(),a=v.useState(Uc++)[0],i=v.useState(Va)[0],o=v.useRef(e);v.useEffect(function(){o.current=e},[e]),v.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var m=To([e.lockRef.current],(e.shards||[]).map(hr),!0).filter(Boolean);return m.forEach(function(h){return h.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),m.forEach(function(h){return h.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var s=v.useCallback(function(m,h){if("touches"in m&&m.touches.length===2)return!o.current.allowPinchZoom;var w=Ke(m),k=n.current,S="deltaX"in m?m.deltaX:k[0]-w[0],A="deltaY"in m?m.deltaY:k[1]-w[1],C,I=m.target,M=Math.abs(S)>Math.abs(A)?"h":"v";if("touches"in m&&M==="h"&&I.type==="range")return!1;var L=gr(M,I);if(!L)return!0;if(L?C=M:(C=M==="v"?"h":"v",L=gr(M,I)),!L)return!1;if(!r.current&&"changedTouches"in m&&(S||A)&&(r.current=C),!C)return!0;var E=r.current||C;return Wc(E,h,m,E==="h"?S:A,!0)},[]),c=v.useCallback(function(m){var h=m;if(!(!ve.length||ve[ve.length-1]!==i)){var w="deltaY"in h?br(h):Ke(h),k=t.current.filter(function(C){return C.name===h.type&&(C.target===h.target||h.target===C.shadowParent)&&Bc(C.delta,w)})[0];if(k&&k.should){h.cancelable&&h.preventDefault();return}if(!k){var S=(o.current.shards||[]).map(hr).filter(Boolean).filter(function(C){return C.contains(h.target)}),A=S.length>0?s(h,S[0]):!o.current.noIsolation;A&&h.cancelable&&h.preventDefault()}}},[]),l=v.useCallback(function(m,h,w,k){var S={name:m,delta:h,target:w,should:k,shadowParent:Yc(w)};t.current.push(S),setTimeout(function(){t.current=t.current.filter(function(A){return A!==S})},1)},[]),u=v.useCallback(function(m){n.current=Ke(m),r.current=void 0},[]),f=v.useCallback(function(m){l(m.type,br(m),m.target,s(m,e.lockRef.current))},[]),d=v.useCallback(function(m){l(m.type,Ke(m),m.target,s(m,e.lockRef.current))},[]);v.useEffect(function(){return ve.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:d}),document.addEventListener("wheel",c,me),document.addEventListener("touchmove",c,me),document.addEventListener("touchstart",u,me),function(){ve=ve.filter(function(m){return m!==i}),document.removeEventListener("wheel",c,me),document.removeEventListener("touchmove",c,me),document.removeEventListener("touchstart",u,me)}},[]);var p=e.removeScrollBar,g=e.inert;return v.createElement(v.Fragment,null,g?v.createElement(i,{styles:$c(a)}):null,p?v.createElement(Mc,{gapMode:e.gapMode}):null)}function Yc(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Gc=Mo(Ga,Hc);var Za=v.forwardRef(function(e,t){return v.createElement(kt,B({},e,{ref:t,sideCar:Gc}))});Za.classNames=kt.classNames;function Vc(e){const{autoFocus:t,trapFocus:n,dialogRef:r,initialFocusRef:a,blockScrollOnMount:i,allowPinchZoom:o,finalFocusRef:s,returnFocusOnClose:c,preserveScrollBarGap:l,lockFocusAcrossFrames:u,isOpen:f}=Oe(),[d,p]=ro();v.useEffect(()=>{!d&&p&&setTimeout(p)},[d,p]);const g=Ua(r,f);return b.jsx(Fa,{autoFocus:t,isDisabled:!n,initialFocusRef:a,finalFocusRef:s,restoreFocus:c,contentRef:r,lockFocusAcrossFrames:u,children:b.jsx(Za,{removeScrollBar:!l,allowPinchZoom:o,enabled:g===1&&i,forwardProps:!0,children:e.children})})}var[Xc,qc]=yt(),Kc={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function Zc(e,t){var n,r;if(e)return(r=(n=Kc[e])==null?void 0:n[t])!=null?r:e}function Qc(e){var t;const{isOpen:n,onClose:r,placement:a="right",children:i,...o}=e,s=ao(),c=(t=s.components)==null?void 0:t.Drawer,l=Zc(a,s.direction);return b.jsx(Xc,{value:{placement:l},children:b.jsx(Ya,{isOpen:n,onClose:r,styleConfig:c,...o,children:i})})}var Jc=T(ea),Qa=F((e,t)=>{const{className:n,children:r,motionProps:a,containerProps:i,...o}=e,{getDialogProps:s,getDialogContainerProps:c,isOpen:l}=Oe(),u=s(o,t),f=c(i),d=R("chakra-modal__content",n),p=Ae(),g={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...p.dialog},m={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...p.dialogContainer},{placement:h}=qc();return b.jsx(Vc,{children:b.jsx(T.div,{...f,className:"chakra-modal__content-container",__css:m,children:b.jsx(Jc,{motionProps:a,direction:h,in:l,className:d,...u,__css:g,children:r})})})});Qa.displayName="DrawerContent";var Ja=F((e,t)=>{const{className:n,...r}=e,a=R("chakra-modal__footer",n),o={display:"flex",alignItems:"center",justifyContent:"flex-end",...Ae().footer};return b.jsx(T.footer,{ref:t,...r,__css:o,className:a})});Ja.displayName="ModalFooter";var ei=F((e,t)=>{const{className:n,...r}=e,{headerId:a,setHeaderMounted:i}=Oe();v.useEffect(()=>(i(!0),()=>i(!1)),[i]);const o=R("chakra-modal__header",n),c={flex:0,...Ae().header};return b.jsx(T.header,{ref:t,className:o,id:a,...r,__css:c})});ei.displayName="ModalHeader";var el=T(Sn.div),ti=F((e,t)=>{const{className:n,transition:r,motionProps:a,...i}=e,o=R("chakra-modal__overlay",n),c={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...Ae().overlay},{motionPreset:l}=Oe(),f=a||(l==="none"?{}:Jr);return b.jsx(el,{...f,__css:c,ref:t,className:o,...i})});ti.displayName="ModalOverlay";var ni=F((e,t)=>{const{className:n,...r}=e,{bodyId:a,setBodyMounted:i}=Oe();v.useEffect(()=>(i(!0),()=>i(!1)),[i]);const o=R("chakra-modal__body",n),s=Ae();return b.jsx(T.div,{ref:t,className:o,id:a,...r,__css:s.body})});ni.displayName="ModalBody";var ri=F((e,t)=>{const{onClick:n,className:r,...a}=e,{onClose:i}=Oe(),o=R("chakra-modal__close-btn",r),s=Ae();return b.jsx(io,{ref:t,__css:s.closeButton,className:o,onClick:Ie(n,c=>{c.stopPropagation(),i()}),...a})});ri.displayName="ModalCloseButton";const yr="/assets/logo-dark-CgFk4jlR.svg",xr="/assets/logo-light-DyBc02vJ.svg";function wr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wr(Object(n),!0).forEach(function(r){j(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pt(e){"@babel/helpers - typeof";return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(e)}function tl(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rl(e,t,n){return t&&nl(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ln(e,t){return il(e)||sl(e,t)||ai(e,t)||ll()}function Ue(e){return al(e)||ol(e)||ai(e)||cl()}function al(e){if(Array.isArray(e))return sn(e)}function il(e){if(Array.isArray(e))return e}function ol(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sl(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(c){i=!0,s=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ai(e,t){if(e){if(typeof e=="string")return sn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sn(e,t)}}function sn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ll(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kr=function(){},Dn={},ii={},oi=null,si={mark:kr,measure:kr};try{typeof window<"u"&&(Dn=window),typeof document<"u"&&(ii=document),typeof MutationObserver<"u"&&(oi=MutationObserver),typeof performance<"u"&&(si=performance)}catch{}var ul=Dn.navigator||{},Sr=ul.userAgent,Cr=Sr===void 0?"":Sr,Z=Dn,N=ii,Ar=oi,Ze=si;Z.document;var q=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",ci=~Cr.indexOf("MSIE")||~Cr.indexOf("Trident/"),Qe,Je,et,tt,nt,G="___FONT_AWESOME___",cn=16,li="fa",ui="svg-inline--fa",se="data-fa-i2svg",ln="data-fa-pseudo-element",fl="data-fa-pseudo-element-pending",zn="data-prefix",Wn="data-icon",Or="fontawesome-i2svg",dl="async",ml=["HTML","HEAD","STYLE","SCRIPT"],fi=function(){try{return!0}catch{return!1}}(),P="classic",_="sharp",Bn=[P,_];function He(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[P]}})}var De=He((Qe={},j(Qe,P,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),j(Qe,_,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Qe)),ze=He((Je={},j(Je,P,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),j(Je,_,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Je)),We=He((et={},j(et,P,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),j(et,_,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),et)),vl=He((tt={},j(tt,P,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),j(tt,_,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),tt)),pl=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,di="fa-layers-text",gl=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bl=He((nt={},j(nt,P,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),j(nt,_,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),nt)),mi=[1,2,3,4,5,6,7,8,9,10],hl=mi.concat([11,12,13,14,15,16,17,18,19,20]),yl=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ne={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Be=new Set;Object.keys(ze[P]).map(Be.add.bind(Be));Object.keys(ze[_]).map(Be.add.bind(Be));var xl=[].concat(Bn,Ue(Be),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ne.GROUP,ne.SWAP_OPACITY,ne.PRIMARY,ne.SECONDARY]).concat(mi.map(function(e){return"".concat(e,"x")})).concat(hl.map(function(e){return"w-".concat(e)})),Te=Z.FontAwesomeConfig||{};function wl(e){var t=N.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function kl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(N&&typeof N.querySelector=="function"){var Sl=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Sl.forEach(function(e){var t=Ln(e,2),n=t[0],r=t[1],a=kl(wl(n));a!=null&&(Te[r]=a)})}var vi={styleDefault:"solid",familyDefault:"classic",cssPrefix:li,replacementClass:ui,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Te.familyPrefix&&(Te.cssPrefix=Te.familyPrefix);var Ce=y(y({},vi),Te);Ce.autoReplaceSvg||(Ce.observeMutations=!1);var x={};Object.keys(vi).forEach(function(e){Object.defineProperty(x,e,{enumerable:!0,set:function(n){Ce[e]=n,Me.forEach(function(r){return r(x)})},get:function(){return Ce[e]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(t){Ce.cssPrefix=t,Me.forEach(function(n){return n(x)})},get:function(){return Ce.cssPrefix}});Z.FontAwesomeConfig=x;var Me=[];function Cl(e){return Me.push(e),function(){Me.splice(Me.indexOf(e),1)}}var K=cn,$={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Al(e){if(!(!e||!q)){var t=N.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=N.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return N.head.insertBefore(t,r),e}}var Ol="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $e(){for(var e=12,t="";e-- >0;)t+=Ol[Math.random()*62|0];return t}function Ee(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function $n(e){return e.classList?Ee(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function pi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function El(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(pi(e[n]),'" ')},"").trim()}function St(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Un(e){return e.size!==$.size||e.x!==$.x||e.y!==$.y||e.rotate!==$.rotate||e.flipX||e.flipY}function Pl(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Nl(e){var t=e.transform,n=e.width,r=n===void 0?cn:n,a=e.height,i=a===void 0?cn:a,o=e.startCentered,s=o===void 0?!1:o,c="";return s&&ci?c+="translate(".concat(t.x/K-r/2,"em, ").concat(t.y/K-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/K,"em), calc(-50% + ").concat(t.y/K,"em)) "):c+="translate(".concat(t.x/K,"em, ").concat(t.y/K,"em) "),c+="scale(".concat(t.size/K*(t.flipX?-1:1),", ").concat(t.size/K*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Il=`:root, :host {
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
}`;function gi(){var e=li,t=ui,n=x.cssPrefix,r=x.replacementClass,a=Il;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Er=!1;function Dt(){x.autoAddCss&&!Er&&(Al(gi()),Er=!0)}var _l={mixout:function(){return{dom:{css:gi,insertCss:Dt}}},hooks:function(){return{beforeDOMElementCreation:function(){Dt()},beforeI2svg:function(){Dt()}}}},V=Z||{};V[G]||(V[G]={});V[G].styles||(V[G].styles={});V[G].hooks||(V[G].hooks={});V[G].shims||(V[G].shims=[]);var z=V[G],bi=[],Tl=function e(){N.removeEventListener("DOMContentLoaded",e),gt=1,bi.map(function(t){return t()})},gt=!1;q&&(gt=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),gt||N.addEventListener("DOMContentLoaded",Tl));function Ml(e){q&&(gt?setTimeout(e,0):bi.push(e))}function Ye(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?pi(e):"<".concat(t," ").concat(El(r),">").concat(i.map(Ye).join(""),"</").concat(t,">")}function Pr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zt=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,c,l,u;for(r===void 0?(c=1,u=t[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=s(u,t[l],l,t);return u};function Fl(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function un(e){var t=Fl(e);return t.length===1?t[0].toString(16):null}function jl(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Nr(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function fn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Nr(t);typeof z.hooks.addPack=="function"&&!a?z.hooks.addPack(e,Nr(t)):z.styles[e]=y(y({},z.styles[e]||{}),i),e==="fas"&&fn("fa",t)}var rt,at,it,ge=z.styles,Rl=z.shims,Ll=(rt={},j(rt,P,Object.values(We[P])),j(rt,_,Object.values(We[_])),rt),Hn=null,hi={},yi={},xi={},wi={},ki={},Dl=(at={},j(at,P,Object.keys(De[P])),j(at,_,Object.keys(De[_])),at);function zl(e){return~xl.indexOf(e)}function Wl(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!zl(a)?a:null}var Si=function(){var t=function(i){return zt(ge,function(o,s,c){return o[c]=zt(s,i,{}),o},{})};hi=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){a[c.toString(16)]=o})}return a}),yi=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){a[c]=o})}return a}),ki=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(c){a[c]=o}),a});var n="far"in ge||x.autoFetchSvg,r=zt(Rl,function(a,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});xi=r.names,wi=r.unicodes,Hn=Ct(x.styleDefault,{family:x.familyDefault})};Cl(function(e){Hn=Ct(e.styleDefault,{family:x.familyDefault})});Si();function Yn(e,t){return(hi[e]||{})[t]}function Bl(e,t){return(yi[e]||{})[t]}function re(e,t){return(ki[e]||{})[t]}function Ci(e){return xi[e]||{prefix:null,iconName:null}}function $l(e){var t=wi[e],n=Yn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Q(){return Hn}var Gn=function(){return{prefix:null,iconName:null,rest:[]}};function Ct(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?P:n,a=De[r][e],i=ze[r][e]||ze[r][a],o=e in z.styles?e:null;return i||o||null}var Ir=(it={},j(it,P,Object.keys(We[P])),j(it,_,Object.keys(We[_])),it);function At(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},j(t,P,"".concat(x.cssPrefix,"-").concat(P)),j(t,_,"".concat(x.cssPrefix,"-").concat(_)),t),o=null,s=P;(e.includes(i[P])||e.some(function(l){return Ir[P].includes(l)}))&&(s=P),(e.includes(i[_])||e.some(function(l){return Ir[_].includes(l)}))&&(s=_);var c=e.reduce(function(l,u){var f=Wl(x.cssPrefix,u);if(ge[u]?(u=Ll[s].includes(u)?vl[s][u]:u,o=u,l.prefix=u):Dl[s].indexOf(u)>-1?(o=u,l.prefix=Ct(u,{family:s})):f?l.iconName=f:u!==x.replacementClass&&u!==i[P]&&u!==i[_]&&l.rest.push(u),!a&&l.prefix&&l.iconName){var d=o==="fa"?Ci(l.iconName):{},p=re(l.prefix,l.iconName);d.prefix&&(o=null),l.iconName=d.iconName||p||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!ge.far&&ge.fas&&!x.autoFetchSvg&&(l.prefix="fas")}return l},Gn());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===_&&(ge.fass||x.autoFetchSvg)&&(c.prefix="fass",c.iconName=re(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Q()||"fas"),c}var Ul=function(){function e(){tl(this,e),this.definitions={}}return rl(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=y(y({},n.definitions[s]||{}),o[s]),fn(s,o[s]);var c=We[P][s];c&&fn(c,o[s]),Si()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=l)}),n[s][c]=l}),n}}]),e}(),_r=[],be={},ke={},Hl=Object.keys(ke);function Yl(e,t){var n=t.mixoutsTo;return _r=e,be={},Object.keys(ke).forEach(function(r){Hl.indexOf(r)===-1&&delete ke[r]}),_r.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),pt(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){be[o]||(be[o]=[]),be[o].push(i[o])})}r.provides&&r.provides(ke)}),n}function dn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=be[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=be[e]||[];a.forEach(function(i){i.apply(null,n)})}function X(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ke[e]?ke[e].apply(null,t):void 0}function mn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Q();if(t)return t=re(n,t)||t,Pr(Ai.definitions,n,t)||Pr(z.styles,n,t)}var Ai=new Ul,Gl=function(){x.autoReplaceSvg=!1,x.observeMutations=!1,ce("noAuto")},Vl={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(ce("beforeI2svg",t),X("pseudoElements2svg",t),X("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,Ml(function(){ql({autoReplaceSvgRoot:n}),ce("watch",t)})}},Xl={icon:function(t){if(t===null)return null;if(pt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:re(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ct(t[0]);return{prefix:r,iconName:re(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(x.cssPrefix,"-"))>-1||t.match(pl))){var a=At(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Q(),iconName:re(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Q();return{prefix:i,iconName:re(i,t)||t}}}},D={noAuto:Gl,config:x,dom:Vl,parse:Xl,library:Ai,findIconDefinition:mn,toHtml:Ye},ql=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?N:n;(Object.keys(z.styles).length>0||x.autoFetchSvg)&&q&&x.autoReplaceSvg&&D.dom.i2svg({node:r})};function Ot(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ye(r)})}}),Object.defineProperty(e,"node",{get:function(){if(q){var r=N.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Kl(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Un(o)&&n.found&&!r.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};a.style=St(y(y({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Zl(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(x.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:y(y({},a),{},{id:o}),children:r}]}]}function Vn(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,d=e.watchable,p=d===void 0?!1:d,g=r.found?r:n,m=g.width,h=g.height,w=a==="fak",k=[x.replacementClass,i?"".concat(x.cssPrefix,"-").concat(i):""].filter(function(E){return f.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(f.classes).join(" "),S={children:[],attributes:y(y({},f.attributes),{},{"data-prefix":a,"data-icon":i,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(h)})},A=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/h*16*.0625,"em")}:{};p&&(S.attributes[se]=""),c&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||$e())},children:[c]}),delete S.attributes.title);var C=y(y({},S),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:y(y({},A),f.styles)}),I=r.found&&n.found?X("generateAbstractMask",C)||{children:[],attributes:{}}:X("generateAbstractIcon",C)||{children:[],attributes:{}},M=I.children,L=I.attributes;return C.children=M,C.attributes=L,s?Zl(C):Kl(C)}function Tr(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,c=s===void 0?!1:s,l=y(y(y({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[se]="");var u=y({},o.styles);Un(a)&&(u.transform=Nl({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=St(u);f.length>0&&(l.style=f);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function Ql(e){var t=e.content,n=e.title,r=e.extra,a=y(y(y({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=St(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wt=z.styles;function vn(e){var t=e[0],n=e[1],r=e.slice(4),a=Ln(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(ne.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(ne.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(ne.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Jl={found:!1,width:512,height:512};function eu(e,t){!fi&&!x.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function pn(e,t){var n=t;return t==="fa"&&x.styleDefault!==null&&(t=Q()),new Promise(function(r,a){if(X("missingIconAbstract"),n==="fa"){var i=Ci(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Wt[t]&&Wt[t][e]){var o=Wt[t][e];return r(vn(o))}eu(e,t),r(y(y({},Jl),{},{icon:x.showMissingIcons&&e?X("missingIconAbstract")||{}:{}}))})}var Mr=function(){},gn=x.measurePerformance&&Ze&&Ze.mark&&Ze.measure?Ze:{mark:Mr,measure:Mr},_e='FA "6.5.2"',tu=function(t){return gn.mark("".concat(_e," ").concat(t," begins")),function(){return Oi(t)}},Oi=function(t){gn.mark("".concat(_e," ").concat(t," ends")),gn.measure("".concat(_e," ").concat(t),"".concat(_e," ").concat(t," begins"),"".concat(_e," ").concat(t," ends"))},Xn={begin:tu,end:Oi},ut=function(){};function Fr(e){var t=e.getAttribute?e.getAttribute(se):null;return typeof t=="string"}function nu(e){var t=e.getAttribute?e.getAttribute(zn):null,n=e.getAttribute?e.getAttribute(Wn):null;return t&&n}function ru(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(x.replacementClass)}function au(){if(x.autoReplaceSvg===!0)return ft.replace;var e=ft[x.autoReplaceSvg];return e||ft.replace}function iu(e){return N.createElementNS("http://www.w3.org/2000/svg",e)}function ou(e){return N.createElement(e)}function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?iu:ou:n;if(typeof e=="string")return N.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ei(o,{ceFn:r}))}),a}function su(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ft={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ei(a),n)}),n.getAttribute(se)===null&&x.keepOriginalSource){var r=N.createComment(su(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~$n(n).indexOf(x.replacementClass))return ft.replace(t);var a=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,c){return c===x.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ye(s)}).join(`
`);n.setAttribute(se,""),n.innerHTML=o}};function jr(e){e()}function Pi(e,t){var n=typeof t=="function"?t:ut;if(e.length===0)n();else{var r=jr;x.mutateApproach===dl&&(r=Z.requestAnimationFrame||jr),r(function(){var a=au(),i=Xn.begin("mutate");e.map(a),i(),n()})}}var qn=!1;function Ni(){qn=!0}function bn(){qn=!1}var bt=null;function Rr(e){if(Ar&&x.observeMutations){var t=e.treeCallback,n=t===void 0?ut:t,r=e.nodeCallback,a=r===void 0?ut:r,i=e.pseudoElementsCallback,o=i===void 0?ut:i,s=e.observeMutationsRoot,c=s===void 0?N:s;bt=new Ar(function(l){if(!qn){var u=Q();Ee(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Fr(f.addedNodes[0])&&(x.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&x.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Fr(f.target)&&~yl.indexOf(f.attributeName))if(f.attributeName==="class"&&nu(f.target)){var d=At($n(f.target)),p=d.prefix,g=d.iconName;f.target.setAttribute(zn,p||u),g&&f.target.setAttribute(Wn,g)}else ru(f.target)&&a(f.target)})}}),q&&bt.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cu(){bt&&bt.disconnect()}function lu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function uu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=At($n(e));return a.prefix||(a.prefix=Q()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Bl(a.prefix,e.innerText)||Yn(a.prefix,un(e.innerText))),!a.iconName&&x.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function fu(e){var t=Ee(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return x.autoA11y&&(n?t["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(r||$e()):(t["aria-hidden"]="true",t.focusable="false")),t}function du(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Lr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=uu(e),r=n.iconName,a=n.prefix,i=n.rest,o=fu(e),s=dn("parseNodeAttributes",{},e),c=t.styleParser?lu(e):[];return y({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:$,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var mu=z.styles;function Ii(e){var t=x.autoReplaceSvg==="nest"?Lr(e,{styleParser:!1}):Lr(e);return~t.extra.classes.indexOf(di)?X("generateLayersText",e,t):X("generateSvgReplacementMutation",e,t)}var J=new Set;Bn.map(function(e){J.add("fa-".concat(e))});Object.keys(De[P]).map(J.add.bind(J));Object.keys(De[_]).map(J.add.bind(J));J=Ue(J);function Dr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();var n=N.documentElement.classList,r=function(f){return n.add("".concat(Or,"-").concat(f))},a=function(f){return n.remove("".concat(Or,"-").concat(f))},i=x.autoFetchSvg?J:Bn.map(function(u){return"fa-".concat(u)}).concat(Object.keys(mu));i.includes("fa")||i.push("fa");var o=[".".concat(di,":not([").concat(se,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(se,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ee(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var c=Xn.begin("onTree"),l=s.reduce(function(u,f){try{var d=Ii(f);d&&u.push(d)}catch(p){fi||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(d){Pi(d,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(d){c(),f(d)})})}function vu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ii(e).then(function(n){n&&Pi([n],t)})}function pu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:mn(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:mn(a||{})),e(r,y(y({},n),{},{mask:a}))}}var gu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?$:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,l=n.maskId,u=l===void 0?null:l,f=n.title,d=f===void 0?null:f,p=n.titleId,g=p===void 0?null:p,m=n.classes,h=m===void 0?[]:m,w=n.attributes,k=w===void 0?{}:w,S=n.styles,A=S===void 0?{}:S;if(t){var C=t.prefix,I=t.iconName,M=t.icon;return Ot(y({type:"icon"},t),function(){return ce("beforeDOMElementCreation",{iconDefinition:t,params:n}),x.autoA11y&&(d?k["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(g||$e()):(k["aria-hidden"]="true",k.focusable="false")),Vn({icons:{main:vn(M),mask:c?vn(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:I,transform:y(y({},$),a),symbol:o,title:d,maskId:u,titleId:g,extra:{attributes:k,styles:A,classes:h}})})}},bu={mixout:function(){return{icon:pu(gu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Dr,n.nodeCallback=vu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?N:r,i=n.callback,o=i===void 0?function(){}:i;return Dr(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(p,g){Promise.all([pn(a,s),u.iconName?pn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var h=Ln(m,2),w=h[0],k=h[1];p([n,Vn({icons:{main:w,mask:k},prefix:s,iconName:a,transform:c,symbol:l,maskId:f,title:i,titleId:o,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,c=St(s);c.length>0&&(a.style=c);var l;return Un(o)&&(l=X("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:a}}}},hu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ot({type:"layer"},function(){ce("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers")].concat(Ue(i)).join(" ")},children:o}]})}}}},yu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return Ot({type:"counter",content:n},function(){return ce("beforeDOMElementCreation",{content:n,params:r}),Ql({content:n.toString(),title:i,extra:{attributes:l,styles:f,classes:["".concat(x.cssPrefix,"-layers-counter")].concat(Ue(s))}})})}}}},xu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?$:a,o=r.title,s=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,d=r.styles,p=d===void 0?{}:d;return Ot({type:"text",content:n},function(){return ce("beforeDOMElementCreation",{content:n,params:r}),Tr({content:n,transform:y(y({},$),i),title:s,extra:{attributes:f,styles:p,classes:["".concat(x.cssPrefix,"-layers-text")].concat(Ue(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,c=null;if(ci){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/l,c=u.height/l}return x.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Tr({content:n.innerHTML,width:s,height:c,transform:i,title:a,extra:o,watchable:!0})])}}},wu=new RegExp('"',"ug"),zr=[1105920,1112319];function ku(e){var t=e.replace(wu,""),n=jl(t,0),r=n>=zr[0]&&n<=zr[1],a=t.length===2?t[0]===t[1]:!1;return{value:un(a?t[0]:t),isSecondary:r||a}}function Wr(e,t){var n="".concat(fl).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ee(e.children),o=i.filter(function(M){return M.getAttribute(ln)===t})[0],s=Z.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(gl),l=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?_:P,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?ze[d][c[2].toLowerCase()]:bl[d][l],g=ku(f),m=g.value,h=g.isSecondary,w=c[0].startsWith("FontAwesome"),k=Yn(p,m),S=k;if(w){var A=$l(m);A.iconName&&A.prefix&&(k=A.iconName,p=A.prefix)}if(k&&!h&&(!o||o.getAttribute(zn)!==p||o.getAttribute(Wn)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var C=du(),I=C.extra;I.attributes[ln]=t,pn(k,p).then(function(M){var L=Vn(y(y({},C),{},{icons:{main:M,mask:Gn()},prefix:p,iconName:S,extra:I,watchable:!0})),E=N.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(E,e.firstChild):e.appendChild(E),E.outerHTML=L.map(function(H){return Ye(H)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Su(e){return Promise.all([Wr(e,"::before"),Wr(e,"::after")])}function Cu(e){return e.parentNode!==document.head&&!~ml.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ln)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Br(e){if(q)return new Promise(function(t,n){var r=Ee(e.querySelectorAll("*")).filter(Cu).map(Su),a=Xn.begin("searchPseudoElements");Ni(),Promise.all(r).then(function(){a(),bn(),t()}).catch(function(){a(),bn(),n()})})}var Au={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Br,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?N:r;x.searchPseudoElements&&Br(a)}}},$r=!1,Ou={mixout:function(){return{dom:{unwatch:function(){Ni(),$r=!0}}}},hooks:function(){return{bootstrap:function(){Rr(dn("mutationObserverCallbacks",{}))},noAuto:function(){cu()},watch:function(n){var r=n.observeMutationsRoot;$r?bn():Rr(dn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ur=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Eu={mixout:function(){return{parse:{transform:function(n){return Ur(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ur(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:f,path:d};return{tag:"g",attributes:y({},p.outer),children:[{tag:"g",attributes:y({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:y(y({},r.icon.attributes),p.path)}]}]}}}},Bt={x:0,y:0,width:"100%",height:"100%"};function Hr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Pu(e){return e.tag==="g"?e.children:[e]}var Nu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?At(a.split(" ").map(function(o){return o.trim()})):Gn();return i.prefix||(i.prefix=Q()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,l=i.width,u=i.icon,f=o.width,d=o.icon,p=Pl({transform:c,containerWidth:f,iconWidth:l}),g={tag:"rect",attributes:y(y({},Bt),{},{fill:"white"})},m=u.children?{children:u.children.map(Hr)}:{},h={tag:"g",attributes:y({},p.inner),children:[Hr(y({tag:u.tag,attributes:y(y({},u.attributes),p.path)},m))]},w={tag:"g",attributes:y({},p.outer),children:[h]},k="mask-".concat(s||$e()),S="clip-".concat(s||$e()),A={tag:"mask",attributes:y(y({},Bt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,w]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Pu(d)},A]};return r.push(C,{tag:"rect",attributes:y({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(k,")")},Bt)}),{children:r,attributes:a}}}},Iu={provides:function(t){var n=!1;Z.matchMedia&&(n=Z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:y(y({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=y(y({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:y(y({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:y(y({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:y(y({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:y(y({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:y(y({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:y(y({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:y(y({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Tu=[_l,bu,hu,yu,xu,Au,Ou,Eu,Nu,Iu,_u];Yl(Tu,{mixoutsTo:D});D.noAuto;D.config;D.library;D.dom;var hn=D.parse;D.findIconDefinition;D.toHtml;var Mu=D.icon;D.layer;D.text;D.counter;function Yr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yr(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ht(e){"@babel/helpers - typeof";return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ht(e)}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ju(e,t){if(e==null)return{};var n=Fu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yn(e){return Ru(e)||Lu(e)||Du(e)||zu()}function Ru(e){if(Array.isArray(e))return xn(e)}function Lu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Du(e,t){if(e){if(typeof e=="string")return xn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xn(e,t)}}function xn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wu(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,c=e.spin,l=e.spinPulse,u=e.spinReverse,f=e.pulse,d=e.fixedWidth,p=e.inverse,g=e.border,m=e.listItem,h=e.flip,w=e.size,k=e.rotation,S=e.pull,A=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":f,"fa-fw":d,"fa-inverse":p,"fa-border":g,"fa-li":m,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},he(t,"fa-".concat(w),typeof w<"u"&&w!==null),he(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),he(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),he(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(A).map(function(C){return A[C]?C:null}).filter(function(C){return C})}function Bu(e){return e=e-0,e===e}function _i(e){return Bu(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var $u=["style"];function Uu(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Hu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=_i(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Uu(a)]=i:t[a]=i,t},{})}function Ti(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Ti(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.attrs.className=u,delete t.attributes.class;break;case"style":c.attrs.style=Hu(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=u:c.attrs[_i(l)]=u}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=ju(n,$u);return a.attrs.style=W(W({},a.attrs.style),o),e.apply(void 0,[t.tag,W(W({},a.attrs),s)].concat(yn(r)))}var Mi=!1;try{Mi=!0}catch{}function Yu(){if(!Mi&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gr(e){if(e&&ht(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(hn.icon)return hn.icon(e);if(e===null)return null;if(e&&ht(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function $t(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?he({},e,t):{}}var Vr={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Fe=wn.forwardRef(function(e,t){var n=W(W({},Vr),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,c=n.titleId,l=n.maskId,u=Gr(r),f=$t("classes",[].concat(yn(Wu(n)),yn((o||"").split(" ")))),d=$t("transform",typeof n.transform=="string"?hn.transform(n.transform):n.transform),p=$t("mask",Gr(a)),g=Mu(u,W(W(W(W({},f),d),p),{},{symbol:i,title:s,titleId:c,maskId:l}));if(!g)return Yu("Could not find icon",u),null;var m=g.abstract,h={ref:t};return Object.keys(n).forEach(function(w){Vr.hasOwnProperty(w)||(h[w]=n[w])}),Gu(m[0],h)});Fe.displayName="FontAwesomeIcon";Fe.propTypes={beat:O.bool,border:O.bool,beatFade:O.bool,bounce:O.bool,className:O.string,fade:O.bool,flash:O.bool,mask:O.oneOfType([O.object,O.array,O.string]),maskId:O.string,fixedWidth:O.bool,inverse:O.bool,flip:O.oneOf([!0,!1,"horizontal","vertical","both"]),icon:O.oneOfType([O.object,O.array,O.string]),listItem:O.bool,pull:O.oneOf(["right","left"]),pulse:O.bool,rotation:O.oneOf([0,90,180,270]),shake:O.bool,size:O.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:O.bool,spinPulse:O.bool,spinReverse:O.bool,symbol:O.oneOfType([O.bool,O.string]),title:O.string,titleId:O.string,transform:O.oneOfType([O.string,O.object]),swapOpacity:O.bool};var Gu=Ti.bind(null,wn.createElement),Vu={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Xr={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},qr={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};const Kr=["About","Skills","Projects","Experience","Contact"],Zr=({children:e})=>b.jsx(ja,{px:2,py:1,fontSize:"md",fontWeight:400,rounded:"md",_hover:{textDecoration:"none",color:te("gray.600","gray.300")},href:"#about",children:e}),Xu=()=>{const{isOpen:e,onOpen:t,onClose:n}=rc(),{colorMode:r,toggleColorMode:a}=oo();return b.jsxs(oe,{bg:te("white","gray.800"),px:2,boxShadow:te("rgba(50, 50, 93, 0.125) 0px 1px 2px -1px, rgba(0, 0, 0, 0.125) 0px 1px 2px -1px","none"),position:"sticky",top:0,left:0,as:"header",display:"flex",justifyContent:"center",borderBottom:te("none","1px solid #F6E05E"),children:[b.jsxs(Ra,{templateColumns:{base:"1fr 0fr auto",md:"auto 2fr 0fr"},alignItems:"center",gap:2,h:16,w:{base:"100%",md:"calc(100% - 14rem)",lg:"calc(100% - 20rem)"},children:[b.jsx(st,{children:b.jsx(oe,{textAlign:"center",alignItems:"center",justifyContent:"center",display:"flex",children:b.jsx(Xt,{minW:32,src:te(xr,yr),alt:"App Logo",h:{base:8,md:10}})})}),b.jsx(st,{display:{base:"none",md:"block"},children:b.jsxs(Rn,{justifyContent:"flex-end",alignContent:"center",alignItems:"center",children:[Kr.map(i=>b.jsx(Zr,{children:i},i)),b.jsx(ot,{variant:"ghost",size:"md",icon:b.jsx(Fe,{size:"lg",icon:r==="light"?qr:Xr}),onClick:a})]})}),b.jsx(st,{textAlign:"right",display:{base:"block",md:"none"},children:b.jsx(ot,{variant:"ghost",size:"md",icon:b.jsx(Fe,{size:"xl",icon:Vu}),"aria-label":"Toggle Menu",fontSize:"md",onClick:t,color:"blue.700",px:4})})]}),b.jsxs(Qc,{placement:"right",size:["xs"],onClose:n,isOpen:e,children:[b.jsx(ti,{sx:{backdropFilter:"blur(0.125rem)"}}),b.jsxs(Qa,{children:[b.jsxs(ei,{py:2,boxShadow:"0 0 3px rgba(0, 0, 0, 0.1)",children:[b.jsx(Xt,{src:te(xr,yr),alt:"App Logo",h:12}),b.jsx(ri,{})]}),b.jsx(ni,{children:b.jsxs(Wa,{align:"start",children:[Kr.map(i=>b.jsx(Zr,{onClick:n,children:i},i)),b.jsx(ot,{variant:"ghost",size:"md",icon:b.jsx(Fe,{size:"lg",icon:r==="light"?qr:Xr}),onClick:a})]})}),b.jsx(Ja,{})]})]})]})};function qu(){const e=new Date().getFullYear();var t=te("gray.300","gray.700");return b.jsx(oe,{as:"footer",bg:t,p:2,children:b.jsxs(Rn,{wrap:"wrap",fontSize:"sm",justifyContent:"center",alignItems:"center",h:16,children:[b.jsxs(rn,{children:["© ",e]})," ",b.jsx($a,{orientation:"vertical",h:4})," ",b.jsx(rn,{textAlign:"center",children:"Designed and coded with ❤️️ by Tang Ho Trung Nam"})]})})}function Ku({children:e}){return b.jsxs(b.Fragment,{children:[b.jsx(Xu,{}),b.jsx(qu,{})]})}function Zu(){return b.jsx(oe,{id:"about",h:"60rem",bg:"red.200"})}function Qu(){return b.jsx(oe,{h:"32rem",bg:"blue.900"})}function Ju(){return b.jsxs(v.Fragment,{children:[b.jsx(Qu,{}),b.jsx(Zu,{})]})}function rf(){return b.jsx(Ku,{children:b.jsx(Ju,{})})}export{rf as default};
