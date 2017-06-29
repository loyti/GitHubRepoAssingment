$(document).ready(function(){
    $('#cityWeather').submit(function(e){
        e.preventDefault();
        var cityW = $('input').val();
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityW + '&APPID=d98c4a9b16027b40931a75f5aff74c80', function(data){
        console.log(data);
        $('.weatherIs').html("<h2>The forecast for " + data.name + " is " + data.main.temp  + "</h2>");
        })
    })
});