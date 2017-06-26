$(document).ready(function(){
    $('#hide').click(function(){
        alert("You have hidden all \"p\" elements!");
        $('p').hide();
    })
    $('#show').click(function(){
        alert("You have shown all \"p\" elements!");
        $('p').show();
    })
    $('#clickMe').hover(function(){
        $('.bodyBottom').css('background', 'rgba(0,0,0,.5)')
    }, function(){$('.bodyBottom').css('background', '#fff')
    })
    $('#clickMe').click(function(){
        $('.bodyTop').toggle("slow");
    })
    $('#clickMe1').click(function(){
        $('.bodyTop').slideUp();
    })
    $('#clickMe2').click(function(){
        $('.bodyTop').slideDown();
    })
    $('#clickMe2').hover(function(){
        $('bodyMiddle').before('<h2>Don\'t move or I\'ll disappear!</h2>')
    }, function (){$('bodyMiddle').before()
    })
    $('#clickMe3').click(function(){
        $('.bodyTop').slideToggle("fast");
    })
    $('#clickMe1').hover(function(){
        $('.bodyMiddle').fadeOut('slow')
    }, function(){$('.bodyMiddle').fadeIn('fast')
    })
    $('h2').hover(function(){
        $('h2').addClass("addColor")
    },
    function (){$('h2').removeClass('addColor')
    })
});