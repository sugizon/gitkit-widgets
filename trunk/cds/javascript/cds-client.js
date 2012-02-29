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
 * @fileoverview Defines utility method to hide or show a dark screen.
 *
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Shows a dark screen to cover the browser window.
 * @param {boolean} opt_checkedWindow If set, start a timer to wait that window
 *          close.
 */
window.google.identitytoolkit.easyrp.util.showDarkScreen = function(
    opt_checkedWindow) {
  window.google.identitytoolkit.easyrp.util.removeDarkScreen();
  var darkScreen = jQuery('<div>').addClass('dark-screen').attr('id',
      'dark-screen').appendTo(jQuery('body'));
  window.google.identitytoolkit.easyrp.util.resizeDarkScreen_();
  jQuery('body').css('overflow-x', 'hidden');

  if (opt_checkedWindow) {
    darkScreen.data('popupWindow', opt_checkedWindow);
    var popupChecker = window.setInterval(
        window.google.identitytoolkit.easyrp.util.checkPopup_, 40);
    darkScreen.data('popupChecker', popupChecker);
  }
  jQuery(window).resize(
      window.google.identitytoolkit.easyrp.util.resizeDarkScreen_);

  darkScreen.show();
};

/**
 * Removes the dark screen that covers the browser.
 */
window.google.identitytoolkit.easyrp.util.removeDarkScreen = function() {
  var darkScreen = jQuery('#dark-screen');
  if (darkScreen.length) {
    var popupChecker = darkScreen.data('popupChecker');
    if (popupChecker) {
      window.clearInterval(popupChecker);
      darkScreen.removeData('popupChecker');
    }
    var popup = darkScreen.data('popupWindow');
    if (popup) {
      darkScreen.removeData('popupWindow');
      if (!popup.closed) {
        popup.close();
      }
    }
    jQuery(window).unbind('resize',
        window.google.identitytoolkit.easyrp.util.resizeDarkScreen_);
    jQuery('body').css('overflow-x', 'auto');
    darkScreen.remove();
  }
};

/**
 * Sets the position of the dark screen.
 * @private
 */
window.google.identitytoolkit.easyrp.util.resizeDarkScreen_ = function() {
  var darkScreen = jQuery('#dark-screen');
  if (darkScreen.length) {
    var size = window.google.identitytoolkit.easyrp.util.maxScreenSize_();
    darkScreen.width(size.width).height(size.height);
  }
};

/**
 * Computes the window/document size to be covered by the dark screen. It will
 * ensure the document and window must be covered, and a height at least 1200px
 * so that Gmail's sign-up page can be shown.
 * @return {Object} The suitable width and height.
 * @private
 */
window.google.identitytoolkit.easyrp.util.maxScreenSize_ = function() {
  var height = Math.max(jQuery(window).height(), jQuery(document).height());
  var width = Math.max(jQuery(window).width(), jQuery(document).width());
  return {
      'width': width,
      'height': height
  };
};

/**
 * Checks whether the popup window is closed. If closed, remove the dark screen
 * that covers the browser.
 * @private
 */
window.google.identitytoolkit.easyrp.util.checkPopup_ = function() {
  var darkScreen = jQuery('#dark-screen');
  if (darkScreen.length) {
    var popup = darkScreen.data('popupWindow');
    if (!popup || popup.closed) {
      window.google.identitytoolkit.easyrp.util.removeDarkScreen();
    }
  }
};

/**
 * @fileoverview Defines utility function to open a popup window.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Opens a new window.
 * @param {number} width The width of the window.
 * @param {number} height The height of the window.
 * @param {string=} opt_url The URL for the new window. If missing or set to
 *     null, 'about:blank' will be used.
 * @return {Window} the opened window object.
 */
