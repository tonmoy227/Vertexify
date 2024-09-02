/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	const lenis = new Lenis()
	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)
	/*
preloader
====start====
*/
	jQuery(window).on('load', function(){
		jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
	});

	/*
Wow Animation
====Start====
*/
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	$(window).on("load", function () {
		Splitting();
	});
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	/*
Background Image
====start====
*/
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	/*
Header Area
====start====
*/
	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}

	TXTheaderSticky();
		/*
Service Slider
====start====
*/
	var swiper = new Swiper(".vt-service-thumb", {
		spaceBetween: 0,
		slidesPerView: 6,
		freeMode: true,
		direction: 'vertical',
		watchSlidesProgress: true,
		pagination: {
			el: ".vt-service-pagination",
			clickable: true,
		},
	});
	var swiper2 = new Swiper(".vt-service-slider", {
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
		pagination: {
			el: ".vt-service-pagination",
			clickable: true,
		},
	});
			/*
Service Slider 2
====start====
*/
	if ($('.vt-service-slider-2').length > 0 ) {
		var swiper2 = new Swiper(".vt-service-slider-2", {
			slidesPerView: 3,
			loop: true,
			spaceBetween: 32,
			roundLengths: true,
			speed: 1000,
			navigation: {
				nextEl: ".vt-ser-next",
				prevEl: ".vt-ser-prev",
			},
			breakpoints: {  
				'1400': {
					slidesPerView: 3,
				},
				'1300': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 2,
				},
				'767': {
					slidesPerView: 2 ,
				},
				'576': {
					slidesPerView: 1,
				},
				'480': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	};
			/*
Faq Active
====start====
*/
	$(document).on('click', '.vt-faq-item-area .accordion-item', function(){
		$(this).addClass('faq_active').siblings().removeClass('faq_active')
	});
				/*
Testimonial Slider
====start====
*/
	if ($('.vt-testimonial-slider').length > 0 ) {
		var swiper2 = new Swiper(".vt-testimonial-slider", {
			slidesPerView: 3,
			loop: true,
			spaceBetween: 32,
			roundLengths: true,
			centeredSlides: true,
			speed: 1000,
			navigation: {
				nextEl: ".vt-testi-next",
				prevEl: ".vt-testi-prev",
			},
			pagination: {
				el: ".vt-testi-pagination",
				clickable: true,
			},
			breakpoints: {  
				'1400': {
					slidesPerView: 3,
				},
				'1300': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'767': {
					slidesPerView: 2 ,
				},
				'576': {
					slidesPerView: 1,
				},
				'480': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	};
					/*
Client Logo Slider
====start====
*/
	if ($('.vt-contact-logo-slide').length > 0 ) {
		var swiper2 = new Swiper(".vt-contact-logo-slide", {
			loop: true,
			speed: 1000,
			slidesPerView: 3,
			spaceBetween: 50,
			roundLengths: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			breakpoints: {  
				'1400': {
					slidesPerView: 3,
				},
				'1300': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 3,
				},
				'767': {
					slidesPerView: 3 ,
				},
				'576': {
					slidesPerView: 3,
				},
				'480': {
					slidesPerView: 2,
				},
				'0': {
					slidesPerView: 2,
				},
			},
		});
	};
					/*
Txt-item-active
====start====
*/
	jQuery(window).on('load', function(){
		const boxes = gsap.utils.toArray('.txt_item_active');
		boxes.forEach(svg => {
			gsap.to(svg, {
				scrollTrigger: {
					trigger: svg,
					start: "top 100%",
					end: "bottom bottom",
					toggleClass: "active",
					duration: 3,
					toggleActions: "play play play reverse",
					once: true,
				}
			});
		});
	});

				/*
Testimonial Slider
====start====
*/
	if ($('.vt-testimonial-slider-2').length > 0 ) {
		var swiper2 = new Swiper(".vt-testimonial-slider-2", {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 0,
			speed: 1000,
			navigation: {
				nextEl: ".vt-testi-next-2",
				prevEl: ".vt-testi-prev-2",
			},
			pagination: {
				el: ".vt-testi-pagination-2",
				type: 'fraction',
				formatFractionCurrent: function (number) {
					if (number < 10) {
						return '0' + number;
					} else {
						return number;
					}
				}
				
			},
		});
	};

				/*
Service Scroll
====start====
*/
	gsap.utils.toArray('.vt-service-content-6').forEach((el, index) => { 
		let Vertex = gsap.timeline({
			scrollTrigger: {
				trigger: ".vt-service-section-6",
				scrub: 6,
				start: "top 20%",
				end: "bottom 20%",
				toggleActions: "play none none reverse", 
				markers: false
			}
		})

		Vertex
		.set(el, {transformOrigin: 'top bottom'})
		.fromTo(el, { x: 0  }, { x: -1200 , duration: 30, immediateRender: false})
	});
					/*
Animation
====start====
*/
	var st = jQuery(".tx-split-text");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		gsap.set(el, { perspective: 1000 });
		if( jQuery(el).hasClass('banner_title_line') ){
			gsap.set(el.split.words, {
				opacity: 0,
				y: 100,
				ease: "circ.out",
			});
		}
		el.anim = gsap.to(el.split.words, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			y: "0",
			scale: 1,
			opacity: 1,
			duration: 1, 
			stagger: 0.25,
		});
	});
	gsap.utils.toArray(".vt-text p").forEach(e => {
		let i = gsap.timeline({
			scrollTrigger: {
				trigger: e,
				start: "top 90%",
				duration: 2,
				end: "bottom 60%",
				scrub: !1,
				markers: !1,
				toggleActions: "play none none none"
			}
		}),
		t = new SplitText(e, {
			type: "lines"
		});
		gsap.set(e, {
			perspective: 400
		}), t.split({
			type: "lines"
		}), i.from(t.lines, {
			duration: 1,
			delay: .5,
			opacity: 0,
			rotationX: -80,
			force3D: !0,
			transformOrigin: "top center -50",
			stagger: .1
		})
	})
})(jQuery);