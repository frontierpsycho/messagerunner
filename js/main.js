require.config({
	paths: {
		jquery: 'libs/jquery/jquery-1.8.3.min',
		messagerunner: 'messagerunner'
	}

});

require([
		'messagerunner'
	], 
	function(messagerunner){
		messagerunner.subscribe(function(e) {
			alert("Hooray! "+e.message);
		});

		var r = messagerunner.runner({channel: "example", callback: function(e) {
				alert("Alert, alert, the yellows are coming. "+e.message); 
		} });

		$(function() {
			$("#clicky1").click(function(e) {
				var cT = new Date();
				messagerunner.send({message: cT.getHours()+":"+cT.getMinutes()+":"+cT.getSeconds()});
			});
			$("#clicky2").click(function(e) {
				var cT = new Date();
				r.send({message: cT.getHours()+":"+cT.getMinutes()+":"+cT.getSeconds()});
			});
			$("#clicky3").click(function(e) {
				r.unsubscribe();
			});
		});

	}
);
