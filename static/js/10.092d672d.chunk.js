(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[10],{494:function(e,t,s){e.exports={tableRow:"ClientList_tableRow__qGTwm"}},511:function(e,t,s){"use strict";s.r(t);var c=s(77),n=s(276),i=s(105),a=s(17),l=s(0),r=s.n(l),o=s(35),d=s(40),j=s(70),u=s(64),b=s(279),m=s(514),x=s(208),O=s(116),h=s(508),p=s(507),v=s(13),f=s(510),C=s(3),N=function(e){return Object(C.jsx)(f.a,Object(v.a)(Object(v.a)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))},y=function(e){var t=e.name,s=e.suffix,c=e.subTitle,n=e.id,i=e.type,a=e.src,l=e.icon,r=e.size,o=e.shape,d=e.gap,j=e.text,u=e.onNameClick;return Object(C.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[N({icon:l,src:a,type:i,size:r,shape:o,gap:d,text:j}),Object(C.jsxs)("div",{className:"ml-2",children:[Object(C.jsxs)("div",{children:[u?Object(C.jsx)("div",{onClick:function(){return u({name:t,subTitle:c,src:a,id:n})},className:"avatar-status-name clickable",children:t}):Object(C.jsx)("div",{className:"avatar-status-name",children:t}),Object(C.jsx)("span",{children:s})]}),Object(C.jsx)("div",{className:"text-muted avatar-status-subtitle",children:c})]})]})},w=s(85),g=s(86),k=s(107),P=s(106),D=s(468),S=s(475),I=s(473),L=s(513),T=s(477),z=s(459),V=s(493),R=function(e){Object(k.a)(s,e);var t=Object(P.a)(s);function s(){return Object(w.a)(this,s),t.apply(this,arguments)}return Object(g.a)(s,[{key:"render",value:function(){var e=this.props,t=e.data,s=e.visible,c=e.close;return Object(C.jsxs)(z.a,{width:300,placement:"right",onClose:c,closable:!1,visible:s,children:[Object(C.jsxs)("div",{className:"text-center mt-3",children:[Object(C.jsx)(f.a,{size:80,src:null===t||void 0===t?void 0:t.img}),Object(C.jsx)("h3",{className:"mt-2 mb-0",children:null===t||void 0===t?void 0:t.name}),Object(C.jsx)("span",{className:"text-muted",children:null===t||void 0===t?void 0:t.username})]}),Object(C.jsx)(V.a,{dashed:!0}),Object(C.jsxs)("div",{className:"",children:[Object(C.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"Account details"}),Object(C.jsxs)("p",{children:[Object(C.jsx)(D.a,{}),Object(C.jsxs)("span",{className:"ml-3 text-dark",children:["id: ",null===t||void 0===t?void 0:t.id]})]})]}),Object(C.jsxs)("div",{className:"mt-5",children:[Object(C.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"CONTACT"}),Object(C.jsxs)("p",{children:[Object(C.jsx)(S.a,{}),Object(C.jsx)("span",{className:"ml-3 text-dark",children:null===t||void 0===t?void 0:t.phone})]}),Object(C.jsxs)("p",{children:[Object(C.jsx)(I.a,{}),Object(C.jsx)("span",{className:"ml-3 text-dark",children:(null===t||void 0===t?void 0:t.email)?null===t||void 0===t?void 0:t.email:"-"})]}),Object(C.jsxs)("p",{children:[Object(C.jsx)(L.a,{}),Object(C.jsx)("span",{className:"ml-3 text-dark",children:(null===t||void 0===t?void 0:t.address)?"".concat(null===t||void 0===t?void 0:t.address.city,", ").concat(null===t||void 0===t?void 0:t.address.street,", ").concat(null===t||void 0===t?void 0:t.address.suite):"-"})]})]}),Object(C.jsxs)("div",{className:"mt-5",children:[Object(C.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"Social profiles"}),Object(C.jsxs)("p",{children:[Object(C.jsx)(T.a,{}),Object(C.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:(null===t||void 0===t?void 0:t.website)?null===t||void 0===t?void 0:t.website:"-"})]})]})]})}}]),s}(l.PureComponent),U=s(494),_=s.n(U),A=r.a.memo((function(e){var t=e.clients,s=e.viewState,c=e.deleteClient,n=e.showClientProfile,i=e.closeClientProfile,a=e.history,l=e.currentUrl,r=s.clientProfileVisible,o=s.selectedClient,d=[{title:"Client",dataIndex:"name",render:function(e,t){return Object(C.jsx)("div",{className:"d-flex",children:Object(C.jsx)(y,{src:t.img,name:t.name,subTitle:t.email})})},sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}}},{title:"User name",dataIndex:"username"},{title:"City",dataIndex:["address","city"]},{title:"Company",dataIndex:["company","name"],sorter:{compare:function(e,t){return e.company.name<t.company.name?-1:e.company.name>t.company.name?1:0}}},{title:"Website",dataIndex:"website"},{title:"",dataIndex:"actions",render:function(e,t){return Object(C.jsxs)("div",{className:"text-right",children:[Object(C.jsx)(x.a,{title:"View",children:Object(C.jsx)(O.a,{type:"primary",className:"mr-2",icon:Object(C.jsx)(b.a,{}),onClick:function(e){e.stopPropagation(),n(t)},size:"small"})}),Object(C.jsx)(x.a,{title:"Delete",children:Object(C.jsx)(O.a,{danger:!0,icon:Object(C.jsx)(m.a,{}),onClick:function(e){e.stopPropagation(),c(t.id)},size:"small"})})]})}}];return Object(C.jsxs)(h.a,{bodyStyle:{padding:"0px"},children:[Object(C.jsx)(p.a,{columns:d,dataSource:t,rowKey:"id",onRow:function(e){return{onClick:function(){a.push("".concat(l,"/").concat(e.id))}}},rowClassName:_.a.tableRow}),Object(C.jsx)(R,{data:o,visible:r,close:function(){i()}})]})}));t.default=Object(j.c)(r.a.memo,Object(o.b)((function(e){return{isLoading:e.app.isLoading,clientsData:e.app.clientsData}}),{getClientsData:u.a}),d.h)((function(e){var t=e.clientsData;Object(l.useEffect)((function(){null===t&&e.getClientsData()}),[e,t]);var s=Object(l.useState)({clients:t}),r=Object(c.a)(s,2),o=r[0],d=r[1];Object(l.useEffect)((function(){d((function(e){return e.clients?o:{clients:t}}))}),[o,t]);var j=Object(l.useState)({clientProfileVisible:!1,selectedClient:null}),u=Object(c.a)(j,2),b=u[0],m=u[1];return Object(C.jsx)(C.Fragment,{children:e.isLoading?Object(C.jsx)(i.a,{cover:"content"}):Object(C.jsx)(A,{clients:o.clients,viewState:b,deleteClient:function(e){d({clients:o.clients.filter((function(t){return t.id!==e}))}),n.b.success({content:"Deleted client ".concat(e),duration:2})},showClientProfile:function(e){m({clientProfileVisible:!0,selectedClient:e})},closeClientProfile:function(){m({clientProfileVisible:!1,selectedClient:null})},history:e.history,currentUrl:"".concat(a.c,"/commons/clients/list/edit")})})}))}}]);
//# sourceMappingURL=10.092d672d.chunk.js.map