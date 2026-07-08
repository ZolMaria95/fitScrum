import {D,B as Bn$1,M as Mo$1,l as lD,aG as oh,x as xE,aH as J,o as oi,q as qI,a as Dc,h as hp,w as iI,t as tI,r as cp,c as xy,d as ap,y as sI,n as nI,L as Cp,a6 as sp,aI as W,aJ as q,ac as fI,O as Op,ad as Yl,Z as ZI,ae as Kl,b as Bv,aK as wI,f as xp,R as Rp,U as Uv,z as kE,A as bl,E as hr,aw as GL,aA as Ss,af as S,at as ee$1,aL as nn$1,au as Be,an as ge$1,aC as zh,ax as Qh,aM as ot$1,a9 as Xt,ao as kh,a8 as PE,aN as QL,a3 as tD,ag as Me,aO as Ei,aP as Nn$1,aQ as M,g as De,j as Oy,aR as k,az as Xt$1,aS as Yh,aT as cl,aU as rm,aV as ZL,$ as hh,C as qr,ay as Hr,Q as yp,S as EI,T as II,aq as Ir,ah as ct$1,aj as q$1,ak as nh,aW as Up,aX as Ql,aY as p,G as mI,J as yI,a7 as vp,aZ as m,a_ as cu,a$ as lu,b0 as io,b1 as fp,K as RI,_ as _c,e as hI,b2 as oI,b3 as pr,X as Xn$2,b4 as lr,ar as Lv,ai as B$1,b5 as Ah,b6 as Zt,b7 as P,b8 as Pe,b9 as Le,aa as Tp,ba as lh,bb as Ap,bc as Lp,bd as YI,be as KI}from'./main-2BKZM7EA.js';import {_,I as I$1}from'./chunk-5aZDZ1Q0.js';import {F as Fi,N as Ni,P as Pa,V as Vi,T as Ta,A as Aa,O as Oa,R as Ri,L as Li,n as nt,a as Pi,I as Ia,W as Wi,b as ae,B as Bi,$ as $i,H as Hi,E as Ea,D as Di,i as it,f as fa,M as Mi}from'./chunk-DCgeWMnp.js';import {R as Ra,P as Pa$1,O as Oa$1,c as co,l as lo$1,J as Ja,g as gi}from'./chunk-BtrSSSae.js';import {Y as Yt,m as mt}from'./chunk-DfMZwUAR.js';import {B}from'./chunk-DgQTT3Bi.js';import {e as ee,O,$ as $e,H as Ht,j as jt,N as Nt$1,z as zt,V as Vt}from'./chunk-aHISLVdK.js';import {F as Ft$1,R as Rt$1,r}from'./chunk-CBlNTjkg.js';import {d as de,i as it$1,o as oe,r as re,O as Ot$1,n as nn,t as tn}from'./chunk-CZj29R-k.js';import {y as yi,v as vi,I as It$1,Z,H}from'./chunk-CCuY4iqP.js';import {v as va,g as ga,A as An$1,t as ta$1,i as ie,a as gn$1,X as Xn$1,Z as Ze,b as bn$1,h as ht,S as S$1}from'./chunk-D_Pjpzsv.js';import {w}from'./chunk-C_nSinVY.js';function St(o){let i=o.cloneNode(true),e=i.querySelectorAll("[id]"),t=o.nodeName.toLowerCase();i.removeAttribute("id");for(let n=0;n<e.length;n++)e[n].removeAttribute("id");return t==="canvas"?dn(o,i):(t==="input"||t==="select"||t==="textarea")&&ln(o,i),cn("canvas",o,i,dn),cn("input, textarea, select",o,i,ln),i}function cn(o,i,e,t){let n=i.querySelectorAll(o);if(n.length){let a=e.querySelectorAll(o);for(let r=0;r<n.length;r++)t(n[r],a[r]);}}var Wn=0;function ln(o,i){i.type!=="file"&&(i.value=o.value),i.type==="radio"&&i.name&&(i.name=`mat-clone-${i.name}-${Wn++}`);}function dn(o,i){let e=i.getContext("2d");if(e)try{e.drawImage(o,0,0);}catch{}}function It(o){let i=o.getBoundingClientRect();return {top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.width,height:i.height,x:i.x,y:i.y}}function wt(o,i,e){let{top:t,bottom:n,left:a,right:r}=o;return e>=t&&e<=n&&i>=a&&i<=r}function $n(o,i){let e=i.left<o.left,t=i.left+i.width>o.right,n=i.top<o.top,a=i.top+i.height>o.bottom;return e||t||n||a}function ke(o,i,e){o.top+=i,o.bottom=o.top+o.height,o.left+=e,o.right=o.left+o.width;}function hn(o,i,e,t){let{top:n,right:a,bottom:r,left:s,width:h,height:p}=o,_=h*i,O=p*i;return t>n-O&&t<r+O&&e>s-_&&e<a+_}var ot=class{_document;positions=new Map;constructor(i){this._document=i;}clear(){this.positions.clear();}cache(i){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),i.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:It(e)});});}handleScroll(i){let e=P(i),t=this.positions.get(e);if(!t)return null;let n=t.scrollPosition,a,r;if(e===this._document){let p=this.getViewportScrollPosition();a=p.top,r=p.left;}else a=e.scrollTop,r=e.scrollLeft;let s=n.top-a,h=n.left-r;return this.positions.forEach((p,_)=>{p.clientRect&&e!==_&&e.contains(_)&&ke(p.clientRect,s,h);}),n.top=a,n.left=r,{top:s,left:h}}getViewportScrollPosition(){return {top:window.scrollY,left:window.scrollX}}};function Cn(o,i){let e=o.rootNodes;if(e.length===1&&e[0].nodeType===i.ELEMENT_NODE)return e[0];let t=i.createElement("div");return e.forEach(n=>t.appendChild(n)),t}function Ot(o,i,e){for(let t in i)if(i.hasOwnProperty(t)){let n=i[t];n?o.setProperty(t,n,e?.has(t)?"important":""):o.removeProperty(t);}return o}function ge(o,i){let e=i?"":"none";Ot(o.style,{"touch-action":i?"":"none","-webkit-user-drag":i?"":"none","-webkit-tap-highlight-color":i?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e});}function mn(o,i,e){Ot(o.style,{position:i?"":"fixed",top:i?"":"0",opacity:i?"":"0",left:i?"":"-999em"},e);}function at(o,i){return i&&i!="none"?o+" "+i:o}function pn(o,i){o.style.width=`${i.width}px`,o.style.height=`${i.height}px`,o.style.transform=xe(i.left,i.top);}function xe(o,i){return `translate3d(${Math.round(o)}px, ${Math.round(i)}px, 0)`}var fe={capture:true},yt={passive:false,capture:true},jn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=xE({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(t,n){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2})}return o})(),Rt=(()=>{class o{_ngZone=D(Me);_document=D(Xn$2);_styleLoader=D(q$1);_renderer=D(lr).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new ee$1;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=Mo$1([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new ee$1;pointerUp=new ee$1;registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e);}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,yt);});}removeDropContainer(e){this._dropInstances.delete(e);}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.();}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(jn),this._activeDragInstances.update(n=>[...n,e]),this._activeDragInstances().length===1)){let n=t.type.startsWith("touch"),a=s=>this.pointerUp.next(s),r=[["scroll",s=>this._scroll.next(s),fe],["selectstart",this._preventDefaultWhileDragging,yt]];n?r.push(["touchend",a,fe],["touchcancel",a,fe]):r.push(["mouseup",a,fe]),n||r.push(["mousemove",s=>this.pointerMove.next(s),yt]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=r.map(([s,h,p])=>this._renderer.listen(this._document,s,h,p));});}}stopDragging(e){this._activeDragInstances.update(t=>{let n=t.indexOf(e);return n>-1?(t.splice(n,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners();}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new M(n=>this._ngZone.runOutsideAngular(()=>{let a=this._renderer.listen(e,"scroll",r=>{this._activeDragInstances().length&&n.next(r);},fe);return ()=>{a();}}))),kh(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t);}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e);}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete();}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault();};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e));};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0;}static \u0275fac=function(t){return new(t||o)};static \u0275prov=pr({token:o,factory:o.\u0275fac})}return o})();function gn(o){let i=o.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(o)*i}function qn(o){let i=getComputedStyle(o),e=Ct(i,"transition-property"),t=e.find(s=>s==="transform"||s==="all");if(!t)return 0;let n=e.indexOf(t),a=Ct(i,"transition-duration"),r=Ct(i,"transition-delay");return gn(a[n])+gn(r[n])}function Ct(o,i){return o.getPropertyValue(i).split(",").map(t=>t.trim())}var Zn=new Set(["position"]),Dt=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(i,e,t,n,a,r,s,h,p,_){this._document=i,this._rootElement=e,this._direction=t,this._initialDomRect=n,this._previewTemplate=a,this._previewClass=r,this._pickupPositionOnPage=s,this._initialTransform=h,this._zIndex=p,this._renderer=_;}attach(i){this._preview=this._createPreview(),i.appendChild(this._preview),un(this._preview)&&this._preview.showPopover();}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null;}setTransform(i){this._preview.style.transform=i;}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(i){this._preview.classList.add(i);}getTransitionDuration(){return qn(this._preview)}addEventListener(i,e){return this._renderer.listen(this._preview,i,e)}_createPreview(){let i=this._previewTemplate,e=this._previewClass,t=i?i.template:null,n;if(t&&i){let a=i.matchSize?this._initialDomRect:null,r=i.viewContainer.createEmbeddedView(t,i.context);r.detectChanges(),n=Cn(r,this._document),this._previewEmbeddedView=r,i.matchSize?pn(n,a):n.style.transform=xe(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y);}else n=St(this._rootElement),pn(n,this._initialDomRect),this._initialTransform&&(n.style.transform=this._initialTransform);return Ot(n.style,{"pointer-events":"none",margin:un(n)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Zn),ge(n,false),n.classList.add("cdk-drag-preview"),n.setAttribute("popover","manual"),n.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(a=>n.classList.add(a)):n.classList.add(e)),n}};function un(o){return "showPopover"in o}var Kn={passive:true},_n={passive:false},Qn={passive:false,capture:true},Yn=800,bn="cdk-drag-placeholder",fn=new Set(["position"]);function Sn(o,i,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=o.get(Lv,null,{optional:true})||o.get(lr).createRenderer(null,null);return new Pt(i,e,o.get(Xn$2),o.get(Me),o.get(H),o.get(Rt),t)}var Pt=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=Mo$1(false);_hasMoved=false;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new ee$1;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=B$1.EMPTY;_pointerUpSubscription=B$1.EMPTY;_scrollSubscription=B$1.EMPTY;_resizeSubscription=B$1.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=true;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(i){i!==this._disabled&&(this._disabled=i,this._toggleNativeDragInteractions(),this._handles.forEach(e=>ge(e,i)));}_disabled=false;beforeStarted=new ee$1;started=new ee$1;released=new ee$1;ended=new ee$1;entered=new ee$1;exited=new ee$1;dropped=new ee$1;moved=this._moveEvents;data;constrainPosition;constructor(i,e,t,n,a,r,s){this._config=e,this._document=t,this._ngZone=n,this._viewportRuler=a,this._dragDropRegistry=r,this._renderer=s,this.withRootElement(i).withParent(e.parentDragRef||null),this._parentPositions=new ot(t),r.registerDragItem(this);}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(i){this._handles=i.map(t=>k(t)),this._handles.forEach(t=>ge(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t);}),this._disabledHandles=e,this}withPreviewTemplate(i){return this._previewTemplate=i,this}withPlaceholderTemplate(i){return this._placeholderTemplate=i,this}withRootElement(i){let e=k(i);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"mousedown",this._pointerDown,_n),t.listen(e,"touchstart",this._pointerDown,Kn),t.listen(e,"dragstart",this._nativeDragStart,_n)]),this._initialTransform=void 0,this._rootElement=e;}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(i){return this._boundaryElement=i?k(i):null,this._resizeSubscription.unsubscribe(),i&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(i){return this._parentDragRef=i,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null;}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0};}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&$n(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let i=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,n=0;e.left<i.left?t=i.left-e.left:e.right>i.right&&(t=i.right-e.right),e.top<i.top?n=i.top-e.top:e.bottom>i.bottom&&(n=i.bottom-e.bottom);let a=this._activeTransform.x,r=this._activeTransform.y,s=a+t,h=r+n;this._rootElement.style.transform=xe(s,h),this._activeTransform={x:s,y:h},this._passiveTransform={x:s,y:h};}}disableHandle(i){!this._disabledHandles.has(i)&&this._handles.indexOf(i)>-1&&(this._disabledHandles.add(i),ge(i,true));}enableHandle(i){this._disabledHandles.has(i)&&(this._disabledHandles.delete(i),ge(i,this.disabled));}withDirection(i){return this._direction=i,this}_withDropContainer(i){this._dropContainer=i;}getFreeDragPosition(){let i=this.isDragging()?this._activeTransform:this._passiveTransform;return {x:i.x,y:i.y}}setFreeDragPosition(i){return this._activeTransform={x:0,y:0},this._passiveTransform.x=i.x,this._passiveTransform.y=i.y,this._dropContainer||this._applyRootElementTransform(i.x,i.y),this}withPreviewContainer(i){return this._previewContainer=i,this}_sortFromLastPointerPosition(){let i=this._lastKnownPointerPosition;i&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(i),i);}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0;}_destroyPreview(){this._preview?.destroy(),this._preview=null;}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null;}_pointerDown=i=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(i);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,i);}else this.disabled||this._initializeDragSequence(this._rootElement,i);};_pointerMove=i=>{let e=this._getPointerPositionOnPage(i);if(!this._hasStartedDragging()){let n=Math.abs(e.x-this._pickupPositionOnPage.x),a=Math.abs(e.y-this._pickupPositionOnPage.y);if(n+a>=this._config.dragStartThreshold){let s=Date.now()>=this._dragStartTime+this._getDragStartDelay(i),h=this._dropContainer;if(!s){this._endDragSequence(i);return}(!h||!h.isDragging()&&!h.isReceiving())&&(i.cancelable&&i.preventDefault(),this._hasStartedDragging.set(true),this._ngZone.run(()=>this._startDragSequence(i)));}return}i.cancelable&&i.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=true,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else {let n=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,a=this._activeTransform;a.x=t.x-n.x+this._passiveTransform.x,a.y=t.y-n.y+this._passiveTransform.y,this._applyRootElementTransform(a.x,a.y);}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:i,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta});});};_pointerUp=i=>{this._endDragSequence(i);};_endDragSequence(i){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:i}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(i),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this);});else {this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(i);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:i});}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this);}}_startDragSequence(i){ve(i)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",Xn,Qn);}),t){let n=this._rootElement,a=n.parentNode,r=this._placeholder=this._createPlaceholderElement(),s=this._marker=this._marker||this._document.createComment("");a.insertBefore(s,n),this._initialTransform=n.style.transform||"",this._preview=new Dt(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(a,e)),mn(n,false,fn),this._document.body.appendChild(a.replaceChild(r,n)),this.started.next({source:this,event:i}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this);}else this.started.next({source:this,event:i}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[]);}_initializeDragSequence(i,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),n=ve(e),a=!n&&e.button!==0,r=this._rootElement,s=P(e),h=!n&&this._lastTouchEventTime&&this._lastTouchEventTime+Yn>Date.now(),p=n?Pe(e):Le(e);if(s&&s.draggable&&e.type==="mousedown"&&e.preventDefault(),t||a||h||p)return;if(this._handles.length){let U=r.style;this._rootElementTapHighlight=U.webkitTapHighlightColor||"",U.webkitTapHighlightColor="transparent";}this._hasMoved=false,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(U=>this._updateOnScroll(U)),this._boundaryElement&&(this._boundaryRect=It(this._boundaryElement));let _=this._previewTemplate;this._pickupPositionInElement=_&&_.template&&!_.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,i,e);let O=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:O.x,y:O.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e);}_cleanupDragArtifacts(i){mn(this._rootElement,true,fn),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),n=this._getPointerPositionOnPage(i),a=this._getDragDistance(n),r=e._isOverContainer(n.x,n.y);this.ended.next({source:this,distance:a,dropPoint:n,event:i}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:r,distance:a,dropPoint:n,event:i}),e.drop(this,t,this._initialIndex,this._initialContainer,r,a,n,i),this._dropContainer=this._initialContainer;});}_updateActiveDropContainer({x:i,y:e},{x:t,y:n}){let a=this._initialContainer._getSiblingContainerFromPosition(this,i,e);!a&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(i,e)&&(a=this._initialContainer),a&&a!==this._dropContainer&&this._ngZone.run(()=>{let r=this._dropContainer.getItemIndex(this),s=this._dropContainer.getItemAtIndex(r+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(a,this._dropContainer,s),this._dropContainer=a,this._dropContainer.enter(this,i,e,a===this._initialContainer&&a.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:a,currentIndex:a.getItemIndex(this)});}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,n),this._dropContainer._sortItem(this,i,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(i,e):this._applyPreviewTransform(i-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y));}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let i=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(i.left,i.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let n=s=>{(!s||this._preview&&P(s)===this._preview.element&&s.propertyName==="transform")&&(r(),t(),clearTimeout(a));},a=setTimeout(n,e*1.5),r=this._preview.addEventListener("transitionend",n);}))}_createPlaceholderElement(){let i=this._placeholderTemplate,e=i?i.template:null,t;return e?(this._placeholderRef=i.viewContainer.createEmbeddedView(e,i.context),this._placeholderRef.detectChanges(),t=Cn(this._placeholderRef,this._document)):t=St(this._rootElement),t.style.pointerEvents="none",t.classList.add(bn),t}_getPointerPositionInElement(i,e,t){let n=e===this._rootElement?null:e,a=n?n.getBoundingClientRect():i,r=ve(t)?t.targetTouches[0]:t,s=this._getViewportScrollPosition(),h=r.pageX-a.left-s.left,p=r.pageY-a.top-s.top;return {x:a.left-i.left+h,y:a.top-i.top+p}}_getPointerPositionOnPage(i){let e=this._getViewportScrollPosition(),t=ve(i)?i.touches[0]||i.changedTouches[0]||{pageX:0,pageY:0}:i,n=t.pageX-e.left,a=t.pageY-e.top;if(this._ownerSVGElement){let r=this._ownerSVGElement.getScreenCTM();if(r){let s=this._ownerSVGElement.createSVGPoint();return s.x=n,s.y=a,s.matrixTransform(r.inverse())}}return {x:n,y:a}}_getConstrainedPointerPosition(i){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:n}=this.constrainPosition?this.constrainPosition(i,this,this._initialDomRect,this._pickupPositionInElement):i;if(this.lockAxis==="x"||e==="x"?n=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:a,y:r}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,s=this._boundaryRect,{width:h,height:p}=this._getPreviewRect(),_=s.top+r,O=s.bottom-(p-r),U=s.left+a,ht=s.right-(h-a);t=vn(t,U,ht),n=vn(n,_,O);}return {x:t,y:n}}_updatePointerDirectionDelta(i){let{x:e,y:t}=i,n=this._pointerDirectionDelta,a=this._pointerPositionAtLastDirectionChange,r=Math.abs(e-a.x),s=Math.abs(t-a.y);return r>this._config.pointerDirectionChangeThreshold&&(n.x=e>a.x?1:-1,a.x=e),s>this._config.pointerDirectionChangeThreshold&&(n.y=t>a.y?1:-1,a.y=t),n}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let i=this._handles.length>0||!this.isDragging();i!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=i,ge(this._rootElement,i));}_removeRootElementListeners(){this._rootElementCleanups?.forEach(i=>i()),this._rootElementCleanups=void 0;}_applyRootElementTransform(i,e){let t=1/this.scale,n=xe(i*t,e*t),a=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=a.transform&&a.transform!="none"?a.transform:""),a.transform=at(n,this._initialTransform);}_applyPreviewTransform(i,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,n=xe(i,e);this._preview.setTransform(at(n,t));}_getDragDistance(i){let e=this._pickupPositionOnPage;return e?{x:i.x-e.x,y:i.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear();}_containInsideBoundaryOnResize(){let{x:i,y:e}=this._passiveTransform;if(i===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),n=this._boundaryElement.getBoundingClientRect();if(n.width===0&&n.height===0||t.width===0&&t.height===0)return;let a=n.left-t.left,r=t.right-n.right,s=n.top-t.top,h=t.bottom-n.bottom;n.width>t.width?(a>0&&(i+=a),r>0&&(i-=r)):i=0,n.height>t.height?(s>0&&(e+=s),h>0&&(e-=h)):e=0,(i!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:i});}_getDragStartDelay(i){let e=this.dragStartDelay;return typeof e=="number"?e:ve(i)?e.touch:e?e.mouse:0}_updateOnScroll(i){let e=this._parentPositions.handleScroll(i);if(e){let t=P(i);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&ke(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y));}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Zt(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(i,e){let t=this._previewContainer||"global";if(t==="parent")return i;if(t==="global"){let n=this._document;return e||n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement||n.body}return k(t)}_getPreviewRect(){return (!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=i=>{if(this._handles.length){let e=this._getTargetHandle(i);e&&!this._disabledHandles.has(e)&&!this.disabled&&i.preventDefault();}else this.disabled||i.preventDefault();};_getTargetHandle(i){return this._handles.find(e=>i.target&&(i.target===e||e.contains(i.target)))}_conditionallyInsertAnchor(i,e,t){if(i===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let n=this._anchor??=St(this._placeholder);n.classList.remove(bn),n.classList.add("cdk-drag-anchor"),n.style.transform="",t?t.before(n):k(e.element).appendChild(n);}}};function vn(o,i,e){return Math.max(i,Math.min(e,o))}function ve(o){return o.type[0]==="t"}function Xn(o){o.preventDefault();}function wn(o,i,e){let t=kn(i,o.length-1),n=kn(e,o.length-1);if(t===n)return;let a=o[t],r=n<t?-1:1;for(let s=t;s!==n;s+=r)o[s]=o[s+r];o[n]=a;}function kn(o,i){return Math.max(0,Math.min(i,o))}var rt=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(i){this._dragDropRegistry=i;}_previousSwap={drag:null,delta:0,overlaps:false};start(i){this.withItems(i);}sort(i,e,t,n){let a=this._itemPositions,r=this._getItemIndexFromPointerPosition(i,e,t,n);if(r===-1&&a.length>0)return null;let s=this.orientation==="horizontal",h=a.findIndex(N=>N.drag===i),p=a[r],_=a[h].clientRect,O=p.clientRect,U=h>r?1:-1,ht=this._getItemOffsetPx(_,O,U),Gn=this._getSiblingOffsetPx(h,a,U),Hn=a.slice();return wn(a,h,r),a.forEach((N,Un)=>{if(Hn[Un]===N)return;let Lt=N.drag===i,mt=Lt?ht:Gn,Vt=Lt?i.getPlaceholderElement():N.drag.getRootElement();N.offset+=mt;let zt=Math.round(N.offset*(1/N.drag.scale));s?(Vt.style.transform=at(`translate3d(${zt}px, 0, 0)`,N.initialTransform),ke(N.clientRect,0,mt)):(Vt.style.transform=at(`translate3d(0, ${zt}px, 0)`,N.initialTransform),ke(N.clientRect,mt,0));}),this._previousSwap.overlaps=wt(O,e,t),this._previousSwap.drag=p.drag,this._previousSwap.delta=s?n.x:n.y,{previousIndex:h,currentIndex:r}}enter(i,e,t,n){let a=this._activeDraggables,r=a.indexOf(i),s=i.getPlaceholderElement();r>-1&&a.splice(r,1);let h=n==null||n<0?this._getItemIndexFromPointerPosition(i,e,t):n,p=a[h];if(p===i&&(p=a[h+1]),!p&&(h==null||h===-1||h<a.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(p=a[0]),p&&!this._dragDropRegistry.isDragging(p)){let _=p.getRootElement();_.parentElement.insertBefore(s,_),a.splice(h,0,i);}else this._element.appendChild(s),a.push(i);s.style.transform="",this._cacheItemPositions();}withItems(i){this._activeDraggables=i.slice(),this._cacheItemPositions();}withSortPredicate(i){this._sortPredicate=i;}reset(){this._activeDraggables?.forEach(i=>{let e=i.getRootElement();if(e){let t=this._itemPositions.find(n=>n.drag===i)?.initialTransform;e.style.transform=t||"";}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=false;}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(i){return this._getVisualItemPositions().findIndex(e=>e.drag===i)}getItemAtIndex(i){return this._getVisualItemPositions()[i]?.drag||null}updateOnScroll(i,e){this._itemPositions.forEach(({clientRect:t})=>{ke(t,i,e);}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition();});}withElementContainer(i){this._element=i;}_cacheItemPositions(){let i=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return {drag:e,offset:0,initialTransform:t.style.transform||"",clientRect:It(t)}}).sort((e,t)=>i?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top);}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(i,e,t){let n=this.orientation==="horizontal",a=n?e.left-i.left:e.top-i.top;return t===-1&&(a+=n?e.width-i.width:e.height-i.height),a}_getSiblingOffsetPx(i,e,t){let n=this.orientation==="horizontal",a=e[i].clientRect,r=e[i+t*-1],s=a[n?"width":"height"]*t;if(r){let h=n?"left":"top",p=n?"right":"bottom";t===-1?s-=r.clientRect[h]-a[p]:s+=a[h]-r.clientRect[p];}return s}_shouldEnterAsFirstChild(i,e){if(!this._activeDraggables.length)return  false;let t=this._itemPositions,n=this.orientation==="horizontal";if(t[0].drag!==this._activeDraggables[0]){let r=t[t.length-1].clientRect;return n?i>=r.right:e>=r.bottom}else {let r=t[0].clientRect;return n?i<=r.left:e<=r.top}}_getItemIndexFromPointerPosition(i,e,t,n){let a=this.orientation==="horizontal",r=this._itemPositions.findIndex(({drag:s,clientRect:h})=>{if(s===i)return  false;if(n){let p=a?n.x:n.y;if(s===this._previousSwap.drag&&this._previousSwap.overlaps&&p===this._previousSwap.delta)return  false}return a?e>=Math.floor(h.left)&&e<Math.floor(h.right):t>=Math.floor(h.top)&&t<Math.floor(h.bottom)});return r===-1||!this._sortPredicate(r,i)?-1:r}},Tt=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:false};_relatedNodes=[];constructor(i,e){this._document=i,this._dragDropRegistry=e;}start(i){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let n=e[t];this._relatedNodes.push([n,n.nextSibling]);}this.withItems(i);}sort(i,e,t,n){let a=this._getItemIndexFromPointerPosition(i,e,t),r=this._previousSwap;if(a===-1||this._activeItems[a]===i)return null;let s=this._activeItems[a];if(r.drag===s&&r.overlaps&&r.deltaX===n.x&&r.deltaY===n.y)return null;let h=this.getItemIndex(i),p=i.getPlaceholderElement(),_=s.getRootElement();a>h?_.after(p):_.before(p),wn(this._activeItems,h,a);let O=this._getRootNode().elementFromPoint(e,t);return r.deltaX=n.x,r.deltaY=n.y,r.drag=s,r.overlaps=_===O||_.contains(O),{previousIndex:h,currentIndex:a}}enter(i,e,t,n){let a=this._activeItems.indexOf(i);a>-1&&this._activeItems.splice(a,1);let r=n==null||n<0?this._getItemIndexFromPointerPosition(i,e,t):n;r===-1&&(r=this._getClosestItemIndexToPointer(i,e,t));let s=this._activeItems[r];s&&!this._dragDropRegistry.isDragging(s)?(this._activeItems.splice(r,0,i),s.getRootElement().before(i.getPlaceholderElement())):(this._activeItems.push(i),this._element.appendChild(i.getPlaceholderElement()));}withItems(i){this._activeItems=i.slice();}withSortPredicate(i){this._sortPredicate=i;}reset(){let i=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[n,a]=this._relatedNodes[t];n.parentNode===i&&n.nextSibling!==a&&(a===null?i.appendChild(n):a.parentNode===i&&i.insertBefore(n,a));}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=false;}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(i){return this._activeItems.indexOf(i)}getItemAtIndex(i){return this._activeItems[i]||null}updateOnScroll(){this._activeItems.forEach(i=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition();});}withElementContainer(i){i!==this._element&&(this._element=i,this._rootNode=void 0);}_getItemIndexFromPointerPosition(i,e,t){let n=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),a=n?this._activeItems.findIndex(r=>{let s=r.getRootElement();return n===s||s.contains(n)}):-1;return a===-1||!this._sortPredicate(a,i)?-1:a}_getRootNode(){return this._rootNode||(this._rootNode=Zt(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(i,e,t){if(this._activeItems.length===0)return  -1;if(this._activeItems.length===1)return 0;let n=1/0,a=-1;for(let r=0;r<this._activeItems.length;r++){let s=this._activeItems[r];if(s!==i){let{x:h,y:p}=s.getRootElement().getBoundingClientRect(),_=Math.hypot(e-h,t-p);_<n&&(n=_,a=r);}}return a}},xn=.05,Dn=.05,L=(function(o){return o[o.NONE=0]="NONE",o[o.UP=1]="UP",o[o.DOWN=2]="DOWN",o})(L||{}),A=(function(o){return o[o.NONE=0]="NONE",o[o.LEFT=1]="LEFT",o[o.RIGHT=2]="RIGHT",o})(A||{});function Pn(o,i){return new Et(i,o.get(Rt),o.get(Xn$2),o.get(Me),o.get(H))}var Et=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=false;sortingDisabled=false;lockAxis=null;autoScrollDisabled=false;autoScrollStep=2;hasAnchor=false;enterPredicate=()=>true;sortPredicate=()=>true;beforeStarted=new ee$1;entered=new ee$1;exited=new ee$1;dropped=new ee$1;sorted=new ee$1;receivingStarted=new ee$1;receivingStopped=new ee$1;data;_container;_isDragging=false;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=B$1.EMPTY;_verticalScrollDirection=L.NONE;_horizontalScrollDirection=A.NONE;_scrollNode;_stopScrollTimers=new ee$1;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(i,e,t,n,a){this._dragDropRegistry=e,this._ngZone=n,this._viewportRuler=a;let r=this.element=k(i);this._document=t,this.withOrientation("vertical").withElementContainer(r),e.registerDropContainer(this),this._parentPositions=new ot(t);}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this);}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings();}enter(i,e,t,n){this._draggingStarted(),n==null&&this.sortingDisabled&&(n=this._draggables.indexOf(i)),this._sortStrategy.enter(i,e,t,n),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:i,container:this,currentIndex:this.getItemIndex(i)});}exit(i){this._reset(),this.exited.next({item:i,container:this});}drop(i,e,t,n,a,r,s,h){this._reset(),this.dropped.next({item:i,currentIndex:e,previousIndex:t,container:this,previousContainer:n,isPointerOverContainer:a,distance:r,dropPoint:s,event:h});}withItems(i){let e=this._draggables;return this._draggables=i,i.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(n=>n.isDragging()).every(n=>i.indexOf(n)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(i){return this._direction=i,this._sortStrategy instanceof rt&&(this._sortStrategy.direction=i),this}connectedTo(i){return this._siblings=i.slice(),this}withOrientation(i){if(i==="mixed")this._sortStrategy=new Tt(this._document,this._dragDropRegistry);else {let e=new rt(this._dragDropRegistry);e.direction=this._direction,e.orientation=i,this._sortStrategy=e;}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(i){let e=this._container;return this._scrollableElements=i.indexOf(e)===-1?[e,...i]:i.slice(),this}withElementContainer(i){if(i===this._container)return this;k(this.element);let t=this._scrollableElements.indexOf(this._container),n=this._scrollableElements.indexOf(i);return t>-1&&this._scrollableElements.splice(t,1),n>-1&&this._scrollableElements.splice(n,1),this._sortStrategy&&this._sortStrategy.withElementContainer(i),this._cachedShadowRoot=null,this._scrollableElements.unshift(i),this._container=i,this}getScrollableParents(){return this._scrollableElements}getItemIndex(i){return this._isDragging?this._sortStrategy.getItemIndex(i):this._draggables.indexOf(i)}getItemAtIndex(i){return this._isDragging?this._sortStrategy.getItemAtIndex(i):this._draggables[i]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(i,e,t,n){if(this.sortingDisabled||!this._domRect||!hn(this._domRect,xn,e,t))return;let a=this._sortStrategy.sort(i,e,t,n);a&&this.sorted.next({previousIndex:a.previousIndex,currentIndex:a.currentIndex,container:this,item:i});}_startScrollingIfNecessary(i,e){if(this.autoScrollDisabled)return;let t,n=L.NONE,a=A.NONE;if(this._parentPositions.positions.forEach((r,s)=>{s===this._document||!r.clientRect||t||hn(r.clientRect,xn,i,e)&&([n,a]=Jn(s,r.clientRect,this._direction,i,e),(n||a)&&(t=s));}),!n&&!a){let{width:r,height:s}=this._viewportRuler.getViewportSize(),h={width:r,height:s,top:0,right:r,bottom:s,left:0};n=Tn(h,e),a=En(h,i),t=window;}t&&(n!==this._verticalScrollDirection||a!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=n,this._horizontalScrollDirection=a,this._scrollNode=t,(n||a)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling());}_stopScrolling(){this._stopScrollTimers.next();}_draggingStarted(){let i=this._container.style;this.beforeStarted.next(),this._isDragging=true,this._initialScrollSnap=i.msScrollSnapType||i.scrollSnapType||"",i.scrollSnapType=i.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents();}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect;}_reset(){this._isDragging=false;let i=this._container.style;i.scrollSnapType=i.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear();}_startScrollInterval=()=>{this._stopScrolling(),Ah(0,lh).pipe(Qh(this._stopScrollTimers)).subscribe(()=>{let i=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===L.UP?i.scrollBy(0,-e):this._verticalScrollDirection===L.DOWN&&i.scrollBy(0,e),this._horizontalScrollDirection===A.LEFT?i.scrollBy(-e,0):this._horizontalScrollDirection===A.RIGHT&&i.scrollBy(e,0);});};_isOverContainer(i,e){return this._domRect!=null&&wt(this._domRect,i,e)}_getSiblingContainerFromPosition(i,e,t){return this._siblings.find(n=>n._canReceive(i,e,t))}_canReceive(i,e,t){if(!this._domRect||!wt(this._domRect,e,t)||!this.enterPredicate(i,this))return  false;let n=this._getShadowRoot().elementFromPoint(e,t);return n?n===this._container||this._container.contains(n):false}_startReceiving(i,e){let t=this._activeSiblings;!t.has(i)&&e.every(n=>this.enterPredicate(n,this)||this._draggables.indexOf(n)>-1)&&(t.add(i),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:i,receiver:this,items:e}));}_stopReceiving(i){this._activeSiblings.delete(i),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:i,receiver:this});}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(i=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(i);e&&this._sortStrategy.updateOnScroll(e.top,e.left);}else this.isReceiving()&&this._cacheParentPositions();});}_getShadowRoot(){if(!this._cachedShadowRoot){let i=Zt(this._container);this._cachedShadowRoot=i||this._document;}return this._cachedShadowRoot}_notifyReceivingSiblings(){let i=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,i));}};function Tn(o,i){let{top:e,bottom:t,height:n}=o,a=n*Dn;return i>=e-a&&i<=e+a?L.UP:i>=t-a&&i<=t+a?L.DOWN:L.NONE}function En(o,i){let{left:e,right:t,width:n}=o,a=n*Dn;return i>=e-a&&i<=e+a?A.LEFT:i>=t-a&&i<=t+a?A.RIGHT:A.NONE}function Jn(o,i,e,t,n){let a=Tn(i,n),r=En(i,t),s=L.NONE,h=A.NONE;if(a){let p=o.scrollTop;a===L.UP?p>0&&(s=L.UP):o.scrollHeight-p>o.clientHeight&&(s=L.DOWN);}if(r){let p=o.scrollLeft;e==="rtl"?r===A.RIGHT?p<0&&(h=A.RIGHT):o.scrollWidth+p>o.clientWidth&&(h=A.LEFT):r===A.LEFT?p>0&&(h=A.LEFT):o.scrollWidth-p>o.clientWidth&&(h=A.RIGHT);}return [s,h]}var eo=(()=>{class o{_injector=D(ge$1);createDrag(e,t){return Sn(this._injector,e,t)}createDropList(e){return Pn(this._injector,e)}static \u0275fac=function(t){return new(t||o)};static \u0275prov=pr({token:o,factory:o.\u0275fac})}return o})(),yn=new S("CDK_DRAG_PARENT");var to=new S("CdkDragHandle");var Mn=new S("CDK_DRAG_CONFIG"),In=new S("CdkDropList"),On=(()=>{class o{element=D(hr);dropContainer=D(In,{optional:true,skipSelf:true});_ngZone=D(Me);_viewContainerRef=D(Ei);_dir=D(Ss,{optional:true});_changeDetectorRef=D(GL);_selfHandle=D(to,{optional:true,self:true});_parentDrag=D(yn,{optional:true,skipSelf:true});_dragDropRegistry=D(Rt);_destroyed=new ee$1;_handles=new Nn$1([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled;}_disabled=false;constrainPosition;previewClass;previewContainer;scale=1;started=new Be;released=new Be;ended=new Be;entered=new Be;exited=new Be;dropped=new Be;moved=new M(e=>{let t=this._dragRef.moved.pipe(De(n=>({source:this,pointerPosition:n.pointerPosition,event:n.event,delta:n.delta,distance:n.distance}))).subscribe(e);return ()=>{t.unsubscribe();}});_injector=D(ge$1);constructor(){let e=this.dropContainer,t=D(Mn,{optional:true});this._dragRef=Sn(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(Qh(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale;})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef);}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset();}resetToBoundary(){this._dragRef.resetToBoundary();}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e);}ngAfterViewInit(){Oy(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition);},{injector:this._injector});}ngOnChanges(e){let t=e.rootElementSelector,n=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,n&&!n.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition);}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose();});}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t);}_removeHandle(e){let t=this._handles.getValue(),n=t.indexOf(e);n>-1&&(t.splice(n,1),this._handles.next(t));}_setPreviewTemplate(e){this._previewTemplate=e;}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null);}_setPlaceholderTemplate(e){this._placeholderTemplate=e;}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null);}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e);}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):k(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,n=this.dragStartDelay,a=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,r=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof n=="object"&&n?n:Xt(n),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(a).withPreviewTemplate(r).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value);}}),e.beforeStarted.pipe(Xt$1(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let n=this._dragDropRegistry.getDragDirectiveForNode(t);if(n){e.withParent(n._dragRef);break}t=t.parentElement;}});}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck();}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event});}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck();}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex});}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this});}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event});});}_assignDefaults(e){let{lockAxis:t,dragStartDelay:n,constrainPosition:a,previewClass:r,boundaryElement:s,draggingDisabled:h,rootElementSelector:p,previewContainer:_}=e;this.disabled=h??false,this.dragStartDelay=n||0,this.lockAxis=t||null,a&&(this.constrainPosition=a),r&&(this.previewClass=r),s&&(this.boundaryElement=s),p&&(this.rootElementSelector=p),_&&(this.previewContainer=_);}_setupHandlesListener(){this._handles.pipe(Yh(e=>{let t=e.map(n=>n.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t);}),cl(e=>kh(...e.map(t=>t._stateChanges.pipe(zh(t))))),Qh(this._destroyed)).subscribe(e=>{let t=this._dragRef,n=e.element.nativeElement;e.disabled?t.disableHandle(n):t.enableHandle(n);});}static \u0275fac=function(t){return new(t||o)};static \u0275dir=PE({type:o,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,n){t&2&&Cp("cdk-drag-disabled",n.disabled)("cdk-drag-dragging",n._dragRef.isDragging());},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",QL],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",ZL]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[tD([{provide:yn,useExisting:o}]),rm]})}return o})(),Mt=new S("CdkDropListGroup"),Rn=(()=>{class o{_items=new Set;disabled=false;ngOnDestroy(){this._items.clear();}static \u0275fac=function(t){return new(t||o)};static \u0275dir=PE({type:o,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:[2,"cdkDropListGroupDisabled","disabled",QL]},exportAs:["cdkDropListGroup"],features:[tD([{provide:Mt,useExisting:o}])]})}return o})(),An=(()=>{class o{element=D(hr);_changeDetectorRef=D(GL);_scrollDispatcher=D(Z);_dir=D(Ss,{optional:true});_group=D(Mt,{optional:true,skipSelf:true});_latestSortedRefs;_destroyed=new ee$1;_scrollableParentsResolved=false;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=D(nn$1).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e;}_disabled=false;sortingDisabled=false;enterPredicate=()=>true;sortPredicate=()=>true;autoScrollDisabled=false;autoScrollStep;elementContainerSelector=null;hasAnchor=false;dropped=new Be;entered=new Be;exited=new Be;sorted=new Be;_unsortedItems=new Set;constructor(){let e=D(Mn,{optional:true}),t=D(ge$1);this._dropListRef=Pn(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(n,a)=>this.enterPredicate(n.data,a.data),this._dropListRef.sortPredicate=(n,a,r)=>this.sortPredicate(n,a.data,r.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),o._dropLists.push(this),this._group&&this._group._items.add(this);}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef));}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs));}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=o._dropLists.indexOf(this);e>-1&&o._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete();}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(zh(this._dir.value),Qh(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=ot$1(this.connectedTo).map(n=>{if(typeof n=="string"){let a=o._dropLists.find(r=>r.id===n);return a}return n});if(this._group&&this._group._items.forEach(n=>{t.indexOf(n)===-1&&t.push(n);}),!this._scrollableParentsResolved){let n=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(a=>a.getElementRef().nativeElement);this._dropListRef.withScrollableParents(n),this._scrollableParentsResolved=true;}if(this.elementContainerSelector){let n=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(n);}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=Xt(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(n=>n&&n!==this).map(n=>n._dropListRef)).withOrientation(this.orientation);});}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck();}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex});}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck();}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data});}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck();}),kh(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck());}_assignDefaults(e){let{lockAxis:t,draggingDisabled:n,sortingDisabled:a,listAutoScrollDisabled:r,listOrientation:s}=e;this.disabled=n??false,this.sortingDisabled=a??false,this.autoScrollDisabled=r??false,this.orientation=s||"vertical",this.lockAxis=t||null;}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e);}static \u0275fac=function(t){return new(t||o)};static \u0275dir=PE({type:o,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,n){t&2&&(sp("id",n.id),Cp("cdk-drop-list-disabled",n.disabled)("cdk-drop-list-dragging",n._dropListRef.isDragging())("cdk-drop-list-receiving",n._dropListRef.isReceiving()));},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",QL],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",QL],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",QL],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",QL]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[tD([{provide:Mt,useValue:void 0},{provide:In,useExisting:o}])]})}return o})();var Bn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=kE({type:o});static \u0275inj=bl({providers:[eo],imports:[It$1]})}return o})();var lo=["button"],ho=["*"];function mo(o,i){if(o&1&&(oi(0,"div",2),cp(1,"mat-pseudo-checkbox",6),Dc()),o&2){let e=hI();xy(),ap("disabled",e.disabled);}}var Fn=new S("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:false,hideMultipleSelectionIndicator:false,disabledInteractive:false})}),Nn=new S("MatButtonToggleGroup"),po={provide:ht,useExisting:io(()=>At),multi:true},ct=class{source;value;constructor(i,e){this.source=i,this.value=e;}},At=(()=>{class o{_changeDetector=D(GL);_dir=D(Ss,{optional:true});_multiple=false;_disabled=false;_disabledInteractive=false;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck();}_name=D(nn$1).getId("mat-button-toggle-group-");vertical=false;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value);}valueChange=new Be;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck();}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck();}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new Be;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck();}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck();}_hideMultipleSelectionIndicator;constructor(){let e=D(Fn,{optional:true});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??false,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??false;}ngOnInit(){this._selectionModel=new r(this.multiple,void 0,false);}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex();}writeValue(e){this.value=e,this._changeDetector.markForCheck();}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}_keydown(e){if(this.multiple||this.disabled||Hr(e))return;let n=e.target.id,a=this._buttonToggles.toArray().findIndex(s=>s.buttonId===n),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(a)||null;break;case 38:r=this._getNextButton(a,-1);break;case 37:r=this._getNextButton(a,this.dir==="ltr"?-1:1);break;case 40:r=this._getNextButton(a,1);break;case 39:r=this._getNextButton(a,this.dir==="ltr"?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus());}_emitChangeEvent(e){let t=new ct(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t);}_syncButtonToggle(e,t,n=false,a=false){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=false),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):a=true,a?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n);}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?false:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1;}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let a=1;a<=n.length;a++){let r=(e+t*a+n.length)%n.length,s=n.get(r);if(s&&!s.disabled)return s}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=false,this.multiple||(e.tabIndex=-1);});}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=true,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value);}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck());}static \u0275fac=function(t){return new(t||o)};static \u0275dir=PE({type:o,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,n,a){if(t&1&&yp(a,lt,5),t&2){let r;EI(r=II())&&(n._buttonToggles=r);}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,n){t&1&&hp("keydown",function(r){return n._keydown(r)}),t&2&&(sp("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),Cp("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"));},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",QL],value:"value",multiple:[2,"multiple","multiple",QL],disabled:[2,"disabled","disabled",QL],disabledInteractive:[2,"disabledInteractive","disabledInteractive",QL],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",QL],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",QL]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[tD([po,{provide:Nn,useExisting:o}])]})}return o})(),lt=(()=>{class o{_changeDetectorRef=D(GL);_elementRef=D(hr);_focusMonitor=D(Ir);_idGenerator=D(nn$1);_animationDisabled=ct$1();_checked=false;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return `${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e);}_tabIndex;disableRipple=false;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e;}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck());}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e;}_disabled=false;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e;}_disabledInteractive;change=new Be;constructor(){D(q$1).load(nh);let e=D(Nn,{optional:true}),t=D(new Up("tabindex"),{optional:true})||"",n=D(Fn,{optional:true});this._tabIndex=Mo$1(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??false;}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=true:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked));}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,true);}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,false,false,true);}focus(e){this._buttonElement.nativeElement.focus(e);}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?true:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,true),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0;}this.change.emit(new ct(this,this.value));}_markForCheck(){this._changeDetectorRef.markForCheck();}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=xE({type:o,selectors:[["mat-button-toggle"]],viewQuery:function(t,n){if(t&1&&vp(lo,5),t&2){let a;EI(a=II())&&(n._buttonElement=a.first);}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,n){t&1&&hp("focus",function(){return n.focus()}),t&2&&(sp("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),Cp("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",QL],appearance:"appearance",checked:[2,"checked","checked",QL],disabled:[2,"disabled","disabled",QL],disabledInteractive:[2,"disabledInteractive","disabledInteractive",QL]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:ho,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,n){if(t&1&&(mI(),oi(0,"button",1,0),hp("click",function(){return n._onButtonClick()}),tI(2,mo,2,1,"div",2),oi(3,"span",3),yI(4),Dc()(),cp(5,"span",4)(6,"span",5)),t&2){let a=wI(1);ap("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),sp("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),xy(2),nI(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),xy(4),ap("matRippleTrigger",a)("matRippleDisabled",n.disableRipple||n.disabled);}},dependencies:[Ql,p],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2})}return o})(),Ln=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=kE({type:o});static \u0275inj=bl({imports:[hh,lt,qr]})}return o})();var uo=["input"],_o=["label"],bo=["*"],Bt={color:"accent",clickAction:"check-indeterminate",disabledInteractive:false},fo=new S("mat-checkbox-default-options",{providedIn:"root",factory:()=>Bt}),I=(function(o){return o[o.Init=0]="Init",o[o.Checked=1]="Checked",o[o.Unchecked=2]="Unchecked",o[o.Indeterminate=3]="Indeterminate",o})(I||{}),Ft=class{source;checked},Nt=(()=>{class o{_elementRef=D(hr);_changeDetectorRef=D(GL);_ngZone=D(Me);_animationsDisabled=ct$1();_options=D(fo,{optional:true});focus(){this._inputElement.nativeElement.focus();}_createChangeEvent(e){let t=new Ft;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return `${this.id||this._uniqueId}-input`}required=false;labelPosition="after";name=null;change=new Be;indeterminateChange=new Be;value;disableRipple=false;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=I.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){D(q$1).load(nh);let e=D(new Up("tabindex"),{optional:true});this._options=this._options||Bt,this.color=this._options.color||Bt.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=D(nn$1).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??false;}ngOnChanges(e){e.required&&this._validatorChangeFn();}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate);}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck());}_checked=false;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck());}_disabled=false;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(I.Indeterminate):this._transitionCheckState(this.checked?I.Checked:I.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e);}_indeterminate=Mo$1(false);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges();}writeValue(e){this.checked=!!e;}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorChangeFn=e;}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(a);},1e3);});}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked);}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked);}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(false),this.indeterminateChange.emit(false);}),this._checked=!this._checked,this._transitionCheckState(this._checked?I.Checked:I.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate);}_onInteractionEvent(e){e.stopPropagation();}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck();});}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return "";switch(e){case I.Init:if(t===I.Checked)return this._animationClasses.uncheckedToChecked;if(t==I.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case I.Unchecked:return t===I.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case I.Checked:return t===I.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case I.Indeterminate:return t===I.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return ""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e);}_onInputClick(){this._handleInputClick();}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus();}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation();}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=xE({type:o,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&vp(uo,5)(_o,5),t&2){let a;EI(a=II())&&(n._inputElement=a.first),EI(a=II())&&(n._labelElement=a.first);}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(fp("id",n.id),sp("tabindex",null)("aria-label",null)("aria-labelledby",null),RI(n.color?"mat-"+n.color:"mat-accent"),Cp("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",QL],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",QL],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",QL],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:ZL(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",QL],checked:[2,"checked","checked",QL],disabled:[2,"disabled","disabled",QL],indeterminate:[2,"indeterminate","indeterminate",QL]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[tD([{provide:ht,useExisting:io(()=>o),multi:true},{provide:S$1,useExisting:o,multi:true}]),rm],ngContentSelectors:bo,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(mI(),oi(0,"div",3),hp("click",function(r){return n._preventBubblingFromLabel(r)}),oi(1,"div",4,0)(3,"div",5),hp("click",function(){return n._onTouchTargetClick()}),Dc(),oi(4,"input",6,1),hp("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(r){return n._onInteractionEvent(r)}),Dc(),cp(6,"div",7),oi(7,"div",8),cu(),oi(8,"svg",9),cp(9,"path",10),Dc(),lu(),cp(10,"div",11),Dc(),cp(11,"div",12),Dc(),oi(12,"label",13,2),yI(14),Dc()()),t&2){let a=wI(2);ap("labelPosition",n.labelPosition),xy(4),Cp("mdc-checkbox--selected",n.checked),ap("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),sp("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?true:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),xy(7),ap("matRippleTrigger",a)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",true),xy(),ap("for",n.inputId);}},dependencies:[Ql,m],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return o})(),Vn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=kE({type:o});static \u0275inj=bl({imports:[Nt,qr]})}return o})();function Do(o,i){if(o&1&&(oi(0,"mat-option",16),qI(1),Dc()),o&2){let e=i.$implicit;ap("value",e),xy(),xp(e);}}function Po(o,i){if(o&1){let e=fI();oi(0,"mat-form-field",8)(1,"mat-label"),qI(2,"Estado"),Dc(),oi(3,"mat-select",15),Op("ngModelChange",function(n){Yl(e);let a=hI();return ZI(a.status,n)||(a.status=n),Kl(n)}),iI(4,Do,2,2,"mat-option",16,oI),Dc(),Bv(),Dc();}if(o&2){let e=hI();xy(3),Rp("ngModel",e.status),Uv(),xy(),sI(e.STATUSES);}}function To(o,i){if(o&1){let e=fI();oi(0,"button",17),hp("click",function(){Yl(e);let n=hI();return Kl(n.remove())}),qI(1,"Borrar"),Dc(),cp(2,"span",18);}if(o&2){let e=hI();ap("disabled",e.esUnico)("matTooltip",e.esUnico?"No se puede borrar el \xFAnico sprint":"");}}var ye=class o{data=D(w);dialog=D(ee);snack=D(Ra);ref=D(O);input=D($e);sprint=this.input.sprint;isNew=!this.sprint;STATUSES=["active","completed","planned"];esUnico=this.data.getSprints().sprints.length<=1;name=this.sprint?.name??"";goal=this.sprint?.goal??"";capacity=this.sprint?.capacity??0;status=this.sprint?.status??"active";startModel=this.sprint?.start?new Date(this.sprint.start+"T00:00:00"):null;endModel=this.sprint?.end?new Date(this.sprint.end+"T00:00:00"):null;toIso(i){if(!i)return "";let e=t=>String(t).padStart(2,"0");return `${i.getFullYear()}-${e(i.getMonth()+1)}-${e(i.getDate())}`}save(){let i=this.name.trim();if(!i){this.snack.open("El nombre del sprint no puede quedar vac\xEDo.","OK",{duration:3e3});return}let e={name:i,goal:this.goal.trim(),start:this.toIso(this.startModel),end:this.toIso(this.endModel),capacity:Number(this.capacity)||0};this.isNew?(this.data.addSprint(e),this.snack.open("Sprint creado. El anterior se cerr\xF3 y las tareas no aprobadas migraron.","OK",{duration:4e3})):this.data.updateSprint(this.sprint.id,W(q({},e),{status:this.status})),this.ref.close(true);}async remove(){if(!this.sprint||this.esUnico)return;await oh(this.dialog.open(ae,{data:{title:"Borrar sprint",message:`Vas a borrar "${this.sprint.name}".

Las tareas del sprint NO se eliminan.`,confirmText:"Borrar",danger:true}}).afterClosed())&&(this.data.deleteSprint(this.sprint.id),this.ref.close(true));}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=xE({type:o,selectors:[["app-sprint-dialog"]],decls:38,vars:13,consts:[["startP",""],["endP",""],["mat-dialog-title",""],[1,"sprint-form"],["appearance","outline",1,"full"],["matInput","","placeholder","Sprint 3",3,"ngModelChange","ngModel"],["matInput","","rows","2","placeholder","Objetivo del sprint",3,"ngModelChange","ngModel"],[1,"row"],["appearance","outline",1,"grow"],["matInput","",3,"ngModelChange","matDatepicker","ngModel"],["matIconSuffix","",3,"for"],["matInput","","type","number","min","0",3,"ngModelChange","ngModel"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"click"],[3,"ngModelChange","ngModel"],[3,"value"],["mat-button","",1,"danger",3,"click","disabled","matTooltip"],[1,"spacer"]],template:function(e,t){if(e&1){let n=fI();oi(0,"h2",2),qI(1),Dc(),oi(2,"mat-dialog-content",3)(3,"mat-form-field",4)(4,"mat-label"),qI(5,"Nombre"),Dc(),oi(6,"input",5),Op("ngModelChange",function(r){return Yl(n),ZI(t.name,r)||(t.name=r),Kl(r)}),Dc(),Bv(),Dc(),oi(7,"mat-form-field",4)(8,"mat-label"),qI(9,"Objetivo"),Dc(),oi(10,"textarea",6),Op("ngModelChange",function(r){return Yl(n),ZI(t.goal,r)||(t.goal=r),Kl(r)}),Dc(),Bv(),Dc(),oi(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),qI(14,"Inicio"),Dc(),oi(15,"input",9),Op("ngModelChange",function(r){return Yl(n),ZI(t.startModel,r)||(t.startModel=r),Kl(r)}),Dc(),Bv(),cp(16,"mat-datepicker-toggle",10)(17,"mat-datepicker",null,0),Dc(),oi(19,"mat-form-field",8)(20,"mat-label"),qI(21,"Fin"),Dc(),oi(22,"input",9),Op("ngModelChange",function(r){return Yl(n),ZI(t.endModel,r)||(t.endModel=r),Kl(r)}),Dc(),Bv(),cp(23,"mat-datepicker-toggle",10)(24,"mat-datepicker",null,1),Dc()(),oi(26,"div",7)(27,"mat-form-field",8)(28,"mat-label"),qI(29,"Capacidad (pts)"),Dc(),oi(30,"input",11),Op("ngModelChange",function(r){return Yl(n),ZI(t.capacity,r)||(t.capacity=r),Kl(r)}),Dc(),Bv(),Dc(),tI(31,Po,6,1,"mat-form-field",8),Dc()(),oi(32,"mat-dialog-actions",12),tI(33,To,3,2),oi(34,"button",13),qI(35,"Cancelar"),Dc(),oi(36,"button",14),hp("click",function(){return t.save()}),qI(37),Dc()();}if(e&2){let n=wI(18),a=wI(25);xy(),xp(t.isNew?"Nuevo sprint":"Editar "+t.sprint.id),xy(5),Rp("ngModel",t.name),Uv(),xy(4),Rp("ngModel",t.goal),Uv(),xy(5),ap("matDatepicker",n),Rp("ngModel",t.startModel),Uv(),xy(),ap("for",n),xy(6),ap("matDatepicker",a),Rp("ngModel",t.endModel),Uv(),xy(),ap("for",a),xy(7),Rp("ngModel",t.capacity),Uv(),xy(),nI(t.isNew?-1:31),xy(2),nI(t.isNew?-1:33),xy(4),xp(t.isNew?"Crear":"Guardar");}},dependencies:[ta$1,ie,gn$1,Xn$1,Ze,bn$1,Ht,jt,Nt$1,zt,Vt,va,ga,de,it$1,oe,Ot$1,nn,tn,Ft$1,Rt$1,J,co,lo$1,Ja,gi,Yt,mt],styles:[".sprint-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:8px;min-width:420px}.full[_ngcontent-%COMP%]{width:100%}.row[_ngcontent-%COMP%]{display:flex;gap:12px}.row[_ngcontent-%COMP%]   .grow[_ngcontent-%COMP%], .spacer[_ngcontent-%COMP%]{flex:1}.danger[_ngcontent-%COMP%]{color:var(--mat-sys-error)}@media(max-width:520px){.sprint-form[_ngcontent-%COMP%]{min-width:0}.row[_ngcontent-%COMP%]{flex-direction:column;gap:0}}"]})};var dt=(o,i)=>i.id,Eo=(o,i)=>i.status;function Mo(o,i){if(o&1&&(oi(0,"mat-option",3),qI(1),Dc()),o&2){let e=i.$implicit;ap("value",e.id),xy(),Ap("",e.name,"",e.status==="completed"?" \u2713":"");}}function Io(o,i){if(o&1&&(oi(0,"span",22),qI(1),Dc()),o&2){let e=hI();xy(),_c("\u2014 ",e.goal);}}function Oo(o,i){if(o&1&&(oi(0,"span",26),qI(1),Dc(),oi(2,"span",23),qI(3,"\xB7"),Dc()),o&2){let e=hI(),t=hI();xy(),Ap("",t.fmtSprintDate(e.start)," \u2192 ",t.fmtSprintDate(e.end));}}function Ro(o,i){if(o&1&&(oi(0,"div",6)(1,"span",21),qI(2),Dc(),tI(3,Io,2,1,"span",22),oi(4,"span",23),qI(5,"\xB7"),Dc(),tI(6,Oo,4,2),oi(7,"span",24),qI(8),Dc(),oi(9,"span",25),qI(10),Dc()()),o&2){let e=i;xy(2),xp(e.name),xy(),nI(e.goal?3:-1),xy(3),nI(e.start||e.end?6:-1),xy(2),_c("",e.capacity," pts"),xy(),RI("st-"+e.status),xy(),xp(e.status);}}function Ao(o,i){if(o&1&&(oi(0,"mat-button-toggle",3),qI(1),Dc()),o&2){let e=i.$implicit,t=hI();ap("value",e),xy(),xp(e==="all"?"Todas":t.PRIORITY_LABELS[e]);}}function Bo(o,i){o&1&&(oi(0,"mat-hint"),qI(1,"Buscando en el HelpDesk\u2026"),Dc());}function Fo(o,i){o&1&&(oi(0,"mat-hint"),qI(1,"Presiona Enter o \u{1F50D} para buscar"),Dc());}function No(o,i){if(o&1){let e=fI();oi(0,"button",27),hp("click",function(){Yl(e);let n=hI();return Kl(n.clearFilters())}),oi(1,"mat-icon"),qI(2,"filter_alt_off"),Dc(),qI(3," Limpiar filtros "),Dc();}}function Lo(o,i){if(o&1&&(oi(0,"mat-option",3),qI(1),Dc()),o&2){let e=i.$implicit;ap("value",e.id),xy(),xp(e.name);}}function Vo(o,i){o&1&&(oi(0,"mat-option",35),qI(1,"Sin coincidencias"),Dc());}function zo(o,i){if(o&1){let e=fI();oi(0,"mat-chip",38),hp("removed",function(){let n=Yl(e).$implicit,a=hI(3);return Kl(a.removeAssignee(n))}),qI(1),oi(2,"button",39)(3,"mat-icon"),qI(4,"close"),Dc()()();}if(o&2){let e=i.$implicit,t=hI(3),n=t.resolveMember(e);Tp("background",t.pastel(n?.color||"#9aa0a6")),ap("matTooltip",n?.name||e),xy(),_c(" ",t.shortName(n?.name||e)," "),xy(),sp("aria-label","Quitar "+(n?.name||e));}}function Go(o,i){if(o&1&&(oi(0,"mat-chip-set",36),iI(1,zo,5,5,"mat-chip",37,oI),Dc()),o&2){let e=hI(2);xy(),sI(e.selectedAssignees());}}function Ho(o,i){if(o&1){let e=fI();oi(0,"div",14)(1,"span",28),qI(2,"Asignado a:"),Dc(),oi(3,"mat-form-field",29)(4,"mat-label"),qI(5,"Consultores"),Dc(),oi(6,"mat-select",30),hp("selectionChange",function(n){Yl(e);let a=hI();return Kl(a.onAssigneeSelectChange(n.value))})("closed",function(){Yl(e);let n=hI();return Kl(n.buscarAsignado.set(""))}),oi(7,"div",31),hp("click",function(n){return n.stopPropagation()}),oi(8,"div",32)(9,"mat-icon"),qI(10,"search"),Dc(),oi(11,"input",33),hp("input",function(n){Yl(e);let a=hI();return Kl(a.buscarAsignado.set(n.target.value))})("keydown",function(n){return n.stopPropagation()}),Dc()(),oi(12,"button",34),hp("click",function(n){return Yl(e),hI().toggleAllAssignees(),Kl(n.stopPropagation())}),qI(13),Dc()(),iI(14,Lo,2,2,"mat-option",3,dt,false,Vo,2,0,"mat-option",35),Dc()(),tI(17,Go,3,0,"mat-chip-set",36),Dc();}if(o&2){let e=hI();xy(6),ap("value",e.selectedAssignees()),xy(5),ap("value",e.buscarAsignado()),xy(2),_c(" ",e.allAssigneesSelected()?"Quitar todos":"Seleccionar todos"," "),xy(),sI(e.assigneeOptions()),xy(3),nI(e.selectedAssignees().length?17:-1);}}function Uo(o,i){if(o&1&&(oi(0,"mat-option",3),qI(1),Dc()),o&2){let e=i.$implicit;ap("value",e.id),xy(),xp(e.name);}}function Wo(o,i){o&1&&(oi(0,"mat-option",35),qI(1,"Sin coincidencias"),Dc());}function $o(o,i){if(o&1){let e=fI();oi(0,"mat-chip",43),hp("removed",function(){let n=Yl(e).$implicit,a=hI(3);return Kl(a.removeClient(n))}),qI(1),oi(2,"button",39)(3,"mat-icon"),qI(4,"close"),Dc()()();}if(o&2){let e=i.$implicit,t=hI(3);Tp("background",t.pastel(t.clientColorOf(e))),ap("matTooltip",t.clientNameOf(e)),xy(),_c(" ",t.clientNameOf(e)," "),xy(),sp("aria-label","Quitar "+t.clientNameOf(e));}}function jo(o,i){if(o&1&&(oi(0,"mat-chip-set",36),iI(1,$o,5,5,"mat-chip",42,oI),Dc()),o&2){let e=hI(2);xy(),sI(e.selectedClients());}}function qo(o,i){if(o&1){let e=fI();oi(0,"div",15)(1,"span",28),qI(2,"Cliente:"),Dc(),oi(3,"mat-form-field",40)(4,"mat-label"),qI(5,"Clientes"),Dc(),oi(6,"mat-select",30),hp("selectionChange",function(n){Yl(e);let a=hI();return Kl(a.onClientSelectChange(n.value))})("closed",function(){Yl(e);let n=hI();return Kl(n.buscarCliente.set(""))}),oi(7,"div",31),hp("click",function(n){return n.stopPropagation()}),oi(8,"div",32)(9,"mat-icon"),qI(10,"search"),Dc(),oi(11,"input",41),hp("input",function(n){Yl(e);let a=hI();return Kl(a.buscarCliente.set(n.target.value))})("keydown",function(n){return n.stopPropagation()}),Dc()(),oi(12,"button",34),hp("click",function(n){return Yl(e),hI().toggleAllClients(),Kl(n.stopPropagation())}),qI(13),Dc()(),iI(14,Uo,2,2,"mat-option",3,dt,false,Wo,2,0,"mat-option",35),Dc()(),tI(17,jo,3,0,"mat-chip-set",36),Dc();}if(o&2){let e=hI();xy(6),ap("value",e.selectedClients()),xy(5),ap("value",e.buscarCliente()),xy(2),_c(" ",e.allClientsSelected()?"Quitar todos":"Seleccionar todos"," "),xy(),sI(e.clientOptions()),xy(3),nI(e.selectedClients().length?17:-1);}}function Zo(o,i){if(o&1){let e=fI();oi(0,"button",44),hp("click",function(){Yl(e);let n=hI();return Kl(n.clearBoard())}),oi(1,"mat-icon"),qI(2,"delete_sweep"),Dc(),qI(3," Borrar Board "),Dc();}}function Ko(o,i){if(o&1){let e=fI();oi(0,"button",69),hp("click",function(n){Yl(e);let a=hI().$implicit,r=hI(2);return Kl(r.copiarTicket(a.ticket,n))}),oi(1,"mat-icon"),qI(2),Dc()();}if(o&2){let e=hI().$implicit,t=hI(2);ap("matTooltip",t.ticketCopiado()===e.ticket?"Copiado":"Copiar n\xFAmero"),xy(2),xp(t.ticketCopiado()===e.ticket?"check":"content_copy");}}function Qo(o,i){if(o&1&&(oi(0,"span",70)(1,"mat-icon"),qI(2,"low_priority"),Dc(),qI(3),Dc()),o&2){let e=hI().$implicit;Cp("alta",e.hdOrden===1),xy(3),_c("",e.hdOrden," ");}}function Yo(o,i){if(o&1){let e=fI();oi(0,"button",71),hp("click",function(n){Yl(e);let a=hI().$implicit,r=hI(2);return n.stopPropagation(),Kl(r.deleteCard(a))}),oi(1,"mat-icon"),qI(2,"close"),Dc()();}}function Xo(o,i){if(o&1&&(oi(0,"span",60),qI(1),Dc()),o&2){let e=hI().$implicit,t=KI(1);xy(),xp(e.clientName||t?.name);}}function Jo(o,i){if(o&1&&(oi(0,"span",62),qI(1),Dc()),o&2){let e=hI().$implicit;xy(),xp(e.hdEstatus);}}function ea(o,i){if(o&1&&(oi(0,"div",63),qI(1),Dc()),o&2){hI();let e=KI(2);xy(),_c("\u26A0 Pr\xF3ximo a vencer \u2014 ",e.badge);}}function ta(o,i){if(o&1){let e=fI();oi(0,"div",72),hp("click",function(n){return n.stopPropagation()}),cp(1,"mat-progress-bar",73),oi(2,"input",74),hp("change",function(n){Yl(e);let a=hI().$implicit,r=hI(2);return Kl(r.onProgressChange(a,n.target.value))}),Dc()(),oi(3,"button",75),hp("click",function(n){Yl(e);let a=hI().$implicit,r=hI(2);return n.stopPropagation(),Kl(r.toggleWaiting(a))}),qI(4),Dc();}if(o&2){let e=hI().$implicit,t=hI(2);xy(),Tp("--mdc-linear-progress-active-indicator-color",t.progColor(e.progress)),ap("value",e.progress),xy(),ap("value",e.progress);let n=t.waitingDays(e);xy(),Cp("active",n!==null&&n<3)("alert",n!==null&&n>=3),xy(),_c(" ",n!==null&&n>=3?"\u26A0 Notificar al cliente":"\u23F3 Esperando cliente"," ");}}function ia(o,i){if(o&1){let e=fI();oi(0,"div",76),hp("click",function(n){return n.stopPropagation()}),oi(1,"mat-checkbox",77),hp("change",function(n){Yl(e);let a=hI().$implicit,r=hI(2);return Kl(r.onCert(a,n))}),Dc(),oi(2,"span",78),qI(3,"Certificado"),Dc()();}o&2&&(xy(),ap("checked",false));}function na(o,i){if(o&1){let e=fI();oi(0,"div",76),hp("click",function(n){return n.stopPropagation()}),oi(1,"mat-checkbox",79),hp("change",function(n){Yl(e);let a=hI().$implicit,r=hI(2);return Kl(r.onFinalize(a,n))}),qI(2),Dc()();}if(o&2){let e=hI().$implicit;xy(),ap("checked",e.approved)("disabled",!!e.ticket),xy(),_c(" ",e.approved?"Finalizado \u2713":"Finalizado"," ");}}function oa(o,i){if(o&1&&(oi(0,"span",80),qI(1),Dc()),o&2){hI();let e=KI(0);Tp("background",e.color),ap("matTooltip",e.name),xy(),xp(e.id);}}function aa(o,i){o&1&&cp(0,"span",68);}function ra(o,i){if(o&1){let e=fI();Lp(0)(1)(2),oi(3,"mat-card",52),hp("click",function(){let n=Yl(e).$implicit,a=hI(2);return Kl(a.openDetail(n))}),oi(4,"div",53)(5,"span",54),qI(6),Dc(),tI(7,Ko,3,2,"button",55),oi(8,"span",56),qI(9),Dc(),tI(10,Qo,4,3,"span",57),cp(11,"span",58),tI(12,Yo,3,0,"button",59),Dc(),tI(13,Xo,2,1,"span",60),oi(14,"div",61),qI(15),Dc(),tI(16,Jo,2,1,"span",62),tI(17,ea,2,1,"div",63),tI(18,ta,5,9)(19,ia,4,1,"div",64)(20,na,3,3,"div",64),oi(21,"div",65)(22,"span",66)(23,"mat-icon"),qI(24,"event"),Dc(),qI(25),Dc(),tI(26,oa,2,4,"span",67)(27,aa,1,0,"span",68),Dc()();}if(o&2){let e,t=i.$implicit,n=hI(2),a=YI(n.resolveMember(t.assignee));xy();let r=YI(n.clientOf(t.client)),s=n.clientStyle(r);xy();let h=YI(n.dueInfo(t.dueDate,t.status));xy(),Tp("background",s.bg)("color",s.ink)("--accent",s.accent)("--tilt",n.cardTilt(t.id)),Cp("not-mine",!n.canDrag(t))("overdue",h.overdue)("soon",h.soon),ap("cdkDragData",t),xy(3),_c("#",t.ticket||"\u2014"),xy(),nI(t.ticket?7:-1),xy(),RI("prio-"+t.priority),xy(),xp(n.PRIORITY_LABELS[t.priority]),xy(),nI(t.ticket&&t.hdOrden&&t.hdOrden<999?10:-1),xy(2),nI(n.puedeGestionarTodo()?12:-1),xy(),nI(t.clientName||r?13:-1),xy(2),xp(t.title),xy(),nI(t.ticket&&t.hdEstatus?16:-1),xy(),nI(h.soon?17:-1),xy(),nI((e=t.status)==="in_progress"?18:e==="review"?19:e==="done"?20:-1),xy(4),Cp("overdue",h.overdue)("soon",h.soon),xy(3),_c("",h.str||"\u2014"," "),xy(),nI(a?26:27);}}function sa(o,i){o&1&&(oi(0,"div",51)(1,"span"),qI(2,"\u25CB"),Dc(),oi(3,"span"),qI(4,"Sin tareas"),Dc()());}function ca(o,i){if(o&1){let e=fI();oi(0,"section",20)(1,"header",45),cp(2,"span",46),oi(3,"span",47),qI(4),Dc(),oi(5,"span",48),qI(6),Dc()(),oi(7,"div",49),hp("cdkDropListDropped",function(n){let a=Yl(e).$implicit,r=hI();return Kl(r.drop(n,a.status))}),iI(8,ra,28,36,"mat-card",50,dt,false,sa,5,0,"div",51),Dc()();}if(o&2){let e=i.$implicit;xy(),RI("head-"+e.status),xy(),RI("dot-"+e.status),xy(2),xp(e.label),xy(2),xp(e.cards.length),xy(),ap("cdkDropListData",e.cards),xy(),sI(e.cards);}}var zn=class o{data=D(w);auth=D(Bn$1);helpdesk=D(B);dialog=D(ee);snack=D(Ra);syncing=Mo$1(false);constructor(){this.helpdesk.getHdUsers(),this.helpdesk.getClients(),this.helpdesk.getTicketStatuses(),this.data.ensureInit().then(()=>this.syncTicketStatuses());}async syncTicketStatuses(){let i=this.data.sprints().active,e=this.data.getStoriesBySprint(i).filter(t=>t.ticket);e.length&&(this.syncing.set(true),await Promise.all(e.map(async t=>{let n=await this.helpdesk.fetchTicketRaw(t.ticket);if(!n)return;let a=String(n.client_id??"").trim();a&&t.client!==a&&this.data.updateStoryClient(t.id,a);let r=String(n.cliente??"").trim();r&&t.clientName!==r&&this.data.updateStoryClientName(t.id,r);let s=String(n.estado||"");s&&t.hdEstatus!==s&&this.data.updateStoryHdEstatus(t.id,s);let h=parseInt(String(n.priority??""),10);Number.isFinite(h)&&t.hdOrden!==h&&this.data.updateStoryHdOrden(t.id,h);let p=Fi(s);t.status!==p.status&&this.data.updateStoryStatus(t.id,p.status),p.approved!==void 0&&!!t.approved!==p.approved&&(p.approved?this.data.approveStory(t.id):this.data.unapproveStory(t.id)),p.waiting&&!t.waitingClient&&this.data.setWaitingClient(t.id,true);})),this.syncing.set(false));}resolveMember=i=>Ni(i,this.data.team(),this.helpdesk.hdUsers());dueInfo=Pa;progColor=Vi;clientStyle=Ta;pastel=Aa;cardTilt=Oa;STATUS_LABELS=Ri;PRIORITY_LABELS=Li;PRIORITY_FILTERS=["all","alta","media","baja"];priorityFilter=Mo$1("all");activeClients=Mo$1(new Set);activeAssignees=Mo$1(new Set);ticketSearch=Mo$1("");matchedTickets=Mo$1(null);searchingTickets=Mo$1(false);searchedTerm=Mo$1("");searchPending=lD(()=>{let i=this.ticketSearch().trim();return !!i&&i!==this.searchedTerm()});mineOnly=Mo$1(false);puedeGestionarTodo=this.auth.puedeGestionarTodo;puedeBorrarBoard=this.auth.puedeBorrarBoard;get myId(){return String(this.auth.session()?.id||"").trim().toUpperCase()}sprints=lD(()=>this.data.sprints().sprints);activeSprintId=lD(()=>this.data.sprints().active);activeSprint=lD(()=>this.data.getActiveSprint());setSprint(i){this.data.setActiveSprint(i);}openNewSprint(){this.dialog.open(ye,{data:{sprint:null},width:"480px",maxWidth:"95vw"});}openEditSprint(){let i=this.activeSprint();i&&this.dialog.open(ye,{data:{sprint:i},width:"480px",maxWidth:"95vw"});}fmtSprintDate(i){return i?new Date(i+"T00:00:00").toLocaleDateString("es-ES",{day:"2-digit",month:"short",year:"numeric"}):""}clients=lD(()=>this.data.clients());visibleStories=lD(()=>{let i=this.data.sprints().active,e=new Date;e.setDate(e.getDate()-2);let t=e.toISOString().split("T")[0];return this.data.stories().filter(n=>n.sprint===i).filter(n=>!(n.status==="done"&&n.approved&&(n.approvedDate||"")<t))});assigneeChips=lD(()=>[...new Set(this.visibleStories().map(e=>e.assignee).filter(Boolean))].map(e=>this.resolveMember(e)).filter(e=>!!e).sort((e,t)=>(e.name||e.id).localeCompare(t.name||t.id,"es")));clientChips=lD(()=>[...new Set(this.visibleStories().map(e=>e.client).filter(Boolean))].map(e=>{let t=this.clientOf(e);return {id:e,name:t?.name||e,color:t?.color||nt(e)}}).sort((e,t)=>e.name.localeCompare(t.name,"es")));buscarAsignado=Mo$1("");buscarCliente=Mo$1("");filtraOpc(i,e){let t=e.trim().toLowerCase();return t?i.filter(n=>n.name.toLowerCase().includes(t)||n.id.toLowerCase().includes(t)):i}assigneeOptions=lD(()=>this.filtraOpc(this.assigneeChips(),this.buscarAsignado()));clientOptions=lD(()=>this.filtraOpc(this.clientChips(),this.buscarCliente()));columns=lD(()=>{let i=this.priorityFilter(),e=this.activeClients(),t=this.activeAssignees(),n=this.searchedTerm().trim(),a=/^\d+$/.test(n),r=this.matchedTickets(),s=this.mineOnly(),h=this.myId,p=this.visibleStories().filter(_=>{if(s&&String(_.assignee||"").trim().toUpperCase()!==h||i!=="all"&&_.priority!==i||e.size>0&&!(_.client&&e.has(_.client))||t.size>0&&!(!_.assignee||t.has(_.assignee)))return  false;if(n){if(a){if(!(_.ticket&&String(_.ticket).includes(n)))return  false}else if(!(_.ticket&&r?.has(String(_.ticket))))return  false}return  true});return Pi.map(_=>({status:_,label:Ri[_],cards:p.filter(O=>O.status===_)}))});get workDeps(){return {data:this.data,auth:this.auth,dialog:this.dialog,snack:this.snack}}setPriority(i){this.priorityFilter.set(i),this.activeAssignees.set(new Set);}toggleMine(){let i=!this.mineOnly();this.mineOnly.set(i),i&&this.activeAssignees.set(new Set);}hasFilters=lD(()=>this.priorityFilter()!=="all"||this.mineOnly()||this.selectedAssignees().length>0||this.selectedClients().length>0||!!this.ticketSearch().trim());clearFilters(){this.priorityFilter.set("all"),this.mineOnly.set(false),this.activeAssignees.set(new Set),this.activeClients.set(new Set),this.ticketSearch.set(""),this.matchedTickets.set(null),this.searchingTickets.set(false),this.searchedTerm.set(""),this.buscarAsignado.set(""),this.buscarCliente.set("");}onTicketSearchInput(i){this.ticketSearch.set(i),i.trim()||(this.matchedTickets.set(null),this.searchingTickets.set(false),this.searchedTerm.set(""));}async submitTicketSearch(){let i=this.ticketSearch().trim();if(!i||/^\d+$/.test(i)){this.matchedTickets.set(null),this.searchingTickets.set(false),this.searchedTerm.set(i);return}this.searchingTickets.set(true),this.matchedTickets.set(null),this.searchedTerm.set(i);let e=await this.helpdesk.searchTicketNumbers(i);this.ticketSearch().trim()===i&&(this.matchedTickets.set(e),this.searchingTickets.set(false));}ticketCopiado=Mo$1(null);copiarTicket(i,e){e.stopPropagation(),navigator.clipboard?.writeText(String(i)).then(()=>{this.ticketCopiado.set(i),setTimeout(()=>this.ticketCopiado.set(null),1500);}).catch(()=>{});}selectedAssignees=lD(()=>[...this.activeAssignees()]);onAssigneeSelectChange(i){this.activeAssignees.set(new Set(i));}allAssigneesSelected=lD(()=>this.assigneeChips().length>0&&this.selectedAssignees().length===this.assigneeChips().length);toggleAllAssignees(){this.allAssigneesSelected()?this.activeAssignees.set(new Set):this.activeAssignees.set(new Set(this.assigneeChips().map(i=>i.id)));}shortName=Ia;removeAssignee(i){let e=new Set(this.activeAssignees());e.delete(i),this.activeAssignees.set(e);}clearAssignees(){this.activeAssignees.set(new Set);}selectedClients=lD(()=>[...this.activeClients()]);onClientSelectChange(i){this.activeClients.set(new Set(i));}allClientsSelected=lD(()=>this.clientChips().length>0&&this.selectedClients().length===this.clientChips().length);toggleAllClients(){this.allClientsSelected()?this.activeClients.set(new Set):this.activeClients.set(new Set(this.clientChips().map(i=>i.id)));}removeClient(i){let e=new Set(this.activeClients());e.delete(i),this.activeClients.set(e);}clientNameOf(i){return this.clientChips().find(e=>e.id===i)?.name||i}clientColorOf(i){return this.clientChips().find(e=>e.id===i)?.color||"#9aa0a6"}clientOf(i){if(!i)return;let e=this.data.getClient(i);if(e)return {id:e.id,name:e.name,color:e.color};let t=this.helpdesk.clients().find(n=>n.id===i);return t?{id:t.id,name:t.name}:{id:i,name:i}}puedeOperar(i){if(this.puedeGestionarTodo())return  true;let e=String(i.assignee||"").trim().toUpperCase();return !!e&&e===this.myId}canDrag(i){return this.puedeOperar(i)}avisoSinPermiso(){this.snack.open("No tienes permisos para modificar esta tarea. Solo el asignado, un supervisor o el Helpdesk pueden.","OK",{duration:4e3});}async drop(i,e){let t=i.item.data;if(!(!t||t.status===e)){if(!this.puedeOperar(t)){this.avisoSinPermiso();return}if(e==="todo"&&t.ticket){this.snack.open("Una tarea con ticket no puede volver a To Do.","OK",{duration:3e3});return}if(t.status==="todo"&&e==="in_progress"){if(!await Wi(t,this.workDeps))return}else if(!await oh(this.dialog.open(ae,{data:{title:"Mover tarea",message:`\xBFMover "${t.title}" a "${Ri[e]}"?`,confirmText:"Mover"}}).afterClosed()))return;this.data.updateStoryStatus(t.id,e),this.pushHdEstado(t,Bi[e]);}}pushHdEstado(i,e){!i.ticket||!e||this.helpdesk.setTicketStatus(i.ticket,e).then(t=>{t?this.data.updateStoryHdEstatus(i.id,e):this.snack.open(`No se pudo actualizar el estado del ticket #${i.ticket} en el Helpdesk.`,"OK",{duration:4e3});});}openDetail(i){this.dialog.open($i,{data:{story:i},width:"560px",maxWidth:"95vw"});}openNew(){this.dialog.open($i,{data:{story:null},width:"560px",maxWidth:"95vw"});}onProgressChange(i,e){this.data.updateStoryProgress(i.id,Hi(parseInt(e,10)||0));}waitingDays(i){return !i.waitingClient||!i.waitingDate?null:Math.floor((Date.now()-new Date(i.waitingDate+"T00:00:00").getTime())/864e5)}toggleWaiting(i){let e=!i.waitingClient;this.data.setWaitingClient(i.id,e),e&&this.pushHdEstado(i,Ea);}async onCert(i,e){if(!e.checked)return;if(!this.puedeOperar(i)){e.source.checked=false,this.avisoSinPermiso();return}if(!await oh(this.dialog.open(ae,{data:{title:"Certificar tarea",message:`\xBFMarcar "${i.title}" como certificada y moverla a Finalizado?`,confirmText:"Certificar"}}).afterClosed())){e.source.checked=false;return}this.data.updateStoryStatus(i.id,"done"),this.pushHdEstado(i,Bi.done);}async onFinalize(i,e){if(i.ticket)return;if(!this.puedeOperar(i)){e.source.checked=!!i.approved,this.avisoSinPermiso();return}if(!e.checked){this.data.unapproveStory(i.id);return}if(!await oh(this.dialog.open(ae,{data:{title:"Finalizar tarea",message:`\xBFMarcar "${i.title}" como finalizada?`,confirmText:"Finalizar"}}).afterClosed())){e.source.checked=false;return}this.data.approveStory(i.id);}async deleteCard(i){await oh(this.dialog.open(ae,{data:{title:"Eliminar tarea",message:`Vas a eliminar la tarea:

"${i.title}"

Esta acci\xF3n NO se puede deshacer.`,confirmText:"Eliminar",danger:true,requireWord:"BORRAR"}}).afterClosed())&&this.data.deleteStory(i.id);}async clearBoard(){let i=this.data.sprints().active,e=this.data.getStoriesBySprint(i).map(n=>n.id);if(!e.length){this.snack.open("No hay tareas en el sprint.","OK",{duration:3e3});return}await oh(this.dialog.open(ae,{data:{title:"Borrar board",message:`Vas a eliminar ${e.length} tarea(s) del sprint activo.

Esta acci\xF3n NO se puede deshacer.`,confirmText:"Borrar todo",danger:true,requireWord:"BORRAR"}}).afterClosed())&&e.forEach(n=>this.data.deleteStory(n));}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=xE({type:o,selectors:[["app-board"]],decls:43,vars:13,consts:[[1,"sprint-bar"],["appearance","outline","subscriptSizing","dynamic",1,"sprint-select"],[3,"selectionChange","value"],[3,"value"],["mat-icon-button","","matTooltip","Editar sprint actual",3,"click","disabled"],["mat-icon-button","","matTooltip","Nuevo sprint",3,"click"],[1,"sprint-banner"],[1,"board-toolbar"],["hideSingleSelectionIndicator","","aria-label","Filtrar por prioridad",1,"prio-filter",3,"change","value"],["type","button","mat-stroked-button","","matTooltip","Mostrar solo mis tareas",1,"mine-toggle",3,"click"],["appearance","outline","subscriptSizing","dynamic",1,"ticket-search"],["matInput","","placeholder","N\xB0 o palabra\u2026",3,"input","keydown.enter","value"],["matSuffix","","mat-icon-button","","aria-label","Buscar",3,"click"],["mat-stroked-button","","matTooltip","Quitar todos los filtros",1,"clear-filters"],[1,"assignee-filter"],[1,"client-filter"],[1,"spacer"],["mat-flat-button","","color","primary",3,"click"],["mat-stroked-button","",1,"danger"],["cdkDropListGroup","",1,"kanban"],[1,"kanban-col"],[1,"sb-name"],[1,"sb-goal"],[1,"sb-sep"],[1,"sb-cap"],[1,"sb-status"],[1,"sb-dates"],["mat-stroked-button","","matTooltip","Quitar todos los filtros",1,"clear-filters",3,"click"],[1,"filter-label"],["appearance","outline","subscriptSizing","dynamic",1,"assignee-select"],["multiple","",3,"selectionChange","closed","value"],[1,"sel-head",3,"click"],[1,"sel-head-search"],["placeholder","Buscar consultor\u2026",3,"input","keydown","value"],["type","button",1,"sel-head-all",3,"click"],["disabled",""],[1,"assignee-chips"],[1,"achip",3,"background","matTooltip"],[1,"achip",3,"removed","matTooltip"],["matChipRemove",""],["appearance","outline","subscriptSizing","dynamic",1,"client-select"],["placeholder","Buscar cliente\u2026",3,"input","keydown","value"],[1,"achip","cchip",3,"background","matTooltip"],[1,"achip","cchip",3,"removed","matTooltip"],["mat-stroked-button","",1,"danger",3,"click"],[1,"col-header"],[1,"col-dot"],[1,"col-title"],[1,"col-count"],["cdkDropList","",1,"col-cards",3,"cdkDropListDropped","cdkDropListData"],["cdkDrag","",1,"story-card",3,"not-mine","overdue","soon","background","color","--accent","--tilt","cdkDragData"],[1,"empty-col"],["cdkDrag","",1,"story-card",3,"click","cdkDragData"],[1,"card-top"],[1,"card-ticket"],["aria-label","Copiar n\xFAmero de ticket",1,"card-copy",3,"matTooltip"],[1,"prio-badge"],["matTooltip","Orden / prioridad del ticket",1,"orden-badge",3,"alta"],[1,"grow"],["mat-icon-button","","matTooltip","Eliminar tarea",1,"del-btn"],[1,"client-name"],[1,"card-title"],[1,"hd-estatus"],[1,"soon-badge"],[1,"card-check"],[1,"card-bottom"],[1,"card-due"],[1,"avatar",3,"background","matTooltip"],["matTooltip","Sin asignar",1,"avatar","unassigned"],["aria-label","Copiar n\xFAmero de ticket",1,"card-copy",3,"click","matTooltip"],["matTooltip","Orden / prioridad del ticket",1,"orden-badge"],["mat-icon-button","","matTooltip","Eliminar tarea",1,"del-btn",3,"click"],[1,"prog",3,"click"],["mode","determinate",3,"value"],["type","number","min","0","max","100","step","5",3,"change","value"],[1,"wait-btn",3,"click"],[1,"card-check",3,"click"],["aria-label","Certificado",3,"change","checked"],[1,"check-text"],[3,"change","checked","disabled"],[1,"avatar",3,"matTooltip"]],template:function(e,t){if(e&1&&(oi(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),qI(3,"Sprint"),Dc(),oi(4,"mat-select",2),hp("selectionChange",function(a){return t.setSprint(a.value)}),iI(5,Mo,2,3,"mat-option",3,dt),Dc()(),oi(7,"button",4),hp("click",function(){return t.openEditSprint()}),oi(8,"mat-icon"),qI(9,"edit"),Dc()(),oi(10,"button",5),hp("click",function(){return t.openNewSprint()}),oi(11,"mat-icon"),qI(12,"add"),Dc()(),tI(13,Ro,11,7,"div",6),Dc(),oi(14,"div",7)(15,"mat-button-toggle-group",8),hp("change",function(a){return t.setPriority(a.value)}),iI(16,Ao,2,2,"mat-button-toggle",3,oI),Dc(),oi(18,"button",9),hp("click",function(){return t.toggleMine()}),oi(19,"mat-icon"),qI(20,"person"),Dc(),qI(21," Asignados a m\xED "),Dc(),oi(22,"mat-form-field",10)(23,"mat-label"),qI(24,"Buscar (N\xB0 o palabra)"),Dc(),oi(25,"input",11),hp("input",function(a){return t.onTicketSearchInput(a.target.value)})("keydown.enter",function(){return t.submitTicketSearch()}),Dc(),oi(26,"button",12),hp("click",function(){return t.submitTicketSearch()}),oi(27,"mat-icon"),qI(28,"search"),Dc()(),tI(29,Bo,2,0,"mat-hint")(30,Fo,2,0,"mat-hint"),Dc(),tI(31,No,4,0,"button",13),tI(32,Ho,18,5,"div",14),tI(33,qo,18,5,"div",15),cp(34,"span",16),oi(35,"button",17),hp("click",function(){return t.openNew()}),oi(36,"mat-icon"),qI(37,"add"),Dc(),qI(38," Tarea "),Dc(),tI(39,Zo,4,0,"button",18),Dc(),oi(40,"div",19),iI(41,ca,11,8,"section",20,Eo),Dc()),e&2){let n;xy(4),ap("value",t.activeSprintId()),xy(),sI(t.sprints()),xy(2),ap("disabled",!t.activeSprint()),xy(6),nI((n=t.activeSprint())?13:-1,n),xy(2),ap("value",t.priorityFilter()),xy(),sI(t.PRIORITY_FILTERS),xy(2),Cp("active",t.mineOnly()),sp("aria-pressed",t.mineOnly()),xy(7),ap("value",t.ticketSearch()),xy(4),nI(t.searchingTickets()?29:t.searchPending()?30:-1),xy(2),nI(t.hasFilters()?31:-1),xy(),nI(t.assigneeChips().length?32:-1),xy(),nI(t.clientChips().length?33:-1),xy(6),nI(t.puedeBorrarBoard()?39:-1),xy(2),sI(t.columns());}},dependencies:[Bn,An,Rn,On,_,I$1,va,ga,An$1,Ln,At,lt,Di,it,fa,Mi,de,it$1,oe,re,Ot$1,nn,tn,Ft$1,Rt$1,J,Vn,Nt,yi,vi,Pa$1,Oa$1,Yt,mt],styles:['[_nghost-%COMP%]{display:block;padding:16px;min-height:100%;box-sizing:border-box;background-color:#efeadf;background-image:linear-gradient(rgba(43,43,58,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(43,43,58,.04) 1px,transparent 1px);background-size:24px 24px}.sprint-bar[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px;padding:8px 12px;background:#ffffffbf;border:1px solid rgba(43,43,58,.08);border-radius:12px;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.sprint-bar[_ngcontent-%COMP%]   .sprint-select[_ngcontent-%COMP%]{width:180px}.sprint-banner[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-left:8px;font-size:13px;color:#2b2b3a}.sprint-banner[_ngcontent-%COMP%]   .sb-name[_ngcontent-%COMP%]{font-weight:700}.sprint-banner[_ngcontent-%COMP%]   .sb-goal[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}.sprint-banner[_ngcontent-%COMP%]   .sb-sep[_ngcontent-%COMP%]{color:var(--mat-sys-outline)}.sprint-banner[_ngcontent-%COMP%]   .sb-dates[_ngcontent-%COMP%], .sprint-banner[_ngcontent-%COMP%]   .sb-cap[_ngcontent-%COMP%]{font-size:12px;color:var(--mat-sys-on-surface-variant)}.sprint-banner[_ngcontent-%COMP%]   .sb-status[_ngcontent-%COMP%]{font-size:10px;font-weight:700;text-transform:uppercase;padding:1px 8px;border-radius:9px;color:#fff}.sprint-banner[_ngcontent-%COMP%]   .sb-status.st-active[_ngcontent-%COMP%]{background:#27ae60}.sprint-banner[_ngcontent-%COMP%]   .sb-status.st-completed[_ngcontent-%COMP%]{background:#8a8a9a}.sprint-banner[_ngcontent-%COMP%]   .sb-status.st-planned[_ngcontent-%COMP%]{background:var(--brand)}.board-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:18px;padding:10px 12px;background:#ffffffbf;border:1px solid rgba(43,43,58,.08);border-radius:12px;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.board-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}.board-toolbar[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%]{color:var(--mat-sys-error)}.board-toolbar[_ngcontent-%COMP%]   .clear-filters[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:2px}.board-toolbar[_ngcontent-%COMP%]   .mine-toggle[_ngcontent-%COMP%]{--mat-icon-size: 18px}.board-toolbar[_ngcontent-%COMP%]   .mine-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:2px}.board-toolbar[_ngcontent-%COMP%]   .mine-toggle.active[_ngcontent-%COMP%]{background:var(--brand, #048abf);color:#fff;border-color:var(--brand, #048abf)}.assignee-filter[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.assignee-filter[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%]{font-size:12px;color:var(--mat-sys-on-surface-variant)}.assignee-select[_ngcontent-%COMP%]{width:200px}.assignee-chips[_ngcontent-%COMP%]{display:flex}.achip[_ngcontent-%COMP%]{font-size:11.5px;font-weight:600;color:#3a3a4a;min-height:26px}.achip[_ngcontent-%COMP%]   button[matChipRemove][_ngcontent-%COMP%]{color:#3a3a4a;opacity:.7}.achip[_ngcontent-%COMP%]   button[matChipRemove][_ngcontent-%COMP%]:hover{opacity:1}.achip[_ngcontent-%COMP%]   button[matChipRemove][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.client-filter[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.client-select[_ngcontent-%COMP%]{width:200px}.ticket-search[_ngcontent-%COMP%]{width:150px}.cchip[_ngcontent-%COMP%]{max-width:200px}.cchip[_ngcontent-%COMP%]     .mdc-evolution-chip__text-label{overflow:hidden;text-overflow:ellipsis}.kanban[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(220px,1fr));gap:16px;align-items:start}.kanban-col[_ngcontent-%COMP%]{background:#fff6;border:1px solid rgba(43,43,58,.06);border-radius:12px;padding:10px;min-height:140px}.col-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:2px 4px 8px;margin-bottom:6px;border-bottom:2px solid var(--mat-sys-outline-variant)}.col-header[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%]{font-size:13px;font-weight:800;letter-spacing:.03em;text-transform:uppercase;color:#2b2b3a}.col-header[_ngcontent-%COMP%]   .col-count[_ngcontent-%COMP%]{margin-left:auto;font-size:12px;font-weight:700;color:#2b2b3a;background:#fff;border:1px solid rgba(43,43,58,.12);border-radius:10px;padding:1px 8px}.col-header.head-todo[_ngcontent-%COMP%]{border-bottom-color:#8a8a9a}.col-header.head-in_progress[_ngcontent-%COMP%]{border-bottom-color:var(--brand)}.col-header.head-review[_ngcontent-%COMP%]{border-bottom-color:var(--accent)}.col-header.head-done[_ngcontent-%COMP%]{border-bottom-color:#27ae60}.col-dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:50%}.col-dot.dot-todo[_ngcontent-%COMP%]{background:#8a8a9a}.col-dot.dot-in_progress[_ngcontent-%COMP%]{background:var(--brand)}.col-dot.dot-review[_ngcontent-%COMP%]{background:var(--accent)}.col-dot.dot-done[_ngcontent-%COMP%]{background:#27ae60}.col-cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px;min-height:60px;padding:4px 2px}.empty-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px;padding:24px 0;color:#2b2b3a59;font-size:12px}.story-card[_ngcontent-%COMP%]{--shadow: 0 4px 10px rgba(43, 43, 58, .16), 0 1px 2px rgba(43, 43, 58, .1);position:relative;padding:11px 12px 10px;border:none;border-top:3px solid var(--accent);border-radius:3px;box-shadow:var(--shadow);cursor:pointer;-webkit-user-select:none;user-select:none;transform:rotate(var(--tilt, 0deg));transition:transform .16s ease,box-shadow .16s ease}.story-card[_ngcontent-%COMP%]:hover{transform:rotate(0) translateY(-3px) scale(1.015);box-shadow:0 10px 22px #2b2b3a38,0 2px 4px #2b2b3a1f;z-index:2}.story-card.not-mine[_ngcontent-%COMP%]{cursor:default;filter:saturate(.85)}.story-card.overdue[_ngcontent-%COMP%]{box-shadow:var(--shadow),0 0 0 2px #e74c3c}.story-card.soon[_ngcontent-%COMP%]{box-shadow:var(--shadow),0 0 0 2px #f29e3b}.story-card.cdk-drag-dragging[_ngcontent-%COMP%]{transform:rotate(0);box-shadow:0 14px 30px #2b2b3a47}.card-top[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:4px}.card-top[_ngcontent-%COMP%]   .grow[_ngcontent-%COMP%]{flex:1}.card-top[_ngcontent-%COMP%]   .card-ticket[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:12px;font-weight:700;color:#2b2b3a}.card-top[_ngcontent-%COMP%]   .card-copy[_ngcontent-%COMP%]{flex:none;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;margin-left:-4px;padding:0;border:none;background:transparent;color:#6d6d75;cursor:pointer;border-radius:50%}.card-top[_ngcontent-%COMP%]   .card-copy[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.card-top[_ngcontent-%COMP%]   .card-copy[_ngcontent-%COMP%]:hover{background:#00000014;color:#2b2b3a}.card-top[_ngcontent-%COMP%]   .del-btn[_ngcontent-%COMP%]{width:24px;height:24px;line-height:24px;color:#2b2b3a8c}.card-top[_ngcontent-%COMP%]   .del-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.prio-badge[_ngcontent-%COMP%]{font-size:10px;font-weight:700;letter-spacing:.02em;text-transform:uppercase;padding:1px 7px;border-radius:9px;color:#fff}.prio-badge.prio-alta[_ngcontent-%COMP%]{background:#e74c3c}.prio-badge.prio-media[_ngcontent-%COMP%]{background:#f2811d}.prio-badge.prio-baja[_ngcontent-%COMP%]{background:#2b2b3a73}.orden-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:2px;font-size:10px;font-weight:700;padding:1px 7px 1px 4px;border-radius:9px;background:#ffffffb3;color:#34506b}.orden-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:12px;width:12px;height:12px}.orden-badge.alta[_ngcontent-%COMP%]{background:#fde2e0;color:#b3261e}.client-name[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;color:#2b2b3a;margin-bottom:4px}.client-name[_ngcontent-%COMP%]:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--accent)}.card-title[_ngcontent-%COMP%]{font-size:13px;line-height:1.35;color:#2b2b3a;margin-bottom:8px}.soon-badge[_ngcontent-%COMP%]{font-size:11px;font-weight:600;color:#b5560e;margin-bottom:8px}.hd-estatus[_ngcontent-%COMP%]{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.02em;text-transform:uppercase;color:#2b2b3a;background:#ffffffa6;border:1px solid var(--accent);border-radius:9px;padding:1px 8px;margin-bottom:8px}.prog[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.prog[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{flex:1;border-radius:4px}.prog[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:48px;padding:3px 5px;border:1px solid rgba(43,43,58,.2);border-radius:5px;background:#ffffffb3;color:#2b2b3a;font:inherit;font-size:12px;text-align:right}.wait-btn[_ngcontent-%COMP%]{width:100%;border:1px solid rgba(43,43,58,.18);background:#ffffff8c;color:#2b2b3a;border-radius:6px;padding:5px 8px;font-size:12px;cursor:pointer;margin-bottom:8px}.wait-btn.active[_ngcontent-%COMP%]{background:#fef5e7;border-color:#f29e3b;color:#b9770e}.wait-btn.alert[_ngcontent-%COMP%]{background:#fdedec;border-color:#e74c3c;color:#c0392b;font-weight:600;animation:_ngcontent-%COMP%_pulse 1.4s ease-in-out infinite}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1}50%{opacity:.55}}.card-check[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;margin-bottom:6px;font-size:13px;color:#2b2b3a}.check-text[_ngcontent-%COMP%]{cursor:default}.card-bottom[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:4px}.card-due[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:3px;font-size:11px;color:#2b2b3a99}.card-due[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.card-due.overdue[_ngcontent-%COMP%]{color:#c0392b;font-weight:700}.card-due.soon[_ngcontent-%COMP%]{color:#b5560e}.avatar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-width:26px;height:22px;padding:0 8px;border-radius:11px;font-family:JetBrains Mono,monospace;font-size:10px;font-weight:700;letter-spacing:.02em;color:#fff;box-shadow:0 0 0 2px #fff9}.avatar.unassigned[_ngcontent-%COMP%]{width:26px;height:26px;padding:0;background:transparent;border:1.5px dashed rgba(43,43,58,.4);box-shadow:none}.cdk-drag-preview[_ngcontent-%COMP%]{border-radius:3px;box-shadow:0 14px 30px #2b2b3a4d}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:.3}.col-cards.cdk-drop-list-dragging[_ngcontent-%COMP%]   .story-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .2s cubic-bezier(0,0,.2,1)}@media(max-width:1024px){.kanban[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.kanban[_ngcontent-%COMP%]{grid-template-columns:1fr}.client-select[_ngcontent-%COMP%]{width:100%}}']})};export{zn as Board};