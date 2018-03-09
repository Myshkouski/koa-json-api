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

/***/ "./src/modules/json-api/node_modules/fast-json-patch/lib/core.js":
/*!***********************************************************************!*\
  !*** ./src/modules/json-api/node_modules/fast-json-patch/lib/core.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var equalsOptions = { strict: true };
var _equals = __webpack_require__(/*! deep-equal */ "deep-equal");
var areEquals = function (a, b) {
    return _equals(a, b, equalsOptions);
};
var helpers_1 = __webpack_require__(/*! ./helpers */ "./src/modules/json-api/node_modules/fast-json-patch/lib/helpers.js");
exports.JsonPatchError = helpers_1.PatchError;
exports.deepClone = helpers_1._deepClone;
/* We use a Javascript hash to store each
 function. Each hash entry (property) uses
 the operation identifiers specified in rfc6902.
 In this way, we can map each patch operation
 to its dedicated function in efficient way.
 */
/* The operations applicable to an object */
var objOps = {
    add: function (obj, key, document) {
        obj[key] = this.value;
        return { newDocument: document };
    },
    remove: function (obj, key, document) {
        var removed = obj[key];
        delete obj[key];
        return { newDocument: document, removed: removed };
    },
    replace: function (obj, key, document) {
        var removed = obj[key];
        obj[key] = this.value;
        return { newDocument: document, removed: removed };
    },
    move: function (obj, key, document) {
        /* in case move target overwrites an existing value,
        return the removed value, this can be taxing performance-wise,
        and is potentially unneeded */
        var removed = getValueByPointer(document, this.path);
        if (removed) {
            removed = helpers_1._deepClone(removed);
        }
        var originalValue = applyOperation(document, { op: "remove", path: this.from }).removed;
        applyOperation(document, { op: "add", path: this.path, value: originalValue });
        return { newDocument: document, removed: removed };
    },
    copy: function (obj, key, document) {
        var valueToCopy = getValueByPointer(document, this.from);
        // enforce copy by value so further operations don't affect source (see issue #177)
        applyOperation(document, { op: "add", path: this.path, value: helpers_1._deepClone(valueToCopy) });
        return { newDocument: document };
    },
    test: function (obj, key, document) {
        return { newDocument: document, test: areEquals(obj[key], this.value) };
    },
    _get: function (obj, key, document) {
        this.value = obj[key];
        return { newDocument: document };
    }
};
/* The operations applicable to an array. Many are the same as for the object */
var arrOps = {
    add: function (arr, i, document) {
        if (helpers_1.isInteger(i)) {
            arr.splice(i, 0, this.value);
        }
        else {
            arr[i] = this.value;
        }
        // this may be needed when using '-' in an array
        return { newDocument: document, index: i };
    },
    remove: function (arr, i, document) {
        var removedList = arr.splice(i, 1);
        return { newDocument: document, removed: removedList[0] };
    },
    replace: function (arr, i, document) {
        var removed = arr[i];
        arr[i] = this.value;
        return { newDocument: document, removed: removed };
    },
    move: objOps.move,
    copy: objOps.copy,
    test: objOps.test,
    _get: objOps._get
};
/**
 * Retrieves a value from a JSON document by a JSON pointer.
 * Returns the value.
 *
 * @param document The document to get the value from
 * @param pointer an escaped JSON pointer
 * @return The retrieved value
 */
function getValueByPointer(document, pointer) {
    if (pointer == '') {
        return document;
    }
    var getOriginalDestination = { op: "_get", path: pointer };
    applyOperation(document, getOriginalDestination);
    return getOriginalDestination.value;
}
exports.getValueByPointer = getValueByPointer;
/**
 * Apply a single JSON Patch Operation on a JSON document.
 * Returns the {newDocument, result} of the operation.
 * It modifies the `document` and `operation` objects - it gets the values by reference.
 * If you would like to avoid touching your values, clone them:
 * `jsonpatch.applyOperation(document, jsonpatch._deepClone(operation))`.
 *
 * @param document The document to patch
 * @param operation The operation to apply
 * @param validateOperation `false` is without validation, `true` to use default jsonpatch's validation, or you can pass a `validateOperation` callback to be used for validation.
 * @param mutateDocument Whether to mutate the original document or clone it before applying
 * @return `{newDocument, result}` after the operation
 */
