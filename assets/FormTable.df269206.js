import{B as h}from"./TableImg.35117bad.js";import"./componentMap.01f0ce6e.js";import{u as _}from"./useTable.5c9e811c.js";import{getBasicColumns as k,getFormConfig as y}from"./tableData.5ac34a3c.js";import{au as B,a as b,v,aw as u,o as l,j as C,z as e,B as c,n as f,h as g,F as A,i as E,t as T}from"./index.e3f30c55.js";import{A as w}from"./index.b8269de0.js";import{d as D}from"./table.a089dc57.js";import"./index.2678217d.js";import"./Checkbox.656e1db7.js";import"./index.59cf3b53.js";import"./index.525fac41.js";import"./eagerComputed.ad2f1ebf.js";import"./BasicForm.ed86efe5.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.7b9be6e6.js";import"./index.8d35092d.js";import"./index.def48a32.js";import"./_baseIteratee.d85adb84.js";import"./get.5fbe7494.js";import"./DeleteOutlined.59f01a92.js";import"./index.a43cf7b9.js";import"./useRefs.e708542e.js";import"./Form.4f363030.js";import"./Col.2dc850f4.js";import"./useFlexGapSupport.153cff5a.js";import"./useSize.20ea1e36.js";import"./index.e2fc098a.js";import"./uniqBy.2f742e02.js";import"./index.316adb4b.js";import"./useWindowSizeFn.7ce1f350.js";import"./FullscreenOutlined.edd56a8c.js";import"./index.eaac2b21.js";import"./useForm.b7625331.js";import"./RadioButtonGroup.25de5002.js";import"./useFormItem.cf111819.js";import"./index.24e5abae.js";import"./index.1d408a24.js";import"./index.e5a6dfa1.js";import"./useContentViewHeight.f1af3d9b.js";import"./ArrowLeftOutlined.01022efa.js";import"./index.9a11f541.js";import"./transButton.cb4b83f4.js";import"./index.069489b5.js";import"./index.a0337c99.js";import"./index.1a2edb77.js";import"./index.addfe94d.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.7fdf392d.js";import"./index.e1777527.js";import"./isNumber.eb231e79.js";import"./fromPairs.84aabb58.js";import"./scrollTo.dc76503b.js";import"./index.039bd687.js";import"./index.2df10aa4.js";import"./index.be87f19c.js";import"./download.7a145835.js";import"./base64Conver.08b9f4ec.js";import"./index.a5b66f28.js";import"./index.fe73d8a5.js";import"./select.3db1e35a.js";const S=b({components:{BasicTable:h,AAlert:w},setup(){const o=v([]),[i,{getForm:F}]=_({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:D,columns:k(),useSearchForm:!0,formConfig:y(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:o,onSelect:p,onSelectAll:s}});function d(){}function p(t,m){m?o.value=[...o.value,t.id]:o.value=o.value.filter(r=>r!==t.id)}function s(t,m,r){const a=r.map(n=>n.id);t?o.value=[...o.value,...a]:o.value=o.value.filter(n=>!a.includes(n))}return{registerTable:i,getFormValues:d,checkedKeys:o,onSelect:p,onSelectAll:s}}}),K={key:1};function V(o,i,F,d,p,s){const t=u("a-button"),m=u("a-alert"),r=u("BasicTable");return l(),C(r,{onRegister:o.registerTable},{"form-custom":e(()=>[c(" custom-slot ")]),headerTop:e(()=>[f(m,{type:"info","show-icon":""},{message:e(()=>[o.checkedKeys.length>0?(l(),g(A,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),f(t,{type:"link",onClick:i[0]||(i[0]=a=>o.checkedKeys=[]),size:"small"},{default:e(()=>[c("\u6E05\u7A7A")]),_:1})],64)):(l(),g("span",K,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:e(()=>[f(t,{type:"primary",onClick:o.getFormValues},{default:e(()=>[c("\u83B7\u53D6\u8868\u5355\u6570\u636E")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var Go=B(S,[["render",V]]);export{Go as default};
