jQuery( document ).ready(function( $ ) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/* 	LOADER
/*-----------------------------------------------------------------------------------*/
$( window ).on( "load" , function() {
	$("#loader").delay(1000).fadeOut("slow");
});
/*-----------------------------------------------------------------------------------*/
/*		STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
$(".sticky").sticky({topSpacing:0});
/*-----------------------------------------------------------------------------------*/
/*  FULL SCREEN
/*-----------------------------------------------------------------------------------*/
$('.full-screen').superslides({});
/* ------------------------------------------------------------------------ 
   SEARCH OVERLAP
------------------------------------------------------------------------ */
jQuery('.search-open').on('click', function(){
	jQuery('.search-inside').fadeIn();
});
jQuery('.search-close').on('click', function(){
	jQuery('.search-inside').fadeOut();
});
/*-----------------------------------------------------------------------------------
    Animated progress bars
/*-----------------------------------------------------------------------------------*/
$('.progress-bars').waypoint(function() {
  $('.progress').each(function(){
    $(this).find('.progress-bar').animate({
      width:$(this).attr('data-percent')
     },50);
});},
	{ 
	offset: '100%',
    triggerOnce: true 
});

/*-----------------------------------------------------------------------------------*/
/*    POPUP Gallery
/*-----------------------------------------------------------------------------------*/
$('.popup-gallery').magnificPopup({
	delegate: '.img-pop',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
	enabled: true,
	navigateByImgClick: true,
	preload: [0,1] // Will preload 0 - before current, and 1 after the current image
},
image: {
	tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	titleSrc: function(item) {
		return item.el.attr('title') + '<small></small>';
	}
}
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
var $container = $('.port-wrap .items');
    $container.imagesLoaded(function () {
    $container.isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'masonry'
	});	
});
$('.portfolio-filter li a').on('click', function () {
    $('.portfolio-filter li a').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector
    });
return false;
});

