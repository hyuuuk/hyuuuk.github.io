$(function () {
    $(".go-link a").click(function () {
        var scrollPosition = $($(this).attr("data-target")).offset().top;

        $("html,body").animate({
            scrollTop: scrollPosition
        }, 500);
    })
    $(".down-wrap .tx2").click(function () {
        $(this).parent().toggleClass("on");
    })
})
var prevScrollPos = window.pageYOffset;
$(window).scroll(function () {
    var currentScrollPos = window.pageYOffset;
    var menu = $('.bottom-btn');
    if (currentScrollPos > 100) {
        menu.addClass('active');
    }
    if (currentScrollPos < 100) {
        menu.addClass('active');
    } else if (prevScrollPos > currentScrollPos) {
        menu.addClass('active');
    } else {
        menu.removeClass('active');
    }
    prevScrollPos = currentScrollPos;
});