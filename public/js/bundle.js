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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(7);

exports.default = {
  seat: function seat(props) {
    var backgroundColor = props.color;
    var color = '#' + (parseInt(backgroundColor.replace('#', ''), 16) ^ 0xFFFFFF | 0x1000000).toString(16).substring(1);

    var style = {
      opacity: props.thisUser || props.selected ? 1 : 0.65,
      border: props.selected ? '2px dashed ' + color : '2px solid #ffffff',
      backgroundColor: backgroundColor,
      color: color
    };

    return React.createElement(
      'button',
      {
        className: 'buttonSeat',
        'data-seat': props.seat,
        style: style,
        onClick: props.onClick
      },
      props.seat
    );
  },
  reset: function reset(props) {
    return React.createElement(
      'button',
      {
        className: 'btn btn-default buttonReset',
        style: { display: props.marksCounter == 0 ? 'none' : 'block' },
        onClick: props.onClick
      },
      '\u0421\u043D\u044F\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435'
    );
  },
  signUp: function signUp(props) {
    return React.createElement(
      'button',
      {
        className: 'btn btn-default',
        onClick: props.onClick
      },
      '\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F'
    );
  },
  logIn: function logIn(props) {
    return React.createElement(
      'button',
      { className: 'btn btn-default', onClick: props.onClick },
      '\u0412\u043E\u0439\u0442\u0438'
    );
  },
  logOut: function logOut(props) {
    return React.createElement(
      'button',
      { className: 'btn btn-default buttonLogout', onClick: props.onClick },
      React.createElement('span', { className: 'glyphicon glyphicon-log-out' })
    );
  },
  reserv: function reserv(props) {
    var flag = props.marksCounter > 0 ? 'buttonReserv-plus' : 'buttonReserv-minus';
    var className = 'btn btn-default buttonReserv ' + flag;
    var style = { display: props.marksCounter == 0 ? 'none' : 'block' };
    var text = props.marksCounter > 0 ? 'Забронировать' : 'Снять бронь';
    return React.createElement(
      'button',
      {
        className: className,
        style: style,
        onClick: props.onClick
      },
      text
    );
  },
  purchase: function purchase(props) {
    var showIt = _typeof(props.user) == 'object' && props.seats.length !== 0;
    var text = showIt ? 'ID' + props.user.userID + ': ' + props.seats.toString() : 'Ничего не забронировано';
    return React.createElement(
      'button',
      {
        className: 'btn btn-default',
        disabled: !showIt
      },
      text
    );
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function defaultRequest(type, request, sending, callback) {
  var xhr = new window.XMLHttpRequest();
  xhr.open(type, request);
  if (type == 'POST') {
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(sending));
  } else {
    xhr.send();
  }
  xhr.onload = function (event) {
    switch (event.target.status) {
      case 200:
        callback(event.target.responseText);
        break;
      default:
        window.alert('Ошибка ' + event.target.responseText);
    }
  };
}

var server = {
  auth: {
    signUp: function signUp(data, callback) {
      defaultRequest('POST', '/api/auth/signup', data, callback);
    },
    logIn: function logIn(data, callback) {
      defaultRequest('POST', '/api/auth/login', data, callback);
    },
    logOut: function logOut(callback) {
      defaultRequest('GET', '/api/auth/logout', null, callback);
    },
    getUser: function getUser(callback) {
      defaultRequest('GET', '/api/auth/user', null, callback);
    }
  },
  action: {
    getSeats: function getSeats(callback) {
      defaultRequest('GET', '/api/action/reserv', null, callback);
    },
    setReserv: function setReserv(data, callback) {
      defaultRequest('POST', '/api/action/reserv', data, callback);
    },
    resetAll: function resetAll(callback) {
      defaultRequest('GET', '/api/action/resetAll', null, callback);
    }
  }
};

exports.default = server;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderApp = function renderApp(Component) {
  window.ReactDOM.render(React.createElement(Component, null), document.getElementById('content'));
};

renderApp(_App2.default);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Auth = __webpack_require__(6);

var _Auth2 = _interopRequireDefault(_Auth);

var _Booking = __webpack_require__(12);

var _Booking2 = _interopRequireDefault(_Booking);

var _Purchase = __webpack_require__(13);

var _Purchase2 = _interopRequireDefault(_Purchase);

var _serverInterface = __webpack_require__(3);

var _serverInterface2 = _interopRequireDefault(_serverInterface);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

var App = function (_window$React$Compone) {
  _inherits(App, _window$React$Compone);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      user: getCookie('user'),
      seats: []
    };
    _this.changeUser = _this.changeUser.bind(_this);
    _this.changeBooking = _this.changeBooking.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'changeUser',
    value: function changeUser(newData) {
      this.setState({ user: newData });
    }
  }, {
    key: 'changeBooking',
    value: function changeBooking(newData) {
      this.setState({ seats: newData });
    }
  }, {
    key: 'resetAll',
    value: function resetAll() {
      _serverInterface2.default.action.resetAll(function () {});
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'App-mainContainer', align: 'center' },
        React.createElement(
          'div',
          { className: 'App-content' },
          React.createElement(
            'h1',
            { className: 'App-header' },
            'Cinema Booking'
          ),
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-xs-12 col-md-4' },
              React.createElement(_Auth2.default, { user: this.state.user, onChange: this.changeUser })
            ),
            React.createElement(
              'div',
              { className: 'col-xs-12 visible-xs visible-sm' },
              React.createElement('hr', { size: '2' })
            ),
            React.createElement(
              'div',
              { className: 'col-xs-12 col-md-4' },
              React.createElement(_Booking2.default, { user: this.state.user, maxReserv: Number(getCookie('maxReserv')) || 5, onChange: this.changeBooking })
            ),
            React.createElement(
              'div',
              { className: 'col-xs-12 visible-xs visible-sm' },
              React.createElement('hr', { size: '2' })
            ),
            React.createElement(
              'div',
              { className: 'col-xs-12 col-md-4' },
              React.createElement(_Purchase2.default, { user: this.state.user, seats: this.state.seats })
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'App-footer', style: { display: _typeof(this.state.user) == 'object' ? 'block' : 'none' } },
          React.createElement(
            'button',
            {
              className: 'btn btn-default',
              onClick: this.resetAll },
            '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u044B'
          )
        )
      );
    }
  }]);

  return App;
}(window.React.Component);

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Buttons = __webpack_require__(0);

