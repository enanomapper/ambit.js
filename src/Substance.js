//This content is released under the MIT License, http://opensource.org/licenses/MIT. See licence.txt for more details.

Ambit.Substance = function(baseURL) {
	this.baseURL = baseURL;
}

Ambit.Substance.prototype.list = function(callback) {
	var conceptWikiSearcher = $.ajax({
		url: this.baseURL + "/substance",
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

Ambit.Substance.prototype.info = function(uri, callback) {
	var conceptWikiSearcher = $.ajax({
		url: uri + "/study",
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

Ambit.Substance.prototype.summary = function(uri, callback) {
	var conceptWikiSearcher = $.ajax({
		url: uri + "/studysummary",
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}


Ambit.Substance.prototype.composition = function(uri, callback) {
	var conceptWikiSearcher = $.ajax({
		url: uri + "/composition",
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

Ambit.Substance.prototype.compositionAsList = function(uri, callback) {
	var conceptWikiSearcher = $.ajax({
		url: uri + "/structures",
                dataType: 'json',
		success: function(response, status, request) {
			callback.call(this, true, request.status, response);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}
