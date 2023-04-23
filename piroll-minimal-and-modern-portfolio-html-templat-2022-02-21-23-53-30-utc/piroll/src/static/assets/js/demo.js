/**
 * Demo Scripts.
 */
(function ($) {
    'use strict';

    /**
     * Click on load more works / posts button
     */
    $(document).on('click', '.nk-pagination > a', function (e) {
        var $this = $(this);
        var isWorks = $this.html() == 'Load More Works';
        var isPosts = $this.html() == 'Load More Posts';

        if (isWorks || isPosts) {
            e.preventDefault();
            $this.html('<i class="fa fa-cog fa-spin fa-fw"></i>');
            setTimeout(function () {
                $this.html(isWorks ? 'All Works Shown' : 'All Posts Shown');
            }, 1500);
        }
    });
}(jQuery));