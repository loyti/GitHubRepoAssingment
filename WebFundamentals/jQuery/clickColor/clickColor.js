$(document).ready(function(){
    console.log(random_color());
    $('#large_box').click(function(){
    alert('you clicked the big box!');
    $('#large_box').css('background', random_color());
    $('.side_box').css('background', random_color());
    $('.middle_box').css('background', random_color());
    //comment this out when you have figured out what event.stopPropagation is used for
    })
    $('.side_box').click(function(event){
        event.stopPropagation();
        $('.side_box').css('background', random_color());
        })
    $('.middle_box').click(function(event){
        event.stopPropagation();
        $('#large_box').css('background', random_color());
    })

});