(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{217:function(t,n,e){"use strict";e.r(n);e(144),e(145),e(51);var i=e(261),o=e(0),a=e(104);n.default=function(){var t=i.data.site.siteMetadata,n=t.listOfRootPaths,e=t.sitemap,r=e.filter(function(t){return t.key===n[0]})[0],s=r.tagged&&"undefined"!=typeof window?r.tagsDropdown.filter(function(t){return window.location.pathname.includes(t.version)})[0].version:"latest",d=r.tagged?"/"+s:"/",u="undefined"==typeof window?d:function(t,n){var e=t.filter(function(t){return window.location.pathname.includes(t)})[0],i=n.filter(function(t){return window.location.pathname.includes(t.key)})[0],o=i.tagged?i.tagsDropdown.filter(function(t){return window.location.pathname.includes(t.version)})[0].version:"";return i.tagged?"/"!==e?e+"/"+o:"/"+o:e}(n.reverse(),e);return Object(o.useEffect)(function(){Object(a.navigate)(u)},[]),null}},261:function(t){t.exports={data:{site:{siteMetadata:{sitemap:[{key:"/",tagged:!0,tagsDropdown:[{version:"latest"},{version:"v16.0"},{version:"v15.0"}]}],listOfRootPaths:["/"]}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-d7a36e82f6cf85420b4f.js.map