import{au as y,a as _,aw as t,o as E,j as A,z as n,n as r,B as m}from"./index.e3f30c55.js";import{A as R}from"./index.b8269de0.js";import{u as a}from"./index.af4a17a1.js";import k from"./Drawer1.275bfe91.js";import B from"./Drawer2.86409654.js";import $ from"./Drawer3.26beb932.js";import v from"./Drawer4.12a95d86.js";import P from"./Drawer5.32a20fe2.js";import{P as W}from"./index.24e5abae.js";import"./index.2438de3e.js";import"./ArrowLeftOutlined.01022efa.js";import"./BasicForm.ed86efe5.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.7b9be6e6.js";import"./index.8d35092d.js";import"./componentMap.01f0ce6e.js";import"./index.2678217d.js";import"./Checkbox.656e1db7.js";import"./index.59cf3b53.js";import"./index.addfe94d.js";import"./index.1a2edb77.js";import"./index.069489b5.js";import"./index.a0337c99.js";import"./index.2df10aa4.js";import"./useFormItem.cf111819.js";import"./RadioButtonGroup.25de5002.js";import"./get.5fbe7494.js";import"./index.525fac41.js";import"./eagerComputed.ad2f1ebf.js";import"./index.def48a32.js";import"./_baseIteratee.d85adb84.js";import"./DeleteOutlined.59f01a92.js";import"./index.a43cf7b9.js";import"./useRefs.e708542e.js";import"./Form.4f363030.js";import"./Col.2dc850f4.js";import"./useFlexGapSupport.153cff5a.js";import"./useSize.20ea1e36.js";import"./transButton.cb4b83f4.js";import"./index.be87f19c.js";import"./index.316adb4b.js";import"./useWindowSizeFn.7ce1f350.js";import"./FullscreenOutlined.edd56a8c.js";import"./index.e1777527.js";import"./isNumber.eb231e79.js";import"./uuid.2b29000c.js";import"./download.7a145835.js";import"./base64Conver.08b9f4ec.js";import"./index.a5b66f28.js";import"./index.fe73d8a5.js";import"./index.e2fc098a.js";import"./uniqBy.2f742e02.js";import"./index.eaac2b21.js";import"./useForm.b7625331.js";import"./index.1d408a24.js";import"./index.e5a6dfa1.js";import"./useContentViewHeight.f1af3d9b.js";import"./index.9a11f541.js";const b=_({components:{Alert:R,PageWrapper:W,Drawer1:k,Drawer2:B,Drawer3:$,Drawer4:v,Drawer5:P},setup(){const[e,{openDrawer:o,setDrawerProps:u}]=a(),[g,{openDrawer:f}]=a(),[d,{openDrawer:i}]=a(),[p,{openDrawer:s}]=a(),[w,{openDrawer:D}]=a();function l(){s(!0,{data:"content",info:"Info"})}function c(){o(),u({loading:!0}),setTimeout(()=>{u({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:i,register4:p,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}});function L(e,o,u,g,f,d){const i=t("Alert"),p=t("a-button"),s=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),F=t("PageWrapper");return E(),A(F,{title:"\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:n(()=>[r(i,{message:"\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:n(()=>[m(" \u6253\u5F00Drawer ")]),_:1},8,["onClick"]),r(i,{message:"\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=C=>e.openDrawer2(!0))},{default:n(()=>[m(" \u6253\u5F00Drawer ")]),_:1}),r(i,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=C=>e.openDrawer3(!0))},{default:n(()=>[m(" \u6253\u5F00Drawer ")]),_:1}),r(i,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:e.send},{default:n(()=>[m(" \u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E ")]),_:1},8,["onClick"]),r(i,{message:"\u8BE6\u60C5\u9875\u6A21\u5F0F","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=C=>e.openDrawer5(!0))},{default:n(()=>[m(" \u6253\u5F00\u8BE6\u60C5Drawer ")]),_:1}),r(s,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}var zr=y(b,[["render",L]]);export{zr as default};
