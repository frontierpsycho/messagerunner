messagerunner
=============

This is a javascript project using HTML5's localStorage to pass messages asynchronously between different browser windows. It is registered as an AMD.

## API

### Channel-less function
	messagerunner.subscribe(function(e) { 
		alert("New message! '"+e.message+"'");
	});
	messagerunner.send({message: "Wake up!"});

### Standard, two way channel
	var runner = runner({channel: "lala", callback: function(e) { 
		alert("New message! '"+e.message+"'");
	}});
	
	runner.send({message: "Wake up!"});

### One way communication
	var runner = runner({channel: "pipe"});

### Make it two way
	runner.subscribe(function(e) { 
		alert("New message! '"+e.message+"'");
	});

## TODO
### Make it one way again
	runner.unsubscribe("pipe");

### Enable/disable, without destroying callback?
	runner.disable();
	runner.enable();

