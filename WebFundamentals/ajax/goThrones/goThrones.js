$(document).ready(function(){
    for (var i = 6; i < 12; i++){
        $.get('https://anapioficeandfire.com/api/houses/' + i + '/', function(data){
            console.log(data);
            
            $('.house').append('<div class="newHouse"><h1 class="houseName">' + data.name + '</h1>' + '<h2 class="houseRegion">' + data.region + '</h2>' + '<p class="houseWords">' + data.words + '</p></div>');
            $('.house').attr('id', i);
        })};
    $(document).on('click', '.house', function(e){
        var houseID = e.currentTarget.id;
        $('.bottom').html("");
        
        $('.newHouseName').html("");
        $('.newHouseRegion').html("");
        $('.newHouseWords').html("");
        console.log(e);
        console.log("start data request");
            $.get(('https://anapioficeandfire.com/api/houses/' + houseID + '/'), function(event){
                console.log("event", event);
                $('.bottom').append('<div class="newHouse"><h1 class="newHouseName">' + event.name + '</h1>' + '<h2 class="newHouseRegion">' + event.region + '</h2>' + '<p class="newHouseWords">' + event.words + '</p></div>');
        });
    });
        
    
});