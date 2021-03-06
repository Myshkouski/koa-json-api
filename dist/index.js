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

/***/ "../json-api/src/index.js":
/*!********************************!*\
  !*** ../json-api/src/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _json8Patch = __webpack_require__(/*! json8-patch */ "json8-patch");

var _json8Patch2 = _interopRequireDefault(_json8Patch);

var _defaultsDeep = __webpack_require__(/*! lodash/defaultsDeep */ "lodash/defaultsDeep");

var _defaultsDeep2 = _interopRequireDefault(_defaultsDeep);

var _validate2 = __webpack_require__(/*! ./validate */ "../json-api/src/validate.js");

var _mapValidationErrors = __webpack_require__(/*! ./mapValidationErrors */ "../json-api/src/mapValidationErrors.js");

var _mapValidationErrors2 = _interopRequireDefault(_mapValidationErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JsonApi = function () {
  (0, _createClass3.default)(JsonApi, null, [{
    key: 'validate',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var ref,
            body,
            _args = arguments;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ref = '/', body = _args.length <= 0 ? undefined : _args[0];

                if (_args.length > 1) {
                  ref = _args.length <= 0 ? undefined : _args[0];
                  body = _args.length <= 1 ? undefined : _args[1];
                }

                _context.prev = 2;
                _context.next = 5;
                return (0, _validate2.validate)(ref, body);

              case 5:
                return _context.abrupt('return', _context.sent);

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](2);
                throw {
                  message: 'Validation error',
                  reasons: _context.t0.errors.map(_mapValidationErrors2.default)
                };

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function validate() {
        return _ref.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: 'get',
    value: function get(doc, path) {
      return _json8Patch2.default.get(doc, path);
    }
  }, {
    key: 'has',
    value: function has(doc, path) {
      return _json8Patch2.default.has(doc, path);
    }
  }, {
    key: 'patch',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(body, ops) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var res, reverted;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = (0, _defaultsDeep2.default)({}, options, {
                  reversible: false
                });

                res = void 0;
                _context2.prev = 2;
                _context2.prev = 3;

                res = _json8Patch2.default.apply(body, ops, options);
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](3);

                _context2.t0.detail = 'Cannot apply JSON patch';

                throw _context2.t0;

              case 11:
                if (!options.validatePatch) {
                  _context2.next = 21;
                  break;
                }

                _context2.prev = 12;
                _context2.next = 15;
                return JsonApi.validate(res.doc);

              case 15:
                _context2.next = 21;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t1 = _context2['catch'](12);

                _context2.t1.detail = 'Document validation failed after patch has been applied';

                throw _context2.t1;

              case 21:
                _context2.next = 28;
                break;

              case 23:
                _context2.prev = 23;
                _context2.t2 = _context2['catch'](2);

                if (options.reversible) {
                  reverted = _json8Patch2.default.revert(body, res.revert).doc;


                  _context2.t2.doc = reverted;
                }

                _context2.t2.ops = ops;

                throw _context2.t2;

              case 28:
                return _context2.abrupt('return', res);

              case 29:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 23], [3, 7], [12, 17]]);
      }));

      function patch(_x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return patch;
    }()
  }, {
    key: 'add',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(body, path, value, options) {
        var ops;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ops = [{ op: 'add', path: path, value: value }];
                _context3.next = 3;
                return JsonApi.patch(body, ops, options);

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function add(_x4, _x5, _x6, _x7) {
        return _ref3.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: 'getSchemas',
    value: function getSchemas(options) {
      options = (0, _defaultsDeep2.default)({}, options, {
        type: 'schema',
        id: '$id'
      });

      var schemas = (0, _validate2.getSchemas)();
      return (0, _keys2.default)(schemas).reduce(function (array, key, index) {
        var schema = {};

        if (options.id == 'index') {
          schema.id = index;
        } else {
          schema.id = schemas[key][options.id];
        }

        schema.type = options.type;

        schema.attributes = schemas[key];

        array.push(schema);

        return array;
      }, []);
    }
  }]);

  function JsonApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, JsonApi);

    this.options = {};

    if ('body' in options) {
      if ((0, _typeof3.default)(options.body) != 'object') {
        throw new Error('\'options.body\' should be a JSON object');
      }
      this.body = options.body;
    } else {
      this.body = {};
    }

    if ('validatePatch' in options) {
      if (typeof options.validatePatch != 'boolean') {
        throw new Error('\'options.validatePatch\' should be \'true\' or \'false\'');
      }
      this.options.validatePatch = options.validatePatch;
    } else {
      this.options.validatePatch = false;
    }
  }

  (0, _createClass3.default)(JsonApi, [{
    key: "get",
    value: function get(path) {
      return JsonApi.get(this.body, path);
    }
  }, {
    key: 'has',
    value: function has(path) {
      return JsonApi.has(this.body, path);
    }
  }, {
    key: 'validate',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return JsonApi.validate(this.body);

              case 2:
                return _context4.abrupt('return', _context4.sent);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function validate() {
        return _ref4.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: 'patch',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(ops) {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return JsonApi.patch(this.body, ops, this.options);

              case 2:
                return _context5.abrupt('return', _context5.sent);

              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function patch(_x9) {
        return _ref5.apply(this, arguments);
      }

      return patch;
    }()
  }, {
    key: 'add',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(path, value) {
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return JsonApi.add(this.body, path, value, this.options);

              case 2:
                return _context6.abrupt('return', _context6.sent);

              case 3:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function add(_x10, _x11) {
        return _ref6.apply(this, arguments);
      }

      return add;
    }()
  }]);
  return JsonApi;
}();

