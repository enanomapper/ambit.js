// This content is released under the MIT License, http://opensource.org/licenses/MIT.
// See LICENSE for more details.

/**
 * Main container of the ambit.js library.
 * 
 * @namespace
 * @license [MIT]{@link http://opensource.org/licenses/MIT}
 * @author Egon Willighagen
 */
var Ambit = Ambit || {};

/**
 * General callback for any ambit.js API call.
 *
 * @callback requestCallback
 * @param {Boolean} success - True or False, indicating the outcome of the API call
 * @param {Number} status - HTTP status code returned by the server
 * @param {string} response - Response message in JSON format
 */
