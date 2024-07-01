const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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
  const logo = document.querySelector('.header-logo')

  // クリックされたらスクロールを無効化
  if (navClicked) {
    body.style.overflow = 'hidden';
	logo.style.display = 'none';
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

// 表示時のアニメーション
let options3 = {
	root: null,
	rootMargin: '815px 0px 815px 0px',
	threshold: 0
}

const targets3 = document.querySelectorAll('.scroll-effect');

const c3 = function(entries, observer) {
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

// gallery-wrapper 拡大
let options4 = {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0
}

const target4 = document.querySelector('.gallery');

const c4 = function(entries, observer) {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.add('scale');
		} else {
			entry.target.classList.remove('scale');
		}
	});
}

const io4 = new IntersectionObserver(c4, options4);
io4.observe(target4);



const gallery = document.querySelector('.gallery');

window.addEventListener('scroll', function() {
	if (gallery.classList.contains('scale')) {
		if (window.innerWidth >= 767) {
			// 767px以上
			if (window.scrollY > 4800) {

				//左右のスクロールを取得
				const left = document.querySelector('.img-col-l');
				const right = document.querySelector('.img-col-r');

				// それぞれのtranslateYをスクロール量÷数値（右はマイナス）で変わっていく
				left.style.transform = "translateY("+ window.scrollY/80 +"px)";
				right.style.transform = "translateY(-"+ window.scrollY/50 +"px)";

				if(window.scrollY > 6142) {
					const gallery = document.querySelector('.gallery-image');
					gallery.style.transform = "scale("+ window.scrollY/6000 +")";
				}
			}
		} else if (window.innerWidth <= 766) {

			// 765px未満
			if (window.scrollY > 3419.5) {

				//左右のスクロールを取得
				const left = document.querySelector('.img-col-l');
				const right = document.querySelector('.img-col-r');

				// それぞれのtranslateYをスクロール量÷数値（右はマイナス）で変わっていく
				left.style.transform = "translateY("+ window.scrollY/200 +"px)";
				right.style.transform = "translateY(-"+ window.scrollY/200 +"px)";

				if(window.scrollY > 4078) {
					const gallery = document.querySelector('.gallery-image');
					gallery.style.transform = "scale("+ window.scrollY/3000 +")";
				}
			}
		}
	}
});

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

// carousel
	const item1 = $('.item1').offset().top;
    const item2 = $('.item2').offset().top;
    const item3 = $('.item3').offset().top;

	console.log(item1);

    $(window).scroll(function() {
      const scroll = $(this).scrollTop();

      if (scroll >= item1 ) {
        $('.item').removeClass('active');
        $('.item1').addClass('active');
      }
      if (scroll >= item2) {
        $('.item').removeClass('active');
        $('.item2').addClass('active');
      }
      if (scroll >= item3) {
        $('.item').removeClass('active');
        $('.item3').addClass('active');
      }
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

