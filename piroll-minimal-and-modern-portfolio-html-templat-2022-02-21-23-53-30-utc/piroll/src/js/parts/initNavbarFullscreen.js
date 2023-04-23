import { $, tween, $wnd, $doc } from "./_utility";

/*------------------------------------------------------------------

  Init Navbar Fullscreen

-------------------------------------------------------------------*/
function initNavbarFullscreen () {
    const self = this;
    let $navbar = $('.nk-navbar-full');
    let $navbarTop = $('.nk-navbar-top');
    let $navbarSocial = $navbar.find('.nk-nav-social');
    let isOpened;

    self.fullscreenNavbarIsOpened = () => {
        return isOpened;
    };

    self.toggleFullscreenNavbar = () => {
        self[isOpened ? 'closeFullscreenNavbar' : 'openFullscreenNavbar']();
    };
    self.openFullscreenNavbar = () => {
        if(isOpened || !$navbar.length) {
            return;
        }
        isOpened = 1;

        let $navbarMenuItems = $navbar.find('.nk-nav .nk-drop-item.open > .dropdown:not(.closed) > li > a');
        if(!$navbarMenuItems.length) {
            $navbarMenuItems = $navbar.find('.nk-nav > li > a');
        }

        // active all togglers
        $('.nk-navbar-full-toggle').addClass('active');

        // set top position and animate
        tween.set($navbarMenuItems, {
            opacity: 0,
            force3D: true
        });
        tween.set($navbarSocial, {
            opacity: 0,
            force3D: true
        });
        tween.to($navbar, 0.5, {
            opacity: 1,
            force3D: true,
            display: 'block',
            onComplete () {
                self.initPluginNano($navbar);
            }
        });
        tween.staggerTo($navbarMenuItems, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.2
        }, 0.05);
        tween.to($navbarSocial, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4
        });

        $navbar.addClass('open');

        // prevent body scrolling
        self.bodyOverflow(1);

        // trigger event
        $wnd.trigger('nk-open-full-navbar', [$navbar]);
    };

    self.closeFullscreenNavbar = (dontTouchBody) => {
        if(!isOpened || !$navbar.length) {
            return;
        }
        isOpened = 0;

        // disactive all togglers
        $('.nk-navbar-full-toggle').removeClass('active');

        // set top position and animate
        tween.to($navbar, 0.5, {
            opacity: 0,
            force3D: true,
            display: 'none',
            onComplete () {
                if(!dontTouchBody) {
                    // restore body scrolling
                    self.bodyOverflow(0);
                }
            }
        });

        // open navbar block
        $navbar.removeClass('open');

        // trigger event
        $wnd.trigger('nk-close-full-navbar', [$navbar]);
    };

    $doc.on('click', '.nk-navbar-full-toggle', (e) => {
        self.toggleFullscreenNavbar();
        e.preventDefault();
    });

    $wnd.on('nk-open-search-block', () => {
        self.closeFullscreenNavbar(1);
    });
    $wnd.on('nk-open-share-place', self.closeFullscreenNavbar);
}

export { initNavbarFullscreen };
