import{au as v,a as W,cD as S,aw as c,o as T,j as I,z as e,n as o,B as a,E as b}from"./index.e3f30c55.js";import{P as y}from"./index.24e5abae.js";import"./index.1d408a24.js";import"./index.e5a6dfa1.js";import"./useSize.20ea1e36.js";import"./eagerComputed.ad2f1ebf.js";import"./useWindowSizeFn.7ce1f350.js";import"./useContentViewHeight.f1af3d9b.js";import"./ArrowLeftOutlined.01022efa.js";import"./index.9a11f541.js";import"./transButton.cb4b83f4.js";const N=W({components:{CollapseContainer:S,PageWrapper:y},setup(){const{createMessage:s,createConfirm:n,createSuccessModal:d,createInfoModal:u,createErrorModal:m,createWarningModal:f,notification:r}=b(),{info:l,success:i,warning:t,error:g}=s;function p(){s.loading("Loading...")}function C(h){n({iconType:h,title:"Tip",content:"content message..."})}function M(){d({title:"Tip",content:"content message..."})}function k(){m({title:"Tip",content:"content message..."})}function w(){f({title:"Tip",content:"content message..."})}function E(){u({title:"Tip",content:"content message..."})}function $(){r.success({message:"Tip",description:"content message..."})}return{infoMsg:l,successMsg:i,warningMsg:t,errorMsg:g,handleLoading:p,handleConfirm:C,handleSuccessModal:M,handleErrorModal:k,handleWarningModal:w,handleInfoModal:E,handleNotify:$}}});function B(s,n,d,u,m,f){const r=c("a-button"),l=c("CollapseContainer"),i=c("PageWrapper");return T(),I(i,{title:"\u6D88\u606F\u793A\u4F8B"},{default:e(()=>[o(l,{class:"w-full h-32 bg-white rounded-md",title:"Message"},{default:e(()=>[o(r,{onClick:n[0]||(n[0]=t=>s.infoMsg("Info message")),class:"mr-2"},{default:e(()=>[a(" Info ")]),_:1}),o(r,{onClick:n[1]||(n[1]=t=>s.successMsg("Success message")),class:"mr-2",color:"success"},{default:e(()=>[a(" Success ")]),_:1}),o(r,{onClick:n[2]||(n[2]=t=>s.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:e(()=>[a(" Warning ")]),_:1}),o(r,{onClick:n[3]||(n[3]=t=>s.errorMsg("Error message")),class:"mr-2",color:"error"},{default:e(()=>[a(" Error ")]),_:1}),o(r,{onClick:s.handleLoading,class:"mr-2",type:"primary"},{default:e(()=>[a(" Loading ")]),_:1},8,["onClick"])]),_:1}),o(l,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Comfirm"},{default:e(()=>[o(r,{onClick:n[4]||(n[4]=t=>s.handleConfirm("info")),class:"mr-2"},{default:e(()=>[a(" Info ")]),_:1}),o(r,{onClick:n[5]||(n[5]=t=>s.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:e(()=>[a(" Warning ")]),_:1}),o(r,{onClick:n[6]||(n[6]=t=>s.handleConfirm("success")),color:"success",class:"mr-2"},{default:e(()=>[a(" Success ")]),_:1}),o(r,{onClick:n[7]||(n[7]=t=>s.handleConfirm("error")),color:"error",class:"mr-2"},{default:e(()=>[a(" Error ")]),_:1})]),_:1}),o(l,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Modal"},{default:e(()=>[o(r,{onClick:s.handleInfoModal,class:"mr-2"},{default:e(()=>[a(" Info ")]),_:1},8,["onClick"]),o(r,{onClick:s.handleSuccessModal,color:"success",class:"mr-2"},{default:e(()=>[a(" Success ")]),_:1},8,["onClick"]),o(r,{onClick:s.handleErrorModal,color:"error",class:"mr-2"},{default:e(()=>[a(" Error ")]),_:1},8,["onClick"]),o(r,{onClick:s.handleWarningModal,color:"warning",class:"mr-2"},{default:e(()=>[a(" Warning ")]),_:1},8,["onClick"])]),_:1}),o(l,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Notification \u7528\u6CD5\u4E0E\u4E0A\u9762\u4E00\u81F4"},{default:e(()=>[o(r,{onClick:s.handleNotify,color:"success",class:"mr-2"},{default:e(()=>[a(" Success ")]),_:1},8,["onClick"])]),_:1})]),_:1})}var H=v(N,[["render",B]]);export{H as default};
