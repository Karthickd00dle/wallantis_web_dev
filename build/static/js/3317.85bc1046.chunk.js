"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[3317],{62855:(e,r,t)=>{t.d(r,{a_:()=>s,al:()=>n,eu:()=>i,xu:()=>c});var a=t(56543),l=t(24618);const i=e=>(r,t,a)=>{let{apiCall:i,Toast:s}=a;return new Promise(((r,t)=>{i({...l.wk.createCart,body:e}).then((e=>{r(e)})).catch((e=>{let{message:r}=e;t(s({type:"error",message:r}))}))}))},s=()=>(e,r,t)=>{let{apiCall:a,Toast:i}=t;return new Promise(((e,r)=>{a({...l.wk.cartList}).then((r=>{e(r)}))}))},n=e=>(r,t,i)=>{let{apiCall:s,Toast:n}=i;return new Promise(((r,t)=>{(0,a.DI)(e,l.wk.deleteCart),s({...l.wk.deleteCart}).then((e=>{r(e)}))}))},c=(e,r)=>(t,i,s)=>{let{apiCall:n,Toast:c}=s;return new Promise(((t,i)=>{(0,a.DI)(e,l.wk.updateCart),n({...l.wk.updateCart,body:r}).then((e=>{t(e)}))}))}},96133:(e,r,t)=>{t.d(r,{e:()=>a});t(45651);const a=(e,r)=>{switch(e){case 1:case 2:return;case 3:return r.sort(((e,r)=>r.price-e.price)).slice(0);case 4:return r.sort(((e,r)=>e.price-r.price)).slice(0);default:return null}}},35692:(e,r,t)=>{t.d(r,{Z:()=>h});var a=t(72791),l=t(56543),i=t(94454),s=t(90690),n=t(14361),c=t(83484),o=t(85947),d=t(6598),u=t(62855),m=t(78687),p=t(45651),g=t(80184);const h=(0,m.$j)(null,(e=>(0,d.DE)({createCartApiCall:u.eu},e)))((function(e){let{onClickCard:r,prodData:t,isHome:d,createCartApiCall:u}=e;console.log(t,"prod data");const{title:m,images:h,price:f}=t,[x,y]=(0,a.useState)(!1),[b,v]=(0,a.useState)(!1),[j,C]=(0,a.useState)(!1);return(0,g.jsxs)("div",{className:"card-three-container",onMouseEnter:()=>{y(!0)},onMouseLeave:()=>{y(!1)},children:[(0,g.jsxs)("div",{className:"card-three-image-section",children:[x?(0,g.jsx)("div",{className:"icon-container",children:(0,g.jsxs)("div",{className:"icon-container-inner d-flex p-2",children:[(0,g.jsx)("div",{className:"icon-1",children:(0,g.jsx)(i.Z,{name:m,checked:b,onChange:e=>((e,r)=>{let{target:{name:t,checked:a}}=e;v(!b),a?(0,p.F)({type:"success",message:"Item added to Wishlist"}):(0,p.F)({type:"info",message:"Item removed from Wishlist"})})(e),icon:(0,g.jsx)(s.Z,{sx:(0,l.aV)(d,{color:"#000000"},{color:"#2A71F9"})}),checkedIcon:(0,g.jsx)(n.Z,{sx:(0,l.aV)(d,{color:"#ed1b24"},{color:"#2A71F9"})})})}),(0,g.jsx)("div",{className:"icon-2",children:(0,g.jsx)(i.Z,{name:m,checked:j,onChange:e=>((e,r)=>{let{target:{name:t,checked:a}}=e;if(C(!j),a){let e={productId:r.id.toString(),quantity:1,color:r.color};u(e).then((()=>{(0,p.F)({type:"success",message:"Item Added To Cart"})}))}else(0,p.F)({type:"info",message:"Item removed from Cart"})})(e,t),icon:(0,g.jsx)(c.Z,{sx:(0,l.aV)(d,{color:"#000000"},{color:"#2A71F9"})}),checkedIcon:(0,g.jsx)(o.Z,{sx:(0,l.aV)(d,{color:"#ed1b24"},{color:"#2A71F9"})})})})]})}):null,(0,g.jsx)("div",{onClick:()=>r(t),className:"card-image-container",children:(0,g.jsx)("img",{className:"card-image",src:"".concat((0,l.aV)(Array.isArray(h),h[0],h)),alt:m})})]}),(0,g.jsx)("div",{className:"card-three-title",children:m}),(0,g.jsx)("div",{className:"card-three-price",children:"\u20b9".concat(f,"/Roll")}),(0,g.jsx)("div",{className:"card-three-info-txt",children:"Included Tax | Free Shipping"})]})}))},42108:(e,r,t)=>{t.d(r,{o:()=>f});var a=t(96933),l=t(41473),i=t(55818),s=t(3721),n=t(73017),c=t(72791),o=t(20431),d=t(66934),u=t(80184);const m=(0,d.ZP)(o.ZP)((e=>{let{theme:r}=e;return{color:"#2A71F9",height:90,"& .MuiSlider-thumb":{height:27,width:3,backgroundColor:"currentColor",border:"1px solid currentColor",borderRadius:0,boxShadow:"none","&:active,:hover":{boxShadow:"none"},"& .airbnb-bar":{height:9,width:1,backgroundColor:"currentColor",marginLeft:1,marginRight:1,borderRadius:0}},"& .MuiSlider-valueLabel":{lineHeight:1,fontSize:12,padding:"2px 6px 2px 6px",display:"flex",alignItems:"center",justifyContent:"center",width:"auto",height:25,backgroundColor:"#2A71F9"},"& .MuiSlider-track":{borderRadius:0,height:10},"& .MuiSlider-rail":{color:"dark"===r.palette.mode?"#bfbfbf":"#d8d8d8",opacity:"dark"===r.palette.mode?void 0:1,height:10,borderRadius:0}}})),p=e=>{let{pricevalue:r,onChange:t,maxValue:a}=e;return(0,u.jsx)("div",{className:"slider-container px-3",children:(0,u.jsx)(m,{value:r,onChange:t,max:a,valueLabelDisplay:"auto",getAriaValueText:e=>"\u20b9 ".concat(e),valueLabelFormat:e=>"\u20b9 ".concat(e)})})};var g=t(32978),h=t(6598);const f=(0,t(78687).$j)(((e,r)=>({ownProps:r})),(e=>(0,h.DE)({getProductFilterApi:g.Pj},e)))((e=>{let{setCheckedValues:r,maximumPrice:t,pricevalue:o,setPriceValue:d,getProductFilterApi:m}=e;const g=(e,t)=>{let{target:{name:a,value:l,checked:i}}=e;r((e=>{const r={...e};return r[t]=i?r[t]?[...r[t],l]:[l]:r[t].filter((e=>e!==l)),r}))},[h,f]=(0,c.useState)([]);return(0,c.useEffect)((()=>{m().then((e=>{let{response:r}=e;f(r)})).catch((e=>{console.error("Error fetching filter data:",e)}))}),[]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"filter-container",children:[h.map(((e,r)=>{let{title:t,value:l}=e;return(0,u.jsx)(a.$J,{title:t,index:r,value:l,onChange:g},r)})),(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(i.Z,{expandIcon:(0,u.jsx)(n.Z,{height:10,width:10}),children:(0,u.jsx)("label",{className:"filter-title cursor-pointer",children:"Price"})}),(0,u.jsx)(s.Z,{children:(0,u.jsx)(p,{maxValue:t,pricevalue:o,onChange:(e,r)=>{d(r)}})})]})]})})}))},87917:(e,r,t)=>{t.d(r,{c:()=>i});var a=t(96973),l=(t(55170),t(80184));function i(e){var r;let{bannerLabel:t}=e;const i=a.OX.filter((e=>e.type===t));return(0,l.jsxs)("div",{className:"product-banner-container py-3",children:[(0,l.jsx)("div",{className:"product-banner-label-container",children:(0,l.jsx)("label",{className:"product-banner-label",children:t})}),(0,l.jsx)("img",{width:"100%",height:"505px",src:null===(r=i[0])||void 0===r?void 0:r.image,alt:"product-banner"})]})}},40759:(e,r,t)=>{t.d(r,{b:()=>n});var a=t(96133),l=t(96933),i=t(96973),s=(t(55170),t(80184));const n=e=>{let{itemCount:r,itemLabel:t,itemData:n}=e;return(0,s.jsxs)("div",{className:"sorting-container ",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"label-item-count",children:r}),(0,s.jsx)("label",{className:"ps-1 label-item-label",children:t})]}),(0,s.jsxs)("div",{className:"d-flex align-items-center",children:[(0,s.jsx)("label",{className:"sort-by-text",children:"Sort by"}),(0,s.jsx)(l.AP,{menuItemList:i.oi,inputStyle:"sorting-menu-style",menuItemStyle:"menu-item",name:"sorting",onChange:e=>(e=>{let{target:{value:r}}=e;(0,a.e)(r,n)})(e)})]})]})}},3317:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h});var a=t(35692),l=t(64880),i=t(72791),s=t(10272),n=(t(55170),t(78687)),c=t(62812),o=t(6598),d=t(96133),u=t(87917),m=t(42108),p=t(40759),g=t(80184);const h=(0,n.$j)(((e,r)=>({ownProps:r,cartItemData:e.commonStore.cartItemState,productListingData:e.commonStore.productListingState})),(e=>(0,o.DE)({sortingFunctioncall:d.e},e)))((e=>{var r,t;let{cartItemData:o,productListingData:d}=e;const h=(0,n.I0)(),f=(0,l.TH)().pathname.split("/").slice(-1)[0].replace(/-/g," "),x=Math.max(...null===d||void 0===d?void 0:d.map((e=>{let{price:r}=e;return r}))),[y,b]=(0,i.useState)([]),[v,j]=(0,i.useState)(o),[C,w]=(0,i.useState)([]),[k,N]=(0,i.useState)([0,x]),[S,D]=(0,i.useState)(d),F=e=>{h({type:c.B.productDetail,payload:e}),s.m.push("/home/product-details")};return(0,i.useEffect)((()=>{(()=>{switch(f){case"wallpaper":return D(d.filter((e=>"Wallpaper"===e.category&&"wallpaper"===e.type)));case"sticker wallpaper":return D(d.filter((e=>"Sticker Wallpaper"===e.category&&"wallpaper"===e.type)));case"wall murals":return D(d.filter((e=>"Wall Murals"===e.category&&"wallpaper"===e.type)));case"all wallpaper":return D(d.filter((e=>"wallpaper"===e.type)));case"wooden flooring":return D(d.filter((e=>"Wooden Flooring"===e.category&&"flooring"===e.type)));case"lvp plank":return D(d.filter((e=>"LVP Plank"===e.category&&"flooring"===e.type)));case"all flooring":return D(d.filter((e=>"flooring"===e.type)));case"vertical blinds":return D(d.filter((e=>"Vertical Blinds"===e.category&&"blinds"===e.type)));case"roller blinds":return D(d.filter((e=>"Roller Blinds"===e.category&&"blinds"===e.type)));case"zebra blinds":return D(d.filter((e=>"Zebra Blinds"===e.category&&"blinds"===e.type)));case"chick blinds":return D(d.filter((e=>"Chick Blinds"===e.category&&"blinds"===e.type)));case"wooden blinds":return D(d.filter((e=>"Wooden Blinds"===e.category&&"blinds"===e.type)));case"customized blinds":return D(d.filter((e=>"Customized Blinds"===e.category&&"blinds"===e.type)));case"all blinds":return D(d.filter((e=>"blinds"===e.type)));case"vertical gardens":return D(d.filter((e=>"Vertical Gardens"===e.category&&"artificial grass"===e.type)));case"hanging flowers":return D(d.filter((e=>"Hanging Flowers"===e.category&&"artificial grass"===e.type)));case"artificial grass":return D(d.filter((e=>"Artificial Grass"===e.category&&"artificial grass"===e.type)));case"all artificial grass":return D(d.filter((e=>"artificial grass"===e.type)));case"gym tiles square":return D(d.filter((e=>"GYM Tiles Square"===e.category&&"gym flooring"===e.type)));case"gym tiles interlock":return D(d.filter((e=>"GYM Tiles Interlock"===e.category&&"gym flooring"===e.type)));case"gym tiles hexagonal":return D(d.filter((e=>"GYM Tiles Hexagonal"===e.category&&"gym flooring"===e.type)));case"gym rolls":return D(d.filter((e=>"GYM Rolls"===e.category&&"gym flooring"===e.type)));case"sports flooring":return D(d.filter((e=>"Sports Flooring"===e.category&&"gym flooring"===e.type)));case"yoga mat":return D(d.filter((e=>"Yoga Mat"===e.category&&"gym flooring"===e.type)));case"all gym flooring":return D(d.filter((e=>"gym flooring"===e.type)));default:;}})()}),[f]),(0,g.jsxs)("div",{className:"product-listing-container",children:[(0,g.jsx)(u.c,{bannerLabel:f}),(0,g.jsxs)("div",{className:"d-flex mt-4",children:[(0,g.jsx)(m.o,{locationLabel:f,maximumPrice:x,checkedValues:y,setCheckedValues:b,pricevalue:k,setPriceValue:N}),(0,g.jsxs)("div",{className:"d-flex flex-column w-100",children:[(0,g.jsx)(p.b,{itemCount:(null===S||void 0===S?void 0:S.length)+1,itemLabel:f,itemData:S}),(0,g.jsx)("div",{className:"card-container",children:(0,g.jsx)("div",{className:"row",children:0===y.length?null===(r=S.filter((e=>{let{price:r}=e;return r>=k[0]&&r<=k[1]})))||void 0===r?void 0:r.map((e=>(0,g.jsx)("div",{className:"card-container-main col-4",children:(0,g.jsx)(a.Z,{cartData:v,favData:C,setCartData:j,setFavData:w,onClickCard:e=>F(e),prodData:e})},e.id))):null===(t=S.filter((e=>{let{price:r}=e;return r>=k[0]&&r<=k[1]})).filter((e=>y.some((r=>r===e.category||r===e.sub_category)))))||void 0===t?void 0:t.map((e=>(0,g.jsx)("div",{className:"col-4",children:(0,g.jsx)(a.Z,{onClickCard:e=>F(e),prodData:e})},e.id)))})})]})]})]})}))},55170:()=>{}}]);
//# sourceMappingURL=3317.85bc1046.chunk.js.map