var _Buttons2 = _interopRequireDefault(_Buttons);

var _serverInterface = __webpack_require__(3);

var _serverInterface2 = _interopRequireDefault(_serverInterface);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_window$React$Compone) {
  _inherits(Auth, _window$React$Compone);

  function Auth(props) {
    _classCallCheck(this, Auth);

    var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this, props));

    _this.email = '';
    _this.password = '';
    _this.logIn = _this.logIn.bind(_this);
    _this.signUp = _this.signUp.bind(_this);
    _this.logOut = _this.logOut.bind(_this);
    _this.getUser = _this.getUser.bind(_this);
    if (typeof _this.props.user == 'string') _this.getUser();
    return _this;
  }

  _createClass(Auth, [{
    key: 'logIn',
    value: function logIn() {
      if (this.email.trim() && this.password.trim()) _serverInterface2.default.auth.logIn({ email: this.email, password: this.password }, this.getUser);
    }
  }, {
    key: 'signUp',
    value: function signUp() {
      if (this.email.trim() && this.password.trim()) _serverInterface2.default.auth.signUp({ email: this.email, password: this.password }, this.getUser);
    }
  }, {
    key: 'logOut',
    value: function logOut() {
      var _this2 = this;

      _serverInterface2.default.auth.logOut(function () {
        _this2.props.onChange(undefined);
      });
    }
  }, {
    key: 'getUser',
    value: function getUser() {
      var _this3 = this;

      _serverInterface2.default.auth.getUser(function (resp) {
        _this3.props.onChange(JSON.parse(resp));
      });
    }
  }, {
    key: 'tabToggle',
    value: function tabToggle(event) {
      event.preventDefault();
      window.$(event.target).tab('show');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var setEmail = function setEmail(e) {
        _this4.email = e.target.value;
      };
      var setPassword = function setPassword(e) {
        _this4.password = e.target.value;
      };

      if (_typeof(this.props.user) == 'object') {
        var backGround = this.props.user.color;
        var color = '#' + (parseInt(backGround.replace('#', ''), 16) ^ 0xFFFFFF | 0x1000000).toString(16).substring(1);
        var style = { backgroundColor: backGround, color: color, borderColor: color };
        return React.createElement(
          'div',
          { className: 'Auth-panel', align: 'left' },
          React.createElement(
            'p',
            null,
            this.props.user.email,
            React.createElement(_Buttons2.default.logOut, { onClick: this.logOut })
          ),
          React.createElement(
            'p',
            null,
            'ID: ',
            this.props.user.userID
          ),
          React.createElement(
            'p',
            null,
            '\u0426\u0432\u0435\u0442 \u0431\u0440\u043E\u043D\u0438: ',
            React.createElement(
              'span',
              { className: 'Auth-colorState', style: style },
              this.props.user.color
            )
          )
        );
      } else {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'ul',
            { className: 'nav nav-tabs', id: 'navTab' },
            React.createElement(
              'li',
              { className: 'active' },
              React.createElement(
                'a',
                { href: '#authin', onClick: this.tabToggle },
                '\u0412\u0445\u043E\u0434'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: '#authup', onClick: this.tabToggle },
                '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'Auth-panel Auth-panel-signOut' },
            React.createElement(
              'div',
              null,
              React.createElement('input', { type: 'email', className: 'form-control Auth-fields', placeholder: 'email', onChange: setEmail }),
              React.createElement('input', { type: 'password', className: 'form-control Auth-fields', placeholder: 'password', onChange: setPassword })
            ),
            React.createElement(
              'div',
              { className: 'tab-content' },
              React.createElement(
                'div',
                { className: 'tab-pane active', id: 'authin' },
                React.createElement(_Buttons2.default.logIn, { onClick: this.logIn })
              ),
              React.createElement(
                'div',
                { className: 'tab-pane', id: 'authup' },
                React.createElement(_Buttons2.default.signUp, { onClick: this.signUp })
              )
            )
          )
        );
      }
    }
  }]);

  return Auth;
}(window.React.Component);

