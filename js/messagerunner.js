define(['jquery'], function() {	
	var subscriptions = {'default': []};

	var runCallbacks = function(e) {
		// find out the key, run callbacks
		var key = e.originalEvent.key;

		// run callback
		subscriptions[key][0]();
	};

	$(window).bind("storage", runCallbacks);

	var subscribe = function(f) {
		subscriptions['default'].push(f);
	};

	var send = function(arg) {
		// TODO serialize to JSON and deserialize on event
		localStorage.setItem("default", arg);
		
	};

	var that = {};
	that.subscribe = subscribe;
	that.send = send;

	return that;
});
