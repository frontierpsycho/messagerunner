define(['jquery'], function() {	
	var subscriptions = {'default': []};

	var runCallbacks = function(e) {
		// find out the key, run callbacks
		var key = e.originalEvent.key;

		var data = JSON.parse(e.originalEvent.newValue);
		console.log(data);

		// run callback
		subscriptions[key][0](data);
	};

	$(window).bind("storage", runCallbacks);

	var subscribe = function(f) {
		subscriptions['default'].push(f);
	};

	var send = function(arg) {
		localStorage.setItem("default", JSON.stringify(arg));
	};

	var that = {};
	that.subscribe = subscribe;
	that.send = send;

	return that;
});
