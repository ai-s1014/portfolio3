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

// // c-slider 要素固定
let set_position = 0;

window.addEventListener('scroll', function () {
	const cSlide = document.querySelector('.swiper2');

	if (set_position < document.documentElement.scrollTop) {
		cSlide.classList.add('down');
		cSlide.classList.remove('up');

	} else {
		cSlide.classList.add('up');
		cSlide.classList.remove('down');
	}

	set_position = document.documentElement.scrollTop;
});


// let options2 = {
// 	root: null,
// 	rootMargin: '-50% 0px -50% 0px',
// 	threshold: 0
// }

// const target2 = document.querySelector('.c-sticky');

// const c2 =function(entries, observer) {
// 	entries.forEach(entry => {
// 		if(entry.isIntersecting) {
// 			entry.target.classList.add('is-fixed');
// 		} else {
// 			entry.target.classList.remove('is-fixed');
// 		}
// 	});
// }

// const io2 = new IntersectionObserver(c2, options2);
// io2.observe(target2);


// 表示時のアニメーション
let options3 = {
	root: null,
	rootMargin: '0px 0px 0px 0px',
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
window.addEventListener('scroll', function() {
	if (window.scrollY > 5297) {
		console.log(window.scrollY);

        //左右のスクロールを取得
	    const left = document.querySelector('.img-col-l');
        const right = document.querySelector('.img-col-r');

        // それぞれのtranslateYをスクロール量÷数値（右はマイナス）で変わっていく
        left.style.transform = "translateY("+ window.scrollY/80 +"px)";
        right.style.transform = "translateY(-"+ window.scrollY/50 +"px)";

        if(window.scrollY > 5370) {
			// console.log(window.scrollY);
            const gallery = document.querySelector('.gallery-image');
            gallery.style.transform = "scale("+ window.scrollY/5000 +")";
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
	on: {
		// スライドの切り替わりアニメーションが終了した時に実行
		slideChangeTransitionEnd: function() {
			let num = this.activeIndex + 1;
			const cSlide = document.querySelector('.swiper2');

			 if(cSlide.classList.contains('up')) {
				if(num == 1) {
					$('body').css('overflow', 'auto');
				 } else {
					$('body').css('overflow', 'hidden');
				 }
			} else if(cSlide.classList.contains('down')) {
				if(num == 3) {
					$('body').css('overflow', 'auto');
				 } else {
					$('body').css('overflow', 'hidden');
				 }
			}
		}
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

