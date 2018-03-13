module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/createInitialError.js":
/*!*******************************************!*\
  !*** ./src/helpers/createInitialError.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (error) {
  return (0, _assign2.default)({}, error, {
    message: error.message,
    stack: error.stack
  });
};

module.exports = exports["default"];

/***/ }),

/***/ "./src/helpers/isDevContext.js":
/*!*************************************!*\
  !*** ./src/helpers/isDevContext.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ctx) {
  return ctx.app.env == 'development';
};

module.exports = exports['default'];

/***/ }),

/***/ "./src/helpers/jsonapiMedia.js":
/*!*************************************!*\
  !*** ./src/helpers/jsonapiMedia.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = exports.types = exports.JSON_API_MEDIA_TYPES_DEV = exports.JSON_API_MEDIA_TYPES = undefined;

var _isDevContext = __webpack_require__(/*! ~/helpers/isDevContext */ "./src/helpers/isDevContext.js");

var _isDevContext2 = _interopRequireDefault(_isDevContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JSON_API_MEDIA_TYPES = exports.JSON_API_MEDIA_TYPES = ['application/vnd.api+json'];
var JSON_API_MEDIA_TYPES_DEV = exports.JSON_API_MEDIA_TYPES_DEV = ['application/json'];

var types = exports.types = function types(ctx) {
  return (0, _isDevContext2.default)(ctx) ? [].concat(JSON_API_MEDIA_TYPES, JSON_API_MEDIA_TYPES_DEV) : [].concat(JSON_API_MEDIA_TYPES);
};
var stringify = exports.stringify = function stringify(arrayOfTypes) {
  return arrayOfTypes.filter(function (type) {
    return !!type;
  }).join(',');
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSchemas = exports.Router = undefined;

var _koaRouter = __webpack_require__(/*! koa-router */ "koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _lodash = __webpack_require__(/*! lodash.defaultsdeep */ "lodash.defaultsdeep");

var _lodash2 = _interopRequireDefault(_lodash);

var _jsonApi = __webpack_require__(/*! @alexeimyshkouski/json-api */ "@alexeimyshkouski/json-api");

var _jsonApi2 = _interopRequireDefault(_jsonApi);

var _exposeContextProps = __webpack_require__(/*! ./middleware/exposeContextProps */ "./src/middleware/exposeContextProps.js");

var _exposeContextProps2 = _interopRequireDefault(_exposeContextProps);

var _ensureErrorHandling = __webpack_require__(/*! ./middleware/ensureErrorHandling */ "./src/middleware/ensureErrorHandling.js");

var _ensureErrorHandling2 = _interopRequireDefault(_ensureErrorHandling);

var _errors = __webpack_require__(/*! ./middleware/errors */ "./src/middleware/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _validate = __webpack_require__(/*! ./middleware/validate */ "./src/middleware/validate.js");

var _validate2 = _interopRequireDefault(_validate);

var _bodyParser = __webpack_require__(/*! ./middleware/bodyParser */ "./src/middleware/bodyParser.js");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function JsonApiRouter(options) {
  options = (0, _lodash2.default)({}, options, {
    validate: {
      patch: false,
      request: true,
      response: false
    }
  });

  var router = new _koaRouter2.default(options);

  return router.use((0, _ensureErrorHandling2.default)()).use((0, _exposeContextProps2.default)({ validatePatch: options.validate.patch })).use((0, _errors2.default)()).use((0, _bodyParser2.default)()).use((0, _validate2.default)({
    request: options.validate.request,
    response: options.validate.response
  }));
}

exports.Router = JsonApiRouter;
var getSchemas = exports.getSchemas = function getSchemas(options) {
  return _jsonApi2.default.getSchemas(options);
};

/***/ }),

/***/ "./src/middleware/bodyParser.js":
/*!**************************************!*\
  !*** ./src/middleware/bodyParser.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _koaBodyparser = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _isDevContext = __webpack_require__(/*! ../helpers/isDevContext */ "./src/helpers/isDevContext.js");

var _isDevContext2 = _interopRequireDefault(_isDevContext);

var _jsonapiMedia = __webpack_require__(/*! ../helpers/jsonapiMedia */ "./src/helpers/jsonapiMedia.js");

var jsonapiMedia = _interopRequireWildcard(_jsonapiMedia);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  strict: true,
  enableTypes: ['json'],
  detectJSON: function detectJSON(ctx) {
    var _ctx$request;

    var mediaTypes = jsonapiMedia.types(ctx);
    var isJSON = !!(_ctx$request = ctx.request).is.apply(_ctx$request, (0, _toConsumableArray3.default)(mediaTypes));
    ctx.assert(isJSON, 415);
    return isJSON;
  }
};

