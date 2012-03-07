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
 * @fileoverview Defines Manage Account page.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Class for the Manage Account page.
 * @constructor
 * @extends {window.google.identitytoolkit.easyrp.Page}
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage = function() {
};
window.google.identitytoolkit.easyrp.page.ManageAccountPage.inheritsFrom(
    window.google.identitytoolkit.easyrp.Page);

/**
 * Renders the Manage Account page.
 * @param {Element} container The rootDiv of the widget.
 * @param {Array.<Object>=} opt_accounts An array of accounts to be shown.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.render =
    function(container, opt_accounts, opt_resource, opt_showCloseIcon) {
  this.accounts_ = opt_accounts || [];
  var resource = opt_resource ||
      window.google.identitytoolkit.easyrp.labels.manageAccountPage;
  this.parentClass.render.call(this, container, resource,
      opt_showCloseIcon !== false);
  this.render_();
};

/**
 * Really renders the page.
 * @private
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.render_ =
    function() {
  this.createHeader(this.resource_.title, this.showCloseIcon_,
      this.resource_.closeIcon, 'onCloseIconClicked', this.resource_.close).
      appendTo(this.container_);
  var main = jQuery('<div>').addClass('widget-accounts widget-main').
      appendTo(this.container_);
  this.appendErrorDiv(main).hide();
  var defaultPhotoUrl =
      window.google.identitytoolkit.easyrp.config.defaultPhotoUrl;
  var removeIconUrl =
      window.google.identitytoolkit.easyrp.images.removeIconUrl;
  if (this.accounts_.length) {
    var accounts = jQuery('<ol>').appendTo(main);
    for (var i = 0; i < this.accounts_.length; ++i) {
      var account = this.accounts_[i];
      if (account && account.email) {
        this.createAccountBox(account, defaultPhotoUrl, 'onAccountClicked',
            removeIconUrl, 'onRemoveAccountClicked', this.resource_.removeTitle,
            true).appendTo(accounts);
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
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.
    clearError = function() {
  jQuery('.widget-error', this.container_).hide();
  this.getErrorElement().empty();
};

/**
 * Checks whether an error message is showing?
 * @return {boolean} {@code true} if an error message is showing,
 *     {@code false} otherwise.
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.
    isShowingError = function() {
  return jQuery('.widget-error', this.container_).css('display') != 'none';
};

/**
 * Shows an error message.
 * @param {string} errorHtml The error message (can use HTML tags).
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.
    setError = function(errorHtml) {
  jQuery('.widget-error', this.container_).show();
  this.getErrorElement().html(errorHtml);
};

/**
 * @return {Element} The DOM element for the close icon.
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.
    getCloseIconElement = function() {
  return jQuery('.widget-close-icon', this.container_);
};

/**
 * @return {Element} The DOM element for the error message.
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.
    getErrorElement = function() {
  return jQuery('.widget-error p', this.container_);
};

/**
 * @return {Array.<Element>} The DOM elements for all account shown.
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.
    getAccountElements = function() {
  return jQuery('.widget-account a', this.container_);
};

/**
 * @param {number} index The position index of the account.
 * @return {Element} The DOM element for the account in the position specified
 *     by the index.
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.
    getAccountElement = function(index) {
  window.google.identitytoolkit.easyrp.param.notNull(index, 'index');
  return jQuery('li.widget-account:eq(' + index + ')', this.container_);
};

/**
 * Performs default action when close icon is clicked.
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.
    onCloseIconClicked = function() {
};

/**
 * Performs default action when an account entry is clicked.
 * @param {Object} account The account entry which is clicked.
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.
    onAccountClicked = function(account) {
};

/**
 * Performs default action when an account remove icon is clicked.
 * @param {Object} account The account entry whose remove icon is clicked.
 */
window.google.identitytoolkit.easyrp.page.ManageAccountPage.prototype.
    onRemoveAccountClicked = function(account) {
};


/**
 * @fileoverview Defines the account management widget for the CDS.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

(function(jQuery) {
  var widget = {
    _create: function() {
      this.showManageAccountPage();
    },

    showManageAccountPage: function() {
      this.page_ =
          new window.google.identitytoolkit.easyrp.page.ManageAccountPage();
      var self = this;
      this.page_.onRemoveAccountClicked = function(account) {
        window.google.identitytoolkit.easyrp.util.accountstorage.removeAccount(
            account);
        self.showManageAccountPage();
        self.page_.setError(window.google.identitytoolkit.easyrp.labels.
            manageAccountPage.deleteReminder);
      }
      var accounts = window.google.identitytoolkit.easyrp.util.accountstorage.
          readAccounts();
      this.element.empty();
      this.page_.render(this.element, accounts, undefined, false);
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

