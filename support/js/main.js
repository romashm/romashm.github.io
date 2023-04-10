(function ($) {
    "use strict";

    AOS.init({
        once: true
    });
    portfolioItemContentLoadOnClick();
    stopAnimateOnScroll();
    skillsFill();
    zIndexSectionFix();
    setPrettyPhoto();
    inputFieldsTextAnimation();
    milestones();
    sendMail();

    
    $(window).scroll(function () {
        skillsFill();
        milestones();
    });

    $(window).resize(function () {
        skillsFill();
    });

    //Fix for Menu 
    $(".header-holder").sticky({topSpacing: 0});

    //Slow Scroll
    $('#header-main-menu ul li a[href^="#"], a.button, .slow-scroll').on("click", function (e) {
        if ($(this).attr('href') === '#') {
            e.preventDefault();
        } else {
            if ($(window).width() < 1024) {
                if (!$(e.target).is('.sub-arrow')) {
                    $('html, body').animate({scrollTop: $(this.hash).offset().top - 76}, 1500);
                    $('.menu-holder').removeClass('show');
                    $('#toggle').removeClass('on');
                    return false;
                }
            } else {
                $('html, body').animate({scrollTop: $(this.hash).offset().top - 76}, 1500);
                return false;
            }
        }
    });

    //Logo Click Fix
    $('.header-logo').on("click", function (e) {
        if ($(".page-template-onepage").length) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 1500);
        }
    });

    //Placeholder show/hide
    $('input, textarea').on("focus", function () {
        $(this).data('placeholder', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
    });
    $('input, textarea').on("blur", function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

    //Fit Video
    $(".site-content, .portfolio-item-wrapper").fitVids();

    //Set menu
    $('.main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8,
        markCurrentTree: true
    });

    //Show-Hide header sidebar
    $('#toggle').on('click', multiClickFunctionStop);

    $(window).on('load', function () {
        imageSliderSettings();
        isotopeSetUp();
        carouselAbout();
        carouselLogos();
        carouselTesttimonials();
        //Fix for hash
        var hash = location.hash;
        if ((hash != '') && ($(hash).length))
        {
            $('html, body').animate({scrollTop: $(hash).offset().top - 76}, 1);
            $('html, body').animate({scrollTop: $(hash).offset().top - 76}, 1);
        } else {
            $(window).scrollTop(1);
            $(window).scrollTop(0);
        }

        $('.doc-loader').fadeOut(600);
    });


    $(window).on('resize', function () {
        setActiveMenuItem();
    });

    $(window).on('scroll', function () {
        setActiveMenuItem();
    });





//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------


    function stopAnimateOnScroll() {
        $("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
            $("html, body").stop();
        });
    }

    function multiClickFunctionStop() {
        $('#toggle').off("click");
        $('#toggle').toggleClass("on");
        if ($('#toggle').hasClass("on"))
        {
            $('.menu-holder').addClass('show');
            $('#toggle').on("click", multiClickFunctionStop);
        } else
        {
            $('.menu-holder').removeClass('show');
            $('#toggle').on("click", multiClickFunctionStop);
        }
    }

    function setActiveMenuItem() {
        var currentSection = null;
        $('.section').each(function () {
            var element = $(this).attr('id');
            if ($('#' + element).is('*')) {
                if ($(window).scrollTop() >= $('#' + element).offset().top - 115) {
                    currentSection = element;
                }
            }
        });
        $('#header-main-menu ul li').removeClass('active').find('a[href*="#' + currentSection + '"]').parent().addClass('active');
    }

    function isotopeSetUp() {
        var grid = $('.grid').imagesLoaded(function () {
            grid.isotope({
                percentPosition: true,
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            });
        });

        $('.filters-button-group').on('click', '.button', function () {
            var filterValue = $(this).attr('data-filter');
            grid.isotope({filter: filterValue});
            grid.on('arrangeComplete', function () {
                setPrettyPhoto();
            });
        });
        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    }

    function setPrettyPhoto() {
        $('a[data-rel]').each(function () {
            $(this).attr('rel', $(this).data('rel'));
        });
        $(".grid-item:visible a[rel^='prettyPhoto'], a[rel='prettyPhoto[home]']").prettyPhoto({
            slideshow: false, /* false OR interval time in ms */
            overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
            default_width: 1280,
            default_height: 720,
            deeplinking: false,
            social_tools: false,
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        });
    }

    function imageSliderSettings() {
        $(".image-slider").each(function () {
            var speed_value = $(this).data('speed');
            var auto_value = $(this).data('auto');
            var hover_pause = $(this).data('hover');
            if (auto_value === true) {
                $(this).owlCarousel({
                    loop: true,
                    autoHeight: true,
                    smartSpeed: 1000,
                    autoplay: auto_value,
                    autoplayHoverPause: hover_pause,
                    autoplayTimeout: speed_value,
                    responsiveClass: true,
                    items: 1
                });
                $(this).on('mouseleave', function () {
                    $(this).trigger('stop.owl.autoplay');
                    $(this).trigger('play.owl.autoplay', [auto_value]);
                });
            } else {
                $(this).owlCarousel({
                    loop: true,
                    autoHeight: true,
                    smartSpeed: 1000,
                    autoplay: false,
                    responsiveClass: true,
                    items: 1
                });
            }
        });
    }

    function carouselLogos() {
        var swiper = new Swiper('.logos-slider', {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 2,
            loop: true,
            loopFillGroupWithBlank: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                }
            }
        });
    }

    function carouselAbout() {
        $("#about-slider").each(function () {
            var mySwiper = new Swiper('#about-slider', {
                autoplay: false,
                scrollbar: {
                    el: '.swiper-scrollbar-about-slider',
                    hide: false,
                    draggable: true,
                    dragSize: '120px'
                },
                slidesPerView: 'auto',
                spaceBetween: 30,
                resistance: true,
                resistanceRatio: 0.5
            });
        });
    }

    function carouselTesttimonials() {
        $("#testimonial-slider").each(function () {
            var mySwiper = new Swiper('#testimonial-slider', {
                autoplay: false,
                scrollbar: {
                    el: '.swiper-scrollbar-testimonial-slider',
                    hide: false,
                    draggable: true,
                    dragSize: '120px'
                },
                slidesPerView: 'auto',
                spaceBetween: 30,
                resistance: true,
                resistanceRatio: 0.5,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    768: {
                        slidesPerView: 'auto'
                    }
                }
            });
        });
    }

    function portfolioItemContentLoadOnClick() {
        $('.ajax-portfolio').on('click', function (e) {
            e.preventDefault();
            var portfolioItemID = $(this).data('id');
            $(this).addClass('loading-portfolio-item-content');
            if ($("#pcw-" + portfolioItemID).length) //Check if is allready loaded
            {
                $('html, body').animate({scrollTop: $('#portfolio-wrapper').offset().top - 150}, 400);
                setTimeout(function () {
                    $('#portfolio-grid, .more-posts-portfolio-holder, .category-filter-list').addClass('hide');
                    setTimeout(function () {
                        $("#pcw-" + portfolioItemID).addClass('show');
                        $('.portfolio-load-content-holder').addClass('show');
                        $('.ajax-portfolio').removeClass('loading-portfolio-item-content');
                        $('#portfolio-grid, .more-posts-portfolio-holder, .category-filter-list').hide();
                    }, 300);
                }, 500);
            } else {
                loadPortfolioItemContent(portfolioItemID);
            }
        });
    }

    function loadPortfolioItemContent(portfolioItemID) {
        $.ajax({
            url: $('.ajax-portfolio[data-id="' + portfolioItemID + '"]').attr('href'),
            type: 'GET',
            success: function (html) {
                var getPortfolioItemHtml = $(html).find(".portfolio-item-wrapper").html();
                $('.portfolio-load-content-holder').append('<div id="pcw-' + portfolioItemID + '" class="portfolio-content-wrapper">' + getPortfolioItemHtml + '</div>');
                if (!$("#pcw-" + portfolioItemID + " .close-icon").length) {
                    $("#pcw-" + portfolioItemID).prepend('<div class="close-icon"></div>');
                }
                $('html, body').animate({scrollTop: $('#portfolio-wrapper').offset().top - 150}, 400);
                setTimeout(function () {
                    $("#pcw-" + portfolioItemID).imagesLoaded(function () {
                        imageSliderSettings();
                        $(".site-content").fitVids(); //Fit Video
                        $('#portfolio-grid, .more-posts-portfolio-holder, .category-filter-list').addClass('hide');
                        setTimeout(function () {
                            $("#pcw-" + portfolioItemID).addClass('show');
                            $('.portfolio-load-content-holder').addClass('show');
                            $('.ajax-portfolio').removeClass('loading-portfolio-item-content');
                            $('#portfolio-grid').hide();
                        }, 300);
                        $('.close-icon').on('click', function (e) {
                            var portfolioReturnItemID = $(this).closest('.portfolio-content-wrapper').attr("id").split("-")[1];
                            $('.portfolio-load-content-holder').addClass("viceversa");
                            $('#portfolio-grid, .more-posts-portfolio-holder, .category-filter-list').css('display', 'block');
                            setTimeout(function () {
                                $('#pcw-' + portfolioReturnItemID).removeClass('show');
                                $('.portfolio-load-content-holder').removeClass('viceversa show');
                                $('#portfolio-grid, .more-posts-portfolio-holder, .category-filter-list').removeClass('hide');
                            }, 300);
                            setTimeout(function () {
                                $('html, body').animate({scrollTop: $('#p-item-' + portfolioReturnItemID).offset().top - 150}, 400);
                            }, 500);
                        });
                    });
                }, 500);
            }
        });
        return false;
    }

    function skillsFill() {
        if ($('.skill-fill')[0]) {
            $(".skill-fill:not(.animation-done").each(function (i) {
                var top_of_object = $(this).offset().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if ((bottom_of_window - 70) > top_of_object) {
                    $(this).width($(this).data("fill"));
                    $(this).addClass('animation-done');
                }
            });
        }
    }

    function zIndexSectionFix() {
        var numSection = $(".page-template-onepage .section-wrapper").length + 2;
        $('.page-template-onepage').find('.section-wrapper').each(function () {
            $(this).css('zIndex', numSection);
            numSection--;
        });
    }

    function inputFieldsTextAnimation() {
        $(".contact-form textarea, .contact-form input").on("focus", function () {
            $(this).next(".input-default-text").addClass('has-content');
        });

        $(".contact-form textarea, .contact-form input").on("focusout", function () {
            if (!$(this).val()) {
                $(this).next(".input-default-text").removeClass('has-content');
            }
        });
    }

    function milestones() {
        if ($('#milestones').length) {
            var oTop = $('#milestones').offset().top - window.innerHeight;
            if ($(window).scrollTop() > oTop) {
                $('.milestone-num').each(function () {
                    var $this = $(this),
                            countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },
                            {
                                duration: 2000,
                                easing: 'swing',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum);
                                }
                            });
                });
            }
        }
    }

    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    }

    function sendMail() {
        $('.contact-form [type="submit"]').on('click', function () {
            var emailVal = $('#contact-email').val();
            if (isValidEmailAddress(emailVal)) {
                var params = {
                    'action': 'SendMessage',
                    'name': $('#name').val(),
                    'email': $('#contact-email').val(),
                    'subject': $('#subject').val(),
                    'message': $('#message').val()
                };
                $.ajax({
                    type: "POST",
                    url: "php/sendMail.php",
                    data: params,
                    success: function (response) {
                        if (response) {
                            var responseObj = $.parseJSON(response);
                            if (responseObj.ResponseData)
                            {
                                alert(responseObj.ResponseData);
                                $("#name").val("").siblings().first().removeClass("has-content");
                                $("#contact-email").val("").siblings().first().removeClass("has-content");
                                $("#subject").val("").siblings().first().removeClass("has-content");
                                $("#message").val("").siblings().first().removeClass("has-content");
                            }
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        //xhr.status : 404, 303, 501...
                        var error = null;
                        switch (xhr.status)
                        {
                            case "301":
                                error = "Redirection Error!";
                                break;
                            case "307":
                                error = "Error, temporary server redirection!";
                                break;
                            case "400":
                                error = "Bad request!";
                                break;
                            case "404":
                                error = "Page not found!";
                                break;
                            case "500":
                                error = "Server is currently unavailable!";
                                break;
                            default:
                                error = "Unespected error, please try again later.";
                        }
                        if (error) {
                            alert(error);
                        }
                    }
                });
            } else
            {
                alert('Your email is not in valid format');
            }
        });
    }

})(jQuery);