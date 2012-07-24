/* Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
 * @desc [accountchooser] Sign in button label.
 */
var MSG_NAVBAR_SIGN_IN = 'Sign in';
/**
 * @desc [accountchooser] Switch account button label.
 */
var MSG_NAVBAR_SWITCH_ACCOUNT = 'Switch account';
/**
 * @desc [accountchooser] Sign out button label.
 */
var MSG_NAVBAR_SIGN_OUT = 'Sign out';
/**
 * @desc [accountchooser] Message for old browser users to let them know their
 * browsers are no longer supported and suggest to upgrate to newer version.
 */
var MSG_NAVBAR_NOT_SUPPORT =
    'Please upgrade your browser as it is no longer supported.';

/**
 * @desc [accountchooser] Label for Gmail button.
 */
var MSG_IDPS_GMAIL = 'Gmail';
/**
 * @desc [accountchooser] Label for Google Apps Mail button.
 */
var MSG_IDPS_GOOGLE_APPS = 'Google Apps Mail';
/**
 * @desc [accountchooser] Label for Yahoo! Mail button.
 */
var MSG_IDPS_YAHOO = 'Yahoo! Mail';
/**
 * @desc [accountchooser] Label for AOL Mail button.
 */
var MSG_IDPS_AOL = 'AOL Mail';
/**
 * @desc [accountchooser] Label for Hotmail button.
 */
var MSG_IDPS_HOTMAIL = 'Hotmail';

/**
 * @desc [accountchooser] Message shown in the popup window. The user click an
 * account in Account Chooser, then a popup window is shown with this message,
 * telling the user Account Chooser is connecting to the IDP and expecting an
 * authentication URL as the response.
 */
var MSG_POPUP_LOADING = 'Connecting to your IDP ...';
/**
 * @desc [accountchooser] Message shown in the popup window. After the
 * authentication request is generated, this messages is shown in the popup
 * window to indicate the user Account Chooser is directing him/her to his/her
 * IDP(Identity Provider) to complete the login process.
 */
var MSG_POPUP_REDIRECTING = 'Redirecting to your IDP ...';
/**
 * @desc [accountchooser] Message shown in the popup window if federated login
 * fails. This message tells the user Account Chooser fails to login him/her as
 * a federated account, and is trying to do the legacy login instead.
 */
var MSG_POPUP_TRY_LEGACY = 'Failed to connect to your IDP, try legacy ...';
/**
 * @desc [accountchooser] Message shown in the popup window if Account Chooser
 * fails to get the authentication URL response from the IDP.
 */
var MSG_POPUP_LOAD_FAILED = 'Failed to connect to your IDP.';

/**
 * @desc [accountchooser] Tooltip for close button of account chooser page.
 */
var MSG_ACCOUNT_CHOOSER_CLOSE = 'Close';
/**
 * @desc [accountchooser] Title for account chooser page.
 */
var MSG_ACCOUNT_CHOOSER_TITLE = 'Sign in';
/**
 * @desc [accountchooser] Tooltip for remove account button.
 */
var MSG_ACCOUNT_CHOOSER_REMOVE = 'Remove';
/**
 * @desc [accountchooser] Add account button label.
 */
var MSG_ACCOUNT_CHOOSER_ADD_ACCOUNT = 'Add account';

/**
 * @desc [accountchooser] Title for add account page.
 */
var MSG_ADD_ACCOUNT_TITLE = 'Sign in';
/**
 * @desc [accountchooser] This message is placed above a list of email provider
 * buttons to remind the user that he/she can use the email address provided by
 * these provider below to login, by clicking the corresponding button.
 */
var MSG_ADD_ACCOUNT_PICK = 'Sign in using your email address';
/**
 * @desc [accountchooser] This message is placed above an input box to remind
 * the user to type in his/her email address in case he/she wants to login with
 * an email address not provided by the providers listed above.
 */
var MSG_ADD_ACCOUNT_EMAIL = 'Or, type your email address';
/**
 * @desc [accountchooser] Go button label. Go button is next to the email
 * address input box. After the user clicks the Go button, Account Chooser will
 * use the email address typed in by the user as the account to proceed the
 * login process.
 */
var MSG_ADD_ACCOUNT_NEXT = 'Go';
/**
 * @desc [accountchooser] Hyperlink text which is shown at the bottom of add
 * account page. Click on this link will bring the user to a web page which
 * gives detailed information about Account Chooser.
 */
var MSG_ADD_ACCOUNT_MORE_LINK = 'Learn more about this';

/**
 * @desc [accountchooser] Message shown in popup window indicator telling the
 * user the login is in process now.
 */
var MSG_POPUP_INDICATOR_BUSY = 'Signing in';
/**
 * @desc [accountchooser] Button label in popup window indicator. When the user
 * clicks the button, the popup sign in window will be brought to foreground.
 */
var MSG_POPUP_INDICATOR_SHOW_POPUP = 'show sign in window';
/**
 * @desc [accountchooser] Button label in popup window indicator. When the user
 * clicks the button, the popup sign window will be closed and the login process
 * will be terminated.
 */
var MSG_POPUP_INDICATOR_CANCEL = 'Cancel';

/**
 * @desc [accountchooser] Tooltip for close button of google apps domain page.
 */
var MSG_APPS_DOMAIN_CLOSE = 'Close';
/**
 * @desc [accountchooser] Title for google apps domain page.
 * @param {string} startTag The start html tag, should be '<nobr>'.
 * @param {string} endTag The end html tag, should be '</nobr>'.
 * @return {string} The html text for google apps domain page title.
 */
var MSG_APPS_DOMAIN_TITLE = function(startTag, endTag) {
  return startTag + 'Google Apps' + endTag;
};
/**
 * @desc [accountchooser] This message is placed before an input box to remind
 * the user to type in the google apps domain he/she wants to use.
 */
var MSG_APPS_DOMAIN_INPUT_DOMAIN = 'Please input your Google Apps Domain:';
/**
 * @desc [accountchooser] Go button label. Go button is next to the google apps
 * domain input box. After the user clicks the Go button, Account Chooser will
 * use the domain typed in by the user to proceed the login process.
 */
var MSG_APPS_DOMAIN_NEXT = 'Go';
/**
 * @desc [accountchooser] Message shown when the user types in an invalid google
 * apps domain.
 */
var MSG_APPS_DOMAIN_INVALID_DOMAIN = 'Invalid domain format.';

/**
 * @desc [accountchooser] Tooltip for close button of legacy login page.
 */
var MSG_CHOOSER_LEGACY_CLOSE = 'Close';
/**
 * @desc [accountchooser] Title for legacy login page.
 */
var MSG_CHOOSER_LEGACY_TITLE = 'Sign in';
/**
 * @desc [accountchooser] This message is placed before an password input box to
 * remind the user to type in the password for the legacy account.
 */
var MSG_CHOOSER_LEGACY_PASSWORD = 'Password';
/**
 * @desc [accountchooser] Go button label. Go button is next to the password
 * input box. After the user clicks the Go button, Account Chooser will use the
 * account and password typed in to proceed the login process.
 */
var MSG_CHOOSER_LEGACY_NEXT = 'Go';

/**
 * @desc [accountchooser] This message is shown as a warning message. when the
 * user click an account in Account Chooser, say foo@gmail.com, then Account
 * Chooser redirect the user to his/her IDP (gmail.com). If the user signs into
 * gmail.com with another account bar@gmail.com, after the IDP redirects the
 * user back to the site, Account Chooser will display this warning message to
 * remind the user that he/she should login with the desired account which is
 * the one he/she clicked in Account Chooser, or select another account in
 * Account Chooser instead.
 * @param {string} idpDomain The IDP domain placeholder, should be
 *     '<a>%%domain%%</a>'.
 * @return {string} The account mismatch warning message.
 */
var MSG_SIGN_IN_MISMATCH = function(idpDomain) {
  return 'You are currently logged into a different account on ' + idpDomain +
      '. Select another account, or visit ' + idpDomain + ' to login to the ' +
      'desired account and then return this site.';
};
/**
 * @desc [accountchooser] This message is shown when Account Chooser fails to
 * get response from the IDP after initiating the login process.
 */
var MSG_SIGN_IN_INVALID_ASSERTION = 'There was a problem communicating with ' +
    'the identifier provider. You can try again or select another account.';
/**
 * @desc [accountchooser] This message is shown as a warning message to remind
 * the user the IDP he/she chooses in Account Chooser is not the email address
 * provider of the account he/she tries to login. If the IDP is the email
 * provider, a verified email field should be in the response back to Account
 * Chooser. For example, the user chooses gmail.com as IDP, then signs in with
 * the email 'foo@yahoo.com'. Since gmail.com is not the email provider of the
 * email address 'foo@yahoo.com", after the user is redirected back to the site,
 * Account Chooser will display this warning message.
 */
var MSG_SIGN_IN_INVALID_ASSERTION_EMAIL = 'No verified email returned from ' +
    'IDP. Only Email provider is supported now.';
/**
 * @desc [accountchooser] This message is shown as a warning message to indicate
 * Account Chooser has received unrecognized notification which cannot be
 * processed.
 * @param {string} notification Placeholder for notification sent to Account
 *     Chooser widget, should be '<a>%%notification%%</a>'.
 * @return {string} The warning message.
 */
var MSG_SIGN_IN_UNRECOGNIZED_NOTIFICATION = function(notification) {
  return 'Unrecognized notification \'' + notification + '\' received.';
};
/**
 * @desc [accountchooser] This message is shown as a warning message to tell the
 * user some unknown error occurred.
 */
var MSG_SIGN_IN_UNRECOGINZED_ERROR_TYPE = 'An error occurred. Please try to ' +
    'log in again.';
/**
 * @desc [accountchooser] This message is shown as a warning message when the
 * user clicks the Go button to login without entering an email address.
 */
var MSG_SIGN_IN_EMPTY_EMAIL = 'Email cannot be empty!';
/**
 * @desc [accountchooser] This message is shown as a warning message when the
 * user clicks the Go button to login with a malformed email address.
 */
var MSG_SIGN_IN_EMAIL_FORMAT_ERROR = 'Invalid email format!';
/**
 * @desc [accountchooser] This message is shown as a warning message when the
 * user types in the wrong password for the legacy account.
 */
var MSG_SIGN_IN_PASSWORD_ERROR = 'Please input a valid password';
/**
 * @desc [accountchooser] This message is shown as a warning message when
 * Account Chooser receives some unrecognized response code from the site.
 * @param {string} resultCode Placeholder for result code sent to Account
 *     Chooser, should be '<a>%%status%%</a>'.
 * @return {string} The warning message.
 */
var MSG_SIGN_IN_UNRECOGINZED_RESULT = function(resultCode) {
  return 'Unrecognized result code \'' + resultCode + '\' received, ignored.';
};
/**
 * @desc [accountchooser] This message is shown as a warning message when the
 * user choose an account from Account Chooser to login while the account email
 * is not registered on the site. Remind the user to remove the old account from
 * Account Chooser and try again.
 */
var MSG_SIGN_IN_EMAIL_NOT_EXIST = 'Email is not registered. Try remove this ' +
    'account in account chooser, then add it again.';

// Placeholder for new UI strings.
/**
 * @desc [accountchooser] This message is placed above a list of email provider
 * buttons to remind the user that he/she can use the email address provided by
 * these provider below to login, by clicking the corresponding button.
 */
var MSG_ADD_ACCOUNT_PICK_1 = 'Sign in with';
/**
 * @desc [accountchooser] This message is placed above an input box to remind
 * the user to type in his/her email address in case he/she wants to login with
 * an email address not provided by the providers listed above.
 */
var MSG_ADD_ACCOUNT_EMAIL_1 = 'Email';
/**
 * @desc [accountchooser] Sign in button label. This button is next to the email
 * address input box. After the user clicks this button, Account Chooser will
 * use the email address typed in by the user as the account to proceed the
 * login process.
 */
var MSG_ADD_ACCOUNT_NEXT_1 = 'Sign in';
/**
 * @desc [accountchooser] Add account button label.
 */
var MSG_ACCOUNT_CHOOSER_ADD_ACCOUNT_1 = 'Sign in to another account';
/**
 * @desc [accountchooser] Sign in button label. This button is next to the
 * password input box. After the user clicks this button, Account Chooser will
 * use the account and password typed in to proceed the login process.
 */
var MSG_CHOOSER_LEGACY_NEXT_1 = 'Sign in';
/**
 * @desc [accountchooser] This message is placed above an input box to remind
 * the user to type in the google apps domain he/she wants to use.
 */
var MSG_APPS_DOMAIN_INPUT_DOMAIN_1 = 'Domain';


/**
 * Stores all the images used in the widget.
 */
window.google.identitytoolkit.easyrp.images = jQuery.extend(
    window.google.identitytoolkit.easyrp.images || {}, {
  close: 'https://www.google.com/uds/modules/identitytoolkit/image/close-x.png',
  loading: 'https://www.google.com/uds/modules/identitytoolkit/image/loading.gif',
  removeIconUrl: 'https://www.google.com/uds/modules/identitytoolkit/image/close-x-small.png',
  noPhoto: 'https://www.google.com/uds/modules/identitytoolkit/image/profile-picture-small.png',
  darkKeyHole: 'https://www.google.com/uds/modules/identitytoolkit/image/signin-keyhole-dark.png',
  lightKeyHole: 'https://www.google.com/uds/modules/identitytoolkit/image/signin-keyhole-light.png',
  downArrow: 'https://www.google.com/uds/modules/identitytoolkit/image/arrow-dark.gif',
  gmail: 'https://www.google.com/uds/modules/identitytoolkit/image/gmail-ac.png',
  googleapps: 'https://www.google.com/uds/modules/identitytoolkit/image/googleapps-ac.png',
  aol: 'https://www.google.com/uds/modules/identitytoolkit/image/aol-ac.png',
  yahoo: 'https://www.google.com/uds/modules/identitytoolkit/image/yahoo-ac.png',
  hotmail: 'https://www.google.com/uds/modules/identitytoolkit/image/hotmail-ac.png'
});

/**
 * Stores all the labels of the widget.
 */
window.google.identitytoolkit.easyrp.labels = jQuery.extend(
    window.google.identitytoolkit.easyrp.labels || {}, {
  navbarPage: {
    signIn: MSG_NAVBAR_SIGN_IN,
    switchAccount: MSG_NAVBAR_SWITCH_ACCOUNT,
    signOut: MSG_NAVBAR_SIGN_OUT,
    notSupport: MSG_NAVBAR_NOT_SUPPORT
  },

  idps: {
    Gmail: MSG_IDPS_GMAIL,
    GoogleApps: MSG_IDPS_GOOGLE_APPS,
    Yahoo: MSG_IDPS_YAHOO,
    AOL: MSG_IDPS_AOL,
    Hotmail: MSG_IDPS_HOTMAIL
  },

  popup: {
    loading: MSG_POPUP_LOADING,
    redirecting: MSG_POPUP_REDIRECTING,
    tryLegacy: MSG_POPUP_TRY_LEGACY,
    loadFailed: MSG_POPUP_LOAD_FAILED
  },

  accountChooserPage: {
    closeIcon: window.google.identitytoolkit.easyrp.images.close,
    close: MSG_ACCOUNT_CHOOSER_CLOSE,
    title: MSG_ACCOUNT_CHOOSER_TITLE,
    removeTitle: MSG_ACCOUNT_CHOOSER_REMOVE,
    addAccount: MSG_ACCOUNT_CHOOSER_ADD_ACCOUNT_1
  },
  addAccountPage: {
    title: MSG_ADD_ACCOUNT_TITLE,
    pick: MSG_ADD_ACCOUNT_PICK_1,
    email: MSG_ADD_ACCOUNT_EMAIL_1,
    next: MSG_ADD_ACCOUNT_NEXT_1,
    acSiteText: MSG_ADD_ACCOUNT_MORE_LINK,
    acSiteUrl: 'https://www.accountchooser.com/learnmore.html'
  },
  popupIndicatorPage: {
    busyIcon: window.google.identitytoolkit.easyrp.images.loading,
    busy: MSG_POPUP_INDICATOR_BUSY,
    showPopup: MSG_POPUP_INDICATOR_SHOW_POPUP,
    cancel: MSG_POPUP_INDICATOR_CANCEL
  },
  appsDomainPage: {
    close: MSG_APPS_DOMAIN_CLOSE,
    title: MSG_APPS_DOMAIN_TITLE('<nobr>', '</nobr>'),
    inputAppsDomain: MSG_APPS_DOMAIN_INPUT_DOMAIN_1,
    next: MSG_APPS_DOMAIN_NEXT
  },

  chooserLegacyPage: {
    close: MSG_CHOOSER_LEGACY_CLOSE,
    title: MSG_CHOOSER_LEGACY_TITLE,
    password: MSG_CHOOSER_LEGACY_PASSWORD,
    next: MSG_CHOOSER_LEGACY_NEXT_1
  }
});

/**
 * Stores all the messages of the widget.
 */
window.google.identitytoolkit.easyrp.messages = {
  appsDomainPage: {
    invalidDomain: MSG_APPS_DOMAIN_INVALID_DOMAIN
  },
  signInPage: {
    accountMismatch: MSG_SIGN_IN_MISMATCH('<a>%%domain%%</a>'),
    invalidAssertion: MSG_SIGN_IN_INVALID_ASSERTION,
    invalidAssertionEmail: MSG_SIGN_IN_INVALID_ASSERTION_EMAIL,
    unrecognizedNotification: MSG_SIGN_IN_UNRECOGNIZED_NOTIFICATION(
        '<a>%%notification%%</a>'),
    unrecognizedErrorType: MSG_SIGN_IN_UNRECOGINZED_ERROR_TYPE,
    emptyEmail: MSG_SIGN_IN_EMPTY_EMAIL,
    emailFormatError: MSG_SIGN_IN_EMAIL_FORMAT_ERROR,
    passwordError: MSG_SIGN_IN_PASSWORD_ERROR,
    unrecognizedResult: MSG_SIGN_IN_UNRECOGINZED_RESULT('<a>%%status%%</a>'),
    emailNotExist: MSG_SIGN_IN_EMAIL_NOT_EXIST
  },
  addAccountPage: {
    emptyEmail: MSG_SIGN_IN_EMPTY_EMAIL,
    emailFormatError: MSG_SIGN_IN_EMAIL_FORMAT_ERROR
  }
};

/**
 * Namespace declaration.
 */
window.google.identitytoolkit.easyrp.config =
    window.google.identitytoolkit.easyrp.config || {};

/**
 * The name space for IDP configuration parameters.
 */
window.google.identitytoolkit.easyrp.config.idps = {};

/**
 * @namespace The configuration parameters for Gmail.
 */
window.google.identitytoolkit.easyrp.config.idps.Gmail =
    /** @lends window.google.identitytoolkit.easyrp.config.idps.Gmail */ {
  /**
   * The display name for the IDP.
   */
  label: window.google.identitytoolkit.easyrp.labels.idps.Gmail,

  /**
   * The URL of the icon for the IDP.
   */
  image: window.google.identitytoolkit.easyrp.images.gmail,

  /**
   * The email domain for the IDP.
   */
  domain: 'gmail.com'
};

/**
 * @namespace The configuration parameters for Gmail.
 */
window.google.identitytoolkit.easyrp.config.idps.GoogleApps =
    /** @lends window.google.identitytoolkit.easyrp.config.idps.Gmail */ {
  /**
   * The display name for the IDP.
   */
  label: window.google.identitytoolkit.easyrp.labels.idps.GoogleApps,

  /**
   * The URL of the icon for the IDP.
   */
  image: window.google.identitytoolkit.easyrp.images.googleapps,

  /**
   * The email domain for the IDP.
   */
  domain: 'gmail.com'
};

/**
 * @namespace The configuration parameters for Yahoo.
 */
window.google.identitytoolkit.easyrp.config.idps.Yahoo =
    /** @lends window.google.identitytoolkit.easyrp.config.idps.Yahoo */ {
  /**
   * The display name for the IDP.
   */
  label: window.google.identitytoolkit.easyrp.labels.idps.Yahoo,

  /**
   * The URL of the icon for the IDP.
   */
  image: window.google.identitytoolkit.easyrp.images.yahoo,

  /**
   * The email domain for the IDP.
   */
  domain: 'yahoo.com'
};

/**
 * @namespace The configuration parameters for AOL.
 */
window.google.identitytoolkit.easyrp.config.idps.AOL =
    /** @lends window.google.identitytoolkit.easyrp.config.idps.AOL */ {
  /**
   * The display name for the IDP.
   */
  label: window.google.identitytoolkit.easyrp.labels.idps.AOL,

  /**
   * The URL of the icon for the IDP.
   */
  image: window.google.identitytoolkit.easyrp.images.aol,

  /**
   * The email domain for the IDP.
   */
  domain: 'aol.com'
};

/**
 * @namespace The configuration parameters for Hotmail.
 */
window.google.identitytoolkit.easyrp.config.idps.Hotmail =
    /** @lends window.google.identitytoolkit.easyrp.config.idps.Hotmail */ {
  /**
   * The display name for the IDP.
   */
  label: window.google.identitytoolkit.easyrp.labels.idps.Hotmail,

  /**
   * The URL of the icon for the IDP.
   */
  image: window.google.identitytoolkit.easyrp.images.hotmail,

  /**
   * The email domain for the IDP.
   */
  domain: 'hotmail.com'
};

/**
 * @namespace The configuration parameters for the popup window.
 */
window.google.identitytoolkit.easyrp.config.popup = {};

/**
 * The width of the popup window.
 */
window.google.identitytoolkit.easyrp.config.popup.width = 520;

/**
 * The height of the popup window.
 */
window.google.identitytoolkit.easyrp.config.popup.height = 550;

/**
 * The HTML of the popup window.
 */
window.google.identitytoolkit.easyrp.config.popup.HTML =
    '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '  <head>\n' +
    '    <meta charset="utf-8">\n' +
    '    <title>%%title%%</title>\n' +
    '    <style type="text/css">\n' +
    '      html,\n' +
    '      body {\n' +
    '        background: #f6f6f6;\n' +
    '        text-align: center;\n' +
    '        margin: 0;\n' +
    '        padding: 0;\n' +
    '      }\n' +
    '      #message span {\n' +
    '        display: inline-block;\n' +
    '        margin: 20% 0 0;\n' +
    '        padding: 20px;\n' +
    '        font-weight: 300;\n' +
    '        font-size: 16px;\n' +
    '        text-align: center;\n' +
    '        background: #fff;\n' +
    '        border: 1px solid #ddd;\n' +
    '        border-radius: 4px;\n' +
    '        -moz-border-radius: 4px;\n' +
    '        -webkit-border-radius: 4px;\n' +
    '      }\n' +
    '    </style>\n' +
    '  </head>\n' +
    '  <body>\n' +
    '    <div id="message">\n' +
    '      <span>%%message%%</span>\n' +
    '    </div>\n' +
    '  </body>\n' +
    '</html>\n';

/**
 * The EasyRP API Server. Default is http://www.gitclients.com/.
 */
window.google.identitytoolkit.easyrp.config.apiServer = '';

/**
 * The version of the EasyRP API.
 */
window.google.identitytoolkit.easyrp.config.apiVersion = 'v1';

/**
 * The callback URL when returned from an IDP.
 */
window.google.identitytoolkit.easyrp.config.continueUrl = '';

/**
 * Whether the widget should append extra parameters to the callback URL or put
 * them into the 'context' parameter of the createAuthUrl API.
 */
window.google.identitytoolkit.easyrp.config.useContextParam = false;

// Changes the end-point of EasyRP API.
if (window.google.identitytoolkit.easyrp.config.apiServer) {
  window['__GOOGLEAPIS'] = {
    'googleapis.config': {
      'proxy': window.google.identitytoolkit.easyrp.config.apiServer +
          '/static/proxy.html'
    }
  };
}

//Changes the version of the EasyRP API.
if (window.googleapis) {
  window.googleapis.setVersions({
    'identitytoolkit': window.google.identitytoolkit.easyrp.config.apiVersion
  });
}

/**
 * The image URL for account entry that doesn't have a photo;
 */
window.google.identitytoolkit.easyrp.config.defaultPhotoUrl =
    window.google.identitytoolkit.easyrp.images.noPhoto;

/**
 * The image URL for account entry that doesn't have a photo;
 */
window.google.identitytoolkit.easyrp.config.keyholeUrl =
    window.google.identitytoolkit.easyrp.images.lightKeyHole;

/**
 * The image URL for account entry that doesn't have a photo;
 */
