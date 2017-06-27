$(document).ready(function(){
    $('#collectID').submit(function(e){
        e.preventDefault();
        var first = $('.firstName').val();
        var last = $('.lastName').val();
        var phone = $('.phoneNo').val();
        var email = $('.email').val();
        $('#userInfo').append("<tr><td>" + first + "</td>" + "<td>" + last + "</td>" + "<td>" + phone + "</td>" + "<td>" + email + "</td></tr>");
        first.val() = "";
        last.val() = "";
        phone.val() = "";
        email.val() = "";
    });
    
});