function applyOperation(document, operation, validateOperation, mutateDocument) {
    if (validateOperation === void 0) { validateOperation = false; }
    if (mutateDocument === void 0) { mutateDocument = true; }
    if (validateOperation) {
        if (typeof validateOperation == 'function') {
            validateOperation(operation, 0, document, operation.path);
        }
        else {
            validator(operation, 0);
        }
    }
    /* ROOT OPERATIONS */
    if (operation.path === "") {
        var returnValue = { newDocument: document };
        if (operation.op === 'add') {
            returnValue.newDocument = operation.value;
            return returnValue;
        }
        else if (operation.op === 'replace') {
            returnValue.newDocument = operation.value;
            returnValue.removed = document; //document we removed
            return returnValue;
        }
        else if (operation.op === 'move' || operation.op === 'copy') {
            returnValue.newDocument = getValueByPointer(document, operation.from); // get the value by json-pointer in `from` field
            if (operation.op === 'move') {
                returnValue.removed = document;
            }
            return returnValue;
        }
        else if (operation.op === 'test') {
            returnValue.test = areEquals(document, operation.value);
            if (returnValue.test === false) {
                throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', 0, operation, document);
            }
            returnValue.newDocument = document;
            return returnValue;
        }
        else if (operation.op === 'remove') {
            returnValue.removed = document;
            returnValue.newDocument = null;
            return returnValue;
        }
        else if (operation.op === '_get') {
            operation.value = document;
            return returnValue;
        }
        else {
            if (validateOperation) {
                throw new exports.JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', 0, operation, document);
            }
            else {
                return returnValue;
            }
        }
    } /* END ROOT OPERATIONS */
    else {
        if (!mutateDocument) {
            document = helpers_1._deepClone(document);
        }
        var path = operation.path || "";
        var keys = path.split('/');
        var obj = document;
        var t = 1; //skip empty element - http://jsperf.com/to-shift-or-not-to-shift
        var len = keys.length;
        var existingPathFragment = undefined;
        var key = void 0;
        var validateFunction = void 0;
        if (typeof validateOperation == 'function') {
            validateFunction = validateOperation;
        }
        else {
            validateFunction = validator;
        }
        while (true) {
            key = keys[t];
            if (validateOperation) {
                if (existingPathFragment === undefined) {
                    if (obj[key] === undefined) {
                        existingPathFragment = keys.slice(0, t).join('/');
                    }
                    else if (t == len - 1) {
                        existingPathFragment = operation.path;
                    }
                    if (existingPathFragment !== undefined) {
                        validateFunction(operation, 0, document, existingPathFragment);
                    }
                }
            }
            t++;
            if (Array.isArray(obj)) {
                if (key === '-') {
                    key = obj.length;
                }
                else {
                    if (validateOperation && !helpers_1.isInteger(key)) {
                        throw new exports.JsonPatchError("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", 0, operation.path, operation);
                    } // only parse key when it's an integer for `arr.prop` to work
                    else if (helpers_1.isInteger(key)) {
                        key = ~~key;
                    }
                }
                if (t >= len) {
                    if (validateOperation && operation.op === "add" && key > obj.length) {
                        throw new exports.JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", 0, operation.path, operation);
                    }
                    var returnValue = arrOps[operation.op].call(operation, obj, key, document); // Apply patch
                    if (returnValue.test === false) {
                        throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', 0, operation, document);
                    }
                    return returnValue;
                }
            }
            else {
                if (key && key.indexOf('~') != -1) {
                    key = helpers_1.unescapePathComponent(key);
                }
                if (t >= len) {
                    var returnValue = objOps[operation.op].call(operation, obj, key, document); // Apply patch
                    if (returnValue.test === false) {
                        throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', 0, operation, document);
                    }
                    return returnValue;
                }
            }
            obj = obj[key];
        }
    }
}
exports.applyOperation = applyOperation;
/**
 * Apply a full JSON Patch array on a JSON document.
 * Returns the {newDocument, result} of the patch.
 * It modifies the `document` object and `patch` - it gets the values by reference.
 * If you would like to avoid touching your values, clone them:
 * `jsonpatch.applyPatch(document, jsonpatch._deepClone(patch))`.
 *
 * @param document The document to patch
 * @param patch The patch to apply
 * @param validateOperation `false` is without validation, `true` to use default jsonpatch's validation, or you can pass a `validateOperation` callback to be used for validation.
 * @param mutateDocument Whether to mutate the original document or clone it before applying
 * @return An array of `{newDocument, result}` after the patch
 */