exports.default = function (options) {
  var parser = (0, _koaBodyparser2.default)(options);

  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return parser(ctx, (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var rawBody;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        rawBody = ctx.request.rawBody;

                        ctx.state.hasBody = !!(rawBody && rawBody.length);

                      case 2:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              })));

            case 3:
              _context2.next = 8;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2['catch'](0);

              ctx.throw(_context2.t0.statusCode || 415, {
                details: _context2.t0.message,
                headers: {
                  accept: jsonapiMedia.stringify(jsonapiMedia.types(ctx))
                }
              });

            case 8:
              _context2.next = 10;
              return next();

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 5]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

module.exports = exports['default'];

/***/ }),

/***/ "./src/middleware/ensureErrorHandling.js":
/*!***********************************************!*\
  !*** ./src/middleware/ensureErrorHandling.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _httpErrors = __webpack_require__(/*! http-errors */ "http-errors");

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _isDevContext = __webpack_require__(/*! ../helpers/isDevContext */ "./src/helpers/isDevContext.js");

var _isDevContext2 = _interopRequireDefault(_isDevContext);

var _createInitialError = __webpack_require__(/*! ../helpers/createInitialError */ "./src/helpers/createInitialError.js");

var _createInitialError2 = _interopRequireDefault(_createInitialError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
      var isDev, errors, _error;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return next();

            case 3:
              _context.next = 12;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context['catch'](0);
              isDev = (0, _isDevContext2.default)(ctx);
              errors = [];


              if (_context.t0.status) {
                errors.push((0, _assign2.default)({
                  status: _context.t0.status
                }, _context.t0));
              } else {
                _error = new _httpErrors2.default(500, {
                  detail: 'JSON API implementation error',
                  meta: isDev ? {
                    initialError: (0, _createInitialError2.default)(_context.t0)
                  } : undefined
                });


                errors.push((0, _assign2.default)({
                  status: _error.status
                }, _error));
              }

              ctx.status = errors[0].status;
              ctx.body = {
                errors: errors
              };

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 5]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

module.exports = exports['default'];

/***/ }),

/***/ "./src/middleware/errors.js":
/*!**********************************!*\
  !*** ./src/middleware/errors.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _httpErrors = __webpack_require__(/*! http-errors */ "http-errors");

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _isDevContext = __webpack_require__(/*! ../helpers/isDevContext */ "./src/helpers/isDevContext.js");

var _isDevContext2 = _interopRequireDefault(_isDevContext);

var _jsonapiMedia = __webpack_require__(/*! ../helpers/jsonapiMedia */ "./src/helpers/jsonapiMedia.js");

var jsonapiMedia = _interopRequireWildcard(_jsonapiMedia);

var _createInitialError = __webpack_require__(/*! ../helpers/createInitialError */ "./src/helpers/createInitialError.js");

var _createInitialError2 = _interopRequireDefault(_createInitialError);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapErrorsToJsonApiErrors = function mapErrorsToJsonApiErrors(isDev) {
  return function (error) {
    var id = error.id,
        status = error.status,
        expose = error.expose,
        message = error.message,
        detail = error.detail,
        stack = error.stack,
        headers = error.headers,
        meta = error.meta;


    var jsonapiError = {
      id: error.id,
      status: error.status
    };

    if (isDev || expose) {
      (0, _assign2.default)(jsonapiError, {
        title: message,
        detail: detail
      });
    }

    if (isDev || headers) {
      var jsonapiMeta = (0, _assign2.default)({}, meta, {
        headers: headers,
        stack: isDev ? stack : undefined
      });

      (0, _assign2.default)(jsonapiError, {
        meta: jsonapiMeta
      });
    }

    return jsonapiError;
  };
};

exports.default = function () {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
      var isDev, contentTypes, errors, initialError;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isDev = (0, _isDevContext2.default)(ctx);
              contentTypes = jsonapiMedia.types(ctx);
              _context.prev = 2;
              _context.next = 5;
              return next();

            case 5:
              _context.next = 15;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](2);
              errors = Array.isArray(_context.t0) ? _context.t0 : [_context.t0];
              initialError = errors[0];


              if (!initialError.status) {
                ctx.throw(500, {
                  detail: 'Initial error has no status code. Assuming it is an implementation error.',
                  meta: {
                    initialError: (0, _createInitialError2.default)(initialError)
                  }
                });
              }

              errors = errors.map(mapErrorsToJsonApiErrors(isDev));

              if (errors.length > 1) {
                if (initialError.status >= 500) {
                  ctx.status = 500;
                } else if (initialError.status >= 400) {
                  ctx.status = 400;
                }
              } else {
                ctx.status = initialError.status;
                if ('meta' in initialError && 'headers' in initialError.meta) {
                  ctx.set(initialError.meta.headers);
                }
              }

              ctx.body = {
                errors: errors
              };

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[2, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

module.exports = exports['default'];

/***/ }),

