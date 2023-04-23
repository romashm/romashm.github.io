import { $, wndW, wndH } from "./_utility";

/* Flickity */
function initPluginFlickity () {
    if(typeof window.Flickity === 'undefined') {
        return;
    }

    const self = this;

    function addDefaultArrows ($carousel) {
        $('<div class="nk-flickity-arrow nk-flickity-arrow-prev"><span class="pe-7s-angle-left"></span></div>').on('click', () => {
            $carousel.flickity('previous');
        }).appendTo($carousel);

        $('<div class="nk-flickity-arrow nk-flickity-arrow-next"><span class="pe-7s-angle-right"></span></div>').on('click', () => {
            $carousel.flickity('next');
        }).appendTo($carousel);
    }

    function updateCustomArrows ($carousel) {
        let data = $carousel.children('.nk-carousel-inner').data('flickity');
        let currIndex = data.selectedIndex;
        let nextIndex;
        let prevIndex;

        // get next and prev cells
        if(currIndex === 0) {
            nextIndex = 1;
            prevIndex = data.cells.length - 1;
        } else if (currIndex === data.cells.length - 1) {
            nextIndex = 0;
            prevIndex = data.cells.length - 2;
        } else {
            nextIndex = currIndex + 1;
            prevIndex = currIndex - 1;
        }
        let $nextCell = $(data.cells[nextIndex].element);
        let $prevCell = $(data.cells[prevIndex].element);
        let $currCell = $(data.cells[currIndex].element);

        // get name and sources
        let nextName = $nextCell.find('.nk-carousel-item-name').text();
        let prevName = $prevCell.find('.nk-carousel-item-name').text();
        let currName = $currCell.find('.nk-carousel-item-name').html();
        let currLinks = $currCell.find('.nk-carousel-item-links').html();

        // add info to buttons
        $carousel.find('.nk-carousel-next > .nk-carousel-arrow-name').html(nextName);
        $carousel.find('.nk-carousel-prev > .nk-carousel-arrow-name').html(prevName);
        $carousel.find('.nk-carousel-current > .nk-carousel-name').html(currName);
        $carousel.find('.nk-carousel-current > .nk-carousel-links').html(currLinks);
    }

    // prevent click event fire when drag carousel
    function noClickEventOnDrag ($carousel) {
        $carousel.on('dragStart.flickity', function () {
            $(this).find('.flickity-viewport').addClass('is-dragging');
        });
        $carousel.on('dragStart.flickity', function () {
            $(this).find('.flickity-viewport').removeClass('is-dragging');
        });
    }

    // carousel 1
    let $carousel1 = $('.nk-carousel');
    if($carousel1.length) {
        $carousel1.children('.nk-carousel-inner').each(function () {
            $(this).flickity({
                pageDots: $(this).parent().attr('data-dots') === 'true' || false,
                autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
                prevNextButtons: false,
                wrapAround: true,
                cellAlign: $(this).parent().attr('data-cell-align') || 'center'
            });
            if($(this).parent().attr('data-arrows') === 'true') {
                addDefaultArrows($(this));
            }
            updateCustomArrows($(this).parent());
        }).on('select.flickity', function () {
            updateCustomArrows($(this).parent());
        });
        $carousel1.on('click', '.nk-carousel-next', function () {
            $(this).parent().children('.nk-carousel-inner').flickity('next');
        });
        $carousel1.on('click', '.nk-carousel-prev', function () {
            $(this).parent().children('.nk-carousel-inner').flickity('previous');
        });
        noClickEventOnDrag($carousel1.children('.nk-carousel-inner'));
    }

    // carousel 2
    $('.nk-carousel-2 > .nk-carousel-inner').each(function () {
        $(this).flickity({
            pageDots: $(this).parent().attr('data-dots') === 'true' || false,
            autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
            prevNextButtons: false,
            wrapAround: true,
            imagesLoaded: true,
            cellAlign: $(this).parent().attr('data-cell-align') || 'center'
        });
        if($(this).parent().attr('data-arrows') === 'true') {
            addDefaultArrows($(this));
        }
        noClickEventOnDrag($(this));
    });

    // carousel 3
    let $carousel3 = $('.nk-carousel-3');
    // set height for items
    function setHeightCarousel3 () {
        $carousel3.each(function () {
            let $allImages = $(this).find('img');
            let size = $(this).attr('data-size') || 0.8;
            let resultH = wndH * size;
            let maxItemW = Math.min($(this).parent().width(), wndW) * size;
            $allImages.each(function () {
                if(this.naturalWidth && this.naturalHeight && resultH * this.naturalWidth / this.naturalHeight > maxItemW) {
                    resultH = maxItemW * this.naturalHeight / this.naturalWidth;
                }
            });
            $allImages.css('height', resultH);
            $(this).children('.nk-carousel-inner').flickity('resize');
        });
    }
    if($carousel3.length) {
        $carousel3.children('.nk-carousel-inner').each(function () {
            $(this).flickity({
                pageDots: $(this).parent().attr('data-dots') === 'true' || false,
                autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
                prevNextButtons: false,
                wrapAround: true,
                imagesLoaded: true,
                cellAlign: $(this).parent().attr('data-cell-align') || 'center'
            });
            updateCustomArrows($(this).parent());
            if($(this).parent().attr('data-arrows') === 'true') {
                addDefaultArrows($(this));
            }
        }).on('select.flickity', function () {
            updateCustomArrows($(this).parent());
        });
        $carousel3.on('click', '.nk-carousel-next', function () {
            $(this).parents('.nk-carousel-3:eq(0)').children('.nk-carousel-inner').flickity('next');
        });
        $carousel3.on('click', '.nk-carousel-prev', function () {
            $(this).parents('.nk-carousel-3:eq(0)').children('.nk-carousel-inner').flickity('previous');
        });
        setHeightCarousel3();
        self.debounceResize(setHeightCarousel3);
        noClickEventOnDrag($carousel3.children('.nk-carousel-inner'));
    }

    // update products carousel
    let $storeCarousel = $('.nk-carousel-1, .nk-carousel-2, .nk-carousel-3').filter('.nk-store');
    function updateStoreProducts () {
        $storeCarousel.each(function () {
            let currentTallest = 0;
            let currentRowStart = 0;
            let rowDivs = [];
            let topPosition = 0;
            let currentDiv = 0;
            let $el;
            $(this).find('.nk-product').each(function () {
                $el = $(this);
                $el.css('height', '');
                topPosition = $el.position().top;

                if (currentRowStart !== topPosition) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].css('height', currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = $el.innerHeight();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = currentTallest < $el.innerHeight() ? $el.innerHeight() : currentTallest;
                }
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].css('height', currentTallest);
                }
            });
        });
    }
    if($storeCarousel.length) {
        self.debounceResize(updateStoreProducts);
        updateStoreProducts();
    }
}

export { initPluginFlickity };
