$(document).ready(function(){
    for (var i = 6; i < 12; i++){
        $.get('https://anapioficeandfire.com/api/houses/' + i + '/', function(data){
            console.log(data);
            $('.house').append('<div id="house' + i + ' class="newHouse"><h1 class="houseName">' + data.name + '</h1>' + '<h2 class="houseRegion">' + data.region + '</h2>' + '<p class="houseWords">' + data.words + '</p></div>');
        })
    $('.house').on('click', '.house', function(e){
        hid = e.currentTarget.id;
        $('.bottom').html("");
        $('.houseRegion').html("");
        $('.houseWords').html("");
        console.log("start data request");
        $.get('https://anapioficeandfire.com/api/houses/' + hid + '/', function(data){
                $('.bottom').append('<h1 class="houseName">' + data.name + '</h1>' + '<h2 class="houseRegion">' + data.region + '</h2>' + '<p class="houseWords">' + data.words + '</p></div>');
        });
    });};
});