/* Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Defines the namespace for easyrp.
 * @author guibinkong@google.com (Guibin Kong)
 * @nocompile
 */

/**
 * Defines the name space for Google Connect Tools.
 */

// Safety net in case we're used outside google.load()
if (!('google' in window)) {
  /**
   * @namespace Name space for Easy Relying Parties.
   */
  window.google = {};
}
if (!('identitytoolkit' in window.google)) {
  /**
   * @namespace Name space for Easy Relying Parties.
   */
  window.google.identitytoolkit = {};
}

/**
 * @namespace Name space for Easy Relying Parties.
 */
window.google.identitytoolkit.easyrp =
    window.google.identitytoolkit.easyrp || {};

/**
 * @fileoverview Description of this file.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Namespace alias for CDS.
 */
window.cds = window.google.identitytoolkit.easyrp;

/**
 * @fileoverview Defines some common utility functions.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Namespace for utility functions.
 */
window.google.identitytoolkit.easyrp.util =
    window.google.identitytoolkit.easyrp.util || {};

/**
 * Logs a message to the console of the browser for debugging.
 * @param {string} message The message to log.
 */
window.google.identitytoolkit.easyrp.util.log = function(message) {
  try {
    if (window.console && window.console.log) {
      window.console.log(message);
    }
  } catch (ex) {
    // Ignore if cannot log to console.
  }
};

/**
 * UUID allows multiple instances on the same page.
 * @type {number}
 * @private
 */
window.google.identitytoolkit.easyrp.util.uuidCounter_ = new Date().getTime();

/**
 * Computes a UUID for this widget. If a UUID is set on the options, use it.
 * Otherwise generates one.
 * @param {Object} options The options object of this widget.
 * @return {number | string} The uuid of this widget.
 */
window.google.identitytoolkit.easyrp.util.generateUuid = function(options) {
  var newUuid;
  if (options && options.uuid) {
    newUuid = options.uuid;
  } else {
    newUuid = ++window.google.identitytoolkit.easyrp.util.uuidCounter_;
  }
  return newUuid;
};

/**
 * Creates a form to submit the {@code parameters} to the {@code targetUrl}.
 * @param {string} targetUrl The URL to which the form will submit.
 * @param {{key1: value1, key2: value2, ...}} parameters The parameters in the
 *     form.
 * @param {Window} opt_win The optional window in which the form is created. If
 *     missing, current {@code window} object is used.
 * @return {Element} The created DOM element.
 * @private
 */
window.google.identitytoolkit.easyrp.util.createForm_ = function(targetUrl,
    parameters, opt_win) {
  var win = opt_win || window;
  if (!targetUrl) {
    throw 'The targetUrl cannot be null.';
  }
  var myForm = win.document.createElement('form');
  myForm.method = 'post';
  myForm.action = targetUrl;
  if (parameters) {
    for (var k in parameters) {
      var myInput = win.document.createElement('input');
      myInput.setAttribute('type', 'hidden');
      myInput.setAttribute('name', k);
      if (parameters[k] === null || parameters[k] === undefined) {
        myInput.setAttribute('value', '');
      } else {
        myInput.setAttribute('value', parameters[k]);
      }
      myForm.appendChild(myInput);
    }
  }
  win.document.body.appendChild(myForm);
  return myForm;
};

/**
 * Creates a form with {@code parameters} and submit it to {@code targetUrl}.
 * @param {string} targetUrl The URL to which the form will submit.
 * @param {{key1: value1, key2: value2, ...}} parameters The parameters in the
 *     form.
 * @param {Window} opt_win The optional window in which the form is created. If
 *     missing, current {@code window} object is used.
 */
window.google.identitytoolkit.easyrp.util.postTo = function(targetUrl,
    parameters, opt_win) {
  var win = opt_win || window;
  var myForm = window.google.identitytoolkit.easyrp.util.createForm_(targetUrl,
      parameters, win);
  myForm.submit();
  win.document.body.removeChild(myForm);
};

/**
 * Returns the URL params. e.g. To get the value of the "foo" param in the
 * URL the code can be: var foo = parseUrlParams()['foo'];
 * @param {string} url The URL to parse.
 * @return {Object} The URL params array.
 */
window.google.identitytoolkit.easyrp.util.parseUrlParams = function(url) {
  var params = [];
  var segments = url.slice(url.indexOf('?') + 1).split('&');
  for (var i = 0; i < segments.length; i++) {
    var pair = segments[i].split('=');
    if (pair.length == 2) {
      params[pair[0]] = decodeURIComponent(pair[1]);
    } else {
      params[pair[0]] = undefined;
    }
  }
  return params;
};

