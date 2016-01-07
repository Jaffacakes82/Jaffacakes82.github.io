$(document).ready(function() {
	$('.tooltips').tooltipster();

	$("#me").on("click", function() {
		bootbox.dialog({
		  title: "That html",
		  message: '<img src="images/bootstrap_logo.png" width="100px"/><br/> You can also use <b>html</b>'
		});
	});

	$("#skills").on("click", function() {
		bootbox.dialog({
		  title: "That html",
		  message: '<img src="images/bootstrap_logo.png" width="100px"/><br/> You can also use <b>html</b>'
		});
	});

	$("#career").on("click", function() {
		bootbox.dialog({
		  title: "That html",
		  message: '<img src="images/bootstrap_logo.png" width="100px"/><br/> You can also use <b>html</b>'
		});
	});

	$("#education").on("click", function() {
		bootbox.dialog({
		  title: "That html",
		  message: '<img src="images/bootstrap_logo.png" width="100px"/><br/> You can also use <b>html</b>'
		});
	});
});
