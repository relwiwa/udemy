// Display window width in #output-width when resizing window
(function() {
	var showWidth = true;
	if (showWidth) {
		$(document).ready(function() {
			$(window).resize(function() {
				var width = $(window).width();
				$("#output-width").html("Window Width: " + width.toString());
			});
		});
	}
})();
