import {M as Mr,w as wr,J as Ja,Q as Qn}from'./chunk-CeeLoGPN.js';import {N as N$1,u as ue,_ as _i,m as mi,p as pi,f as fi,a as ui}from'./chunk-DlXerT9d.js';import {d as de,i as it,o as oe$1,O as Ot$1,n as nn,t as tn}from'./chunk-DJF2OEEq.js';import {o as oi,T as Tt,$ as $t,i as it$1,X as Xt,t as tt,j as jt}from'./chunk-BFN9Mgti.js';import {t as ta,i as ie$1,X as Xn,b as bn,v as va,g as ga}from'./chunk-DvtccEfK.js';import {E,O as OE,ag as pI,i as ii,W as WI,T as Tc,F as Fp,ah as Jl,Y as YI,ai as Xl,b as Wv,x as dp,a as yp,aN as TI,c as Oy,R as Rp,N as Nc,d as up,L as Lp,z as zv,I as Ec,M as so,a3 as th,P as sF,Q as hr,aA as zL,ar as me,al as at,aE as Wo,ax as ee,y as yn,o as q,ay as ge,aO as nn$1,aj as M,bv as en,k as nl,aV as dl,as as jh,aB as Vr,m as jy,aM as W,aQ as ZL,V as yI,bA as ip,a7 as $p,aa as Dc,ab as Dp,bC as lr,a0 as II,a1 as DI,$ as Ip,U as Ot$2,au as Mr$1,an as q$1,ao as ql,aZ as Yl,X as vI,n as nI,r as rI,_ as Mp,am as B,av as Hv,bb as Ne,bc as Oe,ac as Kf,a6 as np,b0 as uu,aR as Ii,aD as AD,ak as Ne$1,J as Jh,aC as tn$1,bF as Th,j as zt,bP as Xv,bw as Cc,bQ as vp,g as gI,bx as bc,Z as OI,b3 as gp}from'./main-KUOGWPD6.js';var wt=class o{ref=E(N$1);data=E(ue);date=this.data.dueDate?new Date(this.data.dueDate+"T00:00:00"):new Date;time=this.data.dueTime||"09:00";save(){if(!this.date||!this.time)return;let h=this.date,e=n=>String(n).padStart(2,"0"),t=`${h.getFullYear()}-${e(h.getMonth()+1)}-${e(h.getDate())}`;this.ref.close({dueDate:t,dueTime:this.time});}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=OE({type:o,selectors:[["app-pendiente-date-dialog"]],decls:24,vars:7,consts:[["dp",""],["mat-dialog-title",""],[1,"pdd"],[1,"pdd-ticket"],[1,"pdd-hint"],[1,"pdd-row"],["appearance","outline",1,"grow"],["matInput","",3,"ngModelChange","matDatepicker","ngModel"],["matIconSuffix","",3,"for"],["appearance","outline",1,"time"],["matInput","","type","time",3,"ngModelChange","ngModel"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"click","disabled"]],template:function(e,t){if(e&1){let n=pI();ii(0,"h2",1),WI(1),Tc(),ii(2,"mat-dialog-content",2)(3,"div",3),WI(4),Tc(),ii(5,"p",4),WI(6,"\xBFCu\xE1ndo quer\xE9s que te recuerde analizar este ticket?"),Tc(),ii(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),WI(10,"Fecha"),Tc(),ii(11,"input",7),Fp("ngModelChange",function(a){return Jl(n),YI(t.date,a)||(t.date=a),Xl(a)}),Tc(),Wv(),dp(12,"mat-datepicker-toggle",8)(13,"mat-datepicker",null,0),Tc(),ii(15,"mat-form-field",9)(16,"mat-label"),WI(17,"Hora"),Tc(),ii(18,"input",10),Fp("ngModelChange",function(a){return Jl(n),YI(t.time,a)||(t.time=a),Xl(a)}),Tc(),Wv(),Tc()()(),ii(19,"mat-dialog-actions",11)(20,"button",12),WI(21,"Cancelar"),Tc(),ii(22,"button",13),yp("click",function(){return t.save()}),WI(23,"Guardar"),Tc()();}if(e&2){let n=TI(14);Oy(),Rp(t.data.title),Oy(3),Nc("Ticket #",t.data.ticket),Oy(7),up("matDatepicker",n),Lp("ngModel",t.date),zv(),Oy(),up("for",n),Oy(6),Lp("ngModel",t.time),zv(),Oy(4),up("disabled",!t.date||!t.time);}},dependencies:[ta,ie$1,Xn,bn,_i,mi,pi,fi,ui,va,ga,de,it,oe$1,Ot$1,nn,tn,Mr,wr,Ja,Qn],styles:[".pdd[_ngcontent-%COMP%]{min-width:320px}.pdd-ticket[_ngcontent-%COMP%]{font-weight:700;color:var(--brand, #048abf);margin-bottom:4px}.pdd-hint[_ngcontent-%COMP%]{font-size:13px;color:var(--mat-sys-on-surface-variant);margin:0 0 12px}.pdd-row[_ngcontent-%COMP%]{display:flex;gap:10px}.grow[_ngcontent-%COMP%]{flex:1}.time[_ngcontent-%COMP%]{width:120px}"]})};var Ot=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],At=["mat-icon, [matMenuItemIcon]","*"];function Ft(o,h){o&1&&(uu(),ii(0,"svg",2),dp(1,"polygon",3),Tc());}var Bt=["*"];function Nt(o,h){if(o&1){let e=pI();Cc(0,"div",0),vp("click",function(){Jl(e);let n=gI();return Xl(n.closed.emit("click"))})("animationstart",function(n){Jl(e);let i=gI();return Xl(i._onAnimationStart(n.animationName))})("animationend",function(n){Jl(e);let i=gI();return Xl(i._onAnimationDone(n.animationName))})("animationcancel",function(n){Jl(e);let i=gI();return Xl(i._onAnimationDone(n.animationName))}),Cc(1,"div",1),vI(2),bc()();}if(o&2){let e=gI();OI(e._classList),Mp("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),gp("id",e.panelId),Dc("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null);}}var oe=new M("MAT_MENU_PANEL"),ae=(()=>{class o{_elementRef=E(hr);_document=E(Ot$2);_focusMonitor=E(Mr$1);_parentMenu=E(oe,{optional:true});_changeDetectorRef=E(zL);role="menuitem";disabled=false;disableRipple=false;_hovered=new ee;_focused=new ee;_highlighted=false;_triggersSubmenu=false;constructor(){E(q$1).load(ql),this._parentMenu?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,false);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(true),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=OE({type:o,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&yp("click",function(a){return n._checkDisabled(a)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(Dc("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),Mp("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu));},inputs:{role:"role",disabled:[2,"disabled","disabled",ZL],disableRipple:[2,"disableRipple","disableRipple",ZL]},exportAs:["matMenuItem"],ngContentSelectors:At,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(yI(Ot),vI(0),ii(1,"span",0),vI(2,1),Tc(),dp(3,"div",1),nI(4,Ft,2,0,":svg:svg",2)),t&2&&(Oy(3),up("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),Oy(),rI(n._triggersSubmenu?4:-1));},dependencies:[Yl],encapsulation:2})}return o})();var Lt=new M("MatMenuContent");var Ht=new M("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:false,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),ie="_mat-menu-enter",N="_mat-menu-exit",L=(()=>{class o{_elementRef=E(hr);_changeDetectorRef=E(zL);_injector=E(me);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=at();_allItems;_directDescendantItems=new Wo;_classList={};_panelAnimationState="void";_animationDone=new ee;_isAnimating=yn(false);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses();}templateRef;items;lazyContent;overlapTrigger=false;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=q({},this._classList);t&&t.length&&t.split(" ").forEach(i=>{n[i]=false;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(i=>{n[i]=true;}),this._elementRef.nativeElement.className=""),this._classList=n;}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e;}closed=new ge;close=this.closed;panelId=E(nn$1).getId("mat-menu-panel-");constructor(){let e=E(Ht);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new en(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(nl(this._directDescendantItems),dl(e=>jh(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout);}_hovered(){return this._directDescendantItems.changes.pipe(nl(this._directDescendantItems),dl(t=>jh(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Vr(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=jy(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus();}},{injector:this._injector});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=W(q({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck();}_onAnimationDone(e){let t=e===N;(t||e===ie)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(false));}_onAnimationStart(e){(e===ie||e===N)&&this._isAnimating.set(true);}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0);}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(N),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ie:N);}),this._changeDetectorRef.markForCheck();}_updateDirectDescendants(){this._allItems.changes.pipe(nl(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=OE({type:o,selectors:[["mat-menu"]],contentQueries:function(t,n,i){if(t&1&&Ip(i,Lt,5)(i,ae,5)(i,ae,4),t&2){let a;II(a=DI())&&(n.lazyContent=a.first),II(a=DI())&&(n._allItems=a),II(a=DI())&&(n.items=a);}},viewQuery:function(t,n){if(t&1&&Dp(lr,5),t&2){let i;II(i=DI())&&(n.templateRef=i.first);}},hostVars:3,hostBindings:function(t,n){t&2&&Dc("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",ZL],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:ZL(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[$p([{provide:oe,useExisting:o}])],ngContentSelectors:Bt,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(yI(),ip(0,Nt,3,12,"ng-template"));},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return o})(),Vt=new M("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let o=E(me);return ()=>jt(o)}});var b=new WeakMap,Yt=(()=>{class o{_canHaveBackdrop;_element=E(hr);_viewContainerRef=E(Ii);_menuItemInstance=E(ae,{optional:true,self:true});_dir=E(AD,{optional:true});_focusMonitor=E(Mr$1);_ngZone=E(Ne$1);_injector=E(me);_scrollStrategy=E(Vt);_changeDetectorRef=E(zL);_animationsDisabled=at();_portal;_overlayRef=null;_menuOpen=false;_closingActionsSubscription=B.EMPTY;_menuCloseSubscription=B.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()));}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=E(oe,{optional:true});this._parentMaterialMenu=t instanceof L?t:void 0;}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&b.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null);}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return !!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit();}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=b.get(t);b.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),a=i.getConfig(),u=a.positionStrategy;this._setPosition(t,u),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??false,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(true),t instanceof L&&(t._setIsOpen(true),t._directDescendantItems.changes.pipe(Jh(t.close)).subscribe(()=>{u.withLockedPosition(false).reapplyLastPosition(),u.withLockedPosition(true);}));}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof L&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(tn$1(1)).subscribe(()=>{t.detach(),b.has(n)||n.lazyContent?.detach();}),n._setIsOpen(false)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&b.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(false));}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=$t(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof L&&this._menu._handleKeydown(n);});}return this._overlayRef}_getOverlayConfig(e){return new it$1({positionStrategy:Xt(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX==="start"?"after":"before",a=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(i,a);});});}_setPosition(e,t){let[n,i]=e.xPosition==="before"?["end","start"]:["start","end"],[a,u]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[H,V]=[a,u],[Y,j]=[n,i],M=0;if(this._triggersSubmenu()){if(j=n=e.xPosition==="before"?"start":"end",i=Y=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let re=this._parentMaterialMenu.items.first;this._parentInnerPadding=re?re._getHostElement().offsetTop:0;}M=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(H=a==="top"?"bottom":"top",V=u==="top"?"bottom":"top");t.withPositions([{originX:n,originY:H,overlayX:Y,overlayY:a,offsetY:M},{originX:i,originY:H,overlayX:j,overlayY:a,offsetY:M},{originX:n,originY:V,overlayX:Y,overlayY:u,offsetY:-M},{originX:i,originY:V,overlayX:j,overlayY:u,offsetY:-M}]);}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Th(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(zt(a=>this._menuOpen&&a!==this._menuItemInstance)):Th();return jh(e,n,i,t)}_getPortal(e){return (!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new tt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return b.get(e)===this}_triggerIsAriaDisabled(){return ZL(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Xv();};static \u0275dir=Kf({type:o})}return o})(),On=(()=>{class o extends Yt{_cleanupTouchstart;_hoverSubscription=B.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu}set menu(e){this._menu=e;}menuData;restoreFocus=true;menuOpened=new ge;onMenuOpen=this.menuOpened;menuClosed=new ge;onMenuClose=this.menuClosed;constructor(){super(true);let e=E(Hv);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Ne(t)||(this._openedBy="touch");},{passive:true});}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(true);}closeMenu(){this._closeMenu();}updatePosition(){this._overlayRef?.updatePosition();}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe();}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Oe(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(false));}));}static \u0275fac=function(t){return new(t||o)};static \u0275dir=Kf({type:o,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&yp("click",function(a){return n._handleClick(a)})("mousedown",function(a){return n._handleMousedown(a)})("keydown",function(a){return n._handleKeydown(a)}),t&2&&Dc("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu?.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[np]})}return o})();var An=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Ec({type:o});static \u0275inj=so({imports:[th,oi,sF,Tt]})}return o})();export{An as A,L,On as O,ae as a,wt as w};