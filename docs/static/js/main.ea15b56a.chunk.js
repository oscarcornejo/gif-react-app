(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(17),i=n.n(r),s=(n(25),n(3)),u=(n(26),n(20)),o=n(0),d=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(u.a)(t))})),i(""))},children:[Object(o.jsx)("h2",{children:r}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(t){return function(t){i(t.target.value)}(t)}})]})},j=n(5),l=n(8),f=n.n(l),b=n(18),p=n(19),O=n.n(p).a.create({baseURL:"https://api.giphy.com/v1/gifs",params:{api_key:"Ii4G7TeTlLIx8f8fLOK8HKMdwflwMbUK"}}),h=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,a,c,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/search?q=".concat(encodeURI(e),"&limit=20"),t.next=3,O.get(n);case 3:return a=t.sent,c=a.data.data,r=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("p",{children:e})]})},g=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){h(t).then((function(t){r({data:t,loading:!1})})).catch((function(t){console.log(t),r(Object(j.a)(Object(j.a)({},c),{},{loading:!1}))}))}),[t,c]),c}(e),c=n.loading,r=n.data;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),c&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:'"Cargando..."'}),Object(o.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(o.jsx)(m,Object(j.a)({},t),t.id)}))})]})};var x=function(){var t=Object(a.useState)(["Honda"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Gif Expert App"}),Object(o.jsx)(d,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ul",{children:n.map((function(t){return Object(o.jsx)(g,{category:t},t)}))})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),v()}},[[47,1,2]]]);
//# sourceMappingURL=main.ea15b56a.chunk.js.map