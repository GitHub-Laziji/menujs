/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu[data-v-497d1621]{position:fixed;box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);background:#fff;border-radius:4px;padding:8px 0}.menu_body[data-v-497d1621]{display:block}.menu_item[data-v-497d1621]{list-style:none;line-height:32px;padding:0 16px;margin:0;font-size:13px;outline:0;display:flex;align-items:center;transition:.2s;border-bottom:1px solid #00000000}.menu_item__divided[data-v-497d1621]{border-bottom-color:#ebeef5}.menu_item .menu_item_icon[data-v-497d1621]{margin-right:8px;width:13px}.menu_item .menu_item_label[data-v-497d1621]{flex:1}.menu_item .menu_item_expand_icon[data-v-497d1621]{margin-left:16px;font-size:6px;width:10px}.menu_item__available[data-v-497d1621]{color:#606266;cursor:pointer}.menu_item__available[data-v-497d1621]:hover{background:#ecf5ff;color:#409eff}.menu_item__disabled[data-v-497d1621]{color:#c0c4cc;cursor:not-allowed}.menu_item_expand[data-v-497d1621]{background:#ecf5ff;color:#409eff}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".contextmenu-submenu-fade-enter-active,.contextmenu-submenu-fade-leave-active{transition:opacity .1s}.contextmenu-submenu-fade-enter,.contextmenu-submenu-fade-leave-to{opacity:0}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(997);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("215cd1c7", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 564:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(768);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("4fa141bd", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ addStylesClient)
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
const external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Submenu.vue?vue&type=template&id=497d1621&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{attrs:{"name":"contextmenu-submenu-fade"}},[(_vm.visible)?_c('div',{ref:"menu",class:[_vm.CLASS_MENU, 'menu', _vm.customClass],style:({ left: _vm.style.left + 'px', top: _vm.style.top + 'px', minWidth: _vm.style.minWidth + 'px', zIndex: _vm.style.zIndex }),on:{"contextmenu":(e) => e.preventDefault()}},[_c('div',{staticClass:"menu_body"},[_vm._l((_vm.items),function(item,index){return [(!item.hidden)?[(item.disabled)?_c('div',{key:index + '_disabled',class:[
            _vm.CLASS_MENU_ITEM, _vm.CLASS_MENU_ITEM_UNCLICKABLE,
            'menu_item', 'menu_item__disabled',
            item.divided ? 'menu_item__divided' : null
          ]},[(_vm.hasIcon)?_c('div',{staticClass:"menu_item_icon"},[(item.icon)?_c('i',{class:item.icon}):_vm._e()]):_vm._e(),_c('span',{staticClass:"menu_item_label"},[_vm._v(_vm._s(item.label))]),_c('div',{staticClass:"menu_item_expand_icon"})]):(item.children)?_c('div',{key:index + '_children',class:[
            _vm.CLASS_MENU_ITEM, _vm.CLASS_MENU_ITEM_UNCLICKABLE,
            'menu_item', 'menu_item__available',
            _vm.activeSubmenu.index === index ? 'menu_item_expand' : null,
            item.divided ? 'menu_item__divided' : null
          ],on:{"mouseenter":($event) => _vm.enterItem($event, item, index)}},[(_vm.hasIcon)?_c('div',{staticClass:"menu_item_icon"},[(item.icon)?_c('i',{class:item.icon}):_vm._e()]):_vm._e(),_c('span',{staticClass:"menu_item_label"},[_vm._v(_vm._s(item.label))]),_c('div',{staticClass:"menu_item_expand_icon"},[_vm._v("▶")])]):_c('div',{key:index,class:[
            _vm.CLASS_MENU_ITEM, _vm.CLASS_MENU_ITEM_CLICKABLE,
            'menu_item', 'menu_item__available',
            item.divided ? 'menu_item__divided' : null
          ],on:{"mouseenter":($event) => _vm.enterItem($event, item, index),"click":function($event){return _vm.itemClick(item)}}},[(_vm.hasIcon)?_c('div',{staticClass:"menu_item_icon"},[(item.icon)?_c('i',{class:item.icon}):_vm._e()]):_vm._e(),_c('span',{staticClass:"menu_item_label"},[_vm._v(_vm._s(item.label))]),_c('div',{staticClass:"menu_item_expand_icon"})])]:_vm._e()]})],2)]):_vm._e()])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/constant.js
const SUBMENU_X_OFFSET = 3;
const SUBMENU_Y_OFFSET = -8;
const SUBMENU_OPEN_TREND_LEFT = "left";
const SUBMENU_OPEN_TREND_RIGHT = "right";
const COMPONENT_NAME = "contextmenu-submenu";
const CLASS_MENU = "contextmenu_menu";
const CLASS_MENU_ITEM = "contextmenu_menu_item";
const CLASS_MENU_ITEM_CLICKABLE = "contextmenu_menu_item_clickable";
const CLASS_MENU_ITEM_UNCLICKABLE = "contextmenu_menu_item_unclickable";
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Submenu.vue?vue&type=script&lang=js&



