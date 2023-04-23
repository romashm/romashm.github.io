import { $ } from "./_utility";

/* Jarallax */
function initPluginJarallax () {
    if(typeof $.fn.jarallax === 'undefined') {
        return;
    }
    const self = this;

    // header parallax
    let $parallaxHeader = $('.nk-header-title-parallax, .nk-header-title-parallax-opacity').eq(0);
    if($parallaxHeader.length) {
        let $headerImage = $parallaxHeader.find('> .bg-image > div:eq(0)');
        let $headerContent = $parallaxHeader.find('> .bg-image ~ *');
        let headerParallaxScroll = $parallaxHeader.hasClass('nk-header-title-parallax');
        let headerParallaxOpacity = $parallaxHeader.hasClass('nk-header-title-parallax-opacity');
        $parallaxHeader.jarallax({
            type: 'custom',
            imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            imgWidth: 1,
            imgHeight: 1,
            onScroll (calc) {
                let scrollImg = Math.min(100, 100 * (1 - calc.visiblePercent));
                let scrollInfo = Math.min(50, 50 * (1 - calc.visiblePercent));

                // fix if top banner not on top
                if(calc.beforeTop > 0) {
                    scrollImg = 0;
                    scrollInfo = 0;
                }

                if(headerParallaxScroll) {
                    $headerImage.css({
                        transform: 'translateY(' + scrollImg + 'px) translateZ(0)'
                    });
                    $headerContent.css({
                        transform: 'translateY(' + scrollInfo + 'px) translateZ(0)'
                    });
                }
                if(headerParallaxOpacity) {
                    $headerContent.css({
                        opacity: calc.visiblePercent < 0 || calc.beforeTop > 0 ? 1 : calc.visiblePercent
                    });
                }
            }
        });
    }

    // footer parallax
    let $parallaxFooter = $('.nk-footer-parallax, .nk-footer-parallax-opacity').eq(0);
    if($parallaxFooter.length) {
        let $footerImage = $parallaxFooter.find('> .bg-image > div');
        let $footerContent = $parallaxFooter.find('> .bg-image ~ *');
        let footerParallaxScroll = $parallaxFooter.hasClass('nk-footer-parallax');
        let footerParallaxOpacity = $parallaxFooter.hasClass('nk-footer-parallax-opacity');
        $parallaxFooter.jarallax({
            type: 'custom',
            imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            imgWidth: 1,
            imgHeight: 1,
            onScroll (calc) {
                let scrollImg = -Math.min(100, 100 * (1 - calc.visiblePercent));
                let scrollInfo = -Math.min(50, 50 * (1 - calc.visiblePercent));
                if(footerParallaxScroll) {
                    $footerImage.css({
                        transform: 'translateY(' + scrollImg + 'px) translateZ(0)'
                    });
                    $footerContent.css({
                        transform: 'translateY(' + scrollInfo + 'px) translateZ(0)'
                    });
                }
                if(footerParallaxOpacity) {
                    $footerContent.css({
                        opacity: calc.visiblePercent < 0 ? 1 : calc.visiblePercent
                    });
                }
            }
        });
    }

    // video backgrounds
    $('.bg-video[data-video]').each(function () {
        $(this).attr('data-jarallax-video', $(this).attr('data-video'));
        $(this).removeAttr('data-video');
    });

    // primary parallax
    $('.bg-image-parallax, .bg-video-parallax').jarallax({
        speed: self.options.parallaxSpeed
    });

    // video without parallax
    $('.bg-video:not(.bg-video-parallax)').jarallax({
        speed: 1
    });
}

export { initPluginJarallax };
