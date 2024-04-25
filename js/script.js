// header
$('.menu-btn').on('click', function() {
	$(this).toggleClass('open');
	$('.header').toggleClass('open');
});


// swiper
const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: {
		delay: 5000,
	},
	allowTouchMove: false,
	followFinger: false,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	  },
	speed: 0,
});