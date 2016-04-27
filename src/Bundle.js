
/**
 * @constructor
 * @param {string} baseURL - URL for the AMBIT API
 * @license [MIT]{@link http://opensource.org/licenses/MIT}
 * @author Egon Willighagen
 */
Ambit.Bundle = function(baseURL) {
	this.baseURL = baseURL.replace(/\/$/, "");
}

/**
 * Lists all the substances.
 *
 * @param {requestCallback} callback - Function that will be called with the result.
 * @method
 */
Ambit.Bundle.prototype.list = function(callback) {
	var conceptWikiSearcher = $.ajax({
		url: this.baseURL + "/bundle",
		dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