exports.default = JsonApi;
module.exports = exports['default'];

/***/ }),

/***/ "../json-api/src/mapValidationErrors.js":
/*!**********************************************!*\
  !*** ../json-api/src/mapValidationErrors.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (error) {
  return {
    message: error.message,
    path: error.dataPath,
    schema: error.parentSchema.$id
  };
};

module.exports = exports["default"];

/***/ }),

/***/ "../json-api/src/schemas.yaml":
/*!************************************!*\
  !*** ../json-api/src/schemas.yaml ***!
  \************************************/
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
				"errorMessage": "A document MUST contain at least one of the following top-level members: 'data', 'errors', 'meta'"
			},
			{
				"not": {
					"required": [
						"errors",
						"data"
					]
				},
				"errorMessage": "The members data and errors MUST NOT coexist in the same document"
			},
			{
				"not": {
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
					]
				},
				"errorMessage": "If a document does not contain a top-level 'data' key, the 'included' member MUST NOT be present either"
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
		],
		"errorMessage": "Primary data MUST be either a single resource object, or a single resource identifier object, or null, for requests that target single resources, or an array of resource objects, or an array of resource identifier objects, or an empty array for requests that target resource collections"
	},
	{
		"$id": "/errors",
		"type": "array",
		"items": {
			"$ref": "/error"
		},
		"errorMessage": {
			"type": "Error objects MUST be returned as an array keyed by errors in the top level of a JSON API document"
		}
	},
	{
		"$id": "/links",
		"type": "object",
		"patternProperties": {
			"^.*": {
				"$ref": "/link"
			}
		},
		"additionalProperties": false,
		"errorMessage": {
			"type": "The value of each 'links' member MUST be an object"
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
				"type": "string",
				"errorMessage": "The values of the 'id' member MUST be strings"
			},
			"type": {
				"type": "string",
				"errorMessage": "The values of the 'type' member MUST be strings"
			},
			"meta": {
				"$ref": "/meta"
			},
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
				"$ref": "/links"
			}
		},
		"required": [
			"id",
			"type"
		],
		"additionalProperties": false,
		"errorMessage": {
			"required": "Every resource object MUST contain an 'id' member and a 'type' member"
		}
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
		"oneOf": [
			{
				"type": [
					"string"
				]
			},
			{
				"type": [
					"object"
				],
				"properties": {
					"href": {
						"type": "string",
						"errorMessage": "Member 'href' should be a string containing the link’s URL."
					},
					"meta": {
						"$ref": "/meta"
					}
				},
				"additionalProperties": false
			}
		],
		"errorMessage": "A 'link' MUST be represented either a string containing the link’s URL, or an object which can contain the 'href' and 'meta' members"
	}
];

