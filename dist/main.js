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

exports.default = ctx => ctx.app.env == 'development';

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

const JSON_API_MEDIA_TYPES = exports.JSON_API_MEDIA_TYPES = ['application/vnd.api+json'];
const JSON_API_MEDIA_TYPES_DEV = exports.JSON_API_MEDIA_TYPES_DEV = ['application/json'];

const types = exports.types = ctx => (0, _isDevContext2.default)(ctx) ? [...JSON_API_MEDIA_TYPES, ...JSON_API_MEDIA_TYPES_DEV] : [...JSON_API_MEDIA_TYPES];
const stringify = exports.stringify = arrayOfTypes => arrayOfTypes.filter(type => !!type).join(',');

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
exports.Router = undefined;

var _koaRouter = __webpack_require__(/*! koa-router */ "koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBodyparser = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _exposeContextProps = __webpack_require__(/*! ./middleware/exposeContextProps */ "./src/middleware/exposeContextProps.js");

var _exposeContextProps2 = _interopRequireDefault(_exposeContextProps);

var _ensureErrorHandling = __webpack_require__(/*! ./middleware/ensureErrorHandling */ "./src/middleware/ensureErrorHandling.js");

var _ensureErrorHandling2 = _interopRequireDefault(_ensureErrorHandling);

var _errors = __webpack_require__(/*! ./middleware/errors */ "./src/middleware/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _validate = __webpack_require__(/*! ./service/validate */ "./src/service/validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function JsonApiRouter(options) {
  const router = new _koaRouter2.default();

  return router.use((0, _exposeContextProps2.default)()).use((0, _ensureErrorHandling2.default)()).use((0, _errors2.default)()).use((0, _koaBodyparser2.default)());
}

exports.Router = JsonApiRouter;

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

var _isDevContext = __webpack_require__(/*! ~/helpers/isDevContext */ "./src/helpers/isDevContext.js");

var _isDevContext2 = _interopRequireDefault(_isDevContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const isDev = (0, _isDevContext2.default)(ctx);
    ctx.status = 500;
    ctx.body = {
      errors: [{
        status: 500,
        title: 'JSON API error',
        details: isDev ? error.message : undefined
      }]
    };
  }
};

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

var _isDevContext = __webpack_require__(/*! ../helpers/isDevContext */ "./src/helpers/isDevContext.js");

var _isDevContext2 = _interopRequireDefault(_isDevContext);

var _jsonapiMedia = __webpack_require__(/*! ../helpers/jsonapiMedia */ "./src/helpers/jsonapiMedia.js");

var _jsonapiMedia2 = _interopRequireDefault(_jsonapiMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => async (ctx, next) => {
  const isDev = (0, _isDevContext2.default)(ctx);
  const contentTypes = _jsonapiMedia2.default.types(ctx);

  try {
    ctx.assert(ctx.request.accepts(contentTypes), 406);
    if (ctx.request.rawBody && ctx.request.rawBody.length) {
      ctx.assert(ctx.request.is(...contentTypes), 415, {
        headers: {
          accept: _jsonapiMedia2.default.stringify(contentTypes)
        }
      });
    }

    ctx.state.errors = [];

    await next();

    if (Array.isArray(ctx.state.errors) && ctx.state.errors.length) {
      throw ctx.state.errors;
    }
  } catch (errorOrErrors) {
    const errors = (Array.isArray(errorOrErrors) ? errorOrErrors : [errorOrErrors]).map(({
      id,
      statusCode: status,
      expose,
      message,
      detail,
      stack,
      headers
    }) => ({
      id,
      status,
      title: expose ? message : undefined,
      detail,
      meta: isDev || headers ? {
        headers,
        stack: isDev ? stack : undefined
      } : undefined
    }));

    const initialError = errors[0];

    if (errors.length > 1) {
      if (initialError.status >= 500) {
        ctx.status = 500;
      } else if (initialError.status >= 400) {
        ctx.status = 400;
      }
    } else {
      if ('meta' in initialError && 'headers' in initialError.meta) {
        for (let key in initialError.meta.headers) {
          ctx.set(key, initialError.meta.headers[key]);
        }
      }
    }

    ctx.body = {
      errors
    };
  } finally {
    ctx.type = contentTypes[0];
  }
};

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

var _httpErrors = __webpack_require__(/*! http-errors */ "http-errors");

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _store = __webpack_require__(/*! @alexeimyshkouski/store */ "@alexeimyshkouski/store");

var _store2 = _interopRequireDefault(_store);

var _storeJsonPlugin = __webpack_require__(/*! @alexeimyshkouski/store-json-plugin */ "@alexeimyshkouski/store-json-plugin");

var _storeJsonPlugin2 = _interopRequireDefault(_storeJsonPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OPTIONS = Symbol('options');

const JsonApiPlugin = Store => {
  Object.assign(Store.prototype, {
    body() {
      return this.get('');
    },

    setMaxErrors(count) {
      if (typeof count == 'number') {
        this[OPTIONS].maxErrors = count;
      }
    },

    throw(...args) {
      const errorPath = '/errors';

      if (!this.has(errorPath)) {
        this.set(errorPath, []);
      }

      this[Store.symbols.STORE].errors.push(new _httpErrors2.default(...args));

      // this.patch(this[Store.symbols.STORE], [
      //   op: 'add',
      //   path: `${ errorPath }/-`,
      //   value: new Error(...args)
      // ])

      if (errors.length > this[OPTIONS].maxErrors) {
        this[OPTIONS].ctx.throw(errors);
      }
    }
  });

  return {
    init(options) {
      this[OPTIONS] = Object.assign({
        maxErrors: 0
      }, options);
    },

    set: {
      pre: true,
      apply(path, value) {}
    },

    remove: {
      pre: true,
      apply(path) {}
    }
  };
};

const JsonApiStore = _store2.default.create().use(JsonApiPlugin);

exports.default = () => async (ctx, next) => {
  ctx.jsonapi = new JsonApiStore();

  await next();
};

/***/ }),

/***/ "./src/schema/body.yaml":
/*!******************************!*\
  !*** ./src/schema/body.yaml ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
	{
		"$id": "/",
		"$async": true,
		"allOf": [
			{
				"anyOf": [
					{
						"required": [
							"data"
						]
					},
					{
						"required": [
							"errors"
						]
					},
					{
						"required": [
							"meta"
						]
					}
				],
				"errorMessage": "A document MUST contain at least one of the following top-level members"
			},
			{
				"not": {
					"anyOf": [
						{
							"required": [
								"errors",
								"data"
							],
							"errorMessage": "The members data and errors MUST NOT coexist in the same document"
						},
						{
							"allOf": [
								{
									"not": {
										"required": [
											"data"
										]
									}
								},
								{
									"required": [
										"included"
									]
								}
							],
							"errorMessage": "If a document does not contain a top-level 'data' key, the 'included' member MUST NOT be present either"
						}
					]
				}
			},
			{
				"type": "object",
				"properties": {
					"data": {
						"$ref": "/data"
					},
					"errors": {
						"$ref": "/errors"
					},
					"meta": {
						"$ref": "/meta"
					},
					"links": {
						"$ref": "/links"
					},
					"included": {
						"$ref": "/included"
					},
					"jsonapi": {
						"type": "object"
					}
				},
				"additionalProperties": false,
				"errorMessage": {
					"type": "A JSON object MUST be at the root of every JSON API request and response containing data",
					"additionalProperties": "Unless otherwise noted, objects defined by this specification MUST NOT contain any additional members"
				}
			}
		]
	},
	{
		"$id": "/data",
		"oneOf": [
			{
				"$ref": "/resource"
			},
			{
				"$ref": "/included"
			},
			{
				"type": "null"
			}
		]
	},
	{
		"$id": "/errors",
		"type": "array",
		"items": {
			"$ref": "/error"
		}
	},
	{
		"$id": "/included",
		"type": "array",
		"items": {
			"$ref": "/resource"
		}
	},
	{
		"$id": "/resource",
		"type": "object"
	},
	{
		"$id": "/error",
		"type": "object"
	},
	{
		"$id": "/meta",
		"type": "object"
	},
	{
		"$id": "/links",
		"type": "object"
	}
];

/***/ }),

