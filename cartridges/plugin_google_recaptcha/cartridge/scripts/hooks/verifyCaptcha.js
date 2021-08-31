/**
 * Verify google captcha
 * @param {string} token Google Token
 * @returns {Object} Response captcha
 */
function verifyCaptcha(token) {
    var localServiceRegistry = require('dw/svc/LocalServiceRegistry');
    var Site = require('dw/system/Site');
    var secretKey = Site.getCurrent().getCustomPreferenceValue('googleCaptchaPrivateKey') || '';
    var service;
    var serviceResponse;

    if (token && secretKey) {
        service = localServiceRegistry.createService('GoogleCaptcha', {
            createRequest: function (svc, args) { // eslint-disable-line no-unused-vars
                svc.setRequestMethod('POST');
                svc.addParam('secret', secretKey);
                svc.addParam('response', token);
            },
            parseResponse: function (svc, resp) {
                return resp;
            }
        });
        service.call();
        serviceResponse = service.getResponse();
        if (serviceResponse.statusMessage === 'OK') {
            return JSON.parse(serviceResponse.text);
        }
    }

    return {};
}

module.exports = {
    verifyCaptcha: verifyCaptcha
};
