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

window.cds.CDS_CONFIG = {
  Uiloader: new window.google.identitytoolkit.easyrp.UrlTemplateUiLoader(
      'https://gitkit-cds.appspot.com/javascript/{baseFilename}__{language}.js',
      'https://gitkit-cds.appspot.com/javascript/{baseFilename}__en.js'),
  services: {
    web: {
      store: {baseFilename: 'cds-services',
          name: 'window.google.identitytoolkit.easyrp.StoreService'},
      select: {baseFilename: 'cds-services',
          name: 'window.google.identitytoolkit.easyrp.SelectService'},
      update: {baseFilename: 'cds-services',
          name: 'window.google.identitytoolkit.easyrp.UpdateService'}
    }
  },
  idps: {
    gitkit: {
      iframeUrl: 'https://gitkit-idp.appspot.com/iframe.htm'
    },
    gitkit1: {
      iframeUrl: 'https://gitkit-idp1.appspot.com/iframe.htm'
    },
    doubleclickdemo: {
      iframeUrl: 'https://2clickdemo.appspot.com/iframe.htm'
    }
  },
  emailMapIdp: {
    'gitkit.com': 'gitkit',
    'gitkit1.com': 'gitkit1',
    'gmail.com': 'doubleclickdemo'
  }
};
