import {i}from'./chunk-CbYA40Vq.js';import {E,B as Bn,u as ue$1,e as W,f as Wt,h as Le$1,w as we$1,j as zt,H,k as nl,l as lD,y as yn,q as qL,K as KL,m as q,O as OE,o as ur,p as Nt,s as bo,t as ii$1,i as ii$2,a as yp,W as WI,T as Tc,n as nI,v as dp,c as Oy,d as up,r as rI,x as Tp,A as wI,C as b,J as Jh,D as N,G as Ec,I as so,M as sF,P as hr,Q as w,S as Ot,U as yI,V as vI,X as OI,Z as Mp,_ as Ip,$ as II,a0 as DI,a1 as Nr,a2 as th,a3 as h,a4 as bm,a5 as np,a6 as $p,a7 as Ll,a8 as gd,a9 as Dc,aa as Dp,ab as Kf,ac as Xt,ad as _p,ae as op,af as pI,ag as Jl,g as gI,ah as Xl,R as Rp,ai as M,aj as Ne$1,ak as at,al as B,am as q$1,an as ql,ao as cn,ap as Be$1,aq as me,ar as jh,as as Ur,at as Mr,au as Hv,av as xr,aw as ee,ax as ge$1,ay as Oi$1,az as zL,aA as Vr,aB as jy,aC as tn,aD as AD,aE as Wo,aF as Bh,aG as $h,aH as hp}from'./main-PR6UCIWX.js';import {Q as Qt}from'./chunk-BbmBpwIv.js';import {b as be$1,E as Ei,O as Oi,T as Tt,Q as Qe,U}from'./chunk-BSj6dTQK.js';import {v as va,A as An}from'./chunk-DFE8NuGk.js';function pe(i){i||(i=E(Le$1));let o=new N(t=>{if(i.destroyed){t.next();return}return i.onDestroy(t.next.bind(t))});return t=>t.pipe(Jh(o))}function xt(i,o){let e=!o?.manualCleanup?o?.injector?.get(Le$1)??E(Le$1):null,n=Se(o?.equal),r;o?.requireSync?r=yn({kind:0},{equal:n}):r=yn({kind:1,value:o?.initialValue},{equal:n});let s,V=i.subscribe({next:h=>r.set({kind:1,value:h}),error:h=>{r.set({kind:2,error:h}),s?.();},complete:()=>{s?.();}});if(o?.requireSync&&r().kind===0)throw new b(601,false);return s=e?.onDestroy(V.unsubscribe.bind(V)),lD(()=>{let h=r();switch(h.kind){case 1:return h.value;case 2:throw h.error;case 0:throw new b(601,false)}},{equal:o?.equal})}function Se(i=Object.is){return (o,t)=>o.kind===1&&t.kind===1&&i(o.value,t.value)}var _e=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=Ec({type:i});static \u0275inj=so({imports:[sF]})}return i})();var Le=["*"],Te=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Ee=["unscopedContent"],Ie=["text"],Oe=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Ae=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Fe=new M("ListOption"),Re=(()=>{class i{_elementRef=E(hr);static \u0275fac=function(e){return new(e||i)};static \u0275dir=Kf({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),ze=(()=>{class i{_elementRef=E(hr);static \u0275fac=function(e){return new(e||i)};static \u0275dir=Kf({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),Be=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=Kf({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),ue=(()=>{class i{_listOption=E(Fe,{optional:true});_isAlignedAtStart(){return !this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=Kf({type:i,hostVars:4,hostBindings:function(e,n){e&2&&Mp("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart());}})}return i})(),Pe=(()=>{class i extends ue{static \u0275fac=(()=>{let t;return function(n){return (t||(t=bm(i)))(n||i)}})();static \u0275dir=Kf({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[np]})}return i})(),je=(()=>{class i extends ue{static \u0275fac=(()=>{let t;return function(n){return (t||(t=bm(i)))(n||i)}})();static \u0275dir=Kf({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[np]})}return i})(),Ve=new M("MAT_LIST_CONFIG"),kt=(()=>{class i{_isNonInteractive=true;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Ll(t);}_disableRipple=false;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Ll(t));}_disabled=yn(false);_defaultOptions=E(Ve,{optional:true});static \u0275fac=function(e){return new(e||i)};static \u0275dir=Kf({type:i,hostVars:1,hostBindings:function(e,n){e&2&&Dc("aria-disabled",n.disabled);},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),Ne=(()=>{class i{_elementRef=E(hr);_ngZone=E(Ne$1);_listBase=E(kt,{optional:true});_platform=E(w);_hostElement;_isButtonElement;_noopAnimations=at();_avatars;_icons;set lines(t){this._explicitLines=Xt(t,null),this._updateItemLines(false);}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Ll(t);}_disableRipple=false;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Ll(t));}_disabled=yn(false);_subscriptions=new B;_rippleRenderer=null;_hasUnscopedTextContent=false;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){E(q$1).load(ql);let t=E(cn,{optional:true});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button");}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(true);}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents();}_hasIconOrAvatar(){return !!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Be$1(this,this._ngZone,this._hostElement,this._platform,E(me)),this._rippleRenderer.setupTriggerEvents(this._hostElement);}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(jh(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(false)));});}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let r=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",r),n.classList.toggle("mdc-list-item__secondary-text",!r);}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text");}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()));}static \u0275fac=function(e){return new(e||i)};static \u0275dir=Kf({type:i,contentQueries:function(e,n,r){if(e&1&&Ip(r,Pe,4)(r,je,4),e&2){let s;II(s=DI())&&(n._avatars=s),II(s=DI())&&(n._icons=s);}},hostVars:4,hostBindings:function(e,n){e&2&&(Dc("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),Mp("mdc-list-item--disabled",n.disabled));},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var ge=(()=>{class i extends Ne{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=Ll(t);}_activated=false;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return (t||(t=bm(i)))(n||i)}})();static \u0275cmp=OE({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,r){if(e&1&&Ip(r,ze,5)(r,Re,5)(r,Be,5),e&2){let s;II(s=DI())&&(n._lines=s),II(s=DI())&&(n._titles=s),II(s=DI())&&(n._meta=s);}},viewQuery:function(e,n){if(e&1&&Dp(Ee,5)(Ie,5),e&2){let r;II(r=DI())&&(n._unscopedContent=r.first),II(r=DI())&&(n._itemText=r.first);}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(Dc("aria-current",n._getAriaCurrent()),Mp("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations));},inputs:{activated:"activated"},exportAs:["matListItem"],features:[np],ngContentSelectors:Ae,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(yI(Oe),vI(0),ii$2(1,"span",1),vI(2,1),vI(3,2),ii$2(4,"span",2,0),yp("cdkObserveContent",function(){return n._updateItemLines(true)}),vI(6,3),Tc()(),vI(7,4),vI(8,5),dp(9,"div",3));},dependencies:[gd],encapsulation:2})}return i})();var be=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=Kf({type:i,selectors:[["","mat-subheader",""],["","matSubheader",""]],hostAttrs:[1,"mat-mdc-subheader","mdc-list-group__subheader"]})}return i})();var fe=(()=>{class i extends kt{_isNonInteractive=false;static \u0275fac=(()=>{let t;return function(n){return (t||(t=bm(i)))(n||i)}})();static \u0275cmp=OE({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[$p([{provide:kt,useExisting:i}]),np],ngContentSelectors:Le,decls:1,vars:0,template:function(e,n){e&1&&(yI(),vI(0));},styles:[Te],encapsulation:2})}return i})();var ve=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=Ec({type:i});static \u0275inj=so({imports:[Nr,th,h,sF,_e]})}return i})();var ht=["*"],qe=["content"],we=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],xe=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function Ue(i,o){if(i&1){let t=pI();ii$2(0,"div",1),yp("click",function(){Jl(t);let n=gI();return Xl(n._onBackdropClicked())}),Tc();}if(i&2){let t=gI();Mp("mat-drawer-shown",t._isShowingBackdrop());}}function Ge(i,o){i&1&&(ii$2(0,"mat-drawer-content"),vI(1,2),Tc());}function We(i,o){if(i&1){let t=pI();ii$2(0,"div",1),yp("click",function(){Jl(t);let n=gI();return Xl(n._onBackdropClicked())}),Tc();}if(i&2){let t=gI();Mp("mat-drawer-shown",t._isShowingBackdrop());}}function Ze(i,o){i&1&&(ii$2(0,"mat-sidenav-content"),vI(1,2),Tc());}var $e=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Ke=new M("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>false}),Mt=new M("MAT_DRAWER_CONTAINER"),nt=(()=>{class i extends Qe{_platform=E(w);_changeDetectorRef=E(zL);_element=E(hr);_ngZone=E(Ne$1);_isInert=false;_container=E(Ct);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck());}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe($h(50),tn(1)).subscribe(()=>this._updateInert());}):this._updateInert();}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute("inert","true"):e.removeAttribute("inert");}}_shouldBeHidden(){if(this._platform.isBrowser)return  false;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=(()=>{let t;return function(n){return (t||(t=bm(i)))(n||i)}})();static \u0275cmp=OE({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,n){e&2&&(_p("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),Mp("mat-drawer-content-hidden",n._shouldBeHidden()));},features:[$p([{provide:Qe,useExisting:i}]),np],ngContentSelectors:ht,decls:1,vars:0,template:function(e,n){e&1&&(yI(),vI(0));},encapsulation:2})}return i})(),yt=(()=>{class i{_elementRef=E(hr);_focusTrapFactory=E(Ur);_focusMonitor=E(Mr);_platform=E(w);_ngZone=E(Ne$1);_renderer=E(Hv);_interactivityChecker=E(xr);_doc=E(Ot);_container=E(Mt,{optional:true});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=false;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit());}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next();}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=Ll(t);}_disableClose=false;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=Ll(t)),this._autoFocus=t;}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(Ll(t));}_opened=yn(false);_openedVia=null;_animationStarted=new ee;_animationEnd=new ee;openedChange=new ge$1(true);_openedStream=this.openedChange.pipe(zt(t=>t),we$1(()=>{}));openedStart=this._animationStarted.pipe(zt(()=>this.opened),Oi$1(void 0));_closedStream=this.openedChange.pipe(zt(t=>!t),we$1(()=>{}));closedStart=this._animationStarted.pipe(zt(()=>!this.opened),Oi$1(void 0));_destroyed=new ee;onPositionChanged=new ge$1;_content;_modeChanged=new ee;_injector=E(me);_changeDetectorRef=E(zL);constructor(){this.openedChange.pipe(Jh(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program");}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return [t.listen(e,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Vr(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault();});}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened);});}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{s(),V(),n.removeAttribute("tabindex");},s=this._renderer.listen(n,"blur",r),V=this._renderer.listen(n,"mousedown",r);})),n.focus(e));}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case  false:case "dialog":return;case  true:case "first-tabbable":jy(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus();},{injector:this._injector});break;case "first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null);}_isFocusWithinDrawer(){let t=this._doc.activeElement;return !!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=true,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState());}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete();}open(t){return this.toggle(true,t)}close(){return this.toggle(false)}_closeViaBackdropClick(){return this._setOpen(false,true,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,e,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),(this._container?._content||this._container?._userContent)?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(true),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next();}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(tn(1)).subscribe(s=>r(s?"open":"close"));}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t);}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop());}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,n=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,e)),n.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor);}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(false),this._animationEnd.next(t);});};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=OE({type:i,selectors:[["mat-drawer"]],viewQuery:function(e,n){if(e&1&&Dp(qe,5),e&2){let r;II(r=DI())&&(n._content=r.first);}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,n){e&2&&(Dc("align",null)("tabIndex",n.mode!=="side"?"-1":null),_p("visibility",!n._container&&!n.opened?"hidden":null),Mp("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"));},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ht,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(yI(),ii$2(0,"div",1,0),vI(2),Tc());},dependencies:[Qe],encapsulation:2})}return i})(),Ct=(()=>{class i{_dir=E(AD,{optional:true});_element=E(hr);_ngZone=E(Ne$1);_changeDetectorRef=E(zL);_animationDisabled=at();_transitionsEnabled=false;_allDrawers;_drawers=new Wo;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=Ll(t);}_autosize=E(Ke);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:Ll(t);}_backdropOverride=null;backdropClick=new ge$1;_start=null;_end=null;_left=null;_right=null;_destroyed=new ee;_doCheckSubject=new ee;_contentMargins={left:null,right:null};_contentMarginChanges=new ee;get scrollable(){return this._userContent||this._content}_injector=E(me);constructor(){let t=E(w),e=E(U);this._dir?.change.pipe(Jh(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins();}),e.change().pipe(Jh(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=true;},200);});}ngAfterContentInit(){this._allDrawers.changes.pipe(nl(this._allDrawers),Jh(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges();}),this._drawers.changes.pipe(nl(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t);}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Bh(10),Jh(this._destroyed)).subscribe(()=>this.updateContentMargins());});}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete();}open(){this._drawers.forEach(t=>t.open());}close(){this._drawers.forEach(t=>t.close());}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,e-=n;}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();e+=n,t-=n;}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)));}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next());}_watchDrawerToggle(t){t._animationStarted.pipe(Jh(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),t.mode!=="side"&&t.openedChange.pipe(Jh(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened));}_watchDrawerPosition(t){t.onPositionChanged.pipe(Jh(this._drawers.changes)).subscribe(()=>{jy({read:()=>this._validateDrawers()},{injector:this._injector});});}_watchDrawerMode(t){t._modeChanged.pipe(Jh(jh(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();});}_setContainerClass(t){let e=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?e.add(n):e.remove(n);}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t);}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end);}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop();}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick());}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=OE({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(e,n,r){if(e&1&&Ip(r,nt,5)(r,yt,5),e&2){let s;II(s=DI())&&(n._content=s.first),II(s=DI())&&(n._allDrawers=s);}},viewQuery:function(e,n){if(e&1&&Dp(nt,5),e&2){let r;II(r=DI())&&(n._userContent=r.first);}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,n){e&2&&Mp("mat-drawer-container-explicit-backdrop",n._backdropOverride);},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[$p([{provide:Mt,useExisting:i}])],ngContentSelectors:xe,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(yI(we),nI(0,Ue,1,2,"div",0),vI(1),vI(2,1),nI(3,Ge,2,0,"mat-drawer-content")),e&2&&(rI(n.hasBackdrop?0:-1),Oy(3),rI(n._content?-1:3));},dependencies:[nt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})}return i})(),mt=(()=>{class i extends nt{static \u0275fac=(()=>{let t;return function(n){return (t||(t=bm(i)))(n||i)}})();static \u0275cmp=OE({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[$p([{provide:Qe,useExisting:i},{provide:nt,useExisting:i}]),np],ngContentSelectors:ht,decls:1,vars:0,template:function(e,n){e&1&&(yI(),vI(0));},encapsulation:2})}return i})(),Dt=(()=>{class i extends yt{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=Ll(t);}_fixedInViewport=false;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Xt(t);}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Xt(t);}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return (t||(t=bm(i)))(n||i)}})();static \u0275cmp=OE({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,n){e&2&&(Dc("tabIndex",n.mode!=="side"?"-1":null)("align",null),_p("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),Mp("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport));},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[$p([{provide:yt,useExisting:i}]),np],ngContentSelectors:ht,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(yI(),ii$2(0,"div",1,0),vI(2),Tc());},dependencies:[Qe],encapsulation:2})}return i})(),ke=(()=>{class i extends Ct{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return (t||(t=bm(i)))(n||i)}})();static \u0275cmp=OE({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(e,n,r){if(e&1&&Ip(r,mt,5)(r,Dt,5),e&2){let s;II(s=DI())&&(n._content=s.first),II(s=DI())&&(n._allDrawers=s);}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,n){e&2&&Mp("mat-drawer-container-explicit-backdrop",n._backdropOverride);},exportAs:["matSidenavContainer"],features:[$p([{provide:Mt,useExisting:i},{provide:Ct,useExisting:i}]),np],ngContentSelectors:xe,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(yI(we),nI(0,We,1,2,"div",0),vI(1),vI(2,1),nI(3,Ze,2,0,"mat-sidenav-content")),e&2&&(rI(n.hasBackdrop?0:-1),Oy(3),rI(n._content?-1:3));},dependencies:[mt],styles:[$e],encapsulation:2})}return i})(),ye=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=Ec({type:i});static \u0275inj=so({imports:[Tt,sF,Tt]})}return i})();var Ye=["*",[["mat-toolbar-row"]]],Je=["*","mat-toolbar-row"],ti=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=Kf({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Ce=(()=>{class i{_elementRef=E(hr);_platform=E(w);_document=E(Ot);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()));}_checkToolbarMixedModes(){this._toolbarRows.length;}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=OE({type:i,selectors:[["mat-toolbar"]],contentQueries:function(e,n,r){if(e&1&&Ip(r,ti,5),e&2){let s;II(s=DI())&&(n._toolbarRows=s);}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,n){e&2&&(OI(n.color?"mat-"+n.color:""),Mp("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0));},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Je,decls:2,vars:0,template:function(e,n){e&1&&(yI(Ye),vI(0),vI(1,1));},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return i})();var Me=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=Ec({type:i});static \u0275inj=so({imports:[sF]})}return i})();var ii=["shellContent"];function ni(i,o){i&1&&hp(0);}function ai(i,o){i&1&&(ii$2(0,"div",4),op(1,ni,1,0,"ng-container",20),Tc()),i&2&&(Oy(),up("ngTemplateOutlet",o));}function ri(i,o){i&1&&(ii$2(0,"a",13),WI(1,"Mi Panel"),Tc());}function oi(i,o){if(i&1){let t=pI();ii$2(0,"div",16)(1,"span",21),WI(2),Tc(),ii$2(3,"span",22),WI(4),Tc(),ii$2(5,"button",23),yp("click",function(){Jl(t);let n=gI();return Xl(n.logout())}),ii$2(6,"mat-icon"),WI(7,"logout"),Tc()()();}if(i&2){let t=o;Oy(),_p("background",t.color),Oy(),Rp(t.id),Oy(2),Rp(t.name);}}function si(i,o){if(i&1&&(ii$2(0,"span",21),WI(1),Tc()),i&2){let t=o;_p("background",t.color),Oy(),Rp(t.id);}}function ci(i,o){if(i&1){let t=pI();ii$2(0,"mat-toolbar",18)(1,"button",24),yp("click",function(){Jl(t);let n=gI();return Xl(n.drawerOpen.set(!n.opened()))}),ii$2(2,"mat-icon"),WI(3,"menu"),Tc()(),ii$2(4,"span",25),WI(5,"Fit-Daily"),Tc(),dp(6,"span",26),nI(7,si,2,3,"span",27),Tc();}if(i&2){let t,e=gI();Oy(7),rI((t=e.session())?7:-1,t);}}var De=class i$1{auth=E(Bn);data=E(be$1);router=E(ue$1);route=E(W);breakpoints=E(Wt);snack=E(Qt);destroyRef=E(Le$1);shell=E(i);session=this.auth.session;puedeVerMiPanel=this.auth.puedeVerMiPanel;isDesktop=xt(this.breakpoints.observe("(min-width: 900px)").pipe(we$1(o=>o.matches)),{initialValue:typeof window<"u"&&window.innerWidth>=900});collapsibleNav=xt(this.router.events.pipe(zt(o=>o instanceof H),nl(null),we$1(()=>this.deepestData().collapsibleNav===true)),{initialValue:false});fixed=lD(()=>this.isDesktop()&&!this.collapsibleNav());mode=lD(()=>this.fixed()?"side":"over");drawerOpen=yn(false);opened=lD(()=>this.fixed()||this.drawerOpen());shellContent=qL("shellContent");constructor(){this.data.ensureInit().then(()=>{this.data.startStreaming(),this.checkReminders();});let o=setInterval(()=>this.checkReminders(),300*1e3);this.destroyRef.onDestroy(()=>clearInterval(o)),KL(()=>{this.fixed(),this.opened();let t=this.shellContent()?.nativeElement;t&&this.fixed()&&t.removeAttribute("inert");}),this.router.events.pipe(zt(t=>t instanceof H),pe()).subscribe(()=>{this.fixed()||this.drawerOpen.set(false);});}deepestData(){let o=this.route.snapshot.firstChild,t={};for(;o;)t=q(q({},t),o.data),o=o.firstChild;return t}checkReminders(){let o=Date.now(),t=h=>String(h).padStart(2,"0"),e=new Date,n=`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`,r=this.data.getHdPendientes(),s=Object.values(r).filter(h=>!h.dueDate||h.paused||h.lastAlerted===n?false:new Date(`${h.dueDate}T${h.dueTime||"09:00"}:00`).getTime()<=o);if(!s.length)return;s.forEach(h=>this.data.updateHdPendiente(h.ticket,{lastAlerted:n}));let V=s.length===1?`Ticket #${s[0].ticket} pendiente de analizar.`:`Ten\xE9s ${s.length} tickets pendientes de analizar.`;this.snack.open(V,"Ver pendientes",{duration:12e3}).onAction().subscribe(()=>this.router.navigate(["/pendientes"]));}async logout(){await this.auth.logout(),this.router.navigate(["/login"]);}static \u0275fac=function(t){return new(t||i$1)};static \u0275cmp=OE({type:i$1,selectors:[["app-layout"]],viewQuery:function(t,e){t&1&&Tp(e.shellContent,ii,5),t&2&&wI();},decls:32,vars:7,consts:[["shellContent",""],[1,"shell"],[1,"drawer",3,"openedChange","mode","opened","disableClose"],[1,"drawer-brand"],[1,"drawer-filters"],[1,"drawer-nav"],["matSubheader",""],["mat-list-item","","routerLink","/board","routerLinkActive","active"],["mat-list-item","","routerLink","/burndown","routerLinkActive","active"],["mat-list-item","","routerLink","/progreso","routerLinkActive","active"],["mat-list-item","","routerLink","/consultas","routerLinkActive","active"],["mat-list-item","","routerLink","/tickets","routerLinkActive","active"],["mat-list-item","","routerLink","/semanal","routerLinkActive","active"],["mat-list-item","","routerLink","/mi-panel","routerLinkActive","active"],["mat-list-item","","routerLink","/pendientes","routerLinkActive","active"],[1,"drawer-spacer"],[1,"drawer-user"],[1,"shell-content"],["color","primary",1,"topbar"],[1,"content"],[4,"ngTemplateOutlet"],[1,"user-chip"],[1,"user-name"],["mat-icon-button","","title","Cerrar sesi\xF3n","aria-label","Cerrar sesi\xF3n",3,"click"],["mat-icon-button","","aria-label","Abrir men\xFA",3,"click"],[1,"brand"],[1,"spacer"],[1,"user-chip",3,"background"]],template:function(t,e){if(t&1&&(ii$2(0,"mat-sidenav-container",1)(1,"mat-sidenav",2),yp("openedChange",function(r){return e.drawerOpen.set(r)}),ii$2(2,"div",3),WI(3,"Fit-Daily"),Tc(),nI(4,ai,2,1,"div",4),ii$2(5,"mat-nav-list",5)(6,"h3",6),WI(7,"Scrum"),Tc(),ii$2(8,"a",7),WI(9,"Board"),Tc(),ii$2(10,"a",8),WI(11,"Burndown"),Tc(),ii$2(12,"a",9),WI(13,"Progreso"),Tc(),ii$2(14,"a",10),WI(15,"Consultas"),Tc(),ii$2(16,"h3",6),WI(17,"Helpdesk"),Tc(),ii$2(18,"a",11),WI(19,"Tickets"),Tc(),ii$2(20,"a",12),WI(21,"HelpDesk Semanal"),Tc(),nI(22,ri,2,0,"a",13),ii$2(23,"a",14),WI(24,"Pendientes"),Tc()(),dp(25,"span",15),nI(26,oi,8,4,"div",16),Tc(),ii$2(27,"mat-sidenav-content",17,0),nI(29,ci,8,1,"mat-toolbar",18),ii$2(30,"main",19),dp(31,"router-outlet"),Tc()()()),t&2){let n,r;Oy(),up("mode",e.mode())("opened",e.opened())("disableClose",e.fixed()),Oy(3),rI((n=e.shell.filters())?4:-1,n),Oy(18),rI(e.puedeVerMiPanel()?22:-1),Oy(4),rI((r=e.session())?26:-1,r),Oy(3),rI(e.fixed()?-1:29);}},dependencies:[ur,Nt,bo,ii$1,Me,Ce,va,An,ve,fe,ge,be,ye,Dt,ke,mt,Ei,Oi],styles:[".shell[_ngcontent-%COMP%]{height:100vh}.drawer[_ngcontent-%COMP%]{width:280px;max-width:85vw;display:flex;flex-direction:column;border-right:1px solid var(--mat-sys-outline-variant, #e0e0e0);background:var(--mat-sys-surface-container-low, #f0f4f9)}.drawer-brand[_ngcontent-%COMP%]{font-weight:700;letter-spacing:-.5px;font-size:18px;padding:16px;color:var(--brand, #048abf)}.drawer-filters[_ngcontent-%COMP%]{padding:8px 12px 12px;border-bottom:1px solid var(--mat-sys-outline-variant, #e0e0e0)}.drawer-nav[_ngcontent-%COMP%]{padding-top:4px}.drawer-nav[_ngcontent-%COMP%]   h3[matSubheader][_ngcontent-%COMP%]{color:var(--brand-dark, #0390bc);font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.5px}.drawer-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--brand, #048abf) 14%,transparent);font-weight:600}.drawer-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.drawer-user[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 12px;border-top:1px solid var(--mat-sys-outline-variant, #e0e0e0)}.drawer-user[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{flex:1;min-width:0;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.user-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:28px;padding:0 8px;border-radius:14px;color:#fff;font-size:12px;font-weight:600}.shell-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.topbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;gap:4px}.topbar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{font-weight:700;letter-spacing:-.5px;margin-left:4px}.topbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}.content[_ngcontent-%COMP%]{flex:1;min-width:0;padding:20px;width:100%;box-sizing:border-box}"]})};export{De as Layout};