$(document).ready(function(){
    $(window).scroll(function(){
        $('.col-sm-6').each(function(i){
            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            if(bottomOfWindow > bottomOfObject - 300){
                $(this).animate({'opacity': '1'}, 1000);
            }
        })
    })
})

