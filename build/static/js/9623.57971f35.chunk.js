"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[9623],{28868:(e,s,a)=>{a.d(s,{VX:()=>n,gV:()=>t,lx:()=>i,xS:()=>r});var l=a(24618);const r=e=>(s,a,r)=>{let{apiCall:i,Toast:t}=r;return new Promise(((s,a)=>{i({...l.iJ.registationApi,body:e}).then((e=>{s(e)})).catch((e=>{let{message:s}=e;a(t({type:"error",message:s}))}))}))},i=e=>(s,a,r)=>{let{apiCall:i,Toast:t}=r;return new Promise(((s,a)=>{i({...l.iJ.loginApi,body:e}).then((e=>{sessionStorage.setItem("authToken",e),s(e)})).catch((e=>{let{message:s}=e;a(t({type:"error",message:s}))}))}))},t=e=>(s,a,r)=>{let{apiCall:i,Toast:t}=r;return new Promise(((s,a)=>{i({...l.iJ.verifyOTP,body:e}).then((e=>{s(e),t({type:"success",message:e.message})})).catch((e=>{let{message:s}=e;a(t({type:"error",message:s}))}))}))},n=e=>(s,a,r)=>{let{apiCall:i,Toast:t}=r;return new Promise(((s,a)=>{i({...l.iJ.resendOTP,body:e}).then((e=>{s(e),t({type:"success",message:e.message})})).catch((e=>{let{message:s}=e;a(t({type:"error",message:s}))}))}))}},17024:(e,s,a)=>{a.d(s,{M:()=>i,Vy:()=>t,dz:()=>n,e$:()=>d,ps:()=>c});var l=a(56543),r=a(24618);const i=e=>(s,a,l)=>{let{apiCall:i,Toast:t}=l;return new Promise(((s,a)=>{i({...r.Eh.createOrder,body:e}).then((e=>{s(e)})).catch((e=>{let{message:s}=e;a(t({type:"error",message:s}))}))}))},t=e=>(s,a,i)=>{let{apiCall:t,Toast:n}=i;return new Promise(((s,a)=>{(0,l.DI)(e,r.Eh.getOrderList),t({...r.Eh.getOrderList}).then((e=>{s(e)}))}))},n=e=>(s,a,i)=>{let{apiCall:t,Toast:n}=i;return new Promise(((s,a)=>{(0,l.DI)(e,r.Eh.getOrderDetails),t({...r.Eh.getOrderDetails}).then((e=>{s(e)}))}))},d=e=>(s,a,i)=>{let{apiCall:t,Toast:n}=i;return new Promise(((s,a)=>{(0,l.DI)(e,r.Eh.getProductOrderDetails),t({...r.Eh.getProductOrderDetails}).then((e=>{s(e)}))}))},c=e=>(s,a,l)=>{let{apiCall:i,Toast:t}=l;return new Promise(((s,a)=>{i({...r.Eh.verifyOrder,body:e}).then((e=>{s(e)}))}))}},6296:(e,s,a)=>{a.d(s,{Cw:()=>i,Z5:()=>t,bl:()=>n});var l=a(56543),r=a(24618);const i=e=>(s,a,l)=>{let{apiCall:i,Toast:t}=l;return new Promise(((s,a)=>{i({...r.YE.addToWishlist,body:e}).then((e=>{s(e)}))}))},t=()=>(e,s,a)=>{let{apiCall:l,Toast:i}=a;return new Promise(((e,s)=>{l({...r.YE.getWishList}).then((s=>{e(s)}))}))},n=e=>(s,a,i)=>{let{apiCall:t,Toast:n}=i;return new Promise(((s,a)=>{(0,l.DI)(e,r.YE.removeFromWishlist),t({...r.YE.removeFromWishlist}).then((e=>{s(e)}))}))}},94819:(e,s,a)=>{a.r(s),a.d(s,{ProfileMain:()=>B,default:()=>R});var l=a(72791);const r=a.p+"static/media/profileUser.eed0f57f2a083ba81397.png";var i=a(73939),t=a(61134),n=a(47047),d=a(10765),c=a(85523),o=a(61419),m=a(60908),h=a(67335),p=a(56543),u=a(80184);function x(e){var s,a,r,x,v,j;let{handleInput:N,inputData:g,updateProfile:f,verifyOTP:w,open:C,setOpen:A,loader:b}=e;const{register:P,handleSubmit:y,formState:{errors:T}}=(0,t.cI)(),[I,E]=(0,l.useState)(!0),[D,S]=(0,l.useState)(!0),[O,F]=(0,l.useState)("");return(0,u.jsx)(u.Fragment,{children:(0,p.aV)(b,(0,u.jsx)(n.Z,{sx:{bgcolor:"#ffffff96"},animation:"wave",variant:"rounded",width:"100%",height:120}),(0,u.jsx)("form",{onSubmit:y(f),children:(0,u.jsxs)("div",{className:"profile-form",children:[(0,u.jsx)("label",{className:"profile-label",children:"Personal Information "}),(0,u.jsxs)("div",{className:"flex-main mt-3",children:[(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)(m.yM,{name:"firstName",className:"profile-input",onChange:N,value:null===g||void 0===g?void 0:g.firstName,register:P,placeholder:"First Name"}),(0,u.jsx)("div",{className:"error-message",children:(null===(s=T.firstName)||void 0===s?void 0:s.type)&&(0,u.jsx)("span",{className:"error-text",children:"First Name is required"})})]}),(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)(m.yM,{name:"lastName",className:"profile-input",onChange:N,value:null===g||void 0===g?void 0:g.lastName,register:P,placeholder:"Last Name"}),(0,u.jsx)("div",{className:"error-message",children:(null===(a=T.lastName)||void 0===a?void 0:a.type)&&(0,u.jsx)("span",{className:"error-text",children:"Last Name is required"})})]})]}),(0,u.jsxs)("div",{className:"mt-3 flex-main",children:[(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)("label",{className:"profile-label",children:"Profile / Role"}),(0,u.jsx)(i.AP,{name:"roleType",className:"profile-input roll-type mt-3",onChange:N,value:null===g||void 0===g?void 0:g.roleType,register:P,menuItemList:[{label:"User",value:"1"},{label:"Home Owner",value:"2"}],placeholder:"Roll Type"}),(0,u.jsx)("div",{className:"error-message",children:(null===(r=T.roleType)||void 0===r?void 0:r.type)&&(0,u.jsx)("span",{className:"error-text",children:"Role is required"})})]}),(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)("label",{className:"profile-label",children:"Your Gender"}),(0,u.jsxs)("div",{className:"mt-3",children:[console.log(null===g||void 0===g?void 0:g.gender,"gend"),(0,u.jsxs)(d.Z,{row:!0,onChange:N,name:"gender",className:"profile-input",value:null===g||void 0===g?void 0:g.gender,register:P,children:[(0,u.jsx)(c.Z,{value:0,control:(0,u.jsx)(o.Z,{disableRipple:!0,color:"default",checkedIcon:(0,u.jsx)(h.Aq,{}),icon:(0,u.jsx)(h.jA,{})}),label:"Male"}),(0,u.jsx)(c.Z,{value:1,className:"ps-5 ms-5",control:(0,u.jsx)(o.Z,{disableRipple:!0,color:"default",checkedIcon:(0,u.jsx)(h.Aq,{}),icon:(0,u.jsx)(h.jA,{})}),label:"Female"})]}),(0,u.jsx)("div",{className:"error-message",children:(null===(x=T.gender)||void 0===x?void 0:x.type)&&(0,u.jsx)("span",{className:"error-text",children:"Gender is required"})})]})]})]}),(0,u.jsxs)("div",{className:"mt-3 flex-main",children:[(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)("label",{className:"profile-label",children:"Email Address"}),(0,u.jsx)(m.yM,{name:"emailId",placeholder:"Email ID",className:"profile-input mt-3",onChange:N,value:null===g||void 0===g?void 0:g.emailId,disabled:I,register:P,InputProps:{endAdornment:(0,u.jsx)("label",{className:"change-text",onClick:()=>E(!I),children:"CHANGE"})}}),(0,u.jsx)("div",{className:"error-message",children:(null===(v=T.emailId)||void 0===v?void 0:v.type)&&(0,u.jsx)("span",{className:"error-text",children:"Email Address is required"})})]}),(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)("label",{className:"profile-label",children:"Mobile Number"}),(0,u.jsx)(m.yM,{name:"phoneNumber",placeholder:"Mobile Number",className:"profile-input mt-3",onChange:N,value:null===g||void 0===g?void 0:g.phoneNumber,disabled:D,register:P,InputProps:{endAdornment:(0,u.jsx)("label",{className:"change-text",onClick:()=>S(!D),children:"CHANGE"})}}),(0,u.jsx)("div",{className:"error-message",children:(null===(j=T.phoneNumber)||void 0===j?void 0:j.type)&&(0,u.jsx)("span",{className:"error-text",children:"Mobile Number is required"})})]})]}),(0,u.jsx)("div",{className:"mt-5",children:(0,u.jsx)(i.op,{variant:"contained",className:"save-changed-button py-3 px-5",children:"Save Changes"})}),(0,u.jsx)(i.WK,{open:C,handleClose:()=>A(!1),OTP:O,setOTP:F,verifyOTP:w})]})}))})}var v=a(16958),j=a(78687),N=a(6598),g=a(10272);const f=e=>{let{addressList:s,addressList:{_id:a,fullName:l,mobileNumber:r,flatNo:i,area:t,city:n,state:d,pincode:c,country:o},deleteAddressApi:m}=e;return(0,u.jsxs)("div",{className:"address-card mb-3",children:[(0,u.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,u.jsx)("label",{className:"label-name",children:l}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{className:"edit-text",onClick:()=>g.m.push(`/profile/change-address/${a}`,s),children:"EDIT"}),(0,u.jsx)("label",{className:"ms-4 delete-text",onClick:()=>m(a),children:"DELETE"})]})]}),(0,u.jsx)("label",{className:"py-2 label-mobno",children:r}),(0,u.jsx)("p",{className:"label-address",children:`${i},${t},${n},${d},${c},${o}`})]})},w=(0,j.$j)(null,(e=>(0,N.DE)({deleteAddressAPI:v._N,getAddressListAPICall:v.mZ},e)))((e=>{let{getAddressListAPICall:s,deleteAddressAPI:a}=e;const[r,t]=(0,l.useState)([]),[d,c]=(0,l.useState)(!0),o=()=>{s().then((e=>{t(e.response),c(!1)})).catch((e=>{c(!1),console.log(e)}))},m=e=>{a({url_id:e}).then((()=>{o()})).then((e=>{t(e.response)})).catch((e=>{console.log(e)}))};return(0,l.useEffect)((()=>{o()}),[]),(0,u.jsxs)("div",{className:"saved-address",children:[(0,p.aV)(d,(0,u.jsx)(n.Z,{sx:{bgcolor:"#ffffff96"},animation:"wave",variant:"rounded",width:"100%",height:120}),null===r||void 0===r?void 0:r.map((e=>(0,u.jsx)(f,{deleteAddressApi:m,addressList:e},null===e||void 0===e?void 0:e._id)))),(0,u.jsx)(i.op,{className:"mt-4 py-3 px-5 saved-address-button",variant:"outlined",onClick:()=>g.m.push("/profile/add-new-address"),children:"+ Add New Address"})]})}));function C(e){var s,a;let{changePassword:r,passwordError:n}=e;const{register:d,handleSubmit:c,formState:{errors:o}}=(0,t.cI)(),[m,h]=(0,l.useState)({}),p=e=>{let s={[e.target.name]:e.target.value};h({...m,...s})};return(0,u.jsx)("form",{onSubmit:c(r),children:(0,u.jsxs)("div",{className:"password-form",children:[(0,u.jsx)("h6",{children:"Change Password"}),(0,u.jsxs)("div",{className:"input-container mt-4",children:[(0,u.jsx)("label",{children:"Current Password "}),(0,u.jsx)(i.Cu,{name:"password",className:"text-input mt-3",onChange:p,type:"password",value:m.password,register:d})]}),(0,u.jsxs)("div",{className:"input-container mt-4",children:[(0,u.jsx)("label",{children:"New Password "}),(0,u.jsx)(i.Cu,{name:"newPassword",className:"text-input mt-3",onChange:p,value:m.newPassword,type:"password",register:d}),(0,u.jsx)("div",{className:"error-message",children:(null===(s=o.newPassword)||void 0===s?void 0:s.type)&&(0,u.jsx)("span",{className:"error-text",children:"New Password is required"})})]}),(0,u.jsxs)("div",{className:"input-container mt-4",children:[(0,u.jsx)("label",{children:"Confirm New Password "}),(0,u.jsx)(i.Cu,{name:"repeatPassword",className:"text-input mt-3",onChange:p,register:d,type:"password",value:m.repeatPassword}),(0,u.jsxs)("div",{className:"error-message",children:[n?(0,u.jsx)("span",{className:"error-text",children:"New Password and Confirm New Password should be same!"}):(0,u.jsx)(u.Fragment,{}),(null===(a=o.repeatPassword)||void 0===a?void 0:a.type)&&(0,u.jsx)("span",{className:"error-text",children:"Repeat Password is required"})]})]}),(0,u.jsx)("div",{className:"mt-5",children:(0,u.jsx)(i.op,{variant:"contained",className:"change-password-button py-3 px-5",children:"Change Password"})})]})})}var A=a(6296),b=a(45651);const P=e=>{let{wishlistData:{_id:s,title:a,color:l,price:r,images:i},deleteFavItem:t}=e;return(0,u.jsxs)("div",{className:"orders-card",children:[(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsx)("img",{src:i?i[0]:"",height:"200px",width:"200px",alt:"product"}),(0,u.jsxs)("div",{className:"direction-col left-margin",children:[(0,u.jsx)("div",{className:"flex space-between",children:(0,u.jsx)("div",{className:"title",children:a})}),(0,u.jsx)("div",{className:"flex space-between",children:(0,u.jsx)("div",{className:"color",children:`Color - ${l[0].colorName}`})}),(0,u.jsx)("div",{className:"flex space-between mt-5",children:(0,u.jsx)("div",{className:"amount mt-4",children:`\u20b9${r}`})})]})]}),(0,u.jsx)("div",{className:"pt-2 ps-4",onClick:()=>t(s),children:(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)(h.gG,{}),(0,u.jsx)("label",{className:"remove-item-label ps-1 cursor-pointer",children:"Remove"})]})})]})};const y=(0,j.$j)(null,(e=>(0,N.DE)({getWishListApi:A.Z5,removeFromWishlistApi:A.bl},e)))((function(e){let{getWishListApi:s,removeFromWishlistApi:a}=e;const[r,t]=(0,l.useState)([]),n=()=>{s().then((e=>{let{response:s}=e;return t(s.data)}))},d=e=>{a({url_id:e}).then((()=>{(0,b.F)({type:"success",message:"Item Removed from Wishlist"})})).then((()=>n()))};return(0,l.useEffect)((()=>{n()}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"d-flex align-items-center",children:(0,u.jsx)("div",{children:(0,u.jsx)(i.sn,{placeholder:"Search For Orders"})})}),r.map((e=>(0,u.jsx)(P,{wishlistData:e,deleteFavItem:d},e._id)))]})}));var T=a(31909);a(55414);var I=a(64880);const E=e=>(0,u.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:(0,u.jsx)("path",{d:"M10.0068 0C11.6245 0 13.2361 0.399066 14.668 1.15403C19.5432 3.72638 21.4181 9.78549 18.8475 14.6624C17.0942 17.9879 13.642 20 9.9953 20C9.28286 20 8.56338 19.9234 7.84741 19.7648C7.44408 19.6749 7.18958 19.275 7.27852 18.8715C7.36747 18.468 7.7664 18.2152 8.17237 18.3024C11.8966 19.1305 15.7415 17.3431 17.523 13.9638C19.7088 9.81809 18.1148 4.66546 13.9696 2.47897C12.7526 1.83676 11.3823 1.4976 10.0059 1.4976C5.31029 1.4976 1.4971 5.31119 1.4971 9.99868C1.49534 11.3641 1.82823 12.7234 2.45965 13.9312L2.65163 14.3065C2.88676 14.747 2.93872 15.294 2.78636 15.7891C2.57589 16.3441 2.40064 16.8841 2.25622 17.4215C2.81807 17.2523 3.50409 17.003 3.99989 16.8224L4.20332 16.7493C4.58816 16.6057 5.02055 16.8092 5.16146 17.1986C5.30236 17.5871 5.10069 18.017 4.71233 18.1571L4.51154 18.2302C3.77004 18.4989 2.75554 18.868 2.0704 19.0213C2.01228 19.0336 1.94975 19.0415 1.89251 19.0398C1.43282 19.0398 1.15277 18.8539 0.99866 18.6971C0.761767 18.4566 0.649045 18.1192 0.662255 17.6946C0.664016 17.6461 0.670181 17.5959 0.681629 17.5475C0.859519 16.7899 1.09113 16.034 1.37117 15.3019C1.39143 15.2306 1.3791 15.1011 1.32186 14.9927L1.129 14.6183C0.390136 13.2035 -0.0017495 11.6029 5.87135e-06 9.9978C5.87135e-06 4.48487 4.48424 0 9.9953 0H10.0068ZM9.99565 8.8095C10.6517 8.8095 11.1845 9.34335 11.1845 9.99877C11.1845 10.6542 10.6517 11.188 9.99565 11.188C9.33958 11.188 8.80679 10.6542 8.80679 9.99877C8.80679 9.34335 9.33958 8.8095 9.99565 8.8095ZM14.3989 8.8095C15.0549 8.8095 15.5877 9.34335 15.5877 9.99877C15.5877 10.6542 15.0549 11.188 14.3989 11.188C13.7428 11.188 13.21 10.6542 13.21 9.99877C13.21 9.34335 13.7428 8.8095 14.3989 8.8095ZM5.59235 8.80985C6.24843 8.80985 6.78122 9.34282 6.78122 9.99912C6.78122 10.6545 6.24843 11.1875 5.59235 11.1875C4.93628 11.1875 4.40349 10.6545 4.40349 9.99912C4.40349 9.34282 4.93628 8.80985 5.59235 8.80985Z",fill:"white"})});var D=a(42161),S=a(17024);const O=(0,j.$j)(null,(e=>(0,N.DE)({getOrderListingApi:S.Vy,getOrderDetailApi:S.dz},e)))((function(e){let{getOrderListingApi:s,getOrderDetailApi:a}=e;const[r,t]=(0,l.useState)(!1),[n,d]=(0,l.useState)(),[c,o]=(0,l.useState)();let m=(0,I.k6)();const h=e=>{t((e=>!e)),x(e)},x=e=>{a({url_id:e}).then((e=>{let{response:s}=e;return o(s)}))};console.log(c,"order detail");const v=e=>{switch(e){case"order confirmed":return"order-confirmed";case"shipped":return"shipped";case"out for delivery":return"out-for-delivery";case"delivery":return"delivered";default:return}},j=[{productName:"Diamond Wallpaper",color:"green",image:T,price:"\u20b93500"},{productName:"Bird Wallpaper",color:"green",image:T,price:"\u20b93500"}];return(0,l.useEffect)((()=>{s().then((e=>{let{response:s}=e;return d(s)}))}),[]),(0,u.jsxs)("div",{className:"profile-page",children:[(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)("div",{children:(0,u.jsx)(i.sn,{placeholder:"Search For Orders"})}),(0,u.jsx)("div",{className:"custom-select",children:(0,u.jsx)(i.AP,{menuItemList:[{label:"This Month",value:"this"},{label:"Current Month",value:"current"},{label:"Previous Month",value:"previous"},{label:"Daily",value:"daily"},{label:"Yearly",value:"yearly"},{label:"Last year",value:"last"},{label:"Current year",value:"current"}]})})]}),r?(0,u.jsxs)("div",{className:"delivery-summary-card",children:[(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)(D.Z,{className:"mt-1 cursor-pointer",onClick:()=>t(!1)}),(0,u.jsx)("label",{className:"deliver-head ms-1",children:"Yayy, Your order has been successfully delivered"})]}),(0,u.jsx)("div",{className:"deliver-subtitle",children:"Placed on Fri, 25th Nov, 05:00PM"}),(0,u.jsxs)("div",{className:"payment-info",children:[(0,u.jsx)("div",{className:"mode-text",children:"Mode of Payment"}),(0,u.jsx)("div",{className:"mode-detail",children:"Net Banking: Kotak Bank"})]}),(0,u.jsxs)("div",{className:"bill-details",children:[(0,u.jsx)("div",{className:"total-item",children:"2 items"}),(0,u.jsx)("div",{className:"order-id",children:"Order ID: ord123456789"}),j.map((e=>(0,u.jsxs)("div",{className:"d-flex flex-row orderList",children:[(0,u.jsx)("img",{src:e.image,alt:"wallimage",width:66.64,height:70}),(0,u.jsxs)("div",{className:"products",children:[(0,u.jsx)("div",{className:"product-name",children:e.productName}),(0,u.jsxs)("div",{className:"product-color",children:["Color - ",e.color]})]}),(0,u.jsx)("div",{className:"price",children:e.price})]}))),(0,u.jsx)("div",{className:"bill-det-txt",children:"Bill Details"}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Price(2 item)"}),(0,u.jsx)("span",{className:"price",children:"\u20b9 2599"})]}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Delivery Charges"}),(0,u.jsx)("span",{className:"free",children:"Free"})]}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Packaging Charges"}),(0,u.jsx)("span",{className:"price me-2",children:"\u20b9 99"})]}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Installation Charges"}),(0,u.jsx)("span",{className:"price me-2",children:"\u20b9 499"})]}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"GST Charges"}),(0,u.jsx)("span",{className:"price me-2",children:"\u20b9 299"})]}),(0,u.jsx)("div",{className:"hr-line"}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Sub Total Price"}),(0,u.jsx)("span",{className:"price",children:"\u20b9 3297"})]}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Coupon Discount"}),(0,u.jsx)("span",{className:"price me-2",children:"\u20b9 298"})]}),(0,u.jsx)("div",{className:"hr-line"}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Total Amount to be paid"}),(0,u.jsx)("span",{className:"price",children:"\u20b9 2999"})]}),(0,u.jsxs)("div",{className:"payment-info",children:[(0,u.jsx)("div",{className:"mode-text mb-2",children:"Delivery Address"}),(0,u.jsx)("div",{className:"mode-detail",children:"Home- 104,NEW ARYA NAGAR,GHAZIABAD,U.P.,DIST GHAZIABAD 201301"})]}),(0,u.jsxs)(i.op,{className:"chat-btn",onClick:h,children:[(0,u.jsx)(E,{height:20,width:20})," \xa0 \xa0 Chat With Us"]})]})]}):(0,u.jsx)(u.Fragment,{children:null===n||void 0===n?void 0:n.map((e=>{let{_id:s,colorName:a,price:l,productImages:r,productTitle:t,status:n,date:d}=e;return(0,u.jsxs)("div",{className:"orders-card",children:[(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)("img",{height:"185px",width:"185px",src:r[0],alt:"wallimage"}),(0,u.jsxs)("div",{className:"direction-col left-margin",children:[(0,u.jsx)("div",{className:"d-flex justify-content-between",children:(0,u.jsxs)("div",{className:"d-flex w-100 align-items-start",onClick:()=>m.push(`/profile/order-details/${s}`),children:[(0,u.jsx)("label",{className:"title w-50",children:t}),(0,u.jsx)("div",{className:`ms-2 mt-2 delivery-status ${v(n)}`,children:n})]})}),(0,u.jsxs)("label",{className:"color",children:["Color - ",a]}),(0,u.jsxs)("label",{className:"m-0 py-4 amount",children:["\u20b9",l]}),(0,u.jsxs)("label",{className:"order-placed-date",children:["Placed on"," ",(0,p.Bx)(d,"ddd, Do MMM, hh:mm A")]})]})]}),(0,u.jsx)("div",{children:(0,u.jsx)(i.op,{className:"view-details-btn",onClick:()=>h(s),children:"View Details"})})]},s)}))})]})}));var F=a(28868),M=(a(78200),a(94455)),L=a(96973);const k=e=>{let{firstName:s,lastName:a}=e;return(0,u.jsxs)("div",{className:"profile-card-container px-4",children:[(0,u.jsx)("img",{height:"85px",width:"85px",className:"profile-image",alt:"profile_pic",src:r}),(0,u.jsxs)("div",{className:"d-flex flex-column ps-3",children:[(0,u.jsx)("label",{className:"label-hello",children:"Hello,"}),(0,u.jsx)("label",{className:"label-name",children:`${s} ${a}`})]})]})},Z=e=>{let{tabData:{id:s,name:a},activeTab:l,setActiveTab:r}=e;return(0,u.jsx)("div",{className:`navigation-tab cursor-pointer ${(0,p.s6)(l===s,"active")}`,onClick:()=>r(s),children:(0,u.jsx)("label",{className:`ps-5 navigation-label ${(0,p.s6)(l===s,"active")}`,children:a})})},W=e=>{let{activeTab:s,profileProps:{handleInput:a,inputData:l,updateProfile:r,verifyOTP:i,open:t,setOpen:n,loader:d},savedAddressProps:{showAddressForm:c},changePasswordProps:{changePassword:o,passwordError:m}}=e;switch(s){case 1:return(0,u.jsx)(x,{handleInput:a,inputData:l,updateProfile:r,verifyOTP:i,open:t,setOpen:n,loader:d});case 2:return(0,u.jsx)(O,{});case 3:return(0,u.jsx)(y,{});case 4:return(0,u.jsx)(w,{showAddressForm:c});case 5:return(0,u.jsx)(C,{changePassword:o,passwordError:m});case 6:return(0,M.k)();default:return null}};function B(e){let{updateProfileAPICall:s,changeCurrentPasswordAPI:a,verifyOTPApiCall:r,getCurrentProfileAPI:i}=e,t=(0,I.TH)();const[n,d]=(0,l.useState)(),[c,o]=(0,l.useState)(),[m,h]=(0,l.useState)(null===t||void 0===t?void 0:t.state),[p,x]=(0,l.useState)(!0),[v,j]=l.useState(!1),[N,f]=(0,l.useState)(!1),[w,C]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{i().then((e=>{o(e.response),d(e.response)})).then((()=>{C(!1)})).catch((e=>{console.log(e)}))}),[m]),(0,l.useEffect)((()=>{h(null===t||void 0===t?void 0:t.state)}),[null===t||void 0===t?void 0:t.state]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"profile-main",children:[(0,u.jsxs)("div",{className:"left-pane",children:[(0,u.jsx)(k,{firstName:null===c||void 0===c?void 0:c.firstName,lastName:null===c||void 0===c?void 0:c.lastName}),(0,u.jsx)("div",{className:"navigation-panel-container mt-3",children:L.in.map((e=>(0,u.jsx)(Z,{activeTab:m,setActiveTab:h,tabData:e},e.id)))})]}),(0,u.jsx)("div",{className:"right-pane ms-4",children:(0,u.jsx)(W,{activeTab:m,profileProps:{handleInput:e=>{let s={[e.target.name]:e.target.value};d({...n,...s})},inputData:n,updateProfile:()=>{let e={firstName:n.firstName,lastName:n.lastName,phoneNumber:n.mobile,roleType:n.profile,gender:n.gender};s(e).then((()=>{j(!0)}))},verifyOTP:e=>{let s={phoneNumber:n.mobile,otp:e};r(s).then((()=>{g.m.push("/auth/login")}))},open:v,setOpen:j,loader:w},savedAddressProps:{showAddressForm:()=>{x(!p)}},changePasswordProps:{changePassword:e=>{let s={newPassword:e.newPassword,confirmPassword:e.repeatPassword};e.newPassword===e.repeatPassword?(f(!1),a(s).then((()=>{(0,b.F)({type:"success",message:"Password Updated!"})}))):f(!0)},passwordError:N}})})]})})}const R=(0,j.$j)(null,(e=>(0,N.DE)({updateProfileAPICall:v.ck,changeCurrentPasswordAPI:v.dC,verifyOTPApiCall:F.gV,getCurrentProfileAPI:v.JQ},e)))(B)},55414:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgBpVXLTcNAEJ2ZTe4585GcCuDOxa7AkfjeQipIOsBUgCiBKyCUDjYdUEJAELhyJmQHTxRHG8fr7MpPsmTv/N6Mn8cAAfjU58cf+iwOiSEIwzUBxSEBQQWIMEWCYVCMr+NqNFF+dULG5F2gpVS/uEfAnm+cdwFmjtdBhH3fOK8CM30qjCPryHtMONW9ThvatS2TwhQYNn0QJ2ZhHuri5jAfo9x866uIyegSyyZ4WxgzOEyeJ2ifzvRFlsvwBhrAGL7PmWfdZPwjz1h2aNDNmrV9iC7vkG7KrL0KCL705QiI73YlP0ieRi57rUxRmRR2gBQc1eZwGVbvYgo+aP1Feycv71UmZwcMvPVtyDjYwO2W729r4MrjHhGxvTVFIYnMej95zNBQV84KYy4G5+qoHJH8WPJ981qwdinEVpoQKEvU2YFSNLRZVyUX2N2EbNilPGVHQQCWkq7AP5zGmGqR2sYPAAAAAElFTkSuQmCC"},31909:(e,s,a)=>{e.exports=a.p+"static/media/wallImage.1b3d2233a8bb345ee97e.png"}}]);
//# sourceMappingURL=9623.57971f35.chunk.js.map