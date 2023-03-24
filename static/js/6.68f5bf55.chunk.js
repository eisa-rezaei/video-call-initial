(this["webpackJsonpvideo-call-app"]=this["webpackJsonpvideo-call-app"]||[]).push([[6],{219:function(n,e,t){"use strict";t.r(e);var i,r,c,s,a,o,d,l,p,x,b,u,j,f,h,g,A,m,O,v,w,y,E,M,k,I,F,B,W,V,z,U,N,L,S,T,Q,D,R,G,P,q=t(5),C=t(1),K=t(3),Z=t(84),H=t(11),Y=t(35),J=t(8),X=t(9),_=X.c.article(i||(i=Object(J.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"]))),$=X.c.div(r||(r=Object(J.a)(["\n  width: 100%;\n  padding: 10px 0;\n  min-height: 550px;\n"]))),nn=X.c.div(c||(c=Object(J.a)(["\n  width: 100%;\n  display: flex;\n  padding: 15px 15px;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.3s ease;\n  border-radius: 35px;\n  box-shadow: 0 5px 15px #dde0e5aa;\n\n  & img {\n    width: 45px;\n    height: 45px;\n    margin-right: 10px;\n    border-radius: 50%;\n    border: 2px solid #fff;\n  }\n  & p {\n    flex: 2;\n  }\n  & span {\n    font-size: 0.8rem;\n  }\n  :hover {\n    background-color: #fff;\n    box-shadow: 0 5px 20px #cccfd4fa;\n    cursor: pointer;\n  }\n"]))),en=X.c.div(s||(s=Object(J.a)(["\n  width: 100%;\n  min-height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  background-color: white;\n  border: 2px solid #dfdfdf;\n  border-radius: 0 0 20px 20px;\n"]))),tn=X.c.div(a||(a=Object(J.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  & img {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n  }\n"]))),rn=X.c.header(o||(o=Object(J.a)(["\n  width: 100%;\n  min-height: 60px;\n  padding: 0 10px;\n  padding-right: 40px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  background-color: #d5e6e880;\n  justify-content: space-between;\n  & span {\n    flex: 2;\n    text-align: center;\n  }\n  & button {\n    width: 30px;\n    height: 25px;\n    line-height: 10px;\n    border-radius: 5px;\n    cursor: pointer;\n    color: seagreen;\n    background-color: #cfdfdf;\n  }\n"]))),cn=X.c.div(d||(d=Object(J.a)(["\n  margin-top: 10px;\n  text-align: center;\n  & p {\n    margin: 5px 0;\n    color: #a0a0a0;\n    font-size: 0.8rem;\n  }\n"]))),sn=X.c.ul(l||(l=Object(J.a)(["\n  width: 100%;\n  min-height: 200px;\n  margin-top: 30px;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: #d5e6e880;\n"]))),an=X.c.li(p||(p=Object(J.a)(["\n  width: 100%;\n  min-height: 50px;\n  padding: 20px 10px;\n  border-bottom: 1px solid #89c4b2;\n  & h5 {\n    margin-bottom: 10px;\n    color: seagreen;\n  }\n  & p {\n    font-size: 0.8rem;\n  }\n  :last-child {\n    border-bottom: none;\n  }\n"]))),on=t(4),dn=function(n){var e=n.id,t=Object(C.useState)(),i=Object(q.a)(t,2),r=i[0],c=i[1];Object(C.useEffect)((function(){var n=H.c.find((function(n){return n.userId===e}));c(n)}),[e]);var s=function(n){return function(){if(n){var e=H.c.find((function(e){return e.userId===n}));c(e)}else c(null)}};return Object(on.jsxs)(_,{children:[Object(on.jsx)($,{children:r?Object(on.jsxs)(tn,{children:[Object(on.jsxs)(rn,{children:[Object(on.jsx)("button",{onClick:s(),children:Object(on.jsx)(Y.c,{})}),Object(on.jsx)("span",{children:"Info"})]}),Object(on.jsx)("img",{src:r.userAvatar,alt:r.userId}),Object(on.jsxs)(cn,{children:[Object(on.jsx)("h4",{children:r.userId}),Object(on.jsx)("p",{children:"last seen recently"})]}),Object(on.jsxs)(sn,{children:[Object(on.jsxs)(an,{children:[Object(on.jsx)("h5",{children:"bio"}),Object(on.jsx)("p",{children:r.bio})]}),Object(on.jsxs)(an,{children:[Object(on.jsx)("h5",{children:"userName"}),Object(on.jsx)("p",{children:r.userId})]}),Object(on.jsxs)(an,{children:[Object(on.jsx)("h5",{children:"userName"}),Object(on.jsx)("p",{children:r.userEmail})]})]})]}):H.c.map((function(n){var e=n.userId,t=n.userAvatar,i=n.isPublisher;return Object(on.jsxs)(nn,{onClick:s(e),children:[Object(on.jsx)("img",{src:t,alt:"user-img"}),Object(on.jsx)("p",{children:e}),Object(on.jsx)("span",{children:i?"Creator":null})]},e)}))}),Object(on.jsx)(en,{children:"Title : Welcome to new member of group"})]})},ln=t(36),pn={getMassages:function(n){return n.massages.massages},getIsTypingList:function(n){return n.massages.isTypingList}},xn=t(30),bn=function(n){return{type:xn.a.SEND_MSG,payload:n}},un=Object(X.d)(x||(x=Object(J.a)(["\n0%{margin-bottom: -7px;background-color:#efefef;}\n50%{margin-bottom: 6px; background-color:#222;}\n100%{margin-bottom: -7px;background-color:#efefef;}\n"]))),jn=X.c.article(b||(b=Object(J.a)(["\n  width: 32%;\n  height: 100%;\n  padding: 15px;\n  background-color: #edf0f5;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: ",";\n"])),(function(n){return n.isMassage?"space-between":"flex-start"})),fn=X.c.section(u||(u=Object(J.a)(["\n  width: 100%;\n  height: 64vh;\n  overflow: auto;\n  padding: 20px 10px;\n"]))),hn=X.c.p(j||(j=Object(J.a)(["\n  font-size: 0.7rem;\n  position: absolute;\n  left: 0;\n  top: -20px;\n"]))),gn=X.c.div(f||(f=Object(J.a)(["\n  width: 100%;\n  margin-top: ",";\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n  & img {\n    width: 35px;\n    height: 35px;\n    margin-right: 10px;\n    border-radius: 50%;\n    border: 2px solid #fff;\n    transition: all 0.2s ease;\n    cursor: pointer;\n    :hover {\n      border-radius: 0%;\n    }\n  }\n"])),(function(n){return n.isUserBefore?"30px":"10px"}),(function(n){return n.isUser?"flex-end":"flex-start"})),An=X.c.div(h||(h=Object(J.a)(["\n  min-width: 100px;\n  max-width: 300px;\n  min-height: 50px;\n  padding: 10px;\n  border-radius: 10px;\n  position: relative;\n  background-color: ",';\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  ::before {\n    content: "";\n    width: 10px;\n    height: 15px;\n    ',"\n    bottom: 0;\n    position: absolute;\n    background-color: ",";\n    clip-path: ",";\n  }\n"])),(function(n){return n.isUser?"#d1d3e2":"#fff"}),(function(n){return n.isUser?"right: -5px;":"left: -5px;"}),(function(n){return n.isUser?"#d1d3e2":"#fff"}),(function(n){return n.isUser?"polygon(0 0, 0% 100%, 100% 100%)":"polygon(100% 0, 0% 100%, 100% 100%)"})),mn=X.c.header(g||(g=Object(J.a)(["\n  width: 100%;\n  min-height: 80px;\n  padding: 10px 10px 10px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  & h4 {\n    font-weight: 400;\n  }\n  border-bottom: 2px solid #e3e3e3;\n"]))),On=X.c.div(A||(A=Object(J.a)(["\n  display: flex;\n  justify-content: space-between;\n  & :nth-child(",") {\n    color: seagreen;\n    background-color: #d5e6e8;\n  }\n  & button {\n    padding: 15px 20px;\n    border-radius: 15px;\n    color: #777d8b;\n    font-size: 0.8rem;\n    cursor: pointer;\n  }\n"])),(function(n){return n.isMassage})),vn=X.c.section(m||(m=Object(J.a)(["\n  width: 100%;\n  height: 110px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),wn=X.c.div(O||(O=Object(J.a)(["\n  width: 100%;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  font-size: 0.6rem;\n"]))),yn=X.c.div(v||(v=Object(J.a)(["\n  width: 30px;\n  height: 30px;\n  padding: 2px;\n  margin-right: 10px;\n  background-color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  & span {\n    width: 3px;\n    height: 3px;\n    border-radius: 50%;\n    background-color: gray;\n    :nth-child(1) {\n      animation: "," 0.7s linear infinite;\n    }\n    :nth-child(2) {\n      animation: "," 0.7s 0.2s linear infinite;\n    }\n    :nth-child(3) {\n      animation: "," 0.7s 0.4s linear infinite;\n    }\n  }\n"])),un,un,un),En=X.c.div(w||(w=Object(J.a)(["\n  width: 100%;\n  height: 70px;\n  padding: 8px;\n  padding-left: 25px;\n  border-radius: 20px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #fff;\n  & span {\n    min-width: 55px;\n    min-height: 50px;\n    border-radius: 20px;\n    color: #fff;\n    background-color: #48a08a;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n  }\n  & input {\n    width: 80%;\n  }\n"]))),Mn=new WebSocket("ws://localhost:8002"),kn=function(){var n=Object(ln.c)(pn.getMassages),e=Object(ln.c)(pn.getIsTypingList),t=Object(C.useState)(!0),i=Object(q.a)(t,2),r=i[0],c=i[1],s=Object(C.useState)(),a=Object(q.a)(s,2),o=a[0],d=a[1],l=Object(C.useRef)(),p=Object(ln.b)(),x=Object(C.useRef)(),b=function(n){return function(){c(!1),d(n)}};return Object(C.useEffect)((function(){x.current.scrollIntoView()}),[n]),Object(C.useEffect)((function(){var n=function(n){var e=n.data,t=JSON.parse(e);t.id!==H.a.userId&&t.id&&(p(bn({userAvatar:"data:image/jpeg;base64,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",userId:"Guest User",content:t.massage,isCall:!1,id:Math.floor(1e3*Math.random())})),console.log("render"))};return Mn.addEventListener("message",n),function(){Mn.removeEventListener("message",n)}}),[p]),Object(on.jsxs)(jn,{isMassage:r,children:[Object(on.jsxs)(mn,{children:[Object(on.jsx)("h4",{children:"Group Chat"}),Object(on.jsxs)(On,{isMassage:r?"1":"2",children:[Object(on.jsx)("button",{onClick:function(){return c(!0)},children:"Massages"}),Object(on.jsx)("button",{onClick:function(){c(!1),d("")},children:"Participant"})]})]}),r?Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(fn,{children:null===n||void 0===n?void 0:n.map((function(e,t){var i,r=e.content,c=e.userAvatar,s=e.userId,a=e.id,o=(e.isCall,H.a.userId===s),d=s!==(null===(i=n[t-1])||void 0===i?void 0:i.userId),l=t===n.length-1;return Object(on.jsxs)(gn,{isUser:o,isUserBefore:d,ref:l?x:null,children:[!o&&Object(on.jsx)("img",{src:c,alt:s,onClick:b(s)}),Object(on.jsxs)(An,{isUser:o,children:[Object(on.jsx)(hn,{onClick:b(s),children:d?o?"You":s:null}),Object(on.jsx)("p",{children:r})]})]},a)}))}),Object(on.jsxs)(vn,{children:[e.length?Object(on.jsxs)(wn,{children:[Object(on.jsxs)(yn,{children:[Object(on.jsx)("span",{}),Object(on.jsx)("span",{}),Object(on.jsx)("span",{})]}),e.map((function(n,t){var i=n===H.a.userId;return e[t]!==e[e.length-1]?Object(on.jsxs)("p",{children:[n,"\xa0and\xa0"]},t):Object(on.jsxs)("p",{children:[i?"you":n,"\xa0",e.length>1?"are":"is"]},t)})),"\xa0Typing"]}):Object(on.jsx)(wn,{}),Object(on.jsxs)(En,{children:[Object(on.jsx)("input",{placeholder:"Write your massage",ref:l,onFocus:function(){return p((n=H.a.userId,{type:xn.a.SET_IS_TYPING,payload:n}));var n},onBlur:function(){return p((n=H.a.userId,{type:xn.a.REMOVE_IS_TYPING,payload:n}));var n}}),Object(on.jsx)("span",{onClick:function(){return function(){var n=l.current.value,e={userAvatar:H.a.userAvatar,userId:H.a.userId,content:n,isCall:!1,id:Math.floor(1e3*Math.random())};p(bn(e)),Mn.send(JSON.stringify({massage:n,id:H.a.userId})),l.current.value=""}()},children:Object(on.jsx)(Z.a,{})})]})]})]}):Object(on.jsx)(dn,{id:o})]})},In=t(38),Fn=t(37),Bn=t(40),Wn=t(12),Vn=t.p+"static/media/img-7.9efe48a7.jpeg",zn=Object(X.d)(y||(y=Object(J.a)(["\n0%{height:10px;}\n25%{height:20px;background-color:#48a08a50;}\n50%{height:40px; background-color:#48a08a;}\n75%{height:20px;background-color:#48a08a50;}\n100%{height:10px;}\n\n"]))),Un=Object(X.b)(E||(E=Object(J.a)(["\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 3;\n"]))),Nn=Object(X.b)(M||(M=Object(J.a)(["\n  width: 68%;\n  height: 100%;\n  padding: 15px;\n"]))),Ln=X.c.article(k||(k=Object(J.a)(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: #fff;\n  ","\n"])),(function(n){return n.isFullScreenVid?Un:Nn})),Sn=X.c.header(I||(I=Object(J.a)(["\n  width: 100%;\n  min-height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-bottom: 1px solid #efefef;\n  & span {\n    width: 40px;\n    height: 40px;\n    padding: 10px;\n    margin-right: 20px;\n    color: #aaa;\n    background-color: #edf0f5;\n    border-radius: 10px;\n    line-height: 10px;\n  }\n"]))),Tn=X.c.div(F||(F=Object(J.a)(["\n  padding: 5px;\n  margin-left: 20px;\n  border-radius: 10px;\n  font-size: 0.8rem;\n  color: #505a95;\n  line-height: 10px;\n  display: flex;\n  align-items: center;\n  background-color: #d1d3e1;\n  & svg {\n    font-size: 1rem;\n    margin-right: 5px;\n  }\n"]))),Qn=X.c.div(B||(B=Object(J.a)(["\n  width: 100%;\n  min-height: 60px;\n  font-size: 0.7rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  & svg {\n    width: 30px;\n    margin: 0 5px;\n  }\n  & .add-user-icon {\n    color: #48a08a;\n    margin-right: 10px;\n    & p {\n      margin: 0 5px;\n    }\n    & svg {\n      width: 30px;\n      height: 30px;\n      padding: 5px;\n      font-weight: bold;\n      color: #fff;\n      background-color: #48a08a;\n      border-radius: 12px;\n      margin-right: 10px;\n    }\n  }\n"]))),Dn=X.c.div(W||(W=Object(J.a)(["\n  min-width: 150px;\n  min-height: 50px;\n  margin-right: 15px;\n  display: flex;\n  align-items: center;\n  & svg {\n    font-size: 1.2rem;\n    color: #a0a0a0;\n  }\n  & span {\n    width: 30px;\n    height: 30px;\n    padding: 10px;\n    color: #22aa22;\n    border-radius: 10px;\n    background-color: #22aa2220;\n    line-height: 10px;\n    margin-left: 10px;\n    text-align: center;\n  }\n  .vid-absent-people {\n    & span {\n      background-color: #fb606020;\n      color: #fb6060;\n    }\n  }\n"]))),Rn=X.c.section(V||(V=Object(J.a)(["\n  width: 100%;\n  min-height: ",";\n  border-radius: 15px;\n  position: ",";\n  overflow: hidden;\n  background-image: ",";\n  background-size: cover;\n"])),(function(n){return n.isFullScreenVid?"700px":"510px"}),(function(n){return n.isFullScreenVid?"static":"relative"}),(function(n){return n.isFullScreenVid?null:"url(".concat(Vn,")")})),Gn=X.c.video(z||(z=Object(J.a)(["\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  object-fit: cover;\n"]))),Pn=X.c.div(U||(U=Object(J.a)(["\n  min-width: 450px;\n  min-height: 50px;\n  top: 20px;\n  left: 20px;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 2;\n"]))),qn=X.c.div(N||(N=Object(J.a)(["\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 2;\n  & img {\n    width: 45px;\n    height: 45px;\n    border-radius: 10px;\n  }\n  & span {\n    margin-left: 10px;\n    color: #fff;\n  }\n"]))),Cn=X.c.div(L||(L=Object(J.a)(["\n  width: 100px;\n  min-height: 40px;\n  padding: 5px 10px;\n  background-color: #ffffff40;\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  font-size: 0.7rem;\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-25%);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  z-index: 2;\n  & span {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    border: 3px solid #fff;\n    background-color: red;\n  }\n"]))),Kn=X.c.div(S||(S=Object(J.a)(["\n  width: ",";\n  max-height: 500px;\n  top: 20px;\n  right: 25px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  & img {\n    width: 100%;\n    height: ",";\n    margin-bottom: 10px;\n    border-radius: 20px;\n    border: 3px solid #fff;\n  }\n"])),(function(n){return n.isFullScreenVid?"110px":"75px"}),(function(n){return n.isFullScreenVid?"110px":"75px"})),Zn=X.c.div(T||(T=Object(J.a)(["\n  width: 370px;\n  min-height: 60px;\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translateX(-45%);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  & span {\n    color: #fff;\n    padding: 15px;\n    background-color: #ffffff40;\n    backdrop-filter: blur(10px);\n    border-radius: 50%;\n    line-height: 10px;\n    cursor: pointer;\n    :nth-child(3) {\n      padding: 25px;\n      font-size: 1.2rem;\n      border-radius: 30px;\n      background-color: #fb6060;\n    }\n  }\n"]))),Hn=X.c.div(Q||(Q=Object(J.a)(["\n  width: 50px;\n  height: 50px;\n  min-height: ",";\n  left: 30px;\n  bottom: 40px;\n  color: #fff;\n  padding: 15px;\n  overflow: hidden;\n  position: absolute;\n  border-radius: 30px;\n  background-color: #ffffff40;\n  backdrop-filter: blur(10px);\n  transition: all 0.15s ease;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-end;\n  cursor: pointer;\n\n  & input {\n    margin-bottom: 80px;\n    transform: rotate(-90deg);\n    display: ",";\n  }\n"])),(function(n){return n.isVolumeBarOpen?"210px":"50px"}),(function(n){return n.isVolumeBarOpen?"block":"none"})),Yn=X.c.footer(D||(D=Object(J.a)(["\n  width: 100%;\n  min-height: 65px;\n  padding-top: 15px;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]))),Jn=X.c.div(R||(R=Object(J.a)(["\n  & h4 {\n    color: #b0b0b0;\n    margin: 5px 0;\n  }\n"]))),Xn=X.c.div(G||(G=Object(J.a)(["\n  width: 100px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  & span {\n    width: 2px;\n    height: 40px;\n    margin: 0 2px;\n    background-color: #48a08a;\n    :nth-child(1) {\n      animation: "," 1.3s 0.5s linear infinite;\n    }\n    :nth-child(2) {\n      animation: "," 1.3s linear infinite;\n    }\n    :nth-child(3) {\n      animation: "," 1.3s 0.3s linear infinite;\n    }\n    :nth-child(4) {\n      animation: "," 1.3s 0.2s linear infinite;\n    }\n    :nth-child(5) {\n      animation: "," 1.3s 1s linear infinite;\n    }\n    :nth-child(6) {\n      animation: "," 1.3s 0.7s linear infinite;\n    }\n    :nth-child(7) {\n      animation: "," 1.3s linear infinite;\n    }\n    :nth-child(8) {\n      animation: "," 1.3s 0.1s linear infinite;\n    }\n    :nth-child(9) {\n      animation: "," 1.3s 0.3s linear infinite;\n    }\n    :nth-child(10) {\n      animation: "," 1.3s 0.15s linear infinite;\n    }\n  }\n  & h4 {\n  }\n"])),zn,zn,zn,zn,zn,zn,zn,zn,zn,zn),_n=function(){var n=Object(C.useState)({min:0,second:0}),e=Object(q.a)(n,2),t=e[0],i=e[1];return Object(C.useEffect)((function(){t.second>=60?i(Object(Wn.a)(Object(Wn.a)({},t),{},{min:t.min+1,second:0})):setTimeout((function(){i(Object(Wn.a)(Object(Wn.a)({},t),{},{second:t.second+1}))}),1e3)}),[t]),Object(on.jsxs)(Cn,{children:[Object(on.jsx)("span",{}),Object(on.jsxs)("p",{children:[t.min<10?"0".concat(t.min):"".concat(t.min),"\xa0:\xa0",t.second<10?"0".concat(t.second):t.second]})]})},$n=t(111),ne=function(n){var e=n.setVolume,t=Object(C.useState)(!1),i=Object(q.a)(t,2),r=i[0],c=i[1];return Object(on.jsxs)(Hn,{isVolumeBarOpen:r,onClick:function(){return c(!r)},children:[Object(on.jsx)("input",{type:"range",onChange:e,defaultValue:"80"}),Object(on.jsx)($n.a,{})]})},ee=new WebSocket("ws://localhost:8002"),te=function(){var n=Object(C.useState)(!1),e=Object(q.a)(n,2),t=e[0],i=e[1],r=Object(C.useState)(!1),c=Object(q.a)(r,2),s=c[0],a=c[1],o=H.c.find((function(n){return n.isPublisher})),d=Object(C.useRef)(null),l=Object(C.useRef)(null);Object(C.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:{width:2e3,height:1575},audio:!0}).then((function(n){d.current.srcObject=n})).catch((function(n){return console.log("error massage :",n)})),d.current.volume=1}),[d]),Object(C.useEffect)((function(){ee.addEventListener("open",(function(){console.log('Connected to "ws://localhost:8002"'),setInterval((function(){ee.send(function(){var n=l.current,e=d.current;return n.width=e.videoWidth,n.height=e.videoHeight,n.getContext("2d").drawImage(e,0,0),n.toDataURL("image/png")}())}),100)}))}),[]);return Object(on.jsxs)(Ln,{isFullScreenVid:t,children:[Object(on.jsxs)(Sn,{children:[Object(on.jsx)("span",{children:Object(on.jsx)(Y.c,{})}),"OverView of new real estate proposals",Object(on.jsxs)(Tn,{children:[Object(on.jsx)(In.a,{})," Team"]})]}),Object(on.jsxs)(Qn,{children:[Object(on.jsxs)(Dn,{children:[Object(on.jsxs)(Dn,{children:[Object(on.jsx)(In.a,{})," Invited to call : ",Object(on.jsx)("span",{children:"6"})]}),Object(on.jsxs)(Dn,{className:"vid-absent-people",children:[Object(on.jsx)(Y.a,{})," Absent people : ",Object(on.jsx)("span",{children:"5"})]})]}),Object(on.jsxs)(Dn,{className:"add-user-icon",children:[Object(on.jsx)(Bn.b,{})," ",Object(on.jsx)("p",{children:"Add user to the call"})]})]}),Object(on.jsxs)(Rn,{isFullScreenVid:t,children:[Object(on.jsx)(Gn,{autoPlay:!0,loop:!0,ref:d}),Object(on.jsx)(Pn,{children:Object(on.jsxs)(qn,{children:[Object(on.jsx)("img",{src:o.userAvatar,alt:o.userId}),Object(on.jsxs)("span",{children:[Object(on.jsx)("h6",{children:"publisher"}),Object(on.jsx)("p",{children:o.userId})]})]})}),s?Object(on.jsx)(_n,{}):null,Object(on.jsx)(Kn,{isFullScreenVid:t,children:H.c.map((function(n){var e=n.userAvatar,t=n.userId;return Object(on.jsx)("img",{src:e,alt:t},t)}))}),Object(on.jsxs)(Zn,{children:[Object(on.jsx)("span",{onClick:function(){return i(!t)},children:Object(on.jsx)(Fn.a,{})}),Object(on.jsx)("span",{children:Object(on.jsx)(Fn.b,{})}),Object(on.jsx)("span",{children:Object(on.jsx)(Y.b,{})}),Object(on.jsx)("span",{onClick:function(){return a(!s)},children:Object(on.jsx)(Z.b,{})}),Object(on.jsx)("span",{children:Object(on.jsx)(Bn.a,{})})]}),Object(on.jsx)(ne,{setVolume:function(n){d.current.volume=n.target.value/100}})]}),Object(on.jsxs)(Yn,{children:[Object(on.jsx)(Xn,{children:new Array(10).fill().map((function(n,e){return Object(on.jsx)("span",{},e)}))}),Object(on.jsxs)(Jn,{children:[Object(on.jsx)("h4",{children:"Title"}),Object(on.jsx)("p",{children:"Thanks for sending all those complement transcripts through - we've been really happy"})]})]}),Object(on.jsx)("canvas",{ref:l,hidden:!0})]})},ie=X.c.article(P||(P=Object(J.a)(["\n  width: 100%;\n  min-height: 95vh;\n  padding: 15px;\n  border-left: 2px solid #f0f0f0;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));e.default=function(){var n=localStorage.getItem("user"),e=Object(C.useState)(n),t=Object(q.a)(e,2),i=t[0],r=t[1];return Object(C.useEffect)((function(){n&&r(!0)}),[n]),i?Object(on.jsxs)(ie,{children:[Object(on.jsx)(te,{}),Object(on.jsx)(kn,{})]}):Object(on.jsx)(K.a,{replace:!0,to:"/login"})}}}]);
//# sourceMappingURL=6.68f5bf55.chunk.js.map