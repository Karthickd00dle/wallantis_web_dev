"use strict";(self.webpackChunkwallantics=self.webpackChunkwallantics||[]).push([[7045,6133],{76133:function(e,a,t){t.r(a),t.d(a,{ReactComponent:function(){return d}});var n,i,s=t(29867),l=["title","titleId"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function c(e,a){var t=e.title,c=e.titleId,d=r(e,l);return s.createElement("svg",o({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:a,"aria-labelledby":c},d),t?s.createElement("title",{id:c},t):null,n||(n=s.createElement("g",{clipPath:"url(#clip0_79_3162)"},s.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z",fill:"#4284F3"}))),i||(i=s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_79_3162"},s.createElement("rect",{width:24,height:24,fill:"white"})))))}var d=s.forwardRef(c);a.default=t.p+"static/media/visibility.e183809629bebfcb835855ea62db0cbf.svg"},87045:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});t(29867);var n=t(68703),i=t(62206),s=t(82030),l=t(33485),o=t(13435),r=t(17954),c=t(76133),d=t(93398),u=(t(63418),t(92834));function h(){return(0,u.jsx)("div",{children:(0,u.jsx)(n.y,{headers:[{label:"No"},{label:"Customer ID"},{label:"Customer Name"},{label:"Location"},{label:"Date"},{label:"Total Spent"},{label:"Action"}],children:null===d.t||void 0===d.t?void 0:d.t.map((function(e){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e.No}),(0,u.jsx)("td",{children:e.CustomerID}),(0,u.jsx)("td",{children:e.CustomerName}),(0,u.jsx)("td",{children:e.Location}),(0,u.jsx)("td",{children:e.Date}),(0,u.jsx)("td",{children:e.TotalSpent}),(0,u.jsx)("td",{className:"dropdown",children:(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(s.Z,{tag:"span","data-toggle":"dropdown",children:(0,u.jsx)("div",{children:(0,u.jsx)(r.JEI,{color:"#C5CAFF",size:"25"})})}),(0,u.jsx)(l.Z,{right:!0,children:(0,u.jsxs)(o.Z,{children:[(0,u.jsx)("img",{src:c.default,alt:"visible",color:"#4285F4",size:"25"}),(0,u.jsx)("span",{className:"dotactions",children:"view"})]})})]})})]})}))})})}},93398:function(e,a,t){t.d(a,{t:function(){return n}});var n=[{No:"1",CustomerID:"#98765",CustomerName:"John Doe",Location:"Anna Nagar, Chennai",Date:"Oct 18th, 2022",TotalSpent:"\u20b97000"},{No:"2",CustomerID:"#98765",CustomerName:"John Doe",Location:"Anna Nagar, Chennai",Date:"Oct 18th, 2022",TotalSpent:"\u20b97000"},{No:"3",CustomerID:"#98765",CustomerName:"John Doe",Location:"Anna Nagar, Chennai",Date:"Oct 18th, 2022",TotalSpent:"\u20b97000"},{No:"4",CustomerID:"#98765",CustomerName:"John Doe",Location:"Anna Nagar, Chennai",Date:"Oct 18th, 2022",TotalSpent:"\u20b97000"},{No:"5",CustomerID:"#98765",CustomerName:"John Doe",Location:"Anna Nagar, Chennai",Date:"Oct 18th, 2022",TotalSpent:"\u20b97000"},{No:"6",CustomerID:"#98765",CustomerName:"John Doe",Location:"Anna Nagar, Chennai",Date:"Oct 18th, 2022",TotalSpent:"\u20b97000"},{No:"7",CustomerID:"#98765",CustomerName:"John Doe",Location:"Anna Nagar, Chennai",Date:"Oct 18th, 2022",TotalSpent:"\u20b97000"},{No:"8",CustomerID:"#98765",CustomerName:"John Doe",Location:"Anna Nagar, Chennai",Date:"Oct 18th, 2022",TotalSpent:"\u20b97000"}]},63418:function(e,a,t){t.d(a,{t:function(){return r}});var n=t(29439),i=t(29867),s=t(57548),l=t.n(s),o=t(92834),r=function e(a){var t=a.totalPages,s=a.handlePageClick,r=a.pageNo,c=(0,i.useState)(1),d=(0,n.Z)(c,2),u=d[0],h=d[1];return(0,i.useEffect)((function(){t!==u&&t&&h(t)}),[t,u]),1===t||0===t?null:(0,o.jsx)("div",{className:"d-flex justify-content-center pagination",children:(0,o.jsx)(l(),{previousLabel:"Previous",previousClassName:"pagination-previous-page",previousLinkClassName:"pagination-previous-link",nextLabel:"Next",nextClassName:"pagination-previous-page",nextLinkClassName:"pagination-previous-link",forcePage:r,breakLabel:"...",breakClassName:"pagination-break",breakLinkClassName:"pagination-break-link",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:1,itemsPerPage:1,disabledClassName:"pagination-disable",onPageChange:s,containerClassName:e,pageClassName:"pagination-inactive-page",pageLinkClassName:"pagination-inactive-link",activeLinkClassName:"pagination-active-link",activeClassName:"pagination-active"})})};r.defaultProps={totalPages:0}},68703:function(e,a,t){t.d(a,{y:function(){return o}});var n=t(29867),i=t(41925),s=t(63418),l=t(92834);function o(e){var a=e.isLoading,t=e.children,o=e.headers,r=void 0===o?[]:o,c=(e.handleSort,e.handlePageClick),d=e.pageMetaData,u=(0,n.useMemo)((function(){return"undefined"===typeof(null===d||void 0===d?void 0:d.totalPages)?1:d.totalPages}),[d.totalPages]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.Z,{responsive:!0,className:"custom-table-wrapper",children:[(0,l.jsx)("thead",{className:"custom-table-header",children:(0,l.jsx)("tr",{children:r.map((function(e){var a=e.label;e.isSortable;return(0,l.jsx)("th",{children:(0,l.jsx)("div",{className:"d-flex align-items-center",children:(0,l.jsx)("span",{children:a})})},a)}))})}),(0,l.jsxs)("tbody",{className:"custom-table-body",children:[t,a&&(0,l.jsxs)("div",{className:"table-loader=",children:[(0,l.jsxs)("div",{className:"lds-spinner",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{})]}),(0,l.jsx)("span",{className:"text-white",children:"Loading ..."})]})]})]}),(0,l.jsx)("div",{className:"table-pagination",children:(0,l.jsx)("div",{className:"ms-auto",children:(0,l.jsx)(s.t,{totalPages:u,handlePageClick:c,pageNo:1})})})]})}o.defaultProps={isLoading:!1,handleSort:function(){return null},handlePageClick:function(){return null},pageMetaData:{}}}}]);
//# sourceMappingURL=7045.dc96fe1a.chunk.js.map