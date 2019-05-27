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
    $(".pay01 a").click(function () {
        $(".pay01 a").removeClass("bg-blue");
        $(this).addClass("bg-blue");
    });
    $(".sub01-title").click(function () {
        $(this).next().toggleClass("active");
    });
    $(".dropdown .drop").click(function () {
        $(this).parent().toggleClass("on");
    });
});