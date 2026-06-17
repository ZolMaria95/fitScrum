import {N,u as ue$2,_ as _i,m as mi,p as pi,a as ui,O as Oe}from'./chunk-NqCM5ZT7.js';import {D,bS as gr,bT as oF,M as Mo,aI as ih,bU as tt,bV as S,bW as j,r as q,bq as se,G as kE,I as _l,J as qr,L as hr,ak as Me$1,aA as zL,av as Lv,bM as es,aj as S$1,ay as Be,x as xE,aX as YL,bh as wc,bj as up,t as tI,bi as Tc,c as xy,ae as Cp,n as nI,aa as ap,V as RI,Y as bp,B as Bn$1,u as ue$1,bX as zt,o as oi,q as qI,a as Dc,y as lp,g as gp,_ as _c,A as Ap,bY as ys,a5 as Dm,a6 as Xf,a7 as tD,am as B,ac as PE,b3 as pp,aY as qp,bF as vh,as as Rh,aW as rm,aQ as ZL,S as mI,T as yI,d as cp,ab as Ep,a0 as EI,a1 as II,$ as vp,aK as iI,b4 as oI,h as hI,aL as sI,ag as fI,ah as Kl,ai as Jl,br as rI,P as Pp,Z as ZI,b as Bv,O as Op,U as Uv,al as ct,bZ as M,ax as ee,an as q$1,bx as ht$2,b_ as gs,af as tp,b$ as L,aO as nn$1,b0 as lu,b1 as uu,b5 as pr,ar as ge,aR as Ei,aD as Ss,X as Xn$1,c0 as Ul,bI as Yt,aC as Xt,p as Oy,j as Wt,aB as Hr,c1 as _e,bQ as Zv,b2 as io,c2 as ts,k as el,R as w,ao as nh,bd as kp,bR as mp,c3 as uy,c4 as Zd}from'./main-C4IQZGKV.js';import {Q as Qt}from'./chunk-CLJhs3fW.js';import {l as le$1,r as rt}from'./chunk-CbEMymLo.js';import {y as yi,v as vi,Q as Qe,m as me,I as It,g as gn$1,c as mt,F as Ft,a as Ht,q as q$2,O as Oe$1,d as Fe,z as zt$1,B as Bt}from'./chunk-BQaPQge6.js';import {t as ta,i as ie$1,X as Xn,b as bn$1,v as va,g as ga,A as An$1,p as pt$1,h as ht$1,S as S$2}from'./chunk-DePqRDB0.js';function en(n,r){n&1&&up(0,"div",2);}var tn=new S$1("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var xa=(()=>{class n{_elementRef=D(hr);_ngZone=D(Me$1);_changeDetectorRef=D(zL);_renderer=D(Lv);_cleanupTransitionEnd;constructor(){let e=es(),t=D(tn,{optional:true});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode);}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Sa(e||0),this._changeDetectorRef.markForCheck();}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Sa(e||0),this._changeDetectorRef.markForCheck();}_bufferValue=0;animationEnd=new Be;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck();}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler);});}ngOnDestroy(){this._cleanupTransitionEnd?.();}_getPrimaryBarTransform(){return `scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return `${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}));};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=xE({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,a){t&2&&(ap("aria-valuenow",a._isIndeterminate()?null:a.value)("mode",a.mode),RI("mat-"+a.color),bp("_mat-animation-noopable",a._isNoopAnimation)("mdc-linear-progress--animation-ready",!a._isNoopAnimation)("mdc-linear-progress--indeterminate",a._isIndeterminate()));},inputs:{color:"color",value:[2,"value","value",YL],bufferValue:[2,"bufferValue","bufferValue",YL],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,a){t&1&&(wc(0,"div",0),up(1,"div",1),tI(2,en,1,0,"div",2),Tc(),wc(3,"div",3),up(4,"span",4),Tc(),wc(5,"div",5),up(6,"span",4),Tc()),t&2&&(xy(),Cp("flex-basis",a._getBufferBarFlexBasis()),xy(),nI(a.mode==="buffer"?2:-1),xy(),Cp("transform",a._getPrimaryBarTransform()));},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2})}return n})();function Sa(n,r=0,e=100){return Math.max(r,Math.min(e,n))}var Ia=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=kE({type:n});static \u0275inj=_l({imports:[qr]})}return n})();var ni=new Set(["COOPERATIVA DE AHORRO Y CREDITO ERCO","COAC CAPCPE GUALAQUIZA","COAC LA DOLOROSA DURAN","PADRE JULIAN LORENTE","COAC CACEL","COAC 4 RIOS","LITARGMODE CIA LTDA","COAC COPAC AUSTRO LTDA","BANCO DEL AUSTRO","VAZCREDIT","COAC SENOR DE GIRON","COAC SE\xD1OR DE GIRON","FININVEST OVERSEAS INC. LTD.","SEGURA COOP","PUNTOPRESTAMO"]);var ze=new Set(["JPHP001","VINC001","MSC001","FSGC001","ORLR001","KIMA001","KDLS001","BMHJ001","DSGS001","JCEO001","CUC001","JFQV001"]),Ta={"001":"INCIDENCIA","002":"REQUERIMIENTO","003":"CONSULTA"},pt=/el usuario .+ (cambi[oó]|ualizó .+ asun)/i;function ut(n){let r=document.createElement("div");return r.innerHTML=String(n||""),(r.textContent||r.innerText||"").replace(/\s+/g," ").trim()}function Va(n){return String(n||"").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi,"").replace(/href\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi,'href="#"')}function ht(n){if(!n||typeof n!="object")return [];let r=[],e=t=>{t!=null&&t!==""&&r.push(String(t));};return Object.entries(n).forEach(([t,a])=>{/attach|adjunt|archivo/i.test(t)&&(Array.isArray(a)?a.forEach(e):(typeof a=="string"||typeof a=="number")&&e(a));}),[...new Set(r)].filter(t=>/^\d+$/.test(t))}function ae(n){return {ticket:String(n.ticket_id||""),tipoId:n.ticket_type_id||"",tipo:Ta[n.ticket_type_id]||n.ticket_type_id||"",clienteRaw:String(n.cliente||"").trim().toUpperCase(),clientId:String(n.client_id??"").trim(),usuarioIngreso:n.entry_user_id||"",nombreIngreso:n.entry_person||"",usuarioAsignado:String(n.assigned_user_id||"").trim().toUpperCase(),nombreAsignado:n.assigned_person||"",orden:parseInt(n.priority||999,10),estatus:n.estado||"",asunto:n.subject||"",modulo:n.modulo||"",fechaAsignacion:n.assigned_date||"",fechaIngreso:n.entry_date||"",fechaMod:n.modified_date||"",usuarioUltimaMod:n.assigned_user_id||"",adjuntosTicket:ht(n),ultimoMensaje:"",fechaUltimoMensaje:"",usuarioUltimoMsg:"",reciente:false,diasSinMovimiento:0,diasDesdeIngreso:0,sinAsignar:false,recienteMensaje:false,tieneMensaje:false,clasificacion:"",accion:""}}function Oa(n,r){for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.system_message===false&&t.detail&&String(t.detail).trim()&&!pt.test(t.detail)){n.ultimoMensaje=ut(t.detail),n.fechaUltimoMensaje=t.entry_date||"",n.usuarioUltimoMsg=t.entry_user_id||"";break}}}function ne(n){let r=new Date,e=new Date(n.fechaMod),t=new Date(n.fechaIngreso),a=new Date(n.fechaUltimoMensaje),i=(r.getTime()-e.getTime())/864e5,s=(r.getTime()-t.getTime())/864e5,d=(r.getTime()-a.getTime())/864e5;return n.reciente=!isNaN(e.getTime())&&i<=2,n.diasSinMovimiento=isNaN(i)?0:Math.floor(i),n.diasDesdeIngreso=isNaN(s)?Math.floor(i):Math.floor(s),n.sinAsignar=!n.usuarioAsignado||n.usuarioAsignado==="SIN ASIGNAR",n.recienteMensaje=!isNaN(a.getTime())&&d<=2,n.tieneMensaje=!!n.ultimoMensaje.trim(),n}function ie(n){let{orden:r,reciente:e,estatus:t,sinAsignar:a,diasDesdeIngreso:i,recienteMensaje:s,tieneMensaje:d}=n,_=t.toUpperCase(),z=pt.test(n.ultimoMensaje),K=/el usuario .+ cambi[oó] (el |la asignaci[oó]n)/i.test(n.ultimoMensaje),he=z||K;z?(n.clasificacion="SIN ACCION",n.accion="CAMBIO DE PRIORIDAD"):K?(n.clasificacion="SIN ACCION",n.accion="CAMBIO DE ESTATUS"):_.includes("ENTREGADO")?(n.clasificacion="CLIENTE PENDIENTE",n.accion="NO REQUIERE ATENCION"):_.includes("INFO PENDIENTE CLIENTE")?(n.clasificacion="CLIENTE PENDIENTE",n.accion="ESPERANDO RESPUESTA DEL CLIENTE"):a&&i>3?(n.clasificacion="VERIFICAR MOTIVO DE NO ASIGNACION",n.accion="SIN ASIGNAR MUCHOS DIAS - REVISAR CAUSA"):a&&i>1?(n.clasificacion="SIN ASIGNAR",n.accion="REQUIERE REVISION"):a?(n.clasificacion="SIN ASIGNAR",n.accion="ASIGNAR TECNICO"):r===1&&e?(n.clasificacion="URGENTE",n.accion="ATENDER INMEDIATAMENTE"):r<=2&&e?(n.clasificacion="ALTA PRIORIDAD",n.accion="REVISAR HOY"):e?(n.clasificacion="RECIENTE",n.accion="VALIDAR CAMBIOS"):s&&d?(n.clasificacion="REQUIERE REVISION",n.accion="MENSAJE RECIENTE PENDIENTE"):r===1&&!e?(n.clasificacion="CRITICO SIN MOVIMIENTO",n.accion="ESCALAR INMEDIATAMENTE"):_.includes("INFO PENDIENTE")?(n.clasificacion="CLIENTE PENDIENTE",n.accion="ESPERAR RESPUESTA CLIENTE"):(n.clasificacion="SIN ACCION",n.accion="NO REQUIERE ATENCION");let qe=(n.usuarioUltimoMsg||n.usuarioUltimaMod||"").trim().toUpperCase();return !he&&ze.has(qe)&&!_.includes("EN PROCESO")&&(n.accion="COMENTARIO ENVIADO POR FITBANK"),n.accion==="COMENTARIO ENVIADO POR FITBANK"&&n.clasificacion==="SIN ASIGNAR"&&(n.accion="ASIGNAR TECNICO"),n.clasificacion=n.clasificacion.toUpperCase(),n.accion=n.accion.toUpperCase(),n}var Ra="fit-daily_hd_users",Na="fit-daily_hd_roles",nn=["JPHP001","VINC001","MSC001","FSGC001","ORLR001","KIMA001","KDLS001","BMHJ001","DSGS001","JCEO001","CUC001","JFQV001"],rn=["SOPORTE","ADMINISTRADOR","SUPERVISOR"],Pa="fit-daily_hd_clients",Fa="fit-daily_hd_statuses",Ue=class n{http=D(gr);base=`${oF.helpdeskProxyUrl}/api/v1`;roles=this.readRoles();_users=Mo(this.seedUsers());hdUsers=this._users.asReadonly();loadPromise=null;_clients=Mo(this.seedClients());clients=this._clients.asReadonly();clientsPromise=null;static PAGE_SIZE=12;_tickets=Mo([]);tickets=this._tickets.asReadonly();_total=Mo(0);total=this._total.asReadonly();loading=Mo(false);hasMore=Mo(false);status=Mo({msg:"",type:"idle"});offset=0;me(){return this.http.get(`${this.base}/users/me`)}getHdUsers(){return this.loadPromise??=this.fetchAll()}async fetchAll(){let r=["/users/catalog","/users","/users/","/users/list","/users/all","/employees"];for(let e of r)try{let t=await ih(this.http.get(`${this.base}${e}`,{context:new tt().set(S,!0)})),a=Array.isArray(t)?t:t?.items||t?.data||t?.users||t?.results||[];if(!a.length)continue;let i=new Map;for(let d of a){let _=String(d.user_id||d.id||d.username||"").trim().toUpperCase();if(!_||d.user_status===!1)continue;let z=String(d.role_description||d.role||"").trim();if(!rn.some(qe=>z.toUpperCase().includes(qe)))continue;let K=String(d.person_name||d.full_name||d.name||d.display_name||d.person_alias||d.username||_).trim();this.roles[_]=z;let he=i.get(_);K&&(!he||he===_)?i.set(_,K):he||i.set(_,_);}if(!i.size)continue;let s=[...i.entries()].map(([d,_])=>({id:d,name:_,role:this.roles[d]||""})).sort((d,_)=>(d.name||d.id).localeCompare(_.name||_.id,"es"));return this.saveRoles(),this._users.set(s),this.saveUsers(s),s}catch{}return this._users()}getClients(){return this.clientsPromise??=this.fetchAllClients()}async fetchAllClients(){let r=["/clients/catalog","/clients","/clients/","/clients/list","/clients/all","/companies"];for(let e of r)try{let t=await ih(this.http.get(`${this.base}${e}`,{context:new tt().set(S,!0)})),a=Array.isArray(t)?t:t?.items||t?.data||t?.clients||t?.results||[];if(!a.length)continue;let i=new Map;for(let d of a){let _=String(d.client_id??d.id??d.code??"").trim();if(!_||d.client_status===!1||d.status===!1)continue;let z=String(d.client_description||d.description||d.name||d.razon_social||d.business_name||_).trim();i.has(_)||i.set(_,z);}if(!i.size)continue;let s=[...i.entries()].map(([d,_])=>({id:d,name:_})).sort((d,_)=>d.name.localeCompare(_.name,"es"));return this._clients.set(s),this.saveClients(s),s}catch{}return this._clients()}setStatus(r,e){this.status.set({msg:r,type:e});}async fetchPage(r,e=40){try{return (await ih(this.http.get(`${this.base}/tickets/tickets?limit=${e}&offset=${r}&modified_date_order=desc`)))?.items||[]}catch{return []}}async refresh(){this._tickets.set([]),this.offset=0,this.hasMore.set(false),await this.loadMore();}async loadMore(){if(this.loading())return;this.loading.set(true);let r=this.offset;this.setStatus("Cargando tickets...","loading");try{let e=await this.fetchPage(r,n.PAGE_SIZE),t=e.map(ae).map(ne).map(ie);this._tickets.set([...this._tickets(),...t]),this.offset=r+n.PAGE_SIZE,this.hasMore.set(e.length===n.PAGE_SIZE);let a=this._tickets().length;this.setStatus(this.hasMore()?`${a} tickets cargados`:`\u2713 ${a} tickets`,"ok");}catch(e){let t=e?.message||"",a=/fetch|failed|load failed|network|0/i.test(t);this.setStatus(a?"No se pudo conectar al API.":`Error: ${t}`,"error");}finally{this.loading.set(false);}}async loadAll(){if(!this.loading()){this.loading.set(true),this.setStatus("Cargando tickets...","loading");try{let e=[0,40,80,120,160,200],t=await Promise.all(e.map(s=>this.fetchPage(s,40))),i=t.flat().map(ae).map(ne).map(ie);this._tickets.set(i),this.offset=e.length*40,this.hasMore.set(t[t.length-1].length===40),this.setStatus(`\u2713 ${i.length} tickets`,"ok");}catch(r){let e=r?.message||"",t=/fetch|failed|load failed|network|0/i.test(e);this.setStatus(t?"No se pudo conectar al API.":`Error: ${e}`,"error");}finally{this.loading.set(false);}}}async loadFiltered(r,e,t,a={field:"modified_date",dir:"desc"}){if(!this.loading()){this.loading.set(true),this.setStatus("Cargando tickets...","loading");try{let i=new j().set("limit",String(t)).set("offset",String(e*t)).set(`${a.field}_order`,a.dir);r.clientIds?.length&&(i=i.set("client_id",r.clientIds.join(","))),r.statusId&&(i=i.set("ticket_status_id",r.statusId)),r.assignedUserId&&(i=i.set("assigned_user_id",r.assignedUserId));let s=await ih(this.http.get(`${this.base}/tickets/tickets`,{params:i})),d=(s?.items||[]).map(ae).map(ne).map(ie);this._tickets.set(d),this._total.set(Number(s?.total??d.length)),this.hasMore.set((e+1)*t<this._total()),this.setStatus(`\u2713 ${d.length} cargados de ${this._total()} del sistema`,"ok");}catch(i){let s=i?.message||"",d=/fetch|failed|load failed|network|0/i.test(s);this.setStatus(d?"No se pudo conectar al API.":`Error: ${s}`,"error");}finally{this.loading.set(false);}}}async fetchMessages(r){try{let e=await ih(this.http.get(`${this.base}/tickets/${r}/messages?limit=50`,{context:new tt().set(S,!0)}));return Array.isArray(e)?e:Array.isArray(e?.items)?e.items:Array.isArray(e?.messages)?e.messages:Array.isArray(e?.data)?e.data:[]}catch{return []}}async fetchTicketRaw(r){try{let e=await ih(this.http.get(`${this.base}/tickets/tickets/${r}`,{context:new tt().set(S,!0)}));return Array.isArray(e)?e[0]:e?.item||e?.data||e}catch{return null}}async searchTicketRemote(r){try{let e=await ih(this.http.get(`${this.base}/tickets/tickets/${r}`,{context:new tt().set(S,!0)})),t=Array.isArray(e)?e[0]:e?.item||e?.data||e;if(!t||!t.ticket_id)return null;let a=ie(ne(ae(t)));return Oa(a,await this.fetchMessages(a.ticket)),ne(a),ie(a),a}catch{return null}}async attachmentUrl(r){try{let e=await ih(this.http.get(`${this.base}/attachments/${r}`,{responseType:"blob",context:new tt().set(S,!0)}));return URL.createObjectURL(e)}catch{return null}}async uploadAttachment(r){let e=new FormData;e.append("file",r);let t=await ih(this.http.post(`${this.base}/attachments`,e,{context:new tt().set(S,true)}));return t.id||t.attach_id||t.attachment_id}async sendMessage(r,e,t=[]){try{let a=[];for(let s of t)a.push(await this.uploadAttachment(s));let i=new j().set("detail",e);for(let s of a)i=i.append("attach_ids",s);return await ih(this.http.post(`${this.base}/tickets/${r}/messages`,i,{context:new tt().set(S,!0)})),!0}catch{return  false}}async ticketAttachmentIds(r){if(Array.isArray(r.adjuntosTicket)&&r.adjuntosTicket.length)return r.adjuntosTicket;let e=await this.fetchTicketRaw(r.ticket),t=ht(e);return r.adjuntosTicket=t,t}async assignTicket(r,e){if(!r||!e)return  false;let t=String(e).trim().toUpperCase();try{let a=new j().set("assigned_user_id",t);return await ih(this.http.put(`${this.base}/tickets/tickets/${r}`,a,{context:new tt().set(S,!0)})),this.updateTicketAssignee(r,t),!0}catch{return  false}}statusMap=this.readStatusCache();statusesPromise=null;statusNames=Mo(Object.keys(this.statusMap));getTicketStatuses(){return this.statusesPromise??=this.fetchAllStatuses()}statusIdOf(r){return this.statusMap[(r||"").trim().toUpperCase()]}async fetchAllStatuses(){let r=["/ticket-statuses/catalog","/ticket-statuses"];for(let e of r)try{let t=await ih(this.http.get(`${this.base}${e}`,{context:new tt().set(S,!0)})),a=Array.isArray(t)?t:t?.items||t?.data||t?.statuses||t?.results||[];if(!a.length)continue;let i={};for(let s of a){let d=String(s.ticket_status_id??s.id??s.status_id??s.code??"").trim(),_=String(s.description||s.status_description||s.name||s.estado||s.status||"").trim().toUpperCase();d&&_&&(i[_]=d);}if(!Object.keys(i).length)continue;return this.statusMap=i,this.statusNames.set(Object.keys(i)),this.saveStatusCache(i),i}catch{}return this.statusMap}readStatusCache(){try{return JSON.parse(localStorage.getItem(Fa)||"{}")||{}}catch{return {}}}saveStatusCache(r){try{localStorage.setItem(Fa,JSON.stringify(r));}catch{}}async setTicketStatus(r,e){if(!r||!e||e.trim().toUpperCase()==="ABIERTO")return  false;let t=await this.getTicketStatuses(),a=t[e.trim().toUpperCase()];if(!a)return console.warn("[HD status] sin c\xF3digo para",e,"\u2014 cat\xE1logo:",t),false;try{let i=new j().set("ticket_status_id",a);return await ih(this.http.put(`${this.base}/tickets/tickets/${r}`,i,{context:new tt().set(S,!0)})),this.patchTicket(r,{estatus:e}),!0}catch{return  false}}updateTicketAssignee(r,e){let t=this._users().find(a=>a.id===e);this.patchTicket(r,{usuarioAsignado:e,nombreAsignado:t?.name||e});}patchTicket(r,e){let t=this._tickets(),a=t.findIndex(d=>d.ticket===r);if(a<0)return;let i=q(q({},t[a]),e);ne(i),ie(i);let s=[...t];s[a]=i,this._tickets.set(s);}seedUsers(){try{let r=JSON.parse(localStorage.getItem(Ra)||"[]");if(this.looksLikeHd(r))return r.map(e=>({id:e.id,name:e.name||e.id,role:this.roles[e.id]||e.role||""}))}catch{}return nn.map(r=>({id:r,name:r,role:this.roles[r]||""})).sort((r,e)=>r.id.localeCompare(e.id))}seedClients(){try{let r=JSON.parse(localStorage.getItem(Pa)||"[]");if(Array.isArray(r)&&r.length)return r.map(e=>({id:String(e.id),name:e.name||String(e.id)}))}catch{}return []}saveClients(r){try{localStorage.setItem(Pa,JSON.stringify(r));}catch{}}looksLikeHd(r){if(!Array.isArray(r)||!r.length)return  false;let e=/^[A-Z]+\d+$/;return r.filter(a=>a&&typeof a.id=="string"&&e.test(a.id)).length>=Math.max(1,Math.floor(r.length/2))}saveUsers(r){try{localStorage.setItem(Ra,JSON.stringify(r.map(e=>({id:e.id,name:e.name}))));}catch{}}readRoles(){try{return JSON.parse(localStorage.getItem(Na)||"{}")||{}}catch{return {}}}saveRoles(){try{localStorage.setItem(Na,JSON.stringify(this.roles));}catch{}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"root"})};var sn=(n,r)=>r.id;function on(n,r){if(n&1){let e=fI();oi(0,"button",15),gp("click",function(){let a=Kl(e).$implicit,i=hI(2);return Jl(i.openAttachment(a,"ticket_"+i.ticketId+"_adjunto"))}),oi(1,"mat-icon"),qI(2,"attach_file"),Dc(),qI(3),Dc();}if(n&2){let e=r.$index,t=hI(2);xy(3),_c(" Descargar",t.ticketAttachments().length>1?" "+(e+1):""," ");}}function dn(n,r){if(n&1&&(oi(0,"div",7)(1,"span",13),qI(2,"Adjunto del ticket:"),Dc(),iI(3,on,4,1,"button",14,oI),Dc()),n&2){let e=hI();xy(3),sI(e.ticketAttachments());}}function ln(n,r){if(n&1){let e=fI();oi(0,"div",9)(1,"mat-icon"),qI(2,"lock"),Dc(),oi(3,"p"),qI(4,"Tu sesi\xF3n expir\xF3. Inicia sesi\xF3n nuevamente para ver la conversaci\xF3n del ticket."),Dc(),oi(5,"button",16),gp("click",function(){Kl(e);let a=hI();return Jl(a.goToLogin())}),qI(6,"Iniciar sesi\xF3n"),Dc()();}}function cn(n,r){n&1&&(lp(0,"mat-progress-bar",17),oi(1,"div",18),qI(2,"Cargando mensajes y adjuntos\u2026"),Dc());}function mn(n,r){n&1&&(oi(0,"div",10),qI(1,"Sin mensajes registrados."),Dc());}function pn(n,r){if(n&1){let e=fI();oi(0,"div",19)(1,"button",21),gp("click",function(){Kl(e);let a=hI(2);return Jl(a.loadOlder())}),oi(2,"mat-icon"),qI(3,"expand_less"),Dc(),qI(4," Ver mensajes anteriores "),Dc()();}if(n&2){let e=hI(2);xy(),cp("disabled",e.loadingOlder());}}function un(n,r){if(n&1&&lp(0,"div",26),n&2){let e=hI().$implicit;cp("innerHTML",e.html,uy);}}function hn(n,r){if(n&1){let e=fI();oi(0,"button",29),gp("click",function(){let a=Kl(e).$implicit,i=hI(4);return Jl(i.openAttachment(a.id,a.nombre))}),oi(1,"mat-icon"),qI(2,"attach_file"),Dc(),qI(3),Dc();}if(n&2){let e=r.$implicit;xy(3),_c(" ",e.nombre," ");}}function _n(n,r){if(n&1&&(oi(0,"div",27),iI(1,hn,4,1,"button",28,sn),Dc()),n&2){let e=hI().$implicit;xy(),sI(e.adjuntos);}}function gn(n,r){if(n&1&&(oi(0,"div",22)(1,"div",23)(2,"span",24),qI(3),Dc(),oi(4,"span",25),qI(5),Dc()(),tI(6,un,1,1,"div",26),tI(7,_n,3,0,"div",27),Dc()),n&2){let e=r.$implicit;RI("conv-"+e.tipo),xy(3),Ap(e.autor),xy(2),Ap(e.fecha),xy(),nI(e.html?6:-1),xy(),nI(e.adjuntos.length?7:-1);}}function fn(n,r){if(n&1&&(tI(0,pn,5,1,"div",19),iI(1,gn,8,6,"div",20,rI)),n&2){let e=hI();nI(e.hasOlder()?0:-1),xy(),sI(e.messages());}}function bn(n,r){if(n&1&&(oi(0,"span",34),qI(1),Dc()),n&2){let e=hI(2);xy(),_c("",e.composerFiles.length," archivo(s)");}}function vn(n,r){if(n&1){let e=fI();oi(0,"div",11)(1,"textarea",30),Pp("ngModelChange",function(a){Kl(e);let i=hI();return ZI(i.composerText,a)||(i.composerText=a),Jl(a)}),Dc(),Bv(),oi(2,"div",31)(3,"label",32)(4,"mat-icon"),qI(5,"attach_file"),Dc(),oi(6,"input",33),gp("change",function(a){Kl(e);let i=hI();return Jl(i.onFiles(a))}),Dc()(),tI(7,bn,2,1,"span",34),lp(8,"span",4),oi(9,"span",35),qI(10),Dc(),oi(11,"button",36),gp("click",function(){Kl(e);let a=hI();return Jl(a.send())}),qI(12,"Enviar"),Dc()()();}if(n&2){let e=hI();xy(),Op("ngModel",e.composerText),cp("disabled",e.sending()),Uv(),xy(6),nI(e.composerFiles.length?7:-1),xy(3),Ap(e.sendStatus()),xy(),cp("disabled",e.sending());}}function yn(n,r){if(n&1){let e=fI();oi(0,"div",37),gp("click",function(){Kl(e);let a=hI();return Jl(a.lightbox.set(null))}),oi(1,"button",38),gp("click",function(){Kl(e);let a=hI();return Jl(a.lightbox.set(null))}),qI(2,"\u2715"),Dc(),lp(3,"img",39),Dc();}n&2&&(xy(3),cp("src",r,Zd));}var La=class n{hd=D(Ue);auth=D(Bn$1);router=D(ue$1);dialogRef=D(N);sanitizer=D(zt);snack=D(Qt);data=D(ue$2);ticketId=this.data.ticketId||this.data.ticket?.ticket||"";ticketObj=this.data.ticket??null;header=Mo({cliente:this.data.ticket?.clienteRaw||"",estatus:this.data.ticket?.estatus||"",asunto:this.data.ticket?.asunto||""});loading=Mo(true);sessionExpired=Mo(false);messages=Mo([]);ticketAttachments=Mo([]);lightbox=Mo(null);static CHUNK=15;hasOlder=Mo(false);loadingOlder=Mo(false);sortedRaw=[];cursor=0;composerText="";composerFiles=[];sending=Mo(false);sendStatus=Mo("");constructor(){this.load();}async load(){if(this.loading.set(true),!await this.auth.verifySession()){this.sessionExpired.set(true),this.loading.set(false);return}if(!this.ticketObj&&this.ticketId){let e=await this.hd.fetchTicketRaw(this.ticketId);e&&(this.ticketObj=ae(e),this.header.set({cliente:this.ticketObj.clienteRaw,estatus:this.ticketObj.estatus,asunto:this.ticketObj.asunto}));}let r=await this.hd.fetchMessages(this.ticketId);this.sortedRaw=[...r].sort((e,t)=>new Date(e.entry_date||0).getTime()-new Date(t.entry_date||0).getTime()),this.cursor=this.sortedRaw.length,this.messages.set([]),this.loading.set(false),await this.loadOlder(),this.ticketObj&&this.hd.ticketAttachmentIds(this.ticketObj).then(e=>this.ticketAttachments.set(e));}async loadOlder(){if(this.loadingOlder()||this.cursor<=0)return;this.loadingOlder.set(true);let r=Math.max(0,this.cursor-n.CHUNK),e=this.sortedRaw.slice(r,this.cursor),t=(await Promise.all(e.map(a=>this.procesar(a)))).filter(a=>!!a);this.messages.set([...t,...this.messages()]),this.cursor=r,this.hasOlder.set(this.cursor>0),this.loadingOlder.set(false);}goToLogin(){this.dialogRef.close(),this.router.navigate(["/login"]);}esEmpleado(r){let e=String(r.entry_user_role||"").trim().toUpperCase();return e?!e.includes("CLIENTE"):ze.has(String(r.entry_user_id||"").trim().toUpperCase())}attachsDeMensaje(r){let e=[];r.attach_id&&e.push(r.attach_id),Array.isArray(r.attach_ids)&&e.push(...r.attach_ids);let t=new Set,a=[];return e.forEach(i=>{let s=String(i);i&&!t.has(s)&&(t.add(s),a.push({id:s,nombre:`adjunto_${s.slice(-6)}`}));}),a}async hidratarImgs(r){let e=new DOMParser().parseFromString(r,"text/html"),t=[...e.querySelectorAll("img[src]")];for(let a of t){let i=a.getAttribute("src")||"",s=/attachments\/(\d+)/.exec(i);if(s){let d=await this.hd.attachmentUrl(s[1]);d&&a.setAttribute("src",d);}}return e.body.innerHTML}async procesar(r){let e=r.system_message===true,t=Va(r.detail||""),a=ut(t).trim(),i=this.attachsDeMensaje(r);return !a&&!t.includes("<img")&&!i.length?null:(t.includes("<img")&&(t=await this.hidratarImgs(t)),{autor:e?"Sistema":r.entry_user_id||"\u2014",tipo:e?"sys":this.esEmpleado(r)?"emp":"cli",fecha:r.entry_date?String(r.entry_date).replace("T"," ").slice(0,16):"",html:a||t.includes("<img")?this.sanitizer.bypassSecurityTrustHtml(t):null,adjuntos:i})}onConvClick(r){let e=r.target;if(e.tagName==="IMG"){let t=e.src;t&&this.lightbox.set(t);}}async openAttachment(r,e){let t=await this.hd.attachmentUrl(r);if(!t){this.snack.open("No se pudo abrir el adjunto.","OK",{duration:3e3});return}let a=document.createElement("a");a.href=t,a.download=e,a.click(),setTimeout(()=>URL.revokeObjectURL(t),1e4);}onFiles(r){let e=r.target;this.composerFiles=e.files?[...e.files]:[];}async send(){let r=this.composerText.trim().replace(/\n/g,"<br>");if(!r&&!this.composerFiles.length){this.sendStatus.set("Escribe un mensaje o adjunta un archivo.");return}this.sending.set(true),this.sendStatus.set("Enviando...");let e=await this.hd.sendMessage(this.ticketId,r,this.composerFiles);this.sending.set(false),e?(this.composerText="",this.composerFiles=[],this.sendStatus.set("Enviado \u2713"),this.load()):this.sendStatus.set("Error al enviar.");}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=xE({type:n,selectors:[["app-ticket-messages-dialog"]],decls:21,vars:8,consts:[["mat-dialog-title","",1,"conv-head"],[1,"ticket-id"],[1,"cliente"],[1,"estatus"],[1,"spacer"],["mat-icon-button","","mat-dialog-close","","aria-label","Cerrar"],[1,"asunto"],[1,"ticket-attach"],[1,"conv-body",3,"click"],[1,"conv-expired"],[1,"conv-empty"],[1,"composer"],[1,"lightbox"],[1,"ticket-attach-label"],["mat-stroked-button",""],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary",3,"click"],["mode","indeterminate"],[1,"conv-loading"],[1,"conv-older"],[1,"conv-msg",3,"class"],["mat-stroked-button","",3,"click","disabled"],[1,"conv-msg"],[1,"conv-meta"],[1,"conv-user"],[1,"conv-date"],[1,"conv-text",3,"innerHTML"],[1,"conv-attach-row"],[1,"conv-attach"],[1,"conv-attach",3,"click"],["rows","2","placeholder","Escribir mensaje\u2026",3,"ngModelChange","ngModel","disabled"],[1,"composer-actions"],["matTooltip","Adjuntar archivo",1,"attach-label"],["type","file","multiple","","hidden","",3,"change"],[1,"files"],[1,"send-status"],["mat-flat-button","","color","primary",3,"click","disabled"],[1,"lightbox",3,"click"],[1,"lightbox-close",3,"click"],["alt","",3,"src"]],template:function(e,t){if(e&1&&(oi(0,"div",0)(1,"span",1),qI(2),Dc(),oi(3,"span",2),qI(4),Dc(),oi(5,"span",3),qI(6),Dc(),lp(7,"span",4),oi(8,"button",5)(9,"mat-icon"),qI(10,"close"),Dc()()(),oi(11,"div",6),qI(12),Dc(),tI(13,dn,5,0,"div",7),oi(14,"mat-dialog-content",8),gp("click",function(i){return t.onConvClick(i)}),tI(15,ln,7,0,"div",9)(16,cn,3,0)(17,mn,2,0,"div",10)(18,fn,3,1),Dc(),tI(19,vn,13,5,"div",11),tI(20,yn,4,1,"div",12)),e&2){let a;xy(2),_c("#",t.ticketId),xy(2),Ap(t.header().cliente),xy(2),Ap(t.header().estatus),xy(6),Ap(t.header().asunto),xy(),nI(t.ticketAttachments().length?13:-1),xy(2),nI(t.sessionExpired()?15:t.loading()?16:t.messages().length?18:17),xy(4),nI(t.sessionExpired()?-1:19),xy(),nI((a=t.lightbox())?20:-1,a);}},dependencies:[ta,ie$1,Xn,bn$1,_i,mi,pi,ui,va,ga,An$1,yi,vi,Ia,xa],styles:[".conv-head[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin:0}.conv-head[_ngcontent-%COMP%]   .ticket-id[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-weight:700;color:var(--mat-sys-primary)}.conv-head[_ngcontent-%COMP%]   .cliente[_ngcontent-%COMP%]{font-size:12px;font-weight:600;background:var(--mat-sys-surface-container-high);padding:2px 8px;border-radius:10px}.conv-head[_ngcontent-%COMP%]   .estatus[_ngcontent-%COMP%]{font-size:12px;color:var(--mat-sys-on-surface-variant)}.conv-head[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.asunto[_ngcontent-%COMP%]{font-weight:600;font-size:14px;padding:0 24px 8px;color:var(--mat-sys-on-surface)}.ticket-attach[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:0 24px 8px}.ticket-attach[_ngcontent-%COMP%]   .ticket-attach-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--mat-sys-on-surface-variant)}.conv-body[_ngcontent-%COMP%]{min-height:240px;max-height:50vh;background:#f4f6f9;padding:12px}.conv-loading[_ngcontent-%COMP%], .conv-empty[_ngcontent-%COMP%]{text-align:center;color:var(--mat-sys-on-surface-variant);padding:24px;font-size:13px}.conv-msg[_ngcontent-%COMP%]{max-width:80%;margin:8px 0;padding:8px 12px;border-radius:10px;font-size:13px;box-shadow:0 1px 2px #00000014}.conv-msg.conv-emp[_ngcontent-%COMP%]{margin-left:auto;background:#e3f0fb;border:1px solid #c6e0f5}.conv-msg.conv-cli[_ngcontent-%COMP%]{margin-right:auto;background:#fff;border:1px solid var(--mat-sys-outline-variant)}.conv-msg.conv-sys[_ngcontent-%COMP%]{margin:8px auto;max-width:90%;background:transparent;box-shadow:none;text-align:center;color:var(--mat-sys-on-surface-variant);font-size:12px;font-style:italic}.conv-meta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;margin-bottom:4px;font-size:11px}.conv-meta[_ngcontent-%COMP%]   .conv-user[_ngcontent-%COMP%]{font-weight:700;font-family:JetBrains Mono,monospace}.conv-meta[_ngcontent-%COMP%]   .conv-date[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}.conv-text[_ngcontent-%COMP%]{line-height:1.4;overflow-wrap:anywhere;word-break:break-word;overflow-x:auto}.conv-text[_ngcontent-%COMP%]   :where(pre[_ngcontent-%COMP%], code[_ngcontent-%COMP%]){white-space:pre-wrap;overflow-wrap:anywhere}.conv-text[_ngcontent-%COMP%]   :where(img[_ngcontent-%COMP%]){max-width:100%;height:auto;border-radius:6px;cursor:zoom-in;margin:4px 0;float:none!important}.conv-text[_ngcontent-%COMP%]   :where(a[_ngcontent-%COMP%]){color:var(--mat-sys-primary);word-break:break-all}.conv-text[_ngcontent-%COMP%]   :where(table[_ngcontent-%COMP%]){max-width:100%;border-collapse:collapse;font-size:12px}.conv-text[_ngcontent-%COMP%]   :where(td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]){border:1px solid var(--mat-sys-outline-variant);padding:2px 6px}.conv-attach-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}.conv-attach[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;border:1px solid var(--mat-sys-outline-variant);background:var(--mat-sys-surface);border-radius:6px;padding:3px 8px;font-size:12px;cursor:pointer}.conv-attach[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px}.conv-attach[_ngcontent-%COMP%]:hover{border-color:var(--mat-sys-primary)}.composer[_ngcontent-%COMP%]{border-top:1px solid var(--mat-sys-outline-variant);padding:10px 24px 16px}.composer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;font:inherit;font-size:13px;border:1px solid var(--mat-sys-outline);border-radius:8px;padding:8px;resize:vertical}.composer-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-top:8px}.composer-actions[_ngcontent-%COMP%]   .attach-label[_ngcontent-%COMP%]{display:inline-flex;cursor:pointer;color:var(--mat-sys-on-surface-variant)}.composer-actions[_ngcontent-%COMP%]   .files[_ngcontent-%COMP%]{font-size:12px;color:var(--mat-sys-on-surface-variant)}.composer-actions[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.composer-actions[_ngcontent-%COMP%]   .send-status[_ngcontent-%COMP%]{font-size:12px;color:var(--mat-sys-on-surface-variant)}.lightbox[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1200;background:#000000d9;display:flex;align-items:center;justify-content:center;cursor:zoom-out}.lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:92vw;max-height:92vh;border-radius:6px}.lightbox[_ngcontent-%COMP%]   .lightbox-close[_ngcontent-%COMP%]{position:absolute;top:16px;right:20px;background:transparent;border:none;color:#fff;font-size:28px;cursor:pointer}.conv-older[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:2px 0 10px}.conv-expired[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px;padding:32px 20px;text-align:center;color:var(--mat-sys-on-surface-variant, #555)}.conv-expired[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:40px;width:40px;height:40px;color:var(--brand, #048abf)}.conv-expired[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:320px}"]})};function Dn(n,r){return this._trackRow(r)}var Ka=(n,r)=>r.id;function Cn(n,r){if(n&1&&(wc(0,"tr",0)(1,"td",3),qI(2),Tc()()),n&2){let e=hI();xy(),Cp("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),ap("colspan",e.numCols),xy(),_c(" ",e.label," ");}}function An(n,r){if(n&1&&(wc(0,"td",3),qI(1),Tc()),n&2){let e=hI(2);Cp("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),ap("colspan",e._firstRowOffset),xy(),_c(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ");}}function kn(n,r){if(n&1){let e=fI();wc(0,"td",6)(1,"button",7),mp("click",function(a){let i=Kl(e).$implicit,s=hI(2);return Jl(s._cellClicked(i,a))})("focus",function(a){let i=Kl(e).$implicit,s=hI(2);return Jl(s._emitActiveDateChange(i,a))}),wc(2,"span",8),qI(3),Tc(),up(4,"span",9),Tc()();}if(n&2){let e=r.$implicit,t=r.$index,a=hI().$index,i=hI();Cp("width",i._cellWidth)("padding-top",i._cellPadding)("padding-bottom",i._cellPadding),ap("data-mat-row",a)("data-mat-col",t),xy(),RI(e.cssClasses),bp("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",i._isActiveCell(a,t))("mat-calendar-body-range-start",i._isRangeStart(e.compareValue))("mat-calendar-body-range-end",i._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",i._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",i._isComparisonBridgeStart(e.compareValue,a,t))("mat-calendar-body-comparison-bridge-end",i._isComparisonBridgeEnd(e.compareValue,a,t))("mat-calendar-body-comparison-start",i._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",i._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",i._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",i._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",i._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",i._isInPreview(e.compareValue)),pp("tabIndex",i._isActiveCell(a,t)?0:-1),ap("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",i._isSelected(e.compareValue))("aria-current",i.todayValue===e.compareValue?"date":null)("aria-describedby",i._getDescribedby(e.compareValue)),xy(),bp("mat-calendar-body-selected",i._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",i._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",i.todayValue===e.compareValue),xy(),_c(" ",e.displayValue," ");}}function wn(n,r){if(n&1&&(wc(0,"tr",1),tI(1,An,2,6,"td",4),iI(2,kn,5,49,"td",5,Ka),Tc()),n&2){let e=r.$implicit,t=r.$index,a=hI();xy(),nI(t===0&&a._firstRowOffset?1:-1),xy(),sI(e);}}function Mn(n,r){if(n&1&&(oi(0,"th",2)(1,"span",6),qI(2),Dc(),oi(3,"span",3),qI(4),Dc()()),n&2){let e=r.$implicit;xy(2),Ap(e.long),xy(2),Ap(e.narrow);}}var En=["*"];function Sn(n,r){}function xn(n,r){if(n&1){let e=fI();oi(0,"mat-month-view",4),Pp("activeDateChange",function(a){Kl(e);let i=hI();return ZI(i.activeDate,a)||(i.activeDate=a),Jl(a)}),gp("_userSelection",function(a){Kl(e);let i=hI();return Jl(i._dateSelected(a))})("dragStarted",function(a){Kl(e);let i=hI();return Jl(i._dragStarted(a))})("dragEnded",function(a){Kl(e);let i=hI();return Jl(i._dragEnded(a))}),Dc();}if(n&2){let e=hI();Op("activeDate",e.activeDate),cp("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag);}}function In(n,r){if(n&1){let e=fI();oi(0,"mat-year-view",5),Pp("activeDateChange",function(a){Kl(e);let i=hI();return ZI(i.activeDate,a)||(i.activeDate=a),Jl(a)}),gp("monthSelected",function(a){Kl(e);let i=hI();return Jl(i._monthSelectedInYearView(a))})("selectedChange",function(a){Kl(e);let i=hI();return Jl(i._goToDateInView(a,"month"))}),Dc();}if(n&2){let e=hI();Op("activeDate",e.activeDate),cp("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass);}}function Tn(n,r){if(n&1){let e=fI();oi(0,"mat-multi-year-view",6),Pp("activeDateChange",function(a){Kl(e);let i=hI();return ZI(i.activeDate,a)||(i.activeDate=a),Jl(a)}),gp("yearSelected",function(a){Kl(e);let i=hI();return Jl(i._yearSelectedInMultiYearView(a))})("selectedChange",function(a){Kl(e);let i=hI();return Jl(i._goToDateInView(a,"year"))}),Dc();}if(n&2){let e=hI();Op("activeDate",e.activeDate),cp("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass);}}function Vn(n,r){}var On=["button"],Rn=[[["","matDatepickerToggleIcon",""]]],Nn=["[matDatepickerToggleIcon]"];function Pn(n,r){n&1&&(lu(),oi(0,"svg",2),lp(1,"path",3),Dc());}var ue=(()=>{class n{changes=new ee;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return `${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return `${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=pr({token:n,factory:n.\u0275fac})}return n})(),Fn=0,Se=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Fn++;cssClasses;constructor(r,e,t,a,i,s=r,d){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=s,this.rawValue=d,this.cssClasses=i instanceof Set?Array.from(i):i;}},Ln={passive:false,capture:true},je={passive:true,capture:true},Ba={passive:true},pe=(()=>{class n{_elementRef=D(hr);_ngZone=D(Me$1);_platform=D(w);_intl=D(ue);_eventCleanups;_skipNextFocus=false;_focusActiveCellAfterViewChecked=false;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=false);}isRange=false;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new Be;previewChange=new Be;activeDateChange=new Be;dragStarted=new Be;dragEnded=new Be;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=false;_injector=D(ge);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=D(Lv),t=D(nn$1);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),D(q$1).load(nh),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,i=[e.listen(a,"touchmove",this._touchmoveHandler,Ln),e.listen(a,"mouseenter",this._enterHandler,je),e.listen(a,"focus",this._enterHandler,je),e.listen(a,"mouseleave",this._leaveHandler,je),e.listen(a,"blur",this._leaveHandler,je),e.listen(a,"mousedown",this._mousedownHandler,Ba),e.listen(a,"touchstart",this._mousedownHandler,Ba)];this._platform.isBrowser&&i.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=i;});}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t});}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t});}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:i}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?i-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/i}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/i}%`);}ngOnDestroy(){this._eventCleanups.forEach(e=>e());}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=true){Oy(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=true),t.focus());});},{injector:this._injector});}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=true;}_isRangeStart(e){return ft(e,this.startValue,this.endValue)}_isRangeEnd(e){return bt(e,this.startValue,this.endValue)}_isInRange(e){return vt(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return ft(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return  false;let i=this.rows[t][a-1];if(!i){let s=this.rows[t-1];i=s&&s[s.length-1];}return i&&!this._isRangeEnd(i.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return  false;let i=this.rows[t][a+1];if(!i){let s=this.rows[t+1];i=s&&s[0];}return i&&!this._isRangeStart(i.compareValue)}_isComparisonEnd(e){return bt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return vt(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return ft(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return bt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return vt(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return `${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return `${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=false;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}));}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Ya(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=true),gt(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}));};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=true),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})));};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=false;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e});});};_mouseupHandler=e=>{if(!this.isRange)return;let t=gt(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e});});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e});});};_touchendHandler=e=>{let t=Ya(e);t&&this._mouseupHandler({target:t});};_getCellFromElement(e){let t=gt(e);if(t){let a=t.getAttribute("data-mat-row"),i=t.getAttribute("data-mat-col");if(a&&i)return this.rows[parseInt(a)]?.[parseInt(i)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=xE({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[rm],decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,a){t&1&&(tI(0,Cn,3,6,"tr",0),iI(1,wn,4,1,"tr",1,Dn,true),wc(3,"span",2),qI(4),Tc(),wc(5,"span",2),qI(6),Tc(),wc(7,"span",2),qI(8),Tc(),wc(9,"span",2),qI(10),Tc()),t&2&&(nI(a._firstRowOffset<a.labelMinRequiredCells?0:-1),xy(),sI(a.rows),xy(2),pp("id",a._startDateLabelId),xy(),_c(" ",a.startDateAccessibleName,`
`),xy(),pp("id",a._endDateLabelId),xy(),_c(" ",a.endDateAccessibleName,`
`),xy(),pp("id",a._comparisonStartDateLabelId),xy(),kp(" ",a.comparisonDateAccessibleName," ",a.startDateAccessibleName,`
`),xy(),pp("id",a._comparisonEndDateLabelId),xy(),kp(" ",a.comparisonDateAccessibleName," ",a.endDateAccessibleName,`
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
`],encapsulation:2})}return n})();function _t(n){return n?.nodeName==="TD"}function gt(n){let r;return _t(n)?r=n:_t(n.parentNode)?r=n.parentNode:_t(n.parentNode?.parentNode)&&(r=n.parentNode.parentNode),r?.getAttribute("data-mat-row")!=null?r:null}function ft(n,r,e){return e!==null&&r!==e&&n<e&&n===r}function bt(n,r,e){return r!==null&&r!==e&&n>=r&&n===e}function vt(n,r,e,t){return t&&r!==null&&e!==null&&r!==e&&n>=r&&n<=e}function Ya(n){let r=n.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var R=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e;}},xe=(()=>{class n{selection;_adapter;_selectionChanged=new ee;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e;}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a});}ngOnDestroy(){this._selectionChanged.complete();}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Zv();};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})(),Bn=(()=>{class n extends xe{constructor(e){super(null,e);}add(e){super.updateSelection(e,this);}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(_e(M))};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})();var Ga={provide:xe,useFactory:()=>D(xe,{optional:true,skipSelf:true})||new Bn(D(M))};var Qa=new S$1("MAT_DATE_RANGE_SELECTION_STRATEGY");var yt=7,Yn=0,Ha=(()=>{class n{_changeDetectorRef=D(zL);_dateFormats=D(L,{optional:true});_dateAdapter=D(M,{optional:true});_dir=D(Ss,{optional:true});_rangeStrategy=D(Qa,{optional:true});_rerenderSubscription=B.EMPTY;_selectionKeyPressed=false;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init();}_activeDate;get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected);}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new Be;_userSelection=new Be;dragStarted=new Be;dragEnded=new Be;activeDateChange=new Be;_matCalendarBody;_monthLabel=Mo("");_weeks=Mo([]);_firstWeekOffset=Mo(0);_rangeStart=Mo(null);_rangeEnd=Mo(null);_comparisonRangeStart=Mo(null);_comparisonRangeEnd=Mo(null);_previewStart=Mo(null);_previewEnd=Mo(null);_isRange=Mo(false);_todayDate=Mo(null);_weekdays=Mo([]);constructor(){D(q$1).load(ht$2),this._activeDate=this._dateAdapter.today();}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(el(null)).subscribe(()=>this._init());}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview();}ngOnDestroy(){this._rerenderSubscription.unsubscribe();}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),i,s;this._selected instanceof R?(i=this._getDateInCurrentMonth(this._selected.start),s=this._getDateInCurrentMonth(this._selected.end)):i=s=this._getDateInCurrentMonth(this._selected),(i!==t||s!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck();}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate);}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=true,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!Hr(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault();}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=false);}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((yt+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%yt),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck();}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e);}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,i=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(i.start)),this._previewEnd.set(this._getCellCompareValue(i.end)),this.activeDrag&&a){let s=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);s&&(this._previewStart.set(this._getCellCompareValue(s.start)),this._previewEnd.set(this._getCellCompareValue(s.end)));}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event});}else this.dragEnded.emit({value:null,event:e.event});}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),i=this._dateAdapter.getDayOfWeekNames("long").map((s,d)=>({long:s,narrow:t[d],id:Yn++}));this._weekdays.set(i.slice(e).concat(i.slice(0,e)));}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let i=0,s=this._firstWeekOffset();i<e;i++,s++){s==yt&&(a.push([]),s=0);let d=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),i+1),_=this._shouldEnableDate(d),z=this._dateAdapter.format(d,this._dateFormats.display.dateA11yLabel),K=this.dateClass?this.dateClass(d,"month"):void 0;a[a.length-1].push(new Se(i+1,t[i],z,_,K,this._getCellCompareValue(d),d));}this._weeks.set(a);}_shouldEnableDate(e){return !!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return !!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),i=this._dateAdapter.getDate(e);return new Date(t,a,i).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof R?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(true)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(false)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd));}_canSelect(e){return !this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null);}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=xE({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,a){if(t&1&&Ep(pe,5),t&2){let i;EI(i=II())&&(a._matCalendarBody=i.first);}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[rm],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,a){t&1&&(oi(0,"table",0)(1,"thead",1)(2,"tr"),iI(3,Mn,5,2,"th",2,Ka),Dc(),oi(5,"tr",3),lp(6,"th",4),Dc()(),oi(7,"tbody",5),gp("selectedValueChange",function(s){return a._dateSelected(s)})("activeDateChange",function(s){return a._updateActiveDate(s)})("previewChange",function(s){return a._previewChanged(s)})("dragStarted",function(s){return a.dragStarted.emit(s)})("dragEnded",function(s){return a._dragEnded(s)})("keyup",function(s){return a._handleCalendarBodyKeyup(s)})("keydown",function(s){return a._handleCalendarBodyKeydown(s)}),Dc()()),t&2&&(xy(3),sI(a._weekdays()),xy(4),cp("label",a._monthLabel())("rows",a._weeks())("todayValue",a._todayDate())("startValue",a._rangeStart())("endValue",a._rangeEnd())("comparisonStart",a._comparisonRangeStart())("comparisonEnd",a._comparisonRangeEnd())("previewStart",a._previewStart())("previewEnd",a._previewEnd())("isRange",a._isRange())("labelMinRequiredCells",3)("activeCell",a._dateAdapter.getDate(a.activeDate)-1)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName));},dependencies:[pe],encapsulation:2})}return n})(),I=24,Dt=4,za=(()=>{class n{_changeDetectorRef=D(zL);_dateAdapter=D(M,{optional:true});_dir=D(Ss,{optional:true});_rerenderSubscription=B.EMPTY;_selectionKeyPressed=false;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),qa(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init();}_activeDate;get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e);}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;selectedChange=new Be;yearSelected=new Be;activeDateChange=new Be;_matCalendarBody;_years=Mo([]);_todayYear=Mo(0);_selectedYear=Mo(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today();}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(el(null)).subscribe(()=>this._init());}ngOnDestroy(){this._rerenderSubscription.unsubscribe();}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Me(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let i=0,s=[];i<I;i++)s.push(t+i),s.length==Dt&&(a.push(s.map(d=>this._createCellForYear(d))),s=[]);this._years.set(a),this._changeDetectorRef.markForCheck();}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),i=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(i);}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate);}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Dt);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Dt);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Me(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,I-Me(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-I*10:-I);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?I*10:I);break;case 13:case 32:this._selectionKeyPressed=true;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault();}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=false);}_getActiveCell(){return Me(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell();}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),i=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Se(e,a,a,this._shouldEnableYear(e),i)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return  false;if(!this.dateFilter)return  true;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return  true;return  false}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof R){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t));}else e&&this._selectedYear.set(this._dateAdapter.getYear(e));}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=xE({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,a){if(t&1&&Ep(pe,5),t&2){let i;EI(i=II())&&(a._matCalendarBody=i.first);}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(oi(0,"table",0)(1,"thead",1)(2,"tr"),lp(3,"th",2),Dc()(),oi(4,"tbody",3),gp("selectedValueChange",function(s){return a._yearSelected(s)})("activeDateChange",function(s){return a._updateActiveDate(s)})("keyup",function(s){return a._handleCalendarBodyKeyup(s)})("keydown",function(s){return a._handleCalendarBodyKeydown(s)}),Dc()()),t&2&&(xy(4),cp("rows",a._years())("todayValue",a._todayYear())("startValue",a._selectedYear())("endValue",a._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",a._getActiveCell()));},dependencies:[pe],encapsulation:2})}return n})();function qa(n,r,e,t,a){let i=n.getYear(r),s=n.getYear(e),d=Wa(n,t,a);return Math.floor((i-d)/I)===Math.floor((s-d)/I)}function Me(n,r,e,t){let a=n.getYear(r);return Hn(a-Wa(n,e,t),I)}function Wa(n,r,e){let t=0;return e?t=n.getYear(e)-I+1:r&&(t=n.getYear(r)),t}function Hn(n,r){return (n%r+r)%r}var Ua=(()=>{class n{_changeDetectorRef=D(zL);_dateFormats=D(L,{optional:true});_dateAdapter=D(M,{optional:true});_dir=D(Ss,{optional:true});_rerenderSubscription=B.EMPTY;_selectionKeyPressed=false;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init();}_activeDate;get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e);}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;selectedChange=new Be;monthSelected=new Be;activeDateChange=new Be;_matCalendarBody;_months=Mo([]);_yearLabel=Mo("");_todayMonth=Mo(null);_selectedMonth=Mo(null);constructor(){this._activeDate=this._dateAdapter.today();}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(el(null)).subscribe(()=>this._init());}ngOnDestroy(){this._rerenderSubscription.unsubscribe();}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let i=this._getDateFromMonth(t);this.selectedChange.emit(i);}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate);}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=true;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault();}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=false);}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck();}_focusActiveCell(){this._matCalendarBody._focusActiveCell();}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),s=this.dateClass?this.dateClass(a,"year"):void 0;return new Se(e,t.toLocaleUpperCase(),i,this._shouldEnableMonth(e),s)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return  false;if(!this.dateFilter)return  true;let a=this._dateAdapter.createDate(t,e,1);for(let i=a;this._dateAdapter.getMonth(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return  true;return  false}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),i=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>i}return  false}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),i=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<i}return  false}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof R?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e));}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=xE({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,a){if(t&1&&Ep(pe,5),t&2){let i;EI(i=II())&&(a._matCalendarBody=i.first);}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(oi(0,"table",0)(1,"thead",1)(2,"tr"),lp(3,"th",2),Dc()(),oi(4,"tbody",3),gp("selectedValueChange",function(s){return a._monthSelected(s)})("activeDateChange",function(s){return a._updateActiveDate(s)})("keyup",function(s){return a._handleCalendarBodyKeyup(s)})("keydown",function(s){return a._handleCalendarBodyKeydown(s)}),Dc()()),t&2&&(xy(4),cp("label",a._yearLabel())("rows",a._months())("todayValue",a._todayMonth())("startValue",a._selectedMonth())("endValue",a._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",a._dateAdapter.getMonth(a.activeDate)));},dependencies:[pe],encapsulation:2})}return n})(),Xa=(()=>{class n{_intl=D(ue);calendar=D(Ct);_dateAdapter=D(M,{optional:true});_dateFormats=D(L,{optional:true});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){D(q$1).load(ht$2);let e=D(zL);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck();});}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month";}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-I));}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:I));}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):true}nextEnabled(){return !this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel);}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):qa(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Me(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+I-1,i=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),s=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1));return [i,s]}_periodButtonLabelId=D(nn$1).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=xE({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:En,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,a){t&1&&(mI(),oi(0,"div",0)(1,"div",1)(2,"span",2),qI(3),Dc(),oi(4,"button",3),gp("click",function(){return a.currentPeriodClicked()}),oi(5,"span",4),qI(6),Dc(),lu(),oi(7,"svg",5),lp(8,"polygon",6),Dc()(),uu(),lp(9,"div",7),yI(10),oi(11,"button",8),gp("click",function(){return a.previousClicked()}),lu(),oi(12,"svg",9),lp(13,"path",10),Dc()(),uu(),oi(14,"button",11),gp("click",function(){return a.nextClicked()}),lu(),oi(15,"svg",9),lp(16,"path",12),Dc()()()()),t&2&&(xy(2),cp("id",a._periodButtonLabelId),xy(),Ap(a.periodButtonDescription),xy(),ap("aria-label",a.periodButtonLabel)("aria-describedby",a._periodButtonLabelId),xy(2),Ap(a.periodButtonText),xy(),bp("mat-calendar-invert",a.calendar.currentView!=="month"),xy(4),cp("disabled",!a.previousEnabled())("matTooltip",a.prevButtonLabel),ap("aria-label",a.prevButtonLabel),xy(3),cp("disabled",!a.nextEnabled())("matTooltip",a.nextButtonLabel),ap("aria-label",a.nextButtonLabel));},dependencies:[ga,An$1,Oe],encapsulation:2})}return n})(),Ct=(()=>{class n{_dateAdapter=D(M,{optional:true});_dateFormats=D(L,{optional:true});_changeDetectorRef=D(zL);_elementRef=D(hr);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=false;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new Be;yearSelected=new Be;monthSelected=new Be;viewChanged=new Be(true);_userSelection=new Be;_userDragDrop=new Be;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck();}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=true,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t));}_currentView;_activeDrag=null;stateChanges=new ee;constructor(){this._intlChanges=D(ue).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next();});}ngAfterContentInit(){this._calendarHeaderPortal=new Ft(this.headerComponent||Xa),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView;}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=false,this.focusActiveCell());}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete();}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,i=t||a||e.dateFilter;if(i&&!i.firstChange){let s=this._getCurrentViewComponent();s&&(this._elementRef.nativeElement.contains(Yt())&&(this._moveFocusOnNextTick=true),this._changeDetectorRef.detectChanges(),s._init());}this.stateChanges.next();}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(false);}updateTodaysDate(){this._getCurrentViewComponent()?._init();}_dateSelected(e){let t=e.value;(this.selected instanceof R||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e);}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e);}_monthSelectedInYearView(e){this.monthSelected.emit(e);}_goToDateInView(e,t){this.activeDate=e,this.currentView=t;}_dragStarted(e){this._activeDrag=e;}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null);}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=xE({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,a){if(t&1&&Ep(Ha,5)(Ua,5)(za,5),t&2){let i;EI(i=II())&&(a.monthView=i.first),EI(i=II())&&(a.yearView=i.first),EI(i=II())&&(a.multiYearView=i.first);}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[tD([Ga]),rm],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,a){if(t&1&&(tp(0,Sn,0,0,"ng-template",0),oi(1,"div",1),tI(2,xn,1,11,"mat-month-view",2)(3,In,1,6,"mat-year-view",3)(4,Tn,1,6,"mat-multi-year-view",3),Dc()),t&2){let i;cp("cdkPortalOutlet",a._calendarHeaderPortal),xy(2),nI((i=a.currentView)==="month"?2:i==="year"?3:i==="multi-year"?4:-1);}},dependencies:[gn$1,ts,Ha,Ua,za],styles:[`.mat-calendar {
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
`],encapsulation:2})}return n})(),zn=new S$1("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=D(ge);return ()=>Bt(n)}}),Za=(()=>{class n{_elementRef=D(hr);_animationsDisabled=ct();_changeDetectorRef=D(zL);_globalModel=D(xe);_dateAdapter=D(M);_ngZone=D(Me$1);_rangeSelectionStrategy=D(Qa,{optional:true});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=false;_animationDone=new ee;_isAnimating=false;_closeButtonText;_closeButtonFocused=false;_actionsPortal=null;_dialogLabelId=null;constructor(){if(D(q$1).load(ht$2),this._closeButtonText=D(ue).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=D(Lv);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)]);}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck();}),this._calendar.focusActiveCell();}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete();}_handleUserSelection(e){let t=this._model.selection,a=e.value,i=t instanceof R;if(i&&this._rangeSelectionStrategy){let s=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(s,this);}else a&&(i||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close();}_handleUserDragDrop(e){this._model.updateSelection(e.value,this);}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next();},200));}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next());};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this);}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges();}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=xE({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,a){if(t&1&&Ep(Ct,5),t&2){let i;EI(i=II())&&(a._calendar=i.first);}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,a){t&2&&(RI(a.color?"mat-"+a.color:""),bp("mat-datepicker-content-touch",a.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!a._animationsDisabled));},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,a){t&1&&(oi(0,"div",0)(1,"mat-calendar",1),gp("yearSelected",function(s){return a.datepicker._selectYear(s)})("monthSelected",function(s){return a.datepicker._selectMonth(s)})("viewChanged",function(s){return a.datepicker._viewChanged(s)})("_userSelection",function(s){return a._handleUserSelection(s)})("_userDragDrop",function(s){return a._handleUserDragDrop(s)}),Dc(),tp(2,Vn,0,0,"ng-template",2),oi(3,"button",3),gp("focus",function(){return a._closeButtonFocused=true})("blur",function(){return a._closeButtonFocused=false})("click",function(){return a.datepicker.close()}),qI(4),Dc()()),t&2&&(bp("mat-datepicker-content-container-with-custom-header",a.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",a._actionsPortal),ap("aria-modal",true)("aria-labelledby",a._dialogLabelId??void 0),xy(),RI(a.datepicker.panelClass),cp("id",a.datepicker.id)("startAt",a.datepicker.startAt)("startView",a.datepicker.startView)("minDate",a.datepicker._getMinDate())("maxDate",a.datepicker._getMaxDate())("dateFilter",a.datepicker._getDateFilter())("headerComponent",a.datepicker.calendarHeaderComponent)("selected",a._getSelected())("dateClass",a.datepicker.dateClass)("comparisonStart",a.comparisonStart)("comparisonEnd",a.comparisonEnd)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName),xy(),cp("cdkPortalOutlet",a._actionsPortal),xy(),bp("cdk-visually-hidden",!a._closeButtonFocused),cp("color",a.color||"primary"),xy(),Ap(a._closeButtonText));},dependencies:[gs,Ct,gn$1,ga],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2})}return n})(),ja=(()=>{class n{_injector=D(ge);_viewContainerRef=D(Ei);_dateAdapter=D(M,{optional:true});_dir=D(Ss,{optional:true});_model=D(xe);_animationsDisabled=ct();_scrollStrategy=D(zn);_inputStateChanges=B.EMPTY;_document=D(Xn$1);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e;}_color;touchUi=false;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0));}_disabled;xPosition="start";yPosition="below";restoreFocus=true;yearSelected=new Be;monthSelected=new Be;viewChanged=new Be(true);dateClass;openedStream=new Be;closedStream=new Be;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Ul(e);}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close();}_opened=false;id=D(nn$1).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new ee;_changeDetectorRef=D(zL);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck();});}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof mt&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition());}this.stateChanges.next(void 0);}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete();}select(e){this._model.add(e);}_selectYear(e){this.yearSelected.emit(e);}_selectMonth(e){this.monthSelected.emit(e);}_viewChanged(e){this.viewChanged.emit(e);}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,true);}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,true));}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Yt(),this._openOverlay(),this._opened=true,this.openedStream.emit());}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=false,this.closedStream.emit());};if(this._componentRef){let{instance:a,location:i}=this._componentRef;a._animationDone.pipe(Xt(1)).subscribe(()=>{let s=this._document.activeElement;e&&(!s||s===this._document.activeElement||i.nativeElement.contains(s))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay();}),a._startExitAnimation();}e?setTimeout(t):t();}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection();}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,false);}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Ft(Za,this._viewContainerRef),a=this._overlayRef=Ht(this._injector,new q$2({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:true,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?Oe$1(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(i=>{i&&i.preventDefault(),this.close();}),a.keydownEvents().subscribe(i=>{let s=i.keyCode;(s===38||s===40||s===37||s===39||s===33||s===34)&&i.preventDefault();}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||Oy(()=>{a.updatePosition();},{injector:this._injector});}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null);}_getDialogStrategy(){return Fe(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=zt$1(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",a=t==="start"?"end":"start",i=this.yPosition==="above"?"bottom":"top",s=i==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:s,overlayX:t,overlayY:i},{originX:t,originY:i,overlayX:t,overlayY:s},{originX:a,originY:s,overlayX:a,overlayY:i},{originX:a,originY:i,overlayX:a,overlayY:s}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return Rh(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(Wt(a=>a.keyCode===27&&!Hr(a)||this.datepickerInput&&Hr(a,"altKey")&&a.keyCode===38&&t.every(i=>!Hr(a,i)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=PE({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",ZL],disabled:[2,"disabled","disabled",ZL],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",ZL],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",ZL]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[rm]})}return n})(),wr=(()=>{class n extends ja{static \u0275fac=(()=>{let e;return function(a){return (e||(e=Dm(n)))(a||n)}})();static \u0275cmp=xE({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[tD([Ga,{provide:ja,useExisting:n}]),Xf],decls:0,vars:0,template:function(t,a){},encapsulation:2})}return n})(),le=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value;}},Un=(()=>{class n{_elementRef=D(hr);_dateAdapter=D(M,{optional:true});_dateFormats=D(L,{optional:true});_isInitialized=false;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,true);}_model;get disabled(){return !!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur();}_disabled;dateChange=new Be;dateInput=new Be;stateChanges=new ee;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=B.EMPTY;_localeSubscription=B.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return !t||this._matchesFilter(t)?null:{matDatepickerFilter:true}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return !a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return !a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return [this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new le(this,this._elementRef.nativeElement)),this.dateChange.emit(new le(this,this._elementRef.nativeElement));}});}_lastValueValid=false;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,true);});}ngAfterViewInit(){this._isInitialized=true;}ngOnChanges(e){jn(e,this._dateAdapter)&&this.stateChanges.next(void 0);}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete();}registerOnValidatorChange(e){this._validatorOnChange=e;}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value);}registerOnChange(e){this._cvaOnChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];Hr(e,"altKey")&&e.keyCode===40&&t.every(i=>!Hr(e,i))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault());}_onInput(e){let t=e.target.value,a=this._lastValueValid,i=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(i),i=this._dateAdapter.getValidDateOrNull(i);let s=!this._dateAdapter.sameDate(i,this.value);!i||s?this._cvaOnChange(i):(t&&!this.value&&this._cvaOnChange(i),a!==this._lastValueValid&&this._validatorOnChange()),s&&(this._assignValue(i),this.dateInput.emit(new le(this,this._elementRef.nativeElement)));}_onChange(){this.dateChange.emit(new le(this,this._elementRef.nativeElement));}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched();}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):"";}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e;}_isValidValue(e){return !e||this._dateAdapter.isValid(e)}_parentDisabled(){return  false}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e);}_matchesFilter(e){let t=this._getDateFilter();return !t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=PE({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",ZL]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[rm]})}return n})();function jn(n,r){let e=Object.keys(n);for(let t of e){let{previousValue:a,currentValue:i}=n[t];if(r.isDateInstance(a)&&r.isDateInstance(i)){if(!r.sameDate(a,i))return  true}else return  true}return  false}var $n={provide:ht$1,useExisting:io(()=>Ja),multi:true},Kn={provide:S$2,useExisting:io(()=>Ja),multi:true},Ja=(()=>{class n extends Un{_formField=D(le$1,{optional:true});_closedSubscription=B.EMPTY;_openedSubscription=B.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null);}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id);}),this._registerModel(e.registerInput(this)));}_datepicker;_ariaOwns=Mo(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange());}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange());}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange();}_dateFilter;_validator=null;constructor(){super(),this._validator=pt$1.compose(super._getValidators());}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe();}_openPopup(){this._datepicker&&this._datepicker.open();}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this);}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=PE({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,a){t&1&&gp("input",function(s){return a._onInput(s)})("change",function(){return a._onChange()})("blur",function(){return a._onBlur()})("keydown",function(s){return a._onKeydown(s)}),t&2&&(pp("disabled",a.disabled),ap("aria-haspopup",a._datepicker?"dialog":null)("aria-owns",a._ariaOwns())("min",a.min?a._dateAdapter.toIso8601(a.min):null)("max",a.max?a._dateAdapter.toIso8601(a.max):null)("data-mat-calendar",a._datepicker?a._datepicker.id:null));},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[tD([$n,Kn,{provide:rt,useExisting:n}]),Xf]})}return n})(),Gn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=PE({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),Qn=(()=>{class n{_intl=D(ue);_changeDetectorRef=D(zL);_stateChanges=B.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e;}_disabled;disableRipple=false;_customIcon;_button;constructor(){let e=D(new qp("tabindex"),{optional:true}),t=Number(e);this.tabIndex=t||t===0?t:null;}ngOnChanges(e){e.datepicker&&this._watchStateChanges();}ngOnDestroy(){this._stateChanges.unsubscribe();}ngAfterContentInit(){this._watchStateChanges();}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation());}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:vh(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:vh(),a=this.datepicker?Rh(this.datepicker.openedStream,this.datepicker.closedStream):vh();this._stateChanges.unsubscribe(),this._stateChanges=Rh(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck());}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=xE({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,a,i){if(t&1&&vp(i,Gn,5),t&2){let s;EI(s=II())&&(a._customIcon=s.first);}},viewQuery:function(t,a){if(t&1&&Ep(On,5),t&2){let i;EI(i=II())&&(a._button=i.first);}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,a){t&1&&gp("click",function(s){return a._open(s)}),t&2&&(ap("tabindex",null)("data-mat-calendar",a.datepicker?a.datepicker.id:null),bp("mat-datepicker-toggle-active",a.datepicker&&a.datepicker.opened)("mat-accent",a.datepicker&&a.datepicker.color==="accent")("mat-warn",a.datepicker&&a.datepicker.color==="warn"));},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",ZL],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[rm],ngContentSelectors:Nn,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,a){t&1&&(mI(Rn),oi(0,"button",1,0),tI(2,Pn,2,0,":svg:svg",2),yI(3),Dc()),t&2&&(cp("tabIndex",a.disabled?-1:a.tabIndex)("disabled",a.disabled)("disableRipple",a.disableRipple),ap("aria-haspopup",a.datepicker?"dialog":null)("aria-label",a.ariaLabel||a._intl.openCalendarLabel)("aria-expanded",a.datepicker?a.datepicker.opened:null),xy(2),nI(a._customIcon?-1:2));},dependencies:[An$1],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2})}return n})();var Mr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=kE({type:n});static \u0275inj=_l({providers:[ue],imports:[va,Qe,ys,me,Za,Qn,Xa,qr,It]})}return n})();export{Ia as I,Ja as J,La as L,Mr as M,Qn as Q,Ue as U,ni as n,wr as w,xa as x};