/*-----------------------------------------------------------------------------------*/
/*    Parallax
/*-----------------------------------------------------------------------------------*/
jQuery.stellar({
   horizontalScrolling: false,
   scrollProperty: 'scroll',
   positionProperty: 'position',
});
/*-----------------------------------------------------------------------------------*/
/* 	SLIDER REVOLUTION
/*-----------------------------------------------------------------------------------*/
jQuery('.tp-banner').show().revolution({
	dottedOverlay:"none",
	delay:7000,
	startwidth:1200,
	startheight:700,
	navigationType:"bullet",
	navigationArrows:"solo",
	navigationStyle:"preview3",
	parallax:"mouse",
	parallaxBgFreeze:"on",
	parallaxLevels:[7,4,3,2,5,4,3,2,1,0],												
	keyboardNavigation:"on",						
	shadow:0,
	fullWidth:"on",
	fullScreen:"off",
	shuffle:"off",						
	autoHeight:"off",						
	forceFullWidth:"off",	
	fullScreenOffsetContainer:""	
});
/*-----------------------------------------------------------------------------------*/
/* 		Parallax
/*-----------------------------------------------------------------------------------*/
$('.images-slider').flexslider({
  animation: "fade",
  controlNav: "thumbnails"
});
/*-----------------------------------------------------------------------------------*/
/* 	SLIDER REVOLUTION
/*-----------------------------------------------------------------------------------*/
jQuery('.tp-banner-full').show().revolution({
	dottedOverlay:"none",
	delay:7000,
	startwidth:1200,
	startheight:700,
	navigationType:"bullet",
	navigationArrows:"solo",
	navigationStyle:"preview3",
	parallax:"mouse",
	parallaxBgFreeze:"on",
	parallaxLevels:[7,4,3,2,5,4,3,2,1,0],												
	keyboardNavigation:"on",						
	shadow:0,
	fullWidth:"on",
	fullScreen:"on",
	shuffle:"off",						
	autoHeight:"off",						
	forceFullWidth:"on",	
	fullScreenOffsetContainer:""	
});
/*-----------------------------------------------------------------------------------*/
/* 	TESTIMONIAL SLIDER
/*-----------------------------------------------------------------------------------*/
$("#testi-slide").owlCarousel({ 
    items : 1,
	autoplay:true,
	loop:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
    navigation : false,
	navText: ["<i class='lnr lnr-arrow-left'></i>","<i class='lnr lnr-arrow-right'></i>"],
	pagination : true,
	animateOut: 'fadeOut'	
});
/*-----------------------------------------------------------------------------------*/
/* 	TESTIMONIAL SLIDER
/*-----------------------------------------------------------------------------------*/
$("#testi-slide-1").owlCarousel({ 
    items : 1,
	autoplay:true,
	loop:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
    navigation : false,
	navText: ["<i class='lnr lnr-arrow-left'></i>","<i class='lnr lnr-arrow-right'></i>"],
	pagination : true,
	animateOut: 'fadeOut'	
});
/*-----------------------------------------------------------------------------------*/
/* 	COUNTER
/*-----------------------------------------------------------------------------------*/
$('.counter').counterUp({
    delay: 10,
    time: 300
});
/*-----------------------------------------------------------------------------------*/
/* 	PORTFOLIO SLIDER
/*-----------------------------------------------------------------------------------*/
$("#app-slide").owlCarousel({ 
    items : 4,
	autoplay:true,
	loop:true,
	margin: 30,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
    navigation : false,
	navText: ["<i class='lnr lnr-arrow-left'></i>","<i class='lnr lnr-arrow-right'></i>"],
	pagination : true,
	animateOut: 'fadeOut'	
});
/*-----------------------------------------------------------------------------------*/
/* 	PORTFOLIO SLIDER
/*-----------------------------------------------------------------------------------*/
$(".slide-4").owlCarousel({ 
    items : 4,
	autoplay:true,
	loop:true,
	margin: 30,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
    navigation : false,
	navText: ["<i class='lnr lnr-arrow-left'></i>","<i class='lnr lnr-arrow-right'></i>"],
	pagination : true,
	responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        800:{
            items:4,
        },
		1200:{
            items:5,
        }
    },
	animateOut: 'fadeOut'
});
/*-----------------------------------------------------------------------------------*/
/* 	PORTFOLIO SLIDER
/*-----------------------------------------------------------------------------------*/
$(".slide-5").owlCarousel({ 
    items : 5,
	autoplay:true,
	loop:true,
	margin: 30,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
    navigation : false,
	navText: ["<i class='lnr lnr-arrow-left'></i>","<i class='lnr lnr-arrow-right'></i>"],
	pagination : true,
	responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        },
		1200:{
            items:5,
        }
    },
	animateOut: 'fadeOut'	
});
/*-----------------------------------------------------------------------------------*/
/* 	PORTFOLIO SLIDER
/*-----------------------------------------------------------------------------------*/
$("#new-arrival-slide").owlCarousel({ 
    items : 3,
	autoplay:true,
	loop:true,
	margin: 30,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
    navigation : false,
	navText: ["<i class='lnr lnr-arrow-left'></i>","<i class='lnr lnr-arrow-right'></i>"],
	pagination : true,
	responsive:{
        0:{
            items:1,
        },
        800:{
            items:2,
        },
        1000:{
            items:3,
        },
    },
	animateOut: 'fadeOut'	
});
/*-----------------------------------------------------------------------------------
    TESTNMONIALS STYLE 1
/*-----------------------------------------------------------------------------------*/
$('.free-slide').flexslider({
	mode: 'fade',
	animation: "fade",
	auto: true
});
/*-----------------------------------------------------------------------------------*/
/* 	ANIMATION
/*-----------------------------------------------------------------------------------*/
var wow = new WOW({
    boxClass:     'animate',      // animated element css class (default is wow)
    animateClass: 'animated', 	// animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
});
wow.init();
});
/*-----------------------------------------------------------------------------------*/
/*    CONTACT FORM
/*-----------------------------------------------------------------------------------*/
function checkmail(input){
  var pattern1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  	if(pattern1.test(input)){ return true; }else{ return false; }}     
    function proceed(){
    	var name = document.getElementById("name");
		var email = document.getElementById("email");
		var company = document.getElementById("company");
		var msg = document.getElementById("message");
		var errors = "";
		if(name.value == ""){ 
		name.className = 'error';
	  	  return false;}    
		  else if(email.value == ""){
		  email.className = 'error';
		  return false;}
		    else if(checkmail(email.value)==false){
		        alert('Please provide a valid email address.');
		        return false;}
		    else if(company.value == ""){
		        company.className = 'error';
		        return false;}
		   else if(msg.value == ""){
		        msg.className = 'error';
		        return false;}
		   else 
		  {
	$.ajax({
		type: "POST",
		url: "php/submit.php",
		data: $("#contact_form").serialize(),
		success: function(msg){
		//alert(msg);
		if(msg){
			$('#contact_form').fadeOut(1000);
			$('#contact_message').fadeIn(1000);
				document.getElementById("contact_message");
			 return true;
		}}
	});
}};






