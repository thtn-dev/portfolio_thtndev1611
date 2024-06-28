import{r as m,j as p,g as Qi,R as Sn}from"./index-D7e7_M5Y.js";import{A as Cn,l as Ge,s as R,q as M,u as Ji,n as T,p as At,S as eo,z as Ve,v as Xe,B as nr,_ as Vt,D as to,i as no,E as Te,w as ro,y as ao,F as io,H as oo,x as so,f as co,J as ne}from"./chunk-37N6GCLA-CVjuwymx.js";function lo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var uo=lo();function ea(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function fo(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function Xt(...e){return t=>{e.forEach(n=>{fo(n,t)})}}function mo(...e){return m.useMemo(()=>Xt(...e),e)}var qt={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},Ne={scale:{enter:{scale:1},exit:{scale:.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function Kt(e){var t;switch((t=e==null?void 0:e.direction)!=null?t:"right"){case"right":return Ne.slideRight;case"left":return Ne.slideLeft;case"bottom":return Ne.slideDown;case"top":return Ne.slideUp;default:return Ne.slideRight}}var rr={enter:{duration:.2,ease:qt.easeOut},exit:{duration:.1,ease:qt.easeIn}},gt={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.exit})},vo={enter:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:1,transition:(r=e==null?void 0:e.enter)!=null?r:gt.enter(rr.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:0,transition:(r=e==null?void 0:e.exit)!=null?r:gt.exit(rr.exit,n),transitionEnd:t==null?void 0:t.exit}}},ta={initial:"exit",animate:"enter",exit:"exit",variants:vo},po=m.forwardRef(function(t,n){const{unmountOnExit:r,in:a,className:i,transition:o,transitionEnd:s,delay:c,...l}=t,u=a||r?"enter":"exit",f=r?a&&r:!0,d={transition:o,transitionEnd:s,delay:c};return p.jsx(Cn,{custom:d,children:f&&p.jsx(Ge.div,{ref:n,className:R("chakra-fade",i),custom:d,...ta,animate:u,...l})})});po.displayName="Fade";var ar={exit:{duration:.15,ease:qt.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},ho={exit:({direction:e,transition:t,transitionEnd:n,delay:r})=>{var a;const{exit:i}=Kt({direction:e});return{...i,transition:(a=t==null?void 0:t.exit)!=null?a:gt.exit(ar.exit,r),transitionEnd:n==null?void 0:n.exit}},enter:({direction:e,transitionEnd:t,transition:n,delay:r})=>{var a;const{enter:i}=Kt({direction:e});return{...i,transition:(a=n==null?void 0:n.enter)!=null?a:gt.enter(ar.enter,r),transitionEnd:t==null?void 0:t.enter}}},na=m.forwardRef(function(t,n){const{direction:r="right",style:a,unmountOnExit:i,in:o,className:s,transition:c,transitionEnd:l,delay:u,motionProps:f,...d}=t,h=Kt({direction:r}),g=Object.assign({position:"fixed"},h.position,a),v=i?o&&i:!0,b=o||i?"enter":"exit",w={transitionEnd:l,transition:c,direction:r,delay:u};return p.jsx(Cn,{custom:w,children:v&&p.jsx(Ge.div,{...d,ref:n,initial:"exit",className:R("chakra-slide",s),animate:b,exit:"exit",custom:w,variants:ho,style:g,...f})})});na.displayName="Slide";var Zt=M(function(t,n){const{htmlWidth:r,htmlHeight:a,alt:i,...o}=t;return p.jsx("img",{width:r,height:a,ref:n,alt:i,...o})});Zt.displayName="NativeImage";function go(e){const{loading:t,src:n,srcSet:r,onLoad:a,onError:i,crossOrigin:o,sizes:s,ignoreFallback:c}=e,[l,u]=m.useState("pending");m.useEffect(()=>{u(n?"loading":"pending")},[n]);const f=m.useRef(),d=m.useCallback(()=>{if(!n)return;h();const g=new Image;g.src=n,o&&(g.crossOrigin=o),r&&(g.srcset=r),s&&(g.sizes=s),t&&(g.loading=t),g.onload=v=>{h(),u("loaded"),a==null||a(v)},g.onerror=v=>{h(),u("failed"),i==null||i(v)},f.current=g},[n,o,r,s,a,i,t]),h=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return Ji(()=>{if(!c)return l==="loading"&&d(),()=>{h()}},[l,d,c]),c?"loaded":l}var bo=(e,t)=>e!=="loaded"&&t==="beforeLoadOrError"||e==="failed"&&t==="onError";function yo(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}var bt=M(function(t,n){const{fallbackSrc:r,fallback:a,src:i,srcSet:o,align:s,fit:c,loading:l,ignoreFallback:u,crossOrigin:f,fallbackStrategy:d="beforeLoadOrError",referrerPolicy:h,...g}=t,v=r!==void 0||a!==void 0,b=l!=null||u||!v,w=go({...t,crossOrigin:f,ignoreFallback:b}),k=bo(w,d),S={ref:n,objectFit:c,objectPosition:s,...b?g:yo(g,["onError","onLoad"])};return k?a||p.jsx(T.img,{as:Zt,className:"chakra-image__placeholder",src:r,...S}):p.jsx(T.img,{as:Zt,src:i,srcSet:o,crossOrigin:f,loading:l,referrerPolicy:h,className:"chakra-image",...S})});bt.displayName="Image";function xo(e){return m.Children.toArray(e).filter(t=>m.isValidElement(t))}var[lf,wo]=At({strict:!1,name:"ButtonGroupContext"});function ko(e){const[t,n]=m.useState(!e);return{ref:m.useCallback(i=>{i&&n(i.tagName==="BUTTON")},[]),type:t?"button":void 0}}function Qt(e){const{children:t,className:n,...r}=e,a=m.isValidElement(t)?m.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=R("chakra-button__icon",n);return p.jsx(T.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:i,children:a})}Qt.displayName="ButtonIcon";function Jt(e){const{label:t,placement:n,spacing:r="0.5rem",children:a=p.jsx(eo,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:o,...s}=e,c=R("chakra-button__spinner",i),l=n==="start"?"marginEnd":"marginStart",u=m.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[l]:t?r:0,fontSize:"1em",lineHeight:"normal",...o}),[o,t,l,r]);return p.jsx(T.div,{className:c,...s,__css:u,children:a})}Jt.displayName="ButtonSpinner";var ra=M((e,t)=>{const n=wo(),r=Ve("Button",{...n,...e}),{isDisabled:a=n==null?void 0:n.isDisabled,isLoading:i,isActive:o,children:s,leftIcon:c,rightIcon:l,loadingText:u,iconSpacing:f="0.5rem",type:d,spinner:h,spinnerPlacement:g="start",className:v,as:b,...w}=Xe(e),k=m.useMemo(()=>{const N={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:N}}},[r,n]),{ref:S,type:A}=ko(b),C={rightIcon:l,leftIcon:c,iconSpacing:f,children:s};return p.jsxs(T.button,{ref:mo(t,S),as:b,type:d??A,"data-active":nr(o),"data-loading":nr(i),__css:k,className:R("chakra-button",v),...w,disabled:a||i,children:[i&&g==="start"&&p.jsx(Jt,{className:"chakra-button__spinner--start",label:u,placement:"start",spacing:f,children:h}),i?u||p.jsx(T.span,{opacity:0,children:p.jsx(ir,{...C})}):p.jsx(ir,{...C}),i&&g==="end"&&p.jsx(Jt,{className:"chakra-button__spinner--end",label:u,placement:"end",spacing:f,children:h})]})});ra.displayName="Button";function ir(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return p.jsxs(p.Fragment,{children:[t&&p.jsx(Qt,{marginEnd:a,children:t}),r,n&&p.jsx(Qt,{marginStart:a,children:n})]})}var dt=M((e,t)=>{const{icon:n,children:r,isRound:a,"aria-label":i,...o}=e,s=n||r,c=m.isValidElement(s)?m.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return p.jsx(ra,{padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":i,...o,children:c})});dt.displayName="IconButton";function So(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var aa={exports:{}},Co="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ao=Co,Eo=Ao;function ia(){}function oa(){}oa.resetWarningCache=ia;var Oo=function(){function e(r,a,i,o,s,c){if(c!==Eo){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:oa,resetWarningCache:ia};return n.PropTypes=n,n};aa.exports=Oo();var Po=aa.exports;const E=Qi(Po);var en="data-focus-lock",sa="data-focus-lock-disabled",Io="data-no-focus-lock",No="data-autofocus-inside",_o="data-no-autofocus";function jt(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function To(e,t){var n=m.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var Mo=typeof window<"u"?m.useLayoutEffect:m.useEffect,or=new WeakMap;function ca(e,t){var n=To(null,function(r){return e.forEach(function(a){return jt(a,r)})});return Mo(function(){var r=or.get(n);if(r){var a=new Set(r),i=new Set(e),o=n.current;a.forEach(function(s){i.has(s)||jt(s,null)}),i.forEach(function(s){a.has(s)||jt(s,o)})}or.set(n,e)},[e]),n}var Ft={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},$=function(){return $=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$.apply(this,arguments)};function la(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function jo(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function ua(e){return e}function fa(e,t){t===void 0&&(t=ua);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var o=t(i,r);return n.push(o),function(){n=n.filter(function(s){return s!==o})}},assignSyncMedium:function(i){for(r=!0;n.length;){var o=n;n=[],o.forEach(i)}n={push:function(s){return i(s)},filter:function(){return n}}},assignMedium:function(i){r=!0;var o=[];if(n.length){var s=n;n=[],s.forEach(i),o=n}var c=function(){var u=o;o=[],u.forEach(i)},l=function(){return Promise.resolve().then(c)};l(),n={push:function(u){o.push(u),l()},filter:function(u){return o=o.filter(u),n}}}};return a}function An(e,t){return t===void 0&&(t=ua),fa(e,t)}function da(e){e===void 0&&(e={});var t=fa(null);return t.options=$({async:!0,ssr:!1},e),t}var ma=function(e){var t=e.sideCar,n=la(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return m.createElement(r,$({},n))};ma.isSideCarExport=!0;function Fo(e,t){return e.useMedium(t),ma}var va=An({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),pa=An(),Ro=An(),Lo=da({async:!0,ssr:typeof document<"u"}),Do=m.createContext(void 0),zo=[],En=m.forwardRef(function(t,n){var r,a=m.useState(),i=a[0],o=a[1],s=m.useRef(),c=m.useRef(!1),l=m.useRef(null),u=m.useState({}),f=u[1],d=t.children,h=t.disabled,g=h===void 0?!1:h,v=t.noFocusGuards,b=v===void 0?!1:v,w=t.persistentFocus,k=w===void 0?!1:w,S=t.crossFrame,A=S===void 0?!0:S,C=t.autoFocus,N=C===void 0?!0:C;t.allowTextSelection;var j=t.group,L=t.className,O=t.whiteList,Y=t.hasPositiveIndices,le=t.shards,_t=le===void 0?zo:le,Zn=t.as,Ri=Zn===void 0?"div":Zn,Qn=t.lockProps,Li=Qn===void 0?{}:Qn,Di=t.sideCar,Jn=t.returnFocus,Qe=Jn===void 0?!1:Jn,zi=t.focusOptions,Tt=t.onActivation,Mt=t.onDeactivation,Wi=m.useState({}),Bi=Wi[0],$i=m.useCallback(function(G){var ue=G.captureFocusRestore;if(!l.current){var fe,te=(fe=document)==null?void 0:fe.activeElement;l.current=te,te!==document.body&&(l.current=ue(te))}s.current&&Tt&&Tt(s.current),c.current=!0,f()},[Tt]),Hi=m.useCallback(function(){c.current=!1,Mt&&Mt(s.current),f()},[Mt]),Ui=m.useCallback(function(G){var ue=l.current;if(ue){var fe=(typeof ue=="function"?ue():ue)||document.body,te=typeof Qe=="function"?Qe(fe):Qe;if(te){var tr=typeof te=="object"?te:void 0;l.current=null,G?Promise.resolve().then(function(){return fe.focus(tr)}):fe.focus(tr)}}},[Qe]),Yi=m.useCallback(function(G){c.current&&va.useMedium(G)},[]),Gi=pa.useMedium,Vi=m.useCallback(function(G){s.current!==G&&(s.current=G,o(G))},[]),Xi=Vt((r={},r[sa]=g&&"disabled",r[en]=j,r),Li),er=b!==!0,qi=er&&b!=="tail",Ki=ca([n,Vi]),Zi=m.useMemo(function(){return{observed:s,shards:_t,enabled:!g,active:c.current}},[g,c.current,_t,i]);return m.createElement(m.Fragment,null,er&&[m.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:g?-1:0,style:Ft}),Y?m.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:g?-1:1,style:Ft}):null],!g&&m.createElement(Di,{id:Bi,sideCar:Lo,observed:i,disabled:g,persistentFocus:k,crossFrame:A,autoFocus:N,whiteList:O,shards:_t,onActivation:$i,onDeactivation:Hi,returnFocus:Ui,focusOptions:zi}),m.createElement(Ri,Vt({ref:Ki},Xi,{className:L,onBlur:Gi,onFocus:Yi}),m.createElement(Do.Provider,{value:Zi},d)),qi&&m.createElement("div",{"data-focus-guard":!0,tabIndex:g?-1:0,style:Ft}))});En.propTypes={};function tn(e,t){return tn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},tn(e,t)}function Wo(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,tn(e,t)}function Re(e){"@babel/helpers - typeof";return Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Re(e)}function Bo(e,t){if(Re(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Re(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $o(e){var t=Bo(e,"string");return Re(t)=="symbol"?t:t+""}function Ho(e,t,n){return(t=$o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uo(e,t){function n(r){return r.displayName||r.name||"Component"}return function(a){var i=[],o;function s(){o=e(i.map(function(l){return l.props})),t(o)}var c=function(l){Wo(u,l);function u(){return l.apply(this,arguments)||this}u.peek=function(){return o};var f=u.prototype;return f.componentDidMount=function(){i.push(this),s()},f.componentDidUpdate=function(){s()},f.componentWillUnmount=function(){var h=i.indexOf(this);i.splice(h,1),s()},f.render=function(){return Sn.createElement(a,this.props)},u}(m.PureComponent);return Ho(c,"displayName","SideEffect("+n(a)+")"),c}}var U=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},oe=function(e){return Array.isArray(e)?e:[e]},ha=function(e){return Array.isArray(e)?e[0]:e},Yo=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},ga=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},ba=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Go=function(e){return e.hasAttribute("inert")},Vo=function(e,t){return!e||ba(e)||!Yo(e)&&!Go(e)&&t(ga(e))},ya=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Vo(t,ya.bind(void 0,e));return e.set(t,r),r},Xo=function(e,t){return e&&!ba(e)?Zo(e)?t(ga(e)):!1:!0},xa=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Xo(t,xa.bind(void 0,e));return e.set(t,r),r},wa=function(e){return e.dataset},qo=function(e){return e.tagName==="BUTTON"},ka=function(e){return e.tagName==="INPUT"},Sa=function(e){return ka(e)&&e.type==="radio"},Ko=function(e){return!((ka(e)||qo(e))&&(e.type==="hidden"||e.disabled))},Zo=function(e){var t=e.getAttribute(_o);return![!0,"true",""].includes(t)},On=function(e){var t;return!!(e&&(!((t=wa(e))===null||t===void 0)&&t.focusGuard))},nn=function(e){return!On(e)},Qo=function(e){return!!e},Jo=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),a=n-r,i=e.index-t.index;if(a){if(!n)return 1;if(!r)return-1}return a||i},es=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},Pn=function(e,t,n){return U(e).map(function(r,a){var i=es(r);return{node:r,index:a,tabIndex:n&&i===-1?(r.dataset||{}).focusGuard?0:-1:i}}).filter(function(r){return!t||r.tabIndex>=0}).sort(Jo)},ts=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],In=ts.join(","),ns="".concat(In,", [data-focus-guard]"),Ca=function(e,t){return U((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?ns:In)?[r]:[],Ca(r))},[])},rs=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?Ae([e.contentDocument.body],t):[e]},Ae=function(e,t){return e.reduce(function(n,r){var a,i=Ca(r,t),o=(a=[]).concat.apply(a,i.map(function(s){return rs(s,t)}));return n.concat(o,r.parentNode?U(r.parentNode.querySelectorAll(In)).filter(function(s){return s===r}):[])},[])},as=function(e){var t=e.querySelectorAll("[".concat(No,"]"));return U(t).map(function(n){return Ae([n])}).reduce(function(n,r){return n.concat(r)},[])},Nn=function(e,t){return U(e).filter(function(n){return ya(t,n)}).filter(function(n){return Ko(n)})},sr=function(e,t){return t===void 0&&(t=new Map),U(e).filter(function(n){return xa(t,n)})},_n=function(e,t,n){return Pn(Nn(Ae(e,n),t),!0,n)},yt=function(e,t){return Pn(Nn(Ae(e),t),!1)},is=function(e,t){return Nn(as(e),t)},ie=function(e,t){return e.shadowRoot?ie(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:U(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var a=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return a?ie(a,t):!1}return ie(n,t)})},os=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var a=r+1;a<n;a+=1){var i=e[r].compareDocumentPosition(e[a]);(i&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(a),(i&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(o,s){return!t.has(s)})},Aa=function(e){return e.parentNode?Aa(e.parentNode):e},Tn=function(e){var t=oe(e);return t.filter(Boolean).reduce(function(n,r){var a=r.getAttribute(en);return n.push.apply(n,a?os(U(Aa(r).querySelectorAll("[".concat(en,'="').concat(a,'"]:not([').concat(sa,'="disabled"])')))):[r]),n},[])},ss=function(e){try{return e()}catch{return}},Le=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?Le(t.shadowRoot):t instanceof HTMLIFrameElement&&ss(function(){return t.contentWindow.document})?Le(t.contentWindow.document):t}},cs=function(e,t){return e===t},ls=function(e,t){return!!U(e.querySelectorAll("iframe")).some(function(n){return cs(n,t)})},Ea=function(e,t){return t===void 0&&(t=Le(ha(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Tn(e).some(function(n){return ie(n,t)||ls(n,t)})},us=function(e){e===void 0&&(e=document);var t=Le(e);return t?U(e.querySelectorAll("[".concat(Io,"]"))).some(function(n){return ie(n,t)}):!1},fs=function(e,t){return t.filter(Sa).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},Mn=function(e,t){return Sa(e)&&e.name?fs(e,t):e},ds=function(e){var t=new Set;return e.forEach(function(n){return t.add(Mn(n,e))}),e.filter(function(n){return t.has(n)})},cr=function(e){return e[0]&&e.length>1?Mn(e[0],e):e[0]},lr=function(e,t){return e.indexOf(Mn(t,e))},rn="NEW_FOCUS",ms=function(e,t,n,r,a){var i=e.length,o=e[0],s=e[i-1],c=On(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,u=a?n.indexOf(a):l,f=a?e.indexOf(a):-1;if(l===-1)return f!==-1?f:rn;if(f===-1)return rn;var d=l-u,h=n.indexOf(o),g=n.indexOf(s),v=ds(n),b=r!==void 0?v.indexOf(r):-1,w=b-(a?v.indexOf(a):l);if(!d&&f>=0||t.length===0)return f;var k=lr(e,t[0]),S=lr(e,t[t.length-1]);if(l<=h&&c&&Math.abs(d)>1)return S;if(l>=g&&c&&Math.abs(d)>1)return k;if(d&&Math.abs(w)>1)return f;if(l<=h)return S;if(l>g)return k;if(d)return Math.abs(d)>1?f:(i+f+d)%i}},vs=function(e){return function(t){var n,r=(n=wa(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},ur=function(e,t,n){var r=e.map(function(i){var o=i.node;return o}),a=sr(r.filter(vs(n)));return a&&a.length?cr(a):cr(sr(t))},an=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&an(e.parentNode.host||e.parentNode,t),t},Rt=function(e,t){for(var n=an(e),r=an(t),a=0;a<n.length;a+=1){var i=n[a];if(r.indexOf(i)>=0)return i}return!1},Oa=function(e,t,n){var r=oe(e),a=oe(t),i=r[0],o=!1;return a.filter(Boolean).forEach(function(s){o=Rt(o||s,s)||o,n.filter(Boolean).forEach(function(c){var l=Rt(i,c);l&&(!o||ie(l,o)?o=l:o=Rt(l,o))})}),o},fr=function(e,t){return e.reduce(function(n,r){return n.concat(is(r,t))},[])},ps=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(Qo)},hs=function(e,t){var n=Le(oe(e).length>0?document:ha(e).ownerDocument),r=Tn(e).filter(nn),a=Oa(n||e,e,r),i=new Map,o=yt(r,i),s=o.filter(function(g){var v=g.node;return nn(v)});if(s[0]){var c=yt([a],i).map(function(g){var v=g.node;return v}),l=ps(c,s),u=l.map(function(g){var v=g.node;return v}),f=l.filter(function(g){var v=g.tabIndex;return v>=0}).map(function(g){var v=g.node;return v}),d=ms(u,f,c,n,t);if(d===rn){var h=ur(o,f,fr(r,i))||ur(o,u,fr(r,i));if(h)return{node:h};console.warn("focus-lock: cannot find any node to move focus into");return}return d===void 0?d:l[d]}},gs=function(e){var t=Tn(e).filter(nn),n=Oa(e,e,t),r=Pn(Ae([n],!0),!0,!0),a=Ae(t,!1);return r.map(function(i){var o=i.node,s=i.index;return{node:o,index:s,lockItem:a.indexOf(o)>=0,guard:On(o)}})},jn=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},Lt=0,Dt=!1,Pa=function(e,t,n){n===void 0&&(n={});var r=hs(e,t);if(!Dt&&r){if(Lt>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),Dt=!0,setTimeout(function(){Dt=!1},1);return}Lt++,jn(r.node,n.focusOptions),Lt--}};function _e(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var bs=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:_e(n),parent:_e(n.parentElement),left:_e(n.previousElementSibling),right:_e(n.nextElementSibling)}),n=n.parentElement;return{element:_e(e),stack:t,ownerDocument:e.ownerDocument}},ys=function(e){var t,n,r,a,i;if(e)for(var o=e.stack,s=e.ownerDocument,c=new Map,l=0,u=o;l<u.length;l++){var f=u[l],d=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(d&&s.contains(d)){for(var h=(n=f.left)===null||n===void 0?void 0:n.call(f),g=f.current(),v=d.contains(g)?g:void 0,b=(r=f.right)===null||r===void 0?void 0:r.call(f),w=_n([d],c),k=(i=(a=v??(h==null?void 0:h.nextElementSibling))!==null&&a!==void 0?a:b)!==null&&i!==void 0?i:h;k;){for(var S=0,A=w;S<A.length;S++){var C=A[S];if(k!=null&&k.contains(C.node))return C.node}k=k.nextElementSibling}if(w.length)return w[0].node}}},xs=function(e){var t=bs(e);return function(){return ys(t)}},ws=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=oe(t);if(r.every(function(o){return!ie(o,e)}))return console.error("Active element is not contained in the scope"),{};var a=n?_n(r,new Map):yt(r,new Map),i=a.findIndex(function(o){var s=o.node;return s===e});if(i!==-1)return{prev:a[i-1],next:a[i+1],first:a[0],last:a[a.length-1]}},ks=function(e,t){var n=t?_n(oe(e),new Map):yt(oe(e),new Map);return{first:n[0],last:n[n.length-1]}},Ss=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},Ia=function(e,t,n){t===void 0&&(t={});var r=Ss(t),a=ws(e,r.scope,r.onlyTabbable);if(a){var i=n(a,r.cycle);i&&jn(i.node,r.focusOptions)}},Cs=function(e,t){t===void 0&&(t={}),Ia(e,t,function(n,r){var a=n.next,i=n.first;return a||r&&i})},As=function(e,t){t===void 0&&(t={}),Ia(e,t,function(n,r){var a=n.prev,i=n.last;return a||r&&i})},Na=function(e,t,n){var r,a=ks(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),i=a[n];i&&jn(i.node,t.focusOptions)},Es=function(e,t){t===void 0&&(t={}),Na(e,t,"first")},Os=function(e,t){t===void 0&&(t={}),Na(e,t,"last")};function Fn(e){setTimeout(e,1)}var Ps=function(t){return t&&"current"in t?t.current:t},Is=function(){return document&&document.activeElement===document.body},Ns=function(){return Is()||us()},ye=null,pe=null,xe=null,De=!1,_s=function(){return!0},Ts=function(t){return(ye.whiteList||_s)(t)},Ms=function(t,n){xe={observerNode:t,portaledElement:n}},js=function(t){return xe&&xe.portaledElement===t};function dr(e,t,n,r){var a=null,i=e;do{var o=r[i];if(o.guard)o.node.dataset.focusAutoGuard&&(a=o);else if(o.lockItem){if(i!==e)return;a=null}else break}while((i+=n)!==t);a&&(a.node.tabIndex=0)}var Fs=function(t){return t?!!De:De==="meanwhile"},Rs=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Ls=function(t,n){return n.some(function(r){return Rs(t,r,r)})},xt=function(){var t=!1;if(ye){var n=ye,r=n.observed,a=n.persistentFocus,i=n.autoFocus,o=n.shards,s=n.crossFrame,c=n.focusOptions,l=r||xe&&xe.portaledElement,u=document&&document.activeElement;if(l){var f=[l].concat(o.map(Ps).filter(Boolean));if((!u||Ts(u))&&(a||Fs(s)||!Ns()||!pe&&i)&&(l&&!(Ea(f)||u&&Ls(u,f)||js(u))&&(document&&!pe&&u&&!i?(u.blur&&u.blur(),document.body.focus()):(t=Pa(f,pe,{focusOptions:c}),xe={})),De=!1,pe=document&&document.activeElement),document&&u!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var d=document&&document.activeElement,h=gs(f),g=h.map(function(v){var b=v.node;return b}).indexOf(d);g>-1&&(h.filter(function(v){var b=v.guard,w=v.node;return b&&w.dataset.focusAutoGuard}).forEach(function(v){var b=v.node;return b.removeAttribute("tabIndex")}),dr(g,h.length,1,h),dr(g,-1,-1,h))}}}return t},_a=function(t){xt()&&t&&(t.stopPropagation(),t.preventDefault())},Rn=function(){return Fn(xt)},Ds=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Ms(r,n)},zs=function(){return null},Ta=function(){De="just",Fn(function(){De="meanwhile"})},Ws=function(){document.addEventListener("focusin",_a),document.addEventListener("focusout",Rn),window.addEventListener("blur",Ta)},Bs=function(){document.removeEventListener("focusin",_a),document.removeEventListener("focusout",Rn),window.removeEventListener("blur",Ta)};function $s(e){return e.filter(function(t){var n=t.disabled;return!n})}var Ma={moveFocusInside:Pa,focusInside:Ea,focusNextElement:Cs,focusPrevElement:As,focusFirstElement:Es,focusLastElement:Os,captureFocusRestore:xs};function Hs(e){var t=e.slice(-1)[0];t&&!ye&&Ws();var n=ye,r=n&&t&&t.id===n.id;ye=t,n&&!r&&(n.onDeactivation(),e.filter(function(a){var i=a.id;return i===n.id}).length||n.returnFocus(!t)),t?(pe=null,(!r||n.observed!==t.observed)&&t.onActivation(Ma),xt(),Fn(xt)):(Bs(),pe=null)}va.assignSyncMedium(Ds);pa.assignMedium(Rn);Ro.assignMedium(function(e){return e(Ma)});const Us=Uo($s,Hs)(zs);var on=m.forwardRef(function(t,n){return m.createElement(En,Vt({sideCar:Us,ref:n},t))}),ja=En.propTypes||{};ja.sideCar;So(ja,["sideCar"]);on.propTypes={};function Ys(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function Gs(e){var t;if(!Ys(e))return!1;const n=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof n.HTMLElement}var Vs=e=>e.hasAttribute("tabindex");function Xs(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function Fa(e){return e.parentElement&&Fa(e.parentElement)?!0:e.hidden}function qs(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function Ks(e){if(!Gs(e)||Fa(e)||Xs(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in r?r[t]():qs(e)?!0:Vs(e)}var Zs=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],Qs=Zs.join(),Js=e=>e.offsetWidth>0&&e.offsetHeight>0;function ec(e){const t=Array.from(e.querySelectorAll(Qs));return t.unshift(e),t.filter(n=>Ks(n)&&Js(n))}var mr,tc=(mr=on.default)!=null?mr:on,Ra=e=>{const{initialFocusRef:t,finalFocusRef:n,contentRef:r,restoreFocus:a,children:i,isDisabled:o,autoFocus:s,persistentFocus:c,lockFocusAcrossFrames:l}=e,u=m.useCallback(()=>{t!=null&&t.current?t.current.focus():r!=null&&r.current&&ec(r.current).length===0&&requestAnimationFrame(()=>{var g;(g=r.current)==null||g.focus()})},[t,r]),f=m.useCallback(()=>{var h;(h=n==null?void 0:n.current)==null||h.focus()},[n]),d=a&&!n;return p.jsx(tc,{crossFrame:l,persistentFocus:c,autoFocus:s,disabled:o,onActivation:u,onDeactivation:f,returnFocus:d,children:i})};Ra.displayName="FocusLock";var nc=uo?m.useLayoutEffect:m.useEffect;function vr(e,t=[]){const n=m.useRef(e);return nc(()=>{n.current=e}),m.useCallback((...r)=>{var a;return(a=n.current)==null?void 0:a.call(n,...r)},t)}function rc(e,t){const n=m.useId();return m.useMemo(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}function ac(e,t){const n=e!==void 0;return[n,n&&typeof e<"u"?e:t]}function ic(e={}){const{onClose:t,onOpen:n,isOpen:r,id:a}=e,i=vr(n),o=vr(t),[s,c]=m.useState(e.defaultIsOpen||!1),[l,u]=ac(r,s),f=rc(a,"disclosure"),d=m.useCallback(()=>{l||c(!1),o==null||o()},[l,o]),h=m.useCallback(()=>{l||c(!0),i==null||i()},[l,i]),g=m.useCallback(()=>{(u?d:h)()},[u,h,d]);return{isOpen:!!u,onOpen:h,onClose:d,onToggle:g,isControlled:l,getButtonProps:(v={})=>({...v,"aria-expanded":u,"aria-controls":f,onClick:to(v.onClick,g)}),getDisclosureProps:(v={})=>({...v,hidden:!u,id:f})}}var La=M(function(t,n){const r=Ve("Link",t),{className:a,isExternal:i,...o}=Xe(t);return p.jsx(T.a,{target:i?"_blank":void 0,rel:i?"noopener":void 0,ref:n,className:R("chakra-link",a),...o,__css:r})});La.displayName="Link";var Ln=M(function(t,n){const{templateAreas:r,gap:a,rowGap:i,columnGap:o,column:s,row:c,autoFlow:l,autoRows:u,templateRows:f,autoColumns:d,templateColumns:h,...g}=t,v={display:"grid",gridTemplateAreas:r,gridGap:a,gridRowGap:i,gridColumnGap:o,gridAutoColumns:d,gridColumn:s,gridRow:c,gridAutoFlow:l,gridAutoRows:u,gridTemplateRows:f,gridTemplateColumns:h};return p.jsx(T.div,{ref:n,__css:v,...g})});Ln.displayName="Grid";function Da(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):no(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}var ze=M(function(t,n){const r=Ve("Text",t),{className:a,align:i,decoration:o,casing:s,...c}=Xe(t),l=ea({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return p.jsx(T.p,{ref:n,className:R("chakra-text",t.className),...l,...c,__css:r})});ze.displayName="Text";var za=e=>p.jsx(T.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});za.displayName="StackItem";function oc(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Da(n,a=>r[a])}}var Wa=M((e,t)=>{const{isInline:n,direction:r,align:a,justify:i,spacing:o="0.5rem",wrap:s,children:c,divider:l,className:u,shouldWrapChildren:f,...d}=e,h=n?"row":r??"column",g=m.useMemo(()=>oc({spacing:o,direction:h}),[o,h]),v=!!l,b=!f&&!v,w=m.useMemo(()=>{const S=xo(c);return b?S:S.map((A,C)=>{const N=typeof A.key<"u"?A.key:C,j=C+1===S.length,O=f?p.jsx(za,{children:A},N):A;if(!v)return O;const Y=m.cloneElement(l,{__css:g}),le=j?null:Y;return p.jsxs(m.Fragment,{children:[O,le]},N)})},[l,g,v,b,f,c]),k=R("chakra-stack",u);return p.jsx(T.div,{ref:t,display:"flex",alignItems:a,justifyContent:i,flexDirection:h,flexWrap:s,gap:v?void 0:o,className:k,...d,children:w})});Wa.displayName="Stack";var Ba=M((e,t)=>p.jsx(Wa,{align:"center",...e,direction:"column",ref:t}));Ba.displayName="VStack";function pr(e){return Da(e,t=>t==="auto"?"auto":`span ${t}/span ${t}`)}var we=M(function(t,n){const{area:r,colSpan:a,colStart:i,colEnd:o,rowEnd:s,rowSpan:c,rowStart:l,...u}=t,f=ea({gridArea:r,gridColumn:pr(a),gridRow:pr(c),gridColumnStart:i,gridColumnEnd:o,gridRowStart:l,gridRowEnd:s});return p.jsx(T.div,{ref:n,__css:f,...u})});we.displayName="GridItem";var W=T("div");W.displayName="Box";var $a=M(function(t,n){const{size:r,centerContent:a=!0,...i}=t,o=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return p.jsx(W,{ref:n,boxSize:r,__css:{...o,flexShrink:0,flexGrow:0},...i})});$a.displayName="Square";var sc=M(function(t,n){const{size:r,...a}=t;return p.jsx($a,{size:r,ref:n,borderRadius:"9999px",...a})});sc.displayName="Circle";var Ha=M(function(t,n){const{className:r,centerContent:a,...i}=Xe(t),o=Ve("Container",t);return p.jsx(T.div,{ref:n,className:R("chakra-container",r),...i,__css:{...o,...a&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});Ha.displayName="Container";var Ua=M(function(t,n){const{borderLeftWidth:r,borderBottomWidth:a,borderTopWidth:i,borderRightWidth:o,borderWidth:s,borderStyle:c,borderColor:l,...u}=Ve("Divider",t),{className:f,orientation:d="horizontal",__css:h,...g}=Xe(t),v={vertical:{borderLeftWidth:r||o||s||"1px",height:"100%"},horizontal:{borderBottomWidth:a||i||s||"1px",width:"100%"}};return p.jsx(T.hr,{ref:n,"aria-orientation":d,...g,__css:{...u,border:"0",borderColor:l,borderStyle:c,...v[d],...h},className:R("chakra-divider",f)})});Ua.displayName="Divider";var We=M(function(t,n){const{direction:r,align:a,justify:i,wrap:o,basis:s,grow:c,shrink:l,...u}=t,f={display:"flex",flexDirection:r,alignItems:a,justifyContent:i,flexWrap:o,flexBasis:s,flexGrow:c,flexShrink:l};return p.jsx(T.div,{ref:n,__css:f,...u})});We.displayName="Flex";var cc=Object.defineProperty,lc=(e,t,n)=>t in e?cc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,uc=(e,t,n)=>(lc(e,t+"",n),n),fc=class{constructor(){uc(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},sn=new fc;function Ya(e,t){const[n,r]=m.useState(0);return m.useEffect(()=>{const a=e.current;if(a){if(t){const i=sn.add(a);r(i)}return()=>{sn.remove(a),r(0)}}},[t,e]),n}var dc=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},de=new WeakMap,Je=new WeakMap,et={},zt=0,Ga=function(e){return e&&(e.host||Ga(e.parentNode))},mc=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ga(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},vc=function(e,t,n,r){var a=mc(t,Array.isArray(e)?e:[e]);et[n]||(et[n]=new WeakMap);var i=et[n],o=[],s=new Set,c=new Set(a),l=function(f){!f||s.has(f)||(s.add(f),l(f.parentNode))};a.forEach(l);var u=function(f){!f||c.has(f)||Array.prototype.forEach.call(f.children,function(d){if(s.has(d))u(d);else try{var h=d.getAttribute(r),g=h!==null&&h!=="false",v=(de.get(d)||0)+1,b=(i.get(d)||0)+1;de.set(d,v),i.set(d,b),o.push(d),v===1&&g&&Je.set(d,!0),b===1&&d.setAttribute(n,"true"),g||d.setAttribute(r,"true")}catch(w){console.error("aria-hidden: cannot operate on ",d,w)}})};return u(t),s.clear(),zt++,function(){o.forEach(function(f){var d=de.get(f)-1,h=i.get(f)-1;de.set(f,d),i.set(f,h),d||(Je.has(f)||f.removeAttribute(r),Je.delete(f)),h||f.removeAttribute(n)}),zt--,zt||(de=new WeakMap,de=new WeakMap,Je=new WeakMap,et={})}},pc=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=dc(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),vc(r,a,n,"aria-hidden")):function(){return null}};function hc(e){const{isOpen:t,onClose:n,id:r,closeOnOverlayClick:a=!0,closeOnEsc:i=!0,useInert:o=!0,onOverlayClick:s,onEsc:c}=e,l=m.useRef(null),u=m.useRef(null),[f,d,h]=bc(r,"chakra-modal","chakra-modal--header","chakra-modal--body");gc(l,t&&o);const g=Ya(l,t),v=m.useRef(null),b=m.useCallback(O=>{v.current=O.target},[]),w=m.useCallback(O=>{O.key==="Escape"&&(O.stopPropagation(),i&&(n==null||n()),c==null||c())},[i,n,c]),[k,S]=m.useState(!1),[A,C]=m.useState(!1),N=m.useCallback((O={},Y=null)=>({role:"dialog",...O,ref:Xt(Y,l),id:f,tabIndex:-1,"aria-modal":!0,"aria-labelledby":k?d:void 0,"aria-describedby":A?h:void 0,onClick:Te(O.onClick,le=>le.stopPropagation())}),[h,A,f,d,k]),j=m.useCallback(O=>{O.stopPropagation(),v.current===O.target&&sn.isTopModal(l.current)&&(a&&(n==null||n()),s==null||s())},[n,a,s]),L=m.useCallback((O={},Y=null)=>({...O,ref:Xt(Y,u),onClick:Te(O.onClick,j),onKeyDown:Te(O.onKeyDown,w),onMouseDown:Te(O.onMouseDown,b)}),[w,b,j]);return{isOpen:t,onClose:n,headerId:d,bodyId:h,setBodyMounted:C,setHeaderMounted:S,dialogRef:l,overlayRef:u,getDialogProps:N,getDialogContainerProps:L,index:g}}function gc(e,t){const n=e.current;m.useEffect(()=>{if(!(!e.current||!t))return pc(e.current)},[t,e,n])}function bc(e,...t){const n=m.useId(),r=e||n;return m.useMemo(()=>t.map(a=>`${a}-${r}`),[r,t])}var[yc,Oe]=At({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[xc,Pe]=At({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Va=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:n,children:r,autoFocus:a,trapFocus:i,initialFocusRef:o,finalFocusRef:s,returnFocusOnClose:c,blockScrollOnMount:l,allowPinchZoom:u,preserveScrollBarGap:f,motionPreset:d,lockFocusAcrossFrames:h,onCloseComplete:g}=t,v=ro("Modal",t),w={...hc(t),autoFocus:a,trapFocus:i,initialFocusRef:o,finalFocusRef:s,returnFocusOnClose:c,blockScrollOnMount:l,allowPinchZoom:u,preserveScrollBarGap:f,motionPreset:d,lockFocusAcrossFrames:h};return p.jsx(xc,{value:w,children:p.jsx(yc,{value:v,children:p.jsx(Cn,{onExitComplete:g,children:w.isOpen&&p.jsx(ao,{...n,children:r})})})})};Va.displayName="Modal";var mt="right-scroll-bar-position",vt="width-before-scroll-bar",wc="with-scroll-bars-hidden",kc="--removed-body-scroll-bar-size",Xa=da(),Wt=function(){},Et=m.forwardRef(function(e,t){var n=m.useRef(null),r=m.useState({onScrollCapture:Wt,onWheelCapture:Wt,onTouchMoveCapture:Wt}),a=r[0],i=r[1],o=e.forwardProps,s=e.children,c=e.className,l=e.removeScrollBar,u=e.enabled,f=e.shards,d=e.sideCar,h=e.noIsolation,g=e.inert,v=e.allowPinchZoom,b=e.as,w=b===void 0?"div":b,k=e.gapMode,S=la(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),A=d,C=ca([n,t]),N=$($({},S),a);return m.createElement(m.Fragment,null,u&&m.createElement(A,{sideCar:Xa,removeScrollBar:l,shards:f,noIsolation:h,inert:g,setCallbacks:i,allowPinchZoom:!!v,lockRef:n,gapMode:k}),o?m.cloneElement(m.Children.only(s),$($({},N),{ref:C})):m.createElement(w,$({},N,{className:c,ref:C}),s))});Et.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Et.classNames={fullWidth:vt,zeroRight:mt};var Sc=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Cc(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Sc();return t&&e.setAttribute("nonce",t),e}function Ac(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Ec(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Oc=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Cc())&&(Ac(t,n),Ec(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Pc=function(){var e=Oc();return function(t,n){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},qa=function(){var e=Pc(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},Ic={left:0,top:0,right:0,gap:0},Bt=function(e){return parseInt(e||"",10)||0},Nc=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[Bt(n),Bt(r),Bt(a)]},_c=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Ic;var t=Nc(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Tc=qa(),ke="data-scroll-locked",Mc=function(e,t,n,r){var a=e.left,i=e.top,o=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(wc,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(ke,`] {
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
  
  .`).concat(mt,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(vt,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(mt," .").concat(mt,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(vt," .").concat(vt,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(ke,`] {
    `).concat(kc,": ").concat(s,`px;
  }
`)},hr=function(){var e=parseInt(document.body.getAttribute(ke)||"0",10);return isFinite(e)?e:0},jc=function(){m.useEffect(function(){return document.body.setAttribute(ke,(hr()+1).toString()),function(){var e=hr()-1;e<=0?document.body.removeAttribute(ke):document.body.setAttribute(ke,e.toString())}},[])},Fc=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;jc();var i=m.useMemo(function(){return _c(a)},[a]);return m.createElement(Tc,{styles:Mc(i,!t,a,n?"":"!important")})},cn=!1;if(typeof window<"u")try{var tt=Object.defineProperty({},"passive",{get:function(){return cn=!0,!0}});window.addEventListener("test",tt,tt),window.removeEventListener("test",tt,tt)}catch{cn=!1}var me=cn?{passive:!1}:!1,Rc=function(e){return e.tagName==="TEXTAREA"},Ka=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Rc(e)&&n[t]==="visible")},Lc=function(e){return Ka(e,"overflowY")},Dc=function(e){return Ka(e,"overflowX")},gr=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=Za(e,r);if(a){var i=Qa(e,r),o=i[1],s=i[2];if(o>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},zc=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Wc=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Za=function(e,t){return e==="v"?Lc(t):Dc(t)},Qa=function(e,t){return e==="v"?zc(t):Wc(t)},Bc=function(e,t){return e==="h"&&t==="rtl"?-1:1},$c=function(e,t,n,r,a){var i=Bc(e,window.getComputedStyle(t).direction),o=i*r,s=n.target,c=t.contains(s),l=!1,u=o>0,f=0,d=0;do{var h=Qa(e,s),g=h[0],v=h[1],b=h[2],w=v-b-i*g;(g||w)&&Za(e,s)&&(f+=w,d+=g),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!c&&s!==document.body||c&&(t.contains(s)||t===s));return(u&&(Math.abs(f)<1||!a)||!u&&(Math.abs(d)<1||!a))&&(l=!0),l},nt=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},br=function(e){return[e.deltaX,e.deltaY]},yr=function(e){return e&&"current"in e?e.current:e},Hc=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Uc=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Yc=0,ve=[];function Gc(e){var t=m.useRef([]),n=m.useRef([0,0]),r=m.useRef(),a=m.useState(Yc++)[0],i=m.useState(qa)[0],o=m.useRef(e);m.useEffect(function(){o.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var v=jo([e.lockRef.current],(e.shards||[]).map(yr),!0).filter(Boolean);return v.forEach(function(b){return b.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),v.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var s=m.useCallback(function(v,b){if("touches"in v&&v.touches.length===2)return!o.current.allowPinchZoom;var w=nt(v),k=n.current,S="deltaX"in v?v.deltaX:k[0]-w[0],A="deltaY"in v?v.deltaY:k[1]-w[1],C,N=v.target,j=Math.abs(S)>Math.abs(A)?"h":"v";if("touches"in v&&j==="h"&&N.type==="range")return!1;var L=gr(j,N);if(!L)return!0;if(L?C=j:(C=j==="v"?"h":"v",L=gr(j,N)),!L)return!1;if(!r.current&&"changedTouches"in v&&(S||A)&&(r.current=C),!C)return!0;var O=r.current||C;return $c(O,b,v,O==="h"?S:A,!0)},[]),c=m.useCallback(function(v){var b=v;if(!(!ve.length||ve[ve.length-1]!==i)){var w="deltaY"in b?br(b):nt(b),k=t.current.filter(function(C){return C.name===b.type&&(C.target===b.target||b.target===C.shadowParent)&&Hc(C.delta,w)})[0];if(k&&k.should){b.cancelable&&b.preventDefault();return}if(!k){var S=(o.current.shards||[]).map(yr).filter(Boolean).filter(function(C){return C.contains(b.target)}),A=S.length>0?s(b,S[0]):!o.current.noIsolation;A&&b.cancelable&&b.preventDefault()}}},[]),l=m.useCallback(function(v,b,w,k){var S={name:v,delta:b,target:w,should:k,shadowParent:Vc(w)};t.current.push(S),setTimeout(function(){t.current=t.current.filter(function(A){return A!==S})},1)},[]),u=m.useCallback(function(v){n.current=nt(v),r.current=void 0},[]),f=m.useCallback(function(v){l(v.type,br(v),v.target,s(v,e.lockRef.current))},[]),d=m.useCallback(function(v){l(v.type,nt(v),v.target,s(v,e.lockRef.current))},[]);m.useEffect(function(){return ve.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:d}),document.addEventListener("wheel",c,me),document.addEventListener("touchmove",c,me),document.addEventListener("touchstart",u,me),function(){ve=ve.filter(function(v){return v!==i}),document.removeEventListener("wheel",c,me),document.removeEventListener("touchmove",c,me),document.removeEventListener("touchstart",u,me)}},[]);var h=e.removeScrollBar,g=e.inert;return m.createElement(m.Fragment,null,g?m.createElement(i,{styles:Uc(a)}):null,h?m.createElement(Fc,{gapMode:e.gapMode}):null)}function Vc(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Xc=Fo(Xa,Gc);var Ja=m.forwardRef(function(e,t){return m.createElement(Et,$({},e,{ref:t,sideCar:Xc}))});Ja.classNames=Et.classNames;function qc(e){const{autoFocus:t,trapFocus:n,dialogRef:r,initialFocusRef:a,blockScrollOnMount:i,allowPinchZoom:o,finalFocusRef:s,returnFocusOnClose:c,preserveScrollBarGap:l,lockFocusAcrossFrames:u,isOpen:f}=Pe(),[d,h]=io();m.useEffect(()=>{!d&&h&&setTimeout(h)},[d,h]);const g=Ya(r,f);return p.jsx(Ra,{autoFocus:t,isDisabled:!n,initialFocusRef:a,finalFocusRef:s,restoreFocus:c,contentRef:r,lockFocusAcrossFrames:u,children:p.jsx(Ja,{removeScrollBar:!l,allowPinchZoom:o,enabled:g===1&&i,forwardProps:!0,children:e.children})})}var[Kc,Zc]=At(),Qc={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function Jc(e,t){var n,r;if(e)return(r=(n=Qc[e])==null?void 0:n[t])!=null?r:e}function el(e){var t;const{isOpen:n,onClose:r,placement:a="right",children:i,...o}=e,s=oo(),c=(t=s.components)==null?void 0:t.Drawer,l=Jc(a,s.direction);return p.jsx(Kc,{value:{placement:l},children:p.jsx(Va,{isOpen:n,onClose:r,styleConfig:c,...o,children:i})})}var tl=T(na),ei=M((e,t)=>{const{className:n,children:r,motionProps:a,containerProps:i,...o}=e,{getDialogProps:s,getDialogContainerProps:c,isOpen:l}=Pe(),u=s(o,t),f=c(i),d=R("chakra-modal__content",n),h=Oe(),g={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...h.dialog},v={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...h.dialogContainer},{placement:b}=Zc();return p.jsx(qc,{children:p.jsx(T.div,{...f,className:"chakra-modal__content-container",__css:v,children:p.jsx(tl,{motionProps:a,direction:b,in:l,className:d,...u,__css:g,children:r})})})});ei.displayName="DrawerContent";var ti=M((e,t)=>{const{className:n,...r}=e,a=R("chakra-modal__footer",n),o={display:"flex",alignItems:"center",justifyContent:"flex-end",...Oe().footer};return p.jsx(T.footer,{ref:t,...r,__css:o,className:a})});ti.displayName="ModalFooter";var ni=M((e,t)=>{const{className:n,...r}=e,{headerId:a,setHeaderMounted:i}=Pe();m.useEffect(()=>(i(!0),()=>i(!1)),[i]);const o=R("chakra-modal__header",n),c={flex:0,...Oe().header};return p.jsx(T.header,{ref:t,className:o,id:a,...r,__css:c})});ni.displayName="ModalHeader";var nl=T(Ge.div),ri=M((e,t)=>{const{className:n,transition:r,motionProps:a,...i}=e,o=R("chakra-modal__overlay",n),c={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...Oe().overlay},{motionPreset:l}=Pe(),f=a||(l==="none"?{}:ta);return p.jsx(nl,{...f,__css:c,ref:t,className:o,...i})});ri.displayName="ModalOverlay";var ai=M((e,t)=>{const{className:n,...r}=e,{bodyId:a,setBodyMounted:i}=Pe();m.useEffect(()=>(i(!0),()=>i(!1)),[i]);const o=R("chakra-modal__body",n),s=Oe();return p.jsx(T.div,{ref:t,className:o,id:a,...r,__css:s.body})});ai.displayName="ModalBody";var ii=M((e,t)=>{const{onClick:n,className:r,...a}=e,{onClose:i}=Pe(),o=R("chakra-modal__close-btn",r),s=Oe();return p.jsx(so,{ref:t,__css:s.closeButton,className:o,onClick:Te(n,c=>{c.stopPropagation(),i()}),...a})});ii.displayName="ModalCloseButton";const xr="/assets/logo-dark-CgFk4jlR.svg",wr="/assets/logo-light-DyBc02vJ.svg";function kr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kr(Object(n),!0).forEach(function(r){F(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wt(e){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wt(e)}function rl(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function al(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function il(e,t,n){return t&&al(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dn(e,t){return sl(e)||ll(e,t)||oi(e,t)||fl()}function qe(e){return ol(e)||cl(e)||oi(e)||ul()}function ol(e){if(Array.isArray(e))return ln(e)}function sl(e){if(Array.isArray(e))return e}function cl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ll(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(c){i=!0,s=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function oi(e,t){if(e){if(typeof e=="string")return ln(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ln(e,t)}}function ln(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ul(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sr=function(){},zn={},si={},ci=null,li={mark:Sr,measure:Sr};try{typeof window<"u"&&(zn=window),typeof document<"u"&&(si=document),typeof MutationObserver<"u"&&(ci=MutationObserver),typeof performance<"u"&&(li=performance)}catch{}var dl=zn.navigator||{},Cr=dl.userAgent,Ar=Cr===void 0?"":Cr,Q=zn,I=si,Er=ci,rt=li;Q.document;var K=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",ui=~Ar.indexOf("MSIE")||~Ar.indexOf("Trident/"),at,it,ot,st,ct,V="___FONT_AWESOME___",un=16,fi="fa",di="svg-inline--fa",se="data-fa-i2svg",fn="data-fa-pseudo-element",ml="data-fa-pseudo-element-pending",Wn="data-prefix",Bn="data-icon",Or="fontawesome-i2svg",vl="async",pl=["HTML","HEAD","STYLE","SCRIPT"],mi=function(){try{return!0}catch{return!1}}(),P="classic",_="sharp",$n=[P,_];function Ke(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[P]}})}var Be=Ke((at={},F(at,P,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),F(at,_,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),at)),$e=Ke((it={},F(it,P,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),F(it,_,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),it)),He=Ke((ot={},F(ot,P,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),F(ot,_,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ot)),hl=Ke((st={},F(st,P,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),F(st,_,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),st)),gl=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,vi="fa-layers-text",bl=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,yl=Ke((ct={},F(ct,P,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),F(ct,_,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ct)),pi=[1,2,3,4,5,6,7,8,9,10],xl=pi.concat([11,12,13,14,15,16,17,18,19,20]),wl=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],re={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ue=new Set;Object.keys($e[P]).map(Ue.add.bind(Ue));Object.keys($e[_]).map(Ue.add.bind(Ue));var kl=[].concat($n,qe(Ue),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",re.GROUP,re.SWAP_OPACITY,re.PRIMARY,re.SECONDARY]).concat(pi.map(function(e){return"".concat(e,"x")})).concat(xl.map(function(e){return"w-".concat(e)})),je=Q.FontAwesomeConfig||{};function Sl(e){var t=I.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Cl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(I&&typeof I.querySelector=="function"){var Al=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Al.forEach(function(e){var t=Dn(e,2),n=t[0],r=t[1],a=Cl(Sl(n));a!=null&&(je[r]=a)})}var hi={styleDefault:"solid",familyDefault:"classic",cssPrefix:fi,replacementClass:di,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};je.familyPrefix&&(je.cssPrefix=je.familyPrefix);var Ee=y(y({},hi),je);Ee.autoReplaceSvg||(Ee.observeMutations=!1);var x={};Object.keys(hi).forEach(function(e){Object.defineProperty(x,e,{enumerable:!0,set:function(n){Ee[e]=n,Fe.forEach(function(r){return r(x)})},get:function(){return Ee[e]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(t){Ee.cssPrefix=t,Fe.forEach(function(n){return n(x)})},get:function(){return Ee.cssPrefix}});Q.FontAwesomeConfig=x;var Fe=[];function El(e){return Fe.push(e),function(){Fe.splice(Fe.indexOf(e),1)}}var Z=un,H={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ol(e){if(!(!e||!K)){var t=I.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=I.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return I.head.insertBefore(t,r),e}}var Pl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ye(){for(var e=12,t="";e-- >0;)t+=Pl[Math.random()*62|0];return t}function Ie(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Hn(e){return e.classList?Ie(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function gi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Il(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(gi(e[n]),'" ')},"").trim()}function Ot(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Un(e){return e.size!==H.size||e.x!==H.x||e.y!==H.y||e.rotate!==H.rotate||e.flipX||e.flipY}function Nl(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function _l(e){var t=e.transform,n=e.width,r=n===void 0?un:n,a=e.height,i=a===void 0?un:a,o=e.startCentered,s=o===void 0?!1:o,c="";return s&&ui?c+="translate(".concat(t.x/Z-r/2,"em, ").concat(t.y/Z-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/Z,"em), calc(-50% + ").concat(t.y/Z,"em)) "):c+="translate(".concat(t.x/Z,"em, ").concat(t.y/Z,"em) "),c+="scale(".concat(t.size/Z*(t.flipX?-1:1),", ").concat(t.size/Z*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Tl=`:root, :host {
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
}`;function bi(){var e=fi,t=di,n=x.cssPrefix,r=x.replacementClass,a=Tl;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Pr=!1;function $t(){x.autoAddCss&&!Pr&&(Ol(bi()),Pr=!0)}var Ml={mixout:function(){return{dom:{css:bi,insertCss:$t}}},hooks:function(){return{beforeDOMElementCreation:function(){$t()},beforeI2svg:function(){$t()}}}},X=Q||{};X[V]||(X[V]={});X[V].styles||(X[V].styles={});X[V].hooks||(X[V].hooks={});X[V].shims||(X[V].shims=[]);var z=X[V],yi=[],jl=function e(){I.removeEventListener("DOMContentLoaded",e),kt=1,yi.map(function(t){return t()})},kt=!1;K&&(kt=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),kt||I.addEventListener("DOMContentLoaded",jl));function Fl(e){K&&(kt?setTimeout(e,0):yi.push(e))}function Ze(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?gi(e):"<".concat(t," ").concat(Il(r),">").concat(i.map(Ze).join(""),"</").concat(t,">")}function Ir(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ht=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,c,l,u;for(r===void 0?(c=1,u=t[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=s(u,t[l],l,t);return u};function Rl(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function dn(e){var t=Rl(e);return t.length===1?t[0].toString(16):null}function Ll(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Nr(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function mn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Nr(t);typeof z.hooks.addPack=="function"&&!a?z.hooks.addPack(e,Nr(t)):z.styles[e]=y(y({},z.styles[e]||{}),i),e==="fas"&&mn("fa",t)}var lt,ut,ft,he=z.styles,Dl=z.shims,zl=(lt={},F(lt,P,Object.values(He[P])),F(lt,_,Object.values(He[_])),lt),Yn=null,xi={},wi={},ki={},Si={},Ci={},Wl=(ut={},F(ut,P,Object.keys(Be[P])),F(ut,_,Object.keys(Be[_])),ut);function Bl(e){return~kl.indexOf(e)}function $l(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Bl(a)?a:null}var Ai=function(){var t=function(i){return Ht(he,function(o,s,c){return o[c]=Ht(s,i,{}),o},{})};xi=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){a[c.toString(16)]=o})}return a}),wi=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){a[c]=o})}return a}),Ci=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(c){a[c]=o}),a});var n="far"in he||x.autoFetchSvg,r=Ht(Dl,function(a,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});ki=r.names,Si=r.unicodes,Yn=Pt(x.styleDefault,{family:x.familyDefault})};El(function(e){Yn=Pt(e.styleDefault,{family:x.familyDefault})});Ai();function Gn(e,t){return(xi[e]||{})[t]}function Hl(e,t){return(wi[e]||{})[t]}function ae(e,t){return(Ci[e]||{})[t]}function Ei(e){return ki[e]||{prefix:null,iconName:null}}function Ul(e){var t=Si[e],n=Gn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function J(){return Yn}var Vn=function(){return{prefix:null,iconName:null,rest:[]}};function Pt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?P:n,a=Be[r][e],i=$e[r][e]||$e[r][a],o=e in z.styles?e:null;return i||o||null}var _r=(ft={},F(ft,P,Object.keys(He[P])),F(ft,_,Object.keys(He[_])),ft);function It(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},F(t,P,"".concat(x.cssPrefix,"-").concat(P)),F(t,_,"".concat(x.cssPrefix,"-").concat(_)),t),o=null,s=P;(e.includes(i[P])||e.some(function(l){return _r[P].includes(l)}))&&(s=P),(e.includes(i[_])||e.some(function(l){return _r[_].includes(l)}))&&(s=_);var c=e.reduce(function(l,u){var f=$l(x.cssPrefix,u);if(he[u]?(u=zl[s].includes(u)?hl[s][u]:u,o=u,l.prefix=u):Wl[s].indexOf(u)>-1?(o=u,l.prefix=Pt(u,{family:s})):f?l.iconName=f:u!==x.replacementClass&&u!==i[P]&&u!==i[_]&&l.rest.push(u),!a&&l.prefix&&l.iconName){var d=o==="fa"?Ei(l.iconName):{},h=ae(l.prefix,l.iconName);d.prefix&&(o=null),l.iconName=d.iconName||h||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!he.far&&he.fas&&!x.autoFetchSvg&&(l.prefix="fas")}return l},Vn());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===_&&(he.fass||x.autoFetchSvg)&&(c.prefix="fass",c.iconName=ae(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=J()||"fas"),c}var Yl=function(){function e(){rl(this,e),this.definitions={}}return il(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=y(y({},n.definitions[s]||{}),o[s]),mn(s,o[s]);var c=He[P][s];c&&mn(c,o[s]),Ai()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=l)}),n[s][c]=l}),n}}]),e}(),Tr=[],ge={},Se={},Gl=Object.keys(Se);function Vl(e,t){var n=t.mixoutsTo;return Tr=e,ge={},Object.keys(Se).forEach(function(r){Gl.indexOf(r)===-1&&delete Se[r]}),Tr.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),wt(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ge[o]||(ge[o]=[]),ge[o].push(i[o])})}r.provides&&r.provides(Se)}),n}function vn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ge[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ge[e]||[];a.forEach(function(i){i.apply(null,n)})}function q(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Se[e]?Se[e].apply(null,t):void 0}function pn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||J();if(t)return t=ae(n,t)||t,Ir(Oi.definitions,n,t)||Ir(z.styles,n,t)}var Oi=new Yl,Xl=function(){x.autoReplaceSvg=!1,x.observeMutations=!1,ce("noAuto")},ql={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K?(ce("beforeI2svg",t),q("pseudoElements2svg",t),q("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,Fl(function(){Zl({autoReplaceSvgRoot:n}),ce("watch",t)})}},Kl={icon:function(t){if(t===null)return null;if(wt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ae(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Pt(t[0]);return{prefix:r,iconName:ae(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(x.cssPrefix,"-"))>-1||t.match(gl))){var a=It(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||J(),iconName:ae(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=J();return{prefix:i,iconName:ae(i,t)||t}}}},D={noAuto:Xl,config:x,dom:ql,parse:Kl,library:Oi,findIconDefinition:pn,toHtml:Ze},Zl=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?I:n;(Object.keys(z.styles).length>0||x.autoFetchSvg)&&K&&x.autoReplaceSvg&&D.dom.i2svg({node:r})};function Nt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ze(r)})}}),Object.defineProperty(e,"node",{get:function(){if(K){var r=I.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ql(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Un(o)&&n.found&&!r.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};a.style=Ot(y(y({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Jl(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(x.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:y(y({},a),{},{id:o}),children:r}]}]}function Xn(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,d=e.watchable,h=d===void 0?!1:d,g=r.found?r:n,v=g.width,b=g.height,w=a==="fak",k=[x.replacementClass,i?"".concat(x.cssPrefix,"-").concat(i):""].filter(function(O){return f.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(f.classes).join(" "),S={children:[],attributes:y(y({},f.attributes),{},{"data-prefix":a,"data-icon":i,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(b)})},A=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/b*16*.0625,"em")}:{};h&&(S.attributes[se]=""),c&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||Ye())},children:[c]}),delete S.attributes.title);var C=y(y({},S),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:y(y({},A),f.styles)}),N=r.found&&n.found?q("generateAbstractMask",C)||{children:[],attributes:{}}:q("generateAbstractIcon",C)||{children:[],attributes:{}},j=N.children,L=N.attributes;return C.children=j,C.attributes=L,s?Jl(C):Ql(C)}function Mr(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,c=s===void 0?!1:s,l=y(y(y({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[se]="");var u=y({},o.styles);Un(a)&&(u.transform=_l({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=Ot(u);f.length>0&&(l.style=f);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function eu(e){var t=e.content,n=e.title,r=e.extra,a=y(y(y({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ot(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ut=z.styles;function hn(e){var t=e[0],n=e[1],r=e.slice(4),a=Dn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(re.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(re.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(re.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var tu={found:!1,width:512,height:512};function nu(e,t){!mi&&!x.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function gn(e,t){var n=t;return t==="fa"&&x.styleDefault!==null&&(t=J()),new Promise(function(r,a){if(q("missingIconAbstract"),n==="fa"){var i=Ei(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ut[t]&&Ut[t][e]){var o=Ut[t][e];return r(hn(o))}nu(e,t),r(y(y({},tu),{},{icon:x.showMissingIcons&&e?q("missingIconAbstract")||{}:{}}))})}var jr=function(){},bn=x.measurePerformance&&rt&&rt.mark&&rt.measure?rt:{mark:jr,measure:jr},Me='FA "6.5.2"',ru=function(t){return bn.mark("".concat(Me," ").concat(t," begins")),function(){return Pi(t)}},Pi=function(t){bn.mark("".concat(Me," ").concat(t," ends")),bn.measure("".concat(Me," ").concat(t),"".concat(Me," ").concat(t," begins"),"".concat(Me," ").concat(t," ends"))},qn={begin:ru,end:Pi},pt=function(){};function Fr(e){var t=e.getAttribute?e.getAttribute(se):null;return typeof t=="string"}function au(e){var t=e.getAttribute?e.getAttribute(Wn):null,n=e.getAttribute?e.getAttribute(Bn):null;return t&&n}function iu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(x.replacementClass)}function ou(){if(x.autoReplaceSvg===!0)return ht.replace;var e=ht[x.autoReplaceSvg];return e||ht.replace}function su(e){return I.createElementNS("http://www.w3.org/2000/svg",e)}function cu(e){return I.createElement(e)}function Ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?su:cu:n;if(typeof e=="string")return I.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ii(o,{ceFn:r}))}),a}function lu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ht={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ii(a),n)}),n.getAttribute(se)===null&&x.keepOriginalSource){var r=I.createComment(lu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Hn(n).indexOf(x.replacementClass))return ht.replace(t);var a=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,c){return c===x.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ze(s)}).join(`
`);n.setAttribute(se,""),n.innerHTML=o}};function Rr(e){e()}function Ni(e,t){var n=typeof t=="function"?t:pt;if(e.length===0)n();else{var r=Rr;x.mutateApproach===vl&&(r=Q.requestAnimationFrame||Rr),r(function(){var a=ou(),i=qn.begin("mutate");e.map(a),i(),n()})}}var Kn=!1;function _i(){Kn=!0}function yn(){Kn=!1}var St=null;function Lr(e){if(Er&&x.observeMutations){var t=e.treeCallback,n=t===void 0?pt:t,r=e.nodeCallback,a=r===void 0?pt:r,i=e.pseudoElementsCallback,o=i===void 0?pt:i,s=e.observeMutationsRoot,c=s===void 0?I:s;St=new Er(function(l){if(!Kn){var u=J();Ie(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Fr(f.addedNodes[0])&&(x.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&x.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Fr(f.target)&&~wl.indexOf(f.attributeName))if(f.attributeName==="class"&&au(f.target)){var d=It(Hn(f.target)),h=d.prefix,g=d.iconName;f.target.setAttribute(Wn,h||u),g&&f.target.setAttribute(Bn,g)}else iu(f.target)&&a(f.target)})}}),K&&St.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uu(){St&&St.disconnect()}function fu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function du(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=It(Hn(e));return a.prefix||(a.prefix=J()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Hl(a.prefix,e.innerText)||Gn(a.prefix,dn(e.innerText))),!a.iconName&&x.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function mu(e){var t=Ie(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return x.autoA11y&&(n?t["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(r||Ye()):(t["aria-hidden"]="true",t.focusable="false")),t}function vu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=du(e),r=n.iconName,a=n.prefix,i=n.rest,o=mu(e),s=vn("parseNodeAttributes",{},e),c=t.styleParser?fu(e):[];return y({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:H,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var pu=z.styles;function Ti(e){var t=x.autoReplaceSvg==="nest"?Dr(e,{styleParser:!1}):Dr(e);return~t.extra.classes.indexOf(vi)?q("generateLayersText",e,t):q("generateSvgReplacementMutation",e,t)}var ee=new Set;$n.map(function(e){ee.add("fa-".concat(e))});Object.keys(Be[P]).map(ee.add.bind(ee));Object.keys(Be[_]).map(ee.add.bind(ee));ee=qe(ee);function zr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K)return Promise.resolve();var n=I.documentElement.classList,r=function(f){return n.add("".concat(Or,"-").concat(f))},a=function(f){return n.remove("".concat(Or,"-").concat(f))},i=x.autoFetchSvg?ee:$n.map(function(u){return"fa-".concat(u)}).concat(Object.keys(pu));i.includes("fa")||i.push("fa");var o=[".".concat(vi,":not([").concat(se,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(se,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ie(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var c=qn.begin("onTree"),l=s.reduce(function(u,f){try{var d=Ti(f);d&&u.push(d)}catch(h){mi||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(d){Ni(d,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(d){c(),f(d)})})}function hu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ti(e).then(function(n){n&&Ni([n],t)})}function gu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:pn(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:pn(a||{})),e(r,y(y({},n),{},{mask:a}))}}var bu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?H:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,l=n.maskId,u=l===void 0?null:l,f=n.title,d=f===void 0?null:f,h=n.titleId,g=h===void 0?null:h,v=n.classes,b=v===void 0?[]:v,w=n.attributes,k=w===void 0?{}:w,S=n.styles,A=S===void 0?{}:S;if(t){var C=t.prefix,N=t.iconName,j=t.icon;return Nt(y({type:"icon"},t),function(){return ce("beforeDOMElementCreation",{iconDefinition:t,params:n}),x.autoA11y&&(d?k["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(g||Ye()):(k["aria-hidden"]="true",k.focusable="false")),Xn({icons:{main:hn(j),mask:c?hn(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:y(y({},H),a),symbol:o,title:d,maskId:u,titleId:g,extra:{attributes:k,styles:A,classes:b}})})}},yu={mixout:function(){return{icon:gu(bu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=zr,n.nodeCallback=hu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?I:r,i=n.callback,o=i===void 0?function(){}:i;return zr(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(h,g){Promise.all([gn(a,s),u.iconName?gn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var b=Dn(v,2),w=b[0],k=b[1];h([n,Xn({icons:{main:w,mask:k},prefix:s,iconName:a,transform:c,symbol:l,maskId:f,title:i,titleId:o,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,c=Ot(s);c.length>0&&(a.style=c);var l;return Un(o)&&(l=q("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:a}}}},xu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Nt({type:"layer"},function(){ce("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers")].concat(qe(i)).join(" ")},children:o}]})}}}},wu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return Nt({type:"counter",content:n},function(){return ce("beforeDOMElementCreation",{content:n,params:r}),eu({content:n.toString(),title:i,extra:{attributes:l,styles:f,classes:["".concat(x.cssPrefix,"-layers-counter")].concat(qe(s))}})})}}}},ku={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?H:a,o=r.title,s=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,d=r.styles,h=d===void 0?{}:d;return Nt({type:"text",content:n},function(){return ce("beforeDOMElementCreation",{content:n,params:r}),Mr({content:n,transform:y(y({},H),i),title:s,extra:{attributes:f,styles:h,classes:["".concat(x.cssPrefix,"-layers-text")].concat(qe(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,c=null;if(ui){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/l,c=u.height/l}return x.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Mr({content:n.innerHTML,width:s,height:c,transform:i,title:a,extra:o,watchable:!0})])}}},Su=new RegExp('"',"ug"),Wr=[1105920,1112319];function Cu(e){var t=e.replace(Su,""),n=Ll(t,0),r=n>=Wr[0]&&n<=Wr[1],a=t.length===2?t[0]===t[1]:!1;return{value:dn(a?t[0]:t),isSecondary:r||a}}function Br(e,t){var n="".concat(ml).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ie(e.children),o=i.filter(function(j){return j.getAttribute(fn)===t})[0],s=Q.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(bl),l=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?_:P,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?$e[d][c[2].toLowerCase()]:yl[d][l],g=Cu(f),v=g.value,b=g.isSecondary,w=c[0].startsWith("FontAwesome"),k=Gn(h,v),S=k;if(w){var A=Ul(v);A.iconName&&A.prefix&&(k=A.iconName,h=A.prefix)}if(k&&!b&&(!o||o.getAttribute(Wn)!==h||o.getAttribute(Bn)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var C=vu(),N=C.extra;N.attributes[fn]=t,gn(k,h).then(function(j){var L=Xn(y(y({},C),{},{icons:{main:j,mask:Vn()},prefix:h,iconName:S,extra:N,watchable:!0})),O=I.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(O,e.firstChild):e.appendChild(O),O.outerHTML=L.map(function(Y){return Ze(Y)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Au(e){return Promise.all([Br(e,"::before"),Br(e,"::after")])}function Eu(e){return e.parentNode!==document.head&&!~pl.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(fn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function $r(e){if(K)return new Promise(function(t,n){var r=Ie(e.querySelectorAll("*")).filter(Eu).map(Au),a=qn.begin("searchPseudoElements");_i(),Promise.all(r).then(function(){a(),yn(),t()}).catch(function(){a(),yn(),n()})})}var Ou={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=$r,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?I:r;x.searchPseudoElements&&$r(a)}}},Hr=!1,Pu={mixout:function(){return{dom:{unwatch:function(){_i(),Hr=!0}}}},hooks:function(){return{bootstrap:function(){Lr(vn("mutationObserverCallbacks",{}))},noAuto:function(){uu()},watch:function(n){var r=n.observeMutationsRoot;Hr?yn():Lr(vn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ur=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Iu={mixout:function(){return{parse:{transform:function(n){return Ur(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ur(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:f,path:d};return{tag:"g",attributes:y({},h.outer),children:[{tag:"g",attributes:y({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:y(y({},r.icon.attributes),h.path)}]}]}}}},Yt={x:0,y:0,width:"100%",height:"100%"};function Yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Nu(e){return e.tag==="g"?e.children:[e]}var _u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?It(a.split(" ").map(function(o){return o.trim()})):Vn();return i.prefix||(i.prefix=J()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,l=i.width,u=i.icon,f=o.width,d=o.icon,h=Nl({transform:c,containerWidth:f,iconWidth:l}),g={tag:"rect",attributes:y(y({},Yt),{},{fill:"white"})},v=u.children?{children:u.children.map(Yr)}:{},b={tag:"g",attributes:y({},h.inner),children:[Yr(y({tag:u.tag,attributes:y(y({},u.attributes),h.path)},v))]},w={tag:"g",attributes:y({},h.outer),children:[b]},k="mask-".concat(s||Ye()),S="clip-".concat(s||Ye()),A={tag:"mask",attributes:y(y({},Yt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,w]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Nu(d)},A]};return r.push(C,{tag:"rect",attributes:y({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(k,")")},Yt)}),{children:r,attributes:a}}}},Tu={provides:function(t){var n=!1;Q.matchMedia&&(n=Q.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:y(y({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=y(y({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:y(y({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:y(y({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:y(y({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:y(y({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:y(y({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:y(y({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:y(y({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Mu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ju=[Ml,yu,xu,wu,ku,Ou,Pu,Iu,_u,Tu,Mu];Vl(ju,{mixoutsTo:D});D.noAuto;D.config;D.library;D.dom;var xn=D.parse;D.findIconDefinition;D.toHtml;var Fu=D.icon;D.layer;D.text;D.counter;function Gr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gr(Object(n),!0).forEach(function(r){be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ct(e){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ct(e)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ru(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Lu(e,t){if(e==null)return{};var n=Ru(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function wn(e){return Du(e)||zu(e)||Wu(e)||Bu()}function Du(e){if(Array.isArray(e))return kn(e)}function zu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wu(e,t){if(e){if(typeof e=="string")return kn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kn(e,t)}}function kn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Bu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $u(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,c=e.spin,l=e.spinPulse,u=e.spinReverse,f=e.pulse,d=e.fixedWidth,h=e.inverse,g=e.border,v=e.listItem,b=e.flip,w=e.size,k=e.rotation,S=e.pull,A=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":f,"fa-fw":d,"fa-inverse":h,"fa-border":g,"fa-li":v,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},be(t,"fa-".concat(w),typeof w<"u"&&w!==null),be(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),be(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),be(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(A).map(function(C){return A[C]?C:null}).filter(function(C){return C})}function Hu(e){return e=e-0,e===e}function Mi(e){return Hu(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Uu=["style"];function Yu(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Gu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Mi(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Yu(a)]=i:t[a]=i,t},{})}function ji(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return ji(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.attrs.className=u,delete t.attributes.class;break;case"style":c.attrs.style=Gu(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=u:c.attrs[Mi(l)]=u}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Lu(n,Uu);return a.attrs.style=B(B({},a.attrs.style),o),e.apply(void 0,[t.tag,B(B({},a.attrs),s)].concat(wn(r)))}var Fi=!1;try{Fi=!0}catch{}function Vu(){if(!Fi&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Vr(e){if(e&&Ct(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(xn.icon)return xn.icon(e);if(e===null)return null;if(e&&Ct(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Gt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?be({},e,t):{}}var Xr={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ce=Sn.forwardRef(function(e,t){var n=B(B({},Xr),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,c=n.titleId,l=n.maskId,u=Vr(r),f=Gt("classes",[].concat(wn($u(n)),wn((o||"").split(" ")))),d=Gt("transform",typeof n.transform=="string"?xn.transform(n.transform):n.transform),h=Gt("mask",Vr(a)),g=Fu(u,B(B(B(B({},f),d),h),{},{symbol:i,title:s,titleId:c,maskId:l}));if(!g)return Vu("Could not find icon",u),null;var v=g.abstract,b={ref:t};return Object.keys(n).forEach(function(w){Xr.hasOwnProperty(w)||(b[w]=n[w])}),Xu(v[0],b)});Ce.displayName="FontAwesomeIcon";Ce.propTypes={beat:E.bool,border:E.bool,beatFade:E.bool,bounce:E.bool,className:E.string,fade:E.bool,flash:E.bool,mask:E.oneOfType([E.object,E.array,E.string]),maskId:E.string,fixedWidth:E.bool,inverse:E.bool,flip:E.oneOf([!0,!1,"horizontal","vertical","both"]),icon:E.oneOfType([E.object,E.array,E.string]),listItem:E.bool,pull:E.oneOf(["right","left"]),pulse:E.bool,rotation:E.oneOf([0,90,180,270]),shake:E.bool,size:E.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:E.bool,spinPulse:E.bool,spinReverse:E.bool,symbol:E.oneOfType([E.bool,E.string]),title:E.string,titleId:E.string,transform:E.oneOfType([E.string,E.object]),swapOpacity:E.bool};var Xu=ji.bind(null,Sn.createElement),qu={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},qr={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Ku={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Kr={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};const Zr=["About","Skills","Projects","Experience","Contact"],Qr=({children:e})=>p.jsx(La,{px:2,py:1,fontSize:"md",fontWeight:400,rounded:"md",_hover:{textDecoration:"none",color:ne("gray.600","gray.300")},href:"#about",children:e}),Zu=()=>{const{isOpen:e,onOpen:t,onClose:n}=ic(),{colorMode:r,toggleColorMode:a}=co();return p.jsxs(W,{zIndex:999,bg:ne("white","gray.800"),px:2,boxShadow:ne("rgba(50, 50, 93, 0.125) 0px 1px 2px -1px, rgba(0, 0, 0, 0.125) 0px 1px 2px -1px","none"),position:"sticky",top:0,left:0,as:"header",display:"flex",justifyContent:"center",borderBottom:ne("none","1px solid #F6E05E"),children:[p.jsxs(Ln,{templateColumns:{base:"1fr 0fr auto",md:"auto 2fr 0fr"},alignItems:"center",gap:2,h:16,w:{base:"100%",md:"calc(100% - 14rem)",lg:"calc(100% - 20rem)"},children:[p.jsx(we,{children:p.jsx(W,{textAlign:"center",alignItems:"center",justifyContent:"center",display:"flex",children:p.jsx(bt,{minW:32,src:ne(wr,xr),alt:"App Logo",h:{base:10,md:10}})})}),p.jsx(we,{display:{base:"none",md:"block"},children:p.jsxs(We,{justifyContent:"flex-end",alignContent:"center",alignItems:"center",children:[Zr.map(i=>p.jsx(Qr,{children:i},i)),p.jsx(dt,{variant:"ghost",size:"md",icon:p.jsx(Ce,{size:"lg",icon:r==="light"?Kr:qr}),onClick:a})]})}),p.jsx(we,{textAlign:"right",display:{base:"block",md:"none"},children:p.jsx(dt,{variant:"ghost",size:"md",icon:p.jsx(Ce,{size:"xl",icon:qu}),"aria-label":"Toggle Menu",fontSize:"md",onClick:t,color:"blue.700",px:4})})]}),p.jsxs(el,{placement:"right",size:["xs"],onClose:n,isOpen:e,children:[p.jsx(ri,{sx:{backdropFilter:"blur(0.125rem)"}}),p.jsxs(ei,{children:[p.jsxs(ni,{py:2,boxShadow:"0 0 3px rgba(0, 0, 0, 0.1)",children:[p.jsx(bt,{src:ne(wr,xr),alt:"App Logo",h:12}),p.jsx(ii,{})]}),p.jsx(ai,{children:p.jsxs(Ba,{align:"start",children:[Zr.map(i=>p.jsx(Qr,{onClick:n,children:i},i)),p.jsx(dt,{variant:"ghost",size:"md",icon:p.jsx(Ce,{size:"lg",icon:r==="light"?Kr:qr}),onClick:a})]})}),p.jsx(ti,{})]})]})]})};function Qu({className:e,children:t,ref:n,...r}){return p.jsx(W,{as:"section",ref:n,className:e,...r,children:t})}function Ju(){const e=new Date().getFullYear();var t=ne("gray.300","gray.700");return p.jsx(W,{as:"footer",bg:t,p:2,children:p.jsxs(We,{wrap:"wrap",fontSize:"sm",justifyContent:"center",alignItems:"center",h:16,children:[p.jsxs(ze,{children:["© ",e]})," ",p.jsx(Ua,{orientation:"vertical",h:4})," ",p.jsx(ze,{textAlign:"center",children:"Designed and coded with ❤️️ by Tang Ho Trung Nam"})]})})}function ef(e){const[t,n]=m.useState(!1),r=m.useCallback(()=>{const a=window.scrollY>e;n(a)},[e]);return m.useEffect(()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}),[r]),t}function tf(){var e=ef(100);const t=()=>{window.scrollTo({top:0,behavior:"smooth"})},n=Ge(W);return p.jsx(n,{h:10,w:10,pos:"fixed",right:6,bottom:10,display:e?"flex":"none",bg:"blue.900",borderRadius:"md",onClick:t,cursor:"pointer",backdropFilter:"blur(10px)",justifyContent:"center",alignItems:"center",color:"white",_hover:{bg:"blue.800"},initial:{opacity:0,y:20},animate:{opacity:e?.8:0,y:e?0:20},transition:{duration:.3},children:p.jsx(Ce,{icon:Ku,size:"xl"})})}function nf({children:e}){return p.jsxs(p.Fragment,{children:[p.jsx(Zu,{}),p.jsx(Qu,{children:e}),p.jsx(tf,{}),p.jsx(Ju,{})]})}const Jr=Ge(W);function rf(){return p.jsxs(W,{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",backgroundColor:"gray.100",children:[p.jsx(Jr,{width:"100px",height:"100px",borderRadius:"50%",bg:"blue.500",position:"relative",zIndex:"1"}),p.jsx(Jr,{width:"100px",height:"100px",borderRadius:"50%",bg:"blue.500",position:"absolute",zIndex:"0",animate:{scale:[1,2],opacity:[.5,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"}})]})}function af(){return p.jsx(Ha,{centerContent:!0,maxW:"calc(100% - 20rem)",children:p.jsxs(Ln,{templateColumns:"repeat(12, 1fr)",gap:2,my:4,children:[p.jsx(we,{order:{base:2,md:1},colSpan:{base:12,md:7},children:p.jsxs(W,{children:[p.jsx(ze,{as:"h1",fontSize:{base:"1.75rem",md:"2.75rem"},fontWeight:"600",children:"Hi, I'm Tang Ho Trung Nam"}),p.jsx(ze,{as:"p",fontSize:{base:"1rem",md:"1.125rem"},mt:2,children:"I'm a software engineer based in Ho Chi Minh City, Vietnam. I have a passion for software development and love to create things that make people's lives easier."}),p.jsx(rf,{})]})}),p.jsx(we,{order:{base:1,md:2},colSpan:{base:12,md:5},color:"white",children:p.jsx(We,{justifyContent:"center",children:p.jsxs(We,{pos:"relative",w:60,h:60,children:[p.jsx(bt,{src:"https://avatars.githubusercontent.com/u/149599451?v=4",alt:"Tang Ho Trung Nam",zIndex:1}),p.jsx(W,{pos:"absolute",w:"100%",h:"100%",bg:"gray.600",left:3,top:3})]})})})]})})}function of(){return p.jsx(m.Fragment,{children:p.jsx(af,{})})}function uf(){return p.jsx(nf,{children:p.jsx(of,{})})}export{uf as default};
