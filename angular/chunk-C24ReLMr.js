import {W as Ws,a as Qs,M as Mn,H as Hi}from'./chunk-233J3hF4.js';import {O,$ as $e,H as Ht$1,j as jt$1,N as Nt$1,z as zt$1,V as Vt$1}from'./chunk-CaHSNKxe.js';import {d as de,i as it,o as oe$1,O as Ot,n as nn,t as tn}from'./chunk-CixAGufY.js';import {Q as Qe,I as It,a as Ht$2,q as q$2,z as zt$2,G,B as Bt$1}from'./chunk-LEuwmbGn.js';import {t as ta,i as ie,X as Xn,c as Ke,b as bn,v as va,g as ga}from'./chunk-CpOsjEhJ.js';import {D,x as xE,ac as fI,o as oi,q as qI,a as Dc,O as Op,ad as Yl,Z as ZI,ae as Kl,b as Bv,r as cp,t as tI,h as hp,aK as wI,c as xy,f as xp,_ as _c,d as ap,R as Rp,U as Uv,n as nI,z as kE,A as bl,$ as hh,C as qr,E as hr,aw as GL,an as ge,ah as ct,aB as qo,at as ee,M as Mo,aJ as q,au as Be,aL as nn$1,af as S,bw as en,aC as zh,aT as cl,ao as kh,ay as Hr,j as Oy,aI as W$1,aN as QL,G as mI,bz as tp,a3 as tD,a6 as sp,a7 as vp,S as EI,T as II,Q as yp,X as Xn$1,aq as Ir,aj as q$1,ak as nh,aX as Ql,J as yI,L as Cp,ai as B,ar as Lv,b8 as Pe,b9 as Le,a8 as PE,a2 as Jf,a_ as cu,aO as Ei,aA as Ss,ag as Me,ax as Qh,az as Xt,bD as yh,k as Wt,bQ as Zv,bf as wc,bR as gp,e as hI,bg as Tc,K as RI,b1 as fp,bL as cr}from'./main-2WATU5HF.js';function Tt(o,s){o&1&&(oi(0,"p",13),qI(1,"La fecha y hora deben ser de ahora en adelante."),Dc());}var xt=class o{ref=D(O);data=D($e);now=new Date;minDate=new Date(this.now.getFullYear(),this.now.getMonth(),this.now.getDate());date=this.data.dueDate?new Date(this.data.dueDate+"T00:00:00"):new Date;time=this.data.dueTime||this.fmtTime(this.now);nota=this.data.nota||"";fmtTime(s){let e=t=>String(t).padStart(2,"0");return `${e(s.getHours())}:${e(s.getMinutes())}`}esHoy(s){return s.getFullYear()===this.now.getFullYear()&&s.getMonth()===this.now.getMonth()&&s.getDate()===this.now.getDate()}timeMin(){return this.date&&this.esHoy(this.date)?this.fmtTime(this.now):""}selectedAt(){if(!this.date||!this.time)return null;let[s,e]=this.time.split(":").map(Number),t=new Date(this.date);return t.setHours(s||0,e||0,0,0),t}esPasado(){let s=this.selectedAt();return !!s&&s.getTime()<Date.now()}save(){if(!this.date||!this.time||this.esPasado())return;let s=this.date,e=n=>String(n).padStart(2,"0"),t=`${s.getFullYear()}-${e(s.getMonth()+1)}-${e(s.getDate())}`;this.ref.close({dueDate:t,dueTime:this.time,nota:this.nota.trim()});}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=xE({type:o,selectors:[["app-pendiente-date-dialog"]],decls:29,vars:11,consts:[["dp",""],["mat-dialog-title",""],[1,"pdd"],[1,"pdd-ticket"],[1,"pdd-hint"],[1,"pdd-row"],["appearance","outline",1,"grow"],["matInput","",3,"ngModelChange","matDatepicker","ngModel","min"],["matIconSuffix","",3,"for"],["appearance","outline",1,"time"],["matInput","","type","time",3,"ngModelChange","ngModel","min"],["appearance","outline",1,"pdd-nota"],["matInput","","rows","2","maxlength","300","placeholder","\xBFPor qu\xE9 queda pendiente?",3,"ngModelChange","ngModel"],[1,"pdd-error"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"click","disabled"]],template:function(e,t){if(e&1){let n=fI();oi(0,"h2",1),qI(1),Dc(),oi(2,"mat-dialog-content",2)(3,"div",3),qI(4),Dc(),oi(5,"p",4),qI(6,"\xBFCu\xE1ndo quer\xE9s que te recuerde analizar este ticket?"),Dc(),oi(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),qI(10,"Fecha"),Dc(),oi(11,"input",7),Op("ngModelChange",function(a){return Yl(n),ZI(t.date,a)||(t.date=a),Kl(a)}),Dc(),Bv(),cp(12,"mat-datepicker-toggle",8)(13,"mat-datepicker",null,0),Dc(),oi(15,"mat-form-field",9)(16,"mat-label"),qI(17,"Hora"),Dc(),oi(18,"input",10),Op("ngModelChange",function(a){return Yl(n),ZI(t.time,a)||(t.time=a),Kl(a)}),Dc(),Bv(),Dc()(),oi(19,"mat-form-field",11)(20,"mat-label"),qI(21,"Nota (opcional)"),Dc(),oi(22,"textarea",12),Op("ngModelChange",function(a){return Yl(n),ZI(t.nota,a)||(t.nota=a),Kl(a)}),Dc(),Bv(),Dc(),tI(23,Tt,2,0,"p",13),Dc(),oi(24,"mat-dialog-actions",14)(25,"button",15),qI(26,"Cancelar"),Dc(),oi(27,"button",16),hp("click",function(){return t.save()}),qI(28,"Guardar"),Dc()();}if(e&2){let n=wI(14);xy(),xp(t.data.title),xy(3),_c("Ticket #",t.data.ticket),xy(7),ap("matDatepicker",n),Rp("ngModel",t.date),ap("min",t.minDate),Uv(),xy(),ap("for",n),xy(6),Rp("ngModel",t.time),ap("min",t.timeMin()),Uv(),xy(4),Rp("ngModel",t.nota),Uv(),xy(),nI(t.esPasado()?23:-1),xy(4),ap("disabled",!t.date||!t.time||t.esPasado());}},dependencies:[ta,ie,Xn,Ke,bn,Ht$1,jt$1,Nt$1,zt$1,Vt$1,va,ga,de,it,oe$1,Ot,nn,tn,Ws,Qs,Mn,Hi],styles:[".pdd[_ngcontent-%COMP%]{min-width:320px}.pdd-ticket[_ngcontent-%COMP%]{font-weight:700;color:var(--brand, #048abf);margin-bottom:4px}.pdd-hint[_ngcontent-%COMP%]{font-size:13px;color:var(--mat-sys-on-surface-variant);margin:0 0 12px}.pdd-row[_ngcontent-%COMP%]{display:flex;gap:10px}.grow[_ngcontent-%COMP%]{flex:1}.time[_ngcontent-%COMP%]{width:120px}.pdd-nota[_ngcontent-%COMP%]{width:100%;margin-top:8px}.pdd-error[_ngcontent-%COMP%]{color:var(--mat-sys-error, #d32f2f);font-size:12px;margin:10px 0 0}"]})};var Ft=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Bt=["mat-icon, [matMenuItemIcon]","*"];function Lt(o,s){o&1&&(cu(),oi(0,"svg",2),cp(1,"polygon",3),Dc());}var Nt=["*"];function Ht(o,s){if(o&1){let e=fI();wc(0,"div",0),gp("click",function(){Yl(e);let n=hI();return Kl(n.closed.emit("click"))})("animationstart",function(n){Yl(e);let i=hI();return Kl(i._onAnimationStart(n.animationName))})("animationend",function(n){Yl(e);let i=hI();return Kl(i._onAnimationDone(n.animationName))})("animationcancel",function(n){Yl(e);let i=hI();return Kl(i._onAnimationDone(n.animationName))}),wc(1,"div",1),yI(2),Tc()();}if(o&2){let e=hI();RI(e._classList),Cp("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),fp("id",e.panelId),sp("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null);}}var se=new S("MAT_MENU_PANEL"),re=(()=>{class o{_elementRef=D(hr);_document=D(Xn$1);_focusMonitor=D(Ir);_parentMenu=D(se,{optional:true});_changeDetectorRef=D(GL);role="menuitem";disabled=false;disableRipple=false;_hovered=new ee;_focused=new ee;_highlighted=false;_triggersSubmenu=false;constructor(){D(q$1).load(nh),this._parentMenu?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,false);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(true),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=xE({type:o,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&hp("click",function(a){return n._checkDisabled(a)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(sp("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),Cp("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu));},inputs:{role:"role",disabled:[2,"disabled","disabled",QL],disableRipple:[2,"disableRipple","disableRipple",QL]},exportAs:["matMenuItem"],ngContentSelectors:Bt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(mI(Ft),yI(0),oi(1,"span",0),yI(2,1),Dc(),cp(3,"div",1),tI(4,Lt,2,0,":svg:svg",2)),t&2&&(xy(3),ap("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),xy(),nI(n._triggersSubmenu?4:-1));},dependencies:[Ql],encapsulation:2})}return o})();var Vt=new S("MatMenuContent");var Yt=new S("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:false,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),oe="_mat-menu-enter",X="_mat-menu-exit",W=(()=>{class o{_elementRef=D(hr);_changeDetectorRef=D(GL);_injector=D(ge);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ct();_allItems;_directDescendantItems=new qo;_classList={};_panelAnimationState="void";_animationDone=new ee;_isAnimating=Mo(false);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses();}templateRef;items;lazyContent;overlapTrigger=false;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=q({},this._classList);t&&t.length&&t.split(" ").forEach(i=>{n[i]=false;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(i=>{n[i]=true;}),this._elementRef.nativeElement.className=""),this._classList=n;}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e;}closed=new Be;close=this.closed;panelId=D(nn$1).getId("mat-menu-panel-");constructor(){let e=D(Yt);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new en(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(zh(this._directDescendantItems),cl(e=>kh(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout);}_hovered(){return this._directDescendantItems.changes.pipe(zh(this._directDescendantItems),cl(t=>kh(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Hr(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Oy(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus();}},{injector:this._injector});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=W$1(q({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck();}_onAnimationDone(e){let t=e===X;(t||e===oe)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(false));}_onAnimationStart(e){(e===oe||e===X)&&this._isAnimating.set(true);}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0);}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(X),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?oe:X);}),this._changeDetectorRef.markForCheck();}_updateDirectDescendants(){this._allItems.changes.pipe(zh(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=xE({type:o,selectors:[["mat-menu"]],contentQueries:function(t,n,i){if(t&1&&yp(i,Vt,5)(i,re,5)(i,re,4),t&2){let a;EI(a=II())&&(n.lazyContent=a.first),EI(a=II())&&(n._allItems=a),EI(a=II())&&(n.items=a);}},viewQuery:function(t,n){if(t&1&&vp(cr,5),t&2){let i;EI(i=II())&&(n.templateRef=i.first);}},hostVars:3,hostBindings:function(t,n){t&2&&sp("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",QL],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:QL(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[tD([{provide:se,useExisting:o}])],ngContentSelectors:Nt,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(mI(),tp(0,Ht,3,12,"ng-template"));},styles:[`mat-menu {
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
`],encapsulation:2})}return o})(),zt=new S("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let o=D(ge);return ()=>Bt$1(o)}});var b=new WeakMap,jt=(()=>{class o{_canHaveBackdrop;_element=D(hr);_viewContainerRef=D(Ei);_menuItemInstance=D(re,{optional:true,self:true});_dir=D(Ss,{optional:true});_focusMonitor=D(Ir);_ngZone=D(Me);_injector=D(ge);_scrollStrategy=D(zt);_changeDetectorRef=D(GL);_animationsDisabled=ct();_portal;_overlayRef=null;_menuOpen=false;_closingActionsSubscription=B.EMPTY;_menuCloseSubscription=B.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()));}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=D(se,{optional:true});this._parentMaterialMenu=t instanceof W?t:void 0;}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&b.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null);}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return !!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit();}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=b.get(t);b.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),a=i.getConfig(),h=a.positionStrategy;this._setPosition(t,h),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??false,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(true),t instanceof W&&(t._setIsOpen(true),t._directDescendantItems.changes.pipe(Qh(t.close)).subscribe(()=>{h.withLockedPosition(false).reapplyLastPosition(),h.withLockedPosition(true);}));}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof W&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Xt(1)).subscribe(()=>{t.detach(),b.has(n)||n.lazyContent?.detach();}),n._setIsOpen(false)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&b.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(false));}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Ht$2(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof W&&this._menu._handleKeydown(n);});}return this._overlayRef}_getOverlayConfig(e){return new q$2({positionStrategy:zt$2(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX==="start"?"after":"before",a=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(i,a);});});}_setPosition(e,t){let[n,i]=e.xPosition==="before"?["end","start"]:["start","end"],[a,h]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[Q,G]=[a,h],[U,q]=[n,i],M=0;if(this._triggersSubmenu()){if(q=n=e.xPosition==="before"?"start":"end",i=U=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let le=this._parentMaterialMenu.items.first;this._parentInnerPadding=le?le._getHostElement().offsetTop:0;}M=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(Q=a==="top"?"bottom":"top",G=h==="top"?"bottom":"top");t.withPositions([{originX:n,originY:Q,overlayX:U,overlayY:a,offsetY:M},{originX:i,originY:Q,overlayX:q,overlayY:a,offsetY:M},{originX:n,originY:G,overlayX:U,overlayY:h,offsetY:-M},{originX:i,originY:G,overlayX:q,overlayY:h,offsetY:-M}]);}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:yh(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Wt(a=>this._menuOpen&&a!==this._menuItemInstance)):yh();return kh(e,n,i,t)}_getPortal(e){return (!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new G(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return b.get(e)===this}_triggerIsAriaDisabled(){return QL(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Zv();};static \u0275dir=PE({type:o})}return o})(),Fn=(()=>{class o extends jt{_cleanupTouchstart;_hoverSubscription=B.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu}set menu(e){this._menu=e;}menuData;restoreFocus=true;menuOpened=new Be;onMenuOpen=this.menuOpened;menuClosed=new Be;onMenuClose=this.menuClosed;constructor(){super(true);let e=D(Lv);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Pe(t)||(this._openedBy="touch");},{passive:true});}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(true);}closeMenu(){this._closeMenu();}updatePosition(){this._overlayRef?.updatePosition();}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe();}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Le(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(false));}));}static \u0275fac=function(t){return new(t||o)};static \u0275dir=PE({type:o,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&hp("click",function(a){return n._handleClick(a)})("mousedown",function(a){return n._handleMousedown(a)})("keydown",function(a){return n._handleKeydown(a)}),t&2&&sp("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu?.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Jf]})}return o})();var Bn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=kE({type:o});static \u0275inj=bl({imports:[hh,Qe,qr,It]})}return o})();export{Bn as B,Fn as F,W,re as r,xt as x};