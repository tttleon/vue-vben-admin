var f=(o,l,r)=>new Promise((c,a)=>{var d=e=>{try{t(r.next(e))}catch(i){a(i)}},s=e=>{try{t(r.throw(e))}catch(i){a(i)}},t=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,s);t((r=r.apply(o,l)).next())});import{au as w,a as C,b as y,s as $,f as _,aw as u,o as x,j as F,z as h,i as n,q as m,t as g,n as k,B as L,ax as M,c as S}from"./index.e3f30c55.js";import{B as I,a as N}from"./index.316adb4b.js";import{B as R}from"./BasicForm.ed86efe5.js";import"./componentMap.01f0ce6e.js";import{u as P}from"./useForm.b7625331.js";import"./RadioButtonGroup.25de5002.js";import{u as U}from"./lock.126a6f65.js";import{h as V}from"./header.d801b988.js";import"./useWindowSizeFn.7ce1f350.js";import"./FullscreenOutlined.edd56a8c.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.7b9be6e6.js";import"./index.8d35092d.js";import"./index.def48a32.js";import"./_baseIteratee.d85adb84.js";import"./get.5fbe7494.js";import"./DeleteOutlined.59f01a92.js";import"./index.a43cf7b9.js";import"./useRefs.e708542e.js";import"./Form.4f363030.js";import"./Col.2dc850f4.js";import"./useFlexGapSupport.153cff5a.js";import"./useSize.20ea1e36.js";import"./index.e2fc098a.js";import"./uniqBy.2f742e02.js";import"./index.eaac2b21.js";import"./index.2678217d.js";import"./Checkbox.656e1db7.js";import"./index.59cf3b53.js";import"./index.addfe94d.js";import"./index.1a2edb77.js";import"./index.069489b5.js";import"./index.a0337c99.js";import"./index.2df10aa4.js";import"./useFormItem.cf111819.js";import"./index.525fac41.js";import"./eagerComputed.ad2f1ebf.js";import"./transButton.cb4b83f4.js";import"./index.be87f19c.js";import"./index.b8269de0.js";import"./index.e1777527.js";import"./isNumber.eb231e79.js";import"./uuid.2b29000c.js";import"./download.7a145835.js";import"./base64Conver.08b9f4ec.js";import"./index.a5b66f28.js";import"./index.fe73d8a5.js";const q=C({name:"LockModal",components:{BasicModal:I,BasicForm:R},setup(){const{t:o}=S(),{prefixCls:l}=y("header-lock-modal"),r=$(),c=U(),a=_(()=>{var p;return(p=r.getUserInfo)==null?void 0:p.realName}),[d,{closeModal:s}]=N(),[t,{validateFields:e,resetFields:i}]=P({showActionButtonGroup:!1,schemas:[{field:"password",label:o("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const b=(yield e()).password;s(),c.setLockInfo({isLock:!0,pwd:b}),yield i()})}const B=_(()=>{const{avatar:p}=r.getUserInfo;return p||V});return{t:o,prefixCls:l,getRealName:a,register:d,registerForm:t,handleLock:v,avatar:B}}}),z=["src"];function D(o,l,r,c,a,d){const s=u("BasicForm"),t=u("a-button"),e=u("BasicModal");return x(),F(e,M({footer:null,title:o.t("layout.header.lockScreen")},o.$attrs,{class:o.prefixCls,onRegister:o.register}),{default:h(()=>[n("div",{class:m(`${o.prefixCls}__entry`)},[n("div",{class:m(`${o.prefixCls}__header`)},[n("img",{src:o.avatar,class:m(`${o.prefixCls}__header-img`)},null,10,z),n("p",{class:m(`${o.prefixCls}__header-name`)},g(o.getRealName),3)],2),k(s,{onRegister:o.registerForm},null,8,["onRegister"]),n("div",{class:m(`${o.prefixCls}__footer`)},[k(t,{type:"primary",block:"",class:"mt-2",onClick:o.handleLock},{default:h(()=>[L(g(o.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var Vo=w(q,[["render",D]]);export{Vo as default};
