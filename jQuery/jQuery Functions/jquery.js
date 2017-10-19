$(document).ready(function(){
    // alert("Im here!!!!");
    $('#addclass').click(function(){
        $('p').addClass('imherenow')
    });
    // NOTE: Button
    $('.slidetoggle').hide();
    $('#slidetoggle').click(function(){
        $('.slidetoggle').slideToggle("slow",function() {
        });
    });
    $('#append').click(function(){
        $('.append p').append('BOOM!!!')
    });
    $('#before').click(function(){
        $('.befaft h2').before($('.befaft p'))
    });
    $('#after').click(function(){
        $('.befaft h2').after($('.befaft p'))
    });
    $('#fadeout').click(function(){
        $('#echo').fadeOut("slow",function () {
        });
    });
    $('#fadein').click(function(){
        $('#echo').fadeIn("slow",function() {
        });
    });
    $("#slideup").click(function () {
        $(".slide img").slideUp("slow",function () {

        });
    });
    $( "#slidedown" ).click(function() {
        $( ".slide img" ).slideDown( "slow", function() {
        });
    });

});
