"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[8684],{970:(e,a,s)=>{s.d(a,{r:()=>l});var t=s(24618);const l=e=>(a,s,l)=>{let{apiCall:r,Toast:n}=l;return new Promise(((a,s)=>{r({...t.wC.createContact,body:e}).then((e=>{a(e)}))}))}},18684:(e,a,s)=>{s.r(a),s.d(a,{ContactusFC:()=>x,default:()=>u});s(72791);var t=s(45214),l=s(61134),r=s(59050),n=s(78687),i=s(13462),c=s(970),d=s(44695),m=s(8007),o=s(80184);const h=m.Ry().shape({firstname:m.Z_().required("First Name is required").min(2,"First Name must be atleast 2 characters").matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field "),lastname:m.Z_().required("Last Name is required").min(1,"Last Name must be atleast 1 character").matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field "),email:m.Z_().required("Email is required").email("Please enter valid Email"),mobilenumber:m.Z_().required("Mobile Number is required").min(10,"Mobile Number must be atleast 10 digits").max(16,"Mobile Number must be less than 16 digits"),country:m.Z_().required("Country is required").max(20,"Country must be less than 20 characters").matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field "),state:m.Z_().required("State is required").max(20,"State must be less than 20 characters").matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field "),city:m.Z_().required("City is required").max(10).matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field "),pincode:m.Rx().typeError("Pincode is required").required("Pincode is required").test("len","Pincode must be 6 digits",(e=>{if(e)return 6===e.toString().length})),company:m.Z_().transform(((e,a)=>a.message&&a.message.length>0?m.Z_().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field ").validate(e):e)),message:m.Z_().max(240,"Maximum characters allowed is 240").transform(((e,a)=>a.company&&a.company.length>0?m.Z_().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field ").validate(e):e))});function x(e){let{createContactAPI:a}=e;const{register:s,handleSubmit:r,formState:{errors:n}}=(0,l.cI)({resolver:(0,d.X)(h)});return(0,o.jsx)("form",{onSubmit:r((e=>{let s={firstName:e.firstname,lastName:e.lastname,emailId:e.email,phoneNumber:parseInt(e.mobilenumber),country:e.country,state:e.state,city:e.city,pinCode:e.pincode,companyName:e.company||null,message:e.message||null};a(s).then((()=>{(0,i.F)({type:"success",message:"Form Submitted"})}))})),children:(0,o.jsxs)("div",{className:"contact-us-container",children:[(0,o.jsx)("div",{children:(0,o.jsx)(t.Dv,{navigationStyle:"contact-us-head",children:(0,o.jsx)("div",{className:"contact-us-inner-container",children:(0,o.jsx)("label",{className:"contact-us-label",children:"Contact Us"})})})}),(0,o.jsxs)("div",{className:"contact-us-main p-5",children:[(0,o.jsx)("label",{className:"contact-head",children:"We\u2019d love to hear from you"}),(0,o.jsx)("div",{className:"contact-card-container p-5",children:(0,o.jsxs)("div",{className:"contact-cards",children:[(0,o.jsxs)("div",{className:"contact-address",children:[(0,o.jsx)("label",{className:"text-center pb-4 contact-title w-100",children:"Address"}),(0,o.jsx)("p",{className:"contact-subject text-center px-3",children:"115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034, Tamil Nadu."})]}),(0,o.jsxs)("div",{className:"contact-call pt-3",children:[(0,o.jsx)("label",{className:"text-center pb-4 contact-title w-100",children:"Call On"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"pb-2 contact-subject",children:"For any queries call us on"}),(0,o.jsxs)("div",{className:"d-flex flex-column",children:[(0,o.jsx)("a",{href:"tel:+91 5684 64865",className:"pb-1 text-decoration-none",children:"+91 5684 64865"}),(0,o.jsx)("a",{href:"tel:+91 65486 32135",className:"pt-1 text-decoration-none",children:"+91 65486 32135"})]})]})]}),(0,o.jsxs)("div",{className:"contact-email",children:[(0,o.jsx)("label",{className:"text-center pb-4 contact-title w-100",children:"Email Us"}),(0,o.jsx)("p",{className:"contact-subject",children:"For any queries write to us on"}),(0,o.jsx)("a",{href:"mailto:support@gmail.com",className:" text-decoration-none",children:"Support@gmail.com"})]})]})}),(0,o.jsx)("label",{className:"get-directions-label pt-2 pb-5",children:"GET DIRECTIONS"}),(0,o.jsx)("label",{className:"need-help-label pt-5",children:"Need help in choosing products"}),(0,o.jsx)("div",{className:"d-flex justify-content-center pt-3",children:(0,o.jsxs)("div",{className:"contact-info-container",children:[(0,o.jsxs)("div",{className:"field",children:[(0,o.jsxs)("label",{children:["First Name",(0,o.jsx)("span",{children:"*"})]}),(0,o.jsx)("input",{...s("firstname"),type:"text",placeholder:"Enter your First Name",name:"firstname"}),n.firstname&&(0,o.jsx)("span",{className:"error-text",children:n.firstname.message})]}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsxs)("label",{children:["Last Name ",(0,o.jsx)("span",{children:"*"})]}),(0,o.jsx)("input",{...s("lastname"),type:"text",placeholder:"Enter your Last Name",name:"lastname"}),n.lastname&&(0,o.jsx)("span",{className:"error-text",children:n.lastname.message})]}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsxs)("label",{children:["Email",(0,o.jsx)("span",{children:"*"})]}),(0,o.jsx)("input",{...s("email"),type:"email",placeholder:"Enter your Email",name:"email"}),n.email&&(0,o.jsx)("span",{className:"error-text",children:n.email.message})]}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsxs)("label",{children:["Mobile Number",(0,o.jsx)("span",{children:"*"})]}),(0,o.jsx)("input",{type:"number",...s("mobilenumber"),placeholder:"Enter your Mobile",name:"mobilenumber"}),n.mobilenumber&&(0,o.jsx)("span",{className:"error-text",children:n.mobilenumber.message})]}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsxs)("label",{children:["Country",(0,o.jsx)("span",{children:"*"})]}),(0,o.jsx)("input",{type:"text",...s("country"),placeholder:"Enter your Country",name:"country"}),n.country&&(0,o.jsx)("span",{className:"error-text",children:n.country.message})]}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsxs)("label",{children:["State",(0,o.jsx)("span",{children:"*"})]}),(0,o.jsx)("input",{type:"text",...s("state"),placeholder:"Enter your State",name:"state"}),n.state&&(0,o.jsx)("span",{className:"error-text",children:n.state.message})]}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsxs)("label",{children:["City",(0,o.jsx)("span",{children:"*"})]}),(0,o.jsx)("input",{type:"text",...s("city"),placeholder:"Enter your City",name:"city"}),n.city&&(0,o.jsx)("span",{className:"error-text",children:n.city.message})]}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsxs)("label",{children:["Pincode",(0,o.jsx)("span",{children:"*"})]}),(0,o.jsx)("input",{type:"number",...s("pincode"),placeholder:"Enter your Pincode",name:"pincode"}),n.pincode&&(0,o.jsx)("span",{className:"error-text",children:n.pincode.message})]}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsx)("label",{children:"Company Name (optional) "}),(0,o.jsx)("input",{className:"field-company",type:"text",...s("company"),placeholder:"Enter your Company Name",name:"company"})]}),(0,o.jsxs)("div",{className:"field",children:[(0,o.jsx)("label",{children:"Message "}),(0,o.jsx)("textarea",{className:"field-message",...s("message"),type:"text",placeholder:"Enter Message",name:"message"}),n.message&&(0,o.jsx)("span",{className:"error-text",children:n.message.message})]})]})}),(0,o.jsx)("div",{className:"d-flex justify-content-center pt-5",children:(0,o.jsx)(t.op,{className:"enquire-now-button",children:"Enquire Now"})})]})]})})}const u=(0,n.$j)(null,(e=>(0,r.DE)({createContactAPI:c.r},e)))(x)}}]);
//# sourceMappingURL=8684.017291d2.chunk.js.map