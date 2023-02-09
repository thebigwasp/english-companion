/*! For license information please see main.9d55b9d2.js.LICENSE.txt */
!function(){"use strict";var e,n={956:function(e,n,t){var i=t(791),r=t(250),s=t(683),o=t(671),l=t(144),c=t(326),a=t(136),u=t(668),h=t(898),d=t(184),m=function(e){(0,a.Z)(t,e);var n=(0,u.Z)(t);function t(e){var i;return(0,o.Z)(this,t),(i=n.call(this,e)).onNameKeyPress=i.onNameKeyPress.bind((0,c.Z)(i)),i}return(0,l.Z)(t,[{key:"onNameKeyPress",value:function(e){"Enter"===e.key&&this.props.confirmUsername()}},{key:"render",value:function(){var e;return e=this.props.name?(0,d.jsxs)(i.Fragment,{children:[(0,d.jsxs)("div",{className:"welcome-text",children:[(0,d.jsxs)("p",{children:["Welcome, ",this.props.name,"!"]}),(0,d.jsx)("p",{children:"To start speaking you can either choose to show yourself online or click on particular companion on the list"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"show-me-online",children:"Show me online"}),(0,d.jsx)("input",{type:"checkbox",id:"show-me-online",onChange:this.props.toggleOnline,checked:this.props.online})]})]}):(0,d.jsxs)(i.Fragment,{children:[(0,d.jsxs)("div",{className:"labeled-input",children:[(0,d.jsx)("label",{htmlFor:"name",children:"Hi, what's your name?"}),(0,d.jsx)("input",{id:"name",onKeyPress:this.onNameKeyPress,maxLength:"50"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"remember-me",children:"Remember me"}),(0,d.jsx)("input",{type:"checkbox",id:"remember-me"})]}),(0,d.jsx)("div",{className:"confirm-name-button",children:(0,d.jsx)("button",{className:"light-blue clickable",onClick:this.props.confirmUsername,children:"Confirm"})})]}),(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)("div",{className:"header",children:(0,d.jsx)("div",{className:"content header-content",children:e})}),(0,d.jsx)("div",{className:"spacing"})]})}}]),t}(i.Component),f=function(e){(0,a.Z)(t,e);var n=(0,u.Z)(t);function t(e){return(0,o.Z)(this,t),n.call(this,e)}return(0,l.Z)(t,[{key:"render",value:function(){var e,n=this;if(Object.keys(this.props.usersOnline).length>0){e=[];var t=function(t){var i=n.props.usersOnline[t];i.id===n.props.id?e.push((0,d.jsx)("tr",{className:"light-green",children:(0,d.jsx)("td",{children:i.name+" ← This is you"})},i.id)):e.push((0,d.jsx)("tr",{className:"clickable",onClick:function(){return n.props.joinUser(i.id)},children:(0,d.jsx)("td",{children:i.name})},i.id))};for(var r in this.props.usersOnline)t(r)}else e=(0,d.jsx)("tr",{children:(0,d.jsx)("td",{children:"No one is online atm =("})});return(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)("div",{className:"main",children:(0,d.jsx)("div",{className:"content",children:(0,d.jsxs)("table",{className:"light-blue",children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:(0,d.jsx)("th",{children:"People online"})})}),(0,d.jsx)("tbody",{children:e})]})})}),(0,d.jsx)("div",{className:"spacing"})]})}}]),t}(i.Component),p=function(e){(0,a.Z)(t,e);var n=(0,u.Z)(t);function t(e){return(0,o.Z)(this,t),n.call(this,e)}return(0,l.Z)(t,[{key:"render",value:function(){return(0,d.jsx)("footer",{className:"footer",children:(0,d.jsxs)("div",{className:"content footer-content",children:[(0,d.jsx)("div",{children:"Meet the author of this website"}),(0,d.jsx)("a",{href:"https://www.linkedin.com/in/dzmitry-mukha-64434314a",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)("img",{src:"LinkedIn_icon.svg",width:"36px",height:"36px"})}),(0,d.jsx)("div",{children:"Hire me"})]})})}}]),t}(i.Component),g=t(586);var v=function(e){(0,a.Z)(t,e);var n=(0,u.Z)(t);function t(e){var i;(0,o.Z)(this,t),(i=n.call(this,e)).socket=null,i.jitsiAPI=null;var r=function(e){e+="=";var n,t=(0,g.Z)(document.cookie.split(";"));try{for(t.s();!(n=t.n()).done;){var i=n.value;if((i=i.trim()).startsWith(e))return i.substring(e.length,i.length)}}catch(e){t.e(e)}finally{t.f()}return null}("name");return i.state={onMeeting:!1,online:!1,id:null,name:r,usersOnline:{}},i.configureWebSocket=i.configureWebSocket.bind((0,c.Z)(i)),i.confirmUsername=i.confirmUsername.bind((0,c.Z)(i)),i.toggleOnline=i.toggleOnline.bind((0,c.Z)(i)),i.joinUser=i.joinUser.bind((0,c.Z)(i)),i.openMeeting=i.openMeeting.bind((0,c.Z)(i)),i.closeMeeting=i.closeMeeting.bind((0,c.Z)(i)),i}return(0,l.Z)(t,[{key:"componentDidMount",value:function(){this.configureWebSocket()}},{key:"configureWebSocket",value:function(){var e=this,n=(0,h.ZP)("wss://english-companion-server.onrender.com/");n.on("id",(function(n){e.setState((function(e){return{id:n}}))})),n.on("newUserOnline",(function(n){e.setState((function(e){var t=(0,s.Z)({},e.usersOnline);return t[n.id]=n,{usersOnline:t}}))})),n.on("userDisconnected",(function(n){e.setState((function(e){var t=(0,s.Z)({},e.usersOnline);return delete t[n],{usersOnline:t}}))})),n.on("allUsersOnline",(function(n){e.setState((function(e){return{usersOnline:n}}))})),n.on("startMeeting",(function(t){n.disconnect(),e.openMeeting(t)})),n.on("disconnect",(function(){e.setState((function(e){return{online:!1}}))})),this.socket=n}},{key:"confirmUsername",value:function(){var e=document.getElementById("name").value;if(document.getElementById("remember-me").checked){var n=new Date;n.setFullYear(n.getFullYear()+1),document.cookie="name=".concat(e,"; expires=").concat(n.toUTCString())}this.setState((function(n){return{name:e}}))}},{key:"toggleOnline",value:function(){this.state.online?this.socket.emit("hideOnline"):this.socket.emit("showOnline",this.state.name),this.setState((function(e){return{online:!e.online}}))}},{key:"joinUser",value:function(e){this.socket.emit("startMeeting",e)}},{key:"openMeeting",value:function(e){var n=this,t={analytics:{disabled:!0},roomName:e,userInfo:{displayName:this.state.name},parentNode:document.getElementById("jitsi-meeting"),lang:"en",configOverwrite:{prejoinPageEnabled:!1}};this.jitsiAPI=new window.JitsiMeetExternalAPI("meet.jit.si",t),this.jitsiAPI.on("videoConferenceLeft",(function(){n.closeMeeting()})),this.jitsiAPI.on("participantLeft",(function(){n.closeMeeting()})),this.setState((function(e){return{onMeeting:!0}}))}},{key:"closeMeeting",value:function(){this.jitsiAPI.dispose(),this.configureWebSocket(),this.setState((function(e){return{onMeeting:!1}}))}},{key:"render",value:function(){var e=null,n={};return this.state.onMeeting?(n.height="100%",n.overflow="hidden"):e=(0,d.jsxs)("div",{className:"wrapper",children:[(0,d.jsx)(m,{name:this.state.name,confirmUsername:this.confirmUsername,toggleOnline:this.toggleOnline,online:this.state.online}),this.state.name&&(0,d.jsx)(f,{usersOnline:this.state.usersOnline,id:this.state.id,joinUser:this.joinUser}),(0,d.jsx)(p,{})]}),(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)("div",{style:n,id:"jitsi-meeting"}),e]})}}]),t}(i.Component),j=v;r.createRoot(document.getElementById("root")).render((0,d.jsx)(j,{}))}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var s=t[e]={exports:{}};return n[e](s,s.exports,i),s.exports}i.m=n,e=[],i.O=function(n,t,r,s){if(!t){var o=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],s=e[u][2];for(var l=!0,c=0;c<t.length;c++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](t[c])}))?t.splice(c--,1):(l=!1,s<o&&(o=s));if(l){e.splice(u--,1);var a=r();void 0!==a&&(n=a)}}return n}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[t,r,s]},i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};i.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,s,o=t[0],l=t[1],c=t[2],a=0;if(o.some((function(n){return 0!==e[n]}))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(c)var u=c(i)}for(n&&n(t);a<o.length;a++)s=o[a],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},t=self.webpackChunkenglish_companion=self.webpackChunkenglish_companion||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var r=i.O(void 0,[216],(function(){return i(956)}));r=i.O(r)}();
//# sourceMappingURL=main.9d55b9d2.js.map
