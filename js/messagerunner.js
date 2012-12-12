define([], function() {	
	var subscriptions = {'default': []};
	var disabled_subscriptions = {};

	var runCallbacks = function(e) {
		// find out the key, run callbacks
		var key = e.key;

		var data = JSON.parse(e.newValue);

		// run callbacks
		try {
			for (var i=0; i < subscriptions[key].length; i++) {
				subscriptions[key][i](data);
			}
		} catch (e) {
			console.error("Error running callback: "+e.name+": "+e.message);
		}
	};

	if (window.addEventListener)  //w3c
	{
		window.addEventListener("storage", runCallbacks, false);
		r = true;
	}
	else if (window.attachEvent)  //ie
	{
		window["storage" + runCallbacks] = runCallbackstion ()
		{
			runCallbacks.call(this, window.event);
		};
		r = window.attachEvent("on" + "storage", window["storage" + runCallbacks]);
	}

	var subscribe = function(f) {
		subscriptions['default'].push(f);
	};

	var unsubscribe = function() {
		subscriptions['default'] = [] 
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

		var unsubscribe = function() {
			if(subscriptions.hasOwnProperty(channel))
			{
				delete subscriptions[channel]
			} 
		};

		var disable = function() {
			if(subscriptions.hasOwnProperty(channel))
			{
				disabled_subscriptions[channel] = subscriptions[channel];
				delete subscriptions[channel];
			}
		};

		var enable = function() {
			if(disabled_subscriptions.hasOwnProperty(channel))
			{
				subscriptions[channel] = disabled_subscriptions[channel];
				delete disabled_subscriptions[channel];
			}
		};

		var is_enabled = function() {
			return subscriptions.hasOwnProperty(channel);
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
		tother.subscribe = subscribe;
		tother.unsubscribe = unsubscribe;
		tother.is_enabled = is_enabled;
		tother.disable = disable;
		tother.enable = enable;
		
		return tother;
	};


	var that = {};
	that.subscribe = subscribe;
	that.unsubscribe = unsubscribe;
	that.send = send;
	that.runner = runner;

	return that;
});