/* harmony default export */ const Submenuvue_type_script_lang_js_ = ({
  name: COMPONENT_NAME,
  data() {
    return {
      CLASS_MENU: CLASS_MENU,
      CLASS_MENU_ITEM: CLASS_MENU_ITEM,
      CLASS_MENU_ITEM_CLICKABLE: CLASS_MENU_ITEM_CLICKABLE,
      CLASS_MENU_ITEM_UNCLICKABLE: CLASS_MENU_ITEM_UNCLICKABLE,
      activeSubmenu: {
        index: null,
        instance: null
      },
      items: [],
      position: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      style: {
        left: 0,
        top: 0,
        zIndex: 2,
        minWidth: 150
      },
      customClass: null,
      visible: false,
      hasIcon: false,
      openTrend: SUBMENU_OPEN_TREND_RIGHT
    };
  },
  mounted() {
    this.visible = true;
    for (let item of this.items) {
      if (item.icon) {
        this.hasIcon = true;
        break;
      }
    }
    this.$nextTick(() => {
      const windowWidth = document.documentElement.clientWidth;
      const windowHeight = document.documentElement.clientHeight;
      const menu = this.$refs.menu;
      const menuWidth = menu.offsetWidth;
      const menuHeight = menu.offsetHeight;

      (this.openTrend === SUBMENU_OPEN_TREND_LEFT
        ? this.leftOpen
        : this.rightOpen)(windowWidth, windowHeight, menuWidth);

      this.style.top = this.position.y;
      if (this.position.y + menuHeight > windowHeight) {
        if (this.position.height === 0) {
          this.style.top = this.position.y / windowHeight > 0.5 ? (this.position.y - menuHeight) : this.position.y;
        } else {
          this.style.top = windowHeight - menuHeight;
        }
      }
    });
  },
  methods: {
    leftOpen(windowWidth, windowHeight, menuWidth) {
      this.style.left = this.position.x - menuWidth;
      this.openTrend = SUBMENU_OPEN_TREND_LEFT;
      if (this.style.left < 0) {
        this.openTrend = SUBMENU_OPEN_TREND_RIGHT;
        if (this.position.width === 0) {
          this.style.left = 0;
        } else {
          this.style.left = this.position.x + this.position.width;
        }
      }
    },
    rightOpen(windowWidth, windowHeight, menuWidth) {
      this.style.left = this.position.x + this.position.width;
      this.openTrend = SUBMENU_OPEN_TREND_RIGHT;
      if (this.style.left + menuWidth > windowWidth) {
        this.openTrend = SUBMENU_OPEN_TREND_LEFT;
        if (this.position.width === 0) {
          this.style.left = windowWidth - menuWidth;
        } else {
          this.style.left = this.position.x - menuWidth;
        }
      }
    },
    enterItem(e, item, index) {
      if (!this.visible) {
        return;
      }
      if (this.activeSubmenu.instance) {
        if (this.activeSubmenu.index === index) {
          return;
        } else {
          this.activeSubmenu.instance.close();
          this.activeSubmenu.instance = null;
          this.activeSubmenu.index = null;
        }
      }
      if (!item.children) {
        return;
      }
      const menuItemClientRect = e.target.getBoundingClientRect();
      const SubmenuConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default().component(COMPONENT_NAME);
      this.activeSubmenu.index = index;
      this.activeSubmenu.instance = new SubmenuConstructor();
      this.activeSubmenu.instance.items = item.children;
      this.activeSubmenu.instance.openTrend = this.openTrend;
      this.activeSubmenu.instance.position = {
        x: menuItemClientRect.x + SUBMENU_X_OFFSET,
        y: menuItemClientRect.y + SUBMENU_Y_OFFSET,
        width: menuItemClientRect.width - 2 * SUBMENU_X_OFFSET,
        height: menuItemClientRect.height - 2 * SUBMENU_Y_OFFSET
      };
      this.activeSubmenu.instance.style.minWidth =
        typeof item.minWidth === "number" ? item.minWidth : this.style.minWidth;
      this.activeSubmenu.instance.style.zIndex = this.style.zIndex;
      this.activeSubmenu.instance.customClass =
        typeof item.customClass === "string"
          ? item.customClass
          : this.customClass;
      this.activeSubmenu.instance.$mount();
      document.body.appendChild(this.activeSubmenu.instance.$el);
    },
    itemClick(item) {
      if (!this.visible) {
        return;
      }
      if (
        item &&
        !item.disabled &&
        !item.hidden &&
        typeof item.onClick === "function"
      ) {
        return item.onClick();
      }
    },
    close() {
      this.visible = false;
      if (this.activeSubmenu.instance) {
        this.activeSubmenu.instance.close();
      }
      this.$nextTick(() => {
        this.$destroy();
      });
    }
  }
});