function applyPatch(document, patch, validateOperation, mutateDocument) {
    if (mutateDocument === void 0) { mutateDocument = true; }
    if (validateOperation) {
        if (!Array.isArray(patch)) {
            throw new exports.JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
        }
    }
    if (!mutateDocument) {
        document = helpers_1._deepClone(document);
    }
    var results = new Array(patch.length);
    for (var i = 0, length_1 = patch.length; i < length_1; i++) {
        results[i] = applyOperation(document, patch[i], validateOperation);
        document = results[i].newDocument; // in case root was replaced
    }
    results.newDocument = document;
    return results;
}
exports.applyPatch = applyPatch;
/**
 * Apply a single JSON Patch Operation on a JSON document.
 * Returns the updated document.
 * Suitable as a reducer.
 *
 * @param document The document to patch
 * @param operation The operation to apply
 * @return The updated document
 */
function applyReducer(document, operation) {
    var operationResult = applyOperation(document, operation);
    if (operationResult.test === false) {
        throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', 0, operation, document);
    }
    return operationResult.newDocument;
}
exports.applyReducer = applyReducer;
/**
 * Validates a single operation. Called from `jsonpatch.validate`. Throws `JsonPatchError` in case of an error.
 * @param {object} operation - operation object (patch)
 * @param {number} index - index of operation in the sequence
 * @param {object} [document] - object where the operation is supposed to be applied
 * @param {string} [existingPathFragment] - comes along with `document`
 */
function validator(operation, index, document, existingPathFragment) {
    if (typeof operation !== 'object' || operation === null || Array.isArray(operation)) {
        throw new exports.JsonPatchError('Operation is not an object', 'OPERATION_NOT_AN_OBJECT', index, operation, document);
    }
    else if (!objOps[operation.op]) {
        throw new exports.JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', index, operation, document);
    }
    else if (typeof operation.path !== 'string') {
        throw new exports.JsonPatchError('Operation `path` property is not a string', 'OPERATION_PATH_INVALID', index, operation, document);
    }
    else if (operation.path.indexOf('/') !== 0 && operation.path.length > 0) {
        // paths that aren't empty string should start with "/"
        throw new exports.JsonPatchError('Operation `path` property must start with "/"', 'OPERATION_PATH_INVALID', index, operation, document);
    }
    else if ((operation.op === 'move' || operation.op === 'copy') && typeof operation.from !== 'string') {
        throw new exports.JsonPatchError('Operation `from` property is not present (applicable in `move` and `copy` operations)', 'OPERATION_FROM_REQUIRED', index, operation, document);
    }
    else if ((operation.op === 'add' || operation.op === 'replace' || operation.op === 'test') && operation.value === undefined) {
        throw new exports.JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_REQUIRED', index, operation, document);
    }
    else if ((operation.op === 'add' || operation.op === 'replace' || operation.op === 'test') && helpers_1.hasUndefined(operation.value)) {
        throw new exports.JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED', index, operation, document);
    }
    else if (document) {
        if (operation.op == "add") {
            var pathLen = operation.path.split("/").length;
            var existingPathLen = existingPathFragment.split("/").length;
            if (pathLen !== existingPathLen + 1 && pathLen !== existingPathLen) {
                throw new exports.JsonPatchError('Cannot perform an `add` operation at the desired path', 'OPERATION_PATH_CANNOT_ADD', index, operation, document);
            }
        }
        else if (operation.op === 'replace' || operation.op === 'remove' || operation.op === '_get') {
            if (operation.path !== existingPathFragment) {
                throw new exports.JsonPatchError('Cannot perform the operation at a path that does not exist', 'OPERATION_PATH_UNRESOLVABLE', index, operation, document);
            }
        }
        else if (operation.op === 'move' || operation.op === 'copy') {
            var existingValue = { op: "_get", path: operation.from, value: undefined };
            var error = validate([existingValue], document);
            if (error && error.name === 'OPERATION_PATH_UNRESOLVABLE') {
                throw new exports.JsonPatchError('Cannot perform the operation from a path that does not exist', 'OPERATION_FROM_UNRESOLVABLE', index, operation, document);
            }
        }
    }
}
exports.validator = validator;
/**
 * Validates a sequence of operations. If `document` parameter is provided, the sequence is additionally validated against the object document.
 * If error is encountered, returns a JsonPatchError object
 * @param sequence
 * @param document
 * @returns {JsonPatchError|undefined}
 */
