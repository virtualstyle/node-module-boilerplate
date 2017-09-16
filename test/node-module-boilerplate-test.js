var assert = require('assert');
var colors = require('colors');

var nodeModuleBoilerplate = new (require('../lib/node-module-boilerplate'))();

describe('Testing @virtualstyle/node-module-boilerplate package'.bold.underline, function () {

    beforeEach(function () {});

    it('nodeModuleBoilerplate is an object'.italic, function () {
        assert(typeof nodeModuleBoilerplate === 'object');
    });

    it('nodeModuleBoilerplate.config is an object'.italic, function () {
        assert(typeof nodeModuleBoilerplate.config === 'object');
    });

    it('nodeModuleBoilerplate.config is an object'.italic, function () {
        assert(typeof nodeModuleBoilerplate.config === 'object');
    });

    it('nodeModuleBoilerplate.sayHello()'.italic, function () {
        assert(nodeModuleBoilerplate.sayHello('World') === 'Hello World');
    });

});
