$(function () {
    $('.btn-sideNav-open').click(function () {
        $('.wrapper').toggleClass('sideNav-open');
    });
    $('.btn-sideNav-close').click(function () {
        $('.wrapper').toggleClass('sideNav-open');
    });

    $('.footer .top a').click(function(){
        $('.footer .middle').toggleClass('on');
    })
    $('.sideNav .menu>li').hover(function(){
        $('.sideNav .menu>li').removeClass('on');
        $(this).toggleClass('on');
    })

    $(".banner1").click(function () {
        $(this).parent().find(".banner2").animate({
            "left": "890px"
        });
        $(this).parent().find(".banner3").animate({
            "left": "1035px"
        });

    });
    $(".banner2").click(function () {
        $(this).animate({
            "left": "145px"
        });
        $(this).parent().find(".banner3").animate({
            "left": "1035px"
        });

    });
    $(".banner3").click(function () {
        $(this).parent().find(".banner2").animate({
            "left": "145px"
        });
        $(this).animate({
            "left": "290px"
        });
    });
    $('.swiper-wrapper').addClass( "disabled" );

});