window.google.identitytoolkit.easyrp.util.showPopup = function(width, height,
    opt_url) {
  var top = (jQuery(window).height() - height) / 2;
  var left = (jQuery(window).width() - width) / 2;
  top = top > 0 ? top : 0;
  left = left > 0 ? left : 0;
  var options = 'width=' + width + ',height=' + height + ',left=' + left +
      ',top=' + top + ',status=1,location=1,resizable=yes,menubar=no,' +
      'toolbar=no,titlebar=no,channelmode=no,directories=no,fullscreen=no';
  var url = opt_url || 'about:blank';
  var popup = window.open(url, 'OpenIdPopup', options);
  if (popup) {
    if ((jQuery('#popin-box').length == 0) &&
        window.google.identitytoolkit.easyrp.util.showDarkScreen) {
      window.google.identitytoolkit.easyrp.util.showDarkScreen(popup);
    }
    window.google.identitytoolkit.easyrp.util.popup_ = popup;
    popup.focus();
  }
  return popup;
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
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Parses JSON-RPC Object on CDS client side.
 * <br>Possible RpcObject for CDS client: Response, RequestAckNotification,
 * or CdsReadyNotification.
 * @param {string} json A JSON format string.
 * @return {RpcObject} A valid RpcObject, of null otherwise.
 */
window.google.identitytoolkit.easyrp.rpc.parseRpcObject = function(json) {
  var result = null;
  if (json) {
    try {
      var rpcObject = JSON.parse(json);
    } catch (e) {
      window.google.identitytoolkit.easyrp.util.log(
          'Invalid JSON-RPC object: not a JSON object.');
      return result;
    }
    if (!rpcObject || rpcObject.jsonrpc != '2.0') {
      window.google.identitytoolkit.easyrp.util.log(
          'Invalid JSON-RPC object: \'jsonrpc\' field should be \'2.0\'.');
    } else if (!rpcObject.id && !rpcObject.method) {
      window.google.identitytoolkit.easyrp.util.log(
          'Invalid JSON-RPC object: no \'id\' or \'method\' field found.');
    } else if (rpcObject.method) {
      var method = rpcObject.method.toLowerCase();
      if (method == window.google.identitytoolkit.easyrp.rpc.
          RequestAckNotification.METHOD.toLowerCase()) {
        if (rpcObject.params && rpcObject.params.requestId) {
          var requestId = rpcObject.params.requestId;
          result = new window.google.identitytoolkit.easyrp.rpc.
              RequestAckNotification(requestId);
        } else {
          window.google.identitytoolkit.easyrp.util.log('Invalid JSON-RPC' +
              ' notification: no \'params.requestId\' field found.');
        }
      } else if (method == window.google.identitytoolkit.easyrp.rpc.
          CdsReadyNotification.METHOD.toLowerCase()) {
        result = new window.google.identitytoolkit.easyrp.rpc.
            CdsReadyNotification();
      } else if (method == window.google.identitytoolkit.easyrp.rpc.
          EmptyResponseNotification.METHOD.toLowerCase()) {
        result = new window.google.identitytoolkit.easyrp.rpc.
            EmptyResponseNotification();
      } else {
        window.google.identitytoolkit.easyrp.util.log(
            'Invalid JSON-RPC response: invalid \'id\' field.');
      }
    } else {
      result = new window.google.identitytoolkit.easyrp.rpc.Response(
          rpcObject.id, rpcObject.result, rpcObject.error);
    }
  }
  return result;
};

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
 * @fileoverview Defines methods for CDS client.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * The status of the CDS client.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.client_ = {
  popupMode: false,
  popupWindow: null,
  domain: window.location.host,
  iframe: null,
  iframeLoaded: false,
  cdsReady: false,
  queue: []
};

/**
 * Sets the popup mode.
 * @param {boolean} popupMode The value for popup mode.
 */
window.google.identitytoolkit.easyrp.rpc.setPopupMode = function(popupMode) {
  window.google.identitytoolkit.easyrp.rpc.client_.popupMode = popupMode;
};

/**
 * Gets the popup mode.
 * @return {boolean} The value for popup mode.
 */
window.google.identitytoolkit.easyrp.rpc.getPopupMode = function() {
  return window.google.identitytoolkit.easyrp.rpc.client_.popupMode;
};

/**
 * Sets the popup window.
 * @param {Window} popupWindow The value for popup window.
 */
window.google.identitytoolkit.easyrp.rpc.setPopupWindow =
    function(popupWindow) {
  window.google.identitytoolkit.easyrp.rpc.client_.popupWindow = popupWindow;
};

/**
 * Gets the popup window.
 * @return {Window} The value for popup window.
 */
window.google.identitytoolkit.easyrp.rpc.getPopupWindow = function() {
  return window.google.identitytoolkit.easyrp.rpc.client_.popupWindow;
};

/**
 * Gets the host (domain:port) string for current client.
 * @return {string} the domain as a string.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.getCurrentDomain_ = function() {
  return window.google.identitytoolkit.easyrp.rpc.client_.domain;
};

/**
 * Handler for postMessage event.
 * @param {EventObject} e the message event object.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.process_ = function(e) {
  window.google.identitytoolkit.easyrp.util.log('Received message: ' + e.data +
      ' from ' + e.origin);
  var rpcObject =
      window.google.identitytoolkit.easyrp.rpc.parseRpcObject(e.data);
  if (!rpcObject) {
    window.google.identitytoolkit.easyrp.util.log(
        'Unrecognized rpc received: ' + e.data);
    return;
  }
  window.google.identitytoolkit.easyrp.rpc.fireResponseEvent(rpcObject);
};

/**
 * Sends the RPC objects in the waiting queue. It is called when the CDS IFrame
 * is loaded (in redirect mode), or when the CdsReadyNotification is received
 * (in popup mode).
 * @param {window} targetWindow The target window to send RPC.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.sendRpcInQueue_ = function(
    targetWindow) {
  var queue = window.google.identitytoolkit.easyrp.rpc.client_.queue;
  if (queue && queue.length) {
    for (var i = 0; i < queue.length; i++) {
      window.google.identitytoolkit.easyrp.rpc.call(targetWindow, queue[i]);
    }
    window.google.identitytoolkit.easyrp.rpc.client_.queue = [];
  }
};

/**
 * Initializes the CDS IFrame.
 * @param {string} iframeUrl The URL of the CDS IFrame.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.initIFrame_ = function(iframeUrl) {
  if (!window.google.identitytoolkit.easyrp.rpc.client_.iframe) {
    var iframe = jQuery('<iframe />').css('position', 'absolute').
        css('width', '1px').css('height', '1px').css('left', '-9999px').
        attr('id', 'gitkit-iframe').appendTo('body');
    window.google.identitytoolkit.easyrp.rpc.client_.iframe = iframe;
    if (window.addEventListener) {
      iframe[0].addEventListener('load', window.google.identitytoolkit.easyrp.
          rpc.iframeOnLoad_, false);
    } else if (window.attachEvent) {
      iframe[0].attachEvent('onload', window.google.identitytoolkit.easyrp.rpc.
          iframeOnLoad_, false);
    } else {
      window.google.identitytoolkit.easyrp.util.log(
          'Failed to add iframe onload event.');
    }
    iframe.attr('src', iframeUrl);
  }
};

/**
 * OnLoad handler for CDS IFrame.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.iframeOnLoad_ = function() {
  window.google.identitytoolkit.easyrp.rpc.client_.iframeLoaded = true;
  if (!window.google.identitytoolkit.easyrp.rpc.client_.popupMode) {
    //Sends notification to CDS IFrame to trigger saved RPCs.
    var w = window.google.identitytoolkit.easyrp.rpc.client_.iframe[0].
        contentWindow;
    window.google.identitytoolkit.easyrp.rpc.call(w,
        new window.google.identitytoolkit.easyrp.rpc.ClientReadyNotification());
    window.google.identitytoolkit.easyrp.rpc.sendRpcInQueue_(w);
  }
};

/**
 * Handler for CdsReadyNotification.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.onCdsReady_ = function() {
  window.google.identitytoolkit.easyrp.rpc.client_.cdsReady = true;
  if (window.google.identitytoolkit.easyrp.rpc.client_.popupMode) {
    window.google.identitytoolkit.easyrp.rpc.sendRpcInQueue_(
        window.google.identitytoolkit.easyrp.rpc.client_.popupWindow);
  }
};

/**
 * Initializes the CDS client with given configuration parameters. See
 * below sample for options:
 * <pre>
 * {
 *   popupMode: true/false,  //default is false, that is, redirect mode.
 *   popupWindow: popup,     // popup window object. Used in popup mode.
 *   iframeUrl:  ''          // Used in redirect mode.
 * }
 * </pre>
 * @param {Object} options configuration parameters of the CDS client.
 */
window.google.identitytoolkit.easyrp.rpc.initClient = function(options) {
  if (options.popupMode) {
    window.google.identitytoolkit.easyrp.rpc.setPopupMode(options.popupMode);
  }
  if (options.popupWindow) {
    window.google.identitytoolkit.easyrp.rpc.setPopupWindow(
        options.popupWindow);
  }
  window.google.identitytoolkit.easyrp.rpc.init_(
      window.google.identitytoolkit.easyrp.rpc.process_);
  if (!window.google.identitytoolkit.easyrp.rpc.client_.popupMode) {
    var iframeUrl = options.iframeUrl ||
        window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_IFRAME_URL;
    window.google.identitytoolkit.easyrp.rpc.initIFrame_(iframeUrl);
  }
};

/**
 * Sends an RPC object to CDS server.
 * @param {Request} request The RPC request object.
 */
window.google.identitytoolkit.easyrp.rpc.callCds = function(request) {
  if (!window.google.identitytoolkit.easyrp.rpc.client_.popupMode) {
    if (!window.google.identitytoolkit.easyrp.rpc.client_.iframeLoaded) {
      window.google.identitytoolkit.easyrp.rpc.client_.queue.push(request);
    } else {
      var targetWindow = window.google.identitytoolkit.easyrp.rpc.client_.
          iframe[0].contentWindow;
      window.google.identitytoolkit.easyrp.rpc.call(targetWindow, request);
    }
  } else {
    if (!window.google.identitytoolkit.easyrp.rpc.client_.cdsReady) {
      window.google.identitytoolkit.easyrp.rpc.client_.queue.push(request);
    } else {
      var targetWindow = window.google.identitytoolkit.easyrp.rpc.client_.
          popupWindow;
      window.google.identitytoolkit.easyrp.rpc.call(targetWindow, request);
    }
  }
};

/**
 * @fileoverview Allows CDS client to support event-driven mode.
 * <br>Currently only support events from client side (instead of IDP side).
 * @author guibinkong@google.com (Guibin Kong)
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/** Acknowledgment event: a request is received. */
window.google.identitytoolkit.easyrp.rpc.EVENT_ACK = 'ack';

/** Done event: the response is returned. */
window.google.identitytoolkit.easyrp.rpc.EVENT_DONE = 'done';

/** CDS Ready event */
window.google.identitytoolkit.easyrp.rpc.EVENT_CDS_READY = 'cdsReady';

/** Empty response event */
window.google.identitytoolkit.easyrp.rpc.EVENT_EMPTY_RESPONSE = 'emptyResponse';

/**
 * Event arrays constants for easy use.
 */
window.google.identitytoolkit.easyrp.rpc.ALL_EVENTS = [
  window.google.identitytoolkit.easyrp.rpc.EVENT_ACK,
  window.google.identitytoolkit.easyrp.rpc.EVENT_DONE,
  window.google.identitytoolkit.easyrp.rpc.EVENT_CDS_READY,
  window.google.identitytoolkit.easyrp.rpc.EVENT_EMPTY_RESPONSE
];

/**
 * Event arrays constants for easy use.
 */
window.google.identitytoolkit.easyrp.rpc.DONE_AND_ACK = [
  window.google.identitytoolkit.easyrp.rpc.EVENT_ACK,
  window.google.identitytoolkit.easyrp.rpc.EVENT_DONE
];

/**
 * All the listeners
 * @type {Array.<
 *     {listener: function, events: {Array.<string>},
 *     oneTime: {boolean}, service: {string}}
 *     >}
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.listeners_ = [];

/**
 * Creates suitable events array for the event filter. Listen to all events,
 * if a listener doesn't have the event filter. if a string, only allow that
 * type of event; if an string array, allow all events in the array.
 * @param {string|Array.<string>} opt_events The event or events array.
 * @return {Array.<string>} events array for the event filter.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.makeEventArray_ = function(
    opt_events) {
  var events = [];
  if (!opt_events) {
    jQuery.merge(events, window.google.identitytoolkit.easyrp.rpc.ALL_EVENTS);
  } else {
    if (jQuery.isArray(opt_events)) {
      for (var i = 0; i < opt_events.length; i++) {
        if (jQuery.inArray(opt_events[i],
            window.google.identitytoolkit.easyrp.rpc.ALL_EVENTS) > -1) {
          events.push(opt_events[i]);
        } else {
          window.google.identitytoolkit.easyrp.util.log(
              'Unrecognized event type: ' + opt_events[i]);
        }
      }
    } else if (jQuery.inArray(
        opt_events, window.google.identitytoolkit.easyrp.rpc.ALL_EVENTS) > -1) {
      events.push(opt_events);
    } else {
      window.google.identitytoolkit.easyrp.util.log(
          'Unrecognized event type: ' + opt_events);
    }
  }
  return events;
};

/**
 * Mapping from rpcObject to event types. In other words, when client receive
 * a RpcObject from server, the event type it will fire.
 * @param {RpcObject} rpcObject The RpcObject the client received from server.
 * @return {string} the event type.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.getEventType_ = function(rpcObject) {
  var event = null;
  if (rpcObject instanceof
      window.google.identitytoolkit.easyrp.rpc.RequestAckNotification) {
    event = window.google.identitytoolkit.easyrp.rpc.EVENT_ACK;
  } else if (rpcObject instanceof
      window.google.identitytoolkit.easyrp.rpc.CdsReadyNotification) {
    event = window.google.identitytoolkit.easyrp.rpc.EVENT_CDS_READY;
  } else if (rpcObject instanceof
      window.google.identitytoolkit.easyrp.rpc.Response) {
    event = window.google.identitytoolkit.easyrp.rpc.EVENT_DONE;
  } else if (rpcObject instanceof
      window.google.identitytoolkit.easyrp.rpc.EmptyResponseNotification) {
    event = window.google.identitytoolkit.easyrp.rpc.EVENT_EMPTY_RESPONSE;
  }
  return event;
};

/**
 * Adds a listener with some options filters.
 * @param {function} listener The event listener.
 * @param {string|Array.<string>} opt_events The event filter. If not set,
 *     allows all events; if a string, only allow that type of event;
 *     if an string array, allow all events in the array.
 * @param {boolean} opt_oneTime If true, remove the listener immediately it is
 *     invoked the very first time.
 * @param {string} opt_service The service filter. If set, only invoked when
 *     the method of the response is same to the service set.
  */
window.google.identitytoolkit.easyrp.rpc.addResponseListener = function(
    listener, opt_events, opt_oneTime, opt_service) {
  var events = window.google.identitytoolkit.easyrp.rpc.makeEventArray_(
      opt_events);
  var l = {
    listener: listener,
    events: events,
    oneTime: !!opt_oneTime,
    service: opt_service
  };
  window.google.identitytoolkit.easyrp.rpc.listeners_.push(l);
};

/**
 * Removes a listener.
 * @param {function} listener The listener to be removed.
 */
window.google.identitytoolkit.easyrp.rpc.removeResponseListener = function(
    listener) {
  var i = 0;
  while (i < window.google.identitytoolkit.easyrp.rpc.listeners_.length) {
    if (window.google.identitytoolkit.easyrp.rpc.listeners_[i].listener ==
      listener) {
      window.google.identitytoolkit.easyrp.rpc.listeners_.splice(i, 1);
    } else {
      i++;
    }
  }
};

/**
 * Removes all the listeners.
 */
window.google.identitytoolkit.easyrp.rpc.clearResponseListeners = function() {
  window.google.identitytoolkit.easyrp.rpc.listeners_ = [];
};

/**
 * Fires event to listeners.
 * @param {RpcObject} rpcObject The RpcObject the client received from server.
 */
window.google.identitytoolkit.easyrp.rpc.fireResponseEvent = function(
    rpcObject) {
  var event = window.google.identitytoolkit.easyrp.rpc.getEventType_(rpcObject);
  if (!event) {
    return;
  }
  var i = 0;
  while (i < window.google.identitytoolkit.easyrp.rpc.listeners_.length) {
    var listener = window.google.identitytoolkit.easyrp.rpc.listeners_[i];
    if (jQuery.inArray(event, listener.events) < 0) {
      i++;
      continue;
    }
    if (listener.service) {
      if (rpcObject instanceof
          window.google.identitytoolkit.easyrp.rpc.RequestAckNotification &&
          rpcObject.getRequestId() != listener.service) {
        i++;
        continue;
      } else if (rpcObject instanceof
          window.google.identitytoolkit.easyrp.rpc.Response &&
          rpcObject.getId() != listener.service) {
        i++;
        continue;
      }
    }
    listener.listener(rpcObject);
    if (listener.oneTime) {
      window.google.identitytoolkit.easyrp.rpc.listeners_.splice(i, 1);
    } else {
      i++;
    }
  }
};

/**
 * @fileoverview defines CDS Client wrapper.
 * @author guibinkong@google.com (Guibin Kong)
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * @class CdsClient is a wrapper for CDS client.
 * @param {object} config The configuration of the client.
 * @constructor
 */
window.google.identitytoolkit.easyrp.CdsClient = function(config) {
  window.google.identitytoolkit.easyrp.param.notEmpty(config, 'config');
  this.config_ = config;
  this.cdsOptions_ = {
    clientCallbackUrl: this.config_.clientCallbackUrl || window.location.href,
    keepPopup: !!this.config_.keepPopup
  };
};

/**
 * Constructs a CdsClient, and initializes it before return.
 * @param {object} config The configuration of the client.
 * <pre>
 * {
 *   popupMode: true/false,  // Default is false, that is, redirect mode.
 *   popupWindow: popup,     // Popup window object. Used in popup mode.
 *   iframeUrl:  '',         // Used in redirect mode.
 *   cdsRedirectUrl: '',     // CDS Url used in redirect mode.
 *   cdsPopupUrl: '',        // CDS Url used in popup mode.
 *   popupWidth: '',         // Width of the popup window. Used in popup mode.
 *   popupHeight: '',        // Height of the popup window. Used in popup mode.
 *   clientCallbackUrl: '',  // Address returned from CDS. Used in redirect
 *                           // mode. Default is the current page Url.
 *   keepPopup: true/false,  // Used in popup mode. Default is false, that is,
 *                           // the popup window will be closed automatically.
 *   showAll: true/false,    // Default is false, that is, CDS will only show
 *                           // accounts with an email.
 *   idpFilter: [],          // IDPs list. If it is undefined/null, then
 *                           // accounts with any IDP are shown.
 *   callbacks: {},          // A set of callback functions, e.g.,
 *                           // {store: storeCallback, select: selectCallback}
 * }
 * ...
 * </pre>
 * @return {CdsClient} The created CdsClient object.
 */
window.google.identitytoolkit.easyrp.CdsClient.init = function(config) {
  var wrapper = new window.google.identitytoolkit.easyrp.CdsClient(config);
  wrapper.init();
  return wrapper;
};

/**
 * Initializes the CdsClient object with the configuration. In full page
 * redirect mode the returned service result will be checked, and invoked if
 * any.
 * @return {CdsClient} The CdsClient itself.
 */
window.google.identitytoolkit.easyrp.CdsClient.prototype.init = function() {
  if (this.config_.popupMode) {
    window.google.identitytoolkit.easyrp.rpc.addResponseListener(
        window.google.identitytoolkit.easyrp.rpc.onCdsReady_,
        window.google.identitytoolkit.easyrp.rpc.EVENT_CDS_READY);
  }
  this.registerListeners_(this.config_.oneTimeCallbacks, true);
  this.registerListeners_(this.config_.callbacks, false);
  var iframeUrl = this.config_.iframeUrl ||
      window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_IFRAME_URL;
  window.google.identitytoolkit.easyrp.rpc.initClient({
    popupMode: this.config_.popupMode,
    popupWindow: this.config_.popupWindow,
    iframeUrl: iframeUrl
  });
  return this;
};

/**
 * Sets the popup window used by CdsClient.
 * @param {Window} popupWindow The popup window object.
 */
window.google.identitytoolkit.easyrp.CdsClient.prototype.setPopupWindow =
    function(popupWindow) {
  window.google.identitytoolkit.easyrp.rpc.setPopupWindow(popupWindow);
};

/**
 * Gets the popup window used by CdsClient.
 * @return {Window} popupWindow The popup window object.
 */
window.google.identitytoolkit.easyrp.CdsClient.prototype.getPopupWindow =
    function() {
  return window.google.identitytoolkit.easyrp.rpc.getPopupWindow();
};

/**
 * Closes the popup window if it is not closed already.
 */
window.google.identitytoolkit.easyrp.CdsClient.prototype.closePopupWindow =
    function() {
  this.config_.popupWindow = null;
  if (window.google.identitytoolkit.easyrp.rpc.client_.popupWindow) {
    if (!window.google.identitytoolkit.easyrp.rpc.client_.popupWindow.closed) {
      window.google.identitytoolkit.easyrp.rpc.client_.popupWindow.close();
    }
    window.google.identitytoolkit.easyrp.rpc.client_.popupWindow = null;
  }
};

/**
 * Changes the popup mode after CdsClient has initialized.
 * @param {boolean} popupMode The new popupMode value.
 */
window.google.identitytoolkit.easyrp.CdsClient.prototype.changePopupModeTo =
    function(popupMode) {
  if (this.config_.popupMode == popupMode) {
    return;
  }
  var oldPopupMode = this.config_.popupMode;
  this.config_.popupMode = popupMode;
  if (oldPopupMode) {
    window.google.identitytoolkit.easyrp.rpc.removeResponseListener(
        window.google.identitytoolkit.easyrp.rpc.onCdsReady_);
  } else {
    window.google.identitytoolkit.easyrp.rpc.addResponseListener(
        window.google.identitytoolkit.easyrp.rpc.onCdsReady_,
        window.google.identitytoolkit.easyrp.rpc.EVENT_CDS_READY);
  }
  window.google.identitytoolkit.easyrp.rpc.setPopupMode(popupMode);
};

/**
 * Adds listeners.
 * @param {object} callbacks The listeners object, with the property name is
 *     the method name of the Response; and the property value is the callback
 *     function.
 * @param {boolean} oneTime Whether the callbacks are one time.
 * @private
 */
window.google.identitytoolkit.easyrp.CdsClient.prototype.registerListeners_ =
    function(callbacks, oneTime) {
  if (callbacks) {
    for (var service in callbacks) {
      var callback = callbacks[service];
      if (callback) {
        window.google.identitytoolkit.easyrp.param.notEmptyFunction(callback,
            (oneTime ? 'oneTimeCallbacks.' : 'callbacks.') + service);
        var event;
        if (service ==
            window.google.identitytoolkit.easyrp.rpc.EMPTY_RESPONSE_CALLBACK) {
          event =
              window.google.identitytoolkit.easyrp.rpc.EVENT_EMPTY_RESPONSE;
        } else {
          event = window.google.identitytoolkit.easyrp.rpc.EVENT_DONE;
        }
        window.google.identitytoolkit.easyrp.rpc.addResponseListener(
            callback, event, oneTime, service);
      }
    }
  }
};

/**
 * Opens a popup window, and render the CDS page in it.
 * @return {window} The created popup window object.
 * @private
 */
window.google.identitytoolkit.easyrp.CdsClient.prototype.openPopupWindow_ =
    function() {
  window.google.identitytoolkit.easyrp.rpc.client_.cdsReady = false;
  var popupWindow =
      window.google.identitytoolkit.easyrp.rpc.client_.popupWindow;
  var popupUrl = this.config_.cdsPopupUrl ||
      window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_POPUP_URL;
  if (!popupWindow || popupWindow.closed) {
    var width = this.config_.popupWidth ||
        window.google.identitytoolkit.easyrp.rpc.DEFAULT_POPUP_WIDTH;
    var height = this.config_.popupHeight ||
        window.google.identitytoolkit.easyrp.rpc.DEFAULT_POPUP_HEIGHT;
    popupWindow = window.google.identitytoolkit.easyrp.util.showPopup(
        width, height, popupUrl);
  } else {
    popupWindow.focus();
    popupWindow.window.location.href = popupUrl;
  }
  window.google.identitytoolkit.easyrp.rpc.client_.popupWindow = popupWindow;
  return popupWindow;
};

/**
 * Makes preparation for the RPC call. If in popup mode, make sure the popup
 * window is shown. If in redirect mode, registers a listener so that the page
 * is redirected after the request is saved.
 * @param {string} requestId The id of the request to be sent.
 * @private
 */
window.google.identitytoolkit.easyrp.CdsClient.prototype.prepareCall_ =
    function(requestId) {
  if (this.config_.popupMode) {
    this.openPopupWindow_();
  } else {
    var url = this.config_.cdsRedirectUrl ||
        window.google.identitytoolkit.easyrp.rpc.DEFAULT_CDS_REDIRECT_URL;
    url += '#' + window.google.identitytoolkit.easyrp.rpc.getCurrentDomain_();
    var goToCds = function() {
      window.location.href = url;
    };
    window.google.identitytoolkit.easyrp.rpc.addResponseListener(goToCds,
        window.google.identitytoolkit.easyrp.rpc.EVENT_ACK, true, requestId);
  }
};

/**
 * Starts the store service on CDS.
 * @param {object} account The account to store.
 * @param {Array.<object>} localAccounts The local accounts list, which can be
 *     shown to end user for selection.
 * @param {object=} opt_cdsOptions Optional options for CDS. These options will
 *     be merged with global ones (set by CdsClient.init(config)) and passed to
 *     CDS. These are one-time and won't change global options. Options
 *     supported are listed as below:
 * <pre>
 * {
 *   clientCallbackUrl: '',  // Address returned from CDS.
 *   keepPopup: true/false,  // Whether to keep the popup window or not.
 * }
 * ...
 * </pre>
 */
window.google.identitytoolkit.easyrp.CdsClient.prototype.store = function(
    account, localAccounts, opt_cdsOptions) {
  window.google.identitytoolkit.easyrp.param.notEmpty(account, 'account');

  var service = 'store';
  var options = opt_cdsOptions ?
      jQuery.extend({}, this.cdsOptions_, opt_cdsOptions) : this.cdsOptions_;
  var store = new window.google.identitytoolkit.easyrp.rpc.StoreRequest(
      service, account, localAccounts, options);
  this.prepareCall_(store.getId());
  window.google.identitytoolkit.easyrp.rpc.callCds(store);
};

/**
 * Starts the select service on CDS.
 * @param {Array.<object>} localAccounts The local accounts list, which can be
 *     shown to end user for selection.
 * @param {object=} opt_cdsOptions Optional options for CDS. These options will
 *     be merged with global ones (set by CdsClient.init(config)) and passed to
 *     CDS. These are one-time and won't change global options. Options
 *     supported are listed as below:
 * <pre>
 * {
 *   clientCallbackUrl: '',  // Address returned from CDS.
 *   keepPopup: true/false,  // Whether to keep the popup window or not.
 *   showAll: true/false,    // Whether to show accounts without an email.
 *   idpFilter: [],          // IDPs list.
 * }
 * ...
 * </pre>
 */
window.google.identitytoolkit.easyrp.CdsClient.prototype.select = function(
    localAccounts, opt_cdsOptions) {
  var service = 'select';
  var options = opt_cdsOptions ?
      jQuery.extend({}, this.cdsOptions_, opt_cdsOptions) : this.cdsOptions_;
  var select = new window.google.identitytoolkit.easyrp.rpc.SelectRequest(
      service, localAccounts, options);
  this.prepareCall_(select.getId());
  window.google.identitytoolkit.easyrp.rpc.callCds(select);
};

/**
 * Starts the update service on CDS.
 * @param {object} account The account to store.
 * @param {object=} opt_cdsOptions Optional options for CDS. These options will
 *     be merged with global ones (set by CdsClient.init(config)) and passed to
 *     CDS. These are one-time and won't change global options. Options
 *     supported are listed as below:
 * <pre>
 * {
 *   clientCallbackUrl: '',  // Address returned from CDS.
 *   keepPopup: true/false,  // Whether to keep the popup window or not.
 * }
 * ...
 * </pre>
 */
window.google.identitytoolkit.easyrp.CdsClient.prototype.update = function(
    account, opt_cdsOptions) {
  window.google.identitytoolkit.easyrp.param.notEmpty(account, 'account');

  var service = 'update';
  var options = opt_cdsOptions ?
      jQuery.extend({}, this.cdsOptions_, opt_cdsOptions) : this.cdsOptions_;
  var update = new window.google.identitytoolkit.easyrp.rpc.UpdateRequest(
      service, account, options);
  this.prepareCall_(update.getId());
  window.google.identitytoolkit.easyrp.rpc.callCds(update);
};

/**
 * Namespace alias for CDS.
 */
window.cds = window.google.identitytoolkit.easyrp

