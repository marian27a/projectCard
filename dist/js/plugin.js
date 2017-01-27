;(function($){
  $(function(){

    $('.parallax').parallax();
    $(window).on('scroll', function{
    	var scrollTop = $(window).scrollTop();
    	console.log(scrollTop);
    })

    console.log('hellow');
    alert('hi')
    

  });
})(jQuery);