function validate(sequence, document, externalValidator) {
    try {
        if (!Array.isArray(sequence)) {
            throw new exports.JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
        }
        if (document) {
            //clone document and sequence so that we can safely try applying operations
            applyPatch(helpers_1._deepClone(document), helpers_1._deepClone(sequence), externalValidator || true);
        }
        else {
            externalValidator = externalValidator || validator;
            for (var i = 0; i < sequence.length; i++) {
                externalValidator(sequence[i], i, document, undefined);
            }
        }
    }
    catch (e) {
        if (e instanceof exports.JsonPatchError) {
            return e;
        }
        else {
            throw e;
        }
    }
}
exports.validate = validate;


/***/ }),

/***/ "./src/modules/json-api/node_modules/fast-json-patch/lib/duplex.js":
/*!*************************************************************************!*\
  !*** ./src/modules/json-api/node_modules/fast-json-patch/lib/duplex.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var equalsOptions = { strict: true };
var _equals = __webpack_require__(/*! deep-equal */ "deep-equal");
var areEquals = function (a, b) {
    return _equals(a, b, equalsOptions);
};
var helpers_1 = __webpack_require__(/*! ./helpers */ "./src/modules/json-api/node_modules/fast-json-patch/lib/helpers.js");
var core_1 = __webpack_require__(/*! ./core */ "./src/modules/json-api/node_modules/fast-json-patch/lib/core.js");
/* export all core functions */
var core_2 = __webpack_require__(/*! ./core */ "./src/modules/json-api/node_modules/fast-json-patch/lib/core.js");
exports.applyOperation = core_2.applyOperation;
exports.applyPatch = core_2.applyPatch;
exports.applyReducer = core_2.applyReducer;
exports.getValueByPointer = core_2.getValueByPointer;
exports.validate = core_2.validate;
exports.validator = core_2.validator;
/* export some helpers */
var helpers_2 = __webpack_require__(/*! ./helpers */ "./src/modules/json-api/node_modules/fast-json-patch/lib/helpers.js");
exports.JsonPatchError = helpers_2.PatchError;
exports.deepClone = helpers_2._deepClone;
exports.escapePathComponent = helpers_2.escapePathComponent;
exports.unescapePathComponent = helpers_2.unescapePathComponent;
var beforeDict = [];
var Mirror = (function () {
    function Mirror(obj) {
        this.observers = [];
        this.obj = obj;
    }
    return Mirror;
}());
var ObserverInfo = (function () {
    function ObserverInfo(callback, observer) {
        this.callback = callback;
        this.observer = observer;
    }
    return ObserverInfo;
}());
function getMirror(obj) {
    for (var i = 0, length = beforeDict.length; i < length; i++) {
        if (beforeDict[i].obj === obj) {
            return beforeDict[i];
        }
    }
}
function getObserverFromMirror(mirror, callback) {
    for (var j = 0, length = mirror.observers.length; j < length; j++) {
        if (mirror.observers[j].callback === callback) {
            return mirror.observers[j].observer;
        }
    }
}
function removeObserverFromMirror(mirror, observer) {
    for (var j = 0, length = mirror.observers.length; j < length; j++) {
        if (mirror.observers[j].observer === observer) {
            mirror.observers.splice(j, 1);
            return;
        }
    }
}
/**
 * Detach an observer from an object
 */
