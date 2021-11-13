(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),s=(a(0),a(89)),c={id:"common",title:"Common"},l={unversionedId:"api/common",id:"api/common",isDocsHomePage:!1,title:"Common",description:"isEqual",source:"@site/docs/api/common.md",slug:"/api/common",permalink:"/rescript-date/docs/api/common",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/common.md",version:"current",sidebar:"sidebar",previous:{title:"Installation",permalink:"/rescript-date/docs/"},next:{title:"Interval",permalink:"/rescript-date/docs/api/interval"}},o=[{value:"isEqual",id:"isequal",children:[]},{value:"isBefore",id:"isbefore",children:[]},{value:"isAfter",id:"isafter",children:[]},{value:"isFuture",id:"isfuture",children:[]},{value:"isPast",id:"ispast",children:[]},{value:"compareAsc",id:"compareasc",children:[]},{value:"compareDesc",id:"comparedesc",children:[]},{value:"max",id:"max",children:[]},{value:"min",id:"min",children:[]},{value:"isValid",id:"isvalid",children:[]},{value:"closestTo",id:"closestto",children:[]}],i={rightToc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"isequal"},"isEqual"),Object(s.b)("p",null,"Are the given dates equal?"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let isEqual: (Js.Date.t, Js.Date.t) => bool\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let fstDate = Js.Date.makeWithYMD(~year=2018., ~month=0., ~date=1., ())\nlet sndDate = Js.Date.makeWithYMD(~year=2018., ~month=0., ~date=1., ())\n\nfstDate->ReDate.isEqual(sndDate)\n")),Object(s.b)("h3",{id:"isbefore"},"isBefore"),Object(s.b)("p",null,"Is the first date before the second one?"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let isBefore: (Js.Date.t, Js.Date.t) => bool\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let fstDate = Js.Date.makeWithYMD(~year=2018., ~month=0., ~date=1., ())\nlet sndDate = Js.Date.makeWithYMD(~year=2018., ~month=0., ~date=2., ())\n\nfstDate->ReDate.isBefore(sndDate)\n")),Object(s.b)("h3",{id:"isafter"},"isAfter"),Object(s.b)("p",null,"Is the first date after the second one?"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let isAfter: (Js.Date.t, Js.Date.t) => bool\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let fstDate = Js.Date.makeWithYMD(~year=2018., ~month=0., ~date=2., ())\nlet sndDate = Js.Date.makeWithYMD(~year=2018., ~month=0., ~date=1., ())\n\nfstDate->ReDate.isAfter(sndDate)\n")),Object(s.b)("h3",{id:"isfuture"},"isFuture"),Object(s.b)("p",null,"Is the given date in the future?"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let isFuture: Js.Date.t => bool\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMD(~year=2030., ~month=0., ~date=1., ())\n\ndate->ReDate.isFuture\n")),Object(s.b)("h3",{id:"ispast"},"isPast"),Object(s.b)("p",null,"Is the given date in the past?"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let isPast: Js.Date.t => bool\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMD(~year=1999., ~month=0., ~date=1., ())\n\ndate->ReDate.isPast\n")),Object(s.b)("h3",{id:"compareasc"},"compareAsc"),Object(s.b)("p",null,"Compare the two dates and return 1 if the first date is after the second, -1 if the first date is before the second or 0 if dates are equal."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let compareAsc: (Js.Date.t, Js.Date.t) => int\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let a = Js.Date.makeWithYMD(~year=1999., ~month=0., ~date=1., ())\nlet b = Js.Date.makeWithYMD(~year=2017., ~month=2., ~date=1., ())\nlet c = Js.Date.makeWithYMD(~year=2017., ~month=4., ~date=1., ())\nlet d = Js.Date.makeWithYMD(~year=2018., ~month=12., ~date=1., ())\n\nlet unsortedArray = [d, b, c, a]\n\nBelt.SortArray.stableSortBy(unsortedArray, ReDate.compareAsc)\n")),Object(s.b)("h3",{id:"comparedesc"},"compareDesc"),Object(s.b)("p",null,"Compare the two dates and return -1 if the first date is after the second, 1 if the first date is before the second or 0 if dates are equal."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let compareDesc: (Js.Date.t, Js.Date.t) => int\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let a = Js.Date.makeWithYMD(~year=1999., ~month=0., ~date=1., ())\nlet b = Js.Date.makeWithYMD(~year=2017., ~month=2., ~date=1., ())\nlet c = Js.Date.makeWithYMD(~year=2017., ~month=4., ~date=1., ())\nlet d = Js.Date.makeWithYMD(~year=2018., ~month=12., ~date=1., ())\n\nlet unsortedArray = [a, b, d, c]\n\nBelt.SortArray.stableSortBy(unsortedArray, ReDate.compareDesc)\n")),Object(s.b)("h3",{id:"max"},"max"),Object(s.b)("p",null,"Return the latest of the given dates."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let max: array<Js.Date.t> => Js.Date.t\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let a = Js.Date.makeWithYMD(~year=1999., ~month=0., ~date=1., ())\nlet b = Js.Date.makeWithYMD(~year=2017., ~month=2., ~date=1., ())\nlet c = Js.Date.makeWithYMD(~year=2017., ~month=4., ~date=1., ())\nlet d = Js.Date.makeWithYMD(~year=2018., ~month=12., ~date=1., ())\n\nlet dates = [b, c, d, a]\n\ndates->ReDate.max\n")),Object(s.b)("h3",{id:"min"},"min"),Object(s.b)("p",null,"Return the earliest of the given dates."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let min: array<Js.Date.t> => Js.Date.t\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let a = Js.Date.makeWithYMD(~year=1999., ~month=0., ~date=1., ())\nlet b = Js.Date.makeWithYMD(~year=2017., ~month=2., ~date=1., ())\nlet c = Js.Date.makeWithYMD(~year=2017., ~month=4., ~date=1., ())\nlet d = Js.Date.makeWithYMD(~year=2018., ~month=12., ~date=1., ())\n\nlet dates = [b, c, d, a]\n\ndates->ReDate.min\n")),Object(s.b)("h3",{id:"isvalid"},"isValid"),Object(s.b)("p",null,"Is the given date valid?"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let isValid: (~year: float, ~month: float, ~date: float, ~hours: float=?, ~minutes: float=?, ~seconds: float=?, unit) => bool\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"ReDate.isValid(~year=1999., ~month=1., ~date=29., ())\n")),Object(s.b)("h3",{id:"closestto"},"closestTo"),Object(s.b)("p",null,"Return a date from the array closest to the given date."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let closestTo: (Js.Date.t, array<Js.Date.t>) => option<Js.Date.t>\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMD(~year=2018., ~month=0., ~date=1., ())\n\nlet a = Js.Date.makeWithYMD(~year=1999., ~month=0., ~date=1., ())\nlet b = Js.Date.makeWithYMD(~year=2018., ~month=2., ~date=1., ())\nlet c = Js.Date.makeWithYMD(~year=2020., ~month=4., ~date=1., ())\nlet d = Js.Date.makeWithYMD(~year=2022., ~month=12., ~date=1., ())\n\nlet dates = [a, b, c, d]\n\ndate->ReDate.closestTo(dates)\n")))}b.isMDXComponent=!0},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,p=d["".concat(c,".").concat(u)]||d[u]||m[u]||s;return a?r.a.createElement(p,l(l({ref:t},i),{},{components:a})):r.a.createElement(p,l({ref:t},i))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,c=new Array(s);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<s;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);