/***/ "./src/middleware/exposeContextProps.js":
/*!**********************************************!*\
  !*** ./src/middleware/exposeContextProps.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperties = __webpack_require__(/*! babel-runtime/core-js/object/define-properties */ "babel-runtime/core-js/object/define-properties");

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonApi = __webpack_require__(/*! @alexeimyshkouski/json-api */ "@alexeimyshkouski/json-api");

var _jsonApi2 = _interopRequireDefault(_jsonApi);

var _jsonapiMedia = __webpack_require__(/*! ../helpers/jsonapiMedia */ "./src/helpers/jsonapiMedia.js");

var jsonapiMedia = _interopRequireWildcard(_jsonapiMedia);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = ['data', 'meta', 'links'];
var mapKeys = function mapKeys(value, keys) {
  if (!value) {
    return value;
  }

  return keys.reduce(function (_value, key) {
    _value[key] = value[key];
    return _value;
  }, {});
};

exports.default = function (options) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {
      var mediaTypes;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ctx.body = {};
              mediaTypes = jsonapiMedia.types(ctx);


              ctx.jsonapi = new _jsonApi2.default((0, _assign2.default)({}, options, {
                body: ctx.body
              }));

              (0, _defineProperties2.default)(ctx, {
                rel: {
                  value: function value() {}
                }
              });

              (0, _defineProperties2.default)(ctx, properties.reduce(function (descriptor, prop) {
                descriptor[prop] = {
                  value: function () {
                    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                      var path,
                          value,
                          options,
                          _value,
                          _args = arguments;

                      return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              path = '', value = void 0, options = {};


                              if (typeof (_args.length <= 0 ? undefined : _args[0]) == 'string') {
                                path = _args.length <= 0 ? undefined : _args[0];
                                value = _args.length <= 1 ? undefined : _args[1];

                                if (_args.length > 2) {
                                  options = _args.length <= 2 ? undefined : _args[2];
                                }
                              } else {
                                value = _args.length <= 0 ? undefined : _args[0];
                                if (_args.length > 1) {
                                  options = _args.length <= 1 ? undefined : _args[1];
                                }
                              }

                              _value = void 0;


                              if ('keys' in options) {
                                if (Array.isArray(value)) {
                                  _value = value.map(function (item) {
                                    return mapKeys(item, options.keys);
                                  });
                                } else {
                                  _value = mapKeys(value, options.keys);
                                }
                              } else {
                                _value = value;
                              }

                              _context.next = 6;
                              return ctx.jsonapi.add('/' + prop + path, _value);

                            case 6:
                              return _context.abrupt('return', _context.sent);

                            case 7:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));

                    function value() {
                      return _ref2.apply(this, arguments);
                    }

                    return value;
                  }()
                };

                return descriptor;
              }, {}));

              _context2.next = 7;
              return next();

            case 7:

              ctx.set('content-type', mediaTypes[0] + ';charset=utf-8');

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

module.exports = exports['default'];

/***/ }),

/***/ "./src/middleware/validate.js":
/*!************************************!*\
  !*** ./src/middleware/validate.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonApi = __webpack_require__(/*! @alexeimyshkouski/json-api */ "@alexeimyshkouski/json-api");

var _jsonApi2 = _interopRequireDefault(_jsonApi);

var _lodash = __webpack_require__(/*! lodash.defaultsdeep */ "lodash.defaultsdeep");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  options = (0, _lodash2.default)({}, options, {
    request: true,
    response: false
  });

  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(options.request && ctx.state.hasBody)) {
                _context.next = 9;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return _jsonApi2.default.validate(ctx.request.body);

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context['catch'](1);

              ctx.throw(422, {
                detail: 'ValidationError: request body is not valid',
                meta: _context.t0.reasons
              });

            case 9:
              _context.next = 11;
              return next();

            case 11:
              if (!options.response) {
                _context.next = 21;
                break;
              }

              _context.prev = 12;
              _context.next = 15;
              return _jsonApi2.default.validate(ctx.body);

            case 15:
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t1 = _context['catch'](12);

              (0, _assign2.default)({
                detail: 'ValidationError: response body is not valid',
                meta: _context.t1.reasons
              });

              throw _context.t1;

            case 21:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 6], [12, 17]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

module.exports = exports['default'];

/***/ }),

/***/ "@alexeimyshkouski/json-api":
/*!*********************************************!*\
  !*** external "@alexeimyshkouski/json-api" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@alexeimyshkouski/json-api");

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/*!******************************************************!*\
  !*** external "babel-runtime/core-js/object/assign" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ "babel-runtime/core-js/object/define-properties":
/*!*****************************************************************!*\
  !*** external "babel-runtime/core-js/object/define-properties" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/define-properties");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/toConsumableArray":
/*!**********************************************************!*\
  !*** external "babel-runtime/helpers/toConsumableArray" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "lodash.defaultsdeep":
/*!**************************************!*\
  !*** external "lodash.defaultsdeep" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.defaultsdeep");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map