(this["webpackJsonpvideo-chat"]=this["webpackJsonpvideo-chat"]||[]).push([[0],{120:function(e,t){function c(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}c.keys=function(){return[]},c.resolve=c,e.exports=c,c.id=120},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(60),o=c.n(a),r=(c(66),c(8)),l=c(2),i=(c(67),c(0)),d=function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide carouselStyle","data-ride":"carousel",style:{height:"75vh",width:"90vw",marginLeft:"5vw",marginTop:"20vh",padding:"20px,20px,20px,20px"},children:[Object(i.jsxs)("ol",{className:"carousel-indicators",children:[Object(i.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),Object(i.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),Object(i.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})]}),Object(i.jsxs)("div",{className:"carousel-inner",children:[Object(i.jsxs)("div",{className:"carousel-item active",style:{},children:[Object(i.jsx)("img",{className:"carouselImg",src:"https://about.fb.com/wp-content/uploads/2020/04/Newsroom-header.png?fit=1920%2C1080",alt:"..."}),Object(i.jsxs)("p",{className:"carouselText",children:["Builds meaningful ",Object(i.jsx)("br",{}),"moments using",Object(i.jsx)("br",{})," video-engage-app",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"A new reason to ",Object(i.jsx)("br",{}),"come together."]})]}),Object(i.jsxs)("div",{className:"carousel-item",children:[Object(i.jsx)("img",{className:"carouselImg",src:"https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/How%20to%20Increase%20Productivity%20Without%20Increasing%20Stress_Open%20Graph%20Image.png",alt:"..."}),Object(i.jsxs)("p",{className:"carouselText",children:["Increase productivity ",Object(i.jsx)("br",{}),"with online",Object(i.jsx)("br",{})," collaborations"]})]}),Object(i.jsxs)("div",{className:"carousel-item",children:[Object(i.jsx)("img",{className:"carouselImg",src:"https://www.tawk.to/wp-content/uploads/2020/08/Live-chat.png",alt:"..."}),Object(i.jsxs)("p",{className:"carouselText",children:["Do live chat",Object(i.jsx)("br",{})]})]})]}),Object(i.jsxs)("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev",children:[Object(i.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(i.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(i.jsxs)("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next",children:[Object(i.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(i.jsx)("span",{className:"sr-only",children:"Next"})]})]}),Object(i.jsxs)("div",{id:"container",children:[Object(i.jsxs)("div",{className:"lead ",children:[Object(i.jsx)("h3",{className:"title ",children:"The power to engage billions of people"}),Object(i.jsxs)("p",{children:["Use powerful video-engage-app to keep your customers close,",Object(i.jsx)("br",{})," while building your business globally. "]})]}),Object(i.jsx)("div",{className:"stats",children:Object(i.jsxs)("ul",{className:"row",children:[Object(i.jsx)("div",{className:"cards",children:Object(i.jsxs)("li",{className:"stats__card",children:[Object(i.jsx)("div",{className:"stats__icon -red ",children:Object(i.jsx)("i",{class:"bi bi-chat",style:{}})}),Object(i.jsx)("p",{children:" This app is bootstraped with create-react-app "})]})}),Object(i.jsx)("div",{className:"cards",children:Object(i.jsxs)("li",{className:"stats__card",children:[Object(i.jsx)("div",{className:"stats__icon -red"}),Object(i.jsx)("p",{children:" "})]})}),Object(i.jsx)("div",{className:"col-12 col-lg-4 d-flex justify-content-center",children:Object(i.jsxs)("li",{className:"stats__card",children:[Object(i.jsx)("div",{className:"stats__icon -red"}),Object(i.jsx)("p",{children:"All in one app,Do video call with live chat features,access the chat before as well as after the meet "})]})})]})})]})]})},u=c(14),j=c(17),b=c.n(j);c(86);var m=function(e){var t=Object(n.useState)(null),c=Object(u.a)(t,2),s=(c[0],c[1],Object(l.g)());return Object(i.jsx)("div",{className:"container text-down text-center py-20 ",children:Object(i.jsxs)("form",{className:"py-64",onSubmit:function(e){e.preventDefault(),b.a.post("/").then((function(e){e.data.success?(console.log(s),s.push("/room/".concat(e.data.roomId))):alert("No room available!")}))},children:[Object(i.jsx)("br",{}),Object(i.jsx)("input",{className:"bg-blue-700 hover:bg-blue-900 text-white font-bold py-6 px-4 rounded",type:"submit",value:"Create a new Room"})]})})},h=function(e){var t=Object(n.useState)(""),c=Object(u.a)(t,2),s=c[0],a=c[1],o=Object(l.g)();return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container text-down text-center py-20 ",children:Object(i.jsxs)("form",{class:"ml-30 py-64",onSubmit:function(){o.push("/room/".concat(s))},children:[Object(i.jsx)("input",{className:"border rounded w-1/3 py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",value:s,required:!0,placeholder:"Enter Room ID to join",onChange:function(e){var t=e.target.value;a(t)}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{className:"bg-blue-700 hover:bg-blue-900 text-white font-bold py-6 px-4 rounded",type:"submit",value:"Join a new Room"})]})})})},x=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};default:return e}},p={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},g=Object(n.createContext)(p),O=function(e){var t=e.children,c=Object(n.useReducer)(x,p),s=Object(u.a)(c,2),a=s[0],o=s[1];return Object(n.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a.user))}),[a.user]),console.log("AuthContext"),Object(i.jsx)(g.Provider,{value:{user:a.user,isFetching:a.isFetching,error:a.error,dispatch:o},children:t})},v=function(e){var t,c=Object(n.useContext)(g).user;Object(n.useEffect)((function(){t=null!==c}),[]);var s={background:"deepSkyBlue",display:"flex",padding:"10px 12px",borderRadius:"20px",fontSize:"80%"};return Object(i.jsxs)("nav",{className:"  container mx-auto justify-between py-4",style:{display:"flex",backgroundColor:"rgba(9,40,68,255)",height:"10%",padding:"6px 12px",zIndex:"100",top:0,position:"fixed"},children:[Object(i.jsx)(r.b,{to:"/",children:Object(i.jsx)("i",{class:"bi bi-house-fill ml-10 text-5xl"})}),Object(i.jsxs)("ul",{className:"flex items-center",children:[Object(i.jsx)("li",{className:"mr-5 text-white",children:Object(i.jsx)(r.b,{to:"/CreateRoom",style:s,children:"CREATE A MEET "})}),Object(i.jsx)("li",{className:"mr-5 text-white",children:Object(i.jsx)(r.b,{to:"/JoinRoom",style:s,children:"JOIN A MEET"})}),Object(i.jsx)("li",{className:"mr-5 text-white",children:Object(i.jsx)(r.b,{to:"/Chat",style:s,children:"CHAT"})}),Object(i.jsx)("li",{className:" mr-10 text-white",children:Object(i.jsx)("button",{id:"button",onClick:function(){if(t)return t=!1,localStorage.clear(),console.log(localStorage),void(window.location.href="./");l.a},children:c?Object(i.jsxs)("div",{children:[Object(i.jsx)("i",{class:"bi bi-person-circle "}),Object(i.jsx)("br",{}),"Logout"]}):Object(i.jsxs)("div",{children:[Object(i.jsx)("i",{class:"bi bi-shield-lock"}),Object(i.jsx)("br",{})," Login"]})})})]})]})},f=c(24),y=c.n(f),N=c(25),w=c.n(N);c(121);var E=function(e){var t=Object(n.useContext)(g).user;console.log(t.username);var c=e.match.params.roomId,s=Object(n.useRef)(),a=Object(n.useRef)();s.current=new w.a;var o,r=Object(n.useRef)(),l=Object(n.useRef)(),d=Object(n.useRef)({}),u=Object(n.useRef)();function j(e,t){e.srcObject=t,e.addEventListener("loadedmetadata",(function(){e.play()})),r.current.append(e)}Object(n.useEffect)((function(){(o=document.createElement("video")).style.width="30%",o.style.height="30%",o.style.border="2px solid",o.style.margin="10px",a.current=y.a.connect("/Room"),console.log("client side",s.current),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){!function(e,t){e.srcObject=t,e.addEventListener("loadedmetadata",(function(){e.play()})),l.current.append(e)}(o,e),s.current.on("call",(function(t){t.answer(e);var c=document.createElement("video");c.style.width="100%",c.style.height="100%",c.style.margin="5px",t.on("stream",(function(e){j(c,e)})),t.on("close",(function(){c.remove()})),d.current[t.peer]=t,u.current=t.peerConnection})),a.current.on("user-connected",(function(t){!function(e,t){var c=s.current.call(e,t),n=document.createElement("video");n.style.width="100%",n.style.height="100%",n.style.margin="5px",c.on("stream",(function(e){j(n,e)})),c.on("close",(function(){n.remove()})),d.current[e]=c}(t,e)}))})),a.current.on("user-disconnected",(function(e){d.current[e]&&d.current[e].close()})),a.current.on("room-full",(function(e){console.log("room Full")})),a.current.on("init",(function(e){console.log(e);for(var t=e.length-1;t>=0;t--){var c=document.createElement("span"),n=e[t].createdAt;c.innerHTML=n.slice(0,9)+" "+n.slice(12,16),c.style.fontSize="8px";var s=document.createElement("li");s.innerHTML=e[t].content,s.style.backgroundColor="lavender",s.style.margin="5px";var a=document.createElement("div");a.style.backgroundColor="white",a.style.marginLeft="5px",a.style.padding="2px",a.style.width="fit-content",a.style.borderRadius="5px",a.style.marginTop="5px",a.style.alignSelf="flex-start",a.style.textAlign="end",a.append(s,c),document.getElementById("liveMessage").append(a);var o=document.getElementById("chatWindow");o.scrollTop=o.scrollHeight}})),s.current.on("open",(function(e){a.current.emit("join-room",c,e,t.username)})),a.current.on("createMessage",(function(e,t){console.log(e),alert(t+"sent a messasge");var c=document.createElement("li");c.innerHTML=e.content,c.style.backgroundColor="lavender";var n=document.createElement("div");n.style.backgroundColor="white",n.style.marginLeft="5px",n.style.padding="5px",n.innerHTML="   "+t+":",n.style.width="fit-content",n.style.borderRadius="5px",n.style.marginTop="5px",n.style.alignSelf="flex-start",n.append(c),document.getElementById("liveMessage").append(n);var s=document.getElementById("chatWindow");s.scrollTop=s.scrollHeight})),document.getElementById("chat_message").addEventListener("keydown",(function(e){var t=document.getElementById("chat_message");if(console.log(t.value),"Enter"===e.key&&null!==t&&""!==t.value){a.current.emit("message",{roomId:c,content:t.value});var n=document.createElement("li");n.innerHTML=t.value,n.style.backgroundColor="deepskyblue",n.style.marginLeft="40%",n.style.color="white",n.style.fontWeight="bold",document.getElementById("liveMessage").append(n);var s=document.getElementById("chatWindow");s.scrollTop=s.scrollHeight,document.getElementById("chat_message").value="",console.log(t.value)}}))}),[]),window.onpopstate=function(){a.current.close()};var b=function(){document.getElementById("playPauseVideo").innerHTML='<i class="unmute bi bi-camera-video-off"></i> '},m=function(){document.getElementById("playPauseVideo").innerHTML='<i class=" bi bi-camera-video"></i> '},h=function(){document.getElementById("muteButton").innerHTML='<i class="bi bi-mic-mute"></i> '},x=function(){document.getElementById("muteButton").innerHTML='<i class="bi bi-mic"></i>'};return Object(i.jsxs)("div",{className:"roomScreen",children:[Object(i.jsxs)("div",{className:"videoChatBlock",children:[Object(i.jsx)("div",{ref:r,className:"videoGrid"}),Object(i.jsx)("div",{ref:l,className:"myVideoGrid"}),Object(i.jsxs)("div",{className:"mainControlsBlock",children:[Object(i.jsx)("div",{className:"mainControlsButton",id:"muteButton",onClick:function(){null!==o&&null!==o.srcObject?o.srcObject.getAudioTracks()[0].enabled?(o.srcObject.getAudioTracks()[0].enabled=!1,h()):(x(),o.srcObject.getAudioTracks()[0].enabled=!0):alert("Give Mic access to this app and reload")},children:Object(i.jsx)("i",{className:"bi bi-mic-fill"})}),Object(i.jsx)("div",{className:"mainControlsButton",id:"playPauseVideo",onClick:function(){null!==o&&null!==o.srcObject?o.srcObject.getVideoTracks()[0].enabled?(o.srcObject.getVideoTracks()[0].enabled=!1,b()):(o.srcObject.getVideoTracks()[0].enabled=!0,m()):alert("Give camera access to this app and reload")},children:Object(i.jsx)("i",{className:"bi bi-camera-video-fill"})}),Object(i.jsx)("div",{className:"mainControlsButton",id:"shareScreen",onClick:function(){navigator.mediaDevices.getDisplayMedia({video:{cursor:"always"},audio:{echoCancellation:!0,noiseSuppression:!0}}).then((function(e){e.getVideoTracks()[0].onended=function(){},console.log(s.current.id)}))},children:Object(i.jsx)("i",{class:"bi bi-cast"})}),Object(i.jsx)("div",{className:"mainControlsButton",id:"leaveMeeting",children:Object(i.jsx)("a",{href:"/",children:Object(i.jsx)("i",{class:"bi bi-telephone-fill",style:{color:"red"}})})})]})]}),Object(i.jsxs)("div",{className:"chatBlock",children:[Object(i.jsx)("button",{className:"mainControlsButton ",id:"chatBoxIcon",children:Object(i.jsx)("i",{class:"bi bi-chat-fill"})}),Object(i.jsxs)("div",{id:"myModal",children:[Object(i.jsx)("span",{className:"close"}),Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("h6",{children:"LiveChat"})}),Object(i.jsx)("div",{className:"chatWindow",id:"chatWindow",children:Object(i.jsx)("ul",{className:"messages",id:"liveMessage"})}),Object(i.jsx)("div",{className:"messageContainer",children:Object(i.jsx)("input",{type:"text",id:"chat_message",placeholder:"Type message here.."})})]})]})]})},I=function(e){var t=Object(n.useState)(""),c=Object(u.a)(t,2),s=c[0],a=c[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container text-down text-center py-20 ",children:Object(i.jsxs)("form",{class:"ml-30 py-64",onSubmit:function(){e.history.push("/Chat/".concat(s))},children:[Object(i.jsx)("input",{className:"border rounded w-1/3 py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",value:s,required:!0,placeholder:"Enter Room ID to join chat",onChange:function(e){var t=e.target.value;a(t)}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{className:"bg-blue-700 hover:bg-blue-900 text-white font-bold py-6 px-4 rounded",type:"submit",value:"Join a Room"})]})})})};c(122);var C=function(e){var t=e.match.params.roomId,c=Object(n.useRef)(),s=Object(n.useRef)();c.current=new w.a;var a=Object(n.useRef)({});return Object(n.useEffect)((function(){s.current=y.a.connect("/Room"),console.log("client side",c.current),c.current.on("open",(function(e){s.current.emit("message-room",t,e)})),s.current.on("init",(function(e){console.log(e);for(var t=e.length-1;t>=0;t--){var c=document.createElement("span"),n=e[t].createdAt;c.innerHTML=n.slice(0,9)+" "+n.slice(12,16),c.style.fontSize="8px";var s=document.createElement("li");s.innerHTML=e[t].content,s.style.backgroundColor="lavender",s.style.margin="5px";var a=document.createElement("div");a.style.backgroundColor="white",a.style.marginLeft="5px",a.style.padding="2px",a.style.width="fit-content",a.style.borderRadius="5px",a.style.marginTop="5px",a.style.alignSelf="flex-start",a.style.textAlign="end",a.append(s,c),document.getElementById("liveMessage").append(a);var o=document.getElementById("chatBox");o.scrollTop=o.scrollHeight}})),s.current.on("createMessage",(function(e){console.log(67);var t=document.createElement("li");t.innerHTML=e.content,t.style.backgroundColor="lavender",document.getElementById("liveMessage").append(t);var c=document.getElementById("chatBox");c.scrollTop=c.scrollHeight})),document.getElementById("chat_message").addEventListener("keydown",(function(e){var c=document.getElementById("chat_message");if(console.log(c.value),"Enter"===e.key&&null!==c&&""!==c.value){s.current.emit("message",{roomId:t,content:c.value});var n=document.createElement("li");n.innerHTML=c.value,n.style.backgroundColor="blue",n.style.color="white",document.getElementById("liveMessage").append(n);var a=document.getElementById("chatBox");a.scrollTop=a.scrollHeight,document.getElementById("chat_message").value="",console.log(c.value)}})),s.current.on("user-disconnected",(function(e){a.current[e]&&a.current[e].close()}))}),[]),Object(i.jsx)("div",{className:"messenger",children:Object(i.jsxs)("div",{className:"chatBox",id:"chatBox",children:[Object(i.jsx)("div",{className:"chatBoxTop",children:Object(i.jsx)("ul",{className:"messages",id:"liveMessage"})}),Object(i.jsx)("div",{className:"chatBoxBottom",children:Object(i.jsx)("textarea",{className:"chatMessageInput",placeholder:"write something...",id:"chat_message"})})]})})},B=(c(123),c(18)),L=c.n(B),T=c(26),k=function(){var e=Object(T.a)(L.a.mark((function e(t,c){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOGIN_START"}),e.prev=1,console.log("apiCalls"),e.next=5,b.a.post("/login",t);case 5:n=e.sent,c({type:"LOGIN_SUCCESS",payload:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c({type:"LOGIN_FAILURE",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,c){return e.apply(this,arguments)}}(),R=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useContext)(g),s=c.isFetching,a=c.dispatch;return Object(i.jsx)("div",{className:"login",children:Object(i.jsxs)("div",{className:"loginWrapper",children:[Object(i.jsxs)("div",{className:"loginLeft",children:[Object(i.jsx)("h3",{className:"loginLogo",children:"Video-Engage-App"}),Object(i.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you."})]}),Object(i.jsx)("div",{className:"loginRight",children:Object(i.jsxs)("form",{className:"loginBox",onSubmit:function(c){c.preventDefault(),k({email:e.current.value,password:t.current.value},a),console.log("loged in")},children:[Object(i.jsx)("input",{placeholder:"Email",type:"email",required:!0,className:"loginInput",ref:e}),Object(i.jsx)("input",{placeholder:"Password",type:"password",required:!0,minLength:"6",className:"loginInput",ref:t}),Object(i.jsx)("button",{className:"loginButton",type:"submit",disabled:s,children:s?Object(i.jsx)("div",{}):"Log In"}),Object(i.jsx)("span",{className:"loginForgot",children:"Forgot Password?"}),Object(i.jsx)("button",{className:"loginRegisterButton",children:s?Object(i.jsx)(i.Fragment,{}):"Create a New Account"})]})})]})})};c(125),c(126);function S(e){var t=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useRef)(),a=Object(n.useRef)(),o=Object(l.g)(),r=function(){var e=Object(T.a)(L.a.mark((function e(n){var r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.current.value===s.current.value){e.next=5;break}a.current.setCustomValidity("Passwords don't match!"),e.next=16;break;case 5:return r={username:t.current.value,email:c.current.value,password:s.current.value},e.prev=6,e.next=9,b.a.post("/register",r);case 9:o.push("/login"),console.log(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.log("found !!");case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"login",children:Object(i.jsxs)("div",{className:"loginWrapper",children:[Object(i.jsxs)("div",{className:"loginLeft",children:[Object(i.jsx)("h3",{className:"loginLogo",children:"Lamasocial"}),Object(i.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on Lamasocial."})]}),Object(i.jsx)("div",{className:"loginRight",children:Object(i.jsxs)("form",{className:"loginBox",onSubmit:r,children:[Object(i.jsx)("input",{placeholder:"Username",required:!0,ref:t,className:"loginInput"}),Object(i.jsx)("input",{placeholder:"Email",required:!0,ref:c,className:"loginInput",type:"email"}),Object(i.jsx)("input",{placeholder:"Password",required:!0,ref:s,className:"loginInput",type:"password",minLength:"6"}),Object(i.jsx)("input",{placeholder:"Password Again",required:!0,ref:a,className:"loginInput",type:"password"}),Object(i.jsx)("button",{className:"loginButton",type:"submit",children:"Sign Up"}),Object(i.jsx)("button",{className:"loginRegisterButton",children:"Log into Account"})]})})]})})}var M=function(e){var t=Object(n.useContext)(g).user;return console.log(t),console.log(t),Object(i.jsx)(r.a,{children:Object(i.jsxs)(l.d,{children:[!t&&Object(i.jsxs)(l.b,{path:"/",children:[function(){alert("Please Login")},Object(i.jsx)(R,{}),Object(i.jsx)(d,{}),Object(i.jsx)(v,{})]}),Object(i.jsx)(l.b,{exact:!0,path:"/Room/:roomId",component:E}),Object(i.jsxs)("div",{children:[Object(i.jsx)(v,{}),Object(i.jsx)(l.b,{exact:!0,path:"/",component:d}),Object(i.jsx)(l.b,{path:"/login",children:t?Object(i.jsx)(l.a,{to:"/"}):Object(i.jsx)(R,{})}),Object(i.jsx)(l.b,{path:"/register",children:t?Object(i.jsx)(l.a,{to:"/"}):Object(i.jsx)(S,{})}),Object(i.jsxs)(l.b,{exact:!0,path:"/CreateRoom",children:[" ",t?Object(i.jsx)(m,{}):Object(i.jsx)(R,{})]}),Object(i.jsx)(l.b,{exact:!0,path:"/JoinRoom",component:h}),Object(i.jsx)(l.b,{exact:!0,path:"/Chat",component:I}),Object(i.jsx)(l.b,{exact:!0,path:"/Chat/:roomId",component:C})]})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,128)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(O,{children:Object(i.jsx)(M,{})})}),document.getElementById("root")),_()},66:function(e,t,c){},67:function(e,t,c){},86:function(e,t,c){}},[[127,1,2]]]);
//# sourceMappingURL=main.41d994ac.chunk.js.map