import { $, wndH, $body, $wnd, $html, tween } from "./_utility";

/*------------------------------------------------------------------

  Init Fullpage

-------------------------------------------------------------------*/
function initFullPage () {
    let $fullPage = $('.nk-fullpage-portfolio:eq(0)');
    let $eachItems = $fullPage.find('.nk-fullpage-item');
    if(!$fullPage.length || !$eachItems.length) {
        return;
    }

    $('html').css('overflow', 'hidden');
    $('.nk-main').css('overflow', 'visible');

    const self = this;

    // parse slides
    var slides = [];
    $eachItems.each(function () {
        let $this = $(this);
        slides.push({
            $item: $this,
            $viewBtn: $this.find('.nk-fullpage-view-button').html(),
            $content: $this.find('.nk-fullpage-content').html(),
            img: $this.find('.nk-fullpage-image').attr('src')
        });
    });

    // image blocks
    let $image1 = $('<div class="nk-fullpage-bg-image">').appendTo($fullPage);
    let $image2 = $('<div class="nk-fullpage-bg-image">').appendTo($fullPage);

    // content
    let $content = $('<div class="nk-fullpage-content">');
    let $content2 = $('<div class="nk-fullpage-content">');
    let $content_button = $('<div class="nk-fullpage-view-button">');
    $fullPage.append($content);
    $fullPage.append($content2);
    $fullPage.append($content_button);

    // bullet navigation
    let $bullets = '<ul class="nk-fullpage-nav active">';
    for(let k = 0; k < slides.length; k++) {
        $bullets += '<li>' + (k < 9 ? '0' : '') + (k + 1) + '</li>';
    }
    $bullets += '</ul>';
    $bullets = $($bullets);
    $fullPage.append($bullets);
    let $bulletsItems = $bullets.children('li')

    let isBusy = 0;
    let curIndex = 0;

    // show new slide
    // effect: fade, up, down
    function slideShow (index, effect = 'fade', force) {
        if (typeof slides[index] !== 'undefined' && curIndex != index && !isBusy || force) {
            isBusy = 1;

            // animate image background
            switch (effect) {
                case 'up':
                case 'down':
                    tween.set($image2, {
                        y: effect == 'down' ? '100%' : '-100%',
                        display: 'block'
                    });
                    $image2.css('background-image', 'url("' + slides[index].img + '")');
                    tween.to($image2, 0.8, {
                        y: '0%',
                        force3D: true,
                        ease: Power1.easeInOut
                    });
                    tween.to($image1, 0.8, {
                        opacity: 0,
                        scale: 0.9,
                        force3D: true,
                        ease: Power1.easeInOut,
                        onComplete () {
                            $image1.css('background-image', 'url("' + slides[index].img + '")');
                            tween.set($image1, {
                                scale: 1,
                                opacity: 1
                            });
                            $image2.css('background-image', '');
                            tween.set($image2, {
                                display: 'none'
                            });
                            isBusy = 0;
                        }
                    });
                    break;
                default: // fade
                    tween.set($image2, {
                        opacity: 0,
                        display: 'block'
                    });
                    $image2.css('background-image', 'url("' + slides[index].img + '")');
                    tween.to($image2, 0.8, {
                        opacity: 1,
                        force3D: true,
                        onComplete () {
                            $image1.css('background-image', 'url("' + slides[index].img + '")');
                            $image2.css('background-image', '');
                            tween.set($image2, {
                                display: 'none'
                            });
                            isBusy = 0;
                        }
                    });
                    break;
            }

            // activate bullet
            $bulletsItems.removeClass('active');
            $bulletsItems.eq(index).addClass('active');

            // set new content
            tween.set($content2, {
                opacity: 0,
                y: effect == 'down' ? 100 : -100,
                display: 'flex'
            });
            $content2.html(slides[index].$content);
            tween.to($content, 0.5, {
                opacity: 0,
                y: effect == 'down' ? -100 : 100,
                force3D: true
            });
            tween.to($content2, 0.5, {
                opacity: 1,
                y: 0,
                force3D: true,
                delay: 0.1,
                onComplete () {
                    $content.html(slides[index].$content);
                    tween.set($content, {
                        opacity: 1,
                        clearProps: 'transform'
                    });
                    tween.set($content2, {
                        display: 'none'
                    });
                }
            });

            // set new button
            $content_button.html(slides[index].$viewBtn);

            curIndex = index;
        }
    }
    slideShow(curIndex, 'fade', 1);
    $bullets.on('click', '> li', function () {
        let index = $(this).index();
        if (index > curIndex) {
            slideShow(index, 'down');
        }
        else if (index < curIndex) {
            slideShow(index, 'up');
        }
    });

    // show next / previous slider
    function slideShowNext () {
        if (curIndex != slides.length - 1) {
            slideShow(curIndex + 1, 'down');
        }
    }
    function slideShowPrev () {
        if (curIndex != 0) {
            slideShow(curIndex - 1, 'up');
        }
    }

    let wheelEvent;
    if ('onwheel' in document.createElement('div')) {
        wheelEvent = 'wheel';
    }
    else if ('onmousewheel' in document.createElement('div')) {
        wheelEvent = 'mousewheel';
    }
    if (wheelEvent) {
        // mouse wheel scroll
        $wnd.on(wheelEvent, (e) => {
            // check if delta >= 2 and mouse under slider
            if(Math.abs(e.originalEvent.deltaY) < 2 || !$(e.target).parents('.nk-fullpage-portfolio').length) {
                return;
            }

            if(e.originalEvent.deltaY > 0) {
                slideShowNext();
            } else if (e.originalEvent.deltaY < 0) {
                slideShowPrev();
            }
        });
    }

    // touch swipe
    let touchStart = 0;
    let touchDelta = 0;
    $wnd.on('touchstart', (e) => {
        touchStart = e.originalEvent.touches[0].screenY;
        touchDelta = 0;
    });
    $wnd.on('touchmove touchend', (e) => {
        let y = e.originalEvent.touches && e.originalEvent.touches.length ? e.originalEvent.touches[0].screenY : false;
        touchDelta = y === false ? touchDelta : touchStart - y;

        // check if delta >= 2 and mouse under slider
        if(Math.abs(touchDelta) < 2 || !$(e.target).parents('.nk-fullpage-portfolio').length) {
            return;
        }

        if(e.type === 'touchend') {
            if(touchDelta > 0) {
                slideShowNext();
            } else if (touchDelta < 0) {
                slideShowPrev();
            }
        }
    });
}

export { initFullPage };
