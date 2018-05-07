
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



var carousel = document.querySelector('#galery .carousel');
var flkty = new Flickity( carousel, {
  imagesLoaded: true,
  percentPosition: false,
  wrapAround: true,
  lazyLoad: true,
  
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on( 'scroll', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = imgs[i],
      x   = 0;

      if( 0 === i ) {
        x = Math.abs( flkty.x ) > flkty.slidesWidth ? ( flkty.slidesWidth + flkty.x + flkty.slides[flkty.slides.length - 1 ].outerWidth + slide.target ) : ( slide.target + flkty.x );
      } else if( i === flkty.slides.length - 1 ) {
        x = Math.abs( flkty.x ) + flkty.slides[i].outerWidth < flkty.slidesWidth ? ( slide.target - flkty.slidesWidth + flkty.x - flkty.slides[i].outerWidth ) : ( slide.target + flkty.x );
      } else {
        x = slide.target + flkty.x;
      }
    img.style[ transformProp ] = 'translateX(' + x * ( -1 / 3 ) + 'px)';
  });
});

AOS.init({
  once: true
});

  $("#main-header .nav-item a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });

  $("#row-article .col-md-6").slice(0, 2).show();
  $("#loadMore").on('click', function (e) {
    $(".col-md-6:hidden").slice(0, 2).slideDown();
     if ($(".col-md-6:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top -400
        }, 1500);
  });
});