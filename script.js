$(document).ready(function(){
    $(window).scroll(function(){
        $('.fade-in').each(function(i){
            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            if(bottomOfWindow > bottomOfObject){
                $(this).animate({'opacity': '1'}, 1500);
            }
        })
    })
})
