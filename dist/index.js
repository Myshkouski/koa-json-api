module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.w={},r(r.s=18)}([function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("babel-runtime/core-js/object/assign")},function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"development"==e.app.env},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.stringify=t.types=t.JSON_API_MEDIA_TYPES_DEV=t.JSON_API_MEDIA_TYPES=void 0;var n,a=r(3),u=(n=a)&&n.__esModule?n:{default:n};var s=t.JSON_API_MEDIA_TYPES=["application/vnd.api+json"],o=t.JSON_API_MEDIA_TYPES_DEV=["application/json"];t.types=function(e){return(0,u.default)(e)?[].concat(s,o):[].concat(s)},t.stringify=function(e){return e.filter(function(e){return!!e}).join(",")}},function(e,t){e.exports=require("@alexeimyshkouski/json-api")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(1),u=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){return(0,u.default)({},e,{message:e.message,stack:e.stack})},e.exports=t.default},function(e,t){e.exports=require("http-errors")},function(e,t){e.exports=require("lodash.defaultsdeep")},function(e,t){e.exports=require("koa-bodyparser")},function(e,t){e.exports=require("babel-runtime/helpers/toConsumableArray")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(2)),a=o(r(0)),u=(o(r(10)),o(r(9))),s=(o(r(3)),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(4)));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t,r=(0,u.default)(e);return t=(0,a.default)(n.default.mark(function e(t,u){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(t,(0,a.default)(n.default.mark(function e(){var r;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.request.rawBody,t.state.hasBody=!(!r||!r.length);case 2:case"end":return e.stop()}},e,void 0)})));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.throw(e.t0.statusCode||415,{details:e.t0.message,headers:{accept:s.stringify(s.types(t))}});case 8:return e.next=10,u();case 10:case"end":return e.stop()}},e,void 0,[[0,5]])})),function(e,r){return t.apply(this,arguments)}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(2)),a=i(r(1)),u=i(r(0)),s=i(r(5)),o=i(r(8));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return e=(0,o.default)({},e,{request:!0,response:!1}),t=(0,u.default)(n.default.mark(function t(r,u){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.request||!r.state.hasBody){t.next=9;break}return t.prev=1,t.next=4,s.default.validate(r.request.body);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),r.throw(422,{detail:"ValidationError: request body is not valid",meta:t.t0.reasons});case 9:return t.next=11,u();case 11:if(!e.response){t.next=21;break}return t.prev=12,t.next=15,s.default.validate(r.body);case 15:t.next=21;break;case 17:throw t.prev=17,t.t1=t.catch(12),(0,a.default)({detail:"ValidationError: response body is not valid",meta:t.t1.reasons}),t.t1;case 21:case"end":return t.stop()}},t,void 0,[[1,6],[12,17]])})),function(e,r){return t.apply(this,arguments)};var t},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(r(2)),a=f(r(0)),u=f(r(1)),s=(f(r(7)),f(r(3))),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(4)),i=f(r(6));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){return function(t){t.id,t.status;var r=t.expose,n=t.message,a=t.detail,s=t.stack,o=t.headers,i=t.meta,f={id:t.id,status:t.status};if((e||r)&&(0,u.default)(f,{title:n,detail:a}),e||o){var d=(0,u.default)({},i,{headers:o,stack:e?s:void 0});(0,u.default)(f,{meta:d})}return f}};t.default=function(){return e=(0,a.default)(n.default.mark(function e(t,r){var a,u,f;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,s.default)(t),o.types(t),e.prev=2,e.next=5,r();case 5:e.next=15;break;case 7:e.prev=7,e.t0=e.catch(2),u=Array.isArray(e.t0)?e.t0:[e.t0],(f=u[0]).status||t.throw(500,{detail:"Initial error has no status code. Assuming it is an implementation error.",meta:{initialError:(0,i.default)(f)}}),(u=u.map(d(a))).length>1?f.status>=500?t.status=500:f.status>=400&&(t.status=400):(t.status=f.status,"meta"in f&&"headers"in f.meta&&t.set(f.meta.headers)),t.body={errors:u};case 15:case"end":return e.stop()}},e,void 0,[[2,7]])})),function(t,r){return e.apply(this,arguments)};var e},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(r(2)),a=f(r(1)),u=f(r(0)),s=f(r(7)),o=f(r(3)),i=f(r(6));function f(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return e=(0,u.default)(n.default.mark(function e(t,r){var u,f,d;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r();case 3:e.next=12;break;case 5:e.prev=5,e.t0=e.catch(0),u=(0,o.default)(t),f=[],e.t0.status?f.push((0,a.default)({status:e.t0.status},e.t0)):(d=new s.default(500,{detail:"JSON API implementation error",meta:u?{initialError:(0,i.default)(e.t0)}:void 0}),f.push((0,a.default)({status:d.status},d))),t.status=f[0].status,t.body={errors:f};case 12:case"end":return e.stop()}},e,void 0,[[0,5]])})),function(t,r){return e.apply(this,arguments)};var e},e.exports=t.default},function(e,t){e.exports=require("babel-runtime/core-js/object/define-properties")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(r(2)),a=f(r(15)),u=f(r(1)),s=f(r(0)),o=f(r(5)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(4));function f(e){return e&&e.__esModule?e:{default:e}}var d=["data","meta","links"],c=function(e,t){return e?t.reduce(function(t,r){return t[r]=e[r],t},{}):e};t.default=function(e){return t=(0,s.default)(n.default.mark(function t(r,f){var l;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.body={},l=i.types(r),r.jsonapi=new o.default((0,u.default)({},e,{body:r.body})),(0,a.default)(r,{rel:{value:function(){}}}),(0,a.default)(r,d.reduce(function(e,t){return e[t]={value:function(){var e=(0,s.default)(n.default.mark(function e(){var a,u,s,o,i=arguments;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="",u=void 0,s={},"string"==typeof(i.length<=0?void 0:i[0])?(a=i.length<=0?void 0:i[0],u=i.length<=1?void 0:i[1],i.length>2&&(s=i.length<=2?void 0:i[2])):(u=i.length<=0?void 0:i[0],i.length>1&&(s=i.length<=1?void 0:i[1])),o=void 0,o="keys"in s?Array.isArray(u)?u.map(function(e){return c(e,s.keys)}):c(u,s.keys):u,e.next=6,r.jsonapi.add("/"+t+a,o);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},e},{})),t.next=7,f();case 7:r.set("content-type",l[0]+";charset=utf-8");case 8:case"end":return t.stop()}},t,void 0)})),function(e,r){return t.apply(this,arguments)};var t},e.exports=t.default},function(e,t){e.exports=require("koa-router")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSchemas=t.Router=void 0;var n=c(r(17)),a=c(r(8)),u=c(r(5)),s=c(r(16)),o=c(r(14)),i=c(r(13)),f=c(r(12)),d=c(r(11));function c(e){return e&&e.__esModule?e:{default:e}}t.Router=function(e){return e=(0,a.default)({},e,{validate:{patch:!1,request:!0,response:!1}}),new n.default(e).use((0,o.default)()).use((0,s.default)({validatePatch:e.validate.patch})).use((0,i.default)()).use((0,d.default)()).use((0,f.default)({request:e.validate.request,response:e.validate.response}))};t.getSchemas=function(e){return u.default.getSchemas(e)}}]);
//# sourceMappingURL=index.js.map