$(function () {
    $('.btn-menu').click(function(){
        $('.header .left').toggleClass('on');
        $('.bg').toggleClass('on');
    });
    $('.bg').click(function(){
        $('.header .left').toggleClass('on');
        $(this).toggleClass('on');
    });
});