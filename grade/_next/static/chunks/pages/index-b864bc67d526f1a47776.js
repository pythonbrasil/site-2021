(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7679:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(5893),a=n(7757),o=n.n(a),i=n(2137),c=n(7294),s=n(9008),l=n(6610),u=n(5991),d=n(5255),f=n(3724),p=n(7608),x="/grade/_next/static/image/public/logo.28bcc4a60e64363645134f97afc6ce4d.png";function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,p.Z)(e);if(t){var a=(0,p.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,f.Z)(this,n)}}function v(e){var t=e.groups,n=e.activeDate,a=e.selectDateCallback;return t.map((function(e,t){var o=["Domingo","Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado"][new Date(e).getDay()],i=e==n?"shadow-md font-bold":"";return(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)("button",{onClick:function(){return a(e)},className:"bg-gray-50 py-2 px-4 rounded ".concat(i," hover:shadow-lg transition duration-200"),children:o},t)})}))}var m=function(e){(0,d.Z)(n,e);var t=h(n);function n(){return(0,l.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"render",value:function(){return console.log(this.props.groups),(0,r.jsx)("div",{className:"p-2",children:(0,r.jsxs)("div",{className:"flex flex-col items-start space-y-2 xl:space-y-0 xl:flex-row xl:items-center w-full p-4 rounded bg-gray-200 text-gray-700",children:[(0,r.jsxs)("div",{className:"flex space-x-2 items-center",children:[(0,r.jsx)("img",{src:x,width:"40"}),(0,r.jsx)("div",{className:"font-bold",children:this.props.name})]}),(0,r.jsx)("div",{className:"flex-grow"}),(0,r.jsx)("div",{className:"flex flex-wrap",children:(0,r.jsx)(v,{groups:Object.keys(this.props.groups),activeDate:this.props.activeDate,selectDateCallback:this.props.selectDateCallback})})]})})}}]),n}(c.Component);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,p.Z)(e);if(t){var a=(0,p.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,f.Z)(this,n)}}var y=function(e){(0,d.Z)(n,e);var t=g(n);function n(){return(0,l.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"getColors",value:function(e){var t=["text-opacity-80","border-8"],n=["transition","duration-200","hover:border-black","hover:border-opacity-20"],r={"Shirley Ann Jackson":{base:t.concat(["bg-azulEscuro","text-white","border-azulEscuro"]).join(" "),hover:n.concat([]).join(" ")},"Marie Van Brittan Brown":{base:t.concat(["bg-rosa","text-black","border-rosa"]).join(" "),hover:n.concat([]).join(" ")},"Timnit Gebru":{base:t.concat(["bg-amarelo","text-black","border-amarelo"]).join(" "),hover:n.concat([]).join(" ")},"Angelica Ross":{base:t.concat(["bg-azul","text-black","border-azul"]).join(" "),hover:n.concat([]).join(" ")},"Bonnie Prado Pinto":{base:t.concat(["bg-verde","text-black","border-verde"]).join(" "),hover:n.concat([]).join(" ")}};return e?r[e]:{base:t.concat(["text-gray-700","bg-white","border-gray-100"]).join(" "),hover:n.concat(["hover:border-blue-300"]).join(" ")}}},{key:"renderLabel",value:function(e,t){return(0,r.jsxs)("div",{className:"flex",children:[e,(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"bg-black bg-opacity-30 text-white text-opacity-80 px-1 rounded bg-gray-200",children:t})})]})}},{key:"renderLive",value:function(e){return(0,r.jsx)("div",{className:"inline text-red-500 px-1 rounded bg-white hover:text-white hover:bg-red-600 xl:inline-block",children:(0,r.jsx)("a",{href:e,children:"Assistir"})})}},{key:"render",value:function(){var e=this.props.event.location,t=this.props.event.extendedProperties.private.author,n=this.props.event.extendedProperties.private.youtube_channel,a=this.getColors(e);return(0,r.jsxs)("div",{className:"flex xl:flex-1 flex-col space-y-1 py-4 px-4 ".concat(a.base," ").concat(a.hover," ").concat(e),children:[(0,r.jsx)("div",{className:"xl:flex-grow xl:mb-6",children:(0,r.jsx)("div",{className:"font-medium",children:this.props.event.summary})}),(0,r.jsxs)("div",{className:"flex text-sm flex-col space-y-1",children:[t&&this.renderLabel("\ud83d\udc0d",t),e&&this.renderLabel("\ud83d\udccd",e),(0,r.jsx)("div",{className:"flex-grow xl:hidden"}),(0,r.jsxs)("div",{children:["\ud83c\udfac ",this.renderLive(n)]})]})]})}}]),n}(c.Component),b=function(e){(0,d.Z)(n,e);var t=g(n);function n(){return(0,l.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"render",value:function(){var e=this.props.events.map((function(e,t){return(0,r.jsx)(y,{event:e},t)}));return(0,r.jsxs)("div",{className:"flex xl:flex-col items-center rounded bg-gray-200 text-gray-600",children:[(0,r.jsxs)("div",{className:"xl:flex px-6 xl:px-10 py-4 text-lg text-center font-bold",children:[(0,r.jsx)("div",{children:this.props.startHour}),(0,r.jsx)("div",{className:"text-gray-500 px-4",children:"-"}),(0,r.jsx)("div",{children:this.props.endHour})]}),(0,r.jsx)("div",{className:"w-full xl:flex",children:e})]})}}]),n}(c.Component),j=function(e){(0,d.Z)(n,e);var t=g(n);function n(){return(0,l.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"renderSlots",value:function(e){return e.map((function(e,t){var n=e[0];return Object.entries(e[1]).map((function(e,a){var o=e[0],i=e[1];return(0,r.jsx)(b,{startHour:n,endHour:o,events:i},"".concat(t,"-").concat(a,"-").concat(n,"-").concat(o))}))}))}},{key:"render",value:function(){return(0,r.jsx)("div",{className:"xl:max-w-screen-xl xl:mx-auto p-2 space-y-4",children:this.renderSlots(Object.entries(this.props.events))})}}]),n}(c.Component),w=n(9669),k=n.n(w);function N(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(e){e.sort((function(e,t){return e.start.dateTime>t.start.dateTime}));var t,n={},r=(Intl.DateTimeFormat().resolvedOptions().timeZone,N(e));try{for(r.s();!(t=r.n()).done;){var a=t.value,o=new Date(a.start.dateTime),i=new Date(a.end.dateTime),c=o.getFullYear(),s=o.getMonth()+1,l=o.getDate(),u="".concat(c,"/").concat(s,"/").concat(l);console.log("datetime",o),console.log("date",u);var d=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),p="".concat(d,":").concat(f),x=String(i.getHours()).padStart(2,"0"),h=String(i.getMinutes()).padStart(2,"0"),v="".concat(x,":").concat(h);u in n||(n[u]={}),p in n[u]||(n[u][p]=[]),v in n[u][p]||(n[u][p][v]=[]),n[u][p][v].push(a)}}catch(m){r.e(m)}finally{r.f()}return n}function D(){var e=(0,c.useState)(null),t=e[0],n=e[1],a=(0,c.useState)(null),l=a[0],u=a[1],d=(0,c.useState)(null),f=d[0],p=d[1];if((0,c.useEffect)((function(){function e(){return(e=(0,i.Z)(o().mark((function e(){var t,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("https://www.googleapis.com/calendar/v3/calendars/7siodq5un9gqbqd4mmgf2poiqs@group.calendar.google.com/events?key=AIzaSyAIn8DyZFtthupLozgwIX3NUURFMWEIPb4&timeMin=2021-10-11T00%3A00%3A00.000Z&timeMax=2021-10-17T00%3A00%3A00.000Z&singleEvents=true&maxResults=9999&timeZone=UTC");case 2:t=e.sent,r=t.data,a=Z(r.items),n(r),u(a),p(Object.keys(a)[0]);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),!t||!l||!f)return(0,r.jsx)("div",{className:"text-white",children:"loading..."});console.log(f),console.log(l);var x=Intl.DateTimeFormat().resolvedOptions().timeZone;return(0,r.jsxs)("div",{className:"bg-gray-50 h-full",children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Python Brasil 2021"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(m,{name:t.summary,groups:l,activeDate:f,selectDateCallback:p}),(0,r.jsxs)("div",{className:"xl:max-w-screen-xl xl:mx-auto p-2 space-y-4 text-gray-500 text-right",children:["Fuso Hor\xe1rio: ",x]}),(0,r.jsx)(j,{events:l[f]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7679)}])}},function(e){e.O(0,[307,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
