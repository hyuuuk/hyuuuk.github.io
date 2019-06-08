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
    $(".click01").click(function () {
        $(this).next().toggleClass("active");
    });
    $(".dropdown .drop").click(function () {
        $(this).parent().toggleClass("on");
    });
    setTimeout(function () {
        $(".video-wrap .tx-wrap").fadeOut();
    }, 5000);
    $('#file-001').change(function() {
        var filepath = this.value;
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        $('.file-name').html(filename);
    });
    $('.sub03-con998').click(function(){
        $('.sub03-con3').removeClass('no-visible');
        $(this).hide();
    });
});