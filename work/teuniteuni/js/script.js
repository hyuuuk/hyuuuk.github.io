$(function () {
    $('.tab-header').each(function (element) {
        var slider_width,
            tab_width,
            left_position,
            $active,
            $content,
            $links = $(this).find('.tab-list'),
            $currentTab = $(this).find('a.on')

        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.addClass('on');
        $content = $($active[0].hash);
        $links.not($active).each(function () {
            $(this.hash).hide();
        });
        $(this).on('click', 'a', function (e) {
            $active.removeClass('on');
            $content.hide();
            $active = $(this);
            $content = $(this.hash);
            $active.addClass('on');
            $content.show();
            e.preventDefault();
        });
    });
    if (navigator.userAgent.match(/Trident\/7\./)) {
        $('body').on("mousewheel", function () {
            event.preventDefault();

            var wheelDelta = event.wheelDelta;

            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });

        $('body').keydown(function (e) {
            e.preventDefault(); // prevent the default action (scroll / move caret)
            var currentScrollPosition = window.pageYOffset;

            switch (e.which) {

                case 38: // up
                    window.scrollTo(0, currentScrollPosition - 120);
                    break;

                case 40: // down
                    window.scrollTo(0, currentScrollPosition + 120);
                    break;

                default:
                    return; // exit this handler for other keys
            }
        });
    }
});