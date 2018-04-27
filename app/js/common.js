$(function() {

	$('.reviews-slider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navContainerClass: 'reviews-slider-nav'
	});

	$('a.order-button').click(function(){
		$('html, body').animate({
			scrollTop: $('#bottom-form').offset().top+'px'
		});
		return false;
	});


	$('.section-3').waypoint(function() {
		$('.section-3-item').each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("fadeOut").addClass("fadeIn");
			}, 200*index);
		});

		}, {
			offset : "80%"
	});


});
