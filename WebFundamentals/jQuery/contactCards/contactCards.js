$(document).ready(function(){
    $('#collectID').submit(function(e){
        e.preventDefault();
        var name = $('.nameFL').val();
        var email = $('.emailI').val();
        var description = $('.about').val();    
        $('.contact').append("<div class=\"card\"><h3 class=\"cName\">" + name + "</h3>" + "<h4 id=\"cEmail\><a href=\"mailto:" + email + "\">" + email + "</a></h4>" + "<p id=\"cAbout\" style=\"display:none\">" + description + "</p></div>");
    })
    $(document).on('click', '.card', function (){
        $(this).children().toggle();
    })
});