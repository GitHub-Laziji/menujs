module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "8886");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0327":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e447");
/* harmony import */ var _C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "139e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"menu":"Contextmenu_menu_cYpEk","menu_item":"Contextmenu_menu_item_1DQNs","menu_item__clickable":"Contextmenu_menu_item__clickable_29d8g","menu_item__unclickable":"Contextmenu_menu_item__unclickable_2nbwq"};

/***/ }),

/***/ "6187":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Contextmenu_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("139e");
/* harmony import */ var _C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Contextmenu_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Contextmenu_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Contextmenu_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8886":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e31d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9fd667e4-vue-loader-template"}!C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Contextmenu.vue?vue&type=template&id=daaeeb00&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Contextmenu.vue?vue&type=template&id=daaeeb00&

// CONCATENATED MODULE: ./src/util.js
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


// CONCATENATED MODULE: ./src/constant.js
const SUBMENU_X_OFFSET = 3;
const SUBMENU_Y_OFFSET = -10;
const SUBMENU_OPEN_TREND_LEFT = "left";
const SUBMENU_OPEN_TREND_RIGHT = "right";
const COMPONENT_NAME = "contextmenu-submenu";

// CONCATENATED MODULE: C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Contextmenu.vue?vue&type=script&lang=js&
//
//
//
//




