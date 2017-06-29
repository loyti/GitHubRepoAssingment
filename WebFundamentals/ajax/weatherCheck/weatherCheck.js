$(document).ready(function(){
    $('#cityWeather').submit(function(e){
        e.preventDefault();
        var cityW = $('input').val();
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityW + '&APPID=d98c4a9b16027b40931a75f5aff74c80', function(data){
            console.log(data);
            var cityT = data.main.temp;
            cityT = Math.floor(((cityT - 273) * 9 )/ 5 +32);
            for (var i = 0; i < data.main.temp.length; i ++){
                cityT = data.main.temp[i];
            }
            $('.weatherIs').html("<h2>The forecast for " + data.name + " is " + cityT  + " degrees fahrenheit</h2>");
        })
    })
});