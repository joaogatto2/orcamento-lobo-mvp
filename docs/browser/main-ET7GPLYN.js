import{b as R,d as F,e as N,f as S}from"./chunk-S5DTFGKV.js";import{$a as b,Aa as y,O as g,Pa as m,Qa as r,Ra as n,S as c,Sa as w,Sb as O,Tb as j,Xb as B,_ as v,_a as P,ab as k,cb as A,db as E,ea as M,jb as D,ka as C,kb as L,lb as i,oa as l,sb as s,vc as z,xc as H,ya as d,yb as _,yc as U,za as x,zb as T}from"./chunk-4PA7NNAL.js";function Y(t){let f=t,o=Math.floor(Math.abs(t)),e=t.toString().replace(/^[^.]*\.?/,"").length,a=parseInt(t.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return o===Math.floor(o)&&o>=0&&o<=1?1:a===0&&o!==0&&o%1e6===0&&e===0||!(a>=0&&a<=5)?4:5}var q=["pt",[["AM","PM"]],void 0,[["D","S","T","Q","Q","S","S"],["dom.","seg.","ter.","qua.","qui.","sex.","s\xE1b."],["domingo","segunda-feira","ter\xE7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xE1bado"],["dom.","seg.","ter.","qua.","qui.","sex.","s\xE1b."]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["jan.","fev.","mar.","abr.","mai.","jun.","jul.","ago.","set.","out.","nov.","dez."],["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]],void 0,[["a.C.","d.C."],void 0,["antes de Cristo","depois de Cristo"]],0,[6,0],["dd/MM/y","d 'de' MMM 'de' y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4\xA0#,##0.00","#E0"],"BRL","R$","Real brasileiro",{AUD:["AU$","$"],BYN:[void 0,"\u0440."],JPY:["JP\xA5","\xA5"],PHP:[void 0,"\u20B1"],PTE:["Esc."],RON:[void 0,"L"],SYP:[void 0,"S\xA3"],THB:["\u0E3F"],TWD:["NT$"],USD:["US$","$"]},"ltr",Y];var $=[{path:"",pathMatch:"full",redirectTo:"projetos"},{path:"projetos",loadComponent:()=>import("./chunk-3MSHDC6A.js").then(t=>t.ProjetosPageComponent),title:"Projetos"},{path:"projetos/novo",loadComponent:()=>import("./chunk-KGTPCUXS.js").then(t=>t.ProjetoFormPageComponent),title:"Novo projeto"},{path:"projetos/:id/editar",loadComponent:()=>import("./chunk-KGTPCUXS.js").then(t=>t.ProjetoFormPageComponent),title:"Editar projeto"},{path:"placas",loadComponent:()=>import("./chunk-OYI5ZHSQ.js").then(t=>t.PlacasPageComponent),title:"Placas"},{path:"placas/nova",loadComponent:()=>import("./chunk-265NE4ZE.js").then(t=>t.PlacaFormPageComponent),title:"Nova placa"},{path:"placas/:id/editar",loadComponent:()=>import("./chunk-265NE4ZE.js").then(t=>t.PlacaFormPageComponent),title:"Editar placa"},{path:"fitas",loadComponent:()=>import("./chunk-GZTHZX6W.js").then(t=>t.FitasPageComponent),title:"Fitas"},{path:"fitas/nova",loadComponent:()=>import("./chunk-DU6MVQSG.js").then(t=>t.FitaFormPageComponent),title:"Nova fita"},{path:"fitas/:id/editar",loadComponent:()=>import("./chunk-DU6MVQSG.js").then(t=>t.FitaFormPageComponent),title:"Editar fita"},{path:"corredicas-dobradicas",loadComponent:()=>import("./chunk-5M3JN52C.js").then(t=>t.CorredicasDobradicasPageComponent),title:"Corredi\xE7as/Dobradi\xE7as"},{path:"corredicas-dobradicas/nova",loadComponent:()=>import("./chunk-SG6G4H4V.js").then(t=>t.CorredicasDobradicasFormPageComponent),title:"Nova corredi\xE7a/dobradi\xE7a"},{path:"corredicas-dobradicas/:id/editar",loadComponent:()=>import("./chunk-SG6G4H4V.js").then(t=>t.CorredicasDobradicasFormPageComponent),title:"Editar corredi\xE7a/dobradi\xE7a"},{path:"mao-de-obra",loadComponent:()=>import("./chunk-BQN3L2UE.js").then(t=>t.MaoDeObraPageComponent),title:"M\xE3o de obra"},{path:"**",redirectTo:"projetos"}];var I={providers:[M(),S($),{provide:_,useValue:"pt-BR"},{provide:T,useValue:"BRL"}]};var W=["*",[["mat-toolbar-row"]]],K=["*","mat-toolbar-row"],X=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275dir=y({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),Q=(()=>{class t{_elementRef=c(C);_platform=c(B);_document=c(v);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["mat-toolbar"]],contentQueries:function(e,a,V){if(e&1&&k(V,X,5),e&2){let h;A(h=E())&&(a._toolbarRows=h)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,a){e&2&&(L(a.color?"mat-"+a.color:""),D("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:K,decls:2,vars:0,template:function(e,a){e&1&&(P(W),b(0),b(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var J=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=x({type:t});static \u0275inj=g({imports:[z]})}return t})();var p=()=>({exact:!0}),u=class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["app-root"]],decls:16,vars:10,consts:[[1,"app-toolbar"],[1,"app-title"],["aria-label","Navegacao principal",1,"app-nav"],["matButton","","routerLink","/projetos","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["matButton","","routerLink","/placas","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["matButton","","routerLink","/fitas","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["matButton","","routerLink","/corredicas-dobradicas","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["matButton","","routerLink","/mao-de-obra","routerLinkActive","active-link",3,"routerLinkActiveOptions"],[1,"app-content"]],template:function(o,e){o&1&&(r(0,"mat-toolbar",0)(1,"span",1),i(2,"Orcamento Lobo"),n(),r(3,"nav",2)(4,"a",3),i(5," Projetos "),n(),r(6,"a",4),i(7," Placas "),n(),r(8,"a",5),i(9," Fitas "),n(),r(10,"a",6),i(11," Corredi\xE7as/Dobradi\xE7as "),n(),r(12,"a",7),i(13," M\xE3o de obra "),n()()(),r(14,"main",8),w(15,"router-outlet"),n()),o&2&&(l(4),m("routerLinkActiveOptions",s(5,p)),l(2),m("routerLinkActiveOptions",s(6,p)),l(2),m("routerLinkActiveOptions",s(7,p)),l(2),m("routerLinkActiveOptions",s(8,p)),l(2),m("routerLinkActiveOptions",s(9,p)))},dependencies:[U,H,J,Q,F,N,R],styles:["[_nghost-%COMP%]{display:block;min-height:100%}.app-toolbar[_ngcontent-%COMP%]{align-items:center;display:flex;gap:1rem;justify-content:space-between;padding-inline:1rem}.app-title[_ngcontent-%COMP%]{font:var(--mat-sys-title-large);font-weight:600}.app-nav[_ngcontent-%COMP%]{display:flex;gap:.5rem}.active-link[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--mat-sys-primary) 16%,transparent)}.app-content[_ngcontent-%COMP%]{box-sizing:border-box;min-height:calc(100vh - 64px);padding:1.5rem}@media(max-width:599px){.app-toolbar[_ngcontent-%COMP%]{min-height:auto;padding-block:.75rem}.app-content[_ngcontent-%COMP%]{min-height:calc(100vh - 80px);padding:1rem}}"],changeDetection:0})};O(q,"pt-BR");j(u,I).catch(t=>console.error(t));