function unobserve(root, observer) {
    observer.unobserve();
}
exports.unobserve = unobserve;
/**
 * Observes changes made to an object, which can then be retrieved using generate
 */
function observe(obj, callback) {
    var patches = [];
    var root = obj;
    var observer;
    var mirror = getMirror(obj);
    if (!mirror) {
        mirror = new Mirror(obj);
        beforeDict.push(mirror);
    }
    else {
        observer = getObserverFromMirror(mirror, callback);
    }
    if (observer) {
        return observer;
    }
    observer = {};
    mirror.value = helpers_1._deepClone(obj);
    if (callback) {
        observer.callback = callback;
        observer.next = null;
        var dirtyCheck = function () {
            generate(observer);
        };
        var fastCheck = function () {
            clearTimeout(observer.next);
            observer.next = setTimeout(dirtyCheck);
        };
        if (typeof window !== 'undefined') {
            if (window.addEventListener) {
                window.addEventListener('mouseup', fastCheck);
                window.addEventListener('keyup', fastCheck);
                window.addEventListener('mousedown', fastCheck);
                window.addEventListener('keydown', fastCheck);
                window.addEventListener('change', fastCheck);
            }
            else {
                document.documentElement.attachEvent('onmouseup', fastCheck);
                document.documentElement.attachEvent('onkeyup', fastCheck);
                document.documentElement.attachEvent('onmousedown', fastCheck);
                document.documentElement.attachEvent('onkeydown', fastCheck);
                document.documentElement.attachEvent('onchange', fastCheck);
            }
        }
    }
    observer.patches = patches;
    observer.object = obj;
    observer.unobserve = function () {
        generate(observer);
        clearTimeout(observer.next);
        removeObserverFromMirror(mirror, observer);
        if (typeof window !== 'undefined') {
            if (window.removeEventListener) {
                window.removeEventListener('mouseup', fastCheck);
                window.removeEventListener('keyup', fastCheck);
                window.removeEventListener('mousedown', fastCheck);
                window.removeEventListener('keydown', fastCheck);
            }
            else {
                document.documentElement.detachEvent('onmouseup', fastCheck);
                document.documentElement.detachEvent('onkeyup', fastCheck);
                document.documentElement.detachEvent('onmousedown', fastCheck);
                document.documentElement.detachEvent('onkeydown', fastCheck);
            }
        }
    };
    mirror.observers.push(new ObserverInfo(callback, observer));
    return observer;
}
exports.observe = observe;
/**
 * Generate an array of patches from an observer
 */
