$(function() {
  smoothScroll(300);
  mobileNav();
});

$('#carousel').slick({
  dots: true,
  nextArrow: false,
  prevArrow: false,
});

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
  $('a[href^="#"]').on('click', function(){
    var status = $('.mobile-nav-toggle').hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }

  });

}



function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  //if (wScroll > $('.logo-container').offset().top - $(window).height()){

    //$('.logo-hot').css({
      //'transform' : 'translate(0px, -'+ wScroll /60 +'%)'
    //});

  //}

  //if(wScroll > $('.logo-container').offset().top - $(window).height()){

    //$('.logo-container').css({'background-position':'center' + (wScroll - $('.perriscope').offset().top / 400)});

    //var opacity = (wScroll - $('.logo-container').offset().top + 650) / (wScroll / 4)

    //$('.logo-container').css({'opacity': opacity});
  //}


  if (wScroll > $('.perriscope').offset().top - $(window).height()){

    $('.jacket').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }

  if(wScroll > $('.perriscope').offset().top - $(window).height()){

    $('.jacket').css({'background-position':'center' + (wScroll - $('.perriscope').offset().top / 800)});

    var opacity = (wScroll - $('.jacket').offset().top + 400) / (wScroll / 64)

    $('.jacket').css({'opacity': opacity});
  }

  if(wScroll > $('.perriscope').offset().top - $(window).height()){

    $('.perriscope').css({'background-position':'center' + (wScroll - $('.perriscope').offset().top / 800)});

    var opacity = (wScroll - $('.perriscope').offset().top + 400) / (wScroll / 64)

    $('.tint').css({'opacity': opacity});
  }


  if(wScroll > $('.projects-container').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.projects-container').offset().top +$(window).height() - 200)).toFixed();

    $('.project-community-garden').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.6) +'px)'});

    $('.project-store-house').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.6) +'px)'});

    $('.project-blanket-project').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 6) +'px)'});

  }
});
