var onImage;
$(document).ready(function(){
    $('.beenThere').hover(function(){
        onImage = true;
        $(this).attr('src', 'https://github.com/loyti/GitHubRepoAssingment/blob/master/WebFundamentals/jQuery/scrollOn/youHere.jpg?raw=true">')
    },function(){$(onImage = false)
    })

});