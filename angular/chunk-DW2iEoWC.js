import {i}from'./chunk-CABW68Qk.js';import {Q as Qt}from'./chunk-CLMLBcMk.js';import {D,B as Bn,u as ue$1,W as Wt,P as Pe$1,g as De$1,l as lD,M as Mo,i as UL,Y as YL,j as Oy,k as Wt$1,H,x as xE,m as ur,N as Nt,p as bo,s as si,o as oi$1,h as hp,q as qI,a as Dc,t as tI,r as cp,c as xy,d as ap,n as nI,I as Ip,v as DI,w as b,Q as Qh,y as M,z as kE,A as bl,C as qr,E as hr,F as w$1,X as Xn,G as mI,J as yI,K as RI,L as Cp,S as yp,T as EI,V as II,$ as Or,a0 as hh,a1 as h,a2 as Dm,a3 as Jf,a4 as tD,a5 as Bl,a6 as Ed,a7 as sp,a8 as vp,a9 as PE,aa as Xt,ab as Tp,ac as ep,ad as fI,ae as Yl,e as hI,af as Kl,f as xp,ag as S,ah as Me$1,ai as ct,aj as B,ak as q,al as nh,am as cn,an as je$1,ao as ge$1,ap as kh,aq as Br,ar as Ir,as as Lv,at as kr,au as ee,av as Be$1,aw as Ri,ax as GL,ay as Hr,az as Xt$1,aA as Ss,aB as qo,aC as zh,aD as Lh,aE as Fh,aF as dp}from'./main-EHM5MHIK.js';import {y as yi,v as vi,I as It,X as Xe$1,H as H$1}from'./chunk-CWMPTj2D.js';import {v as va,A as An}from'./chunk-D2VuajGe.js';import {w}from'./chunk-DHh9XGKa.js';function de(i){i||(i=D(Pe$1));let c=new M(t=>{if(i.destroyed){t.next();return}return i.onDestroy(t.next.bind(t))});return t=>t.pipe(Qh(c))}function me(i,c){let e=!c?.manualCleanup?c?.injector?.get(Pe$1)??D(Pe$1):null,n=Me(c?.equal),r;c?.requireSync?r=Mo({kind:0},{equal:n}):r=Mo({kind:1,value:c?.initialValue},{equal:n});let o,V=i.subscribe({next:h=>r.set({kind:1,value:h}),error:h=>{r.set({kind:2,error:h}),o?.();},complete:()=>{o?.();}});if(c?.requireSync&&r().kind===0)throw new b(601,false);return o=e?.onDestroy(V.unsubscribe.bind(V)),lD(()=>{let h=r();switch(h.kind){case 1:return h.value;case 2:throw h.error;case 0:throw new b(601,false)}},{equal:c?.equal})}function Me(i=Object.is){return (c,t)=>c.kind===1&&t.kind===1&&i(c.value,t.value)}var he=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=kE({type:i});static \u0275inj=bl({imports:[qr]})}return i})();var De=["*"],Se=`.mdc-list {
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
`,Le=["unscopedContent"],Te=["text"],Ee=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Ie=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Oe=new S("ListOption"),Ae=(()=>{class i{_elementRef=D(hr);static \u0275fac=function(e){return new(e||i)};static \u0275dir=PE({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Fe=(()=>{class i{_elementRef=D(hr);static \u0275fac=function(e){return new(e||i)};static \u0275dir=PE({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),ze=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=PE({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),pe=(()=>{class i{_listOption=D(Oe,{optional:true});_isAlignedAtStart(){return !this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=PE({type:i,hostVars:4,hostBindings:function(e,n){e&2&&Cp("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart());}})}return i})(),Re=(()=>{class i extends pe{static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275dir=PE({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Jf]})}return i})(),Be=(()=>{class i extends pe{static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275dir=PE({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Jf]})}return i})(),Pe=new S("MAT_LIST_CONFIG"),vt=(()=>{class i{_isNonInteractive=true;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Bl(t);}_disableRipple=false;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Bl(t));}_disabled=Mo(false);_defaultOptions=D(Pe,{optional:true});static \u0275fac=function(e){return new(e||i)};static \u0275dir=PE({type:i,hostVars:1,hostBindings:function(e,n){e&2&&sp("aria-disabled",n.disabled);},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),je=(()=>{class i{_elementRef=D(hr);_ngZone=D(Me$1);_listBase=D(vt,{optional:true});_platform=D(w$1);_hostElement;_isButtonElement;_noopAnimations=ct();_avatars;_icons;set lines(t){this._explicitLines=Xt(t,null),this._updateItemLines(false);}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Bl(t);}_disableRipple=false;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Bl(t));}_disabled=Mo(false);_subscriptions=new B;_rippleRenderer=null;_hasUnscopedTextContent=false;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){D(q).load(nh);let t=D(cn,{optional:true});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button");}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(true);}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents();}_hasIconOrAvatar(){return !!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new je$1(this,this._ngZone,this._hostElement,this._platform,D(ge$1)),this._rippleRenderer.setupTriggerEvents(this._hostElement);}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(kh(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(false)));});}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let r=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",r),n.classList.toggle("mdc-list-item__secondary-text",!r);}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text");}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()));}static \u0275fac=function(e){return new(e||i)};static \u0275dir=PE({type:i,contentQueries:function(e,n,r){if(e&1&&yp(r,Re,4)(r,Be,4),e&2){let o;EI(o=II())&&(n._avatars=o),EI(o=II())&&(n._icons=o);}},hostVars:4,hostBindings:function(e,n){e&2&&(sp("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),Cp("mdc-list-item--disabled",n.disabled));},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var _e=(()=>{class i extends je{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=Bl(t);}_activated=false;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275cmp=xE({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,r){if(e&1&&yp(r,Fe,5)(r,Ae,5)(r,ze,5),e&2){let o;EI(o=II())&&(n._lines=o),EI(o=II())&&(n._titles=o),EI(o=II())&&(n._meta=o);}},viewQuery:function(e,n){if(e&1&&vp(Le,5)(Te,5),e&2){let r;EI(r=II())&&(n._unscopedContent=r.first),EI(r=II())&&(n._itemText=r.first);}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(sp("aria-current",n._getAriaCurrent()),Cp("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations));},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Jf],ngContentSelectors:Ie,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(mI(Ee),yI(0),oi$1(1,"span",1),yI(2,1),yI(3,2),oi$1(4,"span",2,0),hp("cdkObserveContent",function(){return n._updateItemLines(true)}),yI(6,3),Dc()(),yI(7,4),yI(8,5),cp(9,"div",3));},dependencies:[Ed],encapsulation:2})}return i})();var ue=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=PE({type:i,selectors:[["","mat-subheader",""],["","matSubheader",""]],hostAttrs:[1,"mat-mdc-subheader","mdc-list-group__subheader"]})}return i})();var ge=(()=>{class i extends vt{_isNonInteractive=false;static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275cmp=xE({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[tD([{provide:vt,useExisting:i}]),Jf],ngContentSelectors:De,decls:1,vars:0,template:function(e,n){e&1&&(mI(),yI(0));},styles:[Se],encapsulation:2})}return i})();var be=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=kE({type:i});static \u0275inj=bl({imports:[Or,hh,h,qr,he]})}return i})();var mt=["*"],Qe=["content"],fe=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],ve=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function He(i,c){if(i&1){let t=fI();oi$1(0,"div",1),hp("click",function(){Yl(t);let n=hI();return Kl(n._onBackdropClicked())}),Dc();}if(i&2){let t=hI();Cp("mat-drawer-shown",t._isShowingBackdrop());}}function qe(i,c){i&1&&(oi$1(0,"mat-drawer-content"),yI(1,2),Dc());}function Ue(i,c){if(i&1){let t=fI();oi$1(0,"div",1),hp("click",function(){Yl(t);let n=hI();return Kl(n._onBackdropClicked())}),Dc();}if(i&2){let t=hI();Cp("mat-drawer-shown",t._isShowingBackdrop());}}function Ge(i,c){i&1&&(oi$1(0,"mat-sidenav-content"),yI(1,2),Dc());}var We=`.mat-drawer-container {
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
`;var Ze=new S("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>false}),kt=new S("MAT_DRAWER_CONTAINER"),nt=(()=>{class i extends Xe$1{_platform=D(w$1);_changeDetectorRef=D(GL);_element=D(hr);_ngZone=D(Me$1);_isInert=false;_container=D(xt);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck());}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(Fh(50),Xt$1(1)).subscribe(()=>this._updateInert());}):this._updateInert();}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute("inert","true"):e.removeAttribute("inert");}}_shouldBeHidden(){if(this._platform.isBrowser)return  false;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275cmp=xE({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,n){e&2&&(Tp("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),Cp("mat-drawer-content-hidden",n._shouldBeHidden()));},features:[tD([{provide:Xe$1,useExisting:i}]),Jf],ngContentSelectors:mt,decls:1,vars:0,template:function(e,n){e&1&&(mI(),yI(0));},encapsulation:2})}return i})(),wt=(()=>{class i{_elementRef=D(hr);_focusTrapFactory=D(Br);_focusMonitor=D(Ir);_platform=D(w$1);_ngZone=D(Me$1);_renderer=D(Lv);_interactivityChecker=D(kr);_doc=D(Xn);_container=D(kt,{optional:true});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=false;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit());}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next();}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=Bl(t);}_disableClose=false;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=Bl(t)),this._autoFocus=t;}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(Bl(t));}_opened=Mo(false);_openedVia=null;_animationStarted=new ee;_animationEnd=new ee;openedChange=new Be$1(true);_openedStream=this.openedChange.pipe(Wt$1(t=>t),De$1(()=>{}));openedStart=this._animationStarted.pipe(Wt$1(()=>this.opened),Ri(void 0));_closedStream=this.openedChange.pipe(Wt$1(t=>!t),De$1(()=>{}));closedStart=this._animationStarted.pipe(Wt$1(()=>!this.opened),Ri(void 0));_destroyed=new ee;onPositionChanged=new Be$1;_content;_modeChanged=new ee;_injector=D(ge$1);_changeDetectorRef=D(GL);constructor(){this.openedChange.pipe(Qh(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program");}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return [t.listen(e,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Hr(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault();});}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened);});}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),V(),n.removeAttribute("tabindex");},o=this._renderer.listen(n,"blur",r),V=this._renderer.listen(n,"mousedown",r);})),n.focus(e));}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case  false:case "dialog":return;case  true:case "first-tabbable":Oy(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus();},{injector:this._injector});break;case "first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null);}_isFocusWithinDrawer(){let t=this._doc.activeElement;return !!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=true,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState());}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete();}open(t){return this.toggle(true,t)}close(){return this.toggle(false)}_closeViaBackdropClick(){return this._setOpen(false,true,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,e,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),(this._container?._content||this._container?._userContent)?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(true),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next();}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(Xt$1(1)).subscribe(o=>r(o?"open":"close"));}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t);}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop());}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,n=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,e)),n.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor);}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(false),this._animationEnd.next(t);});};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=xE({type:i,selectors:[["mat-drawer"]],viewQuery:function(e,n){if(e&1&&vp(Qe,5),e&2){let r;EI(r=II())&&(n._content=r.first);}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,n){e&2&&(sp("align",null)("tabIndex",n.mode!=="side"?"-1":null),Tp("visibility",!n._container&&!n.opened?"hidden":null),Cp("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"));},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:mt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(mI(),oi$1(0,"div",1,0),yI(2),Dc());},dependencies:[Xe$1],encapsulation:2})}return i})(),xt=(()=>{class i{_dir=D(Ss,{optional:true});_element=D(hr);_ngZone=D(Me$1);_changeDetectorRef=D(GL);_animationDisabled=ct();_transitionsEnabled=false;_allDrawers;_drawers=new qo;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=Bl(t);}_autosize=D(Ze);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:Bl(t);}_backdropOverride=null;backdropClick=new Be$1;_start=null;_end=null;_left=null;_right=null;_destroyed=new ee;_doCheckSubject=new ee;_contentMargins={left:null,right:null};_contentMarginChanges=new ee;get scrollable(){return this._userContent||this._content}_injector=D(ge$1);constructor(){let t=D(w$1),e=D(H$1);this._dir?.change.pipe(Qh(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins();}),e.change().pipe(Qh(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=true;},200);});}ngAfterContentInit(){this._allDrawers.changes.pipe(zh(this._allDrawers),Qh(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges();}),this._drawers.changes.pipe(zh(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t);}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Lh(10),Qh(this._destroyed)).subscribe(()=>this.updateContentMargins());});}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete();}open(){this._drawers.forEach(t=>t.open());}close(){this._drawers.forEach(t=>t.close());}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,e-=n;}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();e+=n,t-=n;}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)));}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next());}_watchDrawerToggle(t){t._animationStarted.pipe(Qh(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),t.mode!=="side"&&t.openedChange.pipe(Qh(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened));}_watchDrawerPosition(t){t.onPositionChanged.pipe(Qh(this._drawers.changes)).subscribe(()=>{Oy({read:()=>this._validateDrawers()},{injector:this._injector});});}_watchDrawerMode(t){t._modeChanged.pipe(Qh(kh(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();});}_setContainerClass(t){let e=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?e.add(n):e.remove(n);}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t);}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end);}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop();}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick());}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=xE({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(e,n,r){if(e&1&&yp(r,nt,5)(r,wt,5),e&2){let o;EI(o=II())&&(n._content=o.first),EI(o=II())&&(n._allDrawers=o);}},viewQuery:function(e,n){if(e&1&&vp(nt,5),e&2){let r;EI(r=II())&&(n._userContent=r.first);}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,n){e&2&&Cp("mat-drawer-container-explicit-backdrop",n._backdropOverride);},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[tD([{provide:kt,useExisting:i}])],ngContentSelectors:ve,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(mI(fe),tI(0,He,1,2,"div",0),yI(1),yI(2,1),tI(3,qe,2,0,"mat-drawer-content")),e&2&&(nI(n.hasBackdrop?0:-1),xy(3),nI(n._content?-1:3));},dependencies:[nt],styles:[`.mat-drawer-container {
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
`],encapsulation:2})}return i})(),dt=(()=>{class i extends nt{static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275cmp=xE({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[tD([{provide:Xe$1,useExisting:i},{provide:nt,useExisting:i}]),Jf],ngContentSelectors:mt,decls:1,vars:0,template:function(e,n){e&1&&(mI(),yI(0));},encapsulation:2})}return i})(),yt=(()=>{class i extends wt{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=Bl(t);}_fixedInViewport=false;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Xt(t);}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Xt(t);}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275cmp=xE({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,n){e&2&&(sp("tabIndex",n.mode!=="side"?"-1":null)("align",null),Tp("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),Cp("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport));},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[tD([{provide:wt,useExisting:i}]),Jf],ngContentSelectors:mt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(mI(),oi$1(0,"div",1,0),yI(2),Dc());},dependencies:[Xe$1],encapsulation:2})}return i})(),we=(()=>{class i extends xt{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275cmp=xE({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(e,n,r){if(e&1&&yp(r,dt,5)(r,yt,5),e&2){let o;EI(o=II())&&(n._content=o.first),EI(o=II())&&(n._allDrawers=o);}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,n){e&2&&Cp("mat-drawer-container-explicit-backdrop",n._backdropOverride);},exportAs:["matSidenavContainer"],features:[tD([{provide:kt,useExisting:i},{provide:xt,useExisting:i}]),Jf],ngContentSelectors:ve,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(mI(fe),tI(0,Ue,1,2,"div",0),yI(1),yI(2,1),tI(3,Ge,2,0,"mat-sidenav-content")),e&2&&(nI(n.hasBackdrop?0:-1),xy(3),nI(n._content?-1:3));},dependencies:[dt],styles:[We],encapsulation:2})}return i})(),xe=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=kE({type:i});static \u0275inj=bl({imports:[It,qr,It]})}return i})();var Ke=["*",[["mat-toolbar-row"]]],Xe=["*","mat-toolbar-row"],Ye=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=PE({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),ke=(()=>{class i{_elementRef=D(hr);_platform=D(w$1);_document=D(Xn);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()));}_checkToolbarMixedModes(){this._toolbarRows.length;}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=xE({type:i,selectors:[["mat-toolbar"]],contentQueries:function(e,n,r){if(e&1&&yp(r,Ye,5),e&2){let o;EI(o=II())&&(n._toolbarRows=o);}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,n){e&2&&(RI(n.color?"mat-"+n.color:""),Cp("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0));},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Xe,decls:2,vars:0,template:function(e,n){e&1&&(mI(Ke),yI(0),yI(1,1));},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return i})();var ye=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=kE({type:i});static \u0275inj=bl({imports:[qr]})}return i})();var ti=["shellContent"];function ei(i,c){i&1&&dp(0);}function ii(i,c){i&1&&(oi$1(0,"div",4),ep(1,ei,1,0,"ng-container",20),Dc()),i&2&&(xy(),ap("ngTemplateOutlet",c));}function ni(i,c){i&1&&(oi$1(0,"a",13),qI(1,"Mi Panel"),Dc());}function ai(i,c){if(i&1){let t=fI();oi$1(0,"div",16)(1,"span",21),qI(2),Dc(),oi$1(3,"span",22),qI(4),Dc(),oi$1(5,"button",23),hp("click",function(){Yl(t);let n=hI();return Kl(n.logout())}),oi$1(6,"mat-icon"),qI(7,"logout"),Dc()()();}if(i&2){let t=c;xy(),Tp("background",t.color),xy(),xp(t.id),xy(2),xp(t.name);}}function ri(i,c){if(i&1&&(oi$1(0,"span",21),qI(1),Dc()),i&2){let t=c;Tp("background",t.color),xy(),xp(t.id);}}function oi(i,c){if(i&1){let t=fI();oi$1(0,"mat-toolbar",18)(1,"button",24),hp("click",function(){Yl(t);let n=hI();return Kl(n.drawerOpen.set(!n.opened()))}),oi$1(2,"mat-icon"),qI(3,"menu"),Dc()(),oi$1(4,"span",25),qI(5,"Fit-Daily"),Dc(),cp(6,"span",26),tI(7,ri,2,3,"span",27),Dc();}if(i&2){let t,e=hI();xy(7),nI((t=e.session())?7:-1,t);}}var Ce=class i$1{auth=D(Bn);data=D(w);router=D(ue$1);breakpoints=D(Wt);snack=D(Qt);destroyRef=D(Pe$1);shell=D(i);session=this.auth.session;puedeVerMiPanel=this.auth.puedeVerMiPanel;isDesktop=me(this.breakpoints.observe("(min-width: 900px)").pipe(De$1(c=>c.matches)),{initialValue:typeof window<"u"&&window.innerWidth>=900});fixed=lD(()=>this.isDesktop());mode=lD(()=>this.fixed()?"side":"over");drawerOpen=Mo(false);opened=lD(()=>this.fixed()||this.drawerOpen());shellContent=UL("shellContent");constructor(){this.data.ensureInit().then(()=>{this.data.startStreaming(),this.checkReminders();});let c=setInterval(()=>this.checkReminders(),300*1e3);this.destroyRef.onDestroy(()=>clearInterval(c)),YL(()=>{let t=this.fixed()||!this.opened(),e=this.shellContent()?.nativeElement;e&&t&&e.removeAttribute("inert");}),Oy(()=>{let t=this.shellContent()?.nativeElement;if(!t)return;let e=()=>{(this.fixed()||!this.opened())&&t.hasAttribute("inert")&&t.removeAttribute("inert");};e();let n=new MutationObserver(e);n.observe(t,{attributes:true,attributeFilter:["inert"]}),this.destroyRef.onDestroy(()=>n.disconnect());}),this.router.events.pipe(Wt$1(t=>t instanceof H),de()).subscribe(()=>{this.fixed()||this.drawerOpen.set(false);});}checkReminders(){let c=Date.now(),t=h=>String(h).padStart(2,"0"),e=new Date,n=`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`,r=this.data.getHdPendientes(),o=Object.values(r).filter(h=>!h.dueDate||h.paused||h.lastAlerted===n?false:new Date(`${h.dueDate}T${h.dueTime||"09:00"}:00`).getTime()<=c);if(!o.length)return;o.forEach(h=>this.data.updateHdPendiente(h.ticket,{lastAlerted:n}));let V=o.length===1?`Ticket #${o[0].ticket} pendiente de analizar.`:`Ten\xE9s ${o.length} tickets pendientes de analizar.`;this.snack.open(V,"Ver pendientes",{duration:12e3}).onAction().subscribe(()=>this.router.navigate(["/pendientes"]));}async logout(){await this.auth.logout(),this.router.navigate(["/login"]);}static \u0275fac=function(t){return new(t||i$1)};static \u0275cmp=xE({type:i$1,selectors:[["app-layout"]],viewQuery:function(t,e){t&1&&Ip(e.shellContent,ti,5),t&2&&DI();},decls:32,vars:7,consts:[["shellContent",""],[1,"shell"],[1,"drawer",3,"openedChange","mode","opened","disableClose"],[1,"drawer-brand"],[1,"drawer-filters"],[1,"drawer-nav",3,"click"],["matSubheader",""],["mat-list-item","","routerLink","/board","routerLinkActive","active"],["mat-list-item","","routerLink","/burndown","routerLinkActive","active"],["mat-list-item","","routerLink","/progreso","routerLinkActive","active"],["mat-list-item","","routerLink","/consultas","routerLinkActive","active"],["mat-list-item","","routerLink","/tickets","routerLinkActive","active"],["mat-list-item","","routerLink","/semanal","routerLinkActive","active"],["mat-list-item","","routerLink","/mi-panel","routerLinkActive","active"],["mat-list-item","","routerLink","/pendientes","routerLinkActive","active"],[1,"drawer-spacer"],[1,"drawer-user"],[1,"shell-content"],["color","primary",1,"topbar"],[1,"content"],[4,"ngTemplateOutlet"],[1,"user-chip"],[1,"user-name"],["mat-icon-button","","title","Cerrar sesi\xF3n","aria-label","Cerrar sesi\xF3n",3,"click"],["mat-icon-button","","aria-label","Abrir men\xFA",3,"click"],[1,"brand"],[1,"spacer"],[1,"user-chip",3,"background"]],template:function(t,e){if(t&1&&(oi$1(0,"mat-sidenav-container",1)(1,"mat-sidenav",2),hp("openedChange",function(r){return e.drawerOpen.set(r)}),oi$1(2,"div",3),qI(3,"Fit-Daily"),Dc(),tI(4,ii,2,1,"div",4),oi$1(5,"mat-nav-list",5),hp("click",function(){return e.drawerOpen.set(false)}),oi$1(6,"h3",6),qI(7,"Scrum"),Dc(),oi$1(8,"a",7),qI(9,"Board"),Dc(),oi$1(10,"a",8),qI(11,"Burndown"),Dc(),oi$1(12,"a",9),qI(13,"Progreso"),Dc(),oi$1(14,"a",10),qI(15,"Consultas"),Dc(),oi$1(16,"h3",6),qI(17,"Helpdesk"),Dc(),oi$1(18,"a",11),qI(19,"Tickets"),Dc(),oi$1(20,"a",12),qI(21,"HelpDesk Semanal"),Dc(),tI(22,ni,2,0,"a",13),oi$1(23,"a",14),qI(24,"Pendientes"),Dc()(),cp(25,"span",15),tI(26,ai,8,4,"div",16),Dc(),oi$1(27,"mat-sidenav-content",17,0),tI(29,oi,8,1,"mat-toolbar",18),oi$1(30,"main",19),cp(31,"router-outlet"),Dc()()()),t&2){let n,r;xy(),ap("mode",e.mode())("opened",e.opened())("disableClose",e.fixed()),xy(3),nI((n=e.shell.filters())?4:-1,n),xy(18),nI(e.puedeVerMiPanel()?22:-1),xy(4),nI((r=e.session())?26:-1,r),xy(3),nI(e.fixed()?-1:29);}},dependencies:[ur,Nt,bo,si,ye,ke,va,An,be,ge,_e,ue,xe,yt,we,dt,yi,vi],styles:[".shell[_ngcontent-%COMP%]{height:100vh}.drawer[_ngcontent-%COMP%]{width:280px;max-width:85vw;display:flex;flex-direction:column;border-right:1px solid var(--mat-sys-outline-variant, #e0e0e0);background:var(--mat-sys-surface-container-low, #f0f4f9)}.drawer-brand[_ngcontent-%COMP%]{font-weight:700;letter-spacing:-.5px;font-size:18px;padding:16px;color:var(--brand, #048abf)}.drawer-filters[_ngcontent-%COMP%]{padding:8px 12px 12px;border-bottom:1px solid var(--mat-sys-outline-variant, #e0e0e0)}.drawer-nav[_ngcontent-%COMP%]{padding-top:4px}.drawer-nav[_ngcontent-%COMP%]   h3[matSubheader][_ngcontent-%COMP%]{color:var(--brand-dark, #0390bc);font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.5px}.drawer-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--brand, #048abf) 14%,transparent);font-weight:600}.drawer-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.drawer-user[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 12px;border-top:1px solid var(--mat-sys-outline-variant, #e0e0e0)}.drawer-user[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{flex:1;min-width:0;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.user-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:28px;padding:0 8px;border-radius:14px;color:#fff;font-size:12px;font-weight:600}.shell-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.topbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;gap:4px}.topbar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{font-weight:700;letter-spacing:-.5px;margin-left:4px}.topbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}.content[_ngcontent-%COMP%]{flex:1;min-width:0;padding:20px;width:100%;box-sizing:border-box}"]})};export{Ce as Layout};