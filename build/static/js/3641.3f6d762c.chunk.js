"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[3641],{970:(e,s,a)=>{a.d(s,{r:()=>t});var i=a(24618);const t=e=>(s,a,t)=>{let{apiCall:r,Toast:l}=t;return new Promise(((s,a)=>{r({...i.wC.createContact,body:e}).then((e=>{s(e)}))}))}},52418:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});a(72791);var i=a(73939),t=a(61134);const r=a.p+"static/media/Dealership.1fe4e443fc0a91e890d7.png";var l=a(44695),n=a(8007),c=a(45651),m=a(6598),d=a(970),o=a(78687),u=a(80184);const p=n.Ry().shape({firstname:n.Z_().min(2,"First Name must be atleast 2 characters").required("First Name is required"),lastname:n.Z_().min(1,"Last Name must be atleast 1 character").required("Last Name is required"),email:n.Z_().email("Please enter valid mail id").required("Email is required"),mobilenumber:n.Z_().min(10,"Mobile Number must be atleast 10 digits").max(16,"Mobile Number must be less than 16 digits").required("Mobile Number is required"),country:n.Z_().max(18).required("Country is required"),state:n.Z_().required("State is required"),city:n.Z_().max(10).required("City is required"),pincode:n.Rx("Pincode should be number type").required("Pincode is required"),companyname:n.Z_().transform(((e,s)=>s.message&&s.message.length>0?n.Z_().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field ").validate(e):e)),companyregno:n.Z_().transform(((e,s)=>s.message&&s.message.length>0?n.Z_().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field ").validate(e):e)),message:n.Z_().max(240,"Maximum characters allowed is 240").transform(((e,s)=>s.company&&s.company.length>0?n.Z_().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field ").validate(e):e))});const h=(0,o.$j)(null,(e=>(0,m.DE)({createContactAPI:d.r},e)))((function(e){let{createContactAPI:s}=e;const{register:a,handleSubmit:n,formState:{errors:m}}=(0,t.cI)({resolver:(0,l.X)(p)});return(0,u.jsx)("form",{onSubmit:n((e=>{let a={firstName:e.firstname,lastName:e.lastname,emailId:e.email,phoneNumber:parseInt(e.mobilenumber),country:e.country,state:e.state,city:e.city,pinCode:e.pincode,companyName:e.companyname||null,companyRegistrationNumber:parseInt(e.companyregno)||null,message:e.message||null};s(a).then((()=>{(0,c.F)({type:"success",message:"Form Submitted"})}))})),children:(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:(0,u.jsx)(i.Dv,{navigationStyle:"dealership-head",children:(0,u.jsx)("div",{className:"mainmenuu",children:"Dealership"})})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"dealershiphead",children:"Why Dealership?"}),(0,u.jsxs)("div",{className:"dcontentscollab",children:[(0,u.jsx)("div",{className:"dealercontents",children:(0,u.jsx)("img",{src:r})}),(0,u.jsx)("div",{className:"dealerinfo",children:(0,u.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et. Lorem ipsum dolor sit amet,"," "]})})]}),(0,u.jsx)("div",{className:"getintouch",children:"Get in touch with us"}),(0,u.jsx)("div",{className:"d-flex justify-content-center pt-3",children:(0,u.jsxs)("div",{className:"contact-info-container",children:[(0,u.jsxs)("div",{className:"field",children:[(0,u.jsxs)("label",{children:["First Name",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{...a("firstname"),type:"text",placeholder:"Enter your First Name",name:"firstname"}),m.firstname&&(0,u.jsx)("span",{className:"error-text",children:m.firstname.message})]}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsxs)("label",{children:["Last Name ",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{...a("lastname"),type:"text",placeholder:"Enter your Last Name",name:"lastname"}),m.lastname&&(0,u.jsx)("span",{className:"error-text",children:m.lastname.message})]}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsxs)("label",{children:["Email",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{...a("email"),type:"email",placeholder:"Enter your Email",name:"email"}),m.email&&(0,u.jsx)("span",{className:"error-text",children:m.email.message})]}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsxs)("label",{children:["Mobile Number",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{type:"number",...a("mobilenumber"),placeholder:"Enter your Mobile",name:"mobilenumber"}),m.mobilenumber&&(0,u.jsx)("span",{className:"error-text",children:m.mobilenumber.message})]}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsxs)("label",{children:["Country",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{type:"text",...a("country"),placeholder:"Enter your Country",name:"country"}),m.country&&(0,u.jsx)("span",{className:"error-text",children:m.country.message})]}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsxs)("label",{children:["State",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{type:"text",...a("state"),placeholder:"Enter your State",name:"state"}),m.state&&(0,u.jsx)("span",{className:"error-text",children:m.state.message})]}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsxs)("label",{children:["City",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{type:"text",...a("city"),placeholder:"Enter your City",name:"city"}),m.city&&(0,u.jsx)("span",{className:"error-text",children:m.city.message})]}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsxs)("label",{children:["Pincode",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{type:"number",...a("pincode"),placeholder:"Enter your Pincode",name:"pincode"}),m.pincode&&(0,u.jsx)("span",{className:"error-text",children:m.pincode.message})]}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsx)("label",{children:"Company Name"}),(0,u.jsx)("input",{type:"text",...a("companyname"),placeholder:"Enter your Company Name",name:"company"})]}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsx)("label",{children:"Company Registration Number"}),(0,u.jsx)("input",{type:"text",...a("companyregno"),placeholder:"Enter your Company Registered Number",name:"company"})]}),(0,u.jsxs)("div",{className:"field",children:[(0,u.jsx)("label",{children:"Message "}),(0,u.jsx)("textarea",{className:"field-message",...a("message"),type:"text",placeholder:"Enter Message",name:"message"}),m.message&&(0,u.jsx)("span",{className:"error-text",children:m.message.message})]})]})}),(0,u.jsx)(i.op,{variant:"contained",className:"dealer-enquire",children:"Enquire Now"}),(0,u.jsx)("div",{className:"dealercontacthead",children:"Contact Us"}),(0,u.jsxs)("div",{className:"d-flex justify-content-center dealercontactcards",children:[(0,u.jsxs)("div",{className:"dealeraddress",children:[(0,u.jsx)("span",{children:"Address"}),(0,u.jsx)("p",{children:"115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034, Tamil Nadu."})]}),(0,u.jsxs)("div",{className:"dealercontactcall",children:[(0,u.jsx)("span",{children:"Call On"}),(0,u.jsx)("p",{children:"For any queries call us on"}),(0,u.jsx)("small",{children:"+91 5684 64865"}),(0,u.jsx)("br",{}),(0,u.jsx)("small",{children:"+91 65486 32135"})]}),(0,u.jsxs)("div",{className:"dealercontactemail",children:[(0,u.jsx)("span",{children:"Email Us"}),(0,u.jsx)("p",{children:"For any queries write to us on"}),(0,u.jsx)("small",{children:"Support@gmail.com"})]})]})]})]})})}))}}]);
//# sourceMappingURL=3641.3f6d762c.chunk.js.map