var B=(e,l,t)=>new Promise((s,a)=>{var m=o=>{try{i(t.next(o))}catch(p){a(p)}},u=o=>{try{i(t.throw(o))}catch(p){a(p)}},i=o=>o.done?s(o.value):Promise.resolve(o.value).then(m,u);i((t=t.apply(e,l)).next())});import{B as h}from"./BasicForm.ed86efe5.js";import"./componentMap.01f0ce6e.js";import{u as f}from"./useForm.b7625331.js";import"./RadioButtonGroup.25de5002.js";import{au as C,a as F,cD as P,aw as c,o as g,j as _,z as r,i as k,n,B as d}from"./index.e3f30c55.js";import{P as w}from"./index.24e5abae.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.7b9be6e6.js";import"./index.8d35092d.js";import"./index.def48a32.js";import"./_baseIteratee.d85adb84.js";import"./get.5fbe7494.js";import"./DeleteOutlined.59f01a92.js";import"./index.a43cf7b9.js";import"./useRefs.e708542e.js";import"./Form.4f363030.js";import"./Col.2dc850f4.js";import"./useFlexGapSupport.153cff5a.js";import"./useSize.20ea1e36.js";import"./index.e2fc098a.js";import"./uniqBy.2f742e02.js";import"./index.316adb4b.js";import"./useWindowSizeFn.7ce1f350.js";import"./FullscreenOutlined.edd56a8c.js";import"./index.eaac2b21.js";import"./index.2678217d.js";import"./Checkbox.656e1db7.js";import"./index.59cf3b53.js";import"./index.addfe94d.js";import"./index.1a2edb77.js";import"./index.069489b5.js";import"./index.a0337c99.js";import"./index.2df10aa4.js";import"./useFormItem.cf111819.js";import"./index.525fac41.js";import"./eagerComputed.ad2f1ebf.js";import"./transButton.cb4b83f4.js";import"./index.be87f19c.js";import"./index.b8269de0.js";import"./index.e1777527.js";import"./isNumber.eb231e79.js";import"./uuid.2b29000c.js";import"./download.7a145835.js";import"./base64Conver.08b9f4ec.js";import"./index.a5b66f28.js";import"./index.fe73d8a5.js";import"./index.1d408a24.js";import"./index.e5a6dfa1.js";import"./useContentViewHeight.f1af3d9b.js";import"./ArrowLeftOutlined.01022efa.js";import"./index.9a11f541.js";const b=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},labelWidth:200}],A=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:()=>B(void 0,null,function*(){const{validate:l}=e,t=yield l()})})}],W=F({components:{BasicForm:h,CollapseContainer:P,PageWrapper:w},setup(){const[e,{setProps:l,updateSchema:t,appendSchemaByField:s,removeSchemaByField:a}]=f({labelWidth:120,schemas:b,actionColOptions:{span:24}}),[m]=f({labelWidth:120,schemas:A,actionColOptions:{span:24}});function u(){t({field:"field3",label:"\u5B57\u6BB53 New"})}function i(){t([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function o(){s({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function p(){a("field11")}return{register:e,register1:m,schemas:b,setProps:l,changeLabel3:u,changeLabel34:i,appendField:o,deleteField:p}}}),D={class:"mb-4"};function E(e,l,t,s,a,m){const u=c("a-button"),i=c("BasicForm"),o=c("CollapseContainer"),p=c("PageWrapper");return g(),_(p,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B"},{default:r(()=>[k("div",D,[n(u,{onClick:e.changeLabel3,class:"mr-2"},{default:r(()=>[d(" \u66F4\u6539\u5B57\u6BB53label ")]),_:1},8,["onClick"]),n(u,{onClick:e.changeLabel34,class:"mr-2"},{default:r(()=>[d(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label ")]),_:1},8,["onClick"]),n(u,{onClick:e.appendField,class:"mr-2"},{default:r(()=>[d(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 ")]),_:1},8,["onClick"]),n(u,{onClick:e.deleteField,class:"mr-2"},{default:r(()=>[d(" \u5220\u9664\u5B57\u6BB511 ")]),_:1},8,["onClick"])]),n(o,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B,\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8"},{default:r(()=>[n(i,{onRegister:e.register},null,8,["onRegister"])]),_:1}),n(o,{class:"mt-5",title:"componentProps\u52A8\u6001\u6539\u53D8"},{default:r(()=>[n(i,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}var Ee=C(W,[["render",E]]);export{Ee as default};
