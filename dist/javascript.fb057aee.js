parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"V7tk":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector(".navbar");function t(e){var t=this;if(e.target.classList.contains("navbar__text")){var r=e.target;r.closest(".navbar").querySelectorAll(".navbar__text").forEach(function(e){e!==r&&(e.style.opacity=t)})}}e.addEventListener("mouseover",t.bind(.7)),e.addEventListener("mouseout",t.bind(1))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.menuFade=e;
},{}],"McMQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scroll=void 0;var e=function(){document.querySelector(".navbar").addEventListener("click",function(e){if(e.preventDefault(),e.target.classList.contains("navbar__text")){var t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}})};exports.scroll=e;
},{}],"Arr1":[function(require,module,exports) {
"use strict";function t(t,n){return a(t)||o(t,n)||e(t,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,a=[],i=!0,l=!1;try{for(e=e.call(t);!(i=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==e.return||e.return()}finally{if(l)throw o}}return a}}function a(t){if(Array.isArray(t))return t}function i(){var r=document.querySelectorAll(".section"),e=new IntersectionObserver(function(r,e){var n=t(r,1)[0];n.isIntersecting&&(n.target.classList.remove("section--hidden"),n.target.classList.add("fadeUp"),e.unobserve(n.target))},{root:null,threshold:.15});r.forEach(function(t){e.observe(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.revealSections=i;
},{}],"VetT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.slider=void 0;var t=function(){var t=document.querySelectorAll(".slide"),e=document.querySelector(".slider__btn--left"),o=document.querySelector(".slider__btn--right"),n=document.querySelector(".dots"),r=0,c=t.length,d=function(t){document.querySelectorAll(".dots__dot").forEach(function(t){return t.classList.remove("dots__dot--active")}),document.querySelector('.dots__dot[data-slide="'.concat(t,'"]')).classList.add("dots__dot--active")},s=function(e){t.forEach(function(t,o){return t.style.transform="translateX(".concat(100*(o-e),"%)")})},i=function(){r===c-1?r=0:r++,s(r),d(r)},a=function(){0===r?r=c-1:r--,s(r),d(r)};s(0),t.forEach(function(t,e){n.insertAdjacentHTML("beforeend",'<button class="dots__dot" data-slide="'.concat(e,'"></button>'))}),d(0),o.addEventListener("click",i),e.addEventListener("click",a),document.addEventListener("keydown",function(t){"ArrowLeft"===t.key&&a(),"ArrowRight"===t.key&&i()}),n.addEventListener("click",function(t){if(t.target.classList.contains("dots__dot")){var e=t.target.dataset.slide;s(e),d(e)}})};exports.slider=t;
},{}],"phkL":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector(".hamburger"),t=document.querySelector(".nav-menu");document.querySelectorAll(".nav-item");e.addEventListener("click",function(){e.classList.toggle("active"),t.classList.toggle("active")})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.hamburgerMenu=e;
},{}],"rEqs":[function(require,module,exports) {
"use strict";var e=require("./menuFade.js"),r=require("./smoothScrolling.js"),s=require("./revealSections.js"),i=require("./slider.js"),u=require("./hamburger.js");(0,r.scroll)(),(0,e.menuFade)(),(0,s.revealSections)(),(0,i.slider)(),(0,u.hamburgerMenu)();
},{"./menuFade.js":"V7tk","./smoothScrolling.js":"McMQ","./revealSections.js":"Arr1","./slider.js":"VetT","./hamburger.js":"phkL"}]},{},["rEqs"], null)
//# sourceMappingURL=/javascript.fb057aee.js.map