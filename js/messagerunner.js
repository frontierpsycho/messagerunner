define(['jquery'], function() {	
	var subscriptions = {'default': []};

	var runCallbacks = function(e) {
		alert(e);
	};

	//$(window).bind("storage", runCallbacks);

	var subscribe = function(f) {
		subscriptions['default'].push(f);
	};

	var that = {};
	that.subscribe = subscribe;

	return that;
});
