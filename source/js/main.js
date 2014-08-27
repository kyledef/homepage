
$(window).resize(function(){

    $('.page_centered').css({
        position:'absolute',
        left: ($(window).width() - $('.page_centered').outerWidth())/2,
        top: ($(window).height() - $('.page_centered').outerHeight())/3.5
    });

});

$(window).resize();