"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[9061],{62855:(e,t,a)=>{a.d(t,{a_:()=>i,al:()=>o,dP:()=>s,xu:()=>n});var r=a(56543),l=a(24618);const s=e=>(t,a,r)=>{let{apiCall:s,Toast:i}=r;return new Promise(((t,a)=>{s({...l.wk.createCart,body:e}).then((e=>{t(e)})).catch((e=>{let{message:t}=e;a(i({type:"error",message:t}))}))}))},i=()=>(e,t,a)=>{let{apiCall:r,Toast:s}=a;return new Promise(((e,t)=>{r({...l.wk.cartList}).then((t=>{e(t)}))}))},o=e=>(t,a,s)=>{let{apiCall:i,Toast:o}=s;return new Promise(((t,a)=>{(0,r.DI)(e,l.wk.deleteCart),i({...l.wk.deleteCart}).then((e=>{t(e)}))}))},n=(e,t)=>(a,s,i)=>{let{apiCall:o,Toast:n}=i;return new Promise(((a,s)=>{(0,r.DI)(e,l.wk.updateCart),o({...l.wk.updateCart,body:t}).then((e=>{a(e)}))}))}},6296:(e,t,a)=>{a.d(t,{Cw:()=>s,Z5:()=>i,bl:()=>o});var r=a(56543),l=a(24618);const s=e=>(t,a,r)=>{let{apiCall:s,Toast:i}=r;return new Promise(((t,a)=>{s({...l.YE.addToWishlist,body:e}).then((e=>{t(e)}))}))},i=()=>(e,t,a)=>{let{apiCall:r,Toast:s}=a;return new Promise(((e,t)=>{r({...l.YE.getWishList}).then((t=>{e(t)}))}))},o=e=>(t,a,s)=>{let{apiCall:i,Toast:o}=s;return new Promise(((t,a)=>{(0,r.DI)(e,l.YE.removeFromWishlist),i({...l.YE.removeFromWishlist}).then((e=>{t(e)}))}))}},15919:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(72791),l=a(56543),s=a(94454),i=a(90690),o=a(14361),n=a(83484),c=a(85947),d=a(59050),m=a(62855),h=a(78687),u=a(13462),g=a(6296),p=a(80184);const x=(0,h.$j)(null,(e=>(0,d.DE)({createCartApiCall:m.dP,addToWishlist:g.Cw,removeFromWishlist:g.bl},e)))((function(e){let{onClickCard:t,prodData:a,isHome:d,createCartApiCall:m,addToWishlist:h,removeFromWishlist:g}=e;const{title:x,images:b,price:v}=a,[j,C]=(0,r.useState)(!1),[f,y]=(0,r.useState)(!1),[I,N]=(0,r.useState)(!1);return(0,p.jsxs)("div",{className:"card-three-container",onMouseEnter:()=>{C(!0)},onMouseLeave:()=>{C(!1)},children:[(0,p.jsxs)("div",{className:"card-three-image-section",children:[j?(0,p.jsx)("div",{className:"icon-container",children:(0,p.jsxs)("div",{className:"icon-container-inner d-flex p-2",children:[(0,p.jsx)("div",{className:"icon-1",children:(0,p.jsx)(s.Z,{name:x,checked:f,onChange:e=>((e,t)=>{let{target:{checked:a}}=e;if(y((e=>!e)),t&&t._id){const e=t._id.toString();a?h({productId:e}).then((()=>(0,u.F)({type:"success",message:"Item Added To Wishlist"}))).catch((e=>{let{message:t}=e;(0,u.F)({type:"error",message:t})})):g({url_id:e}).then((()=>(0,u.F)({type:"success",message:"Item Removed from Wishlist"}))).catch((e=>{let{message:t}=e;(0,u.F)({type:"error",message:t})}))}else console.error("Invalid prodData:",t)})(e,a),icon:(0,p.jsx)(i.Z,{sx:(0,l.aV)(d,{color:"#000000"},{color:"#2A71F9"})}),checkedIcon:(0,p.jsx)(o.Z,{sx:(0,l.aV)(d,{color:"#ed1b24"},{color:"#2A71F9"})})})}),(0,p.jsx)("div",{className:"icon-2",children:(0,p.jsx)(s.Z,{name:x,checked:I,onChange:e=>((e,t)=>{let{target:{name:a,checked:r}}=e;if(N(!I),r){let e={productId:t.id.toString(),quantity:1,color:t.color};m(e).then((()=>{(0,u.F)({type:"success",message:"Item Added To Cart"})}))}else(0,u.F)({type:"info",message:"Item removed from Cart"})})(e,a),icon:(0,p.jsx)(n.Z,{sx:(0,l.aV)(d,{color:"#000000"},{color:"#2A71F9"})}),checkedIcon:(0,p.jsx)(c.Z,{sx:(0,l.aV)(d,{color:"#ed1b24"},{color:"#2A71F9"})})})})]})}):null,(0,p.jsx)("div",{onClick:()=>t(a),className:"card-image-container",children:(0,p.jsx)("img",{className:"card-image",src:`${(0,l.aV)(Array.isArray(b),b[0],b)}`,alt:x})})]}),(0,p.jsx)("div",{className:"card-three-title",children:x}),(0,p.jsx)("div",{className:"card-three-price",children:`\u20b9${v}/Roll`}),(0,p.jsx)("div",{className:"card-three-info-txt",children:"Included Tax | Free Shipping"})]})}))},63899:(e,t,a)=>{a.d(t,{o:()=>v});var r=a(45214),l=a(41473),s=a(55818),i=a(3721),o=a(73017),n=a(72791),c=a(26994),d=a(66934),m=a(80184);const h=(0,d.ZP)(c.ZP)((e=>{let{theme:t}=e;return{color:"#2A71F9",height:90,"& .MuiSlider-thumb":{height:27,width:3,backgroundColor:"currentColor",border:"1px solid currentColor",borderRadius:0,boxShadow:"none","&:active,:hover":{boxShadow:"none"},"& .airbnb-bar":{height:9,width:1,backgroundColor:"currentColor",marginLeft:1,marginRight:1,borderRadius:0}},"& .MuiSlider-valueLabel":{lineHeight:1,fontSize:12,padding:"2px 6px 2px 6px",display:"flex",alignItems:"center",justifyContent:"center",width:"auto",height:25,backgroundColor:"#2A71F9"},"& .MuiSlider-track":{borderRadius:0,height:10},"& .MuiSlider-rail":{color:"dark"===t.palette.mode?"#bfbfbf":"#d8d8d8",opacity:"dark"===t.palette.mode?void 0:1,height:10,borderRadius:0}}})),u=e=>{let{pricevalue:t,onChange:a,maxValue:r}=e;return(0,m.jsx)("div",{className:"slider-container px-3",children:(0,m.jsx)(h,{value:t,onChange:a,max:r,valueLabelDisplay:"auto",getAriaValueText:e=>`\u20b9 ${e}`,valueLabelFormat:e=>`\u20b9 ${e}`})})};var g=a(32978),p=a(59050),x=a(78687),b=a(64880);const v=(0,x.$j)(((e,t)=>({ownProps:t})),(e=>(0,p.DE)({getProductFilterApi:g.Pj},e)))((e=>{let{setCheckedValues:t,maximumPrice:a,pricevalue:c,setPriceValue:d,getProductFilterApi:h,isViewAll:g}=e;const p=(0,b.UO)(),x=(e,a)=>{let{target:{name:r,value:l,checked:s}}=e;t((e=>{const t={...e};return t[a]=s?t[a]?[...t[a],l]:[l]:t[a].filter((e=>e!==l)),t}))},[v,j]=(0,n.useState)([]);return(0,n.useEffect)((()=>(()=>{let e={categoryId:p.categoryId};h(e).then((e=>{let{response:t}=e,a=[];a=g?t.slice(1):t.slice(2),a.length>0&&a.pop(),j(a)})).catch((e=>{console.error("Error fetching filter data:",e)}))})()),[p]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"filter-container",children:[v.map(((e,t)=>{let{title:a,value:l}=e;return(0,m.jsx)(r.$J,{title:a,index:t,value:l,onChange:x},t)})),(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(s.Z,{expandIcon:(0,m.jsx)(o.Z,{height:10,width:10}),children:(0,m.jsx)("label",{className:"filter-title cursor-pointer",children:"Price"})}),(0,m.jsx)(i.Z,{children:(0,m.jsx)(u,{maxValue:a,pricevalue:c,onChange:(e,t)=>{d(t)}})})]})]})})}))},87917:(e,t,a)=>{a.d(t,{c:()=>l});a(11084);var r=a(80184);function l(e){let{bannerLabel:t,bannerImage:a}=e;return(0,r.jsxs)("div",{className:"product-banner-container py-3",children:[(0,r.jsx)("div",{className:"product-banner-label-container",children:(0,r.jsx)("label",{className:"product-banner-label",children:t})}),(0,r.jsx)("img",{width:"100%",height:"375px",src:a,alt:"product-banner"})]})}},39061:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var r=a(72791),l=(a(11084),a(78687)),s=a(59050),i=a(32978),o=a(64880),n=a(87917),c=a(15919),d=a(63899),m=a(40759),h=a(10272),u=a(86411),g=a(79433),p=a(80184);const x=(0,l.$j)(null,(e=>(0,s.DE)({getFilteredProductListApi:i.Iv,getCategoryApi:u.n3},e)))((e=>{let{getFilteredProductListApi:t,getCategoryApi:a}=e,l=(0,o.UO)();const[s,i]=(0,r.useState)({subCategoryId:[],roomNameId:[],collectionNameId:[],colorNameId:[]}),[u,x]=(0,r.useState)([]),[b,v]=(0,r.useState)(),[j,C]=(0,r.useState)({}),[f,y]=(0,r.useState)([1,1e4]),[I,N]=(0,r.useState)();(0,r.useEffect)((()=>(()=>{const{subCategoryId:e,roomNameId:a,collectionNameId:r,colorNameId:i}=s;let o={page:j.page,limit:10,categoryId:[l.categoryId],subCategoryId:e,roomId:a,collectionId:r,color:i,start_price:f[0],end_price:f[1],sort:I};t(o).then((e=>{let{response:t}=e;x(t.data),C(t.pageMeta)})).catch((e=>{console.error("Error fetching filter data:",e)}))})()),[l,s,f,I,j.page]),(0,r.useEffect)((()=>(()=>{let e={url_id:l.categoryId};a(e).then((e=>{v(e)})).catch((e=>{console.error("Error fetching filter data:",e)}))})()),[l]);return(0,p.jsxs)("div",{className:"product-listing-container",children:[(0,p.jsx)(n.c,{bannerLabel:null===b||void 0===b?void 0:b.category,bannerImage:null===b||void 0===b?void 0:b.bannerimage}),(0,p.jsxs)("div",{className:"d-flex mt-4",children:[(0,p.jsx)(d.o,{isViewAll:!0,locationLabel:"wallpaper",maximumPrice:1e4,setCheckedValues:i,pricevalue:f,setPriceValue:y}),(0,p.jsxs)("div",{className:"d-flex flex-column w-100",children:[(0,p.jsx)(m.b,{itemCount:j.total,itemLabel:"wallpaper",setSortType:N}),(0,p.jsxs)("div",{className:"card-container",children:[(0,p.jsx)("div",{className:"row",children:u.map((e=>(0,p.jsx)("div",{className:"card-container-main col-4",children:(0,p.jsx)(c.Z,{prodData:e,onClickCard:e=>(e=>{h.m.push(`/home/product-details/${e._id}`)})(e)})},e._id)))}),(0,p.jsx)(g.$,{className:"my-5",currentPage:j.page,pageCount:j.pageCount,onChange:(e,t)=>{C((e=>({...e,page:t})))}})]})]})]})]})}))},40759:(e,t,a)=>{a.d(t,{b:()=>i});var r=a(45214),l=a(96973),s=(a(11084),a(80184));const i=e=>{let{itemCount:t,itemLabel:a,setSortType:i}=e;return(0,s.jsxs)("div",{className:"sorting-container ",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"label-item-count",children:t}),(0,s.jsx)("label",{className:"ps-1 label-item-label",children:a})]}),(0,s.jsxs)("div",{className:"d-flex align-items-center",children:[(0,s.jsx)("label",{className:"sort-by-text",children:"Sort by"}),(0,s.jsx)(r.AP,{menuItemList:l.oi,inputStyle:"sorting-menu-style",menuItemStyle:"menu-item",name:"sorting",onChange:e=>(e=>{let{target:{value:t}}=e;i(t)})(e)})]})]})}},11084:()=>{}}]);
//# sourceMappingURL=9061.f3207dd9.chunk.js.map