window.google.identitytoolkit.easyrp.config.buttonKeyholeUrl =
    window.google.identitytoolkit.easyrp.images.lightKeyHole;


/**
 * The configuration parameters for Nascar lists.
 */
window.google.identitytoolkit.easyrp.config.nascar =
    window.google.identitytoolkit.easyrp.config.nascar || {};

/**
 * The Nascar list for AddAccount Page.
 */
window.google.identitytoolkit.easyrp.config.nascar.addAccountPage =
    ['Gmail', 'AOL', 'Hotmail', 'Yahoo'];

/**
 * The theme class of the AC widget. Only supports 'widge-theme-light' now.
 */
window.google.identitytoolkit.easyrp.config.themeClass = 'widge-theme-light';

/**
 * Whether the widget should always try federated login first.
 */
window.google.identitytoolkit.easyrp.config.tryFederatedFirst = true;

/**
 * Whether the widget should use saved account information (user type, and IDP),
 * or connect back to RP for these information before login.
 */
window.google.identitytoolkit.easyrp.config.useCachedUserStatus = false;

/**
 * Whether to show the accounts in the drop down menu of the navbar after login.
 */
window.google.identitytoolkit.easyrp.config.showAccountsMenu = false;

/**
 * Whether to support user name as legacy account.
 */
window.google.identitytoolkit.easyrp.config.supportLegacyUsername = false;

/**
 * Whether to disable the check of the user name format.
 */
window.google.identitytoolkit.easyrp.config.disableUsernameFormatCheck = false;

/**
 * The user name format RegEx, default is: /^\w+(\.\w+)*$/
 */
window.google.identitytoolkit.easyrp.config.usernameRegex = /^\w+(\.\w+)*$/;

/**
 * Whether to use full page redirect mode or not.
 */
window.google.identitytoolkit.easyrp.config.useFullPageRedirect = false;

/**
 * Whether to use the CDS or not.
 */
window.google.identitytoolkit.easyrp.config.useCds = false;

/**
 * The dropdown menu for the navbar widget.
 * @type {Array<{label:string, handler:(Function|string)}>}
 */
window.google.identitytoolkit.easyrp.config.dropdownMenu = [{
  label: window.google.identitytoolkit.easyrp.labels.navbarPage.switchAccount,
  handler: 'onSwitchAccountClicked'}, {
  label: window.google.identitytoolkit.easyrp.labels.navbarPage.signOut,
  handler: 'onSignOutClicked'
}];

/**
 * This method is the entry point to change the configuration parameters of a
 * widget.
 * <p>This method lists all supported parameter names, which are
 * case-insensitive. The default behavior when changing a config is to write a
 * log to the browser console. (With the exception 'developerKey', 'returnToUrl'
 * , and 'companyName', which will do the real work here.)
 * <p>A widget should override some of the methods that starts with 'setWidget'
 * to actually support these configuration parameters.
 * @param {Object} config The configuration parameter key-value pairs.
 */
window.google.identitytoolkit.easyrp.config.setConfig = function(config) {
  if (config) {
    for (var key in config) {
      var value = config[key];
      // Uses lower case for error-tolerance
      var lowerCaseKey = key.toLowerCase();
      switch (lowerCaseKey) {
        case 'gitclient': {
          window.google.identitytoolkit.easyrp.config.setWidgetGitClient_(value,
              key);
          break;
        }
        case 'apiversion': {
          window.google.identitytoolkit.easyrp.config.setApiVersion_(value,
              key);
          break;
        }
        case 'developerkey': {
          window.google.identitytoolkit.easyrp.config.setDeveloperKey_(value,
              key);
          break;
        }
        case 'supportlegacyusername': {
          window.google.identitytoolkit.easyrp.config.setSupportLegacyUsername_(
              value, key);
          break;
        }
        case 'checkusernameformat': {
          window.google.identitytoolkit.easyrp.config.setCheckUsernameFormat_(
              value, key);
          break;
        }
        case 'usernameregex': {
          window.google.identitytoolkit.easyrp.config.setUsernameRegex_(value,
              key);
          break;
        }
        case 'usecontextparam': {
          window.google.identitytoolkit.easyrp.config.setUseContextParam_(value,
              key);
          break;
        }
        case 'language': {
          window.google.identitytoolkit.easyrp.config.setLanguage_(value, key);
          break;
        }
        //TODO(guibinkong): remove returntourl when docs changed.
        case 'returntourl':
        case 'callbackurl': {
          window.google.identitytoolkit.easyrp.config.setCallbackUrl_(value,
              key);
          break;
        }
        case 'realm': {
          window.google.identitytoolkit.easyrp.config.setRealm_(value,
              key);
          break;
        }
        case 'companyname': {
          window.google.identitytoolkit.easyrp.config.setCompanyName_(value,
              key);
          break;
        }
        case 'width': {
          window.google.identitytoolkit.easyrp.config.setWidgetWidth(value,
              key);
          break;
        }
        case 'loginurl': {
          window.google.identitytoolkit.easyrp.config.setWidgetLoginUrl(value,
              key);
          break;
        }
        case 'userstatusurl': {
          window.google.identitytoolkit.easyrp.config.setWidgetUserStatusUrl(
              value, key);
          break;
        }
        case 'signupurl': {
          window.google.identitytoolkit.easyrp.config.setWidgetSignupUrl(value,
              key);
          break;
        }
        case 'federatedsignupurl': {
          window.google.identitytoolkit.easyrp.config.
              setWidgetFederatedSignupUrl(value, key);
          break;
        }
        case 'homeurl': {
          window.google.identitytoolkit.easyrp.config.setWidgetHomeUrl(value,
              key);
          break;
        }
        case 'forgoturl': {
          window.google.identitytoolkit.easyrp.config.setWidgetForgotUrl(value,
              key);
          break;
        }
        case 'accountchooserpageurl': {
          window.google.identitytoolkit.easyrp.config.
              setWidgetAccountChooserPageUrl(value, key);
          break;
        }
        case 'logouturl': {
          window.google.identitytoolkit.easyrp.config.setWidgetLogoutUrl(value,
              key);
          break;
        }
        case 'logouthandler': {
          window.google.identitytoolkit.easyrp.config.setWidgetLogoutHandler(
              value, key);
          break;
        }
        case 'idps': {
          window.google.identitytoolkit.easyrp.config.setWidgetIdps(value,
              key);
          break;
        }
        // Set the properties for exited IDPs or add new IDP. For new IDPs,
        // lable, image and domain are required fields. For existed IDPs, the
        // fields provided will be merged with the pre-defined ones.
        // window.google.identitytoolkit.setConfig({
        //   ...
        //   idpConfig: {
        //     MockIdp: {         // Add a new IDP called 'MockIdp'
        //       label: '',
        //       image: '',
        //       domain: ''
        //     },
        //     Gmail: {           // Set the OAuth scopes for existed IDP.
        //       scopes: []
        //     },
        //     Yahoo: {
        //       consumerKey: ''  // Set the OAuth consumer key for existed IDP.
        //     }
        //     ...
        //   },
        //   ...
        // });
        case 'idpconfig': {
          window.google.identitytoolkit.easyrp.config.setWidgetIdpConfig(value,
              key);
          break;
        }
        case 'localtabheader': {
          window.google.identitytoolkit.easyrp.config.setWidgetLocalTabHeader(
              value, key);
          break;
        }
        case 'anytabheader': {
          window.google.identitytoolkit.easyrp.config.setWidgetAnyTabHeader(
              value, key);
          break;
        }
        case 'tryfederatedfirst': {
          window.google.identitytoolkit.easyrp.config.
              setWidgetTryFederatedFirst(value, key);
          break;
        }
        case 'usecacheduserstatus': {
          window.google.identitytoolkit.easyrp.config.
              setWidgetUseCachedUserStatus(value, key);
          break;
        }
        case 'showaccountsmenu': {
          window.google.identitytoolkit.easyrp.config.
              setWidgetShowAccountsMenu(value, key);
          break;
        }
        case 'dropdownmenu': {
          window.google.identitytoolkit.easyrp.config.
              setWidgetDrowdownMenu(value, key);
          break;
        }
        case 'sitelogourl': {
          window.google.identitytoolkit.easyrp.config.
              setWidgetSiteLogoUrl(value, key);
          break;
        }
        case 'usefullpageredirect': {
          window.google.identitytoolkit.easyrp.config.
              setWidgetUseFullPageRedirect(value, key);
          break;
        }
        case 'usecds': {
          window.google.identitytoolkit.easyrp.config.setWidgetUseCds(value,
              key);
          break;
        }
        case 'cdsemptyresponsehandler': {
          window.google.identitytoolkit.easyrp.config.
              setCdsEmptyResponseHandler(value, key);
          break;
        }
        case 'cdsclientcallbackurl': {
          window.google.identitytoolkit.easyrp.config.setCdsClientCallbackUrl(
              value, key);
          break;
        }
        case 'cdsuiconfig': {
          window.google.identitytoolkit.easyrp.config.setCdsUiConfig(value,
              key);
          break;
        }
        case 'siteemailid': {
          window.google.identitytoolkit.easyrp.config.setSiteEmailId(value,
              key);
          break;
        }
        case 'sitepasswordid': {
          window.google.identitytoolkit.easyrp.config.setSitePasswordId(value,
              key);
          break;
        }
        case 'sitedisplaynameid': {
          window.google.identitytoolkit.easyrp.config.setSiteDisplayNameId(
              value, key);
          break;
        }
        case 'sitephotourlid': {
          window.google.identitytoolkit.easyrp.config.setSitePhotoUrlId(value,
              key);
          break;
        }
        case 'mode': {
          window.google.identitytoolkit.easyrp.config.setMode(value, key);
          break;
        }
        case 'storeaccount': {
          window.google.identitytoolkit.easyrp.config.setStoredAccount(value,
              key);
          break;
        }
        default: {
          window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(
              key);
          break;
        }
      }
    }
  }
};

/**
 * Writes a log to browser console for a unrecognized configuration parameter.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_ = function(
    key) {
  if (window.google.identitytoolkit.easyrp.util &&
      window.google.identitytoolkit.easyrp.util.log) {
    var msg = 'Unrecognized config parameter \'' + key + '\', ignored!';
    window.google.identitytoolkit.easyrp.util.log(msg);
  }
};

/**
 * Sets configuration parameter: api version.
 * @param {string} value the parameter value.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setApiVersion_ = function(value,
    key) {
  if (window.gapi && window.gapi.client) {
    // Using new gapi client library.
    window.google.identitytoolkit.easyrp.param.notEmpty(value, key);
    window.google.identitytoolkit.easyrp.config.apiVersion = value;
  } else if (window.googleapis) {
    // Using old-fashion googleapis library.
    window.google.identitytoolkit.easyrp.param.notEmpty(value, key);
    window.google.identitytoolkit.easyrp.config.apiVersion = value;
    window.googleapis.setVersions({
      'identitytoolkit': value
    });
  } else {
    window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
  }
};

/**
 * Sets configuration parameter: developer key.
 * @param {string} value the parameter value.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setDeveloperKey_ = function(value,
    key) {
  // Note that plusone.js just introduces the window.gapi.client namespace but
  // doesn't really include the client.js library. Since we give the workaround
  // that replacing "googleapis.js" with "plusone.js" to the developers, we must
  // make sure when we push the new version using "client.js", we don't break
  // them. In the case that sites only include "plusone.js", we still use
  // old-fashion googleapis library, which is included by "plusone.js".
  if (window.gapi && window.gapi.client && window.gapi.client.setApiKey) {
    // Using new gapi client library.
    window.google.identitytoolkit.easyrp.param.notEmpty(value, key);
    window.gapi.client.setApiKey(value);
  } else if (window.googleapis) {
    // Using old-fashion googleapis library.
    window.google.identitytoolkit.easyrp.param.notEmpty(value, key);
    window.googleapis.setDeveloperKey(value);
  } else {
    window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
  }
};

/**
 * Sets configuration parameter: whether treat username as legacy account.
 * @param {string} value the parameter value.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setSupportLegacyUsername_ =
    function(value) {
  window.google.identitytoolkit.easyrp.config.supportLegacyUsername = !!value;
};

/**
 * Sets configuration parameter: strict user name format checking.
 * @param {string} value the parameter value.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setCheckUsernameFormat_ =
    function(value) {
  window.google.identitytoolkit.easyrp.config.disableUsernameFormatCheck =
      !value;
};

/**
 * Sets configuration parameter: the Regex for user name.
 * @param {string} value the Regex for user name.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setUsernameRegex_ =
    function(value) {
  window.google.identitytoolkit.easyrp.config.usernameRegex = value;
};

/**
 * Sets configuration parameter: whether appending extra parameters to the
 * callback URL or putting them into context parameter of the creatAuthUrl API.
 * @param {string} value the parameter value.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setUseContextParam_ = function(
    value) {
  window.google.identitytoolkit.easyrp.config.useContextParam = !!value;
};

/**
 * Sets configuration parameter: the language of the messages.
 * @param {string} value the parameter value.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setLanguage_ = function(value,
    key) {
  window.google.identitytoolkit.easyrp.config.language = value;
};

/**
 * Sets configuration parameter: return to URL
 * @param {string} value the parameter value.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setCallbackUrl_ = function(value,
    key) {
  window.google.identitytoolkit.easyrp.param.notEmpty(value, key);
  window.google.identitytoolkit.easyrp.config.continueUrl = value;
};

/**
 * Sets configuration parameter: realm
 * @param {string} value the parameter value.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setRealm_ = function(value) {
  window.google.identitytoolkit.easyrp.config.realm = value;
};

/**
 * Sets configuration parameter: company name.
 * @param {string} value the parameter value.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setCompanyName_ = function(value) {
  if (window.google.identitytoolkit.easyrp.labels) {
    window.google.identitytoolkit.easyrp.config.replaceCompanyName_(
        window.google.identitytoolkit.easyrp.labels, value);
  }
};

/**
 * Replaces all the place holder '' to company name.
 * @param {Object} res The resource object.
 * @param {string} companyNameValue The value of the company name.
 * @private
 */
window.google.identitytoolkit.easyrp.config.replaceCompanyName_ = function(res,
    companyNameValue) {
  for (var key in res) {
    var value = res[key];
    if (typeof(value) == 'string') {
      res[key] = value.replace(/\%\%companyName\%\%/g, companyNameValue);
    } else if (typeof(value) == 'object') {
      window.google.identitytoolkit.easyrp.config.replaceCompanyName_(value,
          companyNameValue);
    }
  }
};

/**
 * Sets configuration parameter: Git Client.
 * @param {string} value the parameter value.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setWidgetGitClient_ = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: widget width.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetWidth = function(value,
    key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: login URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetLoginUrl = function(value,
    key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: sign up URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetSignupUrl = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: federated sign up URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetFederatedSignupUrl =
    function(value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: user status URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetUserStatusUrl = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: sign up URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetForgotUrl = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: sign up URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetHomeUrl = function(value,
    key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: nascar IDPs.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetIdps = function(value,
    key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: IDP configurations.
 * @param {Object} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetIdpConfig = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: any tab header.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetLocalTabHeader = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: any tab header.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetAnyTabHeader = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: tryFederatedFirst.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetTryFederatedFirst =
    function(value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: useCachedUserStatus.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetUseCachedUserStatus =
    function(value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: showAccountsMenu.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetShowAccountsMenu =
    function(value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: log out URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetLogoutUrl = function(value,
    key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: log out handler.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetLogoutHandler = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: dropdown menu array.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetDrowdownMenu = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: the URL for the logo of the site.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetSiteLogoUrl = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: the redirect mode.
 * @param {boolean} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetUseFullPageRedirect =
    function(value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: Whether to use the CDS.
 * @param {boolean} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetUseCds = function(value,
    key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: hanlder for CDS empty response.
 * @param {function()} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setCdsEmptyResponseHandler =
    function(value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: callback url for CDS client.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setCdsClientCallbackUrl = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: ui configuration for CDS.
 * @param {Object} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setCdsUiConfig = function(value,
    key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: UI element id for email input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setSiteEmailId = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: UI element id for password input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setSitePasswordId = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: UI element id for display name input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setSiteDisplayNameId = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: UI element id for photo URL input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setSitePhotoUrlId = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: mode for the widget.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setMode = function(value, key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: account to be stored.
 * @param {Object} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setStoredAccount = function(value,
    key) {
  window.google.identitytoolkit.easyrp.config.logUnrecognizedConfig_(key);
};

/**
 * Shortcut method for
 * {@code window.google.identitytoolkit.easyrp.config.setConfig}
 * @param {Object} config The configuration parameter key-value pairs.
 */
window.google.identitytoolkit.setConfig = function(config) {
  window.google.identitytoolkit.easyrp.config.setConfig(config);
};

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
 * @param {string=} opt_targetWinName The name of the target window which the
 *     form is submitted to. If targetWinName is an empty string or not
 *     present, the current window is used.
 * @return {Element} The created DOM element.
 * @private
 */
