$(function () {
    $('.btn-menu-open').click(function () {
        $('body').addClass('open-menu');
    });
    $('.btn-menu-close').click(function () {
        $('body').removeClass('open-menu');
    });
    $('.btn-cost').click(function () {
        $('.sub-con4').toggleClass('on');
    });
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

    $('.btn-scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});