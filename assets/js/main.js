$(document).ready(function() {
	$('.tooltips').tooltipster();

	$("#me").on("click", function() {
		bootbox.dialog({
		  title: "About Me",
		  message: 'With two years of experience in the management, development and successful delivery of specialist software solutions, I am an enthusiastic and ambitious full stack developer with a passion for technology, innovation and delivering success.'
		});
	});

	$("#skills").on("click", function() {
		bootbox.dialog({
		  title: "Skillset",
		  message: '<b>Skills Matrix</b><br/><p>.NET <b>|</b> ASP.NET MVC <b>|</b> SQL <b>|</b> JavaScript <b>|</b> CSS <b>|</b> HTML <b>|</b> C# <b>|</b> MongoDB <b>|</b> Node.js <b>|</b> Test driven development <b>|</b> Database administration <b>|</b> Systems administration <b>|</b> Windows <b>|</b> Linux <b>|</b> Agile methodologies <b>|</b> Project management <b>|</b> Customer service <b>|</b> Problem solving <b>|</b> Requirements analysis</p><br/><b>Personal Attributes</b><br/><ul><li>Strong communicator</li><li>Excellent people management abilities</li><li>Willingness to learn ness skills and develop personally</li><li>Calm, methodical and logical thinker</li></ul>'
		});
	});

	$("#career").on("click", function() {
		bootbox.dialog({
		  title: "Career journey",
		  message: 'On the path to success.'
		});
	});

	$("#education").on("click", function() {
		bootbox.dialog({
		  title: "Education",
		  message: 'Is key.'
		});
	});
});