window.google.identitytoolkit.easyrp.util.createForm_ = function(targetUrl,
    parameters, opt_targetWinName) {
  if (!targetUrl) {
    throw 'The targetUrl cannot be null.';
  }
  var myForm = window.document.createElement('form');
  myForm.method = 'post';
  myForm.action = targetUrl;
  if (parameters) {
    for (var k in parameters) {
      var myInput = window.document.createElement('input');
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
  if (opt_targetWinName) {
    myForm.target = opt_targetWinName;
  }
  window.document.body.appendChild(myForm);
  return myForm;
};

/**
 * Creates a form with {@code parameters} and submit it to {@code targetUrl}.
 * @param {string} targetUrl The URL to which the form will submit.
 * @param {{key1: value1, key2: value2, ...}} parameters The parameters in the
 *     form.
 * @param {string=} opt_targetWinName The name of the target window which the
 *     form is submitted to. If targetWinName is an empty string or not
 *     present, the current window is used.
 */
window.google.identitytoolkit.easyrp.util.postTo = function(targetUrl,
    parameters, opt_targetWinName) {
  var myForm = window.google.identitytoolkit.easyrp.util.createForm_(targetUrl,
      parameters, opt_targetWinName);
  myForm.submit();
  window.document.body.removeChild(myForm);
};

/**
 * Returns the URL params. e.g. To get the value of the "foo" param in the
 * URL the code can be: var foo = parseUrlParams()['foo'];
 * @param {string} url The URL to parse.
 * @return {Object} The URL params array.
 */
window.google.identitytoolkit.easyrp.util.parseUrlParams = function(url) {
  var params = {};
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
 * @param {string=} opt_targetWinName The name of the target window which the
 *     form is submitted to. If targetWinName is an empty string or not
 *     present, the current window is used.
 */
window.google.identitytoolkit.easyrp.util.formRedirect = function(targetUrl,
    opt_targetWinName) {
  var url = targetUrl.substring(0, targetUrl.indexOf('?'));
  var params =
      window.google.identitytoolkit.easyrp.util.parseUrlParams(targetUrl);
  window.google.identitytoolkit.easyrp.util.postTo(url, params,
      opt_targetWinName);
};

/**
 * Checks whether the user's browser is supported.
 * @return {boolean} {@code true} if the browser is supported.
 */
window.google.identitytoolkit.easyrp.util.isBrowserSupported = function() {
  var version = 999;
  if (navigator.appVersion.indexOf('MSIE') != -1) {
    version = parseFloat(navigator.appVersion.split('MSIE')[1]);
  }
  return version > 7;
};

/**
 * Makes a URL from the base URL and the parameters
 * @param {string} url The base URL.
 * @param {Object.<string, number|string|boolean>} params The URL parameters. The
 *     name of the parameter should be a string and the value should be a
 *     number, string or boolean.
 * @return {string} The new URI with the parameters.
 */
window.google.identitytoolkit.easyrp.util.makeUrl = function(url, params) {
  var query = [];
  for (var i in params) {
    query.push(params[i] ? i + '=' + params[i] : i);
  }
  return url + '?' + query.join('&');
};

// Utility functions which are to substitute for jQuery ones.
/**
 * Checks whether the value is an array or not. Try to use jQuery.isArray if
 * possible.
 * @param {*} value The value to be checked.
 * @return {boolean} True if it's an array, false otherwise.
 */
window.google.identitytoolkit.easyrp.util.isArray = function(value) {
  if (typeof jQuery !== 'undefined') {
    return jQuery.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === '[object Array]';
  }
};

/**
 * Checks whether the value is a function or not. Try to use jQuery.isFunction
 * if possible.
 * @param {*} value The value to be checked.
 * @return {boolean} True if it's a function, false otherwise.
 */
window.google.identitytoolkit.easyrp.util.isFunction = function(value) {
  if (typeof jQuery !== 'undefined') {
    return jQuery.isFunction(value);
  } else {
    return Object.prototype.toString.call(value) === '[object Function]';
  }
};

/**
 * Checks whether the elements is in the array/array-like object and returns the
 * index of it. Try to use jQuery.inArray if possible.
 * @param {*} element The element to be checked.
 * @param {Array.<*>|{length: number}} array The array to be searched.
 * @return {number} The index of the element in the array. If the element is not
 *     in the array, -1 is returned.
 */
window.google.identitytoolkit.easyrp.util.indexOf = function(element, array) {
  if (array) {
    if (typeof jQuery !== 'undefined') {
      return jQuery.inArray(element, array);
    }
    if (array.indexOf) {
      return array.indexOf(element);
    }
    var length = array.length;
    for (var i = 0; i < length; i++) {
      if (i in array && array[i] === element) {
        return i;
      }
    }
  }
  return -1;
};

/**
 * Gets the width of the window.
 * @param {Element} window The window element.
 * @return {number} The width of the window.
 */
window.google.identitytoolkit.easyrp.util.windowWidth = function(window) {
  if (typeof jQuery !== 'undefined') {
    return jQuery(window).width();
  }
  var width = 0;
  if (window.innerWidth) {
    width = window.innerWidth;
  } else if (window.document && window.document.documentElement &&
      window.document.documentElement.clientWidth) {
    width = window.document.documentElement.clientWidth;
  } else if (window.document && window.document.body &&
      window.document.body.clientWidth) {
    width = window.document.body.clientWidth;
  }
  return width;
};

/**
 * Gets the height of the window.
 * @param {Element} window The window element.
 * @return {number} The height of the window.
 */
window.google.identitytoolkit.easyrp.util.windowHeight = function(window) {
  if (typeof jQuery !== 'undefined') {
    return jQuery(window).height();
  }
  var height = 0;
  if (window.innerHeight) {
    height = window.innerHeight;
  } else if (window.document && window.document.documentElement &&
      window.document.documentElement.clientHeight) {
    height = window.document.documentElement.clientHeight;
  } else if (window.document && window.document.body &&
      window.document.body.clientHeight) {
    height = window.document.body.clientHeight;
  }
  return height;
};

/**
 * Trims the leading and trailing space characters. Try to use jQuery.trim if
 * possible.
 * @param {string} str The string to be trimmed.
 * @return {string} The trimmed string.
 */
window.google.identitytoolkit.easyrp.util.trim = function(str) {
  if (typeof jQuery !== 'undefined') {
    return jQuery.trim(str);
  }
  if (str == null) {
    return '';
  } else if (String.prototype.trim) {
    return String.prototype.trim.call(str);
  } else {
    return str.replace(/^[\s\xa0]+/, '').replace(/[\s\xa0]+$/, '');
  }
};

/**
 * Merges several objects into the first object. Try to use jQuery.extend if
 * possible.
 * @param {boolean} deep Whether to performe deep copy or not.
 * @param {Object} target The object to receive the properties from other ones.
 * @param {...Object} var_objects A set of objects to merge in.
 * @return {Object} The merged object.
 */
window.google.identitytoolkit.easyrp.util.extend = function(deep, target,
    var_objects) {
  // If no target provided, return {}. If no other objects to merge in, return
  // target unmodifed..
  if (arguments.length < 3) {
    return target || {};
  }
  if (typeof jQuery !== 'undefined') {
    // If deep == false, don't pass it to jQuery.extend since it'll be treated
    // as the target.
    var args = Array.prototype.slice.call(arguments, deep ? 0 : 1);
    return jQuery.extend.apply(jQuery, args);
  }
  if (typeof target !== 'object' || target == null) {
    target = {};
  }
  for (var i = 2, num = arguments.length; i < num; i++) {
    var obj = arguments[i];
    if (obj == null) {
      continue;
    }
    for (var name in obj) {
      // Skip undefined properties and itself.
      if (obj[name] === undefined || target === obj[name]) {
        continue;
      }
      if (deep && typeof obj[name] == 'object') {
        // Make sure target property is array if the source property is array.
        if (window.google.identitytoolkit.easyrp.util.isArray(obj[name]) &&
            !window.google.identitytoolkit.easyrp.util.isArray(target[name])) {
          target[name] = [];
        }
        target[name] = window.google.identitytoolkit.easyrp.util.extend(true,
            target[name], obj[name]);
      } else {
        target[name] = obj[name];
      }
    }
  }
  return target;
};

/**
 * @namespcae Parameter validators.
 */
window.google.identitytoolkit.easyrp.param = {};

/**
 * Checks a parameter value is not null or undefined.
 * @param {*} value The value of a parameter.
 * @param {string=} opt_paramName An optional name of the parameter.
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
 * @param {*} value The value of a parameter.
 * @param {string=} opt_paramName An optional name of the parameter.
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
 * @param {*} value The value of a parameter.
 * @param {string=} opt_paramName An optional name of the parameter.
 */
window.google.identitytoolkit.easyrp.param.notEmptyArray = function(value,
    opt_paramName) {
  if (!value) {
    window.google.identitytoolkit.easyrp.param.throwError_(
        'Parameter %%param%% cannot be empty.', opt_paramName);
  }
  if (!window.google.identitytoolkit.easyrp.util.isArray(value)) {
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
 * @param {*} value The value of a parameter.
 * @param {string=} opt_paramName An optional name of the parameter.
 */
window.google.identitytoolkit.easyrp.param.notEmptyFunction = function(value,
    opt_paramName) {
  if (!value) {
    window.google.identitytoolkit.easyrp.param.throwError_(
        'Parameter %%param%% cannot be empty.', opt_paramName);
  }
  if (!window.google.identitytoolkit.easyrp.util.isFunction(value)) {
    window.google.identitytoolkit.easyrp.param.throwError_(
        'Parameter %%param%% is not a function.', opt_paramName);
  }
};

/**
 * Throws an error to indicate a failed parameter validation.
 * @param {string} message The error message.
 * @param {string=} opt_paramName An optional name of the parameter.
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
 * The regular expression for a vaild email address.
 * @type {RegExp}
 * @private
 */
window.google.identitytoolkit.easyrp.util.VALID_EMAIL_REGEX_ =
    /^[a-z0-9]+(\.?[-+\w]+)*@([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+$/i;

/**
 * The regular expression for a vaild domain.
 * @type {RegExp}
 * @private
 */
window.google.identitytoolkit.easyrp.util.VALID_DOMAIN_REGEX_ =
    /^([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+$/i;

/**
 * Checks if the given parameter is a valid email address format.
 * @param {string} email The input email to be checked.
 * @return {boolean} True if the email format is valid.
 */
window.google.identitytoolkit.easyrp.util.isValidEmail = function(email) {
  return email && (null !=
    window.google.identitytoolkit.easyrp.util.VALID_EMAIL_REGEX_.exec(email));
};

/**
 * Checks if the given parameter is a valid email domain format. For email
 * domain, port number is not allowed.
 * TODO(guibinkong): Should rename to isValidEmailDomain().
 * @param {string} domain The input email to be checked.
 * @return {boolean} True if the domain format is valid.
 */
window.google.identitytoolkit.easyrp.util.isValidDomain = function(domain) {
  return domain && (null !=
    window.google.identitytoolkit.easyrp.util.VALID_DOMAIN_REGEX_.exec(domain));
};

/**
 * Returns the domain part of an email in lower case.
 * @param {string} email The email to be parsed.
 * @return {string} The domain of the email parameter.
 */
window.google.identitytoolkit.easyrp.util.getEmailDomain = function(email) {
  email = window.google.identitytoolkit.easyrp.util.trim(email);
  if (email && window.google.identitytoolkit.easyrp.util.isValidEmail(email)) {
    return email.split('@')[1].toLowerCase();
  }
};

/**
 * Returns the user name part of an email in lower case.
 * @param {string} email The email to be parsed.
 * @return {string} The user name of the email parameter.
 */
window.google.identitytoolkit.easyrp.util.getEmailUsername = function(email) {
  email = window.google.identitytoolkit.easyrp.util.trim(email);
  if (email && window.google.identitytoolkit.easyrp.util.isValidEmail(email)) {
    return email.split('@')[0].toLowerCase();
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
 * Computes the position for the popin.
 * @private
 */
window.google.identitytoolkit.easyrp.util.setPopinPosition_ = function() {
  var popin = jQuery('#popin-box');
  if (popin) {
    var top = jQuery(window).scrollTop() +
        (jQuery(window).height() - popin.height()) / 2;
    var left = jQuery(window).scrollLeft() +
        (jQuery(window).width() - popin.width()) / 2;
    top = Math.max(top, 0);
    left = Math.max(left, 0);
    popin.css({
        'top': top + 'px',
        'left': left + 'px'
    });
  }
};

/**
 * Creates a DIV element for the popin.The reason why the popin is not shown in
 * the createPopIn method is we don't want user to see the moving of the popin.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.util.createPopIn = function() {
  jQuery('#popin-box').remove();
  var popin = jQuery('<div>').addClass('popin-box').css('display', 'none')
      .attr('id', 'popin-box').appendTo(jQuery('body'));
  window.google.identitytoolkit.easyrp.util.setPopinPosition_();
  return popin;
};

/**
 * Shows the popin DIV and covers the browser with a dark screen. Creates the
 * popin DIV if not already created.
 */
window.google.identitytoolkit.easyrp.util.showPopIn = function() {
  if (jQuery('#popin-box').length == 0) {
    window.google.identitytoolkit.easyrp.util.createPopIn();
  }
  window.google.identitytoolkit.easyrp.util.showDarkScreen();
  jQuery(window).resize(
      window.google.identitytoolkit.easyrp.util.setPopinPosition_);
  jQuery('#popin-box').show();
  window.google.identitytoolkit.easyrp.util.setPopinPosition_();
};

/**
 * Removes the popin DIV and the dark screen.
 */
window.google.identitytoolkit.easyrp.util.removePopIn = function() {
  jQuery(window).unbind('resize',
      window.google.identitytoolkit.easyrp.util.setPopinPosition_);
  jQuery('#popin-box').remove();
  window.google.identitytoolkit.easyrp.util.removeDarkScreen();
};

/**
 * Default name for popup window.
 */
window.google.identitytoolkit.easyrp.util.DEFAULT_POPUP_NAME = 'OpenIdPopup';

/**
 * Opens a new window.
 * @param {number} width The width of the window.
 * @param {number} height The height of the window.
 * @param {string=} opt_url The URL for the new window. If missing or set to
 *     null, 'about:blank' will be used.
 * @param {string=} opt_name The name for the new window. If missing, use the
 *     default name.
 * @return {Window} the opened window object.
 */
window.google.identitytoolkit.easyrp.util.showPopup = function(width, height,
    opt_url, opt_name) {
  var top = (window.google.identitytoolkit.easyrp.util.windowHeight(window) -
      height) / 2;
  var left = (window.google.identitytoolkit.easyrp.util.windowWidth(window) -
      width) / 2;
  top = top > 0 ? top : 0;
  left = left > 0 ? left : 0;
  var options = 'width=' + width + ',height=' + height + ',left=' + left +
      ',top=' + top + ',status=1,location=1,resizable=yes,menubar=no,' +
      'toolbar=no,titlebar=no,channelmode=no,directories=no,fullscreen=no';
  var url = opt_url || 'about:blank';
  var popupName = opt_name ||
      window.google.identitytoolkit.easyrp.util.DEFAULT_POPUP_NAME;
  var popup = window.open(url, popupName, options);
  if (popup) {
    if (!document.getElementById('popin-box') &&
        window.google.identitytoolkit.easyrp.util.showDarkScreen) {
      window.google.identitytoolkit.easyrp.util.showDarkScreen(popup);
    }
    window.google.identitytoolkit.easyrp.util.popup_ = popup;
    window.google.identitytoolkit.easyrp.util.popupName_ = popupName;
    popup.focus();
  }
  return popup;
};

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
  var id =
      window.google.identitytoolkit.easyrp.util.REGISTRY_KEY_PREFIX_ + uuid;
  window.google.identitytoolkit.easyrp.util.widgets_[id] = ref;
};

/**
 * Removes a widget instance from the window by its uuid.
 * @param {number|string} uuid The uuid of the widget.
 */
window.google.identitytoolkit.easyrp.util.unregisterWidget = function(uuid) {
  var id =
      window.google.identitytoolkit.easyrp.util.REGISTRY_KEY_PREFIX_ + uuid;
  delete window.google.identitytoolkit.easyrp.util.widgets_[id];
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
    var id = window.google.identitytoolkit.easyrp.util.REGISTRY_KEY_PREFIX_ +
        opt_uuid;
    widget = window.google.identitytoolkit.easyrp.util.widgets_[id];
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
 * @class Local data storage class. The storage takes HTML5 localStorage as the
 * primary storage if the browser supports it and the localStorage key is
 * provided. Otherwise, the cookie is used as the underlying storage if the
 * cookie name is provided.
 * @param {?string=} opt_localStorageKey The key under which the data is stored
 *     in HTML5 localStorage.
 * @param {?string=} opt_cookieName The name of the cookie which the data is
 *     saved into.
 * @constructor
 */
window.google.identitytoolkit.easyrp.util.Storage = function(
    opt_localStorageKey, opt_cookieName) {
  window.google.identitytoolkit.easyrp.param.notEmpty(
      opt_localStorageKey || opt_cookieName,
      'opt_localStorageKey || opt_cookieName');
  if (!window.google.identitytoolkit.easyrp.util.Storage.
      isLocalStorageSupported()) {
    window.google.identitytoolkit.easyrp.param.notEmpty(opt_cookieName,
        'opt_cookieName');
  }
  this.localStorageKey_ = opt_localStorageKey;
  this.cookieName_ = opt_cookieName;
};

/**
 * Checks whether the browser supports HTML5 localStorage or not.
 * @return {boolean} {@code true} if HTML5 localStorage is supported.
 */
window.google.identitytoolkit.easyrp.util.Storage.isLocalStorageSupported =
    function() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
};

/**
 * Reads data from storage.
 * @return {*} The previously saved data.
 */
window.google.identitytoolkit.easyrp.util.Storage.prototype.read = function() {
  if (window.google.identitytoolkit.easyrp.util.Storage.
      isLocalStorageSupported() && this.isLocalStorageAllowed_()) {
    return this.readFromLocalStorage_();
  } else if (this.isCookieStorageAllowed_()) {
    return this.readFromCookie_();
  }
};

/**
 * Writes data to storage.
 * @param {*} data The data to be stored.
 */
window.google.identitytoolkit.easyrp.util.Storage.prototype.write = function(
    data) {
  if (window.google.identitytoolkit.easyrp.util.Storage.
      isLocalStorageSupported() && this.isLocalStorageAllowed_()) {
    this.writeToLocalStorage_(data);
  } else if (this.isCookieStorageAllowed_()) {
    this.writeToCookie_(data);
  }
};

/**
 * Clears data from storage.
 */
window.google.identitytoolkit.easyrp.util.Storage.prototype.clear = function() {
  if (window.google.identitytoolkit.easyrp.util.Storage.
      isLocalStorageSupported() && this.isLocalStorageAllowed_()) {
    this.clearFromLocalStorage_();
  }
  if (this.isCookieStorageAllowed_()) {
    this.clearFromCookie_();
  }
};

/**
 * Checks whether the storage is allowed to use HTML5 localStorage or not.
 * @return {boolean} {@code true} if HTML5 localStorage is allowed to use.
 * @private
 */
window.google.identitytoolkit.easyrp.util.Storage.prototype.
   isLocalStorageAllowed_ = function() {
  return !!this.localStorageKey_;
};

/**
 * Checkes whether the storage is allowed to use cookie or not.
 * @return {boolean} {@code true} if cookie is allowed to use.
 * @private
 */
window.google.identitytoolkit.easyrp.util.Storage.prototype.
    isCookieStorageAllowed_ = function() {
  return !!this.cookieName_;
};

/**
 * Reads data from the HTML5 localStorage.
 * @return {*} The data previously saved into the HTML5 localStorage.
 * @private
 */
window.google.identitytoolkit.easyrp.util.Storage.prototype.
    readFromLocalStorage_ = function() {
  window.google.identitytoolkit.easyrp.param.notEmpty(this.localStorageKey_,
      'localStorageKey');
  try {
    var data = window.localStorage.getItem(this.localStorageKey_);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    window.google.identitytoolkit.easyrp.util.log(
        'Failed to read from localStorage: ' + e);
  }
};

/**
 * Writes data to the HTML5 localStorage.
 * @param {*} data The data to be stored into the HTML5 localStorage.
 * @private
 */
window.google.identitytoolkit.easyrp.util.Storage.prototype.
    writeToLocalStorage_ = function(data) {
  window.google.identitytoolkit.easyrp.param.notEmpty(this.localStorageKey_,
      'localStorageKey');
  try {
    var jsonData = JSON.stringify(data);
    window.localStorage.setItem(this.localStorageKey_, jsonData);
  } catch (e) {
    window.google.identitytoolkit.easyrp.util.log(
        'Failed to write to localStorage: ' + e);
  }
};

/**
 * Clears saved data from the HTML5 localStorage.
 * @private
 */
window.google.identitytoolkit.easyrp.util.Storage.prototype.
    clearFromLocalStorage_ = function() {
  window.google.identitytoolkit.easyrp.param.notEmpty(this.localStorageKey_,
      'localStorageKey');
  try {
    window.localStorage.removeItem(this.localStorageKey_);
  } catch (e) {
    window.google.identitytoolkit.easyrp.util.log(
        'Failed to clear from localStorage: ' + e);
  }
};

/**
 * Reads data from cookie.
 * @return {*} The data previously saved into cookie.
 * @private
 */
window.google.identitytoolkit.easyrp.util.Storage.prototype.readFromCookie_ =
    function() {
  window.google.identitytoolkit.easyrp.param.notEmpty(this.cookieName_,
      'cookieName');
  var cookieRegex = '(^|;) ?' + this.cookieName_ + '=([^;]*)(;|$)';
  var cookieValues = document.cookie.match(cookieRegex);
  if (cookieValues) {
    var data = window.google.identitytoolkit.easyrp.util.trim(cookieValues[2]);
    if (data) {
      try {
        return JSON.parse(unescape(data));
      } catch (e) {
        window.google.identitytoolkit.easyrp.util.log(
            'Failed to read from cookie: ' + e);
      }
    }
  }
};

/**
 * Writes data to cookie.
 * @param {*} data The data to be stored into cookie.
 * @private
 */
window.google.identitytoolkit.easyrp.util.Storage.prototype.writeToCookie_ =
    function(data) {
  window.google.identitytoolkit.easyrp.param.notEmpty(this.cookieName_,
      'cookieName');
  try {
    var currentDate = new Date();
    var year = currentDate.getFullYear() + 10;
    var month = currentDate.getMonth();
    var day = currentDate.getDate();
    var cookieDate = new Date(year, month, day);
    document.cookie = this.cookieName_ + '=' + escape(JSON.stringify(data)) +
        '; Path=/; expires=' + cookieDate.toGMTString();
  } catch (e) {
    window.google.identitytoolkit.easyrp.util.log(
        'Failed to write to cookie: ' + e);
  }
};

/**
 * Clears saved data from cookie.
 * @private
 */
window.google.identitytoolkit.easyrp.util.Storage.prototype.clearFromCookie_ =
    function() {
  window.google.identitytoolkit.easyrp.param.notEmpty(this.cookieName_,
      'cookieName');
  try {
    var cookieDate = new Date();
    cookieDate.setTime(cookieDate.getTime() - 1);
    document.cookie = this.cookieName_ + '=; Path=/; expires=' +
        cookieDate.toGMTString();
  } catch (e) {
    window.google.identitytoolkit.easyrp.util.log(
        'Failed to clear from cookie: ' + e);
  }
};

/**
 * Name space for chooser storage.
 */
window.google.identitytoolkit.easyrp.util.accountstorage = {};

/**
 * The key for cached users in the local storage.
 * @type {string}
 * @const
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.ACCOUNTS_ =
    'chooserAccounts';

/**
 * The Cookie name for cached users.
 * @type {string}
 * @const
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.AC_COOKIE_NAME_ =
    '__goog__ac__';

/**
 * The underlying storage instance.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.storage_ =
    new window.google.identitytoolkit.easyrp.util.Storage(
        window.google.identitytoolkit.easyrp.util.accountstorage.ACCOUNTS_,
        window.google.identitytoolkit.easyrp.util.accountstorage.
        AC_COOKIE_NAME_);

/**
 * Reads account entries from storage.
 * @return {Array.<Object>} An array of account entries objects.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.read_ =
    function() {
  var savedAccounts =
      window.google.identitytoolkit.easyrp.util.accountstorage.storage_.read();
  window.google.identitytoolkit.easyrp.util.log(
      'Read saved accounts from storage: ' + JSON.stringify(savedAccounts));
  return savedAccounts;
};

/**
 * Writes account entries to storage.
 * @param {Array.<Object>} accounts The array of account entries objects.
 * @private
 */
window.google.identitytoolkit.easyrp.util.accountstorage.write_ =
    function(accounts) {
  window.google.identitytoolkit.easyrp.util.log(
      'Save accounts to storage: ' + JSON.stringify(accounts));
  window.google.identitytoolkit.easyrp.util.accountstorage.storage_.write(
      accounts);
};

/**
 * Reads the saved account entries from underling storage.
 * @return {Array.<Object>} The saved account entries.
 */
window.google.identitytoolkit.easyrp.util.accountstorage.readAccounts =
    function() {
  var accounts =
      window.google.identitytoolkit.easyrp.util.accountstorage.read_();
  if (!accounts ||
      !window.google.identitytoolkit.easyrp.util.isArray(accounts)) {
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
  window.google.identitytoolkit.easyrp.util.accountstorage.storage_.clear();
};

/**
 * Updates an account entry in underling storage. This method will find the
 * account entry, then trigger the callback function if found, then save the
 * updated entry.
 * @param {string} email The email for the entry to be updated.
 * @param {function(!Object)} func The callback function to update the entry.
 * @param {string=} opt_providerId The provider ID of this account.
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
 * @param {string=} opt_providerId The provider ID of this account.
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
 * @param {string|undefined} opt_providerId The providerId to be found.
 * @return {boolean} true if both email and providerId match.
 * @private
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
 * The regular expression for a domain part.
 * @type {RegExp}
 * @private
 */
window.google.identitytoolkit.easyrp.util.DOMAIN_REGEX_ = /:\/\/(.[^\/?]+)/;

/**
 * The regular expression for a valid domain.
 * @type {RegExp}
 * @private
 */
window.google.identitytoolkit.easyrp.util.VALID_URL_DOMAIN_REGEX_ =
  /^([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+(\:\d+)?$/i;

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
 * Checks whether a string is a valid URL domain. URL domain can have port
 * number in it.
 * @param {string} domain The domain to check.
 * @return {boolean} true is valid.
 */
window.google.identitytoolkit.easyrp.util.isValidUrlDomain = function(domain) {
  if (domain) {
    return window.google.identitytoolkit.easyrp.util.VALID_URL_DOMAIN_REGEX_.
        test(domain);
  }
  return false;
};

/** Name space for URI rewrite functions. */
window.google.identitytoolkit.easyrp.util.urirewrite = {};

/**
 * Domain for Google OpenID auth URI.
 * @private
 */
window.google.identitytoolkit.easyrp.util.urirewrite.GOOGLE_OPENID_DOMAIN_ =
    'www.google.com';
/**
 * Domain for Google OAuth2 auth URI.
 * @private
 */
window.google.identitytoolkit.easyrp.util.urirewrite.GOOGLE_OAUTH_DOMAIN_ =
    'accounts.google.com';
/**
 * Domain for Yahoo OpenID auth URI.
 * @private
 */
window.google.identitytoolkit.easyrp.util.urirewrite.YAHOO_OPENID_DOMAIN_ =
    'open.login.yahooapis.com';
/**
 * Domain for AOL OpenID auth URI.
 * @private
 */
window.google.identitytoolkit.easyrp.util.urirewrite.AOL_OPENID_DOMAIN_ =
    'api.screenname.aol.com';
/**
 * Domain for Microsoft Live OAuth2 auth URI.
 * @private
 */
window.google.identitytoolkit.easyrp.util.urirewrite.HOTMAIL_OAUTH_DOMAIN_ =
    'oauth.live.com';

/**
 * Rewrites the auth URI. Appends the corresponding OAuth parameters to the URI.
 * @param {string} authUri The auth endpoint URI.
 * @return {string} The rewritten URI.
 */
window.google.identitytoolkit.easyrp.util.urirewrite.rewriteAuthUri =
    function(authUri) {
  window.google.identitytoolkit.easyrp.param.notEmpty(authUri, 'authUri');
  var domain =
      window.google.identitytoolkit.easyrp.util.getDomainFromUrl(authUri);
  var idp;
  switch (domain) {
    // Note currently we let Google Apps use the same configuration with Gmail.
    // Google OpenID.
    case window.google.identitytoolkit.easyrp.util.urirewrite.
        GOOGLE_OPENID_DOMAIN_:
      idp = window.google.identitytoolkit.easyrp.config.idps.Gmail;
      return window.google.identitytoolkit.easyrp.util.urirewrite.
          rewriteOpenIdAuthUri_(authUri, idp);
    // Google OAuth2.
    case window.google.identitytoolkit.easyrp.util.urirewrite.
        GOOGLE_OAUTH_DOMAIN_:
      idp = window.google.identitytoolkit.easyrp.config.idps.Gmail;
      return window.google.identitytoolkit.easyrp.util.urirewrite.
          rewriteOAuth2AuthUri_(authUri, idp);
      break;
    // Yahoo OpenID.
    case window.google.identitytoolkit.easyrp.util.urirewrite.
        YAHOO_OPENID_DOMAIN_:
      idp = window.google.identitytoolkit.easyrp.config.idps.Yahoo;
      return window.google.identitytoolkit.easyrp.util.urirewrite.
          rewriteOpenIdAuthUri_(authUri, idp);
      break;
    // AOL OpenID.
    case window.google.identitytoolkit.easyrp.util.urirewrite.
        AOL_OPENID_DOMAIN_:
      // Do nothing for AOL.
      break;
    // Microsoft Live OAuth2.
    case window.google.identitytoolkit.easyrp.util.urirewrite.
        HOTMAIL_OAUTH_DOMAIN_:
      idp = window.google.identitytoolkit.easyrp.config.idps.Hotmail;
      return window.google.identitytoolkit.easyrp.util.urirewrite.
          rewriteOAuth2AuthUri_(authUri, idp);
  }
  // Return the same auth URL as default if the URI can't be recognized.
  return authUri;
};

/**
 * Rewrites the auth URI for IDP using OpenID protocol.
 * @param {string} authUri The auth endpoint URI.
 * @param {Object} idp The IDP config.
 * @return {string} The rewritten URI.
 * @private
 */
window.google.identitytoolkit.easyrp.util.urirewrite.rewriteOpenIdAuthUri_ =
    function(authUri, idp) {
  if (idp.consumerKey || idp.scopes) {
    var url = authUri.split('?')[0];
    var params = window.google.identitytoolkit.easyrp.util.parseUrlParams(
        authUri);
    params['openid.ns.oauth'] = 'http://specs.openid.net/extensions/oauth/1.0';
    if (idp.consumerKey) {
      params['openid.oauth.consumer'] = idp.consumerKey;
    }
    if (idp.scopes && idp.scopes.length) {
      params['openid.oauth.scope'] =
          window.google.identitytoolkit.easyrp.util.urirewrite.addScopes_(
              params['openid.oauth.scope'], idp.scopes);
    }
    // Note: delete the association handle, otherwise Yahoo will refuse the
    // request.
    delete params['openid.assoc_handle'];
    return window.google.identitytoolkit.easyrp.util.makeUrl(url, params);
  }
  return authUri;
};

/**
 * Rewrites the auth URI for IDP using OAuth2 protocol.
 * @param {string} authUri The auth endpoint URI.
 * @param {Object} idp The IDP config.
 * @return {string} The rewritten URI.
 * @private
 */
window.google.identitytoolkit.easyrp.util.urirewrite.rewriteOAuth2AuthUri_ =
    function(authUri, idp) {
  if (idp.scopes) {
    var url = authUri.split('?')[0];
    var params = window.google.identitytoolkit.easyrp.util.parseUrlParams(
        authUri);
    params['scope'] =
        window.google.identitytoolkit.easyrp.util.urirewrite.addScopes_(
            params['scope'], idp.scopes);
    return window.google.identitytoolkit.easyrp.util.makeUrl(url, params);
  }
  return authUri;
};

/**
 * Adds scopes to the current scope string.
 * @param {string} scope The current scope string. In URL parameter, all current
 *     scopes are concated into one string.
 * @param {Array.<string>} newScopes The scopes to be added.
 * @return {string} The new scope string.
 * @private
 */
window.google.identitytoolkit.easyrp.util.urirewrite.addScopes_ = function(
    scope, newScopes) {
  if (jQuery.isArray(newScopes)) {
    if (scope) {
      scope += '+' + newScopes.join('+');
    } else {
      scope = newScopes.join('+');
    }
  }
  return scope;
};

/**
 * Name space for AJAX utility functions.
 */
window.google.identitytoolkit.easyrp.net =
    window.google.identitytoolkit.easyrp.net || {};

/**
 * Name space for EasyRP API utility functions.
 */
window.google.identitytoolkit.easyrp.gitclient =
    window.google.identitytoolkit.easyrp.gitclient || {};

/**
 * Sends AJAX request to EasyRP API server.
 * @param {string} method The Apiary rpcMethod name.
 * @param {Object} parameters The parameters for the Apiary request.
 * @param {function(response)} callback The function to be called when response
 *     returned.
 * @private
 */
window.google.identitytoolkit.easyrp.gitclient.makeRequest_ =
    function(method, parameters, callback) {
  window.google.identitytoolkit.easyrp.util.
      log('Send request to GitService: method=[' + method + '], params=[' +
      window.JSON.stringify(parameters) + '].');
  var cb = function(response) {
    window.google.identitytoolkit.easyrp.util.log('GitService returns: ' +
        window.JSON.stringify(response));
    callback(response);
  };
  if (window.gapi && window.gapi.client && window.gapi.client.request) {
    // Try to build the RESTful API path via method, which is like
    // "identitytoolkit.relyingparty.createAuthUrl". Just split the method and
    // insert the version, such as "v1", "v2", etc., after "identitytoolkit",
    // then join the part with "/", that is
    // "/identitytoolkit/v1/relyingparty/createAuthUrl".
    var parts = method.split('.');
    parts.splice(1, 0, window.google.identitytoolkit.easyrp.config.apiVersion);
    var path = '/' + parts.join('/');
    window.gapi.client.request({
      'path': path,
      'method': 'POST',
      'body': window.JSON.stringify(parameters)
    }).execute(cb);
  } else if (window.googleapis) {
    window.googleapis.newRequest(method, parameters).execute(cb);
  } else {
    // Not supposed to be here. You have to include either the JS client library
    // or the old fashion googleapis library.
    throw 'Found no google api client library.';
  }
};

/**
 * Sends an AJAX request to get the authentication URL for the identifier.
 * @param {email|domain} identifier The identifier for which to create the URL.
 * @param {?string=} opt_continueUrl The callback URL to which IDP return
 *     response. If missing, use
 *     {@code window.google.identitytoolkit.easyrp.config.continueUrl}.
 * @param {function(response)} callback The function to be called when response
 *     returned.
 * @param {?string=} opt_purpose The purpose for the federated login:
 *     'signin' or 'upgrade'. Default is 'signin'.
 * @param {?email=} opt_input_email The email user input. Leave empty if you
 *     don't want server check the mismatch case.
 * @param {?string=} opt_popupMode Whether the widget is using popup mode.
 * @param {?string=} opt_openidRealm The OpenID realm used to create the IDP
 *     authentication URL. The default is to use the one in the config.
 */
window.google.identitytoolkit.easyrp.gitclient.createAuthUrl = function(
    identifier, opt_continueUrl, callback, opt_purpose, opt_input_email,
    opt_popupMode, opt_openidRealm) {
  var parameters = {};
  var continueUrl = opt_continueUrl;
  if (!continueUrl) {
    continueUrl = window.google.identitytoolkit.easyrp.config.continueUrl;
  }
  if (window.google.identitytoolkit.easyrp.config.useContextParam) {
    var context = {};
    context['rp_target'] = 'callback';
    if (opt_purpose) {
      context['rp_purpose'] = opt_purpose;
    }
    if (opt_input_email) {
      context['rp_input_email'] = opt_input_email;
    }
    parameters['context'] = window.JSON.stringify(context);
  } else {
    continueUrl += (continueUrl.indexOf('?') >= 0 ? '&' : '?');
    continueUrl = continueUrl + 'rp_target=callback';
    if (opt_purpose) {
      continueUrl = continueUrl + '&rp_purpose=' + opt_purpose;
    }
    if (opt_input_email) {
      continueUrl = continueUrl + '&rp_input_email=' + opt_input_email;
    }
  }
  parameters['continueUrl'] = continueUrl;
  parameters['identifier'] = identifier;
  var realm = opt_openidRealm ||
      window.google.identitytoolkit.easyrp.config.realm;
  if (realm) {
    parameters['openidRealm'] = realm;
  }
  if (opt_popupMode) {
    parameters['uiMode'] = 'popup';
  }
  window.google.identitytoolkit.easyrp.gitclient.makeRequest_(
      'identitytoolkit.relyingparty.createAuthUrl', parameters, callback);
};

/**
 * Sends an AJAX request to get verify an assertion.
 * @param {string} requestUri The URL of the request (from IDP).
 * @param {string} postBody The post body of the request (from IDP).
 * @param {function(response)} callback The function to be called when response
 *     returned.
 */
window.google.identitytoolkit.easyrp.gitclient.verifyAssertion = function(
    requestUri, postBody, callback) {
  var parameters = {
    requestUri: requestUri,
    postBody: postBody
  };
  window.google.identitytoolkit.easyrp.gitclient.makeRequest_(
      'identitytoolkit.relyingparty.verifyAssertion', parameters, callback);
};

/**
 * Parses the raw AJAX response, and return a translated response object.
 * Below is a sample of the returned object.
 * <pre>
 * {
 *   authUri: '', // Returns when no error occurs.
 *   error: ''    // Returns when error occurs.
 * }
 * </pre>
 * @param {Object} response The raw AJAX response.
 * @return {Object} The parsed result.
 */
window.google.identitytoolkit.easyrp.gitclient.parseCreateAuthUrlResponse =
    function(response) {
  var resp = {};
  if (response && 'error' in response) {
    resp['error'] = response['error'];
  }
  if (response && ('authUri' in response)) {
    resp['authUri'] = response['authUri'];
  }
  return resp;
};

/**
 * Parses the raw AJAX response, and return a translated response object.
 * Below is a sample of the returned object.
 * <pre>
 * {
 *   error: '',    // Returns when error occurs.
 *   email: '',    // Returns when no error occurs.
 *   firstName: '',// Returns when no error occurs.
 *   lastName: '', // Returns when no error occurs.
 *   fullName: '', // Returns when no error occurs.
 *   nickName: '', // Returns when no error occurs.
 * }
 * </pre>
 * @param {Object} response The raw AJAX response.
 * @return {Object} The parsed result.
 */
window.google.identitytoolkit.easyrp.gitclient.parseVerifyAssertionResponse =
    function(response) {
  var resp = {};
  if (response && 'error' in response) {
    resp['error'] = response['error'];
  }
  // TODO: Get user profile
  resp['email'] = response['verifiedEmail'];
  resp['firstName'] = response['firstName'];
  resp['lastName'] = response['lastName'];
  resp['fullName'] = response['fullName'];
  resp['nickName'] = response['nickName'];
  return resp;
};

/**
 * Name space for EasyRP API utility functions.
 */
window.google.identitytoolkit.easyrp.ajax =
    window.google.identitytoolkit.easyrp.ajax || {};

/**
 * Sends an AJAX request to do the authentication of a legacy account.
 * @param {string} email The email address user input.
 * @param {string} password The password user input.
 * @param {function(Object)} callback The function to be called when response
 *     returned.
 */
window.google.identitytoolkit.easyrp.ajax.legacySignIn = function(email,
    password, callback) {
  var result = jQuery.ajax({
    type: 'POST',
    async: false,
    cache: false,
    url: window.google.identitytoolkit.easyrp.config.loginUrl,
    data: {
      email: email,
      password: password,
      rp_target: 'login'
    }
  }).responseText;
  var response = jQuery.parseJSON(result) || {};
  response.email = email;
  callback(response);
};

/**
 * Sends an AJAX request to get the meta information of an account.
 * @param {string} email The email address user input.
 * @param {boolean} addAccount Set to true if the widget call the RPC when
 *     adding an entry to account-chooser, otherwise false.
 * @param {function(Object)} callback The function to be called when response
 *     returned.
 */
window.google.identitytoolkit.easyrp.ajax.getUserStatus = function(email,
    addAccount, callback) {
  var result = jQuery.ajax({
    type: 'POST',
    async: false,
    cache: false,
    url: window.google.identitytoolkit.easyrp.config.userStatusUrl,
    data: {
      email: email,
      referrer: addAccount ? 'addAccount' : 'chooseAccount',
      rp_target: 'userStatus'
    }
  }).responseText;
  var response = jQuery.parseJSON(result) || {};
  response.email = email;
  callback(response);
};

/**
 * Sends an AJAX request to get the authentication URL for the identifier.
 * @param {string} email The email address user input.
 * @param {string} password The password user input.
 * @param {function(Object)} callback The function to be called when response
 *     returned.
 */
window.google.identitytoolkit.easyrp.ajax.login = function(email, password,
    callback) {
  var result = jQuery.ajax({
    type: 'POST',
    async: false,
    cache: false,
    url: window.google.identitytoolkit.easyrp.config.loginUrl,
    data: {
      email: email,
      password: password
    }
  }).responseText;
  callback(result);
};

/**
 * Sends an AJAX request to get the authentication URL for the identifier.
 * @param {string} email The email address user input.
 * @param {function(Object)} callback The function to be called when response
 *     returned.
 */
window.google.identitytoolkit.easyrp.ajax.federatedLogin = function(email,
    callback) {
  var result = jQuery.ajax({
    type: 'POST',
    async: false,
    cache: false,
    url: window.google.identitytoolkit.easyrp.config.federatedLoginUrl,
    data: {
      email: email
    }
  }).responseText;
  callback(result);
};

/**
 * Sends an AJAX request to continue the process of sigin/signup by the
 * verified email from IDP.
 * @param {string} email The verified email address from IDP.
 * @param {function(Object)} callback The function to be called when response
 *     returned.
 */
window.google.identitytoolkit.easyrp.ajax.useVerifiedEmail = function(email,
    callback) {
  var result = jQuery.ajax({
    type: 'POST',
    async: false,
    cache: false,
    url: window.google.identitytoolkit.easyrp.config.loginUrl,
    data: {
      action: 'useVerifiedEmail',
      email: email
    }
  }).responseText;
  callback(result);
};

/**
 * Sends an AJAX request to clear the verified email from IDP.
 * @param {function(Object)} callback The function to be called when response
 *     returned.
 */
window.google.identitytoolkit.easyrp.ajax.resetIdpAssertion = function(
    callback) {
  var result = jQuery.ajax({
    type: 'POST',
    async: false,
    cache: false,
    url: window.google.identitytoolkit.easyrp.config.loginUrl,
    data: {
      action: 'resetIdpAssertion'
    }
  }).responseText;
  callback(result);
};

/**
 * Parses the raw AJAX response, and return a translated response object.
 * @param {Object} response The raw AJAX response.
 * @return {Object} The parsed result.
 */
window.google.identitytoolkit.easyrp.ajax.parseLoginResponse = function(
    response) {
  if (response && typeof(response) == 'string') {
    response = jQuery.parseJSON(response);
  }
  return response;
};

/**
 * Parses the raw AJAX response, and return a translated response object.
 * @param {Object} response The raw AJAX response.
 * @return {Object} The parsed result.
 */
window.google.identitytoolkit.easyrp.ajax.parseFederatedLoginResponse =
    function(response) {
  if (response && typeof(response) == 'string') {
    response = jQuery.parseJSON(response);
  }
  return response;
};

/**
 * Parses the raw AJAX response, and return a translated response object.
 * @param {Object} response The raw AJAX response.
 * @return {Object} The parsed result.
 */
window.google.identitytoolkit.easyrp.ajax.parseUseVerifiedEmailResponse =
    function(response) {
  if (response && typeof(response) == 'string') {
    response = jQuery.parseJSON(response);
  }
  return response;
};

/**
 * Parses the raw AJAX response, and return a translated response object.
 * @param {Object} response The raw AJAX response.
 * @return {Object} The parsed result.
 */
window.google.identitytoolkit.easyrp.ajax.parseResetIdpAssertionlResponse =
    function(response) {
  if (response && typeof(response) == 'string') {
    response = jQuery.parseJSON(response);
  }
  return response;
};

/**
 * The ApiHandler for the Account Chooser widget.
 * @constructor
 * @implements window.google.identitytoolkit.easyrp.net.ApiHandler
 */
window.google.identitytoolkit.easyrp.net.ChooserApiHandler = function() {
};

/** @inheritDoc */
window.google.identitytoolkit.easyrp.net.ChooserApiHandler.prototype.
    newRequest = function(type, parameters) {
  if (type ==
      window.google.identitytoolkit.easyrp.net.RequestType.GET_USER_STATUS) {
    window.google.identitytoolkit.easyrp.param.notEmpty(parameters['email'],
        'email');
    window.google.identitytoolkit.easyrp.param.notNull(parameters['addAccount'],
        'addAccount');
  } else if (type ==
      window.google.identitytoolkit.easyrp.net.RequestType.LEGACY_SIGNIN) {
    window.google.identitytoolkit.easyrp.param.notEmpty(parameters['email'],
        'email');
  } else if (type ==
      window.google.identitytoolkit.easyrp.net.RequestType.CREATE_AUTH_URL) {
    window.google.identitytoolkit.easyrp.param.notNull(parameters['identifier'],
        'identifier');
  } else {
    throw 'Unsupported request type.';
  }
};

/** @inheritDoc */
window.google.identitytoolkit.easyrp.net.ChooserApiHandler.prototype.send =
    function(request, callback) {
  var type = request.getRequestType();
  if (type ==
      window.google.identitytoolkit.easyrp.net.RequestType.LEGACY_SIGNIN) {
    window.google.identitytoolkit.easyrp.ajax.legacySignIn(
        request.getParameter('email'), request.getParameter('password'),
        callback);
  } else if (type ==
      window.google.identitytoolkit.easyrp.net.RequestType.GET_USER_STATUS) {
    window.google.identitytoolkit.easyrp.ajax.getUserStatus(
        request.getParameter('email'), request.getParameter('addAccount'),
        callback);
  } else if (type ==
      window.google.identitytoolkit.easyrp.net.RequestType.CREATE_AUTH_URL) {
    window.google.identitytoolkit.easyrp.gitclient.createAuthUrl(
        request.getParameter('identifier'), null, callback,
        request.getParameter('purpose'), request.getParameter('input_email'),
        request.getParameter('popup_mode'));
  } else {
    throw 'Unsupported request type.';
  }
};

/** @inheritDoc */
window.google.identitytoolkit.easyrp.net.ChooserApiHandler.prototype.
    parseResponse = function(requestType, response) {
  if (requestType ==
      window.google.identitytoolkit.easyrp.net.RequestType.GET_USER_STATUS) {
    return response;
  } else if (requestType ==
      window.google.identitytoolkit.easyrp.net.RequestType.LEGACY_SIGNIN) {
    return response;
  } else if (requestType ==
      window.google.identitytoolkit.easyrp.net.RequestType.CREATE_AUTH_URL) {
    return window.google.identitytoolkit.easyrp.gitclient.
        parseCreateAuthUrlResponse(response);
  } else {
    throw 'Unsupported request type.';
  }
};
//Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @class Enum for RequestType values. Each represents a different AJAX request.
 * @enum {string}
 */
window.google.identitytoolkit.easyrp.net.RequestType =
    /** @lends window.google.identitytoolkit.easyrp.net.RequestType */ {
  /** UserStatus Request */
  GET_USER_STATUS: 'getUserStatus',

  /** legacySignIn */
  LEGACY_SIGNIN: 'legacySignIn',

  /** Login request */
  LOGIN: 'login',

  /** Federated login request */
  FEDERATED_LOGIN: 'federated',

  /** Use the verifed email after mismatch */
  USE_VERIFIED_EMAIL: 'useVerifiedEmail',

  /** Clear the IDP assertion */
  RESET_IDP_ASSERTION: 'resetIdpResponse',

  /** A request to get the authentication URL */
  CREATE_AUTH_URL: 'createAuthUrl',

  /** A request to verify the assertion from IDP */
  VERIFY_ASSERTION: 'verifyAssertion'
};

/**
 * @class Enum for RequestState values.
 * @enum {number}
 */
window.google.identitytoolkit.easyrp.net.RequestState =
    /** @lends window.google.identitytoolkit.easyrp.net.RequestState */ {
  /** The request has not been executed yet. */
  UNEXECUTED: 0,

  /** The request is sent, but the response is not returned. */
  EXECUTING: 1,

  /** The request has executed, and the response has returned. */
  EXECUTED: 2
};

/**
 * @class Defines the Request class. A widget won't send and parse AJAX
 * request/response directly, instead it uses a RequestFactory to create a
 * Request, then call the execute(callback) method of the Request to send the
 * request, after the AJAX response is returned and parsed, the callback will be
 * invoked.
 * <br>See below example.
 * <pre>
 * var request = widget.getRequestFactory().newCreateAuthUrlRequest(email);
 * request.execute(function(response) {
 *   if ('authUri' in response) {
 *     popup.location.href = response.authUri;
 *   }
 * });
 * </pre>
 * The constructor should be called only by request factory to create a new
 * Request.
 * @param {window.google.identitytoolkit.easyrp.net.RequestType}
 *     requestType The request type.
 * @param {object} parameters The parameters of the request.
 * @constructor
 */
window.google.identitytoolkit.easyrp.net.Request = function(requestType,
    parameters) {
  this.requestType_ = requestType;
  this.parameters_ = parameters;
  this.state_ =
      window.google.identitytoolkit.easyrp.net.RequestState.UNEXECUTED;
};

/**
 * Returns the type of the request.
 * @return {window.google.identitytoolkit.easyrp.net.RequestType}
 *    The request type.
 */
window.google.identitytoolkit.easyrp.net.Request.prototype.getRequestType =
    function() {
  return this.requestType_;
};

/**
 * Returns the parameters of the request.
 * @return {object} The parameters of the request.
 */
window.google.identitytoolkit.easyrp.net.Request.prototype.getParameters =
    function() {
  return this.parameters_;
};

/**
 * Returns the value for the request parameter specified by 'name'.
 * @param {string} name The parameter name.
 * @return {string|number|boolean} The parameter value.
 */
window.google.identitytoolkit.easyrp.net.Request.prototype.getParameter =
    function(name) {
  return this.parameters_[name];
};

/**
 * Sets the value for the request parameter specified by 'name'.
 * @param {string} name The parameter name.
 * @param {string|number|boolean} value The parameter value.
 */
window.google.identitytoolkit.easyrp.net.Request.prototype.setParameter =
    function(name, value) {
  this.parameters_[name] = value;
};

/**
 * Returns the state of the request.
 * @return {window.google.identitytoolkit.easyrp.net.RequestState}
 *     The state of the request.
 */
window.google.identitytoolkit.easyrp.net.Request.prototype.getState =
    function() {
  return this.state_;
};

/**
 * Executes the request, the callback function will be called when the AJAX
 * response is returned.
 * @param {Function} callback The function to be called when request is done.
 */
window.google.identitytoolkit.easyrp.net.Request.prototype.execute =
    function(callback) {
  if (!this.apiHandler_) {
    throw 'The apiHandler of the request cannot be null.';
  }
  this.callback_ = callback;
  this.state_ = window.google.identitytoolkit.easyrp.net.RequestState.EXECUTING;
  this.apiHandler_.send(this, jQuery.proxy(this.done_, this));
};

/**
 * Intercepts the returned AJAX response, and call the callback function.
 * @param {object} response The returned AJAX response.
 * @private
 */
window.google.identitytoolkit.easyrp.net.Request.prototype.done_ =
    function(response) {
  this.response_ = this.apiHandler_.parseResponse(this.requestType_, response);
  this.state_ = window.google.identitytoolkit.easyrp.net.RequestState.EXECUTED;
  if (this.callback_) {
    this.callback_(this.response_);
  }
};

/**
 * Returns the parsed response of the request.
 * @return {object} The parsed response.
 */
window.google.identitytoolkit.easyrp.net.Request.prototype.getResponse =
    function() {
  if (this.state_ ==
    window.google.identitytoolkit.easyrp.net.RequestState.EXECUTED) {
    return this.response_;
  }
};

/**
 * Sets the ApiHandler of the request. Should be called by request factory only.
 * @param {window.google.identitytoolkit.easyrp.net.ApiHandler} apiHandler
 *     The ApiHandler that really handle the request.
 */
window.google.identitytoolkit.easyrp.net.Request.prototype.setApiHandler =
    function(apiHandler) {
  this.apiHandler_ = apiHandler;
};

/**
 * Returns the ApiHandler that really handle the request.
 * @return {window.google.identitytoolkit.easyrp.net.ApiHandler}
 *     The ApiHandler that really handle the request.
 */
window.google.identitytoolkit.easyrp.net.Request.prototype.getApiHandler =
    function() {
  return this.apiHandler_;
};

/**
 * @class Constructs a new RequestFactory. This class helps client to
 * create an AJAX request and execute it. The RequestFactory uses a wrapped
 * {@code ApiHandler} to create a {@code Request}. {@code ApiHandler} is hidden
 * to client so that it can be configurable and interchangeable.
 * <br>See below example.
 * <pre>
 * var request = widget.getRequestFactory().newCreateAuthUrlRequest(email);
 * request.execute(function(response) {
 *   ......
 * });
 * </pre>
 * See ApiHandler for more information.
 * @param {window.google.identitytoolkit.easyrp.net.ApiHandler} apiHandler
 *     The wrapped ApiHandler.
 * @constructor
 */
window.google.identitytoolkit.easyrp.net.RequestFactory = function(apiHandler) {
  this.apiHandler_ = apiHandler;
};

/**
 * Creates a new Request.
 * @param {window.google.identitytoolkit.easyrp.net.RequestType} type
 *     The request type.
 * @param {Object} parameters The parameters of the request.
 * @return {window.google.identitytoolkit.easyrp.net.Request}
 *     The created request object.
 */
window.google.identitytoolkit.easyrp.net.RequestFactory.prototype.newRequest =
    function(type, parameters) {
  var request;
  // Allows handler to override the method to do special check.
  if (this.apiHandler_ && this.apiHandler_.newRequest) {
    request = this.apiHandler_.newRequest(type, parameters);
  }
  if (!request) {
    request = new window.google.identitytoolkit.easyrp.net.Request(type,
        parameters);
  }
  request.setApiHandler(this.apiHandler_);
  return request;
};

/**
 * Merges tow parameters objects.<br>
 * When key is same, value in 'requiredParams' has high priority. Note when the
 * value of a key is {@code null} in 'requiredParams', the value in 'opt_params'
 * will be used. But if its value is {@code undefined}
 * @param {Object} requiredParams The parameters need to be merge.
 * @param {Object} opt_params The parameters need to be merge.
 * @return {Object} The merged parameters object.
 * @private
 */
window.google.identitytoolkit.easyrp.net.RequestFactory.prototype.
    mergeParameters_ = function(requiredParams, opt_params) {
  var params = {};
  if (opt_params) {
    jQuery.extend(params, opt_params);
  }
  jQuery.extend(params, requiredParams);
  return params;
};

/**
 * Creates a Login Request with the provided parameters.
 * @param {string} email The input email.
 * @param {string} password The input password.
 * @param {Object} opt_params Other parameters if any.
 * @return {window.google.identitytoolkit.easyrp.net.Request}
 *     The created request object.
 */
window.google.identitytoolkit.easyrp.net.RequestFactory.prototype.
    newLegacySignInRequest = function(email, password, opt_params) {
  var type = window.google.identitytoolkit.easyrp.net.RequestType.LEGACY_SIGNIN;
  var parameters = this.mergeParameters_({
    email: email,
    password: password
  }, opt_params);
  return this.newRequest(type, parameters);
};

/**
 * Creates a Login Request with the provided parameters.
 * @param {string} email The input email.
 * @param {boolean} addAccount Whether this is triggered on add_account page.
 * @param {Object} opt_params Other parameters if any.
 * @return {window.google.identitytoolkit.easyrp.net.Request}
 *     The created request object.
 */
window.google.identitytoolkit.easyrp.net.RequestFactory.prototype.
    newGetUserStatusRequest = function(email, addAccount, opt_params) {
  var type =
      window.google.identitytoolkit.easyrp.net.RequestType.GET_USER_STATUS;
  var parameters = this.mergeParameters_({
    email: email,
    addAccount: !!addAccount
  }, opt_params);
  return this.newRequest(type, parameters);
};

/**
 * Creates a Login Request with the provided parameters.
 * @param {string} email The input email.
 * @param {string} password The input password.
 * @param {Object} opt_params Other parameters if any.
 * @return {window.google.identitytoolkit.easyrp.net.Request}
 *     The created request object.
 */
window.google.identitytoolkit.easyrp.net.RequestFactory.prototype.
    newLoginRequest = function(email, password, opt_params) {
  var type = window.google.identitytoolkit.easyrp.net.RequestType.LOGIN;
  var parameters = this.mergeParameters_({
    email: email,
    password: password
  }, opt_params);
  return this.newRequest(type, parameters);
};

/**
 * Creates a Federated Login Request with the provided parameters.
 * @param {string} email The input email.
 * @param {Object} opt_params Other parameters if any.
 * @return {window.google.identitytoolkit.easyrp.net.Request}
 *     The created request object.
 */
window.google.identitytoolkit.easyrp.net.RequestFactory.prototype.
    newFederatedLoginRequest = function(email, opt_params) {
  var type =
      window.google.identitytoolkit.easyrp.net.RequestType.FEDERATED_LOGIN;
  var parameters = this.mergeParameters_({
    email: email
  }, opt_params);
  return this.newRequest(type, parameters);
};

/**
 * Creates a Use Verified Email Request with the provided parameters.
 * @param {string} verifiedEmail The verified email.
 * @param {Object} opt_params Other parameters if any.
 * @return {window.google.identitytoolkit.easyrp.net.Request}
 *     The created request object.
 */
window.google.identitytoolkit.easyrp.net.RequestFactory.prototype.
    newUseVerifiedEmailRequest = function(verifiedEmail, opt_params) {
  var type =
      window.google.identitytoolkit.easyrp.net.RequestType.USE_VERIFIED_EMAIL;
  var parameters = this.mergeParameters_({
    email: verifiedEmail
  }, opt_params);
  return this.newRequest(type, parameters);
};

/**
 * Creates a Use Verified Email Request with the provided parameters.
 * @param {Object} opt_params Other parameters if any.
 * @return {window.google.identitytoolkit.easyrp.net.Request}
 *     The created request object.
 */
window.google.identitytoolkit.easyrp.net.RequestFactory.prototype.
    newResetIdpAssertionRequest = function(opt_params) {
  var type =
      window.google.identitytoolkit.easyrp.net.RequestType.RESET_IDP_ASSERTION;
  var parameters = this.mergeParameters_({}, opt_params);
  return this.newRequest(type, parameters);
};

/**
 * Creates a GetAuthUrl Request with the provided parameters.
 * @param {string} identifier The input identifier.
 * @param {Object} opt_params Other parameters if any.
 * @return {window.google.identitytoolkit.easyrp.net.Request}
 *     The created request object.
 */
window.google.identitytoolkit.easyrp.net.RequestFactory.prototype.
    newCreateAuthUrlRequest = function(identifier, opt_params) {
  var type =
      window.google.identitytoolkit.easyrp.net.RequestType.CREATE_AUTH_URL;
  var parameters = this.mergeParameters_({
    identifier: identifier
  }, opt_params);
  return this.newRequest(type, parameters);
};

/**
 * Creates a VerifyAssertion Request with the provided parameters.
 * @param {string} requestUri The request URI when returned from IDP.
 * @param {string} postData The data posted by the IDP when returned.
 * @param {Object} opt_params Other parameters.
 * @return {window.google.identitytoolkit.easyrp.net.Request}
 *     The created request object.
 */
window.google.identitytoolkit.easyrp.net.RequestFactory.prototype.
    newVerifyAssertionRequest = function(requestUri, postData, opt_params) {
  var type =
      window.google.identitytoolkit.easyrp.net.RequestType.VERIFY_ASSERTION;
  var parameters = this.mergeParameters_({
    requestUri: requestUri,
    postData: postData
  }, opt_params);
  return this.newRequest(type, parameters);
};

/**
 * @class Defines the Page class, which is super class for all pages.
 * @constructor
 */
window.google.identitytoolkit.easyrp.Page =
    window.google.identitytoolkit.easyrp.Page || function() {};

/**
 * Renders the page on the page container.
 * @param {element} container The HTML element that contains the page.
 * @param {object} resource The resource object.
 * @param {boolean} opt_showCloseIcon whether to show the close icon.
 */
window.google.identitytoolkit.easyrp.Page.prototype.render = function(container,
    resource, opt_showCloseIcon) {
  window.google.identitytoolkit.easyrp.param.notNull(container, 'container');
  window.google.identitytoolkit.easyrp.param.notNull(resource, 'resource');
  this.container_ = container;
  this.resource_ = resource;
  this.showCloseIcon_ = !!opt_showCloseIcon;
};

/**
 * Returns the parent DOM element.
 * @return {element} The parent DOM element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.getContainer = function() {
  return this.container_;
};

/**
 * Returns the resource bundle used in the Page.
 * @return {object} The resource bundle used in the Page.
 */
window.google.identitytoolkit.easyrp.Page.prototype.getResource = function() {
  return this.resource_;
};

/**
 * Whether to show the close icon.
 * @return {boolean} Whether to show the close icon.
 */
window.google.identitytoolkit.easyrp.Page.prototype.isShowCloseIcon =
    function() {
  return this.showCloseIcon_;
};

/**
 * Creates a table.
 * @param {string} opt_styleClass The optional style class name for the created
 *        table. Can set multiple classes separated by space.
 * @return {Element} the created table element wrapped by jQuery.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createTable = function(
    opt_styleClass) {
  var table = jQuery('<table>').attr('cellspacing', 0).attr('cellpadding', 0)
      .attr('border', 0);
  if (opt_styleClass) {
    table.addClass(opt_styleClass);
  }
  return table;
};

/**
 * Creates a normal button by HTML input element.
 * @param {string} caption The caption of the button.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string} opt_styleClass An optional class name for the button.
 * @return {Element} The created button element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createButton = function(
    caption, handler, opt_styleClass) {
  window.google.identitytoolkit.easyrp.param.notEmpty(caption, 'caption');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  var btn = jQuery('<input type=button>').val(caption).addClass(
      'widget-input-button');
  if (opt_styleClass) {
    btn.addClass(opt_styleClass);
  }
  var self = this;
  btn.click(function() {
    self[handler].call(self);
  });
  return btn;
};

/**
 * Creates a link button by HTML a element.
 * @param {string} caption The caption of the button.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string} opt_styleClass An optional class name for the button.
 * @return {Element} The created button element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createLinkButton = function(
    caption, handler, opt_styleClass) {
  window.google.identitytoolkit.easyrp.param.notEmpty(caption, 'caption');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  var btn = jQuery('<a>').addClass('widget-link').html(caption);
  if (opt_styleClass) {
    btn.addClass(opt_styleClass);
  }
  var self = this;
  btn.click(function() {
    self[handler].call(self);
    return false;
  });
  return btn;
};

/**
 * Creates a 3D button by background images.
 * @param {string} caption The caption of the button.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string} opt_styleClass An optional class name for the button.
 * @return {Element} The created button element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createRenderedButton =
    function(caption, handler, opt_styleClass) {
  window.google.identitytoolkit.easyrp.param.notEmpty(caption, 'caption');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  var link = jQuery('<a>').html(caption).addClass('widget-button-link');
  var table = this.createTable('widget-button');
  if (opt_styleClass) {
    table.addClass(opt_styleClass);
  }
  var btnLine = jQuery('<tr>').appendTo(table);
  jQuery('<td>').addClass('widget-button-left').appendTo(btnLine);
  jQuery('<td>').addClass('widget-button-middle').append(link)
      .appendTo(btnLine);
  jQuery('<td>').addClass('widget-button-right').appendTo(btnLine);
  var self = this;
  jQuery(table).click(function() {
    self[handler].call(self);
    return false;
  });
  return table;
};

/**
 * Creates a text/password input box.
 * @param {string} inputClass The class for the created input element.
 * @param {boolean} isPassword Whether the input is a password instead of a
 *        text.
 * @param {string} opt_handler The handler function when keypress on the input.
 * @return {Element} The created input box element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createTextBox = function(
    inputClass, isPassword, opt_handler) {
  window.google.identitytoolkit.easyrp.param.notEmpty(inputClass, 'inputClass');
  var type = (isPassword ? 'password' : 'text');
  var textBox = jQuery('<input type=' + type + '>');
  textBox.addClass(inputClass);
  if (opt_handler) {
    var self = this;
    textBox.keypress(function(origianlEvent) {
      self[opt_handler].call(self, origianlEvent);
    });
  }
  return textBox;
};

/**
 * Creates a checkbox element. Note returned is a DIV element holding the check
 * box, not the check box itself.
 * @param {string} labelHtml The label text of the created checkbox.
 * @param {boolean} checked Whether the checkbox is checked.
 * @param {string} opt_styleClass An optional class name for the checkbox.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createCheckbox = function(
    labelHtml, checked, opt_styleClass) {
  window.google.identitytoolkit.easyrp.param.notNull(labelHtml, 'labelHtml');
  var checkBox = jQuery('<input type=checkbox>').attr('checked', !!checked);
  var label = jQuery('<label>').addClass('widget-checkbox-text').append(
      checkBox).append(labelHtml);
  var div = jQuery('<div>').addClass('widget-checkbox').append(label);
  if (opt_styleClass) {
    div.addClass(opt_styleClass);
  }
  return div;
};

/**
 * Creates a hyper-link that can be used for choice.
 * @param {string} caption The caption of the choice link.
 * @param {string} handler The handler function when the link is clicked.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createChoiceLink = function(
    caption, handler) {
  window.google.identitytoolkit.easyrp.param.notEmpty(caption, 'caption');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  var div = jQuery('<div>').addClass('widget-choice-link');
  this.createLinkButton(caption, handler).appendTo(div);
  return div;
};

/**
 * Creates a reusable HTML fragment that has a text and a clickable link.
 * @param {string} infoHtml The HTML code for the information part.
 * @param {string} linkHtml The HTML code for the link part.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string} styleClass The class name for the created DIV element.
 * @return {Element} The created DIV element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createInfoLinkSection =
    function(infoHtml, linkHtml, handler, styleClass) {
  window.google.identitytoolkit.easyrp.param.notEmpty(infoHtml, 'infoHtml');
  window.google.identitytoolkit.easyrp.param.notEmpty(linkHtml, 'linkHtml');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  window.google.identitytoolkit.easyrp.param.notEmpty(styleClass, 'styleClass');
  var link = jQuery('<a>').html(linkHtml);
  var div = jQuery('<div>').addClass(styleClass).append(infoHtml).append(link);
  var self = this;
  link.click(function() {
    self[handler].call(self);
    return false;
  });
  return div;
};

/**
 * Creates a reusable HTML fragment that has a text and a hyper link.
 * @param {string} infoHtml The HTML code for the information part.
 * @param {string} linkHtml The HTML code for the link part.
 * @param {string} linkUrl The URL of the link part.
 * @param {string} styleClass The class name for the created DIV element.
 * @param {string=} opt_target Target attribute for the link element, for
 *     example, _blank, _self, _top, _parent. If not set, _blank will be used.
 * @return {Element} The created DIV element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createInfoLink =
    function(infoHtml, linkHtml, linkUrl, styleClass, opt_target) {
  window.google.identitytoolkit.easyrp.param.notEmpty(linkHtml, 'linkHtml');
  window.google.identitytoolkit.easyrp.param.notEmpty(linkUrl, 'linkUrl');
  window.google.identitytoolkit.easyrp.param.notEmpty(styleClass, 'styleClass');
  var link = jQuery('<a>').html(linkHtml).attr('href', linkUrl).attr('target',
      opt_target || '_blank');
  var div = jQuery('<div>').addClass(styleClass);
  if (infoHtml) {
    div.append(infoHtml);
  }
  div.append(link);
  return div;
};

/**
 * Creates a Nascar IDP link.
 * @param {{labe: '', image: '', domain: ''}} idp The IDP configuration data.
 * @param {string} idpId The IDP id to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 * @private
 */
window.google.identitytoolkit.easyrp.Page.prototype.createNascarLink_ =
    function(idp, idpId, handler) {
  window.google.identitytoolkit.easyrp.param.notEmpty(idp, 'idp');
  window.google.identitytoolkit.easyrp.param.notEmpty(idpId, 'idpId');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  var idpDiv = jQuery('<div>').addClass('widget-idp');
  var idpLink = jQuery('<a>').attr('href', 'javascript: void(0)').appendTo(
      idpDiv);
  var table = this.createTable('widget-idp-link').appendTo(idpLink);
  var idpTableLine = jQuery('<tr>').appendTo(table);
  idpTableLine.append(jQuery('<td>').append(
      jQuery('<img>').attr('src', idp.image).addClass('widget-idp-icon')));
  idpTableLine.append(jQuery('<td>').append(idp.label));
  var self = this;
  idpLink.click(function() {
    self[handler].call(self, idpId);
    return false;
  });
  return idpDiv;
};

/**
 * Creates a Nascar list.
 * @param {idpId: {}, ...} idps The configuration parameters for IDPs.
 * @param {Array} nascarIdpList The list of IDP ids to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createNascarList = function(
    idps, nascarIdpList, handler) {
  window.google.identitytoolkit.easyrp.param.notEmpty(idps, 'idps');
  window.google.identitytoolkit.easyrp.param.notEmptyArray(nascarIdpList,
      'nascarIdpList');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  var nascar = jQuery('<div>').addClass('widget-nascar-list');
  for (var i = 0; i < nascarIdpList.length; i++) {
    var idpId = nascarIdpList[i];
    this.createNascarLink_(idps[idpId], idpId, handler).appendTo(nascar);
  }
  return nascar;
};

/**
 * Creates a HTML fragment with a title and a Nascar list.
 * @param {string} label The label text for the title.
 * @param {Object} idps The idps config data.
 * @param {Array} nascarIdpList The list of IDP ids to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createNascarSection =
    function(label, idps, nascarIdpList, handler) {
  window.google.identitytoolkit.easyrp.param.notNull(label, 'label');
  window.google.identitytoolkit.easyrp.param.notEmpty(idps, 'idps');
  window.google.identitytoolkit.easyrp.param.notEmptyArray(nascarIdpList,
      'nascarIdpList');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  var nascarSection = jQuery('<p>').append(label);
  this.createNascarList(idps, nascarIdpList, handler).appendTo(nascarSection);
  return nascarSection;
};

/**
 * Creates a widget header. Note: if opt_showCloseIcon is true, must provide
 * opt_handler.
 * @param {string} title The label of the header.
 * @param {boolean} opt_showCloseIcon Whether to show the close icon.
 * @param {string} opt_closeIcon The URL for the close icon.
 * @param {string} opt_handler The handler function when a IDP link is clicked.
 * @param {string} opt_closeTitle The title for the close icon.
 * @return {Element} The created header DIV element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createHeader = function(
    title, opt_showCloseIcon, opt_closeIcon, opt_handler, opt_closeTitle) {
  window.google.identitytoolkit.easyrp.param.notNull(title, 'title');
  var headerBar = jQuery('<div>').addClass('widget-header-bar');
  this.header = jQuery('<div>').html(title).addClass('widget-header').appendTo(
      headerBar);
  if (opt_showCloseIcon) {
    window.google.identitytoolkit.easyrp.param.notEmpty(opt_closeIcon,
        'opt_closeIcon');
    window.google.identitytoolkit.easyrp.param.notEmpty(opt_handler,
        'opt_handler');
    var closeIcon = jQuery('<img>').attr('src', opt_closeIcon).addClass(
        'widget-close-icon').appendTo(headerBar);
    if (opt_closeTitle) {
      closeIcon.attr('title', opt_closeTitle);
    }
    var self = this;
    closeIcon.click(function() {
      self[opt_handler].call(self);
    });
  }
  headerBar.append(jQuery('<div>').css('clear', 'both'));
  return headerBar;
};

/**
 * Creates a fragment with a label and a text/password input box.
 * @param {Element} parent The parent element for the label and input box.
 * @param {string} label The text for the label part.
 * @param {string} inputClass The class for the created input element.
 * @param {boolean} isPassword Whether the input is a password instead of a
 *        text.
 * @param {string} opt_handler The handler function when keypress on the input.
 */
window.google.identitytoolkit.easyrp.Page.prototype.appendLabelledTextBox =
    function(parent, label, inputClass, isPassword, opt_handler) {
  window.google.identitytoolkit.easyrp.param.notNull(parent, 'parent');
  window.google.identitytoolkit.easyrp.param.notNull(label, 'label');
  window.google.identitytoolkit.easyrp.param.notEmpty(inputClass, 'inputClass');
  if (label) {
    parent.append(label).append('<br>');
  }
  parent.append(this.createTextBox(inputClass, isPassword, opt_handler));
};

/**
 * Appends a error message DIV to the parent.
 * @param {Element} parent The parent element for the created element.
 * @return {Element} The created DIV element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.appendErrorDiv = function(
    parent) {
  window.google.identitytoolkit.easyrp.param.notNull(parent, 'parent');
  var errorDiv = jQuery('<div>').addClass('widget-error').appendTo(parent);
  return errorDiv;
};

/**
 * Appends a information message DIV to the parent.
 * @param {Element} parent The parent element for the created element.
 * @return {Element} The created DIV element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.appendMessageDiv = function(
    parent) {
  window.google.identitytoolkit.easyrp.param.notNull(parent, 'parent');
  var message = jQuery('<div>').addClass('widget-message').appendTo(parent)
      .hide();
  return message;
};

/**
 * Appends a DIV with style {clear: both;} to the parent.
 * @param {Element} parent The parent element for the created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.appendClearDiv = function(
    parent) {
  window.google.identitytoolkit.easyrp.param.notNull(parent, 'parent');
  jQuery('<div>').addClass('cl').appendTo(parent);
};

/**
 * Creates a <code>center</code> element.
 * @param {Element} opt_child If set, append the element to the created center
 *        element.
 * @param {Element} opt_parent If set, appent the created center element to the
 *        element.
 * @return {Element} The created center element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.putCenter = function(
    opt_child, opt_parent) {
  var center = jQuery('<center>');
  if (opt_child) {
    center.append(opt_child);
  }
  if (opt_parent) {
    center.appendTo(opt_parent);
  }
  return center;
};

/**
 * Creates a clickable icon.
 * @param {string} icon File to be rendered.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string} opt_param The parameter of the handler.
 * @param {string} opt_styleClass Style class to be applied.
 * @return {Object} Div of the created item.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createIconButton =
    function(icon, handler, opt_param, opt_styleClass) {
  var buttonDiv = jQuery('<div>').addClass('wizard-idp');
  if (opt_styleClass) {
    buttonDiv.addClass(opt_styleClass);
  }
  var buttonLink = jQuery('<a>').attr('href', 'javascript: void(0)');
  buttonLink.append(jQuery('<img>').attr('src', icon));
  var self = this;
  buttonDiv.click(function() {
    self[handler].call(self, opt_param);
    return false;
  });
  buttonLink.appendTo(buttonDiv);
  return buttonDiv;
};

/**
 * Creates a Nascar IDP link.
 * @param {Object} idp The IDP configuration data.
 * @param {string} idpId The IDP id to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 * @private
 */
window.google.identitytoolkit.easyrp.Page.prototype.createNascarLink_ =
    function(idp, idpId, handler) {
  window.google.identitytoolkit.easyrp.param.notEmpty(idp, 'idp');
  window.google.identitytoolkit.easyrp.param.notEmpty(idpId, 'idpId');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  var li = jQuery('<li>').css('backgroundImage', 'url("' + idp.image + '")').
      addClass('widget-idp');
  var idpLink = jQuery('<a>').attr('href', 'javascript: void(0)').
      append(jQuery('<span>').html(idp.label)).appendTo(li);
  var self = this;
  idpLink.click(function() {
    self[handler].call(self, idpId);
    return false;
  });
  return li;
};

/**
 * Creates a Nascar list.
 * @param {idpId: {}, ...} idps The configuration parameters for IDPs.
 * @param {Array} nascarIdpList The list of IDP ids to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createNascarList =
    function(idps, nascarIdpList, handler) {
  window.google.identitytoolkit.easyrp.param.notEmpty(idps, 'idps');
  window.google.identitytoolkit.easyrp.param.notEmptyArray(nascarIdpList,
      'nascarIdpList');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  var nascar = jQuery('<ol>');
  for (var i = 0; i < nascarIdpList.length; i++) {
    var idpId = nascarIdpList[i];
    this.createNascarLink_(idps[idpId], idpId, handler).appendTo(nascar);
  }
  return nascar;
};

/**
 * Creates a HTML fragment with a title and a Nascar list.
 * @param {string} label The label text for the title.
 * @param {Object} idps The IDP configuration parameters.
 * @param {Array} nascarIdpList The list of IDP ids to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createNascarSection =
    function(label, idps, nascarIdpList, handler) {
  window.google.identitytoolkit.easyrp.param.notEmpty(idps, 'idps');
  window.google.identitytoolkit.easyrp.param.notEmptyArray(nascarIdpList,
      'nascarIdpList');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  var nascarSection = jQuery('<div>').addClass('widget-nascar-list').append(
      jQuery('<h2>').html(label));
  this.createNascarList(idps, nascarIdpList, handler).appendTo(nascarSection);
  return nascarSection;
};

/**
 * Creates a widget header. Note: if opt_showCloseIcon is true, must provide
 * opt_handler.
 * @param {string} title The label of the header.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 * @param {string=} opt_closeIcon The URL of the close icon.
 * @param {string=} opt_handler The handler function when the close icon is
 *     clicked.
 * @param {string=} opt_closeTitle The title for the close icon.
 * @param {string=} opt_styleClass An optional style class name for the header.
 * @return {Element} The created header DIV element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createHeader = function(
    title, opt_showCloseIcon, opt_closeIcon, opt_handler, opt_closeTitle,
    opt_styleClass) {
  window.google.identitytoolkit.easyrp.param.notNull(title, 'title');
  var headerBar = jQuery('<div>').addClass('widget-header').
      append(jQuery('<h1>').html(title));
  if (opt_styleClass) {
    headerBar.addClass(opt_styleClass);
  }
  if (opt_showCloseIcon) {
    window.google.identitytoolkit.easyrp.param.notEmpty(opt_handler,
        'opt_handler');
    var closeIcon = jQuery('<span>').addClass('widget-close-icon').
        appendTo(headerBar);
    if (opt_closeTitle) {
      closeIcon.attr('title', opt_closeTitle);
    }
    var self = this;
    closeIcon.click(function() {
      self[opt_handler].call(self);
    });
  }
  return headerBar;
};

/**
 * Creates the account box.
 * @param {string} email The email of the user.
 * @param {boolean} legacy The type of the user.
 * @param {string} displayName The name of the user.
 * @param {url} photoUrl The URL of the user. If not set, default photo will be
 *     used.
 * @param {string} handler The handler function when the account is clicked.
 * @param {url} removeIconUrl The URL of the remove user icon.
 * @param {string} removeHandler The handler when user click on remove button.
 * @param {string} removeTitle The tooltip for the remove button.
 * @param {string} opt_providerId The provider of the account.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createAccountBox =
    function(email, legacy, displayName, photoUrl, handler, removeIconUrl,
    removeHandler, removeTitle, opt_providerId) {
  window.google.identitytoolkit.easyrp.param.notEmpty(email, 'email');
  window.google.identitytoolkit.easyrp.param.notNull(legacy, 'legacy');
  window.google.identitytoolkit.easyrp.param.notEmpty(photoUrl, 'photoUrl');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  window.google.identitytoolkit.easyrp.param.notEmpty(removeHandler,
      'removeHandler');
  window.google.identitytoolkit.easyrp.param.notEmpty(removeTitle,
      'removeTitle');

  var li = jQuery('<li>').addClass('widget-account');
  jQuery('<img>').attr('src', photoUrl).addClass('widget-account-photo').
      appendTo(li);

  var account = jQuery('<p>').appendTo(li);
  if (displayName) {
    account.append(
        jQuery('<strong>').addClass('widget-account-name').html(displayName));
  } else {
    account.addClass('widget-email-only');
  }
  account.append(jQuery('<span>').addClass('widget-account-email').html(email));

  var removeLink = jQuery('<a>').addClass('widget-account-remove').
      attr('title', removeTitle).attr('href', 'javascript: void(0)').
      appendTo(li);
  removeLink.append(jQuery('<img>').attr('src', removeIconUrl));
  var self = this;
  li.click(function() {
    self[handler].call(self, {email: email, displayName: displayName,
      legacy: !!legacy, photoUrl: photoUrl, providerId : opt_providerId});
    return false;
  });
  removeLink.click(function() {
    self[removeHandler].call(self, {email: email, displayName: displayName,
      legacy: !!legacy, photoUrl: photoUrl, providerId : opt_providerId});
    return false;
  });
  return li;
};

/**
 * Creates a busy image to indicate a popup is showing.
 * @param {string} busyIcon The URL of the icon.
 * @param {string} busyLabel The text.
 * @param {string} handler The handler function when the indicator is clicked.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createPopupIndicator =
    function(busyIcon, busyLabel, handler) {
  window.google.identitytoolkit.easyrp.param.notEmpty(busyIcon, 'busyIcon');
  window.google.identitytoolkit.easyrp.param.notEmpty(busyLabel, 'busyLabel');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');

  var main = jQuery('<div>').addClass('widget-main');
  var loading = jQuery('<div>').addClass('widget-loading').appendTo(main);
  loading.append(jQuery('<img>').attr('src', busyIcon));
  loading.append(jQuery('<p>').html(busyLabel));
  var self = this;
  main.click(function() {
    self[handler].call(self);
    return false;
  });
  return main;
};

/**
 * Creates the account box.
 * @param {string} email The email of the user.
 * @param {string} displayName The name of the user.
 * @param {url} photoUrl The URL of the user. If not set, default photo will be
 *     used.
 * @param {string=} opt_styleClass Optional style clss.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.
   createLegacyAccountSignInBox = function(email, displayName, photoUrl,
   opt_styleClass) {
  window.google.identitytoolkit.easyrp.param.notEmpty(email, 'email');
  window.google.identitytoolkit.easyrp.param.notEmpty(photoUrl, 'photoUrl');
  var li = jQuery('<li>').addClass('widget-account');
  if (opt_styleClass) {
    li.addClass(opt_styleClass);
  }
  jQuery('<img>').attr('src', photoUrl).addClass('widget-account-photo').
      appendTo(li);
  var account = jQuery('<p>').appendTo(li);
  if (displayName) {
    account.append(
        jQuery('<strong>').addClass('widget-account-name').html(displayName));
  } else {
    account.addClass('widget-email-only');
  }
  account.append(jQuery('<span>').addClass('widget-account-email').html(email));
  return li;
};

/**
 * Creates the button with key hole.
 * @param {string} keyholeUrl The URL of the key hole.
 * @param {string} caption The caption of the button.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string=} opt_styleClass An optional class name for the button.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createKeyholeButton =
    function(keyholeUrl, caption, handler, opt_styleClass) {
  window.google.identitytoolkit.easyrp.param.notEmpty(keyholeUrl, 'keyholeUrl');
  window.google.identitytoolkit.easyrp.param.notEmpty(caption, 'caption');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');

  var button = jQuery('<a>').attr('href', 'javascript: void(0)').
      addClass('widget-keyhole-button');
  if (opt_styleClass) {
    button.addClass(opt_styleClass);
  }
  jQuery('<img>').attr('src', keyholeUrl).appendTo(button);
  button.append(caption);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return false;
  });
  return button;
};

/**
 * Creates the button with key hole.
 * @param {string} caption The caption of the button.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string=} opt_styleClass An optional class name for the button.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createRenderedButton =
    function(caption, handler, opt_styleClass) {
  window.google.identitytoolkit.easyrp.param.notEmpty(caption, 'caption');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');

  var button = jQuery('<a>').attr('href', 'javascript: void(0)').
      addClass('widget-keyhole-button');
  if (opt_styleClass) {
    button.addClass(opt_styleClass);
  }
  button.append(caption);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return false;
  });
  return button;
};

/**
 * Appends a error message DIV to the parent.
 * @param {Element} parent The parent element for the created element.
 * @return {Element} The created DIV element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.appendErrorDiv = function(
    parent) {
  window.google.identitytoolkit.easyrp.param.notNull(parent, 'parent');
  var errorDiv = jQuery('<div>').addClass('widget-error').append(jQuery('<p>')).
      appendTo(parent);
  return errorDiv;
};

/**
 * Creates the nav bar.
 * @param {string} photoUrl The URL of the photo.
 * @param {string} label The email of the user.
 * @param {string} handler The handler function when the account is clicked.
 * @param {string} opt_styleClass The theme style class.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createSigninBar =
    function(photoUrl, label, handler, opt_styleClass) {
  window.google.identitytoolkit.easyrp.param.notEmpty(photoUrl, 'photoUrl');
  window.google.identitytoolkit.easyrp.param.notEmpty(label, 'label');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');

  return this.createKeyholeButton(photoUrl, label, handler, opt_styleClass);
};

/**
 * Creates the nav bar.
 * @param {string} photoUrl The URL of the photo.
 * @param {string} label The email of the user.
 * @param {string} handler The handler function when the account is clicked.
 * @param {string} arrowUrl The optional style class.
 * @param {string} opt_styleClass The theme style class.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createNavBar =
    function(photoUrl, label, handler, arrowUrl, opt_styleClass) {
  window.google.identitytoolkit.easyrp.param.notEmpty(photoUrl, 'photoUrl');
  window.google.identitytoolkit.easyrp.param.notEmpty(label, 'label');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  window.google.identitytoolkit.easyrp.param.notEmpty(arrowUrl, 'arrowUrl');

  var button = jQuery('<a>').attr('href', 'javascript: void(0)').
      addClass('widget-keyhole-button');
  if (opt_styleClass) {
    button.addClass(opt_styleClass);
  }
  jQuery('<img>').attr('src', photoUrl).appendTo(button);
  button.append(jQuery('<span>').html(label));
  jQuery('<img>').addClass('widget-navbar-arrow').attr('src', arrowUrl).
      appendTo(button);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return false;
  });
  return button;
};

/**
 * Creates the drop down menu.
 * @param {Array=} menuArray An array whose element is
 *     {label, handler, opt_styleClass}. For example,
 *     [{label:'Switch account', handler:'onSwitchAccount'},
 *     {label:'Sign out', handler:'onSignOut'}].
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createDropMenu =
    function(menuArray) {
  window.google.identitytoolkit.easyrp.param.notEmpty(menuArray, 'menuArray');
  var menu = jQuery('<ol>').addClass('widget-navbar-menu');
  for (var i = 0; i < menuArray.length; i++) {
    var item = menuArray[i];
    if (item && item.label && (item.url || item.handler)) {
      menu.append(this.createMenuItem_(item.label, item.url, item.handler,
          item.opt_styleClass));
    }
  }
  return menu;
};

/**
 * Creates a menu item in the dorpdown menu of the navbar.
 * @param {string} label The email of the user.
 * @param {string} url The URL to go when the menu item is clicked.
 * @param {string|Function} handler The handler function when the account is
 *     clicked.
 * @param {string=} opt_styleClass The login state of the account.
 * @return {Element} The created element.
 * @private
 */
window.google.identitytoolkit.easyrp.Page.prototype.createMenuItem_ =
    function(label, url, handler, opt_styleClass) {
  window.google.identitytoolkit.easyrp.param.notEmpty(label, 'label');
  window.google.identitytoolkit.easyrp.param.notEmpty(
      url || handler, 'url or handler');
  var item = jQuery('<li>').addClass('widget-navbar-menuitem');
  if (opt_styleClass) {
    item.addClass(opt_styleClass);
  }
  var link = jQuery('<a>').append(jQuery('<nobr>').html(label)).appendTo(item);
  var self = this;
  link.click(function() {
    if (jQuery.isFunction(handler)) {
      handler.call(self);
    } else if (handler) {
      self[handler].call(self);
    } else {
      window.location.href = url;
    }
    return false;
  });
  return item;
};

/**
 * Name space for the UI controls.
 */
window.google.identitytoolkit.easyrp.page =
    window.google.identitytoolkit.easyrp.page || {};

/**
 * Creates the navbar page.
 * @constructor
 */
window.google.identitytoolkit.easyrp.page.NavbarPage = function() {
};

window.google.identitytoolkit.easyrp.page.NavbarPage.inheritsFrom(
    window.google.identitytoolkit.easyrp.Page);

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.signedIn_ =
    false;
window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.dropdown_ =
    false;

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.renderSignIn =
    function(container, opt_photoUrl, opt_resource, opt_themeClass) {
  if (opt_photoUrl) {
    this.photoUrl_ = opt_photoUrl;
  } else {
    this.photoUrl_ = window.google.identitytoolkit.easyrp.config.keyholeUrl;
  }
  var resource = opt_resource;
  if (!resource) {
    resource = window.google.identitytoolkit.easyrp.labels.navbarPage;
  }
  this.themeClass_ = opt_themeClass;
  this.parentClass.render.call(this, container, resource);
  this.signedIn_ = false;
  this.dropdown_ = false;
  this.renderSignIn_();
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.renderSignIn_ =
    function() {
  this.container_.append(this.createSigninBar(this.photoUrl_,
      this.resource_.signIn, 'onNavbarClicked', this.themeClass_));
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.render =
    function(container, dropdown, email, opt_label, opt_photoUrl, opt_accounts,
    opt_resource, opt_arrowUrl, opt_themeClass) {
  window.google.identitytoolkit.easyrp.param.notEmpty(email, 'email');
  this.signedIn_ = true;
  this.email_ = email;
  if (opt_label) {
    this.label_ = opt_label;
  } else {
    this.label_ = window.google.identitytoolkit.easyrp.util.getEmailUsername(
        email);
  }
  if (opt_photoUrl) {
    this.photoUrl_ = opt_photoUrl;
  } else {
    this.photoUrl_ =
      window.google.identitytoolkit.easyrp.config.defaultPhotoUrl;
  }
  var resource = opt_resource;
  if (!resource) {
    resource = window.google.identitytoolkit.easyrp.labels.navbarPage;
  }
  this.arrowUrl_ =
      opt_arrowUrl || window.google.identitytoolkit.easyrp.images.downArrow;
  this.themeClass_ =
      opt_themeClass || window.google.identitytoolkit.easyrp.config.themeClass;
  this.parentClass.render.call(this, container, resource);
  if (!dropdown) {
    this.dropdown_ = false;
    this.renderCollapsed_();
  } else {
    this.dropdown_ = true;
    this.renderDropdown_(opt_accounts);
  }
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    renderCollapsed_ = function() {
  this.container_.append(this.createNavBar(this.photoUrl_, this.label_,
      'onNavbarClicked', this.arrowUrl_, this.themeClass_));
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    getClickAccountHandler_ = function(account) {
  var self = this;
  return function() {
    self['onAccountClicked'].call(self, account);
  };
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    renderDropdown_ = function(opt_accounts) {
  var menuitems = [];
  if (opt_accounts) {
    for (var i = 0; i< opt_accounts.length; i++) {
      var account = opt_accounts[i];
      var text = account.displayName + '(' + account.email + ')';
      menuitems[i] =
          {label: text, handler: this.getClickAccountHandler_(account)};
    }
  }
  menuitems = jQuery.merge(menuitems,
      window.google.identitytoolkit.easyrp.config.dropdownMenu);
  this.container_.append(this.createNavBar(this.photoUrl_, this.label_,
      'onOpenNavbarClicked', this.arrowUrl_, this.themeClass_));
  this.container_.append(this.createDropMenu(menuitems));
  var self = this;
  var onClickOther = function() {
    self.collapse();
    jQuery(document).unbind('click', onClickOther);
  };
  jQuery(document).bind('click', onClickOther);
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    isSignedIn = function() {
  return !!this.signedIn_;
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    isDropdown = function() {
  return !!this.dropdown_;
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    dropdown = function(opt_accountsMenu) {
  if (this.signedIn_ && !this.dropdown_) {
    this.container_.empty();
    this.renderDropdown_(opt_accountsMenu);
    this.dropdown_ = true;
  }
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    collapse = function() {
  if (this.signedIn_ && this.dropdown_) {
    this.container_.empty();
    this.renderCollapsed_();
    this.dropdown_ = false;
  }
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    getNavbarElement = function() {
  return jQuery('.widget-keyhole-button', this.container_);
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    getSwitchAccountElement = function() {
  var index = jQuery('.widget-navbar-menuitem a', this.container_).length - 2;
  return jQuery('.widget-navbar-menuitem a:eq(' + index + ')', this.container_);
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    getSignOutElement = function() {
  return jQuery('.widget-navbar-menuitem a:last', this.container_);
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    onNavbarClicked = function() {
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    onOpenNavbarClicked = function() {
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    onAccountClicked = function(account) {
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    onSwitchAccountClicked = function() {
};

window.google.identitytoolkit.easyrp.page.NavbarPage.prototype.
    onSignOutClicked = function() {
};

/**
 * Class for the Account Chooser page.
 * @constructor
 * @extends {window.google.identitytoolkit.easyrp.Page}
 */
window.google.identitytoolkit.easyrp.page.AccountChooserPage = function() {
};
window.google.identitytoolkit.easyrp.page.AccountChooserPage.inheritsFrom(
    window.google.identitytoolkit.easyrp.Page);

/**
 * Renders the Account Chooser page.
 * @param {Element} container The rootDiv of the widget.
 * @param {Array.<Object>=} opt_accounts An array of accounts to be rendered.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 */
window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.render =
    function(container, opt_accounts, opt_resource, opt_showCloseIcon) {
  if (opt_accounts) {
    this.accounts_ = opt_accounts;
  } else {
    this.accounts_ = [];
  }
  var resource = opt_resource;
  if (!resource) {
    resource = window.google.identitytoolkit.easyrp.labels.accountChooserPage;
  }
  this.parentClass.render.call(this, container, resource,
      opt_showCloseIcon !== false);

  this.render_();
};

/**
 * Really renders the page.
 * @private
 */
window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.render_ =
    function() {
  this.createHeader(this.resource_.title, this.showCloseIcon_,
      this.resource_.closeIcon, 'onCloseIconClicked', this.resource_.close).
      appendTo(this.container_);
  var main = jQuery('<div>').addClass('widget-accounts widget-main').
      appendTo(this.container_);
  this.appendErrorDiv(main).hide();
  var accounts = jQuery('<ol>').appendTo(main);
  if (this.accounts_.length) {
    for (var i = 0; i < this.accounts_.length; i++) {
      var account = this.accounts_[i];
      if (account && account.email) {
        var photoUrl = account.photoUrl;
        if (!photoUrl) {
          photoUrl =
              window.google.identitytoolkit.easyrp.config.defaultPhotoUrl;
        }
        var removeIconUrl
            = window.google.identitytoolkit.easyrp.images.removeIconUrl;
        this.createAccountBox(account.email, !!account.legacy,
            account.displayName, photoUrl, 'onAccountClicked', removeIconUrl,
            'onRemoveAccountClicked', this.resource_.removeTitle,
            account.providerId).appendTo(accounts);
      }
    }
  } else {
    main.addClass('widget-accounts-empty');
  }
  var addAccountBox = jQuery('<div>').addClass('widget-add-account-box').
      appendTo(main);
  this.createKeyholeButton(
      window.google.identitytoolkit.easyrp.config.buttonKeyholeUrl,
      this.resource_.addAccount, 'onAddAccountClicked', 'widget-account-add').
      appendTo(addAccountBox);
};

/**
 * Clears the error message.
 */
window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    clearError = function() {
  jQuery('.widget-error', this.container_).hide();
  this.getErrorElement().empty();
};

/**
 * Checks whether an error message is showing?
 * @return {boolean} {@code true} if an error message is showing,
 *     {@code false} otherwise.
 */
window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    isShowingError = function() {
  return jQuery('.widget-error', this.container_).css('display') != 'none';
};

/**
 * Shows an error message.
 * @param {string} errorHtml The error message (can use HTML tags).
 */
window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    setError = function(errorHtml) {
  jQuery('.widget-error', this.container_).show();
  this.getErrorElement().html(errorHtml);
};

/**
 * @return {Element} Returns DOM element for the close icon.
 */
window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    getCloseIconElement = function() {
  return jQuery('.widget-close-icon', this.container_);
};

/**
 * @return {Element} Returns DOM element for the error message.
 */
window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    getErrorElement = function() {
  return jQuery('.widget-error p', this.container_);
};

window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    getAccountElements = function() {
  return jQuery('.widget-account a', this.container_);
};

window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    getAccountElement = function(index) {
  window.google.identitytoolkit.easyrp.param.notNull(index, 'index');
  return jQuery('li.widget-account:eq(' + index + ')', this.container_);
};

window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    getAddAccountElement = function() {
  return jQuery('.widget-account-add', this.container_);
};

window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    onCloseIconClicked = function() {
};

window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    onAccountClicked = function(account) {
};

window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    onAddAccountClicked = function() {
};

window.google.identitytoolkit.easyrp.page.AccountChooserPage.prototype.
    onRemoveAccountClicked = function(account) {
};

/**
 * Creates add-account page.
 * @constructor
 */
window.google.identitytoolkit.easyrp.page.AddAccountPage = function() {
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.inheritsFrom(
    window.google.identitytoolkit.easyrp.Page);

/**
 * Renders add-account page.
 * @param {Element} container The HTML element that contains the page.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon whether to show the close icon.
 * @param {Object=} opt_idps The IDP object map {idpId: {label, image, domain}}.
 * @param {Array.<string>=} opt_nascarList The Nascar IDP list.
 */
window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.render =
    function(container, opt_resource, opt_showCloseIcon, opt_idps,
    opt_nascarList) {
  var resource = opt_resource;
  if (!resource) {
    resource = window.google.identitytoolkit.easyrp.labels.addAccountPage;
  }
  this.parentClass.render.call(this, container, resource,
      opt_showCloseIcon !== false);
  this.idps_ = opt_idps;
  if (!this.idps_) {
    this.idps_ = window.google.identitytoolkit.easyrp.config.idps;
  }
  this.nascarList_ = opt_nascarList;
  if (!this.nascarList_) {
    this.nascarList_ =
        window.google.identitytoolkit.easyrp.config.nascar.addAccountPage;
  }

  this.render_();
};

/**
 * Really creates the DOM elements for add-account page.
 * @private
 */
window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.render_ =
    function() {
  this.createHeader(this.resource_.title, this.showCloseIcon_,
      this.resource_.closeIcon, 'onCloseIconClicked', this.resource_.close).
      appendTo(this.container_);
  var main = jQuery('<div>').addClass('widget-main').appendTo(this.container_);
  this.appendErrorDiv(main).hide();
  this.createNascarSection(this.resource_.pick, this.idps_, this.nascarList_,
      'onIdpLinkClicked').appendTo(main);
  var emailBox = jQuery('<div>').addClass('widget-email-box').appendTo(main);
  jQuery('<h2>').html(this.resource_.email).appendTo(emailBox);
  var label = jQuery('<label>').appendTo(emailBox);
  this.createTextBox('widget-input-big', false, 'onEmailKeyPressed').appendTo(
      label);
  jQuery('<p>').appendTo(label).hide();
  this.createRenderedButton(this.resource_.next, 'onNextButtonClicked').
      appendTo(emailBox);
  var footer = jQuery('<div>').addClass('widget-footer').appendTo(
      this.container_);
  jQuery('<a>').attr('href', this.resource_.acSiteUrl).attr('target', '_blank').
      html(this.resource_.acSiteText).appendTo(footer);
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.clearErrors =
    function() {
  jQuery('.widget-main .widget-error', this.container_).hide();
  this.getPageErrorElement().empty();
  jQuery('.widget-email-box label', this.container_).removeClass(
      'widget-form-error');
  this.getEmailErrorElement().empty().hide();
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    isShowingPageError = function() {
  return 'none' !=
      jQuery('.widget-main .widget-error', this.container_).css('display');
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    isShowingEmailError = function() {
  return 'none' != this.getEmailErrorElement().css('display');
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    setPageError = function(errorHtml) {
  jQuery('.widget-main .widget-error', this.container_).show();
  this.getPageErrorElement().html(errorHtml);
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    setEmailError = function(errorHtml) {
  jQuery('.widget-email-box label', this.container_).addClass(
      'widget-form-error');
  this.getEmailErrorElement().html(errorHtml).show();
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    getInputEmail = function() {
  return this.getEmailElement().val();
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    setInputEmail = function(newValue) {
  window.google.identitytoolkit.easyrp.param.notNull(newValue, 'newValue');
  this.getEmailElement().val(newValue);
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    getCloseIconElement = function() {
  return jQuery('.widget-close-icon', this.container_);
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    getPageErrorElement = function() {
  return jQuery('.widget-error p', this.container_);
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    getEmailErrorElement = function() {
  return jQuery('.widget-email-box label p', this.container_);
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    getEmailElement = function() {
  return jQuery('input[type=\'text\']', this.container_);
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    getIdpLinkElement = function(index) {
  window.google.identitytoolkit.easyrp.param.notNull(index, 'index');
  return jQuery('.widget-nascar-list .widget-idp:eq(' + index + ')',
      this.container_).children('a');
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    getNextButton = function() {
  return jQuery('.widget-keyhole-button', this.container_);
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    onCloseIconClicked = function() {
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    onIdpLinkClicked = function(id) {
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    onEmailKeyPressed = function(e) {
  if (e.which == 13) {
    this.onNextButtonClicked();
  }
};

window.google.identitytoolkit.easyrp.page.AddAccountPage.prototype.
    onNextButtonClicked = function() {
};

/**
 * Creates the Account Chooser page.
 * @constructor
 */
window.google.identitytoolkit.easyrp.page.AppsDomainPage = function() {
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.inheritsFrom(
    window.google.identitytoolkit.easyrp.Page);

/**
 * Renders the Account Chooser page.
 * @param {Element} container The rootDiv of the widget.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 */
window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.render =
    function(container, opt_resource, opt_showCloseIcon) {
  var resource = opt_resource;
  if (!resource) {
    resource = window.google.identitytoolkit.easyrp.labels.appsDomainPage;
  }
  this.parentClass.render.call(this, container, resource,
      opt_showCloseIcon !== false);

  this.render_();
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.render_ =
    function() {
  this.createHeader(this.resource_.title, this.showCloseIcon_,
      this.resource_.closeIcon, 'onCloseIconClicked', this.resource_.close).
      appendTo(this.container_);
  var main = jQuery('<div>').addClass('widget-accounts widget-main').
      appendTo(this.container_);
  var domainBox = jQuery('<div>').addClass('widget-domain-box').appendTo(main);
  jQuery('<h2>').html(this.resource_.inputAppsDomain).appendTo(domainBox);
  var label = jQuery('<label>').appendTo(domainBox);
  this.createTextBox('widget-input-big', false, 'onDomainKeyPressed').
      appendTo(label);
  jQuery('<p>').appendTo(label).hide();
  this.createRenderedButton(this.resource_.next, 'onNextButtonClicked').
      appendTo(domainBox);
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    clearError = function() {
  jQuery('.widget-domain-box label', this.container_).removeClass(
      'widget-form-error');
  this.getErrorElement().empty().hide();
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    isShowingError = function() {
  return 'none' != this.getErrorElement().css('display');
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    setError = function(errorHtml) {
  jQuery('.widget-domain-box label', this.container_).addClass(
    'widget-form-error');
  this.getErrorElement().html(errorHtml).show();
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    getDomain = function() {
  return this.getDomainElement().val();
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    setDomain = function(newValue) {
  window.google.identitytoolkit.easyrp.param.notNull(newValue, 'newValue');
  this.getDomainElement().val(newValue);
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    getCloseIconElement = function() {
  return jQuery('.widget-close-icon', this.container_);
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    getErrorElement = function() {
  return jQuery('.widget-domain-box label p', this.container_);
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    getDomainElement = function() {
  return jQuery('input[type=\'text\']', this.container_);
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    getNextButton = function() {
  return jQuery('.widget-keyhole-button', this.container_);
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    onCloseIconClicked = function() {
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    onDomainKeyPressed = function(e) {
  if (e.which == 13) {
    this.onNextButtonClicked();
  }
};

window.google.identitytoolkit.easyrp.page.AppsDomainPage.prototype.
    onNextButtonClicked = function() {
};

/**
 * Creates the Account Chooser page.
 * @constructor
 */
window.google.identitytoolkit.easyrp.page.ChooserLegacyPage = function() {
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.inheritsFrom(
    window.google.identitytoolkit.easyrp.Page);

/**
 * Renders the Account Chooser page.
 * @param {Element} container The rootDiv of the widget.
 * @param {Object} account The account to be rendered.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 */
window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.render =
    function(container, account, opt_resource, opt_showCloseIcon) {
  window.google.identitytoolkit.easyrp.param.notEmpty(account, 'account');
  window.google.identitytoolkit.easyrp.param.notEmpty(account.email,
      'account.email');
  this.account_ = account;
  var resource = opt_resource;
  if (!resource) {
    resource = window.google.identitytoolkit.easyrp.labels.chooserLegacyPage;
  }
  this.parentClass.render.call(this, container, resource,
      opt_showCloseIcon !== false);

  this.render_();
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.render_ =
    function() {
  this.createHeader(this.resource_.title, this.showCloseIcon_,
      this.resource_.closeIcon, 'onCloseIconClicked', this.resource_.close).
      appendTo(this.container_);
  var main = jQuery('<div>').addClass('widget-accounts widget-main').
    appendTo(this.container_);
  var accounts = jQuery('<ol>').addClass('widget-legacy-signin').appendTo(main);

  var photoUrl = this.account_.photoUrl;
  if (!photoUrl) {
    photoUrl = window.google.identitytoolkit.easyrp.config.defaultPhotoUrl;
  }
  this.createLegacyAccountSignInBox(this.account_.email,
      this.account_.displayName, photoUrl).appendTo(accounts);

  var passwordBox = jQuery('<div>').addClass('widget-password-box').appendTo(
      main);
  jQuery('<h2>').html(this.resource_.password).appendTo(passwordBox);
  var label = jQuery('<label>').appendTo(passwordBox);
  this.createTextBox('widget-input-big', true, 'onPasswordKeyPressed').
      appendTo(label);
  jQuery('<p>').appendTo(label).hide();
  this.createRenderedButton(this.resource_.next, 'onSignInButtonClicked').
      appendTo(passwordBox);
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    clearError = function() {
  jQuery('.widget-password-box label', this.container_).removeClass(
      'widget-form-error');
  this.getErrorElement().empty().hide();
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    isShowingError = function() {
  return 'none' != this.getErrorElement().css('display');
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    setError = function(errorHtml) {
  jQuery('.widget-password-box label', this.container_).addClass(
      'widget-form-error');
  this.getErrorElement().html(errorHtml).show();
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    getPassword = function() {
  return this.getPasswordElement().val();
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    setPassword = function(newValue) {
  window.google.identitytoolkit.easyrp.param.notNull(newValue, 'newValue');
  this.getPasswordElement().val(newValue);
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    getCloseIconElement = function() {
  return jQuery('.widget-close-icon', this.container_);
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    getErrorElement = function() {
  return jQuery('.widget-password-box label p', this.container_);
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    getPasswordElement = function() {
  return jQuery('input[type=\'password\']', this.container_);
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    getSignInButton = function() {
  return jQuery('.widget-keyhole-button', this.container_);
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    onCloseIconClicked = function() {
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    onPasswordKeyPressed = function(e) {
  if (e.which == 13) {
    this.onSignInButtonClicked();
  }
};

window.google.identitytoolkit.easyrp.page.ChooserLegacyPage.prototype.
    onSignInButtonClicked = function() {
};

/**
 * Creates signup type page.
 * @constructor
 */
window.google.identitytoolkit.easyrp.page.PopupIndicatorPage = function() {
};

window.google.identitytoolkit.easyrp.page.PopupIndicatorPage.inheritsFrom(
    window.google.identitytoolkit.easyrp.Page);

window.google.identitytoolkit.easyrp.page.PopupIndicatorPage.prototype.render =
    function(container, opt_resource) {
  var resource = opt_resource;
  if (!resource) {
    resource = window.google.identitytoolkit.easyrp.labels.popupIndicatorPage;
  }
  this.parentClass.render.call(this, container, resource, false);
  this.render_();
};

window.google.identitytoolkit.easyrp.page.PopupIndicatorPage.prototype.render_ =
    function() {
  var icon = this.resource_.busyIcon ||
      window.google.identitytoolkit.easyrp.images.loading;
  this.createPopupIndicator(icon, this.resource_.busy, 'onShowPopupClicked').
      appendTo(this.container_);
};

window.google.identitytoolkit.easyrp.page.PopupIndicatorPage.prototype.
    getIndicatorElement = function() {
  return jQuery('.widget-loading');
};

window.google.identitytoolkit.easyrp.page.PopupIndicatorPage.prototype.
    onShowPopupClicked = function() {
};

/**
 * Name space for data types.
 */
window.google.identitytoolkit.easyrp.datatype = {};

/**
 * @class Enum for the types of users.
 * @enum {string}
 */
window.google.identitytoolkit.easyrp.datatype.UserType = {
  /** Legacy user who login by a local password */
  LEGACY: 'LEGACY',
  /** Federated user who will be redirect to IDP when login */
  FEDERATED: 'FEDERATED'
};

(function(jQuery) {
  /**
   * @class Defines the abstract parent class for all jqueryui-based widget.
   */
  window.google.identitytoolkit.easyrp.WidgetBase = {};

  /**
   * @namespace Object defined by jQuery to hold widget default options.
   * @type {Object}
   */
  window.google.identitytoolkit.easyrp.WidgetBase.options =
      /** @lends window.google.identitytoolkit.easyrp.WidgetBase.options */ {
    /**
     * The UUID of the login widget. Different login widget instances in the
     * same page must have different UUIDs. By default it is set to 1.
     * If set to {@code undefined}, a dynamically generated UUID will be used.
     * @type {number|string}
     */
    uuid: 1,

    /**
     * Whether the widget is running in a testing environment. If set to true,
     * the page won't redirect, but print a message.
     * @type {boolean}
     */
    testMode: false
  };

  /**
   * Initialize the login widget instance according to its options. Must be
   * called in the _create() method of child classes.
   */
  window.google.identitytoolkit.easyrp.WidgetBase.initWidget_ = function() {
    window.google.identitytoolkit.easyrp.util.
        registerWidget(this.options.uuid, this);
  };

  /**
   * Fires an event on the widget. Allows testing scripts to mock user input.
   * @param {string} event The name of the event.
   * @param {Object|Array} opt_params The parameters of the event.
   */
  window.google.identitytoolkit.easyrp.WidgetBase.fireEvent = function(event,
      opt_params) {
    if (jQuery.isArray(opt_params)) {
      this.element.trigger(event, opt_params);
    } else {
      this.element.trigger(event, [opt_params]);
    }
  };

  /**
   * Binds an action to some events.
   * @param {string|Array.<window.google.identitytoolkit.easyrp.events>} events
   *     An arrary of event type, or some event names separated by a space.
   * @param {function()} action The event handler function.
   */
  window.google.identitytoolkit.easyrp.WidgetBase.bindEvents = function(events,
      action) {
    if (!action) {
      throw 'Failed to bind action for [' + events + ']: action is null!';
    }
    if (!events) {
      throw 'Failed to bind action[' + action + ']: event is null!';
    }

    var eventStr;
    if (jQuery.isArray(events)) {
      eventStr = events.join(' ');
    } else {
      eventStr = events;
    }

    this.element.bind(eventStr, jQuery.proxy(action, this.rootDiv));
  };

  /**
   * Unbinds events.
   * @param {string} opt_events If set, unbind the events list in it. Otherwise,
   *     unbind all events.
   */
  window.google.identitytoolkit.easyrp.WidgetBase.unbindEvents = function(
      opt_events) {
    if (opt_events) {
      this.element.unbind(opt_events);
    } else {
      this.element.unbind();
    }
  };

  /**
   * Defines a general way to send notification to a widget .
   * @param {string} type The type of the notification.
   * @param {object} params The parameters with the notification.
   */
  window.google.identitytoolkit.easyrp.WidgetBase.handleNotification = function(
      type, params) {
    if (type == 'federateLoginSuccess') {
      // TODO: add acceptable notification here.
    } else {
      window.google.identitytoolkit.easyrp.util.log(
          'No handler found for notification \'' + type + "\'.");
    }
  };

  /**
   * Returns the RequestFactory.
   * @return {window.google.identitytoolkit.easyrp.net.RequestFactory}
   *     The RequestFactory used.
   */
  window.google.identitytoolkit.easyrp.WidgetBase.getRequestFactory =
      function() {
    if (!this.requestFactory_) {
      this.requestFactory_ = new window.google.identitytoolkit.easyrp.net.
          RequestFactory(this.getApiHandler());
    }
    return this.requestFactory_;
  };

  /**
   * Returns the underline ApiHandler.
   * @return {window.google.identitytoolkit.easyrp.net.ApiHandler}
   *     The ApiHandler used.
   */
  window.google.identitytoolkit.easyrp.WidgetBase.getApiHandler = function() {
    throw 'Please overwrite getApiHandler(), and return a valid ApiHandler.';
  };

  /**
   * Removes this widget. Must be called in the destroy() method of children
   * classes.
   */
  window.google.identitytoolkit.easyrp.WidgetBase.destroyWidget_ = function() {
    window.google.identitytoolkit.easyrp.util.unregisterWidget(
        this.options.uuid);
    jQuery.Widget.prototype.destroy.call(this);
  };

  jQuery.widget('ui.login', window.google.identitytoolkit.easyrp.WidgetBase);
})(jQuery);

(function(jQuery) {
  var widget = {
    /**
     * Widget options defined by jQuery.
     */
    options: {
      dropdown: false,
      email: undefined,
      displayName: undefined,
      photoUrl: undefined,
      //TODO(guibinkong): move to setConfig
      acMenu: false
    },

    /**
     * Widget life cycle method defined by jQuery.
     */
    _create: function() {
      this.apiHandler_ =
          new window.google.identitytoolkit.easyrp.net.ChooserApiHandler();
      this.page_ = new window.google.identitytoolkit.easyrp.page.NavbarPage();
      // Initialize CDS client.
      if (window.google.identitytoolkit.easyrp.config.useCds) {
        this.initCdsClient_();
      }
      var savedAccount;
      if (this.options.email) {
        var account = {email: this.options.email, legacy: !!this.options.legacy,
            displayName: this.options.displayName,
            photoUrl: this.options.photoUrl};
        window.google.identitytoolkit.easyrp.util.accountstorage.addAccount(
            account);
        savedAccount = window.google.identitytoolkit.easyrp.util.accountstorage.
            fetchAccount(this.options.email);
      }
      if (savedAccount) {
        this.showNavBar(savedAccount, this.options.dropdown);
      } else {
        this.showSignInBar();
      }
      var self = this;
      jQuery('#dark-screen').live('click', function() {
        self.closeAccountChooser();
      });
      this.initWidget_(true);
    },

    initCdsClient_: function() {
      try {
        var popupMode =
            !window.google.identitytoolkit.easyrp.config.useFullPageRedirect;
        var clientCallbackUrl =
            window.google.identitytoolkit.easyrp.config.cdsClientCallbackUrl;
        var language = window.google.identitytoolkit.easyrp.config.language;
        var callbacks = {
          empty: jQuery.proxy(this.emptyCallback_, this),
          store: jQuery.proxy(this.storeCallback_, this),
          select: jQuery.proxy(this.selectCallback_, this),
          update: jQuery.proxy(this.updateCallback_, this)
        };
        this.cds_ = window.cds.CdsClient.init({
          popupMode: popupMode,
          clientCallbackUrl: clientCallbackUrl,
          callbacks: callbacks,
          keepPopup: true,
          language: language
        });
      } catch (e) {
        window.google.identitytoolkit.easyrp.util.log(
            'Fail to initialize CDS client: ' + String(e.error));
      }
    },

    emptyCallback_: function() {
      var handler =
          window.google.identitytoolkit.easyrp.config.cdsEmptyResponseHandler;
      if (handler && jQuery.isFunction(handler)) {
        handler();
      }
    },

    storeCallback_: function(result, error) {
      if (error) {
        window.google.identitytoolkit.easyrp.util.log(
            'Receive error from CDS store service: ' + error.data);
      }
      if (!window.google.identitytoolkit.easyrp.config.useFullPageRedirect) {
        this.closeAccountChooser();
        this.showHomePage();
      }
    },

    updateCallback_: function(result, error) {
      if (error) {
        window.google.identitytoolkit.easyrp.util.log(
            'Receive error from CDS update service: ' + error.data);
      }
      if (!window.google.identitytoolkit.easyrp.config.useFullPageRedirect) {
        this.closeAccountChooser();
        this.showHomePage();
      }
    },

    selectCallback_: function(result, error) {
      // If an error occurs, or no result is returned, or result is to add an
      // account, show the add account page.
      if (error || !result || result.addAccount) {
        if (error) {
          window.google.identitytoolkit.easyrp.util.log(
              'Receive error from CDS select service: ' + error.data);
        }
        this.closeAccountChooser();
        this.showAddAccountPage();
      } else if (result.account) {
        // If the user selects the account in the CDS, we don't need to send
        // he/her to the CDS training page. In redirect mode, the CDS client
        // can do a invisible polling to see whether the account exists so that
        // it can skip the unnecessary redirecting. However, in popup mode,
        // there's no way to do the invisible polling so we need to keep this
        // information in the widget so that we can decide whether to send the
        // user to training page or not after a successful login.
        this.cdsAccount_ = result.account;
        this.doSelectAccount(result.account);
      } else {
        window.google.identitytoolkit.easyrp.util.log(
            'Wrong result from CDS select service.');
      }
    },

    prepareCds_: function() {
      if (!window.google.identitytoolkit.easyrp.config.useFullPageRedirect) {
        var win = this.createPopup_();
        this.cds_.setPopupWindow(win);
      }
    },

    selectAccountFromCds: function() {
      if (!this.cds_) {
        return;
      }
      this.prepareCds_();
      var cdsOptions = {
        language: window.google.identitytoolkit.easyrp.config.language,
        ui: window.google.identitytoolkit.easyrp.config.cdsUiConfig
      };
      this.cds_.select(null, cdsOptions);
    },

    storeAccountToCds: function(account) {
      if (!this.cds_) {
        return;
      }
      this.cdsAccount_ = undefined;
      this.prepareCds_();
      var cdsOptions = {
        language: window.google.identitytoolkit.easyrp.config.language
      };
      this.cds_.store(account, null, cdsOptions);
    },

    updateAccountToCds: function(account) {
      if (!this.cds_) {
        return;
      }
      this.cdsAccount_ = undefined;
      this.prepareCds_();
      var cdsOptions = {
        language: window.google.identitytoolkit.easyrp.config.language
      };
      this.cds_.update(account, cdsOptions);
    },

    shouldUpdateCdsAccount_: function(account) {
      if ((account.displayName &&
           account.displayName !== this.cdsAccount_.displayName) ||
          (account.photoUrl &&
           account.photoUrl !== this.cdsAccount_.photoUrl)) {
        return true;
      } else {
        return false;
      }
    },

    showAccount: function(email, dropdown) {
      var account = window.google.identitytoolkit.easyrp.util.accountstorage.
          fetchAccount(email);
      if (account) {
        this.options.email = email;
        this.showNavBar(account, dropdown);
      } else {
        this.showSignInBar();
      }
    },

    showSignInBar: function() {
      this.element.addClass('widget-panel-chooser widget-panel-navbar').empty();
      var self = this;
      if (window.google.identitytoolkit.easyrp.util.isBrowserSupported()) {
        this.page_.onNavbarClicked = function() {
          self.showAccountChooser();
        };
      } else {
        this.page_.onNavbarClicked = function() {
          alert(window.google.identitytoolkit.easyrp.labels.navbarPage.
              notSupport);
        };
      }
      this.page_.renderSignIn(this.element);
    },

    showNavBar: function(account, dropdown) {
      this.element.addClass('widget-panel-chooser widget-panel-navbar').empty();
      var self = this;
      this.page_.onNavbarClicked = function() {
        // For backward compatible, check self.options.acMenu too.
        var acMenuEnabled =
            window.google.identitytoolkit.easyrp.config.showAccountsMenu ||
            self.options.acMenu;
        // Note: disable accounts drop down menu for CDS.
        if (acMenuEnabled && !self.cds_) {
          var accounts = window.google.identitytoolkit.easyrp.util.
              accountstorage.readAccounts();
          if (accounts && accounts.length) {
            this.dropdown(accounts);
            return;
          }
        }
        this.dropdown();
      };
      this.page_.onOpenNavbarClicked = function() {
        this.collapse();
      };
      this.page_.onAccountClicked = function(account) {
        this.collapse();
        if (account.email == self.options.email) {
        } else if (window.google.identitytoolkit.easyrp.config.
            tryFederatedFirst && !self.isUsername_(account.email)) {
          self.tryFederatedLoginInAC_(account.email, 'signin', account.email);
        } else if (window.google.identitytoolkit.easyrp.config.
            useCachedUserStatus) {
          if (account.legacy) {
            self.showLegacySignInPage(account);
          } else {
            self.startFederatedLogin_(account.email, 'signin', account.email);
          }
        } else {
          var request = self.getRequestFactory().newGetUserStatusRequest(
              account.email, false);
          request.execute(
              jQuery.proxy(self.handleGetUserStatusResponse_, self));
        }
      };
      this.page_.onSwitchAccountClicked = function() {
        this.collapse();
        self.showAccountChooser();
       };
      this.page_.onSignOutClicked = function() {
        this.collapse();
        var f = window.google.identitytoolkit.easyrp.config.logoutHandler;
        if (f && jQuery.isFunction(f)) {
          f(account.email, account.username);
        } else {
          window.location =
              window.google.identitytoolkit.easyrp.config.logoutUrl;
        }
      };
      this.page_.render(this.element, dropdown,
          account.email, account.displayName, account.photoUrl);
    },

    isAccountsEmpty: function() {
      var accounts = window.google.identitytoolkit.easyrp.util.accountstorage.
          readAccounts();
      return !accounts || !accounts.length;
    },

    showAccountChooser: function() {
      var popin = window.google.identitytoolkit.easyrp.util.createPopIn();
      if (this.cds_) {
        this.selectAccountFromCds();
      } else if (this.isAccountsEmpty()) {
        this.showAddAccountPage();
      } else {
        this.showAccountChooserPage();
      }
      window.google.identitytoolkit.easyrp.util.showPopIn();
    },
    showAccountChooserError: function(error) {
       if (this.cds_ || this.isAccountsEmpty()) {
        this.showAddAccountPage(error);
      } else {
        this.showAccountChooserPage(error);
      }
    },

    closeAccountChooser: function() {
      if (window.google.identitytoolkit.easyrp.util.popup_ &&
          !window.google.identitytoolkit.easyrp.util.popup_.closed) {
        window.google.identitytoolkit.easyrp.util.popup_.close();
      }
      window.google.identitytoolkit.easyrp.util.popup_ = null;
      window.google.identitytoolkit.easyrp.util.removePopIn();
    },

    resetPopinClass_: function() {
      return jQuery('#popin-box').empty().removeClass('widget-panel-nascar').
          removeClass('widget-panel-legacy').removeClass('widget-panel-apps').
          removeClass('widget-panel-loading').addClass('widget-panel-chooser');
    },

    makeSurePopInExist: function() {
      if (jQuery('#popin-box').length == 0) {
        window.google.identitytoolkit.easyrp.util.showPopIn();
      }
    },

    showPopupIndicator: function() {
      this.makeSurePopInExist();
      this.resetPopinClass_().addClass('widget-panel-loading');
      var self = this;
      this.page_ =
          new window.google.identitytoolkit.easyrp.page.PopupIndicatorPage();
      this.page_.onShowPopupClicked = function(account) {
        if (window.google.identitytoolkit.easyrp.util.popup_ &&
            !window.google.identitytoolkit.easyrp.util.popup_.closed) {
          window.google.identitytoolkit.easyrp.util.popup_.focus();
        } else {
          self.closeAccountChooser();
        }
      };
      this.page_.onCancelClicked = function() {
        self.closeAccountChooser();
      };
      this.page_.render(jQuery('#popin-box'));
      window.google.identitytoolkit.easyrp.util.setPopinPosition_();
    },

    showMessageInPopin: function(message) {
      this.makeSurePopInExist();
      this.resetPopinClass_().addClass('message');
      jQuery('<span>').text(message).appendTo(jQuery('#popin-box'));
      window.google.identitytoolkit.easyrp.util.setPopinPosition_();
    },

    doSelectAccount: function(account) {
      if (account.email == this.options.email) {
        this.closeAccountChooser();
      } else if (window.google.identitytoolkit.easyrp.config.
          tryFederatedFirst && !this.isUsername_(account.email)) {
        this.tryFederatedLoginInAC_(account.email, 'signin', account.email);
      } else if (window.google.identitytoolkit.easyrp.config.
          useCachedUserStatus) {
        if (account.legacy || this.isUsername_(account.email)) {
          this.showLegacySignInPage(account);
        } else {
          this.startFederatedLogin_(account.email, 'signin', account.email);
        }
      } else {
        var request = this.getRequestFactory().newGetUserStatusRequest(
            account.email, false);
        request.execute(
            jQuery.proxy(this.handleGetUserStatusResponse_, this));
      }
    },

    showAccountChooserPage: function(opt_error) {
      this.makeSurePopInExist();
      this.resetPopinClass_();
      var self = this;
      this.page_ =
          new window.google.identitytoolkit.easyrp.page.AccountChooserPage();
      this.page_.onAccountClicked = function(account) {
        self.doSelectAccount(account);
      };
      this.page_.onAddAccountClicked = function() {
        self.showAddAccountPage();
      };
      this.page_.onRemoveAccountClicked = function(account) {
        window.google.identitytoolkit.easyrp.util.accountstorage.removeAccount(
            account);
        self.showAccountChooserPage();
      };
      this.page_.onCloseIconClicked = function() {
        self.closeAccountChooser();
      };
      var accounts = window.google.identitytoolkit.easyrp.util.accountstorage.
          readAccounts();
      this.page_.render(jQuery('#popin-box'), accounts, undefined, true);
      if (opt_error) {
        this.page_.setError(opt_error);
      }
      window.google.identitytoolkit.easyrp.util.setPopinPosition_();
    },

    refreshAndFetchAccount_: function(response) {
      var account = {email: response.email, legacy: response.legacy};
      if (response.displayName) {
        account.displayName = response.displayName;
      }
      if (response.photoUrl) {
        account.photoUrl = response.photoUrl;
      }
      window.google.identitytoolkit.easyrp.util.accountstorage.
          refreshAccount(account);
      account = window.google.identitytoolkit.easyrp.util.accountstorage.
          fetchAccount(account.email) || account;
      return account;
    },

    handleGetUserStatusResponse_: function(response) {
      if (response && 'registered' in response) {
        var account = this.refreshAndFetchAccount_(response);
        if (response.legacy || this.isUsername_(response.email)) {
          if (response.registered) {
            this.showLegacySignInPage(account);
          } else {
            this.showSignUpPage(response.email, true);
          }
        } else {
          this.tryFedAfterGetUserStatusHandler_(response, account);
        }
      } else {
        if (this.page_.setEmailError) {
          this.page_.setEmailError(window.google.identitytoolkit.easyrp.
              messages.addAccountPage.emailFormatError);
        } else {
          this.page_.setError(window.google.identitytoolkit.easyrp.messages.
              addAccountPage.emailFormatError);
        }
      }
    },

    checkEmailError_: function(email) {
      if (!email) {
        return 'emptyEmail';
      }
      if (!window.google.identitytoolkit.easyrp.util.isValidEmail(email) &&
          (!window.google.identitytoolkit.easyrp.config.supportLegacyUsername ||
          !window.google.identitytoolkit.easyrp.util.isValidUsername(email))) {
        return 'emailFormatError';
      }
    },

    isUsername_: function(email) {
      return !window.google.identitytoolkit.easyrp.util.isValidEmail(email) &&
          window.google.identitytoolkit.easyrp.config.supportLegacyUsername &&
          window.google.identitytoolkit.easyrp.util.isValidUsername(email);
    },

    showAddAccountPage: function(opt_error) {
      this.makeSurePopInExist();
      this.resetPopinClass_().addClass('widget-panel-nascar');
      var self = this;
      this.page_ =
          new window.google.identitytoolkit.easyrp.page.AddAccountPage();
      this.page_.onIdpLinkClicked = function(idpId) {
        var idp = this.idps_[idpId];
        if (idpId == 'GoogleApps') {
          self.showAppsDomainPage();
        } else if (idp) {
          self.startFederatedLogin_(idp.domain, 'signin');
        }
      };
      this.page_.onNextButtonClicked = function() {
        var email = this.getInputEmail();
        var err = self.checkEmailError_(email);
        if (err) {
          this.setEmailError(
              window.google.identitytoolkit.easyrp.messages.signInPage[err]);
          return;
        }
        this.clearErrors();
        self.doAddAccount(email);
      };
      this.page_.onCloseIconClicked = function() {
        if (self.cds_ || self.isAccountsEmpty()) {
          self.closeAccountChooser();
        } else {
          self.showAccountChooserPage();
        }
      };
      this.page_.render(jQuery('#popin-box'), undefined, true);
      if (opt_error) {
        this.page_.setPageError(opt_error);
      }
      window.google.identitytoolkit.easyrp.util.setPopinPosition_();
      this.page_.getEmailElement().focus();
    },

    doAddAccount: function(email) {
      if (window.google.identitytoolkit.easyrp.config.tryFederatedFirst &&
          !this.isUsername_(email)) {
        this.tryFederatedLoginInAddAccount_(email);
      } else {
        var request = this.getRequestFactory().newGetUserStatusRequest(email,
            true);
        request.execute(jQuery.proxy(this.handleGetUserStatusResponse_, this));
      }
    },

    showAppsDomainPage: function() {
      this.makeSurePopInExist();
      this.resetPopinClass_().addClass('widget-panel-apps');
      var self = this;
      this.page_ =
          new window.google.identitytoolkit.easyrp.page.AppsDomainPage();
      this.page_.onNextButtonClicked = function() {
        var domain = this.getDomain();
        if (!window.google.identitytoolkit.easyrp.util.isValidDomain(domain)) {
          this.setError(window.google.identitytoolkit.easyrp.messages.
              appsDomainPage['invalidDomain']);
          return;
        }
        this.clearError();
        self.startFederatedLogin_(domain, 'signin');
      };
      this.page_.onCloseIconClicked = function() {
        if (self.isAccountsEmpty()) {
          self.closeAccountChooser();
        } else {
          self.showAccountChooserPage();
        }
      };
      this.page_.render(jQuery('#popin-box'));
      window.google.identitytoolkit.easyrp.util.setPopinPosition_();
      this.page_.getDomainElement().focus();
    },

    showLegacySignInPage: function(account) {
      this.makeSurePopInExist();
      this.resetPopinClass_().addClass('widget-panel-legacy');
      var self = this;
      this.page_ =
          new window.google.identitytoolkit.easyrp.page.ChooserLegacyPage();
      this.page_.onSignInButtonClicked = function() {
        var password = this.getPassword();
        this.clearError();
        var request = self.getRequestFactory().newLegacySignInRequest(
            account.email, password);
        request.execute(jQuery.proxy(self.handleLegacySignInResponse_, self));
      };
      this.page_.onCloseIconClicked = function() {
        self.showAccountChooserPage();
      };
      this.page_.render(jQuery('#popin-box'), account);
      window.google.identitytoolkit.easyrp.util.setPopinPosition_();
      this.page_.getPasswordElement().focus();
    },

    handleLegacySignInResponse_: function(result) {
      if (result) {
        var account = {email: result.email, legacy: true};
        if (result.displayName) {
          account.displayName = result.displayName;
        }
        if (result.photoUrl) {
          account.photoUrl = result.photoUrl;
        }
        account = jQuery.extend({}, this.cdsAccount_, account);
        var status = result.status ? result.status.toLowerCase() : '';
        if (status == 'ok') {
          window.google.identitytoolkit.easyrp.util.accountstorage.addAccount(
              account);
          if (!this.cds_) {
            this.closeAccountChooser();
            this.showHomePage(result.email, true);
          } else if (this.cdsAccount_) {
            if (this.shouldUpdateCdsAccount_(account)) {
              this.updateAccountToCds(account);
            } else {
              this.closeAccountChooser();
              this.showHomePage(account.email, true);
            }
          } else {
            this.storeAccountToCds(account);
          }
        } else if (status == 'federated') {
          account.legacy = false;
          window.google.identitytoolkit.easyrp.util.accountstorage.
              refreshAccount(account);
          this.startFederatedLogin_(account.email, 'signin', account.email);
        } else if (status == 'passworderror') {
          window.google.identitytoolkit.easyrp.util.accountstorage.
              refreshAccount(account);
          this.page_.setError(window.google.identitytoolkit.easyrp.messages.
              signInPage.passwordError);
        } else if (status == 'emailnotexist') {
          this.page_.setError(window.google.identitytoolkit.easyrp.messages.
              signInPage.emailNotExist);
        } else {
          var error = window.google.identitytoolkit.easyrp.messages.signInPage.
              unrecognizedResult;
          error = error.replace(/\%\%status\%\%/g, result.status);
          this.page_.setError(error);
        }
      }
    },

    federatedLoginTemplate_: function(email, rpPurpose, rpInputEmail,
        tryFedFailHandler) {
      var win;
      var redirectMode =
          window.google.identitytoolkit.easyrp.config.useFullPageRedirect;
      if (redirectMode) {
        win = window;
        this.showMessageInPopin(
            window.google.identitytoolkit.easyrp.labels.popup.loading);
      } else {
        this.showPopupIndicator();
        win = this.createPopup_();
        this.writeMesssageToPopup_(win);
      }
      var self = this;
      var request = this.getRequestFactory().newCreateAuthUrlRequest(email,
          {'purpose': rpPurpose, 'input_email': rpInputEmail,
          'popup_mode': !redirectMode});
      request.execute(function(response) {
        if ('authUri' in response) {
          self.showMessage_(
              window.google.identitytoolkit.easyrp.labels.popup.redirecting);
          var authUri = response.authUri;
          // Note this is for customized OAuth scopes. Since the widget doesn't
          // have a domain-to-IdP mapping, when the user types in an email
          // address, it can't tell this email belongs to which IdP. The
          // workaround is to recognize the IdP from the auth URI returned from
          // createAuthUri API. The auth URI patterns are fewer than IdP domains
          // so that the widget won't end up with a huge mapping. This is a
          // temporary way, eventually the logic should be moved into the API
          // side.
          if (window.google.identitytoolkit.easyrp.util.urirewrite &&
              window.google.identitytoolkit.easyrp.util.urirewrite.
              rewriteAuthUri) {
            authUri = window.google.identitytoolkit.easyrp.util.urirewrite.
                rewriteAuthUri(authUri);
          }
          if (authUri.length < 2048) {
            win.location.href = authUri;
          } else {
            var winName = redirectMode ? undefined :
                window.google.identitytoolkit.easyrp.util.popupName_;
            window.google.identitytoolkit.easyrp.util.formRedirect(authUri,
                winName);
          }
        } else {
          self.showMessage_(
              window.google.identitytoolkit.easyrp.labels.popup.tryLegacy);
          tryFedFailHandler.call(self, response);
        }
      });
    },
    startFederatedLogin_: function(email, opt_purpose, opt_input_email) {
      this.federatedLoginTemplate_(email, opt_purpose, opt_input_email,
          this.showLoadFailedError_);
    },

    writeMesssageToPopup_: function(popup) {
      var html = window.google.identitytoolkit.easyrp.config.popup.HTML;
      html = html.replace(/\%\%title\%\%/g,
          window.google.identitytoolkit.easyrp.labels.popup.loading);
      html = html.replace(/\%\%message\%\%/g,
          window.google.identitytoolkit.easyrp.labels.popup.loading);
      try {
        popup.document.write(html);
      } catch (e) {
        // If the popup is in the CDS domain, we can't write the message into
        // it. Instead, set the location of the popup to 'about:blank' then
        // write the message.
        popup.location.href = 'about:blank';
        window.setTimeout(function() {
            popup.document.write(html);
        }, 10);
      }
    },

    showMessage_: function(error) {
      if (window.google.identitytoolkit.easyrp.config.useFullPageRedirect) {
        this.showMessageInPopin(error);
      } else {
        var win = window.google.identitytoolkit.easyrp.util.popup_;
        if (win && !win.closed) {
          win.document.title = error;
          jQuery('#message span', win.document).text(error);
        }
      }
    },

    showLoadFailedError_: function() {
      this.showMessage_(
          window.google.identitytoolkit.easyrp.labels.popup.loadFailed);
    },

    createPopup_: function(error) {
      var popup = window.google.identitytoolkit.easyrp.util.popup_;
      if (popup && !popup.closed) {
        popup.focus();
      } else {
        popup = window.google.identitytoolkit.easyrp.util.showPopup(
          window.google.identitytoolkit.easyrp.config.popup.width,
          window.google.identitytoolkit.easyrp.config.popup.height);
      }
      return popup;
    },

    getUserStatusResponseHandlerTemplate_: function(
        getUserStatusResponseHandler, email) {
      var self = this;
      return function() {
        var request = self.getRequestFactory().newGetUserStatusRequest(
            email, false);
        request.execute(jQuery.proxy(getUserStatusResponseHandler, self));
      };
    },

    entryGetUserStatusResponseHandler_: function(response) {
      if (response && 'registered' in response) {
        if (response.registered) {
          this.closeAccountChooser();
          var account = this.refreshAndFetchAccount_(response);
          this.showLegacySignInPage(account);
        } else {
          this.closeAccountChooser();
          this.showSignUpPage(response.email, true);
        }
      } else {
        this.showAccountChooserPage(window.google.identitytoolkit.easyrp.
            messages.addAccountPage.emailFormatError);
      }
    },

    tryFederatedLoginInAC_: function(email, opt_purpose, opt_input_email) {
      var handler = this.getUserStatusResponseHandlerTemplate_(
          this.entryGetUserStatusResponseHandler_, email);
      this.federatedLoginTemplate_(email, opt_purpose, opt_input_email,
          handler);
    },

    addAccountGetUserStatusResponseHandler_: function(response) {
      if (response && 'registered' in response) {
        if (response.registered) {
          this.closeAccountChooser();
          var account = this.refreshAndFetchAccount_(response);
          this.showLegacySignInPage(account);
        } else {
          this.closeAccountChooser();
          this.showSignUpPage(response.email, true);
        }
      } else {
        this.showAccountChooserPage(window.google.identitytoolkit.easyrp.
            messages.addAccountPage.emailFormatError);
      }
    },

    tryFederatedLoginInAddAccount_: function(email) {
      var handler = this.getUserStatusResponseHandlerTemplate_(
          this.addAccountGetUserStatusResponseHandler_, email);
      this.federatedLoginTemplate_(email, 'signin', email, handler);
    },

    tryFedAfterGetUserStatusHandler_: function(userStatusResponse, account) {
      var self = this;
      var handler = function() {
        if (userStatusResponse.registered) {
          self.closeAccountChooser();
          self.showLegacySignInPage(account);
        } else {
          self.closeAccountChooser();
          self.showSignUpPage(account.email, true);
        }
      };
      this.federatedLoginTemplate_(account.email, 'signin', account.email,
          handler);
    },

    showSignUpPage: function(email, opt_legacy, opt_parameters) {
      window.google.identitytoolkit.easyrp.param.notEmpty(email, 'email');
      if (window.google.identitytoolkit.easyrp.config.signupCallback) {
        var params = jQuery.extend({}, opt_parameters,
            {'email': email, 'legacy': !!opt_legacy});
        window.google.identitytoolkit.easyrp.config.signupCallback(params);
      } else {
        var url;
        if (!opt_legacy) {
          url = window.google.identitytoolkit.easyrp.config.federatedSignupUrl;
        }
        url = url || window.google.identitytoolkit.easyrp.config.signupUrl;
        url += (url.indexOf('?') >= 0) ? '&' : '?';
        url += 'email=' + encodeURIComponent(email);
        window.location.href = url;
      }
    },

    showHomePage: function(email, opt_legacy) {
      if (window.google.identitytoolkit.easyrp.config.loginOkCallback) {
        window.google.identitytoolkit.easyrp.config.loginOkCallback(email,
            !!opt_legacy);
      } else {
        window.location =
            window.google.identitytoolkit.easyrp.config.loginOkUrl;
      }
    },

    /**
     * Defines a general way to send notification to a widget .
     * @param {string} type The type of the notification.
     * @param {Object} params The parameters with the notification.
     */
    handleNotification: function(type, params) {
      if (type == 'federatedSuccess') {
        this.federatedLoginSuccess(params);
      } else if (type == 'federatedError') {
        this.closeAccountChooser();
        var errorType =
          (params && params.errorType) ? params.errorType.toLowerCase() : '';
        if (errorType == 'accountmismatch') {
          var domain = window.google.identitytoolkit.easyrp.util.getEmailDomain(
              params.inputEmail);
          var error = window.google.identitytoolkit.easyrp.messages.signInPage.
              accountMismatch;
          error = error.replace(/\%\%domain\%\%/g, domain);
          this.showAccountChooserError(error);
        } else if (errorType == 'invalidassertion') {
          var error = window.google.identitytoolkit.easyrp.messages.signInPage.
              invalidAssertion;
          this.showAccountChooserError(error);
        } else if (errorType == 'invalidassertionemail') {
          var error = window.google.identitytoolkit.easyrp.messages.signInPage.
              invalidAssertionEmail;
          this.showAccountChooserError(error);
        } else {
          var error = window.google.identitytoolkit.easyrp.messages.signInPage.
              unrecognizedErrorType;
          error = error.replace(/\%\%errorType\%\%/g, errorType);
          this.showAccountChooserError(error);
        }
      } else {
        var error = window.google.identitytoolkit.easyrp.messages.signInPage.
            unrecognizedNotification;
        error = error.replace(/\%\%notification\%\%/g, type);
        this.closeAccountChooser();
        this.showAccountChooserError(error);
      }
    },
    federatedLoginSuccess: function(result) {
      if (result && result.email) {
        var account = {email: result.email};
        if (result.displayName) {
          account.displayName = result.displayName;
        }
        if (result.photoUrl) {
          account.photoUrl = result.photoUrl;
        }
        account = jQuery.extend({}, this.cdsAccount_, account);
        if (result.registered) {
          window.google.identitytoolkit.easyrp.util.accountstorage.
              addAccount(account);
          if (!this.cds_) {
            this.closeAccountChooser();
            this.showHomePage(result.email);
          } else if (this.cdsAccount_) {
            if (this.shouldUpdateCdsAccount_(account)) {
              this.updateAccountToCds(account);
            } else {
              this.closeAccountChooser();
              this.showHomePage(result.email);
            }
          } else {
            this.storeAccountToCds(account);
          }
        } else {
          this.showSignUpPage(result.email);
        }
      } else {
        this.closeAccountChooser();
        this.showHomePage();
      }
    },

    /**
     * Returns the underline ApiHandler.
     * @return {window.google.identitytoolkit.easyrp.net.ApiHandler}
     *     The ApiHandler used.
     */
    getApiHandler: function() {
      return this.apiHandler_;
    },

    /**
     * Removes this widget. Widget life cycle method defined by jQuery.
     */
    destroy: function() {
      jQuery(this.element).empty();
      jQuery.Widget.prototype.destroy.call(this);
      this.destroyWidget_();
    }
  };

  jQuery.widget('ui.accountChooser', jQuery.ui.login, widget);
  jQuery.widget('ui.navbar', jQuery.ui.login, widget);
})(jQuery);

/**
 * Shows a saved account in the navbar of the account chooser.
 * @param {string} email The email of the account.
 * @param {number|string} opt_uuid The uuid of the widget to notify. This
 *    parameter is optional if only one widget instance in the page.
 */
window.google.identitytoolkit.showSavedAccount = function(email, opt_uuid) {
  window.google.identitytoolkit.easyrp.util.log('showSavedAccount: email=\'' +
      email + "\', uuid=\'" + opt_uuid + "\'");
  var widget = window.google.identitytoolkit.easyrp.util.getWidget_(opt_uuid);
  if (!widget) {
    window.google.identitytoolkit.easyrp.util
        .log('Failed to find widget with uuid \'' + opt_uuid + "\'.");
  } else {
    widget.showAccount(email);
  }
};

/**
 * Selects an account from the CDS.
 * @param {number|string} opt_uuid The uuid of the widget to notify. This
 *    parameter is optional if only one widget instance in the page.
 */
window.google.identitytoolkit.selectAccountFromCds = function(opt_uuid) {
  window.google.identitytoolkit.easyrp.util.log('selectAccountFromCds: ' +
      "uuid=\'" + opt_uuid + "\'");
  var widget = window.google.identitytoolkit.easyrp.util.getWidget_(opt_uuid);
  if (!widget) {
    window.google.identitytoolkit.easyrp.util
        .log('Failed to find widget with uuid \'' + opt_uuid + "\'.");
  } else {
    widget.selectAccountFromCds();
  }
};


/**
 * Stores an account into the CDS.
 * @param {Object|string} account The account or email to store.
 * @param {number|string} opt_uuid The uuid of the widget to notify. This
 *    parameter is optional if only one widget instance in the page.
 */
window.google.identitytoolkit.storeAccountToCds = function(account, opt_uuid) {
  if (typeof(account) == 'string') {
    account = {email: account};
  }
  window.google.identitytoolkit.easyrp.util.log('storeAccountToCds: email=\'' +
      account.email + "\', uuid=\'" + opt_uuid + "\'");
  var widget = window.google.identitytoolkit.easyrp.util.getWidget_(opt_uuid);
  if (!widget) {
    window.google.identitytoolkit.easyrp.util
        .log('Failed to find widget with uuid \'' + opt_uuid + "\'.");
  } else {
    widget.storeAccountToCds(account);
  }
};

/**
 * Updates an account in the CDS.
 * @param {Object|string} account The account or email to update.
 * @param {number|string} opt_uuid The uuid of the widget to notify. This
 *    parameter is optional if only one widget instance in the page.
 */
window.google.identitytoolkit.updateAccountToCds = function(account, opt_uuid) {
  if (typeof(account) == 'string') {
    account = {email: account};
  }
  window.google.identitytoolkit.easyrp.util.log('updateAccountToCds: email=\'' +
      account.email + "\', uuid=\'" + opt_uuid + "\'");
  var widget = window.google.identitytoolkit.easyrp.util.getWidget_(opt_uuid);
  if (!widget) {
    window.google.identitytoolkit.easyrp.util
        .log('Failed to find widget with uuid \'' + opt_uuid + "\'.");
  } else {
    widget.updateAccountToCds(account);
  }
};

/**
 * Sets configuration parameter: Git Client.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 * @private
 */
window.google.identitytoolkit.easyrp.config.setWidgetGitClient_ = function(
    value, key) {
  window.google.identitytoolkit.easyrp.param.notEmpty(value, key);
  window.google.identitytoolkit.easyrp.param.notEmptyFunction(
      value.createAuthUrl, 'gitClient.createAuthUrl');
  window.google.identitytoolkit.easyrp.param.notEmptyFunction(
      value.parseCreateAuthUrlResponse, 'gitClient.parseCreateAuthUrlResponse');
  window.google.identitytoolkit.easyrp.gitclient = value;
};

/**
 * Sets configuration parameter: login URL.
 * @param {string} value the parameter value.
 */
window.google.identitytoolkit.easyrp.config.setWidgetLoginUrl = function(
    value) {
  window.google.identitytoolkit.easyrp.config.loginUrl = value;
  window.google.identitytoolkit.easyrp.config.federatedLoginUrl = value;
};

/**
 * Sets configuration parameter: user status URL.
 * @param {string} value the parameter value.
 */
window.google.identitytoolkit.easyrp.config.setWidgetUserStatusUrl = function(
    value) {
  window.google.identitytoolkit.easyrp.config.userStatusUrl = value;
};

/**
 * Sets configuration parameter: sign up URL.
 * @param {string} value the parameter value.
 */
window.google.identitytoolkit.easyrp.config.setWidgetSignupUrl = function(
    value) {
  window.google.identitytoolkit.easyrp.config.signupUrl = value;
};

/**
 * Sets configuration parameter: federated sign up URL.
 * @param {string} value the parameter value.
 */
window.google.identitytoolkit.easyrp.config.setWidgetFederatedSignupUrl =
    function(value) {
  window.google.identitytoolkit.easyrp.config.federatedSignupUrl = value;
};

/**
 * Sets configuration parameter: sign up URL.
 * @param {string} value the parameter value.
 */
window.google.identitytoolkit.easyrp.config.setWidgetHomeUrl = function(value) {
  window.google.identitytoolkit.easyrp.config.loginOkUrl = value;
};

/**
 * Sets configuration parameter: nascar IDPs.
 * @param {string} value the parameter value.
 */
window.google.identitytoolkit.easyrp.config.setWidgetIdps = function(value) {
  window.google.identitytoolkit.easyrp.config.nascar.addAccountPage = value;
};

/**
 * Sets configuration parameter: tryFederatedFirst.
 * @param {string} value the parameter value.
 */
window.google.identitytoolkit.easyrp.config.setWidgetTryFederatedFirst =
    function(value) {
  window.google.identitytoolkit.easyrp.config.tryFederatedFirst = !!value;
};

/**
 * Sets configuration parameter: useCachedUserStatus.
 * @param {string} value the parameter value.
 */
window.google.identitytoolkit.easyrp.config.setWidgetUseCachedUserStatus =
    function(value) {
  window.google.identitytoolkit.easyrp.config.useCachedUserStatus = !!value;
};

/**
 * Sets configuration parameter: showAccountsMenu.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetShowAccountsMenu =
    function(value, key) {
  window.google.identitytoolkit.easyrp.config.showAccountsMenu = !!value;
};

/**
 * Sets configuration parameter: log out URL.
 * @param {string} value the parameter value.
 */
window.google.identitytoolkit.easyrp.config.setWidgetLogoutUrl = function(
    value) {
  window.google.identitytoolkit.easyrp.config.logoutUrl = value;
};

/**
 * Sets configuration parameter: log out handler.
 * @param {string} value the parameter value.
 */
window.google.identitytoolkit.easyrp.config.setWidgetLogoutHandler = function(
    value) {
  window.google.identitytoolkit.easyrp.config.logoutHandler = value;
};

/**
 * Sets configuration parameter: the redirect mode.
 * @param {boolean} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetUseFullPageRedirect =
    function(value, key) {
  window.google.identitytoolkit.easyrp.config.useFullPageRedirect = !!value;
};

/**
 * Sets configuration parameter: Whether to use the CDS.
 * @param {boolean} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetUseCds = function(value,
    key) {
  window.google.identitytoolkit.easyrp.config.useCds = !!value;
};

/**
 * Sets configuration parameter: hanlder for CDS empty response.
 * @param {function()} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setCdsEmptyResponseHandler =
    function(value, key) {
  window.google.identitytoolkit.easyrp.config.cdsEmptyResponseHandler = value;
};

/**
 * Sets configuration parameter: callback url for CDS client.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setCdsClientCallbackUrl = function(
    value, key) {
  window.google.identitytoolkit.easyrp.config.cdsClientCallbackUrl = value;
};

/**
 * Sets configuration parameter: ui configuration for CDS.
 * @param {Object} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setCdsUiConfig = function(value,
    key) {
  window.google.identitytoolkit.easyrp.config.cdsUiConfig = value;
};

/**
 * Sets configuration parameter: dropdown menu array.
 * @param {string} value the parameter value.
 */
window.google.identitytoolkit.easyrp.config.setWidgetDrowdownMenu = function(
    value) {
  if (jQuery.isArray(value)) {
    var menu = [];
    var item;
    for (var i = 0; i < value.length; i++) {
      item = value[i];
      if (item && item.label && (item.url || item.handler)) {
        menu[menu.length] = item;
      }
    }
    if (menu.length > 0) {
      window.google.identitytoolkit.easyrp.config.dropdownMenu = menu;
    } else {
      var msg = 'No valid dropdown menu found.';
      window.google.identitytoolkit.easyrp.util.log(msg);
    }
  }
};

/**
 * Sets configuration parameter: IDP configurations.
 * @param {Object} value the parameter value.
 * @param {string} key the parameter name.
 */
window.google.identitytoolkit.easyrp.config.setWidgetIdpConfig = function(
    value, key) {
  var idps = window.google.identitytoolkit.easyrp.config.idps;
  for (var idp in value) {
    if (!(idp in idps)) {
      // New IDP, check required fields.
      if (value[idp]['label'] && value[idp]['image'] && value[idp]['domain']) {
        idps[idp] = value[idp];
      } else {
        window.google.identitytoolkit.easyrp.util.log('Ignored IDP \'' + idp +
            '\': missing required fields.');
      }
    } else {
      // Existed IDP, merge fields.
      jQuery.extend(idps[idp], value[idp]);
    }
  }
};
