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
            }, function(){$('.bodyBottom').css('background', '#fff')})
            $('#clickMe').click(function(){
                $('.bodyTop').toggle("slow");
            })
            $('#clickMe1').click(function(){
                $('.bodyTop').slideUp();
            })
            $('#clickMe2').click(function(){
                $('.bodyTop').slideDown();
            })
            $('#clickMe3').click(function(){
                $('.bodyTop').slideToggle("fast");
            })
            
        });