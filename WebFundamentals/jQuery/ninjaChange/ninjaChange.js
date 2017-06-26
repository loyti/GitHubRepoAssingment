$(document).ready(function(){
    $('.first').click(function(){
        $(this).attr('src','https://github.com/loyti/GitHubRepoAssingment/blob/master/WebFundamentals/jQuery/ninjaChange/ninja0.png?raw=true');
    })
    $('.second').click(function(){
        $(this).attr('src','https://github.com/loyti/GitHubRepoAssingment/blob/master/WebFundamentals/jQuery/ninjaChange/ninja1.png?raw=true');
    })
    $('.third').click(function(){
        $(this).attr('src','https://github.com/loyti/GitHubRepoAssingment/blob/master/WebFundamentals/jQuery/ninjaChange/ninja2.png?raw=true');
    })
    $('.fourth').click(function(){
        $(this).attr('src','https://github.com/loyti/GitHubRepoAssingment/blob/master/WebFundamentals/jQuery/ninjaChange/ninja3.png?raw=true');
    })
    $('.fifth').click(function(){
        $(this).attr('src','https://github.com/loyti/GitHubRepoAssingment/blob/master/WebFundamentals/jQuery/ninjaChange/ninja4.png?raw=true');
    })
    $('#reset').click(function(){
        $('.first').attr('src', 'https://github.com/loyti/GitHubRepoAssingment/blob/master/WebFundamentals/jQuery/ninjaChange/cat0.png?raw=true');
        $('.second').attr('src', 'https://github.com/loyti/GitHubRepoAssingment/blob/master/WebFundamentals/jQuery/ninjaChange/cat1.png?raw=true');
        $('.third').attr('src', 'https://github.com/loyti/GitHubRepoAssingment/blob/master/WebFundamentals/jQuery/ninjaChange/cat2.png?raw=true');
        $('.fourth').attr('src', 'https://github.com/loyti/GitHubRepoAssingment/blob/master/WebFundamentals/jQuery/ninjaChange/cat3.png?raw=true');
        $('.fifth').attr('src', 'https://github.com/loyti/GitHubRepoAssingment/blob/master/WebFundamentals/jQuery/ninjaChange/cat4.png?raw=true');
    })
});