;// CONCATENATED MODULE: ./src/components/Submenu.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Submenuvue_type_script_lang_js_ = (Submenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Submenu.vue?vue&type=style&index=0&id=497d1621&prod&scoped=true&lang=css&
var Submenuvue_type_style_index_0_id_497d1621_prod_scoped_true_lang_css_ = __webpack_require__(646);
;// CONCATENATED MODULE: ./src/components/Submenu.vue?vue&type=style&index=0&id=497d1621&prod&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Submenu.vue?vue&type=style&index=1&id=497d1621&prod&lang=css&
var Submenuvue_type_style_index_1_id_497d1621_prod_lang_css_ = __webpack_require__(564);
;// CONCATENATED MODULE: ./src/components/Submenu.vue?vue&type=style&index=1&id=497d1621&prod&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/Submenu.vue



;



/* normalize component */

var component = normalizeComponent(
  components_Submenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "497d1621",
  null
  
)

/* harmony default export */ const Submenu = (component.exports);
;// CONCATENATED MODULE: ./src/util.js
function hasClass(el, className) {
  if (!className) {
    return true;
  }
  if (!el || !el.className || typeof el.className !== 'string') {
    return false;
  }
  for (let cn of el.className.split(/\s+/)) {
    if (cn === className) {
      return true;
    }
  }
  return false;
}

function getElementsByClassName(className) {
  let els = [];
  for (let el of document.getElementsByClassName(className) || []) {
    els.push(el);
  }
  return els;
}

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


;// CONCATENATED MODULE: ./src/index.js






external_commonjs_vue_commonjs2_vue_root_Vue_default().component(COMPONENT_NAME, Submenu);

class Contextmenu {

  constructor(options) {
    const SubmenuConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default().component(COMPONENT_NAME);
    this.instance = new SubmenuConstructor();
    this.instance.items = options.items;
    this.instance.position = {
      x: options.event && options.event.clientX || options.x || 0,
      y: options.event && options.event.clientY || options.y || 0,
      width: 0,
      height: 0
    };
    options.minWidth && (this.instance.style.minWidth = options.minWidth);
    options.zIndex && (this.instance.style.zIndex = options.zIndex);
    this.instance.customClass = options.customClass;
    this.instance.$mount();
    document.body.appendChild(this.instance.$el);
    this.addListener();
  }

  mousewheelListener(e) {
    this.close();
  }

  mouseDownListener(e) {
    let el = e.target;
    const menus = getElementsByClassName(CLASS_MENU);
    while (!menus.find(m => m === el) && el.parentElement) {
      el = el.parentElement;
    }
    if (!menus.find(m => m === el)) {
      this.close();
    }
  }

  mouseClickListener(e) {
    let el = e.target;
    const menus = getElementsByClassName(CLASS_MENU);
    const menuItems = getElementsByClassName(CLASS_MENU_ITEM);
    const unclickableMenuItems = getElementsByClassName(CLASS_MENU_ITEM_UNCLICKABLE);
    while (
      !menus.find(m => m === el) &&
      !menuItems.find(m => m === el) &&
      el.parentElement
    ) {
      el = el.parentElement;
    }
    if (menuItems.find(m => m === el)) {
      if (e.button !== 0 || unclickableMenuItems.find(m => m === el)) {
        return;
      }
      this.close();
      return;
    }
    if (!menus.find(m => m === el)) {
      this.close();
    }
  }

  addListener() {
    this.mouseClickListenerProxy = (e) => this.mouseClickListener(e);
    this.mouseDownListenerProxy = (e) => this.mouseDownListener(e);
    this.mousewheelListenerProxy = (e) => this.mousewheelListener(e);

    document.addEventListener("click", this.mouseClickListenerProxy);
    document.addEventListener("mousedown", this.mouseDownListenerProxy);
    document.addEventListener("mousewheel", this.mousewheelListenerProxy);
  }

  removeListener() {
    document.removeEventListener("click", this.mouseClickListenerProxy);
    document.removeEventListener("mousedown", this.mouseDownListenerProxy);
    document.removeEventListener("mousewheel", this.mousewheelListenerProxy);
  }

  close() {
    this.removeListener();
    this.instance.close();
  }
}

function install(Vue) {
  let last = null;
  const ContextmenuProxy = function (options) {
    ContextmenuProxy.destroy();
    last = new Contextmenu(options);
  }
  ContextmenuProxy.destroy = function () {
    if (last) {
      last.close();
      last = null;
    }
  }
  Vue.prototype.$contextmenu = ContextmenuProxy;
}

if (window && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ const src_0 = ({
  install
});

;// CONCATENATED MODULE: ./index.js


/* harmony default export */ const index = (src_0);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (index);


})();

module.exports = __webpack_exports__;
/******/ })()
;