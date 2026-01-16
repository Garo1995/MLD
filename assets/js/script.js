$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});


$(document).ready(function () {
    let time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'width': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
        }
    });
    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
    $('.menu-stock').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
    $('.sidenav ul li a').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
});



$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    var accordion = new Accordion($('.accordion'), false);
});


$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();

});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.close__line').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.close_this').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out');
    setTimeout(function () {
        prt.fadeOut();
    }, 100)

});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)

        }
    })
});


$('.menu').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            var targetOffset = $target.offset().top-10;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});


let stockSwiper = new Swiper(".stock__slider", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 24,
    breakpoints: {
        '992': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '300': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
    },
    navigation: {
        nextEl: ".stock-button-next",
        prevEl: ".stock-button-prev",
    },
    pagination: {
        el: ".stock-pagination",
        clickable: true,
    },
});

let insideSwiper = new Swiper(".inside__slider", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    spaceBetween: 24,
    breakpoints: {
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        '300': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
    navigation: {
        nextEl: ".inside-button-next",
        prevEl: ".inside-button-prev",
    },
    pagination: {
        el: ".inside-pagination",
        clickable: true,
    },
});


let reviewsSwiper = new Swiper(".reviews__slider", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 24,
    breakpoints: {
        '1100': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '300': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
    pagination: {
        el: ".reviews-pagination",
        clickable: true,
    },
});

let certificatesSwiper = new Swiper(".certificates__slider", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 24,
    breakpoints: {
        '991': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 12,
        },
        '480': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 12,

        },
        '300': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
    },
    pagination: {
        el: ".certificates-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".certificates-button-next",
        prevEl: ".certificates-button-prev",
    },
});


let doctorsSwiper = new Swiper(".doctors__slider", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 24,
    breakpoints: {
        '1200': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '300': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
    },
    pagination: {
        el: ".doctors-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".doctors-button-next",
        prevEl: ".doctors-button-prev",
    },
});


let swiperSphinx = new Swiper(".sphinx-small-slid", {
    slidesPerView: 4,
});

let advantagesSwiper = new Swiper(".advantages__slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    thumbs: {
        swiper: swiperSphinx,
    },
    loop: true,
    pagination: {
        el: ".advantages-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".advantages-button-next",
        prevEl: ".advantages-button-prev",
    },
    breakpoints: {
        '991': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 12,

        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '300': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
    },
});




$('.read-more').on('click', function () {
    $(this).parent().toggleClass('reviews__text_all')
});