/***/ "./src/service/validate.js":
/*!*********************************!*\
  !*** ./src/service/validate.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemas = exports.validate = undefined;

var _ajv = __webpack_require__(/*! ajv */ "ajv");

var _ajv2 = _interopRequireDefault(_ajv);

var _ajvErrors = __webpack_require__(/*! ajv-errors */ "ajv-errors");

var _ajvErrors2 = _interopRequireDefault(_ajvErrors);

var _body = __webpack_require__(/*! ~/schema/body */ "./src/schema/body.yaml");

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ajv = new _ajv2.default({
  schemas: _body2.default,
  allErrors: true,
  jsonPointers: true
});
(0, _ajvErrors2.default)(ajv);

const validate = exports.validate = (schemaId, data) => ajv.validate(schemaId, data);
exports.schemas = _body2.default;

// ---

const data = {
  meta: {},
  included: []
};

const res = ajv.validate('/', data).then(data => console.log('ok', data)).catch(err => console.dir(...err.errors));

/***/ }),

/***/ "@alexeimyshkouski/store":
/*!******************************************!*\
  !*** external "@alexeimyshkouski/store" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@alexeimyshkouski/store");

/***/ }),

/***/ "@alexeimyshkouski/store-json-plugin":
/*!******************************************************!*\
  !*** external "@alexeimyshkouski/store-json-plugin" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@alexeimyshkouski/store-json-plugin");

/***/ }),

/***/ "ajv":
/*!**********************!*\
  !*** external "ajv" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ajv");

/***/ }),

/***/ "ajv-errors":
/*!*****************************!*\
  !*** external "ajv-errors" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ajv-errors");

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

/***/ })

/******/ });
//# sourceMappingURL=main.js.map