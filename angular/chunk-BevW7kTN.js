import {D,B as Bn,M as Mo$1,l as lD,aG as oh,x as xE,aH as J,o as oi,q as qI,a as Dc,h as hp,aI as iI,t as tI,r as cp,c as xy,d as ap,aJ as sI,n as nI,L as Cp,a7 as sp,aK as W,aL as q,ad as fI,O as Op,ae as Yl,Z as ZI,af as Kl,b as Bv,aM as wI,f as xp,R as Rp,U as Uv,z as kE,A as bl,E as hr,ax as GL,aA as Ss,ag as S,au as ee,aN as nn$1,av as Be,ao as ge$1,aC as zh,Q as Qh,aO as ot$1,aa as Xt,ap as kh,a9 as PE,aP as QL,a4 as tD,ah as Me,aQ as Ei$1,aR as Nn,y as M,g as De,j as Oy,aS as k,az as Xt$1,aT as Yh,aU as cl,aV as rm,aW as ZL,a0 as hh,C as qr,ay as Hr,S as yp,T as EI,V as II,ar as Ir,ai as ct$1,ak as q$1,al as nh,aX as Up,aY as Ql,aZ as p,G as mI,J as yI,a8 as vp,a_ as m,a$ as cu,b0 as lu,b1 as io,b2 as fp,K as RI,_ as _c,e as hI,b3 as oI,b4 as pr,X as Xn$1,b5 as lr,as as Lv,aj as B,b6 as Ah,b7 as Zt,b8 as P,b9 as Pe,ba as Le,ab as Tp,bb as lh,bc as Ap,bd as Lp,be as YI,bf as KI}from'./main-WN7QF7UL.js';import {_,I as I$1}from'./chunk-BAvqFjOE.js';import {F as Fi$1,N as Ni$1,O as Oa,V as Vi$1,A as Aa,E as Ea,T as Ta,R as Ri$1,L as Li$1,n as nt,P as Pi$1,I as Ia,W as Wi$1,a as ae,B as Bi$1,$ as $i$1,H as Hi,D as Da,b as Di$1,i as it,_ as _a,M as Mi$1}from'./chunk-CVb6n-b1.js';import {d as dt$1,B as Ba,L as La,m as ms,c as cs,p as pn,v as vi$2}from'./chunk-StwxI6m-.js';import {v as vt,G as Gi,O as Oe,N as N$1,u as ue,_ as _i$1,m as mi$1,p as pi$1,f as fi$1,a as ui$1}from'./chunk-CkA_AemX.js';import {Q as Qt}from'./chunk-DwIKZHGp.js';import {F as Ft$1,R as Rt$1,r}from'./chunk-DKjcil8I.js';import {d as de,i as it$1,o as oe,O as Ot$1,n as nn,t as tn}from'./chunk-VX5BO4ay.js';import {y as yi$1,v as vi$1,I as It$1,Z,H}from'./chunk-BiH6ldFq.js';import {v as va,g as ga,A as An,t as ta$1,i as ie,a as gn,X as Xn,Z as Ze,b as bn,h as ht,S as S$1}from'./chunk-c45tCFht.js';import {w}from'./chunk-CcMAgeUV.js';function St(o){let n=o.cloneNode(true),e=n.querySelectorAll("[id]"),t=o.nodeName.toLowerCase();n.removeAttribute("id");for(let i=0;i<e.length;i++)e[i].removeAttribute("id");return t==="canvas"?li(o,n):(t==="input"||t==="select"||t==="textarea")&&ci(o,n),si("canvas",o,n,li),si("input, textarea, select",o,n,ci),n}function si(o,n,e,t){let i=n.querySelectorAll(o);if(i.length){let a=e.querySelectorAll(o);for(let r=0;r<i.length;r++)t(i[r],a[r]);}}var Ui=0;function ci(o,n){n.type!=="file"&&(n.value=o.value),n.type==="radio"&&n.name&&(n.name=`mat-clone-${n.name}-${Ui++}`);}function li(o,n){let e=n.getContext("2d");if(e)try{e.drawImage(o,0,0);}catch{}}function Mt(o){let n=o.getBoundingClientRect();return {top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.width,height:n.height,x:n.x,y:n.y}}function wt(o,n,e){let{top:t,bottom:i,left:a,right:r}=o;return e>=t&&e<=i&&n>=a&&n<=r}function Wi(o,n){let e=n.left<o.left,t=n.left+n.width>o.right,i=n.top<o.top,a=n.top+n.height>o.bottom;return e||t||i||a}function ke(o,n,e){o.top+=n,o.bottom=o.top+o.height,o.left+=e,o.right=o.left+o.width;}function di(o,n,e,t){let{top:i,right:a,bottom:r,left:s,width:h,height:p}=o,f=h*n,A=p*n;return t>i-A&&t<r+A&&e>s-f&&e<a+f}var ot=class{_document;positions=new Map;constructor(n){this._document=n;}clear(){this.positions.clear();}cache(n){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),n.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:Mt(e)});});}handleScroll(n){let e=P(n),t=this.positions.get(e);if(!t)return null;let i=t.scrollPosition,a,r;if(e===this._document){let p=this.getViewportScrollPosition();a=p.top,r=p.left;}else a=e.scrollTop,r=e.scrollLeft;let s=i.top-a,h=i.left-r;return this.positions.forEach((p,f)=>{p.clientRect&&e!==f&&e.contains(f)&&ke(p.clientRect,s,h);}),i.top=a,i.left=r,{top:s,left:h}}getViewportScrollPosition(){return {top:window.scrollY,left:window.scrollX}}};function yi(o,n){let e=o.rootNodes;if(e.length===1&&e[0].nodeType===n.ELEMENT_NODE)return e[0];let t=n.createElement("div");return e.forEach(i=>t.appendChild(i)),t}function Rt(o,n,e){for(let t in n)if(n.hasOwnProperty(t)){let i=n[t];i?o.setProperty(t,i,e?.has(t)?"important":""):o.removeProperty(t);}return o}function ge(o,n){let e=n?"":"none";Rt(o.style,{"touch-action":n?"":"none","-webkit-user-drag":n?"":"none","-webkit-tap-highlight-color":n?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e});}function hi(o,n,e){Rt(o.style,{position:n?"":"fixed",top:n?"":"0",opacity:n?"":"0",left:n?"":"-999em"},e);}function at(o,n){return n&&n!="none"?o+" "+n:o}function mi(o,n){o.style.width=`${n.width}px`,o.style.height=`${n.height}px`,o.style.transform=xe(n.left,n.top);}function xe(o,n){return `translate3d(${Math.round(o)}px, ${Math.round(n)}px, 0)`}var fe={capture:true},yt={passive:false,capture:true},$i=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=xE({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(t,i){},styles:[`@layer cdk-resets {
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
`],encapsulation:2})}return o})(),Ot=(()=>{class o{_ngZone=D(Me);_document=D(Xn$1);_styleLoader=D(q$1);_renderer=D(lr).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new ee;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=Mo$1([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new ee;pointerUp=new ee;registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e);}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,yt);});}removeDropContainer(e){this._dropInstances.delete(e);}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.();}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load($i),this._activeDragInstances.update(i=>[...i,e]),this._activeDragInstances().length===1)){let i=t.type.startsWith("touch"),a=s=>this.pointerUp.next(s),r=[["scroll",s=>this._scroll.next(s),fe],["selectstart",this._preventDefaultWhileDragging,yt]];i?r.push(["touchend",a,fe],["touchcancel",a,fe]):r.push(["mouseup",a,fe]),i||r.push(["mousemove",s=>this.pointerMove.next(s),yt]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=r.map(([s,h,p])=>this._renderer.listen(this._document,s,h,p));});}}stopDragging(e){this._activeDragInstances.update(t=>{let i=t.indexOf(e);return i>-1?(t.splice(i,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners();}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new M(i=>this._ngZone.runOutsideAngular(()=>{let a=this._renderer.listen(e,"scroll",r=>{this._activeDragInstances().length&&i.next(r);},fe);return ()=>{a();}}))),kh(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t);}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e);}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete();}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault();};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e));};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0;}static \u0275fac=function(t){return new(t||o)};static \u0275prov=pr({token:o,factory:o.\u0275fac})}return o})();function pi(o){let n=o.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(o)*n}function ji(o){let n=getComputedStyle(o),e=Ct(n,"transition-property"),t=e.find(s=>s==="transform"||s==="all");if(!t)return 0;let i=e.indexOf(t),a=Ct(n,"transition-duration"),r=Ct(n,"transition-delay");return pi(a[i])+pi(r[i])}function Ct(o,n){return o.getPropertyValue(n).split(",").map(t=>t.trim())}var qi=new Set(["position"]),Dt=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(n,e,t,i,a,r,s,h,p,f){this._document=n,this._rootElement=e,this._direction=t,this._initialDomRect=i,this._previewTemplate=a,this._previewClass=r,this._pickupPositionOnPage=s,this._initialTransform=h,this._zIndex=p,this._renderer=f;}attach(n){this._preview=this._createPreview(),n.appendChild(this._preview),gi(this._preview)&&this._preview.showPopover();}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null;}setTransform(n){this._preview.style.transform=n;}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(n){this._preview.classList.add(n);}getTransitionDuration(){return ji(this._preview)}addEventListener(n,e){return this._renderer.listen(this._preview,n,e)}_createPreview(){let n=this._previewTemplate,e=this._previewClass,t=n?n.template:null,i;if(t&&n){let a=n.matchSize?this._initialDomRect:null,r=n.viewContainer.createEmbeddedView(t,n.context);r.detectChanges(),i=yi(r,this._document),this._previewEmbeddedView=r,n.matchSize?mi(i,a):i.style.transform=xe(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y);}else i=St(this._rootElement),mi(i,this._initialDomRect),this._initialTransform&&(i.style.transform=this._initialTransform);return Rt(i.style,{"pointer-events":"none",margin:gi(i)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},qi),ge(i,false),i.classList.add("cdk-drag-preview"),i.setAttribute("popover","manual"),i.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(a=>i.classList.add(a)):i.classList.add(e)),i}};function gi(o){return "showPopover"in o}var Zi={passive:true},ui={passive:false},Ki={passive:false,capture:true},Qi=800,_i="cdk-drag-placeholder",bi=new Set(["position"]);function Ci(o,n,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=o.get(Lv,null,{optional:true})||o.get(lr).createRenderer(null,null);return new Pt(n,e,o.get(Xn$1),o.get(Me),o.get(H),o.get(Ot),t)}var Pt=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=Mo$1(false);_hasMoved=false;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new ee;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=B.EMPTY;_pointerUpSubscription=B.EMPTY;_scrollSubscription=B.EMPTY;_resizeSubscription=B.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=true;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(n){n!==this._disabled&&(this._disabled=n,this._toggleNativeDragInteractions(),this._handles.forEach(e=>ge(e,n)));}_disabled=false;beforeStarted=new ee;started=new ee;released=new ee;ended=new ee;entered=new ee;exited=new ee;dropped=new ee;moved=this._moveEvents;data;constrainPosition;constructor(n,e,t,i,a,r,s){this._config=e,this._document=t,this._ngZone=i,this._viewportRuler=a,this._dragDropRegistry=r,this._renderer=s,this.withRootElement(n).withParent(e.parentDragRef||null),this._parentPositions=new ot(t),r.registerDragItem(this);}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(n){this._handles=n.map(t=>k(t)),this._handles.forEach(t=>ge(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t);}),this._disabledHandles=e,this}withPreviewTemplate(n){return this._previewTemplate=n,this}withPlaceholderTemplate(n){return this._placeholderTemplate=n,this}withRootElement(n){let e=k(n);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"mousedown",this._pointerDown,ui),t.listen(e,"touchstart",this._pointerDown,Zi),t.listen(e,"dragstart",this._nativeDragStart,ui)]),this._initialTransform=void 0,this._rootElement=e;}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(n){return this._boundaryElement=n?k(n):null,this._resizeSubscription.unsubscribe(),n&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(n){return this._parentDragRef=n,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null;}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0};}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&Wi(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let n=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,i=0;e.left<n.left?t=n.left-e.left:e.right>n.right&&(t=n.right-e.right),e.top<n.top?i=n.top-e.top:e.bottom>n.bottom&&(i=n.bottom-e.bottom);let a=this._activeTransform.x,r=this._activeTransform.y,s=a+t,h=r+i;this._rootElement.style.transform=xe(s,h),this._activeTransform={x:s,y:h},this._passiveTransform={x:s,y:h};}}disableHandle(n){!this._disabledHandles.has(n)&&this._handles.indexOf(n)>-1&&(this._disabledHandles.add(n),ge(n,true));}enableHandle(n){this._disabledHandles.has(n)&&(this._disabledHandles.delete(n),ge(n,this.disabled));}withDirection(n){return this._direction=n,this}_withDropContainer(n){this._dropContainer=n;}getFreeDragPosition(){let n=this.isDragging()?this._activeTransform:this._passiveTransform;return {x:n.x,y:n.y}}setFreeDragPosition(n){return this._activeTransform={x:0,y:0},this._passiveTransform.x=n.x,this._passiveTransform.y=n.y,this._dropContainer||this._applyRootElementTransform(n.x,n.y),this}withPreviewContainer(n){return this._previewContainer=n,this}_sortFromLastPointerPosition(){let n=this._lastKnownPointerPosition;n&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(n),n);}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0;}_destroyPreview(){this._preview?.destroy(),this._preview=null;}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null;}_pointerDown=n=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(n);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,n);}else this.disabled||this._initializeDragSequence(this._rootElement,n);};_pointerMove=n=>{let e=this._getPointerPositionOnPage(n);if(!this._hasStartedDragging()){let i=Math.abs(e.x-this._pickupPositionOnPage.x),a=Math.abs(e.y-this._pickupPositionOnPage.y);if(i+a>=this._config.dragStartThreshold){let s=Date.now()>=this._dragStartTime+this._getDragStartDelay(n),h=this._dropContainer;if(!s){this._endDragSequence(n);return}(!h||!h.isDragging()&&!h.isReceiving())&&(n.cancelable&&n.preventDefault(),this._hasStartedDragging.set(true),this._ngZone.run(()=>this._startDragSequence(n)));}return}n.cancelable&&n.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=true,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else {let i=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,a=this._activeTransform;a.x=t.x-i.x+this._passiveTransform.x,a.y=t.y-i.y+this._passiveTransform.y,this._applyRootElementTransform(a.x,a.y);}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:n,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta});});};_pointerUp=n=>{this._endDragSequence(n);};_endDragSequence(n){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:n}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(n),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this);});else {this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(n);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:n});}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this);}}_startDragSequence(n){ve(n)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",Yi,Ki);}),t){let i=this._rootElement,a=i.parentNode,r=this._placeholder=this._createPlaceholderElement(),s=this._marker=this._marker||this._document.createComment("");a.insertBefore(s,i),this._initialTransform=i.style.transform||"",this._preview=new Dt(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(a,e)),hi(i,false,bi),this._document.body.appendChild(a.replaceChild(r,i)),this.started.next({source:this,event:n}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this);}else this.started.next({source:this,event:n}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[]);}_initializeDragSequence(n,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),i=ve(e),a=!i&&e.button!==0,r=this._rootElement,s=P(e),h=!i&&this._lastTouchEventTime&&this._lastTouchEventTime+Qi>Date.now(),p=i?Pe(e):Le(e);if(s&&s.draggable&&e.type==="mousedown"&&e.preventDefault(),t||a||h||p)return;if(this._handles.length){let U=r.style;this._rootElementTapHighlight=U.webkitTapHighlightColor||"",U.webkitTapHighlightColor="transparent";}this._hasMoved=false,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(U=>this._updateOnScroll(U)),this._boundaryElement&&(this._boundaryRect=Mt(this._boundaryElement));let f=this._previewTemplate;this._pickupPositionInElement=f&&f.template&&!f.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,n,e);let A=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:A.x,y:A.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e);}_cleanupDragArtifacts(n){hi(this._rootElement,true,bi),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),i=this._getPointerPositionOnPage(n),a=this._getDragDistance(i),r=e._isOverContainer(i.x,i.y);this.ended.next({source:this,distance:a,dropPoint:i,event:n}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:r,distance:a,dropPoint:i,event:n}),e.drop(this,t,this._initialIndex,this._initialContainer,r,a,i,n),this._dropContainer=this._initialContainer;});}_updateActiveDropContainer({x:n,y:e},{x:t,y:i}){let a=this._initialContainer._getSiblingContainerFromPosition(this,n,e);!a&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(n,e)&&(a=this._initialContainer),a&&a!==this._dropContainer&&this._ngZone.run(()=>{let r=this._dropContainer.getItemIndex(this),s=this._dropContainer.getItemAtIndex(r+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(a,this._dropContainer,s),this._dropContainer=a,this._dropContainer.enter(this,n,e,a===this._initialContainer&&a.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:a,currentIndex:a.getItemIndex(this)});}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,i),this._dropContainer._sortItem(this,n,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(n,e):this._applyPreviewTransform(n-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y));}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let n=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(n.left,n.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let i=s=>{(!s||this._preview&&P(s)===this._preview.element&&s.propertyName==="transform")&&(r(),t(),clearTimeout(a));},a=setTimeout(i,e*1.5),r=this._preview.addEventListener("transitionend",i);}))}_createPlaceholderElement(){let n=this._placeholderTemplate,e=n?n.template:null,t;return e?(this._placeholderRef=n.viewContainer.createEmbeddedView(e,n.context),this._placeholderRef.detectChanges(),t=yi(this._placeholderRef,this._document)):t=St(this._rootElement),t.style.pointerEvents="none",t.classList.add(_i),t}_getPointerPositionInElement(n,e,t){let i=e===this._rootElement?null:e,a=i?i.getBoundingClientRect():n,r=ve(t)?t.targetTouches[0]:t,s=this._getViewportScrollPosition(),h=r.pageX-a.left-s.left,p=r.pageY-a.top-s.top;return {x:a.left-n.left+h,y:a.top-n.top+p}}_getPointerPositionOnPage(n){let e=this._getViewportScrollPosition(),t=ve(n)?n.touches[0]||n.changedTouches[0]||{pageX:0,pageY:0}:n,i=t.pageX-e.left,a=t.pageY-e.top;if(this._ownerSVGElement){let r=this._ownerSVGElement.getScreenCTM();if(r){let s=this._ownerSVGElement.createSVGPoint();return s.x=i,s.y=a,s.matrixTransform(r.inverse())}}return {x:i,y:a}}_getConstrainedPointerPosition(n){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:i}=this.constrainPosition?this.constrainPosition(n,this,this._initialDomRect,this._pickupPositionInElement):n;if(this.lockAxis==="x"||e==="x"?i=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:a,y:r}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,s=this._boundaryRect,{width:h,height:p}=this._getPreviewRect(),f=s.top+r,A=s.bottom-(p-r),U=s.left+a,ht=s.right-(h-a);t=fi(t,U,ht),i=fi(i,f,A);}return {x:t,y:i}}_updatePointerDirectionDelta(n){let{x:e,y:t}=n,i=this._pointerDirectionDelta,a=this._pointerPositionAtLastDirectionChange,r=Math.abs(e-a.x),s=Math.abs(t-a.y);return r>this._config.pointerDirectionChangeThreshold&&(i.x=e>a.x?1:-1,a.x=e),s>this._config.pointerDirectionChangeThreshold&&(i.y=t>a.y?1:-1,a.y=t),i}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let n=this._handles.length>0||!this.isDragging();n!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=n,ge(this._rootElement,n));}_removeRootElementListeners(){this._rootElementCleanups?.forEach(n=>n()),this._rootElementCleanups=void 0;}_applyRootElementTransform(n,e){let t=1/this.scale,i=xe(n*t,e*t),a=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=a.transform&&a.transform!="none"?a.transform:""),a.transform=at(i,this._initialTransform);}_applyPreviewTransform(n,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,i=xe(n,e);this._preview.setTransform(at(i,t));}_getDragDistance(n){let e=this._pickupPositionOnPage;return e?{x:n.x-e.x,y:n.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear();}_containInsideBoundaryOnResize(){let{x:n,y:e}=this._passiveTransform;if(n===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),i=this._boundaryElement.getBoundingClientRect();if(i.width===0&&i.height===0||t.width===0&&t.height===0)return;let a=i.left-t.left,r=t.right-i.right,s=i.top-t.top,h=t.bottom-i.bottom;i.width>t.width?(a>0&&(n+=a),r>0&&(n-=r)):n=0,i.height>t.height?(s>0&&(e+=s),h>0&&(e-=h)):e=0,(n!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:n});}_getDragStartDelay(n){let e=this.dragStartDelay;return typeof e=="number"?e:ve(n)?e.touch:e?e.mouse:0}_updateOnScroll(n){let e=this._parentPositions.handleScroll(n);if(e){let t=P(n);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&ke(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y));}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Zt(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(n,e){let t=this._previewContainer||"global";if(t==="parent")return n;if(t==="global"){let i=this._document;return e||i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.msFullscreenElement||i.body}return k(t)}_getPreviewRect(){return (!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=n=>{if(this._handles.length){let e=this._getTargetHandle(n);e&&!this._disabledHandles.has(e)&&!this.disabled&&n.preventDefault();}else this.disabled||n.preventDefault();};_getTargetHandle(n){return this._handles.find(e=>n.target&&(n.target===e||e.contains(n.target)))}_conditionallyInsertAnchor(n,e,t){if(n===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let i=this._anchor??=St(this._placeholder);i.classList.remove(_i),i.classList.add("cdk-drag-anchor"),i.style.transform="",t?t.before(i):k(e.element).appendChild(i);}}};function fi(o,n,e){return Math.max(n,Math.min(e,o))}function ve(o){return o.type[0]==="t"}function Yi(o){o.preventDefault();}function Si(o,n,e){let t=vi(n,o.length-1),i=vi(e,o.length-1);if(t===i)return;let a=o[t],r=i<t?-1:1;for(let s=t;s!==i;s+=r)o[s]=o[s+r];o[i]=a;}function vi(o,n){return Math.max(0,Math.min(n,o))}var rt=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(n){this._dragDropRegistry=n;}_previousSwap={drag:null,delta:0,overlaps:false};start(n){this.withItems(n);}sort(n,e,t,i){let a=this._itemPositions,r=this._getItemIndexFromPointerPosition(n,e,t,i);if(r===-1&&a.length>0)return null;let s=this.orientation==="horizontal",h=a.findIndex(F=>F.drag===n),p=a[r],f=a[h].clientRect,A=p.clientRect,U=h>r?1:-1,ht=this._getItemOffsetPx(f,A,U),zi=this._getSiblingOffsetPx(h,a,U),Gi=a.slice();return Si(a,h,r),a.forEach((F,Hi)=>{if(Gi[Hi]===F)return;let Nt=F.drag===n,mt=Nt?ht:zi,Vt=Nt?n.getPlaceholderElement():F.drag.getRootElement();F.offset+=mt;let zt=Math.round(F.offset*(1/F.drag.scale));s?(Vt.style.transform=at(`translate3d(${zt}px, 0, 0)`,F.initialTransform),ke(F.clientRect,0,mt)):(Vt.style.transform=at(`translate3d(0, ${zt}px, 0)`,F.initialTransform),ke(F.clientRect,mt,0));}),this._previousSwap.overlaps=wt(A,e,t),this._previousSwap.drag=p.drag,this._previousSwap.delta=s?i.x:i.y,{previousIndex:h,currentIndex:r}}enter(n,e,t,i){let a=this._activeDraggables,r=a.indexOf(n),s=n.getPlaceholderElement();r>-1&&a.splice(r,1);let h=i==null||i<0?this._getItemIndexFromPointerPosition(n,e,t):i,p=a[h];if(p===n&&(p=a[h+1]),!p&&(h==null||h===-1||h<a.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(p=a[0]),p&&!this._dragDropRegistry.isDragging(p)){let f=p.getRootElement();f.parentElement.insertBefore(s,f),a.splice(h,0,n);}else this._element.appendChild(s),a.push(n);s.style.transform="",this._cacheItemPositions();}withItems(n){this._activeDraggables=n.slice(),this._cacheItemPositions();}withSortPredicate(n){this._sortPredicate=n;}reset(){this._activeDraggables?.forEach(n=>{let e=n.getRootElement();if(e){let t=this._itemPositions.find(i=>i.drag===n)?.initialTransform;e.style.transform=t||"";}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=false;}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(n){return this._getVisualItemPositions().findIndex(e=>e.drag===n)}getItemAtIndex(n){return this._getVisualItemPositions()[n]?.drag||null}updateOnScroll(n,e){this._itemPositions.forEach(({clientRect:t})=>{ke(t,n,e);}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition();});}withElementContainer(n){this._element=n;}_cacheItemPositions(){let n=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return {drag:e,offset:0,initialTransform:t.style.transform||"",clientRect:Mt(t)}}).sort((e,t)=>n?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top);}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(n,e,t){let i=this.orientation==="horizontal",a=i?e.left-n.left:e.top-n.top;return t===-1&&(a+=i?e.width-n.width:e.height-n.height),a}_getSiblingOffsetPx(n,e,t){let i=this.orientation==="horizontal",a=e[n].clientRect,r=e[n+t*-1],s=a[i?"width":"height"]*t;if(r){let h=i?"left":"top",p=i?"right":"bottom";t===-1?s-=r.clientRect[h]-a[p]:s+=a[h]-r.clientRect[p];}return s}_shouldEnterAsFirstChild(n,e){if(!this._activeDraggables.length)return  false;let t=this._itemPositions,i=this.orientation==="horizontal";if(t[0].drag!==this._activeDraggables[0]){let r=t[t.length-1].clientRect;return i?n>=r.right:e>=r.bottom}else {let r=t[0].clientRect;return i?n<=r.left:e<=r.top}}_getItemIndexFromPointerPosition(n,e,t,i){let a=this.orientation==="horizontal",r=this._itemPositions.findIndex(({drag:s,clientRect:h})=>{if(s===n)return  false;if(i){let p=a?i.x:i.y;if(s===this._previousSwap.drag&&this._previousSwap.overlaps&&p===this._previousSwap.delta)return  false}return a?e>=Math.floor(h.left)&&e<Math.floor(h.right):t>=Math.floor(h.top)&&t<Math.floor(h.bottom)});return r===-1||!this._sortPredicate(r,n)?-1:r}},Tt=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:false};_relatedNodes=[];constructor(n,e){this._document=n,this._dragDropRegistry=e;}start(n){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let i=e[t];this._relatedNodes.push([i,i.nextSibling]);}this.withItems(n);}sort(n,e,t,i){let a=this._getItemIndexFromPointerPosition(n,e,t),r=this._previousSwap;if(a===-1||this._activeItems[a]===n)return null;let s=this._activeItems[a];if(r.drag===s&&r.overlaps&&r.deltaX===i.x&&r.deltaY===i.y)return null;let h=this.getItemIndex(n),p=n.getPlaceholderElement(),f=s.getRootElement();a>h?f.after(p):f.before(p),Si(this._activeItems,h,a);let A=this._getRootNode().elementFromPoint(e,t);return r.deltaX=i.x,r.deltaY=i.y,r.drag=s,r.overlaps=f===A||f.contains(A),{previousIndex:h,currentIndex:a}}enter(n,e,t,i){let a=this._activeItems.indexOf(n);a>-1&&this._activeItems.splice(a,1);let r=i==null||i<0?this._getItemIndexFromPointerPosition(n,e,t):i;r===-1&&(r=this._getClosestItemIndexToPointer(n,e,t));let s=this._activeItems[r];s&&!this._dragDropRegistry.isDragging(s)?(this._activeItems.splice(r,0,n),s.getRootElement().before(n.getPlaceholderElement())):(this._activeItems.push(n),this._element.appendChild(n.getPlaceholderElement()));}withItems(n){this._activeItems=n.slice();}withSortPredicate(n){this._sortPredicate=n;}reset(){let n=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[i,a]=this._relatedNodes[t];i.parentNode===n&&i.nextSibling!==a&&(a===null?n.appendChild(i):a.parentNode===n&&n.insertBefore(i,a));}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=false;}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(n){return this._activeItems.indexOf(n)}getItemAtIndex(n){return this._activeItems[n]||null}updateOnScroll(){this._activeItems.forEach(n=>{this._dragDropRegistry.isDragging(n)&&n._sortFromLastPointerPosition();});}withElementContainer(n){n!==this._element&&(this._element=n,this._rootNode=void 0);}_getItemIndexFromPointerPosition(n,e,t){let i=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),a=i?this._activeItems.findIndex(r=>{let s=r.getRootElement();return i===s||s.contains(i)}):-1;return a===-1||!this._sortPredicate(a,n)?-1:a}_getRootNode(){return this._rootNode||(this._rootNode=Zt(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(n,e,t){if(this._activeItems.length===0)return  -1;if(this._activeItems.length===1)return 0;let i=1/0,a=-1;for(let r=0;r<this._activeItems.length;r++){let s=this._activeItems[r];if(s!==n){let{x:h,y:p}=s.getRootElement().getBoundingClientRect(),f=Math.hypot(e-h,t-p);f<i&&(i=f,a=r);}}return a}},ki=.05,wi=.05,N=(function(o){return o[o.NONE=0]="NONE",o[o.UP=1]="UP",o[o.DOWN=2]="DOWN",o})(N||{}),R=(function(o){return o[o.NONE=0]="NONE",o[o.LEFT=1]="LEFT",o[o.RIGHT=2]="RIGHT",o})(R||{});function Di(o,n){return new Et(n,o.get(Ot),o.get(Xn$1),o.get(Me),o.get(H))}var Et=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=false;sortingDisabled=false;lockAxis=null;autoScrollDisabled=false;autoScrollStep=2;hasAnchor=false;enterPredicate=()=>true;sortPredicate=()=>true;beforeStarted=new ee;entered=new ee;exited=new ee;dropped=new ee;sorted=new ee;receivingStarted=new ee;receivingStopped=new ee;data;_container;_isDragging=false;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=B.EMPTY;_verticalScrollDirection=N.NONE;_horizontalScrollDirection=R.NONE;_scrollNode;_stopScrollTimers=new ee;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(n,e,t,i,a){this._dragDropRegistry=e,this._ngZone=i,this._viewportRuler=a;let r=this.element=k(n);this._document=t,this.withOrientation("vertical").withElementContainer(r),e.registerDropContainer(this),this._parentPositions=new ot(t);}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this);}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings();}enter(n,e,t,i){this._draggingStarted(),i==null&&this.sortingDisabled&&(i=this._draggables.indexOf(n)),this._sortStrategy.enter(n,e,t,i),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:n,container:this,currentIndex:this.getItemIndex(n)});}exit(n){this._reset(),this.exited.next({item:n,container:this});}drop(n,e,t,i,a,r,s,h){this._reset(),this.dropped.next({item:n,currentIndex:e,previousIndex:t,container:this,previousContainer:i,isPointerOverContainer:a,distance:r,dropPoint:s,event:h});}withItems(n){let e=this._draggables;return this._draggables=n,n.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(i=>i.isDragging()).every(i=>n.indexOf(i)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(n){return this._direction=n,this._sortStrategy instanceof rt&&(this._sortStrategy.direction=n),this}connectedTo(n){return this._siblings=n.slice(),this}withOrientation(n){if(n==="mixed")this._sortStrategy=new Tt(this._document,this._dragDropRegistry);else {let e=new rt(this._dragDropRegistry);e.direction=this._direction,e.orientation=n,this._sortStrategy=e;}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(n){let e=this._container;return this._scrollableElements=n.indexOf(e)===-1?[e,...n]:n.slice(),this}withElementContainer(n){if(n===this._container)return this;k(this.element);let t=this._scrollableElements.indexOf(this._container),i=this._scrollableElements.indexOf(n);return t>-1&&this._scrollableElements.splice(t,1),i>-1&&this._scrollableElements.splice(i,1),this._sortStrategy&&this._sortStrategy.withElementContainer(n),this._cachedShadowRoot=null,this._scrollableElements.unshift(n),this._container=n,this}getScrollableParents(){return this._scrollableElements}getItemIndex(n){return this._isDragging?this._sortStrategy.getItemIndex(n):this._draggables.indexOf(n)}getItemAtIndex(n){return this._isDragging?this._sortStrategy.getItemAtIndex(n):this._draggables[n]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(n,e,t,i){if(this.sortingDisabled||!this._domRect||!di(this._domRect,ki,e,t))return;let a=this._sortStrategy.sort(n,e,t,i);a&&this.sorted.next({previousIndex:a.previousIndex,currentIndex:a.currentIndex,container:this,item:n});}_startScrollingIfNecessary(n,e){if(this.autoScrollDisabled)return;let t,i=N.NONE,a=R.NONE;if(this._parentPositions.positions.forEach((r,s)=>{s===this._document||!r.clientRect||t||di(r.clientRect,ki,n,e)&&([i,a]=Xi(s,r.clientRect,this._direction,n,e),(i||a)&&(t=s));}),!i&&!a){let{width:r,height:s}=this._viewportRuler.getViewportSize(),h={width:r,height:s,top:0,right:r,bottom:s,left:0};i=Pi(h,e),a=Ti(h,n),t=window;}t&&(i!==this._verticalScrollDirection||a!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=i,this._horizontalScrollDirection=a,this._scrollNode=t,(i||a)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling());}_stopScrolling(){this._stopScrollTimers.next();}_draggingStarted(){let n=this._container.style;this.beforeStarted.next(),this._isDragging=true,this._initialScrollSnap=n.msScrollSnapType||n.scrollSnapType||"",n.scrollSnapType=n.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents();}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect;}_reset(){this._isDragging=false;let n=this._container.style;n.scrollSnapType=n.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear();}_startScrollInterval=()=>{this._stopScrolling(),Ah(0,lh).pipe(Qh(this._stopScrollTimers)).subscribe(()=>{let n=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===N.UP?n.scrollBy(0,-e):this._verticalScrollDirection===N.DOWN&&n.scrollBy(0,e),this._horizontalScrollDirection===R.LEFT?n.scrollBy(-e,0):this._horizontalScrollDirection===R.RIGHT&&n.scrollBy(e,0);});};_isOverContainer(n,e){return this._domRect!=null&&wt(this._domRect,n,e)}_getSiblingContainerFromPosition(n,e,t){return this._siblings.find(i=>i._canReceive(n,e,t))}_canReceive(n,e,t){if(!this._domRect||!wt(this._domRect,e,t)||!this.enterPredicate(n,this))return  false;let i=this._getShadowRoot().elementFromPoint(e,t);return i?i===this._container||this._container.contains(i):false}_startReceiving(n,e){let t=this._activeSiblings;!t.has(n)&&e.every(i=>this.enterPredicate(i,this)||this._draggables.indexOf(i)>-1)&&(t.add(n),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:n,receiver:this,items:e}));}_stopReceiving(n){this._activeSiblings.delete(n),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:n,receiver:this});}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(n=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(n);e&&this._sortStrategy.updateOnScroll(e.top,e.left);}else this.isReceiving()&&this._cacheParentPositions();});}_getShadowRoot(){if(!this._cachedShadowRoot){let n=Zt(this._container);this._cachedShadowRoot=n||this._document;}return this._cachedShadowRoot}_notifyReceivingSiblings(){let n=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,n));}};function Pi(o,n){let{top:e,bottom:t,height:i}=o,a=i*wi;return n>=e-a&&n<=e+a?N.UP:n>=t-a&&n<=t+a?N.DOWN:N.NONE}function Ti(o,n){let{left:e,right:t,width:i}=o,a=i*wi;return n>=e-a&&n<=e+a?R.LEFT:n>=t-a&&n<=t+a?R.RIGHT:R.NONE}function Xi(o,n,e,t,i){let a=Pi(n,i),r=Ti(n,t),s=N.NONE,h=R.NONE;if(a){let p=o.scrollTop;a===N.UP?p>0&&(s=N.UP):o.scrollHeight-p>o.clientHeight&&(s=N.DOWN);}if(r){let p=o.scrollLeft;e==="rtl"?r===R.RIGHT?p<0&&(h=R.RIGHT):o.scrollWidth+p>o.clientWidth&&(h=R.LEFT):r===R.LEFT?p>0&&(h=R.LEFT):o.scrollWidth-p>o.clientWidth&&(h=R.RIGHT);}return [s,h]}var Ji=(()=>{class o{_injector=D(ge$1);createDrag(e,t){return Ci(this._injector,e,t)}createDropList(e){return Di(this._injector,e)}static \u0275fac=function(t){return new(t||o)};static \u0275prov=pr({token:o,factory:o.\u0275fac})}return o})(),xi=new S("CDK_DRAG_PARENT");var eo=new S("CdkDragHandle");var Ei=new S("CDK_DRAG_CONFIG"),Ii=new S("CdkDropList"),Mi=(()=>{class o{element=D(hr);dropContainer=D(Ii,{optional:true,skipSelf:true});_ngZone=D(Me);_viewContainerRef=D(Ei$1);_dir=D(Ss,{optional:true});_changeDetectorRef=D(GL);_selfHandle=D(eo,{optional:true,self:true});_parentDrag=D(xi,{optional:true,skipSelf:true});_dragDropRegistry=D(Ot);_destroyed=new ee;_handles=new Nn([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled;}_disabled=false;constrainPosition;previewClass;previewContainer;scale=1;started=new Be;released=new Be;ended=new Be;entered=new Be;exited=new Be;dropped=new Be;moved=new M(e=>{let t=this._dragRef.moved.pipe(De(i=>({source:this,pointerPosition:i.pointerPosition,event:i.event,delta:i.delta,distance:i.distance}))).subscribe(e);return ()=>{t.unsubscribe();}});_injector=D(ge$1);constructor(){let e=this.dropContainer,t=D(Ei,{optional:true});this._dragRef=Ci(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(Qh(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale;})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef);}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset();}resetToBoundary(){this._dragRef.resetToBoundary();}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e);}ngAfterViewInit(){Oy(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition);},{injector:this._injector});}ngOnChanges(e){let t=e.rootElementSelector,i=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,i&&!i.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition);}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose();});}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t);}_removeHandle(e){let t=this._handles.getValue(),i=t.indexOf(e);i>-1&&(t.splice(i,1),this._handles.next(t));}_setPreviewTemplate(e){this._previewTemplate=e;}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null);}_setPlaceholderTemplate(e){this._placeholderTemplate=e;}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null);}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e);}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):k(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,i=this.dragStartDelay,a=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,r=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof i=="object"&&i?i:Xt(i),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(a).withPreviewTemplate(r).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value);}}),e.beforeStarted.pipe(Xt$1(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let i=this._dragDropRegistry.getDragDirectiveForNode(t);if(i){e.withParent(i._dragRef);break}t=t.parentElement;}});}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck();}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event});}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck();}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex});}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this});}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event});});}_assignDefaults(e){let{lockAxis:t,dragStartDelay:i,constrainPosition:a,previewClass:r,boundaryElement:s,draggingDisabled:h,rootElementSelector:p,previewContainer:f}=e;this.disabled=h??false,this.dragStartDelay=i||0,this.lockAxis=t||null,a&&(this.constrainPosition=a),r&&(this.previewClass=r),s&&(this.boundaryElement=s),p&&(this.rootElementSelector=p),f&&(this.previewContainer=f);}_setupHandlesListener(){this._handles.pipe(Yh(e=>{let t=e.map(i=>i.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t);}),cl(e=>kh(...e.map(t=>t._stateChanges.pipe(zh(t))))),Qh(this._destroyed)).subscribe(e=>{let t=this._dragRef,i=e.element.nativeElement;e.disabled?t.disableHandle(i):t.enableHandle(i);});}static \u0275fac=function(t){return new(t||o)};static \u0275dir=PE({type:o,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,i){t&2&&Cp("cdk-drag-disabled",i.disabled)("cdk-drag-dragging",i._dragRef.isDragging());},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",QL],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",ZL]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[tD([{provide:xi,useExisting:o}]),rm]})}return o})(),It=new S("CdkDropListGroup"),Ri=(()=>{class o{_items=new Set;disabled=false;ngOnDestroy(){this._items.clear();}static \u0275fac=function(t){return new(t||o)};static \u0275dir=PE({type:o,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:[2,"cdkDropListGroupDisabled","disabled",QL]},exportAs:["cdkDropListGroup"],features:[tD([{provide:It,useExisting:o}])]})}return o})(),Oi=(()=>{class o{element=D(hr);_changeDetectorRef=D(GL);_scrollDispatcher=D(Z);_dir=D(Ss,{optional:true});_group=D(It,{optional:true,skipSelf:true});_latestSortedRefs;_destroyed=new ee;_scrollableParentsResolved=false;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=D(nn$1).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e;}_disabled=false;sortingDisabled=false;enterPredicate=()=>true;sortPredicate=()=>true;autoScrollDisabled=false;autoScrollStep;elementContainerSelector=null;hasAnchor=false;dropped=new Be;entered=new Be;exited=new Be;sorted=new Be;_unsortedItems=new Set;constructor(){let e=D(Ei,{optional:true}),t=D(ge$1);this._dropListRef=Di(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(i,a)=>this.enterPredicate(i.data,a.data),this._dropListRef.sortPredicate=(i,a,r)=>this.sortPredicate(i,a.data,r.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),o._dropLists.push(this),this._group&&this._group._items.add(this);}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef));}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs));}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=o._dropLists.indexOf(this);e>-1&&o._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete();}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(zh(this._dir.value),Qh(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=ot$1(this.connectedTo).map(i=>{if(typeof i=="string"){let a=o._dropLists.find(r=>r.id===i);return a}return i});if(this._group&&this._group._items.forEach(i=>{t.indexOf(i)===-1&&t.push(i);}),!this._scrollableParentsResolved){let i=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(a=>a.getElementRef().nativeElement);this._dropListRef.withScrollableParents(i),this._scrollableParentsResolved=true;}if(this.elementContainerSelector){let i=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(i);}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=Xt(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(i=>i&&i!==this).map(i=>i._dropListRef)).withOrientation(this.orientation);});}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck();}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex});}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck();}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data});}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck();}),kh(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck());}_assignDefaults(e){let{lockAxis:t,draggingDisabled:i,sortingDisabled:a,listAutoScrollDisabled:r,listOrientation:s}=e;this.disabled=i??false,this.sortingDisabled=a??false,this.autoScrollDisabled=r??false,this.orientation=s||"vertical",this.lockAxis=t||null;}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e);}static \u0275fac=function(t){return new(t||o)};static \u0275dir=PE({type:o,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,i){t&2&&(sp("id",i.id),Cp("cdk-drop-list-disabled",i.disabled)("cdk-drop-list-dragging",i._dropListRef.isDragging())("cdk-drop-list-receiving",i._dropListRef.isReceiving()));},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",QL],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",QL],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",QL],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",QL]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[tD([{provide:It,useValue:void 0},{provide:Ii,useExisting:o}])]})}return o})();var Ai=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=kE({type:o});static \u0275inj=bl({providers:[Ji],imports:[It$1]})}return o})();var co=["button"],lo=["*"];function ho(o,n){if(o&1&&(oi(0,"div",2),cp(1,"mat-pseudo-checkbox",6),Dc()),o&2){let e=hI();xy(),ap("disabled",e.disabled);}}var Bi=new S("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:false,hideMultipleSelectionIndicator:false,disabledInteractive:false})}),Fi=new S("MatButtonToggleGroup"),mo={provide:ht,useExisting:io(()=>At),multi:true},ct=class{source;value;constructor(n,e){this.source=n,this.value=e;}},At=(()=>{class o{_changeDetector=D(GL);_dir=D(Ss,{optional:true});_multiple=false;_disabled=false;_disabledInteractive=false;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck();}_name=D(nn$1).getId("mat-button-toggle-group-");vertical=false;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value);}valueChange=new Be;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck();}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck();}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new Be;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck();}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck();}_hideMultipleSelectionIndicator;constructor(){let e=D(Bi,{optional:true});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??false,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??false;}ngOnInit(){this._selectionModel=new r(this.multiple,void 0,false);}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex();}writeValue(e){this.value=e,this._changeDetector.markForCheck();}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}_keydown(e){if(this.multiple||this.disabled||Hr(e))return;let i=e.target.id,a=this._buttonToggles.toArray().findIndex(s=>s.buttonId===i),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(a)||null;break;case 38:r=this._getNextButton(a,-1);break;case 37:r=this._getNextButton(a,this.dir==="ltr"?-1:1);break;case 40:r=this._getNextButton(a,1);break;case 39:r=this._getNextButton(a,this.dir==="ltr"?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus());}_emitChangeEvent(e){let t=new ct(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t);}_syncButtonToggle(e,t,i=false,a=false){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=false),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):a=true,a?Promise.resolve().then(()=>this._updateModelValue(e,i)):this._updateModelValue(e,i);}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?false:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1;}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let i=this._buttonToggles;for(let a=1;a<=i.length;a++){let r=(e+t*a+i.length)%i.length,s=i.get(r);if(s&&!s.disabled)return s}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(i=>this._selectValue(i,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(i=>i.tabIndex===-1)){for(let i of t)if(!i.disabled){i.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=false,this.multiple||(e.tabIndex=-1);});}_selectValue(e,t){for(let i of t)if(i.value===e){i.checked=true,this._selectionModel.select(i),this.multiple||(i.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value);}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck());}static \u0275fac=function(t){return new(t||o)};static \u0275dir=PE({type:o,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,i,a){if(t&1&&yp(a,lt,5),t&2){let r;EI(r=II())&&(i._buttonToggles=r);}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,i){t&1&&hp("keydown",function(r){return i._keydown(r)}),t&2&&(sp("role",i.multiple?"group":"radiogroup")("aria-disabled",i.disabled),Cp("mat-button-toggle-vertical",i.vertical)("mat-button-toggle-group-appearance-standard",i.appearance==="standard"));},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",QL],value:"value",multiple:[2,"multiple","multiple",QL],disabled:[2,"disabled","disabled",QL],disabledInteractive:[2,"disabledInteractive","disabledInteractive",QL],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",QL],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",QL]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[tD([mo,{provide:Fi,useExisting:o}])]})}return o})(),lt=(()=>{class o{_changeDetectorRef=D(GL);_elementRef=D(hr);_focusMonitor=D(Ir);_idGenerator=D(nn$1);_animationDisabled=ct$1();_checked=false;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return `${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e);}_tabIndex;disableRipple=false;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e;}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck());}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e;}_disabled=false;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e;}_disabledInteractive;change=new Be;constructor(){D(q$1).load(nh);let e=D(Fi,{optional:true}),t=D(new Up("tabindex"),{optional:true})||"",i=D(Bi,{optional:true});this._tabIndex=Mo$1(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:"standard",this._disabledInteractive=i?.disabledInteractive??false;}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=true:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked));}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,true);}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,false,false,true);}focus(e){this._buttonElement.nativeElement.focus(e);}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?true:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,true),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0;}this.change.emit(new ct(this,this.value));}_markForCheck(){this._changeDetectorRef.markForCheck();}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=xE({type:o,selectors:[["mat-button-toggle"]],viewQuery:function(t,i){if(t&1&&vp(co,5),t&2){let a;EI(a=II())&&(i._buttonElement=a.first);}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,i){t&1&&hp("focus",function(){return i.focus()}),t&2&&(sp("aria-label",null)("aria-labelledby",null)("id",i.id)("name",null),Cp("mat-button-toggle-standalone",!i.buttonToggleGroup)("mat-button-toggle-checked",i.checked)("mat-button-toggle-disabled",i.disabled)("mat-button-toggle-disabled-interactive",i.disabledInteractive)("mat-button-toggle-appearance-standard",i.appearance==="standard"));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",QL],appearance:"appearance",checked:[2,"checked","checked",QL],disabled:[2,"disabled","disabled",QL],disabledInteractive:[2,"disabledInteractive","disabledInteractive",QL]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:lo,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,i){if(t&1&&(mI(),oi(0,"button",1,0),hp("click",function(){return i._onButtonClick()}),tI(2,ho,2,1,"div",2),oi(3,"span",3),yI(4),Dc()(),cp(5,"span",4)(6,"span",5)),t&2){let a=wI(1);ap("id",i.buttonId)("disabled",i.disabled&&!i.disabledInteractive||null),sp("role",i.isSingleSelector()?"radio":"button")("tabindex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("aria-pressed",i.isSingleSelector()?null:i.checked)("aria-checked",i.isSingleSelector()?i.checked:null)("name",i._getButtonName())("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),xy(2),nI(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),xy(4),ap("matRippleTrigger",a)("matRippleDisabled",i.disableRipple||i.disabled);}},dependencies:[Ql,p],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2})}return o})(),Li=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=kE({type:o});static \u0275inj=bl({imports:[hh,lt,qr]})}return o})();var go=["input"],uo=["label"],_o=["*"],Bt={color:"accent",clickAction:"check-indeterminate",disabledInteractive:false},bo=new S("mat-checkbox-default-options",{providedIn:"root",factory:()=>Bt}),I=(function(o){return o[o.Init=0]="Init",o[o.Checked=1]="Checked",o[o.Unchecked=2]="Unchecked",o[o.Indeterminate=3]="Indeterminate",o})(I||{}),Ft=class{source;checked},Lt=(()=>{class o{_elementRef=D(hr);_changeDetectorRef=D(GL);_ngZone=D(Me);_animationsDisabled=ct$1();_options=D(bo,{optional:true});focus(){this._inputElement.nativeElement.focus();}_createChangeEvent(e){let t=new Ft;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return `${this.id||this._uniqueId}-input`}required=false;labelPosition="after";name=null;change=new Be;indeterminateChange=new Be;value;disableRipple=false;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=I.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){D(q$1).load(nh);let e=D(new Up("tabindex"),{optional:true});this._options=this._options||Bt,this.color=this._options.color||Bt.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=D(nn$1).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??false;}ngOnChanges(e){e.required&&this._validatorChangeFn();}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate);}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck());}_checked=false;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck());}_disabled=false;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(I.Indeterminate):this._transitionCheckState(this.checked?I.Checked:I.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e);}_indeterminate=Mo$1(false);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges();}writeValue(e){this.checked=!!e;}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorChangeFn=e;}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(a);},1e3);});}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked);}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked);}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(false),this.indeterminateChange.emit(false);}),this._checked=!this._checked,this._transitionCheckState(this._checked?I.Checked:I.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate);}_onInteractionEvent(e){e.stopPropagation();}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck();});}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return "";switch(e){case I.Init:if(t===I.Checked)return this._animationClasses.uncheckedToChecked;if(t==I.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case I.Unchecked:return t===I.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case I.Checked:return t===I.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case I.Indeterminate:return t===I.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return ""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e);}_onInputClick(){this._handleInputClick();}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus();}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation();}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=xE({type:o,selectors:[["mat-checkbox"]],viewQuery:function(t,i){if(t&1&&vp(go,5)(uo,5),t&2){let a;EI(a=II())&&(i._inputElement=a.first),EI(a=II())&&(i._labelElement=a.first);}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,i){t&2&&(fp("id",i.id),sp("tabindex",null)("aria-label",null)("aria-labelledby",null),RI(i.color?"mat-"+i.color:"mat-accent"),Cp("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",QL],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",QL],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",QL],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:ZL(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",QL],checked:[2,"checked","checked",QL],disabled:[2,"disabled","disabled",QL],indeterminate:[2,"indeterminate","indeterminate",QL]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[tD([{provide:ht,useExisting:io(()=>o),multi:true},{provide:S$1,useExisting:o,multi:true}]),rm],ngContentSelectors:_o,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,i){if(t&1&&(mI(),oi(0,"div",3),hp("click",function(r){return i._preventBubblingFromLabel(r)}),oi(1,"div",4,0)(3,"div",5),hp("click",function(){return i._onTouchTargetClick()}),Dc(),oi(4,"input",6,1),hp("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(r){return i._onInteractionEvent(r)}),Dc(),cp(6,"div",7),oi(7,"div",8),cu(),oi(8,"svg",9),cp(9,"path",10),Dc(),lu(),cp(10,"div",11),Dc(),cp(11,"div",12),Dc(),oi(12,"label",13,2),yI(14),Dc()()),t&2){let a=wI(2);ap("labelPosition",i.labelPosition),xy(4),Cp("mdc-checkbox--selected",i.checked),ap("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),sp("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?true:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),xy(7),ap("matRippleTrigger",a)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",true),xy(),ap("for",i.inputId);}},dependencies:[Ql,m],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return o})(),Ni=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=kE({type:o});static \u0275inj=bl({imports:[Lt,qr]})}return o})();function wo(o,n){if(o&1&&(oi(0,"mat-option",16),qI(1),Dc()),o&2){let e=n.$implicit;ap("value",e),xy(),xp(e);}}function Do(o,n){if(o&1){let e=fI();oi(0,"mat-form-field",8)(1,"mat-label"),qI(2,"Estado"),Dc(),oi(3,"mat-select",15),Op("ngModelChange",function(i){Yl(e);let a=hI();return ZI(a.status,i)||(a.status=i),Kl(i)}),iI(4,wo,2,2,"mat-option",16,oI),Dc(),Bv(),Dc();}if(o&2){let e=hI();xy(3),Rp("ngModel",e.status),Uv(),xy(),sI(e.STATUSES);}}function Po(o,n){if(o&1){let e=fI();oi(0,"button",17),hp("click",function(){Yl(e);let i=hI();return Kl(i.remove())}),qI(1,"Borrar"),Dc(),cp(2,"span",18);}if(o&2){let e=hI();ap("disabled",e.esUnico)("matTooltip",e.esUnico?"No se puede borrar el \xFAnico sprint":"");}}var ye=class o{data=D(w);dialog=D(vt);snack=D(Qt);ref=D(N$1);input=D(ue);sprint=this.input.sprint;isNew=!this.sprint;STATUSES=["active","completed","planned"];esUnico=this.data.getSprints().sprints.length<=1;name=this.sprint?.name??"";goal=this.sprint?.goal??"";capacity=this.sprint?.capacity??0;status=this.sprint?.status??"active";startModel=this.sprint?.start?new Date(this.sprint.start+"T00:00:00"):null;endModel=this.sprint?.end?new Date(this.sprint.end+"T00:00:00"):null;toIso(n){if(!n)return "";let e=t=>String(t).padStart(2,"0");return `${n.getFullYear()}-${e(n.getMonth()+1)}-${e(n.getDate())}`}save(){let n=this.name.trim();if(!n){this.snack.open("El nombre del sprint no puede quedar vac\xEDo.","OK",{duration:3e3});return}let e={name:n,goal:this.goal.trim(),start:this.toIso(this.startModel),end:this.toIso(this.endModel),capacity:Number(this.capacity)||0};this.isNew?(this.data.addSprint(e),this.snack.open("Sprint creado. El anterior se cerr\xF3 y las tareas no aprobadas migraron.","OK",{duration:4e3})):this.data.updateSprint(this.sprint.id,W(q({},e),{status:this.status})),this.ref.close(true);}async remove(){if(!this.sprint||this.esUnico)return;await oh(this.dialog.open(ae,{data:{title:"Borrar sprint",message:`Vas a borrar "${this.sprint.name}".

Las tareas del sprint NO se eliminan.`,confirmText:"Borrar",danger:true}}).afterClosed())&&(this.data.deleteSprint(this.sprint.id),this.ref.close(true));}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=xE({type:o,selectors:[["app-sprint-dialog"]],decls:38,vars:13,consts:[["startP",""],["endP",""],["mat-dialog-title",""],[1,"sprint-form"],["appearance","outline",1,"full"],["matInput","","placeholder","Sprint 3",3,"ngModelChange","ngModel"],["matInput","","rows","2","placeholder","Objetivo del sprint",3,"ngModelChange","ngModel"],[1,"row"],["appearance","outline",1,"grow"],["matInput","",3,"ngModelChange","matDatepicker","ngModel"],["matIconSuffix","",3,"for"],["matInput","","type","number","min","0",3,"ngModelChange","ngModel"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"click"],[3,"ngModelChange","ngModel"],[3,"value"],["mat-button","",1,"danger",3,"click","disabled","matTooltip"],[1,"spacer"]],template:function(e,t){if(e&1){let i=fI();oi(0,"h2",2),qI(1),Dc(),oi(2,"mat-dialog-content",3)(3,"mat-form-field",4)(4,"mat-label"),qI(5,"Nombre"),Dc(),oi(6,"input",5),Op("ngModelChange",function(r){return Yl(i),ZI(t.name,r)||(t.name=r),Kl(r)}),Dc(),Bv(),Dc(),oi(7,"mat-form-field",4)(8,"mat-label"),qI(9,"Objetivo"),Dc(),oi(10,"textarea",6),Op("ngModelChange",function(r){return Yl(i),ZI(t.goal,r)||(t.goal=r),Kl(r)}),Dc(),Bv(),Dc(),oi(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),qI(14,"Inicio"),Dc(),oi(15,"input",9),Op("ngModelChange",function(r){return Yl(i),ZI(t.startModel,r)||(t.startModel=r),Kl(r)}),Dc(),Bv(),cp(16,"mat-datepicker-toggle",10)(17,"mat-datepicker",null,0),Dc(),oi(19,"mat-form-field",8)(20,"mat-label"),qI(21,"Fin"),Dc(),oi(22,"input",9),Op("ngModelChange",function(r){return Yl(i),ZI(t.endModel,r)||(t.endModel=r),Kl(r)}),Dc(),Bv(),cp(23,"mat-datepicker-toggle",10)(24,"mat-datepicker",null,1),Dc()(),oi(26,"div",7)(27,"mat-form-field",8)(28,"mat-label"),qI(29,"Capacidad (pts)"),Dc(),oi(30,"input",11),Op("ngModelChange",function(r){return Yl(i),ZI(t.capacity,r)||(t.capacity=r),Kl(r)}),Dc(),Bv(),Dc(),tI(31,Do,6,1,"mat-form-field",8),Dc()(),oi(32,"mat-dialog-actions",12),tI(33,Po,3,2),oi(34,"button",13),qI(35,"Cancelar"),Dc(),oi(36,"button",14),hp("click",function(){return t.save()}),qI(37),Dc()();}if(e&2){let i=wI(18),a=wI(25);xy(),xp(t.isNew?"Nuevo sprint":"Editar "+t.sprint.id),xy(5),Rp("ngModel",t.name),Uv(),xy(4),Rp("ngModel",t.goal),Uv(),xy(5),ap("matDatepicker",i),Rp("ngModel",t.startModel),Uv(),xy(),ap("for",i),xy(6),ap("matDatepicker",a),Rp("ngModel",t.endModel),Uv(),xy(),ap("for",a),xy(7),Rp("ngModel",t.capacity),Uv(),xy(),nI(t.isNew?-1:31),xy(2),nI(t.isNew?-1:33),xy(4),xp(t.isNew?"Crear":"Guardar");}},dependencies:[ta$1,ie,gn,Xn,Ze,bn,_i$1,mi$1,pi$1,fi$1,ui$1,va,ga,de,it$1,oe,Ot$1,nn,tn,Ft$1,Rt$1,J,ms,cs,pn,vi$2,Gi,Oe],styles:[".sprint-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:8px;min-width:420px}.full[_ngcontent-%COMP%]{width:100%}.row[_ngcontent-%COMP%]{display:flex;gap:12px}.row[_ngcontent-%COMP%]   .grow[_ngcontent-%COMP%], .spacer[_ngcontent-%COMP%]{flex:1}.danger[_ngcontent-%COMP%]{color:var(--mat-sys-error)}@media(max-width:520px){.sprint-form[_ngcontent-%COMP%]{min-width:0}.row[_ngcontent-%COMP%]{flex-direction:column;gap:0}}"]})};var dt=(o,n)=>n.id,To=(o,n)=>n.status;function Eo(o,n){if(o&1&&(oi(0,"mat-option",3),qI(1),Dc()),o&2){let e=n.$implicit;ap("value",e.id),xy(),Ap("",e.name,"",e.status==="completed"?" \u2713":"");}}function Io(o,n){if(o&1&&(oi(0,"span",21),qI(1),Dc()),o&2){let e=hI();xy(),_c("\u2014 ",e.goal);}}function Mo(o,n){if(o&1&&(oi(0,"span",25),qI(1),Dc(),oi(2,"span",22),qI(3,"\xB7"),Dc()),o&2){let e=hI(),t=hI();xy(),Ap("",t.fmtSprintDate(e.start)," \u2192 ",t.fmtSprintDate(e.end));}}function Ro(o,n){if(o&1&&(oi(0,"div",6)(1,"span",20),qI(2),Dc(),tI(3,Io,2,1,"span",21),oi(4,"span",22),qI(5,"\xB7"),Dc(),tI(6,Mo,4,2),oi(7,"span",23),qI(8),Dc(),oi(9,"span",24),qI(10),Dc()()),o&2){let e=n;xy(2),xp(e.name),xy(),nI(e.goal?3:-1),xy(3),nI(e.start||e.end?6:-1),xy(2),_c("",e.capacity," pts"),xy(),RI("st-"+e.status),xy(),xp(e.status);}}function Oo(o,n){if(o&1&&(oi(0,"mat-button-toggle",3),qI(1),Dc()),o&2){let e=n.$implicit,t=hI();ap("value",e),xy(),xp(e==="all"?"Todas":t.PRIORITY_LABELS[e]);}}function Ao(o,n){if(o&1&&(oi(0,"mat-option",3),qI(1),Dc()),o&2){let e=n.$implicit;ap("value",e.id),xy(),xp(e.name);}}function Bo(o,n){o&1&&(oi(0,"mat-option",33),qI(1,"Sin coincidencias"),Dc());}function Fo(o,n){if(o&1){let e=fI();oi(0,"mat-chip",36),hp("removed",function(){let i=Yl(e).$implicit,a=hI(3);return Kl(a.removeAssignee(i))}),qI(1),oi(2,"button",37)(3,"mat-icon"),qI(4,"close"),Dc()()();}if(o&2){let e=n.$implicit,t=hI(3),i=t.resolveMember(e);Tp("background",t.pastel(i?.color||"#9aa0a6")),ap("matTooltip",i?.name||e),xy(),_c(" ",t.shortName(i?.name||e)," "),xy(),sp("aria-label","Quitar "+(i?.name||e));}}function Lo(o,n){if(o&1&&(oi(0,"mat-chip-set",34),iI(1,Fo,5,5,"mat-chip",35,oI),Dc()),o&2){let e=hI(2);xy(),sI(e.selectedAssignees());}}function No(o,n){if(o&1){let e=fI();oi(0,"div",13)(1,"span",26),qI(2,"Asignado a:"),Dc(),oi(3,"mat-form-field",27)(4,"mat-label"),qI(5,"Consultores"),Dc(),oi(6,"mat-select",28),hp("selectionChange",function(i){Yl(e);let a=hI();return Kl(a.onAssigneeSelectChange(i.value))})("closed",function(){Yl(e);let i=hI();return Kl(i.buscarAsignado.set(""))}),oi(7,"div",29),hp("click",function(i){return i.stopPropagation()}),oi(8,"div",30)(9,"mat-icon"),qI(10,"search"),Dc(),oi(11,"input",31),hp("input",function(i){Yl(e);let a=hI();return Kl(a.buscarAsignado.set(i.target.value))})("keydown",function(i){return i.stopPropagation()}),Dc()(),oi(12,"button",32),hp("click",function(i){return Yl(e),hI().toggleAllAssignees(),Kl(i.stopPropagation())}),qI(13),Dc()(),iI(14,Ao,2,2,"mat-option",3,dt,false,Bo,2,0,"mat-option",33),Dc()(),tI(17,Lo,3,0,"mat-chip-set",34),Dc();}if(o&2){let e=hI();xy(6),ap("value",e.selectedAssignees()),xy(5),ap("value",e.buscarAsignado()),xy(2),_c(" ",e.allAssigneesSelected()?"Quitar todos":"Seleccionar todos"," "),xy(),sI(e.assigneeOptions()),xy(3),nI(e.selectedAssignees().length?17:-1);}}function Vo(o,n){if(o&1&&(oi(0,"mat-option",3),qI(1),Dc()),o&2){let e=n.$implicit;ap("value",e.id),xy(),xp(e.name);}}function zo(o,n){o&1&&(oi(0,"mat-option",33),qI(1,"Sin coincidencias"),Dc());}function Go(o,n){if(o&1){let e=fI();oi(0,"mat-chip",41),hp("removed",function(){let i=Yl(e).$implicit,a=hI(3);return Kl(a.removeClient(i))}),qI(1),oi(2,"button",37)(3,"mat-icon"),qI(4,"close"),Dc()()();}if(o&2){let e=n.$implicit,t=hI(3);Tp("background",t.pastel(t.clientColorOf(e))),ap("matTooltip",t.clientNameOf(e)),xy(),_c(" ",t.clientNameOf(e)," "),xy(),sp("aria-label","Quitar "+t.clientNameOf(e));}}function Ho(o,n){if(o&1&&(oi(0,"mat-chip-set",34),iI(1,Go,5,5,"mat-chip",40,oI),Dc()),o&2){let e=hI(2);xy(),sI(e.selectedClients());}}function Uo(o,n){if(o&1){let e=fI();oi(0,"div",14)(1,"span",26),qI(2,"Cliente:"),Dc(),oi(3,"mat-form-field",38)(4,"mat-label"),qI(5,"Clientes"),Dc(),oi(6,"mat-select",28),hp("selectionChange",function(i){Yl(e);let a=hI();return Kl(a.onClientSelectChange(i.value))})("closed",function(){Yl(e);let i=hI();return Kl(i.buscarCliente.set(""))}),oi(7,"div",29),hp("click",function(i){return i.stopPropagation()}),oi(8,"div",30)(9,"mat-icon"),qI(10,"search"),Dc(),oi(11,"input",39),hp("input",function(i){Yl(e);let a=hI();return Kl(a.buscarCliente.set(i.target.value))})("keydown",function(i){return i.stopPropagation()}),Dc()(),oi(12,"button",32),hp("click",function(i){return Yl(e),hI().toggleAllClients(),Kl(i.stopPropagation())}),qI(13),Dc()(),iI(14,Vo,2,2,"mat-option",3,dt,false,zo,2,0,"mat-option",33),Dc()(),tI(17,Ho,3,0,"mat-chip-set",34),Dc();}if(o&2){let e=hI();xy(6),ap("value",e.selectedClients()),xy(5),ap("value",e.buscarCliente()),xy(2),_c(" ",e.allClientsSelected()?"Quitar todos":"Seleccionar todos"," "),xy(),sI(e.clientOptions()),xy(3),nI(e.selectedClients().length?17:-1);}}function Wo(o,n){if(o&1){let e=fI();oi(0,"button",42),hp("click",function(){Yl(e);let i=hI();return Kl(i.clearBoard())}),oi(1,"mat-icon"),qI(2,"delete_sweep"),Dc(),qI(3," Borrar Board "),Dc();}}function $o(o,n){if(o&1){let e=fI();oi(0,"button",66),hp("click",function(i){Yl(e);let a=hI().$implicit,r=hI(2);return Kl(r.copiarTicket(a.ticket,i))}),oi(1,"mat-icon"),qI(2),Dc()();}if(o&2){let e=hI().$implicit,t=hI(2);ap("matTooltip",t.ticketCopiado()===e.ticket?"Copiado":"Copiar n\xFAmero"),xy(2),xp(t.ticketCopiado()===e.ticket?"check":"content_copy");}}function jo(o,n){if(o&1){let e=fI();oi(0,"button",67),hp("click",function(i){Yl(e);let a=hI().$implicit,r=hI(2);return i.stopPropagation(),Kl(r.deleteCard(a))}),oi(1,"mat-icon"),qI(2,"close"),Dc()();}}function qo(o,n){if(o&1&&(oi(0,"span",57),qI(1),Dc()),o&2){hI();let e=KI(1);xy(),xp(e.name);}}function Zo(o,n){if(o&1&&(oi(0,"span",59),qI(1),Dc()),o&2){let e=hI().$implicit;xy(),xp(e.hdEstatus);}}function Ko(o,n){if(o&1&&(oi(0,"div",60),qI(1),Dc()),o&2){hI();let e=KI(2);xy(),_c("\u26A0 Pr\xF3ximo a vencer \u2014 ",e.badge);}}function Qo(o,n){if(o&1){let e=fI();oi(0,"div",68),hp("click",function(i){return i.stopPropagation()}),cp(1,"mat-progress-bar",69),oi(2,"input",70),hp("change",function(i){Yl(e);let a=hI().$implicit,r=hI(2);return Kl(r.onProgressChange(a,i.target.value))}),Dc()(),oi(3,"button",71),hp("click",function(i){Yl(e);let a=hI().$implicit,r=hI(2);return i.stopPropagation(),Kl(r.toggleWaiting(a))}),qI(4),Dc();}if(o&2){let e=hI().$implicit,t=hI(2);xy(),Tp("--mdc-linear-progress-active-indicator-color",t.progColor(e.progress)),ap("value",e.progress),xy(),ap("value",e.progress);let i=t.waitingDays(e);xy(),Cp("active",i!==null&&i<3)("alert",i!==null&&i>=3),xy(),_c(" ",i!==null&&i>=3?"\u26A0 Notificar al cliente":"\u23F3 Esperando cliente"," ");}}function Yo(o,n){if(o&1){let e=fI();oi(0,"div",72),hp("click",function(i){return i.stopPropagation()}),oi(1,"mat-checkbox",73),hp("change",function(i){Yl(e);let a=hI().$implicit,r=hI(2);return Kl(r.onCert(a,i))}),Dc(),oi(2,"span",74),qI(3,"Certificado"),Dc()();}o&2&&(xy(),ap("checked",false));}function Xo(o,n){if(o&1){let e=fI();oi(0,"div",72),hp("click",function(i){return i.stopPropagation()}),oi(1,"mat-checkbox",75),hp("change",function(i){Yl(e);let a=hI().$implicit,r=hI(2);return Kl(r.onFinalize(a,i))}),qI(2),Dc()();}if(o&2){let e=hI().$implicit;xy(),ap("checked",e.approved)("disabled",!!e.ticket),xy(),_c(" ",e.approved?"Finalizado \u2713":"Finalizado"," ");}}function Jo(o,n){if(o&1&&(oi(0,"span",76),qI(1),Dc()),o&2){hI();let e=KI(0);Tp("background",e.color),ap("matTooltip",e.name),xy(),xp(e.id);}}function ea(o,n){o&1&&cp(0,"span",65);}function ta(o,n){if(o&1){let e=fI();Lp(0)(1)(2),oi(3,"mat-card",50),hp("click",function(){let i=Yl(e).$implicit,a=hI(2);return Kl(a.openDetail(i))}),oi(4,"div",51)(5,"span",52),qI(6),Dc(),tI(7,$o,3,2,"button",53),oi(8,"span",54),qI(9),Dc(),cp(10,"span",55),tI(11,jo,3,0,"button",56),Dc(),tI(12,qo,2,1,"span",57),oi(13,"div",58),qI(14),Dc(),tI(15,Zo,2,1,"span",59),tI(16,Ko,2,1,"div",60),tI(17,Qo,5,9)(18,Yo,4,1,"div",61)(19,Xo,3,3,"div",61),oi(20,"div",62)(21,"span",63)(22,"mat-icon"),qI(23,"event"),Dc(),qI(24),Dc(),tI(25,Jo,2,4,"span",64)(26,ea,1,0,"span",65),Dc()();}if(o&2){let e,t=n.$implicit,i=hI(2),a=YI(i.resolveMember(t.assignee));xy();let r=YI(i.clientOf(t.client)),s=i.clientStyle(r);xy();let h=YI(i.dueInfo(t.dueDate,t.status));xy(),Tp("background",s.bg)("color",s.ink)("--accent",s.accent)("--tilt",i.cardTilt(t.id)),Cp("not-mine",!i.canDrag(t))("overdue",h.overdue)("soon",h.soon),ap("cdkDragData",t),xy(3),_c("#",t.ticket||"\u2014"),xy(),nI(t.ticket?7:-1),xy(),RI("prio-"+t.priority),xy(),xp(i.PRIORITY_LABELS[t.priority]),xy(2),nI(i.puedeGestionarTodo()?11:-1),xy(),nI(r?12:-1),xy(2),xp(t.title),xy(),nI(t.ticket&&t.hdEstatus?15:-1),xy(),nI(h.soon?16:-1),xy(),nI((e=t.status)==="in_progress"?17:e==="review"?18:e==="done"?19:-1),xy(4),Cp("overdue",h.overdue)("soon",h.soon),xy(3),_c("",h.str||"\u2014"," "),xy(),nI(a?25:26);}}function na(o,n){o&1&&(oi(0,"div",49)(1,"span"),qI(2,"\u25CB"),Dc(),oi(3,"span"),qI(4,"Sin tareas"),Dc()());}function ia(o,n){if(o&1){let e=fI();oi(0,"section",19)(1,"header",43),cp(2,"span",44),oi(3,"span",45),qI(4),Dc(),oi(5,"span",46),qI(6),Dc()(),oi(7,"div",47),hp("cdkDropListDropped",function(i){let a=Yl(e).$implicit,r=hI();return Kl(r.drop(i,a.status))}),iI(8,ta,27,35,"mat-card",48,dt,false,na,5,0,"div",49),Dc()();}if(o&2){let e=n.$implicit;xy(),RI("head-"+e.status),xy(),RI("dot-"+e.status),xy(2),xp(e.label),xy(2),xp(e.cards.length),xy(),ap("cdkDropListData",e.cards),xy(),sI(e.cards);}}var Vi=class o{data=D(w);auth=D(Bn);helpdesk=D(dt$1);dialog=D(vt);snack=D(Qt);syncing=Mo$1(false);constructor(){this.helpdesk.getHdUsers(),this.helpdesk.getClients(),this.helpdesk.getTicketStatuses(),this.data.ensureInit().then(()=>this.syncTicketStatuses());}async syncTicketStatuses(){let n=this.data.sprints().active,e=this.data.getStoriesBySprint(n).filter(t=>t.ticket);e.length&&(this.syncing.set(true),await Promise.all(e.map(async t=>{let i=await this.helpdesk.fetchTicketRaw(t.ticket);if(!i)return;let a=String(i.client_id??"").trim();a&&t.client!==a&&this.data.updateStoryClient(t.id,a);let r=String(i.assigned_user_id||"").trim().toUpperCase(),s=String(t.assignee||"").trim().toUpperCase();s&&s!==r&&this.helpdesk.assignTicket(t.ticket,s);let h=String(i.estado||"");h&&t.hdEstatus!==h&&this.data.updateStoryHdEstatus(t.id,h);let p=Fi$1(h);t.status!==p.status&&this.data.updateStoryStatus(t.id,p.status),p.approved!==void 0&&!!t.approved!==p.approved&&(p.approved?this.data.approveStory(t.id):this.data.unapproveStory(t.id)),p.waiting&&!t.waitingClient&&this.data.setWaitingClient(t.id,true);})),this.syncing.set(false));}resolveMember=n=>Ni$1(n,this.data.team(),this.helpdesk.hdUsers());dueInfo=Oa;progColor=Vi$1;clientStyle=Aa;pastel=Ea;cardTilt=Ta;STATUS_LABELS=Ri$1;PRIORITY_LABELS=Li$1;PRIORITY_FILTERS=["all","alta","media","baja"];priorityFilter=Mo$1("all");activeClients=Mo$1(new Set);activeAssignees=Mo$1(new Set);ticketSearch=Mo$1("");mineOnly=Mo$1(false);puedeGestionarTodo=this.auth.puedeGestionarTodo;puedeBorrarBoard=this.auth.puedeBorrarBoard;get myId(){return String(this.auth.session()?.id||"").trim().toUpperCase()}sprints=lD(()=>this.data.sprints().sprints);activeSprintId=lD(()=>this.data.sprints().active);activeSprint=lD(()=>this.data.getActiveSprint());setSprint(n){this.data.setActiveSprint(n);}openNewSprint(){this.dialog.open(ye,{data:{sprint:null},width:"480px",maxWidth:"95vw"});}openEditSprint(){let n=this.activeSprint();n&&this.dialog.open(ye,{data:{sprint:n},width:"480px",maxWidth:"95vw"});}fmtSprintDate(n){return n?new Date(n+"T00:00:00").toLocaleDateString("es-ES",{day:"2-digit",month:"short",year:"numeric"}):""}clients=lD(()=>this.data.clients());visibleStories=lD(()=>{let n=this.data.sprints().active,e=new Date;e.setDate(e.getDate()-2);let t=e.toISOString().split("T")[0];return this.data.stories().filter(i=>i.sprint===n).filter(i=>!(i.status==="done"&&i.approved&&(i.approvedDate||"")<t))});assigneeChips=lD(()=>[...new Set(this.visibleStories().map(e=>e.assignee).filter(Boolean))].map(e=>this.resolveMember(e)).filter(e=>!!e).sort((e,t)=>(e.name||e.id).localeCompare(t.name||t.id,"es")));clientChips=lD(()=>[...new Set(this.visibleStories().map(e=>e.client).filter(Boolean))].map(e=>{let t=this.clientOf(e);return {id:e,name:t?.name||e,color:t?.color||nt(e)}}).sort((e,t)=>e.name.localeCompare(t.name,"es")));buscarAsignado=Mo$1("");buscarCliente=Mo$1("");filtraOpc(n,e){let t=e.trim().toLowerCase();return t?n.filter(i=>i.name.toLowerCase().includes(t)||i.id.toLowerCase().includes(t)):n}assigneeOptions=lD(()=>this.filtraOpc(this.assigneeChips(),this.buscarAsignado()));clientOptions=lD(()=>this.filtraOpc(this.clientChips(),this.buscarCliente()));columns=lD(()=>{let n=this.priorityFilter(),e=this.activeClients(),t=this.activeAssignees(),i=this.ticketSearch().trim(),a=this.mineOnly(),r=this.myId,s=this.visibleStories().filter(h=>!(a&&String(h.assignee||"").trim().toUpperCase()!==r||n!=="all"&&h.priority!==n||e.size>0&&!(h.client&&e.has(h.client))||t.size>0&&!(!h.assignee||t.has(h.assignee))||i&&!(h.ticket&&String(h.ticket).includes(i))));return Pi$1.map(h=>({status:h,label:Ri$1[h],cards:s.filter(p=>p.status===h)}))});get workDeps(){return {data:this.data,auth:this.auth,dialog:this.dialog,snack:this.snack}}setPriority(n){this.priorityFilter.set(n),this.activeAssignees.set(new Set);}toggleMine(){let n=!this.mineOnly();this.mineOnly.set(n),n&&this.activeAssignees.set(new Set);}ticketCopiado=Mo$1(null);copiarTicket(n,e){e.stopPropagation(),navigator.clipboard?.writeText(String(n)).then(()=>{this.ticketCopiado.set(n),setTimeout(()=>this.ticketCopiado.set(null),1500);}).catch(()=>{});}selectedAssignees=lD(()=>[...this.activeAssignees()]);onAssigneeSelectChange(n){this.activeAssignees.set(new Set(n));}allAssigneesSelected=lD(()=>this.assigneeChips().length>0&&this.selectedAssignees().length===this.assigneeChips().length);toggleAllAssignees(){this.allAssigneesSelected()?this.activeAssignees.set(new Set):this.activeAssignees.set(new Set(this.assigneeChips().map(n=>n.id)));}shortName=Ia;removeAssignee(n){let e=new Set(this.activeAssignees());e.delete(n),this.activeAssignees.set(e);}clearAssignees(){this.activeAssignees.set(new Set);}selectedClients=lD(()=>[...this.activeClients()]);onClientSelectChange(n){this.activeClients.set(new Set(n));}allClientsSelected=lD(()=>this.clientChips().length>0&&this.selectedClients().length===this.clientChips().length);toggleAllClients(){this.allClientsSelected()?this.activeClients.set(new Set):this.activeClients.set(new Set(this.clientChips().map(n=>n.id)));}removeClient(n){let e=new Set(this.activeClients());e.delete(n),this.activeClients.set(e);}clientNameOf(n){return this.clientChips().find(e=>e.id===n)?.name||n}clientColorOf(n){return this.clientChips().find(e=>e.id===n)?.color||"#9aa0a6"}clientOf(n){if(!n)return;let e=this.data.getClient(n);if(e)return {id:e.id,name:e.name,color:e.color};let t=this.helpdesk.clients().find(i=>i.id===n);return t?{id:t.id,name:t.name}:{id:n,name:n}}puedeOperar(n){if(this.puedeGestionarTodo())return  true;let e=String(n.assignee||"").trim().toUpperCase();return !!e&&e===this.myId}canDrag(n){return this.puedeOperar(n)}avisoSinPermiso(){this.snack.open("No tienes permisos para modificar esta tarea. Solo el asignado, un supervisor o el Helpdesk pueden.","OK",{duration:4e3});}async drop(n,e){let t=n.item.data;if(!(!t||t.status===e)){if(!this.puedeOperar(t)){this.avisoSinPermiso();return}if(e==="todo"&&t.ticket){this.snack.open("Una tarea con ticket no puede volver a To Do.","OK",{duration:3e3});return}if(t.status==="todo"&&e==="in_progress"){if(!await Wi$1(t,this.workDeps))return}else if(!await oh(this.dialog.open(ae,{data:{title:"Mover tarea",message:`\xBFMover "${t.title}" a "${Ri$1[e]}"?`,confirmText:"Mover"}}).afterClosed()))return;this.data.updateStoryStatus(t.id,e),this.pushHdEstado(t,Bi$1[e]);}}pushHdEstado(n,e){!n.ticket||!e||this.helpdesk.setTicketStatus(n.ticket,e).then(t=>{t?this.data.updateStoryHdEstatus(n.id,e):this.snack.open(`No se pudo actualizar el estado del ticket #${n.ticket} en el Helpdesk.`,"OK",{duration:4e3});});}openDetail(n){this.dialog.open($i$1,{data:{story:n},width:"560px",maxWidth:"95vw"});}openNew(){this.dialog.open($i$1,{data:{story:null},width:"560px",maxWidth:"95vw"});}onProgressChange(n,e){this.data.updateStoryProgress(n.id,Hi(parseInt(e,10)||0));}waitingDays(n){return !n.waitingClient||!n.waitingDate?null:Math.floor((Date.now()-new Date(n.waitingDate+"T00:00:00").getTime())/864e5)}toggleWaiting(n){let e=!n.waitingClient;this.data.setWaitingClient(n.id,e),e&&this.pushHdEstado(n,Da);}async onCert(n,e){if(!e.checked)return;if(!this.puedeOperar(n)){e.source.checked=false,this.avisoSinPermiso();return}if(!await oh(this.dialog.open(ae,{data:{title:"Certificar tarea",message:`\xBFMarcar "${n.title}" como certificada y moverla a Finalizado?`,confirmText:"Certificar"}}).afterClosed())){e.source.checked=false;return}this.data.updateStoryStatus(n.id,"done"),this.pushHdEstado(n,Bi$1.done);}async onFinalize(n,e){if(n.ticket)return;if(!this.puedeOperar(n)){e.source.checked=!!n.approved,this.avisoSinPermiso();return}if(!e.checked){this.data.unapproveStory(n.id);return}if(!await oh(this.dialog.open(ae,{data:{title:"Finalizar tarea",message:`\xBFMarcar "${n.title}" como finalizada?`,confirmText:"Finalizar"}}).afterClosed())){e.source.checked=false;return}this.data.approveStory(n.id);}async deleteCard(n){await oh(this.dialog.open(ae,{data:{title:"Eliminar tarea",message:`Vas a eliminar la tarea:

"${n.title}"

Esta acci\xF3n NO se puede deshacer.`,confirmText:"Eliminar",danger:true,requireWord:"BORRAR"}}).afterClosed())&&this.data.deleteStory(n.id);}async clearBoard(){let n=this.data.sprints().active,e=this.data.getStoriesBySprint(n).map(i=>i.id);if(!e.length){this.snack.open("No hay tareas en el sprint.","OK",{duration:3e3});return}await oh(this.dialog.open(ae,{data:{title:"Borrar board",message:`Vas a eliminar ${e.length} tarea(s) del sprint activo.

Esta acci\xF3n NO se puede deshacer.`,confirmText:"Borrar todo",danger:true,requireWord:"BORRAR"}}).afterClosed())&&e.forEach(i=>this.data.deleteStory(i));}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=xE({type:o,selectors:[["app-board"]],decls:39,vars:11,consts:[[1,"sprint-bar"],["appearance","outline","subscriptSizing","dynamic",1,"sprint-select"],[3,"selectionChange","value"],[3,"value"],["mat-icon-button","","matTooltip","Editar sprint actual",3,"click","disabled"],["mat-icon-button","","matTooltip","Nuevo sprint",3,"click"],[1,"sprint-banner"],[1,"board-toolbar"],["hideSingleSelectionIndicator","","aria-label","Filtrar por prioridad",1,"prio-filter",3,"change","value"],["type","button","mat-stroked-button","","matTooltip","Mostrar solo mis tareas",1,"mine-toggle",3,"click"],["appearance","outline","subscriptSizing","dynamic",1,"ticket-search"],["matInput","","inputmode","numeric","placeholder","Buscar ticket\u2026",3,"input","value"],["matSuffix",""],[1,"assignee-filter"],[1,"client-filter"],[1,"spacer"],["mat-flat-button","","color","primary",3,"click"],["mat-stroked-button","",1,"danger"],["cdkDropListGroup","",1,"kanban"],[1,"kanban-col"],[1,"sb-name"],[1,"sb-goal"],[1,"sb-sep"],[1,"sb-cap"],[1,"sb-status"],[1,"sb-dates"],[1,"filter-label"],["appearance","outline","subscriptSizing","dynamic",1,"assignee-select"],["multiple","",3,"selectionChange","closed","value"],[1,"sel-head",3,"click"],[1,"sel-head-search"],["placeholder","Buscar consultor\u2026",3,"input","keydown","value"],["type","button",1,"sel-head-all",3,"click"],["disabled",""],[1,"assignee-chips"],[1,"achip",3,"background","matTooltip"],[1,"achip",3,"removed","matTooltip"],["matChipRemove",""],["appearance","outline","subscriptSizing","dynamic",1,"client-select"],["placeholder","Buscar cliente\u2026",3,"input","keydown","value"],[1,"achip","cchip",3,"background","matTooltip"],[1,"achip","cchip",3,"removed","matTooltip"],["mat-stroked-button","",1,"danger",3,"click"],[1,"col-header"],[1,"col-dot"],[1,"col-title"],[1,"col-count"],["cdkDropList","",1,"col-cards",3,"cdkDropListDropped","cdkDropListData"],["cdkDrag","",1,"story-card",3,"not-mine","overdue","soon","background","color","--accent","--tilt","cdkDragData"],[1,"empty-col"],["cdkDrag","",1,"story-card",3,"click","cdkDragData"],[1,"card-top"],[1,"card-ticket"],["aria-label","Copiar n\xFAmero de ticket",1,"card-copy",3,"matTooltip"],[1,"prio-badge"],[1,"grow"],["mat-icon-button","","matTooltip","Eliminar tarea",1,"del-btn"],[1,"client-name"],[1,"card-title"],[1,"hd-estatus"],[1,"soon-badge"],[1,"card-check"],[1,"card-bottom"],[1,"card-due"],[1,"avatar",3,"background","matTooltip"],["matTooltip","Sin asignar",1,"avatar","unassigned"],["aria-label","Copiar n\xFAmero de ticket",1,"card-copy",3,"click","matTooltip"],["mat-icon-button","","matTooltip","Eliminar tarea",1,"del-btn",3,"click"],[1,"prog",3,"click"],["mode","determinate",3,"value"],["type","number","min","0","max","100","step","5",3,"change","value"],[1,"wait-btn",3,"click"],[1,"card-check",3,"click"],["aria-label","Certificado",3,"change","checked"],[1,"check-text"],[3,"change","checked","disabled"],[1,"avatar",3,"matTooltip"]],template:function(e,t){if(e&1&&(oi(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),qI(3,"Sprint"),Dc(),oi(4,"mat-select",2),hp("selectionChange",function(a){return t.setSprint(a.value)}),iI(5,Eo,2,3,"mat-option",3,dt),Dc()(),oi(7,"button",4),hp("click",function(){return t.openEditSprint()}),oi(8,"mat-icon"),qI(9,"edit"),Dc()(),oi(10,"button",5),hp("click",function(){return t.openNewSprint()}),oi(11,"mat-icon"),qI(12,"add"),Dc()(),tI(13,Ro,11,7,"div",6),Dc(),oi(14,"div",7)(15,"mat-button-toggle-group",8),hp("change",function(a){return t.setPriority(a.value)}),iI(16,Oo,2,2,"mat-button-toggle",3,oI),Dc(),oi(18,"button",9),hp("click",function(){return t.toggleMine()}),oi(19,"mat-icon"),qI(20,"person"),Dc(),qI(21," Asignados a m\xED "),Dc(),oi(22,"mat-form-field",10)(23,"mat-label"),qI(24,"N\xB0 ticket"),Dc(),oi(25,"input",11),hp("input",function(a){return t.ticketSearch.set(a.target.value)}),Dc(),oi(26,"mat-icon",12),qI(27,"search"),Dc()(),tI(28,No,18,5,"div",13),tI(29,Uo,18,5,"div",14),cp(30,"span",15),oi(31,"button",16),hp("click",function(){return t.openNew()}),oi(32,"mat-icon"),qI(33,"add"),Dc(),qI(34," Tarea "),Dc(),tI(35,Wo,4,0,"button",17),Dc(),oi(36,"div",18),iI(37,ia,11,8,"section",19,To),Dc()),e&2){let i;xy(4),ap("value",t.activeSprintId()),xy(),sI(t.sprints()),xy(2),ap("disabled",!t.activeSprint()),xy(6),nI((i=t.activeSprint())?13:-1,i),xy(2),ap("value",t.priorityFilter()),xy(),sI(t.PRIORITY_FILTERS),xy(2),Cp("active",t.mineOnly()),sp("aria-pressed",t.mineOnly()),xy(7),ap("value",t.ticketSearch()),xy(3),nI(t.assigneeChips().length?28:-1),xy(),nI(t.clientChips().length?29:-1),xy(6),nI(t.puedeBorrarBoard()?35:-1),xy(2),sI(t.columns());}},dependencies:[Ai,Oi,Ri,Mi,_,I$1,va,ga,An,Li,At,lt,Di$1,it,_a,Mi$1,de,it$1,oe,Ot$1,nn,tn,Ft$1,Rt$1,J,Ni,Lt,yi$1,vi$1,Ba,La,Gi,Oe],styles:['[_nghost-%COMP%]{display:block;padding:16px;min-height:100%;box-sizing:border-box;background-color:#efeadf;background-image:linear-gradient(rgba(43,43,58,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(43,43,58,.04) 1px,transparent 1px);background-size:24px 24px}.sprint-bar[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px;padding:8px 12px;background:#ffffffbf;border:1px solid rgba(43,43,58,.08);border-radius:12px;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.sprint-bar[_ngcontent-%COMP%]   .sprint-select[_ngcontent-%COMP%]{width:180px}.sprint-banner[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-left:8px;font-size:13px;color:#2b2b3a}.sprint-banner[_ngcontent-%COMP%]   .sb-name[_ngcontent-%COMP%]{font-weight:700}.sprint-banner[_ngcontent-%COMP%]   .sb-goal[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}.sprint-banner[_ngcontent-%COMP%]   .sb-sep[_ngcontent-%COMP%]{color:var(--mat-sys-outline)}.sprint-banner[_ngcontent-%COMP%]   .sb-dates[_ngcontent-%COMP%], .sprint-banner[_ngcontent-%COMP%]   .sb-cap[_ngcontent-%COMP%]{font-size:12px;color:var(--mat-sys-on-surface-variant)}.sprint-banner[_ngcontent-%COMP%]   .sb-status[_ngcontent-%COMP%]{font-size:10px;font-weight:700;text-transform:uppercase;padding:1px 8px;border-radius:9px;color:#fff}.sprint-banner[_ngcontent-%COMP%]   .sb-status.st-active[_ngcontent-%COMP%]{background:#27ae60}.sprint-banner[_ngcontent-%COMP%]   .sb-status.st-completed[_ngcontent-%COMP%]{background:#8a8a9a}.sprint-banner[_ngcontent-%COMP%]   .sb-status.st-planned[_ngcontent-%COMP%]{background:var(--brand)}.board-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:18px;padding:10px 12px;background:#ffffffbf;border:1px solid rgba(43,43,58,.08);border-radius:12px;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.board-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}.board-toolbar[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%]{color:var(--mat-sys-error)}.board-toolbar[_ngcontent-%COMP%]   .mine-toggle[_ngcontent-%COMP%]{--mat-icon-size: 18px}.board-toolbar[_ngcontent-%COMP%]   .mine-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:2px}.board-toolbar[_ngcontent-%COMP%]   .mine-toggle.active[_ngcontent-%COMP%]{background:var(--brand, #048abf);color:#fff;border-color:var(--brand, #048abf)}.assignee-filter[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.assignee-filter[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%]{font-size:12px;color:var(--mat-sys-on-surface-variant)}.assignee-select[_ngcontent-%COMP%]{width:200px}.assignee-chips[_ngcontent-%COMP%]{display:flex}.achip[_ngcontent-%COMP%]{font-size:11.5px;font-weight:600;color:#3a3a4a;min-height:26px}.achip[_ngcontent-%COMP%]   button[matChipRemove][_ngcontent-%COMP%]{color:#3a3a4a;opacity:.7}.achip[_ngcontent-%COMP%]   button[matChipRemove][_ngcontent-%COMP%]:hover{opacity:1}.achip[_ngcontent-%COMP%]   button[matChipRemove][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.client-filter[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.client-select[_ngcontent-%COMP%]{width:200px}.ticket-search[_ngcontent-%COMP%]{width:150px}.cchip[_ngcontent-%COMP%]{max-width:200px}.cchip[_ngcontent-%COMP%]     .mdc-evolution-chip__text-label{overflow:hidden;text-overflow:ellipsis}.kanban[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(220px,1fr));gap:16px;align-items:start}.kanban-col[_ngcontent-%COMP%]{background:#fff6;border:1px solid rgba(43,43,58,.06);border-radius:12px;padding:10px;min-height:140px}.col-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:2px 4px 8px;margin-bottom:6px;border-bottom:2px solid var(--mat-sys-outline-variant)}.col-header[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%]{font-size:13px;font-weight:800;letter-spacing:.03em;text-transform:uppercase;color:#2b2b3a}.col-header[_ngcontent-%COMP%]   .col-count[_ngcontent-%COMP%]{margin-left:auto;font-size:12px;font-weight:700;color:#2b2b3a;background:#fff;border:1px solid rgba(43,43,58,.12);border-radius:10px;padding:1px 8px}.col-header.head-todo[_ngcontent-%COMP%]{border-bottom-color:#8a8a9a}.col-header.head-in_progress[_ngcontent-%COMP%]{border-bottom-color:var(--brand)}.col-header.head-review[_ngcontent-%COMP%]{border-bottom-color:var(--accent)}.col-header.head-done[_ngcontent-%COMP%]{border-bottom-color:#27ae60}.col-dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:50%}.col-dot.dot-todo[_ngcontent-%COMP%]{background:#8a8a9a}.col-dot.dot-in_progress[_ngcontent-%COMP%]{background:var(--brand)}.col-dot.dot-review[_ngcontent-%COMP%]{background:var(--accent)}.col-dot.dot-done[_ngcontent-%COMP%]{background:#27ae60}.col-cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px;min-height:60px;padding:4px 2px}.empty-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px;padding:24px 0;color:#2b2b3a59;font-size:12px}.story-card[_ngcontent-%COMP%]{--shadow: 0 4px 10px rgba(43, 43, 58, .16), 0 1px 2px rgba(43, 43, 58, .1);position:relative;padding:11px 12px 10px;border:none;border-top:3px solid var(--accent);border-radius:3px;box-shadow:var(--shadow);cursor:pointer;-webkit-user-select:none;user-select:none;transform:rotate(var(--tilt, 0deg));transition:transform .16s ease,box-shadow .16s ease}.story-card[_ngcontent-%COMP%]:hover{transform:rotate(0) translateY(-3px) scale(1.015);box-shadow:0 10px 22px #2b2b3a38,0 2px 4px #2b2b3a1f;z-index:2}.story-card.not-mine[_ngcontent-%COMP%]{cursor:default;filter:saturate(.85)}.story-card.overdue[_ngcontent-%COMP%]{box-shadow:var(--shadow),0 0 0 2px #e74c3c}.story-card.soon[_ngcontent-%COMP%]{box-shadow:var(--shadow),0 0 0 2px #f29e3b}.story-card.cdk-drag-dragging[_ngcontent-%COMP%]{transform:rotate(0);box-shadow:0 14px 30px #2b2b3a47}.card-top[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:4px}.card-top[_ngcontent-%COMP%]   .grow[_ngcontent-%COMP%]{flex:1}.card-top[_ngcontent-%COMP%]   .card-ticket[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:12px;font-weight:700;color:#2b2b3a}.card-top[_ngcontent-%COMP%]   .card-copy[_ngcontent-%COMP%]{flex:none;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;margin-left:-4px;padding:0;border:none;background:transparent;color:#6d6d75;cursor:pointer;border-radius:50%}.card-top[_ngcontent-%COMP%]   .card-copy[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.card-top[_ngcontent-%COMP%]   .card-copy[_ngcontent-%COMP%]:hover{background:#00000014;color:#2b2b3a}.card-top[_ngcontent-%COMP%]   .del-btn[_ngcontent-%COMP%]{width:24px;height:24px;line-height:24px;color:#2b2b3a8c}.card-top[_ngcontent-%COMP%]   .del-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.prio-badge[_ngcontent-%COMP%]{font-size:10px;font-weight:700;letter-spacing:.02em;text-transform:uppercase;padding:1px 7px;border-radius:9px;color:#fff}.prio-badge.prio-alta[_ngcontent-%COMP%]{background:#e74c3c}.prio-badge.prio-media[_ngcontent-%COMP%]{background:#f2811d}.prio-badge.prio-baja[_ngcontent-%COMP%]{background:#2b2b3a73}.client-name[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;color:#2b2b3a;margin-bottom:4px}.client-name[_ngcontent-%COMP%]:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--accent)}.card-title[_ngcontent-%COMP%]{font-size:13px;line-height:1.35;color:#2b2b3a;margin-bottom:8px}.soon-badge[_ngcontent-%COMP%]{font-size:11px;font-weight:600;color:#b5560e;margin-bottom:8px}.hd-estatus[_ngcontent-%COMP%]{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.02em;text-transform:uppercase;color:#2b2b3a;background:#ffffffa6;border:1px solid var(--accent);border-radius:9px;padding:1px 8px;margin-bottom:8px}.prog[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.prog[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{flex:1;border-radius:4px}.prog[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:48px;padding:3px 5px;border:1px solid rgba(43,43,58,.2);border-radius:5px;background:#ffffffb3;color:#2b2b3a;font:inherit;font-size:12px;text-align:right}.wait-btn[_ngcontent-%COMP%]{width:100%;border:1px solid rgba(43,43,58,.18);background:#ffffff8c;color:#2b2b3a;border-radius:6px;padding:5px 8px;font-size:12px;cursor:pointer;margin-bottom:8px}.wait-btn.active[_ngcontent-%COMP%]{background:#fef5e7;border-color:#f29e3b;color:#b9770e}.wait-btn.alert[_ngcontent-%COMP%]{background:#fdedec;border-color:#e74c3c;color:#c0392b;font-weight:600;animation:_ngcontent-%COMP%_pulse 1.4s ease-in-out infinite}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1}50%{opacity:.55}}.card-check[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;margin-bottom:6px;font-size:13px;color:#2b2b3a}.check-text[_ngcontent-%COMP%]{cursor:default}.card-bottom[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:4px}.card-due[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:3px;font-size:11px;color:#2b2b3a99}.card-due[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.card-due.overdue[_ngcontent-%COMP%]{color:#c0392b;font-weight:700}.card-due.soon[_ngcontent-%COMP%]{color:#b5560e}.avatar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-width:26px;height:22px;padding:0 8px;border-radius:11px;font-family:JetBrains Mono,monospace;font-size:10px;font-weight:700;letter-spacing:.02em;color:#fff;box-shadow:0 0 0 2px #fff9}.avatar.unassigned[_ngcontent-%COMP%]{width:26px;height:26px;padding:0;background:transparent;border:1.5px dashed rgba(43,43,58,.4);box-shadow:none}.cdk-drag-preview[_ngcontent-%COMP%]{border-radius:3px;box-shadow:0 14px 30px #2b2b3a4d}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:.3}.col-cards.cdk-drop-list-dragging[_ngcontent-%COMP%]   .story-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .2s cubic-bezier(0,0,.2,1)}@media(max-width:1024px){.kanban[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.kanban[_ngcontent-%COMP%]{grid-template-columns:1fr}.client-select[_ngcontent-%COMP%]{width:100%}}']})};export{Vi as Board};