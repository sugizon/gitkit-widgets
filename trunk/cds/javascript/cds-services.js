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
 * @fileoverview Stores all the labels and messages of the widget. This file
 *               should be translated to support I18N.
 * @author guibinkong@google.com (Guibin Kong)
 */

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
 * @desc [accountchooser] Tooltip for close button of sharing account page.
 */
var MSG_SHARE_ACCOUNT_CLOSE = 'Close';
/**
 * @desc [accountchooser] Title for sharing account page.
 */
var MSG_SHARE_ACCOUNT_TITLE = 'Confirm Account';
/**
 * @desc [accountchooser] Tooltip for cancel button. If the user clicks this
 * button, this account won't be added to account chooser.
 */
var MSG_SHARE_ACCOUNT_CANCEL = 'Cancel';
/**
 * @desc [accountchooser] Tooltip for remove account button.
 */
var MSG_SHARE_ACCOUNT_REMOVE = 'Remove';
/**
 * @desc [accountchooser] Add account button label.
 */
var MSG_SHARE_ACCOUNT_ADD_ACCOUNT = 'Sign in to another account';
/**
 * @desc [accountchooser] This message gives the description of how to add an
 * account to the account chooser.
 */
var MSG_SHARE_ACCOUNT_HINT = 'Click your account to add it to this computer. ' +
    'This will reduce how frequently you are asked to reenter your email and ' +
    'password.';
/**
 * @desc [accountchooser] Hyperlink text which is shown at the bottom of the
 * page. Click on this link will bring the user to a web page which gives
 * detailed information about Account Chooser.
 */
var MSG_SHARE_ACCOUNT_LEARN_MORE = 'Learn more about this';
/**
 * @desc [accountchooser] Message shown on top of a list of accounts. It
 * separates two sets of accounts.
 */
var MSG_SHARE_ACCOUNT_OTHER_ACCOUNTS =
    'Other accounts in use on this computer.';

/**
 * @desc [accountchooser] Tooltip for close button of updating account page.
 */
var MSG_UPDATE_ACCOUNT_CLOSE = 'Close';
/**
 * @desc [accountchooser] Title for updating account page.
 */
var MSG_UPDATE_ACCOUNT_TITLE = 'Update Account';
/**
 * @desc [accountchooser] Tooltip for cancel button. If the user clicks this
 * button, this account won't be updated.
 */
var MSG_UPDATE_ACCOUNT_CANCEL = 'Cancel';
/**
 * @desc [accountchooser] This message gives the description of how to update
 * an account.
 */
var MSG_UPDATE_ACCOUNT_HINT =
    'Click your account to confirm you want to update it.';
/**
 * @desc [accountchooser] Cancel button label.
 */
var MSG_UPDATE_ACCOUNT_CANCEL_BUTTON = 'Or Cancel';

/**
 * @desc [accountchooser] Tooltip for close button of selecting account page.
 */
var MSG_SELECT_ACCOUNT_CLOSE = 'Close';
/**
 * @desc [accountchooser] Title for selecting account page.
 */
var MSG_SELECT_ACCOUNT_TITLE = 'Sign in to';
/**
 * @desc [accountchooser] Tooltip for remove account button.
 */
var MSG_SELECT_ACCOUNT_REMOVE = 'Remove';
/**
 * @desc [accountchooser] Add account button label.
 */
var MSG_SELECT_ACCOUNT_ADD_ACCOUNT = 'Sign in to another account';
/**
 * @desc [accountchooser] Hyperlink text which is shown at the bottom of the
 * page. Click on this link will bring the user to a web page which gives
 * detailed information about Account Chooser.
 */
var MSG_SELECT_ACCOUNT_LEARN_MORE = 'Learn more about this';
/**
 * @desc [accountchooser] This message is shown after the user deletes an
 * account from the Account Chooser. It reminds the user even if he/she removes
 * the account here, the account may still be remembered by some websites.
 */
var MSG_SELECT_ACCOUNT_DELETE_REMINDER = 'Account removed. On some websites ' +
    'you may still be logged into this account, or those sites may still ' +
    'remember you used this account.';

/**
 * @desc [accountchooser] Tooltip for close button of managing account page.
 */
var MSG_MANAGE_ACCOUNT_CLOSE = 'Close';
/**
 * @desc [accountchooser] Title for managing account page.
 */
var MSG_MANAGE_ACCOUNT_TITLE = 'Manage Accounts';
/**
 * @desc [accountchooser] Tooltip for remove account button.
 */
var MSG_MANAGE_ACCOUNT_REMOVE = 'Remove';
/**
 * @desc [accountchooser] Hyperlink text which is shown at the bottom of the
 * page. Click on this link will bring the user to a web page which gives
 * detailed information about Account Chooser.
 */
var MSG_MANAGE_ACCOUNT_LEARN_MORE = 'Learn more about this';

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
    'the identifier povider. You can try again or select another account.';
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
  noPhoto: 'https://www.google.com/uds/modules/identitytoolkit/image/generic_avatar.png',
  darkKeyHole: 'https://www.google.com/uds/modules/identitytoolkit/image/signin-keyhole-dark.png',
  lightKeyHole: 'https://www.google.com/uds/modules/identitytoolkit/image/signin-keyhole-light.png',
  downArrow: 'https://www.google.com/uds/modules/identitytoolkit/image/arrow-dark.gif',
  gmail: 'https://www.google.com/uds/modules/identitytoolkit/image/gmail.png',
  googleapps: 'https://www.google.com/uds/modules/identitytoolkit/image/googleapps.png',
  aol: 'https://www.google.com/uds/modules/identitytoolkit/image/aol.png',
  yahoo: 'https://www.google.com/uds/modules/identitytoolkit/image/yahoo.png',
  hotmail: 'https://www.google.com/uds/modules/identitytoolkit/image/hotmail.png'
});

/**
 * Stores all the labels of the widget.
 */
