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

		$(function() {
			$("#clicky").click(function(e) {
				var cT = new Date();
				messagerunner.send({message: cT.getHours()+":"+cT.getMinutes()+":"+cT.getSeconds()});
			});
		});
	}
);
