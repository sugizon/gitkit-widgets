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
 * @fileoverview Defines some common utility functions.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * @namespace Utility functions.
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
 * URL the code can be: var foo = parseUrlParams_()['foo'];
 * @param {string} url The URL to parse.
 * @return {Object} The URL params array.
 * @private
 */
window.google.identitytoolkit.easyrp.util.parseUrlParams_ = function(url) {
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
      window.google.identitytoolkit.easyrp.util.parseUrlParams_(targetUrl);
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
 * Transfers the RPC object to a normal object.
 * @return {string} The normal object represents the RPC object.
 */
window.google.identitytoolkit.easyrp.rpc.RpcObject.prototype.toJSON =
    function() {
  var json = {jsonrpc: '2.0'};
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
 * @fileoverview Defines the JSON objects used between CDS server and CDS
 * client.
 * @author guibinkong@google.com (Guibin Kong)
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * @class Defines the RequestAckNotification class. RequestAckNotification is a
 * Notification to indicate that a Request is received by CDS.
 * @param {string} requestId The id of the Request.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.RequestAckNotification = function(
    requestId) {
  window.google.identitytoolkit.easyrp.param.notEmpty(requestId, 'requestId');
  this.method_ =
      window.google.identitytoolkit.easyrp.rpc.RequestAckNotification.METHOD;
  this.params_ = {requestId: requestId};
};
window.google.identitytoolkit.easyrp.rpc.RequestAckNotification.inheritsFrom(
   window.google.identitytoolkit.easyrp.rpc.Notification);

/** The method name of the RequestAckNotification */
window.google.identitytoolkit.easyrp.rpc.RequestAckNotification.METHOD =
    'requestAckNotification';

/**
 * Sets the id of the Request to be acknowledged.
 * @param {string} requestId The id of the Requestto be acknowledged.
 */
window.google.identitytoolkit.easyrp.rpc.RequestAckNotification.prototype.
    setRequestId = function(requestId) {
  this.params_.requestId = requestId;
};

/**
 * Returns the id of the Request to be acknowledged.
 * @return {string} The id of the Request to be acknowledged.
 */
window.google.identitytoolkit.easyrp.rpc.RequestAckNotification.prototype.
    getRequestId = function() {
  return this.params_.requestId;
};

/**
 * @class Defines the CdsReadyNotification class. CdsReadyNotification is a
 * Notification to indicate that CDS page is loaded and initialized.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.CdsReadyNotification = function() {
  this.method_ =
      window.google.identitytoolkit.easyrp.rpc.CdsReadyNotification.METHOD;
};
window.google.identitytoolkit.easyrp.rpc.CdsReadyNotification.inheritsFrom(
   window.google.identitytoolkit.easyrp.rpc.Notification);

/** The method name of the CdsReadyNotification */
window.google.identitytoolkit.easyrp.rpc.CdsReadyNotification.METHOD =
    'cdsReadyNotification';

/**
 * @class Defines the ClientReadyNotification class. ClientReadyNotification is
 * a Notification to indicate that CDS Client page is loaded and initialized.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.ClientReadyNotification = function() {
  this.method_ =
      window.google.identitytoolkit.easyrp.rpc.ClientReadyNotification.METHOD;
};
window.google.identitytoolkit.easyrp.rpc.ClientReadyNotification.inheritsFrom(
   window.google.identitytoolkit.easyrp.rpc.Notification);

/** The method name of the ClientReadyNotification */
window.google.identitytoolkit.easyrp.rpc.ClientReadyNotification.METHOD =
    'clientReadyNotification';

/**
 * @class Defines the EmptyResponseNotification class. EmptyResponseNotification
 * is a Notification to indicate that there's no saved Response for the Client.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.EmptyResponseNotification =
    function() {
  this.method_ =
      window.google.identitytoolkit.easyrp.rpc.EmptyResponseNotification.METHOD;
};
window.google.identitytoolkit.easyrp.rpc.EmptyResponseNotification.inheritsFrom(
    window.google.identitytoolkit.easyrp.rpc.Notification);

/** The method name of the EmptyResponseNotification */
window.google.identitytoolkit.easyrp.rpc.EmptyResponseNotification.METHOD =
    'emptyResponseNotification';

/**
 * @class Defines the StoreRequest class.
 * @param {string} id the id of the Request.
 * @param {object} account the account to be stored to CDS.
 * @param {Array.<object>} localAccounts the list of local account to be
 *     shown in the CDS.
 * @param {object} clientConfig the configuration parameters of current client.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.StoreRequest = function(id, account,
    localAccounts, clientConfig) {
  window.google.identitytoolkit.easyrp.param.notEmpty(id, 'id');
  window.google.identitytoolkit.easyrp.param.notEmpty(account, 'account');
  this.method_ = window.google.identitytoolkit.easyrp.rpc.StoreRequest.METHOD;
  this.params_ = {
    account: account,
    localAccounts: localAccounts,
    clientConfig: clientConfig
  };
  this.id_ = id;
};
window.google.identitytoolkit.easyrp.rpc.StoreRequest.inheritsFrom(
    window.google.identitytoolkit.easyrp.rpc.Request);

/** The method name of the StoreRequest */
window.google.identitytoolkit.easyrp.rpc.StoreRequest.METHOD = 'store';

/**
 * @class Defines the SelectRequest class.
 * @param {string} id the id of the Request.
 * @param {Array.<object>} localAccounts the list of local account to be
 *     shown in the CDS.
 * @param {object} clientConfig the configuration parameters of current client.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.SelectRequest = function(id,
    localAccounts, clientConfig) {
  window.google.identitytoolkit.easyrp.param.notEmpty(id, 'id');
  this.method_ = window.google.identitytoolkit.easyrp.rpc.SelectRequest.METHOD;
  this.params_ = {
    localAccounts: localAccounts,
    clientConfig: clientConfig
  };
  this.id_ = id;
};
window.google.identitytoolkit.easyrp.rpc.SelectRequest.inheritsFrom(
    window.google.identitytoolkit.easyrp.rpc.Request);

/** The method name of the SelectRequest */
window.google.identitytoolkit.easyrp.rpc.SelectRequest.METHOD = 'select';

/**
 * @class Defines the UpdateRequest class.
 * @param {string} id the id of the Request.
 * @param {object} account the account to be updated in CDS.
 * @param {object} clientConfig the configuration parameters of current client.
 * @constructor
 */
window.google.identitytoolkit.easyrp.rpc.UpdateRequest = function(id, account,
    clientConfig) {
  window.google.identitytoolkit.easyrp.param.notEmpty(id, 'id');
  window.google.identitytoolkit.easyrp.param.notEmpty(account, 'account');
  this.method_ = window.google.identitytoolkit.easyrp.rpc.UpdateRequest.METHOD;
  this.params_ = {
    account: account,
    clientConfig: clientConfig
  };
  this.id_ = id;
};
window.google.identitytoolkit.easyrp.rpc.UpdateRequest.inheritsFrom(
    window.google.identitytoolkit.easyrp.rpc.Request);

/** The method name of the UpdateRequest */
window.google.identitytoolkit.easyrp.rpc.UpdateRequest.METHOD = 'update';

/**
 * @fileoverview Defines the JSON objects parser of CDS.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Parses JSON-RPC Object on CDS server side.
 * <br>Possible RpcObject for CDS server: Request, ClientReadyNotification,
 * IdpReadyNotification, or Response from IDP.
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
    } else if (request.method) {
      var method = request.method.toLowerCase();
      if (method == window.google.identitytoolkit.easyrp.rpc.StoreRequest.
          METHOD.toLowerCase()) {
        if (request.id && request.params && request.params.account) {
          result = new window.google.identitytoolkit.easyrp.rpc.StoreRequest(
              request.id, request.params.account, request.params.localAccounts,
              request.params.clientConfig);
        }
      } else if (method == window.google.identitytoolkit.easyrp.rpc.
          SelectRequest.METHOD.toLowerCase()) {
        if (request.id) {
          result = new window.google.identitytoolkit.easyrp.rpc.SelectRequest(
              request.id, request.params.localAccounts,
              request.params.clientConfig);
        }
      } else if (method == window.google.identitytoolkit.easyrp.rpc.
          UpdateRequest.METHOD.toLowerCase()) {
        if (request.id && request.params && request.params.account) {
          result = new window.google.identitytoolkit.easyrp.rpc.UpdateRequest(
              request.id, request.params.account, request.params.clientConfig);
        }
      } else if (method == window.google.identitytoolkit.easyrp.rpc.
          ClientReadyNotification.METHOD.toLowerCase()) {
        result = new window.google.identitytoolkit.easyrp.rpc.
            ClientReadyNotification();
      } else if (method == window.google.identitytoolkit.easyrp.rpc.
          IdpReadyNotification.METHOD.toLowerCase()) {
        result = new window.google.identitytoolkit.easyrp.rpc.
            IdpReadyNotification();
      }
    } else if (request.id == window.google.identitytoolkit.easyrp.rpc.
        IdpAuthRequest.DEFAULT_ID) {
      result = new window.google.identitytoolkit.easyrp.rpc.Response(
          request.id, request.result, request.error);
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
window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_IFRAME_URL =
    window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_DOMAIN + '/iframe.htm';

/** default CDS popup URL  */
window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_POPUP_URL =
    window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_DOMAIN + '/popup.htm';

/** default CDS redirect URL  */
window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_REDIRECT_URL =
    window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_DOMAIN +
    '/redirect.htm';

/** default popup width  */
window.google.identitytoolkit.easyrp.rpc.DEFAULT_POPUP_WIDTH = 520;

/** default popup height  */
window.google.identitytoolkit.easyrp.rpc.DEFAULT_POPUP_HEIGHT = 550;

/** callback name for empty response */
window.google.identitytoolkit.easyrp.rpc.EMPTY_RESPONSE_CALLBACK = 'empty';

/** Timeout for IDP assertion, in milliseconds. Default to 3 seconds  */
window.google.identitytoolkit.easyrp.rpc.IDP_TIMEOUT = 3000;


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
 * @fileoverview Methods to store/retrieve RpcObjects in localStorage.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * The life time of a saved RPC object.
 * TODO(guibinkong): Not used yet.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.TIMEOUT_ = 5 * 60 * 1000;

/**
 * The prefix for saved in-bound (from client to CDS) RPC Objects
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.SAVED_IN_RPC_PREFIX_ = 'IN_RPC_';

/**
 * The prefix for saved out-bound (from CDS to client) RPC Objects
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.SAVED_OUT_RPC_PREFIX_ = 'OUT_RPC_';

/**
 * Reads saved RpcObjects from localStorage.
 * @param {string} clientDomain the domain of the client.
 * @param {boolean} inbound Reads inbound (from client to CDS) or out-bound
 *     (from CDS to client) RpcObjects.
 * @return {Array.<string>} An array of strings, each of which is a RpcObject.
 */
window.google.identitytoolkit.easyrp.rpc.readSavedRpcObjects = function(
    clientDomain, inbound) {
  var key;
  if (inbound) {
    key = window.google.identitytoolkit.easyrp.rpc.SAVED_IN_RPC_PREFIX_;
  } else {
    key = window.google.identitytoolkit.easyrp.rpc.SAVED_OUT_RPC_PREFIX_;
  }
  key += clientDomain.replace(/^https?:\/\//, '');
  var data = window.localStorage.getItem(key);
  if (data) {
    window.localStorage.removeItem(key);
    return window.JSON.parse(data) || [];
  }
};

/**
 * Saves a RpcObject into localStorage.
 * @param {string} clientDomain the domain of the client.
 * @param {RpcObject} rpcObject the RpcObject to be saved.
 * @param {boolean} inbound Reads inbound (from client to CDS) or out-bound
 *     (from CDS to client) RpcObjects.
 */
window.google.identitytoolkit.easyrp.rpc.saveRpcObject = function(clientDomain,
    rpcObject, inbound) {
  var key;
  if (inbound) {
    key = window.google.identitytoolkit.easyrp.rpc.SAVED_IN_RPC_PREFIX_;
  } else {
    key = window.google.identitytoolkit.easyrp.rpc.SAVED_OUT_RPC_PREFIX_;
  }
  key += clientDomain.replace(/^https?:\/\//, '');
  var data = window.localStorage.getItem(key);
  var rpcs;
  if (data) {
    rpcs = window.JSON.parse(data) || [];
  } else {
    rpcs = [];
  }
  rpcs.push(rpcObject.toString());
  var jsonData = window.JSON.stringify(rpcs);
  window.localStorage.setItem(key, jsonData);
};

/**
 * @fileoverview Initializes CDS IFrame RPC services.
 * @author guibinkong@google.com (Guibin Kong)
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Triggers saved RpcObjects to the client.
 * @param {string} origin The domain of the client.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.triggerSavedRpcs_ = function(origin) {
  if (!window.parent) {
    return;
  }
  var rpcs = window.google.identitytoolkit.easyrp.rpc.readSavedRpcObjects(
      origin, false);
  if (rpcs && rpcs.length) {
    for (var i = 0; i < rpcs.length; i++) {
      window.parent.postMessage(rpcs[i], origin);
    }
  } else {
    window.google.identitytoolkit.easyrp.rpc.call(window.parent,
        new window.google.identitytoolkit.easyrp.rpc.EmptyResponseNotification);
  }
};

/**
 * Handler for postMessage event.
 * @param {EventObject} e the message event object.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.process_ = function(e) {
  window.google.identitytoolkit.easyrp.util.log('Received message: ' + e.data +
      ' from ' + e.origin);
  var request = window.google.identitytoolkit.easyrp.rpc.parseRpcObject(e.data);
  if (!request) {
    window.google.identitytoolkit.easyrp.util.log(
        'Error request format: ' + e.data);
    return;
  }
  if (request instanceof
      window.google.identitytoolkit.easyrp.rpc.ClientReadyNotification) {
    window.google.identitytoolkit.easyrp.rpc.triggerSavedRpcs_(e.origin);
  } else if (request instanceof
      window.google.identitytoolkit.easyrp.rpc.Request) {
    window.google.identitytoolkit.easyrp.rpc.saveRpcObject(e.origin, request,
        true);
    var ack = new window.google.identitytoolkit.easyrp.rpc.
        RequestAckNotification(request.getId());
    window.parent.postMessage(ack.toString(), e.origin);
  } else {
    window.google.identitytoolkit.easyrp.util.log(
        'Unrecognized rpcObject: ' + e.data);
  }
};

window.google.identitytoolkit.easyrp.rpc.init_(
    window.google.identitytoolkit.easyrp.rpc.process_);
