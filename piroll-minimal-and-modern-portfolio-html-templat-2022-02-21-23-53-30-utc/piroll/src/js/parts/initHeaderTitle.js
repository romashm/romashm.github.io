import { $ } from "./_utility";

/*------------------------------------------------------------------

  Init Header Title

-------------------------------------------------------------------*/
function initHeaderTitle () {
    const self = this;
    let $navbarHeader = $('.nk-header');
    let isNavbarOpaque = $navbarHeader.hasClass('nk-header-opaque');
    let isNavbarTransparent = $('.nk-navbar-top').hasClass('nk-header-transparent');
    let $headerTitle = $('.nk-header-title > .nk-header-table');
    let $fullHeaderTitle = $('.nk-header-title-full > .nk-header-table');

    // remove header title padding if navbar opaque
    if(isNavbarOpaque) {
        $headerTitle.css('padding-top', 0);
    }

    self.debounceResize(() => {
        if((isNavbarTransparent || isNavbarOpaque) && (!$fullHeaderTitle.length || !isNavbarOpaque)) {
            return;
        }

        let navH = $navbarHeader.outerHeight() || 0;

        // add header title padding
        if(!isNavbarTransparent && !isNavbarOpaque) {
            $headerTitle.css('padding-top', navH);
        }

        // fix header title height
        if($fullHeaderTitle.length) {
            let headerH = '100vh';

            if(isNavbarOpaque) {
                headerH = 'calc(100vh - ' + navH + 'px)';
            }

            $fullHeaderTitle.css('min-height', headerH);
        }
    });
}

export { initHeaderTitle };
