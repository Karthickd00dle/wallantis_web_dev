"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[4244],{94244:function(e,n,s){s.r(n),s.d(n,{default:function(){return g}});s(29867);var t=s(3366),o=s(2040),r=s(94953),a=s(1413),i=s(64681),l=function(e){return function(n,s,t){var o=t.apiCall,r=t.Toast;return new Promise((function(n,s){o((0,a.Z)((0,a.Z)({},i.iJ.loginApi),{},{body:e})).then((function(e){var s=e.data;localStorage.setItem("authToken",s),n(s)})).catch((function(e){var n=e.message;s(r({type:"error",message:n}))}))}))}},c=s(75198),u=s(42618),d=s(21186),m=s(14811),p=s(28060),h=s(60144),f=s(92834);var g=(0,r.$j)((function(e,n){return{ownProps:n}}),(function(e){return(0,o.DE)({loginApiCall:l},e)}))((function(e){var n=e.loginApiCall,s=e.ownProps,o=(0,p.TH)().pathname.split("/").slice(-1)[0],r=(0,m.cI)(),a=r.register,i=r.handleSubmit,l=r.formState.errors;return(0,f.jsx)("form",{onSubmit:i((function(e){n({username:e.mailId,password:e.password}).then((function(){localStorage.setItem("authToken",a.mailId),(0,h.aV)("payment-page"===o?s.setActiveStep(1):t.m.push("/home/home"))})).catch((function(e){console.log(e)}))})),children:(0,f.jsxs)("div",{className:"login-entries ",children:[(0,f.jsxs)("div",{className:"d-flex flex-column",children:[(0,f.jsx)(u.t,{placeholder:"Enter Email/Mobile number",variant:"standard",name:"mailId",className:"email-mobile-input-field mt-4",register:a,errors:l}),(0,f.jsx)(u.t,{placeholder:"Enter Password",variant:"standard",className:"password-input-field mt-4",type:"password",min:8,max:20,name:"password",register:a,errors:l,endAdornment:(null===s||void 0===s?void 0:s.postlogin)&&(0,f.jsx)(d.Z,{position:"end",children:(0,f.jsx)("label",{onClick:function(){t.m.push("/auth/forgotpassword")},className:"forget-text-inputfield cursor-pointer",children:"Forget?"})})}),!(null!==s&&void 0!==s&&s.postlogin)&&(0,f.jsx)("div",{className:"d-flex justify-content-end",children:(0,f.jsx)("label",{onClick:function(){t.m.push("/auth/forgot-password")},className:"forget-text-inputfield cursor-pointer pt-3",children:"Forgot?"})})]}),(0,f.jsx)("div",{className:"login-terms",children:(0,f.jsxs)("label",{children:["By continuing, you agree to Paperwall ",(0,f.jsx)("a",{href:"",children:"Terms of use"})," ","and ",(0,f.jsx)("a",{href:"",children:"Privacy policy"})]})}),(0,f.jsx)(c.op,{style:{backgroundColor:"#A26220",color:"#FFFFFF"},className:"login-button",type:"submit",children:"Login"}),(null===s||void 0===s?void 0:s.postlogin)&&(0,f.jsxs)("div",{className:"login-register-post",children:["Don\u2019t have an account",(0,f.jsx)("a",{className:"ps-2 cursor-pointer",onClick:function(){t.m.push("/auth/register")},children:"Create a account"})]}),!(null!==s&&void 0!==s&&s.postlogin)&&(0,f.jsxs)("div",{className:"login-register",children:[(0,f.jsx)("label",{className:"dont-have-account-text",children:"Don\u2019t have an account?"}),(0,f.jsx)("label",{className:"register-now-text ps-2 cursor-pointer",onClick:function(){t.m.push("/auth/register")},children:"Register Now"})]})]})})}))}}]);
//# sourceMappingURL=4244.e71ffc53.chunk.js.map