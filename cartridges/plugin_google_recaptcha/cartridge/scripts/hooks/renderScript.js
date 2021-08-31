'use strict';
var Site = require('dw/system/Site');
var ISML = require('dw/template/ISML');

/**
 * Get Google Captcha site key stored in BM
 * @returns {string} Google Captcha Site key
 */
function getGoogleCaptchaSiteKey() {
    return Site.getCurrent().getCustomPreferenceValue('googleCaptchaSiteKey') || '';
}

/**
 * Get Google Captcha API stored in BM
 * @returns {string} Google Captcha API
 */
function getGoogleCaptchaAPI() {
    return Site.getCurrent().getCustomPreferenceValue('googleCaptchaAPI') || '';
}

/**
 * Get Google Captcha Site key stored in BM
 */
function renderScript() {
    var googleCaptchaSiteKey = getGoogleCaptchaSiteKey();
    var googleCaptchaAPI = getGoogleCaptchaAPI();

    if (googleCaptchaSiteKey && googleCaptchaAPI) {
        ISML.renderTemplate('htmlAPI', {
            googleCaptchaSiteKey: googleCaptchaSiteKey,
            googleCaptchaAPI: googleCaptchaAPI
        });
    }
}

module.exports = {
    renderScript: renderScript
};