/**
 * Sends the request to the given URL with POST method instead of GET method.
 * A hidden form is used to post the request.
 * @param {string} targetUrl The URL to post.
 * @param {Object} parent The parent element to which the form appends.
 */
window.google.identitytoolkit.easyrp.util.formRedirect = function(targetUrl,
    parent) {
  var url = targetUrl.substring(0, targetUrl.indexOf('?'));
  var params =
      window.google.identitytoolkit.easyrp.util.parseUrlParams(targetUrl);
  window.google.identitytoolkit.easyrp.util.postTo(url, params, parent);
};

/**
 * @fileoverview Defines utility functions to validate parameter.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * @namespcae Parameter validators.
 */
window.google.identitytoolkit.easyrp.param = {};

/**
 * Checks a parameter value is not null or undefined.
 * @param {any} value The value of a parameter.
 * @param {string} opt_paramName An optional name of the parameter.
 */
window.google.identitytoolkit.easyrp.param.notNull = function(value,
    opt_paramName) {
  if (value === undefined || value === null) {
    window.google.identitytoolkit.easyrp.param.throwError_(
        'Parameter %%param%% cannot be null.', opt_paramName);
  }
};

/**
 * Checks a parameter value is not empty. That is, the value must evaluate to
 * true.
 * @param {any} value The value of a parameter.
 * @param {string} opt_paramName An optional name of the parameter.
 */
window.google.identitytoolkit.easyrp.param.notEmpty = function(value,
    opt_paramName) {
  if (!value) {
    window.google.identitytoolkit.easyrp.param.throwError_(
        'Parameter %%param%% cannot be empty.', opt_paramName);
  }
};

/**
 * Checks a parameter value must be a non-empty array.
 * @param {any} value The value of a parameter.
 * @param {string} opt_paramName An optional name of the parameter.
 */
window.google.identitytoolkit.easyrp.param.notEmptyArray = function(value,
    opt_paramName) {
  if (!value) {
    window.google.identitytoolkit.easyrp.param.throwError_(
        'Parameter %%param%% cannot be empty.', opt_paramName);
  }
  if (!jQuery.isArray(value)) {
    window.google.identitytoolkit.easyrp.param.throwError_(
        'Parameter %%param%% is not an array.', opt_paramName);
  }
  if (!value.length) {
    window.google.identitytoolkit.easyrp.param.throwError_(
        'Parameter %%param%% cannot be an empty array.', opt_paramName);
  }
};

/**
 * Checks a parameter value must be a non-empty array.
 * @param {any} value The value of a parameter.
 * @param {string} opt_paramName An optional name of the parameter.
 */
window.google.identitytoolkit.easyrp.param.notEmptyFunction = function(value,
    opt_paramName) {
  if (!value) {
    window.google.identitytoolkit.easyrp.param.throwError_(
        'Parameter %%param%% cannot be empty.', opt_paramName);
  }
  if (!jQuery.isFunction(value)) {
    window.google.identitytoolkit.easyrp.param.throwError_(
        'Parameter %%param%% is not a function.', opt_paramName);
  }
};

/**
 * Throws an error to indicate a failed parameter validation.
 * @param {string} message The error message.
 * @param {string} opt_paramName An optional name of the parameter.
 * @private
 */
window.google.identitytoolkit.easyrp.param.throwError_ = function(message,
    opt_paramName) {
  try {
    if (console && console.trace) {
      console.trace();
    }
  } catch (e) {
  }
  var param = opt_paramName ? ' \'' + opt_paramName + '\'' : '';
  throw message.replace(/\%\%param\%\%/g, param);
};

/**
 * @fileoverview Defines utility method to extend class.
 *
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * A class can extends parent class.
 * @param {Function} parentClass The parent class to be extended.
 */
Function.prototype.inheritsFrom = function(parentClass) {
  window.google.identitytoolkit.easyrp.param.notEmptyFunction(parentClass,
      'parentClass');

  this.prototype = new parentClass;
  this.prototype.constructor = this;
  this.prototype.parentClass = parentClass.prototype;
};

/**
 * @fileoverview Defines the basic JSON objects used in CDS RPC.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Name space for AJAX CDS RPC.
 */
