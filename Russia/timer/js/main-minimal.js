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
    2. Newsletter
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
    /* 2. Newsletter ....................... */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

});