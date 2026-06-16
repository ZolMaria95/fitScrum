import {F as Ft,R as Rt}from'./chunk-CB6RZIUV.js';import {U as Ue,L as La,I as Ia$1,x as xa$1,M as Mr,w as wr,J as Ja,Q as Qn}from'./chunk-B_DvO6Jb.js';import {u as ue,N,_ as _i,p as pi,f as fi,a as ui,v as vt,m as mi}from'./chunk-aI6N5Ky4.js';import {aI as uh,E,y as yn$1,l as lD,O as OE,i as ii,W as WI,T as Tc,n as nI,a as yp,c as Oy,R as Rp,r as rI,d as up,N as Nc,B as Bn$1,aJ as J,af as pI,F as Fp,ag as Jl,Y as YI,ah as Xl,b as Wv,aK as sI,v as dp,aN as TI,L as Lp,z as zv,aL as aI,ad as _p,G as Ec,I as so,a2 as th,M as sF,br as d,ai as M,az as zL,P as hr,bs as HL,aj as Ne,at as Mr$1,ao as cn,S as Ot$1,aw as ee,ak as at$1,aO as nn$2,ax as ge,bt as ch,aq as me,am as q,an as ql,bu as lt,ar as jh,aQ as ZL,U as yI,V as vI,a6 as $p,b3 as gp,a9 as Dc,X as OI,Z as Mp,aa as Dp,$ as II,a0 as DI,_ as Ip,a4 as bm,ab as Kf,a5 as np,aD as AD,aE as Wo,k as nl,aV as dl,bv as en$1,J as Jh,bw as Cc,bx as bc,aX as YL,g as gI,b4 as iI,by as It,al as B,Q as w,bz as Qt$1,bA as ip,bB as at$2,bC as lr,bD as rt$1,bE as ie$1,aR as Ii$1,au as Hv,f as Wt,aP as st,j as zt,bF as Th,w as we,bG as _,bH as Ph,D as N$1,aA as Vr,bI as Yt,aU as eg,aG as $h,aC as tn$2,bJ as Au,bK as Ct,bL as wt,aW as am,bM as Qi$1,t as ii$1,ae as op,b0 as uu,b1 as du,aH as hp,b7 as Op,ba as O,aB as jy,b2 as io,bo as sD}from'./main-PR6UCIWX.js';import {d as de,i as it$1,o as oe,n as nn$1,t as tn$1,O as Ot,l as le}from'./chunk-nIQ0ieIS.js';import {Q as Qt}from'./chunk-BbmBpwIv.js';import {b as be,E as Ei$1,O as Oi$1,o as oi,T as Tt,U,t as tt,$ as $t,i as it$2,X as Xt,j as jt}from'./chunk-BSj6dTQK.js';import {v as va,g as ga,t as ta,i as ie,X as Xn,b as bn$1,h as ht}from'./chunk-DFE8NuGk.js';var Ji=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],en=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function tn(a,n){a&1&&(ii(0,"span",3),vI(1,1),Tc());}function nn(a,n){a&1&&(ii(0,"span",6),vI(1,2),Tc());}var an=["*"];var on=new M("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),yi=new M("MatChipAvatar"),bi=new M("MatChipTrailingIcon"),Ci=new M("MatChipEdit"),it=new M("MatChipRemove"),wi=new M("MatChip"),Si=(()=>{class a{_elementRef=E(hr);_parentChip=E(wi);_isPrimary=true;_isLeading=false;get disabled(){return this._disabled||this._parentChip?.disabled||false}set disabled(e){this._disabled=e;}_disabled=false;tabIndex=-1;_allowFocusWhenDisabled=false;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){E(q).load(ql),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button");}focus(){this._elementRef.nativeElement.focus();}static \u0275fac=function(t){return new(t||a)};static \u0275dir=Kf({type:a,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,i){t&2&&(Dc("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),Mp("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading));},inputs:{disabled:[2,"disabled","disabled",ZL],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:YL(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return a})(),ki=(()=>{class a extends Si{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction());}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction());}static \u0275fac=(()=>{let e;return function(i){return (e||(e=bm(a)))(i||a)}})();static \u0275dir=Kf({type:a,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,i){t&1&&yp("click",function(r){return i._handleClick(r)})("keydown",function(r){return i._handleKeydown(r)}),t&2&&(Dc("tabindex",i._getTabindex()),Mp("mdc-evolution-chip__action--presentational",false));},features:[np]})}return a})();var ua=(()=>{class a extends ki{_isPrimary=false;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove());}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove());}static \u0275fac=(()=>{let e;return function(i){return (e||(e=bm(a)))(i||a)}})();static \u0275dir=Kf({type:a,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,i){t&2&&Dc("aria-hidden",null);},features:[$p([{provide:it,useExisting:a}]),np]})}return a})(),nt=(()=>{class a{_changeDetectorRef=E(zL);_elementRef=E(hr);_tagName=E(HL);_ngZone=E(Ne);_focusMonitor=E(Mr$1);_globalRippleOptions=E(cn,{optional:true});_document=E(Ot$1);_onFocus=new ee;_onBlur=new ee;_isBasicChip=false;role=null;_hasFocusInternal=false;_pendingFocus=false;_actionChanges;_animationsDisabled=at$1();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=E(nn$2).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=false;_hadFocusOnRemove=false;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e;}_value;color;removable=true;highlighted=false;disableRipple=false;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e;}_disabled=false;removed=new ge;destroyed=new ge;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=E(ch);_injector=E(me);constructor(){let e=E(q);e.load(ql),e.load(lt),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()});}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName;}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=false,this.focus());}ngAfterContentInit(){this._actionChanges=jh(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck());}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled());}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete();}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}));}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return !!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove());}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=true);}_getSourceAction(e){return this._getActions().find(t=>{let i=t._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))));});}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=OE({type:a,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,i,o){if(t&1&&Ip(o,yi,5)(o,Ci,5)(o,bi,5)(o,it,5)(o,yi,5)(o,bi,5)(o,Ci,5)(o,it,5),t&2){let r;II(r=DI())&&(i.leadingIcon=r.first),II(r=DI())&&(i.editIcon=r.first),II(r=DI())&&(i.trailingIcon=r.first),II(r=DI())&&(i.removeIcon=r.first),II(r=DI())&&(i._allLeadingIcons=r),II(r=DI())&&(i._allTrailingIcons=r),II(r=DI())&&(i._allEditIcons=r),II(r=DI())&&(i._allRemoveIcons=r);}},viewQuery:function(t,i){if(t&1&&Dp(ki,5),t&2){let o;II(o=DI())&&(i.primaryAction=o.first);}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,i){t&1&&yp("keydown",function(r){return i._handleKeydown(r)}),t&2&&(gp("id",i.id),Dc("role",i.role)("aria-label",i.ariaLabel),OI("mat-"+(i.color||"primary")),Mp("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled));},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",ZL],highlighted:[2,"highlighted","highlighted",ZL],disableRipple:[2,"disableRipple","disableRipple",ZL],disabled:[2,"disabled","disabled",ZL]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[$p([{provide:wi,useExisting:a}])],ngContentSelectors:en,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,i){t&1&&(yI(Ji),dp(0,"span",0),ii(1,"span",1)(2,"span",2),nI(3,tn,2,0,"span",3),ii(4,"span",4),vI(5),dp(6,"span",5),Tc()()(),nI(7,nn,2,0,"span",6)),t&2&&(Oy(3),rI(i.leadingIcon?3:-1),Oy(4),rI(i._hasTrailingIcon()?7:-1));},dependencies:[Si],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return a})();var xi=(()=>{class a{_elementRef=E(hr);_changeDetectorRef=E(zL);_dir=E(AD,{optional:true});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new ee;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState();}_disabled=false;get empty(){return !this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e;}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Wo;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip();}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete();}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck();});}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e);}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e));}_getChipStream(e){return this._chips.changes.pipe(nl(null),dl(()=>jh(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return  true;t=t.parentElement;}return  false}_setUpFocusManagement(){this._chips.changes.pipe(nl(this._chips)).subscribe(e=>{let t=[];e.forEach(i=>i._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges();}),this._keyManager=new en$1(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(Jh(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t);}),this._dir?.change.pipe(Jh(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e));}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(nl(null),Jh(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus();});}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Jh(this._destroyed)).subscribe(e=>{let i=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),r=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),g=o||r;this._isValidIndex(i)&&g&&(this._lastDestroyedFocusedChipIndex=i);});}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus();}else this.focus();this._lastDestroyedFocusedChipIndex=null;}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=OE({type:a,selectors:[["mat-chip-set"]],contentQueries:function(t,i,o){if(t&1&&Ip(o,nt,5),t&2){let r;II(r=DI())&&(i._chips=r);}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,i){t&1&&yp("keydown",function(r){return i._handleKeydown(r)}),t&2&&Dc("role",i.role);},inputs:{disabled:[2,"disabled","disabled",ZL],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:YL(e)]},ngContentSelectors:an,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,i){t&1&&(yI(),Cc(0,"div",0),vI(1),bc());},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return a})();var Mi=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=Ec({type:a});static \u0275inj=so({providers:[d,{provide:on,useValue:{separatorKeyCodes:[13]}}],imports:[th,sF]})}return a})();function mn(a,n){if(a&1){let e=pI();ii(0,"mat-form-field",2)(1,"mat-label"),WI(2),Tc(),ii(3,"input",6),yp("ngModelChange",function(i){Jl(e);let o=gI();return Xl(o.word.set(i))}),Tc(),Wv(),Tc();}if(a&2){let e=gI();Oy(2),Nc("Escribe ",e.data.requireWord," para confirmar"),Oy(),up("ngModel",e.word()),zv();}}var ae=class a{data=E(ue);ref=E(N);word=yn$1("");canConfirm=lD(()=>!this.data.requireWord||this.word().trim()===this.data.requireWord);static \u0275fac=function(e){return new(e||a)};static \u0275cmp=OE({type:a,selectors:[["app-confirm-dialog"]],decls:11,vars:7,consts:[["mat-dialog-title",""],[1,"msg"],["appearance","outline",1,"full"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","color","disabled"],["matInput","","autocomplete","off",3,"ngModelChange","ngModel"]],template:function(e,t){e&1&&(ii(0,"h2",0),WI(1),Tc(),ii(2,"mat-dialog-content")(3,"p",1),WI(4),Tc(),nI(5,mn,4,2,"mat-form-field",2),Tc(),ii(6,"mat-dialog-actions",3)(7,"button",4),yp("click",function(){return t.ref.close(false)}),WI(8),Tc(),ii(9,"button",5),yp("click",function(){return t.ref.close(true)}),WI(10),Tc()()),e&2&&(Oy(),Rp(t.data.title),Oy(3),Rp(t.data.message),Oy(),rI(t.data.requireWord?5:-1),Oy(3),Rp(t.data.cancelText||"Cancelar"),Oy(),up("color",t.data.danger?"warn":"primary")("disabled",!t.canConfirm()),Oy(),Nc(" ",t.data.confirmText||"Confirmar"," "));},dependencies:[_i,pi,fi,ui,va,ga,de,it$1,oe,nn$1,tn$1,ta,ie,Xn,bn$1],styles:[".msg[_ngcontent-%COMP%]{white-space:pre-line;margin:0 0 8px}.full[_ngcontent-%COMP%]{width:100%}"]})};var Oi=["todo","in_progress","review","done"],Pi={todo:"To Do",in_progress:"In Progress",review:"En Certificaci\xF3n",done:"Finalizado"};function xa(a){let n=(a||"").toUpperCase();return n.includes("APROBADO")||n.includes("CERRADO POR EL CLIENTE")?{status:"done",approved:true}:n.includes("ENTREGADO")?{status:"done",approved:false}:n.includes("INSTALADO")||n.includes("CERTIFICAC")?{status:"review"}:n.includes("INFO PENDIENTE")?{status:"in_progress",waiting:true}:n.includes("EN PROCESO")?{status:"in_progress"}:{status:"todo"}}var Ri={alta:"Alta",media:"Media",baja:"Baja"},Fi={in_progress:"EN PROCESO",review:"INSTALADO PARA CERTIFICACI\xD3N",done:"ENTREGADO"},Ma="INFO PENDIENTE CLIENTE",Di=["#04BAF0","#27AE60","#F29E3B","#9B59B6","#E74C3C","#1ABC9C","#2980B9","#F2811D","#8E44AD","#16A085","#C0392B","#D35400"];function at(a){let n=0,e=String(a||"");for(let t=0;t<e.length;t++)n=n*31+e.charCodeAt(t)>>>0;return Di[n%Di.length]}function un(a){let n=String(a||"").trim().split(/\s+/).filter(Boolean);return n.length?n.length===1?n[0].slice(0,2).toUpperCase():(n[0][0]+n[1][0]).toUpperCase():"?"}function Da(a){let n=String(a||"").trim().split(/\s+/).filter(Boolean);return n.length<=2?n.join(" "):`${n[0]} ${n[2]}`}var Ii="#2b2b3a",Ei="#fffdf2",Ai="#9aa0a6";function Ti(a){let n=a.replace("#",""),e=n.length===3?n.split("").map(i=>i+i).join(""):n,t=parseInt(e,16);return [t>>16&255,t>>8&255,t&255]}function ot(a,n,e){let[t,i,o]=Ti(a),[r,g,L]=Ti(n),M=($i,Xi)=>Math.round($i*e+Xi*(1-e));return `rgb(${M(t,r)}, ${M(i,g)}, ${M(o,L)})`}function Ia(a){return ot(a,"#ffffff",.3)}function Ea(a){if(!a)return {bg:ot(Ai,Ei,.14),accent:Ai,ink:Ii};let n=a.color||at(a.id||"");return {bg:ot(n,Ei,.14),accent:n,ink:Ii}}function Aa(a){let n=0,e=String(a||"");for(let t=0;t<e.length;t++)n=n*31+e.charCodeAt(t)>>>0;return `${(n%9-4)*.5}deg`}function Li(a,n,e=[]){if(!a)return null;let t=n.find(r=>r.id===a);if(t)return {id:t.id,name:t.name||t.id,color:t.color||at(t.id),label:t.id,role:t.role||""};let i=e.find(r=>r.id===a),o=i?i.name:a;return {id:a,name:o,color:at(a),label:un(o),role:i?.role||""}}function Bi(a){return a===0?"#E0E0E0":a<=25?"#F29E3B":a<=50?"#F2811D":a<=75?"#04BAF0":"#27AE60"}function Vi(a){let n=Math.min(100,Math.max(0,Math.floor(a)||0));return n%5===0?n:Math.min(100,n+(5-n%5))}function Ta(a,n){if(!a)return {str:"",overdue:false,soon:false,diffDays:null,badge:""};let e=new Date(a+"T00:00:00"),t=new Date;t.setHours(0,0,0,0);let i=Math.ceil((e.getTime()-t.getTime())/864e5),o=n!=="done",r=o&&e<t,g=o&&!r&&i<=3,L=e.toLocaleDateString("es-ES",{day:"2-digit",month:"short"}),M="";return g&&(M=i===0?"hoy":i===1?"ma\xF1ana":`${i}d`),{str:L,overdue:r,soon:g,diffDays:i,badge:M}}async function Ni(a,n){let e=n.auth.session(),t=String(e?.id||"").trim().toUpperCase(),i=t==="MSC001";if(!i&&a.assignee&&t!==String(a.assignee).trim().toUpperCase())return n.snack.open("Solo el t\xE9cnico asignado puede iniciar esta tarea.","OK",{duration:4e3}),false;let o=a.assignee;if(!o){if(i)return n.snack.open("Esta tarea no tiene t\xE9cnico asignado. Asigna un t\xE9cnico antes de iniciarla.","OK",{duration:4e3}),false;o=e?.id??null;}let r=n.data.sprints().active,g=n.data.getStoriesBySprint(r).filter(M=>M.status==="in_progress"&&M.assignee===o).length;if(g>=2){let M=(n.data.getMember(o||"")||{}).name||o;return n.snack.open(`${M} ya tiene ${g} tareas en progreso. Debe cerrar alguna antes de iniciar otra.`,"OK",{duration:5e3}),false}return await uh(n.dialog.open(ae,{data:{title:"Iniciar tarea",message:`\xBFDeseas iniciar a trabajar en "${a.title}"?`,confirmText:"Iniciar"}}).afterClosed())?(!a.assignee&&o&&n.data.updateStoryAssignee(a.id,o),true):false}var fn=["panel"],vn=["*"];function yn(a,n){if(a&1&&(Cc(0,"div",1,0),vI(2),bc()),a&2){let e=n.id,t=gI();OI(t._classList),Mp("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),gp("id",t.id),Dc("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e));}}var rt=class{source;option;constructor(n,e){this.source=n,this.option=e;}},zi=new M("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:false,autoSelectActiveOption:false,hideSingleSelectionIndicator:false,requireSelection:false,hasBackdrop:false})}),ji=(()=>{class a{_changeDetectorRef=E(zL);_elementRef=E(hr);_defaults=E(zi);_animationsDisabled=at$1();_activeOptionChanges=B.EMPTY;_keyManager;showPanel=false;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=false;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck();}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=false;optionSelected=new ge;opened=new ge;closed=new ge;optionActivated=new ge;set classList(e){this._classList=e,this._elementRef.nativeElement.className="";}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}id=E(nn$2).getId("mat-autocomplete-");inertGroups;constructor(){let e=E(w);this.inertGroups=e?.SAFARI||false,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??false;}ngAfterContentInit(){this._keyManager=new Qt$1(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null});}),this._setVisibility();}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe();}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e);}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck();}_emitSelectEvent(e){let t=new rt(this,e);this.optionSelected.emit(t);}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return  false}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=OE({type:a,selectors:[["mat-autocomplete"]],contentQueries:function(t,i,o){if(t&1&&Ip(o,J,5)(o,rt$1,5),t&2){let r;II(r=DI())&&(i.options=r),II(r=DI())&&(i.optionGroups=r);}},viewQuery:function(t,i){if(t&1&&Dp(lr,7)(fn,5),t&2){let o;II(o=DI())&&(i.template=o.first),II(o=DI())&&(i.panel=o.first);}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",ZL],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",ZL],requireSelection:[2,"requireSelection","requireSelection",ZL],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",ZL],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ZL]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[$p([{provide:at$2,useExisting:a}])],ngContentSelectors:vn,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,i){t&1&&(yI(),ip(0,yn,3,17,"ng-template"));},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2})}return a})();var bn={provide:ht,useExisting:io(()=>ct),multi:true};var Cn=new M("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let a=E(me);return ()=>jt(a)}}),ct=(()=>{class a{_environmentInjector=E(ie$1);_element=E(hr);_injector=E(me);_viewContainerRef=E(Ii$1);_zone=E(Ne);_changeDetectorRef=E(zL);_dir=E(AD,{optional:true});_formField=E(le,{optional:true,host:true});_viewportRuler=E(U);_scrollStrategy=E(Cn);_renderer=E(Hv);_animationsDisabled=at$1();_defaults=E(zi,{optional:true});_overlayRef=null;_portal;_componentDestroyed=false;_initialized=new ee;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=false;_closingActionsSubscription;_viewportSubscription=B.EMPTY;_breakpointObserver=E(Wt);_handsetLandscapeSubscription=B.EMPTY;_canOpenOnNextFocus=true;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new ee;_overlayPanelClass=st(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus();};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=false;_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler);}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition());}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=true,this._destroyPanel(),this._closeKeyEventStream.complete();}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=false;openPanel(){this._openPanelInternal();}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit();}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=false,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=false,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges());}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition();}get panelClosingActions(){return jh(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(zt(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(zt(()=>this._overlayAttached)):Th()).pipe(we(e=>e instanceof _?e:null))}optionSelections=Ph(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(nl(e),dl(()=>jh(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(dl(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new N$1(e=>{let t=o=>{let r=O(o),g=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,L=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&r!==this._element.nativeElement&&!this._hasFocus()&&(!g||!g.contains(r))&&(!L||!L.contains(r))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(r)&&e.next(o);},i=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return ()=>{i.forEach(o=>o());}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e));}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this._element.nativeElement.disabled=e;}_handleKeydown(e){let t=e,i=t.keyCode,o=Vr(t);if(i===27&&!o&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&i===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let r=this.autocomplete._keyManager.activeItem,g=i===38||i===40;i===9||g&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):g&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(g||this.autocomplete._keyManager.activeItem!==r)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)));}}_handleInput(e){let t=e.target,i=t.value;if(t.type==="number"&&(i=i==""?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,false);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(r=>r.selected);if(o){let r=this._getDisplayValue(o.value);i!==r&&o.deselect(false);}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o);}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(true)):this._canOpenOnNextFocus=true;}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal();}_hasFocus(){return Yt()===this._element.nativeElement}_floatLabel(e=false){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=true);}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=false);}_subscribeToClosingActions(){let e=new N$1(i=>{jy(()=>{i.next();},{injector:this._environmentInjector});}),t=this.autocomplete.options?.changes.pipe(eg(()=>this._positionStrategy.reapplyLastPosition()),$h(0))??Th();return jh(e,t).pipe(dl(()=>this._zone.run(()=>{let i=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),tn$2(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit();}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null);}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,false),this._updateNativeInputValue(t??"");}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e;}_setValueAndClose(e){let t=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),t._emitSelectEvent(i),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel();}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(i=>{i!==e&&i.selected&&i.deselect(t);});}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel();}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new tt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=$t(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()});}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Au.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(true).withGrowAfterOpen(true).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(false).withGrowAfterOpen(false).withViewportMargin(0);})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=true,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened();}_handlePanelKeydown=e=>{(e.keyCode===27&&!Vr(e)||e.keyCode===38&&Vr(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault());};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe());}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0;}_getOverlayConfig(){return new it$2({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Xt(this._injector,this._getConnectedElement()).withFlexibleDimensions(false).withPush(false).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}],r;this.position==="above"?r=o:this.position==="below"?r=t:r=[...t,...o],e.withPositions(r);}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){t=i;break}e._keyManager.setActiveItem(t);}else e._keyManager.setActiveItem(-1);}_canOpen(){let e=this._element.nativeElement;return !e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,i=Ct(e,t.options,t.optionGroups);if(e===0&&i===1)t._setScrollTop(0);else if(t.panel){let o=t.options.toArray()[e];if(o){let r=o._getHostElement(),g=wt(r.offsetTop,r.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(g);}}}static \u0275fac=function(t){return new(t||a)};static \u0275dir=Kf({type:a,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,i){t&1&&yp("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(r){return i._handleInput(r)})("keydown",function(r){return i._handleKeydown(r)})("click",function(){return i._handleClick()}),t&2&&Dc("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen?null:i.autocomplete?.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox");},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",ZL]},exportAs:["matAutocompleteTrigger"],features:[$p([bn]),am]})}return a})(),qi=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=Ec({type:a});static \u0275inj=so({imports:[oi,It,Tt,It,sF]})}return a})();var Sn=["determinateSpinner"];function kn(a,n){if(a&1&&(uu(),ii(0,"svg",11),dp(1,"circle",12),Tc()),a&2){let e=gI();Dc("viewBox",e._viewBox()),Oy(),_p("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),Dc("r",e._circleRadius());}}var xn=new M("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Gi})}),Gi=100,Mn=10,Ki=(()=>{class a{_elementRef=E(hr);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=E(xn),t=Qi$1(),i=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth));}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0));}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0;}_diameter=Gi;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0;}_strokeWidth;_circleRadius(){return (this.diameter-Mn)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return `0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=OE({type:a,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,i){if(t&1&&Dp(Sn,5),t&2){let o;II(o=DI())&&(i._determinateCircle=o.first);}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,i){t&2&&(Dc("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),OI("mat-"+i.color),_p("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),Mp("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"));},inputs:{color:"color",mode:"mode",value:[2,"value","value",YL],diameter:[2,"diameter","diameter",YL],strokeWidth:[2,"strokeWidth","strokeWidth",YL]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,i){if(t&1&&(op(0,kn,2,8,"ng-template",null,0,sD),ii(2,"div",2,1),uu(),ii(4,"svg",3),dp(5,"circle",4),Tc()(),du(),ii(6,"div",5)(7,"div",6)(8,"div",7),hp(9,8),Tc(),ii(10,"div",9),hp(11,8),Tc(),ii(12,"div",10),hp(13,8),Tc()()()),t&2){let o=TI(1);Oy(4),Dc("viewBox",i._viewBox()),Oy(),_p("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),Dc("r",i._circleRadius()),Oy(4),up("ngTemplateOutlet",o),Oy(2),up("ngTemplateOutlet",o),Oy(2),up("ngTemplateOutlet",o);}},dependencies:[ii$1],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return a})();var Ui=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=Ec({type:a});static \u0275inj=so({imports:[sF]})}return a})();var Yi=(a,n)=>n.id;function In(a,n){if(a&1&&(ii(0,"mat-option",13),WI(1),Tc()),a&2){let e=n.$implicit;up("value",e),Oy(),Rp(e.name);}}function En(a,n){a&1&&(ii(0,"mat-option",14),WI(1,"Sin coincidencias"),Tc()),a&2&&up("value",null);}function An(a,n){a&1&&dp(0,"mat-spinner",33);}function Tn(a,n){a&1&&(ii(0,"mat-icon",11),WI(1,"search"),Tc());}function On(a,n){if(a&1){let e=pI();ii(0,"mat-form-field",31)(1,"mat-label"),WI(2,"N\xB0 Ticket"),Tc(),ii(3,"input",32),Fp("ngModelChange",function(i){Jl(e);let o=gI(2);return YI(o.ticket,i)||(o.ticket=i),Xl(i)}),yp("blur",function(){Jl(e);let i=gI(2);return Xl(i.lookupTicket())})("keydown.enter",function(){Jl(e);let i=gI(2);return Xl(i.lookupTicket())}),Tc(),Wv(),nI(4,An,1,0,"mat-spinner",33)(5,Tn,2,0,"mat-icon",11),Tc();}if(a&2){let e=gI(2);Oy(3),Lp("ngModel",e.ticket),zv(),Oy(),rI(e.ticketLoading()?4:5);}}function Pn(a,n){if(a&1){let e=pI();ii(0,"div",7)(1,"mat-form-field",15)(2,"mat-label"),WI(3,"Cliente"),Tc(),ii(4,"input",30),yp("ngModelChange",function(i){Jl(e);let o=gI();return Xl(o.onClientInput(i))}),Tc(),Wv(),ii(5,"mat-icon",11),WI(6,"search"),Tc(),ii(7,"mat-autocomplete",12,2),yp("optionSelected",function(i){Jl(e);let o=gI();return Xl(o.onClientPicked(i.option.value))}),ii(9,"mat-option",13),WI(10,"\u2014 Sin cliente \u2014"),Tc(),sI(11,In,2,2,"mat-option",13,Yi,false,En,2,1,"mat-option",14),Tc()(),nI(14,On,6,2,"mat-form-field",31),Tc();}if(a&2){let e=TI(8),t=gI();Oy(4),up("matAutocomplete",e)("ngModel",t.clientModel),zv(),Oy(3),up("displayWith",t.displayClient),Oy(2),up("value",null),Oy(2),aI(t.filteredClients()),Oy(3),rI(t.isNew?14:-1);}}function Rn(a,n){if(a&1&&(ii(0,"span",34),WI(1),Tc()),a&2){let e=gI(2);Oy(),Nc("#",e.story.ticket);}}function Fn(a,n){if(a&1&&(ii(0,"mat-chip-set")(1,"mat-chip",35),WI(2),Tc()()),a&2){let e=gI(2);Oy(2),Rp(e.client.name);}}function Ln(a,n){if(a&1&&(ii(0,"div",8),nI(1,Rn,2,1,"span",34),nI(2,Fn,3,1,"mat-chip-set"),Tc()),a&2){let e=gI();Oy(),rI(e.story.ticket?1:-1),Oy(),rI(e.client?2:-1);}}function Bn(a,n){if(a&1){let e=pI();ii(0,"button",36),yp("click",function(){Jl(e);let i=gI();return Xl(i.openTicketConversation())}),ii(1,"mat-icon"),WI(2,"forum"),Tc(),WI(3," Ver conversaci\xF3n del ticket "),Tc();}}function Vn(a,n){if(a&1&&(ii(0,"mat-option",13)(1,"span",37),WI(2),Tc(),ii(3,"small",38),WI(4),Tc()()),a&2){let e=n.$implicit;up("value",e),Oy(2),Rp(e.name),Oy(2),Op("",e.id,"",e.role?" \xB7 "+e.role:"");}}function Nn(a,n){a&1&&(ii(0,"mat-option",14),WI(1,"Sin coincidencias"),Tc()),a&2&&up("value",null);}function Hn(a,n){if(a&1&&(ii(0,"mat-option",13),WI(1),Tc()),a&2){let e=n.$implicit,t=gI(2);up("value",e),Oy(),Rp(t.PRIORITY_LABELS[e]);}}function Wn(a,n){if(a&1){let e=pI();ii(0,"mat-select",18),Fp("ngModelChange",function(i){Jl(e);let o=gI();return YI(o.priority,i)||(o.priority=i),Xl(i)}),sI(1,Hn,2,2,"mat-option",13,iI),Tc(),Wv();}if(a&2){let e=gI();Lp("ngModel",e.priority),zv(),Oy(),aI(e.PRIORITIES);}}function zn(a,n){if(a&1&&dp(0,"input",17),a&2){let e=gI();up("value",e.PRIORITY_LABELS[e.priority]);}}function jn(a,n){if(a&1&&(ii(0,"mat-option",19),WI(1),Tc()),a&2){let e=n.$implicit,t=gI();up("value",e)("disabled",e==="todo"&&t.salioDeTodo),Oy(),Rp(t.STATUS_LABELS[e]);}}function qn(a,n){if(a&1){let e=pI();ii(0,"button",39),yp("click",function(){Jl(e);let i=gI();return Xl(i.remove())}),WI(1,"Eliminar"),Tc(),dp(2,"span",40);}}var Qi=class a{data=E(be);auth=E(Bn$1);helpdesk=E(Ue);dialog=E(vt);snack=E(Qt);ref=E(N);input=E(ue);story=this.input.story;isNew=!this.story;esHelpdesk=this.auth.esMSC001;showClientEditor=lD(()=>this.isNew||this.esHelpdesk()&&!this.story?.ticket);STATUSES=Oi;STATUS_LABELS=Pi;PRIORITIES=["alta","media","baja"];PRIORITY_LABELS=Ri;get client(){let n=this.story?.client;if(!n)return null;let e=this.helpdesk.clients().find(i=>i.id===n);return e?{id:e.id,name:e.name}:this.data.getClient(n)??{id:n,name:n}}clientes=yn$1(this.initialClients());clientFilter=yn$1("");clientModel=null;clientTouched=false;filteredClients=lD(()=>{let n=this.clientFilter().toLowerCase().trim(),e=this.clientes();return n?e.filter(t=>t.name.toLowerCase().includes(n)||t.id.toLowerCase().includes(n)):e});assignees=yn$1(this.ensureCurrent(this.helpdesk.hdUsers()));assigneeFilter=yn$1("");assigneeModel=null;assigneeTouched=false;filteredAssignees=lD(()=>{let n=this.assigneeFilter().toLowerCase().trim(),e=this.assignees();return n?e.filter(t=>t.name.toLowerCase().includes(n)||t.id.toLowerCase().includes(n)):e});constructor(){this.syncAssigneeModel(),this.helpdesk.getHdUsers().then(n=>{this.assignees.set(this.ensureCurrent(n)),this.assigneeTouched||this.syncAssigneeModel();}),this.syncClientModel(),this.helpdesk.getClients().then(n=>{n.length&&this.clientes.set(n),this.clientTouched||this.syncClientModel();});}syncClientModel(){let n=this.clientId;if(!n){this.clientModel=null;return}this.clientModel=this.clientes().find(e=>e.id===n)??{id:n,name:this.input.prefill?.clientName||n};}initialClients(){let n=this.helpdesk.clients();return n.length?n:this.data.getClients().map(e=>({id:e.id,name:e.name}))}displayClient=n=>n?typeof n=="string"?n:n.name:"";onClientInput(n){this.clientTouched=true,this.clientFilter.set(typeof n=="string"?n:"");}onClientPicked(n){this.clientTouched=true,this.clientId=n?.id??"",this.clientModel=n,this.clientFilter.set("");}ticketLoading=yn$1(false);lastLookup="";async lookupTicket(){let n=this.ticket.trim();if(!n||!/^\d+$/.test(n)||n===this.lastLookup)return;this.lastLookup=n,this.ticketLoading.set(true);let e=await this.helpdesk.searchTicketRemote(n);if(this.ticketLoading.set(false),!e){this.snack.open(`No se encontr\xF3 el ticket #${n}.`,"OK",{duration:3e3});return}e.asunto&&(this.title=e.asunto),this.clientTouched=true,this.clientId=e.clientId||"",this.clientModel=this.clientId?this.clientes().find(t=>t.id===this.clientId)??{id:this.clientId,name:e.clienteRaw||this.clientId}:null,this.assigneeTouched=true,this.assignee=e.usuarioAsignado||"",this.assigneeModel=this.assignee?this.assignees().find(t=>t.id===this.assignee)??{id:this.assignee,name:e.nombreAsignado||this.assignee,role:""}:null;}ensureCurrent(n){let e=this.story?.assignee;if(!e||n.some(i=>i.id===e))return n;let t=Li(e,this.data.getTeam(),n);return t?[{id:t.id,name:t.name,role:t.role},...n]:n}syncAssigneeModel(){let n=this.assignee;this.assigneeModel=n?this.assignees().find(e=>e.id===n)??{id:n,name:this.input.prefill?.assigneeName||n,role:""}:null;}displayAssignee=n=>n?typeof n=="string"?n:`${n.name}${n.id?" \xB7 "+n.id:""}`:"";onAssigneeInput(n){this.assigneeTouched=true,this.assigneeFilter.set(typeof n=="string"?n:"");}onAssigneePicked(n){this.assigneeTouched=true,this.assignee=n?.id??"",this.assigneeModel=n,this.assigneeFilter.set("");}title=this.story?.title??this.input.prefill?.title??"";priority=this.story?.priority??"media";description=this.story?.description??"";status=this.story?.status??"todo";dueDateModel=this.story?.dueDate?new Date(this.story.dueDate+"T00:00:00"):null;assignee=this.story?.assignee??this.input.prefill?.assignee??"";ticket=this.story?.ticket??this.input.prefill?.ticket??"";clientId=this.story?.client??this.input.prefill?.client??"";progress=yn$1(this.story?.progress??0);editable=this.status==="todo"||this.status==="in_progress";salioDeTodo=!this.isNew&&this.story.status!=="todo";progBarColor=lD(()=>Bi(this.progress()));onProgress(n){this.progress.set(Math.min(100,Math.max(0,parseInt(n,10)||0)));}dueDateStr(){let n=this.dueDateModel;if(!n)return "";let e=t=>String(t).padStart(2,"0");return `${n.getFullYear()}-${e(n.getMonth()+1)}-${e(n.getDate())}`}openTicketConversation(){let n=this.ticket.trim();n&&this.dialog.open(La,{data:{ticketId:n},width:"720px",maxWidth:"96vw"});}async save(){let n=this.title.trim();if(!n){this.snack.open("El t\xEDtulo no puede quedar vac\xEDo.","OK",{duration:3e3});return}let e=Vi(this.progress()),t=this.assignee||null;if(this.isNew){let r=this.ticket.trim();this.data.addStory({title:n,priority:this.priority,description:this.description.trim(),status:this.status,dueDate:this.dueDateStr(),assignee:t,client:this.clientId||null,ticket:r,progress:e}),this.maybeAssignHd(r,t),this.ref.close(true);return}let i=this.story;if(this.salioDeTodo&&this.status==="todo"){this.snack.open("Una tarea que ya sali\xF3 de To Do no puede volver.","OK",{duration:3e3});return}if(i.status==="todo"&&this.status==="in_progress"&&!await Ni(i,{data:this.data,auth:this.auth,dialog:this.dialog,snack:this.snack}))return;this.data.updateStoryTitle(i.id,n),this.data.updateStoryDescription(i.id,this.description.trim()),this.data.updateStoryProgress(i.id,e),this.data.updateStoryStatus(i.id,this.status),this.data.updateStoryDueDate(i.id,this.dueDateStr()),this.data.updateStoryAssignee(i.id,t),this.esHelpdesk()&&!i.ticket&&this.data.updateStoryClient(i.id,this.clientId||null),this.editable&&this.data.updateStoryPriority(i.id,this.priority),this.maybeAssignHd(i.ticket,t,i.assignee);let o=Fi[this.status];i.ticket&&this.status!==i.status&&o&&this.helpdesk.setTicketStatus(i.ticket,o).then(r=>{r&&this.data.updateStoryHdEstatus(i.id,o);}),this.ref.close(true);}maybeAssignHd(n,e,t){!n||!e||e===t||this.helpdesk.assignTicket(n,e).then(i=>{i?this.snack.open(`Ticket #${n} asignado a ${e} en el Helpdesk.`,"",{duration:2500}):this.snack.open(`No se pudo asignar el ticket #${n} en el Helpdesk.`,"OK",{duration:4e3});});}async remove(){if(!this.story)return;await uh(this.dialog.open(ae,{data:{title:"Eliminar tarea",message:`Vas a eliminar la tarea:

"${this.story.title}"

Esta acci\xF3n NO se puede deshacer.`,confirmText:"Eliminar",danger:true,requireWord:"BORRAR"}}).afterClosed())&&(this.data.deleteStory(this.story.id),this.ref.close(true));}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=OE({type:a,selectors:[["app-card-detail-dialog"]],decls:57,vars:22,consts:[["autoAssignee","matAutocomplete"],["duePicker",""],["autoClient","matAutocomplete"],["mat-dialog-title",""],[1,"detail"],["appearance","outline",1,"full"],["matInput","","placeholder","T\xEDtulo de la tarea",3,"ngModelChange","ngModel"],[1,"row"],[1,"meta"],["mat-stroked-button","","type","button",1,"conv-btn"],["matInput","","placeholder","Buscar por nombre o c\xF3digo...","autocomplete","off",3,"ngModelChange","matAutocomplete","ngModel"],["matSuffix",""],[3,"optionSelected","displayWith"],[3,"value"],["disabled","",3,"value"],["appearance","outline",1,"grow"],[3,"ngModel"],["matInput","","readonly","",3,"value"],[3,"ngModelChange","ngModel"],[3,"value","disabled"],["matInput","","rows","3","placeholder","Detalle adicional, contexto, pasos...",3,"ngModelChange","ngModel"],[1,"block-label"],[1,"prog"],["mode","determinate",3,"value"],["type","number","min","0","max","100","step","5",3,"input","value"],["matInput","",3,"ngModelChange","matDatepicker","ngModel"],["matIconSuffix","",3,"for"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"click"],["matInput","","placeholder","Buscar cliente...","autocomplete","off",3,"ngModelChange","matAutocomplete","ngModel"],["appearance","outline",1,"ticket"],["matInput","","inputmode","numeric","placeholder","Buscar ticket\u2026",3,"ngModelChange","blur","keydown.enter","ngModel"],["matSuffix","","diameter","18"],[1,"ticket-badge"],["disableRipple",""],["mat-stroked-button","","type","button",1,"conv-btn",3,"click"],[1,"opt-name"],[1,"opt-meta"],["mat-button","",1,"danger",3,"click"],[1,"spacer"]],template:function(e,t){if(e&1){let i=pI();ii(0,"h2",3),WI(1),Tc(),ii(2,"mat-dialog-content",4)(3,"mat-form-field",5)(4,"mat-label"),WI(5,"T\xEDtulo"),Tc(),ii(6,"input",6),Fp("ngModelChange",function(r){return Jl(i),YI(t.title,r)||(t.title=r),Xl(r)}),Tc(),Wv(),Tc(),nI(7,Pn,15,6,"div",7)(8,Ln,3,2,"div",8),nI(9,Bn,4,0,"button",9),ii(10,"mat-form-field",5)(11,"mat-label"),WI(12,"Asignado a"),Tc(),ii(13,"input",10),yp("ngModelChange",function(r){return t.onAssigneeInput(r)}),Tc(),Wv(),ii(14,"mat-icon",11),WI(15,"search"),Tc(),ii(16,"mat-autocomplete",12,0),yp("optionSelected",function(r){return t.onAssigneePicked(r.option.value)}),ii(18,"mat-option",13),WI(19,"\u2014 Sin asignar \u2014"),Tc(),sI(20,Vn,5,4,"mat-option",13,Yi,false,Nn,2,1,"mat-option",14),Tc()(),ii(23,"div",7)(24,"mat-form-field",15)(25,"mat-label"),WI(26,"Prioridad"),Tc(),nI(27,Wn,3,1,"mat-select",16)(28,zn,1,1,"input",17),Tc(),ii(29,"mat-form-field",15)(30,"mat-label"),WI(31,"Estado"),Tc(),ii(32,"mat-select",18),Fp("ngModelChange",function(r){return Jl(i),YI(t.status,r)||(t.status=r),Xl(r)}),sI(33,jn,2,3,"mat-option",19,iI),Tc(),Wv(),Tc()(),ii(35,"mat-form-field",5)(36,"mat-label"),WI(37,"Descripci\xF3n"),Tc(),ii(38,"textarea",20),Fp("ngModelChange",function(r){return Jl(i),YI(t.description,r)||(t.description=r),Xl(r)}),Tc(),Wv(),Tc(),ii(39,"label",21),WI(40),Tc(),ii(41,"div",22),dp(42,"mat-progress-bar",23),ii(43,"input",24),yp("input",function(r){return t.onProgress(r.target.value)}),Tc()(),ii(44,"mat-form-field",5)(45,"mat-label"),WI(46,"Fecha de entrega"),Tc(),ii(47,"input",25),Fp("ngModelChange",function(r){return Jl(i),YI(t.dueDateModel,r)||(t.dueDateModel=r),Xl(r)}),Tc(),Wv(),dp(48,"mat-datepicker-toggle",26)(49,"mat-datepicker",null,1),Tc()(),ii(51,"mat-dialog-actions",27),nI(52,qn,3,0),ii(53,"button",28),WI(54,"Cancelar"),Tc(),ii(55,"button",29),yp("click",function(){return t.save()}),WI(56),Tc()();}if(e&2){let i=TI(17),o=TI(50);Oy(),Nc(" ",t.isNew?"Nueva tarea":t.story.id,`
`),Oy(5),Lp("ngModel",t.title),zv(),Oy(),rI(t.showClientEditor()?7:t.story.ticket||t.client?8:-1),Oy(2),rI(t.ticket.trim()?9:-1),Oy(4),up("matAutocomplete",i)("ngModel",t.assigneeModel),zv(),Oy(3),up("displayWith",t.displayAssignee),Oy(2),up("value",null),Oy(2),aI(t.filteredAssignees()),Oy(7),rI(t.editable?27:28),Oy(5),Lp("ngModel",t.status),zv(),Oy(),aI(t.STATUSES),Oy(5),Lp("ngModel",t.description),zv(),Oy(2),Nc("Progreso \u2014 ",t.progress(),"%"),Oy(2),_p("--mdc-linear-progress-active-indicator-color",t.progBarColor()),up("value",t.progress()),Oy(),up("value",t.progress()),Oy(4),up("matDatepicker",o),Lp("ngModel",t.dueDateModel),zv(),Oy(),up("for",o),Oy(4),rI(t.isNew?-1:52),Oy(4),Rp(t.isNew?"Crear":"Guardar");}},dependencies:[ta,ie,Xn,bn$1,_i,mi,pi,fi,ui,va,ga,de,it$1,oe,Ot,nn$1,tn$1,Ft,Rt,J,qi,ji,ct,Mi,nt,xi,Ei$1,Oi$1,Ia$1,xa$1,Ui,Ki,Mr,wr,Ja,Qn],styles:[".detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:8px;min-width:460px}.full[_ngcontent-%COMP%]{width:100%}.row[_ngcontent-%COMP%]{display:flex;gap:12px}.row[_ngcontent-%COMP%]   .grow[_ngcontent-%COMP%]{flex:1}.row[_ngcontent-%COMP%]   .ticket[_ngcontent-%COMP%]{width:120px}.meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin:0 0 14px}.ticket-badge[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:13px;font-weight:600;color:var(--mat-sys-primary)}.block-label[_ngcontent-%COMP%]{font-size:12px;color:var(--mat-sys-on-surface-variant);margin:2px 0 6px}.prog[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:16px}.prog[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{flex:1;border-radius:4px}.prog[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:64px;padding:6px 8px;border:1px solid var(--mat-sys-outline);border-radius:6px;background:var(--mat-sys-surface);color:var(--mat-sys-on-surface);font:inherit;text-align:right}.opt-name[_ngcontent-%COMP%]{font-weight:500}.opt-meta[_ngcontent-%COMP%]{margin-left:8px;font-family:JetBrains Mono,monospace;color:var(--mat-sys-on-surface-variant)}.conv-btn[_ngcontent-%COMP%]{align-self:flex-start;margin-bottom:12px}.spacer[_ngcontent-%COMP%]{flex:1}.danger[_ngcontent-%COMP%]{color:var(--mat-sys-error)}@media(max-width:560px){.detail[_ngcontent-%COMP%]{min-width:0}.row[_ngcontent-%COMP%]{flex-direction:column;gap:0}.row[_ngcontent-%COMP%]   .ticket[_ngcontent-%COMP%]{width:100%}}"]})};export{Aa as A,Bi as B,Da as D,Ea as E,Fi as F,Ia as I,Ki as K,Li as L,Ma as M,Ni as N,Oi as O,Pi as P,Qi as Q,Ri as R,Ta as T,Ui as U,Vi as V,at as a,ae as b,Mi as c,xi as d,nt as n,ua as u,xa as x};