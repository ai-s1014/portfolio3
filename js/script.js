// header ハンバーガーメニュー
$('.menu-btn').on('click', function() {
	$(this).toggleClass('open');
	$('.header').toggleClass('open');
});

// header ハンバーガメニュースクロール無効化
// ナビゲーションがクリックされたかどうかのフラグ
let navClicked = false;

// ナビゲーション要素を取得
const navElement = document.querySelector('.menu-btn');

// ナビゲーションがクリックされたときの処理
navElement.addEventListener('click', () => {
  // フラグを反転させる
  navClicked = !navClicked;
  const hl = document.querySelector('.header-logo')

  // クリックされたらスクロールを無効化
  if (navClicked) {
    document.body.style.overflow = 'hidden';
	document.hl.style.display = 'none';
  } else {
    // クリックされなかったらスクロールを有効化
    document.body.style.overflow = 'auto';
  }
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

// scroll-contents 拡大
window.addEventListener('scroll', function() {
	const sc = document.querySelector('.scroll-contents');

	if (window.scrollY > 350) {
	  sc.classList.add('scale');
	} else {
	  sc.classList.remove('scale');
	}
});

// scroll-contents ボトルの画像 アニメーション
const options1 = {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 1
};

const targets1 = document.querySelectorAll('.side-img');
const matchMedia = window.matchMedia('(min-width:1024px)');


const c1 = function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting && matchMedia.matches) {
		entry.target.classList.add('scrollUp');
		} else if(!matchMedia.matches) {
		entry.target.classList.remove('scrollUp');
		}
	});
};

const io1 = new IntersectionObserver(c1, options1);

targets1.forEach(target => {
	io1.observe(target);
});

// c-slider 要素固定
let options2 = {
	root: null,
	rootMargin: '-50% 0px -50% 0px',
	threshold: 0
}

const target2 = document.querySelector('.c-sticky');

const c2 =function(entries, observer) {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.add('is-fixed');
		} else {
			entry.target.classList.remove('is-fixed');
		}
	});
}

const io2 = new IntersectionObserver(c2, options2);
io2.observe(target2);


// 表示時のアニメーション
let options3 = {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0
}

const targets3 = document.querySelectorAll('.scroll-effect');

const c3 =function(entries, observer) {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.add('animation');
		} else {
			entry.target.classList.remove('animation');
		}
	});
}

const io3 = new IntersectionObserver(c3, options3);
targets3.forEach(target => {
	io3.observe(target);
});

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
	  $scrollUp = $('.scroll-up');
	  $scrollDown = $('.scroll-down');

	  if (scroll > position - $winH) {
		$connect.css('transform', 'scale(' + current + ')');
	  }
	  if (current > 1) {
		current = 1;
	  }
	});
  });

const scrollUp = document.querySelector('.scroll-up'); //要素取得
const scrollDown = document.querySelector('.scroll-down'); //要素取得

window.addEventListener('scroll', () => { //eventlistener定義
	scrollUp.style.setProperty('--scroll',window.scrollY + 'px');
	//カスタムプロパティ --scroll の値にy軸方向のスクロール量を代入
	scrollDown.style.setProperty('--scroll',window.scrollY + 'px');
	//カスタムプロパティ --scroll の値にy軸方向のスクロール量を代入
})

// swiper
const swiper1 = new Swiper('.swiper1', {
	loop: true,
	autoplay: {
		delay: 3000,
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
	// fadeEffect: {
	// 	crossFade: true
	//   },
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