function generate(observer) {
    var mirror;
    for (var i = 0, length = beforeDict.length; i < length; i++) {
        if (beforeDict[i].obj === observer.object) {
            mirror = beforeDict[i];
            break;
        }
    }
    _generate(mirror.value, observer.object, observer.patches, "");
    if (observer.patches.length) {
        core_1.applyPatch(mirror.value, observer.patches);
    }
    var temp = observer.patches;
    if (temp.length > 0) {
        observer.patches = [];
        if (observer.callback) {
            observer.callback(temp);
        }
    }
    return temp;
}
exports.generate = generate;
// Dirty check if obj is different from mirror, generate patches and update mirror
function _generate(mirror, obj, patches, path) {
    if (obj === mirror) {
        return;
    }
    if (typeof obj.toJSON === "function") {
        obj = obj.toJSON();
    }
    var newKeys = helpers_1._objectKeys(obj);
    var oldKeys = helpers_1._objectKeys(mirror);
    var changed = false;
    var deleted = false;
    //if ever "move" operation is implemented here, make sure this test runs OK: "should not generate the same patch twice (move)"
    for (var t = oldKeys.length - 1; t >= 0; t--) {
        var key = oldKeys[t];
        var oldVal = mirror[key];
        if (helpers_1.hasOwnProperty(obj, key) && !(obj[key] === undefined && oldVal !== undefined && Array.isArray(obj) === false)) {
            var newVal = obj[key];
            if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null) {
                _generate(oldVal, newVal, patches, path + "/" + helpers_1.escapePathComponent(key));
            }
            else {
                if (oldVal !== newVal) {
                    changed = true;
                    patches.push({ op: "replace", path: path + "/" + helpers_1.escapePathComponent(key), value: helpers_1._deepClone(newVal) });
                }
            }
        }
        else {
            patches.push({ op: "remove", path: path + "/" + helpers_1.escapePathComponent(key) });
            deleted = true; // property has been deleted
        }
    }
    if (!deleted && newKeys.length == oldKeys.length) {
        return;
    }
    for (var t = 0; t < newKeys.length; t++) {
        var key = newKeys[t];
        if (!helpers_1.hasOwnProperty(mirror, key) && obj[key] !== undefined) {
            patches.push({ op: "add", path: path + "/" + helpers_1.escapePathComponent(key), value: helpers_1._deepClone(obj[key]) });
        }
    }
}
/**
 * Create an array of patches from the differences in two objects
 */
function compare(tree1, tree2) {
    var patches = [];
    _generate(tree1, tree2, patches, '');
    return patches;
}
exports.compare = compare;


/***/ }),