window.google.identitytoolkit.easyrp.rpc =
    window.google.identitytoolkit.easyrp.rpc || {};

/**
 * @class Base class for all RPC objects (Request, Response, and Notification).
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.RpcObject = function() {};

/**
 * Transfers the RPC object to a normal object and sets the storage timestamp.
 * @return {string} The normal object represents the RPC object.
 */
window.google.identitytoolkit.easyrp.rpc.RpcObject.prototype.toJSON =
    function() {
  var json = {jsonrpc: '2.0', timestamp: new Date().getTime()};
  return json;
};

/**
 * Returns the JSON String format of the RPC object.
 * @return {string} The JSON String format.
 */
window.google.identitytoolkit.easyrp.rpc.RpcObject.prototype.toString =
    function() {
  return JSON.stringify(this.toJSON());
};

/**
 * @class Base class for Request and Notification.
 * @param {string} method The name of the method to be invoked.
 * @param {object} params The parameter values to be used during the invocation
 *     of the method.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.AbstractRequest = function(method,
    params) {
  this.method_ = method;
  this.params_ = params;
};
window.google.identitytoolkit.easyrp.rpc.AbstractRequest.inheritsFrom(
    window.google.identitytoolkit.easyrp.rpc.RpcObject);

/**
 * Sets the name of the method to be invoked.
 * @param {string} method The name of the method to be invoked.
 */
window.google.identitytoolkit.easyrp.rpc.AbstractRequest.prototype.setMethod =
    function(method) {
  this.method_ = method;
};

/**
 * Returns the name of the method to be invoked.
 * @return {string} The name of the method to be invoked.
 */
window.google.identitytoolkit.easyrp.rpc.AbstractRequest.prototype.getMethod =
    function() {
  return this.method_;
};

/**
 * Sets the parameter values to be used during the invocation of the method.
 * @param {object} params The parameter values to be used during the invocation
 *     of the method.
 */
window.google.identitytoolkit.easyrp.rpc.AbstractRequest.prototype.
    setParameters = function(params) {
  this.params_ = params;
};

/**
 * Returns the parameter values to be used during the invocation of the method.
 * @return {object} The parameter values to be used during the invocation of
 *     the method.
 */
window.google.identitytoolkit.easyrp.rpc.AbstractRequest.prototype.
    getParameters = function() {
  return this.params_;
};

/**
 * Transfers the RPC object to a normal object.
 * @return {string} The normal object represents the RPC object.
 */
window.google.identitytoolkit.easyrp.rpc.AbstractRequest.prototype.toJSON =
    function() {
  var json = window.google.identitytoolkit.easyrp.rpc.RpcObject.prototype.
      toJSON.call(this);
  if (this.method_) {
    json.method = this.method_;
  }
  if (this.params_) {
    json.params = this.params_;
  }
  return json;
};

/**
 * @class Defines the Notification class. Notification is a request that
 * without response returned.
 * @param {string} method The name of the method to be invoked.
 * @param {object} params The parameter values to be used during the invocation
 *     of the method.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.Notification = function(method,
    params) {
  this.method_ = method;
  this.params_ = params;
};
window.google.identitytoolkit.easyrp.rpc.Notification.inheritsFrom(
    window.google.identitytoolkit.easyrp.rpc.AbstractRequest);

/**
 * @class Defines the Request class. Request is a wrapper for a RPC request.
 * There must be a Response returned from the Server after handling the Request.
 * @param {string} method The name of the method to be invoked.
 * @param {object} params The parameter values to be used during the invocation
 *     of the method.
 * @param {string} id The id of the request.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.Request = function(method, params,
    id) {
  this.method_ = method;
  this.params_ = params;
  this.id_ = id;
};
window.google.identitytoolkit.easyrp.rpc.Request.inheritsFrom(
    window.google.identitytoolkit.easyrp.rpc.AbstractRequest);

/**
 * Sets the request id.
 * @param {string} id the id of the request.
 */
window.google.identitytoolkit.easyrp.rpc.Request.prototype.setId = function(
    id) {
  this.id_ = id;
};

/**
 * Returns the request id.
 * @return {string} the id of the request.
 */
window.google.identitytoolkit.easyrp.rpc.Request.prototype.getId = function() {
  return this.id_;
};

/**
 * Transfers the RPC object to a normal object.
 * @return {string} The normal object represents the RPC object.
 */
