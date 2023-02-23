import{au as x,a as I,cG as M,b7 as k,bs as b,aE as $,b as U,s as N,f as O,aw as r,o as n,h as S,n as t,z as m,j as h,l as g,i as a,q as s,t as A,F as E,c as P,aN as R}from"./index.e3f30c55.js";import{D as V}from"./siteSetting.68e5b367.js";import{c as C,u as z}from"./index.fdeb4de6.js";import{b as B}from"./index.316adb4b.js";import{h as T}from"./header.d801b988.js";import"./FullscreenOutlined.edd56a8c.js";import"./index.5b3b1e42.js";import"./useWindowSizeFn.7ce1f350.js";import"./useContentViewHeight.f1af3d9b.js";import"./uniqBy.2f742e02.js";import"./_baseIteratee.d85adb84.js";import"./get.5fbe7494.js";import"./index.2438de3e.js";import"./index.044bf4a5.js";import"./useRefs.e708542e.js";import"./PlusOutlined.15dab860.js";import"./RedoOutlined.7fdf392d.js";import"./index.b9355d30.js";import"./lock.126a6f65.js";const F=I({name:"UserDropdown",components:{Dropdown:M,Menu:k,MenuItem:C(()=>b(()=>import("./DropMenuItem.3f4ffbcf.js"),["assets/DropMenuItem.3f4ffbcf.js","assets/index.e3f30c55.js","assets/index.3e9a5c09.css"])),MenuDivider:k.Divider,LockAction:C(()=>b(()=>import("./LockModal.324c349d.js"),["assets/LockModal.324c349d.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.e3f30c55.js","assets/index.3e9a5c09.css","assets/index.316adb4b.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.7ce1f350.js","assets/FullscreenOutlined.edd56a8c.js","assets/BasicForm.ed86efe5.js","assets/BasicForm.fca7963c.css","assets/FormItem.vue_vue_type_script_lang.7b9be6e6.js","assets/index.8d35092d.js","assets/index.3a3c1369.css","assets/componentMap.01f0ce6e.js","assets/componentMap.08c8b028.css","assets/index.2678217d.js","assets/index.cb0992d5.css","assets/Checkbox.656e1db7.js","assets/index.59cf3b53.js","assets/index.695a0c50.css","assets/index.addfe94d.js","assets/index.9a4d3b51.css","assets/index.1a2edb77.js","assets/index.49ada229.css","assets/index.069489b5.js","assets/index.47f7c782.css","assets/index.a0337c99.js","assets/index.579bd49e.css","assets/index.2df10aa4.js","assets/index.ff4ce442.css","assets/useFormItem.cf111819.js","assets/RadioButtonGroup.25de5002.js","assets/get.5fbe7494.js","assets/index.525fac41.js","assets/index.560eb672.css","assets/eagerComputed.ad2f1ebf.js","assets/index.def48a32.js","assets/index.aeeee80c.css","assets/_baseIteratee.d85adb84.js","assets/DeleteOutlined.59f01a92.js","assets/index.a43cf7b9.js","assets/index.8f5fe29a.css","assets/useRefs.e708542e.js","assets/Form.4f363030.js","assets/Col.2dc850f4.js","assets/useFlexGapSupport.153cff5a.js","assets/useSize.20ea1e36.js","assets/transButton.cb4b83f4.js","assets/index.be87f19c.js","assets/index.cd256673.css","assets/index.b8269de0.js","assets/index.9d09be4d.css","assets/index.e1777527.js","assets/index.b1363280.css","assets/isNumber.eb231e79.js","assets/uuid.2b29000c.js","assets/download.7a145835.js","assets/base64Conver.08b9f4ec.js","assets/index.a5b66f28.js","assets/index.cb030764.css","assets/index.fe73d8a5.js","assets/index.7b8b5e30.css","assets/index.e2fc098a.js","assets/uniqBy.2f742e02.js","assets/index.eaac2b21.js","assets/useForm.b7625331.js","assets/lock.126a6f65.js","assets/header.d801b988.js"]))},props:{theme:$.oneOf(["dark","light"])},setup(){const{prefixCls:e}=U("header-user-dropdown"),{t:f}=P(),{getShowDoc:_,getUseLockPage:v}=z(),d=N(),w=O(()=>{const{realName:u="",avatar:y,desc:L}=d.getUserInfo||{};return{realName:u,avatar:y||T,desc:L}}),[o,{openModal:i}]=B();function p(){i(!0)}function l(){d.confirmLoginOut()}function c(){R(V)}function D(u){switch(u.key){case"logout":l();break;case"doc":c();break;case"lock":p();break}}return{prefixCls:e,t:f,getUserInfo:w,handleMenuClick:D,getShowDoc:_,register:o,getUseLockPage:v}}}),j=["src"];function q(e,f,_,v,d,w){const o=r("MenuItem"),i=r("MenuDivider"),p=r("Menu"),l=r("Dropdown"),c=r("LockAction");return n(),S(E,null,[t(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[t(p,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(n(),h(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(n(),h(i,{key:1})):g("",!0),e.getUseLockPage?(n(),h(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),t(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},A(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),t(c,{onRegister:e.register},null,8,["onRegister"])],64)}var le=x(F,[["render",q]]);export{le as default};
