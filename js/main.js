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

		$("button").click(function() {
			localStorage.setItem("What", "is this devilry?");
			console.log(localStorage["What"]);
		});

		$(window).bind("storage", function(e) {
			var key = e.originalEvent.key;
			var oldValue = e.originalEvent.oldValue;
			var newValue = e.originalEvent.newValue;
			var url = e.originalEvent.url;

			console.log(url);
			alert(url);
		});
	}
);
