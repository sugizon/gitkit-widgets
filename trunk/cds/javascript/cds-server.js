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
 * @fileoverview Defines some utility functions to handle email address.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * The regular expression for a vaild email address.
 * @type {RegExp}
 * @private
 */
window.google.identitytoolkit.easyrp.util.EMAIL_REGEX_ =
    /^\w+(\.\w+)*@([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+$/i;

/**
 * The regular expression for a vaild domain.
 * @type {RegExp}
 * @private
 */
window.google.identitytoolkit.easyrp.util.DOMAIN_REGEX_ =
    /^([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+$/i;

/**
 * Checks if the given parameter is a valid email address format.
 * @param {string} email The input email to be checked.
 * @return {boolean} True if the email format is valid.
 */
window.google.identitytoolkit.easyrp.util.isValidEmail = function(email) {
  return email && (null !=
    window.google.identitytoolkit.easyrp.util.EMAIL_REGEX_.exec(email));
};

/**
 * Checks if the given parameter is a valid domain format.
 * @param {string} domain The input email to be checked.
 * @return {boolean} True if the domain format is valid.
 */
window.google.identitytoolkit.easyrp.util.isValidDomain = function(domain) {
  return domain && (null !=
    window.google.identitytoolkit.easyrp.util.DOMAIN_REGEX_.exec(domain));
};

/**
 * Returns the domain part of an email in lower case.
 * @param {string} email The email to be parsed.
 * @return {string} The domain of the email parameter.
 */
window.google.identitytoolkit.easyrp.util.getEmailDomain = function(email) {
  if (email && window.google.identitytoolkit.easyrp.util.isValidEmail(email)) {
    return jQuery.trim(email.split('@')[1]).toLowerCase();
  }
};

/**
 * Returns the user name part of an email in lower case.
 * @param {string} email The email to be parsed.
 * @return {string} The user name of the email parameter.
 */
window.google.identitytoolkit.easyrp.util.getEmailUsername = function(email) {
  if (email && window.google.identitytoolkit.easyrp.util.isValidEmail(email)) {
    return jQuery.trim(email.split('@')[0]).toLowerCase();
  }
};

/**
 * Returns the IDP name for a domain if it is in NASCAR list.
 * @param {string} domain The domain to be checked.
 * @return {string} The IDP id, or <code>undefined</code> if not found.
 */
window.google.identitytoolkit.easyrp.util.isDomainInNascar = function(domain) {
  if (domain) {
    var idps = window.google.identitytoolkit.easyrp.config.idps;
    for (var idpId in idps) {
      var idp = idps[idpId];
      if (idp && (idp.domain == domain)) {
        return idpId;
      }
    }
  }
};

/**
 * @fileoverview Defines some utility functions to handle user name.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * The regular expression for a vaild username.
 * @type {RegExp}
 * @private
 */
window.google.identitytoolkit.easyrp.util.USERNAME_REGEX = /^\w+(\.\w+)*$/;

/**
 * Checks if the given parameter is a valid user name.
 * @param {string} username The input user name to be checked.
 * @return {boolean} True if the format is valid.
 */
window.google.identitytoolkit.easyrp.util.isValidUsername = function(username) {
  if (!window.google.identitytoolkit.easyrp.config) {
    return !!username && (null !=
      window.google.identitytoolkit.easyrp.util.USERNAME_REGEX.exec(username));
  } else if(!window.google.identitytoolkit.easyrp.config.
      disableUsernameFormatCheck) {
    if(window.google.identitytoolkit.easyrp.config.usernameRegex) {
      return !!username && (null != window.google.identitytoolkit.easyrp.config.
          usernameRegex.exec(username));
    } else  {
      return !!username && (null != window.google.identitytoolkit.easyrp.util.
          USERNAME_REGEX.exec(username));
    }
  } else {
    return !!username;
  }
};

/**
 * @fileoverview Defines some utility functions to handle domain.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * The regular expression for a domain part.
 * @type {RegExp}
 * @private
 */
window.google.identitytoolkit.easyrp.util.DOMAIN_REGEX_ = /:\/\/(.[^\/?]+)/;

/**
 * Parses the domain part from a URL.
 * @param {string} url The input URL to be parsed.
 * @return {string} The domain in the URL.
 */
window.google.identitytoolkit.easyrp.util.getDomainFromUrl = function(url) {
  try {
    var domain =
        url.match(window.google.identitytoolkit.easyrp.util.DOMAIN_REGEX_)[1];
    return domain;
  } catch (e) {
  }
};

/**
 * @fileoverview Defines some utility functions.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Regex for mobile agent.
 * @private
 */
window.google.identitytoolkit.easyrp.util.MOBILE_REGEX_ =
    /iphone|ipad|ipod|android|blackberry|mini|iemobile|windows\sce|palm/i;

/**
 * Whether an agent is a mobile user agent.
 * @param {string} agent the user agent string.
 * @return {boolean} Whether an agent is a mobile user agent.
 */
window.google.identitytoolkit.easyrp.util.isMobileAgent = function(agent) {
  return agent && window.google.identitytoolkit.easyrp.util.MOBILE_REGEX_.test(
      agent.toLowerCase());
};

/**
 * @fileoverview Defines some utility functions related to i18n.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * List of supported language which is denoted by its normalized code.
 * @private
 */
window.google.identitytoolkit.easyrp.util.SUPPORTED_LANGUAGE_ = [
    'en', 'en_gb', 'fr', 'it', 'de', 'es', 'zh_cn', 'zh_tw', 'ja', 'ko', 'nl',
    'pl', 'pt', 'ru', 'th', 'tr', 'bg', 'ca', 'hr', 'cs', 'da', 'fil', 'fi',
    'el', 'hi', 'hu', 'id', 'lv', 'lt', 'no', 'pt_pt', 'ro', 'sr', 'sk', 'sl',
    'sv', 'uk', 'vi'];
/**
 * Language codes map which maps the alternative code to the normolized code in
 * the list of supported language.
 * @private
 */
window.google.identitytoolkit.easyrp.util.ALTERNATIVE_CODES_MAP_ = {
  'en_us': 'en', 'zh': 'zh_cn', 'zh_hans': 'zh_cn', 'zh_hans_cn': 'zh_cn',
  'zh_hant': 'zh_tw', 'zh_hant_tw': 'zh_tw', 'nl_nl': 'nl', 'fr_fr': 'fr',
  'de_de': 'de', 'it_it': 'it', 'ja_jp': 'ja', 'ko_kr': 'ko', 'pl_pl': 'pl',
  'pt_br': 'pt', 'ru_ru': 'ru', 'es_es': 'es', 'th_th': 'th', 'tr_tr': 'tr',
  'bg_bg': 'bg', 'ca_es': 'ca', 'hr_hr': 'hr', 'cs_cz': 'cs', 'da_dk': 'da',
  'fil_ph': 'fil', 'tl': 'fil', 'fi_fi': 'fi', 'el_gr': 'el', 'hi_in': 'hi',
  'hu_hu': 'hu', 'id_id': 'id', 'lv_lv': 'lv', 'lt_lt': 'lt', 'no_no': 'no',
  'nb': 'no', 'nb_no': 'no', 'ro_ro': 'ro', 'sr_cyrl_rs': 'sr', 'sk_sk': 'sk',
  'sl_si': 'sl', 'sv_se': 'sv', 'uk_ua': 'uk', 'vi_vn': 'vi'};

/**
 * Finds the normalized code in the supported language list for a given one. If
 * there's no exactly matched one, try to match the higer level. i.e., 'zh-HK'
 * will get 'zh' as result, which is eventually mapped to 'zh_cn'. If no code is
 * found, {@code undefined} is returned.
 * @param {string} language The language code.
 * @return {string|undefined} The normalized language code.
 */
window.google.identitytoolkit.easyrp.util.findLanguageCode = function(
    language) {
  // Normalize language code
  var lang = language && language.replace(/-/g, '_').toLowerCase();
  var code;
  while (lang) {
    if (jQuery.inArray(lang,
        window.google.identitytoolkit.easyrp.util.SUPPORTED_LANGUAGE_) > -1) {
      code = lang;
      break;
    } else if (window.google.identitytoolkit.easyrp.util.
        ALTERNATIVE_CODES_MAP_[lang]) {
      code = window.google.identitytoolkit.easyrp.util.
          ALTERNATIVE_CODES_MAP_[lang];
      break;
    }
    var parts = lang.split('_');
    parts.pop();
    lang = parts.join('_');
  }
  return code;
};

/**
 * @fileoverview Defines some utility functions.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Gets the target namespaced object by its name string. For example, you can
 * get the target function by 'window.cds.StoreServices' or 'cds.StoreServices'.
 * @param {string} name a dot-separated name string.
 * @return {object} target object.
 */
window.google.identitytoolkit.easyrp.util.getNamespacedObjectByString =
    function(name) {
  var parts = name.split('.');
  for (var i = 0, len = parts.length, obj = window; i < len; ++i) {
    if (i == 0 && parts[0] == 'window') {
      obj = window;
    } else {
      obj = obj[parts[i]];
    }
    window.google.identitytoolkit.easyrp.param.notNull(obj, name);
  }
  return obj;
};

/**
 * @fileoverview Defines utility functions to manage all the widget instances
 * in a page.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * The prefix for the registry key.
 * @type {string}
 * @private
 */
window.google.identitytoolkit.easyrp.util.REGISTRY_KEY_PREFIX_ = 'widget_';

/**
 * Holds all the login widget instances in the page.
 * @type {Object}
 * @private
 */
window.google.identitytoolkit.easyrp.util.widgets_ = {};

/**
 * Registers the widget instance to the window by its uuid.
 * @param {number|string} uuid The uuid of the widget.
 * @param {Object} ref The instance of the widget.
 */
window.google.identitytoolkit.easyrp.util.registerWidget = function(uuid, ref) {
  window.google.identitytoolkit.easyrp.util.widgets_[window.google.
      identitytoolkit.easyrp.util.REGISTRY_KEY_PREFIX_ + uuid] = ref;
};

/**
 * Removes a widget instance from the window by its uuid.
 * @param {number|string} uuid The uuid of the widget.
 */
window.google.identitytoolkit.easyrp.util.unregisterWidget = function(uuid) {
  delete window.google.identitytoolkit.easyrp.util.widgets_[window.google.
      identitytoolkit.easyrp.util.REGISTRY_KEY_PREFIX_ + uuid];
};

/**
 * Gets the widget instance by its uuid. This parameter opt_uuid is optional if
 * only one widget instance in the page.
 * @param {number|string} opt_uuid The uuid of the widget.
 * @return {Object} The widget instance.
 * @private
 */
window.google.identitytoolkit.easyrp.util.getWidget_ = function(opt_uuid) {
  var widget;
  if (opt_uuid) {
    widget = window.google.identitytoolkit.easyrp.util.widgets_[window.google.
        identitytoolkit.easyrp.util.REGISTRY_KEY_PREFIX_ + opt_uuid];
  } else {
    for (var id in window.google.identitytoolkit.easyrp.util.widgets_) {
      widget = window.google.identitytoolkit.easyrp.util.widgets_[id];
      break;
    }
  }
  return widget;
};

/**
 * Defines a general way to send notification to a widget .
 * @param {string} type The type of the notification.
 * @param {object} params The parameters with the notification.
 * @param {number|string} opt_uuid The uuid of the widget to notify. This
 *    parameter is optional if only one widget instance in the page.
 */
window.google.identitytoolkit.easyrp.util.notifyWidget = function(type, params,
    opt_uuid) {
  window.google.identitytoolkit.easyrp.util.log('window.notifyWidget: type=\'' +
      type + "\', uuid=\'" + opt_uuid + "\'");
  var widget = window.google.identitytoolkit.easyrp.util.getWidget_(opt_uuid);
  if (!widget) {
    window.google.identitytoolkit.easyrp.util
        .log('Failed to find widget with uuid \'' + opt_uuid + "\'.");
  } else {
    // Fix bug on IE8: Clone a local copy for the remote parameter object.
    var clonedParams = jQuery.extend({}, params);
    var doNotification = function() {
      widget.handleNotification(type, clonedParams);
    };
    window.setTimeout(doNotification, 200);
  }
};

/**
 * @fileoverview Utility functions to save/read accounts in LocalStorage.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Name space for chooser storage.
 */
window.google.identitytoolkit.easyrp.util.accountstorage = {};

/**
 * The key for cached users in the local storage.
 * type {string}
 * @const
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.ACCOUNTS_ =
    'chooserAccounts';

/**
 * The Cookie name for cached users.
 * type {string}
 * @const
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.AC_COOKIE_NAME_ =
    '__goog__ac__';

/**
 * For cookie value retrieving.
 * type {string}
 * @const
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.AC_COOKIE_REGEX_ =
    '(^|;) ?' + window.google.identitytoolkit.easyrp.util.accountstorage.
    AC_COOKIE_NAME_ + '=([^;]*)(;|$)';

/**
 * Tests whether the browser supports LocalStorage.
 * @return {boolean} true if the browser supports LocalStorage.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.supportsLocalStorage_ =
    function() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
};

/**
 * Reads account entries from storage.
 * @return {Array.<Object>} An array of account entries objects.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.read_ =
    function() {
  if (window.google.identitytoolkit.easyrp.util.accountstorage.
      supportsLocalStorage_()) {
    return window.google.identitytoolkit.easyrp.util.accountstorage.
        readFromLocalStorage_();
  } else {
    return window.google.identitytoolkit.easyrp.util.accountstorage.
        readFromCookie_();
  }
};

/**
 * Writes account entries to storage.
 * @param {Array.<Object>} accounts The array of account entries objects.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.write_ =
    function(accounts) {
  if (window.google.identitytoolkit.easyrp.util.accountstorage.
      supportsLocalStorage_()) {
    window.google.identitytoolkit.easyrp.util.accountstorage.
        writeToLocalStorage_(accounts);
  } else {
    window.google.identitytoolkit.easyrp.util.accountstorage.
        writeToCookie_(accounts);
  }
};

/**
 * Reads account entries from HTML5 local storage.
 * @return {Array.<Object>} An array of account entries objects.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.readFromLocalStorage_ =
    function() {
  try {
    var savedAccounts = window.localStorage.getItem(
        window.google.identitytoolkit.easyrp.util.accountstorage.ACCOUNTS_);
    window.google.identitytoolkit.easyrp.util.log(
        'Read saved users from LocalStorage: ' + savedAccounts);
    if (savedAccounts) {
      return JSON.parse(savedAccounts);
    }
  } catch (e) {
    window.google.identitytoolkit.easyrp.util.log(
        'Failed to read LocalStorage: ' + e);
  }
};

/**
 * Writes account entries to HTML5 local storage.
 * @param {Array.<Object>} accounts The array of account entries objects.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.writeToLocalStorage_ =
    function(accounts) {
  try {
    var value = JSON.stringify(accounts);
    window.google.identitytoolkit.easyrp.util.log(
        'Save accounts to LocalStorage: ' + value);
    window.localStorage.setItem(window.google.identitytoolkit.easyrp.util.
        accountstorage.ACCOUNTS_, value);
  } catch (e) {
    window.google.identitytoolkit.easyrp.util.log(
        'Failed to write LocalStorage: ' + e);
  }
};

/**
 * Removes all account entries in the HTML5 local storage.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.clearLocalStorage_ =
    function() {
  window.google.identitytoolkit.easyrp.util.log(
      'Clear accounts in LocalStorage.');
  window.localStorage.removeItem(
      window.google.identitytoolkit.easyrp.util.accountstorage.ACCOUNTS_);
};

/**
 * Reads account entries from Cookie.
 * @return {Array.<Object>} An array of account entries objects.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.readFromCookie_ =
    function() {
  var cookieValues = document.cookie.match(window.google.identitytoolkit.easyrp.
      util.accountstorage.AC_COOKIE_REGEX_);
  if (cookieValues) {
    var savedAccounts = jQuery.trim(cookieValues[2]);
    if (savedAccounts) {
      window.google.identitytoolkit.easyrp.util.log(
          'Read saved users from Cookie: ' + savedAccounts);
      try {
        var value = JSON.parse(unescape(savedAccounts));
        return value;
      } catch (e) {
        window.google.identitytoolkit.easyrp.util.log(
            'Failed to read Cookie: ' + e);
        return;
      }
    }
  }
  window.google.identitytoolkit.easyrp.util.log(
      'Failed to read saved users from Cookie: Cookie not found!');
};

/**
 * Writes account entries to Cookie.
 * @param {Array.<Object>} accounts The array of account entries objects.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.writeToCookie_ =
    function(accounts) {
  try {
    var value = JSON.stringify(accounts);
    window.google.identitytoolkit.easyrp.util.log(
        'Save accounts to Cookie: ' + value);
    var current_date = new Date();
    var cookie_year = current_date.getFullYear() + 10;
    var cookie_month = current_date.getMonth();
    var cookie_day = current_date.getDate();
    var cookie_date = new Date(cookie_year, cookie_month, cookie_day);
    document.cookie = window.google.identitytoolkit.easyrp.util.accountstorage.
       AC_COOKIE_NAME_ + '=' + escape(value) + '; Path=/; expires=' +
       cookie_date.toGMTString();
  } catch (e) {
    window.google.identitytoolkit.easyrp.util.log(
        'Failed to write Cookie: ' + e);
  }
};

/**
 * Removes all account entries in the Cookie.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.clearACCookie_ =
    function() {
  var cookie_date = new Date();
  cookie_date.setTime(cookie_date.getTime() - 1);
  document.cookie = window.google.identitytoolkit.easyrp.util.accountstorage.
      AC_COOKIE_NAME_ += '=; Path=/; expires=' + cookie_date.toGMTString();
  window.google.identitytoolkit.easyrp.util.log(
    'Clear accounts in Cookie.');
};

/**
 * Reads the saved account entries from underling storage.
 * @return {Array.<Object>} The saved account entries.
 */
window.google.identitytoolkit.easyrp.util.accountstorage.readAccounts =
    function() {
  var accounts =
      window.google.identitytoolkit.easyrp.util.accountstorage.read_();
  if (!accounts || !jQuery.isArray(accounts)) {
    accounts = [];
  }
  return accounts;
};

/**
 * Saves an account entry to the underling storage. If the email of target
 * account exists in the saved entries, will move that entry to the first, and
 * update corresponding attributes.
 * @param {Object} account The account object to be saved.
 * @return {boolean} Returns false if the account already exists, or is not
 *     saved.
 */
window.google.identitytoolkit.easyrp.util.accountstorage.addAccount =
    function(account) {
  if (!account || !account.email) {
    return false;
  }
  var found = false;
  var accounts =
      window.google.identitytoolkit.easyrp.util.accountstorage.readAccounts();
  var oldAccount;
  for (var i = 0; i < accounts.length; i++) {
    if (window.google.identitytoolkit.easyrp.util.accountstorage.
        matchAccount_(accounts[i], account.email, account.providerId)) {
      oldAccount = accounts[i];
      accounts.splice(i, 1);
      found = true;
      break;
    }
  }
  if (oldAccount) {
    if (!account.displayName && oldAccount.displayName) {
      account.displayName = oldAccount.displayName;
    }
    if (!account.photoUrl && oldAccount.photoUrl) {
      account.photoUrl = oldAccount.photoUrl;
    }
  }
  accounts.unshift(account);
  window.google.identitytoolkit.easyrp.util.accountstorage.write_(accounts);
  return !found;
};

/**
 * Removes an account entry from the underling storage.
 * @param {Object} account The account object to be removed.
 * @return {boolean} Returns true if the account is removed successfully.
 */
window.google.identitytoolkit.easyrp.util.accountstorage.removeAccount =
    function(account) {
  if (!account || !account.email) {
    return false;
  }
  var found = false;
  var accounts =
      window.google.identitytoolkit.easyrp.util.accountstorage.readAccounts();
  for (var i = 0; i < accounts.length; i++) {
    if (window.google.identitytoolkit.easyrp.util.accountstorage.
         matchAccount_(accounts[i], account.email, account.providerId)) {
      accounts.splice(i, 1);
      found = true;
      break;
    }
  }
  window.google.identitytoolkit.easyrp.util.accountstorage.write_(accounts);
  return found;
};

/**
 * Removes all account entries in underling storage.
 */
window.google.identitytoolkit.easyrp.util.accountstorage.clearAccounts =
    function() {
  if (window.google.identitytoolkit.easyrp.util.accountstorage.
      supportsLocalStorage_()) {
    window.google.identitytoolkit.easyrp.util.accountstorage.
        clearLocalStorage_();
  } else {
    window.google.identitytoolkit.easyrp.util.accountstorage.clearACCookie_();
  }
};

/**
 * Updates an account entry in underling storage. This method will find the
 * account entry, then trigger the callback function if found, then save the
 * updated entry.
 * @param {string} email The email for the entry to be updated.
 * @param {function(!Object)} func The callback function to update the entry.
 */
window.google.identitytoolkit.easyrp.util.accountstorage.updateAccount =
    function(email, func, opt_providerId) {
  if (!email) {
    return;
  }
  var accounts =
    window.google.identitytoolkit.easyrp.util.accountstorage.readAccounts();
  for (var i = 0; i < accounts.length; i++) {
    if (window.google.identitytoolkit.easyrp.util.accountstorage.
          matchAccount_(accounts[i], email, opt_providerId)) {
      var account = accounts[i];
      func(account);
      window.google.identitytoolkit.easyrp.util.accountstorage.write_(accounts);
      break;
    }
  }
};

/**
 * Refreshes the attribute values of the account entry in underling storage. If
 * no matching email found, the method WON'T add a new entry.
 * @param {Object} newProfile The new account information.
 */
window.google.identitytoolkit.easyrp.util.accountstorage.refreshAccount =
    function(newProfile) {
  if (!newProfile || !newProfile.email) {
    return;
  }
  var refresh = function(account) {
    if (newProfile.displayName) {
      account.displayName = newProfile.displayName;
    }
    if (newProfile.photoUrl) {
      account.photoUrl = newProfile.photoUrl;
    }
    if (newProfile.legacy != undefined) {
      account.legacy = newProfile.legacy;
    }
  };
  window.google.identitytoolkit.easyrp.util.accountstorage.updateAccount(
      newProfile.email, refresh);
};

/**
 * Fetches an account entry in underling storage.
 * @param {string} email The email of the account.
 * @return {(Object|undefined)} The account entry, or {@code undefined} if not
 *     found.
 */
window.google.identitytoolkit.easyrp.util.accountstorage.fetchAccount =
    function(email, opt_providerId) {
  if (email) {
    var accounts =
      window.google.identitytoolkit.easyrp.util.accountstorage.readAccounts();
    for (var i = 0; i < accounts.length; i++) {
      if (window.google.identitytoolkit.easyrp.util.accountstorage.
          matchAccount_(accounts[i], email, opt_providerId)) {
        var account = accounts[i];
        accounts.splice(i, 1);
        accounts.unshift(account);
        window.google.identitytoolkit.easyrp.util.accountstorage.write_(
            accounts);
        return account;
      }
    }
  }
};

/**
 * Checks whether an account entry matches the <email, providerId>.
 * @param {Object} account The account object in the storage.
 * @param {string} email The email to be found.
 * @param {string|undefined} The providerId to be found.
 * @return {boolean} true if both email and providerId match.
 */
window.google.identitytoolkit.easyrp.util.accountstorage.matchAccount_ =
    function(account, email, opt_providerId) {
  if (account.email != email) {
    return false;
  }
  if (account.providerId && opt_providerId &&
      account.providerId == opt_providerId) {
    return true;
  }
  if (!account.providerId && !opt_providerId) {
    return true;
  }
  return false;
};

/**
 * Updates an account entry in underling storage. This method will find the
 * account entry, then triggers the callback function if found, then save the
 * updated entry.
 * @param {function(!Object)} account The new account information.
 */
window.google.identitytoolkit.updateSavedAccount = function(account) {
  window.google.identitytoolkit.easyrp.util.accountstorage.addAccount(account);
};

/**
 * Removes an account entry from the underling storage.
 * @param {Object} account The account object to be removed.
 * @return {boolean} Returns true if an exist account is removed successfully.
 *     Returns false if no change to underling storage.
 */
window.google.identitytoolkit.removeSavedAccount = function(account) {
  return window.google.identitytoolkit.easyrp.util.accountstorage.removeAccount(
      account);
};

/**
 * Removes all account entries in underling storage.
 */
window.google.identitytoolkit.clearSavedAccounts = function() {
  window.google.identitytoolkit.easyrp.util.accountstorage.clearAccounts();
};

/**
 * @fileoverview Utility functions of account storage for CDS.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Reads the saved account entries from underling storage and returns the
 * filtered result.
 * @param {?object=} opt_Filter Optional filter object.
 * <pre>
 * {
 *   withEmail: true/false,  // Show email account only. Default is false.
 *   idpList: []             // IDPs list.
 * }
 * ...
 * </pre>
 * @return {Array.<Object>} The filtered account entries.
 */
window.google.identitytoolkit.easyrp.util.accountstorage.readAccounts =
    function(opt_Filter) {
  var accounts =
      window.google.identitytoolkit.easyrp.util.accountstorage.read_();
  if (!accounts || !jQuery.isArray(accounts)) {
    accounts = [];
  }
  if (!opt_Filter) {
    return accounts;
  }
  if (opt_Filter.withEmail) {
    var filter = function(account) {
      return window.google.identitytoolkit.easyrp.util.isValidEmail(
          account.email);
    }
    accounts = window.google.identitytoolkit.easyrp.util.accountstorage.
        filter_(accounts, filter);
  }
  if (opt_Filter.idpList && opt_Filter.idpList.length != 0) {
    var filter = function(account) {
      var idp = account.providerId ||
          window.google.identitytoolkit.easyrp.util.getEmailDomain(
              account.email);
      if (idp) {
        return jQuery.inArray(idp, opt_Filter.idpList) >= 0;
      }
      return false;
    }
    accounts = window.google.identitytoolkit.easyrp.util.accountstorage.
        filter_(accounts, filter);
  }
  return accounts;
};

/**
 * Filters accounts by the filter function.
 * @param {Array.<Object>} accounts Account entries to be filtered.
 * @param {function(Object): boolean} func Filter function.
 * @return {Array.<Object>} The filtered account entries.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.filter_ = function(
    accounts, func) {
  var result = [];
  for (var i = 0; i < accounts.length; i++) {
    if (func(accounts[i])) {
      result.push(accounts[i]);
    }
  }
  return result;
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
 * @fileoverview Methods to store/retrieve RpcObjects in localStorage.
 * @author guibinkong@google.com (Guibin Kong)
 */

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
  var result = [];
  var data = window.localStorage.getItem(key);
  if (data) {
    window.localStorage.removeItem(key);
    var objects = window.JSON.parse(data) || [];
    var now = new Date().getTime();
    for (var i = 0; i < objects.length; ++i) {
      try {
        var rpc = JSON.parse(objects[i]);
        if (rpc.timestamp && now - rpc.timestamp <
            window.google.identitytoolkit.easyrp.rpc.RPC_TIMEOUT) {
          result.push(objects[i]);
        } else {
          window.google.identitytoolkit.easyrp.util.log(
              'Ignore expired JSON-RPC object: [' + objects[i] + ']');
        }
      } catch (e) {
        window.google.identitytoolkit.easyrp.util.log(
            'Ignore invalid JSON-RPC object: [' + objects[i] + ']');
      }
    }
  }
  return result;
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
 * @fileoverview Supports communication with IDP in CDS side.
 * @author guibinkong@google.com (Guibin Kong)
 */

/** A map from IDP id to its status. */
window.google.identitytoolkit.easyrp.rpc.idps = {};

/** A map from IDP domain name to its status. */
window.google.identitytoolkit.easyrp.rpc.idpsIndexedByDomain = {};

/** A map from email domain to its IDP. */
window.google.identitytoolkit.easyrp.rpc.emailMapIdp = {};

/**
 * Before connect to IDP for an assertion, a timer should be set to invoke the
 * timeout callback. If returned from IDP timely, the timer should be cleared.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.timer_ = {
  running: false,
  id: 0,
  callback: null
};

/**
 * Clears the timeout callback, if set.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.clearTimeoutCallback_ = function() {
  if (window.google.identitytoolkit.easyrp.rpc.timer_.running) {
    try {
      window.clearTimeout(
          window.google.identitytoolkit.easyrp.rpc.timer_.id);
    } catch (e) {}
    window.google.identitytoolkit.easyrp.rpc.timer_.running = false;
    window.google.identitytoolkit.easyrp.rpc.timer_.id = 0;
    window.google.identitytoolkit.easyrp.rpc.timer_.callback = null;
  }
};

/**
 * Sets a timeout callback.
 * @param {function} timeoutCallback The callback function to be invoked.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.setTimeoutCallback_ = function(
    timeoutCallback) {
  window.google.identitytoolkit.easyrp.param.notEmptyFunction(timeoutCallback,
      'timeoutCallback');
  window.google.identitytoolkit.easyrp.rpc.clearTimeoutCallback_();
  var cb = function() {
    if (window.google.identitytoolkit.easyrp.rpc.timer_.callback) {
      window.google.identitytoolkit.easyrp.rpc.timer_.callback.call(window);
    }
    window.google.identitytoolkit.easyrp.rpc.timer_.running = false;
    window.google.identitytoolkit.easyrp.rpc.timer_.id = 0;
    window.google.identitytoolkit.easyrp.rpc.timer_.callback = null;
  };
  window.google.identitytoolkit.easyrp.rpc.timer_.callback = timeoutCallback;
  window.google.identitytoolkit.easyrp.rpc.timer_.id = window.setTimeout(
      cb, window.google.identitytoolkit.easyrp.rpc.IDP_TIMEOUT);
  window.google.identitytoolkit.easyrp.rpc.timer_.running = true;
};

/**
 * Initializes a IDP IFrame.
 * @param {string} idp the id the IDP.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.initIdpIFrame_ = function(idp) {
  if (!idp || !window.google.identitytoolkit.easyrp.rpc.idps[idp]) {
    window.google.identitytoolkit.easyrp.util.log('Unsupported IDP \'' + idp +
        '\'.');
    return;
  }
  if (!window.google.identitytoolkit.easyrp.rpc.idps[idp].iframeUrl) {
    window.google.identitytoolkit.easyrp.util.log(
        'Failed to init IDP iframe for \'' + idp + '\': no valid iframeUrl.');
    return;
  }
  var idpConfig = window.google.identitytoolkit.easyrp.rpc.idps[idp];
  window.google.identitytoolkit.easyrp.rpc.initIdpIFrameByConfig_(idpConfig);
};

/**
 * Initializes a IDP IFrame.
 * @param {object} idpConfig the configuration of the IDP.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.initIdpIFrameByConfig_ =
    function(idpConfig) {
  if (!idpConfig) {
    return;
  }
  if (!idpConfig.iframe) {
    var iframe = jQuery('<iframe />').css('position', 'absolute').
        css('width', '1px').css('height', '1px').css('left', '-9999px').
        appendTo('body');
    idpConfig.iframe = iframe;
    iframe.attr('src', idpConfig.iframeUrl);
  }
};

/**
 * The event handler for IdpReadyNotification.
 * @param {string} domain the IDP domain.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.onIdpReady_ = function(domain) {
  if (!domain ||
      !window.google.identitytoolkit.easyrp.rpc.idpsIndexedByDomain[domain]) {
    window.google.identitytoolkit.easyrp.util.log('Unsupported IDP domain \'' +
        domain + '\'.');
    return;
  }
  var idpConfig =
      window.google.identitytoolkit.easyrp.rpc.idpsIndexedByDomain[domain];
  if (!idpConfig.iframe) {
    window.google.identitytoolkit.easyrp.util.log(
        'Illegal state error: IDP domain \'' + domain +
        '\' has\'t initialized yet.');
    return;
  }
  var w = idpConfig.iframe[0].contentWindow;
  if (idpConfig.queue && idpConfig.queue.length) {
    for (var i = 0; i < idpConfig.queue.length; i++) {
      window.google.identitytoolkit.easyrp.rpc.call(w, idpConfig.queue[i]);
    }
    idpConfig.queue = [];
  }
  idpConfig.idpReady = true;
};

/**
 * Sends a Request to an IDP.
 * @param {string} idp The id of the IDP.
 * @param {Request} request The Request to send.
 * @param {function} callback The callback function to be invoked after returned
 *     from IDP.
 * @param {function} timeout The callback function to be invoked if no IDP
 *     response returned till timeout.
 */
window.google.identitytoolkit.easyrp.rpc.callIdp = function(idp, request,
    callback, timeout) {
  if (idp && window.google.identitytoolkit.easyrp.rpc.idps[idp]) {
    var idpConfig = window.google.identitytoolkit.easyrp.rpc.idps[idp];
    window.google.identitytoolkit.easyrp.rpc.callIdpByConfig(idpConfig, request,
        callback, timeout);
  }
};

/**
 * Sends a Request to an IDP by its domaion.
 * @param {string} domain The domain name of the IDP.
 * @param {Request} request The Request to send.
 * @param {function} callback The callback function to be invoked after returned
 *     from IDP.
 * @param {function} timeout The callback function to be invoked if no IDP
 *     response returned till timeout.
 */
window.google.identitytoolkit.easyrp.rpc.callIdpByDomain = function(domain,
    request, callback, timeout) {
  if (domain &&
      window.google.identitytoolkit.easyrp.rpc.idpsIndexedByDomain[domain]) {
    var idpConfig =
        window.google.identitytoolkit.easyrp.rpc.idpsIndexedByDomain[domain];
    window.google.identitytoolkit.easyrp.rpc.callIdpByConfig(idpConfig, request,
        callback, timeout);
  }
};

/**
 * Sends a Request to an IDP by its domaion.
 * @param {object} idpConfig The configuration object of the IDP.
 * @param {Request} request The Request to send.
 * @param {function} callback The callback function to be invoked after returned
 *     from IDP.
 * @param {function} timeout The callback function to be invoked if no IDP
 *     response returned till timeout.
 */
window.google.identitytoolkit.easyrp.rpc.callIdpByConfig = function(idpConfig,
    request, callback, timeout) {
  window.google.identitytoolkit.easyrp.param.notEmpty(idpConfig, 'idpConfig');
  window.google.identitytoolkit.easyrp.param.notEmpty(request, 'request');
  window.google.identitytoolkit.easyrp.param.notEmptyFunction(callback,
      'callback');
  window.google.identitytoolkit.easyrp.param.notEmptyFunction(timeout,
      'timeout');
  window.google.identitytoolkit.easyrp.rpc.setTimeoutCallback_(timeout);
  window.google.identitytoolkit.easyrp.rpc.callIdpByConfig.
      callbacks_[request.getId()] = callback;
  if (!idpConfig.idpReady) {
    if (!idpConfig.queue) {
      idpConfig.queue = [];
    }
    idpConfig.queue.push(request);
    if (!idpConfig.iframe) {
      window.google.identitytoolkit.easyrp.rpc.initIdpIFrameByConfig_(
          idpConfig);
    }
  } else {
    var w = idpConfig.iframe[0].contentWindow;
    window.google.identitytoolkit.easyrp.rpc.call(w, request);
  }
};

/**
 * All the pending callbacks with IDPs
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.callIdpByConfig.callbacks_ = {};

/**
 * Checks if the CDS-IDP communication is supported for an account's IDP.
 * @param {object} account The account entry to be checked.
 * @return {boolean} whether CDS-IDP communication is supported.
 */
window.google.identitytoolkit.easyrp.rpc.isSupportedIdp = function(account) {
  if (account) {
    var domain = account.providerId ||
        window.google.identitytoolkit.easyrp.util.getEmailDomain(account.email);
    if (domain) {
      var idp = window.google.identitytoolkit.easyrp.rpc.emailMapIdp[domain];
      if (idp && window.google.identitytoolkit.easyrp.rpc.idps[idp]) {
        return idp;
      }
    }
  }
  return false;
};

/**
 * @fileoverview Defines methods for CDS page.
 * @author guibinkong@google.com (Guibin Kong)
 */

/** whether popup mode is used currently? */
window.google.identitytoolkit.easyrp.rpc.popupMode = false;

/** the window object for CDS client */
window.google.identitytoolkit.easyrp.rpc.clientWindow = null;

/**
 * Parses the domain name for the hash part in the URL.
 * <br>The hash is used to pass the client domain in redirect mode.
 * @return {string} The domain name in the hash part in the URL.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.getDomainInHash_ = function() {
  if (window.location.hash) {
    var hash = window.location.hash;
    if (hash && hash[0] == '#') {
      hash = hash.substring(1);
    }
    return hash;
  }
};

/**
 * Triggers the saved RPC objects after the CDS page is loaded.
 * <br>In redirect mode, the RPC object is saved before redirecting. Then
 * after redirected to CDS page, the saved RPC will be triggered again so that
 * CDS server can handle them.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.triggerSavedRpcs_ = function() {
  if (window.google.identitytoolkit.easyrp.rpc.popupMode) {
    return;
  }
  var rpcs = window.google.identitytoolkit.easyrp.rpc.readSavedRpcObjects(
      window.google.identitytoolkit.easyrp.rpc.clientDomain_, true);
  if (rpcs && rpcs.length) {
    for (var i = 0; i < rpcs.length; i++) {
      var rpc = {
        data: rpcs[i],
        origin: window.google.identitytoolkit.easyrp.rpc.clientDomain_
      };
      window.google.identitytoolkit.easyrp.rpc.process_(rpc, true);
    }
  }
};

/**
 * Sends notification to opener window.
 * <br>In popup mode, the CDS server will send a CdsReadyNotification to CDS
 * client after it is ready to accept messages.
 * <br>Note: when post messge for CdsReadyNotification, '*' is used instead of
 * a specific client domain. The reason is the popup window doesn't know the
 * client domain at that time. This shouldn't be a security issue, since no
 * other data inclued in the notification.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.sendCdsReadyNotification_ =
    function() {
  if (window.google.identitytoolkit.easyrp.rpc.popupMode) {
    var notification =
        new window.google.identitytoolkit.easyrp.rpc.CdsReadyNotification();
    window.google.identitytoolkit.easyrp.rpc.clientWindow.postMessage(
        notification.toString(), '*');
  }
};

/**
 * Handler for postMessage event.
 * @param {EventObject} e the message event object.
 * @param {boolean} fromSaved whether this event is triggered from saved RPCs.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.process_ = function(e, fromSaved) {
  window.google.identitytoolkit.easyrp.util.log('Received message: ' + e.data +
      ' from ' + e.origin);
  var domain = e.origin.replace(/^https?:\/\//, '');
  var request = window.google.identitytoolkit.easyrp.rpc.parseRpcObject(e.data);
  if (!request) {
    window.google.identitytoolkit.easyrp.util.log(
        'Error request format: ' + e.data);
    return;
  }
  if (request instanceof
      window.google.identitytoolkit.easyrp.rpc.IdpReadyNotification) {
    window.google.identitytoolkit.easyrp.rpc.onIdpReady_(domain);
    return;
  }
  if (request instanceof window.google.identitytoolkit.easyrp.rpc.Response) {
    // TODO(guibinkong): for security, check the origin of returned Response.
    // A Response returned from IDP IFrame.
    window.google.identitytoolkit.easyrp.rpc.clearTimeoutCallback_();
    var callback = window.google.identitytoolkit.easyrp.rpc.callIdpByConfig.
        callbacks_[request.getId()];
    if (callback) {
      delete window.google.identitytoolkit.easyrp.rpc.callIdpByConfig.
          callbacks_[request.getId()];
      callback.call(window, request, e.origin, callback.context);
    } else {
      window.google.identitytoolkit.easyrp.util.log(
          'Failed to find callback for response: ' + e.data);
    }
    return;
  }
  if (!(request instanceof window.google.identitytoolkit.easyrp.rpc.Request)) {
    window.google.identitytoolkit.easyrp.util.log(
        'Unrecognized request: ' + e.data);
    return;
  }
  // RPC call from CDS Client
  // Check callback URL domain first.
  if (!window.google.identitytoolkit.easyrp.rpc.checkCallbackDomain_(
      request, domain)) {
    return;
  }
  var handler = window.google.identitytoolkit.easyrp.rpc.
      services_['serviceLoader'];
  if (!handler) {
    window.google.identitytoolkit.easyrp.util.log('No RPC handler for \'' +
        request.getMethod() + '\' found!');
    return;
  }
  if ((request instanceof window.google.identitytoolkit.easyrp.rpc.Request) &&
      !fromSaved) {
    var ack = new window.google.identitytoolkit.easyrp.rpc.
        RequestAckNotification(request.getId());
    window.parent.postMessage(ack.toString(), e.origin);
  }
  handler(request, e.origin);
};

/**
 * Checks whether the callback URL is from the same domain of the calling site.
 * @param {Request} request The request sent from the calling site.
 * @param {string} domain The domain of the calling site.
 * @return {boolean} True if the callback matches the domain. False otherwise.
 * @private
 */
window.google.identitytoolkit.easyrp.rpc.checkCallbackDomain_ = function(
    request, domain) {
  var callbackDomain = request.params_.clientConfig.clientCallbackUrl &&
      window.google.identitytoolkit.easyrp.util.getDomainFromUrl(
          request.params_.clientConfig.clientCallbackUrl);
  if (callbackDomain && callbackDomain !== domain) {
    window.google.identitytoolkit.easyrp.util.log(
        'Illegal clientCallbackUrl "' +
        request.params_.clientConfig.clientCallbackUrl +
        '", must be under domain "' + domain + '".');
    return false;
  }
  return true;
};

/**
 * Initializes the CDS server with given configuration parameters. See
 * below example for options:
 * <pre>
 * {
 *   popupMode: true/false,  //default is false, that is, redirect mode.
 *   idps: {
 *     idp: {
 *       iframeUrl: '',      //The URL of the IDP IFrame.
 *       preload: true/false //default is false
 *     },
 *   },
 *   emailMapIdp: {
 *     emailDomain: idp
 *   }
 * }
 * </pre>
 * @param {Object} options configuration parameters of the CDS server.
 */
window.google.identitytoolkit.easyrp.rpc.initCds = function(options) {
  var preloadIdps = [];
  if (options) {
    if (options.rpcs) {
      for (var rpc in options.rpcs) {
        window.google.identitytoolkit.easyrp.rpc.register(rpc,
            options.rpcs[rpc]);
      }
    }
    if (options.idps) {
      for (var idp in options.idps) {
        window.google.identitytoolkit.easyrp.param.notEmpty(
            options.idps[idp].iframeUrl, 'iframeUrl');
        var iframeUrl = options.idps[idp].iframeUrl;
        var domain = window.google.identitytoolkit.easyrp.util.getDomainFromUrl(
            iframeUrl);
        window.google.identitytoolkit.easyrp.param.notEmpty(domain, 'domain');
        var idpConfig = {
          id: idp,
          domain: domain,
          iframe: null,
          iframeUrl: iframeUrl,
          queue: [],
          idpReady: false
        };
        window.google.identitytoolkit.easyrp.rpc.idps[idp] = idpConfig;
        window.google.identitytoolkit.easyrp.rpc.idpsIndexedByDomain[domain] =
            idpConfig;
        if (options.idps[idp].preload) {
          preloadIdps.push(idp);
        }
      }
    }
    if (options.emailMapIdp) {
      for (var emailDomain in options.emailMapIdp) {
        var idp = options.emailMapIdp[emailDomain];
        if (!idp) {
          window.google.identitytoolkit.easyrp.util.log('Invalid value for' +
              ' \'options.emailMapIdp["' + emailDomain + '"]\'.');
          continue;
        }
        if (!window.google.identitytoolkit.easyrp.rpc.idps[idp]) {
          window.google.identitytoolkit.easyrp.util.log('Invalid value for' +
              ' \'options.emailMapIdp.["' + emailDomain + '"]\', not exist.');
          continue;
        }
        window.google.identitytoolkit.easyrp.rpc.emailMapIdp[emailDomain] = idp;
      }
    }
  }
  if (options && options.popupMode) {
    window.google.identitytoolkit.easyrp.rpc.popupMode = true;
    window.google.identitytoolkit.easyrp.rpc.clientWindow = window.opener;
    window.google.identitytoolkit.easyrp.rpc.sendCdsReadyNotification_();
  } else {
    window.google.identitytoolkit.easyrp.rpc.popupMode = false;
    var domain = window.google.identitytoolkit.easyrp.rpc.getDomainInHash_();
    if (!domain) {
      window.google.identitytoolkit.easyrp.util.log(
          'Failed to get client domain in URL hash.');
      window.google.identitytoolkit.easyrp.param.notEmpty(domain,
          'clientDomainInHash');
      return;
    }
    window.google.identitytoolkit.easyrp.rpc.clientDomain_ = domain;
    window.google.identitytoolkit.easyrp.rpc.triggerSavedRpcs_();
  }
  window.google.identitytoolkit.easyrp.rpc.init_(
      window.google.identitytoolkit.easyrp.rpc.process_);
  if (window.google.identitytoolkit.easyrp.rpc.popupMode) {
    window.google.identitytoolkit.easyrp.rpc.sendCdsReadyNotification_();
  }
  if (preloadIdps.length) {
    for (var i = 0; i < preloadIdps.length; i++) {
      window.google.identitytoolkit.easyrp.rpc.initIdpIFrame_(preloadIdps[i]);
    }
  }
};

/**
 * Sends an RPC object to CDS client.
 * @param {RpcObject} rpcObject The RPC object.
 */
window.google.identitytoolkit.easyrp.rpc.callClient = function(rpcObject) {
  window.google.identitytoolkit.easyrp.param.notEmpty(rpcObject, 'rpcObject');
  window.google.identitytoolkit.easyrp.util.log(
      'Send message: ' + rpcObject.toString());
  if (window.google.identitytoolkit.easyrp.rpc.popupMode) {
    window.google.identitytoolkit.easyrp.rpc.clientWindow.postMessage(
        rpcObject.toString(), '*');
  } else if (window.google.identitytoolkit.easyrp.rpc.clientDomain_) {
    window.google.identitytoolkit.easyrp.rpc.saveRpcObject(
        window.google.identitytoolkit.easyrp.rpc.clientDomain_, rpcObject,
        false);
  } else {
    window.google.identitytoolkit.easyrp.util.log(
        'CallClient failed: cannot find client window.');
  }
};

/**
 * @fileoverview Base abstract class to load service UI.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Creates an UI loader.
 * @constructor
 */
window.google.identitytoolkit.easyrp.UiLoader = function() {
};

/**
 * Finds a configuration entry according to current method of the request and
 * expected language. Below is an example for the configuration object:
 * <pre>
 * {
 *   store: {name: 'window.cds.StoreService', ....},
 *   select: {name: 'window.cds.SelectService', ....},
 *   zh_cn: {
 *     store: {name: 'window.cds.StoreService', ....}
 *   }
 * }
 * </pre>
 * @param {object} services The configuration object for the service.
 * @param {string} method The RPC method of the request.
 * @param {string=} opt_language The expected language.
 * @return {object} the configuration entry found.
 * @private
 */
window.google.identitytoolkit.easyrp.UiLoader.prototype.findServiceByLanguage_ =
    function(services, method, opt_language) {
  if (!services) {
    return null;
  }
  if (opt_language && services[opt_language] &&
      services[opt_language][method]) {
    return services[opt_language][method];
  }
  return services[method];
};

/**
 * Finds a configuration entry according to current request, from a mobile agent
 * and expected language. Below is an example for the configuration object:
 * <pre>
 * {
 *   web: {
 *     store: {name: 'window.cds.StoreService', ....},
 *     select: {name: 'window.cds.SelectService', ....},
 *     zh_cn: {
 *       store: {name: 'window.cds.StoreService', ....}
 *     }
 *   },
 *   mobile: {
 *     store: {name: 'window.cds.StoreService', ....}
 *   }
 * }
 * </pre>
 * @param {rpc.Request} request Current request to handle.
 * @param {object} services The configuration object for the service.
 * @param {boolean} opt_mobile Whether the request is from an mobile agent.
 * @param {string=} opt_language The expected language.
 * @return {object} the configuration entry found.
 * @private
 */
window.google.identitytoolkit.easyrp.UiLoader.prototype.findService_ = function(
    request, services, opt_mobile, opt_language) {
  var service = null;
  if (services) {
    var method = request.getMethod();
    if (opt_mobile && services.mobile) {
      service = this.findServiceByLanguage_(services.mobile, method,
          opt_language);
    }
    if (!service) {
      service = this.findServiceByLanguage_(services.web, method, opt_language);
    }
  }
  return service;
};

/**
 * Really loads a service UI resource from the Web. Only called when target
 * resource is not loaded before.
 * @param {object} serviceMeta The configuration object for the service.
 * @param {function} done The callback function after loaded resource.
 */
window.google.identitytoolkit.easyrp.UiLoader.prototype.loadServiceFromWeb =
    function(serviceMeta, done) {
  throw 'Unimplementated! Child object must provide an implementation.';
};

/**
 * Whether the resource has been loaded before.
 * @param {object} serviceMeta The configuration object for the service.
 * @return {boolean} Whether the resource has been loaded before.
 */
window.google.identitytoolkit.easyrp.UiLoader.prototype.isServiceLoaded =
    function(serviceMeta) {
  throw 'Unimplementated! Child object must provide an implementation.';
};

/**
 * Marks the target resource as loaded.
 * @param {object} serviceMeta The configuration object for the service.
 */
window.google.identitytoolkit.easyrp.UiLoader.prototype.setServiceLoaded =
    function(serviceMeta) {
  throw 'Unimplementated! Child object must provide an implementation.';
};

/**
 * Before handle a request, make sure target service UI is loaded, and invoke
 * the callback function after loaded.
 * @param {rpc.Request} request Current request to handle.
 * @param {object} services The configuration object for the service.
 * @param {function} callback The function to be invoked after loaded.
 */
window.google.identitytoolkit.easyrp.UiLoader.prototype.loadService = function(
    request, services, callback) {
  var mobile = window.google.identitytoolkit.easyrp.util.isMobileAgent(
      navigator.userAgent);
  var language = request && request.params_ && request.params_.clientConfig &&
      request.params_.clientConfig.language;
  var originalMeta = this.findService_(request, services, mobile, language);
  window.google.identitytoolkit.easyrp.param.notEmpty(originalMeta,
      'serviceMeta');
  window.google.identitytoolkit.easyrp.param.notEmpty(originalMeta.name,
      'serviceMeta.name');
  var serviceMeta = jQuery.extend({}, originalMeta,
      {mobile: !!mobile, language: language});

  if (!!this.isServiceLoaded(serviceMeta)) {
    var constructor = window.google.identitytoolkit.easyrp.util.
        getNamespacedObjectByString(serviceMeta.name);
    window.google.identitytoolkit.easyrp.param.notEmpty(constructor,
        serviceMeta.name);
    callback(constructor);
  } else {
    var self = this;
    var done = function() {
      self.setServiceLoaded(serviceMeta);
      var constructor = window.google.identitytoolkit.easyrp.util.
          getNamespacedObjectByString(serviceMeta.name);
      window.google.identitytoolkit.easyrp.param.notEmpty(constructor,
          serviceMeta.name);
      callback(constructor);
    };
    this.loadServiceFromWeb(serviceMeta, done);
  }
};

/**
 * @fileoverview Abstract class to load service UI from a URL.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Creates a URL-based UI loader.
 * @constructor
 */
window.google.identitytoolkit.easyrp.UrlUiLoader = function() {
  this.loadedUrls_ = [];
};
window.google.identitytoolkit.easyrp.UrlUiLoader.inheritsFrom(
    window.google.identitytoolkit.easyrp.UiLoader);

/**
 * Computes a URL according to the configuration.
 * @param {object} serviceMeta The configuration object for the service.
 * @return {string} The URL string.
 */
window.google.identitytoolkit.easyrp.UrlUiLoader.prototype.getFileUrl =
    function(serviceMeta) {
  throw 'Unimplementated! Child object must provide an implementation.';
};

/**
 * Really loads a service UI resource from the Web. Only called when target
 * resource is not loaded before.
 * @param {object} serviceMeta The configuration object for the service.
 * @param {function} done The callback function after loaded the resource.
 */
window.google.identitytoolkit.easyrp.UrlUiLoader.prototype.loadServiceFromWeb =
    function(serviceMeta, done) {
  var head =
      document.getElementsByTagName('head')[0] || document.documentElement;
  var scriptTag = document.createElement('script');
  scriptTag.src = this.getFileUrl(serviceMeta);

  var finished = false;
  scriptTag.onload = scriptTag.onreadystatechange = function() {
    if (!finished && (!this.readyState ||
        this.readyState === 'loaded' || this.readyState === 'complete')) {
      finished = true;
      scriptTag.onload = scriptTag.onreadystatechange = null;
      done();
    }
  };
  head.insertBefore(scriptTag, head.firstChild);
};

/**
 * Whether the resource has been loaded before.
 * @param {object} serviceMeta The configuration object for the service.
 * @return {boolean} Whether the resource has been loaded before.
 */
window.google.identitytoolkit.easyrp.UrlUiLoader.prototype.isServiceLoaded =
    function(serviceMeta) {
  var fileUrl = this.getFileUrl(serviceMeta);
  return (jQuery.inArray(fileUrl, this.loadedUrls_) > -1);
};

/**
 * Marks the target resource as loaded.
 * @param {object} serviceMeta The configuration object for the service.
 */
window.google.identitytoolkit.easyrp.UrlUiLoader.prototype.setServiceLoaded =
    function(serviceMeta) {
  var fileUrl = this.getFileUrl(serviceMeta);
  if (jQuery.inArray(fileUrl, this.loadedUrls_) < 0) {
    this.loadedUrls_.push(fileUrl);
  }
};

/**
 * @fileoverview Class to load service UI from a URL. The URL are generated by
 * predefined URL templates.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Creates a URL-template-based UI loader.
 * @param {string} urlTemplate The URL template. The place holders '{language}'
 *     and '{baseFilename}' will be replaced to create actually URL.
 * @param {string=} opt_defaultLanguage The default language used to fill in the
 *     URL template if no language is provided. If it's not specified or not
 *     supproted, the default language is set to 'en'.
 * @constructor
 */
window.google.identitytoolkit.easyrp.UrlTemplateUiLoader = function(urlTemplate,
    opt_defaultLanguage) {
  this.loadedUrls_ = [];
  this.urlTemplate_ = urlTemplate;
  this.defaultLanguage_ = window.google.identitytoolkit.easyrp.util.
      findLanguageCode(opt_defaultLanguage) || 'en';
};
window.google.identitytoolkit.easyrp.UrlTemplateUiLoader.inheritsFrom(
    window.google.identitytoolkit.easyrp.UrlUiLoader);

/**
 * Computes a URL according to the configuration.
 * @param {object} serviceMeta The configuration object for the service.
 * @return {string} The URL string.
 */
window.google.identitytoolkit.easyrp.UrlTemplateUiLoader.prototype.getFileUrl =
    function(serviceMeta) {
  var fileUrl;
  // If the calling site doesn't specify the language, use the user's browser
  // language instead. NOTE: It is the browser language that is taken into
  // account other than the user's language preference set in the browser.
  // There's no easy way to get it.
  var language = serviceMeta.language || window.navigator.language;
  language =
      window.google.identitytoolkit.easyrp.util.findLanguageCode(language) ||
      this.defaultLanguage_;
  fileUrl =
      this.urlTemplate_.replace(/\{baseFilename\}/, serviceMeta.baseFilename).
      replace(/\{language\}/, language);
  return fileUrl;
};

/**
 * @fileoverview Class to load services UI based on Google AJAX Loader.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Creates a UI loader based on Google AJAX Loader.
 * @constructor
 */
window.google.identitytoolkit.easyrp.AjaxUiLoader = function() {
  this.loadedPackages_ = [];
};
window.google.identitytoolkit.easyrp.AjaxUiLoader.inheritsFrom(
    window.google.identitytoolkit.easyrp.UiLoader);

/**
 * Computes a unique String according to the configuration.
 * @param {object} serviceMeta The configuration object for the service.
 * @return {string} A unique String for the configuration.
 */
window.google.identitytoolkit.easyrp.AjaxUiLoader.prototype.stringify =
    function(serviceMeta) {
  return serviceMeta.module + ':' + serviceMeta.version + ':' +
      serviceMeta.packageName + ':' + serviceMeta.language;
};

/**
 * Really loads a service UI resource from Ajax Loader. Only called when target
 * resource is not loaded before.
 * @param {object} serviceMeta The configuration object for the service.
 * @param {function} done The callback function after loaded the resource.
 */
window.google.identitytoolkit.easyrp.AjaxUiLoader.prototype.loadServiceFromWeb =
    function(serviceMeta, done) {
  google.load(serviceMeta.module, serviceMeta.version, {
    packages: [serviceMeta.packageName],
    language: serviceMeta.language || window.navigator.language,
    callback: done
  });
};

/**
 * Whether the resource has been loaded before.
 * @param {object} serviceMeta The configuration object for the service.
 * @return {boolean} Whether the resource has been loaded before.
 */
window.google.identitytoolkit.easyrp.AjaxUiLoader.prototype.isServiceLoaded =
    function(serviceMeta) {
  var packageString = this.stringify(serviceMeta);
  return jQuery.inArray(packageString, this.loadedPackages_) > -1;
};

/**
 * Marks the target resource as loaded.
 * @param {object} serviceMeta The configuration object for the service.
 */
window.google.identitytoolkit.easyrp.AjaxUiLoader.prototype.setServiceLoaded =
    function(serviceMeta) {
  var packageString = this.stringify(serviceMeta);
  if (jQuery.inArray(packageString, this.loadedPackages_) < 0) {
    this.loadedPackages_.push(packageString);
  }
};

/**
 * @fileoverview Defines the CDS widget.
 * @author guibinkong@google.com (Guibin Kong)
 */

(function(jQuery) {
  var widget = {
    /**
     * Widget options defined by jQuery.
     */
    options: {
      popupMode: false,
      Uiloader: new window.google.identitytoolkit.easyrp.UrlTemplateUiLoader(
          'javascript/{baseFilename}__{language}.js',
          'javascript/{baseFilename}__en.js'),
      idps: {},
      emailMapIdp: {}
    },

    /**
     * Dynamically loads a service UI. Actually it will delegate to the UI
     * loader in options.
     * @param {rpc.Request} request Current request to be handled.
     */
    loadService_: function(request) {
      var self = this;
      var done = function(constructor) {
        self.executeService_(constructor, request);
      };
      this.options.Uiloader.loadService(request, this.options.services, done);
    },

    /**
     * After a service UI is loaded, invoke its method to handle the request.
     * @param {Function} constructor The constructor for the service.
     * @param {rpc.Request} request Current request to be handled.
     */
    executeService_: function(constructor, request) {
      var serviceImpl = new constructor;
      serviceImpl.setContainer(this.element);
      serviceImpl.setCdsConfig(this.cdsConfig);
      serviceImpl.executeRequest.call(serviceImpl, request);
    },

    /**
     * Widget life cycle method defined by jQuery.
     */
    _create: function() {
     jQuery(this.element).empty();
      this.cdsConfig = {
          popupMode: this.options.popupMode,
          idps: this.options.idps,
          emailMapIdp: this.options.emailMapIdp
      };
      this.cdsConfig.rpcs = {
        serviceLoader: jQuery.proxy(this.loadService_, this)
      };
      window.google.identitytoolkit.easyrp.rpc.initCds(this.cdsConfig);
    },

    /**
     * Removes this widget. Widget life cycle method defined by jQuery.
     */
    destroy: function() {
      jQuery(this.element).empty();
      jQuery.Widget.prototype.destroy.call(this);
    }
  };

  jQuery.widget('ui.cds', widget);
})(jQuery);

