"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[6047],{28868:(e,s,t)=>{t.d(s,{gV:()=>l,lx:()=>a,xS:()=>r});var o=t(24618);const r=e=>(s,t,r)=>{let{apiCall:a,Toast:l}=r;return new Promise(((s,t)=>{a({...o.iJ.registationApi,body:e}).then((e=>{s(e)})).catch((e=>{let{message:s}=e;t(l({type:"error",message:s}))}))}))},a=e=>(s,t,r)=>{let{apiCall:a,Toast:l}=r;return new Promise(((s,t)=>{a({...o.iJ.loginApi,body:e}).then((e=>{localStorage.setItem("authToken",e),s(e)})).catch((e=>{let{message:s}=e;t(l({type:"error",message:s}))}))}))},l=e=>(s,t,r)=>{let{apiCall:a,Toast:l}=r;return new Promise(((s,t)=>{a({...o.iJ.verifyOTP,body:e}).then((e=>{s(e),l({type:"error",message:e.message})})).catch((e=>{let{message:s}=e;t(l({type:"error",message:s}))}))}))}},66047:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});t(72791);var o=t(10272),r=t(30456),a=t(6598),l=t(78687),n=t(28868),i=t(96933),c=t(60908),d=t(63466),m=t(61134),p=t(64880),u=t(56543),h=t(55872),g=t(80184);const x=(0,l.$j)(((e,s)=>({ownProps:s})),(e=>(0,a.DE)({loginApiCall:n.lx},e)))((function(e){let{loginApiCall:s,ownProps:t}=e;const a=(0,p.TH)().pathname.split("/").slice(-1)[0],{register:l,handleSubmit:n,formState:{errors:x}}=(0,m.cI)();function v(e,s){e?sessionStorage.setItem("authToken",null===s||void 0===s?void 0:s.access_token):localStorage.setItem("authToken",null===s||void 0===s?void 0:s.access_token),(0,u.aV)("payment-page"===a?t.setActiveStep(1):o.m.push("/home/"))}return(0,g.jsx)("form",{onSubmit:n((e=>{s({username:e.mailId,password:e.password,loginType:3}).then((e=>{let{response:s}=e;return v(!1,s)}))})),children:(0,g.jsxs)("div",{className:"login-entries ",children:[(0,g.jsxs)("div",{className:"d-flex flex-column",children:[(0,g.jsx)(c.t7,{placeholder:"Enter Email/Mobile number",variant:"standard",name:"mailId",className:"email-mobile-input-field mt-4",register:l,errors:x}),(0,g.jsx)(c.t7,{placeholder:"Enter Password",variant:"standard",className:"password-input-field mt-4",type:"password",min:8,max:20,name:"password",register:l,errors:x,endAdornment:(null===t||void 0===t?void 0:t.postlogin)&&(0,g.jsx)(d.Z,{position:"end",children:(0,g.jsx)("label",{onClick:()=>{o.m.push("/auth/forgotpassword")},className:"forget-text-inputfield cursor-pointer",children:"Forget Password?"})})}),!(null!==t&&void 0!==t&&t.postlogin)&&(0,g.jsx)("div",{className:"d-flex justify-content-end",children:(0,g.jsx)("label",{onClick:()=>{o.m.push("/auth/forgot-password")},className:"forget-text-inputfield cursor-pointer pt-3",children:"Forgot Password?"})})]}),(0,g.jsx)("div",{className:"login-terms",children:(0,g.jsxs)("label",{children:["By continuing, you agree to Paperwall ",(0,g.jsx)("a",{href:"",children:"Terms of use"})," ","and ",(0,g.jsx)("a",{href:"",children:"Privacy policy"})]})}),(0,g.jsx)(i.op,{style:{backgroundColor:"#A26220",color:"#FFFFFF"},className:"login-button",type:"submit",children:"Login"}),(0,g.jsx)("div",{className:"mt-4",children:(0,g.jsx)(h.kZ,{onSuccess:e=>{(e=>{const t=(0,r.Z)(e.credential);s({username:t.sub,loginType:2}).then((e=>{let{response:s}=e;return v(!0,s)}))})(e)},onError:()=>{console.log("Login Failed")}})}),(null===t||void 0===t?void 0:t.postlogin)&&(0,g.jsxs)("div",{className:"login-register-post",children:["Don\u2019t have an account",(0,g.jsx)("a",{className:"ps-2 cursor-pointer",onClick:()=>{o.m.push("/auth/register")},children:"Create a account"})]}),!(null!==t&&void 0!==t&&t.postlogin)&&(0,g.jsxs)("div",{className:"login-register",children:[(0,g.jsx)("label",{className:"dont-have-account-text",children:"Don\u2019t have an account?"}),(0,g.jsx)("label",{className:"register-now-text ps-2 cursor-pointer",onClick:()=>{o.m.push("/auth/register")},children:"Register Now"})]})]})})}))}}]);
//# sourceMappingURL=6047.f5f29791.chunk.js.map