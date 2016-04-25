"use strict";
$(document).ready(function () {
    $('.tooltips').tooltipster();

    $("#me").on("click", function () {
        bootbox.dialog({
            title: "About Me <i class=\"fa fa-user\"></i>",
            message: '<p class="centre-modal-text"><b>I\'m Joe, a 24 year old full stack developer from London.</b></p><br/>With nearly three years of experience in the management, development and successful delivery of specialist software solutions, I am an enthusiastic and ambitious individual with a passion for technology, innovation and delivering success.',
            backdrop: true,
            onEscape: true
        });
    });

    $("#skills").on("click", function () {
        bootbox.dialog({
            title: "Skillset <i class=\"fa fa-pencil\"></i>",
            message: '<b>Skills Matrix</b><br/><p>.NET <b>|</b> ASP.NET MVC <b>|</b> SQL <b>|</b> JavaScript <b>|</b> CSS <b>|</b> HTML <b>|</b> C# <b>|</b> MongoDB <b>|</b> Node.js <b>|</b> Test driven development <b>|</b> Database administration <b>|</b> Systems administration <b>|</b> Windows <b>|</b> Linux <b>|</b> Agile methodologies <b>|</b> Project management <b>|</b> Customer service <b>|</b> Problem solving <b>|</b> Requirements analysis</p><br/><b>Personal Attributes</b><br/><ul><li>Strong communicator</li><li>Excellent people management abilities</li><li>Willingness to learn ness skills and develop personally</li><li>Calm, methodical and logical thinker</li></ul>',
            backdrop: true,
            onEscape: true
        });
    });

    $("#career").on("click", function () {
        bootbox.dialog({
            title: "Career Journey <i class=\"fa fa-road\"></i>",
            message: '<u>PA Consulting Group</u> - <b>Consultant Analyst (Current)</b><br/><br/><u>Avco Systems Ltd</u> - <b>Analyst Programmer</b><br /><b>Projects:</b><br/><ul><li>Led a project to develop a system that sells and displays vehicle provenance checks, with a focus on device compatibility, for a partnership of the UK\'s largest digital automotive marketplace and a FTSE100 global information services company.<ul><li><b>Technologies: MVC, MySQL, CSS, JavaScript, <i class="fa fa-html5"></i>.</b></li></ul></li><br /><li>Led a project to develop a system that enables vehicle history information to be displayed as part of a full-page car advert, for a FTSE 100 global information services company. Currently in use on the UK-used approved website for one of the top German automotive manufacturers.<ul><li><b>Technologies: MVC, MongoDB, CSS, <i class="fa fa-html5"></i>.</b></li></ul><br /><li>Part of the development team that delivered an end to end examination and certification portal for a large UK vocational education organisation.<ul><li><b>Technologies: MVC, Transact-SQL, CSS, <i class="fa fa-html5"></i>.</b></li></ul></li></ul><br /><br /><u>Avco Systems Ltd</u> - <b>Industrial Placement</b><br />As part of my degree I undertook a placement year with Avco Systems. Throughout the year I worked on a number of agile software projects with different development teams enhancing my technical knowledge in a professional environment. Key responsibilities included test driven software development, customer requirements capture, cost analysis and support and project documentation creation.<br/><br/><u>City &amp; Guilds</u> - <b> Regional Customer Advisor</b><br/>Provided customer support to all of our centres in the southern part of England via phone and e-mail. The role also included administration surrounding various application forms, raising invoices and managing expense claims for external consultants.',
            backdrop: true,
            onEscape: true
        });
    });

    $("#education").on("click", function () {
        bootbox.dialog({
            title: "Education <i class=\"fa fa-graduation-cap\"></i>",
            message: '<ul><li>BSc Computer System Integration, 1st class honours – University of the West of England.</li><li>A-Level Physics – Christ the King Sixth Form College.</li><li>A-Level Computing – Christ the King Sixth Form College.</li><li>A-Level English language & literature – Christ the King Sixth Form College.</li><li>13 A* - C grade GCSEs – Bonus Pastor Catholic College.</li></ul>',
            backdrop: true,
            onEscape: true
        });
    });

    $("#http-action").click(function () {
        $("#chosen-protocol").val('http://');
        $(".btn-https").hide();
        $(".btn-http").show();
    });

    $("#https-action").click(function () {
        $("#chosen-protocol").val('https://');
        $(".btn-https").show();
        $(".btn-http").hide();
    });

    var isSuccess = $("#successful-shorten").val();
    var successMessage = $("#url-value").val();

    if (isSuccess === "true") {
        var alertHtml = "<div class='alert alert-success' role='alert'><strong>Yay!</strong> <a target='_blank' href=" + successMessage + ">" + successMessage + "</a></div>";
        $("form").append(alertHtml);
    } else if (isSuccess === "false") {
        var alertHtml = "<div class='alert alert-danger' role='alert'><strong>Uh oh!</strong> " + successMessage + "</div>"
        $("form").append(alertHtml);
    }
});

function isURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
}