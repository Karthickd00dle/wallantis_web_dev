"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[3155,4250],{4405:function(e,s,n){n.d(s,{gV:function(){return i},lx:function(){return t},xS:function(){return l}});var r=n(1413),a=n(64681),l=function(e){return function(s,n,l){var t=l.apiCall,i=l.Toast;return new Promise((function(s,n){t((0,r.Z)((0,r.Z)({},a.iJ.registationApi),{},{body:e})).then((function(e){s(e)})).catch((function(e){var s=e.message;n(i({type:"error",message:s}))}))}))}},t=function(e){return function(s,n,l){var t=l.apiCall,i=l.Toast;return new Promise((function(s,n){t((0,r.Z)((0,r.Z)({},a.iJ.loginApi),{},{body:e})).then((function(e){localStorage.setItem("authToken",e),s(e)})).catch((function(e){var s=e.message;n(i({type:"error",message:s}))}))}))}},i=function(e){return function(s,n,l){var t=l.apiCall,i=l.Toast;return new Promise((function(s,n){t((0,r.Z)((0,r.Z)({},a.iJ.verifyOTP),{},{body:e})).then((function(e){s(e),i({type:"error",message:e.message})})).catch((function(e){var s=e.message;n(i({type:"error",message:s}))}))}))}}},74250:function(e,s,n){n.r(s),n.d(s,{default:function(){return p}});n(29867);var r=n(65437),a=n(2040),l=n(94953),t=n(4405),i=n(94910),c=n(42618),o=n(21186),d=n(14811),u=n(28060),m=n(11537),x=n(92834);var p=(0,l.$j)((function(e,s){return{ownProps:s}}),(function(e){return(0,a.DE)({loginApiCall:t.lx},e)}))((function(e){var s=e.loginApiCall,n=e.ownProps,a=(0,u.TH)().pathname.split("/").slice(-1)[0],l=(0,d.cI)(),t=l.register,p=l.handleSubmit,h=l.formState.errors;return(0,x.jsx)("form",{onSubmit:p((function(e){s({username:e.mailId,password:e.password,loginType:3}).then((function(e){var s,l;console.log(null===e||void 0===e||null===(s=e.response)||void 0===s?void 0:s.access_token),localStorage.setItem("authToken",null===e||void 0===e||null===(l=e.response)||void 0===l?void 0:l.access_token),(0,m.aV)("payment-page"===a?n.setActiveStep(1):r.m.push("/home/home"))})).catch((function(e){console.log(e)}))})),children:(0,x.jsxs)("div",{className:"login-entries ",children:[(0,x.jsxs)("div",{className:"d-flex flex-column",children:[(0,x.jsx)(c.t,{placeholder:"Enter Email/Mobile number",variant:"standard",name:"mailId",className:"email-mobile-input-field mt-4",register:t,errors:h}),(0,x.jsx)(c.t,{placeholder:"Enter Password",variant:"standard",className:"password-input-field mt-4",type:"password",min:8,max:20,name:"password",register:t,errors:h,endAdornment:(null===n||void 0===n?void 0:n.postlogin)&&(0,x.jsx)(o.Z,{position:"end",children:(0,x.jsx)("label",{onClick:function(){r.m.push("/auth/forgotpassword")},className:"forget-text-inputfield cursor-pointer",children:"Forget?"})})}),!(null!==n&&void 0!==n&&n.postlogin)&&(0,x.jsx)("div",{className:"d-flex justify-content-end",children:(0,x.jsx)("label",{onClick:function(){r.m.push("/auth/forgot-password")},className:"forget-text-inputfield cursor-pointer pt-3",children:"Forgot?"})})]}),(0,x.jsx)("div",{className:"login-terms",children:(0,x.jsxs)("label",{children:["By continuing, you agree to Paperwall ",(0,x.jsx)("a",{href:"",children:"Terms of use"})," ","and ",(0,x.jsx)("a",{href:"",children:"Privacy policy"})]})}),(0,x.jsx)(i.op,{style:{backgroundColor:"#A26220",color:"#FFFFFF"},className:"login-button",type:"submit",children:"Login"}),(null===n||void 0===n?void 0:n.postlogin)&&(0,x.jsxs)("div",{className:"login-register-post",children:["Don\u2019t have an account",(0,x.jsx)("a",{className:"ps-2 cursor-pointer",onClick:function(){r.m.push("/auth/register")},children:"Create a account"})]}),!(null!==n&&void 0!==n&&n.postlogin)&&(0,x.jsxs)("div",{className:"login-register",children:[(0,x.jsx)("label",{className:"dont-have-account-text",children:"Don\u2019t have an account?"}),(0,x.jsx)("label",{className:"register-now-text ps-2 cursor-pointer",onClick:function(){r.m.push("/auth/register")},children:"Register Now"})]})]})})}))},76168:function(e,s,n){n.d(s,{H:function(){return u}});var r=n(29439),a=n(29867),l=n.p+"static/media/custom-recipe-wallpaper.58c60f0661e5ebaa19e9.png",t=n(94953),i=n(94910),c=n(58037),o=n(14811),d=n(92834),u=(0,t.$j)((function(e){return{cartItemData:e.commonStore.cartItemState}}),null)((function(e){var s=e.cartItemData,n=(0,o.cI)(),t=n.register,u=n.formState.errors,m=(0,a.useState)(s),x=(0,r.Z)(m,2),p=x[0],h=x[1],j=(0,a.useState)(""),f=(0,r.Z)(j,2),v=f[0],N=f[1];return(0,a.useEffect)((function(){N(p.reduce((function(e,s){return Number(e+s.price)}),0)),h(s)}),[p]),(0,d.jsxs)("div",{className:"order-summary",children:[(0,d.jsx)("label",{className:"text-title pb-3",children:"Order Summary"}),(0,d.jsxs)("div",{className:"d-flex align-items-center\r ",children:[(0,d.jsx)("img",{height:"130px",width:"130px",src:l,alt:"product icon"}),(0,d.jsxs)("div",{className:"ps-3",children:[(0,d.jsx)("p",{className:"item-label",children:"Custom Recipe wallpaper, Handwritten Recipe"}),(0,d.jsxs)("div",{className:"d-flex justify-content-between order-count-container",children:[(0,d.jsx)("div",{className:"me-1 order-count cursor-pointer",children:"-"}),(0,d.jsx)(i.Cu,{max:"2",name:"add",className:"mx-1 order-count-input",value:p.length,register:t,errors:u}),(0,d.jsx)("div",{className:"order-count ms-1 cursor-pointer",children:"+"})]})]})]}),(0,d.jsxs)("div",{className:"order-installation-date",children:[(0,d.jsx)("label",{className:"order-installation-text",children:"Installation on Fri 25, Nov - 02:00PM"}),(0,d.jsx)("p",{className:"pe-3",children:"Edit"})]}),(0,d.jsxs)("div",{className:"coupon-container py-4",children:[(0,d.jsx)("label",{className:"coupon-text",children:"Coupon"}),(0,d.jsx)(c.Z,{className:"coupon-code-textbox mt-2",id:"filled-start-adornment",InputProps:{endAdornment:(0,d.jsx)("label",{className:"apply-coupon-text cursor-pointer",children:"APPLY"})},variant:"outlined"})]}),(0,d.jsxs)("div",{className:"price-breakup-container py-3",children:[(0,d.jsx)("label",{className:"price-breakup-text",children:"Price Breakup Details"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"d-flex justify-content-between\r ",children:[(0,d.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[(0,d.jsx)("label",{className:"price-content-title\r ",children:"Price (2 item)"}),(0,d.jsx)("label",{className:" price-content-title\r ",children:"Delivery Charges"}),(0,d.jsx)("label",{className:"price-content-title\r ",children:"Packaging Charges"}),(0,d.jsx)("label",{className:"price-content-title\r ",children:"Installation Charges"}),(0,d.jsx)("label",{className:"price-content-title\r ",children:"GST Charges"})]}),(0,d.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[(0,d.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 2599"}),(0,d.jsx)("label",{className:"text-green-15 price-content-title\r ",children:"FREE"}),(0,d.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 99"}),(0,d.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 499"}),(0,d.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 299"})]})]}),(0,d.jsxs)("div",{className:"sub-total-coupon-container py-1 my-1 d-flex justify-content-between",children:[(0,d.jsxs)("div",{className:"d-flex flex-column",children:[(0,d.jsx)("label",{className:"price-content-title\r ",children:"Sub Total Price"}),(0,d.jsx)("label",{className:"price-content-title\r ",children:"Coupon Discount"})]}),(0,d.jsxs)("div",{className:"d-flex flex-column",children:[(0,d.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 3297"}),(0,d.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 298"})]})]}),(0,d.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,d.jsx)("label",{className:"price-content-title\r ",children:"Total Amount to be paid"}),(0,d.jsxs)("label",{className:"text-light_bg fw-700 fs-24 price-content-item \r ",children:["\u20b9 ",v]})]})]})]})]})}))},64977:function(e,s,n){n.r(s),n.d(s,{DeliveryAddress:function(){return j},default:function(){return b}});var r=n(29439),a=n(29867),l=n(76168),t=n(94910),i=n(11537),c=n(38272),o=n(55856),d=n(91646),u=n(58037),m=n(74250),x=n(14811),p=n(65437),h=n(92834);function j(e){var s=e.dataItems,n=e.setActiveStep,l=a.useState(),c=(0,r.Z)(l,2),u=c[0],m=c[1];return(0,h.jsx)("div",{className:"address-container",children:(0,h.jsx)(o.Z,{"aria-labelledby":"demo-customized-radios",name:"controlled-radio-buttons-group",onChange:function(e){m(e.target.value)},value:u,children:null===s||void 0===s?void 0:s.map((function(e){var s=e.id,r=e.name,a=e.phoneno,l=e.address;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"address-data-container my-2",children:[(0,h.jsx)(d.Z,{value:s,control:(0,h.jsx)(t.Pz,{})}),(0,h.jsxs)("div",{className:"address-info-container",children:[(0,h.jsx)("label",{className:"address-name",children:r}),(0,h.jsx)("label",{className:"address-phone py-3",children:a}),(0,h.jsx)("label",{className:"address-address",children:l}),(0,i.s6)(s===u,(0,h.jsx)(t.op,{onClick:function(){return n(2)},className:"deliver-here-button mt-5 mb-3",children:"Deliver Here"}))]}),(0,h.jsx)("label",{className:"edit-address-info cursor-pointer",children:"EDIT"})]})})}))})})}var f=function(){var e=(0,x.cI)(),s=e.register,n=(e.handleSubmit,e.formState.errors);return(0,h.jsx)("form",{children:(0,h.jsxs)("div",{className:"card-detail-container p-3",children:[(0,h.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,h.jsx)("label",{children:"Card Type"}),(0,h.jsx)(u.Z,{placeholder:"Credit Card",className:"card-inputs",name:"creditcard",errors:n,register:s})]}),(0,h.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,h.jsx)("div",{className:"pb-2\r "}),(0,h.jsx)(u.Z,{placeholder:"Debit Card",name:"debitcard",className:"card-inputs pt-4",errors:n,register:s})]}),(0,h.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,h.jsx)("label",{children:"Card Number"}),(0,h.jsx)(u.Z,{placeholder:"Card Number",name:"cardnumber",className:"card-inputs",errors:n,register:s})]}),(0,h.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,h.jsx)("label",{children:"Name on Card"}),(0,h.jsx)(u.Z,{placeholder:"Name on Card",name:"nameoncard",className:"card-inputs",errors:n,register:s})]}),(0,h.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,h.jsx)("label",{children:"Valid on"}),(0,h.jsx)(u.Z,{placeholder:"Valid on",name:"validon",className:"card-inputs",errors:n,register:s})]}),(0,h.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,h.jsx)("label",{children:"CVV"}),(0,h.jsx)(u.Z,{placeholder:"CVV",name:"cvv",className:"card-inputs",errors:n,register:s})]})]})})},v=function(e){return(0,h.jsxs)(h.Fragment,{children:[(0,i.s6)(1===Number(e),(0,h.jsx)("div",{children:(0,h.jsx)("label",{children:"UPI"})})),(0,i.s6)(2===Number(e),(0,h.jsx)(f,{})),(0,i.s6)(3===Number(e),(0,h.jsx)("div",{children:(0,h.jsx)("label",{children:"Net Bank"})})),(0,i.s6)(4===Number(e),(0,h.jsx)("div",{children:(0,h.jsx)("label",{children:"COD"})}))]})},N=function(){var e=a.useState(),s=(0,r.Z)(e,2),n=s[0],l=s[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.Z,{"aria-labelledby":"demo-customized-radios",name:"controlled-radio-buttons-group",onChange:function(e){l(e.target.value)},value:n,children:c.z9.map((function(e){var s=e.id,r=e.label;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"payment-method-container px-4 py-2 my-2  ".concat((0,i.s6)(s===Number(n),"active-payment-method")),children:[(0,h.jsx)(d.Z,{value:s,control:(0,h.jsx)(t.Pz,{})}),(0,h.jsx)("label",{children:r})]}),(0,i.s6)(s===Number(n),v(n))]})}))}),(0,h.jsx)(t.op,{className:"mt-5 py-3 px-5",style:{backgroundColor:"#A26220",color:"#FFFFFF"},onClick:function(){return p.m.push("/home/success-page")},children:"PAY \u20b92999"})]})};function b(){var e=a.useState(0),s=(0,r.Z)(e,2),n=s[0],i=s[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.Dv,{}),(0,h.jsxs)("div",{className:"d-flex justify-content-between payment-container",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(t.kz,{activeStep:n}),(0,h.jsx)(t.Ok,{className:"pt-4",value:n,index:0,children:(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{className:"login-or-signup-text",children:"Login / Signup"}),(0,h.jsx)(m.default,{setActiveStep:i,postlogin:!0,className:"login-container-style"})]})}),(0,h.jsx)(t.Ok,{className:"pt-4",value:n,index:1,children:(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{className:"login-or-signup-text",children:"Select Delivery Address"}),(0,h.jsx)(j,{setActiveStep:i,dataItems:c.MP})]})}),(0,h.jsx)(t.Ok,{className:"pt-4",value:n,index:2,children:(0,h.jsxs)("div",{className:"payment-screen-container",children:[(0,h.jsx)("label",{children:"Select Payment Method"}),(0,h.jsx)(N,{})]})})]}),(0,h.jsx)("div",{className:"order-summary-contain",children:(0,h.jsx)(l.H,{})})]})]})}}}]);
//# sourceMappingURL=3155.e70c2940.chunk.js.map