window.google.identitytoolkit.easyrp.rpc.Request.prototype.toJSON = function() {
  var json = window.google.identitytoolkit.easyrp.rpc.AbstractRequest.prototype.
      toJSON.call(this);
  if (this.id_) {
    json.id = this.id_;
  }
  return json;
};

/**
 * @class Defines the Response class. After a Request is processed by the
 * server, a Response is returned as the result. The parameters opt_result and
 * opt_error cannot exist together, and exact one parameter should be provided.
 * @param {string} id The id of the request object.
 * @param {object|string|boolean|number} opt_result The result of the RPC
 *     request. Its value is determined by the method invoked on the Server.
 * @param {object} opt_error the error information.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.Response = function(id, opt_result,
    opt_error) {
  window.google.identitytoolkit.easyrp.param.notEmpty(id, 'id');
  this.id_ = id;
  this.result_ = opt_result;
  this.error_ = opt_error;
};
window.google.identitytoolkit.easyrp.rpc.Response.inheritsFrom(
    window.google.identitytoolkit.easyrp.rpc.RpcObject);

/**
 * Returns the result of the Response.
 * @return {object|string|Boolean|number} the result of the Response.
 */
window.google.identitytoolkit.easyrp.rpc.Response.prototype.getResult =
    function() {
  return this.result_;
};

/**
 * Sets the result of the Response.
 * @param {object|string|Boolean|number} result the result of the Response.
 */
window.google.identitytoolkit.easyrp.rpc.Response.prototype.setResult =
    function(result) {
  this.result_ = result;
};

/**
 * Returns the error of the Response.
 * @return {object} the error of the Response.
 */
window.google.identitytoolkit.easyrp.rpc.Response.prototype.getError =
    function() {
  return this.error_;
};

/**
 * Sets the error of the Response.
 * @param {object} error the error of the Response.
 */
window.google.identitytoolkit.easyrp.rpc.Response.prototype.setError =
    function(error) {
  this.error_ = error;
};

/**
 * Sets the request id.
 * @param {string} id the id of the request.
 */
window.google.identitytoolkit.easyrp.rpc.Response.prototype.setId =
    function(id) {
  this.id_ = id;
};

/**
 * Returns the request id.
 * @return {string} the id of the request.
 */
window.google.identitytoolkit.easyrp.rpc.Response.prototype.getId = function() {
  return this.id_;
};

/**
 * Transfers the RPC object to a normal object.
 * @return {string} The normal object represents the RPC object.
 */
window.google.identitytoolkit.easyrp.rpc.Response.prototype.toJSON =
    function() {
  var json = window.google.identitytoolkit.easyrp.rpc.RpcObject.prototype.
      toJSON.call(this);
  json.id = this.id_;
  if (this.result_) {
    json.result = this.result_;
  } else if (this.error_) {
    json.error = this.error_;
  }
  return json;
};

/**
 * @fileoverview Defines the JSON objects used between CDS server and IDP.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * @class Defines the IdpReadyNotification class. IdpReadyNotification is a
 * Notification to indicate that IDP IFrame page is loaded and initialized.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.IdpReadyNotification = function() {
  this.method_ =
      window.google.identitytoolkit.easyrp.rpc.IdpReadyNotification.METHOD;
};
window.google.identitytoolkit.easyrp.rpc.IdpReadyNotification.inheritsFrom(
   window.google.identitytoolkit.easyrp.rpc.Notification);

/** The method name of the IdpReadyNotification */
window.google.identitytoolkit.easyrp.rpc.IdpReadyNotification.METHOD =
    'idpReadyNotification';

/**
 * @class Defines the IdpAuthRequest class.
 * @param {object} account the account that user selected in CDS.
 * @param {object} clientConfig the configuration parameters of current client.
 * @param {string} opt_id the id of the IdpAuthRequest. If not set, DEFAULT_ID
 *     will be used.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.IdpAuthRequest = function(account,
    clientConfig, opt_id) {
  window.google.identitytoolkit.easyrp.param.notEmpty(account, 'account');
  this.method_ = window.google.identitytoolkit.easyrp.rpc.IdpAuthRequest.METHOD;
  this.params_ = {
    account: account,
    clientConfig: clientConfig
  };
  //TODO(guibinkong): fix this, only support default id now.
  this.id_ = opt_id ||
      window.google.identitytoolkit.easyrp.rpc.IdpAuthRequest.DEFAULT_ID;
};
window.google.identitytoolkit.easyrp.rpc.IdpAuthRequest.inheritsFrom(
    window.google.identitytoolkit.easyrp.rpc.Request);

/** The method name of the IdpAuthRequest */
window.google.identitytoolkit.easyrp.rpc.IdpAuthRequest.METHOD = 'idpAuth';

