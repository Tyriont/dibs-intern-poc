define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require) {
    'use strict';
    var url = 'http://www.1stdibs.com';
    registerSuite({
        name: 'index',

        'text test': function () {
            /*
            When the homepage loads without a login, USD should display as the default currency
            */
            return this.remote
                .get(url)
                .setFindTimeout(5000)
                .findByCssSelector('.currency-nav-label')
                .getVisibleText()
                .then(function (resultText) {
                    assert.equal(resultText, '$ USD',
                                 'When page loads without login, USD should display as default currency');
                });
        },
        'element visible test': function () {
            /*
            When the homepage loads without a login, the main logo should be visible
            */
            return this.remote
                .get(url)
                .setFindTimeout(5000)
                .findByCssSelector('.logo-header .bunsen-icon-logo-1stdibs')
                    .isDisplayed()
                .then(function (isDisplayedResult) {
                    assert.isTrue(isDisplayedResult,
                                  'the main logo is visible');
                });
        },
        'chaining tests': function () {
            /*
            When the homepage loads without a login and the Furniture category is clicked, 'Furniture' should display as the final breadcrumb
            */
            return this.remote
                .get(url)
                .setFindTimeout(5000)
                .findByCssSelector('[data-cat=furniture] .global-nav-item-link')
                    .click()
                    .end()
                .findByCssSelector('.breadcrumbs-list .is-last')
                .getVisibleText()
                    .then(function (resultText) {
                    assert.equal(resultText, 'Furniture',
                                     'Furniture should display as the final item added to the breadcrumbs list');
                })
                    .end()
                .findByCssSelector('[data-title=Furniture]')
                    .getVisibleText()
                .then(function (resultText) {
                    assert.equal(resultText, 'FURNITURE',
                                     'Furniture should display as the category header');
                });
        },
        'search input test': function () {
            /*
            When the homepage loads without a login and 'watch' is entered into the search box and the enter button is pressed, the results header title should display 'X results for "watch"'
            */
            return this.remote
                .get(url)
                .setFindTimeout(5000)
                .findByCssSelector('#globalSearchBox input')
                    .type(['watch', '\uE007'])
                    .end()
                .findByCssSelector('.results-header-title')
                    .getVisibleText()
                .then(function (resultText) {
                    assert.include(resultText, 'results for "watch"',
                                   'the results header title should display "X results for "watch""');
                });
        }
    });
});