"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[9399],{19399:(e,t,a)=>{a.r(t),a.d(t,{AddEditProductFC:()=>ne,default:()=>le});var n=a(67557),l=a(57857),o=a(12779),r=a(4730),c=a(72791),i=a(78687),s=a(6598),d=(a(21038),a(7551)),u=a(42628),p=a.n(u),m=a(62234),h=a(30168),v=a(63366),b=a(87462),g=a(28182),f=a(94419),x=a(12065),C=a(74223),y=a(80184);const k=(0,C.Z)((0,y.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var j=a(42071),Z=a(14036),E=a(12308),I=a(31402),N=a(66934),S=a(75878),w=a(21217);function D(e){return(0,w.Z)("MuiChip",e)}const O=(0,S.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),z=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],R=(0,N.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{color:n,iconColor:l,clickable:o,onDelete:r,size:c,variant:i}=a;return[{["& .".concat(O.avatar)]:t.avatar},{["& .".concat(O.avatar)]:t["avatar".concat((0,Z.Z)(c))]},{["& .".concat(O.avatar)]:t["avatarColor".concat((0,Z.Z)(n))]},{["& .".concat(O.icon)]:t.icon},{["& .".concat(O.icon)]:t["icon".concat((0,Z.Z)(c))]},{["& .".concat(O.icon)]:t["iconColor".concat((0,Z.Z)(l))]},{["& .".concat(O.deleteIcon)]:t.deleteIcon},{["& .".concat(O.deleteIcon)]:t["deleteIcon".concat((0,Z.Z)(c))]},{["& .".concat(O.deleteIcon)]:t["deleteIconColor".concat((0,Z.Z)(n))]},{["& .".concat(O.deleteIcon)]:t["deleteIcon".concat((0,Z.Z)(i),"Color").concat((0,Z.Z)(n))]},t.root,t["size".concat((0,Z.Z)(c))],t["color".concat((0,Z.Z)(n))],o&&t.clickable,o&&"default"!==n&&t["clickableColor".concat((0,Z.Z)(n),")")],r&&t.deletable,r&&"default"!==n&&t["deletableColor".concat((0,Z.Z)(n))],t[i],t["".concat(i).concat((0,Z.Z)(n))]]}})((e=>{let{theme:t,ownerState:a}=e;const n="light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300];return(0,b.Z)({maxWidth:"100%",fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(t.vars||t).palette.text.primary,backgroundColor:(t.vars||t).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",["&.".concat(O.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},["& .".concat(O.avatar)]:{marginLeft:5,marginRight:-6,width:24,height:24,color:t.vars?t.vars.palette.Chip.defaultAvatarColor:n,fontSize:t.typography.pxToRem(12)},["& .".concat(O.avatarColorPrimary)]:{color:(t.vars||t).palette.primary.contrastText,backgroundColor:(t.vars||t).palette.primary.dark},["& .".concat(O.avatarColorSecondary)]:{color:(t.vars||t).palette.secondary.contrastText,backgroundColor:(t.vars||t).palette.secondary.dark},["& .".concat(O.avatarSmall)]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)},["& .".concat(O.icon)]:(0,b.Z)({marginLeft:5,marginRight:-6},"small"===a.size&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&(0,b.Z)({color:t.vars?t.vars.palette.Chip.defaultIconColor:n},"default"!==a.color&&{color:"inherit"})),["& .".concat(O.deleteIcon)]:(0,b.Z)({WebkitTapHighlightColor:"transparent",color:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / 0.26)"):(0,x.Fq)(t.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / 0.4)"):(0,x.Fq)(t.palette.text.primary,.4)}},"small"===a.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==a.color&&{color:t.vars?"rgba(".concat(t.vars.palette[a.color].contrastTextChannel," / 0.7)"):(0,x.Fq)(t.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(t.vars||t).palette[a.color].contrastText}})},"small"===a.size&&{height:24},"default"!==a.color&&{backgroundColor:(t.vars||t).palette[a.color].main,color:(t.vars||t).palette[a.color].contrastText},a.onDelete&&{["&.".concat(O.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.selectedChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,x.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},a.onDelete&&"default"!==a.color&&{["&.".concat(O.focusVisible)]:{backgroundColor:(t.vars||t).palette[a.color].dark}})}),(e=>{let{theme:t,ownerState:a}=e;return(0,b.Z)({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.selectedChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,x.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)},["&.".concat(O.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.selectedChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,x.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},"&:active":{boxShadow:(t.vars||t).shadows[1]}},a.clickable&&"default"!==a.color&&{["&:hover, &.".concat(O.focusVisible)]:{backgroundColor:(t.vars||t).palette[a.color].dark}})}),(e=>{let{theme:t,ownerState:a}=e;return(0,b.Z)({},"outlined"===a.variant&&{backgroundColor:"transparent",border:t.vars?"1px solid ".concat(t.vars.palette.Chip.defaultBorder):"1px solid ".concat("light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[700]),["&.".concat(O.clickable,":hover")]:{backgroundColor:(t.vars||t).palette.action.hover},["&.".concat(O.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["& .".concat(O.avatar)]:{marginLeft:4},["& .".concat(O.avatarSmall)]:{marginLeft:2},["& .".concat(O.icon)]:{marginLeft:4},["& .".concat(O.iconSmall)]:{marginLeft:2},["& .".concat(O.deleteIcon)]:{marginRight:5},["& .".concat(O.deleteIconSmall)]:{marginRight:3}},"outlined"===a.variant&&"default"!==a.color&&{color:(t.vars||t).palette[a.color].main,border:"1px solid ".concat(t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.7)"):(0,x.Fq)(t.palette[a.color].main,.7)),["&.".concat(O.clickable,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,x.Fq)(t.palette[a.color].main,t.palette.action.hoverOpacity)},["&.".concat(O.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.focusOpacity,")"):(0,x.Fq)(t.palette[a.color].main,t.palette.action.focusOpacity)},["& .".concat(O.deleteIcon)]:{color:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.7)"):(0,x.Fq)(t.palette[a.color].main,.7),"&:hover, &:active":{color:(t.vars||t).palette[a.color].main}}})})),P=(0,N.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:a}=e,{size:n}=a;return[t.label,t["label".concat((0,Z.Z)(n))]]}})((e=>{let{ownerState:t}=e;return(0,b.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===t.size&&{paddingLeft:8,paddingRight:8})}));function A(e){return"Backspace"===e.key||"Delete"===e.key}const T=c.forwardRef((function(e,t){const a=(0,I.Z)({props:e,name:"MuiChip"}),{avatar:n,className:l,clickable:o,color:r="default",component:i,deleteIcon:s,disabled:d=!1,icon:u,label:p,onClick:m,onDelete:h,onKeyDown:x,onKeyUp:C,size:N="medium",variant:S="filled",tabIndex:w,skipFocusWhenDisabled:O=!1}=a,T=(0,v.Z)(a,z),L=c.useRef(null),F=(0,j.Z)(L,t),B=e=>{e.stopPropagation(),h&&h(e)},K=!(!1===o||!m)||o,M=K||h?E.Z:i||"div",V=(0,b.Z)({},a,{component:M,disabled:d,size:N,color:r,iconColor:c.isValidElement(u)&&u.props.color||r,onDelete:!!h,clickable:K,variant:S}),W=(e=>{const{classes:t,disabled:a,size:n,color:l,iconColor:o,onDelete:r,clickable:c,variant:i}=e,s={root:["root",i,a&&"disabled","size".concat((0,Z.Z)(n)),"color".concat((0,Z.Z)(l)),c&&"clickable",c&&"clickableColor".concat((0,Z.Z)(l)),r&&"deletable",r&&"deletableColor".concat((0,Z.Z)(l)),"".concat(i).concat((0,Z.Z)(l))],label:["label","label".concat((0,Z.Z)(n))],avatar:["avatar","avatar".concat((0,Z.Z)(n)),"avatarColor".concat((0,Z.Z)(l))],icon:["icon","icon".concat((0,Z.Z)(n)),"iconColor".concat((0,Z.Z)(o))],deleteIcon:["deleteIcon","deleteIcon".concat((0,Z.Z)(n)),"deleteIconColor".concat((0,Z.Z)(l)),"deleteIcon".concat((0,Z.Z)(i),"Color").concat((0,Z.Z)(l))]};return(0,f.Z)(s,D,t)})(V),q=M===E.Z?(0,b.Z)({component:i||"div",focusVisibleClassName:W.focusVisible},h&&{disableRipple:!0}):{};let H=null;h&&(H=s&&c.isValidElement(s)?c.cloneElement(s,{className:(0,g.Z)(s.props.className,W.deleteIcon),onClick:B}):(0,y.jsx)(k,{className:(0,g.Z)(W.deleteIcon),onClick:B}));let Q=null;n&&c.isValidElement(n)&&(Q=c.cloneElement(n,{className:(0,g.Z)(W.avatar,n.props.className)}));let U=null;return u&&c.isValidElement(u)&&(U=c.cloneElement(u,{className:(0,g.Z)(W.icon,u.props.className)})),(0,y.jsxs)(R,(0,b.Z)({as:M,className:(0,g.Z)(W.root,l),disabled:!(!K||!d)||void 0,onClick:m,onKeyDown:e=>{e.currentTarget===e.target&&A(e)&&e.preventDefault(),x&&x(e)},onKeyUp:e=>{e.currentTarget===e.target&&(h&&A(e)?h(e):"Escape"===e.key&&L.current&&L.current.blur()),C&&C(e)},ref:F,tabIndex:O&&d?-1:w,ownerState:V},q,T,{children:[Q||U,(0,y.jsx)(P,{className:(0,g.Z)(W.label),ownerState:V,children:p}),H]}))}));var L=a(29823),F=a(47563),B=a(58956),K=a(99723);function M(e){return e.substring(2).toLowerCase()}const V=function(e){const{children:t,disableReactTree:a=!1,mouseEvent:n="onClick",onClickAway:l,touchEvent:o="onTouchEnd"}=e,r=c.useRef(!1),i=c.useRef(null),s=c.useRef(!1),d=c.useRef(!1);c.useEffect((()=>(setTimeout((()=>{s.current=!0}),0),()=>{s.current=!1})),[]);const u=(0,F.Z)(t.ref,i),p=(0,B.Z)((e=>{const t=d.current;d.current=!1;const n=(0,K.Z)(i.current);if(!s.current||!i.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n))return;if(r.current)return void(r.current=!1);let o;o=e.composedPath?e.composedPath().indexOf(i.current)>-1:!n.documentElement.contains(e.target)||i.current.contains(e.target),o||!a&&t||l(e)})),m=e=>a=>{d.current=!0;const n=t.props[e];n&&n(a)},h={ref:u};return!1!==o&&(h[o]=m(o)),c.useEffect((()=>{if(!1!==o){const e=M(o),t=(0,K.Z)(i.current),a=()=>{r.current=!0};return t.addEventListener(e,p),t.addEventListener("touchmove",a),()=>{t.removeEventListener(e,p),t.removeEventListener("touchmove",a)}}}),[p,o]),!1!==n&&(h[n]=m(n)),c.useEffect((()=>{if(!1!==n){const e=M(n),t=(0,K.Z)(i.current);return t.addEventListener(e,p),()=>{t.removeEventListener(e,p)}}}),[p,n]),(0,y.jsx)(c.Fragment,{children:c.cloneElement(t,h)})};var W,q=a(13400),H=a(19218);const Q="Enter",U="Backspace",X=229,Y={ChipStyled:(0,N.ZP)(T)((e=>{let{theme:t,size:a}=e;return"\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ".concat("small"===a?"26px":"32px",';\n\n\n    &[aria-disabled="true"] > svg {\n      color: ').concat(t.palette.action.disabled,";\n      cursor: default;\n    }\n\n    &.MuiChipsInput-Chip-Editing {\n      background-color: ").concat(t.palette.primary.light,";\n      color: ").concat(t.palette.primary.contrastText,";\n    }\n  ")}))},$=e=>{const{className:t,index:a,onDelete:n,disabled:l,onEdit:o,isEditing:r,disableEdition:c,...i}=e;return(0,y.jsx)(Y.ChipStyled,{className:"MuiChipsInput-Chip ".concat(r?"MuiChipsInput-Chip-Editing":""," ").concat(t||""),onKeyDown:e=>{e.key===Q&&n(a)},disabled:l,onDoubleClick:c?void 0:e=>{e.target.textContent===i.label&&(l||o(a))},tabIndex:l?-1:0,"aria-disabled":l,onDelete:e=>{var t,l;null!==e&&void 0!==e&&null!==(t=e.preventDefault)&&void 0!==t&&t.call(e),null!==e&&void 0!==e&&null!==(l=e.stopPropagation)&&void 0!==l&&l.call(e),n(a)},...i})};function G(e,t){"function"==typeof t?t(e):t&&function(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}(t)&&"current"in t&&(t.current=e)}const J=(0,N.ZP)("div")(W||(W=(0,h.Z)(["\n  top: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n  position: absolute;\n"]))),_=(0,N.ZP)(H.Z)((e=>{var t;return"\n    max-width: 100%;\n\n    .MuiInputBase-root {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      row-gap: 5px;\n      padding-top: ".concat("small"===e.size?"5px":"9px",";\n      padding-right: ").concat(null!==(t=e.InputProps)&&void 0!==t&&t.endAdornment?"30px":"9px",";\n      padding-bottom: ").concat("small"===e.size?"5px":"9px",";\n      padding-left: 10px;\n\n      input {\n        min-width: 30px;\n        width: auto;\n        flex-grow: 1;\n        text-overflow: ellipsis;\n        padding: ").concat("small"===e.size?"3.5px 4px":"7.5px 4px",";\n        align-self: center;\n      }\n    }\n  ")})),ee={ChipStyled:(0,N.ZP)(T)((e=>{let{theme:t,size:a}=e;return"\n    max-width: 100%;\n    margin: 2px 4px;\n    height: ".concat("small"===a?"26px":"32px",';\n\n    &[aria-disabled="true"] > svg.MuiChip-deleteIcon {\n      color: ').concat(t.palette.action.disabled,";\n      cursor: default;\n    }\n  ")})),TextFieldStyled:_,EndAdornmentClose:J},te=c.forwardRef(((e,t)=>{const{chips:a,onAddChip:n,onEditChip:l,onDeleteChip:o,onDeleteAllChips:r,InputProps:i,onInputChange:s,disabled:d,clearInputOnBlur:u,validate:p,error:m,helperText:h,hideClearAll:v,inputProps:b,size:g,disableDeleteOnBackspace:f,disableEdition:x,className:C,renderChip:k,addOnWhichKey:j,onFocus:Z,inputRef:E,inputValue:I,...N}=e,[S,w]=c.useState(""),[D,O]=c.useState(""),z=c.useRef(null),R=c.useRef(!1),P=c.useRef("string"==typeof I),[A,T]=c.useState(null),{onKeyDown:F,...B}=b||{},{inputRef:K,...M}=i||{},W=()=>{O("")},H=P.current,Y=H?I:S,J=e=>{null!==s&&void 0!==s&&s(e),H||w(e)},_=()=>{T(null)},te=()=>{W(),J("")},ae=()=>{!R.current||(null!==A?(_(),te()):u&&te(),R.current=!1)},ne=(e,t)=>a=>{if("function"==typeof p){const a=p(e);if(!1===a)return void t.preventDefault();if(!function(e){return"boolean"==typeof e}(a)&&a.isError)return t.preventDefault(),void O(a.textError)}a()},le=e=>{var t;e===A?(te(),_()):(e=>{J(a[e]),T(e),W()})(e),null===(t=z.current)||void 0===t||t.focus()},oe=e=>{d||(null!==o&&void 0!==o&&o(e),null!==A&&(_(),te()))},re=a.length>0;return(0,y.jsx)(V,{onClickAway:ae,children:(0,y.jsx)(ee.TextFieldStyled,{value:Y,onChange:e=>{J(e.target.value)},ref:t,className:"MuiChipsInput-TextField ".concat(C||""),size:g,placeholder:"Type and press enter",onFocus:e=>{e.preventDefault(),null!==Z&&void 0!==Z&&Z(e),R.current=!0},inputProps:{onKeyDown:e=>{const t=((e,t)=>t!==X&&(j?Array.isArray(j)?j.some((t=>t===e)):j===e:e===Q))(e.key,e.keyCode),r=e.key===U,c=Y.trim();if("Tab"!==e.code){if(t&&e.preventDefault(),Y.length>0&&t)0===c.length?te():null!==A?((e,t,a)=>{ne(e,a)((()=>{null!==l&&void 0!==l&&l(e,t),_(),te()}))})(c,A,e):((e,t)=>{ne(e,t)((()=>{null!==n&&void 0!==n&&n(Y.trim()),te()}))})(c,e);else if(r&&0===Y.length&&a.length>0&&!f){const e=a.length-1;null!==o&&void 0!==o&&o(e),A===e&&_()}null===F||void 0===F||F(e)}else ae()},...B},disabled:d,error:Boolean(D)||m,helperText:D||h,InputProps:{inputRef:e=>{z.current=e,E&&G(e,E),t&&G(e,t)},startAdornment:re?a.map(((e,t)=>{const a="chip-".concat(t),n={index:t,onEdit:le,label:e,title:e,isEditing:t===A,size:g,disabled:d,disableEdition:x,onDelete:oe};return k?k($,a,n):(0,c.createElement)($,{...n,key:a})})):null,endAdornment:v?null:(0,y.jsx)(ee.EndAdornmentClose,{style:{visibility:re?"visible":"hidden"},children:(0,y.jsx)(q.Z,{"aria-label":"Clear",title:"Clear",disabled:d,size:"small",onClick:e=>{e.preventDefault(),!v&&!d&&(null!==r&&void 0!==r&&r(),te(),_())},children:(0,y.jsx)(L.Z,{fontSize:"small"})})}),...M},...N})})}));te.defaultProps={onInputChange:()=>{},clearInputOnBlur:!1,hideClearAll:!1,disableDeleteOnBackspace:!1,disableEdition:!1,addOnWhichKey:Q,onDeleteChip:()=>{},onAddChip:()=>{},inputValue:void 0,onEditChip:()=>{},renderChip:void 0,onDeleteAllChips:()=>{},validate:()=>!0};const ae=c.forwardRef(((e,t)=>{const{value:a,onChange:n,onAddChip:l,onInputChange:o,onDeleteChip:r,disabled:c,validate:i,clearInputOnBlur:s,hideClearAll:d,disableDeleteOnBackspace:u,onEditChip:p,renderChip:m,disableEdition:h,addOnWhichKey:v,inputValue:b,...g}=e;return(0,y.jsx)(te,{chips:a,onAddChip:e=>{if(c)return;const t=function(e,t){return[...e,t]}(a,e),o=t.length-1;null!==l&&void 0!==l&&l(e,o),null===n||void 0===n||n(t)},onInputChange:o,disableDeleteOnBackspace:u,onDeleteChip:e=>{if(c)return;const t=a[e];null!==n&&void 0!==n&&n(function(e,t){return e.filter(((e,a)=>t!==a))}(a,e)),null===r||void 0===r||r(t,e)},onEditChip:(e,t)=>{c||h||(null!==n&&void 0!==n&&n(function(e,t,a){return e.map(((e,n)=>t===n?a:e))}(a,t,e)),null===p||void 0===p||p(e,t))},renderChip:m,onDeleteAllChips:()=>{null===n||void 0===n||n([])},clearInputOnBlur:s,disabled:c,disableEdition:h,validate:i,inputValue:b,hideClearAll:d,addOnWhichKey:v,...g,ref:t})}));ae.defaultProps={value:[],onChange:()=>{},onAddChip:()=>{},onDeleteChip:()=>{},onInputChange:()=>{},onEditChip:()=>{},addOnWhichKey:Q,clearInputOnBlur:!1,disableEdition:!1,hideClearAll:!1,disableDeleteOnBackspace:!1,validate:()=>!0};const ne=()=>{const[e,t]=(0,c.useState)([]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r.Z,{label:"Product Management"}),(0,y.jsx)(n.r,{label:"Add New Product"}),(0,y.jsx)("div",{className:"add-edit-installer-container",children:(0,y.jsxs)("div",{className:"add-edit-installer-inner-container",children:[(0,y.jsxs)("div",{className:"row",children:[(0,y.jsxs)("div",{className:"col-6 pb-2",children:[(0,y.jsx)("label",{className:"input-label",children:"Category"}),(0,y.jsx)(l.i,{})]}),(0,y.jsxs)("div",{className:"col-6 pb-2",children:[(0,y.jsx)("label",{className:"input-label",children:"Sub Category"}),(0,y.jsx)(l.i,{})]}),(0,y.jsxs)("div",{className:"col-6 py-4",children:[(0,y.jsx)("label",{className:"input-label",children:"Title"}),(0,y.jsx)(l.i,{})]}),(0,y.jsxs)("div",{className:"col-6 py-4",children:[(0,y.jsx)("label",{className:"input-label",children:"Price"}),(0,y.jsx)(l.i,{})]}),(0,y.jsxs)("div",{className:"d-flex flex-column col-6 py-4",children:[(0,y.jsx)("label",{className:"input-label pb-2",children:"Color"}),(0,y.jsx)(ae,{className:"color-chip-input",placeholder:"Add tags",helperText:e.length>0?"Double click to edit a chip":"",clearInputOnBlur:!0,value:e,onChange:e=>{t(e)}})]}),(0,y.jsxs)("div",{className:"col-6 py-4",children:[(0,y.jsx)("label",{className:"input-label",children:"Quantity"}),(0,y.jsx)(l.i,{})]}),(0,y.jsxs)("div",{className:"col-6 py-4",children:[(0,y.jsx)("label",{className:"input-label",children:"Collection"}),(0,y.jsx)(l.i,{})]}),(0,y.jsxs)("div",{className:"col-6 py-4",children:[(0,y.jsx)("label",{className:"input-label",children:"Rooms"}),(0,y.jsx)(l.i,{})]}),(0,y.jsxs)("div",{className:"col-12 py-4",children:[(0,y.jsx)("label",{className:"input-label",children:"Date"}),(0,y.jsx)(l.i,{})]}),(0,y.jsxs)("div",{className:"col-6 pt-2",children:[(0,y.jsx)("label",{className:"input-label",children:"Description"}),(0,y.jsx)(d.CKEditor,{className:"CKEditorBox",onInit:e=>{console.log("Editor is ready to use!",e),e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},editor:p(),config:{toolbar:["bold","underline","italic","strikethrough","alignment","numberedList","bulletedList","link","blockQuote","insertTable","uploadImage","indent","outdent","redo","undo"]}})]}),(0,y.jsxs)("div",{className:"col-6 pt-2",children:[(0,y.jsx)("label",{className:"input-label",children:"Features"}),(0,y.jsx)(d.CKEditor,{className:"CKEditorBox",editor:p(),config:{toolbar:["bold","underline","italic","strikethrough","alignment","numberedList","bulletedList","link","blockQuote","insertTable","uploadImage","indent","outdent","redo","undo"]}})]}),(0,y.jsxs)("div",{className:"col-12 py-4",children:[(0,y.jsx)("label",{className:"input-label pb-2",children:"Image Upload"}),(0,y.jsx)(m.Z,{})]})]}),(0,y.jsxs)("div",{className:"button-container mt-5",children:[(0,y.jsx)(o.o,{variant:"outlined",className:"cancel-button",children:"Cancel"}),(0,y.jsx)(o.o,{variant:"contained",className:"ms-4 save-button",children:"Save & Publish"})]})]})})]})},le=(0,i.$j)(null,(e=>(0,s.DE)({},e)))(ne)},67557:(e,t,a)=>{a.d(t,{r:()=>r});a(72791);var n=a(28713),l=a(10272),o=a(80184);const r=e=>{let{label:t}=e;return(0,o.jsxs)("div",{className:"px-5 pt-5 d-flex align-items-center",children:[(0,o.jsx)(n.Z,{className:"cursor-pointer",onClick:()=>l.m.goBack()}),(0,o.jsx)("label",{className:"ps-2 routing-label",children:t})]})}},57857:(e,t,a)=>{a.d(t,{R:()=>i,i:()=>c});a(72791);var n=a(7551),l=a(42628),o=a.n(l),r=a(80184);function c(e){let{label:t,placeholder:a,name:n,value:l,onChange:o}=e;return(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("label",{className:"input-label",children:t}),(0,r.jsx)("input",{placeholder:a,name:n,value:l,onChange:o,className:"common-input"})]})}function i(){return(0,r.jsx)(n.CKEditor,{className:"CKEditorBox",onReady:e=>{e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},editor:o(),config:{toolbar:["bold","underline","italic","strikethrough","alignment","numberedList","bulletedList","link","blockQuote","insertTable","uploadImage","indent","outdent","redo","undo"]}})}},12779:(e,t,a)=>{a.d(t,{o:()=>o});a(72791);var n=a(36151),l=a(80184);const o=e=>{let{style:t,className:a,variant:o,children:r,startIcon:c,onClick:i,endIcon:s,type:d="submit"}=e;const u={...t,fontSize:"18px",textTransform:"none",cursor:"pointer"};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.Z,{style:u,id:"cursor-pointer",className:"".concat(a),variant:o,startIcon:c,endIcon:s,type:d,onClick:i,children:r})})}},4730:(e,t,a)=>{a.d(t,{Z:()=>l});a(72791);var n=a(80184);const l=e=>{let{label:t}=e;return(0,n.jsx)("div",{className:"admin-navbar-container",children:(0,n.jsx)("label",{className:" navbar-label",children:t})})}},62234:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(72791),l=a(12779),o=a(80184);function r(){const[e,t]=(0,n.useState)(null),a=(0,n.useRef)();return e?(0,o.jsx)("div",{className:"image-uploads",children:(0,o.jsx)("ul",{children:Array.from(e).map(((e,t)=>(0,o.jsx)("li",{children:e.name},t)))})}):(0,o.jsx)("div",{className:"image-upload-container",children:!e&&(0,o.jsxs)("div",{className:"image-dropzone",onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),t(e.dataTransfer.files)},children:[(0,o.jsx)("label",{children:"Drag an image here"}),(0,o.jsx)("label",{children:"Or"}),(0,o.jsx)("input",{type:"file",multiple:!0,onChange:e=>t(e.target.files),hidden:!0,ref:a}),(0,o.jsx)("div",{className:"d-flex justify-content-center",children:(0,o.jsx)(l.o,{variant:"contained",className:"choose-file-button mt-2",onClick:()=>a.current.click(),children:"Choose File"})})]})})}},29823:(e,t,a)=>{var n=a(64836);t.Z=void 0;var l=n(a(45649)),o=a(80184),r=(0,l.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=r},28713:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(74223),l=a(80184);const o=(0,n.Z)((0,l.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackSharp")},21038:()=>{}}]);
//# sourceMappingURL=9399.6736b430.chunk.js.map