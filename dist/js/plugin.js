;(function($){

    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    
    var scrolPrev;
    $(window).on('scroll', function(){
        scrolPrev = valueScroll;
    	var valueScroll = $(window).scrollTop();
        console.log(valueScroll, scrolPrev);
    	if(valueScroll> 45){
    		$('nav').removeAttr('class');
    	} else if (valueScroll<45) {
    		$('nav').attr('class', 'transparent');
    	}
    })
    
})(jQuery);