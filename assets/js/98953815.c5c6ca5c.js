"use strict";(self.webpackChunkrescript_date_docs=self.webpackChunkrescript_date_docs||[]).push([[311],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=o(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||c[p]||s;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8584:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],u={id:"minute",title:"Minute"},l=void 0,o={unversionedId:"api/minute",id:"api/minute",isDocsHomePage:!1,title:"Minute",description:"addMinutes",source:"@site/docs/api/minute.md",sourceDirName:"api",slug:"/api/minute",permalink:"/rescript-date/docs/api/minute",editUrl:"https://github.com/mobily/rescript-date/edit/master/docs/docs/api/minute.md",tags:[],version:"current",lastUpdatedAt:1636805091,formattedLastUpdatedAt:"11/13/2021",frontMatter:{id:"minute",title:"Minute"},sidebar:"sidebar",previous:{title:"Second",permalink:"/rescript-date/docs/api/second"},next:{title:"Hour",permalink:"/rescript-date/docs/api/hour"}},d=[{value:"addMinutes",id:"addminutes",children:[],level:3},{value:"subMinutes",id:"subminutes",children:[],level:3},{value:"getMinutes",id:"getminutes",children:[],level:3},{value:"setMinutes",id:"setminutes",children:[],level:3},{value:"differenceInMinutes",id:"differenceinminutes",children:[],level:3},{value:"startOfMinute",id:"startofminute",children:[],level:3},{value:"endOfMinute",id:"endofminute",children:[],level:3},{value:"isSameMinute",id:"issameminute",children:[],level:3},{value:"roundToNearestMinute",id:"roundtonearestminute",children:[],level:3}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"addminutes"},"addMinutes"),(0,s.kt)("p",null,"Add the specified number of minutes to the given date."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let addMinutes: (Js.Date.t, float) => Js.Date.t\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=1., ~hours=19., ~minutes=30., ~seconds=30., ())\n\ndate->ReDate.addMinutes(1)\n")),(0,s.kt)("h3",{id:"subminutes"},"subMinutes"),(0,s.kt)("p",null,"Subtract the specified number of minutes from the given date."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let subMinutes: (Js.Date.t, float) => Js.Date.t\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=1., ~hours=19., ~minutes=30., ~seconds=30., ())\n\ndate->ReDate.subMinutes(1)\n")),(0,s.kt)("h3",{id:"getminutes"},"getMinutes"),(0,s.kt)("p",null,"Get the minutes of the given date."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let getMinutes: Js.Date.t => float\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=1., ~hours=19., ~minutes=30., ~seconds=30., ());\n\ndate->ReDate.getMinutes\n")),(0,s.kt)("h3",{id:"setminutes"},"setMinutes"),(0,s.kt)("p",null,"Set the minutes to the given date."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let setMinutes: (Js.Date.t, float) => Js.Date.t\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=1., ~hours=19., ~minutes=30., ~seconds=0., ());\n\ndate->ReDate.setMinutes(30.)\n")),(0,s.kt)("h3",{id:"differenceinminutes"},"differenceInMinutes"),(0,s.kt)("p",null,"Get the number of minutes between the given dates."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let differenceInMinutes: (Js.Date.t, Js.Date.t) => float\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let fstDate = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=1., ~hours=19., ~minutes=40., ~seconds=15., ())\nlet sndDate = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=1., ~hours=19., ~minutes=30., ~seconds=0., ())\n\nfstDate->ReDate.differenceInMinutes(sndDate)\n")),(0,s.kt)("h3",{id:"startofminute"},"startOfMinute"),(0,s.kt)("p",null,"Return the start of a minute for the given date."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let startOfMinute: Js.Date.t => Js.Date.t\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=8., ~date=10., ~hours=8., ~minutes=20., ~seconds=35., ())\n\ndate->ReDate.startOfMinute\n")),(0,s.kt)("h3",{id:"endofminute"},"endOfMinute"),(0,s.kt)("p",null,"Return the end of a minute for the given date."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let endOfMinute: Js.Date.t => Js.Date.t\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=8., ~date=10., ~hours=8., ~minutes=20., ~seconds=35., ())\n\ndate->ReDate.endOfMinute\n")),(0,s.kt)("h3",{id:"issameminute"},"isSameMinute"),(0,s.kt)("p",null,"Are the given dates in the same minute?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let isSameMinute: (Js.Date.t, Js.Date.t) => bool\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let fstDate = Js.Date.makeWithYMDHMS(~year=2018., ~month=8., ~date=10., ~hours=19., ~minutes=6., ~seconds=10., ())\nlet sndDate = Js.Date.makeWithYMDHMS(~year=2018., ~month=8., ~date=10., ~hours=19., ~minutes=6., ~seconds=35., ())\n\nfstDate->ReDate.isSameMinute(sndDate)\n")),(0,s.kt)("h3",{id:"roundtonearestminute"},"roundToNearestMinute"),(0,s.kt)("p",null,"Rounds the given date to the nearest minute."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let roundToNearestMinute: (~nearestTo: float=?, Js.Date.t) => Js.Date.t\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=8., ~date=10., ~hours=19., ~minutes=6., ~seconds=31., ())\n\ndate->ReDate.roundToNearestMinute\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=8., ~date=10., ~hours=19., ~minutes=12., ~seconds=10., ())\nlet roundToNearest15Minute = ReDate.roundToNearestMinute(~nearestTo=15.)\n\ndate->roundToNearest15Minute\n")))}m.isMDXComponent=!0}}]);