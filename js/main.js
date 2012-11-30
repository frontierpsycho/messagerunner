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
		messagerunner.subscribe(function() {
			alert("Hooray!");
		});

		$(function() {
			$("#clicky").click(function(e) {
				var cT = new Date();
				messagerunner.send(cT.getHours()+":"+cT.getMinutes()+":"+cT.getSeconds());
			});
		});
	}
);