/***/ }),

/***/ "../json-api/src/validate.js":
/*!***********************************!*\
  !*** ../json-api/src/validate.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSchemas = exports.addSchema = exports.validate = undefined;

var _ajv = __webpack_require__(/*! ajv */ "ajv");

var _ajv2 = _interopRequireDefault(_ajv);

var _ajvErrors = __webpack_require__(/*! ajv-errors */ "ajv-errors");

var _ajvErrors2 = _interopRequireDefault(_ajvErrors);

var _schemas = __webpack_require__(/*! ./schemas */ "../json-api/src/schemas.yaml");

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ajv = new _ajv2.default({
  schemas: _schemas2.default,
  verbose: true,
  allErrors: true,
  jsonPointers: true
});
(0, _ajvErrors2.default)(ajv, {});

var validate = exports.validate = function validate(ref, data) {
  return ajv.validate(ref, data);
};
var addSchema = exports.addSchema = function addSchema(schemas) {
  return ajv.addShema(schema);
};
var getSchemas = exports.getSchemas = function getSchemas(refs) {
  var schemas = {};

  for (var key in ajv._schemas) {
    schemas[key] = ajv._schemas[key].schema;
  }

  return schemas;
};

/***/ }),

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
              if (!ctx.jsonapi.has('/errors')) {
                _context.next = 7;
                break;
              }

              throw ctx.jsonapi.get('/errors');

            case 7:
              _context.next = 17;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](2);
              errors = Array.isArray(_context.t0) ? _context.t0 : [_context.t0];
              initialError = errors[0];


              if (!initialError.status) {
                ctx.throw(501, {
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

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[2, 9]]);
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

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperties = __webpack_require__(/*! babel-runtime/core-js/object/define-properties */ "babel-runtime/core-js/object/define-properties");

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonApi = __webpack_require__(/*! test@alexeimyshkouski/json-api */ "../json-api/src/index.js");

var _jsonApi2 = _interopRequireDefault(_jsonApi);

var _defaultsDeep = __webpack_require__(/*! lodash/defaultsDeep */ "lodash/defaultsDeep");

var _defaultsDeep2 = _interopRequireDefault(_defaultsDeep);

var _pick = __webpack_require__(/*! lodash/pick */ "lodash/pick");

var _pick2 = _interopRequireDefault(_pick);

var _jsonapiMedia = __webpack_require__(/*! ../helpers/jsonapiMedia */ "./src/helpers/jsonapiMedia.js");

var jsonapiMedia = _interopRequireWildcard(_jsonapiMedia);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataPath = '/data';
var includedPath = '/included';
var errorsPath = '/errors';

var properties = ['data', 'meta', 'links'];
// const pick = (value, keys) => {
//   if (!value) {
//     return value
//   }
//
//   return keys
//     .reduce((_value, key) => {
//       _value[key] = value[key]
//       return _value
//     }, {})
// }

var transformDict = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(value, dict) {
    var array, index, obj, _key, error;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof dict == 'string')) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', _jsonApi2.default.get(value, dict));

          case 4:
            if (!Array.isArray(dict)) {
              _context.next = 17;
              break;
            }

            array = [];
            _context.t0 = _regenerator2.default.keys(dict);

          case 7:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 14;
              break;
            }

            index = _context.t1.value;
            _context.next = 11;
            return transformDict(value[key], dict[index]);

          case 11:
            array[key] = _context.sent;
            _context.next = 7;
            break;

          case 14:
            return _context.abrupt('return', array);

          case 17:
            if (!((typeof dict === 'undefined' ? 'undefined' : (0, _typeof3.default)(dict)) == 'object')) {
              _context.next = 30;
              break;
            }

            obj = (0, _assign2.default)({}, value);
            _context.t2 = _regenerator2.default.keys(dict);

          case 20:
            if ((_context.t3 = _context.t2()).done) {
              _context.next = 27;
              break;
            }

            _key = _context.t3.value;
            _context.next = 24;
            return transformDict(value[_key], dict[_key]);

          case 24:
            obj[_key] = _context.sent;
            _context.next = 20;
            break;

          case 27:
            return _context.abrupt('return', obj);

          case 30:
            error = new TypeError('Canot apply dictionary to document');

            error.doc = value;
            error.dict = dict;
            throw error;

          case 34:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function transformDict(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = function (options) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(ctx, next) {
      var mediaTypes;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              ctx.body = {};
              mediaTypes = jsonapiMedia.types(ctx);


              ctx.jsonapi = new _jsonApi2.default((0, _assign2.default)({}, options, {
                body: ctx.body
              }));

              (0, _defineProperties2.default)(ctx, {
                data: {
                  value: function () {
                    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                      var path,
                          value,
                          options,
                          ops,
                          _value,
                          _iteratorNormalCompletion,
                          _didIteratorError,
                          _iteratorError,
                          _iterator,
                          _step,
                          item,
                          _args2 = arguments;

                      return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              path = dataPath, value = void 0, options = {};

                              if (typeof (_args2.length <= 0 ? undefined : _args2[0]) == 'string') {
                                path += _args2.length <= 0 ? undefined : _args2[0];
                                value = _args2.length <= 1 ? undefined : _args2[1];

                                if (_args2.length > 2) {
                                  options = _args2.length <= 2 ? undefined : _args2[2];
                                }
                              } else {
                                value = _args2.length <= 0 ? undefined : _args2[0];
                                if (_args2.length > 1) {
                                  options = _args2.length <= 1 ? undefined : _args2[1];
                                }
                              }

                              options = (0, _defaultsDeep2.default)({}, options, {});

                              ops = [];

                              if (!('dict' in options)) {
                                _context2.next = 42;
                                break;
                              }

                              if (!Array.isArray(value)) {
                                _context2.next = 39;
                                break;
                              }

                              _value = [];
                              _iteratorNormalCompletion = true;
                              _didIteratorError = false;
                              _iteratorError = undefined;
                              _context2.prev = 10;
                              _iterator = (0, _getIterator3.default)(value);

                            case 12:
                              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context2.next = 22;
                                break;
                              }

                              item = _step.value;
                              _context2.t0 = _value;
                              _context2.next = 17;
                              return transformDict(item, options.dict);

                            case 17:
                              _context2.t1 = _context2.sent;

                              _context2.t0.push.call(_context2.t0, _context2.t1);

                            case 19:
                              _iteratorNormalCompletion = true;
                              _context2.next = 12;
                              break;

                            case 22:
                              _context2.next = 28;
                              break;

                            case 24:
                              _context2.prev = 24;
                              _context2.t2 = _context2['catch'](10);
                              _didIteratorError = true;
                              _iteratorError = _context2.t2;

                            case 28:
                              _context2.prev = 28;
                              _context2.prev = 29;

                              if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                              }

                            case 31:
                              _context2.prev = 31;

                              if (!_didIteratorError) {
                                _context2.next = 34;
                                break;
                              }

                              throw _iteratorError;

                            case 34:
                              return _context2.finish(31);

                            case 35:
                              return _context2.finish(28);

                            case 36:
                              value = _value;
                              _context2.next = 42;
                              break;

                            case 39:
                              _context2.next = 41;
                              return transformDict(value, options.dict);

                            case 41:
                              value = _context2.sent;

                            case 42:

                              if ('defaults' in options) {
                                if (Array.isArray(value)) {
                                  value = value.map(function (item) {
                                    return (0, _defaultsDeep2.default)(undefined, item, options.defaults);
                                  });
                                } else {
                                  value = (0, _defaultsDeep2.default)(undefined, value, options.defaults);
                                }
                              }

                              if ('keys' in options) {
                                if (Array.isArray(value)) {
                                  value = value.map(function (item) {
                                    return (0, _pick2.default)(item, options.keys);
                                  });
                                } else {
                                  value = (0, _pick2.default)(value, options.keys);
                                }
                              }

                              if (this.jsonapi.has(path)) {
                                ops.unshift({ op: 'replace', path: path, value: value });
                              } else {
                                ops.unshift({ op: 'add', path: path, value: value });
                              }

                              _context2.next = 47;
                              return this.jsonapi.patch(ops);

                            case 47:
                              return _context2.abrupt('return', _context2.sent);

                            case 48:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, _callee2, this, [[10, 24, 28, 36], [29,, 31, 35]]);
                    }));

                    function value() {
                      return _ref3.apply(this, arguments);
                    }

                    return value;
                  }()
                },
                error: {
                  value: function () {
                    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_value2) {
                      var ops, hasErrors, hasData, errors, hasIncluded;
                      return _regenerator2.default.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              ops = [];
                              hasErrors = this.jsonapi.has(errorsPath);
                              hasData = this.jsonapi.has(dataPath);
                              errors = void 0;


                              if (hasErrors) {
                                errors = this.jsonapi.get(errorsPath);
                              } else {
                                errors = [];
                              }

                              if (Array.isArray(_value2)) {
                                errors = [].concat((0, _toConsumableArray3.default)(errors), (0, _toConsumableArray3.default)(_value2));
                              } else {
                                errors = [].concat((0, _toConsumableArray3.default)(errors), [_value2]);
                              }

                              if (hasErrors) {
                                ops.unshift({
                                  op: 'replace',
                                  path: errorsPath,
                                  value: errors
                                });
                              } else {
                                ops.unshift({
                                  op: 'add',
                                  path: errorsPath,
                                  value: errors
                                });
                              }

                              if (hasData) {
                                ops.unshift({
                                  op: 'remove',
                                  path: dataPath
                                });
                                hasIncluded = this.jsonapi.has(includedPath);

                                if (hasIncluded) {
                                  ops.unshift({
                                    op: 'remove',
                                    path: includedPath
                                  });
                                }
                              }

                              _context3.next = 10;
                              return this.jsonapi.patch(ops);

                            case 10:
                              return _context3.abrupt('return', _context3.sent);

                            case 11:
                            case 'end':
                              return _context3.stop();
                          }
                        }
                      }, _callee3, this);
                    }));

                    function value(_x5) {
                      return _ref4.apply(this, arguments);
                    }

                    return value;
                  }()
                }
              });

              // Object.defineProperties(ctx, properties.reduce((descriptor, prop) => {
              //   descriptor[prop] = {
              //     async value(...args) {
              //       let path = '', value, options = {}
              //
              //       if(typeof args[0] == 'string') {
              //         path = args[0]
              //         value = args[1]
              //
              //         if(args.length > 2) {
              //           options = args[2]
              //         }
              //       } else {
              //         value = args[0]
              //         if(args.length > 1) {
              //           options = args[1]
              //         }
              //       }
              //
              //       let _value
              //
              //       if('keys' in options) {
              //         if(Array.isArray(value)) {
              //           _value = value.map(item => pick(item, options.keys))
              //         } else {
              //           _value = pick(value, options.keys)
              //         }
              //       } else {
              //         _value = value
              //       }
              //
              //       return await ctx.jsonapi.add(`/${ prop }${ path }`, _value)
              //     }
              //   }
              //
              //   return descriptor
              // }, {}))

              _context4.next = 6;
              return next();

            case 6:

              ctx.set('content-type', mediaTypes[0] + ';charset=utf-8');

            case 7:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
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

/***/ "babel-runtime/core-js/get-iterator":
/*!*****************************************************!*\
  !*** external "babel-runtime/core-js/get-iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

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

/***/ "babel-runtime/core-js/object/keys":
/*!****************************************************!*\
  !*** external "babel-runtime/core-js/object/keys" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/toConsumableArray":
/*!**********************************************************!*\
  !*** external "babel-runtime/helpers/toConsumableArray" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),

/***/ "babel-runtime/helpers/typeof":
/*!***********************************************!*\
  !*** external "babel-runtime/helpers/typeof" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

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

/***/ "json8-patch":
/*!******************************!*\
  !*** external "json8-patch" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("json8-patch");

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

/***/ }),

/***/ "lodash/defaultsDeep":
/*!**************************************!*\
  !*** external "lodash/defaultsDeep" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/defaultsDeep");

/***/ }),

/***/ "lodash/pick":
/*!******************************!*\
  !*** external "lodash/pick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/pick");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map