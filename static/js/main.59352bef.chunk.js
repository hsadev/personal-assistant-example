(this["webpackJsonppersonal-assistant"]=this["webpackJsonppersonal-assistant"]||[]).push([[0],{32:function(n,t,e){n.exports=e(44)},44:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(22),c=e.n(a),u=e(2),i=e(1),f=e(11),l=e(9),s=e(13),h=e(6),d=e(20),m=e(29),b=e(23),p=e.n(b),g=o.a.createContext(),y=function(n,t){var e=t.action,r=t.payload;switch(e){case"ADD_TODO":return[].concat(Object(m.a)(n),[{id:p()(),text:r}]);case"DELETE_TODO":return n.filter((function(n){return n.id!==r}));case"CLEAR_ALL_TODOS":return[];case"EDIT_TODO":return n.map((function(n){var t=n.id,e=Object(s.a)(n,["id"]);return t===r.id?Object(d.a)({},r,{},e):Object(d.a)({id:t},e)}));default:return n}},v=function(n){var t=n.children,e=Object(r.useReducer)(y,null,(function(){return JSON.parse(localStorage.getItem("todos"))||[]})),a=Object(h.a)(e,2),c=a[0],u=a[1];return Object(r.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]),o.a.createElement(g.Provider,{value:{state:c,dispatch:u}},t)};function x(){var n=Object(u.a)(["\n  text-align: center;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 20px;\n  color: ",";\n"]);return x=function(){return n},n}function O(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n"]);return O=function(){return n},n}function w(){var n=Object(u.a)(["\n  list-style: none;\n  flex: 1;\n"]);return w=function(){return n},n}function E(){var n=Object(u.a)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 24px;\n  color: ",";\n"]);return E=function(){return n},n}function j(){var n=Object(u.a)(["\n  height: 24px;\n  width: 110px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 14px;\n  background: ",";\n  color: ",";\n  border: none;\n  border-radius: 2px;\n\n  &:hover {\n    background: ",";\n    cursor: pointer;\n  }\n"]);return j=function(){return n},n}function k(){var n=Object(u.a)(["\n  flex: 1;\n  max-width: 250px;\n  height: 24px;\n  line-height: 16px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 14px;\n  border: none;\n  background: ",";\n  border-radius: 2px;\n  margin-right: 10px;\n  padding-left: 5px;\n"]);return k=function(){return n},n}function T(){var n=Object(u.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 400px;\n  margin: auto;\n"]);return T=function(){return n},n}var S=i.b.div(T()),D=i.b.input.attrs((function(n){return{placeholderColor:n.theme.colors.fonts.placeholder}}))(k(),(function(n){return n.theme.fonts.body.family}),(function(n){return n.theme.fonts.body.weight}),(function(n){return n.theme.colors.layout.secondary})),C=i.b.button(j(),(function(n){return n.theme.fonts.header.family}),(function(n){return n.theme.fonts.header.weight}),(function(n){return n.theme.colors.layout.accent}),(function(n){return n.theme.colors.fonts.button}),(function(n){return n.theme.colors.layout.darkAccent})),A=i.b.h1(E(),(function(n){return n.theme.fonts.header.family}),(function(n){return n.theme.fonts.header.weight}),(function(n){return n.theme.colors.fonts.header})),z=i.b.ul(w()),_=i.b.div(O()),L=i.b.h1(x(),(function(n){return n.theme.fonts.header.family}),(function(n){return n.theme.fonts.header.weight}),(function(n){return n.theme.colors.fonts.header}));function I(){var n=Object(u.a)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  color: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return I=function(){return n},n}function P(){var n=Object(u.a)(["\n  position: relative;\n  padding-left: 25px;\n  height: 20px;\n  width: 100%;\n\n  &:hover {\n    "," {\n      display: block;\n      cursor: pointer;\n    }\n  }\n"]);return P=function(){return n},n}function F(){var n=Object(u.a)(["\n  position: absolute;\n  left: 0;\n  top: 3px;\n  width: 20px;\n  height: 20px;\n  background: ",";\n  border: none;\n  display: none;\n\n  &::before, &::after {\n    content: '';\n    left: 1px;\n    position: absolute;\n    width: 18px;\n    height: 2px;\n    background: white;\n    transform: rotate(45deg)\n  }\n  &::after {\n    transform: rotate(-45deg)\n  }\n\n  &:hover {\n    background: ",";\n  }\n"]);return F=function(){return n},n}var J=i.b.button(F(),(function(n){return n.theme.colors.layout.accent}),(function(n){return n.theme.colors.layout.darkAccent})),R=i.b.div(P(),J),N=i.b.p(I(),(function(n){return n.theme.fonts.body.family}),(function(n){return n.theme.fonts.body.weight}),(function(n){return n.theme.colors.fonts.body})),B=function(n){var t=n.dispatch,e=n.id,r=n.text,a=Object(l.f)();return o.a.createElement(R,null,o.a.createElement(J,{onClick:function(){return t({action:"DELETE_TODO",payload:e})}}),o.a.createElement(N,{title:"View Details",onClick:function(){return a.push("/todo/".concat(e))}},r))},H=function(){var n=Object(r.useContext)(g),t=n.state,e=n.dispatch,a=Object(r.useState)(""),c=Object(h.a)(a,2),u=c[0],i=c[1],f=Object(r.useState)(""),l=Object(h.a)(f,2),d=l[0],m=l[1];return o.a.createElement(S,null,o.a.createElement(_,null,o.a.createElement(D,{placeholder:"My todo",value:d,onChange:function(n){return m(n.target.value)}}),o.a.createElement(C,{onClick:function(){return e({action:"ADD_TODO",payload:d})}},"Add Todo")),o.a.createElement(_,null,o.a.createElement(D,{placeholder:"Search todos",value:u,onChange:function(n){return i(n.target.value)}}),o.a.createElement(C,{onClick:function(){return e({action:"CLEAR_ALL_TODOS"})}},"Clear All Todos")),o.a.createElement(A,null,"Your Todos:"),o.a.createElement(z,null,t.length?t.filter((function(n){return n.text.includes(u)})).map((function(n){var t=n.id,r=Object(s.a)(n,["id"]);return o.a.createElement(B,Object.assign({key:t,id:t,dispatch:e},r))})):o.a.createElement(L,null,"No Todos. Enjoy your day!")))},Y=e(14),M=e.n(Y);function V(){var n=Object(u.a)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  color: ",";\n"]);return V=function(){return n},n}function q(){var n=Object(u.a)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 32px;\n  color: ",";\n"]);return q=function(){return n},n}function G(){var n=Object(u.a)(["\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n"]);return G=function(){return n},n}var K=i.b.div(G()),Q=i.b.h1(q(),(function(n){return n.theme.fonts.header.family}),(function(n){return n.theme.fonts.header.weight}),(function(n){return n.theme.colors.fonts.header})),U=i.b.p(V(),(function(n){return n.theme.fonts.body.family}),(function(n){return n.theme.fonts.body.weight}),(function(n){return n.theme.colors.fonts.body}));function W(){var n=Object(u.a)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  color: ",";\n"]);return W=function(){return n},n}function X(){var n=Object(u.a)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 24px;\n  color: ",";\n"]);return X=function(){return n},n}function Z(){var n=Object(u.a)(["\n  width: 100%;\n"]);return Z=function(){return n},n}var $=i.b.div(Z()),nn=i.b.h1(X(),(function(n){return n.theme.fonts.header.family}),(function(n){return n.theme.fonts.header.weight}),(function(n){return n.theme.colors.fonts.header})),tn=i.b.p(W(),(function(n){return n.theme.fonts.body.family}),(function(n){return n.theme.fonts.body.weight}),(function(n){return n.theme.colors.fonts.body})),en=function(n){var t=n.weather,e=Object(h.a)(t.weather,1)[0].description,r=t.main,a=r.temp_min,c=r.temp_max,u=r.temp,i=r.feels_like,f=t.name;return o.a.createElement($,null,o.a.createElement(nn,null,"It's ".concat(u,"\u02da")),o.a.createElement(tn,null,"Today's forecast is ".concat(e,". \n    The high is ").concat(c,"\u02da and the low is ").concat(a,"\u02da, \n    but it feels more like ").concat(i,"\u02da. I hope your day \n    in ").concat(f," is a great one!")))},rn=function(){var n=Object(r.useState)(),t=Object(h.a)(n,2),e=t[0],a=t[1];return Object(r.useEffect)((function(){e||navigator.geolocation.getCurrentPosition((function(n){var t,e,r;return M.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=n.coords,o.next=3,M.a.awrap(fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t.latitude,"&lon=").concat(t.longitude,"&appid=db5bbba816b58757082ce2230c7754a6&units=imperial")));case 3:return e=o.sent,o.next=6,M.a.awrap(e.json());case 6:r=o.sent,a(r);case 8:case"end":return o.stop()}}))}),(function(){return alert("Failed to fetch weather data.")}))}),[e]),o.a.createElement(K,null,o.a.createElement(Q,null,"HELLO!"),o.a.createElement(U,null,"It is a beautiful day outside..."),e?o.a.createElement(en,{weather:e}):o.a.createElement(U,null,"Your weather data is loading..."))};function on(){var n=Object(u.a)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 22px;\n  color: ",";\n  margin: 0 20px;\n  text-decoration: none;\n"]);return on=function(){return n},n}function an(){var n=Object(u.a)(["\n  height: 50px;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n"]);return an=function(){return n},n}var cn=i.b.div(an(),(function(n){return n.theme.colors.layout.secondary})),un=Object(i.b)(f.b).attrs((function(n){return{activeStyle:{color:n.theme.colors.fonts.accent},exact:!0}}))(on(),(function(n){return n.theme.fonts.header.family}),(function(n){return n.theme.fonts.header.weight}),(function(n){return n.theme.colors.fonts.header})),fn=function(){return o.a.createElement(cn,null,o.a.createElement(un,{to:"/"},"Home"),o.a.createElement(un,{to:"/todo"},"Todos"))},ln=e(28);e.n(ln).a.load({google:{families:["Source Sans Pro:400,700","sans-serif"]}});var sn={colors:{layout:{background:"white",accent:"#00A676",darkAccent:"#008E66",secondary:"#F7F9F9"},fonts:{header:"rgba(0,0,0,0.8)",body:"rgba(0,0,0,0.8)",placeholder:"rgba(0,0,0,0.6)",accent:"#00A676",button:"#ffffff"}},fonts:{header:{family:"Source Sans Pro",weight:700},body:{family:"Source Sans Pro",weight:400}}};function hn(){var n=Object(u.a)(["\n  height: 24px;\n  width: 110px;\n  align-self: center;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 14px;\n  background: ",";\n  color: ",";\n  border: none;\n  border-radius: 2px;\n\n  &:hover {\n    background: ",";\n    cursor: pointer;\n  }\n"]);return hn=function(){return n},n}function dn(){var n=Object(u.a)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 24px;\n  color: ",";\n"]);return dn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  width: 100%;\n  border: none;\n  background: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  color: ",";\n"]);return mn=function(){return n},n}function bn(){var n=Object(u.a)(["\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n"]);return bn=function(){return n},n}var pn=i.b.div(bn()),gn=i.b.textarea(mn(),(function(n){return n.theme.colors.layout.secondary}),(function(n){return n.theme.fonts.body.family}),(function(n){return n.theme.fonts.body.weight}),(function(n){return n.theme.colors.fonts.body})),yn=i.b.h1(dn(),(function(n){return n.theme.fonts.header.family}),(function(n){return n.theme.fonts.header.weight}),(function(n){return n.theme.colors.fonts.header})),vn=i.b.button(hn(),(function(n){return n.theme.fonts.header.family}),(function(n){return n.theme.fonts.header.weight}),(function(n){return n.theme.colors.layout.accent}),(function(n){return n.theme.colors.fonts.button}),(function(n){return n.theme.colors.layout.darkAccent})),xn=function(){var n=Object(l.g)().id,t=Object(l.f)(),e=Object(r.useContext)(g),a=e.state,c=e.dispatch,u=Object(r.useRef)(a.find((function(t){return t.id===n}))).current,i=Object(r.useState)(u.description||""),f=Object(h.a)(i,2),s=f[0],d=f[1];return o.a.createElement(pn,null,o.a.createElement(yn,null,u.text),o.a.createElement(gn,{placeholder:"Todo details...",onChange:function(n){return d(n.target.value)},value:s}),o.a.createElement(vn,{onClick:function(){c({action:"EDIT_TODO",payload:{id:u.id,description:s}}),t.goBack()}},"Save Todo"))};function On(){var n=Object(u.a)(["\n  min-height: 100vh;\n  max-width: 100vw;\n"]);return On=function(){return n},n}var wn=i.b.div(On()),En=function(){return o.a.createElement(i.a,{theme:sn},o.a.createElement(v,null,o.a.createElement(wn,null,o.a.createElement(f.a,null,o.a.createElement(fn,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/todo/:id"},o.a.createElement(xn,null)),o.a.createElement(l.a,{path:"/todo"},o.a.createElement(H,null)),o.a.createElement(l.a,{path:"/"},o.a.createElement(rn,null)))))))};c.a.render(o.a.createElement(En,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.59352bef.chunk.js.map