import{U as M,ak as G,a as J,G as c,J as R,v as x,c6 as m,R as U,S as l,n as o,c7 as W,$ as X,ck as q,dX as K,x as Q,y as Y,T as F,dW as Z,ab as ee,d_ as ae,ad as te,ac as ne,d$ as oe,e0 as re,e1 as le,e2 as ie}from"./index.e3f30c55.js";var ce={success:ee,info:ae,error:te,warning:ne},se={success:oe,info:re,error:le,warning:ie},de=G("success","info","warning","error"),fe=function(){return{type:c.oneOf(de),closable:{type:Boolean,default:void 0},closeText:c.any,message:c.any,description:c.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:c.any,closeIcon:c.any,onClose:Function}},ue=J({name:"AAlert",inheritAttrs:!1,props:fe(),setup:function(a,u){var i=u.slots,P=u.emit,b=u.attrs,S=u.expose,C=R("alert",a),_=C.prefixCls,B=C.direction,s=x(!1),w=x(!1),I=x(),H=function(n){n.preventDefault();var r=I.value;r.style.height="".concat(r.offsetHeight,"px"),r.style.height="".concat(r.offsetHeight,"px"),s.value=!0,P("close",n)},k=function(){var n;s.value=!1,w.value=!0,(n=a.afterClose)===null||n===void 0||n.call(a)};S({animationEnd:k});var L=x({});return function(){var t,n,r=a.banner,z=a.closeIcon,T=z===void 0?(n=i.closeIcon)===null||n===void 0?void 0:n.call(i):z,h=a.closable,d=a.type,f=a.showIcon,y=m(i,a,"closeText"),p=m(i,a,"description"),A=m(i,a,"message"),g=m(i,a,"icon");f=r&&f===void 0?!0:f,d=r&&d===void 0?"warning":d||"info";var N=(p?se:ce)[d]||null;y&&(h=!0);var e=_.value,$=U(e,(t={},l(t,"".concat(e,"-").concat(d),!0),l(t,"".concat(e,"-closing"),s.value),l(t,"".concat(e,"-with-description"),!!p),l(t,"".concat(e,"-no-icon"),!f),l(t,"".concat(e,"-banner"),!!r),l(t,"".concat(e,"-closable"),h),l(t,"".concat(e,"-rtl"),B.value==="rtl"),t)),j=h?o("button",{type:"button",onClick:H,class:"".concat(e,"-close-icon"),tabindex:0},[y?o("span",{class:"".concat(e,"-close-text")},[y]):T===void 0?o(W,null,null):T]):null,V=g&&(X(g)?q(g,{class:"".concat(e,"-icon")}):o("span",{class:"".concat(e,"-icon")},[g]))||o(N,{class:"".concat(e,"-icon")},null),D=K("".concat(e,"-motion"),{appear:!1,css:!0,onAfterLeave:k,onBeforeLeave:function(v){v.style.maxHeight="".concat(v.offsetHeight,"px")},onLeave:function(v){v.style.maxHeight="0px"}});return w.value?null:o(Z,D,{default:function(){return[Q(o("div",F(F({role:"alert"},b),{},{style:[b.style,L.value],class:[b.class,$],"data-show":!s.value,ref:I}),[f?V:null,o("div",{class:"".concat(e,"-content")},[A?o("div",{class:"".concat(e,"-message")},[A]):null,p?o("div",{class:"".concat(e,"-description")},[p]):null]),j]),[[Y,!s.value]])]}})}}}),ge=M(ue);export{ge as A};
