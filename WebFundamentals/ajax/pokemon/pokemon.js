$(document).ready(function(){
    for (var i = 1; i < 152; i++){
        $(".pokedexI").append("<img src=\"http://pokeapi.co/media/img/" + i + ".png\" class=\"pokemonNew\" id=\"" + i + "\">");
    };
    $('.pokedexI').on('click', '.pokemonNew', function(e){
        var pid = e.currentTarget.id;
        $('.pokeName').html("");
        $('#pokeHeight').html("");
        $('#pokeWeight').html("");
        $('#pokeType').html("");
        $('.pokeI').html("");

        console.log(e);
        console.log("start data request");
        $.get('http://pokeapi.co/api/v2/pokemon/' + pid + "/", function(pokedex){
            console.log("get pokeI info", pokedex.sprites.front_default);
            for (var j = 0; j < pokedex.types.length; j++){
                $('#pokeType').append('<li>' + pokedex.types[j].type["name"] + '</li>');
                console.log("test")
            }
            $('.pokeName').append('<h1>' + pokedex.name.toUpperCase() + '</h1>');
            $('.pokeI').attr('src', pokedex.sprites.front_default);
            $('#pokeHeight').append('<p>' + pokedex.weight + '</p>');
            $('#pokeWeight').append('<p>' + pokedex.height + '</p>');
            for (var i = 0; i < pokedex.stats["weight"]; i++){
            }
        })
    });
});
