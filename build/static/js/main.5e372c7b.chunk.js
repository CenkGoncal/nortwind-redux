(this["webpackJsonpnortwind-redux"]=this["webpackJsonpnortwind-redux"]||[]).push([[0],{105:function(t,e,r){"use strict";r.r(e);var c=r(1),n=r.n(c),a=r(23),i=r.n(a),o=r(8),s=r(120),d=r(68),j=r(111),u=r(112),h=r(113),l=r(114),b=r(115),O=r(106),p=r(107),x=r(116),f=r(16),y=r(17),v=r(20),g=r(19),m=r(18),C=r(27),k=r(63),S=r(3),R=function(t){Object(v.a)(r,t);var e=Object(g.a)(r);function r(){return Object(f.a)(this,r),e.apply(this,arguments)}return Object(y.a)(r,[{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{hidden:this.props.isShow,color:"info",size:"sm",children:Object(S.jsx)(C.b,{to:"/",children:"  Geri "})})})}}]),r}(c.Component);var E=Object(m.b)((function(t){return{isShow:t.changeBackBtRedurcer}}))(R),N=r(29),w=r.n(N),P=r(121),T=r(122),B=r(123),A=r(108),D=r(109),_=r(110),F=r(124),I=r(12),G="CHANGE_CATEGORY",q="GET_CATEGORIES_SUCCESS",L="GET_PRODUCTS_SUCCESS",U="ADD_TO_CARD",M="REMOVE_FORM_CARD",z="SHOW_HIDE_BACKBT";function H(t){return{type:U,payload:t}}function J(t){return{type:M,payload:t}}var X=function(t){Object(v.a)(r,t);var e=Object(g.a)(r);function r(){var t;Object(f.a)(this,r);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).removeCard=function(e){t.props.actions.removeFromCard(e),w.a.error(e.productName+" sepetden silindi")},t}return Object(y.a)(r,[{key:"renderEmpty",value:function(){return Object(S.jsx)(O.a,{children:Object(S.jsx)(p.a,{children:"Sepetiniz Bo\u015f"})})}},{key:"renderSummary",value:function(){var t=this;return Object(S.jsxs)(P.a,{nav:!0,inNavbar:!0,children:[Object(S.jsxs)(T.a,{nav:!0,caret:!0,children:[this.props.cart.length,"' \xfcr\xfcn Ekli"]}),Object(S.jsxs)(B.a,{right:!0,children:[this.props.cart.map((function(e){return Object(S.jsx)(A.a,{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(_.a,{xs:"2",children:Object(S.jsx)(k.a,{color:"danger",size:"sm",onClick:function(r){return t.removeCard(e.product)},children:"X"})}),Object(S.jsx)(_.a,{xs:"10",children:Object(S.jsxs)(F.a,{color:"primary",children:[e.product.productName," ",e.quantity]})})]})},e.product.id)})),Object(S.jsx)(A.a,{divider:!0}),Object(S.jsx)(A.a,{children:Object(S.jsx)(C.b,{to:"/Card",children:" Sepete Git "})})]})]})}},{key:"render",value:function(){return Object(S.jsx)("div",{children:this.props.cart.length>0?this.renderSummary():this.renderEmpty()})}}]),r}(c.Component);var K=Object(m.b)((function(t){return{cart:t.cartReducer}}),(function(t){return{actions:{removeFromCard:Object(I.b)(J,t)}}}))(X),Q=function(t){var e=Object(c.useState)(!1),r=Object(d.a)(e,2),n=r[0],a=r[1];return Object(S.jsx)("div",{children:Object(S.jsxs)(j.a,{color:"light",light:!0,expand:"md",children:[Object(S.jsx)(u.a,{href:"/",children:"reactstrap"}),Object(S.jsx)(h.a,{onClick:function(){return a(!n)}}),Object(S.jsxs)(l.a,{isOpen:n,navbar:!0,children:[Object(S.jsxs)(b.a,{className:"mr-auto",navbar:!0,children:[Object(S.jsx)(O.a,{children:Object(S.jsx)(p.a,{href:"/components/",children:"Components"})}),Object(S.jsx)(O.a,{children:Object(S.jsx)(p.a,{href:"https://github.com/reactstrap/reactstrap",children:"GitHub"})}),Object(S.jsx)(K,{})]}),Object(S.jsx)(x.a,{children:Object(S.jsx)(E,{})})]})]})})},V=r(117),W=r(118);function Y(t){return{type:G,payload:t}}function Z(){return function(t){return fetch("http://localhost:3000/categories").then((function(t){return t.json()})).then((function(e){return t({type:q,payload:e})}))}}function $(t){return function(e){var r="http://localhost:3000/products";return t&&(r=r+"?categoryId="+t),fetch(r).then((function(t){return t.json()})).then((function(t){return e({type:L,payload:t})}))}}var tt=function(t){Object(v.a)(r,t);var e=Object(g.a)(r);function r(){var t;Object(f.a)(this,r);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).selectCategory=function(e){t.props.actions.changeCategory(e),t.props.actions.getProducts(e.id)},t}return Object(y.a)(r,[{key:"componentDidMount",value:function(){this.props.actions.getCategories()}},{key:"render",value:function(){var t=this;return Object(S.jsxs)("div",{children:[Object(S.jsx)(F.a,{color:"warning",children:"Categories"}),Object(S.jsx)(V.a,{children:this.props.categories.map((function(e){return Object(S.jsx)(W.a,{active:t.props.currentCategory.categoryName===e.categoryName,onClick:function(){return t.selectCategory(e)},children:e.categoryName},e.id)}))})]})}}]),r}(c.Component);var et=Object(m.b)((function(t){return{currentCategory:t.changeCategoryReducer,categories:t.categoryListReducer}}),(function(t){return{actions:{getCategories:Object(I.b)(Z,t),changeCategory:Object(I.b)(Y,t),getProducts:Object(I.b)($,t)}}}))(tt),rt=r(119),ct=function(t){Object(v.a)(r,t);var e=Object(g.a)(r);function r(){var t;Object(f.a)(this,r);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).addToCard=function(e){t.props.actions.addToCard({quantity:1,product:e}),w.a.success(e.productName+" sepete eklendi")},t}return Object(y.a)(r,[{key:"componentDidMount",value:function(){this.props.actions.getProducts()}},{key:"render",value:function(){var t=this;return Object(S.jsxs)("div",{children:[Object(S.jsx)(F.a,{color:"warning",children:this.props.currentCategory.categoryName}),Object(S.jsxs)(rt.a,{responsive:!0,children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:"categoryId"}),Object(S.jsx)("th",{children:"productName"}),Object(S.jsx)("th",{children:"quantityPerUnit"}),Object(S.jsx)("th",{children:"unitPrice"}),Object(S.jsx)("th",{children:"unitsInStock"}),Object(S.jsx)("th",{})]})}),Object(S.jsx)("tbody",{children:this.props.products.map((function(e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"row",children:e.id}),Object(S.jsx)("td",{children:e.categoryId}),Object(S.jsx)("td",{children:e.productName}),Object(S.jsx)("td",{children:e.quantityPerUnit}),Object(S.jsx)("td",{children:e.unitPrice}),Object(S.jsx)("td",{children:e.unitsInStock}),Object(S.jsx)("td",{children:Object(S.jsx)(k.a,{color:"success",size:"sm",onClick:function(r){return t.addToCard(e)},children:"+"})})]},e.id)}))})]})]})}}]),r}(c.Component);var nt=Object(m.b)((function(t){return{currentCategory:t.changeCategoryReducer,products:t.productListReducer}}),(function(t){return{actions:{getProducts:Object(I.b)($,t),addToCard:Object(I.b)(H,t)}}}))(ct),at=function(t){Object(v.a)(r,t);var e=Object(g.a)(r);function r(){return Object(f.a)(this,r),e.apply(this,arguments)}return Object(y.a)(r,[{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(_.a,{sm:"3",children:Object(S.jsx)(et,{})}),Object(S.jsx)(_.a,{sm:"9",children:Object(S.jsx)(nt,{})})]})})}}]),r}(c.Component),it=function(t){Object(v.a)(r,t);var e=Object(g.a)(r);function r(){var t;Object(f.a)(this,r);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).OnDeleteCart=function(e){t.props.actions.removeFromCard(e),w.a.error(e.productName+" sepetden silindi")},t}return Object(y.a)(r,[{key:"render",value:function(){var t=this;return Object(S.jsx)("div",{children:Object(S.jsxs)(rt.a,{children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:"Product Name"}),Object(S.jsx)("th",{children:"Unit Price"}),Object(S.jsx)("th",{children:"Quantity"}),Object(S.jsx)("th",{})]})}),Object(S.jsx)("tbody",{children:this.props.cart.map((function(e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"row",children:e.product.productName}),Object(S.jsx)("td",{children:e.product.unitPrice}),Object(S.jsx)("td",{children:e.quantity}),Object(S.jsx)("td",{children:Object(S.jsx)(k.a,{color:"danger",onClick:function(){return t.OnDeleteCart(e.product)},children:"X"})})]},e.product.id)}))})]})})}}]),r}(c.Component);var ot=Object(m.b)((function(t){return{cart:t.cartReducer}}),(function(t){return{actions:{removeFromCard:Object(I.b)(J,t)}}}))(it);var st=function(){return Object(S.jsxs)(s.a,{children:[Object(S.jsx)(Q,{}),Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{path:"/",exact:!0,component:at}),",",Object(S.jsx)(o.a,{path:"/product",exact:!0,component:at}),Object(S.jsx)(o.a,{path:"/cart",exact:!0,component:ot})]})]})},dt=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,125)).then((function(e){var r=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),c(t),n(t),a(t),i(t)}))},jt=(r(103),{currentCategory:{categoryName:"Beverages"},categories:[],products:[],cart:[],backBtState:!0});var ut=r(34),ht=r(69);var lt=Object(I.c)({changeCategoryReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt.currentCategory,e=arguments.length>1?arguments[1]:void 0;return e.type===G?e.payload:t},categoryListReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt.categories,e=arguments.length>1?arguments[1]:void 0;return e.type===q?e.payload:t},productListReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt.products,e=arguments.length>1?arguments[1]:void 0;return e.type===L?e.payload:t},cartReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt.cart,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U:var r=t.find((function(t){return t.product.id===e.payload.product.id}));if(r){var c=t.map((function(t){return t.product.id===e.payload.product.id?Object.assign({},r,{quantity:r.quantity+1}):t}));return console.log("Ekli olan say\u0131s\u0131 art\u0131rdl\u0131"),c}return console.log("eklendi"),[].concat(Object(ht.a)(t),[Object(ut.a)({},e.payload)]);case M:var n=t.filter((function(t){return t.product.id!==e.payload.id}));return n;default:return t}},changeBackBtRedurcer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt.backBtState,e=arguments.length>1?arguments[1]:void 0;return e.type===z?e.payload:t}}),bt=lt,Ot=r(67);r(104);i.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(C.a,{children:Object(S.jsx)(m.a,{store:Object(I.d)(bt,Object(I.a)(Ot.a)),children:Object(S.jsx)(st,{})})})}),document.getElementById("root")),dt()}},[[105,1,2]]]);
//# sourceMappingURL=main.5e372c7b.chunk.js.map