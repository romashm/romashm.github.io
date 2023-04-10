/* ==============================================
	Preload
=============================================== */
$(window).on('load', function () { // makes sure the whole site is loaded
		'use strict';
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({
			'overflow': 'visible'
		});
	})

/* ==============================================
	Sticky nav
=============================================== */
$(window).on('resize', function () {
	'use strict';
	// This will fire each time the window is resized:
	if ($(window).width() >= 1024) {
		// if larger or equal
		$("header").headroom({
			"offset": 150,
			"tolerance": 5,
			"classes": {
				"initial": "animated",
				"pinned": "slideDown",
				"unpinned": "slideUp"
			}
		});
	} else {
		// if smaller
		$('header').removeClass("animated");
	}
}).resize();

/* ==============================================
	Common
=============================================== */
//Tooltip		
const tooltipTriggerList = document.querySelectorAll('.tooltip-1')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


/* Footer reveal */
if ($(window).width() >= 768) {
	$('footer').footerReveal({
	shadow: false,
	zIndex: 0
});
}

// Check and radio input styles
$('input.icheck').iCheck({
	checkboxClass: 'icheckbox_square-grey',
	radioClass: 'iradio_square-grey'
});


/* ==============================================
	Video modal dialog + Parallax + Scroll to top + Incrementer
=============================================== */
$(function () {
	'use strict';
	$('.video').magnificPopup({
		type: 'iframe'
	});//Video modal
	
	//Gallery images modal
	$('.magnific-gallery').each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});

	//Hamburger icon
	var toggles = document.querySelectorAll(".cmn-toggle-switch");
	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener("click", function (e) {
			e.preventDefault();
			(this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
		});
	};
	
	//Scroll to top
	$(window).on('scroll', function () {
		'use strict';
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
});

/* ==============================================
	Carousel
=============================================== */
$('.carousel_testimonials').owlCarousel({
	items: 1,
	loop: true,
	autoplay: false,
	animateIn: 'flipInX',
	margin: 30,
	stagePadding: 30,
	smartSpeed: 450,
	responsiveClass: true,
	responsive: {
		600: {
			items: 1
		},
		1000: {
			items: 1,
			nav: false
		}
	}
});

/* ==============================================
	Input incrementer
=============================================== */
	$(".numbers-row").append('<div class="inc button_inc">+</div><div class="dec button_inc">-</div>');
	$(".button_inc").on("click", function () {
		'use strict';
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});