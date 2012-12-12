messagerunner
=============

This is a javascript project using HTML5's localStorage to pass messages asynchronously between different browser windows. It is registered as an AMD.

## API

### Channel-less function
	messagerunner.subscribe(function(e) { 
		alert("New message! '"+e.message+"'");
	});
	messagerunner.send({message: "Wake up!"});

Used if only one channel is needed, only for simple sending and running a single callback. 

### Standard channel
	var runner = runner({channel: "lala", callback: function(e) { 
		alert("New message! '"+e.message+"'");
	}});
	
	runner.send({message: "Wake up!"});

runner objects are used for more fine grained control. Each takes a channel argument, that specifies the channel name that will be used for this runner. This enables multiple runners to be operated simultaneously.

### Send-only channel
	var runner = runner({channel: "pipe"});

Used to open a channel for sending. There is no registered callback, so nothing will happen if another browser window writes into the channel.

### Bind a callback to a channel
	runner.subscribe(function(e) { 
		alert("New message! '"+e.message+"'");
	});

Used to either attach a callback to a send-only channel as above, or to add one more callback to a channel with some callbacks already present. All callbacks will be run once the event is received.

### No longer listen to channel
	runner.unsubscribe();

Used to destroy all callbacks associated with this channel. Irreversible.

### Enable/disable, without destroying callback
	runner.disable();
	runner.enable();

disable() is used to temporarily disable the channel, without destroying the callbacks associated with it. After enable(), all callbacks will be restored.
