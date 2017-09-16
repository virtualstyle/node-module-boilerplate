'use strict';
/**
 * A class stubout from VirtualStyle Generator
 */
class nodeModuleBoilerplate {

  /**
   * Load our configuration using config module.
   * @method constructor
   * @param  {Object}    config An object with config values
   */
  constructor(config) {
    this.config = require('@virtualstyle/config')(config || {});
  }

  /**
   * A method to say hello
   * @method sayHello
   * @param  {string}   name  A name to say hello to
   */
  sayHello(name) {
    return 'Hello ' + name;
  }

}

module.exports = nodeModuleBoilerplate;
