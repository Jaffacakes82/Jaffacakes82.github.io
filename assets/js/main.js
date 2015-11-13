$(document).ready(function() {
	$('.tooltips').tooltipster();

	$("#about-me-info").dialog({
				autoOpen: false
	});
	$("#me").on("click", function() {
		$("#about-me-info").dialog("open");
	});
});
