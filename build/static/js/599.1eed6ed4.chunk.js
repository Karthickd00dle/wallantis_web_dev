"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[599],{4405:function(e,s,a){a.d(s,{gV:function(){return d},lx:function(){return n},xS:function(){return r}});var i=a(1413),l=a(64681),r=function(e){return function(s,a,r){var n=r.apiCall,d=r.Toast;return new Promise((function(s,a){n((0,i.Z)((0,i.Z)({},l.iJ.registationApi),{},{body:e})).then((function(e){s(e)})).catch((function(e){var s=e.message;a(d({type:"error",message:s}))}))}))}},n=function(e){return function(s,a,r){var n=r.apiCall,d=r.Toast;return new Promise((function(s,a){n((0,i.Z)((0,i.Z)({},l.iJ.loginApi),{},{body:e})).then((function(e){localStorage.setItem("authToken",e),s(e)})).catch((function(e){var s=e.message;a(d({type:"error",message:s}))}))}))}},d=function(e){return function(s,a,r){var n=r.apiCall,d=r.Toast;return new Promise((function(s,a){n((0,i.Z)((0,i.Z)({},l.iJ.verifyOTP),{},{body:e})).then((function(e){s(e),d({type:"error",message:e.message})})).catch((function(e){var s=e.message;a(d({type:"error",message:s}))}))}))}}},48239:function(e,s,a){a.r(s),a.d(s,{ProfileMain:function(){return O},default:function(){return M}});var i=a(1413),l=a(4942),r=a(29439),n=a(29867),d=a.p+"static/media/profileUser.eed0f57f2a083ba81397.png",c=a(67164),t=a(57357),m=a(43274),o=a(14811),x=a(92834);function h(e){var s,a,i,l,d,c,t=e.handleInput,h=e.inputData,u=e.updateProfile,j=e.open,v=e.setOpen,N=e.verifyOTP,p=(0,o.cI)(),f=p.register,C=p.handleSubmit,g=p.formState.errors,w=(0,n.useState)(!0),b=(0,r.Z)(w,2),A=b[0],y=b[1],P=(0,n.useState)(!0),I=(0,r.Z)(P,2),T=I[0],k=I[1],D=(0,n.useState)(""),E=(0,r.Z)(D,2),S=E[0],Z=E[1];return(0,x.jsx)("form",{onSubmit:C(u),children:(0,x.jsxs)("div",{className:"profile-form",children:[(0,x.jsx)("label",{children:"Personal Information "}),(0,x.jsxs)("div",{className:"flex-main mt-3",children:[(0,x.jsxs)("div",{className:"input-container",children:[(0,x.jsx)(m.Cu,{name:"firstName",className:"text-input",onChange:t,value:h.firstName,register:f}),(0,x.jsx)("div",{className:"error-message",children:(null===(s=g.firstName)||void 0===s?void 0:s.type)&&(0,x.jsx)("span",{className:"error-text",children:"First Name is required"})})]}),(0,x.jsxs)("div",{className:"input-container",children:[(0,x.jsx)(m.Cu,{name:"lastName",className:"text-input",onChange:t,value:h.lastName,register:f}),(0,x.jsx)("div",{className:"error-message",children:(null===(a=g.lastName)||void 0===a?void 0:a.type)&&(0,x.jsx)("span",{className:"error-text",children:"Last Name is required"})})]})]}),(0,x.jsxs)("div",{className:"mt-3 flex-main",children:[(0,x.jsxs)("div",{className:"input-container",children:[(0,x.jsx)("label",{children:"Profile / Role"}),(0,x.jsx)(m.Cu,{name:"roleType",className:"text-input mt-3",onChange:t,value:h.roleType,register:f}),(0,x.jsx)("div",{className:"error-message",children:(null===(i=g.roleType)||void 0===i?void 0:i.type)&&(0,x.jsx)("span",{className:"error-text",children:"Role is required"})})]}),(0,x.jsxs)("div",{className:"input-container",children:[(0,x.jsx)("label",{children:"Your Gender"}),(0,x.jsxs)("div",{className:"mt-3",children:[(0,x.jsx)(m.AR,{onChange:t,name:"gender",className:"text-input",value:h.gender,register:f,radioOptions:[{labelText:"Male",value:"male",id:"gender"},{labelText:"Female",value:"female",id:"gender"}]}),(0,x.jsx)("div",{className:"error-message",children:(null===(l=g.gender)||void 0===l?void 0:l.type)&&(0,x.jsx)("span",{className:"error-text",children:"Gender is required"})})]})]})]}),(0,x.jsxs)("div",{className:"mt-3 flex-main",children:[(0,x.jsxs)("div",{className:"input-container",children:[(0,x.jsx)("label",{children:"Email Address"}),(0,x.jsx)(m.Cu,{name:"emailId",className:"text-input mt-3 disabled",onChange:t,value:h.emailId,disabled:A,register:f}),(0,x.jsx)("div",{className:"error-message",children:(null===(d=g.emailId)||void 0===d?void 0:d.type)&&(0,x.jsx)("span",{className:"error-text",children:"Email Address is required"})}),(0,x.jsx)("p",{className:"change-text",onClick:function(){return y(!A)},children:"CHANGE"})]}),(0,x.jsxs)("div",{className:"input-container",children:[(0,x.jsx)("label",{children:"Mobile Number"}),(0,x.jsx)(m.Cu,{name:"phoneNumber",className:"text-input mt-3 disabled",onChange:t,value:h.phoneNumber,disabled:T,register:f}),(0,x.jsx)("div",{className:"error-message",children:(null===(c=g.phoneNumber)||void 0===c?void 0:c.type)&&(0,x.jsx)("span",{className:"error-text",children:"Mobile Number is required"})}),(0,x.jsx)("p",{className:"change-text",onClick:function(){return k(!T)},children:"CHANGE"})]})]}),(0,x.jsx)("div",{className:"mt-5",children:(0,x.jsx)(m.UO,{label:"Save Changes",saveBtn:!0,type:"submit"})}),(0,x.jsx)(m.WK,{open:j,handleClose:function(){return v(!1)},OTP:S,setOTP:Z,verifyOTP:N})]})})}function u(e){var s=e.showAddressForm;return(0,x.jsxs)("div",{className:"saved-address",children:[(0,x.jsxs)("div",{className:"card",children:[(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{children:"John Doe"}),(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{className:"edit",children:"EDIT"}),(0,x.jsx)("div",{className:"delete",children:"DELETE"})]})]}),(0,x.jsx)("div",{children:"+91 56843 54862"}),(0,x.jsx)("div",{children:"No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034, Tamil Nadu."})]}),(0,x.jsxs)("div",{className:"card",children:[(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{children:"John Doe"}),(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{className:"edit",children:"EDIT"}),(0,x.jsx)("div",{className:"delete",children:"DELETE"})]})]}),(0,x.jsx)("div",{children:"+91 56843 54862"}),(0,x.jsx)("div",{children:"No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034, Tamil Nadu."})]}),(0,x.jsxs)("div",{className:"card",children:[(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{children:"John Doe"}),(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{className:"edit",children:"EDIT"}),(0,x.jsx)("div",{className:"delete",children:"DELETE"})]})]}),(0,x.jsx)("div",{children:"+91 56843 54862"}),(0,x.jsx)("div",{children:"No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034, Tamil Nadu."})]}),(0,x.jsxs)("div",{className:"card",children:[(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{children:"John Doe"}),(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{className:"edit",children:"EDIT"}),(0,x.jsx)("div",{className:"delete",children:"DELETE"})]})]}),(0,x.jsx)("div",{children:"+91 56843 54862"}),(0,x.jsx)("div",{children:"No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034, Tamil Nadu."})]}),(0,x.jsxs)("div",{className:"card",children:[(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{children:"John Doe"}),(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{className:"edit",children:"EDIT"}),(0,x.jsx)("div",{className:"delete",children:"DELETE"})]})]}),(0,x.jsx)("div",{children:"+91 56843 54862"}),(0,x.jsx)("div",{children:"No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034, Tamil Nadu."})]}),(0,x.jsxs)("div",{className:"card",children:[(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{children:"John Doe"}),(0,x.jsxs)("div",{className:"display-flex",children:[(0,x.jsx)("div",{className:"edit",children:"EDIT"}),(0,x.jsx)("div",{className:"delete",children:"DELETE"})]})]}),(0,x.jsx)("div",{children:"+91 56843 54862"}),(0,x.jsx)("div",{children:"No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034, Tamil Nadu."})]}),(0,x.jsx)("button",{onClick:s,children:"Add New Address"})]})}function j(){var e=(0,o.cI)(),s=e.register,a=e.handleSubmit;return(0,x.jsx)("form",{onSubmit:a((function(e){console.log(e)})),children:(0,x.jsxs)("div",{className:"address-form",children:[(0,x.jsx)("h1",{children:"Add New Address"}),(0,x.jsx)("div",{className:"input-container mt-3",children:(0,x.jsx)(m.Cu,{name:"repeatPassword",className:"text-input mt-3",placeholder:"Select from Map",register:s})}),(0,x.jsx)("div",{children:(0,x.jsx)("p",{children:"Use Current Location"})}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"Full Name"}),(0,x.jsx)(m.Cu,{name:"repeatPassword",className:"text-input mt-3",register:s})]}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"Mobile Number"}),(0,x.jsx)(m.Cu,{name:"mobileNumber",className:"text-input mt-3",register:s})]}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"Pincode"}),(0,x.jsx)(m.Cu,{name:"repeatPassword",className:"text-input mt-3",register:s})]}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"Flat No, House No, Building, Apartment"}),(0,x.jsx)(m.Cu,{name:"repeatPassword",className:"text-input mt-3",register:s})]}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"Area, State, Street, Village"}),(0,x.jsx)(m.Cu,{name:"repeatPassword",className:"text-input mt-3",register:s})]}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"Landmark"}),(0,x.jsx)(m.Cu,{name:"repeatPassword",className:"text-input mt-3",register:s})]}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"Town/City"}),(0,x.jsx)(m.Cu,{name:"repeatPassword",className:"text-input mt-3",register:s})]}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"State"}),(0,x.jsx)(m.AP,{menuItemList:[{label:"Delhi",value:"delhi"}]})]}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"Country"}),(0,x.jsx)(m.AP,{menuItemList:[{label:"India",value:"india"}]})]}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"Select Address Type"}),(0,x.jsx)(m.AR,{name:"addressType",className:"text-input",register:s,radioOptions:[{labelText:"Home",value:"home",id:"addressType"},{labelText:"Office",value:"office",id:"addressType"}]})]}),(0,x.jsx)("div",{className:"mt-5 mb-4",children:(0,x.jsx)(m.UO,{label:"Add Address",saveBtn:!0})})]})})}function v(){return(0,x.jsx)("div",{children:(0,x.jsx)(j,{})})}var N=a(2040);function p(e){var s,a,d=e.changePassword,c=e.passwordError,t=(0,o.cI)(),h=t.register,u=t.handleSubmit,j=t.formState.errors,v=(0,n.useState)({}),N=(0,r.Z)(v,2),p=N[0],f=N[1],C=function(e){var s=(0,l.Z)({},e.target.name,e.target.value);f((0,i.Z)((0,i.Z)({},p),s))};return(0,x.jsx)("form",{onSubmit:u(d),children:(0,x.jsxs)("div",{className:"password-form",children:[(0,x.jsx)("h6",{children:"Change Password"}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"Current Password "}),(0,x.jsx)(m.Cu,{name:"password",className:"text-input mt-3",onChange:C,type:"password",value:p.password,register:h})]}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"New Password "}),(0,x.jsx)(m.Cu,{name:"newPassword",className:"text-input mt-3",onChange:C,value:p.newPassword,type:"password",register:h}),(0,x.jsx)("div",{className:"error-message",children:(null===(s=j.newPassword)||void 0===s?void 0:s.type)&&(0,x.jsx)("span",{className:"error-text",children:"New Password is required"})})]}),(0,x.jsxs)("div",{className:"input-container mt-4",children:[(0,x.jsx)("label",{children:"Confirm New Password "}),(0,x.jsx)(m.Cu,{name:"repeatPassword",className:"text-input mt-3",onChange:C,register:h,type:"password",value:p.repeatPassword}),(0,x.jsxs)("div",{className:"error-message",children:[c?(0,x.jsx)("span",{className:"error-text",children:"New Password and Confirm New Password should be same!"}):(0,x.jsx)(x.Fragment,{}),(null===(a=j.repeatPassword)||void 0===a?void 0:a.type)&&(0,x.jsx)("span",{className:"error-text",children:"Repeat Password is required"})]})]}),(0,x.jsx)("div",{className:"mt-5",children:(0,x.jsx)(m.UO,{label:"Change Password",saveBtn:!0,type:"submit"})})]})})}var f=a(94953),C=a(50983),g=function(e){return(0,x.jsx)("svg",(0,i.Z)((0,i.Z)({width:14,height:18,fill:"none"},e),{},{children:(0,x.jsx)("path",{d:"M1 16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4H1v12ZM14 1h-3.5l-1-1h-5l-1 1H0v2h14V1Z",fill:"#F14C54"})}))},w=function(e){var s=e.wishlistData,a=s.id,i=s.title,l=s.color,r=s.price,n=s.image,d=e.deleteFavItem;return(0,x.jsxs)("div",{className:"orders-card",children:[(0,x.jsxs)("div",{className:"flex",children:[(0,x.jsx)("img",{src:n?n[0]:"",height:"200px",width:"200px",alt:"product"}),(0,x.jsxs)("div",{className:"direction-col left-margin",children:[(0,x.jsx)("div",{className:"flex space-between",children:(0,x.jsx)("div",{className:"title",children:i})}),(0,x.jsx)("div",{className:"flex space-between",children:(0,x.jsx)("div",{className:"color",children:"Color - ".concat(l)})}),(0,x.jsx)("div",{className:"flex space-between mt-5",children:(0,x.jsx)("div",{className:"amount mt-4",children:"\u20b9".concat(r)})})]})]}),(0,x.jsx)("div",{className:"pt-2 ps-4",onClick:function(){return d(a)},children:(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)(g,{}),(0,x.jsx)("label",{className:"remove-item-label ps-1",children:"Remove"})]})})]})};var b=function(e){var s=e.wishlistItemData,a=(0,f.I0)(),i=function(e){var i=s.filter((function(s){return s.id!==e}));a({type:C.B.wishlistItem,payload:i})};return(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"d-flex align-items-center",children:(0,x.jsx)("div",{children:(0,x.jsx)(m.sn,{placeholder:"Search For Orders"})})}),s.map((function(e){return(0,x.jsx)(w,{wishlistData:e,deleteFavItem:i},e.id)}))]})},A=a(31909),y=(a(55414),a(28060)),P=function(e){return(0,x.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M10.0068 0C11.6245 0 13.2361 0.399066 14.668 1.15403C19.5432 3.72638 21.4181 9.78549 18.8475 14.6624C17.0942 17.9879 13.642 20 9.9953 20C9.28286 20 8.56338 19.9234 7.84741 19.7648C7.44408 19.6749 7.18958 19.275 7.27852 18.8715C7.36747 18.468 7.7664 18.2152 8.17237 18.3024C11.8966 19.1305 15.7415 17.3431 17.523 13.9638C19.7088 9.81809 18.1148 4.66546 13.9696 2.47897C12.7526 1.83676 11.3823 1.4976 10.0059 1.4976C5.31029 1.4976 1.4971 5.31119 1.4971 9.99868C1.49534 11.3641 1.82823 12.7234 2.45965 13.9312L2.65163 14.3065C2.88676 14.747 2.93872 15.294 2.78636 15.7891C2.57589 16.3441 2.40064 16.8841 2.25622 17.4215C2.81807 17.2523 3.50409 17.003 3.99989 16.8224L4.20332 16.7493C4.58816 16.6057 5.02055 16.8092 5.16146 17.1986C5.30236 17.5871 5.10069 18.017 4.71233 18.1571L4.51154 18.2302C3.77004 18.4989 2.75554 18.868 2.0704 19.0213C2.01228 19.0336 1.94975 19.0415 1.89251 19.0398C1.43282 19.0398 1.15277 18.8539 0.99866 18.6971C0.761767 18.4566 0.649045 18.1192 0.662255 17.6946C0.664016 17.6461 0.670181 17.5959 0.681629 17.5475C0.859519 16.7899 1.09113 16.034 1.37117 15.3019C1.39143 15.2306 1.3791 15.1011 1.32186 14.9927L1.129 14.6183C0.390136 13.2035 -0.0017495 11.6029 5.87135e-06 9.9978C5.87135e-06 4.48487 4.48424 0 9.9953 0H10.0068ZM9.99565 8.8095C10.6517 8.8095 11.1845 9.34335 11.1845 9.99877C11.1845 10.6542 10.6517 11.188 9.99565 11.188C9.33958 11.188 8.80679 10.6542 8.80679 9.99877C8.80679 9.34335 9.33958 8.8095 9.99565 8.8095ZM14.3989 8.8095C15.0549 8.8095 15.5877 9.34335 15.5877 9.99877C15.5877 10.6542 15.0549 11.188 14.3989 11.188C13.7428 11.188 13.21 10.6542 13.21 9.99877C13.21 9.34335 13.7428 8.8095 14.3989 8.8095ZM5.59235 8.80985C6.24843 8.80985 6.78122 9.34282 6.78122 9.99912C6.78122 10.6545 6.24843 11.1875 5.59235 11.1875C4.93628 11.1875 4.40349 10.6545 4.40349 9.99912C4.40349 9.34282 4.93628 8.80985 5.59235 8.80985Z",fill:"white"})})};function I(){var e=(0,n.useState)(!1),s=(0,r.Z)(e,2),a=s[0],i=s[1],l=(0,y.k6)(),d=function(){return i((function(e){return!e}))},c=[{productName:"Diamond Wallpaper",color:"green",image:A,price:"\u20b93500"},{productName:"Bird Wallpaper",color:"green",image:A,price:"\u20b93500"}];return(0,x.jsxs)("div",{className:"profile-page",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("div",{children:(0,x.jsx)(m.sn,{placeholder:"Search For Orders"})}),(0,x.jsx)("div",{className:"custom-select",children:(0,x.jsx)(m.AP,{menuItemList:[{label:"This Month",value:"this"},{label:"Current Month",value:"current"},{label:"Previous Month",value:"previous"},{label:"Daily",value:"daily"},{label:"Yearly",value:"yearly"},{label:"Last year",value:"last"},{label:"Current year",value:"current"}]})})]}),a?(0,x.jsxs)("div",{className:"orders-card",children:[(0,x.jsx)("div",{className:"deliver-head",children:"Yayy, Your order has been successfully delivered"}),(0,x.jsx)("div",{className:"deliver-subtitle",children:"Placed on Fri, 25th Nov, 05:00PM"}),(0,x.jsxs)("div",{className:"payment-info",children:[(0,x.jsx)("div",{className:"mode-text",children:"Mode of Payment"}),(0,x.jsx)("div",{className:"mode-detail",children:"Net Banking: Kotak Bank"})]}),(0,x.jsxs)("div",{className:"bill-details",children:[(0,x.jsx)("div",{className:"total-item",children:"2 items"}),(0,x.jsx)("div",{className:"order-id",children:"Order ID: ord123456789"}),c.map((function(e){return(0,x.jsxs)("div",{className:"d-flex flex-row orderList",children:[(0,x.jsx)("img",{src:e.image,alt:"wallimage",width:66.64,height:70}),(0,x.jsxs)("div",{className:"products",children:[(0,x.jsx)("div",{className:"product-name",children:e.productName}),(0,x.jsxs)("div",{className:"product-color",children:["Color - ",e.color]})]}),(0,x.jsx)("div",{className:"price",children:e.price})]})})),(0,x.jsx)("div",{className:"bill-det-txt",children:"Bill Details"}),(0,x.jsxs)("div",{className:"detail-row",children:[(0,x.jsx)("span",{className:"name",children:"Price(2 item)"}),(0,x.jsx)("span",{className:"price",children:"\u20b9 2599"})]}),(0,x.jsxs)("div",{className:"detail-row",children:[(0,x.jsx)("span",{className:"name",children:"Delivery Charges"}),(0,x.jsx)("span",{className:"free",children:"Free"})]}),(0,x.jsxs)("div",{className:"detail-row",children:[(0,x.jsx)("span",{className:"name",children:"Packaging Charges"}),(0,x.jsx)("span",{className:"price me-2",children:"\u20b9 99"})]}),(0,x.jsxs)("div",{className:"detail-row",children:[(0,x.jsx)("span",{className:"name",children:"Installation Charges"}),(0,x.jsx)("span",{className:"price me-2",children:"\u20b9 499"})]}),(0,x.jsxs)("div",{className:"detail-row",children:[(0,x.jsx)("span",{className:"name",children:"GST Charges"}),(0,x.jsx)("span",{className:"price me-2",children:"\u20b9 299"})]}),(0,x.jsx)("div",{className:"hr-line"}),(0,x.jsxs)("div",{className:"detail-row",children:[(0,x.jsx)("span",{className:"name",children:"Sub Total Price"}),(0,x.jsx)("span",{className:"price",children:"\u20b9 3297"})]}),(0,x.jsxs)("div",{className:"detail-row",children:[(0,x.jsx)("span",{className:"name",children:"Coupon Discount"}),(0,x.jsx)("span",{className:"price me-2",children:"\u20b9 298"})]}),(0,x.jsx)("div",{className:"hr-line"}),(0,x.jsxs)("div",{className:"detail-row",children:[(0,x.jsx)("span",{className:"name",children:"Total Amount to be paid"}),(0,x.jsx)("span",{className:"price",children:"\u20b9 2999"})]}),(0,x.jsxs)("div",{className:"payment-info",children:[(0,x.jsx)("div",{className:"mode-text mb-2",children:"Delivery Address"}),(0,x.jsx)("div",{className:"mode-detail",children:"Home- 104,NEW ARYA NAGAR,GHAZIABAD,U.P.,DIST GHAZIABAD 201301"})]}),(0,x.jsxs)(m.op,{className:"chat-btn",onClick:d,children:[(0,x.jsx)(P,{height:20,width:20})," \xa0 \xa0 Chat With Us"]})]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"orders-card",children:[(0,x.jsxs)("div",{className:"flex",children:[(0,x.jsx)("img",{src:A,alt:"wallimage"}),(0,x.jsxs)("div",{className:"direction-col left-margin",children:[(0,x.jsxs)("div",{className:"d-flex space-between",children:[(0,x.jsx)("div",{className:"title",onClick:function(){return l.push("/profile/order-details")},children:"Diamond Wallpaper"}),(0,x.jsx)("div",{children:(0,x.jsx)(m.op,{className:"view-details-btn",onClick:d,children:"View Details"})})]}),(0,x.jsx)("div",{className:"flex space-between",children:(0,x.jsx)("div",{className:"color",children:"Color - Green "})}),(0,x.jsx)("div",{className:"flex space-between",children:(0,x.jsx)("div",{className:"amount",children:"\u20b93500"})}),(0,x.jsx)("div",{className:"flex space-between",children:(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"payment-mode",children:"Mode of Payment"}),(0,x.jsx)("div",{className:"payment-bank",children:"Net Banking: Kotak Bank"})]})})]})]}),(0,x.jsx)("div",{className:"flex space-between mt-4"})]}),(0,x.jsx)("div",{className:"orders-card",children:(0,x.jsxs)("div",{className:"flex",children:[(0,x.jsx)("img",{src:A,alt:"walliMAGE"}),(0,x.jsxs)("div",{className:"direction-col left-margin",children:[(0,x.jsxs)("div",{className:"flex space-between",children:[(0,x.jsx)("div",{className:"title",onClick:function(){return l.push("/profile/order-details")},children:"Diamond Wallpaper"}),(0,x.jsx)("div",{children:(0,x.jsx)(m.op,{className:"view-details-btn",children:"View Details"})})]}),(0,x.jsx)("div",{className:"flex space-between",children:(0,x.jsx)("div",{className:"color",children:"Color - Green "})}),(0,x.jsx)("div",{className:"flex space-between",children:(0,x.jsx)("div",{className:"amount",children:"\u20b93500"})}),(0,x.jsxs)("div",{className:"flex space-between",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"payment-mode",children:"Mode of Payment"}),(0,x.jsx)("div",{className:"payment-bank",children:"Net Banking: Kotak Bank"})]}),(0,x.jsx)("div",{})]})]})]})})]})]})}var T=a(65437),k=a(70128),D=a(73241),E=a(4405),S=(a(75215),a(97443)),Z=a(4326);function O(e){var s=e.wishlistItemData,a=e.updateProfileAPICall,m=e.currentUserData,o=e.changeCurrentPasswordAPI,j=e.verifyOTPApiCall,N=(0,y.TH)(),f=(0,n.useState)(m.user),C=(0,r.Z)(f,2),g=C[0],w=C[1],A=(0,n.useState)(null===N||void 0===N?void 0:N.state),P=(0,r.Z)(A,2),D=P[0],E=P[1],O=(0,n.useState)(m.user),M=(0,r.Z)(O,2),B=M[0],G=M[1],F=(0,n.useState)(!0),U=(0,r.Z)(F,2),L=U[0],R=U[1],H=n.useState(!1),V=(0,r.Z)(H,2),Y=V[0],K=V[1],Q=(0,n.useState)(!1),W=(0,r.Z)(Q,2),J=W[0],q=W[1],z=function(){window.scrollTo(0,0)};return(0,n.useEffect)((function(){z(),G(m.user)}),[D]),(0,n.useEffect)((function(){E(null===N||void 0===N?void 0:N.state)}),[null===N||void 0===N?void 0:N.state]),L?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"profile-main",children:(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"breadcrumbs",children:(0,x.jsx)(t.Z,{crumbs:["Home","Profile"]})}),(0,x.jsxs)("div",{className:"card-main",children:[(0,x.jsx)("div",{children:(0,x.jsx)("img",{src:d})}),(0,x.jsxs)("div",{className:"card-content",children:[(0,x.jsx)("h6",{children:"Hello,"}),(0,x.jsx)("h2",{children:"".concat(B.firstName," ").concat(B.lastName)})]})]}),(0,x.jsxs)(c.mQ,{className:"tab-menus",selectedIndex:D||0,onSelect:function(e){z(),E(e)},children:[(0,x.jsxs)(c.td,{className:"tab-list",children:[(0,x.jsx)(c.OK,{children:"Profile"}),(0,x.jsx)(c.OK,{children:"My Orders"}),(0,x.jsx)(c.OK,{children:"My Wishlist"}),(0,x.jsx)(c.OK,{children:"Saved Addresses"}),(0,x.jsx)(c.OK,{children:"Change Password"}),(0,x.jsx)(c.OK,{onClick:function(){(0,Z.k)()},children:"Sign Out"})]}),(0,x.jsx)("img",{src:k,className:"chatIcon"}),(0,x.jsxs)("div",{className:"card-info",children:[(0,x.jsx)(c.x4,{children:(0,x.jsx)(h,{handleInput:function(e){var s=(0,l.Z)({},e.target.name,e.target.value);w((0,i.Z)((0,i.Z)({},g),s))},inputData:g,updateProfile:function(){var e={firstName:g.firstName,lastName:g.lastName,phoneNumber:g.mobile,roleType:g.profile,gender:g.gender};a(e).then((function(){K(!0)}))},open:Y,setOpen:K,verifyOTP:function(e){var s={phoneNumber:g.mobile,otp:e};j(s).then((function(){T.m.push("/auth/login")}))}})}),(0,x.jsx)(c.x4,{children:(0,x.jsx)(I,{})}),(0,x.jsx)(c.x4,{children:(0,x.jsx)(b,{wishlistItemData:s})}),(0,x.jsx)(c.x4,{children:(0,x.jsx)(u,{showAddressForm:function(){R(!L)}})}),(0,x.jsx)(c.x4,{children:(0,x.jsx)(p,{changePassword:function(e){var s={newPassword:e.newPassword,confirmPassword:e.repeatPassword};e.newPassword===e.repeatPassword?(q(!1),o(s).then((function(){(0,S.F)({type:"success",message:"Password Updated!"})}))):q(!0)},passwordError:J})})]})]})]})})}):(0,x.jsx)(v,{})}var M=(0,f.$j)((function(e){return{wishlistItemData:e.commonStore.wishlistItemState,currentUserData:e.commonStore.currentUserState}}),(function(e){return(0,N.DE)({updateProfileAPICall:D.ck,changeCurrentPasswordAPI:D.dC,verifyOTPApiCall:E.gV},e)}))(O)},57357:function(e,s,a){a.d(s,{Z:function(){return t}});a(29867);var i=a(33618),l=a(48314),r=a(87768),n=a(2300),d=a(92834);function c(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function t(e){var s=e.crumbs;return(0,d.jsx)(r.Z,{spacing:2,children:(0,d.jsx)(i.Z,{separator:(0,d.jsx)(n.Z,{fontSize:"small",color:"primary"}),"aria-label":"breadcrumb",children:s.map((function(e,s){return(0,d.jsx)(l.Z,{underline:"hover",onClick:c,children:e},s+1)}))})})}},55414:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgBpVXLTcNAEJ2ZTe4585GcCuDOxa7AkfjeQipIOsBUgCiBKyCUDjYdUEJAELhyJmQHTxRHG8fr7MpPsmTv/N6Mn8cAAfjU58cf+iwOiSEIwzUBxSEBQQWIMEWCYVCMr+NqNFF+dULG5F2gpVS/uEfAnm+cdwFmjtdBhH3fOK8CM30qjCPryHtMONW9ThvatS2TwhQYNn0QJ2ZhHuri5jAfo9x866uIyegSyyZ4WxgzOEyeJ2ifzvRFlsvwBhrAGL7PmWfdZPwjz1h2aNDNmrV9iC7vkG7KrL0KCL705QiI73YlP0ieRi57rUxRmRR2gBQc1eZwGVbvYgo+aP1Feycv71UmZwcMvPVtyDjYwO2W729r4MrjHhGxvTVFIYnMej95zNBQV84KYy4G5+qoHJH8WPJ981qwdinEVpoQKEvU2YFSNLRZVyUX2N2EbNilPGVHQQCWkq7AP5zGmGqR2sYPAAAAAElFTkSuQmCC"},31909:function(e,s,a){e.exports=a.p+"static/media/wallImage.1b3d2233a8bb345ee97e.png"}}]);
//# sourceMappingURL=599.1eed6ed4.chunk.js.map