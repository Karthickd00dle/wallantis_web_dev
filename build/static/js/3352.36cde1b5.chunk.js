"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[3352],{93352:(e,l,a)=>{a.r(l),a.d(l,{default:()=>p});var r=a(72791),o=a(57857),n=a(4730),t=a(67557),s=(a(76699),a(96933)),c=a(10765),i=a(85523),d=a(61419),u=a(56543),m=a(80184);function p(){const[e,l]=(0,r.useState)({title:"",description:"",wallPaperType:1,image:""}),[a,p]=(0,r.useState)(),{title:b,wallPaperType:h,image:f}=e;return(0,m.jsxs)("div",{className:"add-blog",children:[(0,m.jsx)(n.Z,{label:"Blog Management"}),(0,m.jsx)(t.r,{label:"Add New Blog"}),(0,m.jsx)("div",{className:"add-edit-blog-container",children:(0,m.jsxs)("div",{className:"add-edit-blog-inner-container",children:[(0,m.jsx)("label",{className:"input-label mb-2",children:"Description"}),(0,m.jsx)(o.R,{placeholder:"Type here"}),(0,m.jsx)("label",{className:"input-label mt-4 mb-2",children:"Features"}),(0,m.jsx)(o.R,{placeholder:"Type here"}),(0,m.jsxs)("div",{className:"image-upload mt-4",children:[(0,m.jsx)("label",{className:"input-label my-2",children:"Image Upload"}),(0,m.jsxs)("div",{className:"image-upload-box",children:[(0,m.jsx)("label",{children:"Drag an image here"}),(0,m.jsx)("label",{className:"my-3",children:"Or"}),(0,m.jsx)(s.op,{variant:"contained",className:" choose-file-button",children:"Choose File"}),(0,m.jsx)("input",{accept:"image/*",type:"file",files:f,id:"upload",hidden:!0,onChange:a=>{let{target:{files:r}}=a;return l({...e,image:URL.createObjectURL(r[0])})}})]})]}),(0,m.jsxs)("div",{className:"col-3 mt-4",children:[(0,m.jsx)("label",{className:"input-label",children:"Status"}),(0,m.jsx)(c.Z,{value:a,onChange:e=>{let{target:{value:l}}=e;return p(l)},children:(0,m.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,m.jsx)(i.Z,{value:1,sx:(0,u.s6)("1"===a,{color:" #5D5FEF"}),control:(0,m.jsx)(d.Z,{sx:{color:"#FF4F5B","&.Mui-checked":{color:"#5D5FEF"}}}),label:"Active"}),(0,m.jsx)(i.Z,{value:2,sx:(0,u.s6)("2"===a,{color:" #5D5FEF"}),control:(0,m.jsx)(d.Z,{sx:{color:"#FF4F5B","&.Mui-checked":{color:"#5D5FEF"}}}),label:"Inactive"})]})})]}),(0,m.jsxs)("div",{className:"mt-5 button-container",children:[(0,m.jsx)(s.op,{variant:"outlined",className:"cancel-button",children:"Cancel"}),(0,m.jsx)(s.op,{variant:"contained",className:"ms-4 save-button",children:"Save & Publish"})]})]})})]})}},67557:(e,l,a)=>{a.d(l,{r:()=>t});a(72791);var r=a(28713),o=a(10272),n=a(80184);const t=e=>{let{label:l}=e;return(0,n.jsxs)("div",{className:"px-5 pt-5 d-flex align-items-center",children:[(0,n.jsx)(r.Z,{className:"cursor-pointer",onClick:()=>o.m.goBack()}),(0,n.jsx)("label",{className:"ps-2 routing-label",children:l})]})}},4730:(e,l,a)=>{a.d(l,{Z:()=>t});a(72791);var r=a(28713),o=a(10272),n=a(80184);const t=e=>{let{label:l,isGoBack:a}=e;return(0,n.jsx)("div",{className:"admin-navbar-container",children:(0,n.jsxs)("div",{className:"navbar-container",children:[(0,n.jsx)(r.Z,{className:"cursor-pointer",onClick:()=>o.m.goBack()}),(0,n.jsx)("label",{className:"ps-2 navbar-label",children:l})]})})}},28713:(e,l,a)=>{a.d(l,{Z:()=>n});var r=a(74223),o=a(80184);const n=(0,r.Z)((0,o.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackSharp")},85523:(e,l,a)=>{a.d(l,{Z:()=>j});var r=a(63366),o=a(87462),n=a(72791),t=a(28182),s=a(94419),c=a(52930),i=a(20890),d=a(14036),u=a(66934),m=a(31402),p=a(75878),b=a(21217);function h(e){return(0,b.Z)("MuiFormControlLabel",e)}const f=(0,p.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var x=a(76147),v=a(80184);const Z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],g=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,l)=>{const{ownerState:a}=e;return[{["& .".concat(f.label)]:l.label},l.root,l["labelPlacement".concat((0,d.Z)(a.labelPlacement))]]}})((e=>{let{theme:l,ownerState:a}=e;return(0,o.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,["&.".concat(f.disabled)]:{cursor:"default"}},"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16},{["& .".concat(f.label)]:{["&.".concat(f.disabled)]:{color:(l.vars||l).palette.text.disabled}}})})),j=n.forwardRef((function(e,l){var a;const u=(0,m.Z)({props:e,name:"MuiFormControlLabel"}),{className:p,componentsProps:b={},control:f,disabled:j,disableTypography:N,label:w,labelPlacement:y="end",slotProps:F={}}=u,P=(0,r.Z)(u,Z),C=(0,c.Z)();let R=j;"undefined"===typeof R&&"undefined"!==typeof f.props.disabled&&(R=f.props.disabled),"undefined"===typeof R&&C&&(R=C.disabled);const k={disabled:R};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof f.props[e]&&"undefined"!==typeof u[e]&&(k[e]=u[e])}));const S=(0,x.Z)({props:u,muiFormControl:C,states:["error"]}),M=(0,o.Z)({},u,{disabled:R,labelPlacement:y,error:S.error}),L=(e=>{const{classes:l,disabled:a,labelPlacement:r,error:o}=e,n={root:["root",a&&"disabled","labelPlacement".concat((0,d.Z)(r)),o&&"error"],label:["label",a&&"disabled"]};return(0,s.Z)(n,h,l)})(M),D=null!=(a=F.typography)?a:b.typography;let B=w;return null==B||B.type===i.Z||N||(B=(0,v.jsx)(i.Z,(0,o.Z)({component:"span"},D,{className:(0,t.Z)(L.label,null==D?void 0:D.className),children:B}))),(0,v.jsxs)(g,(0,o.Z)({className:(0,t.Z)(L.root,p),ownerState:M,ref:l},P,{children:[n.cloneElement(f,k),B]}))}))},10765:(e,l,a)=>{a.d(l,{Z:()=>y});var r=a(87462),o=a(63366),n=a(72791),t=a(28182),s=a(94419),c=a(66934),i=a(31402),d=a(75878),u=a(21217);function m(e){return(0,u.Z)("MuiFormGroup",e)}(0,d.Z)("MuiFormGroup",["root","row","error"]);var p=a(52930),b=a(76147),h=a(80184);const f=["className","row"],x=(0,c.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,l)=>{const{ownerState:a}=e;return[l.root,a.row&&l.row]}})((e=>{let{ownerState:l}=e;return(0,r.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},l.row&&{flexDirection:"row"})})),v=n.forwardRef((function(e,l){const a=(0,i.Z)({props:e,name:"MuiFormGroup"}),{className:n,row:c=!1}=a,d=(0,o.Z)(a,f),u=(0,p.Z)(),v=(0,b.Z)({props:a,muiFormControl:u,states:["error"]}),Z=(0,r.Z)({},a,{row:c,error:v.error}),g=(e=>{const{classes:l,row:a,error:r}=e,o={root:["root",a&&"row",r&&"error"]};return(0,s.Z)(o,m,l)})(Z);return(0,h.jsx)(x,(0,r.Z)({className:(0,t.Z)(g.root,n),ownerState:Z,ref:l},d))}));var Z=a(42071),g=a(98278),j=a(18672),N=a(67384);const w=["actions","children","defaultValue","name","onChange","value"],y=n.forwardRef((function(e,l){const{actions:a,children:t,defaultValue:s,name:c,onChange:i,value:d}=e,u=(0,o.Z)(e,w),m=n.useRef(null),[p,b]=(0,g.Z)({controlled:d,default:s,name:"RadioGroup"});n.useImperativeHandle(a,(()=>({focus:()=>{let e=m.current.querySelector("input:not(:disabled):checked");e||(e=m.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const f=(0,Z.Z)(l,m),x=(0,N.Z)(c),y=n.useMemo((()=>({name:x,onChange(e){b(e.target.value),i&&i(e,e.target.value)},value:p})),[x,i,b,p]);return(0,h.jsx)(j.Z.Provider,{value:y,children:(0,h.jsx)(v,(0,r.Z)({role:"radiogroup",ref:f},u,{children:t}))})}))},76699:()=>{}}]);
//# sourceMappingURL=3352.36cde1b5.chunk.js.map