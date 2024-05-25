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
		$('.header-logo').addClass('scroll');
        $('.menu-btn').addClass('color-change');
    } else {
        // スクロール位置が0以下の場合、クラスを切り替える
        $('.main-logo').removeClass('scroll');
		$('.header-logo').removeClass('scroll');
        $('.menu-btn').removeClass('color-change');
    }
});

// c-slider 要素固定
const options = {
	root: null, // ビューポートを使用する場合はnull
	rootMargin: '-50% 0% -50% 0%', // マージンを調整する場合は適切な値を設定
	threshold: 0 // 交差判定の閾値を設定
  };

const observer = new IntersectionObserver(itemIntersect, options);

const cSliderElements = document.querySelectorAll('.c-slider');

cSliderElements.forEach(item => {
  observer.observe(item);
});



function itemIntersect(entries) {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		// 要素が表示された時の処理
		entry.target.classList.add('is-fixed'); // 例: 'is-fixed'クラスを追加
	  } else {
		// 要素が非表示になった時の処理
		entry.target.classList.remove('is-fixed'); // 例: 'is-fixed'クラスを削除
	  }
	});
  }

// var contactTop = $('.c-slider').offset().top;
// function scrollFixTop() {
//   var scroll = $(window).scrollTop();
//   if(scroll >= contactTop) {
//     $('.c-slider').addClass('is-fixed');
//   } else {
//     if($('.c-slider').hasClass('is-fixed')) {
//       $('.c-slider').removeClass('is-fixed');
//     }
//   }
// };
// $(window).scroll(function (){
//   scrollFixTop();
// });

//scroll-container 要素拡大
$(document).ready(function() {
	var $win = $(window),
		$winH = $win.height(),
		$connect = $('.gallery-wrapper'),
		position = $connect.offset().top,
		current = 0,
		scroll;
  
	$win.on('scroll', function() {
	  scroll = $win.scrollTop();
	  current = Math.max(1, (1 - (position - scroll) / $winH) * 2);
  
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

const thumb = document.querySelectorAll('.thumb-slide');
const switchThumb = (index) => {
	// すべてのサムネイルから thumb-slide-active クラスを削除
	thumb.forEach((element) => {
	  element.classList.remove('thumb-slide-active');
});

	// クリックされたサムネイルに thumb-slide-active クラスを追加
	thumb[index].classList.add('thumb-slide-active');
};
  
  // サムネイル要素にクリックイベントリスナーを追加
  thumb.forEach((element, index) => {
	element.addEventListener('click', () => {
	  switchThumb(index);
	});
  });

const swiper3 = new Swiper('.swiper3', {
	allowTouchMove: true,
	centeredSlides: true,
	followFinger: true,
	loop: true,
	autoplay: {
		delay: 6000,
	},
	on: {
		afterInit: (swiper) => {
		thumb[swiper.realIndex].classList.add('thumb-slide-active');
		for (let i = 0; i < thumb.length; i++) {
		thumb[i].onclick = () => {
			swiper.slideTo(i);
		};
		}
	},
	slideChange: (swiper) => {
		switchThumb(swiper.realIndex);
	},
	}
});

