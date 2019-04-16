$(function () {
    $('.btn-sideNav-open').click(function () {
        $('.wrapper').toggleClass('sideNav-open');
    });
    $('.btn-sideNav-close').click(function () {
        $('.wrapper').toggleClass('sideNav-open');
    });

    $('.footer .top a').click(function () {
        $('.footer .middle').toggleClass('on');
    })
    $('.sideNav .menu>li').hover(function () {
        $('.sideNav .menu>li').removeClass('on');
        $(this).toggleClass('on');
    })
    $('.sub .sideNav .menu>li , .sideNav_2').hover(function () {
        $('.wrapper').toggleClass('on');
    })
    $('.sideNav .menu>li , .sideNav_2').hover(function () {
        $('.sideNav_2').toggleClass('on');
    })

    $('.gnb_target_1').hover(function () {
        $('.drop').removeClass('on');
        $('.gnb_target_1_hover').addClass('on');
    })
    $('.gnb_target_2').hover(function () {
        $('.drop').removeClass('on');
        $('.gnb_target_2_hover').addClass('on');
    })
    $('.gnb_target_3').hover(function () {
        $('.drop').removeClass('on');
        $('.gnb_target_3_hover').addClass('on');
    })
    $('.gnb_target_4').hover(function () {
        $('.drop').removeClass('on');
        $('.gnb_target_4_hover').addClass('on');
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

});