window.google.identitytoolkit.easyrp.labels = jQuery.extend(
    window.google.identitytoolkit.easyrp.labels || {}, {
  navbarPage: {
    signIn: MSG_NAVBAR_SIGN_IN,
    switchAccount: MSG_NAVBAR_SWITCH_ACCOUNT,
    signOut: MSG_NAVBAR_SIGN_OUT
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

  shareAccountPage: {
    closeIcon: window.google.identitytoolkit.easyrp.images.close,
    close: MSG_SHARE_ACCOUNT_CLOSE,
    title: MSG_SHARE_ACCOUNT_TITLE,
    cancelTitle: MSG_SHARE_ACCOUNT_CANCEL,
    removeTitle: MSG_SHARE_ACCOUNT_REMOVE,
    deleteReminder: MSG_SELECT_ACCOUNT_DELETE_REMINDER,
    addAccount: MSG_SHARE_ACCOUNT_ADD_ACCOUNT,
    hint: MSG_SHARE_ACCOUNT_HINT,
    acSiteText: MSG_SHARE_ACCOUNT_LEARN_MORE,
    acSiteUrl: 'https://sites.google.com/site/oidfacwg/aclearnmore',
    otherAccounts: MSG_SHARE_ACCOUNT_OTHER_ACCOUNTS,
    emptyAccounts: 'No account in CDS now.'
  },

  updateAccountPage: {
    closeIcon: window.google.identitytoolkit.easyrp.images.close,
    close: MSG_UPDATE_ACCOUNT_CLOSE,
    title: MSG_UPDATE_ACCOUNT_TITLE,
    cancelTitle: MSG_UPDATE_ACCOUNT_CANCEL,
    hint: MSG_UPDATE_ACCOUNT_HINT,
    cancel: MSG_UPDATE_ACCOUNT_CANCEL_BUTTON
  },

  selectAccountPage: {
    closeIcon: window.google.identitytoolkit.easyrp.images.close,
    close: MSG_SELECT_ACCOUNT_CLOSE,
    title: MSG_SELECT_ACCOUNT_TITLE,
    removeTitle: MSG_SELECT_ACCOUNT_REMOVE,
    deleteReminder: MSG_SELECT_ACCOUNT_DELETE_REMINDER,
    addAccount: MSG_SELECT_ACCOUNT_ADD_ACCOUNT,
    acSiteText: MSG_SELECT_ACCOUNT_LEARN_MORE,
    acSiteUrl: 'https://sites.google.com/site/oidfacwg/aclearnmore'
  },

  manageAccountPage: {
    closeIcon: window.google.identitytoolkit.easyrp.images.close,
    close: MSG_MANAGE_ACCOUNT_CLOSE,
    title: MSG_MANAGE_ACCOUNT_TITLE,
    removeTitle: MSG_MANAGE_ACCOUNT_REMOVE,
    deleteReminder: MSG_SELECT_ACCOUNT_DELETE_REMINDER,
    acSiteText: MSG_MANAGE_ACCOUNT_LEARN_MORE,
    acSiteUrl: 'http://accountchooser.com/how.html'
  },

  addAccountPage: {
    title: MSG_ADD_ACCOUNT_TITLE,
    pick: MSG_ADD_ACCOUNT_PICK_1,
    email: MSG_ADD_ACCOUNT_EMAIL_1,
    next: MSG_ADD_ACCOUNT_NEXT_1,
    acSiteText: MSG_ADD_ACCOUNT_MORE_LINK,
    acSiteUrl: 'https://sites.google.com/site/oidfacwg/aclearnmore'
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
 * @fileoverview Configuration parameters for the login widget.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Namespace declaration.
 */
window.google.identitytoolkit.easyrp.config =
    window.google.identitytoolkit.easyrp.config || {};


/**
 * @fileoverview The configuration parameters for the Identifier Providers.
 * @author guibinkong@google.com (Guibin Kong)
 */

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
 * @fileoverview Configuration parameters for the popup window.
 * @author guibinkong@google.com (Guibin Kong)
 */

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
 * @fileoverview Configuration parameters for the account chooser.
 * @author guibinkong@google.com (Guibin Kong)
 */

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
 * @namespace The configuration parameters for Nascar lists.
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
 * @fileoverview A template to set configuration parameters. A widget should
 * overwrite some of the methods that starts with 'setWidget' to actually
 * support these configuration parameters.
 * @author guibinkong@google.com (Guibin Kong)
 */

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
  if (window.googleapis) {
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
  if (window.googleapis) {
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
 * Shortcut method for
 * {@code window.google.identitytoolkit.easyrp.config.setConfig}
 * @param {Object} config The configuration parameter key-value pairs.
 */
window.google.identitytoolkit.setConfig = function(config) {
  window.google.identitytoolkit.easyrp.config.setConfig(config);
};


/**
 * @fileoverview Defines the Page class, which is super class for all pages.
 * @author guibinkong@google.com (Guibin Kong)
 */

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
 * @fileoverview Contains many reusable methods to create UI fragments. They can
 *               be used to crate the pages on the widget.
 * @author guibinkong@google.com (Guibin Kong)
 */

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
 * @fileoverview Defines the UI controls used by account chooser login widget.
 * @author guibinkong@google.com (Guibin Kong)
 */

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
 * @fileoverview Defines the UI controls used by CDS widget.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Creates the account box.
 * @param {string} account The account object.
 * @param {url} defaultPhotoUrl The default photo URL.
 * @param {string} handler The handler function when the account is clicked.
 * @param {url} removeIconUrl The URL of the remove user icon.
 * @param {string} removeHandler The handler when user click on remove button.
 * @param {string} removeTitle The tooltip for the remove button.
 * @param {boolean=} opt_showAllInfo Whether to show all info of an account.
 * @return {Element} The created element.
 */
window.google.identitytoolkit.easyrp.Page.prototype.createAccountBox =
    function(account, defaultPhotoUrl, handler, removeIconUrl, removeHandler,
    removeTitle, opt_showAllInfo) {
  window.google.identitytoolkit.easyrp.param.notNull(account, 'account');
  window.google.identitytoolkit.easyrp.param.notEmpty(account.email,
      'account.email');
  window.google.identitytoolkit.easyrp.param.notEmpty(defaultPhotoUrl,
      'defaultPhotoUrl');
  window.google.identitytoolkit.easyrp.param.notEmpty(handler, 'handler');
  window.google.identitytoolkit.easyrp.param.notEmpty(removeHandler,
      'removeHandler');
  window.google.identitytoolkit.easyrp.param.notEmpty(removeTitle,
      'removeTitle');

  var title = account.email;
  if (account.providerId) {
    title += ' (' + account.providerId + ')';
  }
  var li = jQuery('<li>').addClass('widget-account').attr('title', title);
  var img = jQuery('<img>').attr('src', account.photoUrl || defaultPhotoUrl).
      addClass('widget-account-photo').appendTo(li);
  img.error(function() {
    img.attr('src', defaultPhotoUrl);
  });

  var accountInfo = jQuery('<p>').appendTo(li);
  if (account.displayName) {
    accountInfo.append(jQuery('<strong>').addClass('widget-account-name').
        html(account.displayName));
  } else {
    accountInfo.addClass('widget-email-only');
  }
  accountInfo.append(jQuery('<span>').addClass('widget-account-email').
      html(account.email));
  if (opt_showAllInfo && account.providerId) {
    accountInfo.append(jQuery('<span>').addClass('widget-account-idp').
      html(account.providerId));
  }

  var removeLink = jQuery('<a>').addClass('widget-account-remove').
      attr('title', removeTitle).attr('href', 'javascript: void(0)').
      appendTo(li);
  removeLink.append(jQuery('<img>').attr('src', removeIconUrl));
  var self = this;
  li.click(function() {
    self[handler].call(self, account);
    return false;
  });
  removeLink.click(function() {
    self[removeHandler].call(self, account);
    return false;
  });
  return li;
};


/**
 * @fileoverview Defines the UI controls used by navbar widget.
 * @author guibinkong@google.com (Guibin Kong)
 */

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
 * @fileoverview Contains many reusable methods to create UI fragments. They can
 *               be used to create the pages on the widget.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Name space for the UI controls.
 */
window.google.identitytoolkit.easyrp.page =
    window.google.identitytoolkit.easyrp.page || {};


/**
 * @fileoverview Defines Share Account Page.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Class for the Share Account page.
 * @constructor
 * @extends {window.google.identitytoolkit.easyrp.Page}
 */
window.google.identitytoolkit.easyrp.page.ShareAccountPage = function() {
};
window.google.identitytoolkit.easyrp.page.ShareAccountPage.inheritsFrom(
    window.google.identitytoolkit.easyrp.Page);

/**
 * Renders the Account Chooser page.
 * @param {Element} container The rootDiv of the widget.
 * @param {object} account The account to share.
 * @param {Array.<Object>=} opt_accounts An array of accounts to be rendered.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 */
window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.render =
    function(container, account, opt_accounts, opt_resource,
        opt_showCloseIcon) {
  this.account_ = account;
  if (opt_accounts) {
    this.accounts_ = opt_accounts;
  } else {
    this.accounts_ = [];
  }
  var resource = opt_resource;
  if (!resource) {
    resource = window.google.identitytoolkit.easyrp.labels.shareAccountPage;
  }
  this.parentClass.render.call(this, container, resource,
      opt_showCloseIcon !== false);

  this.render_();
};

/**
 * Really renders the page.
 * @private
 */
window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.render_ =
    function() {
  this.createHeader(this.resource_.title, this.showCloseIcon_,
      this.resource_.closeIcon, 'onCloseIconClicked', this.resource_.close).
      appendTo(this.container_);
  var main = jQuery('<div>').addClass('widget-accounts widget-main').
      appendTo(this.container_);
  this.appendErrorDiv(main).hide();
  var message = jQuery('<div>').addClass('widget-confirm').appendTo(main);
  var hint = jQuery('<p>').html(this.resource_.hint).appendTo(message);
  var addAccount = jQuery('<ol>').appendTo(message);
  var defaultPhotoUrl =
      window.google.identitytoolkit.easyrp.config.defaultPhotoUrl;
  var removeIconUrl =
      window.google.identitytoolkit.easyrp.images.removeIconUrl;
  this.createAccountBox(this.account_, defaultPhotoUrl,
      'onShareConfirmedClicked', removeIconUrl, 'onShareCancelClicked',
      this.resource_.cancelTitle, true).appendTo(addAccount);
  if (this.accounts_.length) {
    jQuery('<div>').addClass('widget-other-accounts').append(
        jQuery('<p>').html(this.resource_.otherAccounts)).appendTo(main);
    //old list
    var accounts = jQuery('<ol>').appendTo(main);
    for (var i = 0; i < this.accounts_.length; i++) {
      var account = this.accounts_[i];
      if (account && account.email) {
        this.createAccountBox(account, defaultPhotoUrl, 'onAccountClicked',
            removeIconUrl, 'onRemoveAccountClicked',
            this.resource_.removeTitle, true).appendTo(accounts);
      }
    }
  } else {
    main.addClass('widget-accounts-empty');
  }
  var footer = jQuery('<div>').addClass('widget-footer').appendTo(
      this.container_);
  jQuery('<a>').attr('href', this.resource_.acSiteUrl).attr(
      'target', '_blank').html(this.resource_.acSiteText).appendTo(footer);
};

/**
 * Clears the error message.
 */
window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    clearError = function() {
  jQuery('.widget-error', this.container_).hide();
  this.getErrorElement().empty();
};

/**
 * Checks whether an error message is showing?
 * @return {boolean} {@code true} if an error message is showing,
 *     {@code false} otherwise.
 */
window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    isShowingError = function() {
  return jQuery('.widget-error', this.container_).css('display') != 'none';
};

/**
 * Shows an error message.
 * @param {string} errorHtml The error message (can use HTML tags).
 */
window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    setError = function(errorHtml) {
  jQuery('.widget-error', this.container_).show();
  this.getErrorElement().html(errorHtml);
};

/**
 * @return {Element} Returns DOM element for the close icon.
 */
window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    getCloseIconElement = function() {
  return jQuery('.widget-close-icon', this.container_);
};

/**
 * @return {Element} Returns DOM element for the error message.
 */
window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    getErrorElement = function() {
  return jQuery('.widget-error p', this.container_);
};

window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    getAccountElements = function() {
  return jQuery('.widget-account a', this.container_);
};

window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    getAccountElement = function(index) {
  window.google.identitytoolkit.easyrp.param.notNull(index, 'index');
  return jQuery('li.widget-account:eq(' + index + ')', this.container_);
};

window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    getAddAccountElement = function() {
  return jQuery('.widget-account-add', this.container_);
};

window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    onCloseIconClicked = function() {
};

window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    onAccountClicked = function(account) {
};

window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    onAddAccountClicked = function() {
};

window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    onRemoveAccountClicked = function(account) {
};

window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    onShareConfirmedClicked = function(account) {
};

window.google.identitytoolkit.easyrp.page.ShareAccountPage.prototype.
    onShareCancelClicked = function(account) {
};


/**
 * @fileoverview Defines Select Account Page.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Class for the Select Account page.
 * @constructor
 * @extends {window.google.identitytoolkit.easyrp.Page}
 */
window.google.identitytoolkit.easyrp.page.SelectAccountPage = function() {
};
window.google.identitytoolkit.easyrp.page.SelectAccountPage.inheritsFrom(
    window.google.identitytoolkit.easyrp.Page);

/**
 * Renders the Select Account page.
 * @param {Element} container The rootDiv of the widget.
 * @param {Array.<Object>=} opt_localAccounts An array of accounts passed in by
 *     the calling site.
 * @param {Array.<Object>=} opt_cdsAccounts An array of accounts from CDS.
 * @param {boolean=} opt_showAllInfo Whether to show all info of an account.
 * @param {string=} opt_domain The domain name of the calling site. If provided
 *     and the title text contains placeholder '%%domain%%' then it'll be
 *     replaced by the domain.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 */
window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.render =
    function(container, opt_localAccounts, opt_cdsAccounts, opt_showAllInfo,
    opt_domain, opt_resource, opt_showCloseIcon) {
  this.localAccounts_ = opt_localAccounts || [];
  this.cdsAccounts_ = opt_cdsAccounts || [];
  var resource = opt_resource;
  if (!resource) {
    resource = window.google.identitytoolkit.easyrp.labels.selectAccountPage;
  }
  this.parentClass.render.call(this, container, resource,
      opt_showCloseIcon !== false);

  this.showAllInfo = !!opt_showAllInfo;
  this.siteDomain = opt_domain || '';
  this.render_();
};

/**
 * Really renders the page.
 * @private
 */
window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.render_ =
    function() {
  var header = this.createHeader(this.resource_.title, this.showCloseIcon_,
      this.resource_.closeIcon, 'onCloseIconClicked', this.resource_.close).
      appendTo(this.container_);
  if (this.siteDomain) {
    jQuery('<h3>').html(this.siteDomain).appendTo(header);
  }
  var main = jQuery('<div>').addClass('widget-accounts widget-main').
      appendTo(this.container_);
  this.appendErrorDiv(main).hide();
  var defaultPhotoUrl =
      window.google.identitytoolkit.easyrp.config.defaultPhotoUrl;
  var removeIconUrl =
      window.google.identitytoolkit.easyrp.images.removeIconUrl;
  if (this.localAccounts_.length) {
    var accounts = jQuery('<ol>').appendTo(main);
    for (var i = 0; i < this.localAccounts_.length; i++) {
      var account = this.localAccounts_[i];
      if (account && account.email) {
        this.createAccountBox(account, defaultPhotoUrl, 'onAccountClicked',
            removeIconUrl, 'onRemoveAccountClicked',
            this.resource_.removeTitle, this.showAllInfo).appendTo(accounts);
      }
    }
  }
  if (this.cdsAccounts_.length) {
    var accounts = jQuery('<ol>').appendTo(main);
    for (var i = 0; i < this.cdsAccounts_.length; i++) {
      var account = this.cdsAccounts_[i];
      if (account && account.email) {
        this.createAccountBox(account, defaultPhotoUrl, 'onAccountClicked',
            removeIconUrl, 'onRemoveAccountClicked',
            this.resource_.removeTitle, this.showAllInfo).appendTo(accounts);
      }
    }
    if (this.localAccounts_.length) {
      accounts.addClass('widget-cds-accounts');
    }
  }
  if (!this.localAccounts_.length && !this.cdsAccounts_.length) {
    main.addClass('widget-accounts-empty');
  }
  var addAccountBox = jQuery('<div>').addClass('widget-add-account-box').
      appendTo(main);
  this.createKeyholeButton(
      window.google.identitytoolkit.easyrp.config.buttonKeyholeUrl,
      this.resource_.addAccount, 'onAddAccountClicked', 'widget-account-add').
      appendTo(addAccountBox);
  var footer = jQuery('<div>').addClass('widget-footer').appendTo(
      this.container_);
  jQuery('<a>').attr('href', this.resource_.acSiteUrl).attr(
      'target', '_blank').html(this.resource_.acSiteText).appendTo(footer);
};

/**
 * Clears the error message.
 */
window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    clearError = function() {
  jQuery('.widget-error', this.container_).hide();
  this.getErrorElement().empty();
};

/**
 * Checks whether an error message is showing?
 * @return {boolean} {@code true} if an error message is showing,
 *     {@code false} otherwise.
 */
window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    isShowingError = function() {
  return jQuery('.widget-error', this.container_).css('display') != 'none';
};

/**
 * Shows an error message.
 * @param {string} errorHtml The error message (can use HTML tags).
 */
window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    setError = function(errorHtml) {
  jQuery('.widget-error', this.container_).show();
  this.getErrorElement().html(errorHtml);
};

/**
 * @return {Element} Returns DOM element for the close icon.
 */
window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    getCloseIconElement = function() {
  return jQuery('.widget-close-icon', this.container_);
};

/**
 * @return {Element} Returns DOM element for the error message.
 */
window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    getErrorElement = function() {
  return jQuery('.widget-error p', this.container_);
};

window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    getAccountElements = function() {
  return jQuery('.widget-account a', this.container_);
};

window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    getAccountElement = function(index) {
  window.google.identitytoolkit.easyrp.param.notNull(index, 'index');
  return jQuery('li.widget-account:eq(' + index + ')', this.container_);
};

window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    getAddAccountElement = function() {
  return jQuery('.widget-account-add', this.container_);
};

window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    onCloseIconClicked = function() {
};

window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    onAccountClicked = function(account) {
};

window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    onAddAccountClicked = function() {
};

window.google.identitytoolkit.easyrp.page.SelectAccountPage.prototype.
    onRemoveAccountClicked = function(account) {
};


/**
 * @fileoverview Defines Update Account Page.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Class for the Update Account page.
 * @constructor
 * @extends {window.google.identitytoolkit.easyrp.Page}
 */
window.google.identitytoolkit.easyrp.page.UpdateAccountPage = function() {
};
window.google.identitytoolkit.easyrp.page.UpdateAccountPage.inheritsFrom(
    window.google.identitytoolkit.easyrp.Page);

/**
 * Renders the Update Account page.
 * @param {Element} container The rootDiv of the widget.
 * @param {object} account The account to update.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 */
window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.render =
    function(container, account, opt_resource, opt_showCloseIcon) {
  this.account_ = account;
  var resource = opt_resource;
  if (!resource) {
    resource = window.google.identitytoolkit.easyrp.labels.updateAccountPage;
  }
  this.parentClass.render.call(this, container, resource,
      opt_showCloseIcon !== false);

  this.render_();
};

/**
 * Really renders the page.
 * @private
 */
window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.render_ =
    function() {
  this.createHeader(this.resource_.title, this.showCloseIcon_,
      this.resource_.closeIcon, 'onCloseIconClicked', this.resource_.close).
      appendTo(this.container_);
  var main = jQuery('<div>').addClass('widget-accounts widget-main').
      appendTo(this.container_);
  var message = jQuery('<div>').addClass('widget-confirm').appendTo(main);
  jQuery('<p>').html(this.resource_.hint).appendTo(message);
  var updateAccount = jQuery('<ol>').appendTo(message);
  var defaultPhotoUrl =
      window.google.identitytoolkit.easyrp.config.defaultPhotoUrl;
  var removeIconUrl =
      window.google.identitytoolkit.easyrp.images.removeIconUrl;
  this.createAccountBox(this.account_, defaultPhotoUrl,
      'onUpdateConfirmedClicked', removeIconUrl, 'onUpdateCancelClicked',
      this.resource_.cancelTitle, true).appendTo(updateAccount);
  var cancelDiv = jQuery('<div>').addClass('widget-confirm-small').
      appendTo(message);
  var cancel = jQuery('<a>').attr('href', 'javascript: void(0)').
      html(this.resource_.cancel).appendTo(cancelDiv);
  var self = this;
  cancel.click(function() {
    self['onUpdateCancelClicked'].call(self);
    return false;
  });
  var footer = jQuery('<div>').addClass('widget-footer').appendTo(
      this.container_);
  jQuery('<a>').attr('href', this.resource_.acSiteUrl).attr(
      'target', '_blank').html(this.resource_.acSiteText).appendTo(footer);
};

/**
 * Clears the error message.
 */
window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.
    clearError = function() {
  jQuery('.widget-error', this.container_).hide();
  this.getErrorElement().empty();
};

/**
 * Checks whether an error message is showing?
 * @return {boolean} {@code true} if an error message is showing,
 *     {@code false} otherwise.
 */
window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.
    isShowingError = function() {
  return jQuery('.widget-error', this.container_).css('display') != 'none';
};

/**
 * Shows an error message.
 * @param {string} errorHtml The error message (can use HTML tags).
 */
window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.
    setError = function(errorHtml) {
  jQuery('.widget-error', this.container_).show();
  this.getErrorElement().html(errorHtml);
};

/**
 * @return {Element} Returns DOM element for the close icon.
 */
window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.
    getCloseIconElement = function() {
  return jQuery('.widget-close-icon', this.container_);
};

/**
 * @return {Element} Returns DOM element for the error message.
 */
window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.
    getErrorElement = function() {
  return jQuery('.widget-error p', this.container_);
};

window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.
    getAccountElement = function(index) {
  window.google.identitytoolkit.easyrp.param.notNull(index, 'index');
  return jQuery('li.widget-account:eq(' + index + ')', this.container_);
};

window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.
    getCancelElement = function() {
  return jQuery('.widget-confirm-small a');
};

window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.
    onCloseIconClicked = function() {
};

window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.
    onUpdateConfirmedClicked = function(account) {
};

window.google.identitytoolkit.easyrp.page.UpdateAccountPage.prototype.
    onUpdateCancelClicked = function(account) {
};


/**
 * @fileoverview Defines the Service base class.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * @class Common classes for all services of the CDS.
 * @constructor
 */
window.google.identitytoolkit.easyrp.Service = function() {
};

/**
 * Sets CDS configuration to the service.
 * @param {object} cdsConfig The configuration of the CDS.
 */
window.google.identitytoolkit.easyrp.Service.prototype.setCdsConfig =
    function(cdsConfig) {
  this.cdsConfig_ = cdsConfig;
};

/**
 * Sets the container HTML element that render the UI.
 * @param {element} container The container HTML element.
 */
window.google.identitytoolkit.easyrp.Service.prototype.setContainer =
    function(container) {
  this.container_ = container;
};

/**
 * Checks the type of Request.
 * @param {class} expectType The expected type.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 * @return {boolean} Returns true if the type is same as expected.
 *     Otherwise return false, and send back error response.
 * @private
 */
window.google.identitytoolkit.easyrp.Service.prototype.checkRequestType_ =
    function(expectType, opt_notToClient) {
  var error = null;
  if (! this.request_ instanceof
      window.google.identitytoolkit.easyrp.rpc.Request) {
    error = {
      code: -32600,
      message: 'Invalid Request',
      data: 'Parameter must be a Request type.'
    };
  } else if (! this.request_ instanceof expectType) {
    error = {
      code: -32600,
      message: 'Invalid Request',
      data: 'Error request type: expect type is {' + expectType + '}.'
    };
  }
  if (error) {
    this.sendErrorResponse_(error, opt_notToClient);
    return false;
  }
  return true;
};

/**
 * Executes the service with the input request object.
 * @param {window.google.identitytoolkit.easyrp.rpc.Request} request
 *     The request object.
 * @param {string} clientDomain The domain of the client.
 */
window.google.identitytoolkit.easyrp.Service.prototype.executeRequest =
    function(request, clientDomain) {
  if (request) {
    this.request_ = request;
    this.clientDomain_ = clientDomain;
    this.execute();
  } else {
    window.google.identitytoolkit.easyrp.util.log(
        'Empty request received, ignored.');
  }
};

/**
 * Executes the service with the input request object.
 */
window.google.identitytoolkit.easyrp.Service.prototype.execute =
    function() {
  var error = {
    code: -32601,
    message: 'Method not found',
    data: 'Unimplemented \'execute\' method!'
  };
  this.sendErrorResponse_(error);
};

/**
 * Sends back Response to client.
 * @param {window.google.identitytoolkit.easyrp.rpc.Response} response
 *     A Response object wraps the result of the Request.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 * @private
 */
window.google.identitytoolkit.easyrp.Service.prototype.sendResponse_ =
    function(response, opt_notToClient) {
  window.google.identitytoolkit.easyrp.rpc.callClient(response);
  if (!opt_notToClient) {
    this.goToClient();
  }
};

/**
 * Sends an error Response to client.
 * @param {object} error error information as defined by JSON-PRC.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 * @private
 */
window.google.identitytoolkit.easyrp.Service.prototype.sendErrorResponse_ =
    function(error, opt_notToClient) {
  var response = new window.google.identitytoolkit.easyrp.rpc.Response(
      this.request_.getId(), undefined, error);
  this.sendResponse_(response, opt_notToClient);
};

/**
 * Sends a Response with result to client.
 * @param {string|number|object} result The result object.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 * @private
 */
window.google.identitytoolkit.easyrp.Service.prototype.sendDoneResponse_ =
    function(result, opt_notToClient) {
  var response = new window.google.identitytoolkit.easyrp.rpc.Response(
      this.request_.getId(), result);
  this.sendResponse_(response, opt_notToClient);
};

/**
 * Sends a Response to indicate whether user store the account.
 * @param {boolean} stored whether user store the account.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 */
window.google.identitytoolkit.easyrp.Service.prototype.sendStoreResponse =
    function(stored, opt_notToClient) {
  this.sendDoneResponse_({stored: stored}, opt_notToClient);
};

/**
 * Sends a Response to indicate user select an account entry.
 * @param {object} account the account user selected.
 * @param {object} opt_idpAssertion the IDP assertion with the selected account.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 */
window.google.identitytoolkit.easyrp.Service.prototype.sendSelectResponse =
    function(account, opt_idpAssertion, opt_notToClient) {
  this.sendDoneResponse_({account: account, idpAssertion: opt_idpAssertion},
      opt_notToClient);
};

/**
 * Sends a Response to indicate user click the 'add account' button.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 */
window.google.identitytoolkit.easyrp.Service.prototype.sendAddAccountResponse =
    function(opt_notToClient) {
  this.sendDoneResponse_({addAccount: true}, opt_notToClient);
};

/**
 * Sends a Response to indicate whether the user update the account.
 * @param {boolean} updated whether the user update the account.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 */
window.google.identitytoolkit.easyrp.Service.prototype.sendUpdateResponse =
    function(updated, opt_notToClient) {
  this.sendDoneResponse_({updated: updated}, opt_notToClient);
};

/**
 * Returns to the client.
 */
window.google.identitytoolkit.easyrp.Service.prototype.goToClient = function() {
  var request = this.request_;
  this.request_ = null;
  this.clientDomain_ = null;
  if (!this.cdsConfig_.popupMode) {
    window.location = request.params_.clientConfig.clientCallbackUrl;
  } else if (!request.params_.clientConfig.keepPopup) {
    window.close();
  }
};

/**
 * Gets the configuration value from the Request.
 * @param {string} config The name of the configuration.
 * @return {string|object} The value of the configuration.
 */
window.google.identitytoolkit.easyrp.Service.prototype.getClientConfigValue =
    function(config) {
  return config && this.request_ && this.request_.params_ &&
      this.request_.params_.clientConfig &&
      this.request_.params_.clientConfig[config];
};


/**
 * @fileoverview Implementation for the Store Service.
 * @author guibinkong@google.com (Guibin Kong)
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * @class Class for Store Service.
 * @constructor
 * @extends {window.google.identitytoolkit.easyrp.Service}
 */
window.google.identitytoolkit.easyrp.StoreService = function() {
};
window.google.identitytoolkit.easyrp.StoreService.inheritsFrom(
    window.google.identitytoolkit.easyrp.Service);

/**
 * Executes the service with the input request object.
 */
window.google.identitytoolkit.easyrp.StoreService.prototype.execute =
    function() {
  if (!this.checkRequestType_(
      window.google.identitytoolkit.easyrp.rpc.StoreRequest)) {
    return;
  }
  var account = this.request_.params_.account;
  var cdsAccounts = window.google.identitytoolkit.easyrp.util.
      accountstorage.readAccounts();
  for (var i = 0; i < cdsAccounts.length; i++) {
    if (window.google.identitytoolkit.easyrp.util.accountstorage.
        matchAccount_(cdsAccounts[i], account.email, account.providerId)) {
      this.sendStoreResponse(true);
      return;
    }
  }

  // Avoid duplication of accounts.
  var localAccounts = this.removeDuplicatedAccounts_(account,
      this.request_.params_.localAccounts, cdsAccounts);

  this.showShareAccountPage_(account, localAccounts, cdsAccounts);
};

/**
 * Gets assertions for the account.
 * @param {object} account The account to get assertion.
 * @private
 */
window.google.identitytoolkit.easyrp.StoreService.prototype.getAssertion_ =
    function(account) {
  var idp = window.google.identitytoolkit.easyrp.rpc.isSupportedIdp(account);
  if (!idp) {
    this.sendSelectResponse(account);
    return;
  }

  var self = this;
  var callback = function(response) {
    if (response && response.getResult()) {
      self.sendSelectResponse(account, response.getResult().idpAssertion);
    } else {
      self.sendSelectResponse(account);
    }
  };
  var timeout = function() {
    self.sendSelectResponse(account);
  };
  var request = new window.google.identitytoolkit.easyrp.rpc.IdpAuthRequest(
      account);
  window.google.identitytoolkit.easyrp.rpc.callIdp(idp, request, callback,
      timeout);
};

/**
 * Shows the account chooser page.
 * @param {object} account The account to be stored.
 * @param {Array.<object>} localAccounts The account list passed in by the
 *   calling site.
 * @param {Array.<object>} cdsAccounts The account list stored in the CDS.
 * @private
 */
window.google.identitytoolkit.easyrp.StoreService.prototype.
    showShareAccountPage_ = function(account, localAccounts, cdsAccounts) {
  this.container_.empty().addClass('widget-panel-chooser');
  var self = this;
  this.page_ =
    new window.google.identitytoolkit.easyrp.page.ShareAccountPage();

  this.page_.onShareConfirmedClicked = function() {
    window.google.identitytoolkit.easyrp.util.accountstorage.addAccount(
        account);
    self.sendStoreResponse(true);
  },

  this.page_.onShareCancelClicked = function() {
    self.sendStoreResponse(false);
  },

  this.page_.onAccountClicked = function(clickedAccount) {
    window.google.identitytoolkit.easyrp.util.accountstorage.addAccount(
        account);
    self.getAssertion_(clickedAccount);
  };

  this.page_.onRemoveAccountClicked = function(removedAccount) {
    // Remove this account if it is in the CDS.
    window.google.identitytoolkit.easyrp.util.accountstorage.removeAccount(
        removedAccount);
    cdsAccounts = window.google.identitytoolkit.easyrp.util.accountstorage.
        readAccounts();
    // Remove this account if it is passed in by the calling site.
    self.removeAccountFromList_(removedAccount, localAccounts);
    // Avoid duplication.
    localAccounts = self.removeDuplicatedAccounts_(account, localAccounts,
        cdsAccounts);

    self.showShareAccountPage_(account, localAccounts, cdsAccounts);
    self.page_.setError(window.google.identitytoolkit.easyrp.labels.
        shareAccountPage.deleteReminder);
  };

  this.page_.render(this.container_, account, localAccounts.concat(cdsAccounts),
      undefined, false);
};

/**
 * Removes an account from a list.
 * @param {object} account The account to be removed.
 * @param {Array.<object>} accountsList The account list.
 * @private
 */
window.google.identitytoolkit.easyrp.StoreService.prototype.
    removeAccountFromList_ = function(account, accountsList) {
  for (var i = 0; i < accountsList.length; i++) {
    if (window.google.identitytoolkit.easyrp.util.accountstorage.
        matchAccount_(accountsList[i], account.email, account.providerId)) {
      accountsList.splice(i, 1);
      break;
    }
  }
};

/**
 * Removes the duplicated accounts in the account list passed in by the calling
 * site from the accounts stored in the CDS and the to-be-stored account.
 * @param {object} account The account to be stored.
 * @param {Array.<object>} localAccounts The account list passed in by the
 *   calling site.
 * @param {Array.<object>} cdsAccounts The account list stored in the CDS.
 * @return {Array.<object>} The deduplicated account list of the calling site.
 * @private
 */
window.google.identitytoolkit.easyrp.StoreService.prototype.
    removeDuplicatedAccounts_ = function(account, localAccounts, cdsAccounts) {
  var result = [];
  if (localAccounts && localAccounts.length) {
    for (var i = 0; i < localAccounts.length; i++) {
      var found = false;
      for (var j = 0; j < cdsAccounts.length; j++) {
        if (window.google.identitytoolkit.easyrp.util.accountstorage.
            matchAccount_(cdsAccounts[j], localAccounts[i].email,
                localAccounts[i].providerId)) {
          found = true;
          break;
        }
      }
      if (!found) {
        result.push(localAccounts[i]);
      }
    }
    for (var i = 0; i < result.length; i++) {
      if (window.google.identitytoolkit.easyrp.util.accountstorage.
          matchAccount_(result[i], account.email, account.providerId)) {
        result.splice(i, 1);
        break;
      }
    }
  }
  return result;
};


/**
 * @fileoverview Implementation for the Select Service.
 * @author guibinkong@google.com (Guibin Kong)
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * @class Class for Select Service.
 * @constructor
 * @extends {window.google.identitytoolkit.easyrp.Service}
 */
window.google.identitytoolkit.easyrp.SelectService = function() {
};
window.google.identitytoolkit.easyrp.SelectService.inheritsFrom(
    window.google.identitytoolkit.easyrp.Service);

/**
 * Executes the service with the input request object.
 */
window.google.identitytoolkit.easyrp.SelectService.prototype.execute =
    function() {
  if (!this.checkRequestType_(
      window.google.identitytoolkit.easyrp.rpc.SelectRequest)) {
    return;
  }
  var showAll = this.getClientConfigValue('showAll');
  this.filter = {withEmail: !showAll,
    idpList: this.getClientConfigValue('idpFilter')};

  var cdsAccounts = window.google.identitytoolkit.easyrp.util.accountstorage.
      readAccounts(this.filter) || [];
  // Avoid duplication of accounts.
  var localAccounts = this.removeDuplicatedAccounts_(
      this.request_.params_.localAccounts, cdsAccounts);

  if (!localAccounts.length && !cdsAccounts.length) {
    this.sendAddAccountResponse();
  } else {
    this.showSelectAccountPage_(localAccounts, cdsAccounts, showAll);
  }
};

/**
 * Gets assertions for the account.
 * @param {object} account The account to get assertion.
 * @private
 */
window.google.identitytoolkit.easyrp.SelectService.prototype.getAssertion_ =
    function(account) {
  var idp = window.google.identitytoolkit.easyrp.rpc.isSupportedIdp(account);
  if (!idp) {
    this.sendSelectResponse(account);
    return;
  }

  var self = this;
  var callback = function(response) {
    if (response && response.getResult()) {
      self.sendSelectResponse(account, response.getResult().idpAssertion);
    } else {
      self.sendSelectResponse(account);
    }
  };
  var timeout = function() {
    self.sendSelectResponse(account);
  };
  var request =
      new window.google.identitytoolkit.easyrp.rpc.IdpAuthRequest(account);
  window.google.identitytoolkit.easyrp.rpc.callIdp(idp, request, callback,
      timeout);
};

/**
 * Shows the account chooser page.
 * @param {Array.<object>} localAccounts The account list passed in by the
 *   calling site.
 * @param {Array.<object>} cdsAccounts The account list stored in the CDS.
 * @param {boolean=} opt_showAll Whether to show all information of an account.
 * @private
 */
window.google.identitytoolkit.easyrp.SelectService.prototype.
    showSelectAccountPage_ = function(localAccounts, cdsAccounts, opt_showAll) {
  this.container_.empty().addClass('widget-panel-chooser');
  var self = this;
  this.page_ =
    new window.google.identitytoolkit.easyrp.page.SelectAccountPage();

  this.page_.onAccountClicked = function(account) {
    window.google.identitytoolkit.easyrp.util.accountstorage.addAccount(
        account);
    self.getAssertion_(account);
  };

  this.page_.onAddAccountClicked = function() {
    self.sendAddAccountResponse();
  };

  this.page_.onRemoveAccountClicked = function(account) {
    // Remove this account if it is in the CDS.
    window.google.identitytoolkit.easyrp.util.accountstorage.removeAccount(
        account);
    cdsAccounts = window.google.identitytoolkit.easyrp.util.accountstorage.
        readAccounts(this.filter);
    // Remove this account if it is passed in by the calling site.
    self.removeAccountFromList_(account, localAccounts);
    // Avoid duplication.
    localAccounts = self.removeDuplicatedAccounts_(localAccounts, cdsAccounts);

    self.showSelectAccountPage_(localAccounts, cdsAccounts, opt_showAll);
    self.page_.setError(window.google.identitytoolkit.easyrp.labels.
        selectAccountPage.deleteReminder);
  };

  var callbackDomain = this.request_.params_.clientConfig.clientCallbackUrl &&
      window.google.identitytoolkit.easyrp.util.getDomainFromUrl(
          this.request_.params_.clientConfig.clientCallbackUrl);
  this.page_.render(this.container_, localAccounts, cdsAccounts, opt_showAll,
      callbackDomain, undefined, false);
};

/**
 * Removes an account from the a list.
 * @param {object} account The account to be removed.
 * @param {Array.<object>} accountList The account list.
 * @private
 */
window.google.identitytoolkit.easyrp.SelectService.prototype.
    removeAccountFromList_ = function(account, accountList) {
  for (var i = 0; i < accountList.length; i++) {
    if (window.google.identitytoolkit.easyrp.util.accountstorage.
        matchAccount_(accountList[i], account.email, account.providerId)) {
      accountList.splice(i, 1);
      break;
    }
  }
};

/**
 * Removes the duplicated accounts in the account list passed in by the calling
 * site from the accounts stored in the CDS.
 * @param {Array.<object>} localAccounts The account list passed in by the
 *   calling site.
 * @param {Array.<object>} cdsAccounts The account list stored in the CDS.
 * @return {Array.<object>} The deduplicated account list of the calling site.
 * @private
 */
window.google.identitytoolkit.easyrp.SelectService.prototype.
    removeDuplicatedAccounts_ = function(localAccounts, cdsAccounts) {
  var result = [];
  if (localAccounts && localAccounts.length) {
    for (var i = 0; i < localAccounts.length; i++) {
      var account = localAccounts[i];
      var found = false;
      for (var j = 0; j < cdsAccounts.length; j++) {
        if (window.google.identitytoolkit.easyrp.util.accountstorage.
            matchAccount_(cdsAccounts[j], account.email, account.providerId)) {
          found = true;
          break;
        }
      }
      if (!found) {
        result.push(account);
      }
    }
  }
  return result;
};


/**
 * @fileoverview Implementation for the Update Service.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * @class Class for Update Service.
 * @constructor
 * @extends {window.google.identitytoolkit.easyrp.Service}
 */
window.google.identitytoolkit.easyrp.UpdateService = function() {
};
window.google.identitytoolkit.easyrp.UpdateService.inheritsFrom(
    window.google.identitytoolkit.easyrp.Service);

/**
 * Executes the service with the input request object.
 */
window.google.identitytoolkit.easyrp.UpdateService.prototype.execute =
    function() {
  if (!this.checkRequestType_(
      window.google.identitytoolkit.easyrp.rpc.UpdateRequest)) {
    return;
  }
  var account = this.request_.params_.account;
  var cdsAccounts = window.google.identitytoolkit.easyrp.util.
      accountstorage.readAccounts() || [];
  var found = false;
  for (var i = 0; i < cdsAccounts.length; i++) {
    if (window.google.identitytoolkit.easyrp.util.accountstorage.
        matchAccount_(cdsAccounts[i], account.email, account.providerId)) {
      found = true;
      break;
    }
  }
  if (found) {
    this.showUpdateAccountPage_(account);
  } else {
    this.sendUpdateResponse(false);
  }
};

/**
 * Shows the account updating page.
 * @param {object} account The account to be updated.
 * @private
 */
window.google.identitytoolkit.easyrp.UpdateService.prototype.
    showUpdateAccountPage_ = function(account) {
  this.container_.empty().addClass('widget-panel-chooser');
  var self = this;
  this.page_ =
    new window.google.identitytoolkit.easyrp.page.UpdateAccountPage();

  this.page_.onUpdateConfirmedClicked = function() {
    window.google.identitytoolkit.easyrp.util.accountstorage.refreshAccount(
        account);
    self.sendUpdateResponse(true);
  },
  this.page_.onUpdateCancelClicked = function() {
    self.sendUpdateResponse(false);
  },

  this.page_.render(this.container_, account, undefined, false);
};

