"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[3155,289],{20289:function(e,s,n){n.r(s),n.d(s,{Login:function(){return N},default:function(){return j}});n(29867);var a=n(3366),r=n(2040),l=n(94953),i=n(1413),t=n(64681),c=function(e){return function(s,n,a){var r=a.apiCall,l=a.Toast;return new Promise((function(s,n){r((0,i.Z)((0,i.Z)({},t.iJ.loginApi),{},{body:e})).then((function(e){var n=e.data;localStorage.setItem("authToken",n),s(n)})).catch((function(e){var s=e.message;n(l({type:"error",message:s}))}))}))}},o=n(75198),d=n(42618),m=n(21186),u=n(14811),x=n(28060),h=n(60144),p=n(92834);function j(e){var s=e.loginApiCall,n=e.ownProps,r=(0,x.TH)().pathname.split("/").slice(-1)[0],l=(0,u.cI)(),i=l.register,t=l.handleSubmit,c=l.formState.errors;return(0,p.jsx)("form",{onSubmit:t((function(e){s({username:e.mailId,password:e.password}).then((function(){localStorage.setItem("authToken",i.mailId),(0,h.aV)("payment-page"===r?n.setActiveStep(1):a.m.push("/home/home"))})).catch((function(e){console.log(e)}))})),children:(0,p.jsxs)("div",{className:"login-entries ",children:[(0,p.jsxs)("div",{className:"d-flex flex-column",children:[(0,p.jsx)(d.t,{placeholder:"Enter Email/Mobile number",variant:"standard",name:"mailId",className:"email-mobile-input-field mt-4",register:i,errors:c}),(0,p.jsx)(d.t,{placeholder:"Enter Password",variant:"standard",className:"password-input-field mt-4",type:"password",min:8,max:20,name:"password",register:i,errors:c,endAdornment:(null===n||void 0===n?void 0:n.postlogin)&&(0,p.jsx)(m.Z,{position:"end",children:(0,p.jsx)("label",{onClick:function(){a.m.push("/auth/forgotpassword")},className:"forget-text-inputfield cursor-pointer",children:"Forget?"})})}),!(null!==n&&void 0!==n&&n.postlogin)&&(0,p.jsx)("div",{className:"d-flex justify-content-end",children:(0,p.jsx)("label",{onClick:function(){a.m.push("/auth/forgot-password")},className:"forget-text-inputfield cursor-pointer pt-3",children:"Forgot?"})})]}),(0,p.jsx)("div",{className:"login-terms",children:(0,p.jsxs)("label",{children:["By continuing, you agree to Paperwall ",(0,p.jsx)("a",{href:"",children:"Terms of use"})," ","and ",(0,p.jsx)("a",{href:"",children:"Privacy policy"})]})}),(0,p.jsx)(o.op,{style:{backgroundColor:"#A26220",color:"#FFFFFF"},className:"login-button",type:"submit",children:"Login"}),(null===n||void 0===n?void 0:n.postlogin)&&(0,p.jsxs)("div",{className:"login-register-post",children:["Don\u2019t have an account",(0,p.jsx)("a",{className:"ps-2 cursor-pointer",onClick:function(){a.m.push("/auth/register")},children:"Create a account"})]}),!(null!==n&&void 0!==n&&n.postlogin)&&(0,p.jsxs)("div",{className:"login-register",children:[(0,p.jsx)("label",{className:"dont-have-account-text",children:"Don\u2019t have an account?"}),(0,p.jsx)("label",{className:"register-now-text ps-2 cursor-pointer",onClick:function(){a.m.push("/auth/register")},children:"Register Now"})]})]})})}var N=(0,l.$j)((function(e,s){return{ownProps:s}}),(function(e){return(0,r.DE)({loginApiCall:c},e)}))(j)},76168:function(e,s,n){n.d(s,{H:function(){return t}});n(29867);var a=n.p+"static/media/custom-recipe-wallpaper.58c60f0661e5ebaa19e9.png",r=n(75198),l=n(58037),i=n(92834),t=function(){return(0,i.jsxs)("div",{className:"order-summary",children:[(0,i.jsx)("label",{className:"text-title pb-3",children:"Order Summary"}),(0,i.jsxs)("div",{className:"d-flex align-items-center\r ",children:[(0,i.jsx)("img",{height:"130px",width:"130px",src:a,alt:"product icon"}),(0,i.jsxs)("div",{className:"ps-3",children:[(0,i.jsx)("p",{className:"item-label",children:"Custom Recipe wallpaper, Handwritten Recipe"}),(0,i.jsxs)("div",{className:"d-flex justify-content-between order-count-container",children:[(0,i.jsx)("div",{className:"me-1 order-count cursor-pointer",children:"-"}),(0,i.jsx)(r.Cu,{max:"2",className:"mx-1 order-count-input"}),(0,i.jsx)("div",{className:"order-count ms-1 cursor-pointer",children:"+"})]})]})]}),(0,i.jsxs)("div",{className:"order-installation-date",children:[(0,i.jsx)("label",{className:"order-installation-text",children:"Installation on Fri 25, Nov - 02:00PM"}),(0,i.jsx)("a",{className:"pe-3",href:"",children:"Edit"})]}),(0,i.jsxs)("div",{className:"coupon-container py-4",children:[(0,i.jsx)("label",{className:"coupon-text",children:"Coupon"}),(0,i.jsx)(l.Z,{className:"coupon-code-textbox mt-2",id:"filled-start-adornment",InputProps:{endAdornment:(0,i.jsx)("label",{className:"apply-coupon-text cursor-pointer",children:"APPLY"})},variant:"outlined"})]}),(0,i.jsxs)("div",{className:"price-breakup-container py-3",children:[(0,i.jsx)("label",{className:"price-breakup-text",children:"Price Breakup Details"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"d-flex justify-content-between\r ",children:[(0,i.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[(0,i.jsx)("label",{className:"price-content-title\r ",children:"Price (2 item)"}),(0,i.jsx)("label",{className:" price-content-title\r ",children:"Delivery Charges"}),(0,i.jsx)("label",{className:"price-content-title\r ",children:"Packaging Charges"}),(0,i.jsx)("label",{className:"price-content-title\r ",children:"Installation Charges"}),(0,i.jsx)("label",{className:"price-content-title\r ",children:"GST Charges"})]}),(0,i.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[(0,i.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 2599"}),(0,i.jsx)("label",{className:"text-green-15 price-content-title\r ",children:"FREE"}),(0,i.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 99"}),(0,i.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 499"}),(0,i.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 299"})]})]}),(0,i.jsxs)("div",{className:"sub-total-coupon-container py-1 my-1 d-flex justify-content-between",children:[(0,i.jsxs)("div",{className:"d-flex flex-column",children:[(0,i.jsx)("label",{className:"price-content-title\r ",children:"Sub Total Price"}),(0,i.jsx)("label",{className:"price-content-title\r ",children:"Coupon Discount"})]}),(0,i.jsxs)("div",{className:"d-flex flex-column",children:[(0,i.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 3297"}),(0,i.jsx)("label",{className:"price-content-item\r ",children:"\u20b9 298"})]})]}),(0,i.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,i.jsx)("label",{className:"price-content-title\r ",children:"Total Amount to be paid"}),(0,i.jsx)("label",{className:"text-light_bg fw-700 fs-24 price-content-item \r ",children:"\u20b9 2999"})]})]})]})]})}},64977:function(e,s,n){n.r(s),n.d(s,{DeliveryAddress:function(){return j},default:function(){return b}});var a=n(29439),r=n(29867),l=n(76168),i=n(75198),t=n(60144),c=n(77890),o=n(55856),d=n(91646),m=n(58037),u=n(20289),x=n(14811),h=n(3366),p=n(92834);function j(e){var s=e.dataItems,n=e.setActiveStep,l=r.useState(),c=(0,a.Z)(l,2),m=c[0],u=c[1];return(0,p.jsx)("div",{className:"address-container",children:(0,p.jsx)(o.Z,{"aria-labelledby":"demo-customized-radios",name:"controlled-radio-buttons-group",onChange:function(e){u(e.target.value)},value:m,children:null===s||void 0===s?void 0:s.map((function(e){var s=e.id,a=e.name,r=e.phoneno,l=e.address;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"address-data-container my-2",children:[(0,p.jsx)(d.Z,{value:s,control:(0,p.jsx)(i.Pz,{})}),(0,p.jsxs)("div",{className:"address-info-container",children:[(0,p.jsx)("label",{className:"address-name",children:a}),(0,p.jsx)("label",{className:"address-phone py-3",children:r}),(0,p.jsx)("label",{className:"address-address",children:l}),(0,t.s6)(s===m,(0,p.jsx)(i.op,{onClick:function(){return n(2)},className:"deliver-here-button mt-5 mb-3",children:"Deliver Here"}))]}),(0,p.jsx)("label",{className:"edit-address-info cursor-pointer",children:"EDIT"})]})})}))})})}var N=function(){var e=(0,x.cI)(),s=e.register,n=(e.handleSubmit,e.formState.errors);return(0,p.jsx)("form",{children:(0,p.jsxs)("div",{className:"card-detail-container p-3",children:[(0,p.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,p.jsx)("label",{children:"Card Type"}),(0,p.jsx)(m.Z,{placeholder:"Credit Card",className:"card-inputs",name:"creditcard",errors:n,register:s})]}),(0,p.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,p.jsx)("div",{className:"pb-2\r "}),(0,p.jsx)(m.Z,{placeholder:"Debit Card",name:"debitcard",className:"card-inputs pt-4",errors:n,register:s})]}),(0,p.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,p.jsx)("label",{children:"Card Number"}),(0,p.jsx)(m.Z,{placeholder:"Card Number",name:"cardnumber",className:"card-inputs",errors:n,register:s})]}),(0,p.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,p.jsx)("label",{children:"Name on Card"}),(0,p.jsx)(m.Z,{placeholder:"Name on Card",name:"nameoncard",className:"card-inputs",errors:n,register:s})]}),(0,p.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,p.jsx)("label",{children:"Valid on"}),(0,p.jsx)(m.Z,{placeholder:"Valid on",name:"validon",className:"card-inputs",errors:n,register:s})]}),(0,p.jsxs)("div",{className:"d-flex flex-column card-input-container",children:[(0,p.jsx)("label",{children:"CVV"}),(0,p.jsx)(m.Z,{placeholder:"CVV",name:"cvv",className:"card-inputs",errors:n,register:s})]})]})})},v=function(e){return(0,p.jsxs)(p.Fragment,{children:[(0,t.s6)(1===Number(e),(0,p.jsx)("div",{children:(0,p.jsx)("label",{children:"UPI"})})),(0,t.s6)(2===Number(e),(0,p.jsx)(N,{})),(0,t.s6)(3===Number(e),(0,p.jsx)("div",{children:(0,p.jsx)("label",{children:"Net Bank"})})),(0,t.s6)(4===Number(e),(0,p.jsx)("div",{children:(0,p.jsx)("label",{children:"COD"})}))]})},f=function(){var e=r.useState(),s=(0,a.Z)(e,2),n=s[0],l=s[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.Z,{"aria-labelledby":"demo-customized-radios",name:"controlled-radio-buttons-group",onChange:function(e){l(e.target.value)},value:n,children:c.z9.map((function(e){var s=e.id,a=e.label;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"payment-method-container px-4 py-2 my-2  ".concat((0,t.s6)(s===Number(n),"active-payment-method")),children:[(0,p.jsx)(d.Z,{value:s,control:(0,p.jsx)(i.Pz,{})}),(0,p.jsx)("label",{children:a})]}),(0,t.s6)(s===Number(n),v(n))]})}))}),(0,p.jsx)(i.op,{className:"mt-5 py-3 px-5",style:{backgroundColor:"#A26220",color:"#FFFFFF"},onClick:function(){return h.m.push("/home/success-page")},children:"PAY \u20b92999"})]})};function b(){var e=r.useState(0),s=(0,a.Z)(e,2),n=s[0],t=s[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.Dv,{}),(0,p.jsxs)("div",{className:"d-flex justify-content-between payment-container",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(i.kz,{activeStep:n}),(0,p.jsx)(i.Ok,{className:"pt-4",value:n,index:0,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("label",{className:"login-or-signup-text",children:"Login / Signup"}),(0,p.jsx)(u.Login,{setActiveStep:t,postlogin:!0,className:"login-container-style"})]})}),(0,p.jsx)(i.Ok,{className:"pt-4",value:n,index:1,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("label",{className:"login-or-signup-text",children:"Select Delivery Address"}),(0,p.jsx)(j,{setActiveStep:t,dataItems:c.MP})]})}),(0,p.jsx)(i.Ok,{className:"pt-4",value:n,index:2,children:(0,p.jsxs)("div",{className:"payment-screen-container",children:[(0,p.jsx)("label",{children:"Select Payment Method"}),(0,p.jsx)(f,{})]})})]}),(0,p.jsx)("div",{className:"order-summary-contain",children:(0,p.jsx)(l.H,{})})]})]})}}}]);
//# sourceMappingURL=3155.abccb896.chunk.js.map