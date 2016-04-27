
/**
 * @constructor
 * @param {string} baseURL - URL for the AMBIT API
 * @license [MIT]{@link http://opensource.org/licenses/MIT}
 * @author Egon Willighagen
 */
Ambit.Compound = function(baseURL) {
	this.baseURL = baseURL.replace(/\/$/, "");
}

/**
 * Search for substances.
 *
 * @param {string} query - The search query (e.g. TiO2)
 * @param {requestCallback} callback - Function that will be called with the result.
 * @method
 */
Ambit.Compound.prototype.search = function(query, callback) {
	params = {};
	params['search'] = query;
	var conceptWikiSearcher = $.ajax({
		url: this.baseURL + "/query/compound/search/all",
		headers: { 'User-Agent': 'ambit.js (https://github.com/enanomapper/ambit.js/)' },
		dataType: 'json',
		data: params,
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}
