// Write your JavaScript code.
$(document).ready(function () {
    $(".hawking").click(function () {
        $(".hawking").addClass('wobble');
        setTimeout(function () {
            $(".hawking").removeClass('wobble');
        }, 1500);

        $.get('http://hawkingquotesapi.azurewebsites.net/api/quote', function (data) {
            $(".speech-bubble > p").text('"' + data + '"');
        })

        $(".speech-bubble").show();
        $(".speech-bubble").addClass('lightSpeedIn');

        setTimeout(function () {
            $(".speech-bubble").removeClass('lightSpeedIn');
        }, 1500);
    });
});