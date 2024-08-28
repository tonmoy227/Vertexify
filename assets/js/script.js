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
		};			/*
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

	})(jQuery);