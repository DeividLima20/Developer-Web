/*
@DEIVIDX_OFC
*/

$(function(){
    MeuScroll();
    function MeuScroll(){
    $('nav a, btn').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    });

    $('#btn-cont').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    });

    $('#btn-cont').css('text-decoration','none');
};
});

/*
@DEIVIDX_OFC
*/