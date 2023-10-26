"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[9623],{28868:(e,s,a)=>{a.d(s,{gV:()=>n,lx:()=>i,xS:()=>r});var l=a(24618);const r=e=>(s,a,r)=>{let{apiCall:i,Toast:n}=r;return new Promise(((s,a)=>{i({...l.iJ.registationApi,body:e}).then((e=>{s(e)})).catch((e=>{let{message:s}=e;a(n({type:"error",message:s}))}))}))},i=e=>(s,a,r)=>{let{apiCall:i,Toast:n}=r;return new Promise(((s,a)=>{i({...l.iJ.loginApi,body:e}).then((e=>{localStorage.setItem("authToken",e),s(e)})).catch((e=>{let{message:s}=e;a(n({type:"error",message:s}))}))}))},n=e=>(s,a,r)=>{let{apiCall:i,Toast:n}=r;return new Promise(((s,a)=>{i({...l.iJ.verifyOTP,body:e}).then((e=>{s(e),n({type:"error",message:e.message})})).catch((e=>{let{message:s}=e;a(n({type:"error",message:s}))}))}))}},2841:(e,s,a)=>{a.r(s),a.d(s,{default:()=>y});var l=a(72791),r=a(96933),i=a(61134),n=a(67335),t=a(10765),d=a(85523),c=a(61419),o=a(94454),m=a(80184);const p=l.forwardRef(((e,s)=>{let{name:a,value:l,className:r,onChange:i,checked:n,icon:t,checkedIcon:d,color:c}=e;return(0,m.jsx)(o.Z,{name:a,value:l,ref:s,checked:n,onChange:i,className:r,color:c,checkedIcon:d,icon:t})}));a(60908);var h=a(64880),u=a(6598),x=a(16958),N=a(78687),v=a(56543),j=a(45651),f=a(96973),b=a(10272),g=a(44695),A=a(8007);const w=A.Ry().shape({fullName:A.Z_().required("Name is required").min(2,"Name must be atleast 2 characters").matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field "),mobileNumber:A.Z_().min(10,"Mobile Number must be atleast 10 digits").max(16,"Mobile Number must be less than 16 digits").required("Mobile Number is required"),pincode:A.Rx().typeError("Pincode is required").required("Pincode is required").test("len","Pincode must be 6 digits",(e=>{if(e)return 6===e.toString().length})),installer:A.Z_().required("Installer is required"),flatNo:A.Z_().max(18).required("Flat No/House No is required"),area:A.Z_().max(28).required("Area is required"),landmark:A.Z_().max(16).required("Landmark is required"),city:A.Z_().required("City is required").max(10).matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field "),state:A.Z_().required("State is required").matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field "),selectAddressType:A.Z_().required("Address Type is required"),isDefaultAddress:A.O7()}),y=(0,N.$j)(null,(e=>(0,u.DE)({getAddressAPICall:x.Kn,createAddressAPI:x.p6,updateAddressAPI:x.y3},e)))((e=>{let{getAddressAPICall:s,createAddressAPI:a,updateAddressAPI:o}=e,u=(0,h.TH)();const{id:x}=(0,h.UO)(),{state:N}=(0,h.TH)(),A=null===u||void 0===u?void 0:u.pathname.split("/").slice(-2)[0].replace(/-/g," "),[y,C]=(0,l.useState)(!0),[P,I]=(0,l.useState)();(0,l.useEffect)((()=>{x&&s({url_id:x}).then((e=>{I(null===e||void 0===e?void 0:e.response)})).then((()=>{C(!1)})).catch((e=>{console.log(e)})),C(!1)}),[]);const{register:k,handleSubmit:S,formState:{errors:T}}=(0,i.cI)({resolver:(0,g.X)(w),defaultValues:{fullName:null===N||void 0===N?void 0:N.fullName,mobileNumber:null===N||void 0===N?void 0:N.mobileNumber,pincode:null===N||void 0===N?void 0:N.pincode,installer:null===N||void 0===N?void 0:N.installer,flatNo:null===N||void 0===N?void 0:N.flatNo,area:null===N||void 0===N?void 0:N.area,landmark:null===N||void 0===N?void 0:N.landmark,city:null===N||void 0===N?void 0:N.city,state:null===N||void 0===N?void 0:N.state,country:null===N||void 0===N?void 0:N.country,selectAddressType:null===N||void 0===N?void 0:N.selectAddressType,isDefaultAddress:null===N||void 0===N?void 0:N.isDefaultAddress}});return(0,m.jsx)("div",{className:"new-address-form-container",children:(0,v.aV)(y,(0,m.jsx)("div",{children:"Loading..."}),(0,m.jsx)("form",{children:(0,m.jsxs)("div",{className:"address-form",children:[(0,m.jsx)("label",{className:"add-new-address-label",children:(0,v.aV)(x,A,"Add New Address")}),(0,m.jsx)("div",{className:"input-container mt-3",children:(0,m.jsx)("input",{name:"location",value:null===P||void 0===P?void 0:P.location,className:"text-input mt-3",placeholder:"Select from Map"})}),(0,m.jsx)("div",{className:"pt-3 use-location-container",children:(0,m.jsx)("label",{className:"use-location-label",children:"Use Current Location"})}),(0,m.jsxs)("div",{className:"input-container mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"Full Name"}),(0,m.jsx)("input",{type:"text",name:"fullName",className:"text-input full-name mt-3",placeholder:"Name",...k("fullName")}),T.fullName&&(0,m.jsx)("span",{className:"error-text",children:T.fullName.message})]}),(0,m.jsxs)("div",{className:"input-container mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"Mobile Number"}),(0,m.jsx)("input",{type:"number",name:"mobileNumber",max:"10",className:"text-input mt-3",placeholder:"Mobile Number",...k("mobileNumber")}),T.mobileNumber&&(0,m.jsx)("span",{className:"error-text",children:T.mobileNumber.message})]}),(0,m.jsxs)("div",{className:"d-flex",children:[(0,m.jsxs)("div",{className:"input-container mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"Pincode"}),(0,m.jsx)("input",{name:"pincode",type:"number",...k("pincode"),className:"text-input w-100 mt-3",placeholder:"Pincode"}),T.pincode&&(0,m.jsx)("span",{className:"error-text",children:T.pincode.message})]}),(0,m.jsxs)("div",{className:"input-container ms-5 mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"Installer"}),(0,m.jsx)(r.AP,{name:"installer",...k("installer"),placeholder:"Installer",inputStyle:"mt-3 select-input",menuItemList:[{label:"Rahul, Rs. 150",value:"Rahul, Rs. 150"}]}),T.country&&(0,m.jsx)("span",{className:"error-text",children:T.country.message})]})]}),(0,m.jsxs)("div",{className:"input-container mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"Flat No/House No/Building/Apartment"}),(0,m.jsx)("input",{name:"flatNo",...k("flatNo"),className:"text-input mt-3",placeholder:"Flat No/House No/Building/Apartment"}),T.flatNo&&(0,m.jsx)("span",{className:"error-text",children:T.flatNo.message})]}),(0,m.jsxs)("div",{className:"input-container mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"Area/State/Street/Village"}),(0,m.jsx)("input",{name:"area",...k("area"),className:"text-input mt-3",placeholder:"Area/State/Street/Village"}),T.area&&(0,m.jsx)("span",{className:"error-text",children:T.area.message})]}),(0,m.jsxs)("div",{className:"input-container mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"Landmark"}),(0,m.jsx)("input",{name:"landmark",...k("landmark"),className:"text-input mt-3",placeholder:"Landmark"}),T.landmark&&(0,m.jsx)("span",{className:"error-text",children:T.landmark.message})]}),(0,m.jsxs)("div",{className:"input-container mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"Town/City"}),(0,m.jsx)("input",{name:"city",...k("city"),className:"text-input mt-3",placeholder:"Town/City"}),T.city&&(0,m.jsx)("span",{className:"error-text",children:T.city.message})]}),(0,m.jsxs)("div",{className:"d-flex",children:[(0,m.jsxs)("div",{className:"input-container mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"State"}),(0,m.jsx)(r.AP,{name:"state",...k("state"),placeholder:"State",inputStyle:"mt-3 select-input",menuItemList:f.mp}),T.state&&(0,m.jsx)("span",{className:"error-text",children:T.state.message})]}),(0,m.jsxs)("div",{className:"input-container ms-5 mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"Country"}),(0,m.jsx)(r.AP,{name:"country",...k("country"),placeholder:"Country",inputStyle:"mt-3 select-input",menuItemList:[{label:"India",value:"india"}]}),T.country&&(0,m.jsx)("span",{className:"error-text",children:T.country.message})]})]}),(0,m.jsxs)("div",{className:"input-container w-50 mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"Select Address Type"}),(0,m.jsxs)("div",{className:"pt-3",children:[(0,m.jsxs)(t.Z,{name:"selectAddressType",...k("selectAddressType"),"aria-labelledby":"demo-controlled-radio-buttons-group",row:!0,children:[(0,m.jsx)(d.Z,{value:"home",control:(0,m.jsx)(c.Z,{disableRipple:!0,color:"default",checkedIcon:(0,m.jsx)(n.Aq,{}),icon:(0,m.jsx)(n.jA,{})}),label:"Home"}),(0,m.jsx)(d.Z,{value:"office",className:"ps-5 ms-5",control:(0,m.jsx)(c.Z,{disableRipple:!0,color:"default",checkedIcon:(0,m.jsx)(n.Aq,{}),icon:(0,m.jsx)(n.jA,{})}),label:"Office"})]}),T.selectAddressType&&(0,m.jsx)("span",{className:"error-text",children:T.selectAddressType.message})]})]}),(0,m.jsxs)("div",{className:"checkbox-container mt-4",children:[(0,m.jsx)(p,{type:"checkbox",name:"isDefaultAddress",...k("isDefaultAddress"),icon:(0,m.jsx)("div",{className:"checkbox-outer"}),checkedIcon:(0,m.jsx)(n.lU,{})}),(0,m.jsx)("label",{className:"input-label",children:"Make this my default address"})]}),(0,m.jsx)("div",{className:"mt-5 mb-4",children:(0,v.aV)(x,(0,m.jsx)(r.op,{type:"submit",onClick:S((e=>{o({...{url_id:x}},e).then((e=>{(0,j.F)({type:"success",message:e.response}),b.m.push("/profile/profile-page",4)})).catch((e=>{console.log(e)}))})),className:"add-address-button",variant:"contained",children:"Save Address"}),(0,m.jsx)(r.op,{type:"submit",onClick:S((e=>{a(e).then((e=>{I(e.response),(0,j.F)({type:"success",message:e.message}),b.m.push("/profile/profile-page",4)})).catch((e=>{console.log(e)}))})),className:"add-address-button",variant:"contained",children:"Add Address"}))})]})}))})}))},94819:(e,s,a)=>{a.r(s),a.d(s,{ProfileMain:()=>F,default:()=>O});var l=a(72791);const r=a.p+"static/media/profileUser.eed0f57f2a083ba81397.png";a(81809),a(517);var i=a(96933),n=a(61134),t=a(47047),d=a(10765),c=a(85523),o=a(61419),m=a(60908),p=a(67335),h=a(56543),u=a(80184);function x(e){var s,a,r,x,N,v;let{handleInput:j,inputData:f,updateProfile:b,verifyOTP:g,open:A,setOpen:w,loader:y}=e;const{register:C,handleSubmit:P,formState:{errors:I}}=(0,n.cI)(),[k,S]=(0,l.useState)(!0),[T,D]=(0,l.useState)(!0),[Z,q]=(0,l.useState)("");return(0,u.jsx)(u.Fragment,{children:(0,h.aV)(y,(0,u.jsx)(t.Z,{sx:{bgcolor:"#ffffff96"},animation:"wave",variant:"rounded",width:"100%",height:120}),(0,u.jsx)("form",{onSubmit:P(b),children:(0,u.jsxs)("div",{className:"profile-form",children:[(0,u.jsx)("label",{className:"profile-label",children:"Personal Information "}),(0,u.jsxs)("div",{className:"flex-main mt-3",children:[(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)(m.yM,{name:"firstName",className:"profile-input",onChange:j,value:null===f||void 0===f?void 0:f.firstName,register:C,placeholder:"First Name"}),(0,u.jsx)("div",{className:"error-message",children:(null===(s=I.firstName)||void 0===s?void 0:s.type)&&(0,u.jsx)("span",{className:"error-text",children:"First Name is required"})})]}),(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)(m.yM,{name:"lastName",className:"profile-input",onChange:j,value:null===f||void 0===f?void 0:f.lastName,register:C,placeholder:"Last Name"}),(0,u.jsx)("div",{className:"error-message",children:(null===(a=I.lastName)||void 0===a?void 0:a.type)&&(0,u.jsx)("span",{className:"error-text",children:"Last Name is required"})})]})]}),(0,u.jsxs)("div",{className:"mt-3 flex-main",children:[(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)("label",{className:"profile-label",children:"Profile / Role"}),(0,u.jsx)(i.AP,{name:"roleType",className:"profile-input roll-type mt-3",onChange:j,value:null===f||void 0===f?void 0:f.roleType,register:C,menuItemList:[{label:"User",value:"1"},{label:"Home Owner",value:"2"}],placeholder:"Roll Type"}),(0,u.jsx)("div",{className:"error-message",children:(null===(r=I.roleType)||void 0===r?void 0:r.type)&&(0,u.jsx)("span",{className:"error-text",children:"Role is required"})})]}),(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)("label",{className:"profile-label",children:"Your Gender"}),(0,u.jsxs)("div",{className:"mt-3",children:[console.log(null===f||void 0===f?void 0:f.gender,"gend"),(0,u.jsxs)(d.Z,{row:!0,onChange:j,name:"gender",className:"profile-input",value:null===f||void 0===f?void 0:f.gender,register:C,children:[(0,u.jsx)(c.Z,{value:0,control:(0,u.jsx)(o.Z,{disableRipple:!0,color:"default",checkedIcon:(0,u.jsx)(p.Aq,{}),icon:(0,u.jsx)(p.jA,{})}),label:"Male"}),(0,u.jsx)(c.Z,{value:1,className:"ps-5 ms-5",control:(0,u.jsx)(o.Z,{disableRipple:!0,color:"default",checkedIcon:(0,u.jsx)(p.Aq,{}),icon:(0,u.jsx)(p.jA,{})}),label:"Female"})]}),(0,u.jsx)("div",{className:"error-message",children:(null===(x=I.gender)||void 0===x?void 0:x.type)&&(0,u.jsx)("span",{className:"error-text",children:"Gender is required"})})]})]})]}),(0,u.jsxs)("div",{className:"mt-3 flex-main",children:[(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)("label",{className:"profile-label",children:"Email Address"}),(0,u.jsx)(m.yM,{name:"emailId",placeholder:"Email ID",className:"profile-input mt-3",onChange:j,value:null===f||void 0===f?void 0:f.emailId,disabled:k,register:C,InputProps:{endAdornment:(0,u.jsx)("label",{className:"change-text",onClick:()=>S(!k),children:"CHANGE"})}}),(0,u.jsx)("div",{className:"error-message",children:(null===(N=I.emailId)||void 0===N?void 0:N.type)&&(0,u.jsx)("span",{className:"error-text",children:"Email Address is required"})})]}),(0,u.jsxs)("div",{className:"profile-input-container",children:[(0,u.jsx)("label",{className:"profile-label",children:"Mobile Number"}),(0,u.jsx)(m.yM,{name:"phoneNumber",placeholder:"Mobile Number",className:"profile-input mt-3",onChange:j,value:null===f||void 0===f?void 0:f.phoneNumber,disabled:T,register:C,InputProps:{endAdornment:(0,u.jsx)("label",{className:"change-text",onClick:()=>D(!T),children:"CHANGE"})}}),(0,u.jsx)("div",{className:"error-message",children:(null===(v=I.phoneNumber)||void 0===v?void 0:v.type)&&(0,u.jsx)("span",{className:"error-text",children:"Mobile Number is required"})})]})]}),(0,u.jsx)("div",{className:"mt-5",children:(0,u.jsx)(i.op,{variant:"contained",className:"save-changed-button py-3 px-5",children:"Save Changes"})}),(0,u.jsx)(i.WK,{open:A,handleClose:()=>w(!1),OTP:Z,setOTP:q,verifyOTP:g})]})}))})}var N=a(16958),v=a(78687),j=a(6598),f=a(10272);const b=e=>{let{addressList:s,addressList:{_id:a,fullName:l,mobileNumber:r,flatNo:i,area:n,city:t,state:d,pincode:c,country:o},deleteAddressApi:m}=e;return(0,u.jsxs)("div",{className:"address-card mb-3",children:[(0,u.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,u.jsx)("label",{className:"label-name",children:l}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{className:"edit-text",onClick:()=>f.m.push("/profile/change-address/".concat(a),s),children:"EDIT"}),(0,u.jsx)("label",{className:"ms-4 delete-text",onClick:()=>m(a),children:"DELETE"})]})]}),(0,u.jsx)("label",{className:"py-2 label-mobno",children:r}),(0,u.jsx)("p",{className:"label-address",children:"".concat(i,",").concat(n,",").concat(t,",").concat(d,",").concat(c,",").concat(o)})]})},g=(0,v.$j)(null,(e=>(0,j.DE)({deleteAddressAPI:N._N,getAddressListAPICall:N.mZ},e)))((e=>{let{getAddressListAPICall:s,deleteAddressAPI:a}=e;const[r,n]=(0,l.useState)([]),[d,c]=(0,l.useState)(!0),o=()=>{s().then((e=>{n(e.response),c(!1)})).catch((e=>{c(!1),console.log(e)}))},m=e=>{a({url_id:e}).then((()=>{o()})).then((e=>{n(e.response)})).catch((e=>{console.log(e)}))};return(0,l.useEffect)((()=>{o()}),[]),(0,u.jsxs)("div",{className:"saved-address",children:[(0,h.aV)(d,(0,u.jsx)(t.Z,{sx:{bgcolor:"#ffffff96"},animation:"wave",variant:"rounded",width:"100%",height:120}),null===r||void 0===r?void 0:r.map((e=>(0,u.jsx)(b,{deleteAddressApi:m,addressList:e},null===e||void 0===e?void 0:e._id)))),(0,u.jsx)(i.op,{className:"mt-4 py-3 px-5 saved-address-button",variant:"outlined",onClick:()=>f.m.push("/profile/add-new-address"),children:"+ Add New Address"})]})}));a(2841);function A(e){var s,a;let{changePassword:r,passwordError:t}=e;const{register:d,handleSubmit:c,formState:{errors:o}}=(0,n.cI)(),[m,p]=(0,l.useState)({}),h=e=>{let s={[e.target.name]:e.target.value};p({...m,...s})};return(0,u.jsx)("form",{onSubmit:c(r),children:(0,u.jsxs)("div",{className:"password-form",children:[(0,u.jsx)("h6",{children:"Change Password"}),(0,u.jsxs)("div",{className:"input-container mt-4",children:[(0,u.jsx)("label",{children:"Current Password "}),(0,u.jsx)(i.Cu,{name:"password",className:"text-input mt-3",onChange:h,type:"password",value:m.password,register:d})]}),(0,u.jsxs)("div",{className:"input-container mt-4",children:[(0,u.jsx)("label",{children:"New Password "}),(0,u.jsx)(i.Cu,{name:"newPassword",className:"text-input mt-3",onChange:h,value:m.newPassword,type:"password",register:d}),(0,u.jsx)("div",{className:"error-message",children:(null===(s=o.newPassword)||void 0===s?void 0:s.type)&&(0,u.jsx)("span",{className:"error-text",children:"New Password is required"})})]}),(0,u.jsxs)("div",{className:"input-container mt-4",children:[(0,u.jsx)("label",{children:"Confirm New Password "}),(0,u.jsx)(i.Cu,{name:"repeatPassword",className:"text-input mt-3",onChange:h,register:d,type:"password",value:m.repeatPassword}),(0,u.jsxs)("div",{className:"error-message",children:[t?(0,u.jsx)("span",{className:"error-text",children:"New Password and Confirm New Password should be same!"}):(0,u.jsx)(u.Fragment,{}),(null===(a=o.repeatPassword)||void 0===a?void 0:a.type)&&(0,u.jsx)("span",{className:"error-text",children:"Repeat Password is required"})]})]}),(0,u.jsx)("div",{className:"mt-5",children:(0,u.jsx)(i.op,{variant:"contained",className:"change-password-button py-3 px-5",children:"Change Password"})})]})})}var w=a(62812);const y=e=>{let{wishlistData:{id:s,title:a,color:l,price:r,image:i},deleteFavItem:n}=e;return(0,u.jsxs)("div",{className:"orders-card",children:[(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsx)("img",{src:i?i[0]:"",height:"200px",width:"200px",alt:"product"}),(0,u.jsxs)("div",{className:"direction-col left-margin",children:[(0,u.jsx)("div",{className:"flex space-between",children:(0,u.jsx)("div",{className:"title",children:a})}),(0,u.jsx)("div",{className:"flex space-between",children:(0,u.jsx)("div",{className:"color",children:"Color - ".concat(l)})}),(0,u.jsx)("div",{className:"flex space-between mt-5",children:(0,u.jsx)("div",{className:"amount mt-4",children:"\u20b9".concat(r)})})]})]}),(0,u.jsx)("div",{className:"pt-2 ps-4",onClick:()=>n(s),children:(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)(p.gG,{}),(0,u.jsx)("label",{className:"remove-item-label ps-1 cursor-pointer",children:"Remove"})]})})]})};const C=function(e){let{wishlistItemData:s}=e;const a=(0,v.I0)(),l=e=>{const l=s.filter((s=>s.id!==e));a({type:w.B.wishlistItem,payload:l})};return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"d-flex align-items-center",children:(0,u.jsx)("div",{children:(0,u.jsx)(i.sn,{placeholder:"Search For Orders"})})}),s.map((e=>(0,u.jsx)(y,{wishlistData:e,deleteFavItem:l},e.id)))]})};var P=a(31909);a(55414);var I=a(64880);const k=e=>(0,u.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:(0,u.jsx)("path",{d:"M10.0068 0C11.6245 0 13.2361 0.399066 14.668 1.15403C19.5432 3.72638 21.4181 9.78549 18.8475 14.6624C17.0942 17.9879 13.642 20 9.9953 20C9.28286 20 8.56338 19.9234 7.84741 19.7648C7.44408 19.6749 7.18958 19.275 7.27852 18.8715C7.36747 18.468 7.7664 18.2152 8.17237 18.3024C11.8966 19.1305 15.7415 17.3431 17.523 13.9638C19.7088 9.81809 18.1148 4.66546 13.9696 2.47897C12.7526 1.83676 11.3823 1.4976 10.0059 1.4976C5.31029 1.4976 1.4971 5.31119 1.4971 9.99868C1.49534 11.3641 1.82823 12.7234 2.45965 13.9312L2.65163 14.3065C2.88676 14.747 2.93872 15.294 2.78636 15.7891C2.57589 16.3441 2.40064 16.8841 2.25622 17.4215C2.81807 17.2523 3.50409 17.003 3.99989 16.8224L4.20332 16.7493C4.58816 16.6057 5.02055 16.8092 5.16146 17.1986C5.30236 17.5871 5.10069 18.017 4.71233 18.1571L4.51154 18.2302C3.77004 18.4989 2.75554 18.868 2.0704 19.0213C2.01228 19.0336 1.94975 19.0415 1.89251 19.0398C1.43282 19.0398 1.15277 18.8539 0.99866 18.6971C0.761767 18.4566 0.649045 18.1192 0.662255 17.6946C0.664016 17.6461 0.670181 17.5959 0.681629 17.5475C0.859519 16.7899 1.09113 16.034 1.37117 15.3019C1.39143 15.2306 1.3791 15.1011 1.32186 14.9927L1.129 14.6183C0.390136 13.2035 -0.0017495 11.6029 5.87135e-06 9.9978C5.87135e-06 4.48487 4.48424 0 9.9953 0H10.0068ZM9.99565 8.8095C10.6517 8.8095 11.1845 9.34335 11.1845 9.99877C11.1845 10.6542 10.6517 11.188 9.99565 11.188C9.33958 11.188 8.80679 10.6542 8.80679 9.99877C8.80679 9.34335 9.33958 8.8095 9.99565 8.8095ZM14.3989 8.8095C15.0549 8.8095 15.5877 9.34335 15.5877 9.99877C15.5877 10.6542 15.0549 11.188 14.3989 11.188C13.7428 11.188 13.21 10.6542 13.21 9.99877C13.21 9.34335 13.7428 8.8095 14.3989 8.8095ZM5.59235 8.80985C6.24843 8.80985 6.78122 9.34282 6.78122 9.99912C6.78122 10.6545 6.24843 11.1875 5.59235 11.1875C4.93628 11.1875 4.40349 10.6545 4.40349 9.99912C4.40349 9.34282 4.93628 8.80985 5.59235 8.80985Z",fill:"white"})});function S(){const[e,s]=(0,l.useState)(!1);let a=(0,I.k6)();const r=()=>s((e=>!e)),n=[{productName:"Diamond Wallpaper",color:"green",image:P,price:"\u20b93500"},{productName:"Bird Wallpaper",color:"green",image:P,price:"\u20b93500"}];return(0,u.jsxs)("div",{className:"profile-page",children:[(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)("div",{children:(0,u.jsx)(i.sn,{placeholder:"Search For Orders"})}),(0,u.jsx)("div",{className:"custom-select",children:(0,u.jsx)(i.AP,{menuItemList:[{label:"This Month",value:"this"},{label:"Current Month",value:"current"},{label:"Previous Month",value:"previous"},{label:"Daily",value:"daily"},{label:"Yearly",value:"yearly"},{label:"Last year",value:"last"},{label:"Current year",value:"current"}]})})]}),e?(0,u.jsxs)("div",{className:"orders-card",children:[(0,u.jsx)("div",{className:"deliver-head",children:"Yayy, Your order has been successfully delivered"}),(0,u.jsx)("div",{className:"deliver-subtitle",children:"Placed on Fri, 25th Nov, 05:00PM"}),(0,u.jsxs)("div",{className:"payment-info",children:[(0,u.jsx)("div",{className:"mode-text",children:"Mode of Payment"}),(0,u.jsx)("div",{className:"mode-detail",children:"Net Banking: Kotak Bank"})]}),(0,u.jsxs)("div",{className:"bill-details",children:[(0,u.jsx)("div",{className:"total-item",children:"2 items"}),(0,u.jsx)("div",{className:"order-id",children:"Order ID: ord123456789"}),n.map((e=>(0,u.jsxs)("div",{className:"d-flex flex-row orderList",children:[(0,u.jsx)("img",{src:e.image,alt:"wallimage",width:66.64,height:70}),(0,u.jsxs)("div",{className:"products",children:[(0,u.jsx)("div",{className:"product-name",children:e.productName}),(0,u.jsxs)("div",{className:"product-color",children:["Color - ",e.color]})]}),(0,u.jsx)("div",{className:"price",children:e.price})]}))),(0,u.jsx)("div",{className:"bill-det-txt",children:"Bill Details"}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Price(2 item)"}),(0,u.jsx)("span",{className:"price",children:"\u20b9 2599"})]}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Delivery Charges"}),(0,u.jsx)("span",{className:"free",children:"Free"})]}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Packaging Charges"}),(0,u.jsx)("span",{className:"price me-2",children:"\u20b9 99"})]}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Installation Charges"}),(0,u.jsx)("span",{className:"price me-2",children:"\u20b9 499"})]}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"GST Charges"}),(0,u.jsx)("span",{className:"price me-2",children:"\u20b9 299"})]}),(0,u.jsx)("div",{className:"hr-line"}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Sub Total Price"}),(0,u.jsx)("span",{className:"price",children:"\u20b9 3297"})]}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Coupon Discount"}),(0,u.jsx)("span",{className:"price me-2",children:"\u20b9 298"})]}),(0,u.jsx)("div",{className:"hr-line"}),(0,u.jsxs)("div",{className:"detail-row",children:[(0,u.jsx)("span",{className:"name",children:"Total Amount to be paid"}),(0,u.jsx)("span",{className:"price",children:"\u20b9 2999"})]}),(0,u.jsxs)("div",{className:"payment-info",children:[(0,u.jsx)("div",{className:"mode-text mb-2",children:"Delivery Address"}),(0,u.jsx)("div",{className:"mode-detail",children:"Home- 104,NEW ARYA NAGAR,GHAZIABAD,U.P.,DIST GHAZIABAD 201301"})]}),(0,u.jsxs)(i.op,{className:"chat-btn",onClick:r,children:[(0,u.jsx)(k,{height:20,width:20})," \xa0 \xa0 Chat With Us"]})]})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"orders-card",children:[(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsx)("img",{src:P,alt:"wallimage"}),(0,u.jsxs)("div",{className:"direction-col left-margin",children:[(0,u.jsxs)("div",{className:"d-flex space-between",children:[(0,u.jsx)("div",{className:"title",onClick:()=>a.push("/profile/order-details"),children:"Diamond Wallpaper"}),(0,u.jsx)("div",{children:(0,u.jsx)(i.op,{className:"view-details-btn",onClick:r,children:"View Details"})})]}),(0,u.jsx)("div",{className:"flex space-between",children:(0,u.jsx)("div",{className:"color",children:"Color - Green "})}),(0,u.jsx)("div",{className:"flex space-between",children:(0,u.jsx)("div",{className:"amount",children:"\u20b93500"})}),(0,u.jsx)("div",{className:"flex space-between",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"payment-mode",children:"Mode of Payment"}),(0,u.jsx)("div",{className:"payment-bank",children:"Net Banking: Kotak Bank"})]})})]})]}),(0,u.jsx)("div",{className:"flex space-between mt-4"})]}),(0,u.jsx)("div",{className:"orders-card",children:(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsx)("img",{src:P,alt:"walliMAGE"}),(0,u.jsxs)("div",{className:"direction-col left-margin",children:[(0,u.jsxs)("div",{className:"flex space-between",children:[(0,u.jsx)("div",{className:"title",onClick:()=>a.push("/profile/order-details"),children:"Diamond Wallpaper"}),(0,u.jsx)("div",{children:(0,u.jsx)(i.op,{className:"view-details-btn",children:"View Details"})})]}),(0,u.jsx)("div",{className:"flex space-between",children:(0,u.jsx)("div",{className:"color",children:"Color - Green "})}),(0,u.jsx)("div",{className:"flex space-between",children:(0,u.jsx)("div",{className:"amount",children:"\u20b93500"})}),(0,u.jsxs)("div",{className:"flex space-between",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"payment-mode",children:"Mode of Payment"}),(0,u.jsx)("div",{className:"payment-bank",children:"Net Banking: Kotak Bank"})]}),(0,u.jsx)("div",{})]})]})]})})]})]})}a(70128);var T=a(28868),D=(a(78200),a(45651)),Z=a(94455),q=a(96973);const E=e=>{let{firstName:s,lastName:a}=e;return(0,u.jsxs)("div",{className:"profile-card-container px-4",children:[(0,u.jsx)("img",{height:"85px",width:"85px",className:"profile-image",alt:"profile_pic",src:r}),(0,u.jsxs)("div",{className:"d-flex flex-column ps-3",children:[(0,u.jsx)("label",{className:"label-hello",children:"Hello,"}),(0,u.jsx)("label",{className:"label-name",children:"".concat(s," ").concat(a)})]})]})},M=e=>{let{tabData:{id:s,name:a},activeTab:l,setActiveTab:r}=e;return(0,u.jsx)("div",{className:"navigation-tab cursor-pointer ".concat((0,h.s6)(l===s,"active")),onClick:()=>r(s),children:(0,u.jsx)("label",{className:"ps-5 navigation-label ".concat((0,h.s6)(l===s,"active")),children:a})})},L=e=>{let{activeTab:s,profileProps:{handleInput:a,inputData:l,updateProfile:r,verifyOTP:i,open:n,setOpen:t,loader:d},wishListProps:{wishlistItemData:c},savedAddressProps:{showAddressForm:o},changePasswordProps:{changePassword:m,passwordError:p}}=e;switch(s){case 1:return(0,u.jsx)(x,{handleInput:a,inputData:l,updateProfile:r,verifyOTP:i,open:n,setOpen:t,loader:d});case 2:return(0,u.jsx)(S,{});case 3:return(0,u.jsx)(C,{wishlistItemData:c});case 4:return(0,u.jsx)(g,{showAddressForm:o});case 5:return(0,u.jsx)(A,{changePassword:m,passwordError:p});case 6:return(0,Z.k)();default:return null}};function F(e){let{wishlistItemData:s,updateProfileAPICall:a,changeCurrentPasswordAPI:r,verifyOTPApiCall:i,getCurrentProfileAPI:n}=e,t=(0,I.TH)();const[d,c]=(0,l.useState)(),[o,m]=(0,l.useState)(),[p,h]=(0,l.useState)(null===t||void 0===t?void 0:t.state),[x,N]=(0,l.useState)(!0),[v,j]=l.useState(!1),[b,g]=(0,l.useState)(!1),[A,w]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{n().then((e=>{m(e.response),c(e.response)})).then((()=>{w(!1)})).catch((e=>{console.log(e)}))}),[p]),(0,l.useEffect)((()=>{h(null===t||void 0===t?void 0:t.state)}),[null===t||void 0===t?void 0:t.state]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"profile-main",children:[(0,u.jsxs)("div",{className:"left-pane",children:[(0,u.jsx)(E,{firstName:null===o||void 0===o?void 0:o.firstName,lastName:null===o||void 0===o?void 0:o.lastName}),(0,u.jsx)("div",{className:"navigation-panel-container mt-3",children:q.in.map((e=>(0,u.jsx)(M,{activeTab:p,setActiveTab:h,tabData:e},e.id)))})]}),(0,u.jsx)("div",{className:"right-pane ms-4",children:(0,u.jsx)(L,{activeTab:p,profileProps:{handleInput:e=>{let s={[e.target.name]:e.target.value};c({...d,...s})},inputData:d,updateProfile:()=>{let e={firstName:d.firstName,lastName:d.lastName,phoneNumber:d.mobile,roleType:d.profile,gender:d.gender};a(e).then((()=>{j(!0)}))},verifyOTP:e=>{let s={phoneNumber:d.mobile,otp:e};i(s).then((()=>{f.m.push("/auth/login")}))},open:v,setOpen:j,loader:A},wishListProps:{wishlistItemData:s},savedAddressProps:{showAddressForm:()=>{N(!x)}},changePasswordProps:{changePassword:e=>{let s={newPassword:e.newPassword,confirmPassword:e.repeatPassword};e.newPassword===e.repeatPassword?(g(!1),r(s).then((()=>{(0,D.F)({type:"success",message:"Password Updated!"})}))):g(!0)},passwordError:b}})})]})})}const O=(0,v.$j)((e=>({wishlistItemData:e.commonStore.wishlistItemState})),(e=>(0,j.DE)({updateProfileAPICall:N.ck,changeCurrentPasswordAPI:N.dC,verifyOTPApiCall:T.gV,getCurrentProfileAPI:N.JQ},e)))(F)},517:(e,s,a)=>{a.d(s,{Z:()=>c});a(72791);var l=a(93517),r=a(50533),i=a(36314),n=a(98333),t=a(80184);function d(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function c(e){let{crumbs:s}=e;return(0,t.jsx)(i.Z,{spacing:2,children:(0,t.jsx)(l.Z,{separator:(0,t.jsx)(n.Z,{fontSize:"small",color:"primary"}),"aria-label":"breadcrumb",children:s.map(((e,s)=>(0,t.jsx)(r.Z,{underline:"hover",onClick:d,children:e},s+1)))})})}},55414:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgBpVXLTcNAEJ2ZTe4585GcCuDOxa7AkfjeQipIOsBUgCiBKyCUDjYdUEJAELhyJmQHTxRHG8fr7MpPsmTv/N6Mn8cAAfjU58cf+iwOiSEIwzUBxSEBQQWIMEWCYVCMr+NqNFF+dULG5F2gpVS/uEfAnm+cdwFmjtdBhH3fOK8CM30qjCPryHtMONW9ThvatS2TwhQYNn0QJ2ZhHuri5jAfo9x866uIyegSyyZ4WxgzOEyeJ2ifzvRFlsvwBhrAGL7PmWfdZPwjz1h2aNDNmrV9iC7vkG7KrL0KCL705QiI73YlP0ieRi57rUxRmRR2gBQc1eZwGVbvYgo+aP1Feycv71UmZwcMvPVtyDjYwO2W729r4MrjHhGxvTVFIYnMej95zNBQV84KYy4G5+qoHJH8WPJ981qwdinEVpoQKEvU2YFSNLRZVyUX2N2EbNilPGVHQQCWkq7AP5zGmGqR2sYPAAAAAElFTkSuQmCC"},31909:(e,s,a)=>{e.exports=a.p+"static/media/wallImage.1b3d2233a8bb345ee97e.png"}}]);
//# sourceMappingURL=9623.650cc136.chunk.js.map