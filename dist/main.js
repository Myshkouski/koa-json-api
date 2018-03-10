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

var _exposeContextProps = __webpack_require__(/*! ./middleware/exposeContextProps */ "./src/middleware/exposeContextProps.js");

var _exposeContextProps2 = _interopRequireDefault(_exposeContextProps);

var _ensureErrorHandling = __webpack_require__(/*! ./middleware/ensureErrorHandling */ "./src/middleware/ensureErrorHandling.js");

var _ensureErrorHandling2 = _interopRequireDefault(_ensureErrorHandling);

var _errors = __webpack_require__(/*! ./middleware/errors */ "./src/middleware/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _validateRequest = __webpack_require__(/*! ./middleware/validateRequest */ "./src/middleware/validateRequest.js");

var _validateRequest2 = _interopRequireDefault(_validateRequest);

var _bodyParser = __webpack_require__(/*! ./middleware/bodyParser */ "./src/middleware/bodyParser.js");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function JsonApiRouter(options) {
  const router = new _koaRouter2.default();

  return router.use((0, _ensureErrorHandling2.default)()).use((0, _exposeContextProps2.default)()).use((0, _errors2.default)()).use((0, _bodyParser2.default)()).use((0, _validateRequest2.default)());
}

exports.Router = JsonApiRouter;

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

var _koaBodyparser = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _isDevContext = __webpack_require__(/*! ../helpers/isDevContext */ "./src/helpers/isDevContext.js");

var _isDevContext2 = _interopRequireDefault(_isDevContext);

var _jsonapiMedia = __webpack_require__(/*! ../helpers/jsonapiMedia */ "./src/helpers/jsonapiMedia.js");

var jsonapiMedia = _interopRequireWildcard(_jsonapiMedia);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (options = {}) => (0, _koaBodyparser2.default)({
  strict: true,
  enableTypes: ['json'],
  detectJSON: ctx => {
    const mediaTypes = jsonapiMedia.types(ctx);
    return !!ctx.request.is(...mediaTypes);
  },
  onerror: (ctx, error) => {
    ctx.throw(415, {
      detail: error.message,
      headers: {
        accept: jsonapiMedia.stringify(jsonapiMedia.types(ctx))
      }
    });
  }
});

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

var _isDevContext = __webpack_require__(/*! ../helpers/isDevContext */ "./src/helpers/isDevContext.js");

var _isDevContext2 = _interopRequireDefault(_isDevContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const isDev = (0, _isDevContext2.default)(ctx);
    ctx.status = 501;
    ctx.body = {
      errors: [{
        status: ctx.status,
        title: 'JSON API error',
        details: isDev ? error.message : undefined,
        meta: {
          stack: isDev ? error.stack : undefined
        }
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

var jsonapiMedia = _interopRequireWildcard(_jsonapiMedia);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => async (ctx, next) => {
  const isDev = (0, _isDevContext2.default)(ctx);
  const contentTypes = jsonapiMedia.types(ctx);

  try {
    ctx.assert(ctx.request.accepts(contentTypes), 406);
    if (ctx.request.rawBody && ctx.request.rawBody.length) {
      ctx.assert(ctx.request.is(...contentTypes), 415, {
        headers: {
          accept: jsonapiMedia.stringify(contentTypes)
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
      headers,
      meta
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
      ctx.status = initialError.status;
      if ('meta' in initialError && 'headers' in initialError.meta) {
        ctx.set(initialError.meta.headers);
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

var _jsonApi = __webpack_require__(/*! ../modules/json-api */ "./src/modules/json-api/src/index.js");

var _jsonApi2 = _interopRequireDefault(_jsonApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => async (ctx, next) => {
  ctx.body = {};
  ctx.jsonapi = new _jsonApi2.default({
    body: ctx.body
  });

  await next();
};
// import Store from '@alexeimyshkouski/store'
// import JsonStore from '@alexeimyshkouski/store-json-plugin'
//
//
// const JsonApiPlugin = Store => {
//   Object.assign(Store.prototype, {
//     body() {
//       return this.get('')
//     },
//
//     setMaxErrors(count) {
//       if (typeof count == 'number') {
//         this._state.options.maxErrors = count
//       }
//     },
//
//     error(...args) {
//       const errorPath = '/errors'
//
//       if (!this.has(errorPath)) {
//         this.set(errorPath, [])
//       }
//
//       this._store.errors.push(new Error(...args))
//
//       // this.patch(this._store, [
//       //   op: 'add',
//       //   path: `${ errorPath }/-`,
//       //   value: new Error(...args)
//       // ])
//
//       if (errors.length > this._state.options.maxErrors) {
//         this._state.options.ctx.throw(errors)
//       }
//     }
//   })
//
//   return {
//     init(options) {
//       // if (typeof options.body == 'object') {
//       //   Object.defineProperty(this, '_state', {
//       //     get: () => options.store
//       //   })
//       // }
//
//       this._options = Object.assign({
//         maxErrors: 0
//       }, options)
//     },
//
//     set: {
//       pre: true,
//       apply(path, value) {
//
//       }
//     },
//
//     remove: {
//       pre: true,
//       apply(path) {
//
//       }
//     }
//   }
// }
//
// const JsonApiStore = Store.create().use(JsonApiPlugin)

/***/ }),

/***/ "./src/middleware/validateRequest.js":
/*!*******************************************!*\
  !*** ./src/middleware/validateRequest.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _httpErrors = __webpack_require__(/*! http-errors */ "http-errors");

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _validate = __webpack_require__(/*! ../service/validate */ "./src/service/validate.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapValidationErrors = ({
  message,
  params
}) => ({
  statusCode: 422,
  detail: message
});

exports.default = () => async (ctx, next) => {
  if (ctx.request.rawBody) {
    try {
      await (0, _validate.validate)('/', ctx.request.body);
    } catch (error) {
      throw error.errors.map(mapValidationErrors);
    }
  }

  await next();
};

/***/ }),

/***/ "./src/modules/json-api/src/index.js":
/*!*******************************************!*\
  !*** ./src/modules/json-api/src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fastJsonPatch = __webpack_require__(/*! fast-json-patch */ "fast-json-patch");

var _fastJsonPatch2 = _interopRequireDefault(_fastJsonPatch);

var _jsonPointer = __webpack_require__(/*! json-pointer */ "json-pointer");

var _jsonPointer2 = _interopRequireDefault(_jsonPointer);

var _ajv = __webpack_require__(/*! ajv */ "ajv");

var _ajv2 = _interopRequireDefault(_ajv);

var _schemas = __webpack_require__(/*! ./schemas */ "./src/modules/json-api/src/schemas.yaml");

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ops from './ops'

const ajv = new _ajv2.default({
  schemas: _schemas2.default
});

const noError = doc => {
  if (_jsonPointer2.default.has(doc, '/errors')) {
    throw new Error(`'/errors' has been already set`);
  }
};

class JsonApi {
  constructor({
    body
  }) {
    this.body = typeof body == 'object' ? body : {};
    const keys = ['data', 'meta', 'error'];
    keys.forEach(key => {
      this[key] = JsonApi[key].bind(this, this.body);
    });
  }

  static patch(doc, ops) {
    return _fastJsonPatch2.default.applyPatch(doc, ops).newDocument;
  }

  static data(doc, value) {
    noError(doc);

    const path = '/data';

    const ops = [{
      op: 'replace',
      path,
      value
    }];

    return JsonApi.patch(doc, ops);
  }

  static error(doc, value) {
    const path = '/errors';

    const ops = [{
      op: 'add',
      path: `${path}/-`,
      value
    }];

    if (!_jsonPointer2.default.has(doc, path)) {
      ops.unshift({
        op: 'add',
        path,
        value: []
      });
    }

    if (_jsonPointer2.default.has(doc, '/data')) {
      ops.unshift({
        op: 'remove',
        path: '/included'
      });
      ops.unshift({
        op: 'remove',
        path: '/data'
      });
    }

    return JsonApi.patch(doc, ops);
  }

  static meta(doc, value) {
    noError(doc);

    const path = '/meta';

    const ops = [{
      op: 'add',
      path,
      value
    }];

    return JsonApi.patch(doc, ops);
  }
}

exports.default = JsonApi;

/***/ }),

/***/ "./src/modules/json-api/src/schemas.yaml":
/*!***********************************************!*\
  !*** ./src/modules/json-api/src/schemas.yaml ***!
  \***********************************************/
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

/***/ "./src/schema/jsonapi.yaml":
/*!*********************************!*\
  !*** ./src/schema/jsonapi.yaml ***!
  \*********************************/
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
						"type": "array",
						"items": {
							"$ref": "/error"
						}
					},
					"meta": {
						"$ref": "/meta"
					},
					"links": {
						"type": "array",
						"items": {
							"$ref": "/link"
						}
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
		"type": "object",
		"properties": {
			"id": {
				"type": "string"
			},
			"type": {
				"type": "string"
			},
			"meta": {
				"$ref": "/meta"
			}
		},
		"oneOf": [
			{
				"properties": {
					"attributes": {
						"type": "object"
					},
					"relationships": {
						"type": "array",
						"items": {
							"$ref": "/resource"
						}
					},
					"links": {
						"type": "array",
						"items": {
							"$ref": "/link"
						}
					}
				},
				"allOf": [
					{
						"anyOf": [
							{
								"required": [
									"id"
								]
							},
							{
								"required": [
									"type"
								]
							}
						]
					},
					{
						"anyOf": [
							{
								"required": [
									"attributes"
								]
							},
							{
								"required": [
									"relationships"
								]
							},
							{
								"required": [
									"links"
								]
							},
							{
								"required": [
									"meta"
								]
							}
						]
					}
				]
			},
			{
				"required": [
					"id",
					"type"
				],
				"additionalProperties": false
			}
		]
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
		"$id": "/link",
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

var _jsonapi = __webpack_require__(/*! ../schema/jsonapi */ "./src/schema/jsonapi.yaml");

var _jsonapi2 = _interopRequireDefault(_jsonapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ajv = new _ajv2.default({
  schemas: _jsonapi2.default,
  allErrors: true,
  jsonPointers: true
});
(0, _ajvErrors2.default)(ajv);

const validate = exports.validate = (schemaId, data) => ajv.validate(schemaId, data);
exports.schemas = _jsonapi2.default;

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

/***/ "fast-json-patch":
/*!**********************************!*\
  !*** external "fast-json-patch" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-json-patch");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),

/***/ "json-pointer":
/*!*******************************!*\
  !*** external "json-pointer" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("json-pointer");

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