(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[6],{111:function(e,t,n){e.exports={CheckoutSummery:"CheckoutSummery_CheckoutSummery__2J6N-"}},117:function(e,t,n){"use strict";n.r(t);var c=n(12),r=n(0),i=n(1),s=n.n(i),a=n(60),u=n(41),d=n(111),l=n.n(d),j=function(e){return Object(r.jsxs)("div",{className:l.a.CheckoutSummery,children:[Object(r.jsx)("h1",{children:"We hope it taste well!"}),Object(r.jsxs)("div",{style:{width:"100%"},children:[Object(r.jsx)(a.a,{ingredient:e.ingredients}),Object(r.jsx)(u.a,{type:"Danger",clicked:e.cancelHandler,children:"CANCEL"}),Object(r.jsx)(u.a,{type:"Success",clicked:e.continueHandler,children:"CONTINUE"})]})]})},o=n(11),b=n(14),h=n(30),O=s.a.lazy((function(){return n.e(4).then(n.bind(null,115))}));t.default=Object(b.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))((function(e){var t=Object(r.jsx)(o.a,{to:"/"});if(e.ingredients){var n=e.purchased?Object(r.jsx)(o.a,{to:"/ordersubmited"}):null;t=Object(r.jsxs)(s.a.Fragment,{children:[n,Object(r.jsx)(j,{ingredients:e.ingredients,cancelHandler:function(){e.history.goBack()},continueHandler:function(){e.history.replace("/checkout/contact-data")}}),Object(r.jsx)(o.b,{path:e.match.path+"/contact-data",render:function(){return Object(r.jsx)(i.Suspense,{fallback:Object(r.jsx)(h.a,Object(c.a)({},e)),children:Object(r.jsx)(O,{})})}})]})}return t}))}}]);
//# sourceMappingURL=6.8aa7d12e.chunk.js.map