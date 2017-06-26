$(document).ready(function(){
    $('img').click(function(){
        $(this).fadeOut('fast')
    })
    $('#restore').click(function(){
        $('img').fadeIn()})
});