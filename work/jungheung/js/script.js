$(function () {
    $('.btn-menu-open').click(function () {
        $('body').addClass('open-menu');
    });
    $('.btn-menu-close').click(function () {
        $('body').removeClass('open-menu');
    });
    $("#datepicker").datepicker();
});