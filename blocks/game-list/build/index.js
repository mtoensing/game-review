!function(){"use strict";var e,n={62:function(e,n,t){var r=window.wp.blocks,o=window.wp.element,i=window.wp.i18n,a=window.wp.blockEditor,u=window.wp.serverSideRender,l=t.n(u),c=window.wp.components;window.wp.coreData,window.wp.data,(0,r.registerBlockType)("game-review/game-list",{edit:function(e){let{attributes:n,setAttributes:t}=e;const r=(0,a.useBlockProps)();return(0,o.createElement)("div",r,(0,o.createElement)(a.BlockControls,null,(0,o.createElement)(c.ToolbarGroup,null,(0,o.createElement)(c.ToolbarButton,{className:"components-icon-button components-toolbar__control",label:(0,i.__)("Update game list","game-review"),onClick:()=>t({updated:Date.now()}),icon:"update"}))),(0,o.createElement)(l(),{block:"game-review/game-list",attributes:n}))},save:function(e){let{attributes:n}=e;return null}})}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=function(n,t,o,i){if(!t){var a=1/0;for(s=0;s<e.length;s++){t=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,l=0;l<t.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,o,i]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,a=t[0],u=t[1],l=t[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(l)var s=l(r)}for(n&&n(t);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[a[c]]=0;return r.O(s)},t=self.webpackChunkgame_review=self.webpackChunkgame_review||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[431],(function(){return r(62)}));o=r.O(o)}();