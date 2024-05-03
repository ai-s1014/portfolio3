// header
$('.menu-btn').on('click', function() {
	$(this).toggleClass('open');
	$('.header').toggleClass('open');
});


// swiper
const swiper = new Swiper('.nav-swiper', {
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

const swiper = new Swiper('.c-swiper', {
	direction: 'vertical',
});
