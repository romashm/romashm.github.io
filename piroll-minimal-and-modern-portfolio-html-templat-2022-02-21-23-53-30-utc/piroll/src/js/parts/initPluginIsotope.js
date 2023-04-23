import { $, $body, tween, debounceResize } from "./_utility";

/* Isotope */
function initPluginIsotope () {
    if(typeof window.Isotope === 'undefined') {
        return;
    }
    const self = this;

    $('.nk-isotope').each(function () {
        let $this = $(this);
        let $grid = $this.isotope({
            itemSelector: '.nk-isotope-item'
        });
        $grid.imagesLoaded().progress(() => {
            $grid.isotope('layout');
        });
        $grid.on('arrangeComplete', () => {
            self.debounceResize();
        });

        // filter
        let $filter = [];
        if ($this.parent().hasClass('nk-portfolio-list')) {
            $filter = $this.parent().prev('.nk-isotope-filter');
        } else {
            $filter = $this.prev('.nk-isotope-filter');
        }
        if($filter.length) {
            $filter.on('click', '[data-filter]', function (e) {
                e.preventDefault();
                let filter = $(this).attr('data-filter');

                $(this).addClass('active').siblings().removeClass('active');

                $grid.isotope({
                    filter: filter === '*' ? '' : '[data-filter*=' + filter + ']'
                });
            });
        }
    });

    // filter toggler
    $body.on('click', '[href="#nk-toggle-filter"]:not(.busy)', function (e) {
        var $pagination = $(this).parent('.nk-pagination');
        var $filter = $pagination.next('.nk-isotope-filter');
        var isActive = $filter.hasClass('nk-isotope-filter-active');

        if (!$pagination.length || !$filter.length) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        $pagination.addClass('busy');

        if (isActive) {
            tween.staggerTo($filter.children(), 0.2, {
                y: -10,
                opacity: 0
            }, 0.04, function () {
                tween.to($filter, 0.4, {
                    height: 0,
                    marginBottom: 0,
                    marginTop: 0,
                    force3D: true,
                    display: 'none',
                    onComplete () {
                        $pagination.removeClass('nk-isotope-filter-active');
                        $filter.removeClass('nk-isotope-filter-active');
                        $pagination.removeClass('busy');
                        debounceResize();
                    }
                });
            });
        } else {
            $filter.css('height', 'auto');
            var filterHeight = $filter.height();
            $filter.css('height', 0);
            tween.set($filter.children(), {
                y: -10,
                opacity: 0
            });
            tween.to($filter, 0.4, {
                height: filterHeight,
                marginBottom: 30,
                marginTop: -23,
                force3D: true,
                display: 'block',
                onComplete () {
                    tween.staggerTo($filter.children(), 0.2, {
                        y: 0,
                        opacity: 1
                    }, 0.04, function () {
                        $pagination.addClass('nk-isotope-filter-active');
                        $filter.addClass('nk-isotope-filter-active');
                        $pagination.removeClass('busy');
                        debounceResize();
                    });
                }
            });
        }
    });
}

export { initPluginIsotope };
