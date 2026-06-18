import {d as Fe,Q as Qe,I as It,F as Ft,Z,z as zt,a as Ht,O as Oe$1,M as Me$1,q as q$1,e as gt$1,G,g as gn,m as me$1,B as Bt,h as ht,X as Xe}from'./chunk-BbaABTtk.js';import {D,ag as S,aN as nn,ao as ge$1,ai as ct,au as ee$1,bG as Sh,aC as zh,aL as q,aK as W,b4 as pr,z as kE,A as bl,bX as ys,C as qr,E as hr,ah as Me,F as w,c4 as yl,ar as Ir,aA as Ss,aQ as Ei,c5 as at,X as Xn,as as Lv,a5 as Bl,aa as Xt,Q as Qh,j as Oy,ay as Hr,a9 as PE,L as Cp,az as Xt$1,bM as cr,bj as xn,k as Wt,ap as kh,av as Be,a2 as Dm,x as xE,a3 as Jf,o as oi,ac as ep,a as Dc,b2 as fp,a7 as sp,aV as rm,h as hp,c6 as VE,ax as GL,bg as wc,bQ as gp,q as qI,bh as Tc,K as RI,c as xy,f as xp,a8 as vp,T as EI,V as II,aq as Br,at as kr,bH as Yt,M as Mo}from'./main-5YAEVG33.js';function ae(o,a){}var g=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=true;backdropClass="";disableClose=false;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=false;autoFocus="first-tabbable";restoreFocus=true;scrollStrategy;closeOnNavigation=true;closeOnDestroy=true;closeOnOverlayDetachments=true;disableAnimations=false;providers;container;templateContext;bindings};var _t=(()=>{class o extends ht{_elementRef=D(hr);_focusTrapFactory=D(Br);_config;_interactivityChecker=D(kr);_ngZone=D(Me);_focusMonitor=D(Ir);_renderer=D(Lv);_changeDetectorRef=D(GL);_injector=D(ge$1);_platform=D(w);_document=D(Xn);_portalOutlet;_focusTrapped=new ee$1;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=false;constructor(){super(),this._config=D(g,{optional:true})||new g,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck();}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck());}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus();}_captureInitialFocus(){this._trapFocus();}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=true,this._restoreFocus();}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus();}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{n(),s(),t.removeAttribute("tabindex");},n=this._renderer.listen(t,"blur",i),s=this._renderer.listen(t,"mousedown",i);})),t.focus(e);}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e);}_trapFocus(t){this._isDestroyed||Oy(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case  false:case "dialog":this._containsFocus()||e.focus(t);break;case  true:case "first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case "first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next();},{injector:this._injector});}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let i=Yt(),n=this._elementRef.nativeElement;(!i||i===this._document.body||i===n||n.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus());}this._focusTrap&&this._focusTrap.destroy();}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t);}_containsFocus(){let t=this._elementRef.nativeElement,e=Yt();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Yt()));}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=xE({type:o,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(e&1&&vp(gn,7),e&2){let n;EI(n=II())&&(i._portalOutlet=n.first);}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){e&2&&sp("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null);},features:[Jf],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){e&1&&ep(0,ae,0,0,"ng-template",0);},dependencies:[gn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return o})(),F=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new ee$1;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,t){this.overlayRef=a,this.config=t,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Hr(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}));}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.();}),this._detachSubscription=a.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==false&&this.close();});}close(a,t){if(this._canClose(a)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null;}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let t=this.config;return !!this.containerInstance&&(!t.closePredicate||t.closePredicate(a,t,this.componentInstance))}},se=new S("DialogScrollStrategy",{providedIn:"root",factory:()=>{let o=D(ge$1);return ()=>Oe$1(o)}}),re=new S("DialogData"),le=new S("DefaultDialogConfig");function de(o){let a=Mo(o),t=new Be;return {valueSignal:a,get value(){return a()},change:t,ngOnDestroy(){t.complete();}}}var gt=(()=>{class o{_injector=D(ge$1);_defaultOptions=D(le,{optional:true});_parentDialog=D(o,{optional:true,skipSelf:true});_overlayContainer=D(Me$1);_idGenerator=D(nn);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new ee$1;_afterOpenedAtThisLevel=new ee$1;_ariaHiddenElements=new Map;_scrollStrategy=D(se);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Sh(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(zh(void 0)));open(t,e){let i=this._defaultOptions||new g;e=q(q({},i),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let n=this._getOverlayConfig(e),s=Ht(this._injector,n),l=new F(s,e),c=this._attachContainer(s,l,e);if(l.containerInstance=c,!this.openDialogs.length){let dt=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(Xt$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(dt);}):this._hideNonDialogContentFromAssistiveTechnology(dt);}return this._attachDialogContent(t,l,c,e),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,true)),this.afterOpened.next(l),l}closeAll(){ut(this.openDialogs,t=>t.close());}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){ut(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===false&&this._removeOpenDialog(t,false);}),ut(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[];}_getOverlayConfig(t){let e=new q$1({positionStrategy:t.positionStrategy||Fe().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let n=i.injector||i.viewContainerRef?.injector,s=[{provide:g,useValue:i},{provide:F,useValue:e},{provide:gt$1,useValue:t}],l;i.container?typeof i.container=="function"?l=i.container:(l=i.container.type,s.push(...i.container.providers(i))):l=_t;let c=new Ft(l,i.viewContainerRef,ge$1.create({parent:n||this._injector,providers:s}));return t.attach(c).instance}_attachDialogContent(t,e,i,n){if(t instanceof cr){let s=this._createInjector(n,e,i,void 0),l={$implicit:n.data,dialogRef:e};n.templateContext&&(l=q(q({},l),typeof n.templateContext=="function"?n.templateContext():n.templateContext)),i.attachTemplatePortal(new G(t,null,l,s));}else {let s=this._createInjector(n,e,i,this._injector),l=i.attachComponentPortal(new Ft(t,n.viewContainerRef,s,null,n.bindings));e.componentRef=l,e.componentInstance=l.instance;}}_createInjector(t,e,i,n){let s=t.injector||t.viewContainerRef?.injector,l=[{provide:re,useValue:t.data},{provide:F,useValue:e}];return t.providers&&(typeof t.providers=="function"?l.push(...t.providers(e,t,i)):l.push(...t.providers)),t.direction&&(!s||!s.get(Ss,null,{optional:true}))&&l.push({provide:Ss,useValue:de(t.direction)}),ge$1.create({parent:s||n,providers:l})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((n,s)=>{n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden");}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()));}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let n=e[i];n!==t&&n.nodeName!=="SCRIPT"&&n.nodeName!=="STYLE"&&!n.hasAttribute("aria-live")&&!n.hasAttribute("popover")&&(this._ariaHiddenElements.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"));}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||o)};static \u0275prov=pr({token:o,factory:o.\u0275fac})}return o})();function ut(o,a){let t=o.length;for(;t--;)a(o[t]);}var $t=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=kE({type:o});static \u0275inj=bl({providers:[gt],imports:[Qe,me$1,ys,me$1]})}return o})();function ce(o,a){}var lt=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=true;backdropClass="";disableClose=false;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=false;autoFocus="first-tabbable";restoreFocus=true;delayFocusTrap=true;scrollStrategy;closeOnNavigation=true;enterAnimationDuration;exitAnimationDuration;bindings},yt="mdc-dialog--open",qt="mdc-dialog--opening",Zt="mdc-dialog--closing",he=150,me=75,pe=(()=>{class o extends _t{_animationStateChanged=new Be;_animationsEnabled=!ct();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Jt(this._config.enterAnimationDuration)??he:0;_exitAnimationDuration=this._animationsEnabled?Jt(this._config.exitAnimationDuration)??me:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation();}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Kt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(qt,yt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(yt),Promise.resolve().then(()=>this._finishDialogOpen()));}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(yt),this._animationsEnabled?(this._hostElement.style.setProperty(Kt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Zt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose());}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck();}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration);};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration});};_clearAnimationClasses(){this._hostElement.classList.remove(qt,Zt);}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t);}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t();});}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus();}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t});}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer);}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(i){return (t||(t=Dm(o)))(i||o)}})();static \u0275cmp=xE({type:o,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,i){e&2&&(fp("id",i._config.id),sp("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),Cp("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0));},features:[Jf],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(oi(0,"div",0)(1,"div",1),ep(2,ce,0,0,"ng-template",2),Dc()());},dependencies:[gn],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return o})(),Kt="--mat-dialog-transition-duration";function Jt(o){return o==null?null:typeof o=="number"?o:o.endsWith("ms")?Xt(o.substring(0,o.length-2)):o.endsWith("s")?Xt(o.substring(0,o.length-1))*1e3:o==="0"?0:null}var rt=(function(o){return o[o.OPEN=0]="OPEN",o[o.CLOSING=1]="CLOSING",o[o.CLOSED=2]="CLOSED",o})(rt||{}),N=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new xn(1);_beforeClosed=new xn(1);_result;_closeFallbackTimeout;_state=rt.OPEN;_closeInteractionType;constructor(a,t,e){this._ref=a,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(Wt(i=>i.state==="opened"),Xt$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete();}),e._animationStateChanged.pipe(Wt(i=>i.state==="closed"),Xt$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose();}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose();}),kh(this.backdropClick(),this.keydownEvents().pipe(Wt(i=>i.keyCode===27&&!this.disableClose&&!Hr(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),te(this,i.type==="keydown"?"keyboard":"mouse"));});}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(Wt(e=>e.state==="closing"),Xt$1(1)).subscribe(e=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100);}),this._state=rt.CLOSING,this._containerInstance._startExitAnimation());}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=rt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null;}};function te(o,a,t){return o._closeInteractionType=a,o.close(t)}var ue=new S("MatMdcDialogData"),fe=new S("mat-mdc-dialog-default-options"),_e=new S("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let o=D(ge$1);return ()=>Oe$1(o)}}),vt=(()=>{class o{_defaultOptions=D(fe,{optional:true});_scrollStrategy=D(_e);_parentDialog=D(o,{optional:true,skipSelf:true});_idGenerator=D(nn);_injector=D(ge$1);_dialog=D(gt);_animationsDisabled=ct();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new ee$1;_afterOpenedAtThisLevel=new ee$1;dialogConfigClass=lt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Sh(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(zh(void 0)));constructor(){this._dialogRefConstructor=N,this._dialogContainerType=pe,this._dialogDataToken=ue;}open(t,e){let i;e=q(q({},this._defaultOptions||new lt),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let n=this._dialog.open(t,W(q({},e),{positionStrategy:Fe(this._injector).centerHorizontally().centerVertically(),disableClose:true,closePredicate:void 0,closeOnDestroy:false,closeOnOverlayDetachments:false,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:g,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(s,l,c)=>(i=new this._dialogRefConstructor(s,e,c),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=n.componentRef,i.componentInstance=n.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(i);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next());}),i}closeAll(){this._closeDialogs(this.openDialogs);}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete();}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close();}static \u0275fac=function(e){return new(e||o)};static \u0275prov=pr({token:o,factory:o.\u0275fac})}return o})(),mi=(()=>{class o{dialogRef=D(N,{optional:true});_elementRef=D(hr);_dialog=D(vt);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=ie(this._elementRef,this._dialog.openDialogs));}ngOnChanges(t){let e=t._matDialogClose;e&&(this.dialogResult=e.currentValue);}_onButtonClick(t){te(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult);}static \u0275fac=function(e){return new(e||o)};static \u0275dir=PE({type:o,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,i){e&1&&hp("click",function(s){return i._onButtonClick(s)}),e&2&&sp("aria-label",i.ariaLabel||null)("type",i.type);},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[rm]})}return o})(),ee=(()=>{class o{_dialogRef=D(N,{optional:true});_elementRef=D(hr);_dialog=D(vt);ngOnInit(){this._dialogRef||(this._dialogRef=ie(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd();});}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove();});}static \u0275fac=function(e){return new(e||o)};static \u0275dir=PE({type:o})}return o})(),pi=(()=>{class o extends ee{id=D(nn).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);}static \u0275fac=(()=>{let t;return function(i){return (t||(t=Dm(o)))(i||o)}})();static \u0275dir=PE({type:o,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,i){e&2&&fp("id",i.id);},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[Jf]})}return o})(),ui=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275dir=PE({type:o,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[VE([Xe])]})}return o})(),fi=(()=>{class o extends ee{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1);}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);}static \u0275fac=(()=>{let t;return function(i){return (t||(t=Dm(o)))(i||o)}})();static \u0275dir=PE({type:o,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,i){e&2&&Cp("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end");},inputs:{align:"align"},features:[Jf]})}return o})();function ie(o,a){let t=o.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}var _i=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=kE({type:o});static \u0275inj=bl({providers:[vt],imports:[$t,Qe,me$1,qr]})}return o})();var ge=["tooltip"],ye=20;var ve=new S("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let o=D(ge$1);return ()=>Bt(o,{scrollThrottle:ye})}}),be=new S("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var oe="tooltip-panel",De={passive:true},Ce=8,Te=8,Ae=24,we=200,Oe=(()=>{class o{_elementRef=D(hr);_ngZone=D(Me);_platform=D(w);_ariaDescriber=D(yl);_focusMonitor=D(Ir);_dir=D(Ss);_injector=D(ge$1);_viewContainerRef=D(Ei);_mediaMatcher=D(at);_document=D(Xn);_renderer=D(Lv);_animationsDisabled=ct();_defaultOptions=D(be,{optional:true});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=false;_disabled=false;_tooltipClass;_viewInitialized=false;_pointerExitEventsInitialized=false;_tooltipComponent=ne;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=false;_dirSubscribed=false;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()));}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=Bl(t),this._detach(),this._overlayRef=null;}get disabled(){return this._disabled}set disabled(t){let e=Bl(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message));}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Xt(t);}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Xt(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay);}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e);}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass);}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ee$1;_isDestroyed=false;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Ce;}ngAfterViewInit(){this._viewInitialized=true,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Qh(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0));});}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=true,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t);}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new Ft(this._tooltipComponent,this._viewContainerRef);let n=this._tooltipInstance=i.attach(this._portal).instance;n._triggerElement=this._elementRef.nativeElement,n._mouseLeaveHideDelay=this._hideDelay,n.afterHidden().pipe(Qh(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),n.show(t);}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()));}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t);}_isTooltipVisible(){return !!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&s._origin instanceof hr)return this._overlayRef;this._detach();}let e=this._injector.get(Z).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${oe}`,n=zt(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation("global");return n.positionChanges.pipe(Qh(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0));}),this._overlayRef=Ht(this._injector,{direction:this._dir,positionStrategy:n,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(ve)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Qh(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Qh(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Qh(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0));}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=true,this._dir.change.pipe(Qh(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef);})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null;}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),n=this._getOverlayPosition();e.withPositions([this._addOffset(q(q({},i.main),n.main)),this._addOffset(q(q({},i.fallback),n.fallback))]);}_addOffset(t){let e=Te,i=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=i?-e:e:t.originX==="end"&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",e=this.position,i;e=="above"||e=="below"?i={originX:"center",originY:e=="above"?"top":"bottom"}:e=="before"||e=="left"&&t||e=="right"&&!t?i={originX:"start",originY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(i={originX:"end",originY:"center"});let{x:n,y:s}=this._invertPosition(i.originX,i.originY);return {main:i,fallback:{originX:n,originY:s}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",e=this.position,i;e=="above"?i={overlayX:"center",overlayY:"bottom"}:e=="below"?i={overlayX:"center",overlayY:"top"}:e=="before"||e=="left"&&t||e=="right"&&!t?i={overlayX:"end",overlayY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(i={overlayX:"start",overlayY:"center"});let{x:n,y:s}=this._invertPosition(i.overlayX,i.overlayY);return {main:i,fallback:{overlayX:n,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Oy(()=>{this._tooltipInstance&&this._overlayRef.updatePosition();},{injector:this._injector}));}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck());}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:n}=t,s;if(e==="center"?this._dir&&this._dir.value==="rtl"?s=i==="end"?"left":"right":s=i==="start"?"left":"right":s=e==="bottom"&&n==="top"?"above":"below",s!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${oe}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+s);}this._currentPosition=s;}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let n=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i);},this._defaultOptions?.touchLongPressShowDelay??n);})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e);}));}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=true,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide();}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide();}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay);};this._addListener("touchend",t),this._addListener("touchcancel",t);}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,De));}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?true:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:false}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let e=this._elementRef.nativeElement,i=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(t==="on"||!e.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent";}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=true,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||Oy({write:()=>{this._ariaDescriptionPending=false,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip");}},{injector:this._injector}));}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!Hr(t):true;static \u0275fac=function(e){return new(e||o)};static \u0275dir=PE({type:o,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(e,i){e&2&&Cp("mat-mdc-tooltip-disabled",i.disabled);},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return o})(),ne=(()=>{class o{_changeDetectorRef=D(GL);_elementRef=D(hr);_isMultiline=false;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ct();_tooltip;_closeOnInteraction=false;_isVisible=false;_onHide=new ee$1;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(true),this._showTimeoutId=void 0;},t);}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(false),this._hideTimeoutId=void 0;},t);}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null;}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0);}_markForCheck(){this._changeDetectorRef.markForCheck();}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(false));}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck();}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>Ae&&t.width>=we}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation);}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0;}_finalizeAnimation(t){t?this._closeOnInteraction=true:this.isVisible()||this._onHide.next();}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,n=this._hideAnimation;if(e.classList.remove(t?n:i),e.classList.add(t?i:n),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(e);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=true);}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t));}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=xE({type:o,selectors:[["mat-tooltip-component"]],viewQuery:function(e,i){if(e&1&&vp(ge,7),e&2){let n;EI(n=II())&&(i._tooltip=n.first);}},hostAttrs:["aria-hidden","true"],hostBindings:function(e,i){e&1&&hp("mouseleave",function(s){return i._handleMouseLeave(s)});},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(e,i){e&1&&(wc(0,"div",1,0),gp("animationend",function(s){return i._handleAnimationEnd(s)}),wc(2,"div",2),qI(3),Tc()()),e&2&&(RI(i.tooltipClass),Cp("mdc-tooltip--multiline",i._isMultiline),xy(3),xp(i.message));},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return o})();var Gi=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=kE({type:o});static \u0275inj=bl({imports:[ys,Qe,qr,It]})}return o})();export{Gi as G,N,Oe as O,_i as _,ui as a,fi as f,mi as m,pi as p,ue as u,vt as v};