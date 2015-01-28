define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require) {
    
    var url = 'http://www.1stdibs.com';
    registerSuite({
        name: 'index',

        'base page load test': function () {
            
            return this.remote
                .get(url)
                .setFindTimeout(5000)
                .findByCssSelector('.currency-nav-label')
                .text()
                .then(function (resultText) {
                    assert.equal(resultText, '$ USD',
                                 'When page loads without login, USD should display as default currency');
                });
        },
        'secondary test': function () {
            
            return this.remote
                .get(url)
                .setFindTimeout(5000)
                .findByCssSelector('.logo-header .bunsen-icon-logo-1stdibs')
                    .isDisplayed()
                .then(function (isDisplayedResult) {
                    assert.isTrue(isDisplayedResult, 'the main logo is visible')
                });
        }
    });
});