/** The default request id of the IdpAuthRequest */
window.google.identitytoolkit.easyrp.rpc.IdpAuthRequest.DEFAULT_ID = 'idpAuth';

/**
 * @fileoverview Defines the JSON objects parser of IDP.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Parses JSON-RPC Object on IDP side.
 * <br>Possible RpcObject for IDP: IdpAuthRequest.
 * @param {string} json A JSON format string.
 * @return {RpcObject} A valid RpcObject, of null otherwise.
 */
window.google.identitytoolkit.easyrp.rpc.parseRpcObject = function(json) {
  var result = null;
  if (json) {
    try {
      var request = JSON.parse(json);
    } catch (e) {
      window.google.identitytoolkit.easyrp.util.log(
          'Invalid JSON-RPC object: not a JSON object.');
      return result;
    }
    if (!request || request.jsonrpc != '2.0') {
      window.google.identitytoolkit.easyrp.util.log(
          'Invalid JSON-RPC request: \'jsonrpc\' field should be \'2.0\'.');
    } else if (!request.method) {
      window.google.identitytoolkit.easyrp.util.log(
          'Invalid JSON-RPC request: no \'method\' field found.');
    } else {
      var method = request.method.toLowerCase();
      if (method == window.google.identitytoolkit.easyrp.rpc.IdpAuthRequest.
          METHOD.toLowerCase()) {
        if (request.id && request.params && request.params.account) {
          result = new window.google.identitytoolkit.easyrp.rpc.IdpAuthRequest(
              request.params.account, request.id, request.params.clientConfig);
        }
      }
    }
  }
  if (result) {
    window.google.identitytoolkit.easyrp.util.log(
        'Successfully parsing request: ' + json);
  } else {
    window.google.identitytoolkit.easyrp.util.log(
        'Failed to parse request: ' + json);
  }
  return result;
};

/**
 * @fileoverview Defines CDS default values.
 * @author guibinkong@google.com (Guibin Kong)
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/** default CDS domain  */
window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_DOMAIN =
    'https://www.accountchooser.biz';

/** default CDS iframe URL  */
window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_IFRAME_PATH =
    '/iframe.htm';

/** default CDS popup URL  */
window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_POPUP_PATH = '/popup.htm';

/** default CDS redirect URL  */
window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_REDIRECT_PATH =
    '/redirect.htm';

/** default popup width  */
window.google.identitytoolkit.easyrp.rpc.DEFAULT_POPUP_WIDTH = 520;

/** default popup height  */
window.google.identitytoolkit.easyrp.rpc.DEFAULT_POPUP_HEIGHT = 550;

/** callback name for empty response */
window.google.identitytoolkit.easyrp.rpc.EMPTY_RESPONSE_CALLBACK = 'empty';

/** Timeout for IDP assertion, in milliseconds. Default to 3 seconds  */
window.google.identitytoolkit.easyrp.rpc.IDP_TIMEOUT = 3000;

/** The life time of an RPC object, in milliseconds. Default to 5 minutes. */
window.google.identitytoolkit.easyrp.rpc.RPC_TIMEOUT = 5 * 60 * 1000;


/**
 * @fileoverview Defines basic methods to support cross domain RPC.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * The services registered on this page.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.services_ = {};

/**
 * Registers an RPC service.
 * @param {string} serviceName The name of the service.
 * @param {funtion} handler The handler function when the RPC is called.
 */
window.google.identitytoolkit.easyrp.rpc.register = function(serviceName,
    handler) {
  window.google.identitytoolkit.easyrp.param.notEmpty(serviceName,
      'serviceName');
  window.google.identitytoolkit.easyrp.param.notNull(handler, 'handler');
  window.google.identitytoolkit.easyrp.rpc.services_[serviceName] = handler;
};

/**
 * Calls an RPC service registered in another window.
 * @param {Window} targetWindow The target window object.
 * @param {window.google.identitytoolkit.easyrp.rpc.Request} request
 *     The request to send. When target window receive the request, it will
 *     invoke the service whose name is same as the method name of the request.
 * @param {string} opt_domain The domain of the target window.
 */
