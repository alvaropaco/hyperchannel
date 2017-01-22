define('ember-ajax/ajax-request', ['exports', 'ember', 'ember-ajax/mixins/ajax-request'], function (exports, _ember, _emberAjaxMixinsAjaxRequest) {
  'use strict';

  var EmberObject = _ember['default'].Object;

  exports['default'] = EmberObject.extend(_emberAjaxMixinsAjaxRequest['default']);
});
define('ember-ajax/errors', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.AjaxError = AjaxError;
  exports.InvalidError = InvalidError;
  exports.UnauthorizedError = UnauthorizedError;
  exports.ForbiddenError = ForbiddenError;
  exports.BadRequestError = BadRequestError;
  exports.NotFoundError = NotFoundError;
  exports.TimeoutError = TimeoutError;
  exports.AbortError = AbortError;
  exports.ConflictError = ConflictError;
  exports.ServerError = ServerError;
  exports.isAjaxError = isAjaxError;
  exports.isUnauthorizedError = isUnauthorizedError;
  exports.isForbiddenError = isForbiddenError;
  exports.isInvalidError = isInvalidError;
  exports.isBadRequestError = isBadRequestError;
  exports.isNotFoundError = isNotFoundError;
  exports.isTimeoutError = isTimeoutError;
  exports.isAbortError = isAbortError;
  exports.isConflictError = isConflictError;
  exports.isServerError = isServerError;
  exports.isSuccess = isSuccess;

  var EmberError = _ember['default'].Error;

  /**
   * @class AjaxError
   * @private
   */

  function AjaxError(errors) {
    var message = arguments.length <= 1 || arguments[1] === undefined ? 'Ajax operation failed' : arguments[1];

    EmberError.call(this, message);

    this.errors = errors || [{
      title: 'Ajax Error',
      detail: message
    }];
  }

  AjaxError.prototype = Object.create(EmberError.prototype);

  /**
   * @class InvalidError
   * @public
   * @extends AjaxError
   */

  function InvalidError(errors) {
    AjaxError.call(this, errors, 'Request was rejected because it was invalid');
  }

  InvalidError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class UnauthorizedError
   * @public
   * @extends AjaxError
   */

  function UnauthorizedError(errors) {
    AjaxError.call(this, errors, 'Ajax authorization failed');
  }

  UnauthorizedError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class ForbiddenError
   * @public
   * @extends AjaxError
   */

  function ForbiddenError(errors) {
    AjaxError.call(this, errors, 'Request was rejected because user is not permitted to perform this operation.');
  }

  ForbiddenError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class BadRequestError
   * @public
   * @extends AjaxError
   */

  function BadRequestError(errors) {
    AjaxError.call(this, errors, 'Request was formatted incorrectly.');
  }

  BadRequestError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class NotFoundError
   * @public
   * @extends AjaxError
   */

  function NotFoundError(errors) {
    AjaxError.call(this, errors, 'Resource was not found.');
  }

  NotFoundError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class TimeoutError
   * @public
   * @extends AjaxError
   */

  function TimeoutError() {
    AjaxError.call(this, null, 'The ajax operation timed out');
  }

  TimeoutError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class AbortError
   * @public
   * @extends AjaxError
   */

  function AbortError() {
    AjaxError.call(this, null, 'The ajax operation was aborted');
  }

  AbortError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class ConflictError
   * @public
   * @extends AjaxError
   */

  function ConflictError(errors) {
    AjaxError.call(this, errors, 'The ajax operation failed due to a conflict');
  }

  ConflictError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class ServerError
   * @public
   * @extends AjaxError
   */

  function ServerError(errors) {
    AjaxError.call(this, errors, 'Request was rejected due to server error');
  }

  ServerError.prototype = Object.create(AjaxError.prototype);

  /**
   * Checks if the given error is or inherits from AjaxError
   *
   * @method isAjaxError
   * @public
   * @param  {Error} error
   * @return {Boolean}
   */

  function isAjaxError(error) {
    return error instanceof AjaxError;
  }

  /**
   * Checks if the given status code or AjaxError object represents an
   * unauthorized request error
   *
   * @method isUnauthorizedError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isUnauthorizedError(error) {
    if (isAjaxError(error)) {
      return error instanceof UnauthorizedError;
    } else {
      return error === 401;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a forbidden
   * request error
   *
   * @method isForbiddenError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isForbiddenError(error) {
    if (isAjaxError(error)) {
      return error instanceof ForbiddenError;
    } else {
      return error === 403;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents an invalid
   * request error
   *
   * @method isInvalidError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isInvalidError(error) {
    if (isAjaxError(error)) {
      return error instanceof InvalidError;
    } else {
      return error === 422;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a bad request
   * error
   *
   * @method isBadRequestError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isBadRequestError(error) {
    if (isAjaxError(error)) {
      return error instanceof BadRequestError;
    } else {
      return error === 400;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a
   * "not found" error
   *
   * @method isNotFoundError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isNotFoundError(error) {
    if (isAjaxError(error)) {
      return error instanceof NotFoundError;
    } else {
      return error === 404;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a
   * "timeout" error
   *
   * @method isTimeoutError
   * @public
   * @param  {AjaxError} error
   * @return {Boolean}
   */

  function isTimeoutError(error) {
    return error instanceof TimeoutError;
  }

  /**
   * Checks if the given status code or AjaxError object represents an
   * "abort" error
   *
   * @method isAbortError
   * @public
   * @param  {AjaxError} error
   * @return {Boolean}
   */

  function isAbortError(error) {
    return error instanceof AbortError;
  }

  /**
   * Checks if the given status code or AjaxError object represents a
   * conflict error
   *
   * @method isConflictError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isConflictError(error) {
    if (isAjaxError(error)) {
      return error instanceof ConflictError;
    } else {
      return error === 409;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a server error
   *
   * @method isServerError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isServerError(error) {
    if (isAjaxError(error)) {
      return error instanceof ServerError;
    } else {
      return error >= 500 && error < 600;
    }
  }

  /**
   * Checks if the given status code represents a successful request
   *
   * @method isSuccess
   * @public
   * @param  {Number} status
   * @return {Boolean}
   */

  function isSuccess(status) {
    var s = parseInt(status, 10);
    return s >= 200 && s < 300 || s === 304;
  }
});
define('ember-ajax/index', ['exports', 'ember-ajax/request'], function (exports, _emberAjaxRequest) {
  'use strict';

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxRequest['default'];
    }
  });
});
define('ember-ajax/mixins/ajax-request', ['exports', 'ember', 'ember-ajax/errors', 'ember-ajax/utils/parse-response-headers', 'ember-ajax/utils/get-header', 'ember-ajax/utils/url-helpers', 'ember-ajax/utils/ajax'], function (exports, _ember, _emberAjaxErrors, _emberAjaxUtilsParseResponseHeaders, _emberAjaxUtilsGetHeader, _emberAjaxUtilsUrlHelpers, _emberAjaxUtilsAjax) {
  'use strict';

  var $ = _ember['default'].$;
  var A = _ember['default'].A;
  var EmberError = _ember['default'].Error;
  var Logger = _ember['default'].Logger;
  var Mixin = _ember['default'].Mixin;
  var Promise = _ember['default'].RSVP.Promise;
  var Test = _ember['default'].Test;
  var get = _ember['default'].get;
  var isArray = _ember['default'].isArray;
  var isEmpty = _ember['default'].isEmpty;
  var isNone = _ember['default'].isNone;
  var merge = _ember['default'].merge;
  var run = _ember['default'].run;
  var runInDebug = _ember['default'].runInDebug;
  var testing = _ember['default'].testing;
  var warn = _ember['default'].warn;

  var JSONAPIContentType = /^application\/vnd\.api\+json/i;

  function isJSONAPIContentType(header) {
    if (isNone(header)) {
      return false;
    }
    return !!header.match(JSONAPIContentType);
  }

  function startsWithSlash(string) {
    return string.charAt(0) === '/';
  }

  function endsWithSlash(string) {
    return string.charAt(string.length - 1) === '/';
  }

  function stripSlashes(path) {
    // make sure path starts with `/`
    if (startsWithSlash(path)) {
      path = path.substring(1);
    }

    // remove end `/`
    if (endsWithSlash(path)) {
      path = path.slice(0, -1);
    }
    return path;
  }

  function isObject(object) {
    return typeof object === 'object';
  }

  function isString(object) {
    return typeof object === 'string';
  }

  var pendingRequestCount = 0;
  if (testing) {
    Test.registerWaiter(function () {
      return pendingRequestCount === 0;
    });
  }

  /**
   * AjaxRequest Mixin
   *
   * @public
   * @mixin
   */
  exports['default'] = Mixin.create({

    /**
     * The default value for the request `contentType`
     *
     * For now, defaults to the same value that jQuery would assign.  In the
     * future, the default value will be for JSON requests.
     * @property {string} contentType
     * @public
     * @default
     */
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

    /**
     * Headers to include on the request
     *
     * Some APIs require HTTP headers, e.g. to provide an API key. Arbitrary
     * headers can be set as key/value pairs on the `RESTAdapter`'s `headers`
     * object and Ember Data will send them along with each ajax request.
     *
     * ```javascript
     * // app/services/ajax.js
     * import AjaxService from 'ember-ajax/services/ajax';
     *
     * export default AjaxService.extend({
     *   headers: {
     *     'API_KEY': 'secret key',
     *     'ANOTHER_HEADER': 'Some header value'
     *   }
     * });
     * ```
     *
     * `headers` can also be used as a computed property to support dynamic
     * headers.
     *
     * ```javascript
     * // app/services/ajax.js
     * import Ember from 'ember';
     * import AjaxService from 'ember-ajax/services/ajax';
     *
     * const {
     *   computed,
     *   get,
     *   inject: { service }
     * } = Ember;
     *
     * export default AjaxService.extend({
     *   session: service(),
     *   headers: computed('session.authToken', function() {
     *     return {
     *       'API_KEY': get(this, 'session.authToken'),
     *       'ANOTHER_HEADER': 'Some header value'
     *     };
     *   })
     * });
     * ```
     *
     * In some cases, your dynamic headers may require data from some object
     * outside of Ember's observer system (for example `document.cookie`). You
     * can use the `volatile` function to set the property into a non-cached mode
     * causing the headers to be recomputed with every request.
     *
     * ```javascript
     * // app/services/ajax.js
     * import Ember from 'ember';
     * import AjaxService from 'ember-ajax/services/ajax';
     *
     * const {
     *   computed,
     *   get,
     *   inject: { service }
     * } = Ember;
     *
     * export default AjaxService.extend({
     *   session: service(),
     *   headers: computed('session.authToken', function() {
     *     return {
     *       'API_KEY': get(document.cookie.match(/apiKey\=([^;]*)/), '1'),
     *       'ANOTHER_HEADER': 'Some header value'
     *     };
     *   }).volatile()
     * });
     * ```
     *
     * @property {Object} headers
     * @public
     * @default
     */
    headers: {},

    /**
     * Make an AJAX request, ignoring the raw XHR object and dealing only with
     * the response
     *
     * @method request
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    request: function request(url, options) {
      var _this = this;

      var hash = this.options(url, options);
      return new Promise(function (resolve, reject) {
        _this._makeRequest(hash).then(function (_ref) {
          var response = _ref.response;

          resolve(response);
        })['catch'](function (_ref2) {
          var response = _ref2.response;

          reject(response);
        });
      }, 'ember-ajax: ' + hash.type + ' ' + hash.url + ' response');
    },

    /**
     * Make an AJAX request, returning the raw XHR object along with the response
     *
     * @method raw
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    raw: function raw(url, options) {
      var hash = this.options(url, options);
      return this._makeRequest(hash);
    },

    /**
     * Shared method to actually make an AJAX request
     *
     * @method _makeRequest
     * @private
     * @param {Object} hash The options for the request
     * @param {string} hash.url The URL to make the request to
     * @return {Promise} The result of the request
     */
    _makeRequest: function _makeRequest(hash) {
      var _this2 = this;

      var requestData = {
        type: hash.type,
        url: hash.url
      };

      if (isJSONAPIContentType((0, _emberAjaxUtilsGetHeader['default'])(hash.headers, 'Content-Type')) && requestData.type !== 'GET') {
        if (typeof hash.data === 'object') {
          hash.data = JSON.stringify(hash.data);
        }
      }

      return new Promise(function (resolve, reject) {
        hash.success = function (payload, textStatus, jqXHR) {
          var response = _this2.handleResponse(jqXHR.status, (0, _emberAjaxUtilsParseResponseHeaders['default'])(jqXHR.getAllResponseHeaders()), payload, requestData);

          pendingRequestCount = pendingRequestCount - 1;

          if ((0, _emberAjaxErrors.isAjaxError)(response)) {
            run.join(null, reject, { payload: payload, textStatus: textStatus, jqXHR: jqXHR, response: response });
          } else {
            run.join(null, resolve, { payload: payload, textStatus: textStatus, jqXHR: jqXHR, response: response });
          }
        };

        hash.error = function (jqXHR, textStatus, errorThrown) {
          runInDebug(function () {
            var message = 'The server returned an empty string for ' + requestData.type + ' ' + requestData.url + ', which cannot be parsed into a valid JSON. Return either null or {}.';
            var validJSONString = !(textStatus === 'parsererror' && jqXHR.responseText === '');
            warn(message, validJSONString, {
              id: 'ds.adapter.returned-empty-string-as-JSON'
            });
          });

          var payload = _this2.parseErrorResponse(jqXHR.responseText) || errorThrown;
          var response = undefined;

          if (errorThrown instanceof Error) {
            response = errorThrown;
          } else if (textStatus === 'timeout') {
            response = new _emberAjaxErrors.TimeoutError();
          } else if (textStatus === 'abort') {
            response = new _emberAjaxErrors.AbortError();
          } else {
            response = _this2.handleResponse(jqXHR.status, (0, _emberAjaxUtilsParseResponseHeaders['default'])(jqXHR.getAllResponseHeaders()), payload, requestData);
          }

          pendingRequestCount = pendingRequestCount - 1;

          run.join(null, reject, { payload: payload, textStatus: textStatus, jqXHR: jqXHR, errorThrown: errorThrown, response: response });
        };

        pendingRequestCount = pendingRequestCount + 1;

        (0, _emberAjaxUtilsAjax['default'])(hash);
      }, 'ember-ajax: ' + hash.type + ' ' + hash.url);
    },

    /**
     * calls `request()` but forces `options.type` to `POST`
     *
     * @method post
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    post: function post(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'POST'));
    },

    /**
     * calls `request()` but forces `options.type` to `PUT`
     *
     * @method put
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    put: function put(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'PUT'));
    },

    /**
     * calls `request()` but forces `options.type` to `PATCH`
     *
     * @method patch
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    patch: function patch(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'PATCH'));
    },

    /**
     * calls `request()` but forces `options.type` to `DELETE`
     *
     * @method del
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    del: function del(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'DELETE'));
    },

    /**
     * calls `request()` but forces `options.type` to `DELETE`
     *
     * Alias for `del()`
     *
     * @method delete
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    'delete': function _delete() {
      return this.del.apply(this, arguments);
    },

    /**
     * Wrap the `.get` method so that we issue a warning if
     *
     * Since `.get` is both an AJAX pattern _and_ an Ember pattern, we want to try
     * to warn users when they try using `.get` to make a request
     *
     * @method get
     * @public
     */
    get: function get(url) {
      if (arguments.length > 1 || url.charAt(0) === '/') {
        throw new EmberError('It seems you tried to use `.get` to make a request! Use the `.request` method instead.');
      }
      return this._super.apply(this, arguments);
    },

    /**
     * Manipulates the options hash to include the HTTP method on the type key
     *
     * @method _addTypeToOptionsFor
     * @private
     * @param {Object} options The original request options
     * @param {string} method The method to enforce
     * @return {Object} The new options, with the method set
     */
    _addTypeToOptionsFor: function _addTypeToOptionsFor(options, method) {
      options = options || {};
      options.type = method;
      return options;
    },

    /**
     * Get the full "headers" hash, combining the service-defined headers with
     * the ones provided for the request
     *
     * @method _getFullHeadersHash
     * @private
     * @param {Object} headers
     * @return {Object}
     */
    _getFullHeadersHash: function _getFullHeadersHash(headers) {
      var classHeaders = get(this, 'headers');
      var _headers = merge({}, classHeaders);
      return merge(_headers, headers);
    },

    /**
     * @method options
     * @private
     * @param {string} url
     * @param {Object} options
     * @return {Object}
     */
    options: function options(url) {
      var _options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      _options.url = this._buildURL(url, _options);
      _options.type = _options.type || 'GET';
      _options.dataType = _options.dataType || 'json';
      _options.contentType = isEmpty(_options.contentType) ? get(this, 'contentType') : _options.contentType;

      if (this._shouldSendHeaders(_options)) {
        _options.headers = this._getFullHeadersHash(_options.headers);
      } else {
        _options.headers = _options.headers || {};
      }

      return _options;
    },

    /**
     * Build a URL for a request
     *
     * If the provided `url` is deemed to be a complete URL, it will be returned
     * directly.  If it is not complete, then the segment provided will be combined
     * with the `host` and `namespace` options of the request class to create the
     * full URL.
     *
     * @private
     * @param {string} url the url, or url segment, to request
     * @param {Object} [options={}] the options for the request being made
     * @param {string} [options.host] the host to use for this request
     * @returns {string} the URL to make a request to
     */
    _buildURL: function _buildURL(url) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var urlObject = new _emberAjaxUtilsUrlHelpers.RequestURL(url);

      // If the URL passed is not relative, return the whole URL
      if (urlObject.isComplete) {
        return urlObject.href;
      }

      var host = options.host || get(this, 'host');
      var namespace = options.namespace || get(this, 'namespace');
      if (namespace) {
        namespace = stripSlashes(namespace);
      }

      // If the URL has already been constructed (presumably, by Ember Data), then we should just leave it alone
      var hasNamespaceRegex = new RegExp('^(/)?' + namespace);
      if (hasNamespaceRegex.test(url)) {
        return url;
      }

      var fullUrl = '';
      // Add the host, if it exists
      if (host) {
        fullUrl += host;
      }
      // Add the namespace, if it exists
      if (namespace) {
        if (!endsWithSlash(fullUrl)) {
          fullUrl += '/';
        }
        fullUrl += namespace;
      }
      // Add the URL segment, if it exists
      if (url) {
        if (!startsWithSlash(url)) {
          fullUrl += '/';
        }
        fullUrl += url;
      }

      return fullUrl;
    },

    /**
     * Takes an ajax response, and returns the json payload or an error.
     *
     * By default this hook just returns the json payload passed to it.
     * You might want to override it in two cases:
     *
     * 1. Your API might return useful results in the response headers.
     *    Response headers are passed in as the second argument.
     *
     * 2. Your API might return errors as successful responses with status code
     *    200 and an Errors text or object.
     *
     * @method handleResponse
     * @private
     * @param  {Number} status
     * @param  {Object} headers
     * @param  {Object} payload
     * @param  {Object} requestData the original request information
     * @return {Object | AjaxError} response
     */
    handleResponse: function handleResponse(status, headers, payload, requestData) {
      payload = payload === null || payload === undefined ? {} : payload;
      var errors = this.normalizeErrorResponse(status, headers, payload);

      if (this.isSuccess(status, headers, payload)) {
        return payload;
      } else if (this.isUnauthorizedError(status, headers, payload)) {
        return new _emberAjaxErrors.UnauthorizedError(errors);
      } else if (this.isForbiddenError(status, headers, payload)) {
        return new _emberAjaxErrors.ForbiddenError(errors);
      } else if (this.isInvalidError(status, headers, payload)) {
        return new _emberAjaxErrors.InvalidError(errors);
      } else if (this.isBadRequestError(status, headers, payload)) {
        return new _emberAjaxErrors.BadRequestError(errors);
      } else if (this.isNotFoundError(status, headers, payload)) {
        return new _emberAjaxErrors.NotFoundError(errors);
      } else if (this.isAbortError(status, headers, payload)) {
        return new _emberAjaxErrors.AbortError(errors);
      } else if (this.isConflictError(status, headers, payload)) {
        return new _emberAjaxErrors.ConflictError(errors);
      } else if (this.isServerError(status, headers, payload)) {
        return new _emberAjaxErrors.ServerError(errors);
      }

      var detailedMessage = this.generateDetailedMessage(status, headers, payload, requestData);
      return new _emberAjaxErrors.AjaxError(errors, detailedMessage);
    },

    /**
     * Match the host to a provided array of strings or regexes that can match to a host
     *
     * @method matchHosts
     * @private
     * @param {string} host the host you are sending too
     * @param {RegExp | string} matcher a string or regex that you can match the host to.
     * @returns {Boolean} if the host passed the matcher
     */
    _matchHosts: function _matchHosts(host, matcher) {
      if (matcher.constructor === RegExp) {
        return matcher.test(host);
      } else if (typeof matcher === 'string') {
        return matcher === host;
      } else {
        Logger.warn('trustedHosts only handles strings or regexes.', matcher, 'is neither.');
        return false;
      }
    },

    /**
     * Determine whether the headers should be added for this request
     *
     * This hook is used to help prevent sending headers to every host, regardless
     * of the destination, since this could be a security issue if authentication
     * tokens are accidentally leaked to third parties.
     *
     * To avoid that problem, subclasses should utilize the `headers` computed
     * property to prevent authentication from being sent to third parties, or
     * implement this hook for more fine-grain control over when headers are sent.
     *
     * By default, the headers are sent if the host of the request matches the
     * `host` property designated on the class.
     *
     * @method _shouldSendHeaders
     * @private
     * @property {Object} hash request options hash
     * @returns {Boolean} whether or not headers should be sent
     */
    _shouldSendHeaders: function _shouldSendHeaders(_ref3) {
      var _this3 = this;

      var url = _ref3.url;
      var host = _ref3.host;

      url = url || '';
      host = host || get(this, 'host') || '';

      var urlObject = new _emberAjaxUtilsUrlHelpers.RequestURL(url);
      var trustedHosts = get(this, 'trustedHosts') || A();

      // Add headers on relative URLs
      if (!urlObject.isComplete) {
        return true;
      } else if (trustedHosts.find(function (matcher) {
        return _this3._matchHosts(urlObject.hostname, matcher);
      })) {
        return true;
      }

      // Add headers on matching host
      var hostObject = new _emberAjaxUtilsUrlHelpers.RequestURL(host);
      return urlObject.sameHost(hostObject);
    },

    /**
     * Generates a detailed ("friendly") error message, with plenty
     * of information for debugging (good luck!)
     *
     * @method generateDetailedMessage
     * @private
     * @param  {Number} status
     * @param  {Object} headers
     * @param  {Object} payload
     * @param  {Object} requestData the original request information
     * @return {Object} request information
     */
    generateDetailedMessage: function generateDetailedMessage(status, headers, payload, requestData) {
      var shortenedPayload = undefined;
      var payloadContentType = (0, _emberAjaxUtilsGetHeader['default'])(headers, 'Content-Type') || 'Empty Content-Type';

      if (payloadContentType.toLowerCase() === 'text/html' && payload.length > 250) {
        shortenedPayload = '[Omitted Lengthy HTML]';
      } else {
        shortenedPayload = JSON.stringify(payload);
      }

      var requestDescription = requestData.type + ' ' + requestData.url;
      var payloadDescription = 'Payload (' + payloadContentType + ')';

      return ['Ember AJAX Request ' + requestDescription + ' returned a ' + status, payloadDescription, shortenedPayload].join('\n');
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a an authorized error.
     *
     * @method isUnauthorizedError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isUnauthorizedError: function isUnauthorizedError(status) {
      return (0, _emberAjaxErrors.isUnauthorizedError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a forbidden error.
     *
     * @method isForbiddenError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isForbiddenError: function isForbiddenError(status) {
      return (0, _emberAjaxErrors.isForbiddenError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a an invalid error.
     *
     * @method isInvalidError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isInvalidError: function isInvalidError(status) {
      return (0, _emberAjaxErrors.isInvalidError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a bad request error.
     *
     * @method isBadRequestError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isBadRequestError: function isBadRequestError(status) {
      return (0, _emberAjaxErrors.isBadRequestError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a "not found" error.
     *
     * @method isNotFoundError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isNotFoundError: function isNotFoundError(status) {
      return (0, _emberAjaxErrors.isNotFoundError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is an "abort" error.
     *
     * @method isAbortError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isAbortError: function isAbortError(status) {
      return (0, _emberAjaxErrors.isAbortError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a "conflict" error.
     *
     * @method isConflictError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isConflictError: function isConflictError(status) {
      return (0, _emberAjaxErrors.isConflictError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a server error.
     *
     * @method isServerError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isServerError: function isServerError(status) {
      return (0, _emberAjaxErrors.isServerError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a success.
     *
     * @method isSuccess
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isSuccess: function isSuccess(status) {
      return (0, _emberAjaxErrors.isSuccess)(status);
    },

    /**
     * @method parseErrorResponse
     * @private
     * @param {string} responseText
     * @return {Object}
     */
    parseErrorResponse: function parseErrorResponse(responseText) {
      try {
        return JSON.parse(responseText);
      } catch (e) {
        return responseText;
      }
    },

    /**
     * Normalize the error from the server into the same format
     *
     * The format we normalize to is based on the JSON API specification.  The
     * return value should be an array of objects that match the format they
     * describe. More details about the object format can be found
     * [here](http://jsonapi.org/format/#error-objects)
     *
     * The basics of the format are as follows:
     *
     * ```javascript
     * [
     *   {
     *     status: 'The status code for the error',
     *     title: 'The human-readable title of the error'
     *     detail: 'The human-readable details of the error'
     *   }
     * ]
     * ```
     *
     * In cases where the server returns an array, then there should be one item
     * in the array for each of the payload.  If your server returns a JSON API
     * formatted payload already, it will just be returned directly.
     *
     * If your server returns something other than a JSON API format, it's
     * suggested that you override this method to convert your own errors into the
     * one described above.
     *
     * @method normalizeErrorResponse
     * @private
     * @param  {Number} status
     * @param  {Object} headers
     * @param  {Object} payload
     * @return {Array} An array of JSON API-formatted error objects
     */
    normalizeErrorResponse: function normalizeErrorResponse(status, headers, payload) {
      if (isArray(payload.errors)) {
        return payload.errors.map(function (error) {
          if (isObject(error)) {
            var ret = merge({}, error);
            ret.status = '' + error.status;
            return ret;
          } else {
            return {
              status: '' + status,
              title: error
            };
          }
        });
      } else if (isArray(payload)) {
        return payload.map(function (error) {
          if (isObject(error)) {
            return {
              status: '' + status,
              title: error.title || 'The backend responded with an error',
              detail: error
            };
          } else {
            return {
              status: '' + status,
              title: '' + error
            };
          }
        });
      } else {
        if (isString(payload)) {
          return [{
            status: '' + status,
            title: payload
          }];
        } else {
          return [{
            status: '' + status,
            title: payload.title || 'The backend responded with an error',
            detail: payload
          }];
        }
      }
    }
  });
});
define('ember-ajax/mixins/ajax-support', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var service = _ember['default'].inject.service;
  var alias = _ember['default'].computed.alias;

  exports['default'] = Mixin.create({

    /**
     * The AJAX service to send requests through
     *
     * @property {AjaxService} ajaxService
     * @public
     */
    ajaxService: service('ajax'),

    /**
     * @property {string} host
     * @public
     */
    host: alias('ajaxService.host'),

    /**
     * @property {string} namespace
     * @public
     */
    namespace: alias('ajaxService.namespace'),

    /**
     * @property {object} headers
     * @public
     */
    headers: alias('ajaxService.headers'),

    ajax: function ajax(url, type) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      var augmentedOptions = this.ajaxOptions.apply(this, arguments);

      return this.get('ajaxService').request(url, augmentedOptions);
    }
  });
});
define('ember-ajax/raw', ['exports', 'ember-ajax/ajax-request'], function (exports, _emberAjaxAjaxRequest) {
  'use strict';

  exports['default'] = raw;

  /**
   * Same as `request` except it resolves an object with
   *
   *   {response, textStatus, jqXHR}
   *
   * Useful if you need access to the jqXHR object for headers, etc.
   *
   * @public
   */
  function raw() {
    var ajax = new _emberAjaxAjaxRequest['default']();
    return ajax.raw.apply(ajax, arguments);
  }
});
define('ember-ajax/request', ['exports', 'ember-ajax/ajax-request'], function (exports, _emberAjaxAjaxRequest) {
  'use strict';

  exports['default'] = request;

  /**
   * Helper function that allows you to use the default `ember-ajax` to make
   * requests without using the service.
   *
   * Note: Unlike `ic-ajax`'s `request` helper function, this will *not* return a
   * jqXHR object in the error handler.  If you need jqXHR, you can use the `raw`
   * function instead.
   *
   * @public
   */
  function request() {
    var ajax = new _emberAjaxAjaxRequest['default']();
    return ajax.request.apply(ajax, arguments);
  }
});
define('ember-ajax/services/ajax', ['exports', 'ember', 'ember-ajax/mixins/ajax-request'], function (exports, _ember, _emberAjaxMixinsAjaxRequest) {
  'use strict';

  var Service = _ember['default'].Service;

  exports['default'] = Service.extend(_emberAjaxMixinsAjaxRequest['default']);
});
define('ember-ajax/utils/ajax', ['exports', 'ember', 'ember-ajax/utils/is-fastboot'], function (exports, _ember, _emberAjaxUtilsIsFastboot) {
  /* global najax */
  'use strict';

  var $ = _ember['default'].$;

  exports['default'] = _emberAjaxUtilsIsFastboot['default'] ? najax : $.ajax;
});
define('ember-ajax/utils/get-header', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = getHeader;

  var A = _ember['default'].A;
  var isNone = _ember['default'].isNone;

  /**
   * Do a case-insensitive lookup of an HTTP header
   *
   * @function getHeader
   * @private
   * @param {Object} headers
   * @param {string} name
   * @return {string}
   */
  function getHeader(headers, name) {
    if (isNone(headers) || isNone(name)) {
      return; // ask for nothing, get nothing.
    }

    var matchedKey = A(Object.keys(headers)).find(function (key) {
      return key.toLowerCase() === name.toLowerCase();
    });

    return headers[matchedKey];
  }
});
define('ember-ajax/utils/is-fastboot', ['exports'], function (exports) {
  /* global FastBoot */
  'use strict';

  var isFastBoot = typeof FastBoot !== 'undefined';
  exports['default'] = isFastBoot;
});
define('ember-ajax/utils/parse-response-headers', ['exports'], function (exports) {
  'use strict';

  exports['default'] = parseResponseHeaders;

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  var CLRF = '\r\n';
  function parseResponseHeaders(headersString) {
    var headers = {};

    if (!headersString) {
      return headers;
    }

    var headerPairs = headersString.split(CLRF);

    headerPairs.forEach(function (header) {
      var _header$split = header.split(':');

      var _header$split2 = _toArray(_header$split);

      var field = _header$split2[0];

      var value = _header$split2.slice(1);

      field = field.trim();
      value = value.join(':').trim();

      if (value) {
        headers[field] = value;
      }
    });

    return headers;
  }
});
define('ember-ajax/utils/url-helpers', ['exports', 'ember-ajax/utils/is-fastboot'], function (exports, _emberAjaxUtilsIsFastboot) {
  'use strict';

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  })();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  /* global require, module, URL */

  var completeUrlRegex = /^(http|https)/;

  /*
   * Isomorphic URL parsing
   * Borrowed from
   * http://www.sitepoint.com/url-parsing-isomorphic-javascript/
   */
  var isNode = typeof module === 'object' && module.exports;
  var url = getUrlModule();

  /**
   * Get the node url module or an anchor element
   *
   * @function getUrlModule
   * @private
   * @return {Object|HTMLAnchorElement} Object to parse urls
   */
  function getUrlModule() {
    if (_emberAjaxUtilsIsFastboot['default']) {
      // ember-fastboot-server provides the node url module as URL global
      return URL;
    }

    if (isNode) {
      return require('url');
    }

    return document.createElement('a');
  }

  /**
   * Parse a URL string into an object that defines its structure
   *
   * The returned object will have the following properties:
   *
   *   href: the full URL
   *   protocol: the request protocol
   *   hostname: the target for the request
   *   port: the port for the request
   *   pathname: any URL after the host
   *   search: query parameters
   *   hash: the URL hash
   *
   * @function parseUrl
   * @private
   * @param {string} str The string to parse
   * @return {Object} URL structure
   */
  function parseUrl(str) {
    var fullObject = undefined;
    if (isNode || _emberAjaxUtilsIsFastboot['default']) {
      fullObject = url.parse(str);
    } else {
      url.href = str;
      fullObject = url;
    }
    var desiredProps = {};
    desiredProps.href = fullObject.href;
    desiredProps.protocol = fullObject.protocol;
    desiredProps.hostname = fullObject.hostname;
    desiredProps.port = fullObject.port;
    desiredProps.pathname = fullObject.pathname;
    desiredProps.search = fullObject.search;
    desiredProps.hash = fullObject.hash;
    return desiredProps;
  }

  /**
   * RequestURL
   *
   * Converts a URL string into an object for easy comparison to other URLs
   *
   * @public
   */

  var RequestURL = (function () {
    function RequestURL(url) {
      _classCallCheck(this, RequestURL);

      this.url = url;
    }

    _createClass(RequestURL, [{
      key: 'sameHost',
      value: function sameHost(other) {
        var _this = this;

        return ['protocol', 'hostname', 'port'].reduce(function (previous, prop) {
          return previous && _this[prop] === other[prop];
        }, true);
      }
    }, {
      key: 'url',
      get: function get() {
        return this._url;
      },
      set: function set(value) {
        this._url = value;

        var explodedUrl = parseUrl(value);
        for (var prop in explodedUrl) {
          if (({}).hasOwnProperty.call(explodedUrl, prop)) {
            this[prop] = explodedUrl[prop];
          }
        }

        return this._url;
      }
    }, {
      key: 'isComplete',
      get: function get() {
        return this.url.match(completeUrlRegex);
      }
    }]);

    return RequestURL;
  })();

  exports.RequestURL = RequestURL;
});
define('ember-allpurpose/animate', ['exports'], function (exports) {
  'use strict';

  exports['default'] = function (callback, time) {
    var delay = time ? parseInt(time, 10) : 0,

    //stores the time of last callback execution for
    // play/pause behavior and firefox shunt
    lastExecution = new Date().getTime(),
        timeout = false,

    //execute the callback and setup the next one
    once = function once() {
      callback();
      timeout = setTimeout(once, delay);
    },

    //shunt for firefox, which executes setTimeout
    // up to 50% early
    checkExecution = function checkExecution() {
      var time = new Date().getTime() - lastExecution;
      if (time >= delay) {
        return true;
      }
      timeout = setTimeout(once, time);
      return false;
    },

    //stores the amount of time elapsed prior to a pause
    timeElapsed = 0;

    //initiate the callback loop
    timeout = setTimeout(once, delay);

    Object.defineProperty(this, 'delay', {
      get: function get() {
        return delay;
      },
      set: function set(v) {
        delay = parseInt(v, 10);
      }
    });

    this.reset = function () {
      if (timeout !== false) {
        clearTimeout(timeout);
        timeout = false;
        timeElapsed = 0;
        lastExecution = new Date().getTime();
        timeout = setTimeout(once, delay);
      }
    };

    this.pause = function () {
      if (timeout !== false) {
        clearTimeout(timeout);
        timeout = false;
        timeElapsed = new Date().getTime() - lastExecution;
      }
    };

    this.play = function () {
      lastExecution = new Date().getTime() - timeElapsed;
      timeout = setTimeout(once, Math.max(0, delay - timeElapsed));
      timeElapsed = 0;
    };
  };
});
define('ember-allpurpose/array', ['exports', 'ember-allpurpose/array/in-array'], function (exports, _emberAllpurposeArrayInArray) {
  'use strict';

  exports['default'] = {
    inArray: _emberAllpurposeArrayInArray['default']
  };
  exports.inArray = _emberAllpurposeArrayInArray['default'];
});
define("ember-allpurpose/array/in-array", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (a, v) {
    return !! ~a.indexOf(v);
  };
});
define("ember-allpurpose/array/iterate", ["exports"], function (exports) {
  "use strict";

  exports["default"] = iterate;

  function iterate(keys, fn) {
    var key;
    for (key in keys) {
      if (keys.hasOwnProperty(key)) {
        fn(keys[key]);
      }
    }
  }
});
define('ember-allpurpose/array/merge', ['exports', 'ember-allpurpose/array/iterate'], function (exports, _emberAllpurposeArrayIterate) {
  'use strict';

  exports['default'] = merge;

  function merge(A, B) {
    if (!A || Object.prototype.toString.call(B) !== '[object Object]') {
      return B;
    }
    if (Object.prototype.toString.call(A) !== '[object Object]') {
      return B;
    }

    (0, _emberAllpurposeArrayIterate['default'])(Object.keys(B), function (key) {
      if (A.hasOwnProperty(key)) {
        A[key] = merge(A[key], B[key]);
      } else {
        A[key] = B[key];
      }
    });
    return A;
  }
});
define("ember-allpurpose/cookie", ["exports"], function (exports) {
  "use strict";

  function get(name) {
    var cookies = document.cookie.split(";"),
        index = cookies.length,
        cookieName,
        cookieBody;

    while (index--) {
      cookieName = cookies[index].substr(0, cookies[index].indexOf("="));
      cookieBody = cookies[index].substr(cookies[index].indexOf("=") + 1);
      cookieName = cookieName.replace(/^\s+|\s+$/g, "");
      if (cookieName === name) {
        return decodeURI(cookieBody);
      }
    }

    return false;
  }

  function set(name, value, expires) {
    var date = new Date();
    date.setDate(date.getDate() + expires);
    document.cookie = name + "=" + encodeURI(value) + (expires === null ? "" : "; expires=" + date.toUTCString());
  }

  function del(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  var cookie = {
    get: get,
    set: set,
    del: del
  };

  exports["default"] = cookie;
  exports.get = get;
  exports.set = set;
  exports.del = del;
});
define("ember-allpurpose/cursor/blur-all", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function () {
    if ("activeElement" in document && document.activeElement !== document.body) {
      document.activeElement.blur();
    }
  };
});
define("ember-allpurpose/cursor/deselect-text", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function () {
    if (document.selection) {
      document.selection.empty();
    } else {
      window.getSelection().removeAllRanges();
    }
  };
});
define('ember-allpurpose/cursor/get-position', ['exports', 'ember-allpurpose/dom/is-jquery'], function (exports, _emberAllpurposeDomIsJquery) {
  'use strict';

  exports['default'] = getCursorPosition;

  /**
   *
   * @param input element or jQuery element
   * @return Number the index of the caret in the element
   */
  function getCursorPosition(input) {

    if (input && (0, _emberAllpurposeDomIsJquery['default'])(input)) {
      input = input.get(0);
    }

    // Standard-compliant browsers
    if ('selectionStart' in input) {
      return input.selectionStart;

      // IE
    } else if (document.selection) {
        input.focus();
        var sel = document.selection.createRange();
        var selLen = document.selection.createRange().text.length;
        sel.moveStart('character', -input.value.length);
        return sel.text.length - selLen;
      }
  }
});
define("ember-allpurpose/cursor/select-text", ["exports"], function (exports) {
  "use strict";

  exports["default"] = selectText;

  function selectText(text) {
    var range, selection;

    if (document.body.createTextRange) {
      //ms
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      //all others
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
});
define('ember-allpurpose/cursor/set-position', ['exports', 'ember-allpurpose/cursor/set-selection-range'], function (exports, _emberAllpurposeCursorSetSelectionRange) {
  'use strict';

  /**
   *
   * @param $element element or jQuery element
   * @param index the index at which to place the caret
   */
  function setCursorPosition($element, index) {
    (0, _emberAllpurposeCursorSetSelectionRange['default'])($element, index, index);
  }
});
define('ember-allpurpose/cursor/set-selection-range', ['exports', 'ember-allpurpose/dom/is-jquery'], function (exports, _emberAllpurposeDomIsJquery) {
  'use strict';

  exports['default'] = setSelectionRange;

  /**
   *
   * @param input element or jQuery element
   * @param start the index at which to begin the selection
   * @param end the index after which to end the selection
   */
  function setSelectionRange(input, start, end) {

    if (input && (0, _emberAllpurposeDomIsJquery['default'])(input)) {
      input = input.get(0);
    }

    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(start, end);
    } else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', end);
      range.moveStart('character', start);
      range.select();
    }
  }
});
define("ember-allpurpose/dom", ["exports", "ember-allpurpose/dom/is-element", "ember-allpurpose/dom/is-jquery"], function (exports, _emberAllpurposeDomIsElement, _emberAllpurposeDomIsJquery) {
  "use strict";

  exports["default"] = {
    isElement: _emberAllpurposeDomIsElement["default"],
    isJQuery: _emberAllpurposeDomIsJquery["default"]
  };
  exports.isElement = _emberAllpurposeDomIsElement["default"];
  exports.isJQuery = _emberAllpurposeDomIsJquery["default"];
});
define("ember-allpurpose/dom/is-element", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (o) {
    return typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
  };
});
define("ember-allpurpose/dom/is-jquery", ["exports"], function (exports) {
  /*global jQuery*/
  "use strict";

  exports["default"] = function (o) {
    return jQuery && o instanceof jQuery;
  };
});
define("ember-allpurpose/location", ["exports", "ember-allpurpose/location/origin", "ember-allpurpose/location/protocol"], function (exports, _emberAllpurposeLocationOrigin, _emberAllpurposeLocationProtocol) {
  "use strict";

  exports["default"] = {
    origin: _emberAllpurposeLocationOrigin["default"],
    protocol: _emberAllpurposeLocationProtocol["default"]
  };
  exports.origin = _emberAllpurposeLocationOrigin["default"];
  exports.protocol = _emberAllpurposeLocationProtocol["default"];
});
define('ember-allpurpose/location/origin', ['exports'], function (exports) {
  'use strict';

  var origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  exports['default'] = origin;
});
define('ember-allpurpose/location/protocol', ['exports'], function (exports) {
  'use strict';

  exports['default'] = function (str) {
    var firstSlash = str.indexOf('/'),
        secondSlash = str.indexOf('/', firstSlash + 1);
    if (firstSlash !== -1) {
      if (secondSlash !== -1 && secondSlash - firstSlash === 1) {
        return str.substr(0, secondSlash + 1);
      }
      if (firstSlash === 0) {
        return '/';
      }
      return '';
    }
    return '';
  };
});
define("ember-allpurpose/make-date", ["exports"], function (exports) {
  "use strict";

  exports["default"] = makeDate;

  function makeDate(str) {
    var arr = str.split(/[- :]/);
    var date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
    date.setTime(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
    return date;
  }
});
define('ember-allpurpose/object', ['exports', 'ember-allpurpose/object/keys', 'ember-allpurpose/object/length'], function (exports, _emberAllpurposeObjectKeys, _emberAllpurposeObjectLength) {
  'use strict';

  exports['default'] = {
    keys: _emberAllpurposeObjectKeys['default'],
    length: _emberAllpurposeObjectLength['default']
  };
  exports.keys = _emberAllpurposeObjectKeys['default'];
  exports.length = _emberAllpurposeObjectLength['default'];
});
define('ember-allpurpose/object/keys', ['exports'], function (exports) {
  'use strict';

  exports['default'] = function (o) {
    if (!!Object.keys) {
      return Object.keys(o);
    }
    if (o !== Object(o)) {
      throw new TypeError('Object.keys called on a non-object');
    }
    var k = [],
        p;

    for (p in o) {
      if (Object.prototype.hasOwnProperty.call(o, p)) {
        k.push(p);
      }
    }

    return k;
  };
});
define("ember-allpurpose/object/length", ["exports", "ember-allpurpose/object/keys"], function (exports, _emberAllpurposeObjectKeys) {
  "use strict";

  exports["default"] = function (o) {
    return (0, _emberAllpurposeObjectKeys["default"])(o).length;
  };
});
define('ember-allpurpose/runspired-utils', ['exports', 'ember-allpurpose/dom', 'ember-allpurpose/array', 'ember-allpurpose/cookie', 'ember-allpurpose/location', 'ember-allpurpose/object', 'ember-allpurpose/string', 'ember-allpurpose/animate', 'ember-allpurpose/cursor'], function (exports, _emberAllpurposeDom, _emberAllpurposeArray, _emberAllpurposeCookie, _emberAllpurposeLocation, _emberAllpurposeObject, _emberAllpurposeString, _emberAllpurposeAnimate, _emberAllpurposeCursor) {
  'use strict';

  exports['default'] = {
    dom: _emberAllpurposeDom['default'],
    cookie: _emberAllpurposeCookie['default'],
    location: _emberAllpurposeLocation['default'],
    array: _emberAllpurposeArray['default'],
    string: _emberAllpurposeString['default'],
    object: _emberAllpurposeObject['default'],
    animate: _emberAllpurposeAnimate['default'],
    cursor: _emberAllpurposeCursor['default']
  };
  exports.dom = _emberAllpurposeDom['default'];
  exports.array = _emberAllpurposeArray['default'];
  exports.cookie = _emberAllpurposeCookie['default'];
  exports.location = _emberAllpurposeLocation['default'];
  exports.object = _emberAllpurposeObject['default'];
  exports.string = _emberAllpurposeString['default'];
  exports.animate = _emberAllpurposeAnimate['default'];
  exports.cursor = _emberAllpurposeCursor['default'];
});
define("ember-allpurpose/string", ["exports", "ember-allpurpose/string/char-at", "ember-allpurpose/string/cap-first-letter", "ember-allpurpose/string/pluralize", "ember-allpurpose/string/undescore-to-words", "ember-allpurpose/string/capitalize-words", "ember-allpurpose/string/filter-digits", "ember-allpurpose/string/trim", "ember-allpurpose/string/shrink-new-lines", "ember-allpurpose/string/test", "ember-allpurpose/string/format", "ember-allpurpose/string/get"], function (exports, _emberAllpurposeStringCharAt, _emberAllpurposeStringCapFirstLetter, _emberAllpurposeStringPluralize, _emberAllpurposeStringUndescoreToWords, _emberAllpurposeStringCapitalizeWords, _emberAllpurposeStringFilterDigits, _emberAllpurposeStringTrim, _emberAllpurposeStringShrinkNewLines, _emberAllpurposeStringTest, _emberAllpurposeStringFormat, _emberAllpurposeStringGet) {
  "use strict";

  exports["default"] = {
    charAt: _emberAllpurposeStringCharAt["default"],
    capFirstLetter: _emberAllpurposeStringCapFirstLetter["default"],
    pluralize: _emberAllpurposeStringPluralize["default"],
    underscoreToWords: _emberAllpurposeStringUndescoreToWords["default"],
    capitalizeWords: _emberAllpurposeStringCapitalizeWords["default"],
    filterDigits: _emberAllpurposeStringFilterDigits["default"],
    trim: _emberAllpurposeStringTrim["default"],
    shrinkNewLines: _emberAllpurposeStringShrinkNewLines["default"],
    test: _emberAllpurposeStringTest["default"],
    format: _emberAllpurposeStringFormat["default"],
    sget: _emberAllpurposeStringGet["default"]
  };
  exports.charAt = _emberAllpurposeStringCharAt["default"];
  exports.capFirstLetter = _emberAllpurposeStringCapFirstLetter["default"];
  exports.pluralize = _emberAllpurposeStringPluralize["default"];
  exports.underscoreToWords = _emberAllpurposeStringUndescoreToWords["default"];
  exports.capitalizeWords = _emberAllpurposeStringCapitalizeWords["default"];
  exports.filterDigits = _emberAllpurposeStringFilterDigits["default"];
  exports.trim = _emberAllpurposeStringTrim["default"];
  exports.shrinkNewLines = _emberAllpurposeStringShrinkNewLines["default"];
  exports.test = _emberAllpurposeStringTest["default"];
  exports.format = _emberAllpurposeStringFormat["default"];
  exports.sget = _emberAllpurposeStringGet["default"];
});
define("ember-allpurpose/string/cap-first-letter", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
});
define("ember-allpurpose/string/capitalize-word", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
});
define('ember-allpurpose/string/capitalize-words', ['exports', 'ember-allpurpose/string/cap-first-letter'], function (exports, _emberAllpurposeStringCapFirstLetter) {
  'use strict';

  exports['default'] = function (sentence) {
    return sentence.split(' ').map(function (word) {
      return (0, _emberAllpurposeStringCapFirstLetter['default'])(word);
    }).join(' ');
  };
});
define("ember-allpurpose/string/char-at", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (str, i) {
    return str.substring(i, i + 1);
  };
});
define('ember-allpurpose/string/dasherized-to-camel', ['exports', 'ember-allpurpose/string/capitalize-word', 'ember-allpurpose/string/uncapitalize-word', 'ember-allpurpose/string/dasherized-to-words', 'ember-allpurpose/string/capitalize-words', 'ember-allpurpose/string/strip-whitespace'], function (exports, _emberAllpurposeStringCapitalizeWord, _emberAllpurposeStringUncapitalizeWord, _emberAllpurposeStringDasherizedToWords, _emberAllpurposeStringCapitalizeWords, _emberAllpurposeStringStripWhitespace) {
  'use strict';

  exports['default'] = function (s) {
    return (0, _emberAllpurposeStringUncapitalizeWord['default'])((0, _emberAllpurposeStringStripWhitespace['default'])((0, _emberAllpurposeStringCapitalizeWords['default'])((0, _emberAllpurposeStringDasherizedToWords['default'])(s))));
  };
});
define('ember-allpurpose/string/dasherized-to-words', ['exports'], function (exports) {
  'use strict';

  exports['default'] = dasherizedToWords;

  function dasherizedToWords(s) {
    return s.replace(/-/g, ' ');
  }

  ;
});
define('ember-allpurpose/string/filter-digits', ['exports'], function (exports) {
  //filter everything but 0-9 characters from a string
  'use strict';

  exports['default'] = function (str) {
    return str.replace(/[^\d]/g, '');
  };
});
define('ember-allpurpose/string/format', ['exports', 'ember-allpurpose/string/format/phone-number', 'ember-allpurpose/string/format/append-url-protocol'], function (exports, _emberAllpurposeStringFormatPhoneNumber, _emberAllpurposeStringFormatAppendUrlProtocol) {
  'use strict';

  exports['default'] = {

    phoneNumber: _emberAllpurposeStringFormatPhoneNumber['default'],

    //does not necessarily return a valid url, use with isURLy
    appendUrlProtocol: _emberAllpurposeStringFormatAppendUrlProtocol['default']
  };
  exports.phoneNumber = _emberAllpurposeStringFormatPhoneNumber['default'];
  exports.appendUrlProtocol = _emberAllpurposeStringFormatAppendUrlProtocol['default'];
});
define('ember-allpurpose/string/format/append-url-protocol', ['exports'], function (exports) {
  'use strict';

  exports['default'] = function (str, protocol) {
    protocol = protocol || 'http://';

    function getProtocol(str) {
      var firstSlash = str.indexOf('/'),
          secondSlash = str.indexOf('/', firstSlash + 1);
      if (firstSlash !== -1) {
        if (secondSlash !== -1 && secondSlash - firstSlash === 1) {
          return str.substr(0, secondSlash + 1);
        }
        if (firstSlash === 0) {
          return '/';
        }
        return '';
      }
      return '';
    }

    var protocol_existing = getProtocol(str);

    //check for existing protocol
    if (!protocol_existing) {
      return protocol + str;
    }
    if (protocol_existing !== 'https://' && protocol_existing !== 'http://') {
      return str.replace(protocol_existing, protocol);
    }
    return str;
  };
});
define('ember-allpurpose/string/format/phone-number', ['exports', 'ember-allpurpose/string/char-at', 'ember-allpurpose/string/filter-digits'], function (exports, _emberAllpurposeStringCharAt, _emberAllpurposeStringFilterDigits) {
  'use strict';

  exports['default'] = function (num, format) {

    num = num || '';

    /*
     formats
     ----------------------------
     dot    :   1.234.567.8910
     dash   :   1-234-567-8910 (default)
     pretty :   +1 (234) 567-8910
     */
    var formats = {
      dot: ['1', '.', '.', '.'],
      dash: ['1', '-', '-', '-'],
      pretty: ['+1 ', '(', ') ', '-'],
      plain: ['', '', '', ''],
      'us-plain': ['1', '', '', '']
    },

    //select correct format
    form = format && formats.hasOwnProperty(format) ? formats[format] : formats.dash,

    //strip any existing formatting
    numb = (0, _emberAllpurposeStringFilterDigits['default'])(num),

    //0 if 1 is not present, 1 otherwise
    adj = 0;

    if ((0, _emberAllpurposeStringCharAt['default'])(numb, 0) === '1') {
      adj = 1;
    }
    return numb.replace(/^1?(\d{0,3})(\d{0,3})(\d{0,4})?$/, function (match, p1, p2, p3) {
      var formatted = form[0] + form[1] + p1;
      if (p2) {
        formatted += form[2] + p2;
      }
      if (p3) {
        formatted += form[3] + p3;
      }
      return formatted;
    });
  };
});
define('ember-allpurpose/string/get-protocol', ['exports'], function (exports) {
  'use strict';

  exports['default'] = function (str) {
    var colonIndex = str.indexOf(':');
    if (colonIndex !== -1) {
      return str.substr(0, colonIndex);
    }
    return '';
  };
});
define('ember-allpurpose/string/get', ['exports', 'ember-allpurpose/string/get/occurrence', 'ember-allpurpose/string/get/occurrence-index', 'ember-allpurpose/string/get/protocol'], function (exports, _emberAllpurposeStringGetOccurrence, _emberAllpurposeStringGetOccurrenceIndex, _emberAllpurposeStringGetProtocol) {
  'use strict';

  exports['default'] = {
    occurrenceIndex: _emberAllpurposeStringGetOccurrenceIndex['default'],
    occurrence: _emberAllpurposeStringGetOccurrence['default'],
    protocol: _emberAllpurposeStringGetProtocol['default']
  };
  exports.protocol = _emberAllpurposeStringGetProtocol['default'];
  exports.occurrence = _emberAllpurposeStringGetOccurrence['default'];
  exports.occurrenceIndex = _emberAllpurposeStringGetOccurrenceIndex['default'];
});
define("ember-allpurpose/string/get/occurrence-index", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (str, char, index) {
    var offset = 0,
        occurrence = 0;
    while ((offset = str.indexOf(char, offset)) !== index && offset <= index) {
      offset++;
      occurrence++;
    }
    return occurrence;
  };

  ;
});
define("ember-allpurpose/string/get/occurrence", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (str, char, occurrenceIndex) {
    var count = 0,
        i = 0;
    while (count < occurrenceIndex && (i = str.indexOf(char, i) + 1)) {
      count++;
    }
    if (count == occurrenceIndex) {
      return i - 1;
    }
    return null;
  };

  ;
});
define('ember-allpurpose/string/get/protocol', ['exports'], function (exports) {
  'use strict';

  exports['default'] = function (str) {
    var firstSlash = str.indexOf('/'),
        secondSlash = str.indexOf('/', firstSlash + 1);
    if (firstSlash !== -1) {
      if (secondSlash !== -1 && secondSlash - firstSlash === 1) {
        return str.substr(0, secondSlash + 1);
      }
      if (firstSlash === 0) {
        return '/';
      }
      return '';
    }
    return '';
  };

  ;
});
define('ember-allpurpose/string/get/singular', ['exports', 'ember-allpurpose/string/test/is-plural'], function (exports, _emberAllpurposeStringTestIsPlural) {
  'use strict';

  exports['default'] = getSingular;

  function getSingular(str) {
    if ((0, _emberAllpurposeStringTestIsPlural['default'])(str)) {
      return str.substring(0, str.length - 1);
    }
    return str;
  }
});
define('ember-allpurpose/string/pluralize', ['exports'], function (exports) {
  'use strict';

  exports['default'] = function (s) {
    var plural = s;
    if (plural.slice(-1) === 'y') {
      plural = plural.slice(0, -1) + 'ies';
    } else if (plural.slice(-1) === 's' && plural.slice(-2) !== 'es') {
      plural = plural.slice(0, -1) + 'es';
    } else {
      plural = plural + 's';
    }

    return plural;
  };
});
define('ember-allpurpose/string/shrink-new-lines', ['exports'], function (exports) {
  //only allow n consecutive newline characters
  'use strict';

  exports['default'] = function (str, n) {
    str = str || '';
    var re = new RegExp('\n{' + (n + 1) + '}', "g");
    return str.replace(re, '');
  };
});
define('ember-allpurpose/string/strip-whitespace', ['exports'], function (exports) {
  'use strict';

  exports['default'] = stripWhiteSpace;

  function stripWhiteSpace(s) {
    return s.replace(/\s/g, '');
  }
});
define("ember-allpurpose/string/test", ["exports", "ember-allpurpose/string/test/is-luhn", "ember-allpurpose/string/test/is-email", "ember-allpurpose/string/test/is-urly", "ember-allpurpose/string/test/is-phone-number", "ember-allpurpose/string/test/is-credit-card", "ember-allpurpose/string/test/is-al-num", "ember-allpurpose/string/test/is-lowercase", "ember-allpurpose/string/test/is-integer", "ember-allpurpose/string/test/is-float", "ember-allpurpose/string/test/is-wordy", "ember-allpurpose/string/test/has-no-whitespace"], function (exports, _emberAllpurposeStringTestIsLuhn, _emberAllpurposeStringTestIsEmail, _emberAllpurposeStringTestIsUrly, _emberAllpurposeStringTestIsPhoneNumber, _emberAllpurposeStringTestIsCreditCard, _emberAllpurposeStringTestIsAlNum, _emberAllpurposeStringTestIsLowercase, _emberAllpurposeStringTestIsInteger, _emberAllpurposeStringTestIsFloat, _emberAllpurposeStringTestIsWordy, _emberAllpurposeStringTestHasNoWhitespace) {
  "use strict";

  //various type tests
  exports["default"] = {
    isLuhn: _emberAllpurposeStringTestIsLuhn["default"],
    isEmail: _emberAllpurposeStringTestIsEmail["default"],
    isURLy: _emberAllpurposeStringTestIsUrly["default"],
    isPhoneNumber: _emberAllpurposeStringTestIsPhoneNumber["default"],
    isCreditCard: _emberAllpurposeStringTestIsCreditCard["default"],
    isAlNum: _emberAllpurposeStringTestIsAlNum["default"],
    isLowercase: _emberAllpurposeStringTestIsLowercase["default"],
    isInteger: _emberAllpurposeStringTestIsInteger["default"],
    isFloat: _emberAllpurposeStringTestIsFloat["default"],
    isWordy: _emberAllpurposeStringTestIsWordy["default"],
    hasNoWhitespace: _emberAllpurposeStringTestHasNoWhitespace["default"]
  };
  exports.isLuhn = _emberAllpurposeStringTestIsLuhn["default"];
  exports.isEmail = _emberAllpurposeStringTestIsEmail["default"];
  exports.isURLy = _emberAllpurposeStringTestIsUrly["default"];
  exports.isPhoneNumber = _emberAllpurposeStringTestIsPhoneNumber["default"];
  exports.isCreditCard = _emberAllpurposeStringTestIsCreditCard["default"];
  exports.isAlNum = _emberAllpurposeStringTestIsAlNum["default"];
  exports.isLowercase = _emberAllpurposeStringTestIsLowercase["default"];
  exports.isInteger = _emberAllpurposeStringTestIsInteger["default"];
  exports.isFloat = _emberAllpurposeStringTestIsFloat["default"];
  exports.isWordy = _emberAllpurposeStringTestIsWordy["default"];
  exports.hasNoWhitespace = _emberAllpurposeStringTestHasNoWhitespace["default"];
});
define("ember-allpurpose/string/test/has-no-whitespace", ["exports"], function (exports) {
  //validate that a string does not contain whitespace
  "use strict";

  exports["default"] = function (str) {
    return !/\s/.test(str);
  };
});
define("ember-allpurpose/string/test/is-al-num", ["exports"], function (exports) {
  //validate that a string contains only alpha numeric characters
  "use strict";

  exports["default"] = function (str) {
    return (/^[a-zA-Z0-9]+$/.test(str)
    );
  };
});
define("ember-allpurpose/string/test/is-credit-card", ["exports", "ember-allpurpose/string/test/is-luhn", "ember-allpurpose/string/filter-digits"], function (exports, _emberAllpurposeStringTestIsLuhn, _emberAllpurposeStringFilterDigits) {
  "use strict";

  //validate (syntactically) a credit card number

  exports["default"] = function (value, type) {
    value = (0, _emberAllpurposeStringFilterDigits["default"])(value);
    if ((0, _emberAllpurposeStringTestIsLuhn["default"])(value)) {
      var valids = [["amex", "34", 15], ["amex", "37", 15], ["disc", "6011", 16], ["mc", "51", 16], ["mc", "52", 16], ["mc", "53", 16], ["mc", "54", 16], ["mc", "55", 16], ["visa", "4", 13], ["visa", "4", 16]],
          i = valids.length;
      type = type.toLowerCase();
      while (i--) {
        if (valids[i][0] === type && value.indexOf(valids[i][1]) === 0 && valids[i][2] === value.length) {
          return true;
        }
      }
    }
    return false;
  };
});
define("ember-allpurpose/string/test/is-custom-protocol", ["exports", "ember-allpurpose/string/get-protocol"], function (exports, _emberAllpurposeStringGetProtocol) {
  "use strict";

  exports["default"] = isCustomProtocol;

  function isCustomProtocol(str) {
    var protocol = (0, _emberAllpurposeStringGetProtocol["default"])(str);
    return !!protocol && protocol.indexOf('http') === -1;
  }
});
define("ember-allpurpose/string/test/is-email", ["exports"], function (exports) {
  //see http://www.regular-expressions.info/email.html for discussion
  "use strict";

  exports["default"] = function (str) {
    return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(str)
    );
  };
});
define("ember-allpurpose/string/test/is-float", ["exports"], function (exports) {
  //validate that a string contains only 0-9 chars and a single decimal point
  "use strict";

  exports["default"] = function (str) {
    return (/^[0-9]+(\.[0-9]*)?$/.test(str)
    );
  };
});
define("ember-allpurpose/string/test/is-integer", ["exports"], function (exports) {
  //validate that a string contains only 0-9 chars
  "use strict";

  exports["default"] = function (str) {
    return (/^[0-9]+$/.test(str)
    );
  };
});
define("ember-allpurpose/string/test/is-lowercase", ["exports"], function (exports) {
  //validate that a string contains only lower case characters
  "use strict";

  exports["default"] = function (str) {
    return !/[A-Z]/.test(str);
  };
});
//numbers and symbols are ignored
define("ember-allpurpose/string/test/is-luhn", ["exports"], function (exports) {
  //checksum for credit cards and bank routing numbers
  "use strict";

  exports["default"] = function (cc) {
    var sum = 0,
        i;
    for (i = cc.length - 2; i >= 0; i -= 2) {
      sum += [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][parseInt(Utils.string.charAt(cc, i), 10)];
    }
    for (i = cc.length - 1; i >= 0; i -= 2) {
      sum += parseInt(Utils.string.charAt(cc, i), 10);
    }
    return sum % 10 == 0;
  };
});
define("ember-allpurpose/string/test/is-phone-number", ["exports"], function (exports) {
  //validate a US phone number
  "use strict";

  exports["default"] = function (str) {
    return (/^(\+?1[ \.-]?|1[ \.-]?)?(\([2-9]\d{2}\)|[2-9]\d{2})[ \.-]?\d{3}[ \.-]?\d{4}/.test(str)
    );
  };
});
define('ember-allpurpose/string/test/is-plural', ['exports', 'ember-allpurpose/string/char-at'], function (exports, _emberAllpurposeStringCharAt) {
  'use strict';

  exports['default'] = isPlural;

  function isPlural(name) {
    var lastChar = (0, _emberAllpurposeStringCharAt['default'])(name, name.length - 1);
    return lastChar === 's';
  }
});
define("ember-allpurpose/string/test/is-urly", ["exports"], function (exports) {
  //perfect url detection is hard, this just checks that there's some semblance of a TLD
  "use strict";

  exports["default"] = function (str) {
    var regex = /^(http(s)?\:\/\/)?[a-zA-Z0-9][a-zA-Z0-9\-]*\.[a-zA-Z]{2}/;
    return regex.test(str);
  };
});
define("ember-allpurpose/string/test/is-wordy", ["exports"], function (exports) {
  //validate that a string is only a word tokens (no spaces) \w\-
  "use strict";

  exports["default"] = function (str) {
    return (/^[\w\-]+$/.test(str)
    );
  };
});
define('ember-allpurpose/string/trim', ['exports'], function (exports) {
  //remove beginning and ending whitespace
  'use strict';

  exports['default'] = function (str) {
    str = str || '';
    return str.replace(/^\s+|\s+$/g, '');
  };
});
define("ember-allpurpose/string/uncapitalize-word", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (s) {
    return s.charAt(0).toLowerCase() + s.slice(1);
  };
});
define('ember-allpurpose/string/undescore-to-words', ['exports'], function (exports) {
  'use strict';

  exports['default'] = function (s) {
    return s.replace(/_/g, ' ');
  };
});
define('ember-cli-app-version/components/app-version', ['exports', 'ember', 'ember-cli-app-version/templates/app-version'], function (exports, _ember, _emberCliAppVersionTemplatesAppVersion) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    tagName: 'span',
    layout: _emberCliAppVersionTemplatesAppVersion['default']
  });
});
define('ember-cli-app-version/initializer-factory', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = initializerFactory;

  var classify = _ember['default'].String.classify;

  function initializerFactory(name, version) {
    var registered = false;

    return function () {
      if (!registered && name && version) {
        var appName = classify(name);
        _ember['default'].libraries.register(appName, version);
        registered = true;
      }
    };
  }
});
define("ember-cli-app-version/templates/app-version", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modules/ember-cli-app-version/templates/app-version.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "version", ["loc", [null, [1, 0], [1, 11]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('ember-gestures/components/async-element', ['exports', 'ember', 'ember-gestures/components/gesture-element'], function (exports, _ember, _emberGesturesComponentsGestureElement) {
  'use strict';

  var computed = _ember['default'].computed;
  var observer = _ember['default'].observer;
  var get = _ember['default'].get;

  /**!
   *
   * Provides the ability to easily build a
   * gesture-ful async-button implementation
   *
   */
  exports['default'] = _emberGesturesComponentsGestureElement['default'].extend({

    classNameBindings: ['actionState'],
    actionState: 'default',

    isPending: computed('actionState', function () {
      return this.get('actionState') === 'pending';
    }),

    _getParams: function _getParams(actionName) {
      var _this = this;

      var actionArguments = this._super(actionName);

      var callbackHandler = function callbackHandler(promise) {
        _this.set('promise', promise);
        _this.set('actionState', 'pending');
      };

      actionArguments.splice(1, 0, callbackHandler);
      return actionArguments;
    },

    __observePromiseState: observer('promise', function promiseTheComponentState() {
      var _this2 = this;

      get(this, 'promise').then(function () {
        if (!_this2.isDestroyed) {
          _this2.set('actionState', 'fulfilled');
        }
      })['catch'](function () {
        if (!_this2.isDestroyed) {
          _this2.set('actionState', 'rejected');
        }
      });
    })

  });
});
define('ember-gestures/components/context-element', ['exports', 'ember-gestures/components/gesture-element'], function (exports, _emberGesturesComponentsGestureElement) {
  'use strict';

  exports['default'] = _emberGesturesComponentsGestureElement['default'].extend({

    _getParams: function _getParams(actionName) {
      var actionArguments = this._super(actionName);
      actionArguments.splice(1, 0, this.element);
      return actionArguments;
    }

  });
});
define('ember-gestures/components/fast-action', ['exports', 'ember', 'ember-gestures/templates/components/fast-action'], function (exports, _ember, _emberGesturesTemplatesComponentsFastAction) {
  'use strict';

  var SafeString = _ember['default'].Handlebars.SafeString;

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberGesturesTemplatesComponentsFastAction['default'],

    tagName: 'button',
    attributeBindings: ['style', 'type'],
    style: new SafeString('touch-action: manipulation; -ms-touch-action: manipulation;'),
    type: 'button',
    text: '',
    action: '',
    context: '',

    click: function click() {
      this.sendAction('action', this.get('context'));
    }

  });
});
define('ember-gestures/components/fast-async', ['exports', 'ember', 'ember-gestures/templates/components/fast-async', 'ember-gestures/components/async-element'], function (exports, _ember, _emberGesturesTemplatesComponentsFastAsync, _emberGesturesComponentsAsyncElement) {
  'use strict';

  var SafeString = _ember['default'].Handlebars.SafeString;

  exports['default'] = _emberGesturesComponentsAsyncElement['default'].extend({

    layout: _emberGesturesTemplatesComponentsFastAsync['default'],
    tagName: 'button',
    attributeBindings: ['style', 'disabled', 'type'],
    style: new SafeString('touch-action: manipulation; -ms-touch-action: manipulation;'),
    type: 'button',
    text: '',
    context: null

  });
});
define('ember-gestures/components/gesture-element', ['exports', 'ember', 'ember-gestures/templates/components/gesture-element', 'ember-gestures/mixins/recognizers', 'ember-allpurpose/string/dasherized-to-camel'], function (exports, _ember, _emberGesturesTemplatesComponentsGestureElement, _emberGesturesMixinsRecognizers, _emberAllpurposeStringDasherizedToCamel) {
  'use strict';

  var Component = _ember['default'].Component;

  function makeActionHandler(event, action) {

    return function actionHandler() {

      var target = this.get('target');
      var args = undefined;

      if (target && target.send) {
        args = this._getParams(action);
        target.send.apply(this, args);
      } else {
        args = this._getParams(event + 'Action');
        this.sendAction.apply(this, args);
      }
    };
  }

  /**!
   *
   * Provides the ability to easily build a
   * gesture-ful async-button implementation
   *
   */
  exports['default'] = Component.extend(_emberGesturesMixinsRecognizers['default'], {

    layout: _emberGesturesTemplatesComponentsGestureElement['default'],

    context: '',
    _getParams: function _getParams(actionName) {
      var context = this.get('context');
      return [actionName, context];
    },

    init: function init() {

      this._super();

      var v;
      var attrs = this.get('attrs') || this;

      for (var key in attrs) {

        if (attrs.hasOwnProperty(key)) {
          v = attrs[key];
          if (v === 'toString') {
            continue;
          } // ignore useless items
          if (_ember['default'].typeOf(v) === 'function') {
            continue;
          }

          //setup listener for key
          if (key.indexOf('on-') === 0) {
            var _event = (0, _emberAllpurposeStringDasherizedToCamel['default'])(key.substr(3));
            var action = attrs[key];

            this.set(_event + 'Action', action);

            this.set(_event, makeActionHandler(_event, action));
          }
        }
      }
    }

  });
});
define('ember-gestures/components/slide-toggle', ['exports', 'ember', 'ember-velocity-mixin', 'ember-gestures/mixins/recognizers', 'ember-gestures/templates/components/slide-toggle'], function (exports, _ember, _emberVelocityMixin, _emberGesturesMixinsRecognizers, _emberGesturesTemplatesComponentsSlideToggle) {
  'use strict';

  var run = _ember['default'].run;
  var copy = _ember['default'].copy;
  var computed = _ember['default'].computed;
  var Component = _ember['default'].Component;
  var throttle = run.throttle;
  var debounce = run.debounce;

  exports['default'] = Component.extend(_emberGesturesMixinsRecognizers['default'], _emberVelocityMixin['default'], {
    tagName: 'slide-toggle',
    classNameBindings: ['_value:isOn:isOff'],

    layout: _emberGesturesTemplatesComponentsSlideToggle['default'],

    recognizers: 'pan tap press',

    unidirectional: false,
    value: false,
    _value: false,
    target: null,

    __updateCSS: function __updateCSS(value) {
      if (!value) {
        this.$('.slideToggleButton').removeAttr('style');
      } else {

        var element = this.$('.slideToggleButton').get(0);
        var maxMovement = element.clientWidth * 0.75;

        if (Math.abs(value) > maxMovement) {
          value = value < 0 ? 0 : maxMovement;
        } else if (value < 0) {
          value = maxMovement + value;
        }

        // TODO can this happen via this.css ?
        this.animate(element, { translateX: value + 'px' }, { duration: 1 });
      }
    },

    'on-toggle': null,
    _defaultAction: 'slideToggleChange',

    _notify: function _notify() {
      var unidirectional = this.get('unidirectional');
      var action = this.get('on-toggle');
      var defaultAction = this.get('_defaultAction');
      var target = this.get('target');
      var context = this.get('context');

      if (unidirectional || action) {

        if (target && target.send) {
          target.send(action, context);
        } else {
          action = action ? 'on-toggle' : defaultAction;
          this.sendAction(action, context);
        }
      }
    },

    _trigger: function _trigger(dX) {

      this.__updateCSS();

      if (dX && dX > 8 || !dX && dX !== 0) {
        this.toggleProperty('_value');
        this._notify();
      }
      return false;
    },

    pan: function pan(e) {
      var allowPanRight = !this.get('_value');
      var dX = e.originalEvent.gesture.deltaX;

      if (allowPanRight) {
        if (dX < 0) {
          dX = 0;
        }
      } else {
        if (dX > 0) {
          dX = 0;
        }
      }

      throttle(this, this.__updateCSS, dX, 2);
      //schedule the dismissal
      debounce(this, this._trigger, Math.abs(dX), 250);
      return false;
    },

    tap: function tap() {
      return this._trigger();
    },

    press: function press() {
      return this._trigger();
    },

    init: function init() {
      this._super();

      var value = this.get('value');

      // setup unidirection flow if desired
      if (!this.get('unidirectional')) {
        this.set('_value', computed.alias('value'));
      } else {
        this.set('_value', copy(value, true));
      }
    }

  });
});
define('ember-gestures/event_dispatcher', ['exports', 'ember', 'ember-gestures/hammer-events', 'ember-allpurpose/string/dasherized-to-camel', 'jquery', 'ember-gestures/utils/is-mobile', 'ember-getowner-polyfill'], function (exports, _ember, _emberGesturesHammerEvents, _emberAllpurposeStringDasherizedToCamel, _jquery, _emberGesturesUtilsIsMobile, _emberGetownerPolyfill) {
  'use strict';

  var ROOT_ELEMENT_CLASS = 'ember-application';
  var ROOT_ELEMENT_SELECTOR = '.' + ROOT_ELEMENT_CLASS;

  var eventEndings = {
    pan: ['Start', 'Move', 'End', 'Cancel', 'Left', 'Right', 'Up', 'Down'],
    pinch: ['Start', 'Move', 'End', 'Cancel', 'In', 'Out'],
    press: ['Up'],
    rotate: ['Start', 'Move', 'End', 'Cancel'],
    swipe: ['Left', 'Right', 'Up', 'Down'],
    tap: []
  };

  var assert = _ember['default'].assert;
  var EventDispatcher = _ember['default'].EventDispatcher;
  var merge = _ember['default'].merge;
  var isNone = _ember['default'].isNone;
  var set = _ember['default'].set;
  var get = _ember['default'].get;

  var assign = _ember['default'].assign || merge;

  exports['default'] = EventDispatcher.extend({

    /**
     Whether or not to cache handler paths on the element
     when `useCapture` is also true.
     This needs to be replaced by a feature flag.
     @private
     @type {boolean}
     */
    useFastPaths: false,
    useCapture: false,

    canDispatchToEventManager: false,

    _gestures: null,
    _initializeGestures: function _initializeGestures() {
      var _this = this;

      var list = getModuleList();
      var events = assign({}, _emberGesturesHammerEvents['default']);

      list.forEach(function (name) {
        var recognizer = (0, _emberGetownerPolyfill['default'])(_this)._lookupFactory('ember-gesture:recognizers/' + name);

        if (recognizer) {
          addEvent(events, recognizer.recognizer, recognizer.eventName || name);
        }
      });

      // add them to the event dispatcher
      this.set('_gestures', events);
    },

    _fastFocus: function _fastFocus() {
      var $root = (0, _jquery['default'])(this.get('rootElement'));
      $root.on('click.ember-gestures, touchend.ember-gestures', function (e) {

        /*
         Implements fastfocus mechanisms on mobile web/Cordova
         */
        if (_emberGesturesUtilsIsMobile['default'].is()) {
          var $element = (0, _jquery['default'])(e.currentTarget);
          var $target = (0, _jquery['default'])(e.target);

          /*
           If the click was on an input element that needs to be able to focus, recast
           the click as a "focus" event.
           This fixes tap events on mobile where keyboardShrinksView or similar is true.
           Such devices depend on the ghost click to trigger focus, but the ghost click
           will never reach the element.
           */
          var notFocusableTypes = ['submit', 'file', 'button', 'hidden', 'reset', 'range', 'radio', 'image', 'checkbox'];

          //fastfocus
          if ($element.is('textarea') || $element.is('input') && notFocusableTypes.indexOf($element.attr('type')) === -1) {
            $element.focus();
          } else if ($target.is('textarea') || $target.is('input') && notFocusableTypes.indexOf($target.attr('type')) === -1) {
            $target.focus();
          }
        }
      });
    },

    willDestroy: function willDestroy() {
      (0, _jquery['default'])(this.get('rootElement')).off('.ember-gestures');
      this._super.apply(this, arguments);
    },

    _finalEvents: null,

    setup: function setup(addedEvents, rootElement) {
      this._initializeGestures();
      var events = this._finalEvents = assign({}, get(this, 'events'));

      var event = undefined;

      // remove undesirable events from Ember's Eventing
      if (this.get('removeTracking')) {
        events.touchstart = null;
        events.touchmove = null;
        events.touchcancel = null;
        events.touchend = null;

        events.mousedown = null;
        events.mouseenter = null;
        events.mousemove = null;
        events.mouseleave = null;
        events.mouseup = null;

        events.drag = null;
        events.dragend = null;
        events.dragenter = null;
        events.dragleave = null;
        events.dragover = null;
        events.dragstart = null;
        events.drop = null;

        events.dblclick = null;
      }

      // assign custom events into Ember's Eventing
      assign(events, addedEvents || {});

      // delete unwanted events
      for (event in events) {
        if (events.hasOwnProperty(event)) {
          if (!events[event]) {
            delete events[event];
          }
        }
      }

      // assign our events into Ember's Eventing
      assign(events, this.get('_gestures'));

      if (!isNone(rootElement)) {
        set(this, 'rootElement', rootElement);
      }
      this._fastFocus();

      rootElement = (0, _jquery['default'])(get(this, 'rootElement'));

      assert('You cannot use the same root element (' + (rootElement.selector || rootElement[0].tagName) + ') multiple times in an Ember.Application', !rootElement.is(ROOT_ELEMENT_SELECTOR));
      assert('You cannot make a new Ember.Application using a root element that is a descendent of an existing Ember.Application', !rootElement.closest(ROOT_ELEMENT_SELECTOR).length);
      assert('You cannot make a new Ember.Application using a root element that is an ancestor of an existing Ember.Application', !rootElement.find(ROOT_ELEMENT_SELECTOR).length);

      rootElement.addClass(ROOT_ELEMENT_CLASS);

      assert('Unable to add \'' + ROOT_ELEMENT_CLASS + '\' class to rootElement. Make sure you set rootElement to the body or an element in the body.', rootElement.is(ROOT_ELEMENT_SELECTOR));

      for (event in events) {
        if (events.hasOwnProperty(event)) {
          this.setupHandler(rootElement, event, events[event]);
        }
      }
    }

  });

  function addEvent(hash, gesture, name) {
    var eventName = (0, _emberAllpurposeStringDasherizedToCamel['default'])(name);
    var eventBase = eventName.toLowerCase();
    var endings = eventEndings[gesture];

    hash[eventBase] = eventName;
    endings.forEach(function (ending) {
      var event = eventName + ending;

      hash[event.toLowerCase()] = event;
    });
  }

  // this function can be replaced in ember 1.13 with a private api
  // and in ember 2.0 with a potentially public api matching 1.13's
  // private api. This is a stop gap for pre-ember 1.13
  function getModuleList() {
    /* global requirejs */
    var list = [];

    for (var moduleName in requirejs.entries) {
      if (requirejs.entries.hasOwnProperty(moduleName)) {
        var parts = moduleName.match(/ember-gestures\/recognizers\/(.*)/);

        if (parts && parts[1].indexOf('jshint') === -1) {
          list.push(parts[1]);
        }
      }
    }
    return list;
  }
});
define('ember-gestures/eventer', ['exports', 'jquery'], function (exports, _jquery) {
  'use strict';

  function getEventName(event) {
    return event.indexOf('.') !== -1 ? event.substr(0, event.indexOf('.')) : event;
  }

  function FakeEvent(e, target) {
    this.preventDefault = e.preventDefault.bind(e);
    this.stopPropagation = e.stopPropagation.bind(e);
    this.stopImmediatePropagation = e.stopImmediatePropagation.bind(e);
    this.currentTarget = target;
  }

  function filterFunction(handlers, walker) {
    return function (e) {
      var node = walker.closest(e.target);
      if (node) {
        if (node[0] === 'id') {
          return handlers.id.call(node[1], e);
        } else {
          var event = new FakeEvent(e, node[1]);
          return handlers.action.call(node[1], event);
        }
      }
    };
  }

  function Eventer($element, walker) {

    var _listeners = [];
    var element = (0, _jquery['default'])($element).get(0);
    element._listeners = _listeners;

    var _handlers = {};
    function addHandler(event, type, fn) {

      var hasHandler = !!_handlers[event];
      _handlers[event] = _handlers[event] || {};
      _handlers[event][type] = fn;

      if (!hasHandler) {
        var filterFn = filterFunction(_handlers[event], walker);
        _listeners.push([event, filterFn]);
        element.addEventListener(event, filterFn, true);
      }
      return filterFunction(event, walker);
    }

    this.on = function (eventName, selector, fn) {
      var event = getEventName(eventName);
      var type = selector === '.ember-view' ? 'id' : 'action';
      addHandler(event, type, fn);
    };

    this.off = function () {
      if (element._listeners) {
        element._listeners.forEach(function (item) {
          element.removeEventListener(item[0], item[1], true);
        });
      }
      _listeners = [];
      element._listeners = _listeners;
    };
  }

  exports['default'] = function ($element, walker) {
    return new Eventer($element, walker);
  };
});
define('ember-gestures/hammer-events', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {

    pan: 'pan',
    panstart: 'panStart',
    panmove: 'panMove',
    panend: 'panEnd',
    pancancel: 'panCancel',
    panleft: 'panLeft',
    panright: 'panRight',
    panup: 'panUp',
    pandown: 'panDown',

    pinch: 'pinch',
    pinchstart: 'pinchStart',
    pinchmove: 'pinchMove',
    pinchend: 'pinchEnd',
    pinchcancel: 'pinchCancel',
    pinchin: 'pinchIn',
    pinchout: 'pinchOut',

    press: 'press',
    pressup: 'pressUp',

    rotate: 'rotate',
    rotatestart: 'rotateStart',
    rotatemove: 'rotateMove',
    rotateend: 'rotateEnd',
    rotatecancel: 'rotateCancel',

    swipe: 'swipe',
    swipeleft: 'swipeLeft',
    swiperight: 'swipeRight',
    swipeup: 'swipeUp',
    swipedown: 'swipeDown',

    tap: 'tap'

  };
});
define('ember-gestures/mixins/recognizers', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var inject = _ember['default'].inject;
  var Mixin = _ember['default'].Mixin;
  var on = _ember['default'].on;

  exports['default'] = Mixin.create({

    '-gestures': inject.service('-gestures'),

    recognizers: null,
    managerOptions: null,
    __instance: null,
    __manager: function __manager() {
      var instance = this.get('__instance');
      if (instance) {
        return instance;
      }

      var opts = this.get('managerOptions') || { domEvents: true };

      opts.useCapture = this.get('-gestures.useCapture');
      instance = new Hammer.Manager(this.element, opts);
      this.set('__instance', instance);

      return instance;
    },

    __setupRecognizers: on('didInsertElement', function () {
      var _this = this;

      var promise = this.get('recognizers');
      if (promise) {
        promise.then(function (recognizers) {
          if (_this.get('isDestroyed')) {
            return;
          }
          var manager = _this.__manager();
          // sort the recognizers
          for (var i = 0; i < recognizers.length; i++) {
            var r = recognizers[i];
            var currentIndex = i;
            if (r.exclude.length) {
              for (var j = 0; j < r.exclude.length; j++) {
                var newIndex = recognizers.indexOf(r.exclude[j]);
                if (newIndex > 0 && currentIndex < newIndex) {
                  recognizers.splice(currentIndex, 1);
                  recognizers.splice(newIndex, 0, r);
                  currentIndex = newIndex;
                }
              }
            }
          }

          for (var i = 0; i < recognizers.length; i++) {
            manager.add(recognizers[i]);
          }
        });
      }
    }),

    __teardownRecognizers: on('willDestroyElement', function () {
      var instance = this.get('__instance');
      if (instance) {
        //instance.off();
        instance.destroy();
        this.set('__instance', null);
      }
    }),

    init: function init() {
      this._super();

      // setup recognizers
      var recognizers = this.get('recognizers');
      if (recognizers) {
        this.set('recognizers', this.get('-gestures').retrieve(recognizers.split(' ')));
      }
    }

  });
});
define('ember-gestures/recognizers/double-tap', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: ['tap'],
    exclude: [],
    options: {
      taps: 2
    },
    recognizer: 'tap'
  };
});
define('ember-gestures/recognizers/pan', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    options: { direction: Hammer.DIRECTION_HORIZONTAL },
    recognizer: 'pan'
  };
});
define('ember-gestures/recognizers/pinch', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    options: {},
    recognizer: 'pinch'
  };
});
define('ember-gestures/recognizers/press', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    options: {},
    recognizer: 'press'
  };
});
define('ember-gestures/recognizers/rotate', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    options: {},
    recognizer: 'rotate'
  };
});
define('ember-gestures/recognizers/single-tap', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: ['double-tap'],
    eventName: 'tap',
    options: {
      taps: 1
    },
    recognizer: 'tap'
  };
});
define('ember-gestures/recognizers/swipe', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    options: { threshold: 25, direction: Hammer.DIRECTION_HORIZONTAL },
    recognizer: 'swipe'
  };
});
define('ember-gestures/recognizers/tap', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    options: {},
    recognizer: 'tap'
  };
});
define('ember-gestures/recognizers/vertical-pan', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    eventName: 'pan',
    options: { direction: Hammer.DIRECTION_VERTICAL },
    recognizer: 'pan'
  };
});
define('ember-gestures/recognizers/vertical-swipe', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    eventName: 'swipe',
    options: { threshold: 25, direction: Hammer.DIRECTION_VERTICAL },
    recognizer: 'swipe'
  };
});
define('ember-gestures/registry-walker', ['exports'], function (exports) {
  'use strict';

  exports['default'] = ViewWalker;

  function ViewWalker(registry) {

    function inRegistry(id) {
      return !!registry[id];
    }

    this.closest = function (closest) {
      do {
        if (closest.id && inRegistry(closest.id)) {
          return ['id', closest];
        }
        if (closest.hasAttribute('data-ember-action')) {
          return ['action', closest];
        }
      } while (closest = closest.parentNode);

      return null;
    };
  }
});
define('ember-gestures/services/-gestures', ['exports', 'ember', 'ember-allpurpose/string/dasherized-to-camel', 'ember-allpurpose/string/capitalize-word', 'ember-getowner-polyfill'], function (exports, _ember, _emberAllpurposeStringDasherizedToCamel, _emberAllpurposeStringCapitalizeWord, _emberGetownerPolyfill) {
  'use strict';

  var Service = _ember['default'].Service;
  var RSVP = _ember['default'].RSVP;
  var Promise = // jshint ignore:line
  // jshint ignore:line
  RSVP.Promise;
  var defer = RSVP.defer;

  exports['default'] = Service.extend({

    _recognizers: null,

    retrieve: function retrieve(names) {
      var _this = this;

      var promises = names.map(function (name) {
        return _this.lookupRecognizer(name);
      });
      return RSVP.all(promises);
    },

    createRecognizer: function createRecognizer(name, details) {
      var eventName = (0, _emberAllpurposeStringDasherizedToCamel['default'])(details.eventName || name).toLowerCase();
      var gesture = (0, _emberAllpurposeStringCapitalizeWord['default'])(details.recognizer);

      var options = details.options || {};
      options.event = eventName;
      options.name = name;

      var Recognizer = new Hammer[gesture](options);
      Recognizer.initialize = defer();

      this.set('_recognizers.' + name, Recognizer);
      return Recognizer;
    },

    setupRecognizer: function setupRecognizer(name, details) {
      var _this2 = this;

      return Promise.resolve(this.createRecognizer(name, details))

      // includes
      .then(function (Recognizer) {
        if (details.include) {
          var included = details.include.map(function (name) {
            return _this2.__speedyLookupRecognizer(name);
          });
          return RSVP.all(included).then(function (recognizers) {
            Recognizer.recognizeWith(recognizers);
            return Recognizer;
          });
        }
        return Recognizer;
      })

      // excludes
      .then(function (Recognizer) {
        if (details.exclude) {
          var excluded = details.exclude.map(function (name) {
            return _this2.__speedyLookupRecognizer(name);
          });

          return RSVP.all(excluded).then(function (recognizers) {
            Recognizer.requireFailure(recognizers);
            Recognizer.exclude = recognizers;
            Recognizer.initialize.resolve(Recognizer);
            return Recognizer;
          });
        } else {
          Recognizer.exclude = [];
          Recognizer.initialize.resolve(Recognizer);
          return Recognizer;
        }
      });
    },

    __speedyLookupRecognizer: function __speedyLookupRecognizer(name) {
      var recognizer = this.get('_recognizers.' + name);
      if (recognizer) {
        return recognizer;
      }

      var path = 'ember-gesture:recognizers/' + name;
      var details = (0, _emberGetownerPolyfill['default'])(this)._lookupFactory(path);

      if (details) {
        return this.setupRecognizer(name, details);
      }

      return Promise.reject(new Error('ember-gestures/recognizers/' + name + ' was not found. You can scaffold this recognizer with \'ember g recognizer ' + name + '\''));
    },

    lookupRecognizer: function lookupRecognizer(name) {
      var recognizer = this.get('_recognizers.' + name);
      if (recognizer) {
        return recognizer.initialize.promise.then(function (recognizer) {
          return recognizer;
        });
      }

      var path = 'ember-gesture:recognizers/' + name;
      var details = (0, _emberGetownerPolyfill['default'])(this)._lookupFactory(path);

      if (details) {
        return this.setupRecognizer(name, details);
      }

      return Promise.reject(new Error('ember-gestures/recognizers/' + name + ' was not found. You can scaffold this recognizer with \'ember g recognizer ' + name + '\''));
    },

    init: function init() {
      this._super();
      this._recognizers = {};
    }

  });
});
define("ember-gestures/templates/components/fast-action", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modules/ember-gestures/templates/components/fast-action.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0], ["content", "text", ["loc", [null, [1, 9], [1, 17]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-gestures/templates/components/fast-async", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modules/ember-gestures/templates/components/fast-async.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "isPending", ["loc", [null, [1, 8], [1, 17]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 19]]], 0, 0], ["content", "text", ["loc", [null, [1, 19], [1, 27]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-gestures/templates/components/gesture-element", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modules/ember-gestures/templates/components/gesture-element.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-gestures/templates/components/slide-toggle", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 37
          }
        },
        "moduleName": "modules/ember-gestures/templates/components/slide-toggle.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "slideToggleButton");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("ember-gestures/utils/is-mobile", ["exports"], function (exports) {
  //ensure singleton
  "use strict";

  function MobileDetection() {

    var IS_MOBILE;

    // Set our belief about whether the devise is mobile by inspecting ontouchstart
    this.detect = function () {
      IS_MOBILE = !!("ontouchstart" in window);
    };

    // Return the current belief about whether the browser is mobile.
    this.is = function () {
      return IS_MOBILE;
    };

    // This will generally only be done in tests.
    this.fake = function (value) {
      IS_MOBILE = value;
    };

    // Set the initial value of IS_MOBILE so that calls to isMobile will have
    // the correct value.
    this.detect();
  }

  exports["default"] = new MobileDetection();
});
define("ember-getowner-polyfill/index", ["exports", "ember"], function (exports, _ember) {
  "use strict";

  _ember["default"].deprecate("ember-getowner-polyfill is now a true polyfill. Use Ember.getOwner directly instead of importing from ember-getowner-polyfill", false, {
    id: "ember-getowner-polyfill.import",
    until: '2.0.0'
  });

  exports["default"] = _ember["default"].getOwner;
});
define('ember-hammertime/components/component', ['exports', 'ember', 'ember-hammertime/mixins/touch-action'], function (exports, _ember, _emberHammertimeMixinsTouchAction) {
  'use strict';

  var Component = _ember['default'].Component;

  exports['default'] = Component.reopen(_emberHammertimeMixinsTouchAction['default']);
});
define('ember-hammertime/components/link-component', ['exports', 'ember', 'ember-hammertime/mixins/touch-action'], function (exports, _ember, _emberHammertimeMixinsTouchAction) {
  'use strict';

  var LinkComponent = _ember['default'].LinkComponent || _ember['default'].LinkView;

  exports['default'] = LinkComponent.reopen(_emberHammertimeMixinsTouchAction['default']);
});
define('ember-hammertime/mixins/touch-action', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var computed = _ember['default'].computed;
  var Mixin = _ember['default'].Mixin;
  var Handlebars = _ember['default'].Handlebars;
  var SafeString = Handlebars.SafeString;

  exports['default'] = Mixin.create({
    attributeBindings: ['touchActionStyle:style'],
    touchActionStyle: computed(function () {
      // we apply if click is present
      var applyStyle = this.click;

      if (!applyStyle) {
        // we apply if tagName
        var tagName = this.get('tagName');
        var type = this.get('type');

        var isFocusable = ['select', 'button', 'input', 'a', 'textarea'].indexOf(tagName) !== -1;

        if (isFocusable) {
          if (tagName === 'input') {
            isFocusable = ['button', 'submit', 'text', 'file'].indexOf(type) !== -1;
          }
        }

        applyStyle = isFocusable;
      }

      return new SafeString(applyStyle ? 'touch-action: manipulation; -ms-touch-action: manipulation;' : '');
    })
  });
});
define('ember-load-initializers/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = function (app, prefix) {
    var regex = new RegExp('^' + prefix + '\/((?:instance-)?initializers)\/');
    var getKeys = Object.keys || _ember['default'].keys;

    getKeys(requirejs._eak_seen).map(function (moduleName) {
      return {
        moduleName: moduleName,
        matches: regex.exec(moduleName)
      };
    }).filter(function (dep) {
      return dep.matches && dep.matches.length === 2;
    }).forEach(function (dep) {
      var moduleName = dep.moduleName;

      var module = require(moduleName, null, null, true);
      if (!module) {
        throw new Error(moduleName + ' must export an initializer.');
      }

      var initializerType = _ember['default'].String.camelize(dep.matches[1].substring(0, dep.matches[1].length - 1));
      var initializer = module['default'];
      if (!initializer.name) {
        var initializerName = moduleName.match(/[^\/]+\/?$/)[0];
        initializer.name = initializerName;
      }

      if (app[initializerType]) {
        app[initializerType](initializer);
      }
    });
  };
});
define('ember-resolver/container-debug-adapter', ['exports', 'ember', 'ember-resolver/utils/module-registry'], function (exports, _ember, _emberResolverUtilsModuleRegistry) {
  'use strict';

  var ContainerDebugAdapter = _ember['default'].ContainerDebugAdapter;

  var ModulesContainerDebugAdapter = null;

  function getPod(type, key, prefix) {
    var match = key.match(new RegExp('^/?' + prefix + '/(.+)/' + type + '$'));
    if (match) {
      return match[1];
    }
  }

  // Support Ember < 1.5-beta.4
  // TODO: Remove this after 1.5.0 is released
  if (typeof ContainerDebugAdapter !== 'undefined') {

    /*
     * This module defines a subclass of Ember.ContainerDebugAdapter that adds two
     * important features:
     *
     *  1) is able provide injections to classes that implement `extend`
     *     (as is typical with Ember).
     */

    ModulesContainerDebugAdapter = ContainerDebugAdapter.extend({
      _moduleRegistry: null,

      init: function init() {
        this._super.apply(this, arguments);

        if (!this._moduleRegistry) {
          this._moduleRegistry = new _emberResolverUtilsModuleRegistry['default']();
        }
      },

      /**
        The container of the application being debugged.
        This property will be injected
        on creation.
         @property container
        @default null
      */

      /**
        The resolver instance of the application
        being debugged. This property will be injected
        on creation.
         @property resolver
        @default null
      */

      /**
        Returns true if it is possible to catalog a list of available
        classes in the resolver for a given type.
         @method canCatalogEntriesByType
        @param {string} type The type. e.g. "model", "controller", "route"
        @return {boolean} whether a list is available for this type.
      */
      canCatalogEntriesByType: function canCatalogEntriesByType() /* type */{
        return true;
      },

      /**
        Returns the available classes a given type.
         @method catalogEntriesByType
        @param {string} type The type. e.g. "model", "controller", "route"
        @return {Array} An array of classes.
      */
      catalogEntriesByType: function catalogEntriesByType(type) {
        var moduleNames = this._moduleRegistry.moduleNames();
        var types = _ember['default'].A();

        var prefix = this.namespace.modulePrefix;

        for (var i = 0, l = moduleNames.length; i < l; i++) {
          var key = moduleNames[i];

          if (key.indexOf(type) !== -1) {
            // Check if it's a pod module
            var name = getPod(type, key, this.namespace.podModulePrefix || prefix);
            if (!name) {
              // Not pod
              name = key.split(type + 's/').pop();

              // Support for different prefix (such as ember-cli addons).
              // Uncomment the code below when
              // https://github.com/ember-cli/ember-resolver/pull/80 is merged.

              //var match = key.match('^/?(.+)/' + type);
              //if (match && match[1] !== prefix) {
              // Different prefix such as an addon
              //name = match[1] + '@' + name;
              //}
            }
            types.addObject(name);
          }
        }
        return types;
      }
    });
  }

  exports['default'] = ModulesContainerDebugAdapter;
});
define('ember-resolver/index', ['exports', 'ember-resolver/resolver'], function (exports, _emberResolverResolver) {
  'use strict';

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberResolverResolver['default'];
    }
  });
});
define('ember-resolver/resolver', ['exports', 'ember', 'ember-resolver/utils/module-registry', 'ember-resolver/utils/class-factory', 'ember-resolver/utils/make-dictionary'], function (exports, _ember, _emberResolverUtilsModuleRegistry, _emberResolverUtilsClassFactory, _emberResolverUtilsMakeDictionary) {
  /*globals require */

  'use strict';

  /*
   * This module defines a subclass of Ember.DefaultResolver that adds two
   * important features:
   *
   *  1) The resolver makes the container aware of es6 modules via the AMD
   *     output. The loader's _moduleEntries is consulted so that classes can be
   *     resolved directly via the module loader, without needing a manual
   *     `import`.
   *  2) is able to provide injections to classes that implement `extend`
   *     (as is typical with Ember).
   */

  var _Ember$String = _ember['default'].String;
  var underscore = _Ember$String.underscore;
  var classify = _Ember$String.classify;
  var dasherize = _Ember$String.dasherize;
  var get = _ember['default'].get;
  var DefaultResolver = _ember['default'].DefaultResolver;

  function parseName(fullName) {
    /*jshint validthis:true */

    if (fullName.parsedName === true) {
      return fullName;
    }

    var prefix, type, name;
    var fullNameParts = fullName.split('@');

    // HTMLBars uses helper:@content-helper which collides
    // with ember-cli namespace detection.
    // This will be removed in a future release of HTMLBars.
    if (fullName !== 'helper:@content-helper' && fullNameParts.length === 2) {
      var prefixParts = fullNameParts[0].split(':');

      if (prefixParts.length === 2) {
        prefix = prefixParts[1];
        type = prefixParts[0];
        name = fullNameParts[1];
      } else {
        var nameParts = fullNameParts[1].split(':');

        prefix = fullNameParts[0];
        type = nameParts[0];
        name = nameParts[1];
      }
    } else {
      fullNameParts = fullName.split(':');
      type = fullNameParts[0];
      name = fullNameParts[1];
    }

    var fullNameWithoutType = name;
    var namespace = get(this, 'namespace');
    var root = namespace;

    return {
      parsedName: true,
      fullName: fullName,
      prefix: prefix || this.prefix({ type: type }),
      type: type,
      fullNameWithoutType: fullNameWithoutType,
      name: name,
      root: root,
      resolveMethodName: "resolve" + classify(type)
    };
  }

  function resolveOther(parsedName) {
    /*jshint validthis:true */

    _ember['default'].assert('`modulePrefix` must be defined', this.namespace.modulePrefix);

    var normalizedModuleName = this.findModuleName(parsedName);

    if (normalizedModuleName) {
      var defaultExport = this._extractDefaultExport(normalizedModuleName, parsedName);

      if (defaultExport === undefined) {
        throw new Error(" Expected to find: '" + parsedName.fullName + "' within '" + normalizedModuleName + "' but got 'undefined'. Did you forget to `export default` within '" + normalizedModuleName + "'?");
      }

      if (this.shouldWrapInClassFactory(defaultExport, parsedName)) {
        defaultExport = (0, _emberResolverUtilsClassFactory['default'])(defaultExport);
      }

      return defaultExport;
    } else {
      return this._super(parsedName);
    }
  }

  // Ember.DefaultResolver docs:
  //   https://github.com/emberjs/ember.js/blob/master/packages/ember-application/lib/system/resolver.js
  var Resolver = DefaultResolver.extend({
    resolveOther: resolveOther,
    parseName: parseName,
    resolveTemplate: resolveOther,
    pluralizedTypes: null,
    moduleRegistry: null,

    makeToString: function makeToString(factory, fullName) {
      return '' + this.namespace.modulePrefix + '@' + fullName + ':';
    },

    shouldWrapInClassFactory: function shouldWrapInClassFactory() /* module, parsedName */{
      return false;
    },

    init: function init() {
      this._super();
      this.moduleBasedResolver = true;

      if (!this._moduleRegistry) {
        this._moduleRegistry = new _emberResolverUtilsModuleRegistry['default']();
      }

      this._normalizeCache = (0, _emberResolverUtilsMakeDictionary['default'])();

      this.pluralizedTypes = this.pluralizedTypes || (0, _emberResolverUtilsMakeDictionary['default'])();

      if (!this.pluralizedTypes.config) {
        this.pluralizedTypes.config = 'config';
      }
      this._deprecatedPodModulePrefix = false;
    },

    normalize: function normalize(fullName) {
      return this._normalizeCache[fullName] || (this._normalizeCache[fullName] = this._normalize(fullName));
    },

    _normalize: function _normalize(fullName) {
      // A) Convert underscores to dashes
      // B) Convert camelCase to dash-case, except for helpers where we want to avoid shadowing camelCase expressions
      // C) replace `.` with `/` in order to make nested controllers work in the following cases
      //      1. `needs: ['posts/post']`
      //      2. `{{render "posts/post"}}`
      //      3. `this.render('posts/post')` from Route

      var split = fullName.split(':');
      if (split.length > 1) {
        if (split[0] === 'helper') {
          return split[0] + ':' + split[1].replace(/_/g, '-');
        } else {
          return split[0] + ':' + dasherize(split[1].replace(/\./g, '/'));
        }
      } else {
        return fullName;
      }
    },

    pluralize: function pluralize(type) {
      return this.pluralizedTypes[type] || (this.pluralizedTypes[type] = type + 's');
    },

    podBasedLookupWithPrefix: function podBasedLookupWithPrefix(podPrefix, parsedName) {
      var fullNameWithoutType = parsedName.fullNameWithoutType;

      if (parsedName.type === 'template') {
        fullNameWithoutType = fullNameWithoutType.replace(/^components\//, '');
      }

      return podPrefix + '/' + fullNameWithoutType + '/' + parsedName.type;
    },

    podBasedModuleName: function podBasedModuleName(parsedName) {
      var podPrefix = this.namespace.podModulePrefix || this.namespace.modulePrefix;

      return this.podBasedLookupWithPrefix(podPrefix, parsedName);
    },

    podBasedComponentsInSubdir: function podBasedComponentsInSubdir(parsedName) {
      var podPrefix = this.namespace.podModulePrefix || this.namespace.modulePrefix;
      podPrefix = podPrefix + '/components';

      if (parsedName.type === 'component' || parsedName.fullNameWithoutType.match(/^components/)) {
        return this.podBasedLookupWithPrefix(podPrefix, parsedName);
      }
    },

    resolveEngine: function resolveEngine(parsedName) {
      var engineName = parsedName.fullNameWithoutType;
      var engineModule = engineName + '/engine';

      if (this._moduleRegistry.has(engineModule)) {
        return this._extractDefaultExport(engineModule);
      }
    },

    resolveRouteMap: function resolveRouteMap(parsedName) {
      var engineName = parsedName.fullNameWithoutType;
      var engineRoutesModule = engineName + '/routes';

      if (this._moduleRegistry.has(engineRoutesModule)) {
        var routeMap = this._extractDefaultExport(engineRoutesModule);

        _ember['default'].assert('The route map for ' + engineName + ' should be wrapped by \'buildRoutes\' before exporting.', routeMap.isRouteMap);

        return routeMap;
      }
    },

    mainModuleName: function mainModuleName(parsedName) {
      // if router:main or adapter:main look for a module with just the type first
      var tmpModuleName = parsedName.prefix + '/' + parsedName.type;

      if (parsedName.fullNameWithoutType === 'main') {
        return tmpModuleName;
      }
    },

    defaultModuleName: function defaultModuleName(parsedName) {
      return parsedName.prefix + '/' + this.pluralize(parsedName.type) + '/' + parsedName.fullNameWithoutType;
    },

    prefix: function prefix(parsedName) {
      var tmpPrefix = this.namespace.modulePrefix;

      if (this.namespace[parsedName.type + 'Prefix']) {
        tmpPrefix = this.namespace[parsedName.type + 'Prefix'];
      }

      return tmpPrefix;
    },

    /**
      A listing of functions to test for moduleName's based on the provided
     `parsedName`. This allows easy customization of additional module based
     lookup patterns.
      @property moduleNameLookupPatterns
     @returns {Ember.Array}
     */
    moduleNameLookupPatterns: _ember['default'].computed(function () {
      return [this.podBasedModuleName, this.podBasedComponentsInSubdir, this.mainModuleName, this.defaultModuleName];
    }),

    findModuleName: function findModuleName(parsedName, loggingDisabled) {
      var moduleNameLookupPatterns = this.get('moduleNameLookupPatterns');
      var moduleName;

      for (var index = 0, _length = moduleNameLookupPatterns.length; index < _length; index++) {
        var item = moduleNameLookupPatterns[index];

        var tmpModuleName = item.call(this, parsedName);

        // allow treat all dashed and all underscored as the same thing
        // supports components with dashes and other stuff with underscores.
        if (tmpModuleName) {
          tmpModuleName = this.chooseModuleName(tmpModuleName, parsedName);
        }

        if (tmpModuleName && this._moduleRegistry.has(tmpModuleName)) {
          moduleName = tmpModuleName;
        }

        if (!loggingDisabled) {
          this._logLookup(moduleName, parsedName, tmpModuleName);
        }

        if (moduleName) {
          return moduleName;
        }
      }
    },

    chooseModuleName: function chooseModuleName(moduleName, parsedName) {
      var _this = this;

      var underscoredModuleName = underscore(moduleName);

      if (moduleName !== underscoredModuleName && this._moduleRegistry.has(moduleName) && this._moduleRegistry.has(underscoredModuleName)) {
        throw new TypeError("Ambiguous module names: `" + moduleName + "` and `" + underscoredModuleName + "`");
      }

      if (this._moduleRegistry.has(moduleName)) {
        return moduleName;
      } else if (this._moduleRegistry.has(underscoredModuleName)) {
        return underscoredModuleName;
      }
      // workaround for dasherized partials:
      // something/something/-something => something/something/_something
      var partializedModuleName = moduleName.replace(/\/-([^\/]*)$/, '/_$1');

      if (this._moduleRegistry.has(partializedModuleName)) {
        _ember['default'].deprecate('Modules should not contain underscores. ' + 'Attempted to lookup "' + moduleName + '" which ' + 'was not found. Please rename "' + partializedModuleName + '" ' + 'to "' + moduleName + '" instead.', false, { id: 'ember-resolver.underscored-modules', until: '3.0.0' });

        return partializedModuleName;
      }
      _ember['default'].runInDebug(function () {
        var isCamelCaseHelper = parsedName.type === 'helper' && !!moduleName.match(/[a-z]+[A-Z]+/);
        if (isCamelCaseHelper) {
          _this._camelCaseHelperWarnedNames = _this._camelCaseHelperWarnedNames || [];
          var alreadyWarned = _this._camelCaseHelperWarnedNames.indexOf(parsedName.fullName) > -1;
          if (!alreadyWarned && _this._moduleRegistry.has(dasherize(moduleName))) {
            _this._camelCaseHelperWarnedNames.push(parsedName.fullName);
            _ember['default'].warn('Attempted to lookup "' + parsedName.fullName + '" which ' + 'was not found. In previous versions of ember-resolver, a bug would have ' + 'caused the module at "' + dasherize(moduleName) + '" to be ' + 'returned for this camel case helper name. This has been fixed. ' + 'Use the dasherized name to resolve the module that would have been ' + 'returned in previous versions.', false, { id: 'ember-resolver.camelcase-helper-names', until: '3.0.0' });
          }
        }
      });
    },

    // used by Ember.DefaultResolver.prototype._logLookup
    lookupDescription: function lookupDescription(fullName) {
      var parsedName = this.parseName(fullName);

      var moduleName = this.findModuleName(parsedName, true);

      return moduleName;
    },

    // only needed until 1.6.0-beta.2 can be required
    _logLookup: function _logLookup(found, parsedName, description) {
      if (!_ember['default'].ENV.LOG_MODULE_RESOLVER && !parsedName.root.LOG_RESOLVER) {
        return;
      }

      var symbol, padding;

      if (found) {
        symbol = '[✓]';
      } else {
        symbol = '[ ]';
      }

      if (parsedName.fullName.length > 60) {
        padding = '.';
      } else {
        padding = new Array(60 - parsedName.fullName.length).join('.');
      }

      if (!description) {
        description = this.lookupDescription(parsedName);
      }

      _ember['default'].Logger.info(symbol, parsedName.fullName, padding, description);
    },

    knownForType: function knownForType(type) {
      var moduleKeys = this._moduleRegistry.moduleNames();

      var items = (0, _emberResolverUtilsMakeDictionary['default'])();
      for (var index = 0, length = moduleKeys.length; index < length; index++) {
        var moduleName = moduleKeys[index];
        var fullname = this.translateToContainerFullname(type, moduleName);

        if (fullname) {
          items[fullname] = true;
        }
      }

      return items;
    },

    translateToContainerFullname: function translateToContainerFullname(type, moduleName) {
      var prefix = this.prefix({ type: type });

      // Note: using string manipulation here rather than regexes for better performance.
      // pod modules
      // '^' + prefix + '/(.+)/' + type + '$'
      var podPrefix = prefix + '/';
      var podSuffix = '/' + type;
      var start = moduleName.indexOf(podPrefix);
      var end = moduleName.indexOf(podSuffix);

      if (start === 0 && end === moduleName.length - podSuffix.length && moduleName.length > podPrefix.length + podSuffix.length) {
        return type + ':' + moduleName.slice(start + podPrefix.length, end);
      }

      // non-pod modules
      // '^' + prefix + '/' + pluralizedType + '/(.+)$'
      var pluralizedType = this.pluralize(type);
      var nonPodPrefix = prefix + '/' + pluralizedType + '/';

      if (moduleName.indexOf(nonPodPrefix) === 0 && moduleName.length > nonPodPrefix.length) {
        return type + ':' + moduleName.slice(nonPodPrefix.length);
      }
    },

    _extractDefaultExport: function _extractDefaultExport(normalizedModuleName) {
      var module = require(normalizedModuleName, null, null, true /* force sync */);

      if (module && module['default']) {
        module = module['default'];
      }

      return module;
    }
  });

  Resolver.reopenClass({
    moduleBasedResolver: true
  });

  exports['default'] = Resolver;
});
define('ember-resolver/utils/class-factory', ['exports'], function (exports) {
  'use strict';

  exports['default'] = classFactory;

  function classFactory(klass) {
    return {
      create: function create(injections) {
        if (typeof klass.extend === 'function') {
          return klass.extend(injections);
        } else {
          return klass;
        }
      }
    };
  }
});
define("ember-resolver/utils/create", ["exports", "ember"], function (exports, _ember) {
  "use strict";

  var create = Object.create || _ember["default"].create;
  if (!(create && !create(null).hasOwnProperty)) {
    throw new Error("This browser does not support Object.create(null), please polyfil with es5-sham: http://git.io/yBU2rg");
  }

  exports["default"] = create;
});
define('ember-resolver/utils/make-dictionary', ['exports', 'ember-resolver/utils/create'], function (exports, _emberResolverUtilsCreate) {
  'use strict';

  exports['default'] = makeDictionary;

  function makeDictionary() {
    var cache = (0, _emberResolverUtilsCreate['default'])(null);
    cache['_dict'] = null;
    delete cache['_dict'];
    return cache;
  }
});
define('ember-resolver/utils/module-registry', ['exports', 'ember'], function (exports, _ember) {
  /*globals requirejs, require */

  'use strict';

  if (typeof requirejs.entries === 'undefined') {
    requirejs.entries = requirejs._eak_seen;
  }

  function ModuleRegistry(entries) {
    this._entries = entries || requirejs.entries;
  }

  ModuleRegistry.prototype.moduleNames = function ModuleRegistry_moduleNames() {
    return (Object.keys || _ember['default'].keys)(this._entries);
  };

  ModuleRegistry.prototype.has = function ModuleRegistry_has(moduleName) {
    return moduleName in this._entries;
  };

  ModuleRegistry.prototype.get = function ModuleRegistry_get(moduleName) {
    var exportName = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];

    var module = require(moduleName);
    return module && module[exportName];
  };

  exports['default'] = ModuleRegistry;
});
define('ember-route-action-helper/-private/internals', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var ClosureActionModule = undefined;

  if ('ember-htmlbars/keywords/closure-action' in _ember['default'].__loader.registry) {
    ClosureActionModule = _ember['default'].__loader.require('ember-htmlbars/keywords/closure-action');
  } else if ('ember-routing-htmlbars/keywords/closure-action' in _ember['default'].__loader.registry) {
    ClosureActionModule = _ember['default'].__loader.require('ember-routing-htmlbars/keywords/closure-action');
  } else {
    ClosureActionModule = {};
  }

  var ACTION = ClosureActionModule.ACTION;
  exports.ACTION = ACTION;
});
define('ember-route-action-helper/helpers/route-action', ['exports', 'ember', 'ember-route-action-helper/-private/internals'], function (exports, _ember, _emberRouteActionHelperPrivateInternals) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  var emberArray = _ember['default'].A;
  var Helper = _ember['default'].Helper;
  var assert = _ember['default'].assert;
  var computed = _ember['default'].computed;
  var typeOf = _ember['default'].typeOf;
  var get = _ember['default'].get;
  var getOwner = _ember['default'].getOwner;
  var run = _ember['default'].run;
  var runInDebug = _ember['default'].runInDebug;

  function getRoutes(router) {
    return emberArray(router.router.currentHandlerInfos).mapBy('handler').reverse();
  }

  function getRouteWithAction(router, actionName) {
    var action = undefined;
    var handler = emberArray(getRoutes(router)).find(function (route) {
      var actions = route.actions || route._actions;
      action = actions[actionName];

      return typeOf(action) === 'function';
    });

    return { action: action, handler: handler };
  }

  exports['default'] = Helper.extend({
    router: computed(function () {
      return getOwner(this).lookup('router:main');
    }).readOnly(),

    compute: function compute(_ref) {
      var _ref2 = _toArray(_ref);

      var actionName = _ref2[0];

      var params = _ref2.slice(1);

      var router = get(this, 'router');
      assert('[ember-route-action-helper] Unable to lookup router', router);

      runInDebug(function () {
        var _getRouteWithAction = getRouteWithAction(router, actionName);

        var handler = _getRouteWithAction.handler;

        assert('[ember-route-action-helper] Unable to find action ' + actionName, handler);
      });

      var routeAction = function routeAction() {
        var _getRouteWithAction2 = getRouteWithAction(router, actionName);

        var action = _getRouteWithAction2.action;
        var handler = _getRouteWithAction2.handler;

        for (var _len = arguments.length, invocationArgs = Array(_len), _key = 0; _key < _len; _key++) {
          invocationArgs[_key] = arguments[_key];
        }

        var args = params.concat(invocationArgs);
        return run.join.apply(run, [handler, action].concat(_toConsumableArray(args)));
      };

      routeAction[_emberRouteActionHelperPrivateInternals.ACTION] = true;

      return routeAction;
    }
  });
});//# sourceMappingURL=addons.map
