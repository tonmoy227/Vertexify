! function() {
    "use strict";
    var e = {
        init: function() {
            this.Basic.init()
        },
        Basic: {
            init: function() {
                this.preloader(), this.BackgroundImage(), this.Animation(), this.StickyHeader(), this.MobileMenu(), this.scrollTop(), this.counterUp(), this.HapticAnimation(), this.TitleAnimation(), this.TwinMax(), this.HomeThreeSliderSwiper(), this.CircleProgress(), this.TeamSlider(), this.TestimonialSlider(), this.SponsorSlider1(), this.HomeOneSliderSwiper(), this.TestimonialSliderTwo(), this.textanimation(), this.TeamSliderThree(), this.TestimonialSliderThree(), this.SponsorSlider3(), this.PortfolioFilterImage(), this.BlogSliderThree()
            },
            preloader: function() {
                jQuery(window).on("load", function() {
                    jQuery("#preloader").fadeOut("slow", function() {
                        jQuery(this).remove()
                    })
                })
            },
            BackgroundImage: function() {
                $("[data-background]").each(function() {
                    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
                }), $(".scene").length > 0 && $(".scene").parallax({
                    scalarX: 10,
                    scalarY: 10
                })
            },
            Animation: function() {
                $(".wow").length && new WOW({
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0
                }).init(), $(window).on("load", function() {
                    let e = gsap.utils.toArray(".tx-animation-style1,.hap-img-animation");
                    e.forEach(e => {
                        gsap.to(e, {
                            scrollTrigger: {
                                trigger: e,
                                start: "top 70%",
                                end: "bottom bottom",
                                toggleClass: "active",
                                once: !0
                            }
                        })
                    })
                })
            },
            counterUp: function() {
                $(".counter").counterUp({
                    delay: 15,
                    time: 1500
                }), $(".progress-bar").length && ($(".progress-bar").appear(), $(document.body).on("appear", ".progress-bar", function() {
                    var e = $(this);
                    if (!e.hasClass("appeared")) {
                        var i = e.data("percent");
                        e.css("width", i + "%").addClass("appeared").parent().append("<span>" + i + "%</span>")
                    }
                }))
            },
            StickyHeader: function() {
                jQuery(window).on("scroll", function() {
                    jQuery(window).scrollTop() > 250 ? jQuery(".bi-header-section").addClass("sticky-on") : jQuery(".bi-header-section").removeClass("sticky-on")
                }), jQuery(document).ready(function(e) {
                    0 < e(".navSidebar-button").length && e(".navSidebar-button").on("click", function(i) {
                        i.preventDefault(), i.stopPropagation(), e(".info-group").addClass("isActive")
                    }), 0 < e(".close-side-widget").length && e(".close-side-widget").on("click", function(i) {
                        i.preventDefault(), e(".info-group").removeClass("isActive")
                    }), e(".xs-sidebar-widget").on("click", function(e) {
                        e.stopPropagation()
                    })
                }), $(".search-btn").on("click", function() {
                    $(".search-body").toggleClass("search-open")
                }), $(document).ready(function() {
                    $(".cart_close_btn, .body-overlay").on("click", function() {
                        $(".cart_sidebar").removeClass("active"), $(".body-overlay").removeClass("active")
                    }), $(".header-cart-btn").on("click", function() {
                        $(".cart_sidebar").addClass("active"), $(".body-overlay").addClass("active")
                    })
                }), jQuery(window).on("scroll", function() {
                    jQuery(window).scrollTop() > 250 ? jQuery(".hap-header-section").addClass("sticky-on") : jQuery(".hap-header-section").removeClass("sticky-on")
                })
            },
            MobileMenu: function() {
                $(".open_mobile_menu").on("click", function() {
                    $(".mobile_menu_wrap").toggleClass("mobile_menu_on")
                }), $(".open_mobile_menu").on("click", function() {
                    $("body").toggleClass("mobile_menu_overlay_on")
                }), $(".mobile_menu li.dropdown ul").length && ($(".mobile_menu li.dropdown").append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>'), $(".mobile_menu li.dropdown .dropdown-btn").on("click", function() {
                    $(this).prev("ul").slideToggle(500)
                })), $(".dropdown-btn").on("click", function() {
                    $(this).toggleClass("toggle-open")
                })
            },
            TwinMax: function() {
                var e = $(".cursor");
                $(window).on("mousemove", function i(t) {
                    var s = t.clientX + "px",
                        n = t.clientY + "px";
                    TweenMax.to(e, .2, {
                        left: s,
                        top: n,
                        ease: "Power1.easeOut"
                    })
                }), $("a, button, .zoom-cursor").on("mouseenter", function i(t) {
                    TweenMax.to(e, .1, {
                        scale: 3,
                        ease: "Power1.easeOut"
                    }), $(e).removeClass("cursor-close")
                }), $(".trigger-close").on("mouseenter", function i(t) {
                    TweenMax.to(e, .1, {
                        scale: 3,
                        ease: "Power1.easeOut"
                    }), $(e).addClass("cursor-close")
                }), $("a, button, .zoom-cursor, .trigger-close, .trigger-plus").on("mouseleave", function i(t) {
                    TweenLite.to(e, .1, {
                        scale: 1,
                        ease: "Power1.easeOut"
                    }), $(e).removeClass("cursor-close")
                })
            },
            scrollTop: function() {
                $(window).on("scroll", function() {
                    $(this).scrollTop() > 200 ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut()
                }), $(".scrollup").on("click", function() {
                    return $("html, body").animate({
                        scrollTop: 0
                    }, 800), !1
                });
                var e = $(".bi-storyboard-item");
                e.mouseover(function() {
                    e.removeClass("active"), $(this).addClass("active")
                }), jQuery(".video_box").magnificPopup({
                    disableOn: 200,
                    type: "iframe",
                    mainClass: "mfp-fade",
                    removalDelay: 160,
                    preloader: !1,
                    fixedContentPos: !1
                }), $(".zoom-gallery").magnificPopup({
                    delegate: "a",
                    type: "image",
                    closeOnContentClick: !1,
                    closeBtnInside: !1,
                    mainClass: "mfp-with-zoom mfp-img-mobile",
                    gallery: {
                        enabled: !0
                    },
                    zoom: {
                        enabled: !0,
                        duration: 300,
                        opener: function(e) {
                            return e.find("img")
                        }
                    }
                })
            },
            HapticAnimation: function() {
                gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin), gsap.config({
                    nullTargetWarn: !1
                });
                gsap.utils.toArray(".headline-title").forEach(e => {
                    let i = gsap.timeline({
                            scrollTrigger: {
                                trigger: e,
                                start: "top 90%",
                                end: "bottom 60%",
                                scrub: !1,
                                markers: !1,
                                toggleActions: "play none none none"
                            }
                        }),
                        t = new SplitText(e, {
                            type: "words, lines"
                        });
                    gsap.set(e, {
                        perspective: 400
                    }), t.split({
                        type: "lines"
                    }), i.from(t.lines, {
                        duration: 1,
                        delay: .3,
                        opacity: 0,
                        rotationX: -80,
                        force3D: !0,
                        transformOrigin: "top center -50",
                        stagger: .1
                    })
                }), $(".bi-btn-hover").on("mouseenter", function(e) {
                    var i = e.pageX - $(this).offset().left,
                        t = e.pageY - $(this).offset().top;
                    $(this).find("span").css({
                        top: t,
                        left: i
                    })
                }), $(".bi-btn-hover").on("mouseout", function(e) {
                    var i = e.pageX - $(this).offset().left,
                        t = e.pageY - $(this).offset().top;
                    $(this).find("span").css({
                        top: t,
                        left: i
                    })
                });
                let e = gsap.utils.toArray(".bi-btn-area");
                if (e.length > 0) {
                    var i = gsap.utils.toArray(".bi-btn-area");
                    let t = gsap.utils.toArray(".bi-btn-item");
                    i.forEach((e, i) => {
                        $(e).mouseleave(function(e) {
                            gsap.to(t[i], .5, {
                                x: 0,
                                y: 0,
                                ease: Power2.easeOut
                            })
                        })
                    }), gsap.utils.toArray(".bi-btn-area")
                }
            },
            TitleAnimation: function() {
                $(document).ready(function() {
                    var e = $(".tx-split-text");
                    0 != e.length && (gsap.registerPlugin(SplitText), e.each(function(e, i) {
                        i.split = new SplitText(i, {
                            type: "lines,words,chars",
                            linesClass: "split-line"
                        }), gsap.set(i, {
                            perspective: 400
                        }), $(i).hasClass("split-in-fade") && gsap.set(i.split.chars, {
                            opacity: 0,
                            ease: "Back.easeOut"
                        }), $(i).hasClass("split-in-right") && gsap.set(i.split.chars, {
                            opacity: 0,
                            x: "50",
                            ease: "Back.easeOut"
                        }), $(i).hasClass("split-in-left") && gsap.set(i.split.chars, {
                            opacity: 0,
                            x: "-50",
                            ease: "circ.out"
                        }), $(i).hasClass("split-in-up") && gsap.set(i.split.chars, {
                            opacity: 0,
                            y: "80",
                            ease: "circ.out"
                        }), $(i).hasClass("split-in-down") && gsap.set(i.split.chars, {
                            opacity: 0,
                            y: "-80",
                            ease: "circ.out"
                        }), $(i).hasClass("split-in-rotate") && gsap.set(i.split.chars, {
                            opacity: 0,
                            rotateX: "50deg",
                            ease: "circ.out"
                        }), $(i).hasClass("split-in-scale") && gsap.set(i.split.chars, {
                            opacity: 0,
                            scale: "0.5",
                            ease: "circ.out"
                        }), i.anim = gsap.to(i.split.chars, {
                            scrollTrigger: {
                                trigger: i,
                                start: "top 90%"
                            },
                            x: "0",
                            y: "0",
                            rotateX: "0",
                            scale: 1,
                            opacity: 1,
                            duration: .8,
                            stagger: .02
                        })
                    }))
                });
                gsap.utils.toArray(".bins-text p").forEach(e => {
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
                }), $(window).on("load", function() {
                    let e = gsap.utils.toArray(".tx-animation-style1,.bi-img-animation");
                    e.forEach(e => {
                        gsap.to(e, {
                            scrollTrigger: {
                                trigger: e,
                                start: "top 70%",
                                end: "bottom bottom",
                                toggleClass: "active",
                                once: !0
                            }
                        })
                    })
                })
            },
            HomeOneSliderSwiper: function() {
                new Swiper(".bi-main-slider", {
                    spaceBetween: 30,
                    slidesPerView: 1,
                    effect: "fade",
                    loop: !0,
                    navigation: {
                        nextEl: ".bi-main-button-next",
                        prevEl: ".bi-main-button-prev"
                    }
                }), new Swiper(".bi-main-slider-4", {
                    spaceBetween: 30,
                    slidesPerView: 1,
                    effect: "fade",
                    spaceBetween: 10,
                    loop: !0,
                    loopedSlides: 50,
                    navigation: {
                        nextEl: ".bi-main-button-next-4",
                        prevEl: ".bi-main-button-prev-4"
                    }
                })
            },
            HomeThreeSliderSwiper: function() {
                new Swiper(".bi-slider-wrapper-3", {
                    spaceBetween: 30,
                    slidesPerView: 1,
                    effect: "fade",
                    loop: !0,
                    navigation: {
                        nextEl: ".bi-main-button-next_3",
                        prevEl: ".bi-main-button-prev_3"
                    },
                    pagination: {
                        el: ".swiper-paginations",
                        clickable: !0
                    }
                })
            },
            CircleProgress: function() {
                $(".count-box").length && $(".count-box").appear_c(function() {
                    var e = $(this),
                        i = e.find(".count-text").attr("data-stop"),
                        t = parseInt(e.find(".count-text").attr("data-speed"), 10);
                    e.hasClass("counted") || (e.addClass("counted"), $({
                        countNum: e.find(".count-text").text()
                    }).animate({
                        countNum: i
                    }, {
                        duration: t,
                        easing: "linear",
                        step: function() {
                            e.find(".count-text").text(Math.floor(this.countNum))
                        },
                        complete: function() {
                            e.find(".count-text").text(this.countNum)
                        }
                    }))
                }, {
                    accY: 0
                }), $(".dial").length && $(".dial").appear_c(function() {
                    var e = $(this);
                    e.attr("data-fgColor");
                    var i = e.attr("value");
                    e.attr("thickness"), e.knob({
                        value: 0,
                        min: 0,
                        max: 100,
                        skin: "tron",
                        readOnly: !0,
                        thickness: .2,
                        dynamicDraw: !0,
                        displayInput: !1
                    }), $({
                        value: 0
                    }).animate({
                        value: i
                    }, {
                        duration: 3500,
                        easing: "swing",
                        progress: function() {
                            e.val(Math.ceil(this.value)).trigger("change")
                        }
                    })
                }, {
                    accY: 0
                })
            },
            TeamSlider: function() {
                new Swiper(".bi-team-slider11", {
                    spaceBetween: 50,
                    slidesPerView: 2,
                    roundLengths: !0,
                    loop: !0,
                    loopAdditionalSlides: 30,
                    speed: 1e3,
                    navigation: {
                        nextEl: ".price-button-next",
                        prevEl: ".price-button-prev"
                    },
                    breakpoints: {
                        1600: {
                            slidesPerView: 2
                        },
                        1200: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 1
                        },
                        576: {
                            slidesPerView: 1
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }
                })
            },
            TestimonialSlider: function() {
                new Swiper(".bi-testimonial-slider", {
                    spaceBetween: 30,
                    slidesPerView: 1,
                    effect: "fade",
                    navigation: {
                        nextEl: ".testimoinal-button-next",
                        prevEl: ".testimoinal-button-prev"
                    }
                })
            },
            SponsorSlider1: function() {
                new Swiper(".bi-sponsor-slider", {
                    spaceBetween: 105,
                    slidesPerView: 5,
                    roundLengths: !0,
                    loop: !0,
                    loopAdditionalSlides: 30,
                    autoplay: {
                        enabled: !0,
                        delay: 6e3
                    },
                    speed: 400,
                    breakpoints: {
                        1600: {
                            slidesPerView: 5
                        },
                        1200: {
                            slidesPerView: 4
                        },
                        992: {
                            slidesPerView: 4
                        },
                        768: {
                            slidesPerView: 4
                        },
                        576: {
                            slidesPerView: 3
                        },
                        0: {
                            slidesPerView: 2
                        }
                    }
                })
            },
            TestimonialSliderTwo: function() {
                var e = new Swiper(".bi-testimonial-nav", {
                    loop: !0,
                    spaceBetween: 18,
                    slidesPerView: 3,
                    slidesPerView: 1,
                    centeredSlides: !0,
                    direction: "vertical",
                    breakpoints: {
                        1400: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 3,
                            direction: "horizontal"
                        },
                        991: {
                            slidesPerView: 3,
                            direction: "horizontal"
                        },
                        768: {
                            slidesPerView: 3,
                            direction: "horizontal"
                        },
                        577: {
                            slidesPerView: 3,
                            direction: "horizontal"
                        },
                        0: {
                            slidesPerView: 3,
                            direction: "horizontal"
                        }
                    }
                });
                new Swiper(".bi-testimonial-slider-for", {
                    loop: !0,
                    spaceBetween: 0,
                    effect: "fade",
                    slidesPerView: 1,
                    fadeEffect: {
                        crossFade: !0
                    },
                    thumbs: {
                        swiper: e
                    }
                })
            },
            TeamSliderThree: function() {
                new Swiper(".bi-team-slider-3", {
                    spaceBetween: 30,
                    slidesPerView: 4,
                    roundLengths: !0,
                    loop: !0,
                    loopAdditionalSlides: 30,
                    speed: 1e3,
                    navigation: {
                        nextEl: ".bi-team-button-next_3",
                        prevEl: ".bi-team-button-prev_3"
                    },
                    pagination: {
                        el: ".swiper-team-paginations",
                        clickable: !0
                    },
                    breakpoints: {
                        1600: {
                            slidesPerView: 4
                        },
                        1500: {
                            slidesPerView: 4
                        },
                        1400: {
                            slidesPerView: 3
                        },
                        1300: {
                            slidesPerView: 3
                        },
                        992: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 1
                        },
                        576: {
                            slidesPerView: 1
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }
                })
            },
            TestimonialSliderThree: function() {
                new Swiper(".bi-testimonial-slider-3", {
                    spaceBetween: 30,
                    slidesPerView: 3,
                    roundLengths: !0,
                    loop: !0,
                    loopAdditionalSlides: 30,
                    speed: 1e3,
                    pagination: {
                        el: ".swiper-testi-paginations",
                        clickable: !0
                    },
                    breakpoints: {
                        1600: {
                            slidesPerView: 3
                        },
                        1500: {
                            slidesPerView: 3
                        },
                        1400: {
                            slidesPerView: 2
                        },
                        1300: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 1
                        },
                        576: {
                            slidesPerView: 1
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }
                });
                var e = new Swiper(".bi-testimonial-slider-nav-4", {
                    loop: !0,
                    spaceBetween: 0,
                    speed: 500,
                    slidesPerView: 5,
                    centeredSlides: !0,
                    navigation: {
                        nextEl: ".testimonial-next_4",
                        prevEl: ".testimonial-prev_4"
                    },
                    breakpoints: {
                        1400: {
                            slidesPerView: 5
                        },
                        1200: {
                            slidesPerView: 5
                        },
                        992: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 3
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }
                });
                new Swiper(".bi-testimonial-slider-for-4", {
                    loop: !0,
                    spaceBetween: 10,
                    effect: "fade",
                    navigation: {
                        nextEl: ".testimonial-next_4",
                        prevEl: ".testimonial-prev_4"
                    },
                    thumbs: {
                        swiper: e
                    }
                }), new Swiper(".hap-testimonial-slider", {
                    spaceBetween: 50,
                    slidesPerView: 1,
                    roundLengths: !0,
                    loop: !0,
                    loopAdditionalSlides: 30,
                    speed: 1e3,
                    navigation: {
                        nextEl: ".hap-testimonial-button-next",
                        prevEl: ".hap-testimonial-button-prev"
                    },
                    breakpoints: {
                        1600: {
                            slidesPerView: 1
                        },
                        1200: {
                            slidesPerView: 1
                        },
                        992: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 1
                        },
                        576: {
                            slidesPerView: 1
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }
                })
            },
            SponsorSlider3: function() {
                new Swiper(".bi-sponsor-slider-3", {
                    spaceBetween: 135,
                    slidesPerView: 7,
                    roundLengths: !0,
                    loop: !0,
                    loopAdditionalSlides: 30,
                    autoplay: {
                        enabled: !0,
                        delay: 6e3
                    },
                    speed: 400,
                    breakpoints: {
                        1600: {
                            slidesPerView: 6
                        },
                        1200: {
                            slidesPerView: 5
                        },
                        992: {
                            slidesPerView: 4
                        },
                        768: {
                            slidesPerView: 4
                        },
                        576: {
                            slidesPerView: 3
                        },
                        0: {
                            slidesPerView: 2
                        }
                    }
                }), new Swiper(".hap-gallery-slide", {
                    slidesPerView: 7,
                    spaceBetween: 0,
                    loop: !0,
                    autoplay: {
                        enabled: !0,
                        delay: 6e3
                    },
                    speed: 500,
                    breakpoints: {
                        1600: {
                            slidesPerView: 7
                        },
                        1200: {
                            slidesPerView: 5
                        },
                        992: {
                            slidesPerView: 4
                        },
                        768: {
                            slidesPerView: 3
                        },
                        576: {
                            slidesPerView: 2
                        },
                        0: {
                            slidesPerView: 2
                        }
                    }
                })
            },
            textanimation: function() {
                if (window.innerWidth > 768) {
                    let e = Matter.Engine,
                        i = Matter.Render,
                        t = Matter.World,
                        s = Matter.Bodies,
                        n = Matter.Mouse,
                        o = Matter.MouseConstraint,
                        a = e.create(),
                        r = i.create({
                            element: document.querySelector(".service-matter"),
                            engine: a,
                            options: {
                                width: window.innerWidth,
                                height: window.innerWidth <= 768 ? 300 : 360,
                                background: "transparent",
                                wireframes: !1,
                                pixelRatio: window.devicePixelRatio
                            }
                        }),
                        l = r.canvas;
                    e.run(a), i.run(r);
                    let d = s.rectangle(r.options.width / 2, r.options.height, r.options.width, 30, {
                            isStatic: !0,
                            render: {
                                fillStyle: "transparent",
                                strokeStyle: "transparent"
                            }
                        }),
                        c = s.rectangle(0, r.options.height / 2, 30, r.options.height, {
                            isStatic: !0,
                            render: {
                                fillStyle: "transparent",
                                strokeStyle: "transparent"
                            }
                        }),
                        p = s.rectangle(r.options.width, r.options.height / 2, 30, r.options.height, {
                            isStatic: !0,
                            render: {
                                fillStyle: "transparent",
                                strokeStyle: "transparent"
                            }
                        });
                    t.add(a.world, [d, c, p]);
                    let u = ["#ffd1dc", "#d1ffd1", "#d1d1ff", "#ffecd1", "#ffd1ec"];

                    function f(e) {
                        let i = [],
                            t = .4 * e,
                            s = e,
                            n = Math.PI / 4;
                        for (let o = 0; o < 8; o++) {
                            let a = n * o,
                                r = o % 2 == 0 ? s : t,
                                l = Math.cos(a) * r,
                                d = Math.sin(a) * r;
                            i.push({
                                x: l,
                                y: d
                            })
                        }
                        return i
                    }
                    let g = n.create(r.canvas),
                        m = o.create(a, {
                            mouse: g,
                            constraint: {
                                render: {
                                    visible: !1
                                }
                            }
                        });
                    t.add(a.world, m), r.mouse = g;
                    let h = new IntersectionObserver(e => {
                        e.forEach(e => {
                            e.isIntersecting && (! function e() {
                                let i = window.innerWidth <= 768 ? {
                                        fontSize: 12,
                                        padding: 15,
                                        width: 200,
                                        height: 30,
                                        chamferRadius: 15
                                    } : {
                                        fontSize: 18,
                                        padding: 30,
                                        width: 350,
                                        height: 50,
                                        chamferRadius: 25
                                    },
                                    {
                                        fontSize: n,
                                        padding: o,
                                        width: l,
                                        height: d,
                                        chamferRadius: c
                                    } = i,
                                    p = w.map((e, i) => {
                                        let t = r.options.width / 2 + (Math.random() - .5) * 500;
                                        return r.context.font = `${n}px Inter, sans-serif`, u[Math.floor(Math.random() * u.length)], s.rectangle(t, -(100 * i), l || 350, d || 50, {
                                            chamfer: {
                                                radius: c
                                            },
                                            render: {
                                                fillStyle: "transparent",
                                                strokeStyle: "#9D83B4",
                                                lineWidth: 1,
                                                text: {
                                                    content: e,
                                                    size: n,
                                                    color: "#E8D9F5"
                                                }
                                            },
                                            velocity: {
                                                x: (Math.random() - .5) * 4,
                                                y: 4 * Math.random()
                                            }
                                        })
                                    });
                                window.addEventListener("resize", () => {
                                    t.clear(a.world, !0), e()
                                }), t.add(a.world, [...p]), r.context.font = "18px Inter, sans-serif", r.context.textAlign = "center", r.context.textBaseline = "middle", Matter.Events.on(r, "afterRender", () => {
                                    p.forEach(e => {
                                        let {
                                            x: i,
                                            y: t
                                        } = e.position, s = e.angle, {
                                            content: n,
                                            size: o,
                                            color: a
                                        } = e.render.text;
                                        r.context.font = `${o}px Inter, sans-serif`, r.context.save(), r.context.translate(i, t), r.context.rotate(s), r.context.fillStyle = a, r.context.fillText(n, 0, 0), r.context.restore()
                                    })
                                })
                            }(), h.unobserve(e.target))
                        })
                    }, {
                        threshold: .1
                    });
                    h.observe(l), m.mouse.element.removeEventListener("mousewheel", m.mouse.mousewheel), m.mouse.element.removeEventListener("DOMMouseScroll", m.mouse.mousewheel)
                }
                let w = ["User Interface Design", "Digital Marketing", "Lack of Brand Differentiation", "Application Development", "Application Development", "Scaling Difficulties", "Application Development", "Outdated Designs", "Products Designs", "Branding Designs", "3D Animations", "3D Illustration Design", "Web Application Development", "User Interface Design", ]
            },
            PortfolioFilterImage: function() {
                jQuery(window).on("load", function() {
                    $(".filtr-container").imagesLoaded(function() {});
                    var e = $(".filtr-container");
                    e.length && (e.filterizr({
                        layout: "sameWidth"
                    }), $(".filtr-button").on("click", function() {
                        $(".filtr-button.filtr-active").removeClass("filtr-active"), $(this).addClass("filtr-active")
                    }))
                });
                gsap.timeline({
                    scrollTrigger: {
                        trigger: ".portfolio-img",
                        start: "top bottom",
                        markers: !1,
                        scrub: 1,
                        end: "bottom center"
                    }
                }).to(".portfolio-img img", {
                    scale: 1.15,
                    duration: 1
                }), $("[data-countdown]").each(function() {
                    var e = $(this),
                        i = $(this).data("countdown");
                    e.hasClass("countdown-full-format") ? e.countdown(i, function(i) {
                        e.html(i.strftime('<div class="single"><h1>%Y</h1><p>Years</p></div> <div class="single"><h1>%m</h1><p>Months</p></div> <div class="single"><h1>%W</h1><p>Weeks</p></div> <div class="single"><h1>%d</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hours</p></div> <div class="single"><h1>%M</h1><p>Minutes</p></div> <div class="single"><h1>%S</h1><p>Second</p></div>'))
                    }) : e.countdown(i, function(i) {
                        e.html(i.strftime('<div class="single"><h1>%D</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hours</p></div> <div class="single"><h1>%M</h1><p>Minutes</p></div> <div class="single"><h1>%S</h1><p>Second</p></div>'))
                    })
                }), $(".bi-text-scroll-item-1").marquee({
                    speed: 50,
                    gap: 20,
                    delayBeforeStart: 0,
                    direction: "right",
                    duplicated: !0,
                    pauseOnHover: !0,
                    startVisible: !0
                }), $(".bi-text-scroll-item-2").marquee({
                    speed: 50,
                    gap: 20,
                    delayBeforeStart: 0,
                    direction: "left",
                    duplicated: !0,
                    pauseOnHover: !0,
                    startVisible: !0
                }), $(".bi-service-scroll-area").marquee({
                    speed: 10,
                    gap: 0,
                    delayBeforeStart: 0,
                    direction: "left",
                    duplicated: !0,
                    pauseOnHover: !0,
                    startVisible: !0
                }), $(".text_scroller_1").marquee({
                    speed: 50,
                    gap: 20,
                    delayBeforeStart: 0,
                    direction: "right",
                    duplicated: !0,
                    pauseOnHover: !0,
                    startVisible: !0
                }), $(".text_scroller_2").marquee({
                    speed: 50,
                    gap: 20,
                    delayBeforeStart: 0,
                    direction: "left",
                    duplicated: !0,
                    pauseOnHover: !0,
                    startVisible: !0
                }), $(".text_scroller_3").marquee({
                    speed: 50,
                    gap: 20,
                    delayBeforeStart: 0,
                    direction: "left",
                    duplicated: !0,
                    pauseOnHover: !0,
                    startVisible: !0
                }), $(document).on("click", ".bi-why-choose-text_3 .accordion-item", function() {
                    $(this).addClass("faq_bg").siblings().removeClass("faq_bg")
                }), $(".price-first-item").hover(function() {
                    $(".bi-pricing-plan-content-4").addClass("is-active")
                }, function() {
                    $(".bi-pricing-plan-content-4").removeClass("is-active")
                }), $(".price-last-item").hover(function() {
                    $(".bi-pricing-plan-content-4").addClass("is-last-active")
                }, function() {
                    $(".bi-pricing-plan-content-4").removeClass("is-last-active")
                })
            },
            BlogSliderThree: function() {
                new Swiper(".bi-blog-slider-3", {
                    spaceBetween: 30,
                    slidesPerView: 3,
                    roundLengths: !0,
                    loop: !0,
                    loopAdditionalSlides: 30,
                    speed: 1e3,
                    pagination: {
                        el: ".swiper-blog-paginations",
                        clickable: !0
                    },
                    breakpoints: {
                        1600: {
                            slidesPerView: 3
                        },
                        1500: {
                            slidesPerView: 3
                        },
                        1400: {
                            slidesPerView: 3
                        },
                        1300: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 1
                        },
                        576: {
                            slidesPerView: 1
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }
                }), new Swiper(".hap-team-slider", {
                    spaceBetween: 30,
                    slidesPerView: 3,
                    roundLengths: !0,
                    loop: !0,
                    loopAdditionalSlides: 30,
                    speed: 1e3,
                    navigation: {
                        nextEl: ".hap-team-button-next",
                        prevEl: ".hap-team-button-prev"
                    },
                    breakpoints: {
                        1600: {
                            slidesPerView: 3
                        },
                        1500: {
                            slidesPerView: 3
                        },
                        1400: {
                            slidesPerView: 3
                        },
                        1300: {
                            slidesPerView: 3
                        },
                        992: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 1
                        },
                        576: {
                            slidesPerView: 1
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }
                })
            }
        }
    };
    jQuery(document).ready(function() {
        e.init()
    })
}();