/* harmony default export */ var Contextmenuvue_type_script_lang_js_ = ({
  data() {
    return {
      items: [],
      position: {
        x: 0,
        y: 0
      },
      style: {
        zIndex: 2,
        minWidth: 150
      },
      mainMenuInstance: null,
      customClass: null,
      mouseListening: false
    };
  },
  mounted() {
    const SubmenuConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(COMPONENT_NAME);
    this.mainMenuInstance = new SubmenuConstructor();
    this.mainMenuInstance.items = this.items;
    this.mainMenuInstance.commonClass = {
      menu: this.$style.menu,
      menuItem: this.$style.menu_item,
      clickableMenuItem: this.$style.menu_item__clickable,
      unclickableMenuItem: this.$style.menu_item__unclickable
    };
    this.mainMenuInstance.position = {
      x: this.position.x,
      y: this.position.y,
      width: 0,
      height: 0
    };
    this.mainMenuInstance.style.minWidth = this.style.minWidth;
    this.mainMenuInstance.style.zIndex = this.style.zIndex;
    this.mainMenuInstance.customClass = this.customClass;
    this.mainMenuInstance.$mount();
    document.body.appendChild(this.mainMenuInstance.$el);
    this.addListener();
  },
  destroyed() {
    this.removeListener();
    if (this.mainMenuInstance) {
      this.mainMenuInstance.close();
    }
  },
  methods: {
    mousewheelListener() {
      this.$destroy();
    },
    mouseDownListener(e) {
      let el = e.target;
      const menus = getElementsByClassName(this.$style.menu);
      while (!menus.find(m => m === el) && el.parentElement) {
        el = el.parentElement;
      }
      if (!menus.find(m => m === el)) {
        this.$destroy();
      }
    },
    mouseClickListener(e) {
      let el = e.target;
      const menus = getElementsByClassName(this.$style.menu);
      const menuItems = getElementsByClassName(this.$style.menu_item);
      const unclickableMenuItems = getElementsByClassName(
        this.$style.menu_item__unclickable
      );
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
        this.$destroy();
        return;
      }
      if (!menus.find(m => m === el)) {
        this.$destroy();
      }
    },
    addListener() {
      if (!this.mouseListening) {
        document.addEventListener("click", this.mouseClickListener);
        document.addEventListener("mousedown", this.mouseDownListener);
        document.addEventListener("mousewheel", this.mousewheelListener);
        this.mouseListening = true;
      }
    },
    removeListener() {
      if (this.mouseListening) {
        document.removeEventListener("click", this.mouseClickListener);
        document.removeEventListener("mousedown", this.mouseDownListener);
        document.removeEventListener("mousewheel", this.mousewheelListener);
        this.mouseListening = false;
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/Contextmenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Contextmenuvue_type_script_lang_js_ = (Contextmenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Contextmenu.vue?vue&type=style&index=0&module=true&lang=css&
var Contextmenuvue_type_style_index_0_module_true_lang_css_ = __webpack_require__("6187");

// CONCATENATED MODULE: C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
  if (moduleIdentifier) { // server build
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Contextmenu.vue








function injectStyles (context) {
  
  this["$style"] = (Contextmenuvue_type_style_index_0_module_true_lang_css_["default"].locals || Contextmenuvue_type_style_index_0_module_true_lang_css_["default"])

}

/* normalize component */

var component = normalizeComponent(
  components_Contextmenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  
)

/* harmony default export */ var Contextmenu = (component.exports);
// CONCATENATED MODULE: C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9fd667e4-vue-loader-template"}!C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Submenu.vue?vue&type=template&id=028af332&
var Submenuvue_type_template_id_028af332_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"contextmenu-submenu-fade"}},[(_vm.visible)?_c('div',{ref:"menu",class:[_vm.commonClass.menu, _vm.$style.menu, _vm.customClass],style:({left: _vm.style.left + 'px', top: _vm.style.top + 'px', minWidth: _vm.style.minWidth + 'px', zIndex: _vm.style.zIndex})},[_c('div',{class:_vm.$style.menu_body},[_vm._l((_vm.items),function(item,index){return [(!item.hidden)?[(item.disabled)?_c('div',{key:index,class:[
              _vm.commonClass.menuItem, _vm.commonClass.unclickableMenuItem, 
              _vm.$style.menu_item, _vm.$style.menu_item__disabled
            ]},[(_vm.hasIcon)?_c('div',{class:_vm.$style.menu_item_icon},[(item.icon)?_c('i',{class:item.icon}):_vm._e()]):_vm._e(),_c('span',{class:_vm.$style.menu_item_label},[_vm._v(_vm._s(item.label))]),_c('div',{class:_vm.$style.menu_item_expand_icon})]):(item.children)?_c('div',{key:index,class:[
              _vm.commonClass.menuItem, _vm.commonClass.unclickableMenuItem, 
              _vm.$style.menu_item, _vm.$style.menu_item__available,
              _vm.activeSubmenu.index===index? _vm.$style.menu_item_expand:null
            ],on:{"mouseenter":function ($event){ return _vm.enterItem($event,item,index); }}},[(_vm.hasIcon)?_c('div',{class:_vm.$style.menu_item_icon},[(item.icon)?_c('i',{class:item.icon}):_vm._e()]):_vm._e(),_c('span',{class:_vm.$style.menu_item_label},[_vm._v(_vm._s(item.label))]),_c('div',{class:_vm.$style.menu_item_expand_icon},[_vm._v("▶")])]):_c('div',{key:index,class:[
              _vm.commonClass.menuItem, _vm.commonClass.clickableMenuItem, 
              _vm.$style.menu_item, _vm.$style.menu_item__available
            ],on:{"mouseenter":function ($event){ return _vm.enterItem($event,item,index); },"click":function($event){return _vm.itemClick(item)}}},[(_vm.hasIcon)?_c('div',{class:_vm.$style.menu_item_icon},[(item.icon)?_c('i',{class:item.icon}):_vm._e()]):_vm._e(),_c('span',{class:_vm.$style.menu_item_label},[_vm._v(_vm._s(item.label))]),_c('div',{class:_vm.$style.menu_item_expand_icon})]),(item.divided)?_c('div',{key:(index + "-br"),class:_vm.$style.menu_item_hr}):_vm._e()]:_vm._e()]})],2)]):_vm._e()])}
var Submenuvue_type_template_id_028af332_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Submenu.vue?vue&type=template&id=028af332&

// CONCATENATED MODULE: C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Submenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Submenuvue_type_script_lang_js_ = ({
  name: COMPONENT_NAME,
  data() {
    return {
      commonClass: {
        menu: null,
        menuItem: null,
        clickableMenuItem: null,
        unclickableMenuItem: null
      },
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
          this.style.top = this.position.y - menuHeight;
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
      const SubmenuConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(COMPONENT_NAME);
      this.activeSubmenu.index = index;
      this.activeSubmenu.instance = new SubmenuConstructor();
      this.activeSubmenu.instance.items = item.children;
      this.activeSubmenu.instance.openTrend = this.openTrend;
      this.activeSubmenu.instance.commonClass = this.commonClass;
      this.activeSubmenu.instance.position = {
        x: menuItemClientRect.x + SUBMENU_X_OFFSET,
        y: menuItemClientRect.y + SUBMENU_Y_OFFSET,
        width: menuItemClientRect.width - 2 * SUBMENU_X_OFFSET,
        height: menuItemClientRect.width
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

// CONCATENATED MODULE: ./src/components/Submenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Submenuvue_type_script_lang_js_ = (Submenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Submenu.vue?vue&type=style&index=0&module=true&lang=css&
var Submenuvue_type_style_index_0_module_true_lang_css_ = __webpack_require__("0327");

// EXTERNAL MODULE: ./src/components/Submenu.vue?vue&type=style&index=1&lang=css&
var Submenuvue_type_style_index_1_lang_css_ = __webpack_require__("d66e");

// CONCATENATED MODULE: ./src/components/Submenu.vue









function Submenu_injectStyles (context) {
  
  this["$style"] = (Submenuvue_type_style_index_0_module_true_lang_css_["default"].locals || Submenuvue_type_style_index_0_module_true_lang_css_["default"])

}

/* normalize component */

var Submenu_component = normalizeComponent(
  components_Submenuvue_type_script_lang_js_,
  Submenuvue_type_template_id_028af332_render,
  Submenuvue_type_template_id_028af332_staticRenderFns,
  false,
  Submenu_injectStyles,
  null,
  null
  
)

/* harmony default export */ var Submenu = (Submenu_component.exports);
// CONCATENATED MODULE: ./src/index.js






const ContextmenuConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(Contextmenu);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(COMPONENT_NAME, Submenu);

function install(Vue) {
  Vue.prototype.$contextmenu = (options) => {
    let instance = new ContextmenuConstructor();
    instance.items = options.items;
    instance.position.x = options.x || 0;
    instance.position.y = options.y || 0;
    if (options.event) {
      instance.position.x = options.event.clientX;
      instance.position.y = options.event.clientY;
    }
    instance.customClass = options.customClass;
    options.minWidth && (instance.style.minWidth = options.minWidth);
    options.zIndex && (instance.style.zIndex = options.zIndex);
    instance.$mount();
  }
}

if (window && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var src = ({
  install
});

// CONCATENATED MODULE: ./index.js


/* harmony default export */ var index_0 = (src);
// CONCATENATED MODULE: C:/Users/Laziji/AppData/Roaming/npm/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (index_0);



/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "d66e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e8c4");
/* harmony import */ var _C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_C_Users_Laziji_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e31d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "e447":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"menu":"Submenu_menu_9aRk6","menu_body":"Submenu_menu_body_aOR4U","menu_item":"Submenu_menu_item_1HP51","menu_item_hr":"Submenu_menu_item_hr_35Y3-","menu_item_icon":"Submenu_menu_item_icon_1ovxy","menu_item_label":"Submenu_menu_item_label_3TBz8","menu_item_expand_icon":"Submenu_menu_item_expand_icon_H1En3","menu_item__available":"Submenu_menu_item__available_v_VtQ","menu_item__disabled":"Submenu_menu_item__disabled_zWLFc","menu_item_expand":"Submenu_menu_item_expand_1ajSU"};

/***/ }),

/***/ "e8c4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=contextmenu.common.js.map