"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[1810],{62855:(e,a,t)=>{t.d(a,{a_:()=>c,al:()=>i,eu:()=>s,xu:()=>n});var r=t(56543),l=t(24618);const s=e=>(a,t,r)=>{let{apiCall:s,Toast:c}=r;return new Promise(((a,t)=>{s({...l.wk.createCart,body:e}).then((e=>{a(e)})).catch((e=>{let{message:a}=e;t(c({type:"error",message:a}))}))}))},c=()=>(e,a,t)=>{let{apiCall:r,Toast:s}=t;return new Promise(((e,a)=>{r({...l.wk.cartList}).then((a=>{e(a)}))}))},i=e=>(a,t,s)=>{let{apiCall:c,Toast:i}=s;return new Promise(((a,t)=>{(0,r.DI)(e,l.wk.deleteCart),c({...l.wk.deleteCart}).then((e=>{a(e)}))}))},n=(e,a)=>(t,s,c)=>{let{apiCall:i,Toast:n}=c;return new Promise(((t,s)=>{(0,r.DI)(e,l.wk.updateCart),i({...l.wk.updateCart,body:a}).then((e=>{t(e)}))}))}},35692:(e,a,t)=>{t.d(a,{Z:()=>x});var r=t(72791),l=t(56543),s=t(94454),c=t(90690),i=t(14361),n=t(83484),o=t(85947),d=t(6598),u=t(62855),m=t(78687),h=t(45651),g=t(80184);const x=(0,m.$j)(null,(e=>(0,d.DE)({createCartApiCall:u.eu},e)))((function(e){let{onClickCard:a,prodData:t,isHome:d,createCartApiCall:u}=e;const{title:m,images:x,price:p}=t,[b,j]=(0,r.useState)(!1),[v,C]=(0,r.useState)(!1),[f,N]=(0,r.useState)(!1);return(0,g.jsxs)("div",{className:"card-three-container",onMouseEnter:()=>{j(!0)},onMouseLeave:()=>{j(!1)},children:[(0,g.jsxs)("div",{className:"card-three-image-section",children:[b?(0,g.jsx)("div",{className:"icon-container",children:(0,g.jsxs)("div",{className:"icon-container-inner d-flex p-2",children:[(0,g.jsx)("div",{className:"icon-1",children:(0,g.jsx)(s.Z,{name:m,checked:v,onChange:e=>((e,a)=>{let{target:{name:t,checked:r}}=e;C(!v),r?(0,h.F)({type:"success",message:"Item added to Wishlist"}):(0,h.F)({type:"info",message:"Item removed from Wishlist"})})(e),icon:(0,g.jsx)(c.Z,{sx:(0,l.aV)(d,{color:"#000000"},{color:"#2A71F9"})}),checkedIcon:(0,g.jsx)(i.Z,{sx:(0,l.aV)(d,{color:"#ed1b24"},{color:"#2A71F9"})})})}),(0,g.jsx)("div",{className:"icon-2",children:(0,g.jsx)(s.Z,{name:m,checked:f,onChange:e=>((e,a)=>{let{target:{name:t,checked:r}}=e;if(N(!f),r){let e={productId:a.id.toString(),quantity:1,color:a.color};u(e).then((()=>{(0,h.F)({type:"success",message:"Item Added To Cart"})}))}else(0,h.F)({type:"info",message:"Item removed from Cart"})})(e,t),icon:(0,g.jsx)(n.Z,{sx:(0,l.aV)(d,{color:"#000000"},{color:"#2A71F9"})}),checkedIcon:(0,g.jsx)(o.Z,{sx:(0,l.aV)(d,{color:"#ed1b24"},{color:"#2A71F9"})})})})]})}):null,(0,g.jsx)("div",{onClick:()=>a(t),className:"card-image-container",children:(0,g.jsx)("img",{className:"card-image",src:"".concat((0,l.aV)(Array.isArray(x),x[0],x)),alt:m})})]}),(0,g.jsx)("div",{className:"card-three-title",children:m}),(0,g.jsx)("div",{className:"card-three-price",children:"\u20b9".concat(p,"/Roll")}),(0,g.jsx)("div",{className:"card-three-info-txt",children:"Included Tax | Free Shipping"})]})}))},42108:(e,a,t)=>{t.d(a,{o:()=>j});var r=t(50277),l=t(41473),s=t(55818),c=t(3721),i=t(73017),n=t(72791),o=t(20431),d=t(66934),u=t(80184);const m=(0,d.ZP)(o.ZP)((e=>{let{theme:a}=e;return{color:"#2A71F9",height:90,"& .MuiSlider-thumb":{height:27,width:3,backgroundColor:"currentColor",border:"1px solid currentColor",borderRadius:0,boxShadow:"none","&:active,:hover":{boxShadow:"none"},"& .airbnb-bar":{height:9,width:1,backgroundColor:"currentColor",marginLeft:1,marginRight:1,borderRadius:0}},"& .MuiSlider-valueLabel":{lineHeight:1,fontSize:12,padding:"2px 6px 2px 6px",display:"flex",alignItems:"center",justifyContent:"center",width:"auto",height:25,backgroundColor:"#2A71F9"},"& .MuiSlider-track":{borderRadius:0,height:10},"& .MuiSlider-rail":{color:"dark"===a.palette.mode?"#bfbfbf":"#d8d8d8",opacity:"dark"===a.palette.mode?void 0:1,height:10,borderRadius:0}}})),h=e=>{let{pricevalue:a,onChange:t,maxValue:r}=e;return(0,u.jsx)("div",{className:"slider-container px-3",children:(0,u.jsx)(m,{value:a,onChange:t,max:r,valueLabelDisplay:"auto",getAriaValueText:e=>"\u20b9 ".concat(e),valueLabelFormat:e=>"\u20b9 ".concat(e)})})};var g=t(32978),x=t(6598),p=t(78687),b=t(64880);const j=(0,p.$j)(((e,a)=>({ownProps:a})),(e=>(0,x.DE)({getProductFilterApi:g.Pj},e)))((e=>{let{setCheckedValues:a,maximumPrice:t,pricevalue:o,setPriceValue:d,getProductFilterApi:m,isViewAll:g}=e;const x=(0,b.UO)(),p=(e,t)=>{let{target:{name:r,value:l,checked:s}}=e;a((e=>{const a={...e};return a[t]=s?a[t]?[...a[t],l]:[l]:a[t].filter((e=>e!==l)),a}))},[j,v]=(0,n.useState)([]);return(0,n.useEffect)((()=>(()=>{let e={categoryId:x.categoryId};m(e).then((e=>{let{response:a}=e,t=[];t=g?a.slice(1):a.slice(2),v(t)})).catch((e=>{console.error("Error fetching filter data:",e)}))})()),[x]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"filter-container",children:[j.map(((e,a)=>{let{title:t,value:l}=e;return(0,u.jsx)(r.$J,{title:t,index:a,value:l,onChange:p},a)})),(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(s.Z,{expandIcon:(0,u.jsx)(i.Z,{height:10,width:10}),children:(0,u.jsx)("label",{className:"filter-title cursor-pointer",children:"Price"})}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(h,{maxValue:t,pricevalue:o,onChange:(e,a)=>{d(a)}})})]})]})})}))},87917:(e,a,t)=>{t.d(a,{c:()=>l});t(55170);var r=t(80184);function l(e){let{bannerLabel:a,bannerImage:t}=e;return(0,r.jsxs)("div",{className:"product-banner-container py-3",children:[(0,r.jsx)("div",{className:"product-banner-label-container",children:(0,r.jsx)("label",{className:"product-banner-label",children:a})}),(0,r.jsx)("img",{width:"100%",height:"375px",src:t,alt:"product-banner"})]})}},41810:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var r=t(72791),l=(t(55170),t(78687)),s=t(6598),c=t(32978),i=t(64880),n=t(35692),o=t(40759),d=t(42108),u=t(87917),m=t(10272),h=t(86411),g=t(50277),x=t(80184);const p=(0,l.$j)(null,(e=>(0,s.DE)({getFilteredProductListApi:c.Iv,getSubCategoryApi:h.Aw},e)))((e=>{let{getFilteredProductListApi:a,getSubCategoryApi:t}=e,l=(0,i.UO)();const[s,c]=(0,r.useState)({roomNameId:[],collectionNameId:[],colorNameId:[]}),[h,p]=(0,r.useState)([]),[b,j]=(0,r.useState)({}),[v,C]=(0,r.useState)({}),[f,N]=(0,r.useState)([1,1e4]),[y,I]=(0,r.useState)();(0,r.useEffect)((()=>(()=>{const{roomNameId:e,collectionNameId:t,colorNameId:r}=s;let c={page:v.page,limit:10,categoryId:[l.categoryId],subCategoryId:[l.subCategoryId],roomId:e,collectionId:t,color:r,start_price:f[0],end_price:f[1],sort:y};a(c).then((e=>{let{response:a}=e;p(a.data),C(a.pageMeta)})).catch((e=>{console.error("Error fetching filter data:",e)}))})()),[l,s,,f,y,v.page]),(0,r.useEffect)((()=>(()=>{let e={url_id:l.subCategoryId};t(e).then((e=>{j(e)})).catch((e=>{console.error("Error fetching filter data:",e)}))})()),[l]);return(0,x.jsxs)("div",{className:"product-listing-container",children:[(0,x.jsx)(u.c,{bannerLabel:b.subCategory,bannerImage:b.bannerimage}),(0,x.jsxs)("div",{className:"d-flex mt-4",children:[(0,x.jsx)(d.o,{locationLabel:"wallpaper",maximumPrice:1e4,setCheckedValues:c,pricevalue:f,setPriceValue:N}),(0,x.jsxs)("div",{className:"d-flex flex-column w-100",children:[(0,x.jsx)(o.b,{itemCount:v.total,itemLabel:"wallpaper",setSortType:I}),(0,x.jsxs)("div",{className:"card-container",children:[(0,x.jsx)("div",{className:"row",children:h.map((e=>(0,x.jsx)("div",{className:"card-container-main col-4",children:(0,x.jsx)(n.Z,{prodData:e,onClickCard:e=>(e=>{m.m.push("/home/product-details/".concat(e._id))})(e)})},e._id)))}),(0,x.jsx)(g.$R,{className:"my-5",currentPage:v.page,pageCount:v.pageCount,onChange:(e,a)=>{C((e=>({...e,page:a})))}})]})]})]})]})}))},40759:(e,a,t)=>{t.d(a,{b:()=>c});var r=t(50277),l=t(96973),s=(t(55170),t(80184));const c=e=>{let{itemCount:a,itemLabel:t,setSortType:c}=e;return(0,s.jsxs)("div",{className:"sorting-container ",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"label-item-count",children:a}),(0,s.jsx)("label",{className:"ps-1 label-item-label",children:t})]}),(0,s.jsxs)("div",{className:"d-flex align-items-center",children:[(0,s.jsx)("label",{className:"sort-by-text",children:"Sort by"}),(0,s.jsx)(r.AP,{menuItemList:l.oi,inputStyle:"sorting-menu-style",menuItemStyle:"menu-item",name:"sorting",onChange:e=>(e=>{let{target:{value:a}}=e;c(a)})(e)})]})]})}},55170:()=>{}}]);
//# sourceMappingURL=1810.f440d4b5.chunk.js.map