window.google.identitytoolkit.easyrp.rpc.call = function(targetWindow,
    request, opt_domain) {
  window.google.identitytoolkit.easyrp.param.notEmpty(targetWindow,
      'targetWindow');
  var json = request.toString();
  window.google.identitytoolkit.easyrp.util.log('Send message: ' + json);
  targetWindow.postMessage(json, opt_domain || '*');
};

/**
 * Initialize the message handler for postMessage, on which RPC services are
 * based.
 * @param {function} messageHandler The message handler for postMessage.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.init_ = function(messageHandler) {
  if (window.addEventListener) {
    window.addEventListener('message', messageHandler, false);
  } else if (window.attachEvent) {
    window.attachEvent('onmessage', messageHandler);
  } else if (window.document.attachEvent) {
    window.document.attachEvent('onmessage', messageHandler);
  } else {
    window.google.identitytoolkit.easyrp.util.log(
        'Register handler for postMessage failed.');
  }
};

/**
 * @fileoverview Defines methods for IDP.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Verifies the domain is same as the CDS domain.
 * @param {string} domain The domain to be checked.
 * @return {boolean} Whether the domain is CDS domain.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.verifyDomain_ = function(domain) {
  return domain == window.google.identitytoolkit.easyrp.rpc.cdsDomain_;
};

/**
 * Sends IdpReadyNotification to CDS.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.sendIdpReadyNotification_ =
    function() {
  var notification =
      new window.google.identitytoolkit.easyrp.rpc.IdpReadyNotification();
  window.google.identitytoolkit.easyrp.rpc.callCds(notification);
};

/**
 * Handler for postMessage event.
 * @param {EventObject} e the message event object.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.process_ = function(e) {
  window.google.identitytoolkit.easyrp.util.log('Received message: ' + e.data +
      ' from ' + e.origin);
  var domain = e.origin;//.replace(/^https?:\/\//, '');
  if (!window.google.identitytoolkit.easyrp.rpc.verifyDomain_(domain)) {
    window.google.identitytoolkit.easyrp.util.log(
        'Failed to verify domain: ' + domain);
    return;
  }
  var request = window.google.identitytoolkit.easyrp.rpc.parseRpcObject(e.data);
  if (!request) {
    window.google.identitytoolkit.easyrp.util.log(
        'Error request format: ' + e.data);
    return;
  }
  if (!(request instanceof
      window.google.identitytoolkit.easyrp.rpc.IdpAuthRequest)) {
    window.google.identitytoolkit.easyrp.util.log(
        'Unrecognized request: ' + e.data);
    return;
  }
  // RPC call
  var handler =
      window.google.identitytoolkit.easyrp.rpc.services_[request.getMethod()];
  if (!handler) {
    window.google.identitytoolkit.easyrp.util.log('No RPC handler for \'' +
        request.getMethod() + '\' found!');
    return;
  }
  handler(request, e.origin);
};

/**
 * Initializes the IDP page with given configuration parameters. See
 * below sample for options:
 * <pre>
 * {
 *   cdsDomain: '',                   // domain of the CDS server.
 *   rpcs: {
 *     requestMethod: requestHandler
 *   }
 * }
 * </pre>
 * @param {Object} options configuration parameters of the IDP page.
 */
window.google.identitytoolkit.easyrp.rpc.initIdp = function(options) {
  if (options) {
    if (options.cdsDomain) {
      window.google.identitytoolkit.easyrp.rpc.cdsDomain_ = options.cdsDomain;
    }
    if (options.rpcs) {
      for (var rpc in options.rpcs) {
        window.google.identitytoolkit.easyrp.rpc.register(rpc,
            options.rpcs[rpc]);
      }
    }
  }
  // Default values
  if (!window.google.identitytoolkit.easyrp.rpc.cdsDomain_) {
    window.google.identitytoolkit.easyrp.rpc.cdsDomain_ =
        window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_DOMAIN;
  }
  window.google.identitytoolkit.easyrp.rpc.init_(
      window.google.identitytoolkit.easyrp.rpc.process_);
  window.google.identitytoolkit.easyrp.rpc.sendIdpReadyNotification_();
};

/**
 * Sends an RPC object to CDS server.
 * @param {RpcObject} rpcObject The RPC object to send.
 */
window.google.identitytoolkit.easyrp.rpc.callCds = function(rpcObject) {
  window.parent.postMessage(rpcObject.toString(),
      window.google.identitytoolkit.easyrp.rpc.cdsDomain_);
};

