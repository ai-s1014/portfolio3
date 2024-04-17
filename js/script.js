// header
$('.menu-btn').on('click', function() {
	$(this).toggleClass('open');
	$('.header-nav').toggleClass('open');
	$('.nav-wrapper').toggleClass('open');
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
});