
$(document).ready(function () {

	$(window).on("scroll", function() {
	    if($(window).scrollTop() > 50) {
	        $(".navbar").addClass("active");
	    } else {
	       $(".navbar").removeClass("active");
	    }
  });

var $carousel = $('#attraction .carousel').flickity({
  imagesLoaded: true,
  percentPosition: false,
  wrapAround: true,
  autoPlay: 3000 ,
});



var $carousel = $('#galery .carousel').flickity({
  imagesLoaded: true,
  percentPosition: false,
  wrapAround: true,
  initialIndex: 4,
  autoPlay: 3000 ,

});
var $imgs = $carousel.find('.carousel-cell img');
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';
var flkty = $carousel.data('flickity');

$carousel.on( 'scroll.flickity', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = $imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});

AOS.init();
});

