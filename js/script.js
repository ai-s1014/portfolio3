//lenis
const lenis = new Lenis();

// // モーダルを開くボタン
// // Intersection Observerのコールバック関数
// const callback = (entries, observer) => {
// 	entries.forEach(entry => {
// 	  if (entry.isIntersecting) {
// 		// スクロールを止める
// 		lenis.stop();
// 	  } else {
// 		// モーダルを再開
// 		lenis.start();
// 	  }
// 	});
//   };
  
//   // 監視対象の要素を取得
//   const targetElement = document.querySelector('.c-slider');

//   // Intersection Observerを作成
//   const options = {
// 	rootmargin: '-50% 0 0 -50%'
// };
//   const observer = new IntersectionObserver(callback, options);
  
//   // 要素を監視対象に登録
//   observer.observe(targetElement);
  

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);




// header
$('.menu-btn').on('click', function() {
	$(this).toggleClass('open');
	$('.header').toggleClass('open');
});

// ロゴとメニューボタン スクロールで色変更
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
        // スクロール位置が0より大きい場合、クラスを切り替える
        $('.main-logo').addClass('scroll');
        $('.menu-btn').addClass('color-change');
    } else {
        // スクロール位置が0以下の場合、クラスを切り替える
        $('.main-logo').removeClass('scroll');
        $('.menu-btn').removeClass('color-change');
    }
});

//scroll-container 要素拡大
$('.gallery').each(function(){
	var $win = $(window),
		  $winH = $win.height(),
		  $connect = $(this),
		  position = $connect.offset().top,
		  current = 0,
		  scroll;
	$win.on('load scroll', function(){
		  scroll = $win.scrollTop();
		  current = Math.max(0, (1 - (position - scroll) / $winH) * 2);

      if (scroll > position - $winH) {
			  $connect.css('transform', 'scale(' + current + ')');
		  }
		  if (current > 1) {
			  current = 1;
		  }
	});
});


// swiper
const swiper1 = new Swiper('.swiper1', {
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

const swiper2 = new Swiper('.swiper2', {
	direction: 'vertical',
	slidesPerView: 1,
	centeredSlides: true,
	mousewheel: true,
	autoHeight: true,
	speed: 1000,
	keyboard: {
	  enabled: true,
	},
	mousewheel: {
		releaseOnEdges: true,
		forceToAxis: true,
		sensitivity: 1,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	  },
});