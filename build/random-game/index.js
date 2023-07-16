!function(){"use strict";var e,n={641:function(e,n,r){var t=window.wp.blocks,o=window.wp.element,l=window.wp.i18n,i=window.wp.blockEditor,a=window.wp.serverSideRender,c=r.n(a),u=window.wp.components;(0,t.registerBlockType)("game-review/random-game",{edit:function(e){let{attributes:n,setAttributes:r}=e;const t=(0,i.useBlockProps)();return(0,o.createElement)("div",t,(0,o.createElement)(i.InspectorControls,null,(0,o.createElement)(u.Panel,null,(0,o.createElement)(u.PanelBody,null,(0,o.createElement)(u.PanelRow,null,(0,o.createElement)(RangeControl,{label:(0,l.__)("Minimum Rating score","game-review-block"),help:(0,l.__)("Review score from 1 to 10. The higher the better.","game-review-block"),onChange:()=>r({min_rating:!n.min_rating}),min:1,max:10,step:1,value:Number(n.min_rating)})),(0,o.createElement)(u.PanelRow,null,(0,o.createElement)(u.FontSizePicker,{fontSizes:[{name:"small",slug:"small",size:26},{name:"big",slug:"big",size:40}],value:parseInt(n.fontsize),fallbackFontSize:26,onChange:e=>r({fontsize:e}),withSlider:!0})),(0,o.createElement)(u.PanelRow,null,(0,o.createElement)(u.ToggleControl,{label:(0,l.__)("Use cache","game-review-block"),help:(0,l.__)("Cache the result for one hour","game-review-block"),checked:n.use_cache,onChange:()=>r({use_cache:!n.use_cache})}))))),(0,o.createElement)(c(),{block:"game-review/random-game",attributes:n}))},save:function(){return null}})}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return n[e](l,l.exports,t),l.exports}t.m=n,e=[],t.O=function(n,r,o,l){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],l=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&l||i>=l)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,l<i&&(i=l));if(a){e.splice(s--,1);var u=o();void 0!==u&&(n=u)}}return n}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[r,o,l]},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={650:0,343:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,l,i=r[0],a=r[1],c=r[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(n&&n(r);u<i.length;u++)l=i[u],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(s)},r=self.webpackChunkgame_review_block=self.webpackChunkgame_review_block||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var o=t.O(void 0,[343],(function(){return t(641)}));o=t.O(o)}();