/***/ "./src/modules/json-api/node_modules/fast-json-patch/lib/helpers.js":
/*!**************************************************************************!*\
  !*** ./src/modules/json-api/node_modules/fast-json-patch/lib/helpers.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017 Joachim Wester
 * MIT license
 */
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(obj, key) {
    return _hasOwnProperty.call(obj, key);
}
exports.hasOwnProperty = hasOwnProperty;
function _objectKeys(obj) {
    if (Array.isArray(obj)) {
        var keys = new Array(obj.length);
        for (var k = 0; k < keys.length; k++) {
            keys[k] = "" + k;
        }
        return keys;
    }
    if (Object.keys) {
        return Object.keys(obj);
    }
    var keys = [];
    for (var i in obj) {
        if (hasOwnProperty(obj, i)) {
            keys.push(i);
        }
    }
    return keys;
}
exports._objectKeys = _objectKeys;
;
/**
* Deeply clone the object.
* https://jsperf.com/deep-copy-vs-json-stringify-json-parse/25 (recursiveDeepCopy)
* @param  {any} obj value to clone
* @return {any} cloned obj
*/
function _deepClone(obj) {
    switch (typeof obj) {
        case "object":
            return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
        case "undefined":
            return null; //this is how JSON.stringify behaves for array items
        default:
            return obj; //no need to clone primitives
    }
}
exports._deepClone = _deepClone;
//3x faster than cached /^\d+$/.test(str)
function isInteger(str) {
    var i = 0;
    var len = str.length;
    var charCode;
    while (i < len) {
        charCode = str.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            i++;
            continue;
        }
        return false;
    }
    return true;
}
exports.isInteger = isInteger;
/**
* Escapes a json pointer path
* @param path The raw pointer
* @return the Escaped path
*/
function escapePathComponent(path) {
    if (path.indexOf('/') === -1 && path.indexOf('~') === -1)
        return path;
    return path.replace(/~/g, '~0').replace(/\//g, '~1');
}
exports.escapePathComponent = escapePathComponent;
/**
 * Unescapes a json pointer path
 * @param path The escaped pointer
 * @return The unescaped path
 */
function unescapePathComponent(path) {
    return path.replace(/~1/g, '/').replace(/~0/g, '~');
}
exports.unescapePathComponent = unescapePathComponent;
function _getPathRecursive(root, obj) {
    var found;
    for (var key in root) {
        if (hasOwnProperty(root, key)) {
            if (root[key] === obj) {
                return escapePathComponent(key) + '/';
            }
            else if (typeof root[key] === 'object') {
                found = _getPathRecursive(root[key], obj);
                if (found != '') {
                    return escapePathComponent(key) + '/' + found;
                }
            }
        }
    }
    return '';
}
exports._getPathRecursive = _getPathRecursive;
function getPath(root, obj) {
    if (root === obj) {
        return '/';
    }
    var path = _getPathRecursive(root, obj);
    if (path === '') {
        throw new Error("Object not found in root");
    }
    return '/' + path;
}
exports.getPath = getPath;
/**
* Recursively checks whether an object has any undefined values inside.
*/
function hasUndefined(obj) {
    if (obj === undefined) {
        return true;
    }
    if (obj) {
        if (Array.isArray(obj)) {
            for (var i = 0, len = obj.length; i < len; i++) {
                if (hasUndefined(obj[i])) {
                    return true;
                }
            }
        }
        else if (typeof obj === "object") {
            var objKeys = _objectKeys(obj);
            var objKeysLength = objKeys.length;
            for (var i = 0; i < objKeysLength; i++) {
                if (hasUndefined(obj[objKeys[i]])) {
                    return true;
                }
            }
        }
    }
    return false;
}
exports.hasUndefined = hasUndefined;
var PatchError = (function (_super) {
    __extends(PatchError, _super);
    function PatchError(message, name, index, operation, tree) {
        _super.call(this, message);
        this.message = message;
        this.name = name;
        this.index = index;
        this.operation = operation;
        this.tree = tree;
    }
    return PatchError;
}(Error));
exports.PatchError = PatchError;


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

var _fastJsonPatch = __webpack_require__(/*! fast-json-patch */ "./src/modules/json-api/node_modules/fast-json-patch/lib/duplex.js");

var _fastJsonPatch2 = _interopRequireDefault(_fastJsonPatch);

var _jsonPointer = __webpack_require__(/*! json-pointer */ "json-pointer");

var _jsonPointer2 = _interopRequireDefault(_jsonPointer);

var _ajv = __webpack_require__(/*! ajv */ "ajv");

var _ajv2 = _interopRequireDefault(_ajv);

var _schemas = __webpack_require__(/*! ./schemas */ "./src/modules/json-api/src/schemas.yaml");

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ops from './ops'

const ajv = new _ajv2.default({ schemas: _schemas2.default });

const noError = doc => {
  if (_jsonPointer2.default.has(doc, '/errors')) {
    throw new Error(`'/errors' has been already set`);
  }
};

class JsonApi {
  constructor({ body }) {
    this.body = typeof body == 'object' ? body : {}[('data', 'meta', 'error')].forEach(key => {
      this[key] = JsonApi[key].bind(this, this.body);
    });
  }

  static patch(doc, ops) {
    return _fastJsonPatch2.default.applyPatch(doc, ops).newDocument;
  }

  static data(doc, value) {
    console.log(doc, value);
    noError(doc);

    const path = '/data';

    const ops = [{ op: 'replace', path, value }];

    return JsonApi.patch(doc, ops);
  }

  static error(doc, value) {
    const path = '/errors';

    const ops = [{ op: 'add', path: `${path}/-`, value }];

    if (!_jsonPointer2.default.has(doc, path)) {
      ops.unshift({ op: 'add', path, value: [] });
    }

    if (_jsonPointer2.default.has('/data')) {
      ops.unshift({ op: 'remove', path: '/included' });
      ops.unshift({ op: 'remove', path: '/data' });
    }

    return JsonApi.patch(doc, ops);
  }

  static meta(doc, value) {
    noError(doc);

    const path = '/meta';

    const ops = [{ op: 'add', path, value }];

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

/***/ "deep-equal":
/*!*****************************!*\
  !*** external "deep-equal" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("deep-equal");

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