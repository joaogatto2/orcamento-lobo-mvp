import{a as mn}from"./chunk-YHUZT3TT.js";import{a as dn}from"./chunk-HFPLRWBS.js";import{a as cn}from"./chunk-NXINT4AD.js";import{a as pn}from"./chunk-4PIA7GMU.js";import{a as St,b as hn,c as I,d as un,e as _n,f as Ie,g as F,h as fn,i as gn,j as ct,k as vn,l as bn,m as yn,n as xn,o as Cn,p as Pt,q as kt,r as Et,t as wn,u as Rt,v as Ot,w as Dt,x as Tt}from"./chunk-SQ4IDY4A.js";import{a as ln}from"./chunk-MMJCQDA7.js";import{a as sn}from"./chunk-Y54JVE7H.js";import{a as ce,b as me,c as pe,d as he,e as ue,f as _e}from"./chunk-M2XOSBXD.js";import{a as Ui,c as Xi,d as Gi}from"./chunk-S5DTFGKV.js";import{$a as Z,$b as Zi,A as Ti,Aa as Y,Ba as je,Bb as O,Ca as ji,Da as Ni,Db as zi,Eb as ge,Fa as Bi,G as Ee,H as it,Hb as te,Ia as ii,Ib as R,J as Ii,Ja as fe,Jb as ve,Ka as v,Kb as Hi,La as b,Lb as qi,M as nt,Ma as Li,N as ne,Na as $,O as z,Oa as Q,Ob as Wi,Pa as C,Q as N,Qa as s,Qb as Se,Ra as a,Rb as de,S as m,Sa as P,Ta as De,U as We,Ua as Ne,Va as ni,Vb as Yi,W as B,Wa as Xe,Wb as st,X as L,Xa as xt,Xb as oe,Y as Fi,Ya as S,Yb as $i,Z as xe,Za as g,Zb as Qi,_ as le,_a as we,_b as Pe,a as vt,ab as Be,ac as lt,b as Ri,ba as T,bb as Me,bc as Ki,c as ae,ca as W,cb as A,db as V,dc as Te,e as et,ec as Ji,f as D,fa as U,fc as en,gc as be,h as Oi,ha as Re,hb as Ct,hc as oi,ia as ot,ib as rt,ic as wt,j as tt,jb as ee,jc as tn,ka as q,kb as at,kc as ri,la as Ai,lb as l,ma as Vi,mb as x,mc as nn,n as bt,nb as E,nc as ke,oa as c,ob as Le,oc as j,pa as Ue,pb as Ge,qa as Ae,qc as ai,ra as Ve,rb as K,rc as on,s as Di,sa as Ce,sc as dt,tc as Ye,u as qe,ua as Oe,ub as u,uc as $e,v as se,va as ti,vb as _,vc as J,w as ei,wc as Mt,xc as rn,ya as k,yc as an,z as yt,za as H}from"./chunk-4PA7NNAL.js";var Mn=(()=>{class n{_animationsDisabled=ke();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&ee("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var fo=["text"],go=[[["mat-icon"]],"*"],vo=["mat-icon","*"];function bo(n,i){if(n&1&&P(0,"mat-pseudo-checkbox",1),n&2){let e=g();C("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function yo(n,i){if(n&1&&P(0,"mat-pseudo-checkbox",3),n&2){let e=g();C("disabled",e.disabled)}}function xo(n,i){if(n&1&&(s(0,"span",4),l(1),a()),n&2){let e=g();c(),E("(",e.group.label,")")}}var li=new N("MAT_OPTION_PARENT_COMPONENT"),di=new N("MatOptgroup");var mt=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Qe=(()=>{class n{_element=m(q);_changeDetectorRef=m(te);_parent=m(li,{optional:!0});group=m(di,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=m(be).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=U(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new T;_text;_stateChanges=new D;constructor(){let e=m(Pe);e.load(Ye),e.load(Zi),this._signalDisableRipple=!!this._parent&&Bi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Te(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new mt(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-option"]],viewQuery:function(t,o){if(t&1&&Me(fo,7),t&2){let r;A(r=V())&&(o._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,o){t&1&&S("click",function(){return o._selectViaInteraction()})("keydown",function(d){return o._handleKeydown(d)}),t&2&&(xt("id",o.id),fe("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),ee("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",R]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:vo,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,o){t&1&&(we(go),v(0,bo,1,2,"mat-pseudo-checkbox",1),Z(1),s(2,"span",2,0),Z(4,1),a(),v(5,yo,1,1,"mat-pseudo-checkbox",3),v(6,xo,2,1,"span",4),P(7,"div",5)),t&2&&(b(o.multiple?0:-1),c(5),b(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),c(),b(o.group&&o.group._inert?6:-1),c(),C("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[Mn,dt],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Sn(n,i,e){if(e.length){let t=i.toArray(),o=e.toArray(),r=0;for(let d=0;d<n+1;d++)t[d].group&&t[d].group===o[r]&&r++;return r}return 0}function Pn(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var Co=20,ci=(()=>{class n{_ngZone=m(W);_platform=m(oe);_renderer=m(Ve).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new D;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Co){return this._platform.isBrowser?new et(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(ei(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):tt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(se(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let o=$i(t),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wo=20,ze=(()=>{class n{_platform=m(oe);_listeners;_viewportSize=null;_change=new D;_document=m(le);constructor(){let e=m(W),t=m(Ve).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),d=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,p=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:d,left:p}}change(e=wo){return e>0?this._change.pipe(ei(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var It=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=z({})}return n})(),mi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=z({imports:[J,It,J,It]})}return n})();var ht=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},pi=class extends ht{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,o,r){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null}},Fe=class extends ht{templateRef;viewContainerRef;context;injector;constructor(i,e,t,o){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},hi=class extends ht{element;constructor(i){super(),this.element=i instanceof q?i.nativeElement:i}},Ft=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof pi)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Fe)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof hi)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},At=class extends Ft{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,o=t.get(ti,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=i.injector||this._defaultInjector||xe.NULL,r=o.get(We,t.injector);e=qi(i.component,{elementInjector:o,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var kn=(()=>{class n extends Ft{_moduleRef=m(ti,{optional:!0});_document=m(le);_viewContainerRef=m(Oe);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new T;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let o=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(o,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(t,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Y({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[je]})}return n})(),Vt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=z({})}return n})();var En=tn();function An(n){return new jt(n.get(ze),n.get(le))}var jt=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=j(-this._previousScrollPosition.left),i.style.top=j(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,o=e.style,r=t.scrollBehavior||"",d=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),En&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),En&&(t.scrollBehavior=r,o.scrollBehavior=d)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Vn(n,i){return new Nt(n.get(ci),n.get(W),n.get(ze),i)}var Nt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,o){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(se(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ut=class{enable(){}disable(){}attach(){}};function ui(n,i){return i.some(e=>{let t=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,d=n.left>e.right;return t||o||r||d})}function Rn(n,i){return i.some(e=>{let t=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,d=n.right>e.right;return t||o||r||d})}function Wt(n,i){return new Bt(n.get(ci),n.get(ze),n.get(W),i)}var Bt=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,o){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();ui(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},jn=(()=>{class n{_injector=m(xe);constructor(){}noop=()=>new ut;close=e=>Vn(this._injector,e);block=()=>An(this._injector);reposition=e=>Wt(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ze=class{positionStrategy;scrollStrategy=new ut;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Lt=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Nn=(()=>{class n{_attachedOverlays=[];_document=m(le);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Bn=(()=>{class n extends Nn{_ngZone=m(W);_renderer=m(Ve).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let r=t[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=ot(n)))(o||n)}})();static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ln=(()=>{class n extends Nn{_platform=m(oe);_ngZone=m(W);_renderer=m(Ve).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,o),r.listen(t,"click",this._clickListener,o),r.listen(t,"auxclick",this._clickListener,o),r.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=st(e)};_clickListener=e=>{let t=st(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let d=r.length-1;d>-1;d--){let p=r[d],h=p._outsidePointerEvents;if(!(!p.hasAttached()||!this.canReceiveEvent(p,e,h))){if(On(p.overlayElement,t)||On(p.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>h.next(e)):h.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=ot(n)))(o||n)}})();static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function On(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var zn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Hn=(()=>{class n{_platform=m(oe);_containerElement;_document=m(le);_styleLoader=m(Pe);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||ri()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let t=this._document.createElement("div");t.classList.add(e),ri()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(zn)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_i=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,o){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function fi(n){return n&&n.nodeType===1}var zt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new D;_attachments=new D;_detachments=new D;_positionStrategy;_scrollStrategy;_locationChanges=ae.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new D;_outsidePointerEvents=new D;_afterNextRenderRef;constructor(i,e,t,o,r,d,p,h,w,f=!1,M,G){this._portalOutlet=i,this._host=e,this._pane=t,this._config=o,this._ngZone=r,this._keyboardDispatcher=d,this._document=p,this._location=h,this._outsideClickDispatcher=w,this._animationsDisabled=f,this._injector=M,this._renderer=G,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ue(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=vt(vt({},this._config),i),this._updateElementSize()}setDirection(i){this._config=Ri(vt({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=j(this._config.width),i.height=j(this._config.height),i.minWidth=j(this._config.minWidth),i.minHeight=j(this._config.minHeight),i.maxWidth=j(this._config.maxWidth),i.maxHeight=j(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;fi(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new _i(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let o=lt(e||[]).filter(r=>!!r);o.length&&(t?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Ue(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Dn="cdk-overlay-connected-position-bounding-box",Mo=/([A-Za-z%]+)$/;function Ut(n,i){return new Ht(i,n.get(ze),n.get(le),n.get(oe),n.get(Hn))}var Ht=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new D;_resizeSubscription=ae.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,o,r){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Dn),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,r=[],d;for(let p of this._preferredPositions){let h=this._getOriginPoint(i,o,p),w=this._getOverlayPoint(h,e,p),f=this._getOverlayFit(w,e,t,p);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(p,h);return}if(this._canFitWithFlexibleDimensions(f,w,t)){r.push({position:p,origin:h,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(h,p)});continue}(!d||d.overlayFit.visibleArea<f.visibleArea)&&(d={overlayFit:f,overlayPoint:w,originPoint:h,position:p,overlayRect:e})}if(r.length){let p=null,h=-1;for(let w of r){let f=w.boundingBoxRect.width*w.boundingBoxRect.height*(w.position.weight||1);f>h&&(h=f,p=w)}this._isPushed=!1,this._applyPosition(p.position,p.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(d.position,d.originPoint);return}this._applyPosition(d.position,d.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&He(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Dn),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof q?this._origin.nativeElement:fi(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let o;if(t.originX=="center")o=i.left+i.width/2;else{let d=this._isRtl()?i.right:i.left,p=this._isRtl()?i.left:i.right;o=t.originX=="start"?d:p}e.left<0&&(o-=e.left);let r;return t.originY=="center"?r=i.top+i.height/2:r=t.originY=="top"?i.top:i.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(i,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:i.x+o,y:i.y+r}}_getOverlayFit(i,e,t,o){let r=In(e),{x:d,y:p}=i,h=this._getOffset(o,"x"),w=this._getOffset(o,"y");h&&(d+=h),w&&(p+=w);let f=0-d,M=d+r.width-t.width,G=0-p,re=p+r.height-t.height,ie=this._subtractOverflows(r.width,f,M),ye=this._subtractOverflows(r.height,G,re),Ei=ie*ye;return{visibleArea:Ei,isCompletelyWithinViewport:r.width*r.height===Ei,fitsInViewportVertically:ye===r.height,fitsInViewportHorizontally:ie==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,r=t.right-e.x,d=Tn(this._overlayRef.getConfig().minHeight),p=Tn(this._overlayRef.getConfig().minWidth),h=i.fitsInViewportVertically||d!=null&&d<=o,w=i.fitsInViewportHorizontally||p!=null&&p<=r;return h&&w}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let o=In(e),r=this._viewportRect,d=Math.max(i.x+o.width-r.width,0),p=Math.max(i.y+o.height-r.height,0),h=Math.max(r.top-t.top-i.y,0),w=Math.max(r.left-t.left-i.x,0),f=0,M=0;return o.width<=r.width?f=w||-d:f=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,o.height<=r.height?M=h||-p:M=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:f,y:M},{x:i.x+f,y:i.y+M}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!So(this._lastScrollVisibility,t)){let o=new Lt(i,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,o=this._isRtl(),r,d,p;if(e.overlayY==="top")d=i.y,r=t.height-d+this._getViewportMarginBottom();else if(e.overlayY==="bottom")p=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-p+this._getViewportMarginTop();else{let re=Math.min(t.bottom-i.y+t.top,i.y),ie=this._lastBoundingBoxSize.height;r=re*2,d=i.y-re,r>ie&&!this._isInitialRender&&!this._growAfterOpen&&(d=i.y-ie/2)}let h=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,w=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,f,M,G;if(w)G=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=i.x-this._getViewportMarginStart();else if(h)M=i.x,f=t.right-i.x-this._getViewportMarginEnd();else{let re=Math.min(t.right-i.x+t.left,i.x),ie=this._lastBoundingBoxSize.width;f=re*2,M=i.x-re,f>ie&&!this._isInitialRender&&!this._growAfterOpen&&(M=i.x-ie/2)}return{top:d,left:M,bottom:p,right:G,width:f,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,d=this._overlayRef.getConfig().maxWidth;o.width=j(t.width),o.height=j(t.height),o.top=j(t.top)||"auto",o.bottom=j(t.bottom)||"auto",o.left=j(t.left)||"auto",o.right=j(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=j(r)),d&&(o.maxWidth=j(d))}this._lastBoundingBoxSize=t,He(this._boundingBox.style,o)}_resetBoundingBoxStyles(){He(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){He(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,d=this._overlayRef.getConfig();if(o){let f=this._viewportRuler.getViewportScrollPosition();He(t,this._getExactOverlayY(e,i,f)),He(t,this._getExactOverlayX(e,i,f))}else t.position="static";let p="",h=this._getOffset(e,"x"),w=this._getOffset(e,"y");h&&(p+=`translateX(${h}px) `),w&&(p+=`translateY(${w}px)`),t.transform=p.trim(),d.maxHeight&&(o?t.maxHeight=j(d.maxHeight):r&&(t.maxHeight="")),d.maxWidth&&(o?t.maxWidth=j(d.maxWidth):r&&(t.maxWidth="")),He(this._pane.style,t)}_getExactOverlayY(i,e,t){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY==="bottom"){let d=this._document.documentElement.clientHeight;o.bottom=`${d-(r.y+this._overlayRect.height)}px`}else o.top=j(r.y);return o}_getExactOverlayX(i,e,t){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let d;if(this._isRtl()?d=i.overlayX==="end"?"left":"right":d=i.overlayX==="end"?"right":"left",d==="right"){let p=this._document.documentElement.clientWidth;o.right=`${p-(r.x+this._overlayRect.width)}px`}else o.left=j(r.x);return o}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Rn(i,t),isOriginOutsideView:ui(i,t),isOverlayClipped:Rn(e,t),isOverlayOutsideView:ui(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,o)=>t-Math.max(o,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&lt(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof q)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function He(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function Tn(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(Mo);return!e||e==="px"?parseFloat(i):null}return n||null}function In(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function So(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var Fn="cdk-global-overlay-wrapper";function qn(n){return new qt}var qt=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Fn),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:d,maxHeight:p}=t,h=(o==="100%"||o==="100vw")&&(!d||d==="100%"||d==="100vw"),w=(r==="100%"||r==="100vh")&&(!p||p==="100%"||p==="100vh"),f=this._xPosition,M=this._xOffset,G=this._overlayRef.getConfig().direction==="rtl",re="",ie="",ye="";h?ye="flex-start":f==="center"?(ye="center",G?ie=M:re=M):G?f==="left"||f==="end"?(ye="flex-end",re=M):(f==="right"||f==="start")&&(ye="flex-start",ie=M):f==="left"||f==="start"?(ye="flex-start",re=M):(f==="right"||f==="end")&&(ye="flex-end",ie=M),i.position=this._cssPosition,i.marginLeft=h?"0":re,i.marginTop=w?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=h?"0":ie,e.justifyContent=ye,e.alignItems=w?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Fn),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Wn=(()=>{class n{_injector=m(xe);constructor(){}global(){return qn()}flexibleConnectedTo(e){return Ut(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Un=new N("OVERLAY_DEFAULT_CONFIG");function Xt(n,i){n.get(Pe).load(zn);let e=n.get(Hn),t=n.get(le),o=n.get(be),r=n.get(ii),d=n.get($e),p=n.get(Ce,null,{optional:!0})||n.get(Ve).createRenderer(null,null),h=new Ze(i),w=n.get(Un,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||d.value,"showPopover"in t.body?h.usePopover=i?.usePopover??w:h.usePopover=!1;let f=t.createElement("div"),M=t.createElement("div");f.id=o.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),M.appendChild(f),h.usePopover&&(M.setAttribute("popover","manual"),M.classList.add("cdk-overlay-popover"));let G=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return fi(G)?G.after(M):G?.type==="parent"?G.element.appendChild(M):e.getContainerElement().appendChild(M),new zt(new At(f,r,n),M,f,h,n.get(W),n.get(Bn),t,n.get(Wi),n.get(Ln),i?.disableAnimations??n.get(Vi,null,{optional:!0})==="NoopAnimations",n.get(We),p)}var Xn=(()=>{class n{scrollStrategies=m(jn);_positionBuilder=m(Wn);_injector=m(xe);constructor(){}create(e){return Xt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=z({providers:[Xn],imports:[J,Vt,mi,mi]})}return n})();var Gn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=z({imports:[J]})}return n})();var vi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=z({imports:[Mt,Gn,Qe,J]})}return n})();var Eo=["panel"],Ro=["*"];function Oo(n,i){if(n&1&&(De(0,"div",1,0),Z(2),Ne()),n&2){let e=i.id,t=g();at(t._classList),ee("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),xt("id",t.id),fe("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var bi=class{source;option;constructor(i,e){this.source=i,this.option=e}},Qn=new N("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Zn=(()=>{class n{_changeDetectorRef=m(te);_elementRef=m(q);_defaults=m(Qn);_animationsDisabled=ke();_activeOptionChanges=ae.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new T;opened=new T;closed=new T;optionActivated=new T;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=m(be).getId("mat-autocomplete-");inertGroups;constructor(){let e=m(oe);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Ji(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new bi(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,o,r){if(t&1&&Be(r,Qe,5)(r,di,5),t&2){let d;A(d=V())&&(o.options=d),A(d=V())&&(o.optionGroups=d)}},viewQuery:function(t,o){if(t&1&&Me(Ae,7)(Eo,5),t&2){let r;A(r=V())&&(o.template=r.first),A(r=V())&&(o.panel=r.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",R],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",R],requireSelection:[2,"requireSelection","requireSelection",R],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",R],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",R]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[K([{provide:li,useExisting:n}])],ngContentSelectors:Ro,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,o){t&1&&(we(),Ni(0,Oo,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return n})();var Do={provide:St,useExisting:nt(()=>yi),multi:!0};var To=new N("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(xe);return()=>Wt(n)}}),yi=(()=>{class n{_environmentInjector=m(We);_element=m(q);_injector=m(xe);_viewContainerRef=m(Oe);_zone=m(W);_changeDetectorRef=m(te);_dir=m($e,{optional:!0});_formField=m(wn,{optional:!0,host:!0});_viewportRuler=m(ze);_scrollStrategy=m(To);_renderer=m(Ce);_animationsDisabled=ke();_defaults=m(Qn,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new D;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=ae.EMPTY;_breakpointObserver=m(Ki);_handsetLandscapeSubscription=ae.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new D;_overlayPanelClass=lt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&wt(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return qe(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(se(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(se(()=>this._overlayAttached)):tt()).pipe(bt(e=>e instanceof mt?e:null))}optionSelections=Di(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Ee(e),it(()=>qe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(it(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new et(e=>{let t=r=>{let d=st(r),p=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,h=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&d!==this._element.nativeElement&&!this._hasFocus()&&(!p||!p.contains(d))&&(!h||!h.contains(d))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(d)&&e.next(r)},o=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{o.forEach(r=>r())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,o=t.keyCode,r=Te(t);if(o===27&&!r&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&o===13&&this.panelOpen&&!r)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let d=this.autocomplete._keyManager.activeItem,p=o===38||o===40;o===9||p&&!r&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):p&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(p||this.autocomplete._keyManager.activeItem!==d)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,o=t.value;if(t.type==="number"&&(o=o==""?null:parseFloat(o)),this._previousValue!==o){if(this._previousValue=o,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(o),!o)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let r=this.autocomplete.options?.find(d=>d.selected);if(r){let d=this._getDisplayValue(r.value);o!==d&&r.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let r=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(r)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Yi()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new et(o=>{Ue(()=>{o.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(Ii(()=>this._positionStrategy.reapplyLastPosition()),Ti(0))??tt();return qe(e,t).pipe(it(()=>this._zone.run(()=>{let o=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),o!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),yt(1)).subscribe(o=>this._setValueAndClose(o))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,o=e?e.source:this._pendingAutoselectedOption;o?(this._clearPreviousSelectedOption(o),this._assignOptionValue(o.value),this._onChange(o.value),t._emitSelectEvent(o),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(o=>{o!==e&&o.selected&&o.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;oi(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Fe(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=Xt(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(nn.HandsetLandscape).subscribe(r=>{r.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let o=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&o!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Te(e)||e.keyCode===38&&Te(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Ze({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Ut(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],o=this._aboveClass,r=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:o},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:o}],d;this.position==="above"?d=r:this.position==="below"?d=t:d=[...t,...r],e.withPositions(d)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let o=0;o<e.options.length;o++)if(!e.options.get(o).disabled){t=o;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,o=Sn(e,t.options,t.optionGroups);if(e===0&&o===1)t._setScrollTop(0);else if(t.panel){let r=t.options.toArray()[e];if(r){let d=r._getHostElement(),p=Pn(d.offsetTop,d.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(p)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&wt(this._trackedModal,"aria-owns",t),oi(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;wt(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Y({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,o){t&1&&S("focusin",function(){return o._handleFocus()})("blur",function(){return o._onTouched()})("input",function(d){return o._handleInput(d)})("keydown",function(d){return o._handleKeydown(d)})("click",function(){return o._handleClick()}),t&2&&fe("autocomplete",o.autocompleteAttribute)("role",o.autocompleteDisabled?null:"combobox")("aria-autocomplete",o.autocompleteDisabled?null:"list")("aria-activedescendant",o.panelOpen&&o.activeOption?o.activeOption.id:null)("aria-expanded",o.autocompleteDisabled?null:o.panelOpen.toString())("aria-controls",o.autocompleteDisabled||!o.panelOpen||o.autocomplete==null?null:o.autocomplete.id)("aria-haspopup",o.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",R]},exportAs:["matAutocompleteTrigger"],features:[K([Do]),Re]})}return n})(),Kn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=z({imports:[gi,vi,It,vi,J]})}return n})();var _t=(()=>{class n{_listeners=[];notify(e,t){for(let o of this._listeners)o(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var xi=new N("CdkAccordion"),Jn=(()=>{class n{_stateChanges=new D;_openCloseAllActions=new D;id=m(be).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Y({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",R]},exportAs:["cdkAccordion"],features:[K([{provide:xi,useExisting:n}]),Re]})}return n})(),eo=(()=>{class n{accordion=m(xi,{optional:!0,skipSelf:!0});_changeDetectorRef=m(te);_expansionDispatcher=m(_t);_openCloseAllSubscription=ae.EMPTY;closed=new T;opened=new T;destroyed=new T;expandedChange=new T;id=m(be).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=U(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Y({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",R],disabled:[2,"disabled","disabled",R]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[K([{provide:xi,useValue:void 0}])]})}return n})(),to=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=z({})}return n})();var Fo=["body"],Ao=["bodyWrapper"],Vo=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],jo=["mat-expansion-panel-header","*","mat-action-row"];function No(n,i){}var Bo=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Lo=["mat-panel-title","mat-panel-description","*"];function zo(n,i){n&1&&(De(0,"span",1),Fi(),De(1,"svg",2),ni(2,"path",3),Ne()())}var Ci=new N("MAT_ACCORDION"),io=new N("MAT_EXPANSION_PANEL"),Ho=(()=>{class n{_template=m(Ae);_expansionPanel=m(io,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Y({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),no=new N("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),wi=(()=>{class n extends eo{_viewContainerRef=m(Oe);_animationsDisabled=ke();_document=m(le);_ngZone=m(W);_elementRef=m(q);_renderer=m(Ce);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new T;afterCollapse=new T;_inputChanges=new D;accordion=m(Ci,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=m(be).getId("mat-expansion-panel-header-");constructor(){super();let e=m(no,{optional:!0});this._expansionDispatcher=m(_t),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Ee(null),se(()=>this.expanded&&!this._portal),yt(1)).subscribe(()=>{this._portal=new Fe(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,o,r){if(t&1&&Be(r,Ho,5),t&2){let d;A(d=V())&&(o._lazyContent=d.first)}},viewQuery:function(t,o){if(t&1&&Me(Fo,5)(Ao,5),t&2){let r;A(r=V())&&(o._body=r.first),A(r=V())&&(o._bodyWrapper=r.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,o){t&2&&ee("mat-expanded",o.expanded)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",R],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[K([{provide:Ci,useValue:void 0},{provide:io,useExisting:n}]),je,Re],ngContentSelectors:jo,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,o){t&1&&(we(Vo),Z(0),s(1,"div",2,0)(3,"div",3,1)(5,"div",4),Z(6,1),ji(7,No,0,0,"ng-template",5),a(),Z(8,2),a()()),t&2&&(c(),fe("inert",o.expanded?null:""),c(2),C("id",o.id),fe("aria-labelledby",o._headerId),c(4),C("cdkPortalOutlet",o._portal))},dependencies:[kn],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Mi=(()=>{class n{panel=m(wi,{host:!0});_element=m(q);_focusMonitor=m(Qi);_changeDetectorRef=m(te);_parentChangeSubscription=ae.EMPTY;constructor(){m(Pe).load(Ye);let e=this.panel,t=m(no,{optional:!0}),o=m(new zi("tabindex"),{optional:!0}),r=e.accordion?e.accordion._stateChanges.pipe(se(d=>!!(d.hideToggle||d.togglePosition))):Oi;this.tabIndex=parseInt(o||"")||0,this._parentChangeSubscription=qe(e.opened,e.closed,r,e._inputChanges.pipe(se(d=>!!(d.hideToggle||d.disabled||d.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(se(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Te(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,o){t&1&&S("click",function(){return o._toggle()})("keydown",function(d){return o._keydown(d)}),t&2&&(fe("id",o.panel._headerId)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),rt("height",o._getHeaderHeight()),ee("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after",o._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",o._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ve(e)]},ngContentSelectors:Lo,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,o){t&1&&(we(Bo),De(0,"span",0),Z(1),Z(2,1),Z(3,2),Ne(),v(4,zo,3,0,"span",1)),t&2&&(ee("mat-content-hide-toggle",!o._showToggle()),c(4),b(o._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return n})(),oo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=Y({type:n,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return n})(),ro=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=Y({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})(),ao=(()=>{class n extends Jn{_keyManager;_ownHeaders=new Ai;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Ee(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new en(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=ot(n)))(o||n)}})();static \u0275dir=Y({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,o,r){if(t&1&&Be(r,Mi,5),t&2){let d;A(d=V())&&(o._headers=d)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,o){t&2&&ee("mat-accordion-multi",o.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",R],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[K([{provide:Ci,useExisting:n}]),je]})}return n})(),so=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=z({imports:[to,Vt,J]})}return n})();var Wo=(n,i)=>i.itemId;function Uo(n,i){n&1&&(s(0,"p",2),l(1,"Nenhuma corredi\xE7a/dobradi\xE7a foi identificada neste projeto."),a())}function Xo(n,i){if(n&1&&(s(0,"tr")(1,"td"),l(2),a(),s(3,"td"),l(4),u(5,"currency"),a(),s(6,"td"),l(7),a(),s(8,"td"),l(9),u(10,"currency"),a()()),n&2){let e=i.$implicit;c(2),x(e.nome),c(2),x(_(5,4,e.valorUnitario,"BRL")),c(3),x(e.quantidade),c(2),x(_(10,7,e.valorTotal,"BRL"))}}function Go(n,i){if(n&1&&(s(0,"div",3)(1,"table")(2,"thead")(3,"tr")(4,"th",4),l(5,"Nome"),a(),s(6,"th",4),l(7,"Valor unit\xE1rio"),a(),s(8,"th",4),l(9,"Quantidade"),a(),s(10,"th",4),l(11,"Custo total"),a()()(),s(12,"tbody"),$(13,Xo,11,10,"tr",null,Wo),a(),s(15,"tfoot")(16,"tr")(17,"th",5),l(18,"Total geral"),a(),s(19,"td"),l(20,"-"),a(),s(21,"td"),l(22),a(),s(23,"td"),l(24),u(25,"currency"),a()()()()()),n&2){let e=g();c(13),Q(e.summary()),c(9),x(e.totalQuantidade()),c(2),x(_(25,2,e.totalValor(),"BRL"))}}var Gt=class n{summary=ge.required();hasSummary=O(()=>this.summary().length>0);totalQuantidade=O(()=>this.summary().reduce((i,e)=>i+e.quantidade,0));totalValor=O(()=>this.summary().reduce((i,e)=>i+e.valorTotal,0));static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["app-projeto-corredicas-dobradicas-resumo"]],inputs:{summary:[1,"summary"]},decls:10,vars:1,consts:[["aria-labelledby","projeto-corredicas-dobradicas-resumo-heading"],["id","projeto-corredicas-dobradicas-resumo-heading"],[1,"feedback"],[1,"table-wrapper"],["scope","col"],["scope","row"]],template:function(e,t){e&1&&(s(0,"section",0)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title",1),l(4," Resumo de corredi\xE7as/dobradi\xE7as "),a(),s(5,"mat-card-subtitle"),l(6," Consolidado das ferragens utilizadas no projeto. "),a()(),s(7,"mat-card-content"),v(8,Uo,2,0,"p",2)(9,Go,26,5,"div",3),a()()()),e&2&&(c(8),b(t.hasSummary()?9:8))},dependencies:[_e,ce,pe,ue,he,me,de],styles:[".feedback[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);margin:0}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto}table[_ngcontent-%COMP%]{border-collapse:collapse;min-width:100%;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border-bottom:1px solid color-mix(in srgb,var(--mat-sys-outline) 35%,transparent);padding:.875rem .75rem;text-align:left;vertical-align:top}th[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font:var(--mat-sys-title-small)}tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font:var(--mat-sys-title-small)}"],changeDetection:0})};var Yo=["knob"],$o=["valueIndicatorContainer"];function Qo(n,i){if(n&1&&(s(0,"div",2,1)(2,"div",5)(3,"span",6),l(4),a()()()),n&2){let e=g();c(4),x(e.valueIndicatorText)}}var Zo=["trackActive"],Ko=["*"];function Jo(n,i){if(n&1&&P(0,"div"),n&2){let e=i.$implicit,t=i.$index,o=g(3);at(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),rt("transform",o._calcTickMarkTransform(t))}}function er(n,i){if(n&1&&$(0,Jo,1,4,"div",8,Li),n&2){let e=g(2);Q(e._tickMarks)}}function tr(n,i){if(n&1&&(s(0,"div",6,1),v(2,er,2,0),a()),n&2){let e=g();c(2),b(e._cachedWidth?2:-1)}}function ir(n,i){if(n&1&&P(0,"mat-slider-visual-thumb",7),n&2){let e=g();C("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText)}}var y=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(y||{}),Ke=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(Ke||{}),Si=new N("_MatSlider"),lo=new N("_MatSliderThumb"),nr=new N("_MatSliderRangeThumb"),co=new N("_MatSliderVisualThumb");var or=(()=>{class n{_cdr=m(te);_ngZone=m(W);_slider=m(Si);_renderer=m(Ce);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=m(q).nativeElement;_platform=m(oe);constructor(){}ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,o=this._renderer;this._listenerCleanups=[o.listen(t,"pointermove",this._onPointerMove),o.listen(t,"pointerdown",this._onDragStart),o.listen(t,"pointerup",this._onDragEnd),o.listen(t,"pointerleave",this._onMouseLeave),o.listen(t,"focus",this._onFocus),o.listen(t,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),o=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=o,o?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(e){return e?.state===ai.FADING_IN||e?.state===ai.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===y.START?y.END:y.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===y.START?y.END:y.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(t,o){if(t&1&&Me(dt,5)(Yo,5)($o,5),t&2){let r;A(r=V())&&(o._ripple=r.first),A(r=V())&&(o._knob=r.first),A(r=V())&&(o._valueIndicatorContainer=r.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[K([{provide:co,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(t,o){t&1&&(v(0,Qo,5,1,"div",2),P(1,"div",3,0)(3,"div",4)),t&2&&(b(o.discrete?0:-1),c(3),C("matRippleDisabled",!0))},dependencies:[dt],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2,changeDetection:0})}return n})(),mo=(()=>{class n{_ngZone=m(W);_cdr=m(te);_elementRef=m(q);_dir=m($e,{optional:!0});_globalRippleOptions=m(on,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(y.END),o=this._getInput(y.START);t&&(t.disabled=this._disabled),o&&(o.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(y.END),o=this._getInput(y.START),r=t.value,d=o.value;o.min=e.new,t.min=Math.max(e.new,o.value),o.max=Math.min(t.max,t.value),o._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,o):this._onTranslateXChangeBySideEffect(o,t),r!==t.value&&this._onValueChange(t),d!==o.value&&this._onValueChange(o)}_updateMinNonRange(e){let t=this._getInput(y.END);if(t){let o=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),o!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(y.END),o=this._getInput(y.START),r=t.value,d=o.value;t.max=e.new,o.max=Math.min(e.new,t.value),t.min=o.value,t._updateWidthInactive(),o._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(o,t):this._onTranslateXChangeBySideEffect(t,o),r!==t.value&&this._onValueChange(t),d!==o.value&&this._onValueChange(o)}_updateMaxNonRange(e){let t=this._getInput(y.END);if(t){let o=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),o!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(y.END),t=this._getInput(y.START),o=e.value,r=t.value,d=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<d?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),o!==e.value&&this._onValueChange(e),r!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(y.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=ke();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=O(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=m(oe);constructor(){m(Pe).load(Ye);let e=this._isRtl();Hi(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(y.END),t=this._getInput(y.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let o=this._getThumb(y.END);this._rippleRadius=o._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(y.END),t=this._getInput(y.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(y.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(y.START)._isActive||this._getThumb(y.END)._isActive}_getValue(e=y.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(y.START)?._skipUIUpdate||this._getInput(y.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(y.END),t=this._getInput(y.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(y.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(y.START),t=this._getInput(y.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),o=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),o._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===y.END?y.END:y.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute("aria-valuetext",t),this.discrete){e.thumbPosition===y.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let o=this._getThumb(e.thumbPosition);t.length<3?o._hostElement.classList.add("mdc-slider__thumb--short-value"):o._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let e=this._getInput(y.END),t=this._getInput(y.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,o=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*o}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let o=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-t.translateX}px`,transformOrigin:"right",transform:`scaleX(${o})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${o})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),o=Math.max(Math.round((t-this.min)/e),0)+1,r=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?o++:r++,this._tickMarks=Array(o).fill(Ke.ACTIVE).concat(Array(r).fill(Ke.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),o=this._getValue(y.START),r=Math.max(Math.round((o-this.min)/e),0),d=Math.max(Math.round((t-o)/e)+1,0),p=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(r).fill(Ke.INACTIVE).concat(Array(d).fill(Ke.ACTIVE),Array(p).fill(Ke.INACTIVE))}_getInput(e){if(e===y.END&&this._input)return this._input;if(this._inputs?.length)return e===y.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===y.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(e,t){let o=t.width/2,r=t.x+o,d=t.y+o,p=e.clientX-r,h=e.clientY-d;return Math.pow(p,2)+Math.pow(h,2)<Math.pow(o,2)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-slider"]],contentQueries:function(t,o,r){if(t&1&&Be(r,lo,5)(r,nr,4),t&2){let d;A(d=V())&&(o._input=d.first),A(d=V())&&(o._inputs=d)}},viewQuery:function(t,o){if(t&1&&Me(Zo,5)(co,5),t&2){let r;A(r=V())&&(o._trackActive=r.first),A(r=V())&&(o._thumbs=r)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(t,o){t&2&&(at("mat-"+(o.color||"primary")),ee("mdc-slider--range",o._isRange)("mdc-slider--disabled",o.disabled)("mdc-slider--discrete",o.discrete)("mdc-slider--tick-marks",o.showTickMarks)("_mat-animation-noopable",o._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",R],discrete:[2,"discrete","discrete",R],showTickMarks:[2,"showTickMarks","showTickMarks",R],min:[2,"min","min",ve],color:"color",disableRipple:[2,"disableRipple","disableRipple",R],max:[2,"max","max",ve],step:[2,"step","step",ve],displayWith:"displayWith"},exportAs:["matSlider"],features:[K([{provide:Si,useExisting:n}])],ngContentSelectors:Ko,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(t,o){t&1&&(we(),Z(0),s(1,"div",2),P(2,"div",3),s(3,"div",4),P(4,"div",5,0),a(),v(6,tr,3,1,"div",6),a(),v(7,ir,1,3,"mat-slider-visual-thumb",7),P(8,"mat-slider-visual-thumb",7)),t&2&&(c(6),b(o.showTickMarks?6:-1),c(),b(o._isRange?7:-1),c(),C("discrete",o.discrete)("thumbPosition",2)("valueIndicatorText",o.endValueIndicatorText))},dependencies:[or],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));
  height: var(--mat-slider-active-track-height, 4px);
  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));
  border-top-width: var(--mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));
  height: var(--mat-slider-inactive-track-height, 4px);
  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--inactive::before {
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
@media (forced-colors: active) {
  .mdc-slider__track--inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));
  width: var(--mat-slider-value-indicator-width, 28px);
  height: var(--mat-slider-value-indicator-height, 28px);
  padding: var(--mat-slider-value-indicator-padding, 0);
  opacity: var(--mat-slider-value-indicator-opacity, 1);
  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
}
.mdc-slider__value-indicator::after {
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
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--mat-slider-value-indicator-width, 28px);
  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));
  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));
  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));
  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));
  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--mat-slider-handle-width, 20px);
  height: var(--mat-slider-handle-height, 20px);
  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));
  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));
  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--mat-slider-with-tick-marks-container-size, 2px);
  height: var(--mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();var rr={provide:St,useExisting:nt(()=>Pi),multi:!0};var Pi=(()=>{class n{_ngZone=m(W);_elementRef=m(q);_cdr=m(te);_slider=m(Si);_platform=m(oe);_listenerCleanups;get value(){return ve(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+"";if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new T;dragStart=new T;dragEnd=new T;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=y.END;get min(){return ve(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges()}get max(){return ve(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges()}get step(){return ve(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges()}get disabled(){return R(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=U("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new D;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=m(Ce);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,o=this._slider._cachedWidth,r=this._slider.step===0?1:this._slider.step,d=Math.floor((this._slider.max-this._slider.min)/r),p=this._slider._isRtl()?1-t/o:t/o,w=Math.round(p*d)/d*(this._slider.max-this._slider.min)+this._slider.min,f=Math.round(w/r)*r,M=this.value;if(f===M){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=f,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,o=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,o),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Y({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(t,o){t&1&&S("change",function(){return o._onChange()})("input",function(){return o._onInput()})("blur",function(){return o._onBlur()})("focus",function(){return o._onFocus()}),t&2&&fe("aria-valuetext",o._valuetext())},inputs:{value:[2,"value","value",ve]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[K([rr,{provide:lo,useExisting:n}])]})}return n})();var po=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=z({imports:[Mt,J]})}return n})();function dr(n,i){n&1&&(s(0,"mat-error"),l(1,"A porcentagem deve ser igual ou maior que zero."),a())}var Yt=class n{summary=ge.required();margemLucroPercentualControl=ge.required();margemLucroPercentualAtual(){return this.margemLucroPercentualControl().value??0}updateMargemLucroPercentual(i){let e=typeof i=="number"?i:Number(i),t=Number.isFinite(e)?Math.min(Math.max(e,0),1e3):0;this.margemLucroPercentualControl().setValue(t),this.margemLucroPercentualControl().markAsDirty(),this.margemLucroPercentualControl().markAsTouched()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["app-projeto-orcamento"]],inputs:{summary:[1,"summary"],margemLucroPercentualControl:[1,"margemLucroPercentualControl"]},decls:45,vars:23,consts:[["aria-labelledby","projeto-orcamento-heading"],["id","projeto-orcamento-heading"],[1,"content-grid"],[1,"margin-controls"],["appearance","outline"],["matInput","","type","number","min","0","max","1000","step","0.01",3,"input","value"],[1,"slider-block"],[1,"slider-header"],["min","0","max","1000","step","0.5","discrete",""],["matSliderThumb","","aria-label","Porcentagem de Lucro",3,"valueChange","value"],[1,"summary-grid"],[1,"summary-item"],[1,"summary-label"],[1,"summary-detail"],[1,"summary-item","summary-item-highlight"]],template:function(e,t){e&1&&(s(0,"section",0)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title",1),l(4,"Or\xE7amento"),a(),s(5,"mat-card-subtitle"),l(6," Defina a porcentagem de lucro para calcular o valor final do or\xE7amento. "),a()(),s(7,"mat-card-content",2)(8,"div",3)(9,"mat-form-field",4)(10,"mat-label"),l(11,"Porcentagem de Lucro (%)"),a(),s(12,"input",5),S("input",function(r){return t.updateMargemLucroPercentual(r.target.value)}),a(),v(13,dr,2,0,"mat-error"),a(),s(14,"div",6)(15,"div",7)(16,"span"),l(17,"Porcentagem de Lucro pelo controle deslizante"),a(),s(18,"strong"),l(19),u(20,"number"),a()(),s(21,"mat-slider",8)(22,"input",9),S("valueChange",function(r){return t.updateMargemLucroPercentual(r)}),a()()()(),s(23,"div",10)(24,"div",11)(25,"span",12),l(26,"Custo total"),a(),s(27,"strong"),l(28),u(29,"currency"),a()(),s(30,"div",11)(31,"span",12),l(32,"Lucro aplicado"),a(),s(33,"strong"),l(34),u(35,"currency"),a(),s(36,"span",13),l(37),u(38,"number"),a()(),s(39,"div",14)(40,"span",12),l(41,"Valor final do or\xE7amento"),a(),s(42,"strong"),l(43),u(44,"currency"),a()()()()()()),e&2&&(c(12),C("value",t.margemLucroPercentualAtual()),c(),b(t.margemLucroPercentualControl().touched&&t.margemLucroPercentualControl().hasError("min")?13:-1),c(6),E("",_(20,8,t.margemLucroPercentualAtual(),"1.2-2"),"%"),c(3),C("value",t.margemLucroPercentualAtual()),c(6),x(_(29,11,t.summary().custoTotal,"BRL")),c(6),x(_(35,14,t.summary().valorMargem,"BRL")),c(3),E(" ",_(38,17,t.margemLucroPercentualAtual(),"1.2-2"),"% "),c(6),x(_(44,20,t.summary().valorFinal,"BRL")))},dependencies:[_e,ce,pe,ue,he,me,Ot,Rt,kt,Et,Tt,Dt,po,mo,Pi,Pt,de,Se],styles:[".content-grid[_ngcontent-%COMP%], .margin-controls[_ngcontent-%COMP%]{display:grid;gap:1rem}.slider-block[_ngcontent-%COMP%]{display:grid;gap:.5rem}.slider-header[_ngcontent-%COMP%]{align-items:center;display:flex;gap:1rem;justify-content:space-between}.summary-grid[_ngcontent-%COMP%]{display:grid;gap:1rem;grid-template-columns:repeat(3,minmax(0,1fr))}.summary-item[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--mat-sys-surface-container) 70%,transparent);border-radius:1rem;display:grid;gap:.35rem;padding:1rem}.summary-item-highlight[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--mat-sys-tertiary-container) 85%,transparent)}.summary-label[_ngcontent-%COMP%], .summary-detail[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}.summary-item-highlight[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%], .summary-item-highlight[_ngcontent-%COMP%]   .summary-detail[_ngcontent-%COMP%]{color:var(--mat-sys-on-tertiary-container)}strong[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small)}@media(max-width:960px){.summary-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0})};var cr=(n,i)=>i.fitaId;function mr(n,i){n&1&&(s(0,"p",2),l(1,"Nenhuma fita utilizada foi identificada neste projeto."),a())}function pr(n,i){if(n&1&&(s(0,"tr")(1,"td"),l(2),a(),s(3,"td"),l(4),u(5,"number"),a(),s(6,"td"),l(7),u(8,"currency"),a(),s(9,"td"),l(10),u(11,"number"),a(),s(12,"td"),l(13),a(),s(14,"td"),l(15),u(16,"number"),s(17,"div",7),l(18),u(19,"number"),a()(),s(20,"td"),l(21),u(22,"currency"),a()()),n&2){let e=i.$implicit;c(2),x(e.nome),c(2),E("",_(5,8,e.fitaMetragemMetros,"1.2-4")," m"),c(3),x(_(8,11,e.fitaValor,"BRL")),c(3),E("",_(11,14,e.projetoMetragemMetros,"1.2-4")," m"),c(3),x(e.quantidadeFitas),c(2),E(" ",_(16,17,e.wasteMetragemMetros,"1.2-4")," m "),c(3),E(" ",_(19,20,e.purchasedMetragemMetros,"1.2-4")," comprado(s) "),c(3),x(_(22,23,e.valorTotal,"BRL"))}}function hr(n,i){if(n&1&&(s(0,"div",3)(1,"table")(2,"thead")(3,"tr")(4,"th",4),l(5,"Nome"),a(),s(6,"th",4),l(7,"Metragem da fita"),a(),s(8,"th",4),l(9,"Valor da fita"),a(),s(10,"th",4),l(11,"Metragem consumida"),a(),s(12,"th",4),l(13,"Qtd. de fitas"),a(),s(14,"th",4),l(15,"Desperd\xEDcio estimado"),a(),s(16,"th",4),l(17,"Custo total"),a()()(),s(18,"tbody"),$(19,pr,23,26,"tr",null,cr),a(),s(21,"tfoot")(22,"tr")(23,"th",5),l(24,"Total geral"),a(),s(25,"td"),l(26,"-"),a(),s(27,"td"),l(28,"-"),a(),s(29,"td"),l(30),u(31,"number"),a(),s(32,"td"),l(33),a(),s(34,"td"),l(35),u(36,"number"),a(),s(37,"td"),l(38),u(39,"currency"),a()(),s(40,"tr")(41,"th",5),l(42,"Resumo do desperd\xEDcio"),a(),s(43,"td",6),l(44),u(45,"number"),u(46,"number"),u(47,"number"),a()()()()()),n&2){let e=g();c(19),Q(e.summary()),c(11),E("",_(31,7,e.totals().projetoMetragemMetros,"1.2-4")," m"),c(3),x(e.totals().quantidadeFitas),c(2),E("",_(36,10,e.totals().wasteMetragemMetros,"1.2-4")," m"),c(3),x(_(39,13,e.totals().valorTotal,"BRL")),c(6),Ge(" ",_(45,16,e.totals().wasteMetragemMetros,"1.2-4")," m (",_(46,19,e.totals().purchasedMetragemMetros,"1.2-4")," m comprados - ",_(47,22,e.totals().projetoMetragemMetros,"1.2-4")," m usados) ")}}var $t=class n{summary=ge.required();hasSummary=O(()=>this.summary().length>0);totals=O(()=>this.summary().reduce((i,e)=>({projetoMetragemMetros:i.projetoMetragemMetros+e.projetoMetragemMetros,purchasedMetragemMetros:i.purchasedMetragemMetros+e.purchasedMetragemMetros,wasteMetragemMetros:i.wasteMetragemMetros+e.wasteMetragemMetros,quantidadeFitas:i.quantidadeFitas+e.quantidadeFitas,valorTotal:i.valorTotal+e.valorTotal}),{projetoMetragemMetros:0,purchasedMetragemMetros:0,wasteMetragemMetros:0,quantidadeFitas:0,valorTotal:0}));static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["app-projeto-fitas-resumo"]],inputs:{summary:[1,"summary"]},decls:10,vars:1,consts:[["aria-labelledby","projeto-fitas-resumo-heading"],["id","projeto-fitas-resumo-heading"],[1,"feedback"],[1,"table-wrapper"],["scope","col"],["scope","row"],["colspan","6"],[1,"secondary-cell"]],template:function(e,t){e&1&&(s(0,"section",0)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title",1),l(4,"Resumo de fitas utilizadas"),a(),s(5,"mat-card-subtitle"),l(6," Consolidado das fitas usadas no projeto. "),a()(),s(7,"mat-card-content"),v(8,mr,2,0,"p",2)(9,hr,48,25,"div",3),a()()()),e&2&&(c(8),b(t.hasSummary()?9:8))},dependencies:[_e,ce,pe,ue,he,me,de,Se],styles:[".feedback[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);margin:0}.secondary-cell[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font:var(--mat-sys-body-small);margin-top:.25rem}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto}table[_ngcontent-%COMP%]{border-collapse:collapse;min-width:100%;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border-bottom:1px solid color-mix(in srgb,var(--mat-sys-outline) 35%,transparent);padding:.875rem .75rem;text-align:left;vertical-align:top}th[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font:var(--mat-sys-title-small)}tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font:var(--mat-sys-title-small)}"],changeDetection:0})};var Qt=class n{summary=ge.required();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["app-projeto-orcamento-resumo"]],inputs:{summary:[1,"summary"]},decls:52,vars:39,consts:[["aria-labelledby","projeto-orcamento-resumo-heading"],["id","projeto-orcamento-resumo-heading"],[1,"summary-grid"],[1,"summary-item"],[1,"summary-label"],[1,"summary-detail"],[1,"summary-item","summary-item-highlight"]],template:function(e,t){e&1&&(s(0,"section",0)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title",1),l(4,"Custo consolidado"),a(),s(5,"mat-card-subtitle"),l(6," Totaliza\xE7\xE3o final dos materiais calculados para o projeto. "),a()(),s(7,"mat-card-content",2)(8,"div",3)(9,"span",4),l(10,"Total de placas"),a(),s(11,"strong"),l(12),u(13,"currency"),a(),s(14,"span",5),l(15),u(16,"number"),a()(),s(17,"div",3)(18,"span",4),l(19,"Total de fitas"),a(),s(20,"strong"),l(21),u(22,"currency"),a(),s(23,"span",5),l(24),u(25,"number"),a()(),s(26,"div",3)(27,"span",4),l(28,"Total de corredi\xE7as/dobradi\xE7as"),a(),s(29,"strong"),l(30),u(31,"currency"),a(),s(32,"span",5),l(33),a()(),s(34,"div",3)(35,"span",4),l(36,"Total de m\xE3o de obra"),a(),s(37,"strong"),l(38),u(39,"currency"),a(),s(40,"span",5),l(41),u(42,"number"),u(43,"number"),a()(),s(44,"div",6)(45,"span",4),l(46,"Total geral do projeto"),a(),s(47,"strong"),l(48),u(49,"currency"),a(),s(50,"span",5),l(51,"Soma consolidada de placas, fitas, corredi\xE7as/dobradi\xE7as e m\xE3o de obra."),a()()()()()),e&2&&(c(12),x(_(13,12,t.summary().placasTotal,"BRL")),c(3),Le(" ",t.summary().quantidadePlacas," placa(s) e ",_(16,15,t.summary().placasSquareMeters,"1.2-4")," m2 usados "),c(6),x(_(22,18,t.summary().fitasTotal,"BRL")),c(3),Le(" ",t.summary().quantidadeFitas," fita(s) e ",_(25,21,t.summary().fitasMetragemMetros,"1.2-4")," m consumidos "),c(6),x(_(31,24,t.summary().corredicasDobradicasTotal,"BRL")),c(3),E(" ",t.summary().quantidadeCorredicasDobradicas," unidade(s) consideradas "),c(5),x(_(39,27,t.summary().maoDeObraTotal,"BRL")),c(3),Le(" ",_(42,30,t.summary().horasConstrucao,"1.2-2")," h constru\xE7\xE3o e ",_(43,33,t.summary().horasMontagem,"1.2-2")," h montagem "),c(7),x(_(49,36,t.summary().totalGeral,"BRL")))},dependencies:[_e,ce,pe,ue,he,me,de,Se],styles:[".summary-grid[_ngcontent-%COMP%]{display:grid;gap:1rem;grid-template-columns:repeat(5,minmax(0,1fr))}.summary-item[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--mat-sys-surface-container) 70%,transparent);border-radius:1rem;display:grid;gap:.35rem;padding:1rem}.summary-item-highlight[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--mat-sys-primary-container) 85%,transparent)}.summary-label[_ngcontent-%COMP%], .summary-detail[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}.summary-item-highlight[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%], .summary-item-highlight[_ngcontent-%COMP%]   .summary-detail[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container)}strong[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small)}@media(max-width:960px){.summary-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0})};var ur=(n,i)=>i.placaId;function _r(n,i){n&1&&(s(0,"p",2),l(1,"Nenhuma placa utilizada foi identificada neste projeto."),a())}function fr(n,i){if(n&1&&(s(0,"tr")(1,"td"),l(2),a(),s(3,"td"),l(4),u(5,"number"),a(),s(6,"td"),l(7),u(8,"currency"),a(),s(9,"td"),l(10),u(11,"number"),a(),s(12,"td"),l(13),a(),s(14,"td"),l(15),a(),s(16,"td"),l(17),u(18,"number"),s(19,"div",7),l(20),u(21,"number"),a()(),s(22,"td"),l(23),u(24,"currency"),a()()),n&2){let e=i.$implicit;c(2),x(e.nome),c(2),x(_(5,9,e.placaSquareMeters,"1.2-4")),c(3),x(_(8,12,e.placaValor,"BRL")),c(3),x(_(11,15,e.projetoSquareMeters,"1.2-4")),c(3),x(e.quantidadePecas),c(2),x(e.quantidadePlacas),c(2),E(" ",_(18,18,e.wasteSquareMeters,"1.2-4")," m2 "),c(3),E(" ",_(21,21,e.purchasedSquareMeters,"1.2-4")," comprado(s) "),c(3),x(_(24,24,e.valorTotal,"BRL"))}}function gr(n,i){if(n&1&&(s(0,"div",3)(1,"table")(2,"thead")(3,"tr")(4,"th",4),l(5,"Nome"),a(),s(6,"th",4),l(7,"m2 da placa"),a(),s(8,"th",4),l(9,"Valor da placa"),a(),s(10,"th",4),l(11,"m2 da placa no projeto"),a(),s(12,"th",4),l(13,"Qtd. de pe\xE7as"),a(),s(14,"th",4),l(15,"Qtd. de placas"),a(),s(16,"th",4),l(17,"Desperd\xEDcio estimado"),a(),s(18,"th",4),l(19,"Valor total no projeto"),a()()(),s(20,"tbody"),$(21,fr,25,27,"tr",null,ur),a(),s(23,"tfoot")(24,"tr")(25,"th",5),l(26,"Total geral"),a(),s(27,"td"),l(28,"-"),a(),s(29,"td"),l(30,"-"),a(),s(31,"td"),l(32),u(33,"number"),a(),s(34,"td"),l(35),a(),s(36,"td"),l(37),a(),s(38,"td"),l(39),u(40,"number"),a(),s(41,"td"),l(42),u(43,"currency"),a()(),s(44,"tr")(45,"th",5),l(46,"Resumo do desperd\xEDcio"),a(),s(47,"td",6),l(48),u(49,"number"),u(50,"number"),u(51,"number"),a()()()()()),n&2){let e=g();c(21),Q(e.summary()),c(11),x(_(33,8,e.totals().projetoSquareMeters,"1.2-4")),c(3),x(e.totals().quantidadePecas),c(2),x(e.totals().quantidadePlacas),c(2),E("",_(40,11,e.totals().wasteSquareMeters,"1.2-4")," m2"),c(3),x(_(43,14,e.totals().valorTotal,"BRL")),c(6),Ge(" ",_(49,17,e.totals().wasteSquareMeters,"1.2-4")," m2 (",_(50,20,e.totals().purchasedSquareMeters,"1.2-4")," m2 comprados - ",_(51,23,e.totals().projetoSquareMeters,"1.2-4")," m2 usados) ")}}var Zt=class n{summary=ge.required();hasSummary=O(()=>this.summary().length>0);totals=O(()=>this.summary().reduce((i,e)=>({quantidadePecas:i.quantidadePecas+e.quantidadePecas,projetoSquareMeters:i.projetoSquareMeters+e.projetoSquareMeters,purchasedSquareMeters:i.purchasedSquareMeters+e.quantidadePlacas*e.placaSquareMeters,wasteSquareMeters:i.wasteSquareMeters+e.quantidadePlacas*e.placaSquareMeters-e.projetoSquareMeters,quantidadePlacas:i.quantidadePlacas+e.quantidadePlacas,valorTotal:i.valorTotal+e.valorTotal}),{quantidadePecas:0,projetoSquareMeters:0,purchasedSquareMeters:0,wasteSquareMeters:0,quantidadePlacas:0,valorTotal:0}));static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["app-projeto-placas-resumo"]],inputs:{summary:[1,"summary"]},decls:10,vars:1,consts:[["aria-labelledby","projeto-placas-resumo-heading"],["id","projeto-placas-resumo-heading"],[1,"feedback"],[1,"table-wrapper"],["scope","col"],["scope","row"],["colspan","7"],[1,"secondary-cell"]],template:function(e,t){e&1&&(s(0,"section",0)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title",1),l(4,"Resumo de placas utilizadas"),a(),s(5,"mat-card-subtitle"),l(6," Consolidado das placas usadas em todos os m\xF3veis do projeto. "),a()(),s(7,"mat-card-content"),v(8,_r,2,0,"p",2)(9,gr,52,26,"div",3),a()()()),e&2&&(c(8),b(t.hasSummary()?9:8))},dependencies:[_e,ce,pe,ue,he,me,de,Se],styles:[".feedback[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);margin:0}.secondary-cell[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font:var(--mat-sys-body-small);margin-top:.25rem}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto}table[_ngcontent-%COMP%]{border-collapse:collapse;min-width:100%;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border-bottom:1px solid color-mix(in srgb,var(--mat-sys-outline) 35%,transparent);padding:.875rem .75rem;text-align:left;vertical-align:top}th[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font:var(--mat-sys-title-small)}tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font:var(--mat-sys-title-small)}"],changeDetection:0})};var Kt=(n,i)=>i.controls.id.value,ki=(n,i)=>i.id;function vr(n,i){n&1&&(s(0,"p",7),l(1,"Carregando dados do projeto..."),a())}function br(n,i){n&1&&(s(0,"mat-error"),l(1,"Informe o nome do projeto."),a())}function yr(n,i){n&1&&(s(0,"p",7),l(1,"Adicione ao menos um m\xF3vel ao projeto."),a())}function xr(n,i){n&1&&(s(0,"mat-error"),l(1,"Informe o nome do m\xF3vel."),a())}function Cr(n,i){n&1&&(s(0,"p",7),l(1,"Adicione ao menos uma pe\xE7a de placa para este m\xF3vel."),a())}function wr(n,i){if(n&1&&(s(0,"mat-option",39),l(1),a()),n&2){let e=i.$implicit;C("value",e.nome),c(),E(" ",e.nome," ")}}function Mr(n,i){n&1&&(s(0,"mat-error"),l(1,"Selecione um tipo de placa da lista."),a())}function Sr(n,i){n&1&&(s(0,"mat-error"),l(1,"Informe a altura."),a())}function Pr(n,i){n&1&&(s(0,"mat-error"),l(1,"Informe a largura."),a())}function kr(n,i){if(n&1){let e=Xe();s(0,"div",34)(1,"mat-form-field",14)(2,"mat-label"),l(3,"Tipo de placa"),a(),s(4,"input",37),S("input",function(){let o=B(e).$implicit,r=g(3);return L(r.clearSelectedPlaca(o))}),a(),s(5,"mat-autocomplete",38,0),S("optionSelected",function(o){let r=B(e).$implicit,d=g(3);return L(d.selectPlacaByName(r,o.option.value))}),$(7,wr,2,2,"mat-option",39,ki),a(),v(9,Mr,2,0,"mat-error"),a(),s(10,"mat-form-field",14)(11,"mat-label"),l(12,"Altura (mm)"),a(),P(13,"input",40),v(14,Sr,2,0,"mat-error"),a(),s(15,"mat-form-field",14)(16,"mat-label"),l(17,"Largura (mm)"),a(),P(18,"input",40),v(19,Pr,2,0,"mat-error"),a(),s(20,"mat-form-field",14)(21,"mat-label"),l(22,"m2"),a(),P(23,"input",41),u(24,"number"),a(),s(25,"div",42)(26,"button",20),S("click",function(){let o=B(e).$index,r=g().$implicit,d=g(2);return L(d.removeItem(r,o))}),l(27," Remover pe\xE7a de placa "),a()()()}if(n&2){let e=i.$implicit,t=Ct(6),o=g(3);c(4),C("formControl",e.controls.placaNome)("matAutocomplete",t),c(3),Q(o.filteredPlacas(e.controls.placaNome.value)),c(2),b(e.controls.placaId.touched&&e.controls.placaId.hasError("required")?9:-1),c(4),C("formControl",e.controls.alturaMm),c(),b(e.controls.alturaMm.touched&&e.controls.alturaMm.hasError("required")?14:-1),c(4),C("formControl",e.controls.larguraMm),c(),b(e.controls.larguraMm.touched&&e.controls.larguraMm.hasError("required")?19:-1),c(4),C("value",_(24,8,o.itemSquareMeters(e),"1.2-4"))}}function Er(n,i){n&1&&(s(0,"p",7),l(1,"Adicione fitas deste m\xF3vel quando houver acabamento."),a())}function Rr(n,i){if(n&1&&(s(0,"mat-option",39),l(1),a()),n&2){let e=i.$implicit;C("value",e.nome),c(),E(" ",e.nome," ")}}function Or(n,i){n&1&&(s(0,"mat-error"),l(1,"Selecione um tipo de fita da lista."),a())}function Dr(n,i){n&1&&(s(0,"mat-error"),l(1,"Informe a metragem consumida."),a())}function Tr(n,i){n&1&&(s(0,"mat-error"),l(1,"A metragem deve ser maior que zero."),a())}function Ir(n,i){if(n&1){let e=Xe();s(0,"div",35)(1,"mat-form-field",14)(2,"mat-label"),l(3,"Tipo de fita"),a(),s(4,"input",37),S("input",function(){let o=B(e).$implicit,r=g(3);return L(r.clearSelectedFita(o))}),a(),s(5,"mat-autocomplete",38,1),S("optionSelected",function(o){let r=B(e).$implicit,d=g(3);return L(d.selectFitaByName(r,o.option.value))}),$(7,Rr,2,2,"mat-option",39,ki),a(),v(9,Or,2,0,"mat-error"),a(),s(10,"mat-form-field",14)(11,"mat-label"),l(12,"Metragem consumida (mm)"),a(),P(13,"input",40),v(14,Dr,2,0,"mat-error"),v(15,Tr,2,0,"mat-error"),a(),s(16,"mat-form-field",14)(17,"mat-label"),l(18,"Metragem consumida (m)"),a(),P(19,"input",41),u(20,"number"),a(),s(21,"div",42)(22,"button",20),S("click",function(){let o=B(e).$index,r=g().$implicit,d=g(2);return L(d.removeFita(r,o))}),l(23," Remover fita "),a()()()}if(n&2){let e=i.$implicit,t=Ct(6),o=g(3);c(4),C("formControl",e.controls.fitaNome)("matAutocomplete",t),c(3),Q(o.filteredFitas(e.controls.fitaNome.value)),c(2),b(e.controls.fitaId.touched&&e.controls.fitaId.hasError("required")?9:-1),c(4),C("formControl",e.controls.metragemMm),c(),b(e.controls.metragemMm.touched&&e.controls.metragemMm.hasError("required")?14:-1),c(),b(e.controls.metragemMm.touched&&e.controls.metragemMm.hasError("min")?15:-1),c(4),C("value",_(20,7,o.fitaMeters(e),"1.2-4"))}}function Fr(n,i){n&1&&(s(0,"p",7),l(1,"Adicione corredi\xE7as ou dobradi\xE7as deste m\xF3vel quando houver ferragens."),a())}function Ar(n,i){if(n&1&&(s(0,"mat-option",39),l(1),a()),n&2){let e=i.$implicit;C("value",e.nome),c(),E(" ",e.nome," ")}}function Vr(n,i){n&1&&(s(0,"mat-error"),l(1,"Selecione um item da lista."),a())}function jr(n,i){n&1&&(s(0,"mat-error"),l(1,"Informe a quantidade."),a())}function Nr(n,i){n&1&&(s(0,"mat-error"),l(1,"A quantidade deve ser maior que zero."),a())}function Br(n,i){if(n&1){let e=Xe();s(0,"div",36)(1,"mat-form-field",14)(2,"mat-label"),l(3,"Tipo"),a(),s(4,"input",37),S("input",function(){let o=B(e).$implicit,r=g(3);return L(r.clearSelectedCorredicaDobradica(o))}),a(),s(5,"mat-autocomplete",38,2),S("optionSelected",function(o){let r=B(e).$implicit,d=g(3);return L(d.selectCorredicaDobradicaByName(r,o.option.value))}),$(7,Ar,2,2,"mat-option",39,ki),a(),v(9,Vr,2,0,"mat-error"),a(),s(10,"mat-form-field",14)(11,"mat-label"),l(12,"Quantidade"),a(),P(13,"input",40),v(14,jr,2,0,"mat-error"),v(15,Nr,2,0,"mat-error"),a(),s(16,"div",42)(17,"button",20),S("click",function(){let o=B(e).$index,r=g().$implicit,d=g(2);return L(d.removeCorredicaDobradica(r,o))}),l(18," Remover item "),a()()()}if(n&2){let e=i.$implicit,t=Ct(6),o=g(3);c(4),C("formControl",e.controls.itemNome)("matAutocomplete",t),c(3),Q(o.filteredCorredicasDobradicas(e.controls.itemNome.value)),c(2),b(e.controls.itemId.touched&&e.controls.itemId.hasError("required")?9:-1),c(4),C("formControl",e.controls.quantidade),c(),b(e.controls.quantidade.touched&&e.controls.quantidade.hasError("required")?14:-1),c(),b(e.controls.quantidade.touched&&e.controls.quantidade.hasError("min")?15:-1)}}function Lr(n,i){if(n&1&&(s(0,"p",25),l(1),u(2,"currency"),u(3,"currency"),a()),n&2){let e=i;c(),Le(" Constru\xE7\xE3o: ",_(2,2,e.valorHoraConstrucao,"BRL"),"/h | Montagem: ",_(3,5,e.valorHoraMontagem,"BRL"),"/h ")}}function zr(n,i){n&1&&(s(0,"p",25),l(1," Cadastre a configura\xE7\xE3o de m\xE3o de obra para calcular esse custo no or\xE7amento. "),a())}function Hr(n,i){n&1&&(s(0,"mat-error"),l(1,"As horas devem ser iguais ou maiores que zero."),a())}function qr(n,i){n&1&&(s(0,"mat-error"),l(1,"As horas devem ser iguais ou maiores que zero."),a())}function Wr(n,i){if(n&1){let e=Xe();s(0,"mat-expansion-panel",30),S("opened",function(){let o=B(e).$implicit,r=g(2);return L(r.setMovelExpanded(o,!0))})("closed",function(){let o=B(e).$implicit,r=g(2);return L(r.setMovelExpanded(o,!1))}),s(1,"mat-expansion-panel-header")(2,"mat-panel-title"),l(3),a(),s(4,"mat-panel-description"),l(5),a()(),s(6,"div",31)(7,"div",32)(8,"mat-form-field",14)(9,"mat-label"),l(10,"Nome do m\xF3vel"),a(),P(11,"input",33),v(12,xr,2,0,"mat-error"),a(),s(13,"button",20),S("click",function(){let o=B(e).$index,r=g(2);return L(r.removeMovel(o))}),l(14," Remover m\xF3vel "),a()(),s(15,"div",17)(16,"h3"),l(17,"Pe\xE7as de placas"),a(),s(18,"button",20),S("click",function(){let o=B(e).$implicit,r=g(2);return L(r.addItem(o))}),l(19," Adicionar pe\xE7a de placa "),a()(),v(20,Cr,2,0,"p",7),$(21,kr,28,11,"div",34,Kt),s(23,"div",17)(24,"h3"),l(25,"Fitas"),a(),s(26,"button",20),S("click",function(){let o=B(e).$implicit,r=g(2);return L(r.addFita(o))}),l(27," Adicionar fita "),a()(),v(28,Er,2,0,"p",7),$(29,Ir,24,10,"div",35,Kt),s(31,"div",17)(32,"h3"),l(33,"Corredi\xE7as/Dobradi\xE7as"),a(),s(34,"button",20),S("click",function(){let o=B(e).$implicit,r=g(2);return L(r.addCorredicaDobradica(o))}),l(35," Adicionar corredi\xE7a/dobradi\xE7a "),a()(),v(36,Fr,2,0,"p",7),$(37,Br,19,6,"div",36,Kt),s(39,"div",17)(40,"h3"),l(41,"M\xE3o de obra do m\xF3vel"),a()(),v(42,Lr,4,8,"p",25)(43,zr,2,0,"p",25),s(44,"div",26)(45,"mat-form-field",14)(46,"mat-label"),l(47,"Horas de constru\xE7\xE3o"),a(),P(48,"input",27),v(49,Hr,2,0,"mat-error"),a(),s(50,"mat-form-field",14)(51,"mat-label"),l(52,"Horas de montagem"),a(),P(53,"input",28),v(54,qr,2,0,"mat-error"),a()()()()}if(n&2){let e,t=i.$implicit,o=i.$index,r=g(2);C("expanded",r.isMovelExpanded(t)),c(3),E(" ",t.controls.nome.value.trim()||"M\xF3vel "+(o+1)," "),c(2),Ge(" ",r.itens(t).length," pe\xE7a(s) de placa, ",r.fitasProjeto(t).length," fita(s) e ",r.corredicasDobradicasProjeto(t).length," ferragem(ns) "),c(6),C("formControl",t.controls.nome),c(),b(t.controls.nome.touched&&t.controls.nome.hasError("required")?12:-1),c(8),b(r.itens(t).length===0?20:-1),c(),Q(r.itens(t)),c(7),b(r.fitasProjeto(t).length===0?28:-1),c(),Q(r.fitasProjeto(t)),c(7),b(r.corredicasDobradicasProjeto(t).length===0?36:-1),c(),Q(r.corredicasDobradicasProjeto(t)),c(5),b((e=r.maoDeObraConfig())?42:43,e),c(2),C("formGroup",t.controls.maoDeObra),c(5),b(t.controls.maoDeObra.controls.horasConstrucao.touched&&t.controls.maoDeObra.controls.horasConstrucao.hasError("min")?49:-1),c(5),b(t.controls.maoDeObra.controls.horasMontagem.touched&&t.controls.maoDeObra.controls.horasMontagem.hasError("min")?54:-1)}}function Ur(n,i){if(n&1&&(s(0,"p",25),l(1),u(2,"currency"),u(3,"currency"),a()),n&2){let e=i;c(),Le(" Constru\xE7\xE3o: ",_(2,2,e.valorHoraConstrucao,"BRL"),"/h | Montagem: ",_(3,5,e.valorHoraMontagem,"BRL"),"/h ")}}function Xr(n,i){n&1&&(s(0,"p",25),l(1," Cadastre a configura\xE7\xE3o de m\xE3o de obra para calcular horas extras do projeto. "),a())}function Gr(n,i){n&1&&(s(0,"mat-error"),l(1,"As horas devem ser iguais ou maiores que zero."),a())}function Yr(n,i){n&1&&(s(0,"mat-error"),l(1,"As horas devem ser iguais ou maiores que zero."),a())}function $r(n,i){if(n&1&&(s(0,"p",29),l(1),a()),n&2){let e=g(2);c(),x(e.errorMessage())}}function Qr(n,i){if(n&1){let e=Xe();s(0,"form",13),S("ngSubmit",function(){B(e);let o=g();return L(o.save())}),s(1,"mat-form-field",14)(2,"mat-label"),l(3,"Nome do projeto"),a(),P(4,"input",15),v(5,br,2,0,"mat-error"),a(),s(6,"section",16)(7,"div",17)(8,"h2",18),l(9,"M\xF3veis"),a(),s(10,"div",19)(11,"button",12),S("click",function(){B(e);let o=g();return L(o.expandAllMoveis())}),l(12," Expandir todos "),a(),s(13,"button",12),S("click",function(){B(e);let o=g();return L(o.collapseAllMoveis())}),l(14," Recolher todos "),a(),s(15,"button",20),S("click",function(){B(e);let o=g();return L(o.addMovel())}),l(16,"Adicionar m\xF3vel"),a()()(),v(17,yr,2,0,"p",7),s(18,"mat-accordion",21),$(19,Wr,55,14,"mat-expansion-panel",22,Kt),a()(),s(21,"section",23)(22,"div",17)(23,"h2",24),l(24,"M\xE3o de obra extra do projeto"),a()(),v(25,Ur,4,8,"p",25)(26,Xr,2,0,"p",25),s(27,"div",26)(28,"mat-form-field",14)(29,"mat-label"),l(30,"Horas extras de constru\xE7\xE3o"),a(),P(31,"input",27),v(32,Gr,2,0,"mat-error"),a(),s(33,"mat-form-field",14)(34,"mat-label"),l(35,"Horas extras de montagem"),a(),P(36,"input",28),v(37,Yr,2,0,"mat-error"),a()()(),v(38,$r,2,1,"p",29),a()}if(n&2){let e,t=g();C("formGroup",t.form),c(5),b(t.form.controls.nome.touched&&t.form.controls.nome.hasError("required")?5:-1),c(6),C("disabled",t.moveis().length===0),c(2),C("disabled",t.moveis().length===0),c(4),b(t.moveis().length===0?17:-1),c(2),Q(t.moveis()),c(6),b((e=t.maoDeObraConfig())?25:26,e),c(2),C("formGroup",t.maoDeObraExtraProjeto()),c(5),b(t.form.controls.maoDeObraExtra.controls.horasConstrucao.touched&&t.form.controls.maoDeObraExtra.controls.horasConstrucao.hasError("min")?32:-1),c(5),b(t.form.controls.maoDeObraExtra.controls.horasMontagem.touched&&t.form.controls.maoDeObraExtra.controls.horasMontagem.hasError("min")?37:-1),c(),b(t.errorMessage()?38:-1)}}function Zr(n,i){if(n&1&&P(0,"app-projeto-placas-resumo",9),n&2){let e=g();C("summary",e.placasResumo())}}function Kr(n,i){if(n&1&&P(0,"app-projeto-fitas-resumo",9),n&2){let e=g();C("summary",e.fitasResumo())}}function Jr(n,i){if(n&1&&P(0,"app-projeto-corredicas-dobradicas-resumo",9),n&2){let e=g();C("summary",e.corredicasDobradicasResumo())}}function ea(n,i){if(n&1&&P(0,"app-projeto-orcamento-resumo",9)(1,"app-projeto-orcamento",43),n&2){let e=g();C("summary",e.orcamentoResumo()),c(),C("summary",e.orcamentoFinal())("margemLucroPercentualControl",e.form.controls.margemLucroPercentual)}}var ho=class n{projetosDb=m(mn);placasDb=m(cn);fitasDb=m(ln);corredicasDobradicasDb=m(sn);maoDeObraDb=m(dn);route=m(Ui);router=m(Xi);loading=U(!1);saving=U(!1);errorMessage=U(null);placas=U([]);fitasCatalogo=U([]);corredicasDobradicasCatalogo=U([]);maoDeObraConfig=U(null);expandedMovelIds=U([]);editingId=U(this.route.snapshot.paramMap.get("id"));isEditing=O(()=>this.editingId()!==null);pageTitle=O(()=>this.isEditing()?"Editar projeto":"Novo projeto");pageDescription=O(()=>this.isEditing()?"Atualize os m\xF3veis e as pe\xE7as de placas do projeto selecionado.":"Cadastre um projeto com seus m\xF3veis e pe\xE7as de placas.");formTitle=O(()=>this.isEditing()?"Atualizar projeto":"Cadastrar projeto");submitLabel=O(()=>this.saving()?"Salvando...":this.isEditing()?"Atualizar projeto":"Cadastrar projeto");form=new Ie({nome:new F("",{nonNullable:!0,validators:[I.required]}),maoDeObraExtra:new Ie({horasConstrucao:new F(0,{validators:[I.min(0)]}),horasMontagem:new F(0,{validators:[I.min(0)]})}),margemLucroPercentual:new F(0,{validators:[I.min(0)]}),moveis:new ct([])});formSnapshot=pn(this.form.valueChanges.pipe(Ee(this.form.getRawValue()),bt(()=>this.form.getRawValue())),{initialValue:this.form.getRawValue()});placasResumo=O(()=>ta(this.formSnapshot().moveis,this.placas()));fitasResumo=O(()=>ia(this.formSnapshot().moveis,this.fitasCatalogo()));corredicasDobradicasResumo=O(()=>aa(this.formSnapshot().moveis,this.corredicasDobradicasCatalogo()));orcamentoResumo=O(()=>na(this.placasResumo(),this.fitasResumo(),this.corredicasDobradicasResumo(),oa(this.formSnapshot().moveis,this.formSnapshot().maoDeObraExtra,this.maoDeObraConfig())));orcamentoFinal=O(()=>ra(this.orcamentoResumo().totalGeral,this.formSnapshot().margemLucroPercentual));constructor(){this.initialize()}moveis(){return this.form.controls.moveis.controls}maoDeObraExtraProjeto(){return this.form.controls.maoDeObraExtra}itens(i){return i.controls.itens.controls}fitasProjeto(i){return i.controls.fitas.controls}corredicasDobradicasProjeto(i){return i.controls.corredicasDobradicas.controls}filteredPlacas(i){let e=(i??"").trim().toLocaleLowerCase("pt-BR");return e?this.placas().filter(t=>t.nome.toLocaleLowerCase("pt-BR").includes(e)):this.placas()}filteredFitas(i){let e=(i??"").trim().toLocaleLowerCase("pt-BR");return e?this.fitasCatalogo().filter(t=>t.nome.toLocaleLowerCase("pt-BR").includes(e)):this.fitasCatalogo()}filteredCorredicasDobradicas(i){let e=(i??"").trim().toLocaleLowerCase("pt-BR");return e?this.corredicasDobradicasCatalogo().filter(t=>t.nome.toLocaleLowerCase("pt-BR").includes(e)):this.corredicasDobradicasCatalogo()}itemSquareMeters(i){return _o(i.controls.alturaMm.value,i.controls.larguraMm.value)}fitaMeters(i){return Jt(i.controls.metragemMm.value)}addMovel(i){let e=this.createMovelGroup(i);this.form.controls.moveis.push(e),this.setMovelExpanded(e,!0)}removeMovel(i){let e=this.form.controls.moveis.at(i);this.form.controls.moveis.removeAt(i),e&&this.expandedMovelIds.update(t=>t.filter(o=>o!==e.controls.id.value))}expandAllMoveis(){this.expandedMovelIds.set(this.moveis().map(i=>i.controls.id.value))}collapseAllMoveis(){this.expandedMovelIds.set([])}isMovelExpanded(i){return this.expandedMovelIds().includes(i.controls.id.value)}setMovelExpanded(i,e){let t=i.controls.id.value;this.expandedMovelIds.update(o=>{let r=o.includes(t);return e?r?o:[...o,t]:r?o.filter(d=>d!==t):o})}addItem(i){i.controls.itens.push(this.createItemGroup())}addFita(i,e){i.controls.fitas.push(this.createFitaGroup(e))}addCorredicaDobradica(i,e){i.controls.corredicasDobradicas.push(this.createCorredicaDobradicaGroup(e))}removeItem(i,e){i.controls.itens.removeAt(e)}removeFita(i,e){i.controls.fitas.removeAt(e)}removeCorredicaDobradica(i,e){i.controls.corredicasDobradicas.removeAt(e)}clearSelectedPlaca(i){i.controls.placaId.setValue("")}clearSelectedFita(i){i.controls.fitaId.setValue("")}clearSelectedCorredicaDobradica(i){i.controls.itemId.setValue("")}selectPlacaByName(i,e){let t=this.placas().find(o=>o.nome===e);i.controls.placaId.setValue(t?.id??""),i.controls.placaNome.setValue(t?.nome??e)}selectFitaByName(i,e){let t=this.fitasCatalogo().find(o=>o.nome===e);i.controls.fitaId.setValue(t?.id??""),i.controls.fitaNome.setValue(t?.nome??e)}selectCorredicaDobradicaByName(i,e){let t=this.corredicasDobradicasCatalogo().find(o=>o.nome===e);i.controls.itemId.setValue(t?.id??""),i.controls.itemNome.setValue(t?.nome??e)}async save(){if(this.synchronizeResolvedPlacas(),this.synchronizeResolvedFitas(),this.synchronizeResolvedCorredicasDobradicas(),this.markAllAsTouched(),this.form.invalid||this.form.controls.moveis.length===0||!this.hasValidNestedData()){this.errorMessage.set("Preencha o projeto, os m\xF3veis e as pe\xE7as de placas corretamente antes de salvar.");return}let i=this.form.getRawValue(),e=i.nome.trim();this.saving.set(!0),this.errorMessage.set(null);try{await this.projetosDb.save({id:this.editingId()??void 0,nome:e,moveis:this.serializeMoveis(),maoDeObraExtra:uo(i.maoDeObraExtra),margemLucroPercentual:i.margemLucroPercentual??0}),await this.router.navigateByUrl("/projetos")}catch{this.errorMessage.set("N\xE3o foi poss\xEDvel salvar o projeto no banco local do navegador.")}finally{this.saving.set(!1)}}resetForm(){this.errorMessage.set(null),this.form.reset({nome:"",maoDeObraExtra:{horasConstrucao:0,horasMontagem:0},margemLucroPercentual:0}),this.form.controls.moveis.clear(),this.expandedMovelIds.set([]),this.addMovel(),this.form.markAsPristine(),this.form.markAsUntouched()}async initialize(){this.loading.set(!0),this.errorMessage.set(null);try{this.placas.set(await this.placasDb.list()),this.fitasCatalogo.set(await this.fitasDb.list()),this.corredicasDobradicasCatalogo.set(await this.corredicasDobradicasDb.list()),this.maoDeObraConfig.set(await this.maoDeObraDb.getConfig()??null),await this.loadForEditIfNeeded(),this.form.controls.moveis.length===0&&this.addMovel()}catch{this.errorMessage.set("N\xE3o foi poss\xEDvel carregar os dados necess\xE1rios para o projeto.")}finally{this.loading.set(!1)}}async loadForEditIfNeeded(){let i=this.editingId();if(!i)return;let e=await this.projetosDb.getById(i);if(!e){this.errorMessage.set("O projeto solicitado n\xE3o foi encontrado.");return}this.form.controls.nome.setValue(e.nome),this.form.controls.maoDeObraExtra.setValue(e.maoDeObraExtra),this.form.controls.margemLucroPercentual.setValue(e.margemLucroPercentual),this.form.controls.moveis.clear(),this.expandedMovelIds.set([]);for(let t of e.moveis)this.addMovel(t);this.form.markAsPristine(),this.form.markAsUntouched()}createMovelGroup(i){let e=new ct(i?.itens.length?i.itens.map(d=>this.createItemGroup(d)):[this.createItemGroup()]),t=new ct(i?.fitas.length?i.fitas.map(d=>this.createFitaGroup(d)):[]),o=new ct(i?.corredicasDobradicas.length?i.corredicasDobradicas.map(d=>this.createCorredicaDobradicaGroup(d)):[]),r=new Ie({horasConstrucao:new F(i?.maoDeObra.horasConstrucao??0,{validators:[I.min(0)]}),horasMontagem:new F(i?.maoDeObra.horasMontagem??0,{validators:[I.min(0)]})});return new Ie({id:new F(i?.id??crypto.randomUUID(),{nonNullable:!0}),nome:new F(i?.nome??"",{nonNullable:!0,validators:[I.required]}),itens:e,fitas:t,corredicasDobradicas:o,maoDeObra:r})}createItemGroup(i){return new Ie({id:new F(i?.id??crypto.randomUUID(),{nonNullable:!0}),placaId:new F(i?.placaId??"",{nonNullable:!0,validators:[I.required]}),placaNome:new F(i?.placaNome??"",{nonNullable:!0,validators:[I.required]}),alturaMm:new F(i?.alturaMm??null,{validators:[I.required,I.min(1)]}),larguraMm:new F(i?.larguraMm??null,{validators:[I.required,I.min(1)]})})}createFitaGroup(i){return new Ie({id:new F(i?.id??crypto.randomUUID(),{nonNullable:!0}),fitaId:new F(i?.fitaId??"",{nonNullable:!0,validators:[I.required]}),fitaNome:new F(i?.fitaNome??"",{nonNullable:!0,validators:[I.required]}),metragemMm:new F(i?.metragemMm??null,{validators:[I.required,I.min(1)]})})}createCorredicaDobradicaGroup(i){return new Ie({id:new F(i?.id??crypto.randomUUID(),{nonNullable:!0}),itemId:new F(i?.itemId??"",{nonNullable:!0,validators:[I.required]}),itemNome:new F(i?.itemNome??"",{nonNullable:!0,validators:[I.required]}),quantidade:new F(i?.quantidade??null,{validators:[I.required,I.min(1)]})})}serializeMoveis(){return this.moveis().map(i=>({id:i.controls.id.value,nome:i.controls.nome.value.trim(),itens:this.itens(i).map(e=>{let t=this.resolvePlaca(e);return{id:e.controls.id.value,placaId:t?.id??e.controls.placaId.value,placaNome:t?.nome??e.controls.placaNome.value.trim(),alturaMm:e.controls.alturaMm.value??0,larguraMm:e.controls.larguraMm.value??0,squareMeters:this.itemSquareMeters(e)}}),fitas:this.fitasProjeto(i).map(e=>{let t=this.resolveFita(e);return{id:e.controls.id.value,fitaId:t?.id??e.controls.fitaId.value,fitaNome:t?.nome??e.controls.fitaNome.value.trim(),metragemMm:e.controls.metragemMm.value??0}}),corredicasDobradicas:this.corredicasDobradicasProjeto(i).map(e=>{let t=this.resolveCorredicaDobradica(e);return{id:e.controls.id.value,itemId:t?.id??e.controls.itemId.value,itemNome:t?.nome??e.controls.itemNome.value.trim(),quantidade:e.controls.quantidade.value??0}}),maoDeObra:uo(i.controls.maoDeObra.getRawValue())}))}hasValidNestedData(){return this.moveis().every(i=>{let e=!!i.controls.nome.value.trim(),t=this.itens(i),o=this.fitasProjeto(i);return e&&t.length>0&&t.every(r=>this.resolvePlaca(r)!==void 0)&&o.every(r=>this.resolveFita(r)!==void 0)&&this.corredicasDobradicasProjeto(i).every(r=>this.resolveCorredicaDobradica(r)!==void 0)})}resolvePlaca(i){let e=i.controls.placaId.value;if(e)return this.placas().find(o=>o.id===e);let t=i.controls.placaNome.value.trim().toLocaleLowerCase("pt-BR");if(t)return this.placas().find(o=>o.nome.trim().toLocaleLowerCase("pt-BR")===t)}resolveFita(i){let e=i.controls.fitaId.value;if(e)return this.fitasCatalogo().find(o=>o.id===e);let t=i.controls.fitaNome.value.trim().toLocaleLowerCase("pt-BR");if(t)return this.fitasCatalogo().find(o=>o.nome.trim().toLocaleLowerCase("pt-BR")===t)}resolveCorredicaDobradica(i){let e=i.controls.itemId.value;if(e)return this.corredicasDobradicasCatalogo().find(o=>o.id===e);let t=i.controls.itemNome.value.trim().toLocaleLowerCase("pt-BR");if(t)return this.corredicasDobradicasCatalogo().find(o=>o.nome.trim().toLocaleLowerCase("pt-BR")===t)}synchronizeResolvedPlacas(){for(let i of this.moveis())for(let e of this.itens(i)){let t=this.resolvePlaca(e);t&&(e.controls.placaId.setValue(t.id),e.controls.placaNome.setValue(t.nome))}}synchronizeResolvedFitas(){for(let i of this.moveis())for(let e of this.fitasProjeto(i)){let t=this.resolveFita(e);t&&(e.controls.fitaId.setValue(t.id),e.controls.fitaNome.setValue(t.nome))}}synchronizeResolvedCorredicasDobradicas(){for(let i of this.moveis())for(let e of this.corredicasDobradicasProjeto(i)){let t=this.resolveCorredicaDobradica(e);t&&(e.controls.itemId.setValue(t.id),e.controls.itemNome.setValue(t.nome))}}markAllAsTouched(){this.form.markAllAsTouched();for(let i of this.moveis()){i.markAllAsTouched();for(let e of this.itens(i))e.markAllAsTouched();for(let e of this.fitasProjeto(i))e.markAllAsTouched();for(let e of this.corredicasDobradicasProjeto(i))e.markAllAsTouched()}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["app-projeto-form-page"]],decls:27,vars:11,consts:[["placaAutocomplete","matAutocomplete"],["fitaAutocomplete","matAutocomplete"],["corredicaDobradicaAutocomplete","matAutocomplete"],["aria-labelledby","projeto-form-heading",1,"page-shell"],[1,"page-header"],["id","projeto-form-heading"],["mat-button","","routerLink","/projetos"],[1,"feedback"],["id","projeto-form",1,"projeto-form",3,"formGroup"],[3,"summary"],[1,"form-actions","page-end-actions"],["mat-raised-button","","color","primary","type","submit","form","projeto-form",3,"disabled"],["mat-button","","type","button",3,"click","disabled"],["id","projeto-form",1,"projeto-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","nome","maxlength","120"],["aria-labelledby","moveis-heading",1,"nested-section"],[1,"section-header"],["id","moveis-heading"],[1,"section-actions"],["mat-button","","type","button",3,"click"],["multi","",1,"moveis-accordion"],[1,"movel-panel",3,"expanded"],["aria-labelledby","mao-de-obra-extra-heading",1,"nested-section"],["id","mao-de-obra-extra-heading"],[1,"feedback","labor-feedback"],[1,"labor-grid",3,"formGroup"],["matInput","","type","number","min","0","step","0.25","formControlName","horasConstrucao"],["matInput","","type","number","min","0","step","0.25","formControlName","horasMontagem"],["aria-live","polite",1,"feedback","error-message"],[1,"movel-panel",3,"opened","closed","expanded"],[1,"movel-card-content"],[1,"movel-header"],["matInput","","maxlength","120",3,"formControl"],[1,"item-grid"],[1,"fita-grid"],[1,"ferragem-grid"],["matInput","",3,"input","formControl","matAutocomplete"],[3,"optionSelected"],[3,"value"],["matInput","","type","number","min","1","step","1",3,"formControl"],["matInput","","readonly","","aria-readonly","true",3,"value"],[1,"item-actions"],[3,"summary","margemLucroPercentualControl"]],template:function(e,t){e&1&&(s(0,"section",3)(1,"header",4)(2,"div")(3,"h1",5),l(4),a(),s(5,"p"),l(6),a()(),s(7,"a",6),l(8,"Voltar para listagem"),a()(),s(9,"mat-card")(10,"mat-card-header")(11,"mat-card-title"),l(12),a(),s(13,"mat-card-subtitle"),l(14," Cada m\xF3vel pode conter placas, fitas e corredi\xE7as/dobradi\xE7as. "),a()(),s(15,"mat-card-content"),v(16,vr,2,0,"p",7)(17,Qr,39,10,"form",8),a()(),v(18,Zr,1,1,"app-projeto-placas-resumo",9),v(19,Kr,1,1,"app-projeto-fitas-resumo",9),v(20,Jr,1,1,"app-projeto-corredicas-dobradicas-resumo",9),v(21,ea,2,3),s(22,"div",10)(23,"button",11),l(24),a(),s(25,"button",12),S("click",function(){return t.resetForm()}),l(26," Limpar "),a()()()),e&2&&(c(4),x(t.pageTitle()),c(2),x(t.pageDescription()),c(6),x(t.formTitle()),c(4),b(t.loading()?16:17),c(2),b(t.placasResumo().length>0?18:-1),c(),b(t.fitasResumo().length>0?19:-1),c(),b(t.corredicasDobradicasResumo().length>0?20:-1),c(),b(t.placasResumo().length>0||t.fitasResumo().length>0||t.corredicasDobradicasResumo().length>0?21:-1),c(2),C("disabled",t.saving()),c(),E(" ",t.submitLabel()," "),c(),C("disabled",t.saving()))},dependencies:[Kn,Zn,Qe,yi,an,rn,_e,ce,pe,ue,he,me,so,ao,wi,Mi,ro,oo,Ot,Rt,kt,Et,Tt,Dt,Gt,$t,Yt,Qt,Zt,Pt,fn,hn,gn,un,_n,Cn,xn,vn,yn,bn,Gi,de,Se],styles:[".page-shell[_ngcontent-%COMP%]{display:grid;gap:1.5rem}.page-header[_ngcontent-%COMP%], .section-header[_ngcontent-%COMP%], .movel-header[_ngcontent-%COMP%], .form-actions[_ngcontent-%COMP%]{align-items:start;display:flex;gap:1rem;justify-content:space-between}.section-actions[_ngcontent-%COMP%]{align-items:center;display:flex;flex-wrap:wrap;gap:.5rem;justify-content:flex-end}.page-end-actions[_ngcontent-%COMP%]{justify-content:flex-end}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .feedback[_ngcontent-%COMP%], .editing-id[_ngcontent-%COMP%], .nested-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .nested-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.projeto-form[_ngcontent-%COMP%], .nested-section[_ngcontent-%COMP%]{display:grid;gap:1rem}.movel-card-content[_ngcontent-%COMP%]{display:grid;gap:1rem;margin-top:1rem}.moveis-accordion[_ngcontent-%COMP%]{display:grid;gap:1rem}.movel-panel[_ngcontent-%COMP%]{overflow:hidden}.item-grid[_ngcontent-%COMP%]{align-items:start;border:1px solid color-mix(in srgb,var(--mat-sys-outline) 30%,transparent);border-radius:1rem;display:grid;gap:1rem;grid-template-columns:repeat(4,minmax(0,1fr)) auto;padding:1rem}.fita-grid[_ngcontent-%COMP%]{align-items:start;border:1px solid color-mix(in srgb,var(--mat-sys-outline) 30%,transparent);border-radius:1rem;display:grid;gap:1rem;grid-template-columns:repeat(3,minmax(0,1fr)) auto;padding:1rem}.ferragem-grid[_ngcontent-%COMP%]{align-items:start;border:1px solid color-mix(in srgb,var(--mat-sys-outline) 30%,transparent);border-radius:1rem;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr)) auto;padding:1rem}.labor-grid[_ngcontent-%COMP%]{display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr))}.labor-feedback[_ngcontent-%COMP%]{margin-top:-.5rem}.item-actions[_ngcontent-%COMP%]{align-items:center;display:flex;min-height:3.5rem}.editing-id[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--mat-sys-primary) 12%,transparent);border-radius:.75rem;color:var(--mat-sys-primary);padding:.75rem 1rem}.feedback[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}.error-message[_ngcontent-%COMP%]{color:var(--mat-sys-error)}@media(max-width:960px){.item-grid[_ngcontent-%COMP%], .fita-grid[_ngcontent-%COMP%], .ferragem-grid[_ngcontent-%COMP%], .labor-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:720px){.page-header[_ngcontent-%COMP%], .section-header[_ngcontent-%COMP%], .movel-header[_ngcontent-%COMP%], .form-actions[_ngcontent-%COMP%], .section-actions[_ngcontent-%COMP%]{align-items:stretch;flex-direction:column}.item-grid[_ngcontent-%COMP%], .fita-grid[_ngcontent-%COMP%], .ferragem-grid[_ngcontent-%COMP%], .labor-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0})};function ta(n,i){let e=new Map;for(let t of n)for(let o of t.itens){let r=sa(o,i);if(!r)continue;let d=_o(o.alturaMm,o.larguraMm),p=e.get(r.id),h=(p?.projetoSquareMeters??0)+d,w=(p?.quantidadePecas??0)+1,f=r.squareMeters>0?Math.ceil(h/r.squareMeters):0,M=f*r.squareMeters,G=Math.max(M-h,0);e.set(r.id,{placaId:r.id,nome:r.nome,placaSquareMeters:r.squareMeters,placaValor:r.preco,projetoSquareMeters:h,quantidadePecas:w,quantidadePlacas:f,purchasedSquareMeters:M,wasteSquareMeters:G,valorTotal:f*r.preco})}return Array.from(e.values()).sort((t,o)=>t.nome.localeCompare(o.nome,"pt-BR"))}function ia(n,i){let e=new Map;for(let t of n)for(let o of t.fitas){let r=la(o,i);if(!r)continue;let p=(e.get(r.id)?.projetoMetragemMetros??0)*1e3+(o.metragemMm??0),h=Jt(p),w=r.metragemMm>0?Math.ceil(p/r.metragemMm):0,f=Jt(w*r.metragemMm),M=Math.max(f-h,0);e.set(r.id,{fitaId:r.id,nome:r.nome,fitaMetragemMetros:Jt(r.metragemMm),fitaValor:r.valor,projetoMetragemMetros:h,quantidadeFitas:w,purchasedMetragemMetros:f,wasteMetragemMetros:M,valorTotal:w*r.valor})}return Array.from(e.values()).sort((t,o)=>t.nome.localeCompare(o.nome,"pt-BR"))}function na(n,i,e,t){let o=n.reduce((p,h)=>p+h.valorTotal,0),r=i.reduce((p,h)=>p+h.valorTotal,0),d=e.reduce((p,h)=>p+h.valorTotal,0);return{placasTotal:o,fitasTotal:r,corredicasDobradicasTotal:d,maoDeObraTotal:t.valorTotal,totalGeral:o+r+d+t.valorTotal,placasSquareMeters:n.reduce((p,h)=>p+h.projetoSquareMeters,0),fitasMetragemMetros:i.reduce((p,h)=>p+h.projetoMetragemMetros,0),quantidadePlacas:n.reduce((p,h)=>p+h.quantidadePlacas,0),quantidadeFitas:i.reduce((p,h)=>p+h.quantidadeFitas,0),quantidadeCorredicasDobradicas:e.reduce((p,h)=>p+h.quantidade,0),horasConstrucao:t.horasConstrucao,horasMontagem:t.horasMontagem}}function oa(n,i,e){let t=n.reduce((d,p)=>({horasConstrucao:d.horasConstrucao+(p.maoDeObra.horasConstrucao??0),horasMontagem:d.horasMontagem+(p.maoDeObra.horasMontagem??0)}),{horasConstrucao:0,horasMontagem:0}),o=t.horasConstrucao+(i.horasConstrucao??0),r=t.horasMontagem+(i.horasMontagem??0);return e?{horasConstrucao:o,horasMontagem:r,valorTotal:o*e.valorHoraConstrucao+r*e.valorHoraMontagem}:{horasConstrucao:o,horasMontagem:r,valorTotal:0}}function uo(n){return{horasConstrucao:Math.max(n.horasConstrucao??0,0),horasMontagem:Math.max(n.horasMontagem??0,0)}}function ra(n,i){let e=Math.max(i??0,0),t=n*(e/100);return{custoTotal:n,margemLucroPercentual:e,valorMargem:t,valorFinal:n+t}}function aa(n,i){let e=new Map;for(let t of n)for(let o of t.corredicasDobradicas){let r=da(o,i);if(!r)continue;let p=(e.get(r.id)?.quantidade??0)+(o.quantidade??0);e.set(r.id,{itemId:r.id,nome:r.nome,valorUnitario:r.valorUnitario,quantidade:p,valorTotal:p*r.valorUnitario})}return Array.from(e.values()).sort((t,o)=>t.nome.localeCompare(o.nome,"pt-BR"))}function sa(n,i){if(n.placaId)return i.find(t=>t.id===n.placaId);let e=Je(n.placaNome);if(e)return i.find(t=>Je(t.nome)===e)}function la(n,i){if(n.fitaId)return i.find(t=>t.id===n.fitaId);let e=Je(n.fitaNome);if(e)return i.find(t=>Je(t.nome)===e)}function da(n,i){if(n.itemId)return i.find(t=>t.id===n.itemId);let e=Je(n.itemNome);if(e)return i.find(t=>Je(t.nome)===e)}function _o(n,i){return!n||!i||n<=0||i<=0?0:n*i/1e6}function Jt(n){return!n||n<=0?0:n/1e3}function Je(n){return(n??"").trim().toLocaleLowerCase("pt-BR")}export{ho as ProjetoFormPageComponent};
