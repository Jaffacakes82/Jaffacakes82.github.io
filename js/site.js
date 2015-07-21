$(document).ready(function(){
    $('.ig-link').hover(function (){
        ToggleAnimation($('.ig-link'));
    })

    $('.li-link').hover(function (){
        ToggleAnimation($('.li-link'));
    })

    $('.fb-link').hover(function (){
        ToggleAnimation($('.fb-link'));
    })

    $('.sc-link').hover(function (){
        ToggleAnimation($('.sc-link'));
    })
});

function ToggleAnimation(element)
{
    element.toggleClass('animated');
    element.toggleClass('tada');
}
