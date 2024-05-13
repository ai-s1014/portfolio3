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
});

document.addEventListener('DOMContentLoaded', function() {
	var swiper;
    // 有効化時のオプションを記述
	function initializeSwiper() {
		const swiper3 = new Swiper('.swiper3', {
			loop: true,
			autoplay: {
				delay: 5000,
			},
			slidesPerView: 2,
			speed: 1000,
			mousewheel: true,
		});
	}

	// 無効化する用の記述
    function destroySwiper() {
        if (swiper) {
            swiper.destroy();
            swiper = undefined;
        }
    }
    // 横幅に応じて関数を実行
    function handleResize() {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (w > 1024) {
            if (!swiper) {
                initializeSwiper();
            }
        } else {
            destroySwiper();
        }
    }
    // 初回実行
    handleResize();
    window.addEventListener('resize', handleResize);
});

// gallery