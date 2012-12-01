define(['jquery'], function() {	
	var subscriptions = {'default': []};

	var runCallbacks = function(e) {
		// find out the key, run callbacks
		var key = e.originalEvent.key;

		var data = JSON.parse(e.originalEvent.newValue);

		// run callbacks
		try {
			for (var i=0; i < subscriptions[key].length; i++) {
				subscriptions[key][i](data);
			}
		} catch (e) {
			console.error("Error running callback: "+e.name+": "+e.message);
		}
	};

	$(window).bind("storage", runCallbacks);

	var subscribe = function(f) {
		subscriptions['default'].push(f);
	};

	var send = function(arg) {
		localStorage.setItem("default", JSON.stringify(arg));
	};

	var runner = function(spec, my) {
		var channel = spec.channel;

		var subscribe = function(f) {
			if(subscriptions.hasOwnProperty(channel))
			{
				subscriptions[channel].push(callback);
			} else {
				subscriptions[channel] = [ callback ];
			}
		};

		if(spec.hasOwnProperty("callback"))
		{
			var callback = spec.callback;
			subscribe(callback);
		}

		var send = function(arg) {
			localStorage.setItem(channel, JSON.stringify(arg));
		};

		var tother = {}
		tother.send = send;
		
		return tother;
	};


	var that = {};
	that.subscribe = subscribe;
	that.send = send;
	that.runner = runner;

	return that;
});
