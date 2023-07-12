/*
* IQON - Fresh Coming Soon Template
* Build Date: June 2016
* Last Update: June 2016
* Author: Madeon08
* Copyright (C) 2016 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Action Buttons
    3. Scroll plugins
    4. Newsletter
    5. Map, Structure & Design
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function(){
    "use strict";

    setTimeout(function(){

        $("#loading").addClass('animated-middle slideOutUp').removeClass('opacity-0');

    },400);

    setTimeout(function(){

        $("#home").addClass('animated-middle fadeInUp').removeClass('opacity-0');

    },200);

    setTimeout(function(){

        $('.text-intro').each(function(i) {
            (function(self) {
                setTimeout(function() {
                    $(self).addClass('animated-middle fadeInUp').removeClass('opacity-0');
                },(i*150)+150);
            })(this);
        });
        
    },200);

    setTimeout(function(){

        $("#home").removeClass('animated-middle fadeInUp');

    },1401);

});

$(document).ready(function(){
    "use strict";

    /* ------------------------------------- */
    /* 2. Action Buttons ................... */
    /* ------------------------------------- */

    $('a#open-more-info').on( "click", function() {
        $(".layer-left").toggleClass("hide-layer-left");
        $("#home").toggleClass("minimize-left");
        $("#main-content").toggleClass("hide-main-content");
        $(".to-scroll").toggleClass("info-close").removeClass("hide-scroll");
        $("#close-more-info").toggleClass("hide-close");
        $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');
        setTimeout(function() {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#main-content",{
                scrollInertia:500,
                callbacks:false
            });
        }, 350);
        return false;
    });

    $('.close-right-part').on( "click", function() {
        $(".layer-left").addClass("hide-layer-left");
        $("#main-content").addClass("hide-main-content");
        $("#home").removeClass("minimize-left");
        $(".to-scroll").addClass("info-close");
        $("#close-more-info").addClass("hide-close");
        $('.mCSB_scrollTools').removeClass('mCSB_scrollTools-left');
        setTimeout(function() {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#main-content",{
                scrollInertia:500,
                callbacks:false
            });
        }, 350);
        return false;
    });

    /* ------------------------------------- */
    /* 3. Scroll plugins ................... */
    /* ------------------------------------- */

  

    function scrollbar(){

        $('body').mCustomScrollbar({
            scrollInertia: 150,
            axis            :"y",

            callbacks:{
                whileScrolling:function(){
                    var pos=this.mcs.top;
                    if(pos<=-200){
                        $('.to-scroll').addClass('hide-scroll');
                    }else{
                        $('.to-scroll').removeClass('hide-scroll');
                    }
                }
            }
        });
    }

    scrollbar();

    // Tooltips used Scroll indicator
    if (window.matchMedia("(min-width: 1025px)").matches) { 
            
        $(function () { $("[data-toggle='tooltip']").tooltip(); });

    }

    /* ------------------------------------- */
    /* 4. Newsletter ....................... */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    /* ------------------------------------- */
    /* 5. Map, Structure & Design .......... */
    /* ------------------------------------- */

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);
    google.maps.event.addDomListener(window, 'resize', init);

    function init() {

        // Basic options for a simple Google Map
        // The latitude and longitude to center the map (always required)
        var center = new google.maps.LatLng(40.72000, -73.858816);
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var isDraggable = $(document).width() > 1024 ? true : false; // If document (your website) is wider than 1024px, isDraggable = true, else isDraggable = false

        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 9,
            scrollwheel: false,
            draggable: isDraggable,
            center: center,
            streetViewControl: true,
            mapTypeControl: true,

            zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },

        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions, center);

        var locations = [
            ['<h6>Bondi Beach, East Coast</h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-coffee"></i> Visit us, we pay the coffee!</p>', 40.40000, -74.00000, 1],
            ['<h6>Coogee Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 8:00 to 22:00</p>', 40.60000, -73.900000, 2],
            ['<h6>Manly Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 6:00 to 14:00</p>', 40.76759, -73.96756, 3],
            ['<h6>Maroubra Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 12:00 to 23:30</p>', 40.9700171, -73.7176337, 4]
        ];

        var infowindow = new google.maps.InfoWindow();

        var marker, i;
        var image = 'img/logo-map.png';

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: image
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                };
            })(marker, i));
        }

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
        
    }

});