exports.default = Auth;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./Buttons.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./Buttons.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".buttonSeat {\n  width: 40px;\n  height: 40px;\n  border-radius: 0.4em;\n}\n.buttonReset {\n  width: 100%;\n  margin-top: 10px;\n}\n.buttonLogout {\n  float: right;\n}\n.buttonReserv {\n  width: 100%;\n  margin-top: 10px;\n}\n.buttonReserv-plus {\n  background: forestgreen;\n  color: lawngreen;\n}\n.buttonReserv-minus {\n  background: darkred;\n  color: indianred;\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./Auth.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./Auth.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".Auth-panel {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 1em;\n}\n.Auth-panel-signOut {\n  border-top-color: transparent;\n  border-radius: 0 0 4px 4px;\n}\n.Auth-fields {\n  margin-top: 1em;\n  margin-bottom: 1em;\n  border-top-color: white;\n  border-left-color: white;\n  border-right-color: white;\n  box-shadow: none;\n}\n.Auth-colorState {\n  border: 1px solid black;\n  border-radius: 0.4em;\n  padding: 4px;\n}\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _serverInterface = __webpack_require__(3);

var _serverInterface2 = _interopRequireDefault(_serverInterface);

var _Buttons = __webpack_require__(0);

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socket = window.io();

var Booking = function (_window$React$Compone) {
  _inherits(Booking, _window$React$Compone);

  function Booking(props) {
    _classCallCheck(this, Booking);

    var _this = _possibleConstructorReturn(this, (Booking.__proto__ || Object.getPrototypeOf(Booking)).call(this, props));

    _this.state = {
      user: undefined,
      seats: false,
      userBooking: 0,

      marks: [],
      marksCounter: 0,

      maxReserv: _this.props.maxReserv || 5,
      rows: 5,
      cols: 5,

      lastMessage: 'Выберите места'
    };
    _this.checkReserv = _this.checkReserv.bind(_this);
    _this.marksReset = _this.marksReset.bind(_this);
    _this.changeState = _this.changeState.bind(_this);
    _this.sendNewReservToServer = _this.sendNewReservToServer.bind(_this);
    _this.getSeatsFromServer();
    socket.on('reserv', _this.changeState).on('free', _this.changeState).on('connect_error', socket.close);
    return _this;
  }

  _createClass(Booking, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.user != nextProps.user) {
        this.setState({ user: nextProps.user }, this.countUserBooking);
      }
    }
  }, {
    key: 'getSeatsFromServer',
    value: function getSeatsFromServer() {
      var _this2 = this;

      _serverInterface2.default.action.getSeats(function (resp) {
        _this2.setState({ seats: JSON.parse(resp) }, _this2.countUserBooking);
      });
    }
  }, {
    key: 'sendNewReservToServer',
    value: function sendNewReservToServer() {
      var _this3 = this;

      var sending = {
        reserv: this.state.marks,
        flag: this.state.marksCounter > 0
      };
      _serverInterface2.default.action.setReserv(sending, function (success) {
        _this3.marksReset();
        var objSuccess = JSON.parse(success);
        var answer = objSuccess.flag ? 'Успешно забронированы места: ' : 'Успешно отменена бронь мест: ';
        answer += objSuccess.seats.toString();
        _this3.setState({ lastMessage: answer });
      });
    }
  }, {
    key: 'countUserBooking',
    value: function countUserBooking() {
      if (_typeof(this.state.user) == 'object' && this.state.seats != false) {
        var len = this.state.seats.length;
        var reserved = [];
        for (var i = 0; i < len; i++) {
          if (this.state.seats[i].reserv == this.state.user.userID) reserved.push(this.state.seats[i].seatID);
        }
        this.setState({ userBooking: reserved.length });
        this.props.onChange(reserved);
      } else {
        this.setState({ userBooking: 0, lastMessage: 'Выберите места' });
        this.marksReset();
      }
    }
  }, {
    key: 'changeState',
    value: function changeState(data) {
      if (this.state.seats) {
        var seats = data.seats,
            userRes = data.userRes,
            color = data.color;

        var newSeats = this.state.seats.map(function (seat, index) {
          if (seats.indexOf(index + 1) != -1) {
            seat.reserv = userRes || 0;
            seat.color = color || '#FFFFFF';
          }
          return seat;
        });
        this.setState({ seats: newSeats }, this.countUserBooking);
      }
    }
  }, {
    key: 'checkReserv',
    value: function checkReserv(event) {
      if (_typeof(this.state.user) == 'object' && this.state.seats != false) {
        var num = Number(event.target.getAttribute('data-seat'));
        var earlyMarkedThisSession = this.state.marks.indexOf(num) != -1;
        var freeSeat = this.state.seats[num - 1].reserv == 0;
        var noLimitBooking = this.state.userBooking + this.state.marks.length < this.state.maxReserv;
        var bookingPlus = this.state.marksCounter >= 0;
        var bookingMinus = this.state.marksCounter <= 0;
        var prevSessionBookingSeat = this.state.seats[num - 1].reserv == this.state.user.userID;

        var newMarksCounter = this.state.marksCounter;
        if (earlyMarkedThisSession) {
          this.state.marksCounter > 0 ? newMarksCounter-- : newMarksCounter++;
          this.markDown(num);
        } else if (freeSeat && noLimitBooking && bookingPlus && !earlyMarkedThisSession) {
          newMarksCounter++;
          this.markUp(num);
        } else if (prevSessionBookingSeat && bookingMinus) {
          newMarksCounter--;
          this.markUp(num);
        }
        this.setState({
          marksCounter: newMarksCounter
        });
      }
    }
  }, {
    key: 'markUp',
    value: function markUp(num) {
      var newMarks = this.state.marks.slice();
      newMarks.push(num);
      this.setState({
        marks: newMarks
      });
    }
  }, {
    key: 'markDown',
    value: function markDown(num) {
      var newMarks = this.state.marks.slice();
      newMarks.splice(newMarks.indexOf(num), 1);
      this.setState({
        marks: newMarks
      });
    }
  }, {
    key: 'marksReset',
    value: function marksReset() {
      this.setState({
        marks: [],
        marksCounter: 0
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var rows = new Array(Number(this.state.rows)).fill(0);
      var cols = new Array(Number(this.state.cols)).fill(0);
      var divs = rows.map(function (r0, indexRow) {
        return React.createElement(
          'div',
          { key: indexRow + 1 },
          cols.map(function (c0, indexCol, arr) {
            var numSeat = indexRow * arr.length + indexCol + 1;
            var selected = _this4.state.marks.indexOf(numSeat) != -1;
            var thisUser = _typeof(_this4.state.user) == 'object' && _this4.state.seats ? _this4.state.seats[numSeat - 1].reserv == _this4.state.user.userID : false;

            var color = _this4.state.seats ? _this4.state.seats[numSeat - 1].color : '#ffffff';
            return React.createElement(_Buttons2.default.seat, {
              key: numSeat,
              seat: numSeat,
              color: color,

              selected: selected,
              thisUser: thisUser,
              onClick: _this4.checkReserv
            });
          })
        );
      });

      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          '\u041C\u0435\u0441\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0434\u043B\u044F \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F: ',
          this.state.maxReserv - this.state.userBooking
        ),
        React.createElement(
          'p',
          null,
          this.state.lastMessage
        ),
        React.createElement(
          'div',
          { className: 'Grid' },
          divs
        ),
        React.createElement(_Buttons2.default.reset, { marksCounter: this.state.marksCounter, onClick: this.marksReset }),
        React.createElement(_Buttons2.default.reserv, { marksCounter: this.state.marksCounter, onClick: this.sendNewReservToServer })
      );
    }
  }]);

  return Booking;
}(window.React.Component);

exports.default = Booking;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Buttons = __webpack_require__(0);

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Purchase = function (_window$React$Compone) {
  _inherits(Purchase, _window$React$Compone);

  function Purchase() {
    _classCallCheck(this, Purchase);

    return _possibleConstructorReturn(this, (Purchase.__proto__ || Object.getPrototypeOf(Purchase)).apply(this, arguments));
  }

  _createClass(Purchase, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          '\u041E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443 \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043C\u0435\u0441\u0442?'
        ),
        React.createElement(_Buttons2.default.purchase, { user: this.props.user, seats: this.props.seats })
      );
    }
  }]);

  return Purchase;
}(window.React.Component);

exports.default = Purchase;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./App.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./App.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".App-mainContainer {\n  padding: 1em;\n}\n.App-header {\n  text-align: center;\n  font-weight: 100;\n  color: grey;\n  text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.5);\n  margin-bottom: 1em;\n}\n.App-footer {\n  margin-top: 2em;\n  background-color: #333333;\n  padding: 1em;\n}\n", ""]);

// exports


/***/ })
/******/ ]);