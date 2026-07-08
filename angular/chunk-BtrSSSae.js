import {Y as Yt,m as mt}from'./chunk-DfMZwUAR.js';import {D,bM as Ds,an as ge,W as Wt,af as S,ah as ct,aJ as q,bL as cr,bH as Iu,ax as Qh,b3 as pr,z as kE,A as bl,C as qr,E as hr,ag as Me,aw as GL,ar as Lv,bK as es,au as Be,x as xE,aV as ZL,bf as wc,bh as lp,t as tI,bg as Tc,c as xy,aa as Tp,n as nI,a6 as sp,K as RI,L as Cp,B as Bn$1,u as ue$1,bS as zt,M as Mo,i as UL,aG as oh,o as oi$1,q as qI,a as Dc,r as cp,h as hp,_ as _c,f as xp,I as Ip,v as DI,F as w$1,X as Xn$1,at as ee$1,aL as nn$1,j as Oy,bD as yh,a2 as Jf,ab as ep,a7 as vp,S as EI,T as II,bT as ys,a1 as Dm,a3 as tD,ai as B$1,a8 as PE,b1 as fp,aW as Up,ao as kh,aU as rm,aN as QL,G as mI,J as yI,d as ap,Q as yp,e as hI,w as iI,b2 as oI,y as sI,ac as fI,ad as Yl,ae as Kl,bp as rI,bU as l,aj as q$2,bv as ht$2,bV as gs,bW as d,a_ as cu,a$ as lu,aO as Ei,aA as Ss,bX as Ul,bG as Yt$1,az as Xt,k as Wt$1,ay as Hr,bY as _e,bo as se$1,bQ as Zv,b0 as io,bZ as ts,aC as zh,O as Op,Z as ZI,R as Rp,ak as nh,bb as Ap,bR as gp,b_ as uy,b$ as Qd}from'./main-2BKZM7EA.js';import {B,C,w,s as se,K,i as ie,r as re,n as ne}from'./chunk-DgQTT3Bi.js';import {O,e as ee,$ as $e,H as Ht$1,j as jt,N as Nt$1,V as Vt$1,z as zt$1}from'./chunk-aHISLVdK.js';import {l as le,b as rt}from'./chunk-CZj29R-k.js';import {F as Ft$1,G,q as q$1,c as Fe,a as Ht,y as yi,v as vi,h as ht,g as gn,Q as Qe,m as me,I as It$1,d as mt$1,O as Oe,z as zt$2,B as Bt$1}from'./chunk-CCuY4iqP.js';import {v as va,g as ga,A as An$1,p as pt,h as ht$1,S as S$1}from'./chunk-D_Pjpzsv.js';function en(i,r){i&1&&lp(0,"div",2);}var tn=new S("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Oa=(()=>{class i{_elementRef=D(hr);_ngZone=D(Me);_changeDetectorRef=D(GL);_renderer=D(Lv);_cleanupTransitionEnd;constructor(){let e=es(),t=D(tn,{optional:true});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode);}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Ia(e||0),this._changeDetectorRef.markForCheck();}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Ia(e||0),this._changeDetectorRef.markForCheck();}_bufferValue=0;animationEnd=new Be;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck();}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler);});}ngOnDestroy(){this._cleanupTransitionEnd?.();}_getPrimaryBarTransform(){return `scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return `${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}));};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=xE({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,a){t&2&&(sp("aria-valuenow",a._isIndeterminate()?null:a.value)("mode",a.mode),RI("mat-"+a.color),Cp("_mat-animation-noopable",a._isNoopAnimation)("mdc-linear-progress--animation-ready",!a._isNoopAnimation)("mdc-linear-progress--indeterminate",a._isIndeterminate()));},inputs:{color:"color",value:[2,"value","value",ZL],bufferValue:[2,"bufferValue","bufferValue",ZL],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,a){t&1&&(wc(0,"div",0),lp(1,"div",1),tI(2,en,1,0,"div",2),Tc(),wc(3,"div",3),lp(4,"span",4),Tc(),wc(5,"div",5),lp(6,"span",4),Tc()),t&2&&(xy(),Tp("flex-basis",a._getBufferBarFlexBasis()),xy(),nI(a.mode==="buffer"?2:-1),xy(),Tp("transform",a._getPrimaryBarTransform()));},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return i})();function Ia(i,r=0,e=100){return Math.max(r,Math.min(e,i))}var Pa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=kE({type:i});static \u0275inj=bl({imports:[qr]})}return i})();function nn(i,r){if(i&1){let e=fI();oi$1(0,"div",1)(1,"button",2),hp("click",function(){Yl(e);let a=hI();return Kl(a.action())}),qI(2),Dc()();}if(i&2){let e=hI();xy(2),_c(" ",e.data.action," ");}}var rn=["label"];function on(i,r){}var sn=Math.pow(2,31)-1,Se=class{_overlayRef;instance;containerInstance;_afterDismissed=new ee$1;_afterOpened=new ee$1;_onAction=new ee$1;_durationTimeoutId;_dismissedByAction=false;constructor(r,e){this._overlayRef=e,this.containerInstance=r,r._onExit.subscribe(()=>this._finishDismiss());}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId);}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=true,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId);}closeWithAction(){this.dismissWithAction();}_dismissAfter(r){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(r,sn));}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete());}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=false;}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Fa=new S("MatSnackBarData"),ue=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},dn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=PE({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),ln=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=PE({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),cn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=PE({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),mn=(()=>{class i{snackBarRef=D(Se);data=D(Fa);action(){this.snackBarRef.dismissWithAction();}get hasAction(){return !!this.data.action}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=xE({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,a){t&1&&(oi$1(0,"div",0),qI(1),Dc(),tI(2,nn,3,1,"div",1)),t&2&&(xy(),_c(" ",a.data.message,`
`),xy(),nI(a.hasAction?2:-1));},dependencies:[ga,dn,ln,cn],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return i})(),Et="_mat-snack-bar-enter",Tt="_mat-snack-bar-exit",pn=(()=>{class i extends ht{_ngZone=D(Me);_elementRef=D(hr);_changeDetectorRef=D(GL);_platform=D(w$1);_animationsDisabled=ct();snackBarConfig=D(ue);_document=D(Xn$1);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=D(ge);_announceDelay=150;_announceTimeoutId;_destroyed=false;_portalOutlet;_onAnnounce=new ee$1;_onExit=new ee$1;_onEnter=new ee$1;_animationState="void";_live;_label;_role;_liveElementId=D(nn$1).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"));}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Tt?this._completeExit():e===Et&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete();}));}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Oy(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Et)));},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Et);},200)));}exit(){return this._destroyed?yh(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Oy(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Tt)));},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Tt),200));}),this._onExit)}ngOnDestroy(){this._destroyed=true,this._clearFromModals(),this._completeExit();}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete();});}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let a=this._label.nativeElement,n="mdc-snackbar__label";a.classList.toggle(n,!a.querySelector(`.${n}`));}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<t.length;a++){let n=t[a],o=n.getAttribute("aria-owns");this._trackedModals.add(n),o?o.indexOf(e)===-1&&n.setAttribute("aria-owns",o+" "+e):n.setAttribute("aria-owns",e);}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let a=t.replace(this._liveElementId,"").trim();a.length>0?e.setAttribute("aria-owns",a):e.removeAttribute("aria-owns");}}),this._trackedModals.clear();}_assertNotAttached(){this._portalOutlet.hasAttached();}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),a=e.querySelector("[aria-live]");if(t&&a){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(n=document.activeElement),t.removeAttribute("aria-hidden"),a.appendChild(t),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete();}},this._announceDelay);});}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=xE({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,a){if(t&1&&vp(gn,7)(rn,7),t&2){let n;EI(n=II())&&(a._portalOutlet=n.first),EI(n=II())&&(a._label=n.first);}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,a){t&1&&hp("animationend",function(o){return a.onAnimationEnd(o.animationName)})("animationcancel",function(o){return a.onAnimationEnd(o.animationName)}),t&2&&Cp("mat-snack-bar-container-enter",a._animationState==="visible")("mat-snack-bar-container-exit",a._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!a._animationsDisabled);},features:[Jf],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,a){t&1&&(oi$1(0,"div",1)(1,"div",2,0)(3,"div",3),ep(4,on,0,0,"ng-template",4),Dc(),cp(5,"div"),Dc()()),t&2&&(xy(5),sp("aria-live",a._live)("role",a._role)("id",a._liveElementId));},dependencies:[gn],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return i})(),un=new S("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new ue}),Ra=(()=>{class i{_live=D(Ds);_injector=D(ge);_breakpointObserver=D(Wt);_parentSnackBar=D(i,{optional:true,skipSelf:true});_defaultConfig=D(un);_animationsDisabled=ct();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=mn;snackBarContainerComponent=pn;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e;}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",a){let n=q(q({},this._defaultConfig),a);return n.data={message:e,action:t},n.announcementMessage===e&&(n.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,n)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss();}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss();}_attachSnackBarContainer(e,t){let a=t&&t.viewContainerRef&&t.viewContainerRef.injector,n=ge.create({parent:a||this._injector,providers:[{provide:ue,useValue:t}]}),o=new Ft$1(this.snackBarContainerComponent,t.viewContainerRef,n),f=e.attach(o);return f.instance.snackBarConfig=t,f.instance}_attach(e,t){let a=q(q(q({},new ue),this._defaultConfig),t),n=this._createOverlay(a),o=this._attachSnackBarContainer(n,a),f=new Se(o,n);if(e instanceof cr){let U=new G(e,null,{$implicit:a.data,snackBarRef:f});f.instance=o.attachTemplatePortal(U);}else {let U=this._createInjector(a,f),ht=new Ft$1(e,void 0,U),_t=o.attachComponentPortal(ht);f.instance=_t.instance;}return this._breakpointObserver.observe(Iu.HandsetPortrait).pipe(Qh(n.detachments())).subscribe(U=>{n.overlayElement.classList.toggle(this.handsetCssClass,U.matches);}),a.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness);}),this._animateSnackBar(f,a),this._openedSnackBarRef=f,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear();}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter();}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter();}_createOverlay(e){let t=new q$1;t.direction=e.direction;let a=Fe(this._injector),n=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!n||e.horizontalPosition==="end"&&n,f=!o&&e.horizontalPosition!=="center";return o?a.left("0"):f?a.right("0"):a.centerHorizontally(),e.verticalPosition==="top"?a.top("0"):a.bottom("0"),t.positionStrategy=a,t.disableAnimations=this._animationsDisabled,Ht(this._injector,t)}_createInjector(e,t){let a=e&&e.viewContainerRef&&e.viewContainerRef.injector;return ge.create({parent:a||this._injector,providers:[{provide:Se,useValue:t},{provide:Fa,useValue:e.data}]})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=pr({token:i,factory:i.\u0275fac})}return i})();var vn=["editor"],dt=class i{ref=D(O);data=D($e);titulo=this.data.titulo||"Redactar respuesta";editor=UL.required("editor");constructor(){Oy(()=>{let r=this.editor().nativeElement;r.innerHTML=this.data.html||"",r.focus();let e=window.getSelection();if(e){let t=document.createRange();t.selectNodeContents(r),t.collapse(false),e.removeAllRanges(),e.addRange(t);}});}format(r){this.editor().nativeElement.focus(),document.execCommand(r,false);}codeBlock(){ie(this.editor().nativeElement);}onPaste(r){let e=r.clipboardData;if(!e)return;r.preventDefault();let t=re(e.getData("text/html"),e.getData("text/plain"));document.execCommand("insertHTML",false,t);}done(){let r=this.editor().nativeElement;this.ref.close(r.textContent?.trim()||r.querySelector("img")?r.innerHTML:"");}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=xE({type:i,selectors:[["app-compose-dialog"]],viewQuery:function(e,t){e&1&&Ip(t.editor,vn,5),e&2&&DI();},decls:28,vars:1,consts:[["editor",""],["mat-dialog-title","",1,"compose-head"],[1,"spacer"],["mat-icon-button","","mat-dialog-close","","aria-label","Cerrar"],[1,"compose-toolbar"],["mat-icon-button","","type","button","matTooltip","Negrita",3,"mousedown","click"],["mat-icon-button","","type","button","matTooltip","Cursiva",3,"mousedown","click"],["mat-icon-button","","type","button","matTooltip","Subrayado",3,"mousedown","click"],["mat-icon-button","","type","button","matTooltip","Bloque de c\xF3digo",3,"mousedown","click"],[1,"compose-content"],["contenteditable","true","role","textbox","aria-multiline","true","aria-label","Mensaje",1,"compose-editor",3,"paste"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"click"]],template:function(e,t){e&1&&(oi$1(0,"div",1)(1,"span"),qI(2),Dc(),cp(3,"span",2),oi$1(4,"button",3)(5,"mat-icon"),qI(6,"close"),Dc()()(),oi$1(7,"div",4)(8,"button",5),hp("mousedown",function(n){return n.preventDefault()})("click",function(){return t.format("bold")}),oi$1(9,"mat-icon"),qI(10,"format_bold"),Dc()(),oi$1(11,"button",6),hp("mousedown",function(n){return n.preventDefault()})("click",function(){return t.format("italic")}),oi$1(12,"mat-icon"),qI(13,"format_italic"),Dc()(),oi$1(14,"button",7),hp("mousedown",function(n){return n.preventDefault()})("click",function(){return t.format("underline")}),oi$1(15,"mat-icon"),qI(16,"format_underlined"),Dc()(),oi$1(17,"button",8),hp("mousedown",function(n){return n.preventDefault()})("click",function(){return t.codeBlock()}),oi$1(18,"mat-icon"),qI(19,"code"),Dc()()(),oi$1(20,"mat-dialog-content",9)(21,"div",10,0),hp("paste",function(n){return t.onPaste(n)}),Dc()(),oi$1(23,"div",11)(24,"button",12),qI(25,"Cancelar"),Dc(),oi$1(26,"button",13),hp("click",function(){return t.done()}),qI(27,"Listo"),Dc()()),e&2&&(xy(2),xp(t.titulo));},dependencies:[Ht$1,jt,Nt$1,zt$1,Vt$1,va,ga,An$1,yi,vi,Yt,mt],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:flex;flex-direction:column;max-height:90vh;overflow:hidden}.compose-head[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin:0;font-size:16px;font-weight:600;flex:0 0 auto}.compose-head[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.compose-toolbar[_ngcontent-%COMP%]{display:flex;gap:4px;padding:0 24px 6px;border-bottom:1px solid var(--mat-sys-outline-variant);flex:0 0 auto}.compose-content[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;display:flex;padding-top:12px}.compose-editor[_ngcontent-%COMP%]{flex:1 1 auto;min-height:160px;overflow-y:auto;box-sizing:border-box;border:1px solid var(--mat-sys-outline);border-radius:8px;padding:12px 14px;font:inherit;font-size:14px;line-height:1.5;outline:none;overflow-wrap:anywhere;white-space:pre-wrap}.compose-editor[_ngcontent-%COMP%]:focus{border-color:var(--mat-sys-primary, #048abf);box-shadow:0 0 0 2px #048abf26}.compose-editor[_ngcontent-%COMP%]:empty:before{content:"Escribe tu respuesta\\2026";color:var(--mat-sys-on-surface-variant)}.compose-editor[_ngcontent-%COMP%]   :where(pre[_ngcontent-%COMP%]){font-family:JetBrains Mono,ui-monospace,monospace;background:#0000000d;border:1px solid var(--mat-sys-outline-variant);border-radius:6px;padding:8px 10px;margin:6px 0;font-size:12px;white-space:pre-wrap}.compose-editor[_ngcontent-%COMP%]   :where(code[_ngcontent-%COMP%]){font-family:JetBrains Mono,ui-monospace,monospace;background:#0000000f;border-radius:4px;padding:1px 4px;font-size:.92em}.compose-editor[_ngcontent-%COMP%]   :where(pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]){background:none;padding:0;font-size:inherit}.compose-editor[_ngcontent-%COMP%]   :where(ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]){margin:4px 0;padding-left:22px}[mat-dialog-actions][_ngcontent-%COMP%]{flex:0 0 auto}']})};function Ba(i){let r=(i||"").toUpperCase();return r.includes("APROBADO")?{headerBg:"#DDEFD9",badgeBg:"#97C98A",badgeText:"#1B5E20"}:r.includes("CERRADO")?{headerBg:"#F1EFE8",badgeBg:"#D3D1C7",badgeText:"#444441"}:r.includes("ENTREGADO")?{headerBg:"#DDF3F1",badgeBg:"#9FE0D8",badgeText:"#0C5046"}:r.includes("INSTALADO")||r.includes("CERTIFICAC")?{headerBg:"#E3EFFB",badgeBg:"#B5D4F4",badgeText:"#0C447C"}:r.includes("INFO PENDIENTE")?{headerBg:"#FAEEDA",badgeBg:"#FAC775",badgeText:"#633806"}:r.includes("EN PROCESO")?{headerBg:"#EEEDFE",badgeBg:"#CECBF6",badgeText:"#3C3489"}:r.includes("ABIERTO")?{headerBg:"#EAF3DE",badgeBg:"#C0DD97",badgeText:"#27500A"}:{headerBg:"#ECEFF3",badgeBg:"#CFD6DE",badgeText:"#3A4350"}}function Ji(i){let r=(i||"").toUpperCase();return r.includes("INCIDENCIA")?{badgeBg:"#F7C1C1",badgeText:"#791F1F"}:r.includes("REQUERIMIENTO")?{badgeBg:"#C0DD97",badgeText:"#27500A"}:r.includes("CONSULTA")?{badgeBg:"#CECBF6",badgeText:"#3C3489"}:{badgeBg:"#D7DBE0",badgeText:"#3A4350"}}function er(i){if(!i)return "";let r=new Date(i);return isNaN(r.getTime())?"":r.toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"})}function tr(i){if(!i)return "";let r=new Date(i);if(isNaN(r.getTime()))return "";let e=r.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",hour12:false}),t=new Date;return r.getFullYear()===t.getFullYear()&&r.getMonth()===t.getMonth()&&r.getDate()===t.getDate()?`Hoy ${e}`:`${r.toLocaleDateString("es-ES",{day:"numeric",month:"short"})} ${e}`}var yn=["composerInput"],Dn=(i,r)=>r.id;function Cn(i,r){i&1&&(oi$1(0,"span",4),qI(1),Dc()),i&2&&(xy(),xp(r));}function kn(i,r){if(i&1&&(oi$1(0,"span",15),qI(1),Dc()),i&2){let e=r,t=hI();Tp("background",t.estadoStyle(e).badgeBg)("color",t.estadoStyle(e).badgeText),xy(),xp(e);}}function xn(i,r){if(i&1){let e=fI();oi$1(0,"button",18),hp("click",function(){let a=Yl(e),n=a.$implicit,o=a.$index,f=hI(2);return Kl(f.openAttachment(n,"adjunto-general_"+f.ticketId+(f.ticketAttachments().length>1?"_"+(o+1):"")))}),oi$1(1,"mat-icon"),qI(2,"attach_file"),Dc(),qI(3),Dc();}if(i&2){let e=r.$index,t=hI(2);xy(3),_c(" Descargar",t.ticketAttachments().length>1?" "+(e+1):""," ");}}function wn(i,r){if(i&1&&(oi$1(0,"div",9)(1,"span",16),qI(2,"Adjunto del ticket:"),Dc(),iI(3,xn,4,1,"button",17,oI),Dc()),i&2){let e=hI();xy(3),sI(e.ticketAttachments());}}function Mn(i,r){if(i&1){let e=fI();oi$1(0,"div",11)(1,"mat-icon"),qI(2,"lock"),Dc(),oi$1(3,"p"),qI(4,"Tu sesi\xF3n expir\xF3. Inicia sesi\xF3n nuevamente para ver la conversaci\xF3n del ticket."),Dc(),oi$1(5,"button",19),hp("click",function(){Yl(e);let a=hI();return Kl(a.goToLogin())}),qI(6,"Iniciar sesi\xF3n"),Dc()();}}function An(i,r){i&1&&(cp(0,"mat-progress-bar",20),oi$1(1,"div",21),qI(2,"Cargando mensajes y adjuntos\u2026"),Dc());}function Sn(i,r){i&1&&(oi$1(0,"div",12),qI(1,"Sin mensajes registrados."),Dc());}function En(i,r){if(i&1){let e=fI();oi$1(0,"div",22)(1,"button",24),hp("click",function(){Yl(e);let a=hI(2);return Kl(a.loadOlder())}),oi$1(2,"mat-icon"),qI(3,"expand_less"),Dc(),qI(4," Ver mensajes anteriores "),Dc()();}if(i&2){let e=hI(2);xy(),ap("disabled",e.loadingOlder());}}function Tn(i,r){if(i&1){let e=fI();oi$1(0,"button",32),hp("click",function(){Yl(e);let a=hI().$implicit,n=hI(2);return Kl(n.startEdit(a))}),oi$1(1,"mat-icon"),qI(2,"edit"),Dc()();}}function Vn(i,r){if(i&1&&cp(0,"div",30),i&2){let e=hI().$implicit;ap("innerHTML",e.html,uy);}}function In(i,r){if(i&1){let e=fI();oi$1(0,"button",34),hp("click",function(){let a=Yl(e).$implicit,n=hI(4);return Kl(n.openAttachment(a.id,a.nombre))}),oi$1(1,"mat-icon"),qI(2,"attach_file"),Dc(),qI(3),Dc();}if(i&2){let e=r.$implicit;xy(3),_c(" ",e.nombre," ");}}function On(i,r){if(i&1&&(oi$1(0,"div",31),iI(1,In,4,1,"button",33,Dn),Dc()),i&2){let e=hI().$implicit;xy(),sI(e.adjuntos);}}function Pn(i,r){if(i&1&&(oi$1(0,"div",25)(1,"div",26)(2,"span",27),qI(3),Dc(),oi$1(4,"span",28),qI(5),Dc(),tI(6,Tn,3,0,"button",29),Dc(),tI(7,Vn,1,1,"div",30),tI(8,On,3,0,"div",31),Dc()),i&2){let e=r.$implicit,t=hI(2);RI("conv-"+e.tipo),xy(3),xp(e.autor),xy(2),xp(e.fecha),xy(),nI(t.puedeEditar(e)?6:-1),xy(),nI(e.html?7:-1),xy(),nI(e.adjuntos.length?8:-1);}}function Fn(i,r){if(i&1&&(tI(0,En,5,1,"div",22),iI(1,Pn,9,7,"div",23,rI)),i&2){let e=hI();nI(e.hasOlder()?0:-1),xy(),sI(e.messages());}}function Rn(i,r){if(i&1){let e=fI();oi$1(0,"div",37)(1,"mat-icon"),qI(2,"edit"),Dc(),oi$1(3,"span"),qI(4,"Editando tu mensaje"),Dc(),oi$1(5,"button",51),hp("click",function(){Yl(e);let a=hI(2);return Kl(a.cancelEdit())}),qI(6,"Cancelar"),Dc()();}if(i&2){let e=hI(2);xy(5),ap("disabled",e.sending());}}function Bn(i,r){if(i&1){let e=fI();oi$1(0,"label",46)(1,"mat-icon"),qI(2,"attach_file"),Dc(),oi$1(3,"input",52),hp("change",function(a){Yl(e);let n=hI(2);return Kl(n.onFiles(a))}),Dc()();}}function Nn(i,r){if(i&1){let e=fI();oi$1(0,"span",53)(1,"mat-icon"),qI(2,"insert_drive_file"),Dc(),oi$1(3,"span",54),qI(4),Dc(),oi$1(5,"button",55),hp("click",function(){let a=Yl(e).$implicit,n=hI(3);return Kl(n.removeFile(a))}),qI(6,"\u2715"),Dc()();}if(i&2){let e=r.$implicit,t=hI(3);xy(4),xp(e.name),xy(),ap("disabled",t.sending());}}function Ln(i,r){if(i&1&&(oi$1(0,"div",47),iI(1,Nn,7,2,"span",53,rI),Dc()),i&2){let e=hI(2);xy(),sI(e.composerFiles);}}function Yn(i,r){if(i&1){let e=fI();oi$1(0,"button",56),hp("click",function(){Yl(e);let a=hI(2);return Kl(a.cancelEdit())}),qI(1,"Cancelar"),Dc();}if(i&2){let e=hI(2);ap("disabled",e.sending());}}function zn(i,r){if(i&1){let e=fI();oi$1(0,"div",35),hp("dragover",function(a){Yl(e);let n=hI();return Kl(n.onDragOver(a))})("dragleave",function(a){Yl(e);let n=hI();return Kl(n.onDragLeave(a))})("drop",function(a){Yl(e);let n=hI();return Kl(n.onDrop(a))}),oi$1(1,"div",36)(2,"mat-icon"),qI(3,"upload_file"),Dc(),oi$1(4,"span"),qI(5,"Suelta los archivos para adjuntarlos"),Dc()(),tI(6,Rn,7,1,"div",37),oi$1(7,"div",38)(8,"button",39),hp("mousedown",function(a){return a.preventDefault()})("click",function(){Yl(e);let a=hI();return Kl(a.format("bold"))}),oi$1(9,"mat-icon"),qI(10,"format_bold"),Dc()(),oi$1(11,"button",40),hp("mousedown",function(a){return a.preventDefault()})("click",function(){Yl(e);let a=hI();return Kl(a.format("italic"))}),oi$1(12,"mat-icon"),qI(13,"format_italic"),Dc()(),oi$1(14,"button",41),hp("mousedown",function(a){return a.preventDefault()})("click",function(){Yl(e);let a=hI();return Kl(a.format("underline"))}),oi$1(15,"mat-icon"),qI(16,"format_underlined"),Dc()(),oi$1(17,"button",42),hp("mousedown",function(a){return a.preventDefault()})("click",function(){Yl(e);let a=hI();return Kl(a.codeBlock())}),oi$1(18,"mat-icon"),qI(19,"code"),Dc()(),cp(20,"span",6),oi$1(21,"button",43),hp("click",function(){Yl(e);let a=hI();return Kl(a.openComposer())}),oi$1(22,"mat-icon"),qI(23,"open_in_full"),Dc()()(),oi$1(24,"div",44,0),hp("paste",function(a){Yl(e);let n=hI();return Kl(n.onPaste(a))}),Dc(),oi$1(26,"div",45),tI(27,Bn,4,0,"label",46),tI(28,Ln,3,0,"div",47),cp(29,"span",6),oi$1(30,"span",48),qI(31),Dc(),tI(32,Yn,2,1,"button",49),oi$1(33,"button",50),hp("click",function(){Yl(e);let a=hI();return Kl(a.send())}),qI(34),Dc()()();}if(i&2){let e=hI();Cp("drag-over",e.dragOver()),xy(6),nI(e.editingId()?6:-1),xy(2),ap("disabled",e.sending()),xy(3),ap("disabled",e.sending()),xy(3),ap("disabled",e.sending()),xy(3),ap("disabled",e.sending()),xy(4),ap("disabled",e.sending()),xy(3),sp("contenteditable",e.sending()?"false":"true"),xy(3),nI(e.editingId()?-1:27),xy(),nI(e.composerFiles.length?28:-1),xy(3),xp(e.sendStatus()),xy(),nI(e.editingId()?32:-1),xy(),ap("disabled",e.sending()),xy(),xp(e.editingId()?"Guardar cambios":"Enviar");}}function Hn(i,r){if(i&1){let e=fI();oi$1(0,"div",57),hp("click",function(){Yl(e);let a=hI();return Kl(a.lightbox.set(null))}),oi$1(1,"button",58),hp("click",function(){Yl(e);let a=hI();return Kl(a.lightbox.set(null))}),qI(2,"\u2715"),Dc(),cp(3,"img",59),Dc();}i&2&&(xy(3),ap("src",r,Qd));}var Na=class i{hd=D(B);auth=D(Bn$1);router=D(ue$1);dialogRef=D(O);dialog=D(ee);sanitizer=D(zt);snack=D(Ra);data=D($e);ticketId=this.data.ticketId||this.data.ticket?.ticket||"";estadoStyle=Ba;ticketObj=this.data.ticket??null;header=Mo({cliente:this.data.ticket?.clienteRaw||"",tipo:this.data.ticket?.tipo||"",estatus:this.data.ticket?.estatus||"",asunto:this.data.ticket?.asunto||""});loading=Mo(true);sessionExpired=Mo(false);messages=Mo([]);ticketAttachments=Mo([]);lightbox=Mo(null);static CHUNK=15;hasOlder=Mo(false);loadingOlder=Mo(false);sortedRaw=[];cursor=0;adjNumById=new Map;composerInput=UL.required("composerInput");composerFiles=[];sending=Mo(false);sendStatus=Mo("");dragOver=Mo(false);editingId=Mo(null);constructor(){this.load();}puedeEditar(r){return r.canEdit&&!!r.id}async load(){if(this.loading.set(true),!await this.auth.verifySession()){this.sessionExpired.set(true),this.loading.set(false);return}if(!this.ticketObj&&this.ticketId){let t=await this.hd.fetchTicketRaw(this.ticketId);t&&(this.ticketObj=C(t),this.header.set({cliente:this.ticketObj.clienteRaw,tipo:this.ticketObj.tipo,estatus:this.ticketObj.estatus,asunto:this.ticketObj.asunto}));}let r=await this.hd.fetchMessages(this.ticketId);this.sortedRaw=[...r].sort((t,a)=>new Date(t.entry_date||0).getTime()-new Date(a.entry_date||0).getTime()),this.adjNumById=new Map;let e=0;for(let t of this.sortedRaw){let a=[];t.attach_id&&a.push(t.attach_id),Array.isArray(t.attach_ids)&&a.push(...t.attach_ids);for(let n of a){let o=String(n);n&&!this.adjNumById.has(o)&&this.adjNumById.set(o,++e);}}this.cursor=this.sortedRaw.length,this.messages.set([]),this.loading.set(false),await this.loadOlder(),this.ticketObj&&this.hd.ticketAttachmentIds(this.ticketObj).then(t=>this.ticketAttachments.set(t));}async loadOlder(){if(this.loadingOlder()||this.cursor<=0)return;this.loadingOlder.set(true);let r=Math.max(0,this.cursor-i.CHUNK),e=this.sortedRaw.slice(r,this.cursor),t=(await Promise.all(e.map(a=>this.procesar(a)))).filter(a=>!!a);this.messages.set([...t,...this.messages()]),this.cursor=r,this.hasOlder.set(this.cursor>0),this.loadingOlder.set(false);}goToLogin(){this.dialogRef.close(),this.router.navigate(["/login"]);}esEmpleado(r){let e=String(r.entry_user_role||"").trim().toUpperCase();return e?!e.includes("CLIENTE"):w.has(String(r.entry_user_id||"").trim().toUpperCase())}attachsDeMensaje(r){let e=[];r.attach_id&&e.push(r.attach_id),Array.isArray(r.attach_ids)&&e.push(...r.attach_ids);let t=new Set,a=[];return e.forEach(n=>{let o=String(n);n&&!t.has(o)&&(t.add(o),a.push(o));}),a.map(n=>({id:n,nombre:`adjunto_${this.ticketId}-${this.adjNumById.get(n)??1}`}))}async hidratarImgs(r){let e=new DOMParser().parseFromString(r,"text/html"),t=[...e.querySelectorAll("img[src]")];for(let a of t){let n=a.getAttribute("src")||"",o=/attachments\/(\d+)/.exec(n);if(o){let f=await this.hd.attachmentUrl(o[1]);f&&a.setAttribute("src",f);}}return e.body.innerHTML}async procesar(r){let e=r.system_message===true,t=se(r.detail||""),a=t,n=K(t).trim(),o=this.attachsDeMensaje(r);return !n&&!t.includes("<img")&&!o.length?null:(t.includes("<img")&&(t=await this.hidratarImgs(t)),{autor:e?"Sistema":r.entry_user_name||r.entry_user_id||"\u2014",tipo:e?"sys":this.esEmpleado(r)?"emp":"cli",fecha:r.entry_date?String(r.entry_date).replace("T"," ").slice(0,16):"",html:n||t.includes("<img")?this.sanitizer.bypassSecurityTrustHtml(t):null,adjuntos:o,id:String(r.id??"").trim(),canEdit:r.can_edit===true,rawDetail:a})}onConvClick(r){let e=r.target;if(e.tagName==="IMG"){let t=e.src;t&&this.lightbox.set(t);}}async openAttachment(r,e){let t=await this.hd.fetchAttachment(r);if(!t){this.snack.open("No se pudo abrir el adjunto.","OK",{duration:3e3});return}let a=document.createElement("a");a.href=t.url;let n=(t.filename.match(/\.[^.\s]+$/)||[""])[0];a.download=e?`${e}${e.endsWith(n)?"":n}`:t.filename||`adjunto_${this.ticketId}`,a.click(),setTimeout(()=>URL.revokeObjectURL(t.url),1e4);}onFiles(r){let e=r.target;this.composerFiles=e.files?[...e.files]:[];}removeFile(r){this.composerFiles=this.composerFiles.filter(e=>e!==r);}hasFiles(r){return !!r.dataTransfer&&[...r.dataTransfer.types].includes("Files")}onDragOver(r){this.sending()||!this.hasFiles(r)||(r.preventDefault(),r.dataTransfer.dropEffect="copy",this.dragOver.set(true));}onDragLeave(r){let e=r.relatedTarget;e&&r.currentTarget instanceof Node&&r.currentTarget.contains(e)||this.dragOver.set(false);}onDrop(r){if(!this.hasFiles(r)||(r.preventDefault(),this.dragOver.set(false),this.sending()))return;let e=r.dataTransfer?.files?[...r.dataTransfer.files]:[];e.length&&(this.composerFiles=[...this.composerFiles,...e]);}format(r){this.composerInput().nativeElement.focus(),document.execCommand(r,false);}codeBlock(){ie(this.composerInput().nativeElement);}onPaste(r){let e=r.clipboardData;if(!e)return;r.preventDefault();let t=re(e.getData("text/html"),e.getData("text/plain"));document.execCommand("insertHTML",false,t);}async openComposer(){let r=this.composerInput().nativeElement,e=await oh(this.dialog.open(dt,{data:{html:r.innerHTML},width:"720px",maxWidth:"95vw",autoFocus:false}).afterClosed());e!==void 0&&(r.innerHTML=e,r.focus());}startEdit(r){if(!this.puedeEditar(r))return;let e=this.composerInput().nativeElement;e.innerHTML=r.rawDetail,this.editingId.set(r.id),this.composerFiles=[],this.sendStatus.set(""),e.focus(),e.scrollIntoView({block:"nearest"});}cancelEdit(){this.editingId.set(null),this.composerInput().nativeElement.innerHTML="",this.sendStatus.set("");}async send(){let r=this.composerInput().nativeElement,e=ne(r),t=!r.textContent?.trim()&&!r.querySelector("img"),a=this.editingId();if(t&&(a||!this.composerFiles.length)){this.sendStatus.set(a?"El mensaje no puede quedar vac\xEDo.":"Escribe un mensaje o adjunta un archivo.");return}this.sending.set(true),this.sendStatus.set(a?"Guardando\u2026":"Enviando...");let n;if(a){let o=await this.hd.editMessage(this.ticketId,a,e);n=o.ok,n||this.sendStatus.set(o.error||"No se pudo editar el mensaje.");}else n=await this.hd.sendMessage(this.ticketId,e,this.composerFiles),n||this.sendStatus.set("Error al enviar.");this.sending.set(false),n&&(r.innerHTML="",this.composerFiles=[],this.editingId.set(null),this.sendStatus.set(a?"Cambios guardados \u2713":"Enviado \u2713"),this.load());}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=xE({type:i,selectors:[["app-ticket-messages-dialog"]],viewQuery:function(e,t){e&1&&Ip(t.composerInput,yn,5),e&2&&DI();},decls:21,vars:9,consts:[["composerInput",""],["mat-dialog-title","",1,"conv-head"],[1,"ticket-id"],[1,"cliente"],[1,"tipo"],[1,"estatus",3,"background","color"],[1,"spacer"],["mat-icon-button","","mat-dialog-close","","aria-label","Cerrar"],[1,"asunto"],[1,"ticket-attach"],[1,"conv-body",3,"click"],[1,"conv-expired"],[1,"conv-empty"],[1,"composer",3,"drag-over"],[1,"lightbox"],[1,"estatus"],[1,"ticket-attach-label"],["mat-stroked-button",""],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary",3,"click"],["mode","indeterminate"],[1,"conv-loading"],[1,"conv-older"],[1,"conv-msg",3,"class"],["mat-stroked-button","",3,"click","disabled"],[1,"conv-msg"],[1,"conv-meta"],[1,"conv-user"],[1,"conv-date"],["matTooltip","Editar (hasta 10 min)","aria-label","Editar mensaje",1,"conv-edit"],[1,"conv-text",3,"innerHTML"],[1,"conv-attach-row"],["matTooltip","Editar (hasta 10 min)","aria-label","Editar mensaje",1,"conv-edit",3,"click"],[1,"conv-attach"],[1,"conv-attach",3,"click"],[1,"composer",3,"dragover","dragleave","drop"],[1,"composer-drop-hint"],[1,"composer-editing"],[1,"composer-toolbar"],["mat-icon-button","","matTooltip","Negrita",3,"mousedown","click","disabled"],["mat-icon-button","","matTooltip","Cursiva",3,"mousedown","click","disabled"],["mat-icon-button","","matTooltip","Subrayado",3,"mousedown","click","disabled"],["mat-icon-button","","matTooltip","Bloque de c\xF3digo",3,"mousedown","click","disabled"],["mat-icon-button","","matTooltip","Abrir editor ampliado",3,"click","disabled"],["contenteditable","true","role","textbox","aria-multiline","true","aria-label","Escribir mensaje","data-placeholder","Escribir mensaje\u2026",1,"composer-input",3,"paste"],[1,"composer-actions"],["matTooltip","Adjuntar archivo",1,"attach-label"],[1,"files"],[1,"send-status"],["mat-button","",3,"disabled"],["mat-flat-button","","color","primary",3,"click","disabled"],["type","button",1,"composer-editing-cancel",3,"click","disabled"],["type","file","multiple","","hidden","",3,"change"],[1,"file-chip"],[1,"file-name"],["type","button","aria-label","Quitar adjunto",1,"file-remove",3,"click","disabled"],["mat-button","",3,"click","disabled"],[1,"lightbox",3,"click"],[1,"lightbox-close",3,"click"],["alt","",3,"src"]],template:function(e,t){if(e&1&&(oi$1(0,"div",1)(1,"span",2),qI(2),Dc(),oi$1(3,"span",3),qI(4),Dc(),tI(5,Cn,2,1,"span",4),tI(6,kn,2,5,"span",5),cp(7,"span",6),oi$1(8,"button",7)(9,"mat-icon"),qI(10,"close"),Dc()()(),oi$1(11,"div",8),qI(12),Dc(),tI(13,wn,5,0,"div",9),oi$1(14,"mat-dialog-content",10),hp("click",function(n){return t.onConvClick(n)}),tI(15,Mn,7,0,"div",11)(16,An,3,0)(17,Sn,2,0,"div",12)(18,Fn,3,1),Dc(),tI(19,zn,35,15,"div",13),tI(20,Hn,4,1,"div",14)),e&2){let a,n,o;xy(2),_c("#",t.ticketId),xy(2),xp(t.header().cliente),xy(),nI((a=t.header().tipo)?5:-1,a),xy(),nI((n=t.header().estatus)?6:-1,n),xy(6),xp(t.header().asunto),xy(),nI(t.ticketAttachments().length?13:-1),xy(2),nI(t.sessionExpired()?15:t.loading()?16:t.messages().length?18:17),xy(4),nI(t.sessionExpired()?-1:19),xy(),nI((o=t.lightbox())?20:-1,o);}},dependencies:[Ht$1,jt,Nt$1,Vt$1,va,ga,An$1,yi,vi,Pa,Oa,Yt,mt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:min(520px,88vh);max-height:88vh;overflow:hidden}.conv-head[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin:0;flex:0 0 auto}.conv-head[_ngcontent-%COMP%]   .ticket-id[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-weight:700;color:var(--mat-sys-primary)}.conv-head[_ngcontent-%COMP%]   .cliente[_ngcontent-%COMP%], .conv-head[_ngcontent-%COMP%]   .tipo[_ngcontent-%COMP%]{font-size:12px;font-weight:600;padding:2px 8px;border-radius:10px}.conv-head[_ngcontent-%COMP%]   .cliente[_ngcontent-%COMP%]{background:var(--mat-sys-surface-container-high)}.conv-head[_ngcontent-%COMP%]   .tipo[_ngcontent-%COMP%]{border:1px solid var(--mat-sys-outline-variant);color:var(--mat-sys-on-surface-variant)}.conv-head[_ngcontent-%COMP%]   .estatus[_ngcontent-%COMP%]{font-size:12px;font-weight:700;padding:2px 10px;border-radius:12px}.conv-head[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.asunto[_ngcontent-%COMP%]{font-weight:600;font-size:14px;padding:0 24px 8px;color:var(--mat-sys-on-surface)}.ticket-attach[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:0 24px 6px}.ticket-attach[_ngcontent-%COMP%]   .ticket-attach-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--mat-sys-on-surface-variant)}.ticket-attach[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]{--mdc-outlined-button-container-height: 30px;min-height:30px;line-height:30px;padding:0 12px;font-size:12px}.ticket-attach[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;margin-right:4px}.conv-body[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;max-height:none;background:#f4f6f9;padding:12px}.conv-loading[_ngcontent-%COMP%], .conv-empty[_ngcontent-%COMP%]{text-align:center;color:var(--mat-sys-on-surface-variant);padding:24px;font-size:13px}.conv-msg[_ngcontent-%COMP%]{max-width:80%;margin:8px 0;padding:8px 12px;border-radius:10px;font-size:13px;box-shadow:0 1px 2px #00000014}.conv-msg.conv-emp[_ngcontent-%COMP%]{margin-left:auto;background:#e3f0fb;border:1px solid #c6e0f5}.conv-msg.conv-cli[_ngcontent-%COMP%]{margin-right:auto;background:#fff;border:1px solid var(--mat-sys-outline-variant)}.conv-msg.conv-sys[_ngcontent-%COMP%]{margin:8px auto;max-width:90%;background:transparent;box-shadow:none;text-align:center;color:var(--mat-sys-on-surface-variant);font-size:12px;font-style:italic}.conv-meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:4px;font-size:11px}.conv-meta[_ngcontent-%COMP%]   .conv-user[_ngcontent-%COMP%]{font-weight:700;font-family:inherit}.conv-meta[_ngcontent-%COMP%]   .conv-date[_ngcontent-%COMP%]{margin-left:auto;color:var(--mat-sys-on-surface-variant)}.conv-meta[_ngcontent-%COMP%]   .conv-edit[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;padding:0;border:none;background:transparent;color:var(--mat-sys-on-surface-variant);cursor:pointer;border-radius:50%}.conv-meta[_ngcontent-%COMP%]   .conv-edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px}.conv-meta[_ngcontent-%COMP%]   .conv-edit[_ngcontent-%COMP%]:hover{background:#00000014;color:var(--brand, #048abf)}.conv-text[_ngcontent-%COMP%]{line-height:1.4;overflow-wrap:anywhere;word-break:break-word;overflow-x:auto}.conv-text[_ngcontent-%COMP%]   :where(pre[_ngcontent-%COMP%], code[_ngcontent-%COMP%]){white-space:pre-wrap;overflow-wrap:anywhere;font-family:JetBrains Mono,ui-monospace,monospace}.conv-text[_ngcontent-%COMP%]   :where(pre[_ngcontent-%COMP%]){background:#0000000d;border:1px solid var(--mat-sys-outline-variant);border-radius:6px;padding:8px 10px;margin:6px 0;font-size:12px}.conv-text[_ngcontent-%COMP%]   :where(code[_ngcontent-%COMP%]){background:#0000000f;border-radius:4px;padding:1px 4px;font-size:.92em}.conv-text[_ngcontent-%COMP%]   :where(pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]){background:none;padding:0;font-size:inherit}.conv-text[_ngcontent-%COMP%]   :where(ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]){margin:4px 0;padding-left:22px}.conv-text[_ngcontent-%COMP%]   :where(li[_ngcontent-%COMP%]){margin:2px 0}.conv-text[_ngcontent-%COMP%]   :where(img[_ngcontent-%COMP%]){max-width:100%;height:auto;border-radius:6px;cursor:zoom-in;margin:4px 0;float:none!important}.conv-text[_ngcontent-%COMP%]   :where(a[_ngcontent-%COMP%]){color:var(--mat-sys-primary);word-break:break-all}.conv-text[_ngcontent-%COMP%]   :where(table[_ngcontent-%COMP%]){max-width:100%;border-collapse:collapse;font-size:12px}.conv-text[_ngcontent-%COMP%]   :where(td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]){border:1px solid var(--mat-sys-outline-variant);padding:2px 6px}.conv-attach-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}.conv-attach[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;border:1px solid var(--mat-sys-outline-variant);background:var(--mat-sys-surface);border-radius:6px;padding:3px 8px;font-size:12px;cursor:pointer}.conv-attach[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px}.conv-attach[_ngcontent-%COMP%]:hover{border-color:var(--mat-sys-primary)}.composer[_ngcontent-%COMP%]{position:relative;flex:0 1 auto;display:flex;flex-direction:column;max-height:55vh;border-top:1px solid var(--mat-sys-outline-variant);padding:6px 24px 16px}.composer.drag-over[_ngcontent-%COMP%]{background:#048abf0f}.composer.drag-over[_ngcontent-%COMP%]   .composer-drop-hint[_ngcontent-%COMP%]{display:flex}.composer-drop-hint[_ngcontent-%COMP%]{display:none;position:absolute;inset:4px;z-index:2;flex-direction:column;align-items:center;justify-content:center;gap:6px;border:2px dashed var(--mat-sys-primary, #048abf);border-radius:14px;background:#f4f6f9eb;color:var(--mat-sys-primary, #048abf);font-size:13px;font-weight:600;pointer-events:none}.composer-drop-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:28px;width:28px;height:28px}.composer-editing[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;gap:6px;margin-bottom:6px;padding:4px 10px;border-radius:8px;font-size:12px;font-weight:600;color:var(--brand, #048abf);background:color-mix(in srgb,var(--brand, #048abf) 12%,transparent)}.composer-editing[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.composer-editing[_ngcontent-%COMP%]   .composer-editing-cancel[_ngcontent-%COMP%]{margin-left:auto;border:none;background:transparent;color:inherit;font:inherit;text-decoration:underline;cursor:pointer}.composer-toolbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;gap:2px}.composer-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.composer-input[_ngcontent-%COMP%]{flex:0 1 auto;width:100%;box-sizing:border-box;min-height:44px;max-height:none;overflow-y:auto;font:inherit;font-size:14px;line-height:1.4;border:1px solid #d4d6db;border-radius:18px;padding:10px 14px;background:#fff;color:var(--mat-sys-on-surface);outline:none;overflow-wrap:anywhere;white-space:pre-wrap}.composer-input[_ngcontent-%COMP%]:focus{border-color:var(--mat-sys-primary, #048abf);box-shadow:0 0 0 2px #048abf26}.composer-input[_ngcontent-%COMP%]:empty:before{content:attr(data-placeholder);color:var(--mat-sys-on-surface-variant);pointer-events:none}.composer-input[_ngcontent-%COMP%]   :where(pre[_ngcontent-%COMP%]){font-family:JetBrains Mono,ui-monospace,monospace;background:#0000000d;border:1px solid var(--mat-sys-outline-variant);border-radius:6px;padding:8px 10px;margin:6px 0;font-size:12px}.composer-input[_ngcontent-%COMP%]   :where(code[_ngcontent-%COMP%]){font-family:JetBrains Mono,ui-monospace,monospace;background:#0000000f;border-radius:4px;padding:1px 4px;font-size:.92em}.composer-input[_ngcontent-%COMP%]   :where(pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]){background:none;padding:0;font-size:inherit}.composer-input[_ngcontent-%COMP%]   :where(ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]){margin:4px 0;padding-left:22px}.composer-actions[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;gap:10px;margin-top:8px}.composer-actions[_ngcontent-%COMP%]   .attach-label[_ngcontent-%COMP%]{display:inline-flex;cursor:pointer;color:var(--mat-sys-on-surface-variant)}.composer-actions[_ngcontent-%COMP%]   .files[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px;min-width:0}.composer-actions[_ngcontent-%COMP%]   .file-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;max-width:220px;padding:2px 4px 2px 8px;border:1px solid var(--mat-sys-outline-variant);border-radius:14px;background:var(--mat-sys-surface-container-high, #eef1f5);font-size:12px}.composer-actions[_ngcontent-%COMP%]   .file-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px;color:var(--mat-sys-on-surface-variant)}.composer-actions[_ngcontent-%COMP%]   .file-chip[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.composer-actions[_ngcontent-%COMP%]   .file-chip[_ngcontent-%COMP%]   .file-remove[_ngcontent-%COMP%]{border:none;background:transparent;cursor:pointer;color:var(--mat-sys-on-surface-variant);font-size:12px;line-height:1;padding:2px 4px;border-radius:50%}.composer-actions[_ngcontent-%COMP%]   .file-chip[_ngcontent-%COMP%]   .file-remove[_ngcontent-%COMP%]:hover{color:var(--mat-sys-error, #d32f2f)}.composer-actions[_ngcontent-%COMP%]   .file-chip[_ngcontent-%COMP%]   .file-remove[_ngcontent-%COMP%]:disabled{cursor:default;opacity:.5}.composer-actions[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.composer-actions[_ngcontent-%COMP%]   .send-status[_ngcontent-%COMP%]{font-size:12px;color:var(--mat-sys-on-surface-variant)}.lightbox[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1200;background:#000000d9;display:flex;align-items:center;justify-content:center;cursor:zoom-out}.lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:92vw;max-height:92vh;border-radius:6px}.lightbox[_ngcontent-%COMP%]   .lightbox-close[_ngcontent-%COMP%]{position:absolute;top:16px;right:20px;background:transparent;border:none;color:#fff;font-size:28px;cursor:pointer}.conv-older[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:2px 0 10px}.conv-expired[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px;padding:32px 20px;text-align:center;color:var(--mat-sys-on-surface-variant, #555)}.conv-expired[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:40px;width:40px;height:40px;color:var(--brand, #048abf)}.conv-expired[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:320px}"]})};function jn(i,r){return this._trackRow(r)}var $a=(i,r)=>r.id;function qn(i,r){if(i&1&&(wc(0,"tr",0)(1,"td",3),qI(2),Tc()()),i&2){let e=hI();xy(),Tp("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),sp("colspan",e.numCols),xy(),_c(" ",e.label," ");}}function Kn(i,r){if(i&1&&(wc(0,"td",3),qI(1),Tc()),i&2){let e=hI(2);Tp("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),sp("colspan",e._firstRowOffset),xy(),_c(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ");}}function $n(i,r){if(i&1){let e=fI();wc(0,"td",6)(1,"button",7),gp("click",function(a){let n=Yl(e).$implicit,o=hI(2);return Kl(o._cellClicked(n,a))})("focus",function(a){let n=Yl(e).$implicit,o=hI(2);return Kl(o._emitActiveDateChange(n,a))}),wc(2,"span",8),qI(3),Tc(),lp(4,"span",9),Tc()();}if(i&2){let e=r.$implicit,t=r.$index,a=hI().$index,n=hI();Tp("width",n._cellWidth)("padding-top",n._cellPadding)("padding-bottom",n._cellPadding),sp("data-mat-row",a)("data-mat-col",t),xy(),RI(e.cssClasses),Cp("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",n._isActiveCell(a,t))("mat-calendar-body-range-start",n._isRangeStart(e.compareValue))("mat-calendar-body-range-end",n._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",n._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",n._isComparisonBridgeStart(e.compareValue,a,t))("mat-calendar-body-comparison-bridge-end",n._isComparisonBridgeEnd(e.compareValue,a,t))("mat-calendar-body-comparison-start",n._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",n._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",n._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",n._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",n._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",n._isInPreview(e.compareValue)),fp("tabIndex",n._isActiveCell(a,t)?0:-1),sp("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",n._isSelected(e.compareValue))("aria-current",n.todayValue===e.compareValue?"date":null)("aria-describedby",n._getDescribedby(e.compareValue)),xy(),Cp("mat-calendar-body-selected",n._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",n._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",n.todayValue===e.compareValue),xy(),_c(" ",e.displayValue," ");}}function Qn(i,r){if(i&1&&(wc(0,"tr",1),tI(1,Kn,2,6,"td",4),iI(2,$n,5,49,"td",5,$a),Tc()),i&2){let e=r.$implicit,t=r.$index,a=hI();xy(),nI(t===0&&a._firstRowOffset?1:-1),xy(),sI(e);}}function Wn(i,r){if(i&1&&(oi$1(0,"th",2)(1,"span",6),qI(2),Dc(),oi$1(3,"span",3),qI(4),Dc()()),i&2){let e=r.$implicit;xy(2),xp(e.long),xy(2),xp(e.narrow);}}var Xn=["*"];function Un(i,r){}function Gn(i,r){if(i&1){let e=fI();oi$1(0,"mat-month-view",4),Op("activeDateChange",function(a){Yl(e);let n=hI();return ZI(n.activeDate,a)||(n.activeDate=a),Kl(a)}),hp("_userSelection",function(a){Yl(e);let n=hI();return Kl(n._dateSelected(a))})("dragStarted",function(a){Yl(e);let n=hI();return Kl(n._dragStarted(a))})("dragEnded",function(a){Yl(e);let n=hI();return Kl(n._dragEnded(a))}),Dc();}if(i&2){let e=hI();Rp("activeDate",e.activeDate),ap("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag);}}function Zn(i,r){if(i&1){let e=fI();oi$1(0,"mat-year-view",5),Op("activeDateChange",function(a){Yl(e);let n=hI();return ZI(n.activeDate,a)||(n.activeDate=a),Kl(a)}),hp("monthSelected",function(a){Yl(e);let n=hI();return Kl(n._monthSelectedInYearView(a))})("selectedChange",function(a){Yl(e);let n=hI();return Kl(n._goToDateInView(a,"month"))}),Dc();}if(i&2){let e=hI();Rp("activeDate",e.activeDate),ap("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass);}}function Jn(i,r){if(i&1){let e=fI();oi$1(0,"mat-multi-year-view",6),Op("activeDateChange",function(a){Yl(e);let n=hI();return ZI(n.activeDate,a)||(n.activeDate=a),Kl(a)}),hp("yearSelected",function(a){Yl(e);let n=hI();return Kl(n._yearSelectedInMultiYearView(a))})("selectedChange",function(a){Yl(e);let n=hI();return Kl(n._goToDateInView(a,"year"))}),Dc();}if(i&2){let e=hI();Rp("activeDate",e.activeDate),ap("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass);}}function ei(i,r){}var ti=["button"],ai=[[["","matDatepickerToggleIcon",""]]],ni=["[matDatepickerToggleIcon]"];function ii(i,r){i&1&&(cu(),oi$1(0,"svg",2),cp(1,"path",3),Dc());}var be=(()=>{class i{changes=new ee$1;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return `${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return `${e} to ${t}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=pr({token:i,factory:i.\u0275fac})}return i})(),ri=0,Ve=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=ri++;cssClasses;constructor(r,e,t,a,n,o=r,f){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=o,this.rawValue=f,this.cssClasses=n instanceof Set?Array.from(n):n;}},oi={passive:false,capture:true},lt={passive:true,capture:true},La={passive:true},fe=(()=>{class i{_elementRef=D(hr);_ngZone=D(Me);_platform=D(w$1);_intl=D(be);_eventCleanups;_skipNextFocus=false;_focusActiveCellAfterViewChecked=false;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=false);}isRange=false;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new Be;previewChange=new Be;activeDateChange=new Be;dragStarted=new Be;dragEnded=new Be;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=false;_injector=D(ge);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=D(Lv),t=D(nn$1);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),D(q$2).load(nh),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,n=[e.listen(a,"touchmove",this._touchmoveHandler,oi),e.listen(a,"mouseenter",this._enterHandler,lt),e.listen(a,"focus",this._enterHandler,lt),e.listen(a,"mouseleave",this._leaveHandler,lt),e.listen(a,"blur",this._leaveHandler,lt),e.listen(a,"mousedown",this._mousedownHandler,La),e.listen(a,"touchstart",this._mousedownHandler,La)];this._platform.isBrowser&&n.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=n;});}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t});}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t});}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:n}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?n-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/n}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/n}%`);}ngOnDestroy(){this._eventCleanups.forEach(e=>e());}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=true){Oy(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=true),t.focus());});},{injector:this._injector});}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=true;}_isRangeStart(e){return Ot(e,this.startValue,this.endValue)}_isRangeEnd(e){return Pt(e,this.startValue,this.endValue)}_isInRange(e){return Ft(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Ot(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return  false;let n=this.rows[t][a-1];if(!n){let o=this.rows[t-1];n=o&&o[o.length-1];}return n&&!this._isRangeEnd(n.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return  false;let n=this.rows[t][a+1];if(!n){let o=this.rows[t+1];n=o&&o[0];}return n&&!this._isRangeStart(n.compareValue)}_isComparisonEnd(e){return Pt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Ft(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Ot(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Pt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Ft(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return `${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return `${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=false;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}));}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Ya(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=true),It(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}));};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=true),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})));};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=false;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e});});};_mouseupHandler=e=>{if(!this.isRange)return;let t=It(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e});});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e});});};_touchendHandler=e=>{let t=Ya(e);t&&this._mouseupHandler({target:t});};_getCellFromElement(e){let t=It(e);if(t){let a=t.getAttribute("data-mat-row"),n=t.getAttribute("data-mat-col");if(a&&n)return this.rows[parseInt(a)]?.[parseInt(n)]||null}return null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=xE({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[rm],decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,a){t&1&&(tI(0,qn,3,6,"tr",0),iI(1,Qn,4,1,"tr",1,jn,true),wc(3,"span",2),qI(4),Tc(),wc(5,"span",2),qI(6),Tc(),wc(7,"span",2),qI(8),Tc(),wc(9,"span",2),qI(10),Tc()),t&2&&(nI(a._firstRowOffset<a.labelMinRequiredCells?0:-1),xy(),sI(a.rows),xy(2),fp("id",a._startDateLabelId),xy(),_c(" ",a.startDateAccessibleName,`
`),xy(),fp("id",a._endDateLabelId),xy(),_c(" ",a.endDateAccessibleName,`
`),xy(),fp("id",a._comparisonStartDateLabelId),xy(),Ap(" ",a.comparisonDateAccessibleName," ",a.startDateAccessibleName,`
`),xy(),fp("id",a._comparisonEndDateLabelId),xy(),Ap(" ",a.comparisonDateAccessibleName," ",a.endDateAccessibleName,`
`));},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})}return i})();function Vt(i){return i?.nodeName==="TD"}function It(i){let r;return Vt(i)?r=i:Vt(i.parentNode)?r=i.parentNode:Vt(i.parentNode?.parentNode)&&(r=i.parentNode.parentNode),r?.getAttribute("data-mat-row")!=null?r:null}function Ot(i,r,e){return e!==null&&r!==e&&i<e&&i===r}function Pt(i,r,e){return r!==null&&r!==e&&i>=r&&i===e}function Ft(i,r,e,t){return t&&r!==null&&e!==null&&r!==e&&i>=r&&i<=e}function Ya(i){let r=i.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var R=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e;}},Ie=(()=>{class i{selection;_adapter;_selectionChanged=new ee$1;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e;}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a});}ngOnDestroy(){this._selectionChanged.complete();}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Zv();};static \u0275prov=se$1({token:i,factory:i.\u0275fac})}return i})(),si=(()=>{class i extends Ie{constructor(e){super(null,e);}add(e){super.updateSelection(e,this);}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||i)(_e(l))};static \u0275prov=se$1({token:i,factory:i.\u0275fac})}return i})();var Qa={provide:Ie,useFactory:()=>D(Ie,{optional:true,skipSelf:true})||new si(D(l))};var Wa=new S("MAT_DATE_RANGE_SELECTION_STRATEGY");var Rt=7,di=0,za=(()=>{class i{_changeDetectorRef=D(GL);_dateFormats=D(d,{optional:true});_dateAdapter=D(l,{optional:true});_dir=D(Ss,{optional:true});_rangeStrategy=D(Wa,{optional:true});_rerenderSubscription=B$1.EMPTY;_selectionKeyPressed=false;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init();}_activeDate;get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected);}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new Be;_userSelection=new Be;dragStarted=new Be;dragEnded=new Be;activeDateChange=new Be;_matCalendarBody;_monthLabel=Mo("");_weeks=Mo([]);_firstWeekOffset=Mo(0);_rangeStart=Mo(null);_rangeEnd=Mo(null);_comparisonRangeStart=Mo(null);_comparisonRangeEnd=Mo(null);_previewStart=Mo(null);_previewEnd=Mo(null);_isRange=Mo(false);_todayDate=Mo(null);_weekdays=Mo([]);constructor(){D(q$2).load(ht$2),this._activeDate=this._dateAdapter.today();}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(zh(null)).subscribe(()=>this._init());}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview();}ngOnDestroy(){this._rerenderSubscription.unsubscribe();}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),n,o;this._selected instanceof R?(n=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):n=o=this._getDateInCurrentMonth(this._selected),(n!==t||o!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck();}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate);}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=true,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!Hr(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault();}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=false);}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Rt+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Rt),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck();}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e);}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,n=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(n.start)),this._previewEnd.set(this._getCellCompareValue(n.end)),this.activeDrag&&a){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)));}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event});}else this.dragEnded.emit({value:null,event:e.event});}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),n=this._dateAdapter.getDayOfWeekNames("long").map((o,f)=>({long:o,narrow:t[f],id:di++}));this._weekdays.set(n.slice(e).concat(n.slice(0,e)));}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let n=0,o=this._firstWeekOffset();n<e;n++,o++){o==Rt&&(a.push([]),o=0);let f=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),n+1),U=this._shouldEnableDate(f),ht=this._dateAdapter.format(f,this._dateFormats.display.dateA11yLabel),_t=this.dateClass?this.dateClass(f,"month"):void 0;a[a.length-1].push(new Ve(n+1,t[n],ht,U,_t,this._getCellCompareValue(f),f));}this._weeks.set(a);}_shouldEnableDate(e){return !!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return !!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),n=this._dateAdapter.getDate(e);return new Date(t,a,n).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof R?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(true)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(false)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd));}_canSelect(e){return !this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null);}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=xE({type:i,selectors:[["mat-month-view"]],viewQuery:function(t,a){if(t&1&&vp(fe,5),t&2){let n;EI(n=II())&&(a._matCalendarBody=n.first);}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[rm],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,a){t&1&&(oi$1(0,"table",0)(1,"thead",1)(2,"tr"),iI(3,Wn,5,2,"th",2,$a),Dc(),oi$1(5,"tr",3),cp(6,"th",4),Dc()(),oi$1(7,"tbody",5),hp("selectedValueChange",function(o){return a._dateSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("previewChange",function(o){return a._previewChanged(o)})("dragStarted",function(o){return a.dragStarted.emit(o)})("dragEnded",function(o){return a._dragEnded(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),Dc()()),t&2&&(xy(3),sI(a._weekdays()),xy(4),ap("label",a._monthLabel())("rows",a._weeks())("todayValue",a._todayDate())("startValue",a._rangeStart())("endValue",a._rangeEnd())("comparisonStart",a._comparisonRangeStart())("comparisonEnd",a._comparisonRangeEnd())("previewStart",a._previewStart())("previewEnd",a._previewEnd())("isRange",a._isRange())("labelMinRequiredCells",3)("activeCell",a._dateAdapter.getDate(a.activeDate)-1)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName));},dependencies:[fe],encapsulation:2})}return i})(),F=24,Bt=4,Ha=(()=>{class i{_changeDetectorRef=D(GL);_dateAdapter=D(l,{optional:true});_dir=D(Ss,{optional:true});_rerenderSubscription=B$1.EMPTY;_selectionKeyPressed=false;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),Xa(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init();}_activeDate;get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e);}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;selectedChange=new Be;yearSelected=new Be;activeDateChange=new Be;_matCalendarBody;_years=Mo([]);_todayYear=Mo(0);_selectedYear=Mo(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today();}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(zh(null)).subscribe(()=>this._init());}ngOnDestroy(){this._rerenderSubscription.unsubscribe();}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Ee(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let n=0,o=[];n<F;n++)o.push(t+n),o.length==Bt&&(a.push(o.map(f=>this._createCellForYear(f))),o=[]);this._years.set(a),this._changeDetectorRef.markForCheck();}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),n=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(n);}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate);}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Bt);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Bt);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ee(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,F-Ee(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-F*10:-F);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?F*10:F);break;case 13:case 32:this._selectionKeyPressed=true;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault();}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=false);}_getActiveCell(){return Ee(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell();}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),n=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Ve(e,a,a,this._shouldEnableYear(e),n)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return  false;if(!this.dateFilter)return  true;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return  true;return  false}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof R){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t));}else e&&this._selectedYear.set(this._dateAdapter.getYear(e));}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=xE({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(t,a){if(t&1&&vp(fe,5),t&2){let n;EI(n=II())&&(a._matCalendarBody=n.first);}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(oi$1(0,"table",0)(1,"thead",1)(2,"tr"),cp(3,"th",2),Dc()(),oi$1(4,"tbody",3),hp("selectedValueChange",function(o){return a._yearSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),Dc()()),t&2&&(xy(4),ap("rows",a._years())("todayValue",a._todayYear())("startValue",a._selectedYear())("endValue",a._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",a._getActiveCell()));},dependencies:[fe],encapsulation:2})}return i})();function Xa(i,r,e,t,a){let n=i.getYear(r),o=i.getYear(e),f=Ua(i,t,a);return Math.floor((n-f)/F)===Math.floor((o-f)/F)}function Ee(i,r,e,t){let a=i.getYear(r);return li(a-Ua(i,e,t),F)}function Ua(i,r,e){let t=0;return e?t=i.getYear(e)-F+1:r&&(t=i.getYear(r)),t}function li(i,r){return (i%r+r)%r}var ja=(()=>{class i{_changeDetectorRef=D(GL);_dateFormats=D(d,{optional:true});_dateAdapter=D(l,{optional:true});_dir=D(Ss,{optional:true});_rerenderSubscription=B$1.EMPTY;_selectionKeyPressed=false;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init();}_activeDate;get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e);}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;selectedChange=new Be;monthSelected=new Be;activeDateChange=new Be;_matCalendarBody;_months=Mo([]);_yearLabel=Mo("");_todayMonth=Mo(null);_selectedMonth=Mo(null);constructor(){this._activeDate=this._dateAdapter.today();}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(zh(null)).subscribe(()=>this._init());}ngOnDestroy(){this._rerenderSubscription.unsubscribe();}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let n=this._getDateFromMonth(t);this.selectedChange.emit(n);}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate);}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=true;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault();}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=false);}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck();}_focusActiveCell(){this._matCalendarBody._focusActiveCell();}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(a,"year"):void 0;return new Ve(e,t.toLocaleUpperCase(),n,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return  false;if(!this.dateFilter)return  true;let a=this._dateAdapter.createDate(t,e,1);for(let n=a;this._dateAdapter.getMonth(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return  true;return  false}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),n=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>n}return  false}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),n=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<n}return  false}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof R?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e));}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=xE({type:i,selectors:[["mat-year-view"]],viewQuery:function(t,a){if(t&1&&vp(fe,5),t&2){let n;EI(n=II())&&(a._matCalendarBody=n.first);}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(oi$1(0,"table",0)(1,"thead",1)(2,"tr"),cp(3,"th",2),Dc()(),oi$1(4,"tbody",3),hp("selectedValueChange",function(o){return a._monthSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),Dc()()),t&2&&(xy(4),ap("label",a._yearLabel())("rows",a._months())("todayValue",a._todayMonth())("startValue",a._selectedMonth())("endValue",a._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",a._dateAdapter.getMonth(a.activeDate)));},dependencies:[fe],encapsulation:2})}return i})(),Ga=(()=>{class i{_intl=D(be);calendar=D(Nt);_dateAdapter=D(l,{optional:true});_dateFormats=D(d,{optional:true});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){D(q$2).load(ht$2);let e=D(GL);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck();});}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month";}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-F));}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:F));}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):true}nextEnabled(){return !this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel);}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Xa(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Ee(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+F-1,n=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1));return [n,o]}_periodButtonLabelId=D(nn$1).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||i)};static \u0275cmp=xE({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Xn,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,a){t&1&&(mI(),oi$1(0,"div",0)(1,"div",1)(2,"span",2),qI(3),Dc(),oi$1(4,"button",3),hp("click",function(){return a.currentPeriodClicked()}),oi$1(5,"span",4),qI(6),Dc(),cu(),oi$1(7,"svg",5),cp(8,"polygon",6),Dc()(),lu(),cp(9,"div",7),yI(10),oi$1(11,"button",8),hp("click",function(){return a.previousClicked()}),cu(),oi$1(12,"svg",9),cp(13,"path",10),Dc()(),lu(),oi$1(14,"button",11),hp("click",function(){return a.nextClicked()}),cu(),oi$1(15,"svg",9),cp(16,"path",12),Dc()()()()),t&2&&(xy(2),ap("id",a._periodButtonLabelId),xy(),xp(a.periodButtonDescription),xy(),sp("aria-label",a.periodButtonLabel)("aria-describedby",a._periodButtonLabelId),xy(2),xp(a.periodButtonText),xy(),Cp("mat-calendar-invert",a.calendar.currentView!=="month"),xy(4),ap("disabled",!a.previousEnabled())("matTooltip",a.prevButtonLabel),sp("aria-label",a.prevButtonLabel),xy(3),ap("disabled",!a.nextEnabled())("matTooltip",a.nextButtonLabel),sp("aria-label",a.nextButtonLabel));},dependencies:[ga,An$1,mt],encapsulation:2})}return i})(),Nt=(()=>{class i{_dateAdapter=D(l,{optional:true});_dateFormats=D(d,{optional:true});_changeDetectorRef=D(GL);_elementRef=D(hr);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=false;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new Be;yearSelected=new Be;monthSelected=new Be;viewChanged=new Be(true);_userSelection=new Be;_userDragDrop=new Be;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck();}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=true,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t));}_currentView;_activeDrag=null;stateChanges=new ee$1;constructor(){this._intlChanges=D(be).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next();});}ngAfterContentInit(){this._calendarHeaderPortal=new Ft$1(this.headerComponent||Ga),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView;}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=false,this.focusActiveCell());}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete();}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,n=t||a||e.dateFilter;if(n&&!n.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(Yt$1())&&(this._moveFocusOnNextTick=true),this._changeDetectorRef.detectChanges(),o._init());}this.stateChanges.next();}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(false);}updateTodaysDate(){this._getCurrentViewComponent()?._init();}_dateSelected(e){let t=e.value;(this.selected instanceof R||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e);}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e);}_monthSelectedInYearView(e){this.monthSelected.emit(e);}_goToDateInView(e,t){this.activeDate=e,this.currentView=t;}_dragStarted(e){this._activeDrag=e;}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null);}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=xE({type:i,selectors:[["mat-calendar"]],viewQuery:function(t,a){if(t&1&&vp(za,5)(ja,5)(Ha,5),t&2){let n;EI(n=II())&&(a.monthView=n.first),EI(n=II())&&(a.yearView=n.first),EI(n=II())&&(a.multiYearView=n.first);}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[tD([Qa]),rm],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,a){if(t&1&&(ep(0,Un,0,0,"ng-template",0),oi$1(1,"div",1),tI(2,Gn,1,11,"mat-month-view",2)(3,Zn,1,6,"mat-year-view",3)(4,Jn,1,6,"mat-multi-year-view",3),Dc()),t&2){let n;ap("cdkPortalOutlet",a._calendarHeaderPortal),xy(2),nI((n=a.currentView)==="month"?2:n==="year"?3:n==="multi-year"?4:-1);}},dependencies:[gn,ts,za,ja,Ha],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return i})(),ci=new S("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let i=D(ge);return ()=>Bt$1(i)}}),Za=(()=>{class i{_elementRef=D(hr);_animationsDisabled=ct();_changeDetectorRef=D(GL);_globalModel=D(Ie);_dateAdapter=D(l);_ngZone=D(Me);_rangeSelectionStrategy=D(Wa,{optional:true});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=false;_animationDone=new ee$1;_isAnimating=false;_closeButtonText;_closeButtonFocused=false;_actionsPortal=null;_dialogLabelId=null;constructor(){if(D(q$2).load(ht$2),this._closeButtonText=D(be).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=D(Lv);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)]);}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck();}),this._calendar.focusActiveCell();}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete();}_handleUserSelection(e){let t=this._model.selection,a=e.value,n=t instanceof R;if(n&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(o,this);}else a&&(n||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close();}_handleUserDragDrop(e){this._model.updateSelection(e.value,this);}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next();},200));}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next());};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this);}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges();}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=xE({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(t,a){if(t&1&&vp(Nt,5),t&2){let n;EI(n=II())&&(a._calendar=n.first);}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,a){t&2&&(RI(a.color?"mat-"+a.color:""),Cp("mat-datepicker-content-touch",a.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!a._animationsDisabled));},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,a){t&1&&(oi$1(0,"div",0)(1,"mat-calendar",1),hp("yearSelected",function(o){return a.datepicker._selectYear(o)})("monthSelected",function(o){return a.datepicker._selectMonth(o)})("viewChanged",function(o){return a.datepicker._viewChanged(o)})("_userSelection",function(o){return a._handleUserSelection(o)})("_userDragDrop",function(o){return a._handleUserDragDrop(o)}),Dc(),ep(2,ei,0,0,"ng-template",2),oi$1(3,"button",3),hp("focus",function(){return a._closeButtonFocused=true})("blur",function(){return a._closeButtonFocused=false})("click",function(){return a.datepicker.close()}),qI(4),Dc()()),t&2&&(Cp("mat-datepicker-content-container-with-custom-header",a.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",a._actionsPortal),sp("aria-modal",true)("aria-labelledby",a._dialogLabelId??void 0),xy(),RI(a.datepicker.panelClass),ap("id",a.datepicker.id)("startAt",a.datepicker.startAt)("startView",a.datepicker.startView)("minDate",a.datepicker._getMinDate())("maxDate",a.datepicker._getMaxDate())("dateFilter",a.datepicker._getDateFilter())("headerComponent",a.datepicker.calendarHeaderComponent)("selected",a._getSelected())("dateClass",a.datepicker.dateClass)("comparisonStart",a.comparisonStart)("comparisonEnd",a.comparisonEnd)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName),xy(),ap("cdkPortalOutlet",a._actionsPortal),xy(),Cp("cdk-visually-hidden",!a._closeButtonFocused),ap("color",a.color||"primary"),xy(),xp(a._closeButtonText));},dependencies:[gs,Nt,gn,ga],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2})}return i})(),qa=(()=>{class i{_injector=D(ge);_viewContainerRef=D(Ei);_dateAdapter=D(l,{optional:true});_dir=D(Ss,{optional:true});_model=D(Ie);_animationsDisabled=ct();_scrollStrategy=D(ci);_inputStateChanges=B$1.EMPTY;_document=D(Xn$1);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e;}_color;touchUi=false;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0));}_disabled;xPosition="start";yPosition="below";restoreFocus=true;yearSelected=new Be;monthSelected=new Be;viewChanged=new Be(true);dateClass;openedStream=new Be;closedStream=new Be;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Ul(e);}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close();}_opened=false;id=D(nn$1).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new ee$1;_changeDetectorRef=D(GL);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck();});}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof mt$1&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition());}this.stateChanges.next(void 0);}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete();}select(e){this._model.add(e);}_selectYear(e){this.yearSelected.emit(e);}_selectMonth(e){this.monthSelected.emit(e);}_viewChanged(e){this.viewChanged.emit(e);}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,true);}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,true));}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Yt$1(),this._openOverlay(),this._opened=true,this.openedStream.emit());}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=false,this.closedStream.emit());};if(this._componentRef){let{instance:a,location:n}=this._componentRef;a._animationDone.pipe(Xt(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||n.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay();}),a._startExitAnimation();}e?setTimeout(t):t();}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection();}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,false);}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Ft$1(Za,this._viewContainerRef),a=this._overlayRef=Ht(this._injector,new q$1({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:true,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?Oe(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(n=>{n&&n.preventDefault(),this.close();}),a.keydownEvents().subscribe(n=>{let o=n.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&n.preventDefault();}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||Oy(()=>{a.updatePosition();},{injector:this._injector});}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null);}_getDialogStrategy(){return Fe(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=zt$2(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",a=t==="start"?"end":"start",n=this.yPosition==="above"?"bottom":"top",o=n==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:n},{originX:t,originY:n,overlayX:t,overlayY:o},{originX:a,originY:o,overlayX:a,overlayY:n},{originX:a,originY:n,overlayX:a,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return kh(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(Wt$1(a=>a.keyCode===27&&!Hr(a)||this.datepickerInput&&Hr(a,"altKey")&&a.keyCode===38&&t.every(n=>!Hr(a,n)))))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=PE({type:i,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",QL],disabled:[2,"disabled","disabled",QL],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",QL],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",QL]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[rm]})}return i})(),lo=(()=>{class i extends qa{static \u0275fac=(()=>{let e;return function(a){return (e||(e=Dm(i)))(a||i)}})();static \u0275cmp=xE({type:i,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[tD([Qa,{provide:qa,useExisting:i}]),Jf],decls:0,vars:0,template:function(t,a){},encapsulation:2})}return i})(),he=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value;}},mi=(()=>{class i{_elementRef=D(hr);_dateAdapter=D(l,{optional:true});_dateFormats=D(d,{optional:true});_isInitialized=false;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,true);}_model;get disabled(){return !!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur();}_disabled;dateChange=new Be;dateInput=new Be;stateChanges=new ee$1;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=B$1.EMPTY;_localeSubscription=B$1.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return !t||this._matchesFilter(t)?null:{matDatepickerFilter:true}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return !a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return !a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return [this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new he(this,this._elementRef.nativeElement)),this.dateChange.emit(new he(this,this._elementRef.nativeElement));}});}_lastValueValid=false;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,true);});}ngAfterViewInit(){this._isInitialized=true;}ngOnChanges(e){pi(e,this._dateAdapter)&&this.stateChanges.next(void 0);}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete();}registerOnValidatorChange(e){this._validatorOnChange=e;}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value);}registerOnChange(e){this._cvaOnChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];Hr(e,"altKey")&&e.keyCode===40&&t.every(n=>!Hr(e,n))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault());}_onInput(e){let t=e.target.value,a=this._lastValueValid,n=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(n),n=this._dateAdapter.getValidDateOrNull(n);let o=!this._dateAdapter.sameDate(n,this.value);!n||o?this._cvaOnChange(n):(t&&!this.value&&this._cvaOnChange(n),a!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(n),this.dateInput.emit(new he(this,this._elementRef.nativeElement)));}_onChange(){this.dateChange.emit(new he(this,this._elementRef.nativeElement));}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched();}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):"";}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e;}_isValidValue(e){return !e||this._dateAdapter.isValid(e)}_parentDisabled(){return  false}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e);}_matchesFilter(e){let t=this._getDateFilter();return !t||t(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=PE({type:i,inputs:{value:"value",disabled:[2,"disabled","disabled",QL]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[rm]})}return i})();function pi(i,r){let e=Object.keys(i);for(let t of e){let{previousValue:a,currentValue:n}=i[t];if(r.isDateInstance(a)&&r.isDateInstance(n)){if(!r.sameDate(a,n))return  true}else return  true}return  false}var ui={provide:ht$1,useExisting:io(()=>Ja),multi:true},hi={provide:S$1,useExisting:io(()=>Ja),multi:true},Ja=(()=>{class i extends mi{_formField=D(le,{optional:true});_closedSubscription=B$1.EMPTY;_openedSubscription=B$1.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null);}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id);}),this._registerModel(e.registerInput(this)));}_datepicker;_ariaOwns=Mo(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange());}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange());}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange();}_dateFilter;_validator=null;constructor(){super(),this._validator=pt.compose(super._getValidators());}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe();}_openPopup(){this._datepicker&&this._datepicker.open();}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this);}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||i)};static \u0275dir=PE({type:i,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,a){t&1&&hp("input",function(o){return a._onInput(o)})("change",function(){return a._onChange()})("blur",function(){return a._onBlur()})("keydown",function(o){return a._onKeydown(o)}),t&2&&(fp("disabled",a.disabled),sp("aria-haspopup",a._datepicker?"dialog":null)("aria-owns",a._ariaOwns())("min",a.min?a._dateAdapter.toIso8601(a.min):null)("max",a.max?a._dateAdapter.toIso8601(a.max):null)("data-mat-calendar",a._datepicker?a._datepicker.id:null));},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[tD([ui,hi,{provide:rt,useExisting:i}]),Jf]})}return i})(),_i=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=PE({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),gi=(()=>{class i{_intl=D(be);_changeDetectorRef=D(GL);_stateChanges=B$1.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e;}_disabled;disableRipple=false;_customIcon;_button;constructor(){let e=D(new Up("tabindex"),{optional:true}),t=Number(e);this.tabIndex=t||t===0?t:null;}ngOnChanges(e){e.datepicker&&this._watchStateChanges();}ngOnDestroy(){this._stateChanges.unsubscribe();}ngAfterContentInit(){this._watchStateChanges();}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation());}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:yh(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:yh(),a=this.datepicker?kh(this.datepicker.openedStream,this.datepicker.closedStream):yh();this._stateChanges.unsubscribe(),this._stateChanges=kh(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck());}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=xE({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,a,n){if(t&1&&yp(n,_i,5),t&2){let o;EI(o=II())&&(a._customIcon=o.first);}},viewQuery:function(t,a){if(t&1&&vp(ti,5),t&2){let n;EI(n=II())&&(a._button=n.first);}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,a){t&1&&hp("click",function(o){return a._open(o)}),t&2&&(sp("tabindex",null)("data-mat-calendar",a.datepicker?a.datepicker.id:null),Cp("mat-datepicker-toggle-active",a.datepicker&&a.datepicker.opened)("mat-accent",a.datepicker&&a.datepicker.color==="accent")("mat-warn",a.datepicker&&a.datepicker.color==="warn"));},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",QL],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[rm],ngContentSelectors:ni,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,a){t&1&&(mI(ai),oi$1(0,"button",1,0),tI(2,ii,2,0,":svg:svg",2),yI(3),Dc()),t&2&&(ap("tabIndex",a.disabled?-1:a.tabIndex)("disabled",a.disabled)("disableRipple",a.disableRipple),sp("aria-haspopup",a.datepicker?"dialog":null)("aria-label",a.ariaLabel||a._intl.openCalendarLabel)("aria-expanded",a.datepicker?a.datepicker.opened:null),xy(2),nI(a._customIcon?-1:2));},dependencies:[An$1],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})}return i})();var co=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=kE({type:i});static \u0275inj=bl({providers:[be],imports:[va,Qe,ys,me,Za,gi,Ga,qr,It$1]})}return i})();export{Ba as B,Ja as J,Na as N,Oa as O,Pa as P,Ra as R,Ji as a,co as c,er as e,gi as g,lo as l,tr as t};